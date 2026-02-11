import React from 'react';
import {ActivityIndicator, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {HiyveRNProvider, useConnection, useRoom} from '@hiyve/react-native';
import type {HiyveStoreRNOptions} from '@hiyve/core-rn';
import JoinScreen from './screens/JoinScreen';
import RoomScreen from './screens/RoomScreen';

const TOKEN_SERVER_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001'
    : 'http://localhost:3001';

const providerOptions: HiyveStoreRNOptions = {
  generateRoomToken: async () => {
    const response = await fetch(
      `${TOKEN_SERVER_URL}/api/generate-room-token`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      },
    );
    if (!response.ok) {
      throw new Error(`Token server error: ${response.status}`);
    }
    return response.json();
  },
  onError: (error: Error) => {
    console.error('[Hiyve]', error.message);
  },
};

function AppContent() {
  const {isConnecting} = useConnection();
  const {isInRoom} = useRoom();

  if (isConnecting) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#533483" />
        <Text style={styles.connectingText}>Connecting...</Text>
      </SafeAreaView>
    );
  }

  if (isInRoom) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <RoomScreen />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <JoinScreen />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f23" />
      <HiyveRNProvider options={providerOptions}>
        <View style={styles.container}>
          <AppContent />
        </View>
      </HiyveRNProvider>
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
