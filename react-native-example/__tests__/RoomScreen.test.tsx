/**
 * @fileoverview Tests for RoomScreen component.
 *
 * Covers:
 * - VideoGrid receives correct props from hooks
 * - ControlBar receives correct props from hooks
 * - Room header displays room name and participant count
 * - Layout state management (grid/spotlight toggle)
 * - Recording toggle dispatches correct actions
 * - Streaming toggle dispatches correct actions
 */

import React from 'react';
import {render, screen, act} from '@testing-library/react-native';
import RoomScreen from '../src/screens/RoomScreen';
import {
  useConnection,
  useRoom,
  useLocalMedia,
  useParticipants,
  useLayout,
  useHandRaise,
  useRecording,
  useStreaming,
} from '@hiyve/rn-react';

const mockUseConnection = useConnection as jest.Mock;
const mockUseRoom = useRoom as jest.Mock;
const mockUseLocalMedia = useLocalMedia as jest.Mock;
const mockUseParticipants = useParticipants as jest.Mock;
const mockUseLayout = useLayout as jest.Mock;
const mockUseHandRaise = useHandRaise as jest.Mock;
const mockUseRecording = useRecording as jest.Mock;
const mockUseStreaming = useStreaming as jest.Mock;

// Shared mock functions
const mockLeaveRoom = jest.fn();
const mockToggleAudio = jest.fn();
const mockToggleVideo = jest.fn();
const mockSwitchCamera = jest.fn();
const mockToggleHandRaised = jest.fn();
const mockStartRecording = jest.fn();
const mockStopRecording = jest.fn();
const mockStartStreaming = jest.fn();
const mockStopStreaming = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  mockUseConnection.mockReturnValue({
    leaveRoom: mockLeaveRoom,
  });

  mockUseRoom.mockReturnValue({
    room: {name: 'Test Room', id: 'room-abc'},
  });

  mockUseLocalMedia.mockReturnValue({
    isAudioMuted: false,
    isVideoMuted: false,
    localStream: {id: 'local-stream'},
    toggleAudio: mockToggleAudio,
    toggleVideo: mockToggleVideo,
    switchCamera: mockSwitchCamera,
  });

  mockUseParticipants.mockReturnValue({
    participants: [
      {userId: 'user-1', displayName: 'Alice', stream: {id: 'stream-1'}},
      {userId: 'user-2', displayName: 'Bob', stream: {id: 'stream-2'}},
    ],
    localUserId: 'user-1',
    participantCount: 2,
  });

  mockUseLayout.mockReturnValue({
    dominantSpeaker: null,
  });

  mockUseHandRaise.mockReturnValue({
    raisedHands: new Set(),
    toggleHandRaised: mockToggleHandRaised,
  });

  mockUseRecording.mockReturnValue({
    isRecording: false,
    recordingDuration: 0,
    startRecording: mockStartRecording,
    stopRecording: mockStopRecording,
  });

  mockUseStreaming.mockReturnValue({
    isStreaming: false,
    streamingDuration: 0,
    startStreaming: mockStartStreaming,
    stopStreaming: mockStopStreaming,
  });
});

describe('RoomScreen', () => {
  describe('header', () => {
    it('displays the room name', () => {
      render(<RoomScreen />);

      expect(screen.getByText('Test Room')).toBeTruthy();
    });

    it('displays participant count with correct pluralization', () => {
      render(<RoomScreen />);

      expect(screen.getByText('2 participants')).toBeTruthy();
    });

    it('uses singular "participant" for count of 1', () => {
      mockUseParticipants.mockReturnValue({
        participants: [{userId: 'user-1', displayName: 'Alice', stream: null}],
        localUserId: 'user-1',
        participantCount: 1,
      });

      render(<RoomScreen />);

      expect(screen.getByText('1 participant')).toBeTruthy();
    });

    it('displays empty string when room is null', () => {
      mockUseRoom.mockReturnValue({
        room: null,
      });

      render(<RoomScreen />);

      // Room name should fall back to empty string
      expect(screen.queryByText('Test Room')).toBeNull();
    });
  });

  describe('VideoGrid props', () => {
    it('renders a VideoGrid component', () => {
      render(<RoomScreen />);

      expect(screen.getByTestId('video-grid')).toBeTruthy();
    });

    it('passes localStream to VideoGrid', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.localStream).toEqual({id: 'local-stream'});
    });

    it('passes localUserId to VideoGrid', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.localUserId).toBe('user-1');
    });

    it('passes participants array to VideoGrid', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.participants).toHaveLength(2);
      expect(videoGrid.props.participants[0].displayName).toBe('Alice');
      expect(videoGrid.props.participants[1].displayName).toBe('Bob');
    });

    it('passes layout mode to VideoGrid (default is grid)', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.layout).toBe('grid');
    });

    it('passes dominantSpeaker to VideoGrid as dominantUserId', () => {
      mockUseLayout.mockReturnValue({
        dominantSpeaker: 'user-2',
      });

      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.dominantUserId).toBe('user-2');
    });

    it('passes local audio/video muted state to VideoGrid', () => {
      mockUseLocalMedia.mockReturnValue({
        isAudioMuted: true,
        isVideoMuted: true,
        localStream: null,
        toggleAudio: mockToggleAudio,
        toggleVideo: mockToggleVideo,
        switchCamera: mockSwitchCamera,
      });

      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.isLocalAudioMuted).toBe(true);
      expect(videoGrid.props.isLocalVideoMuted).toBe(true);
    });

    it('passes "You" as localDisplayName', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid.props.localDisplayName).toBe('You');
    });
  });

  describe('ControlBar props', () => {
    it('renders a ControlBar component', () => {
      render(<RoomScreen />);

      expect(screen.getByTestId('control-bar')).toBeTruthy();
    });

    it('passes audio/video muted state to ControlBar', () => {
      mockUseLocalMedia.mockReturnValue({
        isAudioMuted: true,
        isVideoMuted: false,
        localStream: null,
        toggleAudio: mockToggleAudio,
        toggleVideo: mockToggleVideo,
        switchCamera: mockSwitchCamera,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isAudioMuted).toBe(true);
      expect(controlBar.props.isVideoMuted).toBe(false);
    });

    it('passes toggle callbacks to ControlBar', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.onToggleAudio).toBe(mockToggleAudio);
      expect(controlBar.props.onToggleVideo).toBe(mockToggleVideo);
    });

    it('passes switchCamera as onFlipCamera to ControlBar', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.onFlipCamera).toBe(mockSwitchCamera);
    });

    it('passes leaveRoom as onLeave to ControlBar', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.onLeave).toBe(mockLeaveRoom);
    });

    it('enables layout selector, hand raise, recording, and streaming features', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.showLayoutSelector).toBe(true);
      expect(controlBar.props.showHandRaise).toBe(true);
      expect(controlBar.props.showRecording).toBe(true);
      expect(controlBar.props.showStreaming).toBe(true);
      expect(controlBar.props.showLeaveConfirmation).toBe(true);
    });

    it('passes autoHideTimeout of 3000 to ControlBar', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.autoHideTimeout).toBe(3000);
    });

    it('passes hand raise state to ControlBar', () => {
      const raisedHands = new Set(['user-1']);
      mockUseHandRaise.mockReturnValue({
        raisedHands,
        toggleHandRaised: mockToggleHandRaised,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isHandRaised).toBe(true);
      expect(controlBar.props.onToggleHandRaise).toBe(mockToggleHandRaised);
    });

    it('passes isHandRaised as false when local user has not raised hand', () => {
      const raisedHands = new Set(['user-2']); // someone else raised
      mockUseHandRaise.mockReturnValue({
        raisedHands,
        toggleHandRaised: mockToggleHandRaised,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isHandRaised).toBe(false);
    });

    it('passes isHandRaised as false when localUserId is null', () => {
      mockUseParticipants.mockReturnValue({
        participants: [],
        localUserId: null,
        participantCount: 0,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isHandRaised).toBe(false);
    });

    it('passes recording state to ControlBar', () => {
      mockUseRecording.mockReturnValue({
        isRecording: true,
        recordingDuration: 120,
        startRecording: mockStartRecording,
        stopRecording: mockStopRecording,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isRecording).toBe(true);
      expect(controlBar.props.recordingDuration).toBe(120);
    });

    it('passes streaming state to ControlBar', () => {
      mockUseStreaming.mockReturnValue({
        isStreaming: true,
        streamingDuration: 60,
        startStreaming: mockStartStreaming,
        stopStreaming: mockStopStreaming,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar.props.isStreaming).toBe(true);
      expect(controlBar.props.streamingDuration).toBe(60);
    });
  });

  describe('recording toggle handler', () => {
    it('calls startRecording when not currently recording', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      // Invoke the onToggleRecording callback
      controlBar.props.onToggleRecording();

      expect(mockStartRecording).toHaveBeenCalledTimes(1);
      expect(mockStopRecording).not.toHaveBeenCalled();
    });

    it('calls stopRecording when currently recording', () => {
      mockUseRecording.mockReturnValue({
        isRecording: true,
        recordingDuration: 45,
        startRecording: mockStartRecording,
        stopRecording: mockStopRecording,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      controlBar.props.onToggleRecording();

      expect(mockStopRecording).toHaveBeenCalledTimes(1);
      expect(mockStartRecording).not.toHaveBeenCalled();
    });
  });

  describe('streaming toggle handler', () => {
    it('calls startStreaming when not currently streaming', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      controlBar.props.onToggleStreaming();

      expect(mockStartStreaming).toHaveBeenCalledTimes(1);
      expect(mockStopStreaming).not.toHaveBeenCalled();
    });

    it('calls stopStreaming when currently streaming', () => {
      mockUseStreaming.mockReturnValue({
        isStreaming: true,
        streamingDuration: 30,
        startStreaming: mockStartStreaming,
        stopStreaming: mockStopStreaming,
      });

      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      controlBar.props.onToggleStreaming();

      expect(mockStopStreaming).toHaveBeenCalledTimes(1);
      expect(mockStartStreaming).not.toHaveBeenCalled();
    });
  });

  describe('layout state', () => {
    it('defaults to grid layout', () => {
      render(<RoomScreen />);

      const videoGrid = screen.getByTestId('video-grid');
      const controlBar = screen.getByTestId('control-bar');

      expect(videoGrid.props.layout).toBe('grid');
      expect(controlBar.props.layout).toBe('grid');
    });

    it('passes onLayoutChange callback to ControlBar', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');
      expect(typeof controlBar.props.onLayoutChange).toBe('function');
    });

    it('updates layout when onLayoutChange is called', () => {
      render(<RoomScreen />);

      const controlBar = screen.getByTestId('control-bar');

      // Simulate layout change to spotlight -- must wrap in act since it triggers setState
      act(() => {
        controlBar.props.onLayoutChange('spotlight');
      });

      // Re-query after state update
      const updatedVideoGrid = screen.getByTestId('video-grid');
      const updatedControlBar = screen.getByTestId('control-bar');

      expect(updatedVideoGrid.props.layout).toBe('spotlight');
      expect(updatedControlBar.props.layout).toBe('spotlight');
    });
  });
});
