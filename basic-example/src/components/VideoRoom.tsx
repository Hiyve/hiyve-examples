/**
 * @fileoverview VideoRoom Component - Main Video Conferencing View
 * @module basic-example/components/VideoRoom
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
 * ## Layout Modes
 *
 * The VideoGrid supports multiple layout modes via the ControlBar:
 * - `grid` - Equal-sized tiles in a grid
 * - `speaker` - Active speaker large, others small
 * - `sidebar` - Main content with sidebar of participants
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
 *
 * @example
 * ```tsx
 * // Used in App.tsx when user is connected:
 * if (isInRoom) {
 *   return <VideoRoom userName={userName} />;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Full control over VideoGrid and ControlBar:
 * <VideoGrid
 *   layout="grid"              // Layout mode: grid, speaker, sidebar
 *   localUserName="John"       // Name shown on local tile
 *   showNames                  // Show names on all tiles
 *   showLocalFlip              // Button to mirror local video
 *   labelPosition="bottom-left"
 *   statusPosition="top-right" // Mute indicators
 *   controlPosition="bottom-right"
 * />
 *
 * <ControlBar
 *   onLeave={leaveRoom}        // Leave room callback
 *   showLeaveConfirmation      // Confirm before leaving
 *   showScreenShare            // Screen share button
 *   showLayoutSelector         // Layout dropdown
 *   layout={layout}            // Current layout
 *   onLayoutChange={setLayout} // Layout change handler
 * />
 * ```
 */
export function VideoRoom({ userName }: VideoRoomProps) {
  /**
   * Current layout mode for the video grid.
   * Controlled by the ControlBar's layout selector.
   */
  const [layout, setLayout] = useState<LayoutMode>('grid');

  /**
   * useRoom provides room state:
   * - room: { name, id, ... } or null
   * - isOwner: true if current user created the room
   * - isInRoom: true if connected (checked in App.tsx)
   */
  const { room, isOwner } = useRoom();

  /**
   * useConnection provides:
   * - leaveRoom(): disconnect and return to JoinForm
   * - Plus createRoom, joinRoom (used in JoinForm)
   */
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

      {/*
        VideoGrid from @hiyve/video-grid
        - Automatically shows all participants from ClientProvider context
        - Handles layout switching (grid, speaker, sidebar)
        - Shows local video with the same ID used in DevicePreview
      */}
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

      {/*
        ControlBar from @hiyve/control-bar
        - Audio/video mute buttons (automatic from context)
        - Screen share button
        - Layout selector dropdown
        - Leave button with optional confirmation
      */}
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

export default VideoRoom;
