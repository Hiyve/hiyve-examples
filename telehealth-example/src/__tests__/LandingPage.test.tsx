import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { LandingPage } from '../components/LandingPage';

describe('LandingPage', () => {
  const defaultProps = {
    onStartCall: vi.fn(),
    onSearch: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('Telehealth Visit Notes')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('AI-powered clinical documentation and visit analysis')).toBeInTheDocument();
  });

  it('renders Start a Visit card', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('Start a Visit')).toBeInTheDocument();
  });

  it('renders Search Past Visits card', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText('Search Past Visits')).toBeInTheDocument();
  });

  it('calls onStartCall when Start a Visit card is clicked', async () => {
    const user = userEvent.setup();
    render(<LandingPage {...defaultProps} />);
    await user.click(screen.getByText('Start a Visit'));
    expect(defaultProps.onStartCall).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch when Search Past Visits card is clicked', async () => {
    const user = userEvent.setup();
    render(<LandingPage {...defaultProps} />);
    await user.click(screen.getByText('Search Past Visits'));
    expect(defaultProps.onSearch).toHaveBeenCalledTimes(1);
  });

  it('renders card descriptions', () => {
    render(<LandingPage {...defaultProps} />);
    expect(screen.getByText(/Launch a telehealth video visit/)).toBeInTheDocument();
    expect(screen.getByText(/Semantic search across your recorded/)).toBeInTheDocument();
  });
});
