// Serialize props, converting functions to a marker string
function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function VideoGrid(props: Record<string, unknown>) {
  return <div data-testid="video-grid" data-props={serializeProps(props)} />;
}

export function ControlBar(props: Record<string, unknown>) {
  return <div data-testid="control-bar" data-props={serializeProps(props)} />;
}

export type ControlBarLayoutMode = 'grid' | 'speaker' | 'sidebar';
