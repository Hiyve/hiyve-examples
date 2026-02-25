import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { useCloudClient } from '@hiyve/react';
import { SearchView } from '../components/SearchView';

const mockUseCloudClient = vi.mocked(useCloudClient);

const defaultProps = {
  onBack: vi.fn(),
};

function renderSearchView(props = {}) {
  return render(<SearchView {...defaultProps} {...props} />);
}

describe('SearchView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('hiyve-telehealth-example-userName');
    localStorage.removeItem('hiyve-telehealth-example-roomName');

    mockUseCloudClient.mockReturnValue({
      search: vi.fn(),
    });
  });

  it('renders Back button', () => {
    renderSearchView();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('calls onBack when Back button is clicked', async () => {
    const user = userEvent.setup();
    renderSearchView();
    await user.click(screen.getByText('Back'));
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1);
  });

  it('renders SearchPanel', () => {
    renderSearchView();
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('passes telehealth-themed labels to SearchPanel', () => {
    renderSearchView();
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.labels).toMatchObject({
      title: 'Search Patient Visits',
      searchPlaceholder: 'Search across your patient visit transcripts...',
      askPlaceholder: 'Ask a question about past patient visits...',
      emptyState: 'Search your recorded telehealth visits and clinical transcripts using natural language.',
    });
  });

  it('passes cloud client to SearchPanel', () => {
    renderSearchView();
    const panel = screen.getByTestId('search-panel');
    const props = JSON.parse(panel.dataset.props!);
    expect(props.cloud).toBeDefined();
  });

  it('renders User ID text field', () => {
    renderSearchView();
    expect(screen.getByRole('textbox', { name: /User ID/i })).toBeInTheDocument();
  });

  it('renders Room Name text field', () => {
    renderSearchView();
    expect(screen.getByRole('textbox', { name: /Room Name/i })).toBeInTheDocument();
  });

  it('pre-fills User ID from localStorage', () => {
    localStorage.setItem('hiyve-telehealth-example-userName', 'Dr. Smith');
    renderSearchView();
    expect(screen.getByRole('textbox', { name: /User ID/i })).toHaveValue('Dr. Smith');
  });

  it('pre-fills Room Name from localStorage', () => {
    localStorage.setItem('hiyve-telehealth-example-roomName', 'Visit-123');
    renderSearchView();
    expect(screen.getByRole('textbox', { name: /Room Name/i })).toHaveValue('Visit-123');
  });

  it('renders explanatory text about authentication', () => {
    renderSearchView();
    expect(
      screen.getByText(/these fields would be provided by your authentication system/)
    ).toBeInTheDocument();
  });
});
