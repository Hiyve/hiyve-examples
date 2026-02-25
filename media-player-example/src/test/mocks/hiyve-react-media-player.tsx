import { vi } from 'vitest';

// Serialize props, converting functions to a marker string
function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function MediaPlayer(props: Record<string, unknown>) {
  return <div data-testid="media-player" data-props={serializeProps(props)} />;
}

export const useMediaPlayer = vi.fn(() => ({
  isPlaying: false,
  loaded: true,
  playbackTime: 30,
  playbackLength: 180,
  isMuted: false,
  playbackRate: 1,
  detectedMediaType: 'audio',
  mediaRef: { current: null },
  togglePlayPause: vi.fn(),
  rewind: vi.fn(),
}));

export type RegionData = {
  id: string;
  start: number;
  end: number;
  content?: string;
};
