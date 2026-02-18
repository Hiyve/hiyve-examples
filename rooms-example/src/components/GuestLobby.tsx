/**
 * @fileoverview Rooms Example - Guest Lobby Component
 * @module rooms-example/components/GuestLobby
 *
 * Allows guests to enter their user ID and discover active rooms advertised
 * by hosts via the ActiveRoomsList component from @hiyve/react-rooms.
 */

import { useState, useCallback } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { ActiveRoomsList } from '@hiyve/react-rooms';
import type { CloudClient } from '@hiyve/cloud';
import type { ActiveRoom } from '@hiyve/core';

interface GuestLobbyProps {
  /** CloudClient instance for building the stream URL */
  cloudClient: CloudClient | null;
  /** Called when the guest clicks "Join" on an active room */
  onJoinRoom: (room: ActiveRoom, guestId: string) => void;
}

export function GuestLobby({ cloudClient, onJoinRoom }: GuestLobbyProps) {
  const [guestId, setGuestId] = useState(() => {
    return localStorage.getItem('hiyve-rooms-guestid') || '';
  });

  const handleGuestIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      setGuestId(value);
      localStorage.setItem('hiyve-rooms-guestid', value);
    },
    []
  );

  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFindRooms = useCallback(async () => {
    if (!cloudClient || !guestId) return;
    setLoading(true);
    try {
      const url = await cloudClient.getActiveRoomsStreamUrl(guestId);
      setStreamUrl(url);
    } catch (err) {
      console.error('[GuestLobby] Failed to get stream URL', err);
    } finally {
      setLoading(false);
    }
  }, [cloudClient, guestId]);

  if (!cloudClient) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">
          Cloud client not available. Check that the server is configured with an API key.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Join a Room
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'flex-start' }}>
        <TextField
          fullWidth
          label="Your User ID"
          helperText="Share this ID with the host so they can add you to their target list"
          value={guestId}
          onChange={handleGuestIdChange}
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleFindRooms}
          disabled={!guestId || loading}
          sx={{ mt: '1px', whiteSpace: 'nowrap' }}
        >
          {loading ? 'Searching...' : 'Find Rooms'}
        </Button>
      </Box>

      {streamUrl ? (
        <ActiveRoomsList
          streamUrl={streamUrl}
          onJoinRoom={(room) => onJoinRoom(room, guestId)}
          onError={(err) => console.error('[ActiveRoomsList Error]', err)}
        />
      ) : (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography color="text.secondary">
            Enter your User ID and click &quot;Find Rooms&quot; to discover active rooms.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
