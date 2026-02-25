import { vi } from 'vitest';

export const CloudClient = vi.fn(() => ({
  ask: vi.fn(),
  search: vi.fn(),
}));
