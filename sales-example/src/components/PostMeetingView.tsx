import { useState, useCallback } from 'react';
import {
  Container, Box, Button, Typography, Paper, TextField, IconButton,
  CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  TrendingUp as StrengthIcon,
} from '@mui/icons-material';
import { ScorecardPanel, MeetingSummary, useLiveContext } from '@hiyve/react-intelligence';

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

  const result = data as { highlights?: string[] } | null;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>
        Back to Home
      </Button>

      <Typography variant="h4" gutterBottom>Sales Call Analysis</Typography>

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
