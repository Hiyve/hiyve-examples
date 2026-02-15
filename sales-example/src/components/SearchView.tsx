/**
 * @fileoverview Semantic search view for past sales calls.
 * @module sales-example/components/SearchView
 *
 * Semantic search view using SearchPanel from @hiyve/react-intelligence
 * with sales-themed labels for searching across recorded sales call
 * transcripts using natural language queries and AI-powered answers.
 */

import { useState } from 'react';
import { Container, Button, TextField, Box, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { SearchPanel } from '@hiyve/react-intelligence';
import { useCloudClient } from '../cloudClient';

const STORAGE_KEYS = {
  userName: 'hiyve-sales-example-userName',
  roomName: 'hiyve-sales-example-roomName',
};

interface SearchViewProps {
  onBack: () => void;
}

export function SearchView({ onBack }: SearchViewProps) {
  const cloud = useCloudClient();
  const [userId, setUserId] = useState(() => localStorage.getItem(STORAGE_KEYS.userName) || '');
  const [roomName, setRoomName] = useState(() => localStorage.getItem(STORAGE_KEYS.roomName) || '');

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>Back</Button>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        In a production app, these fields would be provided by your authentication system.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="User ID"
          size="small"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          sx={{ flex: 1 }}
        />
        <TextField
          label="Room Name"
          size="small"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Optional — leave empty to search all"
          sx={{ flex: 1 }}
        />
      </Box>

      <SearchPanel
        cloud={cloud}
        userId={userId || undefined}
        roomName={roomName || undefined}
        labels={{
          title: 'Search Sales Calls',
          searchPlaceholder: 'Search across your sales call transcripts...',
          askPlaceholder: 'Ask a question about your sales calls...',
          emptyState: 'Search your recorded sales calls and transcripts using natural language.',
        }}
      />
    </Container>
  );
}
