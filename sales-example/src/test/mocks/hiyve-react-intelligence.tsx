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

export function CloudProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="cloud-provider">{children}</div>;
}

export function MoodAnalysisProvider({ children, ...rest }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="mood-analysis-provider" data-props={serializeProps(rest)}>{children}</div>;
}

export function IntelligenceHub(props: Record<string, unknown>) {
  return <div data-testid="intelligence-hub" data-props={serializeProps(props)} />;
}

export function ScorecardPanel(props: Record<string, unknown>) {
  return <div data-testid="scorecard-panel" data-props={serializeProps(props)} />;
}

export function SearchPanel(props: Record<string, unknown>) {
  return <div data-testid="search-panel" data-props={serializeProps(props)} />;
}

export const defaultIntelligenceConfig = {
  captionsEnabled: false,
  alertsEnabled: false,
  sentimentEnabled: false,
};

export type IntelligenceConfig = typeof defaultIntelligenceConfig;

export const useIntelligenceReadiness = vi.fn(() => ({
  isReady: false,
  status: 'idle',
}));

export const useLiveContext = vi.fn(() => ({
  askWithResponseId: vi.fn(),
}));

export const useMoodAnalysisSafe = vi.fn(() => ({
  moodStates: null,
  enabled: false,
  ready: false,
}));

export const useMoodCloudSync = vi.fn();

export const useAnalysis = vi.fn(() => ({
  result: null as unknown,
  loading: false,
  analyzeSalesCall: vi.fn(),
  clearResult: vi.fn(),
}));

export const useNoteGeneration = vi.fn(() => ({
  generateNote: vi.fn(),
  loading: false,
  saved: false,
}));
