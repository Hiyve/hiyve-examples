/**
 * @fileoverview React Room Example - Prebuilt Room Application
 * @module react-room-example/App
 *
 * A single-file application that demonstrates the fastest way to get a
 * complete video conferencing room using the Hiyve SDK. Instead of manually
 * composing `VideoGrid`, `ControlBar`, and `ClientProvider`, this example
 * uses `HiyveRoom` (all-in-one provider) and `PrebuiltRoom` (batteries-included UI).
 *
 * ```
 * Fetching Token  ->  Loading spinner
 *       |
 * Token Ready     ->  Join Form (room name + display name)
 *       |
 * User Clicks     ->  HiyveRoom wraps provider + connection
 *   Create/Join         |
 *                       v
 *                    Room component auto-connects on mount
 *                       |
 *                       v
 *                    PrebuiltRoom (full video room UI)
 *                       |
 *                       v
 *                    User clicks Leave -> back to Join Form
 * ```
 *
 * ## Key Concepts
 *
 * - `HiyveRoom` replaces the manual `ClientProvider` setup. It accepts a
 *   `roomToken` and internally creates the provider, so children can
 *   immediately use hooks like `useConnection()` and `useRoom()`.
 *
 * - `PrebuiltRoom` renders the entire in-room experience (video grid,
 *   control bar, layout switching, device selection) with no manual
 *   component composition required.
 *
 * ## Key Hooks Used
 *
 * - `useConnection()` - Connection state and room actions (createRoom, joinRoom, leaveRoom)
 * - `useRoom()` - Room state (isInRoom)
 *
 * @see {@link Room} - Auto-connects and renders PrebuiltRoom
 * @see {@link Loading} - Shared loading spinner
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Box, TextField, Button, Typography, CircularProgress, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useConnection, useRoom } from '@hiyve/react';
import { HiyveRoom, PrebuiltRoom } from '@hiyve/react-room';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

/**
 * Main application component.
 *
 * Manages three states:
 * 1. **Loading** -- room token is being fetched from the server
 * 2. **Join Form** -- user enters room name and display name
 * 3. **In Room** -- `HiyveRoom` + `PrebuiltRoom` render the full video experience
 *
 * The token is fetched once on mount. When the user clicks Create or Join,
 * the `joined` state switches to `'create'` or `'join'`, which mounts
 * `HiyveRoom` with the `Room` child component inside it.
 *
 * @returns {JSX.Element} The appropriate view based on current state
 */
export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [roomName, setRoomName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [joined, setJoined] = useState<'create' | 'join' | null>(null);

  // Fetch a room token from the backend on mount.
  // The token authenticates this client with the Hiyve signaling server.
  useEffect(() => {
    fetch('/api/generate-room-token', { method: 'POST', headers: { 'Content-Type': 'application/json' } })
      .then(r => r.json())
      .then(d => setToken(d.roomToken))
      .catch(console.error);
  }, []);

  // Show a loading spinner while the room token is being fetched
  if (!token) return <Loading />;

  // Once the user clicks Create or Join, wrap the Room component in HiyveRoom.
  // HiyveRoom replaces the need for a manual ClientProvider -- it accepts a
  // roomToken and sets up the provider internally so hooks work immediately.
  if (joined) {
    return (
      <HiyveRoom roomToken={token}>
        <Room roomName={roomName} displayName={displayName} action={joined} onLeave={() => setJoined(null)} />
      </HiyveRoom>
    );
  }

  // Default view: join form where the user enters room name and display name
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 2 }}>
        <Typography variant="h4">React Room Example</Typography>
        <TextField label="Room Name" value={roomName} onChange={e => setRoomName(e.target.value)} sx={{ width: 300 }} />
        <TextField label="Display Name" value={displayName} onChange={e => setDisplayName(e.target.value)} sx={{ width: 300 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" disabled={!roomName || !displayName} onClick={() => setJoined('create')}>
            Create Room
          </Button>
          <Button variant="outlined" disabled={!roomName || !displayName} onClick={() => setJoined('join')}>
            Join Room
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

/**
 * Room component that auto-connects on mount and delegates all UI to PrebuiltRoom.
 *
 * This component is rendered inside `HiyveRoom`, so it has access to
 * `useConnection()` and `useRoom()` hooks. On mount, it calls either
 * `createRoom` or `joinRoom` depending on the `action` prop. Once
 * connected, it renders `PrebuiltRoom` which provides the complete
 * video room interface (video grid, control bar, layout switching, etc.).
 *
 * If the connection fails, `onLeave` is called to return to the join form.
 *
 * @param {object} props
 * @param {string} props.roomName - Name of the room to create or join
 * @param {string} props.displayName - Display name for the local participant
 * @param {'create' | 'join'} props.action - Whether to create a new room or join an existing one
 * @param {() => void} props.onLeave - Callback to return to the join form
 * @returns {JSX.Element} Loading spinner while connecting, or PrebuiltRoom when connected
 */
function Room({ roomName, displayName, action, onLeave }: {
  roomName: string; displayName: string; action: 'create' | 'join'; onLeave: () => void;
}) {
  const { isConnecting, createRoom, joinRoom, leaveRoom } = useConnection();
  const { isInRoom } = useRoom();

  // Auto-connect on mount: call createRoom or joinRoom based on the action prop.
  // On failure, fall back to the join form via onLeave.
  useEffect(() => {
    const connect = action === 'create' ? createRoom : joinRoom;
    connect(roomName, displayName).catch(() => onLeave());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isConnecting || !isInRoom) return <Loading text="Connecting..." />;

  // PrebuiltRoom renders the entire in-room UI. onLeave disconnects and
  // returns to the join form.
  return <PrebuiltRoom onLeave={() => { leaveRoom(); onLeave(); }} />;
}

/**
 * Full-screen loading spinner with an optional text label.
 *
 * Used in two places:
 * 1. While the room token is being fetched (no text)
 * 2. While the WebRTC connection is being established ("Connecting...")
 *
 * @param {object} props
 * @param {string} [props.text] - Optional label to display next to the spinner
 * @returns {JSX.Element} Centered loading indicator
 */
function Loading({ text }: { text?: string }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#121212', gap: 2 }}>
      <CircularProgress />
      {text && <Typography color="white">{text}</Typography>}
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
