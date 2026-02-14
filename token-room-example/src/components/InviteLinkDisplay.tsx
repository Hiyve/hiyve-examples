/**
 * @fileoverview Token Room Example - Invite Link Display Component
 * @module token-room-example/components/InviteLinkDisplay
 *
 * Provides a share button (shown in the room header for owners) that
 * opens a dialog with a copyable invite link. The link contains a
 * join token and region so guests can join without API credentials.
 *
 * ```
 * InviteLinkDisplay
 *   ├── TooltipIconButton (share icon)
 *   └── InviteLinkDialog (@hiyve/react-ui)
 *         ├── Generated invite URL with joinToken + region params
 *         ├── Copy-to-clipboard button
 *         └── Optional password display (if room is protected)
 * ```
 *
 * ## SDK Components Used
 * - **`InviteLinkDialog`** (@hiyve/react-ui): Handles join token generation
 *   via the Hiyve Cloud API, constructs the full invite URL, and provides
 *   copy-to-clipboard functionality. It calls the backend to generate a
 *   join token for the given room name.
 * - **`TooltipIconButton`** (@hiyve/utilities): A convenience wrapper
 *   around MUI's `IconButton` that adds a tooltip on hover.
 */

import { useState } from 'react';
import { Share as ShareIcon } from '@mui/icons-material';
import { InviteLinkDialog } from '@hiyve/react-ui';
import { TooltipIconButton } from '@hiyve/utilities';

/**
 * Props for the {@link InviteLinkDisplay} component.
 */
interface InviteLinkDisplayProps {
  /** The name of the current room; passed to `InviteLinkDialog` to generate a join token for this room. */
  roomName: string;
  /** Optional callback fired after the invite link is successfully copied to the clipboard. */
  onCopySuccess?: () => void;
}

export function InviteLinkDisplay({ roomName, onCopySuccess }: InviteLinkDisplayProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TooltipIconButton
        tooltip="Get invite link"
        onClick={() => setOpen(true)}
        color="primary"
      >
        <ShareIcon />
      </TooltipIconButton>

      <InviteLinkDialog
        roomName={roomName}
        open={open}
        onClose={() => setOpen(false)}
        onCopySuccess={onCopySuccess}
      />
    </>
  );
}
