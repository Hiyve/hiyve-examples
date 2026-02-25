/**
 * Mock for @hiyve/react-ui
 *
 * Provides mock implementations of UI components used
 * by the nextjs-example components.
 */

import React from 'react';

function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

// --- Type exports ---

export type ControlBarLayoutMode = 'grid' | 'speaker' | 'sidebar';

// --- Components ---

export function DevicePreview(props: Record<string, unknown>) {
  return React.createElement('div', {
    'data-testid': 'device-preview',
    'data-props': serializeProps(props),
  });
}

export function VideoGrid(props: Record<string, unknown>) {
  return React.createElement('div', {
    'data-testid': 'video-grid',
    'data-props': serializeProps(props),
  });
}

export function ControlBar(props: Record<string, unknown>) {
  return React.createElement('div', {
    'data-testid': 'control-bar',
    'data-props': serializeProps(props),
  });
}
