/**
 * @fileoverview Clinical visit summary dashboard.
 * @module telehealth-example/components/VisitSummaryDashboard
 *
 * Custom MUI dashboard for PatientSummary data. Renders chief complaints,
 * diagnoses as chips, medications table with color-coded action badges,
 * follow-ups table, vital signs grid, and visit summary. Uses custom layout
 * instead of ScorecardPanel because PatientSummary has no numeric scores.
 *
 * Supports an `embedded` prop to render without Container/Back button
 * when used as a sub-component inside PostMeetingView.
 */

import {
  Container, Button, Paper, Typography, Box, Chip, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

interface Medication {
  name: string;
  action: 'prescribed' | 'adjusted' | 'discontinued' | 'discussed';
  notes: string;
}

interface FollowUp {
  action: string;
  timeframe: string;
  provider: string;
}

interface VitalSign {
  name: string;
  value: string;
}

interface PatientSummary {
  chiefComplaints?: string[];
  diagnosesDiscussed?: string[];
  medications?: Medication[];
  followUps?: FollowUp[];
  vitalSigns?: VitalSign[];
  summary?: string;
}

interface VisitSummaryDashboardProps {
  data: unknown;
  onBack?: () => void;
  embedded?: boolean;
}

const ACTION_COLORS: Record<string, 'success' | 'info' | 'error' | 'default'> = {
  prescribed: 'success',
  adjusted: 'info',
  discontinued: 'error',
  discussed: 'default',
};

export function VisitSummaryDashboard({ data, onBack, embedded }: VisitSummaryDashboardProps) {
  const result = data as PatientSummary | null;

  if (!result) {
    if (embedded) return null;
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>Back</Button>
        <Typography>No data available.</Typography>
      </Container>
    );
  }

  const content = (
    <>
      {!embedded && <Typography variant="h4" gutterBottom>Visit Summary</Typography>}
      {embedded && <Typography variant="h5" gutterBottom>Clinical Notes</Typography>}

      {/* Summary */}
      {result.summary && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Summary</Typography>
          <Typography variant="body1">{result.summary}</Typography>
        </Paper>
      )}

      {/* Chief Complaints */}
      {result.chiefComplaints && result.chiefComplaints.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Chief Complaints</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {result.chiefComplaints.map((complaint, i) => (
              <Chip key={i} label={complaint} variant="outlined" />
            ))}
          </Box>
        </Paper>
      )}

      {/* Diagnoses */}
      {result.diagnosesDiscussed && result.diagnosesDiscussed.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Diagnoses Discussed</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {result.diagnosesDiscussed.map((dx, i) => (
              <Chip key={i} label={dx} color="primary" />
            ))}
          </Box>
        </Paper>
      )}

      {/* Medications */}
      {result.medications && result.medications.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Medications</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Medication</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>Notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.medications.map((med, i) => (
                  <TableRow key={i}>
                    <TableCell><Typography fontWeight={500}>{med.name}</Typography></TableCell>
                    <TableCell>
                      <Chip label={med.action} color={ACTION_COLORS[med.action] || 'default'} size="small" />
                    </TableCell>
                    <TableCell>{med.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {/* Follow-Ups */}
      {result.followUps && result.followUps.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Follow-Ups</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>Timeframe</TableCell>
                  <TableCell>Provider</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.followUps.map((fu, i) => (
                  <TableRow key={i}>
                    <TableCell>{fu.action}</TableCell>
                    <TableCell>{fu.timeframe}</TableCell>
                    <TableCell>{fu.provider}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {/* Vital Signs */}
      {result.vitalSigns && result.vitalSigns.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Vital Signs</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 2 }}>
            {result.vitalSigns.map((vs, i) => (
              <Box key={i} sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                <Typography variant="caption" color="text.secondary">{vs.name}</Typography>
                <Typography variant="h6">{vs.value}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </>
  );

  if (embedded) {
    return <Box>{content}</Box>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>Back</Button>
      {content}
    </Container>
  );
}
