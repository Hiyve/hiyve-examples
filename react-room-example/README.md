# React Room Example

A prebuilt video room with zero manual component composition. This example uses `HiyveRoom` + `PrebuiltRoom` to get a complete video conferencing UI in under 80 lines of code.

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh react-room-example
```

This handles authentication, dependencies, and environment setup automatically.

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

#### 3. Configure Server Credentials

```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your Hiyve credentials:

```env
APIKEY=your-hiyve-api-key
CLIENT_SECRET=your-hiyve-secret
SERVER_REGION=us-west-2
```

#### 4. Start the App

```bash
pnpm run dev
```

Open http://localhost:5173

## Features

This example provides a complete video room with no manual component wiring:

- Create or join video rooms by name
- Real-time video/audio with WebRTC
- Mute/unmute audio and video
- Screen sharing
- Layout switching (grid, speaker, sidebar)
- Device selection
- All UI provided by `PrebuiltRoom` -- no need to compose `VideoGrid`, `ControlBar`, etc.

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react` | Core hooks (`useConnection`, `useRoom`) |
| `@hiyve/react-room` | `HiyveRoom` provider and `PrebuiltRoom` component |
| `@hiyve/react-ui` | UI primitives used internally by `PrebuiltRoom` |
| `@hiyve/rtc-client` | WebRTC client (peer dependency) |
| `@hiyve/utilities` | Shared utilities (peer dependency) |

## Architecture

```
src/
  App.tsx                # Entire app: join form, room wrapper, prebuilt room

server/
  server.js              # Express server for room token generation
  .env                   # API credentials (not committed)
  .env.example           # Template for credentials
```

### Component Flow

```
App
  ├── Loading              # While fetching room token
  ├── Join Form (inline)   # When not yet joined
  │     ├── Room Name input
  │     └── Display Name input
  └── HiyveRoom            # After user clicks Create/Join
        └── Room
              ├── Loading          # While connecting
              └── PrebuiltRoom     # Full video room UI
                    ├── VideoGrid
                    ├── ControlBar
                    └── (all other room UI)
```

## Code Overview

### HiyveRoom + PrebuiltRoom (the key pattern)

`HiyveRoom` wraps provider setup and connection logic into a single component.
`PrebuiltRoom` renders the entire in-room UI (video grid, controls, etc.) with no manual composition.

```tsx
import { HiyveRoom, PrebuiltRoom } from '@hiyve/react-room';

<HiyveRoom roomToken={token}>
  <Room />
</HiyveRoom>
```

This replaces the manual setup you would otherwise write:

```tsx
// What HiyveRoom does internally (you do NOT need to write this):
<ClientProvider generateRoomToken={...}>
  <App />
</ClientProvider>
```

### Room Component (auto-connect on mount)

The `Room` component calls `createRoom` or `joinRoom` inside a `useEffect`, then renders
`PrebuiltRoom` once connected:

```tsx
function Room({ roomName, displayName, action, onLeave }) {
  const { isConnecting, createRoom, joinRoom, leaveRoom } = useConnection();
  const { isInRoom } = useRoom();

  useEffect(() => {
    const connect = action === 'create' ? createRoom : joinRoom;
    connect(roomName, displayName).catch(() => onLeave());
  }, []);

  if (isConnecting || !isInRoom) return <Loading text="Connecting..." />;

  return <PrebuiltRoom onLeave={() => { leaveRoom(); onLeave(); }} />;
}
```

## Prebuilt vs Manual Composition

This example uses the **prebuilt** approach. The basic-example uses the **manual** approach.
Here is how they compare:

| Aspect | react-room-example (prebuilt) | basic-example (manual) |
|--------|-------------------------------|------------------------|
| Provider | `HiyveRoom` (all-in-one) | `ClientProvider` (explicit) |
| Room UI | `PrebuiltRoom` (batteries-included) | `VideoGrid` + `ControlBar` + custom layout |
| Lines of code | ~77 (single file) | ~200+ (multiple files) |
| Customization | Limited -- use props/callbacks | Full control over layout and behavior |
| Best for | Prototypes, quick integrations | Custom UIs, branded experiences |

**Choose prebuilt** when you want a working room fast and do not need custom layouts.
**Choose manual** when you need full control over the video grid, controls, and overall design.

## Hooks Reference

### Used in This Example

```tsx
// Connection -- create/join/leave rooms
const { createRoom, joinRoom, leaveRoom, isConnecting } = useConnection();

// Room state -- check if user is in a room
const { isInRoom } = useRoom();
```

### Advanced (Not Used Here)

These hooks are available if you switch to manual composition:

```tsx
// Participants -- access participant list
const { participants, localUserId, participantCount } = useParticipants();

// Media controls -- programmatic mute control (PrebuiltRoom handles this internally)
const { isAudioMuted, isVideoMuted, toggleAudio, toggleVideo } = useLocalMedia();
```

## Development

```bash
# Start both frontend and backend
pnpm run dev

# Frontend only (port 5173)
pnpm run dev:client

# Server only (port 3001)
pnpm run dev:server
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

### "Server not configured" error
Create `server/.env` with valid Hiyve API credentials. Copy from `server/.env.example`.

### Camera/microphone not working
Grant camera and microphone permissions in your browser settings.

### Module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

### "Must be used within a ClientProvider" error
This usually means Vite is bundling duplicate copies of React context. Clear the cache:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

## Next Steps

Once you understand this prebuilt example, check out:

- **basic-example** - Manual composition with `VideoGrid` + `ControlBar` for full layout control
- **full-example** - All features: chat, recording, transcription, file sharing, Q&A, whiteboard
- **token-room-example** - Invite links with token-based joining

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [Basic Example README](../basic-example/README.md)
