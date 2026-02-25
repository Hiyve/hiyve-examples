/**
 * Mock for @hiyve/rn-react
 *
 * Provides mock implementations of the HiyveRNProvider, hooks, and UI components
 * used throughout the React Native example app.
 */
const React = require('react');
const {View, Text} = require('react-native');

// ---- Default hook return values ----
// Tests can override these via jest.mocked(...).mockReturnValue(...)

const defaultConnectionState = {
  isConnecting: false,
  isConnected: false,
  error: null,
  createRoom: jest.fn().mockResolvedValue(undefined),
  joinRoom: jest.fn().mockResolvedValue(undefined),
  leaveRoom: jest.fn(),
  disconnect: jest.fn(),
};

const defaultRoomState = {
  isInRoom: false,
  room: null,
};

const defaultLocalMediaState = {
  isAudioMuted: false,
  isVideoMuted: false,
  localStream: null,
  toggleAudio: jest.fn(),
  toggleVideo: jest.fn(),
  switchCamera: jest.fn(),
};

const defaultParticipantsState = {
  participants: [],
  localUserId: 'local-user-123',
  participantCount: 1,
};

const defaultLayoutState = {
  dominantSpeaker: null,
};

const defaultHandRaiseState = {
  raisedHands: new Set(),
  toggleHandRaised: jest.fn(),
};

const defaultRecordingState = {
  isRecording: false,
  recordingDuration: 0,
  startRecording: jest.fn(),
  stopRecording: jest.fn(),
};

const defaultStreamingState = {
  isStreaming: false,
  streamingDuration: 0,
  startStreaming: jest.fn(),
  stopStreaming: jest.fn(),
};

const defaultPermissionsState = {
  requestPermissions: jest.fn().mockResolvedValue(true),
  hasPermissions: true,
};

// ---- Hooks ----

const useConnection = jest.fn(() => ({...defaultConnectionState}));
const useRoom = jest.fn(() => ({...defaultRoomState}));
const useLocalMedia = jest.fn(() => ({...defaultLocalMediaState}));
const useParticipants = jest.fn(() => ({...defaultParticipantsState}));
const useLayout = jest.fn(() => ({...defaultLayoutState}));
const useHandRaise = jest.fn(() => ({...defaultHandRaiseState}));
const useRecording = jest.fn(() => ({...defaultRecordingState}));
const useStreaming = jest.fn(() => ({...defaultStreamingState}));
const usePermissions = jest.fn(() => ({...defaultPermissionsState}));

// ---- Components ----

const HiyveRNProvider = ({children}) =>
  React.createElement(View, {testID: 'hiyve-rn-provider'}, children);

const VideoGrid = (props) =>
  React.createElement(View, {testID: 'video-grid', ...props});

const ControlBar = (props) =>
  React.createElement(View, {testID: 'control-bar', ...props});

const VideoTile = (props) =>
  React.createElement(View, {testID: 'video-tile', ...props});

const ParticipantList = (props) =>
  React.createElement(View, {testID: 'participant-list', ...props});

const WaitingRoom = (props) =>
  React.createElement(View, {testID: 'waiting-room', ...props});

const ControlBarButton = (props) =>
  React.createElement(View, {testID: 'control-bar-button', ...props});

const DurationBadge = (props) =>
  React.createElement(View, {testID: 'duration-badge', ...props});

module.exports = {
  // Provider
  HiyveRNProvider,

  // Hooks
  useConnection,
  useRoom,
  useLocalMedia,
  useParticipants,
  useLayout,
  useHandRaise,
  useRecording,
  useStreaming,
  usePermissions,

  // Components
  VideoGrid,
  ControlBar,
  VideoTile,
  ParticipantList,
  WaitingRoom,
  ControlBarButton,
  DurationBadge,

  // Default states (for test convenience)
  __defaultConnectionState: defaultConnectionState,
  __defaultRoomState: defaultRoomState,
  __defaultLocalMediaState: defaultLocalMediaState,
  __defaultParticipantsState: defaultParticipantsState,
  __defaultLayoutState: defaultLayoutState,
  __defaultHandRaiseState: defaultHandRaiseState,
  __defaultRecordingState: defaultRecordingState,
  __defaultStreamingState: defaultStreamingState,
  __defaultPermissionsState: defaultPermissionsState,
};
