function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function JoinWithTokenForm(props: Record<string, unknown>) {
  return <div data-testid="join-with-token-form" data-props={serializeProps(props)} />;
}

export function InviteLinkDialog(props: Record<string, unknown>) {
  return <div data-testid="invite-link-dialog" data-props={serializeProps(props)} />;
}

export function VideoGrid(props: Record<string, unknown>) {
  return <div data-testid="video-grid" data-props={serializeProps(props)} />;
}

export function ControlBar(props: Record<string, unknown>) {
  return <div data-testid="control-bar" data-props={serializeProps(props)} />;
}

export type ControlBarLayoutMode = 'grid' | 'speaker' | 'sidebar';
