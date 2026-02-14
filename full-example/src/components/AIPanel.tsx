/**
 * AIPanel Component - AI-powered meeting intelligence using IntelligenceHub.
 *
 * Provides a tabbed dashboard with AI Assistant, Captions, Alerts, and Sentiment
 * features via the IntelligenceHub component.
 */

import { useCallback } from 'react';
import {
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

interface AIPanelProps {
  /** User ID (cleaned email) for API validation */
  userId: string;
  /** Room name for live context */
  roomName: string;
  /** Whether the current user is the room owner */
  isOwner?: boolean;
  /** Intelligence configuration */
  intelligenceConfig: IntelligenceConfig;
  /** Callback when intelligence configuration changes */
  onIntelligenceConfigChange: (config: IntelligenceConfig) => void;
}

export function AIPanel({
  userId,
  roomName,
  isOwner = false,
  intelligenceConfig,
  onIntelligenceConfigChange,
}: AIPanelProps) {
  // Get state from providers
  const { transcriptions, isTranscribing, enrichTranscription } = useTranscription();
  const { responseId, isRecording, isRecordingStarting } = useRecording();

  // Derive intelligence readiness state
  const hasTranscripts = Array.isArray(transcriptions) && transcriptions.length > 0;
  const readiness = useIntelligenceReadiness({
    responseId,
    isRecordingStarting,
    isIntelligenceActive: isRecording || isTranscribing,
    hasTranscriptions: hasTranscripts,
  });

  // Live context hook
  const { askWithResponseId } = useLiveContext(roomName, userId);

  // Mood analysis
  const moodAnalysis = useMoodAnalysisSafe();

  // Sync mood analysis data to cloud AI context
  useMoodCloudSync({
    roomName,
    userId,
    responseId,
    moodStates: moodAnalysis?.moodStates ?? null,
    moodEnabled: !!moodAnalysis?.enabled && !!moodAnalysis?.ready,
    transcriptionCount: transcriptions?.length ?? 0,
    enrichTranscription,
  });

  // AI query handler
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
    <IntelligenceHub
      roomId={roomName}
      userId={userId}
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
  );
}
