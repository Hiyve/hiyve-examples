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

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react` | Core WebRTC provider and hooks (`useConnection`, `useRoom`) |
| `@hiyve/react-ui` | `VideoGrid`, `ControlBar`, `DevicePreview` |
| `@hiyve/rtc-client` | Underlying WebRTC client library (peer dependency) |
| `@hiyve/utilities` | Shared utilities |

## Architecture

```
src/
├── main.tsx              # Provider setup with HiyveProvider
├── App.tsx               # Routes between JoinForm and VideoRoom
└── components/
    ├── JoinForm.tsx      # Room name input with device preview
    └── VideoRoom.tsx     # Video grid and control bar
```

### Component Flow

```
HiyveProvider (main.tsx)
  └── App.tsx
      ├── JoinForm        # When not in room
      │   └── DevicePreview
      └── VideoRoom       # When in room
          ├── VideoGrid
          └── ControlBar
```

## Code Overview

### Provider Setup (main.tsx)

```tsx
import { HiyveProvider } from '@hiyve/react';

<HiyveProvider
  generateRoomToken={generateRoomToken}
  localVideoElementId="local-video"
  persistDeviceChanges
>
  <App />
</HiyveProvider>
```

### Join Form with Device Preview (JoinForm.tsx)

```tsx
import { useConnection } from '@hiyve/react';
import { DevicePreview } from '@hiyve/react-ui';

const { createRoom, joinRoom } = useConnection();

<DevicePreview persistSelection showAudioOutput showRefreshButton />
<Button onClick={() => createRoom(roomName, userName)}>Create</Button>
<Button onClick={() => joinRoom(roomName, userName)}>Join</Button>
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
// Connection - create/join/leave rooms
const { createRoom, joinRoom, leaveRoom, isConnecting } = useConnection();

// Room state - check room info and ownership
const { room, isOwner, isInRoom } = useRoom();
```

### Advanced (Not Used Here)

These hooks are available for more complex implementations:

```tsx
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
