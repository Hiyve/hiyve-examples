/**
 * VideoRoom Component
 *
 * Main in-room view containing:
 * - Header with room info, recording/streaming indicators, waiting room controls
 * - Video grid with all participants
 * - Control bar for media, recording, streaming, screen share
 * - Collapsible sidebar (participants, chat, settings, files, captions)
 *
 * @example
 * ```tsx
 * import { VideoRoom } from './components/VideoRoom';
 *
 * function App() {
 *   const { isInRoom } = useRoom();
 *
 *   if (isInRoom) {
 *     return <VideoRoom userName="John" />;
 *   }
 *   return <JoinForm />;
 * }
 * ```
 *
 * ## Hooks Used
 * - `useRoom()` - room info, isOwner
 * - `useConnection()` - leaveRoom
 * - `useRecording()` - isRecording, recordingDuration
 * - `useStreaming()` - isStreaming, streamingDuration
 * - `useChat()` - unreadCount
 * - `useWaitingRoom()` - waitingUsers
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Snackbar,
} from '@mui/material';
import {
  ContentCopy as CopyIcon,
  MeetingRoom as WaitingRoomIcon,
  Slideshow as PresentationIcon,
} from '@mui/icons-material';
import { LiveClock, TooltipIconButton, useContainerBreakpoint } from '@hiyve/utilities';
import {
  useRoom,
  useConnection,
  useRecording,
  useStreaming,
  useWaitingRoom,
  useLayout,
} from '@hiyve/client-provider';
import {
  ControlBar,
  defaultIntelligenceConfig,
  DEFAULT_LAYOUTS,
  type LayoutMode,
  type IntelligenceConfig,
  type LayoutDefinition,
} from '@hiyve/control-bar';
import {
  VideoGrid,
  type CustomLayoutHandler,
  type TilePosition,
  type VideoTileOverlayElement,
  type LocalVideoTileOverlayElement,
} from '@hiyve/video-grid';
import { WaitingRoomAdmittance } from '@hiyve/waiting-room';
import {
  RecordingIndicator,
  type RecordingIndicatorColors,
  type RecordingIndicatorStyles,
} from '@hiyve/recording';
import { StreamingIndicator, StreamingUrlDisplay } from '@hiyve/streaming';
import { Sidebar } from './Sidebar';

interface VideoRoomProps {
  /** Local user's display name */
  userName: string;
}

export function VideoRoom({ userName }: VideoRoomProps) {
  // UI state
  const [layout, setLayout] = useState<LayoutMode>('grid');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [waitingRoomAnchorEl, setWaitingRoomAnchorEl] = useState<HTMLElement | null>(null);

  // Intelligence configuration
  const [intelligenceConfig, setIntelligenceConfig] = useState<IntelligenceConfig>(
    defaultIntelligenceConfig
  );

  // Get state from ClientProvider
  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();
  const { isRecording, recordingDuration } = useRecording();
  const { isStreaming, streamingDuration, streamingUrl, switchStreamingUser } = useStreaming();
  const { waitingUsers } = useWaitingRoom();
  const { dominantSpeaker } = useLayout();

  // Sync dominant speaker with streaming presenter
  // When the owner sets a dominant speaker, switch the streaming user to match
  useEffect(() => {
    if (isStreaming && isOwner && dominantSpeaker) {
      switchStreamingUser(dominantSpeaker);
    }
  }, [dominantSpeaker, isStreaming, isOwner, switchStreamingUser]);

  // Responsive container breakpoint
  const { isBelowBreakpoint: isCompact, containerRef } = useContainerBreakpoint(800);

  // ============================================================================
  // Customization Examples
  // These demonstrate how to customize component labels, colors, and styles.
  // ============================================================================

  // Custom layouts - demonstrates extending DEFAULT_LAYOUTS with custom layouts
  // Note: Custom layouts require a customLayoutHandler in VideoGrid
  const customLayouts = useMemo<LayoutDefinition[]>(
    () => [
      ...DEFAULT_LAYOUTS,
      {
        id: 'presentation',
        label: 'Presentation',
        icon: <PresentationIcon />,
      },
    ],
    []
  );

  // Custom layout handler for the "presentation" layout
  // This demonstrates how developers can create their own layout algorithms
  const presentationLayoutHandler = useMemo<CustomLayoutHandler>(
    () =>
      ({ availableWidth, availableHeight, participants, padding, gap, isLocalDominant, dominantSpeaker }) => {
        const positions: Record<string, TilePosition> = {};

        // Presentation layout: Large main area with small thumbnails at bottom
        const thumbnailHeight = 100;
        const thumbnailWidth = 150;
        const mainHeight = availableHeight - thumbnailHeight - gap;

        // Main presentation area (dominant speaker or local)
        const mainPosition: TilePosition = {
          left: padding,
          top: padding,
          width: availableWidth,
          height: mainHeight,
        };

        if (isLocalDominant || !dominantSpeaker) {
          // Local user is presenting
          positions['local'] = mainPosition;

          // Thumbnails for remote participants at bottom
          participants.forEach((p, index) => {
            positions[p.userId] = {
              left: padding + index * (thumbnailWidth + gap),
              top: padding + mainHeight + gap,
              width: thumbnailWidth,
              height: thumbnailHeight,
            };
          });
        } else {
          // Remote participant is presenting
          const presenter = participants.find((p) => p.userId === dominantSpeaker);
          if (presenter) {
            positions[presenter.userId] = mainPosition;
          }

          // Local user in first thumbnail slot
          positions['local'] = {
            left: padding,
            top: padding + mainHeight + gap,
            width: thumbnailWidth,
            height: thumbnailHeight,
          };

          // Other participants in remaining thumbnail slots
          let thumbnailIndex = 1;
          participants.forEach((p) => {
            if (p.userId !== dominantSpeaker) {
              positions[p.userId] = {
                left: padding + thumbnailIndex * (thumbnailWidth + gap),
                top: padding + mainHeight + gap,
                width: thumbnailWidth,
                height: thumbnailHeight,
              };
              thumbnailIndex++;
            }
          });
        }

        return positions;
      },
    []
  );

  // Custom colors for RecordingIndicator (demonstrates theming)
  const customRecordingColors = useMemo<Partial<RecordingIndicatorColors>>(
    () => ({
      background: 'rgba(255, 0, 0, 0.15)',
      indicator: '#ff1744',
      text: '#ff1744',
    }),
    []
  );

  // Custom styles for RecordingIndicator
  const customRecordingStyles = useMemo<Partial<RecordingIndicatorStyles>>(
    () => ({
      animationDuration: '1.2s',
      fontWeight: 700,
    }),
    []
  );

  // Custom overlay order for video tiles
  // This controls the render order of elements at the same position.
  // Elements listed first appear first (leftmost for horizontal, topmost for vertical).
  // Here we put engagement before mood so engagement appears to the left of mood.
  const tileOverlayOrder = useMemo<VideoTileOverlayElement[]>(
    () => ['engagement', 'mood', 'name', 'status', 'controls'],
    []
  );

  // Custom overlay order for local video tile (includes indicator and timer)
  const localTileOverlayOrder = useMemo<LocalVideoTileOverlayElement[]>(
    () => ['indicator', 'timer', 'engagement', 'mood', 'name', 'status', 'controls'],
    []
  );

  // Copy room name to clipboard
  const handleCopyRoomName = useCallback(() => {
    if (room?.name) {
      navigator.clipboard.writeText(room.name);
      setSnackbarOpen(true);
    }
  }, [room]);

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
            {!isCompact && <LiveClock variant="body2" sx={{ ml: 2, opacity: 0.7 }} />}
          </Typography>

          {/* Recording Indicator
              - Owners see the timer with duration
              - Guests see "Recording" text */}
          {isRecording && (
            <RecordingIndicator
              isRecording={isRecording}
              duration={recordingDuration}
              showDuration={isOwner}
              label={isOwner ? 'REC' : 'Recording'}
              size="small"
              colors={customRecordingColors}
              styles={customRecordingStyles}
              sx={{ mr: 2 }}
            />
          )}

          {/* Streaming Indicator
              - Owners see "LIVE" with duration
              - Guests see "Streaming" text */}
          {isStreaming && (
            <StreamingIndicator
              isStreaming={isStreaming}
              duration={streamingDuration}
              showDuration={isOwner}
              label={isOwner ? 'LIVE' : 'Streaming'}
              size="small"
              sx={{ mr: 2 }}
            />
          )}

          {/* Streaming URL - owner only, shows playback URL with copy button */}
          {isStreaming && isOwner && streamingUrl && (
            <StreamingUrlDisplay
              url={streamingUrl}
              sx={{ mr: 2, minWidth: 200, maxWidth: 300 }}
            />
          )}

          {/* Copy room name button - owner only */}
          {isOwner && (
            <TooltipIconButton
              tooltip="Copy room name to share"
              onClick={handleCopyRoomName}
              color="primary"
            >
              <CopyIcon />
            </TooltipIconButton>
          )}

          {/* Waiting Room button - owner only */}
          {isOwner && (
            <>
              <TooltipIconButton
                tooltip="Waiting Room"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setWaitingRoomAnchorEl(e.currentTarget)}
                color={waitingUsers.length > 0 ? 'warning' : 'default'}
              >
                <Badge badgeContent={waitingUsers.length} color="warning">
                  <WaitingRoomIcon />
                </Badge>
              </TooltipIconButton>
              <WaitingRoomAdmittance
                variant="popover"
                anchorEl={waitingRoomAnchorEl}
                open={Boolean(waitingRoomAnchorEl)}
                onClose={() => setWaitingRoomAnchorEl(null)}
                autoAdmitSystemUsers={true}
                playNotificationSound={true}
              />
            </>
          )}

        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Video area */}
        <Box ref={containerRef} sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Video Grid */}
          <VideoGrid
            localVideoElementId="local-video"
            localUserName={userName}
            layout={layout}
            customLayoutHandler={layout === 'presentation' ? presentationLayoutHandler : undefined}
            showLocalFlip
            showTimer
            showZoom
            showNames
            showEngagement
            labelPosition="bottom-left"
            statusPosition="top-right"
            controlPosition="bottom-right"
            indicatorPosition="top-left"
            timerPosition="top-right"
            moodPosition="top-left"
            engagementPosition="top-left"
            tileOverlayOrder={tileOverlayOrder}
            localTileOverlayOrder={localTileOverlayOrder}
            sx={{ flex: 1 }}
          />

          {/* Control Bar */}
          <ControlBar
            onLeave={leaveRoom}
            showLeaveConfirmation
            showScreenShare
            showSettings
            showLayoutSelector
            showRecordingMenu
            showStreamingOption
            showHandRaise
            intelligenceConfig={intelligenceConfig}
            onIntelligenceConfigChange={setIntelligenceConfig}
            layout={layout}
            onLayoutChange={setLayout}
            layouts={customLayouts}
          />
        </Box>

        {/* Sidebar */}
        <Sidebar
          userName={userName}
          intelligenceConfig={intelligenceConfig}
          onIntelligenceConfigChange={setIntelligenceConfig}
        />
      </Box>

      {/* Snackbar for copy confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Room name copied!"
      />
    </Box>
  );
}

export default VideoRoom;
