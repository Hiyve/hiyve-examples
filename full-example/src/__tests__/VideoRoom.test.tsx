import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/react-whiteboard', () => import('../test/mocks/hiyve-react-whiteboard'));
vi.mock('@hiyve/react-notes', () => import('../test/mocks/hiyve-react-notes'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import {
  useRoom,
  useConnection,
  useRecording,
  useStreaming,
  useWaitingRoom,
  useHandRaise,
} from '@hiyve/react';
import { VideoRoom } from '../components/VideoRoom';

const mockUseRoom = vi.mocked(useRoom);
const mockUseConnection = vi.mocked(useConnection);
const mockUseRecording = vi.mocked(useRecording);
const mockUseStreaming = vi.mocked(useStreaming);
const mockUseWaitingRoom = vi.mocked(useWaitingRoom);
const mockUseHandRaise = vi.mocked(useHandRaise);

function renderVideoRoom(userName = 'TestUser') {
  return render(<VideoRoom userName={userName} />);
}

describe('VideoRoom', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    mockUseRecording.mockReturnValue({
      isRecording: false,
      recordingDuration: 0,
      responseId: null,
      isRecordingStarting: false,
    });
    mockUseStreaming.mockReturnValue({
      isStreaming: false,
      streamingDuration: 0,
      streamingUrl: null,
      switchStreamingUser: vi.fn(),
    });
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: false,
      wasRejected: false,
    });
    mockUseHandRaise.mockReturnValue({
      raisedHandCount: 0,
      lowerAllHands: vi.fn(),
    });
  });

  // --- Header elements ---

  it('displays the room name', () => {
    renderVideoRoom();
    expect(screen.getByText('My Room')).toBeInTheDocument();
  });

  it('shows owner badge when user is owner', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });
    renderVideoRoom();
    expect(screen.getByText('(Owner)')).toBeInTheDocument();
  });

  it('hides owner badge when user is guest', () => {
    renderVideoRoom();
    expect(screen.queryByText('(Owner)')).not.toBeInTheDocument();
  });

  it('shows RecordingIndicator when recording', () => {
    mockUseRecording.mockReturnValue({
      isRecording: true,
      recordingDuration: 60,
      responseId: null,
      isRecordingStarting: false,
    });
    renderVideoRoom();
    expect(screen.getByTestId('recording-indicator')).toBeInTheDocument();
  });

  it('hides RecordingIndicator when not recording', () => {
    renderVideoRoom();
    expect(screen.queryByTestId('recording-indicator')).not.toBeInTheDocument();
  });

  it('shows StreamingIndicator when streaming', () => {
    mockUseStreaming.mockReturnValue({
      isStreaming: true,
      streamingDuration: 30,
      streamingUrl: null,
      switchStreamingUser: vi.fn(),
    });
    renderVideoRoom();
    expect(screen.getByTestId('streaming-indicator')).toBeInTheDocument();
  });

  it('hides StreamingIndicator when not streaming', () => {
    renderVideoRoom();
    expect(screen.queryByTestId('streaming-indicator')).not.toBeInTheDocument();
  });

  it('shows StreamingUrlDisplay when owner is streaming with URL', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });
    mockUseStreaming.mockReturnValue({
      isStreaming: true,
      streamingDuration: 30,
      streamingUrl: 'https://stream.example.com/abc',
      switchStreamingUser: vi.fn(),
    });
    renderVideoRoom();
    expect(screen.getByTestId('streaming-url-display')).toBeInTheDocument();
  });

  it('shows WaitingRoomAdmittance for owner', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });
    renderVideoRoom();
    expect(screen.getByTestId('waiting-room-admittance')).toBeInTheDocument();
  });

  it('hides WaitingRoomAdmittance for guest', () => {
    renderVideoRoom();
    expect(screen.queryByTestId('waiting-room-admittance')).not.toBeInTheDocument();
  });

  it('shows hand raise badge when hands are raised', () => {
    mockUseHandRaise.mockReturnValue({
      raisedHandCount: 3,
      lowerAllHands: vi.fn(),
    });
    renderVideoRoom();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('shows Lower All button for owner when hands are raised', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });
    mockUseHandRaise.mockReturnValue({
      raisedHandCount: 2,
      lowerAllHands: vi.fn(),
    });
    renderVideoRoom();
    expect(screen.getByText('Lower All')).toBeInTheDocument();
  });

  it('hides Lower All button for guest when hands are raised', () => {
    mockUseHandRaise.mockReturnValue({
      raisedHandCount: 2,
      lowerAllHands: vi.fn(),
    });
    renderVideoRoom();
    expect(screen.queryByText('Lower All')).not.toBeInTheDocument();
  });

  // --- VideoGrid ---

  it('passes correct props to VideoGrid', () => {
    renderVideoRoom('Alice');
    const grid = screen.getByTestId('video-grid');
    const props = JSON.parse(grid.dataset.props!);
    expect(props).toMatchObject({
      localVideoElementId: 'local-video',
      localUserName: 'Alice',
      layout: 'grid',
      showLocalFlip: true,
      showTimer: true,
      showZoom: true,
      showNames: true,
      showEngagement: true,
      labelPosition: 'bottom-left',
      statusPosition: 'top-right',
      controlPosition: 'bottom-right',
      indicatorPosition: 'top-left',
      timerPosition: 'top-right',
      moodPosition: 'top-left',
      engagementPosition: 'top-left',
    });
  });

  it('passes tile overlay order arrays to VideoGrid', () => {
    renderVideoRoom();
    const grid = screen.getByTestId('video-grid');
    const props = JSON.parse(grid.dataset.props!);
    expect(props.tileOverlayOrder).toEqual(['engagement', 'mood', 'name', 'status', 'controls']);
    expect(props.localTileOverlayOrder).toEqual([
      'indicator', 'timer', 'engagement', 'mood', 'name', 'status', 'controls',
    ]);
  });

  // --- ControlBar ---

  it('passes correct feature flags to ControlBar', () => {
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props).toMatchObject({
      showLeaveConfirmation: true,
      showScreenShare: true,
      showSettings: true,
      showLayoutSelector: true,
      showRecordingMenu: true,
      showStreamingOption: true,
      showHandRaise: true,
      autoHideTimeout: 3000,
      layout: 'grid',
    });
  });

  it('passes leaveRoom and layout handlers to ControlBar', () => {
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props.onLeave).toBe('__fn__');
    expect(props.onLayoutChange).toBe('__fn__');
    expect(props.onIntelligenceConfigChange).toBe('__fn__');
  });

  // --- Sidebar ---

  it('renders the Sidebar', () => {
    renderVideoRoom();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
