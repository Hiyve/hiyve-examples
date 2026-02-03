/**
 * Type declarations for @hiyve packages
 */

declare module '@hiyve/client-provider' {
  export function useConnection(): {
    isConnecting: boolean;
    createRoom: (roomName: string, userName: string) => Promise<void>;
    joinRoom: (roomName: string, userName: string) => Promise<void>;
    joinRoomWithToken: (options: { joinToken: string; region: string; userName: string }) => Promise<void>;
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
  export const ClientProvider: React.ComponentType<{
    children: React.ReactNode;
    generateRoomToken: () => Promise<string>;
    localVideoElementId?: string;
    persistDeviceChanges?: boolean;
    onError?: (err: unknown) => void;
  }>;
}

declare module '@hiyve/control-bar' {
  export type LayoutMode = 'grid' | 'speaker' | 'sidebar';
  export const ControlBar: React.ComponentType<{
    onLeave?: () => void;
    showLeaveConfirmation?: boolean;
    showScreenShare?: boolean;
    showLayoutSelector?: boolean;
    layout?: LayoutMode;
    onLayoutChange?: (layout: LayoutMode) => void;
  }>;
}

declare module '@hiyve/join-token' {
  export function createJoinToken(options: {
    roomId: string;
    roomToken: string;
  }): Promise<{ joinToken: string; expiresAt: string }>;
  export const JoinWithTokenForm: React.ComponentType<{
    joinToken: string;
    region: string;
    onUserNameChange?: (name: string) => void;
    userNameStorageKey?: string;
    onCreateRoom?: () => void;
  }>;
  export const InviteLinkDialog: React.ComponentType<{
    roomName: string;
    open: boolean;
    onClose: () => void;
    onCopySuccess?: () => void;
  }>;
}

declare module '@hiyve/video-grid' {
  import type { LayoutMode } from '@hiyve/control-bar';
  import type { SxProps, Theme } from '@mui/material';
  export const VideoGrid: React.ComponentType<{
    localVideoElementId?: string;
    localUserName?: string;
    layout?: LayoutMode;
    showLocalFlip?: boolean;
    showNames?: boolean;
    labelPosition?: string;
    statusPosition?: string;
    controlPosition?: string;
    sx?: SxProps<Theme>;
  }>;
}

declare module '@hiyve/utilities' {
  import type { SxProps, Theme } from '@mui/material';
  import type { TypographyProps } from '@mui/material/Typography';
  import type { IconButtonProps } from '@mui/material/IconButton';
  export const LiveClock: React.ComponentType<TypographyProps & { sx?: SxProps<Theme> }>;
  export function useContainerBreakpoint(breakpoint: number): {
    isBelowBreakpoint: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
  };
  export const TooltipIconButton: React.ComponentType<IconButtonProps & {
    tooltip: string;
    children: React.ReactNode;
  }>;
}
