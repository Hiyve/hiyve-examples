import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@hiyve/react-ui', () => import('../test/mocks/hiyve-react-ui'));
vi.mock('@hiyve/utilities', () => import('../test/mocks/hiyve-utilities'));

import { InviteLinkDisplay } from '../components/InviteLinkDisplay';

describe('InviteLinkDisplay', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the share button', () => {
    render(<InviteLinkDisplay roomName="my-room" />);
    expect(screen.getByTestId('tooltip-icon-button')).toBeInTheDocument();
  });

  it('renders InviteLinkDialog with roomName', () => {
    render(<InviteLinkDisplay roomName="my-room" />);
    const dialog = screen.getByTestId('invite-link-dialog');
    const props = JSON.parse(dialog.dataset.props!);
    expect(props.roomName).toBe('my-room');
  });

  it('renders InviteLinkDialog initially closed', () => {
    render(<InviteLinkDisplay roomName="my-room" />);
    const dialog = screen.getByTestId('invite-link-dialog');
    const props = JSON.parse(dialog.dataset.props!);
    expect(props.open).toBe(false);
  });

  it('opens InviteLinkDialog when share button is clicked', async () => {
    const user = userEvent.setup();
    render(<InviteLinkDisplay roomName="my-room" />);
    await user.click(screen.getByTestId('tooltip-icon-button'));
    const dialog = screen.getByTestId('invite-link-dialog');
    const props = JSON.parse(dialog.dataset.props!);
    expect(props.open).toBe(true);
  });

  it('passes onClose and onCopySuccess callbacks to InviteLinkDialog', () => {
    const onCopySuccess = vi.fn();
    render(<InviteLinkDisplay roomName="my-room" onCopySuccess={onCopySuccess} />);
    const dialog = screen.getByTestId('invite-link-dialog');
    const props = JSON.parse(dialog.dataset.props!);
    expect(props.onClose).toBe('__fn__');
    expect(props.onCopySuccess).toBe('__fn__');
  });

  it('passes tooltip text to share button', () => {
    render(<InviteLinkDisplay roomName="my-room" />);
    const button = screen.getByTestId('tooltip-icon-button');
    const props = JSON.parse(button.dataset.props!);
    expect(props.tooltip).toBe('Get invite link');
  });
});
