import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));

import { useNoteGeneration, useLiveContext } from '@hiyve/react-intelligence';
import { PostMeetingView } from '../components/PostMeetingView';

const mockUseNoteGeneration = vi.mocked(useNoteGeneration);
const mockUseLiveContext = vi.mocked(useLiveContext);

const defaultProps = {
  responseId: 'resp-abc',
  roomName: 'Patient Visit',
  userName: 'Dr. Smith',
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

  it('renders Clinical Notes heading', () => {
    renderPostMeeting();
    expect(screen.getByText('Clinical Notes')).toBeInTheDocument();
  });

  it('renders Back to Home button', () => {
    renderPostMeeting();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('calls onBack when Back to Home is clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event');
    const user = userEvent.setup();
    renderPostMeeting();
    await user.click(screen.getByText('Back to Home'));
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1);
  });

  it('calls generateNote on mount when responseId is present', () => {
    const generateNote = vi.fn();
    mockUseNoteGeneration.mockReturnValue({
      generateNote,
      loading: false,
      saved: false,
    });
    renderPostMeeting();
    expect(generateNote).toHaveBeenCalledWith(
      expect.objectContaining({
        responseId: 'resp-abc',
        roomName: 'Patient Visit',
        userId: 'Dr. Smith',
        userName: 'Dr. Smith',
        title: 'Clinical Notes',
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

  it('shows saving indicator when note is generating', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: true,
      saved: false,
    });
    renderPostMeeting();
    expect(screen.getByText('Saving clinical notes...')).toBeInTheDocument();
  });

  it('shows saved confirmation when note is saved', () => {
    mockUseNoteGeneration.mockReturnValue({
      generateNote: vi.fn(),
      loading: false,
      saved: true,
    });
    renderPostMeeting();
    expect(screen.getByText('Clinical notes saved to Notes')).toBeInTheDocument();
  });

  it('shows info alert when no responseId and not generating', () => {
    renderPostMeeting({ responseId: null });
    expect(screen.getByText(/No clinical notes were generated/)).toBeInTheDocument();
  });

  it('renders Ask About This Visit section when responseId exists', () => {
    renderPostMeeting();
    expect(screen.getByText('Ask About This Visit')).toBeInTheDocument();
  });

  it('hides Ask About This Visit section when responseId is null', () => {
    renderPostMeeting({ responseId: null });
    expect(screen.queryByText('Ask About This Visit')).not.toBeInTheDocument();
  });

  it('renders the follow-up question text field', () => {
    renderPostMeeting();
    expect(
      screen.getByPlaceholderText(/What medications were discussed/)
    ).toBeInTheDocument();
  });
});
