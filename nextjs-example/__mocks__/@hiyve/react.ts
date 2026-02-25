/**
 * Mock for @hiyve/react
 *
 * Provides mock implementations of HiyveProvider and hooks used
 * by the nextjs-example components.
 */

import React from 'react';

function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

// --- Mock state (can be overridden per test) ---

export const mockConnectionState = {
  isConnecting: false,
  createRoom: jest.fn().mockResolvedValue(undefined),
  joinRoom: jest.fn().mockResolvedValue(undefined),
  leaveRoom: jest.fn(),
};

export const mockRoomState = {
  isInRoom: false,
  isOwner: false,
  room: null as { name: string } | null,
};

// --- Hooks ---

export function useConnection() {
  return mockConnectionState;
}

export function useRoom() {
  return mockRoomState;
}

// --- Provider ---

export function HiyveProvider(props: Record<string, unknown> & { children?: React.ReactNode }) {
  const { children, ...rest } = props;
  return React.createElement(
    'div',
    { 'data-testid': 'hiyve-provider', 'data-props': serializeProps(rest) },
    children
  );
}
