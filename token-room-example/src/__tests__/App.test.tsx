import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { useConnection, useRoom } from '@hiyve/react';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-token-example-userName');
    localStorage.removeItem('hiyve-token-example-roomName');
    // Reset URL to no query params
    window.history.replaceState({}, '', '/');
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: false,
      isInRoom: false,
    });
  });

  it('renders CreateRoom by default when no URL params and not in room', () => {
    render(<App />);
    expect(screen.getByText('Create a Room')).toBeInTheDocument();
  });

  it('renders JoinRoom when URL has joinToken and region params', () => {
    window.history.replaceState({}, '', '/?joinToken=test-jwt-token&region=us-east-1');
    render(<App />);
    const form = screen.getByTestId('join-with-token-form');
    expect(form).toBeInTheDocument();
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      joinToken: 'test-jwt-token',
      region: 'us-east-1',
    });
  });

  it('renders loading spinner with "Joining room..." when connecting with join params', () => {
    window.history.replaceState({}, '', '/?joinToken=abc&region=us-west-2');
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    render(<App />);
    expect(screen.getByText('Joining room...')).toBeInTheDocument();
  });

  it('renders loading spinner with "Creating room..." when connecting without join params', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
    });
    render(<App />);
    expect(screen.getByText('Creating room...')).toBeInTheDocument();
  });

  it('renders VideoRoom when isInRoom is true', () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    render(<App />);
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  it('reads userName from localStorage and passes it to VideoRoom', () => {
    localStorage.setItem('hiyve-token-example-userName', 'Alice');
    mockUseRoom.mockReturnValue({
      room: { name: 'My Room', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    render(<App />);
    const grid = screen.getByTestId('video-grid');
    expect(JSON.parse(grid.dataset.props!)).toMatchObject({ localUserName: 'Alice' });
  });

  it('does not render JoinRoom when only joinToken is present without region', () => {
    window.history.replaceState({}, '', '/?joinToken=test-jwt-token');
    render(<App />);
    expect(screen.queryByTestId('join-with-token-form')).not.toBeInTheDocument();
    expect(screen.getByText('Create a Room')).toBeInTheDocument();
  });

  it('passes userNameStorageKey and onCreateRoom to JoinWithTokenForm', () => {
    window.history.replaceState({}, '', '/?joinToken=abc&region=us-east-1');
    render(<App />);
    const form = screen.getByTestId('join-with-token-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.userNameStorageKey).toBe('hiyve-token-example-userName');
    expect(props.onCreateRoom).toBe('__fn__');
    expect(props.onUserNameChange).toBe('__fn__');
  });
});
