import { vi } from 'vitest';

// Serialize props, converting functions to a marker string
function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export const useUser = vi.fn(() => ({
  user: { email: 'test@example.com', name: 'Test User' },
  isAuthenticated: false,
  isLoading: false,
}));

export function AuthFlow(props: Record<string, unknown>) {
  return <div data-testid="auth-flow" data-props={serializeProps(props)} />;
}

export function UserProfile() {
  return <div data-testid="user-profile" />;
}
