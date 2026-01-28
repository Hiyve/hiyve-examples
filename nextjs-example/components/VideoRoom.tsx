'use client';

/**
 * VideoRoom Component - Main Video Conferencing View
 *
 * Displays the video grid with all participants and controls.
 */

import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { useRoom, useConnection } from '@hiyve/client-provider';
import { ControlBar, type LayoutMode } from '@hiyve/control-bar';
import { VideoGrid } from '@hiyve/video-grid';

interface VideoRoomProps {
  userName: string;
}

export default function VideoRoom({ userName }: VideoRoomProps) {
  const [layout, setLayout] = useState<LayoutMode>('grid');
  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header with room name */}
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
        </Toolbar>
      </AppBar>

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

      {/* Control Bar */}
      <ControlBar
        onLeave={leaveRoom}
        showLeaveConfirmation
        showScreenShare
        showLayoutSelector
        layout={layout}
        onLayoutChange={setLayout}
      />
    </Box>
  );
}
