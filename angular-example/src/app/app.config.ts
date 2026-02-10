import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHiyve } from '@hiyve/angular-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
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
