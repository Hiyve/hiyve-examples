import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));

import { useRoom, useConnection } from '@hiyve/react';
import { VideoRoom } from '../components/VideoRoom';

const mockUseRoom = vi.mocked(useRoom);
const mockUseConnection = vi.mocked(useConnection);

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
      layout: 'grid',
    });
  });

  it('passes leaveRoom to ControlBar onLeave', () => {
    renderVideoRoom();
    const bar = screen.getByTestId('control-bar');
    const props = JSON.parse(bar.dataset.props!);
    expect(props.onLeave).toBe('__fn__');
    expect(props.onLayoutChange).toBe('__fn__');
  });
});
