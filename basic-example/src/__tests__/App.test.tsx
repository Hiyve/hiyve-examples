import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));

import { useRoomFlow } from '@hiyve/react';
import App from '../App';

const mockUseRoomFlow = vi.mocked(useRoomFlow);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset localStorage items used by the component
    localStorage.removeItem('hiyve-basic-userName');
    localStorage.removeItem('hiyve-basic-userRole');
  });

  it('renders JoinForm on lobby screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'lobby' });
    render(<App />);
    expect(screen.getByTestId('join-form')).toBeInTheDocument();
  });

  it('renders ConnectingScreen on connecting screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'connecting' });
    localStorage.setItem('hiyve-basic-userRole', 'owner');
    render(<App />);
    const el = screen.getByTestId('connecting-screen');
    expect(el).toBeInTheDocument();
    expect(JSON.parse(el.dataset.props!)).toMatchObject({ isCreating: true });
  });

  it('renders VideoRoom on in-room screen', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'in-room' });
    localStorage.setItem('hiyve-basic-userName', 'Alice');
    render(<App />);
    expect(screen.getByTestId('video-grid')).toBeInTheDocument();
  });

  it('reads userName from localStorage', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'in-room' });
    localStorage.setItem('hiyve-basic-userName', 'Bob');
    render(<App />);
    const grid = screen.getByTestId('video-grid');
    expect(JSON.parse(grid.dataset.props!)).toMatchObject({ localUserName: 'Bob' });
  });

  it('passes ConnectingScreen isCreating=false for guest role', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'connecting' });
    localStorage.setItem('hiyve-basic-userRole', 'guest');
    render(<App />);
    const el = screen.getByTestId('connecting-screen');
    expect(JSON.parse(el.dataset.props!)).toMatchObject({ isCreating: false });
  });

  it('passes correct props to JoinForm', () => {
    mockUseRoomFlow.mockReturnValue({ screen: 'lobby' });
    render(<App />);
    const form = screen.getByTestId('join-form');
    const props = JSON.parse(form.dataset.props!);
    expect(props).toMatchObject({
      autoConnect: true,
      devicePreviewMode: 'inline',
      storagePrefix: 'hiyve-basic',
    });
  });
});
