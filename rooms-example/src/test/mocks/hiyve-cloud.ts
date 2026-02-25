// CloudClient type mock — the actual instance is provided by useCloudClient from @hiyve/react
export type CloudClient = {
  advertiseRoom: (opts: unknown) => Promise<void>;
  removeAdvertisedRoom: (name: string) => Promise<void>;
  getActiveRoomsStreamUrl: (userId: string) => Promise<string>;
};
