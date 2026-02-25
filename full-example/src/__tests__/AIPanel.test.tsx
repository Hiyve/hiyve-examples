import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react', () => import('../test/mocks/hiyve-react'));
vi.mock('@hiyve/react-intelligence', () => import('../test/mocks/hiyve-react-intelligence'));
vi.mock('@hiyve/react-capture', () => import('../test/mocks/hiyve-react-capture'));

import { useRecording, useTranscription } from '@hiyve/react';
import { useIntelligenceReadiness, useLiveContext, defaultIntelligenceConfig } from '@hiyve/react-intelligence';
import { AIPanel } from '../components/AIPanel';

const mockUseRecording = vi.mocked(useRecording);
const mockUseTranscription = vi.mocked(useTranscription);
const mockUseIntelligenceReadiness = vi.mocked(useIntelligenceReadiness);
const mockUseLiveContext = vi.mocked(useLiveContext);

const defaultProps = {
  userId: 'user-123',
  roomName: 'test-room',
  isOwner: true,
  intelligenceConfig: defaultIntelligenceConfig,
  onIntelligenceConfigChange: vi.fn(),
};

describe('AIPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
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

  it('renders IntelligenceHub', () => {
    render(<AIPanel {...defaultProps} />);
    expect(screen.getByTestId('intelligence-hub')).toBeInTheDocument();
  });

  it('passes correct props to IntelligenceHub', () => {
    render(<AIPanel {...defaultProps} />);
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props).toMatchObject({
      roomId: 'test-room',
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
    render(<AIPanel {...defaultProps} />);
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
    render(<AIPanel {...defaultProps} />);
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
    render(<AIPanel {...defaultProps} />);
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.hasTranscriptions).toBe(true);
  });

  it('passes hasTranscriptions=false when no transcriptions', () => {
    render(<AIPanel {...defaultProps} />);
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.hasTranscriptions).toBe(false);
  });

  it('renders renderCaptionsContent as a function', () => {
    render(<AIPanel {...defaultProps} />);
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.renderCaptionsContent).toBe('__fn__');
  });

  it('passes onSend as a function', () => {
    render(<AIPanel {...defaultProps} />);
    const hub = screen.getByTestId('intelligence-hub');
    const props = JSON.parse(hub.dataset.props!);
    expect(props.onSend).toBe('__fn__');
  });
});
