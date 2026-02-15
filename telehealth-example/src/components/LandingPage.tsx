import { Box, Container, Paper, Typography } from '@mui/material';
import {
  LocalHospital as LocalHospitalIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

interface LandingPageProps {
  onStartCall: () => void;
  onSearch: () => void;
}

const cards = [
  {
    key: 'call',
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    title: 'Start a Visit',
    description: 'Launch a telehealth video visit with live AI intelligence, transcription, and real-time clinical notes.',
    action: 'onStartCall' as const,
  },
  {
    key: 'search',
    icon: <SearchIcon sx={{ fontSize: 48 }} />,
    title: 'Search Past Visits',
    description: 'Semantic search across your recorded patient visits and clinical transcripts.',
    action: 'onSearch' as const,
  },
];

export function LandingPage({ onStartCall, onSearch }: LandingPageProps) {
  const actions = { onStartCall, onSearch };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Telehealth Visit Notes
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        AI-powered clinical documentation and visit analysis
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
