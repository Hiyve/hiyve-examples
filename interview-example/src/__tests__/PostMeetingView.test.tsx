import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { useNoteGeneration, useLiveContext } from '@hiyve/react-intelligence';
import { PostMeetingView } from '../components/PostMeetingView';

const mockUseNoteGeneration = vi.mocked(useNoteGeneration);
const mockUseLiveContext = vi.mocked(useLiveContext);

const defaultProps = {
  data: null as unknown,
  responseId: null as string | null,
  roomName: 'interview-room',
  userName: 'Interviewer',
  loading: false,
  onBack: vi.fn(),
};

function renderPostMeeting(props = {}) {
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
    mockUseLiveContext.mockReturnValue({
      askWithResponseId: vi.fn(),
    });
  });

  it('renders the page title', () => {
    renderPostMeeting();
    expect(screen.getByText('Interview Analysis')).toBeInTheDocument();
  });

  it('renders the back button', () => {
    renderPostMeeting();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('shows loading state when analysis is loading', () => {
    renderPostMeeting({ loading: true });
    expect(screen.getByText('Analyzing interview...')).toBeInTheDocument();
  });

  it('renders ScorecardPanel with interview variant when data is provided', () => {
    const data = {
      hiringRecommendation: 'yes',
      strengths: ['Good communicator'],
      concerns: ['Limited experience'],
    };
    renderPostMeeting({ data });
    const scorecard = screen.getByTestId('scorecard-panel');
    const props = JSON.parse(scorecard.dataset.props!);
    expect(props.variant).toBe('interview');
  });

  it('displays hiring recommendation chip', () => {
    const data = {
      hiringRecommendation: 'strong_yes',
      strengths: [],
      concerns: [],
    };
    renderPostMeeting({ data });
    expect(screen.getByText('Strong Yes')).toBeInTheDocument();
  });

  it('displays strengths list', () => {
    const data = {
      hiringRecommendation: 'yes',
      strengths: ['Clear communication', 'Strong technical skills'],
      concerns: [],
    };
    renderPostMeeting({ data });
    expect(screen.getByText('Strengths')).toBeInTheDocument();
    expect(screen.getByText('Clear communication')).toBeInTheDocument();
    expect(screen.getByText('Strong technical skills')).toBeInTheDocument();
  });

  it('displays concerns list', () => {
    const data = {
      hiringRecommendation: 'maybe',
      strengths: [],
      concerns: ['Lacks experience', 'Unclear goals'],
    };
    renderPostMeeting({ data });
    expect(screen.getByText('Concerns')).toBeInTheDocument();
    expect(screen.getByText('Lacks experience')).toBeInTheDocument();
    expect(screen.getByText('Unclear goals')).toBeInTheDocument();
  });

  it('does not show strengths section when none provided', () => {
    const data = {
      hiringRecommendation: 'yes',
      strengths: [],
      concerns: [],
    };
    renderPostMeeting({ data });
    expect(screen.queryByText('Strengths')).not.toBeInTheDocument();
  });

  it('does not show concerns section when none provided', () => {
    const data = {
      hiringRecommendation: 'yes',
      strengths: [],
      concerns: [],
    };
    renderPostMeeting({ data });
    expect(screen.queryByText('Concerns')).not.toBeInTheDocument();
  });

  it('shows note saved status when note is saved', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: false,
      saved: true,
    });
    renderPostMeeting({ responseId: 'resp-123' });
    expect(screen.getByText('Interview assessment saved to Notes')).toBeInTheDocument();
  });

  it('shows note generating status when note is being generated', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: true,
      saved: false,
    });
    renderPostMeeting({ responseId: 'resp-123' });
    expect(screen.getByText('Saving interview assessment...')).toBeInTheDocument();
  });

  it('calls generateNote on mount when responseId is present', () => {
    const generateNote = vi.fn();
    mockUseNoteGeneration.mockReturnValue({
      generateNote,
      loading: false,
      saved: false,
    });
    renderPostMeeting({ responseId: 'resp-abc' });
    expect(generateNote).toHaveBeenCalledWith(
      expect.objectContaining({
        responseId: 'resp-abc',
        roomName: 'interview-room',
        userId: 'Interviewer',
        userName: 'Interviewer',
        title: 'Interview Assessment',
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
    renderPostMeeting({ responseId: null });
    expect(generateNote).not.toHaveBeenCalled();
  });

  // --- AI Chat Assistant ---

  it('shows AI chat section when responseId is present', () => {
    renderPostMeeting({ responseId: 'resp-123' });
    expect(screen.getByText('Ask About This Interview')).toBeInTheDocument();
  });

  it('hides AI chat section when responseId is null', () => {
    renderPostMeeting({ responseId: null });
    expect(screen.queryByText('Ask About This Interview')).not.toBeInTheDocument();
  });

  it('shows placeholder text in AI chat input', () => {
    renderPostMeeting({ responseId: 'resp-123' });
    expect(screen.getByPlaceholderText(/Did the candidate demonstrate leadership/)).toBeInTheDocument();
  });

  it('does not render scorecard when no data and not loading', () => {
    renderPostMeeting({ data: null, loading: false });
    expect(screen.queryByTestId('scorecard-panel')).not.toBeInTheDocument();
  });
});
