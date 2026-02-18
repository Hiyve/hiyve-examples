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

## Packages Used

- `@hiyve/react` — Provider, hooks (`useConnection`, `useRoom`, `useCloudClient`)
- `@hiyve/react-rooms` — `RoomsList`, `ActiveRoomsList` components
- `@hiyve/react-ui` — `VideoGrid`, `ControlBar` components
- `@hiyve/cloud` — `CloudClient` type (used by GuestLobby props)
- `@hiyve/core` — Shared types (`StoredRoom`, `ActiveRoom`)

## Architecture

```
main.tsx          — HiyveProvider with generateRoomToken + generateCloudToken
  └── App.tsx     — Tab router (host / guest / video room)
        ├── RoomDashboard   — Local wrapper around RoomsList (@hiyve/react-rooms)
        ├── GuestLobby      — Active room discovery via ActiveRoomsList (@hiyve/react-rooms)
        └── VideoRoom       — Video conferencing UI (@hiyve/react-ui)
```

### Token Flow

```
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

API keys never reach the browser. The `generateCloudToken` function is passed to `HiyveProvider`, which creates a `CloudClient` internally. Any component can access it via `useCloudClient()`.

### Key Patterns

**Provider setup** (`main.tsx`):

```tsx
<HiyveProvider
  generateRoomToken={generateRoomToken}
  generateCloudToken={generateCloudToken}
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

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `APIKEY` | Yes | - | Hiyve API key |
| `CLIENT_SECRET` | Yes | - | Hiyve client secret |
| `SERVER_REGION` | No | `us-west-2` | Signaling server region |
| `SERVER_REGION_URL` | No | `.rtc.muziemedia.com` | Signaling server domain suffix |
| `PORT` | No | `3001` | Server port |

## Development Mode

For local SDK development, link packages to the SDK workspace:

```bash
pnpm packages:dev     # Switch to linked packages
pnpm packages:prod    # Switch back to registry packages
pnpm packages:status  # Check current mode
```
