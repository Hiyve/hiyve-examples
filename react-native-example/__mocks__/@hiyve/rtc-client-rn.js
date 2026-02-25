/**
 * Mock for @hiyve/rtc-client-rn
 *
 * The RTC client handles the low-level WebRTC and signaling logic.
 * The example app does not import from this package directly, but it is
 * a transitive dependency of @hiyve/rn-core. Providing a mock prevents
 * Jest from trying to resolve native modules.
 */

class HiyveRTCClientRN {
  constructor(options) {
    this.options = options;
  }

  connect() {
    return Promise.resolve();
  }

  disconnect() {}

  destroy() {}
}

module.exports = {
  HiyveRTCClientRN,
};
