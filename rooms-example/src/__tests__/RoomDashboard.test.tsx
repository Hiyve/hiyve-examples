import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

vi.mock('@hiyve/react-rooms', () => import('../test/mocks/hiyve-react-rooms'));
vi.mock('@hiyve/core', () => import('../test/mocks/hiyve-core'));

import { RoomDashboard } from '../components/RoomDashboard';

describe('RoomDashboard', () => {
  it('renders the heading', () => {
    render(<RoomDashboard userId="user-1" onStartRoom={vi.fn()} />);
    expect(screen.getByText('Room Dashboard')).toBeInTheDocument();
  });

  it('renders RoomsList with correct userId', () => {
    render(<RoomDashboard userId="user-abc" onStartRoom={vi.fn()} />);
    const list = screen.getByTestId('rooms-list');
    const props = JSON.parse(list.dataset.props!);
    expect(props.userId).toBe('user-abc');
  });

  it('passes onStartRoom callback to RoomsList', () => {
    render(<RoomDashboard userId="user-1" onStartRoom={vi.fn()} />);
    const list = screen.getByTestId('rooms-list');
    const props = JSON.parse(list.dataset.props!);
    expect(props.onStartRoom).toBe('__fn__');
  });

  it('passes showTargetUserIds to RoomsList', () => {
    render(<RoomDashboard userId="user-1" onStartRoom={vi.fn()} />);
    const list = screen.getByTestId('rooms-list');
    const props = JSON.parse(list.dataset.props!);
    expect(props.showTargetUserIds).toBe(true);
  });

  it('passes onError callback to RoomsList', () => {
    render(<RoomDashboard userId="user-1" onStartRoom={vi.fn()} />);
    const list = screen.getByTestId('rooms-list');
    const props = JSON.parse(list.dataset.props!);
    expect(props.onError).toBe('__fn__');
  });
});
