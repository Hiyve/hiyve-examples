/**
 * @fileoverview Sales Example - Post-Meeting Analysis View
 * @module sales-example/components/PostMeetingView
 *
 * Renders the post-call analysis screen with a sales scorecard, key highlights,
 * auto-generated call summary note, and an AI follow-up chat assistant.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Container, Box, Button, Typography, Paper, TextField, IconButton,
  CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  TrendingUp as StrengthIcon,
  CheckCircle as SavedIcon,
} from '@mui/icons-material';
import { ScorecardPanel, useLiveContext, useNoteGeneration } from '@hiyve/react-intelligence';

const SALES_NOTE_PROMPT = `Based on this sales call conversation, generate a structured sales call summary. Include the following sections where applicable:

## Call Objectives
What the sales representative aimed to achieve.

## Customer Profile
Key details about the prospect/customer discussed.

## Discussion Summary
Key topics covered during the call.

## Objections & Responses
Any objections raised and how they were handled.

## Next Steps
- Agreed follow-up actions
- Commitments made by either party
- Timeline for next contact

## Deal Assessment
Current deal stage, probability, and key risks.

Format the response as a clear, organized sales document using markdown.`;

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface PostMeetingViewProps {
  data: unknown;
  responseId: string | null;
  roomName: string;
  userName: string;
  loading: boolean;
  onBack: () => void;
}

export function PostMeetingView({
  data,
  responseId,
  roomName,
  userName,
  loading,
  onBack,
}: PostMeetingViewProps) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [querying, setQuerying] = useState(false);

  const { askWithResponseId } = useLiveContext(roomName, userName);
  const { generateNote, loading: noteGenerating, saved: noteSaved } = useNoteGeneration();

  // Generate and save note via server endpoint
  useEffect(() => {
    if (!responseId) return;
    generateNote({
      responseId,
      prompt: SALES_NOTE_PROMPT,
      roomName,
      userId: userName,
      userName,
      title: 'Sales Call Summary',
    });
  }, [responseId, roomName, userName, generateNote]);

  const handleSendQuery = useCallback(async () => {
    if (!query.trim() || !responseId) return;
    const userMessage = query.trim();
    setQuery('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setQuerying(true);
    try {
      const result = await askWithResponseId(responseId, userMessage);
      const aiContent = result?.success ? result.content : 'Unable to get a response.';
      setMessages((prev) => [...prev, { role: 'ai', content: aiContent }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', content: 'An error occurred while processing your question.' }]);
    } finally {
      setQuerying(false);
    }
  }, [query, responseId, askWithResponseId]);

  const result = data as { highlights?: string[] } | null;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>
        Back to Home
      </Button>

      <Typography variant="h4" gutterBottom>Sales Call Analysis</Typography>

      {/* Note save status */}
      {noteSaved && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <SavedIcon color="success" fontSize="small" />
          <Typography variant="body2" color="success.main">
            Call summary saved to Notes
          </Typography>
        </Box>
      )}
      {noteGenerating && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CircularProgress size={16} />
          <Typography variant="body2" color="text.secondary">
            Saving call summary...
          </Typography>
        </Box>
      )}

      {/* Sales Scorecard */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Analyzing sales call...</Typography>
        </Box>
      ) : data ? (
        <Box sx={{ mb: 3 }}>
          <ScorecardPanel data={data} variant="sales" />
          {result?.highlights && result.highlights.length > 0 && (
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>Key Highlights</Typography>
              <List dense>
                {result.highlights.map((h, i) => (
                  <ListItem key={i}>
                    <ListItemIcon><StrengthIcon color="success" /></ListItemIcon>
                    <ListItemText primary={h} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      ) : null}

      {/* AI Assistant */}
      {responseId && (
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom>Ask About This Call</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Ask follow-up questions about the sales call, objections raised, or coaching tips.
          </Typography>

          {messages.length > 0 && (
            <Box sx={{ maxHeight: 300, overflowY: 'auto', mb: 2 }}>
              {messages.map((msg, i) => (
                <Box
                  key={i}
                  sx={{
                    mb: 1,
                    p: 1.5,
                    borderRadius: 1,
                    bgcolor: msg.role === 'user' ? 'action.selected' : 'background.paper',
                    borderLeft: msg.role === 'ai' ? 3 : 0,
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {msg.role === 'user' ? 'You' : 'AI Coach'}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                    {msg.content}
                  </Typography>
                </Box>
              ))}
              {querying && (
                <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                  <CircularProgress size={16} sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">Thinking...</Typography>
                </Box>
              )}
            </Box>
          )}

          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="e.g., What objections were raised? How was the closing?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendQuery()}
              disabled={querying}
            />
            <IconButton
              color="primary"
              onClick={handleSendQuery}
              disabled={!query.trim() || querying}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
