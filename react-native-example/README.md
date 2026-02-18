# React Native Example

A mobile video conferencing app built with React Native CLI and the `@hiyve/rn-react` SDK. Uses the same provider + hooks pattern as the web examples, with pre-built `VideoGrid` and `ControlBar` components designed for React Native.

## Prerequisites

- Node.js >= 20
- [pnpm](https://pnpm.io/) (all examples use pnpm)
- Xcode 26+ (iOS) or Android Studio (Android)
- Ruby + Bundler (for CocoaPods on iOS)

## Features

- Create or join video rooms by name
- Real-time video/audio with WebRTC
- SDK-managed video grid with adaptive layout
- Built-in control bar (mute, camera, flip, layout, hand raise, record, stream, leave)
- Material Design icons via `@react-native-vector-icons/material-design-icons`
- Automatic permission handling (camera + microphone)
- Platform-aware token server URL (localhost vs 10.0.2.2)
- Dark theme UI

## Quick Start

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh react-native-example
```

### Option B: Manual Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Install CocoaPods (iOS)
cd ios && bundle install && bundle exec pod install && cd ..

# 3. Configure server credentials
cp server/.env.example server/.env
# Edit server/.env with your Hiyve API key and secret

# 4. Start Metro + token server
pnpm run dev

# 5. In a separate terminal, build and run
pnpm run ios    # or pnpm run android
```

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/rn-react` | Provider, hooks, VideoGrid, ControlBar |
| `@hiyve/rn-core` | Framework-agnostic state store (peer dep) |
| `@hiyve/rtc-client-rn` | WebRTC client + signaling (peer dep) |
| `react-native-webrtc` | Native WebRTC implementation (peer dep) |
| `react-native-safe-area-context` | Safe area insets for notch/island devices |
| `@react-native-async-storage/async-storage` | Persistent storage (peer dep) |
| `@react-native-vector-icons/material-design-icons` | ControlBar icons (peer dep of rn-react) |

## Architecture

```
react-native-example/
├── src/
│   ├── App.tsx              # HiyveRNProvider setup + state-based routing
│   └── screens/
│       ├── JoinScreen.tsx   # Room name + user name form
│       └── RoomScreen.tsx   # VideoGrid + ControlBar + header
├── scripts/
│   └── toggle-packages.js   # Switch between local SDK and registry packages
├── server/
│   ├── server.js            # Express token server
│   └── .env.example         # Server config template
├── metro.config.js          # Metro bundler config (auto-detects dev/prod mode)
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
import { HiyveRNProvider, useConnection, useRoom } from '@hiyve/rn-react';

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

## Development

### Available Scripts

```bash
pnpm start                 # Start Metro bundler
pnpm run ios               # Build and run on iOS Simulator
pnpm run android           # Build and run on Android Emulator
pnpm run dev:server        # Start token server only (port 3001)
pnpm run dev               # Start token server + Metro concurrently
pnpm run packages:dev      # Switch to local SDK packages
pnpm run packages:prod     # Switch to registry packages
pnpm run packages:status   # Check current mode
```

### Developing with Local SDK

The toggle script switches `@hiyve/*` dependencies between local SDK source (`link:` paths) and published registry versions. Metro auto-detects the mode from `package.json`:

- **Dev mode** (`link:` paths): Metro resolves `@hiyve/*` from local SDK via `extraNodeModules` and watches for live reload
- **Prod mode** (version numbers): Metro uses default resolution from `node_modules`

```bash
# Switch to local SDK
pnpm run packages:dev
pnpm install
cd ios && bundle exec pod install && cd ..
pnpm start --reset-cache

# In another terminal
pnpm run ios
```

To switch back to published packages:

```bash
pnpm run packages:prod
pnpm install
cd ios && bundle exec pod install && cd ..
pnpm start --reset-cache
```

### After Changing SDK Dependencies

When you add or remove a native dependency in the SDK (e.g. swapping `react-native-svg` for `@react-native-vector-icons/material-design-icons`):

1. Update `package.json` in both the SDK package and this example
2. Run `pnpm install` in this example
3. Clean and reinstall pods:
   ```bash
   rm -rf ios/Pods ios/Podfile.lock
   cd ios && bundle exec pod install && cd ..
   ```
4. Clean Xcode DerivedData if you hit C++ build errors:
   ```bash
   rm -rf ~/Library/Developer/Xcode/DerivedData/HiyveExample-*
   ```
5. Rebuild: `pnpm run ios`

## Platform Notes

### iOS

- Camera and microphone usage descriptions are declared in `ios/HiyveExample/Info.plist`
- Simulator has limited camera support — use a physical device for full testing
- Run `cd ios && bundle exec pod install` after `pnpm install`

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

### Metro can't resolve @hiyve/* packages

1. Check your mode: `pnpm run packages:status`
2. Reinstall: `pnpm install`
3. If in dev mode, verify `../../hiyve-sdk/packages` exists
4. Clear Metro cache: `pnpm start --reset-cache`

### Xcode build fails with "redefinition of TraceEvent"

This is a known Xcode 26 + React Native compatibility issue. Clean DerivedData and pods:

```bash
rm -rf ~/Library/Developer/Xcode/DerivedData/HiyveExample-*
rm -rf ios/Pods ios/Podfile.lock
cd ios && bundle exec pod install && cd ..
pnpm run ios
```

### Icons show as squares or "Un" text

The `MaterialDesignIcons.ttf` font isn't loaded. Ensure `@react-native-vector-icons/material-design-icons` is installed and pods are up to date:

```bash
pnpm install
cd ios && bundle exec pod install && cd ..
pnpm run ios
```

## Learn More

- [Hiyve SDK Documentation](https://sdk.hiyve.dev)
- [React Native WebRTC](https://github.com/react-native-webrtc/react-native-webrtc)
- [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)
