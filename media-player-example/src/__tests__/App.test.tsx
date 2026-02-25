import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-media-player', () => import('../test/mocks/hiyve-react-media-player'));

import App from '../App';

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with tab navigation (3 tabs present)', () => {
    render(<App />);
    expect(screen.getByRole('tab', { name: 'Basic' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Full-Featured' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Custom Hook' })).toBeInTheDocument();
  });

  it('Basic tab shows MediaPlayer with src prop', () => {
    render(<App />);
    const player = screen.getByTestId('media-player');
    const props = JSON.parse(player.dataset.props!);
    expect(props).toHaveProperty('src');
    expect(typeof props.src).toBe('string');
    expect(props.src.length).toBeGreaterThan(0);
  });

  it('Full-Featured tab shows MediaPlayer with enableRegions', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('tab', { name: 'Full-Featured' }));

    const player = screen.getByTestId('media-player');
    const props = JSON.parse(player.dataset.props!);
    expect(props).toHaveProperty('enableRegions', true);
    expect(props).toHaveProperty('colors');
    expect(props.colors).toMatchObject({
      waveColor: '#6366f1',
      progressColor: '#ec4899',
    });
  });

  it('Custom Hook tab shows play/pause controls and time display', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('tab', { name: 'Custom Hook' }));

    // The hook returns isPlaying: false, so play icon should be visible
    // playbackTime: 30 => "0:30", playbackLength: 180 => "3:00"
    expect(screen.getByText('0:30 / 3:00')).toBeInTheDocument();

    // State dump includes these values
    expect(screen.getByText(/isPlaying: false/)).toBeInTheDocument();
    expect(screen.getByText(/loaded: true/)).toBeInTheDocument();
  });

  it('tab switching shows different content', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Basic tab is active by default - shows MediaPlayer
    expect(screen.getByTestId('media-player')).toBeInTheDocument();
    expect(screen.getByText('Basic Player')).toBeInTheDocument();

    // Switch to Full-Featured
    await user.click(screen.getByRole('tab', { name: 'Full-Featured' }));
    expect(screen.getByText('Full-Featured Player')).toBeInTheDocument();
    expect(screen.queryByText('Basic Player')).not.toBeInTheDocument();

    // Switch to Custom Hook
    await user.click(screen.getByRole('tab', { name: 'Custom Hook' }));
    expect(screen.getByText('Custom Hook Usage')).toBeInTheDocument();
    expect(screen.queryByText('Full-Featured Player')).not.toBeInTheDocument();

    // Switch back to Basic
    await user.click(screen.getByRole('tab', { name: 'Basic' }));
    expect(screen.getByText('Basic Player')).toBeInTheDocument();
    expect(screen.queryByText('Custom Hook Usage')).not.toBeInTheDocument();
  });
});
