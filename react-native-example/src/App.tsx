/**
 * @fileoverview React Native Example - Main Application
 * @module react-native-example/App
 *
 * Root component that sets up the Hiyve SDK for React Native.
 * Uses `HiyveRNProvider` instead of web's `HiyveProvider` to handle
 * React Native-specific concerns (native WebRTC via react-native-webrtc,
 * platform permissions, and native media track management).
 *
 * ```
 * HiyveRNProvider            ← initializes native WebRTC store
 *   └── SafeAreaProvider
 *       └── AppContent       ← state-based screen routing
 *           ├── Error view   (connectionError)
 *           ├── Loading      (isConnecting)
 *           ├── RoomScreen   (isInRoom === true)
 *           └── JoinScreen   (default / not connected)
 * ```
 *
 * ## Key Differences from Web Examples
 *
 * - **Provider**: `HiyveRNProvider` wraps `@hiyve/rn-core` instead of
 *   `@hiyve/core`, which uses `react-native-webrtc` under the hood.
 * - **Token server URL**: Android emulator uses `10.0.2.2` to reach the
 *   host machine's localhost; iOS simulator uses `localhost` directly.
 * - **No React Router**: Uses simple state-based screen switching rather
 *   than a router, since there are only two screens.
 * - **No DevicePreview**: React Native does not support the web
 *   `DevicePreview` component for pre-join camera selection.
 *
 * @see {@link JoinScreen} - Room creation/join form with RN permissions
 * @see {@link RoomScreen} - In-room video grid and controls
 */

import React from 'react';
import {ActivityIndicator, Alert, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {HiyveRNProvider, useConnection, useRoom} from '@hiyve/rn-react';
import type {HiyveStoreRNOptions} from '@hiyve/rn-core';
import JoinScreen from './screens/JoinScreen';
import RoomScreen from './screens/RoomScreen';

/**
 * Token server base URL, platform-aware.
 *
 * Android emulators cannot reach the host machine via `localhost` --
 * the special IP `10.0.2.2` is mapped to the host's loopback interface.
 * iOS simulators share the host network stack, so `localhost` works.
 */
const TOKEN_SERVER_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001'
    : 'http://localhost:3001';

/**
 * Configuration passed to `HiyveRNProvider`.
 *
 * - `generateRoomToken` - Called by the SDK when it needs a fresh room
 *   token (on connect and on reconnect). Returns a `{ token, serverRegionUrl }`
 *   object from the token server.
 * - `onError` - Global error handler surfaced as a native Alert dialog.
 */
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

/**
 * Inner content component that reads SDK state to decide which screen to show.
 *
 * Must be rendered inside `HiyveRNProvider` so the hooks have access to
 * the Hiyve store context. Routes between three visual states:
 *
 * 1. **Error** - connection failed, show error message
 * 2. **Connecting** - waiting for signaling handshake, show spinner
 * 3. **In room** - joined successfully, show {@link RoomScreen}
 * 4. **Default** - not connected, show {@link JoinScreen}
 */
function AppContent() {
  /** useConnection provides signaling state; useRoom provides room membership */
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

/**
 * Root application component.
 *
 * Sets up the provider hierarchy:
 * - `SafeAreaProvider` - insets for notches and status bars
 * - `HiyveRNProvider` - initializes the Hiyve native WebRTC store
 * - `AppContent` - state-driven screen routing
 */
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
