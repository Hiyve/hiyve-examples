import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/react-whiteboard', () => import('../test/mocks/hiyve-react-whiteboard'));
vi.mock('@hiyve/react-notes', () => import('../test/mocks/hiyve-react-notes'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { useRoomFlow, useWaitingRoom } from '@hiyve/react';
import App from '../App';

const mockUseRoomFlow = vi.mocked(useRoomFlow);
const mockUseWaitingRoom = vi.mocked(useWaitingRoom);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-example-userName');
    localStorage.removeItem('hiyve-example-userRole');
  });

  it('renders JoinForm on lobby screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'lobby' });
    render(<App />);
    expect(screen.getByTestId('join-form')).toBeInTheDocument();
  });

  it('passes correct props to JoinForm', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'lobby' });
    render(<App />);
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      autoConnect: true,
      showWaitingRoomToggle: true,
      storagePrefix: 'hiyve-example',
    });
  });

  it('renders ConnectingScreen on connecting screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'connecting' });
    localStorage.setItem('hiyve-example-userRole', 'owner');
    render(<App />);
    const el = screen.getByTestId('connecting-screen');
    expect(el).toBeInTheDocument();
    expect(JSON.parse(el.dataset.props!)).toMatchObject({ isCreating: true });
  });

  it('passes ConnectingScreen isCreating=false for guest role', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'connecting' });
    localStorage.setItem('hiyve-example-userRole', 'guest');
    render(<App />);
    const el = screen.getByTestId('connecting-screen');
    expect(JSON.parse(el.dataset.props!)).toMatchObject({ isCreating: false });
  });

  it('renders WaitForHostScreen on waiting-for-host screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'waiting-for-host' });
    render(<App />);
    expect(screen.getByTestId('wait-for-host-screen')).toBeInTheDocument();
  });

  it('renders WaitingScreen on waiting-room screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'waiting-room' });
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: true,
      wasRejected: false,
    });
    render(<App />);
    expect(screen.getByTestId('waiting-room-guest')).toBeInTheDocument();
  });

  it('renders WaitingScreen on waiting-room-rejected screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'waiting-room-rejected' });
    mockUseWaitingRoom.mockReturnValue({
      waitingUsers: [],
      isWaitingForAdmission: false,
      wasRejected: true,
    });
    render(<App />);
    expect(screen.getByTestId('waiting-room-guest')).toBeInTheDocument();
  });

  it('renders VideoRoom on in-room screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'in-room' });
    localStorage.setItem('hiyve-example-userName', 'Alice');
    render(<App />);
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  it('reads userName from localStorage and passes to VideoRoom', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'in-room' });
    localStorage.setItem('hiyve-example-userName', 'Bob');
    render(<App />);
    const grid = screen.getByTestId('video-grid');
    expect(JSON.parse(grid.dataset.props!)).toMatchObject({ localUserName: 'Bob' });
  });
});
