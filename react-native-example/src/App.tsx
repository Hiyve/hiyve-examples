import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useHiyveClient} from './hooks/useHiyveClient';
import JoinScreen from './screens/JoinScreen';
import RoomScreen from './screens/RoomScreen';

function AppContent() {
  const {
    connectionState,
    localStream,
    remoteParticipants,
    isAudioMuted,
    isVideoMuted,
    error,
    roomName,
    createRoom,
    joinRoom,
    toggleAudio,
    toggleVideo,
    flipCamera,
    leaveRoom,
  } = useHiyveClient();

  if (connectionState === 'connecting') {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#533483" />
        <Text style={styles.connectingText}>Connecting...</Text>
      </SafeAreaView>
    );
  }

  if (connectionState === 'connected') {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <RoomScreen
          roomName={roomName}
          localStream={localStream}
          remoteParticipants={remoteParticipants}
          isAudioMuted={isAudioMuted}
          isVideoMuted={isVideoMuted}
          onToggleAudio={toggleAudio}
          onToggleVideo={toggleVideo}
          onFlipCamera={flipCamera}
          onLeave={leaveRoom}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <JoinScreen
        onCreateRoom={createRoom}
        onJoinRoom={joinRoom}
        error={error}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f23" />
      <View style={styles.container}>
        <AppContent />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f23',
  },
  connectingText: {
    color: '#8888aa',
    fontSize: 16,
    marginTop: 16,
  },
});
