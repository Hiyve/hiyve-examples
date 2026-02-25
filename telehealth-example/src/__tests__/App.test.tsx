import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { useConnection, useRoom, useWaitForHost } from '@hiyve/react';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);
const mockUseWaitForHost = vi.mocked(useWaitForHost);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-telehealth-example-userName');
    localStorage.removeItem('hiyve-telehealth-example-roomName');

    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      isConnecting: false,
    });
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: false,
      isInRoom: false,
    });
    mockUseWaitForHost.mockReturnValue({
      isWaiting: false,
    });
  });

  it('renders LandingPage in landing mode', () => {
    render(<App />);
    expect(screen.getByText('Telehealth Visit Notes')).toBeInTheDocument();
  });

  it('renders LandingPage with Start a Visit card', () => {
    render(<App />);
    expect(screen.getByText('Start a Visit')).toBeInTheDocument();
  });

  it('renders LandingPage with Search Past Visits card', () => {
    render(<App />);
    expect(screen.getByText('Search Past Visits')).toBeInTheDocument();
  });

  it('switches to call mode and shows JoinForm when not connected', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Visit'));
    expect(screen.getByTestId('join-form')).toBeInTheDocument();
  });

  it('passes correct props to JoinForm', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Visit'));
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      autoConnect: true,
      storagePrefix: 'hiyve-telehealth-example',
    });
    expect(props.labels).toMatchObject({
      title: 'Telehealth Session',
      subtitle: 'Start or join a telehealth consultation',
    });
  });

  it('shows ConnectingScreen in call mode when connecting', async () => {
    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      isConnecting: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Visit'));
    expect(screen.getByTestId('connecting-screen')).toBeInTheDocument();
  });

  it('shows WaitForHostScreen in call mode when waiting for host', async () => {
    mockUseWaitForHost.mockReturnValue({ isWaiting: true });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Visit'));
    expect(screen.getByTestId('wait-for-host-screen')).toBeInTheDocument();
  });

  it('shows VideoRoom in call mode when in room', async () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: false,
      isInRoom: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Visit'));
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  it('switches to search mode and shows SearchView', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Visits'));
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('returns to landing from search via Back button', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Visits'));
    await user.click(screen.getByText('Back'));
    expect(screen.getByText('Telehealth Visit Notes')).toBeInTheDocument();
  });
});
