/**
 * @fileoverview Interview Example - Interview Sidebar
 * @module interview-example/components/InterviewSidebar
 *
 * Owner-only sidebar with tabbed panels for AI intelligence (live transcription,
 * assistant, sentiment) and file management during an interview.
 */

import { useState, useCallback } from 'react';
import {
  SmartToy as AIIcon,
  Folder as FilesIcon,
} from '@mui/icons-material';
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
import { FileManager } from '@hiyve/react-collaboration';
import {
  Sidebar as HiyveSidebar,
  type SidebarTab,
} from '@hiyve/react-ui';

interface InterviewSidebarProps {
  intelligenceConfig: IntelligenceConfig;
  onIntelligenceConfigChange: (config: IntelligenceConfig) => void;
}

const tabs: SidebarTab[] = [
  { id: 'intelligence', label: 'AI', icon: <AIIcon />, tooltip: 'AI Intelligence' },
  { id: 'files', label: 'Files', icon: <FilesIcon />, tooltip: 'Files & Documents' },
];

export function InterviewSidebar({
  intelligenceConfig,
  onIntelligenceConfigChange,
}: InterviewSidebarProps) {
  const [activeTab, setActiveTab] = useState('intelligence');

  const { isOwner, room } = useRoom();
  const { localUserId } = useParticipants();
  const { transcriptions, isTranscribing, enrichTranscription } = useTranscription();
  const { responseId, isRecording, isRecordingStarting } = useRecording();

  const hasTranscripts = Array.isArray(transcriptions) && transcriptions.length > 0;
  const readiness = useIntelligenceReadiness({
    responseId,
    isRecordingStarting,
    isIntelligenceActive: isRecording || isTranscribing,
    hasTranscriptions: hasTranscripts,
  });

  const { askWithResponseId } = useLiveContext(room?.name || '', localUserId || '');

  const moodAnalysis = useMoodAnalysisSafe();

  useMoodCloudSync({
    roomName: room?.name || '',
    userId: localUserId || '',
    responseId,
    moodStates: moodAnalysis?.moodStates ?? null,
    moodEnabled: !!moodAnalysis?.enabled && !!moodAnalysis?.ready,
    transcriptionCount: transcriptions?.length ?? 0,
    enrichTranscription,
  });

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
      activeTab={activeTab}
      onTabChange={setActiveTab}
      renderContent={(tabId) => {
        if (tabId === 'files') {
          return (
            <FileManager
              showToolbar
              showBreadcrumbs
              enableDragDrop
              sx={{ height: '100%' }}
            />
          );
        }
        return (
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
        );
      }}
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
