/**
 * @fileoverview Media Player Example - Main Application Component
 * @module media-player-example/App
 *
 * Demonstrates three ways to use `@hiyve/react-media-player`:
 *
 * 1. **BasicDemo** — Minimal `<MediaPlayer src={url} />` with a URL input
 * 2. **FullFeaturedDemo** — Region editing, loop playback, custom colors, region persistence
 * 3. **CustomHookDemo** — `useMediaPlayer` hook for building a fully custom player UI
 *
 * Each demo includes a text field to load any media URL, making it easy to
 * test with different audio/video files.
 */

import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Replay10Icon from '@mui/icons-material/Replay10';
import LinearProgress from '@mui/material/LinearProgress';
import { MediaPlayer, useMediaPlayer, type RegionData } from '@hiyve/react-media-player';

/** Sample media URL used as default for all demos. */
const SAMPLE_AUDIO = 'https://hiyve-io-public.s3.us-east-1.amazonaws.com/Zombie+Frogs+-+Potentially+Broken+Orange+Guitar+Play-Through.mp4';

/**
 * Minimal MediaPlayer demo — just a `src` URL and error handler.
 * Shows the simplest possible integration with `<MediaPlayer>`.
 */
function BasicDemo() {
  const [url, setUrl] = useState(SAMPLE_AUDIO);
  const [activeUrl, setActiveUrl] = useState(SAMPLE_AUDIO);
  const [error, setError] = useState<string | null>(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Basic Player</Typography>
      <Typography variant="body2" color="text.secondary">
        Minimal setup — just provide a <code>src</code> URL.
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          label="Media URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setActiveUrl(url);
          }}
        />
        <Button variant="contained" onClick={() => setActiveUrl(url)}>
          Load
        </Button>
      </Box>

      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Box sx={{ height: 300, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <MediaPlayer
          src={activeUrl}
          onError={(err) => setError(err.message)}
        />
      </Box>
    </Box>
  );
}

/**
 * Full-featured MediaPlayer demo with region editing, loop playback,
 * and custom waveform colors. Demonstrates `enableRegions`, `regions`,
 * `onRegionChange`, `onRegionDelete`, and the `colors` prop.
 */
function FullFeaturedDemo() {
  const [url, setUrl] = useState(SAMPLE_AUDIO);
  const [activeUrl, setActiveUrl] = useState(SAMPLE_AUDIO);
  const [regions, setRegions] = useState<RegionData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleRegionChange = useCallback((region: RegionData) => {
    setRegions((prev) => {
      const idx = prev.findIndex((r) => r.id === region.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = region;
        return next;
      }
      return [...prev, region];
    });
  }, []);

  const handleRegionDelete = useCallback((regionId: string) => {
    setRegions((prev) => prev.filter((r) => r.id !== regionId));
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Full-Featured Player</Typography>
      <Typography variant="body2" color="text.secondary">
        All features enabled — regions and custom colors.
        Click the edit button to create, rename, move, or delete regions. Turn off edit mode and click a region to loop-play it.
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          label="Media URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setActiveUrl(url);
          }}
        />
        <Button variant="contained" onClick={() => setActiveUrl(url)}>
          Load
        </Button>
      </Box>

      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Box sx={{ height: 300, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <MediaPlayer
          src={activeUrl}
          enableRegions
          regions={regions}
          onRegionChange={handleRegionChange}
          onRegionDelete={handleRegionDelete}
          onError={(err) => setError(err.message)}
          colors={{
            waveColor: '#6366f1',
            progressColor: '#ec4899',
          }}
        />
      </Box>

      {regions.length > 0 && (
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Saved Regions ({regions.length})
          </Typography>
          {regions.map((r) => (
            <Typography key={r.id} variant="body2" color="text.secondary">
              {r.content || 'Unnamed'}: {r.start.toFixed(1)}s - {r.end.toFixed(1)}s
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}

/**
 * Custom player UI built with the `useMediaPlayer` hook.
 * Demonstrates accessing playback state (isPlaying, playbackTime, loaded)
 * and controls (togglePlayPause, rewind) to build a fully custom interface.
 */
function CustomHookDemo() {
  const [url, setUrl] = useState(SAMPLE_AUDIO);
  const [activeUrl, setActiveUrl] = useState(SAMPLE_AUDIO);

  const player = useMediaPlayer({
    src: activeUrl,
    onError: (err) => console.error('Player error:', err),
  });

  const progress = player.playbackLength > 0
    ? (player.playbackTime / player.playbackLength) * 100
    : 0;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Custom Hook Usage</Typography>
      <Typography variant="body2" color="text.secondary">
        Use <code>useMediaPlayer</code> to build your own UI with full control over playback state.
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          label="Media URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setActiveUrl(url);
          }}
        />
        <Button variant="contained" onClick={() => setActiveUrl(url)}>
          Load
        </Button>
      </Box>

      {/* Hidden audio element required by useMediaPlayer */}
      <audio ref={player.mediaRef as React.RefObject<HTMLAudioElement>} preload="metadata" />

      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <IconButton onClick={player.rewind} disabled={!player.loaded}>
            <Replay10Icon />
          </IconButton>
          <IconButton
            onClick={player.togglePlayPause}
            disabled={!player.loaded}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            {player.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <Typography variant="body2" sx={{ minWidth: 100, fontFamily: 'monospace' }}>
            {formatTime(player.playbackTime)} / {formatTime(player.playbackLength)}
          </Typography>
        </Box>

        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2, height: 6, borderRadius: 1 }} />

        <Typography variant="caption" color="text.secondary" component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
          {`{
  isPlaying: ${player.isPlaying},
  loaded: ${player.loaded},
  playbackTime: ${player.playbackTime},
  playbackLength: ${player.playbackLength},
  isMuted: ${player.isMuted},
  playbackRate: ${player.playbackRate},
  detectedMediaType: "${player.detectedMediaType}",
}`}
        </Typography>
      </Box>
    </Box>
  );
}

/** Props for the TabPanel wrapper component. */
interface TabPanelProps {
  /** Panel content, rendered only when active. */
  children?: React.ReactNode;
  /** Index of this panel (0-based). */
  index: number;
  /** Currently selected tab index. */
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  if (value !== index) return null;
  return <Box sx={{ pt: 3 }}>{children}</Box>;
}

/**
 * Main application component with tabbed navigation between demos.
 *
 * Tabs: Basic | Full-Featured | Custom Hook
 */
export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Media Player Example
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Demonstrates <code>@hiyve/react-media-player</code> — an audio/video player with
        waveform visualization, region editing, loop playback, and playback controls.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Basic" />
          <Tab label="Full-Featured" />
          <Tab label="Custom Hook" />
        </Tabs>
      </Box>

      <TabPanel value={tab} index={0}>
        <BasicDemo />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <FullFeaturedDemo />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <CustomHookDemo />
      </TabPanel>
    </Box>
  );
}
