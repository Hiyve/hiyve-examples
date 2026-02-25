import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { SearchView } from '../components/SearchView';

describe('SearchView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-sales-example-userName');
    localStorage.removeItem('hiyve-sales-example-roomName');
  });

  it('renders the Back button', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('calls onBack when Back button is clicked', async () => {
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

  it('passes sales-themed labels to SearchPanel', () => {
    render(<SearchView onBack={vi.fn()} />);
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.labels).toMatchObject({
      title: 'Search Sales Calls',
      searchPlaceholder: 'Search across your sales call transcripts...',
      askPlaceholder: 'Ask a question about your sales calls...',
      emptyState: 'Search your recorded sales calls and transcripts using natural language.',
    });
  });

  it('renders User ID and Room Name input fields', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /User ID/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Room Name/i })).toBeInTheDocument();
  });

  it('pre-fills User ID from localStorage', () => {
    localStorage.setItem('hiyve-sales-example-userName', 'StoredUser');
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /User ID/i })).toHaveValue('StoredUser');
  });

  it('pre-fills Room Name from localStorage', () => {
    localStorage.setItem('hiyve-sales-example-roomName', 'StoredRoom');
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /Room Name/i })).toHaveValue('StoredRoom');
  });

  it('renders production auth note', () => {
    render(<SearchView onBack={vi.fn()} />);
    expect(screen.getByText(/In a production app, these fields would be provided/)).toBeInTheDocument();
  });
});
