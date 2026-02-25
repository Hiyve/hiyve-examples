import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { useRoom, useConnection } from '@hiyve/react';
import { useContainerBreakpoint } from '@hiyve/utilities';
import { VideoRoom } from '../components/VideoRoom';

const mockUseRoom = vi.mocked(useRoom);
const mockUseConnection = vi.mocked(useConnection);
const mockUseContainerBreakpoint = vi.mocked(useContainerBreakpoint);

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
      isConnecting: false,
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    mockUseContainerBreakpoint.mockReturnValue({
      isBelowBreakpoint: false,
      containerRef: { current: null },
    });
  });

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

  it('shows InviteLinkDisplay for owner', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });
    renderVideoRoom();
    const dialog = screen.getByTestId('invite-link-dialog');
    const props = JSON.parse(dialog.dataset.props!);
    expect(props.roomName).toBe('My Room');
  });

  it('hides InviteLinkDisplay for guest', () => {
    renderVideoRoom();
    expect(screen.queryByTestId('invite-link-dialog')).not.toBeInTheDocument();
  });

  it('passes correct props to VideoGrid', () => {
    renderVideoRoom('Alice');
    const grid = screen.getByTestId('video-grid');
    const props = JSON.parse(grid.dataset.props!);
    expect(props).toMatchObject({
      localVideoElementId: 'local-video',
      localUserName: 'Alice',
      layout: 'grid',
      showLocalFlip: true,
      showNames: true,
      labelPosition: 'bottom-left',
      statusPosition: 'top-right',
      controlPosition: 'bottom-right',
    });
  });

  it('passes correct props to ControlBar', () => {
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props).toMatchObject({
      showLeaveConfirmation: true,
      showScreenShare: true,
      showLayoutSelector: true,
      autoHideTimeout: 3000,
      layout: 'grid',
    });
  });

  it('passes function callbacks to ControlBar', () => {
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props.onLeave).toBe('__fn__');
    expect(props.onLayoutChange).toBe('__fn__');
  });

  it('hides layout selector when container is compact', () => {
    mockUseContainerBreakpoint.mockReturnValue({
      isBelowBreakpoint: true,
      containerRef: { current: null },
    });
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props.showLayoutSelector).toBe(false);
  });

  it('renders LiveClock in the header', () => {
    renderVideoRoom();
    expect(screen.getByTestId('live-clock')).toBeInTheDocument();
  });

  it('calls useContainerBreakpoint with 600', () => {
    renderVideoRoom();
    expect(mockUseContainerBreakpoint).toHaveBeenCalledWith(600);
  });
});
