import { vi } from 'vitest';

export const CloudClient = vi.fn(() => ({
  search: vi.fn(),
}));
