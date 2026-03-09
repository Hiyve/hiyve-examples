import { vi } from 'vitest';

export const useConnection = vi.fn(() => ({
  isConnecting: false,
  isConnected: false,
  error: null as string | null,
  createRoom: vi.fn().mockResolvedValue(undefined),
  joinRoom: vi.fn().mockResolvedValue(undefined),
  joinRoomWithToken: vi.fn().mockResolvedValue(undefined),
  getRoomInfoFromToken: vi.fn().mockReturnValue(null),
  leaveRoom: vi.fn(),
}));

export const useRoom = vi.fn(() => ({
  room: null,
  isOwner: false,
  isInRoom: true,
  isNoVideo: false,
}));
