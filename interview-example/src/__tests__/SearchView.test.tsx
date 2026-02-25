import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { SearchView } from '../components/SearchView';

describe('SearchView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('renders the back button', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', async () => {
    const onBack = vi.fn();
    const user = userEvent.setup();
    render(<SearchView onBack={onBack} />);
    await user.click(screen.getByText('Back'));
    expect(onBack).toHaveBeenCalledOnce();
  });

  it('renders SearchPanel', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('passes interview-themed labels to SearchPanel', () => {
    render(<SearchView onBack={vi.fn()} />);
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.labels).toMatchObject({
      title: 'Search Interviews',
      searchPlaceholder: 'Search across your interview transcripts...',
      askPlaceholder: 'Ask a question about past interviews...',
    });
  });

  it('renders userId text field', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /User ID/i })).toBeInTheDocument();
  });

  it('renders roomName text field', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /Room Name/i })).toBeInTheDocument();
  });

  it('populates userId from localStorage', () => {
    localStorage.setItem('hiyve-interview-example-userName', 'JaneDoe');
    render(<SearchView onBack={vi.fn()} />);
    const input = screen.getByRole('textbox', { name: /User ID/i }) as HTMLInputElement;
    expect(input.value).toBe('JaneDoe');
  });

  it('populates roomName from localStorage', () => {
    localStorage.setItem('hiyve-interview-example-roomName', 'my-room');
    render(<SearchView onBack={vi.fn()} />);
    const input = screen.getByRole('textbox', { name: /Room Name/i }) as HTMLInputElement;
    expect(input.value).toBe('my-room');
  });

  it('passes userId to SearchPanel', () => {
    localStorage.setItem('hiyve-interview-example-userName', 'Alice');
    render(<SearchView onBack={vi.fn()} />);
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.userId).toBe('Alice');
  });

  it('passes undefined userId to SearchPanel when empty', () => {
    render(<SearchView onBack={vi.fn()} />);
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.userId).toBeUndefined();
  });

  it('shows info text about production authentication', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByText(/In a production app/)).toBeInTheDocument();
  });
});
