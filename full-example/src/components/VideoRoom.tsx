/**
 * VideoRoom Component - Main in-room view with video grid, controls, and sidebar.
 */

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Snackbar,
  Button,
} from '@mui/material';
import {
  ContentCopy as CopyIcon,
  MeetingRoom as WaitingRoomIcon,
  Slideshow as PresentationIcon,
  PanTool as HandRaiseIcon,
} from '@mui/icons-material';
import { LiveClock, TooltipIconButton, useContainerBreakpoint } from '@hiyve/utilities';
import {
  useRoom,
  useConnection,
  useRecording,
  useStreaming,
  useWaitingRoom,
  useLayout,
  useHandRaise,
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
import { StreamingIndicator, StreamingUrlDisplay, type StreamingMode } from '@hiyve/streaming';
import { Sidebar } from './Sidebar';
import { STORAGE_KEYS } from '../constants';

// Streaming configuration type
export interface StreamingConfig {
  mode: StreamingMode;
  createMp4: boolean;
  rtmpUrl: string;
}

const defaultStreamingConfig: StreamingConfig = {
  mode: 'single',
  createMp4: true,
  rtmpUrl: '',
};

// Static customization values (outside component - no useMemo needed)
const RECORDING_COLORS: Partial<RecordingIndicatorColors> = {
  background: 'rgba(255, 0, 0, 0.15)',
  indicator: '#ff1744',
  text: '#ff1744',
};

const RECORDING_STYLES: Partial<RecordingIndicatorStyles> = {
  animationDuration: '1.2s',
  fontWeight: 700,
};

const TILE_OVERLAY_ORDER: VideoTileOverlayElement[] = [
  'engagement', 'mood', 'name', 'status', 'controls'
];

const LOCAL_TILE_OVERLAY_ORDER: LocalVideoTileOverlayElement[] = [
  'indicator', 'timer', 'engagement', 'mood', 'name', 'status', 'controls'
];

interface VideoRoomProps {
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

  // Streaming configuration (persisted to localStorage)
  const [streamingConfig, setStreamingConfigState] = useState<StreamingConfig>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.streamingConfig);
      if (stored) {
        return { ...defaultStreamingConfig, ...JSON.parse(stored) };
      }
    } catch {
      // Ignore parse errors
    }
    return defaultStreamingConfig;
  });

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.streamingConfig, JSON.stringify(streamingConfig));
    } catch {
      // Ignore storage errors
    }
  }, [streamingConfig]);

  const setStreamingConfig = setStreamingConfigState;

  // Get state from ClientProvider
  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();
  const { isRecording, recordingDuration } = useRecording();
  const { isStreaming, streamingDuration, streamingUrl, switchStreamingUser } = useStreaming();
  const { waitingUsers } = useWaitingRoom();
  const { dominantSpeaker } = useLayout();
  const { raisedHandCount, lowerAllHands } = useHandRaise();

  // Sync dominant speaker with streaming presenter
  // When the owner sets a dominant speaker, switch the streaming user to match
  useEffect(() => {
    if (isStreaming && isOwner && dominantSpeaker) {
      switchStreamingUser(dominantSpeaker);
    }
  }, [dominantSpeaker, isStreaming, isOwner, switchStreamingUser]);

  // Responsive container breakpoint
  const { isBelowBreakpoint: isCompact, containerRef } = useContainerBreakpoint(800);

  // Custom layouts - extending DEFAULT_LAYOUTS with presentation layout
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
              colors={RECORDING_COLORS}
              styles={RECORDING_STYLES}
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

          {/* Hand Raise indicator - shows count when hands are raised */}
          {raisedHandCount > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
              <TooltipIconButton
                tooltip={`${raisedHandCount} hand${raisedHandCount !== 1 ? 's' : ''} raised`}
                color="warning"
              >
                <Badge badgeContent={raisedHandCount} color="warning">
                  <HandRaiseIcon />
                </Badge>
              </TooltipIconButton>
              {/* Lower All Hands button - owner only */}
              {isOwner && (
                <Button
                  size="small"
                  variant="outlined"
                  color="warning"
                  onClick={lowerAllHands}
                  sx={{ ml: 0.5, minWidth: 'auto', px: 1 }}
                >
                  Lower All
                </Button>
              )}
            </Box>
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
            tileOverlayOrder={TILE_OVERLAY_ORDER}
            localTileOverlayOrder={LOCAL_TILE_OVERLAY_ORDER}
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
            streamingConfig={streamingConfig}
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
          streamingConfig={streamingConfig}
          onStreamingConfigChange={setStreamingConfig}
          persistWidth
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
