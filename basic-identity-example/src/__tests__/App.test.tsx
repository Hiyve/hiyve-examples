import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-identity', () => import('../test/mocks/hiyve-react-identity'));

import { useUser } from '@hiyve/react-identity';
import App from '../App';

const mockUseUser = vi.mocked(useUser);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseUser.mockReturnValue({
      user: { email: 'test@example.com', name: 'Test User' },
      isAuthenticated: false,
      isLoading: false,
    });
  });

  it('shows loading spinner when isLoading is true', () => {
    mockUseUser.mockReturnValue({
      user: { email: 'test@example.com', name: 'Test User' },
      isAuthenticated: false,
      isLoading: true,
    });
    render(<App />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows Dashboard when isAuthenticated is true', () => {
    mockUseUser.mockReturnValue({
      user: { email: 'test@example.com', name: 'Test User' },
      isAuthenticated: true,
      isLoading: false,
    });
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('shows AuthFlow with correct props when not authenticated', () => {
    render(<App />);
    const authFlow = screen.getByTestId('auth-flow');
    expect(authFlow).toBeInTheDocument();
  });

  it('AuthFlow receives initialView="login" and showRegisterLink props', () => {
    render(<App />);
    const authFlow = screen.getByTestId('auth-flow');
    const props = JSON.parse(authFlow.dataset.props!);
    expect(props).toMatchObject({
      initialView: 'login',
      showRegisterLink: true,
    });
  });
});
