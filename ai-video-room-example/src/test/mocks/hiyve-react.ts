import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const useRoomFlow = vi.fn(() => ({
  screen: 'lobby' as 'lobby' | 'connecting' | 'waiting-for-host' | 'in-room',
}));

export const useRoom = vi.fn(() => ({
  room: { name: 'Test Room', id: 'room-123' } as { name: string; id: string } | null,
  isOwner: false,
  isInRoom: true,
}));

export const useConnection = vi.fn(() => ({
  leaveRoom: vi.fn(),
  createRoom: vi.fn(),
  joinRoom: vi.fn(),
}));

export const useRecording = vi.fn(() => ({
  isRecording: false,
  recordingDuration: 0,
  responseId: null as string | null,
  isRecordingStarting: false,
}));

export const useParticipants = vi.fn(() => ({
  participantCount: 2,
  localUserId: 'user-123',
}));

export const useTranscription = vi.fn(() => ({
  transcriptions: [] as unknown[],
  isTranscribing: false,
  enrichTranscription: vi.fn(),
}));

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
