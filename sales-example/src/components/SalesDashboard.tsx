/**
 * @fileoverview Sales scorecard dashboard with analysis results.
 * @module sales-example/components/SalesDashboard
 *
 * Displays the SalesScorecard analysis results using ScorecardPanel
 * with variant='sales'. Shows the overall score gauge, dimension
 * breakdowns, and key highlights extracted from the transcript.
 */

import { Container, Button, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowBack as ArrowBackIcon, TrendingUp as StrengthIcon } from '@mui/icons-material';
import { ScorecardPanel } from '@hiyve/react-intelligence';

interface SalesDashboardProps {
  /** Sales analysis data to display in the dashboard */
  data: unknown;
  /** Callback to return to the landing page */
  onBack: () => void;
}

export function SalesDashboard({ data, onBack }: SalesDashboardProps) {
  const result = data as { highlights?: string[]; summary?: string } | null;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>Back</Button>

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
    </Container>
  );
}
