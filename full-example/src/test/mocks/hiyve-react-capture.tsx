import { vi } from 'vitest';

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

export function RecordingIndicator(props: Record<string, unknown>) {
  return <div data-testid="recording-indicator" data-props={serializeProps(props)} />;
}

export function StreamingIndicator(props: Record<string, unknown>) {
  return <div data-testid="streaming-indicator" data-props={serializeProps(props)} />;
}

export function StreamingUrlDisplay(props: Record<string, unknown>) {
  return <div data-testid="streaming-url-display" data-props={serializeProps(props)} />;
}

export function StreamingSettingsForm(props: Record<string, unknown>) {
  return <div data-testid="streaming-settings-form" data-props={serializeProps(props)} />;
}

export function TranscriptViewer(props: Record<string, unknown>) {
  return <div data-testid="transcript-viewer" data-props={serializeProps(props)} />;
}

export const defaultStreamingConfig = {
  mode: 'hls' as string,
  createMp4: false,
  rtmpUrl: '',
};

export type StreamingConfig = typeof defaultStreamingConfig;

export type RecordingIndicatorColors = {
  background: string;
  indicator: string;
  text: string;
};

export type RecordingIndicatorStyles = {
  animationDuration: string;
  fontWeight: number;
};
