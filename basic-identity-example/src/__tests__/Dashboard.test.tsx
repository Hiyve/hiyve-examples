import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-identity', () => import('../test/mocks/hiyve-react-identity'));

import { useUser } from '@hiyve/react-identity';
import { Dashboard } from '../components/Dashboard';

const mockUseUser = vi.mocked(useUser);

describe('Dashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseUser.mockReturnValue({
      user: { email: 'test@example.com', name: 'Test User' },
      isAuthenticated: true,
      isLoading: false,
    });
  });

  it('renders Dashboard heading', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders UserProfile component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
  });

  it('shows "Protected Content" text', () => {
    render(<Dashboard />);
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  it('shows email chip when user has email', () => {
    render(<Dashboard />);
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('does not show email chip when user has no email', () => {
    mockUseUser.mockReturnValue({
      user: { email: '', name: 'Test User' },
      isAuthenticated: true,
      isLoading: false,
    });
    render(<Dashboard />);
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument();
  });
});
