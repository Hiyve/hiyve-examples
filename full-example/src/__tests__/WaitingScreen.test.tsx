import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));

import { useConnection, useRoom, useWaitingRoom } from '@hiyve/react';
import { WaitingScreen } from '../components/WaitingScreen';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);
const mockUseWaitingRoom = vi.mocked(useWaitingRoom);

describe('WaitingScreen', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: false,
      isInRoom: false,
    });
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: false,
      wasRejected: false,
    });
  });

  it('renders WaitingRoomGuest with status=waiting when waiting for admission', () => {
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: true,
      wasRejected: false,
    });
    render(<WaitingScreen />);
    const guest = screen.getByTestId('waiting-room-guest');
    expect(guest).toBeInTheDocument();
    const props = JSON.parse(guest.dataset.props!);
    expect(props).toMatchObject({
      status: 'waiting',
      roomName: 'Test Room',
    });
    expect(props.onCancel).toBe('__fn__');
  });

  it('renders WaitingRoomGuest with status=rejected when rejected', () => {
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: false,
      wasRejected: true,
    });
    render(<WaitingScreen />);
    const guest = screen.getByTestId('waiting-room-guest');
    expect(guest).toBeInTheDocument();
    const props = JSON.parse(guest.dataset.props!);
    expect(props).toMatchObject({
      status: 'rejected',
      roomName: 'Test Room',
    });
    expect(props.onLeave).toBe('__fn__');
  });

  it('renders nothing when neither waiting nor rejected', () => {
    const { container } = render(<WaitingScreen />);
    expect(container.innerHTML).toBe('');
  });

  it('passes room name to WaitingRoomGuest', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Custom Room', id: 'room-456' },
      isOwner: false,
      isInRoom: false,
    });
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: true,
      wasRejected: false,
    });
    render(<WaitingScreen />);
    const guest = screen.getByTestId('waiting-room-guest');
    const props = JSON.parse(guest.dataset.props!);
    expect(props.roomName).toBe('Custom Room');
  });
});
