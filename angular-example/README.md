# Hiyve Angular Example

A video conferencing application built with **Angular 20** and the **@hiyve** Angular SDK packages.

Unlike the React examples that use `@hiyve/client-provider` (React Context), this example demonstrates how to integrate the Hiyve SDK with any non-React framework by wrapping `HiyveStore` in an Angular service with RxJS Observables.

## Features

- Create and join video rooms
- Local and remote video/audio streams
- Mute/unmute audio and video
- Screen sharing
- Participant count display
- Angular Material dark theme UI

## Architecture

This example uses the following Hiyve packages:

| Package | Description |
|---------|-------------|
| `@hiyve/core` | Framework-agnostic store (`HiyveStore`) for state management |
| `@hiyve/rtc-client` | WebRTC client library |
| `@hiyve/angular-provider` | Angular service wrapping `HiyveStore` with RxJS Observables |
| `@hiyve/angular-video-tile` | Angular video tile components |
| `@hiyve/angular-video-grid` | Angular video grid with layout modes |
| `@hiyve/angular-control-bar` | Angular media controls component |
| `@hiyve/utilities` | Shared types and layout algorithms (via `@hiyve/utilities/video` subpath) |

The `HiyveService` (from `@hiyve/angular-provider`) wraps `HiyveStore` and converts its callback-based subscriptions into RxJS Observables, enabling Angular's `async` pipe and `OnPush` change detection.

```
HiyveStore (callback-based)
    └── HiyveService (@Injectable)
        └── BehaviorSubjects → Observables
            └── async pipe in templates (OnPush)
```

## Prerequisites

- Node.js 18+
- pnpm
- Hiyve API credentials from [console.hiyve.dev](https://console.hiyve.dev)

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm run setup
   ```

2. **Configure credentials:**

   ```bash
   cp server/.env.example server/.env
   # Edit server/.env with your APIKEY and CLIENT_SECRET
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

   This starts both the Angular dev server (port 4200) and the Express API server (port 3001).

4. **Open** [http://localhost:4200](http://localhost:4200)

## Project Structure

```
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
      services/
        hiyve.service.ts    # HiyveStore → RxJS wrapper
      directives/
        media-stream.directive.ts  # [appMediaStream] for video srcObject
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

The pattern used in `HiyveService` can be adapted to any framework:

- **Vue 3**: Wrap `subscribeToSlice` in `ref()` / `watchEffect()`
- **Svelte**: Use Svelte stores with `subscribe()`
- **Solid.js**: Use `createSignal()` with `subscribeToSlice()`

The key is to bridge `HiyveStore.subscribeToSlice()` callbacks to your framework's reactivity system.
