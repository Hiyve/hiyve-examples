/**
 * WaitingScreen Component - Displays waiting room states for guests.
 */

import { Container } from '@mui/material';
import { useConnection, useRoom, useWaitingRoom } from '@hiyve/client-provider';
import { WaitingRoomGuest } from '@hiyve/waiting-room';

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
