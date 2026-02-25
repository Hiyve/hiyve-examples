/**
 * Mock for @hiyve/core
 *
 * Provides type-compatible stubs for the state interfaces re-exported
 * by @hiyve/angular. Only the types actually used by the angular-example
 * components are included here.
 */

export interface ConnectionState {
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
}

export interface RoomInfo {
  id: string;
  name: string;
  owner: string;
  created?: string;
  recordingId?: string | number | null;
}

export interface RoomState {
  room: RoomInfo | null;
  isOwner: boolean;
  isInRoom: boolean;
  isNoVideo: boolean;
}

export interface Participant {
  userId: string;
  userName: string;
}

export interface ParticipantsState {
  participants: Record<string, Participant>;
}
