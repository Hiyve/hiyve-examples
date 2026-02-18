/**
 * @fileoverview Rooms Example - Room Dashboard Component
 * @module rooms-example/components/RoomDashboard
 *
 * Local wrapper around the RoomsList component from @hiyve/react-rooms,
 * providing stored room CRUD and per-room target user ID management.
 */

import { Box, Typography } from '@mui/material';
import { RoomsList } from '@hiyve/react-rooms';
import type { StoredRoom } from '@hiyve/core';

interface RoomDashboardProps {
  /** User ID for room ownership */
  userId: string;
  /** Called when a room's "Start" button is clicked */
  onStartRoom: (room: StoredRoom) => void;
}

export function RoomDashboard({ userId, onStartRoom }: RoomDashboardProps) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Room Dashboard
      </Typography>

      <RoomsList
        userId={userId}
        onStartRoom={onStartRoom}
        showTargetUserIds
        onError={(err) => console.error('[RoomsList Error]', err)}
      />
    </Box>
  );
}
