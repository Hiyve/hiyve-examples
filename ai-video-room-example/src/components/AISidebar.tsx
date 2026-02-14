/**
 * @fileoverview AI Video Room Example - AI Sidebar Component
 * @module ai-video-room-example/components/AISidebar
 *
 * Collapsible, resizable sidebar that hosts the IntelligenceHub from
 * {@link @hiyve/react-intelligence}. Orchestrates several intelligence hooks:
 *
 * - useIntelligenceReadiness -- derives UI readiness state from recording/transcription status
 * - useLiveContext -- provides askWithResponseId for sending AI queries with recording context
 * - useMoodAnalysisSafe -- reads local facial sentiment data (safe no-op outside provider)
 * - useMoodCloudSync -- pushes local mood states to the Hiyve Cloud so the AI has sentiment context
 *
 * The IntelligenceHub renders tabbed access to the AI Assistant, Live Captions
 * (via TranscriptViewer), Alerts (placeholder), and Sentiment analysis.
 */

import { useCallback } from 'react';
import { SmartToy as AIIcon } from '@mui/icons-material';
import {
  useRoom,
  useParticipants,
  useTranscription,
  useRecording,
} from '@hiyve/react';
import {
  IntelligenceHub,
  useIntelligenceReadiness,
  useLiveContext,
  useMoodCloudSync,
  useMoodAnalysisSafe,
  type IntelligenceConfig,
} from '@hiyve/react-intelligence';
import { TranscriptViewer } from '@hiyve/react-capture';
import {
  Sidebar as HiyveSidebar,
  type SidebarTab,
} from '@hiyve/react-ui';

interface AISidebarProps {
  /** Current intelligence configuration (transcription mode, AI options, etc.). */
  intelligenceConfig: IntelligenceConfig;
  /** Callback to update intelligence configuration from within the hub. */
  onIntelligenceConfigChange: (config: IntelligenceConfig) => void;
}

const tabs: SidebarTab[] = [
  {
    id: 'intelligence',
    label: 'AI',
    icon: <AIIcon />,
    tooltip: 'AI Intelligence',
  },
];

export function AISidebar({
  intelligenceConfig,
  onIntelligenceConfigChange,
}: AISidebarProps) {
  // Get state from providers
  const { isOwner, room } = useRoom();
  const { localUserId } = useParticipants();
  const { transcriptions, isTranscribing, enrichTranscription } = useTranscription();
  const { responseId, isRecording, isRecordingStarting } = useRecording();

  // Derive intelligence readiness state -- tells the UI whether AI is ready,
  // initializing, or waiting for recording/transcription to start
  const hasTranscripts = Array.isArray(transcriptions) && transcriptions.length > 0;
  const readiness = useIntelligenceReadiness({
    responseId,
    isRecordingStarting,
    isIntelligenceActive: isRecording || isTranscribing,
    hasTranscriptions: hasTranscripts,
  });

  // Live context hook
  const {
    askWithResponseId,
  } = useLiveContext(room?.name || '', localUserId || '');

  // Mood analysis
  const moodAnalysis = useMoodAnalysisSafe();

  // Sync local mood analysis data to the Hiyve Cloud so the AI assistant
  // can reference participant sentiment when answering queries
  useMoodCloudSync({
    roomName: room?.name || '',
    userId: localUserId || '',
    responseId,
    moodStates: moodAnalysis?.moodStates ?? null,
    moodEnabled: !!moodAnalysis?.enabled && !!moodAnalysis?.ready,
    transcriptionCount: transcriptions?.length ?? 0,
    enrichTranscription,
  });

  // AI query handler -- sends user message to the Hiyve Cloud with the
  // current recording's responseId so the AI has transcription context
  const handleAIQuery = useCallback(async (message: string): Promise<string> => {
    if (!responseId) {
      throw new Error('No AI context available. Waiting for Intelligence Mode to initialize.');
    }
    const result = await askWithResponseId(responseId, message);
    if (!result?.success) {
      throw new Error(result?.content || 'Query failed');
    }
    return result.content;
  }, [responseId, askWithResponseId]);

  return (
    <HiyveSidebar
      tabs={tabs}
      activeTab="intelligence"
      onTabChange={() => {}}
      renderContent={() => (
        <IntelligenceHub
          roomId={room?.name || ''}
          userId={localUserId || ''}
          onSend={handleAIQuery}
          intelligenceConfig={intelligenceConfig}
          onIntelligenceConfigChange={onIntelligenceConfigChange}
          isOwner={isOwner}
          liveContextActive={!!responseId}
          hasTranscriptions={hasTranscripts}
          readiness={readiness}
          showConversationManager
          showAssistant
          showCaptions
          showAlerts
          showSentiment
          renderCaptionsContent={() => (
            <TranscriptViewer
              showTimestamps
              showSentiment
              autoScroll
              groupingWindowMs={3000}
              sx={{ height: '100%' }}
            />
          )}
          sx={{ height: '100%' }}
        />
      )}
      collapsible
      resizable
      persistWidth
      styles={{
        defaultWidth: 420,
        minWidth: 280,
        maxWidth: '75vw',
        tabLabelsMinWidth: 420,
      }}
      sx={{
        borderLeft: 1,
        borderColor: 'divider',
      }}
    />
  );
}
