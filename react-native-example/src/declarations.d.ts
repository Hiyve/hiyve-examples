// ---------------------------------------------------------------------------
// @hiyve/react-native — Provider, hooks, and pre-built RN components
// ---------------------------------------------------------------------------
declare module '@hiyve/react-native' {
  import type {ReactNode} from 'react';
  import type {MediaStream} from 'react-native-webrtc';
  import type {HiyveStoreRNOptions} from '@hiyve/core-rn';

  // --- Provider ---
  interface HiyveRNProviderProps {
    options: HiyveStoreRNOptions;
    children: ReactNode;
  }
  export function HiyveRNProvider(props: HiyveRNProviderProps): JSX.Element;

  // --- Hooks ---
  export function useConnection(): {
    isConnected: boolean;
    isConnecting: boolean;
    error: string | null;
    createRoom: (roomName: string, userId: string, options?: {requireWaitingRoom?: boolean}) => Promise<void>;
    joinRoom: (roomName: string, userId: string) => Promise<void>;
    leaveRoom: () => Promise<void>;
  };

  interface RoomInfo {
    id: string;
    name: string;
    owner: string;
    created?: string;
    recordingId?: string | number | null;
    streamingId?: string | number | null;
    transcribingId?: string | number | null;
  }
  export function useRoom(): {
    room: RoomInfo | null;
    isOwner: boolean;
    isInRoom: boolean;
  };

  interface Participant {
    userId: string;
    externalUserId?: string;
    userName?: string;
    videoStream: MediaStream | null;
    audioStream: MediaStream | null;
    audioOnly: boolean;
    isAudioMuted: boolean;
    isVideoMuted: boolean;
    isOutputMuted?: boolean;
  }
  export function useParticipants(): {
    participants: Participant[];
    participantsMap: Map<string, Participant>;
    localUserId: string | null;
    participantCount: number;
  };

  export function useParticipant(userId: string): Participant | undefined;

  export function useLocalMedia(): {
    isAudioMuted: boolean;
    isVideoMuted: boolean;
    isOutputMuted: boolean;
    isScreenSharing: boolean;
    localStream: MediaStream | null;
    toggleAudio: () => Promise<void>;
    toggleVideo: () => Promise<void>;
    switchCamera: () => Promise<void>;
  };

  export function usePermissions(): {
    granted: boolean;
    denied: boolean;
    requesting: boolean;
    requestPermissions: () => Promise<boolean>;
  };

  // --- Components ---
  interface VideoGridProps {
    localStream: MediaStream | null;
    localUserId: string | null;
    localDisplayName?: string;
    isLocalAudioMuted?: boolean;
    isLocalVideoMuted?: boolean;
    participants: Participant[];
    gap?: number;
    maxColumns?: number;
  }
  export function VideoGrid(props: VideoGridProps): JSX.Element;

  interface ControlBarProps {
    isAudioMuted: boolean;
    isVideoMuted: boolean;
    onToggleAudio: () => void;
    onToggleVideo: () => void;
    onFlipCamera: () => void;
    onLeave: () => void;
    safeArea?: boolean;
  }
  export function ControlBar(props: ControlBarProps): JSX.Element;
}

// ---------------------------------------------------------------------------
// @hiyve/core-rn — Framework-agnostic state store for React Native
// ---------------------------------------------------------------------------
declare module '@hiyve/core-rn' {
  export interface HiyveStoreRNOptions {
    generateRoomToken: () => Promise<{
      roomToken: string;
      serverRegionUrl: string;
      serverRegion?: string;
      regions?: string[];
    }>;
    storageAdapter?: unknown;
    onError?: (error: Error) => void;
  }

  export class HiyveStoreRN {
    constructor(options: HiyveStoreRNOptions);
    destroy(): void;
  }
}
