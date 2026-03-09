import { vi } from 'vitest';
import type { ReactNode } from 'react';

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

export const useWaitForHost = vi.fn(() => ({
  isWaiting: false,
}));

export const useCloudClient = vi.fn(() => ({
  search: vi.fn(),
  ask: vi.fn(),
}));

export const useRecording = vi.fn(() => ({
  isRecording: false,
  recordingDuration: 0,
  responseId: null as string | null,
  isRecordingStarting: false,
}));

export const useTranscription = vi.fn(() => ({
  transcriptions: [] as unknown[],
  isTranscribing: false,
  enrichTranscription: vi.fn(),
}));

export const useParticipants = vi.fn(() => ({
  participantCount: 2,
  localUserId: 'user-123',
}));

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
