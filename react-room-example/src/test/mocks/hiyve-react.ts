import { vi } from 'vitest';

export const useConnection = vi.fn(() => ({
  isConnecting: false,
  createRoom: vi.fn().mockResolvedValue(undefined),
  joinRoom: vi.fn().mockResolvedValue(undefined),
  leaveRoom: vi.fn(),
}));

export const useRoom = vi.fn(() => ({
  isInRoom: true,
}));
