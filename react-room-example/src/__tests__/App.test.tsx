import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock react-dom/client to prevent the top-level createRoot() call in App.tsx
vi.mock('react-dom/client', () => ({
  default: { createRoot: vi.fn(() => ({ render: vi.fn() })) },
  createRoot: vi.fn(() => ({ render: vi.fn() })),
}));

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-room', () => import('../test/mocks/hiyve-react-room'));

import { useConnection, useRoom } from '@hiyve/react';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);

function mockTokenFetch(token = 'test-room-token') {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    json: () => Promise.resolve({ roomToken: token }),
  } as Response);
}

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it('shows a loading spinner while the token is being fetched', () => {
    // Never resolves - keeps the component in loading state
    vi.spyOn(globalThis, 'fetch').mockReturnValue(new Promise(() => {}));
    render(<App />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    // No "Connecting..." text in the initial loading state
    expect(screen.queryByText('Connecting...')).not.toBeInTheDocument();
  });

  it('shows the join form after the token is fetched', async () => {
    mockTokenFetch();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByLabelText('Room Name')).toBeInTheDocument();
    });
    expect(screen.getByLabelText('Display Name')).toBeInTheDocument();
    expect(screen.getByText('React Room Example')).toBeInTheDocument();
  });

  it('disables buttons when room name is empty', async () => {
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    // Only fill in display name, leave room name empty
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    expect(screen.getByText('Create Room')).toBeDisabled();
    expect(screen.getByText('Join Room')).toBeDisabled();
  });

  it('disables buttons when display name is empty', async () => {
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    // Only fill in room name, leave display name empty
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    expect(screen.getByText('Create Room')).toBeDisabled();
    expect(screen.getByText('Join Room')).toBeDisabled();
  });

  it('enables buttons when both fields are filled', async () => {
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    expect(screen.getByText('Create Room')).toBeEnabled();
    expect(screen.getByText('Join Room')).toBeEnabled();
  });

  it('renders HiyveRoom with the token when Create Room is clicked', async () => {
    mockTokenFetch('my-secret-token');
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    const hiyveRoom = screen.getByTestId('hiyve-room');
    expect(hiyveRoom).toBeInTheDocument();
    expect(JSON.parse(hiyveRoom.dataset.props!)).toMatchObject({
      roomToken: 'my-secret-token',
    });
  });

  it('renders HiyveRoom when Join Room is clicked', async () => {
    mockTokenFetch('join-token');
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Join Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'existing-room');
    await user.type(screen.getByLabelText('Display Name'), 'Bob');
    await user.click(screen.getByText('Join Room'));

    const hiyveRoom = screen.getByTestId('hiyve-room');
    expect(hiyveRoom).toBeInTheDocument();
    expect(JSON.parse(hiyveRoom.dataset.props!)).toMatchObject({
      roomToken: 'join-token',
    });
  });

  it('renders PrebuiltRoom when connected and in room', async () => {
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: vi.fn().mockResolvedValue(undefined),
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: true });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    await waitFor(() => {
      expect(screen.getByTestId('prebuilt-room')).toBeInTheDocument();
    });
  });

  it('shows connecting spinner when isConnecting is true', async () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      createRoom: vi.fn().mockResolvedValue(undefined),
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: false });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    await waitFor(() => {
      expect(screen.getByText('Connecting...')).toBeInTheDocument();
    });
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows connecting spinner when not yet in room', async () => {
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: vi.fn().mockResolvedValue(undefined),
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: false });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    await waitFor(() => {
      expect(screen.getByText('Connecting...')).toBeInTheDocument();
    });
  });

  it('calls createRoom with correct args when Create Room is clicked', async () => {
    const mockCreateRoom = vi.fn().mockResolvedValue(undefined);
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: mockCreateRoom,
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: true });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    await waitFor(() => {
      expect(mockCreateRoom).toHaveBeenCalledWith('my-room', 'Alice');
    });
  });

  it('calls joinRoom with correct args when Join Room is clicked', async () => {
    const mockJoinRoom = vi.fn().mockResolvedValue(undefined);
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: vi.fn().mockResolvedValue(undefined),
      joinRoom: mockJoinRoom,
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: true });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Join Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'existing-room');
    await user.type(screen.getByLabelText('Display Name'), 'Bob');
    await user.click(screen.getByText('Join Room'));

    await waitFor(() => {
      expect(mockJoinRoom).toHaveBeenCalledWith('existing-room', 'Bob');
    });
  });

  it('returns to join form when connection fails', async () => {
    const mockCreateRoom = vi.fn().mockRejectedValue(new Error('Connection failed'));
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: mockCreateRoom,
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({ isInRoom: false });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    // After the connection fails, onLeave is called, returning to the join form
    await waitFor(() => {
      expect(screen.getByLabelText('Room Name')).toBeInTheDocument();
    });
  });

  it('passes onLeave to PrebuiltRoom that calls leaveRoom', async () => {
    const mockLeaveRoom = vi.fn();
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      createRoom: vi.fn().mockResolvedValue(undefined),
      joinRoom: vi.fn().mockResolvedValue(undefined),
      leaveRoom: mockLeaveRoom,
    });
    mockUseRoom.mockReturnValue({ isInRoom: true });
    mockTokenFetch();
    const user = userEvent.setup();
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Create Room')).toBeInTheDocument();
    });
    await user.type(screen.getByLabelText('Room Name'), 'my-room');
    await user.type(screen.getByLabelText('Display Name'), 'Alice');
    await user.click(screen.getByText('Create Room'));

    await waitFor(() => {
      expect(screen.getByTestId('prebuilt-room')).toBeInTheDocument();
    });
    // Verify the onLeave prop is a function
    const prebuiltRoom = screen.getByTestId('prebuilt-room');
    const props = JSON.parse(prebuiltRoom.dataset.props!);
    expect(props.onLeave).toBe('__fn__');
  });
});
