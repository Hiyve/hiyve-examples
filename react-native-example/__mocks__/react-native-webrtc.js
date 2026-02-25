/**
 * Mock for react-native-webrtc
 *
 * Provides stub implementations of WebRTC classes used by the SDK
 * under the hood. The example app does not import these directly,
 * but they are needed to prevent native module resolution failures.
 */

class MediaStream {
  constructor() {
    this.id = 'mock-stream-id';
    this._tracks = [];
  }

  getTracks() {
    return this._tracks;
  }

  getAudioTracks() {
    return this._tracks.filter((t) => t.kind === 'audio');
  }

  getVideoTracks() {
    return this._tracks.filter((t) => t.kind === 'video');
  }

  addTrack(track) {
    this._tracks.push(track);
  }

  removeTrack(track) {
    this._tracks = this._tracks.filter((t) => t !== track);
  }
}

class MediaStreamTrack {
  constructor(kind) {
    this.kind = kind || 'video';
    this.enabled = true;
    this.id = `mock-${this.kind}-track`;
    this.readyState = 'live';
  }

  stop() {
    this.readyState = 'ended';
  }
}

class RTCPeerConnection {
  constructor() {
    this.localDescription = null;
    this.remoteDescription = null;
    this.connectionState = 'new';
    this.iceConnectionState = 'new';
  }

  createOffer() {
    return Promise.resolve({type: 'offer', sdp: 'mock-sdp'});
  }

  createAnswer() {
    return Promise.resolve({type: 'answer', sdp: 'mock-sdp'});
  }

  setLocalDescription(desc) {
    this.localDescription = desc;
    return Promise.resolve();
  }

  setRemoteDescription(desc) {
    this.remoteDescription = desc;
    return Promise.resolve();
  }

  addIceCandidate() {
    return Promise.resolve();
  }

  close() {
    this.connectionState = 'closed';
  }
}

class RTCSessionDescription {
  constructor({type, sdp}) {
    this.type = type;
    this.sdp = sdp;
  }
}

class RTCIceCandidate {
  constructor(candidate) {
    this.candidate = candidate;
  }
}

const mediaDevices = {
  getUserMedia: jest.fn().mockResolvedValue(new MediaStream()),
  enumerateDevices: jest.fn().mockResolvedValue([]),
};

const RTCView = 'RTCView';

const registerGlobals = jest.fn();

module.exports = {
  MediaStream,
  MediaStreamTrack,
  RTCPeerConnection,
  RTCSessionDescription,
  RTCIceCandidate,
  RTCView,
  mediaDevices,
  registerGlobals,
};
