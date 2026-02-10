import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MediaStream, RTCView} from 'react-native-webrtc';

interface RemoteVideoProps {
  stream: MediaStream;
  userId: string;
}

export default function RemoteVideo({stream, userId}: RemoteVideoProps) {
  return (
    <View style={styles.container}>
      <RTCView
        streamURL={stream.toURL()}
        objectFit="cover"
        style={styles.video}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label} numberOfLines={1}>
          {userId}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#16213e',
    minHeight: 200,
  },
  video: {
    flex: 1,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  label: {
    color: '#ffffff',
    fontSize: 12,
  },
});
