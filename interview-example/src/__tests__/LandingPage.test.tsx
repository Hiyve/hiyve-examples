import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect } from 'vitest';

import { LandingPage } from '../components/LandingPage';

describe('LandingPage', () => {
  it('renders the title and subtitle', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('Interview Platform')).toBeInTheDocument();
    expect(screen.getByText('AI-powered interview assessment and candidate evaluation')).toBeInTheDocument();
  });

  it('renders both navigation cards', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText('Start an Interview')).toBeInTheDocument();
    expect(screen.getByText('Search Past Interviews')).toBeInTheDocument();
  });

  it('calls onStartCall when the interview card is clicked', async () => {
    const onStartCall = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onStartCall={onStartCall} onSearch={vi.fn()} />);
    await user.click(screen.getByText('Start an Interview'));
    expect(onStartCall).toHaveBeenCalledOnce();
  });

  it('calls onSearch when the search card is clicked', async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onStartCall={vi.fn()} onSearch={onSearch} />);
    await user.click(screen.getByText('Search Past Interviews'));
    expect(onSearch).toHaveBeenCalledOnce();
  });

  it('shows descriptions for each card', () => {
    render(<LandingPage onStartCall={vi.fn()} onSearch={vi.fn()} />);
    expect(screen.getByText(/Launch a video interview/)).toBeInTheDocument();
    expect(screen.getByText(/Semantic search across/)).toBeInTheDocument();
  });
});
