/**
 * @fileoverview Sales Example - Video Room
 * @module sales-example/components/VideoRoom
 *
 * Main video conferencing view with a grid layout, control bar, recording indicator,
 * and an owner-only AI sidebar for live intelligence during sales calls.
 */

import { useState, useCallback } from 'react';
import {
  Box, AppBar, Toolbar, Typography, Snackbar, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
} from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import { LiveClock, TooltipIconButton } from '@hiyve/utilities';
import {
  useRoom,
  useConnection,
  useRecording,
  useTranscription,
} from '@hiyve/react';
import {
  ControlBar,
  VideoGrid,
  type VideoTileOverlayElement,
  type LocalVideoTileOverlayElement,
} from '@hiyve/react-ui';
import {
  defaultIntelligenceConfig,
  type IntelligenceConfig,
} from '@hiyve/react-intelligence';
import {
  RecordingIndicator,
  type RecordingIndicatorColors,
  type RecordingIndicatorStyles,
} from '@hiyve/react-capture';
import { SalesSidebar } from './SalesSidebar';

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
  'engagement', 'mood', 'name', 'status', 'controls',
];

const LOCAL_TILE_OVERLAY_ORDER: LocalVideoTileOverlayElement[] = [
  'indicator', 'timer', 'engagement', 'mood', 'name', 'status', 'controls',
];

interface VideoRoomProps {
  /** Callback when leaving room with transcript and AI response data */
  onLeaveWithAnalysis: (transcript: string, responseId: string | null) => void;
  /** Callback when leaving room without analysis */
  onLeave: () => void;
}

export function VideoRoom({ onLeaveWithAnalysis, onLeave }: VideoRoomProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  const [intelligenceConfig, setIntelligenceConfig] = useState<IntelligenceConfig>(
    defaultIntelligenceConfig
  );

  const { room, isOwner } = useRoom();
  const { leaveRoom } = useConnection();
  const { isRecording, recordingDuration, responseId } = useRecording();
  const { transcriptions } = useTranscription();

  const userName = localStorage.getItem('hiyve-sales-example-userName') || '';

  const handleCopyRoomName = useCallback(() => {
    if (room?.name) {
      navigator.clipboard.writeText(room.name).then(() => setSnackbarOpen(true)).catch(() => {});
    }
  }, [room]);

  const handleLeaveAndAnalyze = useCallback(() => {
    const transcript = transcriptions
      ?.map((t) => `${t.userId}: ${t.text}`)
      .join('\n') || '';
    const currentResponseId = responseId || null;
    leaveRoom();
    setShowLeaveDialog(false);
    onLeaveWithAnalysis(transcript, currentResponseId);
  }, [transcriptions, responseId, leaveRoom, onLeaveWithAnalysis]);

  const handleLeaveOnly = useCallback(() => {
    leaveRoom();
    setShowLeaveDialog(false);
    onLeave();
  }, [leaveRoom, onLeave]);

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

          {isOwner && (
            <TooltipIconButton
              tooltip="Copy room name to share"
              onClick={handleCopyRoomName}
              color="primary"
            >
              <CopyIcon />
            </TooltipIconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Video area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <VideoGrid
            localVideoElementId="local-video"
            localUserName={userName}
            layout="grid"
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

          <ControlBar
            onLeave={() => setShowLeaveDialog(true)}
            showLeaveConfirmation={false}
            showScreenShare
            showSettings
            showRecordingMenu
            showHandRaise
            autoHideTimeout={3000}
            intelligenceConfig={intelligenceConfig}
            onIntelligenceConfigChange={setIntelligenceConfig}
          />
        </Box>

        {/* Sidebar - owner only */}
        {isOwner && (
          <SalesSidebar
            intelligenceConfig={intelligenceConfig}
            onIntelligenceConfigChange={setIntelligenceConfig}
          />
        )}
      </Box>

      {/* Leave dialog */}
      <Dialog open={showLeaveDialog} onClose={() => setShowLeaveDialog(false)}>
        <DialogTitle>Leave Call</DialogTitle>
        <DialogContent>
          <Typography>Would you like to analyze this sales call?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLeaveOnly}>Just Leave</Button>
          <Button variant="contained" onClick={handleLeaveAndAnalyze}>Leave & Analyze</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Room name copied!"
      />
    </Box>
  );
}
