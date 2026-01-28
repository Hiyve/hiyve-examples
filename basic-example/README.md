# Basic Example

The simplest possible video conferencing application using the Hiyve SDK. This example demonstrates the minimum setup required to create a working video app.

## Quick Start

### 1. Authenticate with Hiyve

The `@hiyve/*` packages require authentication:

```bash
npx hiyve-cli login
```

Enter your Hiyve API key when prompted. Get one at [console.hiyve.dev](https://console.hiyve.dev).

### 2. Install Dependencies

```bash
npm run setup
```

### 3. Configure Server Credentials

```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your MuzieRTC credentials:

```env
APIKEY=your-muzie-api-key
CLIENT_SECRET=your-muzie-secret
SERVER_REGION=us-west-2
```

### 4. Start the App

```bash
npm run dev
```

Open http://localhost:5173

## Features

This is a minimal example with only essential features:

- Create or join video rooms by name
- Real-time video/audio with WebRTC
- Mute/unmute audio and video
- Screen sharing
- Layout switching (grid, speaker, sidebar)
- Device selection and preview before joining

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/client-provider` | Core state management and WebRTC client |
| `@hiyve/video-grid` | Auto-layout video grid |
| `@hiyve/video-tile` | Individual video tiles |
| `@hiyve/control-bar` | Media controls |
| `@hiyve/device-selector` | Camera/microphone selection and preview |
| `@hiyve/utilities` | Shared utilities |

## Architecture

```
src/
├── main.tsx              # Provider setup with ClientProvider
├── App.tsx               # Routes between JoinForm and VideoRoom
└── components/
    ├── JoinForm.tsx      # Room name input with device preview
    └── VideoRoom.tsx     # Video grid and control bar
```

### Component Flow

```
ClientProvider (main.tsx)
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
import { ClientProvider } from '@hiyve/client-provider';

<ClientProvider
  generateRoomToken={generateRoomToken}
  localVideoElementId="local-video"
  persistDeviceChanges
>
  <App />
</ClientProvider>
```

### Join Form with Device Preview (JoinForm.tsx)

```tsx
import { useConnection } from '@hiyve/client-provider';
import { DevicePreview } from '@hiyve/device-selector';

const { createRoom, joinRoom } = useConnection();

<DevicePreview videoElementId="local-video" showDeviceSelectors />
<Button onClick={() => createRoom(roomName, userName)}>Create</Button>
<Button onClick={() => joinRoom(roomName, userName)}>Join</Button>
```

### Video Room (VideoRoom.tsx)

```tsx
import { useRoom, useConnection } from '@hiyve/client-provider';
import { VideoGrid } from '@hiyve/video-grid';
import { ControlBar } from '@hiyve/control-bar';

const { room, isOwner } = useRoom();
const { leaveRoom } = useConnection();

<VideoGrid layout={layout} localUserName={userName} />
<ControlBar onLeave={leaveRoom} showScreenShare />
```

## Hooks Reference

```tsx
// Connection
const { createRoom, joinRoom, leaveRoom, isConnecting, error } = useConnection();

// Room state
const { room, isOwner, isInRoom } = useRoom();

// Participants (available but not used in this example)
const { participants, localUserId, participantCount } = useParticipants();

// Media controls (handled by ControlBar, but available)
const { isAudioMuted, isVideoMuted, toggleAudio, toggleVideo } = useLocalMedia();
```

## Development

```bash
# Start both frontend and backend
npm run dev

# Frontend only (port 5173)
npm run dev:client

# Server only (port 3001)
npm run dev:server
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
Create `server/.env` with valid MuzieRTC API credentials.

### Camera/microphone not working
Grant camera and microphone permissions in your browser settings.

### Module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

Once you understand this basic example, check out:

- **full-example** - All features: chat, recording, transcription, file sharing, Q&A, whiteboard
- **token-room-example** - Invite links with token-based joining

## Learn More

- [Hiyve SDK Documentation](https://doawc2271w91z.cloudfront.net/docs/hiyve-sdk/latest/index.html)
- [Full Example README](../full-example/README.md)
