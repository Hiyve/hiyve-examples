/**
 * @fileoverview Token Room Example - Video Room Component
 * @module token-room-example/components/VideoRoom
 *
 * The active video conferencing view displayed after a user creates or
 * joins a room. This is a deliberately minimal implementation -- no
 * sidebar, chat, or advanced features -- to demonstrate the core SDK
 * components needed for a working video room.
 *
 * ```
 * VideoRoom
 *   ├── AppBar (header)
 *   │   ├── Room name + "(Owner)" badge
 *   │   ├── LiveClock
 *   │   └── InviteLinkDisplay (owners only)
 *   ├── VideoGrid (all participant video tiles)
 *   ├── ControlBar (mic, camera, screen share, leave, layout)
 *   └── Snackbar (copy-success notification)
 * ```
 *
 * ## SDK Components
 * - **`VideoGrid`** (@hiyve/react-ui): Renders local and remote video
 *   tiles in the selected layout mode (grid, spotlight, etc.). The
 *   `localVideoElementId` must match the ID passed to `HiyveProvider`.
 * - **`ControlBar`** (@hiyve/react-ui): Pre-built control bar with
 *   toggles for mic, camera, screen share, and a leave button. Supports
 *   auto-hide after inactivity via `autoHideTimeout`.
 * - **`LiveClock`** (@hiyve/utilities): Displays a ticking clock.
 *
 * ## Container Breakpoints (`useContainerBreakpoint`)
 * Unlike CSS media queries that respond to the viewport width,
 * `useContainerBreakpoint` measures the width of a specific DOM
 * element (via `containerRef`). This is useful when the video area
 * does not span the full viewport (e.g. when a sidebar is open).
 * Here it hides the layout selector on narrow containers to keep
 * the control bar from overflowing.
 */

import { useState, useCallback } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Snackbar,
} from '@mui/material';
import { useRoom, useConnection } from '@hiyve/react';
import { ControlBar, type ControlBarLayoutMode } from '@hiyve/react-ui';
import { VideoGrid } from '@hiyve/react-ui';
import { LiveClock, useContainerBreakpoint } from '@hiyve/utilities';
import { InviteLinkDisplay } from './InviteLinkDisplay';

/**
 * Props for the {@link VideoRoom} component.
 */
interface VideoRoomProps {
  /** The display name of the local user, shown on their video tile in the grid. */
  userName: string;
}

export function VideoRoom({ userName }: VideoRoomProps) {
  const [layout, setLayout] = useState<ControlBarLayoutMode>('grid');
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();

  // Responsive container breakpoint: measures the video area's width (not viewport).
  // When the container is narrower than 600px, `isCompact` becomes true and we
  // hide the layout selector in the ControlBar to prevent overflow.
  const { isBelowBreakpoint: isCompact, containerRef } = useContainerBreakpoint(600);

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
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {room?.name}
            {isOwner && (
              <Typography component="span" variant="caption" sx={{ ml: 1 }}>
                (Owner)
              </Typography>
            )}
            <LiveClock variant="body2" sx={{ ml: 2, opacity: 0.7 }} />
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
      <Box ref={containerRef} sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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

        {/* Control Bar - minimal controls, hide layout selector on compact screens */}
        <ControlBar
          onLeave={handleLeave}
          showLeaveConfirmation
          showScreenShare
          showLayoutSelector={!isCompact}
          autoHideTimeout={3000}
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
