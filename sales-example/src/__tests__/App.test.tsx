import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));
vi.mock('@hiyve/cloud', () => import('../test/mocks/hiyve-cloud'));

import { useConnection, useRoom, useWaitForHost } from '@hiyve/react';
import { useAnalysis } from '@hiyve/react-intelligence';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);
const mockUseWaitForHost = vi.mocked(useWaitForHost);
const mockUseAnalysis = vi.mocked(useAnalysis);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-sales-example-userName');
    localStorage.removeItem('hiyve-sales-example-roomName');

    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      isConnecting: false,
    });
    mockUseRoom.mockReturnValue({
      room: null,
      isOwner: false,
      isInRoom: false,
    });
    mockUseWaitForHost.mockReturnValue({
      isWaiting: false,
    });
    mockUseAnalysis.mockReturnValue({
      result: null,
      loading: false,
      analyzeSalesCall: vi.fn(),
      clearResult: vi.fn(),
    });
  });

  it('renders LandingPage by default', () => {
    render(<App />);
    expect(screen.getByText('Sales Coach')).toBeInTheDocument();
  });

  it('renders Start a Sales Call card on landing', () => {
    render(<App />);
    expect(screen.getByText('Start a Sales Call')).toBeInTheDocument();
  });

  it('renders Search Past Calls card on landing', () => {
    render(<App />);
    expect(screen.getByText('Search Past Calls')).toBeInTheDocument();
  });

  it('switches to call mode and shows JoinForm when not connected', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Sales Call'));
    expect(screen.getByTestId('join-form')).toBeInTheDocument();
  });

  it('passes correct props to JoinForm', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Sales Call'));
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      autoConnect: true,
      storagePrefix: 'hiyve-sales-example',
    });
  });

  it('shows WaitForHostScreen when waiting for host', async () => {
    mockUseWaitForHost.mockReturnValue({ isWaiting: true });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Sales Call'));
    expect(screen.getByTestId('wait-for-host-screen')).toBeInTheDocument();
  });

  it('shows ConnectingScreen when connecting', async () => {
    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      isConnecting: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Sales Call'));
    expect(screen.getByTestId('connecting-screen')).toBeInTheDocument();
  });

  it('shows VideoRoom when in room', async () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Sales Room', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start a Sales Call'));
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  it('switches to search mode and shows SearchPanel', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Calls'));
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('returns to landing from search mode via Back button', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Calls'));
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
    await user.click(screen.getByText('Back'));
    expect(screen.getByText('Sales Coach')).toBeInTheDocument();
  });
});
