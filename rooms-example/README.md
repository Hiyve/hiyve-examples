# Rooms Example

A room dashboard example using `@hiyve/react` and `@hiyve/react-rooms`. Demonstrates stored room management, active room discovery, and video conferencing with cloud integration.

## Features

- **Host view** — Create, search, and manage stored rooms via `RoomDashboard`
- **Guest view** — Discover and join active rooms via `ActiveRoomsList`
- **Video room** — Full video conferencing with controls, participant list, and screen sharing
- **Cloud integration** — Room advertising and discovery via `useCloudClient()` hook
- **Server-side token generation** — API key stays on the server; browser gets short-lived tokens

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh rooms-example
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

This installs both client and server dependencies.

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

The client runs on http://localhost:5173 and the server on http://localhost:3001.

## Configuration

The server requires the following environment variables in `server/.env`:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `APIKEY` | Yes | — | Hiyve API key from [console.hiyve.dev](https://console.hiyve.dev) |
| `CLIENT_SECRET` | Yes | — | Hiyve client secret |
| `SERVER_REGION` | No | `us-west-2` | Signaling server region |
| `SERVER_REGION_URL` | No | `.rtc.muziemedia.com` | Signaling server domain suffix |
| `PORT` | No | `3001` | Server port |

## Running the App

```bash
pnpm run dev
```

The client runs on http://localhost:5173 and the server on http://localhost:3001.

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react` | Core provider and hooks (`useConnection`, `useRoom`, `useCloudClient`) |
| `@hiyve/react-rooms` | `RoomsList`, `ActiveRoomsList` components |
| `@hiyve/react-ui` | `VideoGrid`, `ControlBar` components |
| `@hiyve/cloud` | `CloudClient` type (used by GuestLobby props) |
| `@hiyve/core` | Shared types (`StoredRoom`, `ActiveRoom`) |
| `@hiyve/rtc-client` | Underlying WebRTC client library (peer dependency) |
| `@hiyve/utilities` | Shared utilities |
| `@hiyve/admin` | Server-side middleware for token generation endpoints |

## Architecture

```text
main.tsx          — HiyveProvider (token generation handled by @hiyve/admin server)
  └── App.tsx     — Tab router (host / guest / video room)
        ├── RoomDashboard   — Local wrapper around RoomsList (@hiyve/react-rooms)
        ├── GuestLobby      — Active room discovery via ActiveRoomsList (@hiyve/react-rooms)
        └── VideoRoom       — Video conferencing UI (@hiyve/react-ui)
```

### Token Flow

```text
Browser                          Server                     Hiyve API
  │                                │                           │
  ├─ POST /api/generate-room-token─►│                           │
  │                                ├─ POST /room-token ────────►│
  │                                │◄── roomToken ──────────────┤
  │◄── roomToken ──────────────────┤                           │
  │                                │                           │
  ├─ POST /api/generate-cloud-token►│                           │
  │                                ├─ POST /cloud-token ───────►│
  │                                │◄── ct_xxx ────────────────┤
  │◄── cloudToken ─────────────────┤                           │
```

API keys never reach the browser. The `@hiyve/admin` middleware auto-discovers available endpoints and `HiyveProvider` resolves tokens automatically.

### Key Patterns

**Provider setup** (`main.tsx`):

```tsx
<HiyveProvider
  localVideoElementId="local-video"
  persistDeviceChanges
  onError={(err) => setError(err.message)}
>
  <App />
</HiyveProvider>
```

**Accessing cloud client** (`App.tsx`):

```tsx
const cloudClient = useCloudClient();
// Returns CloudClient | null — null if cloud auth wasn't configured
```

## Server Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/generate-room-token` | POST | Generate a room token for WebRTC authentication |
| `/api/generate-cloud-token` | POST | Generate a cloud token for AI and room discovery |
| `/api/health` | GET | Health check and configuration status |

## Development Mode

For local SDK development, link packages to the SDK workspace:

```bash
pnpm packages:dev     # Switch to linked packages
pnpm packages:prod    # Switch back to registry packages
pnpm packages:status  # Check current mode
```
