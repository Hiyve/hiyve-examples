/**
 * InviteLinkDisplay - Share button that opens the invite link dialog.
 *
 * Uses `InviteLinkDialog` from @hiyve/join-token SDK.
 */

import { useState } from 'react';
import { Share as ShareIcon } from '@mui/icons-material';
import { InviteLinkDialog } from '@hiyve/join-token';
import { TooltipIconButton } from '@hiyve/utilities';

interface InviteLinkDisplayProps {
  roomName: string;
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
