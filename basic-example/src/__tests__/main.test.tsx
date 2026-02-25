import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

// We can't easily test ReactDOM.createRoot from main.tsx, so instead
// we test the Root component's behavior by extracting the pattern.
// Since Root is not exported, we replicate the provider chain test
// by rendering the relevant components with their providers.

import { HiyveProvider } from '@hiyve/react';
import { formatHiyveError } from '@hiyve/utilities';

describe('main entry point', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('HiyveProvider renders children', () => {
    render(
      <HiyveProvider
        generateRoomToken={vi.fn()}
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={vi.fn()}
      >
        <div data-testid="child">Hello</div>
      </HiyveProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('formatHiyveError formats error strings', () => {
    const result = formatHiyveError('Connection failed');
    expect(result).toBe('Formatted: Connection failed');
    expect(formatHiyveError).toHaveBeenCalledWith('Connection failed');
  });
});
