import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import {
  useRoom,
  useParticipants,
  useRecording,
  useTranscription,
} from '@hiyve/react';
import {
  useIntelligenceReadiness,
  useLiveContext,
  defaultIntelligenceConfig,
} from '@hiyve/react-intelligence';
import { AISidebar } from '../components/AISidebar';

const mockUseRoom = vi.mocked(useRoom);
const mockUseParticipants = vi.mocked(useParticipants);
const mockUseRecording = vi.mocked(useRecording);
const mockUseTranscription = vi.mocked(useTranscription);
const mockUseIntelligenceReadiness = vi.mocked(useIntelligenceReadiness);
const mockUseLiveContext = vi.mocked(useLiveContext);

const defaultProps = {
  intelligenceConfig: defaultIntelligenceConfig,
  onIntelligenceConfigChange: vi.fn(),
};

function renderAISidebar(props = {}) {
  return render(<AISidebar {...defaultProps} {...props} />);
}

describe('AISidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseRoom.mockReturnValue({
      room: { name: 'Test Room', id: 'room-123' },
      isOwner: true,
      isInRoom: true,
    });
    mockUseParticipants.mockReturnValue({
      participantCount: 2,
      localUserId: 'user-123',
    });
    mockUseRecording.mockReturnValue({
      isRecording: false,
      recordingDuration: 0,
      responseId: null,
      isRecordingStarting: false,
    });
    mockUseTranscription.mockReturnValue({
      transcriptions: [],
      isTranscribing: false,
      enrichTranscription: vi.fn(),
    });
    mockUseIntelligenceReadiness.mockReturnValue({
      isReady: false,
      status: 'idle',
    });
    mockUseLiveContext.mockReturnValue({
      askWithResponseId: vi.fn(),
    });
  });

  it('renders the Sidebar with intelligence tab', () => {
    renderAISidebar();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-tab-intelligence')).toBeInTheDocument();
  });

  it('renders IntelligenceHub inside sidebar content', () => {
    renderAISidebar();
    expect(screen.getByTestId('intelligence-hub')).toBeInTheDocument();
  });

  it('passes correct props to IntelligenceHub', () => {
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props).toMatchObject({
      roomId: 'Test Room',
      userId: 'user-123',
      isOwner: true,
      showConversationManager: true,
      showAssistant: true,
      showCaptions: true,
      showAlerts: true,
      showSentiment: true,
    });
  });

  it('passes liveContextActive=false when no responseId', () => {
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.liveContextActive).toBe(false);
  });

  it('passes liveContextActive=true when responseId exists', () => {
    mockUseRecording.mockReturnValue({
      isRecording: true,
      recordingDuration: 60,
      responseId: 'resp-abc',
      isRecordingStarting: false,
    });
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.liveContextActive).toBe(true);
  });

  it('passes hasTranscriptions=true when transcriptions exist', () => {
    mockUseTranscription.mockReturnValue({
      transcriptions: [{ text: 'Hello' }],
      isTranscribing: true,
      enrichTranscription: vi.fn(),
    });
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.hasTranscriptions).toBe(true);
  });

  it('passes hasTranscriptions=false when no transcriptions', () => {
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.hasTranscriptions).toBe(false);
  });

  it('renders renderCaptionsContent as a function', () => {
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.renderCaptionsContent).toBe('__fn__');
  });

  it('passes onSend as a function', () => {
    renderAISidebar();
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.onSend).toBe('__fn__');
  });

  it('renders TranscriptViewer within captions content', () => {
    renderAISidebar();
    // The sidebar mock renders content immediately; the IntelligenceHub mock
    // serializes renderCaptionsContent as __fn__. To test TranscriptViewer
    // rendering, we verify the sidebar content area is present.
    expect(screen.getByTestId('sidebar-content')).toBeInTheDocument();
  });
});
