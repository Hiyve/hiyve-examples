/**
 * @fileoverview Interview Example - Post-Meeting Analysis View
 * @module interview-example/components/PostMeetingView
 *
 * Renders the post-interview analysis screen with an interview scorecard, hiring
 * recommendation, strengths and concerns lists, and an AI follow-up chat assistant.
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Container, Box, Button, Typography, Paper, TextField, IconButton,
  CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText, Chip,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  ThumbUp as StrengthIcon,
  Warning as ConcernIcon,
  CheckCircle as SavedIcon,
} from '@mui/icons-material';
import { ScorecardPanel, useLiveContext, useNoteGeneration } from '@hiyve/react-intelligence';

const INTERVIEW_NOTE_PROMPT = `Based on this interview conversation, generate a structured interview assessment. Include the following sections where applicable:

## Candidate Overview
Brief background and the role being interviewed for.

## Technical Competency
Assessment of technical skills and knowledge demonstrated.

## Communication & Problem-Solving
How effectively the candidate communicated and approached problems.

## Cultural Fit
Observations about alignment with team values and work style.

## Strengths
- Key strengths demonstrated during the interview

## Areas of Concern
- Potential concerns or gaps identified

## Hiring Recommendation
Overall recommendation with supporting rationale.

Format the response as a clear, organized assessment document using markdown.`;

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

const RECOMMENDATION_COLORS: Record<string, 'success' | 'info' | 'warning' | 'error'> = {
  strong_yes: 'success',
  yes: 'success',
  maybe: 'warning',
  no: 'error',
  strong_no: 'error',
};

const RECOMMENDATION_LABELS: Record<string, string> = {
  strong_yes: 'Strong Yes',
  yes: 'Yes',
  maybe: 'Maybe',
  no: 'No',
  strong_no: 'Strong No',
};

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
      prompt: INTERVIEW_NOTE_PROMPT,
      roomName,
      userId: userName,
      userName,
      title: 'Interview Assessment',
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

  const result = data as {
    hiringRecommendation?: string;
    strengths?: string[];
    concerns?: string[];
  } | null;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>
        Back to Home
      </Button>

      <Typography variant="h4" gutterBottom>Interview Analysis</Typography>

      {/* Note save status */}
      {noteSaved && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <SavedIcon color="success" fontSize="small" />
          <Typography variant="body2" color="success.main">
            Interview assessment saved to Notes
          </Typography>
        </Box>
      )}
      {noteGenerating && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CircularProgress size={16} />
          <Typography variant="body2" color="text.secondary">
            Saving interview assessment...
          </Typography>
        </Box>
      )}

      {/* Interview Scorecard */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Analyzing interview...</Typography>
        </Box>
      ) : data ? (
        <Box sx={{ mb: 3 }}>
          <ScorecardPanel data={data} variant="interview" />

          {result?.hiringRecommendation && (
            <Paper sx={{ p: 3, mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h6">Hiring Recommendation:</Typography>
              <Chip
                label={RECOMMENDATION_LABELS[result.hiringRecommendation] || result.hiringRecommendation}
                color={RECOMMENDATION_COLORS[result.hiringRecommendation] || 'default'}
                size="medium"
              />
            </Paper>
          )}

          {result?.strengths && result.strengths.length > 0 && (
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>Strengths</Typography>
              <List dense>
                {result.strengths.map((s, i) => (
                  <ListItem key={i}>
                    <ListItemIcon><StrengthIcon color="success" /></ListItemIcon>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {result?.concerns && result.concerns.length > 0 && (
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>Concerns</Typography>
              <List dense>
                {result.concerns.map((c, i) => (
                  <ListItem key={i}>
                    <ListItemIcon><ConcernIcon color="warning" /></ListItemIcon>
                    <ListItemText primary={c} />
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
          <Typography variant="h6" gutterBottom>Ask About This Interview</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Ask follow-up questions about the candidate's performance, technical depth, or cultural fit.
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
              placeholder="e.g., Did the candidate demonstrate leadership? What were the key technical answers?"
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
