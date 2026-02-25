import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-rooms', () => import('../test/mocks/hiyve-react-rooms'));
vi.mock('@hiyve/cloud', () => import('../test/mocks/hiyve-cloud'));
vi.mock('@hiyve/core', () => import('../test/mocks/hiyve-core'));

import { GuestLobby } from '../components/GuestLobby';

function makeCloudClient() {
  return {
    advertiseRoom: vi.fn(),
    removeAdvertisedRoom: vi.fn(),
    getActiveRoomsStreamUrl: vi.fn().mockResolvedValue('https://stream.example.com/rooms'),
  };
}

describe('GuestLobby', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('shows unavailable message when cloudClient is null', () => {
    render(<GuestLobby cloudClient={null} onJoinRoom={vi.fn()} />);
    expect(screen.getByText(/Cloud client not available/)).toBeInTheDocument();
  });

  it('renders the heading when cloudClient is provided', () => {
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);
    expect(screen.getByText('Join a Room')).toBeInTheDocument();
  });

  it('renders the guest ID input field', () => {
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);
    expect(screen.getByLabelText('Your User ID')).toBeInTheDocument();
  });

  it('reads persisted guestId from localStorage', () => {
    localStorage.setItem('hiyve-rooms-guestid', 'guest-saved');
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);
    const input = screen.getByLabelText('Your User ID') as HTMLInputElement;
    expect(input.value).toBe('guest-saved');
  });

  it('persists guestId to localStorage on change', async () => {
    const user = userEvent.setup();
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);

    const input = screen.getByLabelText('Your User ID');
    await user.clear(input);
    await user.type(input, 'new-guest');
    expect(localStorage.getItem('hiyve-rooms-guestid')).toBe('new-guest');
  });

  it('disables Find Rooms button when guestId is empty', () => {
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);
    const button = screen.getByRole('button', { name: 'Find Rooms' });
    expect(button).toBeDisabled();
  });

  it('enables Find Rooms button when guestId is entered', async () => {
    const user = userEvent.setup();
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);

    await user.type(screen.getByLabelText('Your User ID'), 'guest-1');
    const button = screen.getByRole('button', { name: 'Find Rooms' });
    expect(button).toBeEnabled();
  });

  it('fetches stream URL and renders ActiveRoomsList on Find Rooms click', async () => {
    const user = userEvent.setup();
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);

    await user.type(screen.getByLabelText('Your User ID'), 'guest-1');
    await user.click(screen.getByRole('button', { name: 'Find Rooms' }));

    expect(client.getActiveRoomsStreamUrl).toHaveBeenCalledWith('guest-1');
    expect(await screen.findByTestId('active-rooms-list')).toBeInTheDocument();
  });

  it('passes correct streamUrl to ActiveRoomsList', async () => {
    const user = userEvent.setup();
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);

    await user.type(screen.getByLabelText('Your User ID'), 'guest-1');
    await user.click(screen.getByRole('button', { name: 'Find Rooms' }));

    const list = await screen.findByTestId('active-rooms-list');
    const props = JSON.parse(list.dataset.props!);
    expect(props.streamUrl).toBe('https://stream.example.com/rooms');
  });

  it('shows placeholder text when no stream URL is set', () => {
    const client = makeCloudClient();
    render(<GuestLobby cloudClient={client as never} onJoinRoom={vi.fn()} />);
    expect(
      screen.getByText(/Enter your User ID and click/)
    ).toBeInTheDocument();
  });
});
