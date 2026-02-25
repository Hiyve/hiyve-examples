import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-rooms', () => import('../test/mocks/hiyve-react-rooms'));
vi.mock('@hiyve/cloud', () => import('../test/mocks/hiyve-cloud'));
vi.mock('@hiyve/core', () => import('../test/mocks/hiyve-core'));

import { useConnection, useRoom, useCloudClient } from '@hiyve/react';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);
const mockUseCloudClient = vi.mocked(useCloudClient);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({
      room: null as unknown as { name: string; id: string },
      isOwner: false,
      isInRoom: false,
    });
    mockUseCloudClient.mockReturnValue({
      advertiseRoom: vi.fn(),
      removeAdvertisedRoom: vi.fn(),
      getActiveRoomsStreamUrl: vi.fn(),
    });
  });

  it('renders loading state when connecting', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      leaveRoom: vi.fn(),
    });
    render(<App />);
    expect(screen.getByText('Connecting...')).toBeInTheDocument();
  });

  it('renders tabbed dashboard when not in room', () => {
    render(<App />);
    expect(screen.getByText('Host')).toBeInTheDocument();
    expect(screen.getByText('Join')).toBeInTheDocument();
  });

  it('shows host tab (RoomDashboard) by default', () => {
    render(<App />);
    expect(screen.getByTestId('rooms-list')).toBeInTheDocument();
    expect(screen.getByText('Room Dashboard')).toBeInTheDocument();
  });

  it('switches to guest tab when Join is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText('Join'));
    expect(screen.getByText('Join a Room')).toBeInTheDocument();
  });

  it('persists tab selection in localStorage', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText('Join'));
    expect(localStorage.getItem('hiyve-rooms-tab')).toBe('guest');
  });

  it('reads persisted tab from localStorage', () => {
    localStorage.setItem('hiyve-rooms-tab', 'guest');
    render(<App />);
    expect(screen.getByText('Join a Room')).toBeInTheDocument();
  });

  it('renders VideoRoom when in room', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Active Room', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    render(<App />);
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
    expect(screen.getByTestId('control-bar')).toBeInTheDocument();
  });

  it('generates and persists userId if not in localStorage', () => {
    render(<App />);
    const storedId = localStorage.getItem('hiyve-rooms-userid');
    expect(storedId).toBeTruthy();
    expect(storedId!.startsWith('user-')).toBe(true);
  });

  it('reuses persisted userId from localStorage', () => {
    localStorage.setItem('hiyve-rooms-userid', 'user-existing');
    render(<App />);
    // Verify the RoomDashboard receives the persisted userId
    const roomsList = screen.getByTestId('rooms-list');
    const props = JSON.parse(roomsList.dataset.props!);
    expect(props.userId).toBe('user-existing');
  });
});
