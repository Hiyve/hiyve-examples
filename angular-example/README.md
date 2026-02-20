# Hiyve Angular Example

A video conferencing application built with **Angular 20** and the **@hiyve** Angular SDK packages.

Unlike the React examples that use `@hiyve/react` (React Context), this example uses `@hiyve/angular` which provides Angular-native services, components, and directives for Hiyve SDK integration.

## Features

- Create and join video rooms
- Local and remote video/audio streams
- Mute/unmute audio and video
- Screen sharing
- Participant count display
- Angular Material dark theme UI

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh angular-example
```

This handles authentication, dependencies, and environment setup automatically.

### Option B: Manual Setup

**Prerequisites:** Node.js 18+, pnpm, and Hiyve API credentials from [console.hiyve.dev](https://console.hiyve.dev).

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

This starts both the Angular dev server (port 4200) and the Express API server (port 3001).

Open [http://localhost:4200](http://localhost:4200)

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

This starts the Angular dev server on http://localhost:4200 and the Express API server on http://localhost:3001.

## Packages Used

| Package | Description |
|---------|-------------|
| `@hiyve/core` | Framework-agnostic state management (peer dependency of `@hiyve/angular`) |
| `@hiyve/rtc-client` | WebRTC client library |
| `@hiyve/angular` | Angular services, video grid, video tile, and control bar components |
| `@hiyve/utilities` | Shared types and layout algorithms (via `@hiyve/utilities/video` subpath) |
| `@hiyve/admin` | Server-side middleware for token generation endpoints |

## Architecture

`provideHiyve()` registers SDK services at the application level. Components inject `ConnectionService`, `RoomService`, and `ParticipantsService` which expose RxJS Observables for use with Angular's `async` pipe and `OnPush` change detection.

```text
provideHiyve(config)               # app.config.ts
    ├── ConnectionService          # createRoom(), joinRoom(), leaveRoom(), connection$
    ├── RoomService                # room$, isOwner$, isInRoom$
    └── ParticipantsService        # participants$, participantCount$
```

### Code Example

```typescript
// app.config.ts - register Hiyve providers
import { provideHiyve } from '@hiyve/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHiyve({
      generateRoomToken: async () => { /* fetch from your server */ },
      localVideoElementId: 'local-video',
    }),
  ],
};

// video-room.component.ts - inject services
import { ConnectionService, RoomService, ParticipantsService } from '@hiyve/angular';

private connection = inject(ConnectionService);
private room = inject(RoomService);
room$ = this.room.room$;
isOwner$ = this.room.isOwner$;
```

## Project Structure

```text
angular-example/
  angular.json              # Angular CLI workspace config
  proxy.conf.json           # Dev proxy: /api → localhost:3001
  package.json              # Angular 20 + @hiyve/* packages
  server/
    server.js               # Express server for room token generation
    .env.example            # API credentials template
  src/
    main.ts                 # Bootstrap standalone application
    styles.scss             # Global styles (dark theme)
    app/
      app.component.*       # Root: routing between JoinForm and VideoRoom
      app.config.ts         # Application providers
      components/
        join-form/          # Room name + user name inputs
        video-room/         # Video grid + controls
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start Angular (4200) + Express (3001) |
| `pnpm run build` | Production build |
| `pnpm run start` | Angular dev server only |
| `pnpm run packages:status` | Show current package mode |
| `pnpm run packages:dev` | Switch to local SDK packages |
| `pnpm run packages:prod` | Switch to registry packages |

## Adapting for Other Frameworks

The `@hiyve/angular` package bridges the Hiyve SDK to Angular's reactivity. Similar bridges can be built for other frameworks:

- **Vue 3**: Wrap store subscriptions in `ref()` / `watchEffect()`
- **Svelte**: Use Svelte stores with `subscribe()`
- **Solid.js**: Use `createSignal()` with store subscriptions

The key is to bridge the SDK's state management to your framework's reactivity system.
