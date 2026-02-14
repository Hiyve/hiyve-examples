/**
 * @fileoverview RoomScreen - In-Room Video Experience for React Native
 * @module react-native-example/screens/RoomScreen
 *
 * Displays the active video room with a participant video grid and a
 * feature-rich control bar. This is the main screen the user sees after
 * successfully joining a room via {@link JoinScreen}.
 *
 * ```
 * RoomScreen
 *   ├── Header        ← room name + participant count
 *   ├── VideoGrid     ← renders local + remote video tiles
 *   └── ControlBar    ← mute, camera, layout, hand raise,
 *                       recording, streaming, leave
 * ```
 *
 * ## Hooks Used
 *
 * | Hook               | Purpose                                       |
 * |--------------------|-----------------------------------------------|
 * | `useRoom`          | Room metadata (name, id)                      |
 * | `useConnection`    | `leaveRoom` action to disconnect              |
 * | `useLocalMedia`    | Local audio/video state and toggle actions    |
 * | `useParticipants`  | Participant list, local user ID, count        |
 * | `useLayout`        | Dominant speaker detection for spotlight view  |
 * | `useHandRaise`     | Hand-raise state and toggle                   |
 * | `useRecording`     | Server-side recording state and controls      |
 * | `useStreaming`     | RTMP live-streaming state and controls        |
 *
 * ## Key Differences from Web VideoRoom
 *
 * - **`switchCamera`** - Flips between front/rear cameras. This is a native-
 *   only capability; on web you select cameras via `DevicePreview`.
 * - **`VideoGrid`** and **`ControlBar`** are imported from `@hiyve/rn-react`
 *   (not `@hiyve/react-ui`). They render native `RTCView` components.
 * - **Explicit prop passing** - The RN `VideoGrid` and `ControlBar` receive
 *   all state as props rather than reading from context internally, giving
 *   the integrator full control over the data flow.
 *
 * @see {@link JoinScreen} - Previous screen (room entry form)
 */

import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ControlBar,
  VideoGrid,
  useConnection,
  useHandRaise,
  useLayout,
  useLocalMedia,
  useParticipants,
  useRecording,
  useRoom,
  useStreaming,
} from '@hiyve/rn-react';
import type {ControlBarLayoutMode} from '@hiyve/rn-react';

/**
 * In-room video screen with grid layout, controls, and collaboration features.
 *
 * All media and room state is sourced from SDK hooks and passed as props
 * to the `VideoGrid` and `ControlBar` UI components. The component itself
 * has minimal local state -- only the layout mode selector (`grid` vs
 * `spotlight`) is managed locally.
 */
export default function RoomScreen() {
  /** Room metadata (name, id). Null until fully joined. */
  const {room} = useRoom();

  /** leaveRoom disconnects from signaling and tears down media */
  const {leaveRoom} = useConnection();

  /**
   * Local media state and actions.
   * - `localStream` is the native MediaStream for the local camera
   * - `switchCamera` toggles front/rear camera (RN-only capability)
   */
  const {
    isAudioMuted,
    isVideoMuted,
    localStream,
    toggleAudio,
    toggleVideo,
    switchCamera,
  } = useLocalMedia();

  /** Participant list including remote streams, plus local user ID for identification */
  const {participants, localUserId, participantCount} = useParticipants();

  /** Dominant speaker detection -- used by VideoGrid in spotlight layout */
  const {dominantSpeaker} = useLayout();

  /** Hand-raise state: a Set of user IDs with raised hands */
  const {raisedHands, toggleHandRaised} = useHandRaise();

  /** Server-side recording state. Duration is in seconds, updated live. */
  const {isRecording, recordingDuration, startRecording, stopRecording} =
    useRecording();

  /** RTMP live-streaming state. Requires an RTMP URL configured server-side. */
  const {isStreaming, streamingDuration, startStreaming, stopStreaming} =
    useStreaming();

  /** Local layout mode state -- 'grid' (default) or 'spotlight' */
  const [layout, setLayout] = useState<ControlBarLayoutMode>('grid');

  /** Toggle server-side recording on/off */
  const handleToggleRecording = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  /** Toggle RTMP live streaming on/off */
  const handleToggleStreaming = useCallback(() => {
    if (isStreaming) {
      stopStreaming();
    } else {
      // TODO: Replace with actual RTMP URL (e.g., from user input or config)
      startStreaming();
    }
  }, [isStreaming, startStreaming, stopStreaming]);

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
          layout={layout}
          dominantUserId={dominantSpeaker}
        />
      </View>

      <ControlBar
        isAudioMuted={isAudioMuted}
        isVideoMuted={isVideoMuted}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onFlipCamera={switchCamera}
        onLeave={leaveRoom}
        showLayoutSelector
        showHandRaise
        showRecording
        showStreaming
        showLeaveConfirmation
        autoHideTimeout={3000}
        layout={layout}
        onLayoutChange={setLayout}
        isHandRaised={localUserId ? raisedHands.has(localUserId) : false}
        onToggleHandRaise={toggleHandRaised}
        isRecording={isRecording}
        recordingDuration={recordingDuration}
        onToggleRecording={handleToggleRecording}
        isStreaming={isStreaming}
        streamingDuration={streamingDuration}
        onToggleStreaming={handleToggleStreaming}
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
