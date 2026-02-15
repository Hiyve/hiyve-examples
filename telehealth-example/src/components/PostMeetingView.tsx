import { useState, useCallback } from 'react';
import {
  Container, Box, Button, Typography, Paper, TextField, IconButton,
  CircularProgress, Divider,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { MeetingSummary, useLiveContext } from '@hiyve/react-intelligence';
import { VisitSummaryDashboard } from './VisitSummaryDashboard';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface PostMeetingViewProps {
  data: unknown;
  transcript: string;
  responseId: string | null;
  roomName: string;
  userName: string;
  loading: boolean;
  onBack: () => void;
}

export function PostMeetingView({
  data,
  transcript,
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

      <Typography variant="h4" gutterBottom>Visit Analysis</Typography>

      {/* Meeting Summary */}
      {transcript && (
        <Box sx={{ mb: 3 }}>
          <MeetingSummary
            transcript={transcript}
            autoGenerate
            showSummary
            showKeyPoints
            showActionItems
            showDecisions
            showParticipants
          />
        </Box>
      )}

      {/* Clinical Visit Summary Dashboard */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Analyzing patient visit...</Typography>
        </Box>
      ) : data ? (
        <Box sx={{ mb: 3 }}>
          <VisitSummaryDashboard data={data} embedded />
        </Box>
      ) : null}

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
