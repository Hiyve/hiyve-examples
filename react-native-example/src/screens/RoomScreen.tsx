import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ControlBar,
  VideoGrid,
  useConnection,
  useHandRaise,
  useLayout,
  useLocalMedia,
  useParticipants,
  useRecording,
  useRoom,
  useStreaming,
} from '@hiyve/rn-react';
import type {ControlBarLayoutMode} from '@hiyve/rn-react';

export default function RoomScreen() {
  const {room} = useRoom();
  const {leaveRoom} = useConnection();
  const {
    isAudioMuted,
    isVideoMuted,
    localStream,
    toggleAudio,
    toggleVideo,
    switchCamera,
  } = useLocalMedia();
  const {participants, localUserId, participantCount} = useParticipants();
  const {dominantSpeaker} = useLayout();
  const {raisedHands, toggleHandRaised} = useHandRaise();
  const {isRecording, recordingDuration, startRecording, stopRecording} =
    useRecording();
  const {isStreaming, streamingDuration, startStreaming, stopStreaming} =
    useStreaming();

  const [layout, setLayout] = useState<ControlBarLayoutMode>('grid');

  const handleToggleRecording = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  const handleToggleStreaming = useCallback(() => {
    if (isStreaming) {
      stopStreaming();
    } else {
      // TODO: Replace with actual RTMP URL (e.g., from user input or config)
      startStreaming({url: ''});
    }
  }, [isStreaming, startStreaming, stopStreaming]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{room?.name ?? ''}</Text>
        <Text style={styles.participantCount}>
          {participantCount} participant{participantCount !== 1 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.videoGrid}>
        <VideoGrid
          localStream={localStream}
          localUserId={localUserId}
          localDisplayName="You"
          isLocalAudioMuted={isAudioMuted}
          isLocalVideoMuted={isVideoMuted}
          participants={participants}
          layout={layout}
          dominantUserId={dominantSpeaker}
        />
      </View>

      <ControlBar
        isAudioMuted={isAudioMuted}
        isVideoMuted={isVideoMuted}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onFlipCamera={switchCamera}
        onLeave={leaveRoom}
        showLayoutSelector
        showHandRaise
        showRecording
        showStreaming
        showLeaveConfirmation
        autoHideTimeout={3000}
        layout={layout}
        onLayoutChange={setLayout}
        isHandRaised={localUserId ? raisedHands.has(localUserId) : false}
        onToggleHandRaise={toggleHandRaised}
        isRecording={isRecording}
        recordingDuration={recordingDuration}
        onToggleRecording={handleToggleRecording}
        isStreaming={isStreaming}
        streamingDuration={streamingDuration}
        onToggleStreaming={handleToggleStreaming}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  participantCount: {
    color: '#8888aa',
    fontSize: 14,
  },
  videoGrid: {
    flex: 1,
    padding: 4,
  },
});
