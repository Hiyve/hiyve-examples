/**
 * @fileoverview Tests for VideoRoom component
 *
 * Tests the video room view including:
 * - Room name display in header
 * - Owner badge visibility
 * - VideoGrid props
 * - ControlBar props
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoRoom from '@/components/VideoRoom';
import { mockRoomState, mockConnectionState } from '@hiyve/react';

beforeEach(() => {
  mockRoomState.isInRoom = true;
  mockRoomState.isOwner = false;
  mockRoomState.room = { name: 'Test Room' };

  mockConnectionState.leaveRoom.mockReset();
});

describe('VideoRoom', () => {
  describe('header', () => {
    it('displays the room name', () => {
      render(<VideoRoom userName="Alice" />);

      expect(screen.getByText('Test Room')).toBeInTheDocument();
    });

    it('shows (Owner) badge when user is room owner', () => {
      mockRoomState.isOwner = true;

      render(<VideoRoom userName="Alice" />);

      expect(screen.getByText('(Owner)')).toBeInTheDocument();
    });

    it('does not show (Owner) badge when user is not owner', () => {
      mockRoomState.isOwner = false;

      render(<VideoRoom userName="Bob" />);

      expect(screen.queryByText('(Owner)')).not.toBeInTheDocument();
    });

    it('handles null room gracefully', () => {
      mockRoomState.room = null;

      // Should not throw
      render(<VideoRoom userName="Alice" />);

      expect(screen.queryByText('Test Room')).not.toBeInTheDocument();
    });
  });

  describe('VideoGrid props', () => {
    it('renders VideoGrid with correct props', () => {
      render(<VideoRoom userName="Alice" />);

      const videoGrid = screen.getByTestId('video-grid');
      expect(videoGrid).toBeInTheDocument();

      const props = JSON.parse(videoGrid.getAttribute('data-props')!);
      expect(props).toMatchObject({
        localVideoElementId: 'local-video',
        localUserName: 'Alice',
        layout: 'grid',
        showLocalFlip: true,
        showNames: true,
        labelPosition: 'bottom-left',
        statusPosition: 'top-right',
        controlPosition: 'bottom-right',
      });
    });
  });

  describe('ControlBar props', () => {
    it('renders ControlBar with correct props', () => {
      render(<VideoRoom userName="Alice" />);

      const controlBar = screen.getByTestId('control-bar');
      expect(controlBar).toBeInTheDocument();

      const props = JSON.parse(controlBar.getAttribute('data-props')!);
      expect(props).toMatchObject({
        onLeave: '__fn__',
        showLeaveConfirmation: true,
        showScreenShare: true,
        showLayoutSelector: true,
        autoHideTimeout: 3000,
        layout: 'grid',
        onLayoutChange: '__fn__',
      });
    });
  });
});
