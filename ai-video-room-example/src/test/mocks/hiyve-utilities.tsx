import { vi } from 'vitest';
import type { ReactNode } from 'react';

export const formatHiyveError = vi.fn((error: string) => `Formatted: ${error}`);

export function LiveClock() {
  return null;
}

export function TooltipIconButton({
  children,
  tooltip,
  ...rest
}: {
  children: ReactNode;
  tooltip?: string;
  onClick?: (e: unknown) => void;
  [key: string]: unknown;
}) {
  return <span data-testid="tooltip-icon-button" data-tooltip={tooltip}>{children}</span>;
}
