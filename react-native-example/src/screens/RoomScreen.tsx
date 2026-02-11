import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ControlBar,
  VideoGrid,
  useConnection,
  useLocalMedia,
  useParticipants,
  useRoom,
} from '@hiyve/react-native';

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
        />
      </View>

      <ControlBar
        isAudioMuted={isAudioMuted}
        isVideoMuted={isVideoMuted}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onFlipCamera={switchCamera}
        onLeave={leaveRoom}
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
