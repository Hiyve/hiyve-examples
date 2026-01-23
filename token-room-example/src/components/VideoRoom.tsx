/**
 * VideoRoom Component
 *
 * Simple video room with basic controls - no sidebar, no advanced features.
 * Shows video grid, control bar, and invite link for owners.
 */

import { useState, useCallback } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Snackbar,
} from '@mui/material';
import { useRoom, useConnection } from '@hiyve/client-provider';
import { ControlBar, type LayoutMode } from '@hiyve/control-bar';
import { VideoGrid } from '@hiyve/video-grid';
import { InviteLinkDisplay } from './InviteLinkDisplay';

interface VideoRoomProps {
  userName: string;
}

export function VideoRoom({ userName }: VideoRoomProps) {
  const [layout, setLayout] = useState<LayoutMode>('grid');
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();

  const handleLeave = useCallback(() => {
    leaveRoom();
    // Clear URL params when leaving
    window.history.replaceState({}, '', window.location.pathname);
  }, [leaveRoom]);

  const handleCopySuccess = useCallback(() => {
    setSnackbarMessage('Invite link copied to clipboard!');
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {room?.name}
            {isOwner && (
              <Typography component="span" variant="caption" sx={{ ml: 1 }}>
                (Owner)
              </Typography>
            )}
          </Typography>

          {/* Invite link button for owners */}
          {isOwner && room && (
            <InviteLinkDisplay
              roomName={room.name}
              onCopySuccess={handleCopySuccess}
            />
          )}
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Video Grid */}
        <VideoGrid
          localVideoElementId="local-video"
          localUserName={userName}
          layout={layout}
          showLocalFlip
          showNames
          labelPosition="bottom-left"
          statusPosition="top-right"
          controlPosition="bottom-right"
          sx={{ flex: 1 }}
        />

        {/* Control Bar - minimal controls */}
        <ControlBar
          onLeave={handleLeave}
          showLeaveConfirmation
          showScreenShare
          showLayoutSelector
          layout={layout}
          onLayoutChange={setLayout}
        />
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={3000}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage}
      />
    </Box>
  );
}

export default VideoRoom;
