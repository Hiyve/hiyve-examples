/**
 * AIPanel Component - AI-powered meeting intelligence using Hiyve Cloud.
 */

import { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  CircularProgress,
  Alert,
  Paper,
  Chip,
  IconButton,
  Tooltip,
  Collapse,
} from '@mui/material';
import {
  SmartToy as AIIcon,
  Summarize as SummaryIcon,
  ChecklistRtl as ActionItemsIcon,
  Send as SendIcon,
  Refresh as RefreshIcon,
  PlayArrow as StartIcon,
  Stop as StopIcon,
  ExpandMore as ExpandIcon,
  ExpandLess as CollapseIcon,
} from '@mui/icons-material';
import { useIntelligence, useLiveContext } from '@hiyve/cloud-provider';
import { useTranscription } from '@hiyve/client-provider';

interface AIPanelProps {
  /** User ID (cleaned email) for API validation */
  userId: string;
  /** Room name for live context */
  roomName: string;
  /** Whether the current user is the room owner */
  isOwner: boolean;
}

export function AIPanel({ userId, roomName, isOwner }: AIPanelProps) {
  // Query state
  const [queryText, setQueryText] = useState('');
  const [queryResult, setQueryResult] = useState<string | null>(null);

  // Summary state
  const [summary, setSummary] = useState<string | null>(null);

  // Action items state
  const [actionItems, setActionItems] = useState<string[] | null>(null);

  // Section expansion state
  const [sectionsExpanded, setSectionsExpanded] = useState({
    query: true,
    summary: false,
    actionItems: false,
    liveContext: false,
  });

  // Get transcriptions from client provider for context
  const { transcriptions } = useTranscription();

  // Intelligence hook for one-off AI operations
  const {
    query,
    getSummary,
    getActionItems,
    loading: intelligenceLoading,
    error: intelligenceError,
    clearError: clearIntelligenceError,
  } = useIntelligence(userId);

  // Live context hook for real-time AI
  const {
    session: liveSession,
    loading: liveLoading,
    error: liveError,
    isInitialized: isLiveContextActive,
    initialize: initializeLiveContext,
    ask: askLiveContext,
    finalize: finalizeLiveContext,
    clearError: clearLiveError,
  } = useLiveContext(roomName, userId);

  // Build transcript text from transcriptions
  const getTranscriptText = useCallback(() => {
    if (!transcriptions || transcriptions.length === 0) {
      return '';
    }
    return transcriptions
      .map((t) => `${t.userId || 'Unknown'}: ${t.text}`)
      .join('\n');
  }, [transcriptions]);

  // Handle AI query
  const handleQuery = useCallback(async () => {
    if (!queryText.trim()) return;

    const context = getTranscriptText();
    const result = await query(queryText, {
      context: context || undefined,
      roomName: roomName || undefined,
    });

    if (result) {
      setQueryResult(result.content);
    }
  }, [queryText, query, getTranscriptText, roomName]);

  // Handle summary generation
  const handleGenerateSummary = useCallback(async () => {
    const transcript = getTranscriptText();
    if (!transcript) {
      setSummary('No transcription available to summarize.');
      return;
    }

    const result = await getSummary(transcript, {
      roomName: roomName || undefined,
      maxLength: 200,
    });

    if (result) {
      setSummary(result);
    }
  }, [getSummary, getTranscriptText, roomName]);

  // Handle action items extraction
  const handleExtractActionItems = useCallback(async () => {
    const transcript = getTranscriptText();
    if (!transcript) {
      setActionItems(['No transcription available to extract action items from.']);
      return;
    }

    const result = await getActionItems(transcript, {
      roomName: roomName || undefined,
    });

    if (result) {
      // Handle both string and array formats
      if (Array.isArray(result)) {
        setActionItems(result.map((item) =>
          typeof item === 'string' ? item : item.action || JSON.stringify(item)
        ));
      } else {
        setActionItems([String(result)]);
      }
    }
  }, [getActionItems, getTranscriptText, roomName]);

  // Handle live context start/stop
  const handleToggleLiveContext = useCallback(async () => {
    if (isLiveContextActive) {
      await finalizeLiveContext('user_stopped');
    } else {
      await initializeLiveContext();
    }
  }, [isLiveContextActive, initializeLiveContext, finalizeLiveContext]);

  // Handle live context query
  const [liveQueryText, setLiveQueryText] = useState('');
  const [liveQueryResult, setLiveQueryResult] = useState<string | null>(null);

  const handleLiveQuery = useCallback(async () => {
    if (!liveQueryText.trim() || !isLiveContextActive) return;

    const result = await askLiveContext(liveQueryText);
    if (result) {
      setLiveQueryResult(result.content);
    }
  }, [liveQueryText, isLiveContextActive, askLiveContext]);

  // Toggle section expansion
  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const loading = intelligenceLoading || liveLoading;
  const error = intelligenceError || liveError;

  return (
    <Box sx={{ p: 2, height: '100%', overflow: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI Intelligence
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        AI-powered meeting intelligence using Hiyve Cloud
      </Typography>

      {error && (
        <Alert
          severity="error"
          onClose={() => {
            clearIntelligenceError();
            clearLiveError();
          }}
          sx={{ mb: 2 }}
        >
          {error.message}
        </Alert>
      )}

      {/* Ad-hoc Query Section */}
      <Paper variant="outlined" sx={{ mb: 2 }}>
        <Box
          sx={{
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => toggleSection('query')}
        >
          <AIIcon sx={{ mr: 1 }} fontSize="small" />
          <Typography variant="subtitle2" sx={{ flex: 1 }}>
            Ask AI
          </Typography>
          <IconButton size="small">
            {sectionsExpanded.query ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
        </Box>
        <Collapse in={sectionsExpanded.query}>
          <Divider />
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask a question about the meeting..."
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
              disabled={loading}
              sx={{ mb: 1 }}
            />
            <Button
              variant="contained"
              size="small"
              startIcon={loading ? <CircularProgress size={16} /> : <SendIcon />}
              onClick={handleQuery}
              disabled={loading || !queryText.trim()}
            >
              Ask
            </Button>
            {queryResult && (
              <Paper
                variant="outlined"
                sx={{ mt: 2, p: 2, bgcolor: 'action.hover' }}
              >
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {queryResult}
                </Typography>
              </Paper>
            )}
          </Box>
        </Collapse>
      </Paper>

      {/* Summary Section - Owner only */}
      {isOwner && (
        <Paper variant="outlined" sx={{ mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => toggleSection('summary')}
          >
            <SummaryIcon sx={{ mr: 1 }} fontSize="small" />
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Meeting Summary
            </Typography>
            <IconButton size="small">
              {sectionsExpanded.summary ? <CollapseIcon /> : <ExpandIcon />}
            </IconButton>
          </Box>
          <Collapse in={sectionsExpanded.summary}>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={loading ? <CircularProgress size={16} /> : <RefreshIcon />}
                onClick={handleGenerateSummary}
                disabled={loading}
              >
                Generate Summary
              </Button>
              {summary && (
                <Paper
                  variant="outlined"
                  sx={{ mt: 2, p: 2, bgcolor: 'action.hover' }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                    {summary}
                  </Typography>
                </Paper>
              )}
            </Box>
          </Collapse>
        </Paper>
      )}

      {/* Action Items Section - Owner only */}
      {isOwner && (
        <Paper variant="outlined" sx={{ mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => toggleSection('actionItems')}
          >
            <ActionItemsIcon sx={{ mr: 1 }} fontSize="small" />
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Action Items
            </Typography>
            <IconButton size="small">
              {sectionsExpanded.actionItems ? <CollapseIcon /> : <ExpandIcon />}
            </IconButton>
          </Box>
          <Collapse in={sectionsExpanded.actionItems}>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={loading ? <CircularProgress size={16} /> : <RefreshIcon />}
                onClick={handleExtractActionItems}
                disabled={loading}
              >
                Extract Action Items
              </Button>
              {actionItems && actionItems.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  {actionItems.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      size="small"
                      sx={{ m: 0.5, maxWidth: '100%' }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Collapse>
        </Paper>
      )}

      {/* Live Context Section */}
      <Paper variant="outlined">
        <Box
          sx={{
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => toggleSection('liveContext')}
        >
          <AIIcon sx={{ mr: 1 }} fontSize="small" color={isLiveContextActive ? 'success' : 'inherit'} />
          <Typography variant="subtitle2" sx={{ flex: 1 }}>
            Live Context AI
          </Typography>
          {isLiveContextActive && (
            <Chip label="Active" size="small" color="success" sx={{ mr: 1 }} />
          )}
          <IconButton size="small">
            {sectionsExpanded.liveContext ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
        </Box>
        <Collapse in={sectionsExpanded.liveContext}>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Live Context maintains real-time meeting context for more accurate AI responses.
              {liveSession && (
                <> Session: {liveSession.sessionKey}</>
              )}
            </Typography>

            <Tooltip title={isLiveContextActive ? 'Stop live context' : 'Start live context'}>
              <Button
                variant={isLiveContextActive ? 'outlined' : 'contained'}
                size="small"
                color={isLiveContextActive ? 'error' : 'primary'}
                startIcon={
                  liveLoading ? (
                    <CircularProgress size={16} />
                  ) : isLiveContextActive ? (
                    <StopIcon />
                  ) : (
                    <StartIcon />
                  )
                }
                onClick={handleToggleLiveContext}
                disabled={liveLoading}
                sx={{ mb: 2 }}
              >
                {isLiveContextActive ? 'Stop' : 'Start'} Live Context
              </Button>
            </Tooltip>

            {isLiveContextActive && (
              <>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Ask with live context..."
                  value={liveQueryText}
                  onChange={(e) => setLiveQueryText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLiveQuery()}
                  disabled={liveLoading}
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="contained"
                  size="small"
                  startIcon={liveLoading ? <CircularProgress size={16} /> : <SendIcon />}
                  onClick={handleLiveQuery}
                  disabled={liveLoading || !liveQueryText.trim()}
                >
                  Ask
                </Button>
                {liveQueryResult && (
                  <Paper
                    variant="outlined"
                    sx={{ mt: 2, p: 2, bgcolor: 'action.hover' }}
                  >
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {liveQueryResult}
                    </Typography>
                  </Paper>
                )}
              </>
            )}
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
}
