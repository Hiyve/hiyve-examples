'use client';

/**
 * @fileoverview VideoRoom Component - Main Video Conferencing View
 * @module nextjs-example/components/VideoRoom
 *
 * The core video room component showing participants and controls.
 * This is the simplest possible implementation with just:
 *
 * - **Header** - Room name and owner indicator
 * - **VideoGrid** - Auto-layout grid of participant videos
 * - **ControlBar** - Media controls (mute, video, screen share, leave)
 *
 * ## Component Dependencies
 *
 * - `@hiyve/client-provider` - useRoom, useConnection hooks
 * - `@hiyve/video-grid` - VideoGrid component
 * - `@hiyve/control-bar` - ControlBar component
 *
 * @see {@link JoinForm} - Component shown before joining
 */

import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { useRoom, useConnection } from '@hiyve/client-provider';
import { ControlBar, type LayoutMode } from '@hiyve/control-bar';
import { VideoGrid } from '@hiyve/video-grid';

/**
 * Props for the VideoRoom component.
 */
interface VideoRoomProps {
  /**
   * The local user's display name.
   * Shown on their video tile.
   */
  userName: string;
}

/**
 * Main video room component.
 *
 * Displays the video grid with all participants and a control bar
 * for media controls. Supports layout switching and screen sharing.
 *
 * @param props - Component props
 * @param props.userName - Local user's display name
 */
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
