/**
 * @fileoverview Angular Example - Application Configuration
 * @module angular-example/app.config
 *
 * Configures the Angular application with Hiyve SDK providers.
 *
 * `provideHiyve()` is the Angular equivalent of React's `<HiyveProvider>`.
 * In React you would wrap your component tree with a context provider:
 *
 *   <HiyveProvider config={...}>
 *     <App />
 *   </HiyveProvider>
 *
 * In Angular, providers are registered at the application level via
 * `ApplicationConfig.providers`. Calling `provideHiyve(config)` returns
 * an `EnvironmentProviders` token that makes `ConnectionService`,
 * `RoomService`, `ParticipantsService`, and the SDK UI components
 * available for injection throughout the app.
 *
 * The `generateRoomToken` callback is called by the SDK whenever a
 * room token is needed (on create/join). It should return a Promise
 * that resolves to a valid Hiyve room token string. This example
 * delegates to a local API proxy at `/api/generate-room-token`.
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHiyve } from '@hiyve/angular';

/**
 * Root application configuration for the Angular standalone app.
 *
 * Providers registered here are available to all components, directives,
 * and services in the application via Angular's dependency injection.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /** Enable Zone.js change detection with event coalescing for performance. */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /** Load Angular Material animations asynchronously to reduce bundle size. */
    provideAnimationsAsync(),

    /**
     * Register all Hiyve SDK services and components.
     *
     * - `generateRoomToken` -- async callback the SDK invokes to obtain a
     *   room token before creating or joining a room.
     * - `localVideoElementId` -- the DOM element ID where the local camera
     *   preview is rendered. Must match the ID used in `<hiyve-video-grid>`.
     */
    provideHiyve({
      generateRoomToken: async () => {
        const res = await fetch('/api/generate-room-token', { method: 'POST' });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ message: 'Token generation failed' }));
          throw new Error(err.message || 'Failed to generate room token');
        }
        const data = await res.json();
        return data.roomToken;
      },
      localVideoElementId: 'local-video',
    }),
  ],
};
