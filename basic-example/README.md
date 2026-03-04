# Basic Example

The simplest possible video conferencing application using the Hiyve SDK. This example demonstrates the minimum setup required to create a working video app.

## Features

This is a minimal example with only essential features:

- Create or join video rooms by name
- Real-time video/audio with WebRTC
- Mute/unmute audio and video
- Screen sharing
- Layout switching (grid, speaker, sidebar)
- Device selection and preview before joining

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh basic-example
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

## Configuration

The server requires the following environment variables in `server/.env`:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `APIKEY` | Yes | — | Hiyve API key from [console.hiyve.dev](https://console.hiyve.dev) |
| `CLIENT_SECRET` | Yes | — | Hiyve client secret |
| `SERVER_REGION` | No | `us-west-2` | Signaling server region |

## Running the App

```bash
pnpm run dev
```

This starts the Vite dev server on http://localhost:5173 and the Express API server on http://localhost:3001.

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react` | Core WebRTC provider and hooks (`useRoomFlow`) |
| `@hiyve/react-ui` | `VideoGrid`, `ControlBar`, `JoinForm`, `ConnectingScreen`, `DevicePreview` |
| `@hiyve/rtc-client` | Underlying WebRTC client library (peer dependency) |
| `@hiyve/utilities` | Shared utilities |
| `@hiyve/admin` | Server-side middleware for token generation endpoints |

## Architecture

```text
src/
├── main.tsx              # Provider setup with HiyveProvider
├── App.tsx               # Join form and room routing
└── components/
    └── VideoRoom.tsx     # Video grid and control bar
```

### Component Flow

```text
HiyveProvider (main.tsx)
  └── App.tsx (useRoomFlow)
      ├── JoinForm (SDK)        # screen = "lobby"
      ├── ConnectingScreen (SDK) # screen = "connecting"
      └── VideoRoom              # screen = "in-room"
          ├── VideoGrid
          └── ControlBar
```

## Code Overview

### Provider Setup (main.tsx)

```tsx
import { HiyveProvider } from '@hiyve/react';
import { formatHiyveError } from '@hiyve/utilities';

<HiyveProvider
  generateRoomToken={generateRoomToken}
  localVideoElementId="local-video"
  persistDeviceChanges
  onError={(err) => setError(err.message || String(err))}
>
  <App />
</HiyveProvider>
```

### Room Flow Routing (App.tsx)

```tsx
import { useRoomFlow } from '@hiyve/react';
import { JoinForm, ConnectingScreen } from '@hiyve/react-ui';

const { screen } = useRoomFlow();

switch (screen) {
  case 'connecting':
    return <ConnectingScreen />;
  case 'in-room':
    return <VideoRoom userName={userName} />;
  default:
    return <JoinForm autoConnect devicePreviewMode="inline" storagePrefix="hiyve-basic" />;
}
```

### Video Room (VideoRoom.tsx)

```tsx
import { useRoom, useConnection } from '@hiyve/react';
import { VideoGrid, ControlBar } from '@hiyve/react-ui';

const { room, isOwner } = useRoom();
const { leaveRoom } = useConnection();

<VideoGrid layout={layout} localUserName={userName} />
<ControlBar onLeave={leaveRoom} showScreenShare />
```

## Hooks Reference

### Used in This Example

```tsx
// Room flow - derives current screen from connection state
const { screen } = useRoomFlow();
// screen: 'lobby' | 'connecting' | 'waiting-for-host' | 'in-room'
```

### Advanced (Not Used Here)

These hooks are available for more complex implementations:

```tsx
// Connection - create/join/leave rooms (used internally by JoinForm)
const { createRoom, joinRoom, leaveRoom, isConnecting } = useConnection();

// Room state - check room info and ownership
const { room, isOwner, isInRoom } = useRoom();

// Participants - access participant list
const { participants, localUserId, participantCount } = useParticipants();

// Media controls - programmatic mute control (ControlBar handles this)
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
Create `server/.env` with valid Hiyve API credentials.

### Camera/microphone not working
Grant camera and microphone permissions in your browser settings.

### Module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

## Next Steps

Once you understand this basic example, check out:

- **full-example** - All features: chat, recording, transcription, file sharing, Q&A, whiteboard
- **token-room-example** - Invite links with token-based joining

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [Full Example README](../full-example/README.md)
