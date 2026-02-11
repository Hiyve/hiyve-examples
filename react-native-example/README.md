# React Native Example

A mobile video conferencing app built with React Native CLI and the `@hiyve/react-native` SDK. Uses the same provider + hooks pattern as the web examples, with pre-built `VideoGrid` and `ControlBar` components designed for React Native.

## Quick Start

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh react-native-example
```

### Option B: Manual Setup

```bash
# 1. Install dependencies
npm run setup

# 2. Configure server credentials
cp server/.env.example server/.env
# Edit server/.env with your Hiyve API key and secret

# 3. Start the app
npm run dev
# In a separate terminal:
npm run ios    # or npm run android
```

## Features

- Create or join video rooms by name
- Real-time video/audio with WebRTC
- SDK-managed video grid with adaptive layout
- Built-in control bar (mute, camera, flip, leave)
- Automatic permission handling (camera + microphone)
- Platform-aware token server URL (localhost vs 10.0.2.2)
- Dark theme UI

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react-native` | Provider, hooks, VideoGrid, ControlBar |
| `@hiyve/core-rn` | Framework-agnostic state store (peer dep) |
| `@hiyve/rtc-client-rn` | WebRTC client + signaling (peer dep) |
| `react-native-webrtc` | Native WebRTC implementation (peer dep) |
| `react-native-safe-area-context` | Safe area insets for notch/island devices |
| `@react-native-async-storage/async-storage` | Persistent storage (peer dep) |

## Architecture

```
react-native-example/
├── src/
│   ├── App.tsx              # HiyveRNProvider setup + state-based routing
│   ├── declarations.d.ts    # TypeScript declarations for @hiyve/* packages
│   └── screens/
│       ├── JoinScreen.tsx   # Room name + user name form
│       └── RoomScreen.tsx   # VideoGrid + ControlBar + header
├── server/
│   ├── server.js            # Express token server
│   └── .env.example         # Server config template
├── ios/                     # Xcode project
└── android/                 # Android project
```

### Component Flow

```
SafeAreaProvider
  └── HiyveRNProvider (options: { generateRoomToken })
      └── AppContent
          ├── JoinScreen         # !isInRoom && !isConnecting
          ├── ActivityIndicator  # isConnecting
          └── RoomScreen         # isInRoom
              ├── Header (room name + participant count)
              ├── VideoGrid (SDK component)
              └── ControlBar (SDK component)
```

## Code Overview

### App.tsx

Sets up the `HiyveRNProvider` with a `generateRoomToken` callback that fetches tokens from the local server. Routes between screens using `useConnection()` and `useRoom()`:

```tsx
import { HiyveRNProvider, useConnection, useRoom } from '@hiyve/react-native';

const { isConnecting } = useConnection();
const { isInRoom } = useRoom();
// isConnecting → spinner, isInRoom → RoomScreen, else → JoinScreen
```

### JoinScreen.tsx

Uses `useConnection()` for `createRoom`/`joinRoom` and `usePermissions()` to request camera/mic access before connecting:

```tsx
const { createRoom, joinRoom } = useConnection();
const { requestPermissions } = usePermissions();

await requestPermissions();
await createRoom(roomName, userId);
```

### RoomScreen.tsx

Drops in SDK components with data from hooks:

```tsx
const { localStream, isAudioMuted, isVideoMuted, toggleAudio, toggleVideo, switchCamera } = useLocalMedia();
const { participants, localUserId, participantCount } = useParticipants();

<VideoGrid localStream={localStream} localUserId={localUserId} participants={participants} />
<ControlBar isAudioMuted={isAudioMuted} isVideoMuted={isVideoMuted} ... />
```

## Hooks Reference

| Hook | Returns | Purpose |
|------|---------|---------|
| `useConnection()` | `isConnecting`, `isConnected`, `error`, `createRoom`, `joinRoom`, `leaveRoom` | Connection lifecycle |
| `useRoom()` | `room`, `isOwner`, `isInRoom` | Room state |
| `useLocalMedia()` | `localStream`, `isAudioMuted`, `isVideoMuted`, `toggleAudio`, `toggleVideo`, `switchCamera` | Local media controls |
| `useParticipants()` | `participants`, `localUserId`, `participantCount` | Remote participants |
| `usePermissions()` | `granted`, `denied`, `requesting`, `requestPermissions` | Camera/mic permissions |

## Platform Notes

### iOS

- Camera and microphone usage descriptions are declared in `ios/HiyveExample/Info.plist`
- Simulator has limited camera support — use a physical device for full testing
- Run `cd ios && bundle exec pod install` after `npm install`

### Android

- Permissions are requested at runtime via `usePermissions()` hook
- Android Emulator maps `10.0.2.2` to host `localhost` (auto-detected via `Platform.OS`)
- Requires Android SDK 24+

### Physical Devices

The token server must be reachable over the local network:

1. Find your machine's local IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`
2. Update `TOKEN_SERVER_URL` in `src/App.tsx`:
   ```typescript
   const TOKEN_SERVER_URL = 'http://192.168.1.100:3001';
   ```
3. Ensure your firewall allows connections on port 3001

## Development

### Available Scripts

```bash
npm start              # Start Metro bundler
npm run ios            # Build and run on iOS Simulator
npm run android        # Build and run on Android Emulator
npm run dev:server     # Start token server only (port 3001)
npm run dev            # Start token server + Metro concurrently
npm run setup          # Install all deps + CocoaPods
```

### Developing with Local SDK

```bash
npm run packages:dev      # Switch to local packages
npm run packages:prod     # Switch back to registry packages
npm run packages:status   # Check current mode
```

Metro auto-detects local SDK packages when `../../hiyve-sdk/packages` exists and adds it to `watchFolders` automatically.

After switching, reinstall and rebuild:

```bash
npm install
cd ios && bundle exec pod install
```

If Metro has stale caches after switching:

```bash
npm start -- --reset-cache
```

## Troubleshooting

### "Server not configured" error

Create `server/.env` with valid Hiyve API credentials. See the Quick Start section.

### "No permission handler detected" (iOS)

Run CocoaPods:

```bash
cd ios && bundle install && bundle exec pod install
```

### Android build fails with "SDK location not found"

Create `android/local.properties`:

```
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
```

### Camera not working in iOS Simulator

Use a physical iOS device for full WebRTC testing.

### Connection fails on physical device

Update `TOKEN_SERVER_URL` in `src/App.tsx` to your machine's LAN IP address.

### Metro bundler can't resolve @hiyve/* packages

Run `npm install`. If using local packages, verify `../../hiyve-sdk/packages` exists and restart Metro with `--reset-cache`.

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [React Native WebRTC](https://github.com/react-native-webrtc/react-native-webrtc)
- [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)
