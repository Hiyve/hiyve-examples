# Media Player Example

A standalone audio/video player using `@hiyve/react-media-player`. This example demonstrates waveform visualization, region editing, loop playback, custom colors, and building a custom player UI with hooks. No server or API credentials required.

## Features

- Play audio and video files from any URL
- Waveform visualization powered by WaveSurfer
- Create, rename, move, and delete named regions
- Click a region to loop-play it
- Volume and playback rate controls
- Custom player UI using the `useMediaPlayer` hook
- Keyboard shortcuts (space for play/pause)
- Custom waveform and progress colors

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh media-player-example
```

This handles authentication and dependencies automatically.

### Option B: Manual Setup

#### 1. Authenticate with Hiyve

The `@hiyve/*` packages require authentication:

```bash
npx hiyve-cli login
```

Enter your Hiyve API key when prompted. Get one at [console.hiyve.dev](https://console.hiyve.dev).

#### 2. Install Dependencies

```bash
pnpm run setup
```

#### 3. Start the App

```bash
pnpm run dev
```

Open http://localhost:5173

## Configuration

This example has no server and requires no environment variables. Just install and run.

## Running the App

```bash
pnpm run dev
```

This starts the Vite dev server on http://localhost:5173.

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react-media-player` | `MediaPlayer` component and `useMediaPlayer` hook |

## Architecture

```text
src/
├── main.tsx    # MUI ThemeProvider + dark theme
└── App.tsx     # Three tabbed demos (Basic, Full-Featured, Custom Hook)
```

No server directory — the media player works entirely in the browser.

## Code Overview

### Basic Player

```tsx
import { MediaPlayer } from '@hiyve/react-media-player';

<MediaPlayer
  src="https://example.com/audio.mp3"
  onError={(err) => console.error(err)}
/>
```

### Regions and Custom Colors

```tsx
import { MediaPlayer, type RegionData } from '@hiyve/react-media-player';

const [regions, setRegions] = useState<RegionData[]>([]);

<MediaPlayer
  src={url}
  enableRegions
  regions={regions}
  onRegionChange={(region) => {
    setRegions((prev) => {
      const idx = prev.findIndex((r) => r.id === region.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = region;
        return next;
      }
      return [...prev, region];
    });
  }}
  onRegionDelete={(id) => setRegions((prev) => prev.filter((r) => r.id !== id))}
  colors={{ waveColor: '#6366f1', progressColor: '#ec4899' }}
/>
```

### Custom Player with Hooks

```tsx
import { useMediaPlayer } from '@hiyve/react-media-player';

function CustomPlayer({ src }: { src: string }) {
  const player = useMediaPlayer({ src });

  return (
    <div>
      <audio ref={player.mediaRef} preload="metadata" />
      <button onClick={player.togglePlayPause}>
        {player.isPlaying ? 'Pause' : 'Play'}
      </button>
      <span>{player.playbackTime}s / {player.playbackLength}s</span>
    </div>
  );
}
```

## Hooks Reference

### useMediaPlayer

Core playback hook — manages the audio/video element, AudioContext, play/pause, seek, mute, and rate.

```tsx
const player = useMediaPlayer({
  src: 'https://example.com/audio.mp3',
  onError: (err) => console.error(err),
  onPlay: () => console.log('playing'),
  onEnded: () => console.log('ended'),
});

// Returns:
// player.isPlaying, player.loaded, player.playbackTime, player.playbackLength
// player.isMuted, player.playbackRate, player.detectedMediaType
// player.play(), player.pause(), player.togglePlayPause()
// player.rewind(), player.seek(time), player.setRate(rate), player.toggleMute()
// player.mediaRef — attach to <audio> or <video> element
```

## Development

```bash
# Start dev server (port 5173)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Toggle Between Local and Registry Packages

For development with local `hiyve-sdk`:

```bash
# From the hiyve-examples root directory:
./toggle-packages.sh dev    # Use local packages
./toggle-packages.sh prod   # Use registry packages
./toggle-packages.sh status # Check current mode
```

## Troubleshooting

### Media fails to load
Check that the URL is accessible and serves correct CORS headers. Try a different file format (MP3, MP4, WAV).

### Waveform not rendering
Large files (>200MB) automatically skip waveform visualization. The player falls back to a basic time slider.

### Module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [Basic Example README](../basic-example/README.md) — minimal video conferencing setup
