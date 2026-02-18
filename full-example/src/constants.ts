/**
 * @fileoverview Full Example - Application Constants
 * @module full-example/constants
 *
 * Defines localStorage keys used for persisting user preferences across sessions.
 */

export const STORAGE_KEYS = {
  userName: 'hiyve-example-userName',
  roomName: 'hiyve-example-roomName',
  userRole: 'hiyve-example-userRole',
  enableWaitingRoom: 'hiyve-example-enableWaitingRoom',
  streamingConfig: 'hiyve-streaming-config',
} as const;
