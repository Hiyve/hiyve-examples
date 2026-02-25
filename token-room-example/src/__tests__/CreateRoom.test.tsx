import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));

import { useConnection } from '@hiyve/react';
import { CreateRoom } from '../components/CreateRoom';

const mockUseConnection = vi.mocked(useConnection);

describe('CreateRoom', () => {
  const mockCreateRoom = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-token-example-userName');
    localStorage.removeItem('hiyve-token-example-roomName');
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      leaveRoom: vi.fn(),
      createRoom: mockCreateRoom,
      joinRoom: vi.fn(),
    });
  });

  it('renders the form with title and fields', () => {
    render(<CreateRoom />);
    expect(screen.getByText('Create a Room')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Room Name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create room/i })).toBeInTheDocument();
  });

  it('pre-fills fields from localStorage', () => {
    localStorage.setItem('hiyve-token-example-userName', 'Alice');
    localStorage.setItem('hiyve-token-example-roomName', 'standup');
    render(<CreateRoom />);
    expect(screen.getByLabelText('Your Name')).toHaveValue('Alice');
    expect(screen.getByLabelText('Room Name')).toHaveValue('standup');
  });

  it('disables button when userName is too short', () => {
    render(<CreateRoom />);
    const button = screen.getByRole('button', { name: /create room/i });
    expect(button).toBeDisabled();
  });

  it('disables button when roomName is empty', async () => {
    const user = userEvent.setup();
    render(<CreateRoom />);
    await user.type(screen.getByLabelText('Your Name'), 'Alice');
    const button = screen.getByRole('button', { name: /create room/i });
    expect(button).toBeDisabled();
  });

  it('enables button when both fields are valid', async () => {
    const user = userEvent.setup();
    render(<CreateRoom />);
    await user.type(screen.getByLabelText('Your Name'), 'Alice');
    await user.type(screen.getByLabelText('Room Name'), 'standup');
    const button = screen.getByRole('button', { name: /create room/i });
    expect(button).toBeEnabled();
  });

  it('calls createRoom with trimmed values on submit', async () => {
    const user = userEvent.setup();
    render(<CreateRoom />);
    await user.type(screen.getByLabelText('Your Name'), 'Alice');
    await user.type(screen.getByLabelText('Room Name'), 'standup');
    await user.click(screen.getByRole('button', { name: /create room/i }));
    expect(mockCreateRoom).toHaveBeenCalledWith('standup', 'Alice');
  });

  it('persists userName to localStorage on change', async () => {
    const user = userEvent.setup();
    render(<CreateRoom />);
    await user.type(screen.getByLabelText('Your Name'), 'Bob');
    expect(localStorage.getItem('hiyve-token-example-userName')).toBe('Bob');
  });

  it('persists roomName to localStorage on change', async () => {
    const user = userEvent.setup();
    render(<CreateRoom />);
    await user.type(screen.getByLabelText('Room Name'), 'daily');
    expect(localStorage.getItem('hiyve-token-example-roomName')).toBe('daily');
  });

  it('calls onUserNameChange callback when userName changes', async () => {
    const onUserNameChange = vi.fn();
    const user = userEvent.setup();
    render(<CreateRoom onUserNameChange={onUserNameChange} />);
    await user.type(screen.getByLabelText('Your Name'), 'X');
    expect(onUserNameChange).toHaveBeenCalledWith('X');
  });

  it('does not call createRoom when fields have only whitespace', () => {
    localStorage.setItem('hiyve-token-example-userName', '   ');
    localStorage.setItem('hiyve-token-example-roomName', '   ');
    render(<CreateRoom />);
    const button = screen.getByRole('button', { name: /create room/i });
    expect(button).toBeDisabled();
    expect(mockCreateRoom).not.toHaveBeenCalled();
  });
});
