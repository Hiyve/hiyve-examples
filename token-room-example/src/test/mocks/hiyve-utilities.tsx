import { vi } from 'vitest';

export const formatHiyveError = vi.fn((error: string) => `Formatted: ${error}`);

function serializeProps(props: Record<string, unknown>): string {
  return JSON.stringify(props, (_key, value) =>
    typeof value === 'function' ? '__fn__' : value
  );
}

export function TooltipIconButton(props: Record<string, unknown> & { children?: unknown; onClick?: () => void }) {
  const { children, onClick, ...rest } = props;
  return (
    <button data-testid="tooltip-icon-button" data-props={serializeProps(rest)} onClick={onClick}>
      {children as React.ReactNode}
    </button>
  );
}

export function LiveClock(props: Record<string, unknown>) {
  return <span data-testid="live-clock" data-props={serializeProps(props)} />;
}

export const useContainerBreakpoint = vi.fn(() => ({
  isBelowBreakpoint: false,
  containerRef: { current: null },
}));
