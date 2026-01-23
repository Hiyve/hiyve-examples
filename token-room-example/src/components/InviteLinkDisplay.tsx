/**
 * InviteLinkDisplay Component
 *
 * Creates and displays a shareable invite link for the room.
 * Uses the client's createJoinToken API to generate a token.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Share as ShareIcon,
  ContentCopy as CopyIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useClientContext } from '@hiyve/client-provider';

interface InviteLinkDisplayProps {
  roomName: string;
  onCopySuccess?: () => void;
}

type TokenType = 'group' | 'individual';
type ExpirationOption = 3600 | 86400 | 604800; // 1 hour, 1 day, 1 week

const EXPIRATION_OPTIONS: { value: ExpirationOption; label: string }[] = [
  { value: 3600, label: '1 hour' },
  { value: 86400, label: '1 day' },
  { value: 604800, label: '1 week' },
];

export function InviteLinkDisplay({ roomName, onCopySuccess }: InviteLinkDisplayProps) {
  const [open, setOpen] = useState(false);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tokenType, setTokenType] = useState<TokenType>('group');
  const [expiresIn, setExpiresIn] = useState<ExpirationOption>(86400);

  const { client, participants } = useClientContext();

  // Generate invite link when dialog opens
  useEffect(() => {
    if (!open || !client) return;

    const generateLink = async () => {
      setIsGenerating(true);
      setError(null);
      setInviteLink(null);

      try {
        // Get local user ID from participants
        const userId = participants.localUserId;
        if (!userId) {
          throw new Error('Not connected to room');
        }

        // Create join token using client API
        const result = await client.createJoinToken({
          userId,
          roomName,
          type: tokenType,
          expiresIn,
        });

        if (!result || !result.joinToken) {
          throw new Error('Failed to create invite token');
        }

        // Build invite URL
        const baseUrl = window.location.origin;
        const inviteUrl = `${baseUrl}/join?joinToken=${result.joinToken}&region=${result.roomRegion}`;
        setInviteLink(inviteUrl);
      } catch (err) {
        console.error('Failed to generate invite link:', err);
        setError(err instanceof Error ? err.message : 'Failed to generate invite link');
      } finally {
        setIsGenerating(false);
      }
    };

    generateLink();
  }, [open, client, roomName, participants.localUserId, tokenType, expiresIn]);

  const handleCopy = useCallback(() => {
    if (!inviteLink) return;

    navigator.clipboard.writeText(inviteLink).then(() => {
      onCopySuccess?.();
    });
  }, [inviteLink, onCopySuccess]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setInviteLink(null);
    setError(null);
  }, []);

  return (
    <>
      <Tooltip title="Get invite link">
        <IconButton onClick={() => setOpen(true)} color="primary">
          <ShareIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Invite Others
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Share this link with others to invite them to your room.
          </Typography>

          {/* Token options */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={tokenType}
                label="Type"
                onChange={(e) => setTokenType(e.target.value as TokenType)}
                disabled={isGenerating}
              >
                <MenuItem value="group">Group</MenuItem>
                <MenuItem value="individual">Individual</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Expires</InputLabel>
              <Select
                value={expiresIn}
                label="Expires"
                onChange={(e) => setExpiresIn(e.target.value as ExpirationOption)}
                disabled={isGenerating}
              >
                {EXPIRATION_OPTIONS.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            {tokenType === 'group'
              ? 'Anyone with this link can join'
              : 'Only one person can use this link'}
          </Typography>

          {/* Invite link display */}
          {isGenerating ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 3 }}>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              <Typography>Generating invite link...</Typography>
            </Box>
          ) : inviteLink ? (
            <TextField
              fullWidth
              value={inviteLink}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <Tooltip title="Copy to clipboard">
                    <IconButton onClick={handleCopy} edge="end">
                      <CopyIcon />
                    </IconButton>
                  </Tooltip>
                ),
              }}
              sx={{ '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
            />
          ) : null}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            variant="contained"
            onClick={handleCopy}
            disabled={!inviteLink || isGenerating}
            startIcon={<CopyIcon />}
          >
            Copy Link
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InviteLinkDisplay;
