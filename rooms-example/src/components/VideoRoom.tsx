/**
 * @fileoverview Rooms Example - Video Room Component
 * @module rooms-example/components/VideoRoom
 *
 * Renders the in-room video experience with a VideoGrid, ControlBar, and
 * room header using components from @hiyve/react-ui.
 */

import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { useRoom } from '@hiyve/react';
import { ControlBar, type ControlBarLayoutMode, VideoGrid } from '@hiyve/react-ui';

interface VideoRoomProps {
  /** The local user's display name */
  userName: string;
  /** Called when the user leaves the room */
  onLeave: () => void;
}

export function VideoRoom({ userName, onLeave }: VideoRoomProps) {
  const [layout, setLayout] = useState<ControlBarLayoutMode>('grid');
  const { room, isOwner } = useRoom();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header with room name and leave button */}
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

      <ControlBar
        onLeave={onLeave}
        showLeaveConfirmation
        showScreenShare
        showLayoutSelector
        autoHideTimeout={3000}
        layout={layout}
        onLayoutChange={setLayout}
      />
    </Box>
  );
}
