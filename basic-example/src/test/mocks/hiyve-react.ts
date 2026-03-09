import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const useRoomFlow = vi.fn(() => ({
  screen: 'lobby' as 'lobby' | 'connecting' | 'in-room',
}));

export const useRoom = vi.fn(() => ({
  room: { name: 'Test Room', id: 'room-123' },
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

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
