/**
 * @fileoverview Rooms Example - Main Application Component
 * @module rooms-example/App
 *
 * Routes between host dashboard, guest lobby, and video room views based on
 * tab selection and connection state. Manages room advertising via CloudClient.
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import { useConnection, useRoom, useCloudClient } from '@hiyve/react';
import { Box, CircularProgress, Typography, Tabs, Tab } from '@mui/material';
import type { StoredRoom, ActiveRoom } from '@hiyve/core';
import { RoomDashboard } from './components/RoomDashboard';
import { GuestLobby } from './components/GuestLobby';
import { VideoRoom } from './components/VideoRoom';

/** Default user name — in a real app this would come from auth */
const DEFAULT_USER_NAME = 'User';

type AppTab = 'host' | 'guest';

function App() {
  const { isConnecting, createRoom, joinRoom, leaveRoom } = useConnection();
  const { isInRoom } = useRoom();

  // ---- Persisted user state ----

  const [userName] = useState(() => {
    return localStorage.getItem('hiyve-rooms-username') || DEFAULT_USER_NAME;
  });

  const [userId] = useState(() => {
    let id = localStorage.getItem('hiyve-rooms-userid');
    if (!id) {
      id = `user-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem('hiyve-rooms-userid', id);
    }
    return id;
  });

  // ---- Tab state ----

  const [tab, setTab] = useState<AppTab>(() => {
    return (localStorage.getItem('hiyve-rooms-tab') as AppTab) || 'host';
  });

  const handleTabChange = useCallback((_: React.SyntheticEvent, newTab: AppTab) => {
    setTab(newTab);
    localStorage.setItem('hiyve-rooms-tab', newTab);
  }, []);

  // ---- CloudClient (from HiyveProvider) ----

  const cloudClient = useCloudClient();

  // ---- Room advertising lifecycle ----

  const currentRoomRef = useRef<StoredRoom | null>(null);
  const isHostRef = useRef(false);

  const handleStartRoom = useCallback(
    (room: StoredRoom) => {
      currentRoomRef.current = room;
      isHostRef.current = true;
      createRoom(room.roomName, userId);
    },
    [createRoom, userId]
  );

  const handleJoinRoom = useCallback(
    (room: ActiveRoom, guestId: string) => {
      isHostRef.current = false;
      joinRoom(room.name, guestId);
    },
    [joinRoom]
  );

  // Advertise when entering room as host, remove when leaving
  useEffect(() => {
    if (!cloudClient) return;

    if (isInRoom && isHostRef.current && currentRoomRef.current) {
      const room = currentRoomRef.current;
      const targetUserIds = Array.isArray(room.metadata?.targetUserIds)
        ? (room.metadata.targetUserIds as string[])
        : [];

      // Skip advertising if no target user IDs configured
      if (targetUserIds.length === 0) return;

      cloudClient
        .advertiseRoom({
          name: room.roomName,
          ownerDisplayName: userName,
          targetUserIds,
        })
        .catch((err) => console.error('[Advertise Error]', err));

      return () => {
        cloudClient
          .removeAdvertisedRoom(room.roomName)
          .catch((err) => console.error('[Remove Advertisement Error]', err));
      };
    }
  }, [isInRoom, cloudClient, userName]);

  const handleLeave = useCallback(() => {
    leaveRoom();
    currentRoomRef.current = null;
    isHostRef.current = false;
  }, [leaveRoom]);

  // ---- Render ----

  // Loading state while WebRTC connection is being established
  if (isConnecting) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography variant="h6">Connecting...</Typography>
      </Box>
    );
  }

  // Connected to a room — show the video room
  if (isInRoom) {
    return <VideoRoom userName={userName} onLeave={handleLeave} />;
  }

  // Not in a room — show tabbed dashboard
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        sx={{ mb: 3 }}
      >
        <Tab label="Host" value="host" />
        <Tab label="Join" value="guest" />
      </Tabs>

      {tab === 'host' && (
        <RoomDashboard
          userId={userId}
          onStartRoom={handleStartRoom}
        />
      )}

      {tab === 'guest' && (
        <GuestLobby
          cloudClient={cloudClient}
          onJoinRoom={handleJoinRoom}
        />
      )}
    </Box>
  );
}

export default App;
