// Type-only module — re-export compatible interfaces for tests
export type StoredRoom = {
  roomName: string;
  metadata?: Record<string, unknown>;
};

export type ActiveRoom = {
  name: string;
  ownerDisplayName?: string;
};
