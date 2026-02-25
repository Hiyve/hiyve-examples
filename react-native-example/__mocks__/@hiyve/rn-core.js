/**
 * Mock for @hiyve/rn-core
 *
 * The core package is primarily types and the store class.
 * Since the example app only imports the HiyveStoreRNOptions type from it,
 * this mock provides a minimal stub of the HiyveStoreRN class.
 */

class HiyveStoreRN {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  getState() {
    return {};
  }

  subscribe() {
    return jest.fn();
  }

  destroy() {}
}

const debug = {
  enable: jest.fn(),
  disable: jest.fn(),
};

const createAsyncStorageAdapter = jest.fn(() => ({
  init: jest.fn().mockResolvedValue(undefined),
  getItem: jest.fn().mockResolvedValue(null),
  setItem: jest.fn().mockResolvedValue(undefined),
  removeItem: jest.fn().mockResolvedValue(undefined),
}));

module.exports = {
  HiyveStoreRN,
  debug,
  createAsyncStorageAdapter,
};
