import {useCallback, useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {MediaStream} from 'react-native-webrtc';
import {Client, ClientEvents} from 'muziertcclientrn';
import type {ConnectionState, RemoteParticipant} from '../types';

const TOKEN_SERVER_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001'
    : 'http://localhost:3001';

interface TokenResponse {
  roomToken: string;
  serverRegion: string;
  serverRegionUrl: string;
}

async function requestAndroidPermissions(): Promise<boolean> {
  if (Platform.OS !== 'android') {
    return true;
  }
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    return (
      granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
        PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (_err) {
    return false;
  }
}

export function useHiyveClient() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clientRef = useRef<any>(null);
  const [connectionState, setConnectionState] =
    useState<ConnectionState>('idle');
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteParticipants, setRemoteParticipants] = useState<
    Map<string, RemoteParticipant>
  >(new Map());
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roomName, setRoomName] = useState<string>('');

  const fetchRoomToken = useCallback(async (): Promise<TokenResponse> => {
    const response = await fetch(
      `${TOKEN_SERVER_URL}/api/generate-room-token`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      },
    );

    if (!response.ok) {
      throw new Error(`Token server error: ${response.status}`);
    }

    return response.json();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setupEventListeners = useCallback((client: any) => {
    client.on(
      ClientEvents.LOCAL_STREAM_READY,
      ({stream}: {stream: MediaStream}) => {
        setLocalStream(stream);
      },
    );

    client.on(ClientEvents.CONNECTED, () => {
      setConnectionState('connected');
    });

    client.on(ClientEvents.DISCONNECTED, () => {
      setConnectionState('idle');
      setLocalStream(null);
      setRemoteParticipants(new Map());
    });

    client.on(
      ClientEvents.MEDIA_TRACK_ADDED,
      ({
        userId,
        kind,
        stream,
      }: {
        userId: string;
        kind: string;
        stream: MediaStream;
      }) => {
        setRemoteParticipants(prev => {
          const next = new Map(prev);
          const existing = next.get(userId) || {
            userId,
            videoStream: null,
            audioStream: null,
          };
          if (kind === 'video') {
            next.set(userId, {...existing, videoStream: stream});
          } else if (kind === 'audio') {
            next.set(userId, {...existing, audioStream: stream});
          }
          return next;
        });
      },
    );

    client.on(
      ClientEvents.MEDIA_TRACK_REMOVED,
      ({userId, kind}: {userId: string; kind: string}) => {
        setRemoteParticipants(prev => {
          const next = new Map(prev);
          const existing = next.get(userId);
          if (existing) {
            if (kind === 'video') {
              next.set(userId, {...existing, videoStream: null});
            } else if (kind === 'audio') {
              next.set(userId, {...existing, audioStream: null});
            }
          }
          return next;
        });
      },
    );

    client.on(
      ClientEvents.USER_DISCONNECTED,
      ({userId}: {userId: string}) => {
        setRemoteParticipants(prev => {
          const next = new Map(prev);
          next.delete(userId);
          return next;
        });
      },
    );

    client.on(ClientEvents.ERROR, ({error: err}: {error: Error}) => {
      setError(err?.message || 'An error occurred');
      setConnectionState('error');
    });

    client.on(
      ClientEvents.AUDIO_MUTED,
      ({muted}: {muted: string | boolean}) => {
        setIsAudioMuted(muted === 'muted' || muted === true);
      },
    );

    client.on(
      ClientEvents.VIDEO_MUTED,
      ({muted}: {muted: string | boolean}) => {
        setIsVideoMuted(muted === 'muted' || muted === true);
      },
    );
  }, []);

  const cleanupClient = useCallback(async () => {
    if (clientRef.current) {
      try {
        clientRef.current.removeAllListeners();
        await clientRef.current.closeConnection();
      } catch (_err) {
        // Ignore cleanup errors
      }
      clientRef.current = null;
    }
  }, []);

  const initAndConnect = useCallback(
    async (
      room: string,
      userId: string,
      mode: 'create' | 'join',
    ) => {
      try {
        setError(null);
        setConnectionState('connecting');
        setRoomName(room);

        // Request permissions before accessing media devices
        const permissionsGranted = await requestAndroidPermissions();
        if (!permissionsGranted) {
          throw new Error('Camera and microphone permissions are required');
        }

        // Clean up any existing client
        await cleanupClient();

        const tokenData = await fetchRoomToken();

        // SERVER_REGION_URL is '.rtc.muziemedia.com', client needs '.mediaserver.muziemedia.com'
        const mediaServerUrl = tokenData.serverRegionUrl.replace(
          '.rtc.',
          '.mediaserver.',
        );

        const client = new Client({
          roomToken: tokenData.roomToken,
          serverRegionUrl: mediaServerUrl,
          regions: [tokenData.serverRegion],
        });

        clientRef.current = client;
        setupEventListeners(client);

        if (mode === 'create') {
          await client.createRoom({roomName: room, userId});
        } else {
          await client.joinRoom({roomName: room, userId});
        }
        await client.connectTransports({});
      } catch (err: unknown) {
        await cleanupClient();
        const message =
          err instanceof Error ? err.message : `Failed to ${mode} room`;
        setError(message);
        setConnectionState('error');
      }
    },
    [fetchRoomToken, setupEventListeners, cleanupClient],
  );

  const createRoom = useCallback(
    (room: string, userId: string) => initAndConnect(room, userId, 'create'),
    [initAndConnect],
  );

  const joinRoom = useCallback(
    (room: string, userId: string) => initAndConnect(room, userId, 'join'),
    [initAndConnect],
  );

  const toggleAudio = useCallback(async () => {
    if (!clientRef.current) {
      return;
    }
    await clientRef.current.muteLocalAudio(!isAudioMuted);
  }, [isAudioMuted]);

  const toggleVideo = useCallback(async () => {
    if (!clientRef.current) {
      return;
    }
    await clientRef.current.muteLocalVideo(!isVideoMuted);
  }, [isVideoMuted]);

  const flipCamera = useCallback(async () => {
    if (!clientRef.current) {
      return;
    }
    await clientRef.current.switchCamera();
  }, []);

  const leaveRoom = useCallback(async () => {
    await cleanupClient();
    setConnectionState('idle');
    setLocalStream(null);
    setRemoteParticipants(new Map());
    setIsAudioMuted(false);
    setIsVideoMuted(false);
    setRoomName('');
  }, [cleanupClient]);

  useEffect(() => {
    return () => {
      if (clientRef.current) {
        clientRef.current.removeAllListeners();
        clientRef.current.closeConnection();
        clientRef.current = null;
      }
    };
  }, []);

  return {
    connectionState,
    localStream,
    remoteParticipants,
    isAudioMuted,
    isVideoMuted,
    error,
    roomName,
    createRoom,
    joinRoom,
    toggleAudio,
    toggleVideo,
    flipCamera,
    leaveRoom,
  };
}
