import type { ReactNode } from 'react';

function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function HiyveRoom({ children, ...rest }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="hiyve-room" data-props={serializeProps(rest)}>{children}</div>;
}

export function PrebuiltRoom(props: Record<string, unknown>) {
  return <div data-testid="prebuilt-room" data-props={serializeProps(props)} />;
}
