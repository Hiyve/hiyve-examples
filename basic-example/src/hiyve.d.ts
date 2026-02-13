/**
 * Type declarations for @hiyve packages
 */

declare module '@hiyve/react' {
  export function useConnection(): {
    isConnecting: boolean;
    createRoom: (roomName: string, userName: string) => Promise<void>;
    joinRoom: (roomName: string, userName: string) => Promise<void>;
    leaveRoom: () => void;
  };
  export function useRoom(): {
    room: { name: string; id: string } | null;
    isOwner: boolean;
    isInRoom: boolean;
  };
  export function useDevices(): {
    hasPermissions: boolean;
    requestPermissions: () => Promise<void>;
    audioInputDevices: MediaDeviceInfo[];
    videoInputDevices: MediaDeviceInfo[];
    selectedAudioInput: string;
    selectedVideoInput: string;
    setSelectedAudioInput: (id: string) => void;
    setSelectedVideoInput: (id: string) => void;
  };
  export const HiyveProvider: React.ComponentType<{
    children: React.ReactNode;
    generateRoomToken: () => Promise<string>;
    localVideoElementId?: string;
    persistDeviceChanges?: boolean;
    onError?: (err: unknown) => void;
  }>;
}

declare module '@hiyve/react-ui' {
  import type { SxProps, Theme } from '@mui/material';

  export type ControlBarLayoutMode = 'grid' | 'speaker' | 'sidebar';

  export const ControlBar: React.ComponentType<{
    onLeave?: () => void;
    showLeaveConfirmation?: boolean;
    showScreenShare?: boolean;
    showLayoutSelector?: boolean;
    layout?: ControlBarLayoutMode;
    onLayoutChange?: (layout: ControlBarLayoutMode) => void;
  }>;

  export const DevicePreview: React.ComponentType<{
    videoElementId?: string;
    showDeviceSelectors?: boolean;
    showMuteButtons?: boolean;
    aspectRatio?: string;
  }>;

  export const DeviceSelector: React.ComponentType<Record<string, never>>;

  export const VideoGrid: React.ComponentType<{
    localVideoElementId?: string;
    localUserName?: string;
    layout?: ControlBarLayoutMode;
    showLocalFlip?: boolean;
    showNames?: boolean;
    labelPosition?: string;
    statusPosition?: string;
    controlPosition?: string;
    sx?: SxProps<Theme>;
  }>;
}

declare module '@hiyve/utilities';
declare module '@hiyve/rtc-client';
