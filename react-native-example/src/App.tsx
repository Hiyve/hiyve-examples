import React from 'react';
import {ActivityIndicator, Alert, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {HiyveRNProvider, useConnection, useRoom} from '@hiyve/rn-react';
import type {HiyveStoreRNOptions} from '@hiyve/rn-core';
import JoinScreen from './screens/JoinScreen';
import RoomScreen from './screens/RoomScreen';

const TOKEN_SERVER_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001'
    : 'http://localhost:3001';

const providerOptions: HiyveStoreRNOptions = {
  generateRoomToken: async () => {
    console.warn('[Hiyve] Fetching room token from', TOKEN_SERVER_URL);
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
    const data = await response.json();
    console.warn('[Hiyve] Token received, serverRegionUrl:', data.serverRegionUrl);
    return data;
  },
  onError: (error: Error) => {
    console.warn('[Hiyve] ERROR:', error.message);
    Alert.alert('Hiyve Error', error.message);
  },
};

function AppContent() {
  const {isConnecting, isConnected, error: connectionError} = useConnection();
  const {isInRoom} = useRoom();

  // Log state changes to help debug disconnect issues
  React.useEffect(() => {
    console.warn('[Hiyve] State:', {isConnecting, isConnected, isInRoom, connectionError});
  }, [isConnecting, isConnected, isInRoom, connectionError]);

  if (connectionError) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorText}>Connection Error</Text>
        <Text style={styles.connectingText}>{connectionError}</Text>
      </SafeAreaView>
    );
  }

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
  errorText: {
    color: '#e94560',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  connectingText: {
    color: '#8888aa',
    fontSize: 16,
    marginTop: 16,
  },
});
