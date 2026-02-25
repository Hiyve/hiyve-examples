import { vi } from 'vitest';

export const formatHiyveError = vi.fn((error: string) => `Formatted: ${error}`);
