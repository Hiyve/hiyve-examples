import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const useRoomFlow = vi.fn(() => ({
  screen: 'lobby' as 'lobby' | 'connecting' | 'waiting-for-host' | 'waiting-room' | 'waiting-room-rejected' | 'in-room',
}));

export const useRoom = vi.fn(() => ({
  room: { name: 'Test Room', id: 'room-123' } as { name: string; id: string } | null,
  isOwner: false,
  isInRoom: true,
  isNoVideo: false,
}));

export const useConnection = vi.fn(() => ({
  isConnecting: false,
  isConnected: false,
  error: null as string | null,
  createRoom: vi.fn(),
  joinRoom: vi.fn(),
  joinRoomWithToken: vi.fn().mockResolvedValue(undefined),
  getRoomInfoFromToken: vi.fn().mockReturnValue(null),
  leaveRoom: vi.fn(),
}));

export const useRecording = vi.fn(() => ({
  isRecording: false,
  recordingDuration: 0,
  responseId: null as string | null,
  isRecordingStarting: false,
}));

export const useStreaming = vi.fn(() => ({
  isStreaming: false,
  streamingDuration: 0,
  streamingUrl: null as string | null,
  switchStreamingUser: vi.fn(),
}));

export const useWaitingRoom = vi.fn(() => ({
  waitingUsers: [] as { id: string; name: string }[],
  isWaitingForAdmission: false,
  wasRejected: false,
}));

export const useLayout = vi.fn(() => ({
  dominantSpeaker: null as string | null,
}));

export const useHandRaise = vi.fn(() => ({
  raisedHandCount: 0,
  lowerAllHands: vi.fn(),
}));

export const useParticipants = vi.fn(() => ({
  participantCount: 2,
  localUserId: 'user-123',
}));

export const useChat = vi.fn(() => ({
  unreadCount: 0,
  clearUnread: vi.fn(),
}));

export const useAudioProcessing = vi.fn(() => ({
  setGain: vi.fn(),
}));

export const useTranscription = vi.fn(() => ({
  transcriptions: [] as unknown[],
  isTranscribing: false,
  enrichTranscription: vi.fn(),
}));

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
