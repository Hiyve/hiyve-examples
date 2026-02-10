import type {MediaStream} from 'react-native-webrtc';

export interface RemoteParticipant {
  userId: string;
  videoStream: MediaStream | null;
  audioStream: MediaStream | null;
}

export type ConnectionState = 'idle' | 'connecting' | 'connected' | 'error';
