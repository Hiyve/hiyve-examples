import { vi } from 'vitest';
import type { ReactNode } from 'react';

// Serialize props, converting functions to a marker string and React elements to a marker
function serializeProps(props: Record<string, unknown>): string {
  const seen = new WeakSet();
  return JSON.stringify(props, (_key, value) => {
    if (typeof value === 'function') return '__fn__';
    if (value !== null && typeof value === 'object') {
      if ('$$typeof' in value) return '__react_element__';
      if (seen.has(value)) return '__circular__';
      seen.add(value);
    }
    return value;
  });
}

export function FileCacheProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="file-cache-provider">{children}</div>;
}

export function RoomFileScope({ children }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="room-file-scope">{children}</div>;
}

export function ChatPanel(props: Record<string, unknown>) {
  return <div data-testid="chat-panel" data-props={serializeProps(props)} />;
}

export function FileManager(props: Record<string, unknown>) {
  return <div data-testid="file-manager" data-props={serializeProps(props)} />;
}

export function QASession(props: Record<string, unknown>) {
  return <div data-testid="qa-session" data-props={serializeProps(props)} />;
}

export function QASessionViewer(props: Record<string, unknown>) {
  return <div data-testid="qa-session-viewer" data-props={serializeProps(props)} />;
}

export function PollsSession(props: Record<string, unknown>) {
  return <div data-testid="polls-session" data-props={serializeProps(props)} />;
}

export function PollsSessionViewer(props: Record<string, unknown>) {
  return <div data-testid="polls-session-viewer" data-props={serializeProps(props)} />;
}

export const useQASessionState = vi.fn(() => ({
  hasNewQuestion: false,
  hasActiveQASession: false,
  clearNewQuestionBadge: vi.fn(),
}));

export const usePollListener = vi.fn(() => ({
  hasUnvotedActivePoll: false,
}));

export type CustomViewerMap = Record<string, (...args: unknown[]) => unknown>;
export type QASessionFile = unknown;
export type PollsSessionFile = unknown;
