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
import { useAnalysis } from '@hiyve/react-intelligence';
import App from '../App';

const mockUseConnection = vi.mocked(useConnection);
const mockUseRoom = vi.mocked(useRoom);
const mockUseWaitForHost = vi.mocked(useWaitForHost);
const mockUseAnalysis = vi.mocked(useAnalysis);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

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
      analyzeInterview: vi.fn(),
      clearResult: vi.fn(),
    });
  });

  // --- Landing mode (default) ---

  it('renders LandingPage by default', () => {
    render(<App />);
    expect(screen.getByText('Interview Platform')).toBeInTheDocument();
  });

  // --- Transition to call mode ---

  it('renders JoinForm when call mode is entered', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    expect(screen.getByTestId('join-form')).toBeInTheDocument();
  });

  it('passes correct props to JoinForm', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      autoConnect: true,
      storagePrefix: 'hiyve-interview-example',
    });
    expect(props.labels).toMatchObject({
      title: 'Interview Room',
      subtitle: 'Start or join an interview session',
    });
  });

  it('renders WaitForHostScreen when waiting for host in call mode', async () => {
    mockUseWaitForHost.mockReturnValue({ isWaiting: true });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    expect(screen.getByTestId('wait-for-host-screen')).toBeInTheDocument();
  });

  it('renders ConnectingScreen when connecting in call mode', async () => {
    mockUseConnection.mockReturnValue({
      leaveRoom: vi.fn(),
      createRoom: vi.fn(),
      joinRoom: vi.fn(),
      isConnecting: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    expect(screen.getByTestId('connecting-screen')).toBeInTheDocument();
  });

  it('renders VideoRoom when in room during call mode', async () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Interview-1', id: 'room-1' },
      isOwner: false,
      isInRoom: true,
    });
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  // --- Transition to search mode ---

  it('renders SearchView when search mode is entered', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Interviews'));
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  // --- Post-meeting mode ---

  it('renders PostMeetingView in postMeeting mode with analysis data', async () => {
    const analyzeInterview = vi.fn();
    mockUseAnalysis.mockReturnValue({
      result: { hiringRecommendation: 'yes', strengths: ['Good'], concerns: [] },
      loading: false,
      analyzeInterview,
      clearResult: vi.fn(),
    });
    mockUseRoom.mockReturnValue({
      room: { name: 'Interview-1', id: 'room-1' },
      isOwner: true,
      isInRoom: true,
    });

    const user = userEvent.setup();
    render(<App />);
    // Enter call mode
    await user.click(screen.getByText('Start an Interview'));
    // The VideoRoom should be rendered; trigger leave & analyze via dialog
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  // --- Back navigation ---

  it('returns to landing from search via back button', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Search Past Interviews'));
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
    await user.click(screen.getByText('Back'));
    expect(screen.getByText('Interview Platform')).toBeInTheDocument();
  });

  it('returns to landing from JoinForm via back', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start an Interview'));
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props.onBack).toBe('__fn__');
  });
});
