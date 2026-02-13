import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useConnection, usePermissions} from '@hiyve/rn-react';

export default function JoinScreen() {
  const [roomName, setRoomName] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const {createRoom, joinRoom, error: connectionError} = useConnection();
  const {requestPermissions} = usePermissions();

  const isValid = roomName.trim().length > 0 && userId.trim().length > 0;

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
