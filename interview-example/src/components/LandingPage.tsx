/**
 * @fileoverview Interview Example - Landing Page
 * @module interview-example/components/LandingPage
 *
 * Displays the initial screen with card-based navigation to start an interview
 * or search past interview transcripts.
 */

import { Box, Container, Paper, Typography } from '@mui/material';
import {
  VideoCall as VideoCallIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

interface LandingPageProps {
  /** Callback to initiate a new interview call */
  onStartCall: () => void;
  /** Callback to navigate to past interview search */
  onSearch: () => void;
}

const cards = [
  {
    key: 'call',
    icon: <VideoCallIcon sx={{ fontSize: 48 }} />,
    title: 'Start an Interview',
    description: 'Launch a video interview with live AI intelligence, transcription, and real-time assessment.',
    action: 'onStartCall' as const,
  },
  {
    key: 'search',
    icon: <SearchIcon sx={{ fontSize: 48 }} />,
    title: 'Search Past Interviews',
    description: 'Semantic search across your recorded interview sessions and candidate assessments.',
    action: 'onSearch' as const,
  },
];

export function LandingPage({ onStartCall, onSearch }: LandingPageProps) {
  const actions = { onStartCall, onSearch };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Interview Platform
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        AI-powered interview assessment and candidate evaluation
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
        {cards.map((card) => (
          <Paper
            key={card.key}
            sx={{
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
            }}
            onClick={actions[card.action]}
          >
            <Box sx={{ color: 'primary.main', mb: 2 }}>{card.icon}</Box>
            <Typography variant="h6" gutterBottom>{card.title}</Typography>
            <Typography variant="body2" color="text.secondary">{card.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
