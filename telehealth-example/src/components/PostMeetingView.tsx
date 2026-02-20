/**
 * @fileoverview Telehealth Example - Post-Meeting Clinical Notes View
 * @module telehealth-example/components/PostMeetingView
 *
 * Generates structured clinical notes via the useNoteGeneration hook
 * and displays them as plain text. Includes an AI follow-up chat for
 * asking questions about the completed visit.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Container, Box, Button, Typography, Paper, TextField, IconButton,
  CircularProgress, Divider, Alert,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  CheckCircle as SavedIcon,
} from '@mui/icons-material';
import { useLiveContext, useNoteGeneration } from '@hiyve/react-intelligence';

const CLINICAL_NOTE_PROMPT = `Based on this patient visit conversation, generate a structured clinical note. Include the following sections where applicable:

## Chief Complaint
The primary reason for the visit.

## History of Present Illness
Relevant history discussed during the visit.

## Assessment
Clinical assessment and diagnoses discussed.

## Plan
Treatment plan, including:
- Medications prescribed, adjusted, or discontinued
- Follow-up appointments and referrals
- Patient education and instructions

## Vital Signs
Any vital signs mentioned during the visit.

Format the response as a clear, organized clinical document using markdown.`;

interface Message {
  /** Whether the message is from the user or AI assistant */
  role: 'user' | 'ai';
  /** The message text content */
  content: string;
}

interface PostMeetingViewProps {
  /** Cloud response ID for fetching clinical notes and analysis */
  responseId: string | null;
  /** Name of the telehealth consultation room */
  roomName: string;
  /** Display name of the healthcare provider */
  userName: string;
  /** Callback to return to the landing page */
  onBack: () => void;
}

export function PostMeetingView({
  responseId,
  roomName,
  userName,
  onBack,
}: PostMeetingViewProps) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [querying, setQuerying] = useState(false);

  const { askWithResponseId } = useLiveContext(roomName, userName);
  const { generateNote, loading: noteGenerating, saved: noteSaved } = useNoteGeneration();

  // Generate clinical notes on mount
  useEffect(() => {
    if (!responseId) return;
    generateNote({
      responseId,
      prompt: CLINICAL_NOTE_PROMPT,
      roomName,
      userId: userName,
      userName,
      title: 'Clinical Notes',
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

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>
        Back to Home
      </Button>

      <Typography variant="h4" gutterBottom>Clinical Notes</Typography>

      {/* Note save status */}
      {noteSaved && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <SavedIcon color="success" fontSize="small" />
          <Typography variant="body2" color="success.main">
            Clinical notes saved to Notes
          </Typography>
        </Box>
      )}
      {noteGenerating && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CircularProgress size={16} />
          <Typography variant="body2" color="text.secondary">
            Saving clinical notes...
          </Typography>
        </Box>
      )}

      {/* No responseId */}
      {!responseId && !noteGenerating && (
        <Alert severity="info" sx={{ mb: 3 }}>
          No clinical notes were generated. You can use the assistant below to ask questions about the visit.
        </Alert>
      )}

      {/* AI Assistant */}
      {responseId && (
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom>Ask About This Visit</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Ask follow-up questions about the patient visit, diagnoses, or treatment recommendations.
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
                    {msg.role === 'user' ? 'You' : 'AI Assistant'}
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
              placeholder="e.g., What medications were discussed? What are the follow-up recommendations?"
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
