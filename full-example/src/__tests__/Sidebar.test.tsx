import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-collaboration', () => import('../test/mocks/hiyve-react-collaboration'));
vi.mock('@hiyve/react-whiteboard', () => import('../test/mocks/hiyve-react-whiteboard'));
vi.mock('@hiyve/react-notes', () => import('../test/mocks/hiyve-react-notes'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import {
  useRoom,
  useParticipants,
  useChat,
  useRecording,
  useStreaming,
} from '@hiyve/react';
import { usePollListener, useQASessionState } from '@hiyve/react-collaboration';
import { defaultIntelligenceConfig } from '@hiyve/react-intelligence';
import { defaultStreamingConfig } from '@hiyve/react-capture';
import { Sidebar } from '../components/Sidebar';

const mockUseRoom = vi.mocked(useRoom);
const mockUseParticipants = vi.mocked(useParticipants);
const mockUseChat = vi.mocked(useChat);
const mockUseRecording = vi.mocked(useRecording);
const mockUseStreaming = vi.mocked(useStreaming);
const mockUsePollListener = vi.mocked(usePollListener);
const mockUseQASessionState = vi.mocked(useQASessionState);

const defaultProps = {
  userName: 'TestUser',
  intelligenceConfig: defaultIntelligenceConfig,
  onIntelligenceConfigChange: vi.fn(),
  streamingConfig: defaultStreamingConfig,
  onStreamingConfigChange: vi.fn(),
  persistWidth: false,
};

function renderSidebar(props = {}) {
  return render(<Sidebar {...defaultProps} {...props} />);
}

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: false,
      isInRoom: true,
    });
    mockUseParticipants.mockReturnValue({
      participantCount: 2,
      localUserId: 'user-123',
    });
    mockUseChat.mockReturnValue({
      unreadCount: 0,
      clearUnread: vi.fn(),
    });
    mockUseRecording.mockReturnValue({
      isRecording: false,
      recordingDuration: 0,
      responseId: null,
      isRecordingStarting: false,
    });
    mockUseStreaming.mockReturnValue({
      isStreaming: false,
      streamingDuration: 0,
      streamingUrl: null,
      switchStreamingUser: vi.fn(),
    });
    mockUsePollListener.mockReturnValue({
      hasUnvotedActivePoll: false,
    });
    mockUseQASessionState.mockReturnValue({
      hasNewQuestion: false,
      hasActiveQASession: false,
      clearNewQuestionBadge: vi.fn(),
    });
  });

  // --- Tab rendering ---

  it('renders all sidebar tabs', () => {
    renderSidebar();
    const tabIds = [
      'participants', 'chat', 'settings', 'files',
      'whiteboard', 'qa', 'polls', 'notes', 'ai',
    ];
    for (const id of tabIds) {
      expect(screen.getByTestId(`sidebar-tab-${id}`)).toBeInTheDocument();
    }
  });

  it('shows participant count in participants tab label', () => {
    mockUseParticipants.mockReturnValue({
      participantCount: 4,
      localUserId: 'user-123',
    });
    renderSidebar();
    // participantCount + 1 for local user
    expect(screen.getByTestId('sidebar-tab-participants')).toHaveTextContent('(5)');
  });

  it('shows chat unread badge', () => {
    mockUseChat.mockReturnValue({
      unreadCount: 3,
      clearUnread: vi.fn(),
    });
    renderSidebar();
    const chatTab = screen.getByTestId('sidebar-tab-chat');
    expect(chatTab.dataset.badge).toBe('3');
  });

  it('shows Q&A badge when there is a new question', () => {
    mockUseQASessionState.mockReturnValue({
      hasNewQuestion: true,
      hasActiveQASession: true,
      clearNewQuestionBadge: vi.fn(),
    });
    renderSidebar();
    const qaTab = screen.getByTestId('sidebar-tab-qa');
    expect(qaTab.dataset.badge).toBe('1');
  });

  it('shows polls badge when there is an unvoted active poll', () => {
    mockUsePollListener.mockReturnValue({
      hasUnvotedActivePoll: true,
    });
    renderSidebar();
    const pollsTab = screen.getByTestId('sidebar-tab-polls');
    expect(pollsTab.dataset.badge).toBe('1');
  });

  // --- Default content ---

  it('renders ParticipantList as default tab content', () => {
    renderSidebar();
    expect(screen.getByTestId('participant-list')).toBeInTheDocument();
  });

  // --- Tab switching ---

  it('switches to chat tab and shows ChatPanel', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-chat'));
    expect(screen.getByTestId('chat-panel')).toBeInTheDocument();
  });

  it('clears unread count when switching to chat tab', async () => {
    const clearUnread = vi.fn();
    mockUseChat.mockReturnValue({ unreadCount: 5, clearUnread });
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-chat'));
    expect(clearUnread).toHaveBeenCalled();
  });

  it('switches to settings tab and shows GainControl', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-settings'));
    expect(screen.getByTestId('gain-control')).toBeInTheDocument();
  });

  it('shows StreamingSettingsForm for owner in settings tab', async () => {
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: true,
      isInRoom: true,
    });
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-settings'));
    expect(screen.getByTestId('streaming-settings-form')).toBeInTheDocument();
  });

  it('hides StreamingSettingsForm for guest in settings tab', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-settings'));
    expect(screen.queryByTestId('streaming-settings-form')).not.toBeInTheDocument();
  });

  it('switches to files tab and shows FileManager', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-files'));
    expect(screen.getByTestId('file-manager')).toBeInTheDocument();
  });

  it('switches to whiteboard tab and shows WhiteboardSession', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-whiteboard'));
    expect(screen.getByTestId('whiteboard-session')).toBeInTheDocument();
  });

  it('switches to Q&A tab and shows QASession', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-qa'));
    expect(screen.getByTestId('qa-session')).toBeInTheDocument();
  });

  it('clears Q&A badge when switching to Q&A tab', async () => {
    const clearNewQuestionBadge = vi.fn();
    mockUseQASessionState.mockReturnValue({
      hasNewQuestion: true,
      hasActiveQASession: true,
      clearNewQuestionBadge,
    });
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-qa'));
    expect(clearNewQuestionBadge).toHaveBeenCalled();
  });

  it('switches to polls tab and shows PollsSession', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-polls'));
    expect(screen.getByTestId('polls-session')).toBeInTheDocument();
  });

  it('switches to notes tab and shows NotesSession', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-notes'));
    expect(screen.getByTestId('notes-session')).toBeInTheDocument();
  });

  it('switches to AI tab and shows IntelligenceHub when room exists', async () => {
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-ai'));
    expect(screen.getByTestId('intelligence-hub')).toBeInTheDocument();
  });

  it('shows fallback message on AI tab when no room', async () => {
    mockUseRoom.mockReturnValue({
      room: null,
      isOwner: false,
      isInRoom: false,
    });
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-ai'));
    expect(screen.getByText('Join a room to enable AI features.')).toBeInTheDocument();
  });

  it('shows fallback message on AI tab when no localUserId', async () => {
    mockUseParticipants.mockReturnValue({
      participantCount: 0,
      localUserId: '',
    });
    const user = userEvent.setup();
    renderSidebar();
    await user.click(screen.getByTestId('sidebar-tab-ai'));
    expect(screen.getByText('Join a room to enable AI features.')).toBeInTheDocument();
  });
});
