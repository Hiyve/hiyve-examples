import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-whiteboard', () => import('../test/mocks/hiyve-react-whiteboard'));
vi.mock('@hiyve/react-notes', () => import('../test/mocks/hiyve-react-notes'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { HiyveProvider } from '@hiyve/react';
import { CloudProvider, MoodAnalysisProvider } from '@hiyve/react-intelligence';
import { FileCacheProvider } from '@hiyve/react-collaboration';
import { formatHiyveError } from '@hiyve/utilities';

describe('main entry point', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('HiyveProvider renders children', () => {
    render(
      <HiyveProvider
        localVideoElementId="local-video"
        persistDeviceChanges
        onError={vi.fn()}
      >
        <div data-testid="child">Hello</div>
      </HiyveProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('CloudProvider renders children', () => {
    render(
      <CloudProvider>
        <div data-testid="cloud-child">Cloud Content</div>
      </CloudProvider>
    );
    expect(screen.getByTestId('cloud-child')).toBeInTheDocument();
  });

  it('FileCacheProvider renders children', () => {
    render(
      <FileCacheProvider>
        <div data-testid="file-child">File Content</div>
      </FileCacheProvider>
    );
    expect(screen.getByTestId('file-child')).toBeInTheDocument();
  });

  it('MoodAnalysisProvider renders children with analyzerType prop', () => {
    render(
      <MoodAnalysisProvider analyzerType="human">
        <div data-testid="mood-child">Mood Content</div>
      </MoodAnalysisProvider>
    );
    expect(screen.getByTestId('mood-child')).toBeInTheDocument();
    const provider = screen.getByTestId('mood-analysis-provider');
    const props = JSON.parse(provider.dataset.props!);
    expect(props).toMatchObject({ analyzerType: 'human' });
  });

  it('full provider chain renders nested children', () => {
    render(
      <HiyveProvider localVideoElementId="local-video" persistDeviceChanges onError={vi.fn()}>
        <CloudProvider>
          <FileCacheProvider>
            <MoodAnalysisProvider analyzerType="human">
              <div data-testid="app-child">App Content</div>
            </MoodAnalysisProvider>
          </FileCacheProvider>
        </CloudProvider>
      </HiyveProvider>
    );
    expect(screen.getByTestId('app-child')).toBeInTheDocument();
    expect(screen.getByTestId('cloud-provider')).toBeInTheDocument();
    expect(screen.getByTestId('file-cache-provider')).toBeInTheDocument();
    expect(screen.getByTestId('mood-analysis-provider')).toBeInTheDocument();
  });

  it('formatHiyveError formats error strings', () => {
    const result = formatHiyveError('Connection failed');
    expect(result).toBe('Formatted: Connection failed');
    expect(formatHiyveError).toHaveBeenCalledWith('Connection failed');
  });
});
