declare module '@hiyve/rtc-client-rn' {
  export class Client {
    constructor(params: {
      roomToken: string;
      serverRegionUrl: string;
      regions?: string[];
      options?: {
        enableBandwidthMonitoring?: boolean;
        audioMode?: string;
      };
    });
    on(event: string, callback: (...args: any[]) => void): void;
    removeAllListeners(): void;
    createRoom(params: {
      roomName: string;
      userId: string;
      externalUserId?: string;
      options?: Record<string, unknown>;
    }): Promise<any>;
    joinRoom(params: {
      roomName: string;
      userId: string;
      externalUserId?: string;
    }): Promise<any>;
    connectTransports(params: {
      options?: Record<string, unknown>;
      waitingRoomToken?: string;
      audioOnly?: boolean;
    }): Promise<void>;
    muteLocalAudio(mute: boolean, overRide?: boolean): Promise<any>;
    muteLocalVideo(mute: boolean, overRide?: boolean): Promise<any>;
    switchCamera(): Promise<void>;
    closeConnection(): Promise<void>;
    isLocalAudioPaused(): boolean;
    isLocalVideoPaused(): boolean;
  }

  export const ClientEvents: {
    READY: string;
    CONNECTED: string;
    DISCONNECTED: string;
    USER_DISCONNECTED: string;
    USER_JOINED_ROOM: string;
    ROOM_JOINED: string;
    ROOM_CLOSED: string;
    ERROR: string;
    MEDIA_TRACK_ADDED: string;
    MEDIA_TRACK_REMOVED: string;
    NEW_PRODUCER: string;
    AUDIO_MUTED: string;
    VIDEO_MUTED: string;
    OUTPUT_MUTED: string;
    REMOTE_AUDIO_MUTED: string;
    REMOTE_VIDEO_MUTED: string;
    REMOTE_OUTPUT_MUTED: string;
    DATA_MESSAGE: string;
    RECORDING_STARTED: string;
    RECORDING_STOPPED: string;
    STREAMING_STARTED: string;
    STREAMING_STOPPED: string;
    RECEIVE_CHAT_MESSAGE: string;
    TRANSCRIPTION_RECEIVED: string;
    LOCAL_STREAM_READY: string;
  };

  export const SignalingEventNames: Record<string, string>;
  export function cleanRoomName(name: string): string;
  export function cleanUserId(id: string): string;
}
