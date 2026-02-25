import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const useRoomFlow = vi.fn(() => ({
  screen: 'lobby' as 'lobby' | 'connecting' | 'in-room',
}));

export const useRoom = vi.fn(() => ({
  room: { name: 'Test Room', id: 'room-123' },
  isOwner: false,
  isInRoom: true,
}));

export const useConnection = vi.fn(() => ({
  leaveRoom: vi.fn(),
  createRoom: vi.fn(),
  joinRoom: vi.fn(),
}));

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
