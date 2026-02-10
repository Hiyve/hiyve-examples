import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ControlBarProps {
  isAudioMuted: boolean;
  isVideoMuted: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onFlipCamera: () => void;
  onLeave: () => void;
}

export default function ControlBar({
  isAudioMuted,
  isVideoMuted,
  onToggleAudio,
  onToggleVideo,
  onFlipCamera,
  onLeave,
}: ControlBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isAudioMuted && styles.buttonMuted]}
        onPress={onToggleAudio}>
        <Text style={styles.buttonText}>{isAudioMuted ? 'Unmute' : 'Mute'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isVideoMuted && styles.buttonMuted]}
        onPress={onToggleVideo}>
        <Text style={styles.buttonText}>
          {isVideoMuted ? 'Cam On' : 'Cam Off'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onFlipCamera}>
        <Text style={styles.buttonText}>Flip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.leaveButton]}
        onPress={onLeave}>
        <Text style={styles.buttonText}>Leave</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a2e',
    borderTopWidth: 1,
    borderTopColor: '#2a2a4a',
  },
  button: {
    backgroundColor: '#2a2a4a',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 70,
    alignItems: 'center',
  },
  buttonMuted: {
    backgroundColor: '#e94560',
  },
  leaveButton: {
    backgroundColor: '#c0392b',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
