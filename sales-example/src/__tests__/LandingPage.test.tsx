import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect } from 'vitest';
import { LandingPage } from '../components/LandingPage';

describe('LandingPage', () => {
  it('renders the heading', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('Sales Coach')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('AI-powered sales call analysis and coaching')).toBeInTheDocument();
  });

  it('renders Start a Sales Call card', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('Start a Sales Call')).toBeInTheDocument();
    expect(screen.getByText(/Launch a video call with live AI intelligence/)).toBeInTheDocument();
  });

  it('renders Search Past Calls card', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('Search Past Calls')).toBeInTheDocument();
    expect(screen.getByText(/Semantic search across your recorded sales calls/)).toBeInTheDocument();
  });

  it('calls onStartCall when Start a Sales Call card is clicked', async () => {
    const onStartCall = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onStartCall={onStartCall} onSearch={vi.fn()} />);
    await user.click(screen.getByText('Start a Sales Call'));
    expect(onStartCall).toHaveBeenCalledOnce();
  });

  it('calls onSearch when Search Past Calls card is clicked', async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onStartCall={vi.fn()} onSearch={onSearch} />);
    await user.click(screen.getByText('Search Past Calls'));
    expect(onSearch).toHaveBeenCalledOnce();
  });
});
