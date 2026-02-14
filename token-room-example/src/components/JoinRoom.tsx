/**
 * @fileoverview Token Room Example - Join Room Component
 * @module token-room-example/components/JoinRoom
 *
 * Guest entry point for joining a room via an invite link.
 *
 * ```
 * JoinRoom
 *   └── JoinWithTokenForm (@hiyve/react-ui)
 *         ├── User name input (persisted via userNameStorageKey)
 *         ├── Password input (shown only if room is password-protected)
 *         ├── "Join" button → validates token, connects to room
 *         └── "Create your own room" link → onCreateRoom callback
 * ```
 *
 * ## How `JoinWithTokenForm` Works
 * `JoinWithTokenForm` is a pre-built SDK component that encapsulates the
 * entire guest-join flow. It:
 * 1. Validates the join token against the signaling server
 * 2. Prompts for a room password if the room requires one
 * 3. Calls `useConnection().joinRoom()` with the token, region, and user name
 * 4. Shows user-friendly error messages for expired/invalid tokens
 * 5. Manages its own loading and error states
 *
 * ## Join Token Flow
 * The invite URL contains a `joinToken` query parameter -- a JWT that
 * encodes the room name, region, and permissions. Unlike the room token
 * (which authenticates the SDK client), the join token identifies a
 * specific room and grants permission to join it. Join tokens are
 * generated server-side when the owner creates a room or requests an
 * invite link.
 *
 * ## The `onCreateRoom` Callback
 * When a guest clicks "Create your own room" inside the form, we strip
 * the join token from the URL and reload to show the CreateRoom view.
 */

import { JoinWithTokenForm } from '@hiyve/react-ui';

/**
 * Props for the {@link JoinRoom} component.
 */
interface JoinRoomProps {
  /** The join token JWT extracted from the invite link's `?joinToken=` query parameter. */
  joinToken: string;
  /** The region identifier (e.g. "us-east-1") extracted from the invite link's `?region=` parameter. */
  region: string;
  /** Callback fired when the user enters or changes their display name in the form. */
  onUserNameChange?: (name: string) => void;
}

/**
 * Renders the SDK's `JoinWithTokenForm` with the join token and region
 * parsed from the invite link URL. The `userNameStorageKey` prop tells
 * the form which localStorage key to use for persisting the user name,
 * keeping it in sync with the same key used by {@link CreateRoom}.
 */
export function JoinRoom({ joinToken, region, onUserNameChange }: JoinRoomProps) {
  return (
    <JoinWithTokenForm
      joinToken={joinToken}
      region={region}
      onUserNameChange={onUserNameChange}
      userNameStorageKey="hiyve-token-example-userName"
      onCreateRoom={() => {
        // Strip the join token from the URL and reload to show CreateRoom
        window.history.replaceState({}, '', '/');
        window.location.reload();
      }}
    />
  );
}
