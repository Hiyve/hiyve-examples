/**
 * @fileoverview JoinScreen - Room Entry Form for React Native
 * @module react-native-example/screens/JoinScreen
 *
 * A simple form that lets the user create or join a video room.
 * Collects a room name and display name, then requests native device
 * permissions before connecting.
 *
 * ## Key Differences from Web JoinForm
 *
 * - **`usePermissions()`** - React Native-only hook that explicitly requests
 *   `CAMERA` and `RECORD_AUDIO` permissions on Android via `PermissionsAndroid`.
 *   On iOS, permissions are requested automatically by `react-native-webrtc`
 *   when media is first accessed, so the hook resolves immediately.
 *   The web examples do not need this -- browsers prompt automatically.
 * - **No DevicePreview** - The web `DevicePreview` component (camera preview
 *   with device selector dropdowns) is not available on React Native.
 * - **No React Router** - Navigation is handled by the parent `AppContent`
 *   component via state; there is no router `navigate()` call here.
 *
 * ## Create vs Join
 *
 * - **Create Room** - Creates a new room and makes you the owner
 * - **Join Room** - Joins an existing room as a participant
 *
 * @see {@link RoomScreen} - Component shown after successfully joining
 */

import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useConnection, usePermissions} from '@hiyve/rn-react';

/**
 * Room entry form -- shown when the user is not yet connected to a room.
 *
 * The form is disabled until both fields are non-empty. On submit it:
 * 1. Requests native camera/mic permissions via `usePermissions()`
 * 2. Calls `createRoom()` or `joinRoom()` from `useConnection()`
 * 3. On success the SDK sets `isInRoom = true`, and the parent
 *    `AppContent` switches to {@link RoomScreen}.
 */
export default function JoinScreen() {
  const [roomName, setRoomName] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState<string | null>(null);

  /** useConnection provides createRoom/joinRoom actions and connection error state */
  const {createRoom, joinRoom, error: connectionError} = useConnection();

  /**
   * usePermissions is React Native-only.
   * Must be called before joining so the OS grants camera/mic access.
   * On Android this triggers the native permission dialog; on iOS it
   * resolves immediately (react-native-webrtc handles iOS prompts).
   */
  const {requestPermissions} = usePermissions();

  /** Both fields must be non-empty for the buttons to be enabled */
  const isValid = roomName.trim().length > 0 && userId.trim().length > 0;

  /**
   * Handles both "Create Room" and "Join Room" actions.
   *
   * Flow:
   * 1. Validate inputs
   * 2. Request native camera/mic permissions (Android shows dialog)
   * 3. Call createRoom or joinRoom on the SDK
   * 4. On failure, surface the error message to the user
   */
  const handleAction = useCallback(
    async (action: 'create' | 'join') => {
      if (!isValid) {
        return;
      }
      setError(null);

      const granted = await requestPermissions();
      if (!granted) {
        setError('Camera and microphone permissions are required');
        return;
      }

      try {
        if (action === 'create') {
          await createRoom(roomName.trim(), userId.trim());
        } else {
          await joinRoom(roomName.trim(), userId.trim());
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : `Failed to ${action} room`;
        setError(message);
      }
    },
    [isValid, roomName, userId, createRoom, joinRoom, requestPermissions],
  );

  /** Show local validation errors or SDK connection errors */
  const displayError = error || connectionError;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hiyve</Text>
      <Text style={styles.subtitle}>React Native Example</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Room Name"
          placeholderTextColor="#666"
          value={roomName}
          onChangeText={setRoomName}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#666"
          value={userId}
          onChangeText={setUserId}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {displayError && <Text style={styles.error}>{displayError}</Text>}

        <TouchableOpacity
          style={[styles.button, styles.createButton, !isValid && styles.buttonDisabled]}
          onPress={() => handleAction('create')}
          disabled={!isValid}>
          <Text style={styles.buttonText}>Create Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.joinButton, !isValid && styles.buttonDisabled]}
          onPress={() => handleAction('join')}
          disabled={!isValid}>
          <Text style={styles.buttonText}>Join Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f23',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#8888aa',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  input: {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#2a2a4a',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  error: {
    color: '#e94560',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  createButton: {
    backgroundColor: '#533483',
  },
  joinButton: {
    backgroundColor: '#2a2a4a',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
