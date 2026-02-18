/**
 * @fileoverview Full Example - Waiting Screen Component
 * @module full-example/components/WaitingScreen
 *
 * Displays waiting room states for guests, showing either a waiting or
 * rejected view using the WaitingRoomGuest component.
 */

import { Container } from '@mui/material';
import { useConnection, useRoom, useWaitingRoom } from '@hiyve/react';
import { WaitingRoomGuest } from '@hiyve/react-ui';

export function WaitingScreen() {
  const { leaveRoom } = useConnection();
  const { room } = useRoom();
  const { isWaitingForAdmission, wasRejected } = useWaitingRoom();

  if (isWaitingForAdmission) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <WaitingRoomGuest
          status="waiting"
          roomName={room?.name}
          onCancel={leaveRoom}
        />
      </Container>
    );
  }

  if (wasRejected) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <WaitingRoomGuest
          status="rejected"
          roomName={room?.name}
          onLeave={leaveRoom}
        />
      </Container>
    );
  }

  return null;
}
