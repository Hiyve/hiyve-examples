/**
 * Sidebar Component - Tabbed panel for participants, chat, settings, files, and more.
 */

import { useState, useCallback, useMemo } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import {
  People as PeopleIcon,
  Chat as ChatIcon,
  Settings as SettingsIcon,
  ClosedCaption as CaptionsIcon,
  Folder as FolderIcon,
  Draw as WhiteboardIcon,
  QuestionAnswer as QAIcon,
  Poll as PollIcon,
  NoteAlt as NotesIcon,
  SmartToy as AIIcon,
} from '@mui/icons-material';
import {
  useRoom,
  useParticipants,
  useChat,
  useAudioProcessing,
  useRecording,
  useTranscription,
  useStreaming,
} from '@hiyve/client-provider';
import { StreamingSettingsForm } from '@hiyve/streaming';
import { Sidebar as HiyveSidebar, type SidebarTab } from '@hiyve/sidebar';
import { ParticipantList } from '@hiyve/participant-list';
import { ChatPanel } from '@hiyve/chat';
import { GainControl, type GainControlLabels } from '@hiyve/audio-monitor';
import { TranscriptViewer } from '@hiyve/transcription';
import { FileManager, type CustomViewerMap } from '@hiyve/file-manager';
import { IntelligenceSettings, type IntelligenceConfig } from '@hiyve/control-bar';
import { WhiteboardSession } from '@hiyve/whiteboard';
import { QASession, QASessionViewer, useQAListener, type QASessionFile, type Question } from '@hiyve/qa';
import { PollsSession, PollsSessionViewer, usePollListener, type PollsSessionFile } from '@hiyve/polls';
import { NotesSession } from '@hiyve/notes';
import { AIPanel } from './AIPanel';
import { type StreamingConfig } from './VideoRoom';

interface SidebarProps {
  userName: string;
  intelligenceConfig: IntelligenceConfig;
  onIntelligenceConfigChange: (config: IntelligenceConfig) => void;
  streamingConfig: StreamingConfig;
  onStreamingConfigChange: (config: StreamingConfig) => void;
  /** Persist sidebar width to localStorage */
  persistWidth?: boolean;
}

export function Sidebar({
  userName,
  intelligenceConfig,
  onIntelligenceConfigChange,
  streamingConfig,
  onStreamingConfigChange,
  persistWidth = true,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState('participants');
  const [micGain, setMicGain] = useState(100);

  // Get state from ClientProvider
  const { isOwner, room } = useRoom();
  const { participantCount, localUserId } = useParticipants();
  const { unreadCount, clearUnread } = useChat();
  const { setGain } = useAudioProcessing();
  const { isRecording } = useRecording();
  const { isTranscribing } = useTranscription();
  const { isStreaming } = useStreaming();

  // Polls listener - provides hasUnvotedActivePoll for badge notifications
  const { hasUnvotedActivePoll } = usePollListener({ enabled: true });

  // Q&A listener - track questions even when QA tab not active
  const [qaQuestions, setQAQuestions] = useState<Question[]>([]);
  const [hasNewQuestion, setHasNewQuestion] = useState(false);
  const [hasActiveQASession, setHasActiveQASession] = useState(false);

  useQAListener({
    enabled: true,
    isOwner,
    localUserId: localUserId || '',
    questions: qaQuestions,
    onQuestionsChange: (questions) => {
      setQAQuestions(questions);
      // If we received questions, session is active
      if (questions.length > 0) {
        setHasActiveQASession(true);
      }
    },
    onNewQuestion: () => {
      // Only show badge if not on Q&A tab
      if (activeTab !== 'qa') {
        setHasNewQuestion(true);
      }
      setHasActiveQASession(true);
    },
    onSessionStarted: () => {
      // Show badge when Q&A session is started by owner
      if (activeTab !== 'qa') {
        setHasNewQuestion(true);
      }
      setHasActiveQASession(true);
    },
  });

  // Handle tab change
  const handleTabChange = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      // Clear unread count when switching to chat tab
      if (tabId === 'chat') {
        clearUnread();
      }
      // Clear Q&A badge when switching to Q&A tab
      if (tabId === 'qa') {
        setHasNewQuestion(false);
      }
    },
    [clearUnread]
  );

  // Handle mic gain change
  const handleGainChange = useCallback(
    (value: number) => {
      setMicGain(value);
      setGain(value);
    },
    [setGain]
  );

  // Custom labels for GainControl (demonstrates i18n support)
  const customGainLabels = useMemo<Partial<GainControlLabels>>(
    () => ({
      mute: 'Mute microphone',
      unmute: 'Unmute microphone',
      formatValue: (value: number) => `${Math.round(value)}%`,
    }),
    []
  );

  // Custom viewers for FileManager (demonstrates extensible file viewer system)
  const customViewers = useMemo<CustomViewerMap>(
    () => ({
      'qa-session': (data, _file, onClose) => (
        <QASessionViewer
          sessionData={data as QASessionFile}
          onClose={onClose}
        />
      ),
      'polls-session': (data, _file, onClose) => (
        <PollsSessionViewer
          sessionData={data as PollsSessionFile}
          onClose={onClose}
        />
      ),
    }),
    []
  );

  // Define tabs configuration
  const tabs = useMemo<SidebarTab[]>(() => {
    const baseTabs: SidebarTab[] = [
      {
        id: 'participants',
        label: `(${participantCount + 1})`,
        icon: <PeopleIcon />,
        tooltip: 'Participants',
      },
      {
        id: 'chat',
        label: 'Chat',
        icon: <ChatIcon />,
        badge: unreadCount,
        badgeColor: 'error',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
      },
      {
        id: 'files',
        label: 'Files',
        icon: <FolderIcon />,
      },
      {
        id: 'whiteboard',
        label: 'Whiteboard',
        icon: <WhiteboardIcon />,
      },
      {
        id: 'qa',
        label: 'Q&A',
        icon: <QAIcon />,
        tooltip: 'Questions & Answers',
        badge: hasNewQuestion ? 1 : undefined,
        badgeColor: 'error',
      },
      {
        id: 'polls',
        label: 'Polls',
        icon: <PollIcon />,
        tooltip: 'Live Polls',
        badge: hasUnvotedActivePoll ? 1 : undefined,
        badgeColor: 'error',
      },
      {
        id: 'notes',
        label: 'Notes',
        icon: <NotesIcon />,
        tooltip: 'Meeting Notes',
      },
      {
        id: 'ai',
        label: 'AI',
        icon: <AIIcon color={room?.owner ? 'primary' : 'disabled'} />,
        tooltip: room?.owner ? 'AI Intelligence' : 'Join a room to enable AI features',
      },
    ];

    // Add captions tab for owners only
    if (isOwner) {
      baseTabs.push({
        id: 'captions',
        label: 'Captions',
        icon: <CaptionsIcon color={isTranscribing ? 'primary' : 'inherit'} />,
        tooltip: 'Captions (owner only)',
      });
    }

    return baseTabs;
  }, [participantCount, unreadCount, isOwner, isTranscribing, hasUnvotedActivePoll, hasNewQuestion, room]);

  // Render content for each tab
  const renderContent = useCallback(
    (tabId: string) => {
      switch (tabId) {
        case 'participants':
          // ParticipantList automatically shows owner controls (mute, remove) for room owners
          return (
            <ParticipantList
              localUserName={userName}
              showHeader={false}
              maxHeight="100%"
              sx={{ height: '100%' }}
            />
          );

        case 'chat':
          return (
            <ChatPanel
              showHeader={false}
              maxHeight="100%"
              sx={{ height: '100%' }}
            />
          );

        case 'settings':
          return (
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Audio Settings
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* GainControl with custom labels for i18n */}
              <GainControl
                value={micGain}
                onChange={handleGainChange}
                label="Mic Volume"
                size="100%"
                labels={customGainLabels}
                sx={{ mb: 2 }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 3 }}
              >
                Adjust your microphone volume. Changes apply in real-time.
                Use the settings button in the control bar to change devices.
              </Typography>

              {/* Intelligence Settings - owner only */}
              {isOwner && (
                <IntelligenceSettings
                  config={intelligenceConfig}
                  onChange={onIntelligenceConfigChange}
                  disabled={isRecording}
                  sx={{ mt: 2 }}
                />
              )}

              {/* Streaming Settings - owner only */}
              {isOwner && (
                <>
                  <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                    Streaming Settings
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <StreamingSettingsForm
                    mode={streamingConfig.mode}
                    onModeChange={(mode) => onStreamingConfigChange({ ...streamingConfig, mode })}
                    createMp4={streamingConfig.createMp4}
                    onCreateMp4Change={(createMp4) => onStreamingConfigChange({ ...streamingConfig, createMp4 })}
                    rtmpUrl={streamingConfig.rtmpUrl}
                    onRtmpUrlChange={(rtmpUrl) => onStreamingConfigChange({ ...streamingConfig, rtmpUrl })}
                    disabled={isStreaming}
                  />
                  {isStreaming && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: 'block', mt: 1 }}
                    >
                      Settings cannot be changed while streaming is active.
                    </Typography>
                  )}
                </>
              )}
            </Box>
          );

        case 'files':
          return (
            <FileManager
              showToolbar
              showBreadcrumbs
              enableDragDrop
              enableMultiSelect
              customViewers={customViewers}
              enableSmartOpening
              availableTabs={['whiteboard', 'notes', 'qa', 'polls']}
              onSwitchToTab={(tabName) => setActiveTab(tabName)}
              sx={{ height: '100%' }}
            />
          );

        case 'whiteboard':
          return <WhiteboardSession sx={{ height: '100%' }} />;

        case 'qa':
          return <QASession isSessionActive={hasActiveQASession} sx={{ height: '100%' }} />;

        case 'polls':
          return (
            <PollsSession
              pollsWindowProps={{
                colors: {
                  containerBackground: '#212121',
                  headerBackground: '#212121',
                },
                styles: {
                  borderRadius: 4,
                },
              }}
              sx={{ height: '100%' }}
            />
          );

        case 'notes':
          return <NotesSession sx={{ height: '100%' }} />;

        case 'ai':
          return room?.owner && room?.name ? (
            <AIPanel userId={room.owner} roomName={room.name} isOwner={isOwner} />
          ) : (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Join a room to enable AI features. The AI uses the room owner's
                credentials for cloud intelligence operations.
              </Typography>
            </Box>
          );

        case 'captions':
          return (
            <TranscriptViewer
              showTimestamps
              autoScroll
              groupingWindowMs={3000}
              emptyMessage={
                isTranscribing
                  ? 'Waiting for transcriptions...'
                  : 'Start Intelligence Mode to see live captions'
              }
              sx={{ height: '100%' }}
            />
          );

        default:
          return null;
      }
    },
    [
      userName,
      micGain,
      handleGainChange,
      customGainLabels,
      customViewers,
      isOwner,
      intelligenceConfig,
      onIntelligenceConfigChange,
      isRecording,
      isTranscribing,
      isStreaming,
      streamingConfig,
      onStreamingConfigChange,
      room,
      hasActiveQASession,
    ]
  );

  return (
    <HiyveSidebar
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      renderContent={renderContent}
      collapsible
      resizable
      persistWidth={persistWidth}
      styles={{
        defaultWidth: 600,
        minWidth: 280,
        maxWidth: 1200,
        tabLabelsMinWidth: 480,
        tabLabelsInlineMinWidth: 800,
      }}
      sx={{
        borderLeft: 1,
        borderColor: 'divider',
      }}
    />
  );
}
