import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MediaStream, RTCView} from 'react-native-webrtc';
import ControlBar from '../components/ControlBar';
import RemoteVideo from '../components/RemoteVideo';
import type {RemoteParticipant} from '../types';

interface RoomScreenProps {
  roomName: string;
  localStream: MediaStream | null;
  remoteParticipants: Map<string, RemoteParticipant>;
  isAudioMuted: boolean;
  isVideoMuted: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onFlipCamera: () => void;
  onLeave: () => void;
}

export default function RoomScreen({
  roomName,
  localStream,
  remoteParticipants,
  isAudioMuted,
  isVideoMuted,
  onToggleAudio,
  onToggleVideo,
  onFlipCamera,
  onLeave,
}: RoomScreenProps) {
  const participants = Array.from(remoteParticipants.values()).filter(
    p => p.videoStream !== null,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{roomName}</Text>
        <Text style={styles.participantCount}>
          {remoteParticipants.size + 1} participant
          {remoteParticipants.size !== 0 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.videoGrid}>
        {localStream && (
          <View style={styles.localVideoContainer}>
            <RTCView
              streamURL={localStream.toURL()}
              objectFit="cover"
              mirror={true}
              style={styles.localVideo}
            />
            <View style={styles.localLabel}>
              <Text style={styles.localLabelText}>You</Text>
            </View>
          </View>
        )}

        {participants.length > 0 && (
          <FlatList
            data={participants}
            keyExtractor={item => item.userId}
            numColumns={participants.length === 1 ? 1 : 2}
            key={participants.length === 1 ? 'single' : 'grid'}
            style={styles.remoteList}
            renderItem={({item}) => (
              <RemoteVideo
                stream={item.videoStream!}
                userId={item.userId}
              />
            )}
          />
        )}

        {participants.length === 0 && (
          <View style={styles.waitingContainer}>
            <Text style={styles.waitingText}>
              Waiting for others to join...
            </Text>
          </View>
        )}
      </View>

      <ControlBar
        isAudioMuted={isAudioMuted}
        isVideoMuted={isVideoMuted}
        onToggleAudio={onToggleAudio}
        onToggleVideo={onToggleVideo}
        onFlipCamera={onFlipCamera}
        onLeave={onLeave}
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
  localVideoContainer: {
    height: 200,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#16213e',
  },
  localVideo: {
    flex: 1,
  },
  localLabel: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  localLabelText: {
    color: '#ffffff',
    fontSize: 12,
  },
  remoteList: {
    flex: 1,
  },
  waitingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingText: {
    color: '#8888aa',
    fontSize: 16,
  },
});
