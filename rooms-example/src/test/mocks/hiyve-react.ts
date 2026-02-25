import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const useConnection = vi.fn(() => ({
  isConnecting: false,
  createRoom: vi.fn(),
  joinRoom: vi.fn(),
  leaveRoom: vi.fn(),
}));

export const useRoom = vi.fn(() => ({
  room: { name: 'Test Room', id: 'room-123' },
  isOwner: false,
  isInRoom: false,
}));

export const useCloudClient = vi.fn(() => ({
  advertiseRoom: vi.fn(),
  removeAdvertisedRoom: vi.fn(),
  getActiveRoomsStreamUrl: vi.fn(),
}));

export function HiyveProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return children;
}
