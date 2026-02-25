import type { ReactNode } from 'react';

// Serialize props, converting functions to a marker string and React elements to a marker
function serializeProps(props: Record<string, unknown>): string {
  const seen = new WeakSet();
  return JSON.stringify(props, (_key, value) => {
    if (typeof value === 'function') return '__fn__';
    if (value !== null && typeof value === 'object') {
      if ('$$typeof' in value) return '__react_element__';
      if (seen.has(value)) return '__circular__';
      seen.add(value);
    }
    return value;
  });
}

export function FileCacheProvider({ children }: { children: ReactNode; [key: string]: unknown }) {
  return <div data-testid="file-cache-provider">{children}</div>;
}

export function FileManager(props: Record<string, unknown>) {
  return <div data-testid="file-manager" data-props={serializeProps(props)} />;
}
