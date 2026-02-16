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
import { useLiveContext } from '@hiyve/react-intelligence';

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
  role: 'user' | 'ai';
  content: string;
}

interface PostMeetingViewProps {
  responseId: string | null;
  roomName: string;
  userName: string;
  onBack: () => void;
}

export function PostMeetingView({
  responseId,
  roomName,
  userName,
  onBack,
}: PostMeetingViewProps) {
  const [notes, setNotes] = useState('');
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [querying, setQuerying] = useState(false);

  const { askWithResponseId } = useLiveContext(roomName, userName);

  // Generate clinical notes on mount
  useEffect(() => {
    if (!responseId) return;

    let cancelled = false;
    setGenerating(true);
    setError(null);

    fetch('/api/generate-note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        responseId,
        prompt: CLINICAL_NOTE_PROMPT,
        roomName,
        userId: userName,
        userName,
        title: 'Clinical Notes',
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) {
          setNotes(result.content);
          setSaved(!!result.fileId);
        } else {
          setError(result.message || 'Failed to generate clinical notes.');
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Note generation failed:', err);
        setError('Failed to generate clinical notes. Please try again.');
      })
      .finally(() => {
        if (!cancelled) setGenerating(false);
      });

    return () => { cancelled = true; };
  }, [responseId, roomName, userName]);

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

      {/* Loading state */}
      {generating && (
        <Paper sx={{ p: 3, mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={24} />
          <Typography>Generating clinical notes...</Typography>
        </Paper>
      )}

      {/* Error state */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
      )}

      {/* Generated clinical notes */}
      {notes && (
        <Paper sx={{ p: 3, mb: 3 }}>
          {saved && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SavedIcon color="success" fontSize="small" />
              <Typography variant="body2" color="success.main">
                Saved to Notes
              </Typography>
            </Box>
          )}
          <Typography
            variant="body1"
            sx={{ whiteSpace: 'pre-wrap', '& h2, & h3': { mt: 2, mb: 1 } }}
            component="div"
          >
            {notes}
          </Typography>
        </Paper>
      )}

      {/* No responseId */}
      {!responseId && !generating && !notes && (
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
