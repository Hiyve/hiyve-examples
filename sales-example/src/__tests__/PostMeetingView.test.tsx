import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { useNoteGeneration } from '@hiyve/react-intelligence';
import { PostMeetingView } from '../components/PostMeetingView';

const mockUseNoteGeneration = vi.mocked(useNoteGeneration);

const defaultProps = {
  data: null as unknown,
  responseId: null as string | null,
  roomName: 'Sales Room',
  userName: 'TestUser',
  loading: false,
  onBack: vi.fn(),
};

function renderPostMeetingView(props = {}) {
  return render(<PostMeetingView {...defaultProps} {...props} />);
}

describe('PostMeetingView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: false,
      saved: false,
    });
  });

  it('renders the heading', () => {
    renderPostMeetingView();
    expect(screen.getByText('Sales Call Analysis')).toBeInTheDocument();
  });

  it('renders the Back to Home button', () => {
    renderPostMeetingView();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('calls onBack when Back to Home is clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event');
    const user = userEvent.setup();
    const onBack = vi.fn();
    renderPostMeetingView({ onBack });
    await user.click(screen.getByText('Back to Home'));
    expect(onBack).toHaveBeenCalledOnce();
  });

  it('shows loading spinner when loading is true', () => {
    renderPostMeetingView({ loading: true });
    expect(screen.getByText('Analyzing sales call...')).toBeInTheDocument();
  });

  it('renders ScorecardPanel with variant="sales" when data is available', () => {
    const data = { highlights: ['Great rapport building'] };
    renderPostMeetingView({ data });
    const panel = screen.getByTestId('scorecard-panel');
    expect(panel).toBeInTheDocument();
    const props = JSON.parse(panel.dataset.props!);
    expect(props.variant).toBe('sales');
    expect(props.data).toEqual({ highlights: ['Great rapport building'] });
  });

  it('renders highlights list when data includes highlights', () => {
    const data = { highlights: ['Good opening', 'Strong close'] };
    renderPostMeetingView({ data });
    expect(screen.getByText('Key Highlights')).toBeInTheDocument();
    expect(screen.getByText('Good opening')).toBeInTheDocument();
    expect(screen.getByText('Strong close')).toBeInTheDocument();
  });

  it('does not render highlights section when no highlights', () => {
    const data = { highlights: [] };
    renderPostMeetingView({ data });
    expect(screen.queryByText('Key Highlights')).not.toBeInTheDocument();
  });

  it('does not render ScorecardPanel when data is null', () => {
    renderPostMeetingView({ data: null });
    expect(screen.queryByTestId('scorecard-panel')).not.toBeInTheDocument();
  });

  it('shows AI assistant section when responseId is provided', () => {
    renderPostMeetingView({ responseId: 'resp-123' });
    expect(screen.getByText('Ask About This Call')).toBeInTheDocument();
  });

  it('hides AI assistant section when responseId is null', () => {
    renderPostMeetingView({ responseId: null });
    expect(screen.queryByText('Ask About This Call')).not.toBeInTheDocument();
  });

  it('shows note saved indicator when saved is true', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: false,
      saved: true,
    });
    renderPostMeetingView();
    expect(screen.getByText('Call summary saved to Notes')).toBeInTheDocument();
  });

  it('shows saving indicator when note is generating', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: true,
      saved: false,
    });
    renderPostMeetingView();
    expect(screen.getByText('Saving call summary...')).toBeInTheDocument();
  });

  it('calls generateNote when responseId is provided', () => {
    const generateNote = vi.fn();
    mockUseNoteGeneration.mockReturnValue({
      generateNote,
      loading: false,
      saved: false,
    });
    renderPostMeetingView({ responseId: 'resp-456' });
    expect(generateNote).toHaveBeenCalledWith(
      expect.objectContaining({
        responseId: 'resp-456',
        roomName: 'Sales Room',
        userId: 'TestUser',
        userName: 'TestUser',
        title: 'Sales Call Summary',
      })
    );
  });

  it('does not call generateNote when responseId is null', () => {
    const generateNote = vi.fn();
    mockUseNoteGeneration.mockReturnValue({
      generateNote,
      loading: false,
      saved: false,
    });
    renderPostMeetingView({ responseId: null });
    expect(generateNote).not.toHaveBeenCalled();
  });
});
