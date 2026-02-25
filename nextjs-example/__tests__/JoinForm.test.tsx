/**
 * @fileoverview Tests for JoinForm component
 *
 * Tests the room entry form including:
 * - DevicePreview rendering
 * - Form validation (empty fields)
 * - createRoom / joinRoom calls with correct arguments
 * - Error display on failure
 * - Loading state during submission
 * - Keyboard (Enter) triggers join
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JoinForm from '@/components/JoinForm';
import { mockConnectionState } from '@hiyve/react';

const mockOnUserNameChange = jest.fn();

beforeEach(() => {
  mockConnectionState.createRoom.mockReset().mockResolvedValue(undefined);
  mockConnectionState.joinRoom.mockReset().mockResolvedValue(undefined);
  mockOnUserNameChange.mockReset();
});

describe('JoinForm', () => {
  describe('rendering', () => {
    it('renders the heading and subheading', () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      expect(screen.getByText('Hiyve Video')).toBeInTheDocument();
      expect(screen.getByText('Create or join a video room')).toBeInTheDocument();
    });

    it('renders DevicePreview component', () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      const preview = screen.getByTestId('device-preview');
      expect(preview).toBeInTheDocument();

      const props = JSON.parse(preview.getAttribute('data-props')!);
      expect(props.showControls).toBe(true);
    });

    it('renders room name and user name text fields', () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      expect(screen.getByLabelText('Room Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    });

    it('renders Create Room and Join Room buttons', () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      expect(screen.getByRole('button', { name: 'Create Room' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Join Room' })).toBeInTheDocument();
    });
  });

  describe('form validation', () => {
    it('shows error when creating with empty fields', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(screen.getByText('Please enter both room name and your name')).toBeInTheDocument();
      });
      expect(mockConnectionState.createRoom).not.toHaveBeenCalled();
    });

    it('shows error when joining with empty fields', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      fireEvent.click(screen.getByRole('button', { name: 'Join Room' }));

      await waitFor(() => {
        expect(screen.getByText('Please enter both room name and your name')).toBeInTheDocument();
      });
      expect(mockConnectionState.joinRoom).not.toHaveBeenCalled();
    });

    it('shows error when room name is filled but user name is empty', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'my-room');
      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(screen.getByText('Please enter both room name and your name')).toBeInTheDocument();
      });
    });

    it('shows error when user name is filled but room name is empty', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Your Name'), 'Alice');
      fireEvent.click(screen.getByRole('button', { name: 'Join Room' }));

      await waitFor(() => {
        expect(screen.getByText('Please enter both room name and your name')).toBeInTheDocument();
      });
    });
  });

  describe('createRoom', () => {
    it('calls createRoom with trimmed room and user names', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), '  my-room  ');
      await userEvent.type(screen.getByLabelText('Your Name'), '  Alice  ');
      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(mockConnectionState.createRoom).toHaveBeenCalledWith('my-room', 'Alice');
      });
      expect(mockOnUserNameChange).toHaveBeenCalledWith('Alice');
    });

    it('shows error message when createRoom rejects', async () => {
      mockConnectionState.createRoom.mockRejectedValueOnce(new Error('Room already exists'));

      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'existing-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Alice');
      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(screen.getByText('Room already exists')).toBeInTheDocument();
      });
      expect(mockOnUserNameChange).not.toHaveBeenCalled();
    });

    it('shows generic error for non-Error rejections', async () => {
      mockConnectionState.createRoom.mockRejectedValueOnce('something went wrong');

      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'my-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Alice');
      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(screen.getByText('Failed to create room')).toBeInTheDocument();
      });
    });
  });

  describe('joinRoom', () => {
    it('calls joinRoom with trimmed room and user names', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'my-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Bob');
      fireEvent.click(screen.getByRole('button', { name: 'Join Room' }));

      await waitFor(() => {
        expect(mockConnectionState.joinRoom).toHaveBeenCalledWith('my-room', 'Bob');
      });
      expect(mockOnUserNameChange).toHaveBeenCalledWith('Bob');
    });

    it('shows error message when joinRoom rejects', async () => {
      mockConnectionState.joinRoom.mockRejectedValueOnce(new Error('Room not found'));

      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'no-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Bob');
      fireEvent.click(screen.getByRole('button', { name: 'Join Room' }));

      await waitFor(() => {
        expect(screen.getByText('Room not found')).toBeInTheDocument();
      });
      expect(mockOnUserNameChange).not.toHaveBeenCalled();
    });
  });

  describe('loading state', () => {
    it('disables buttons and shows loading text during createRoom', async () => {
      // Make createRoom hang to keep loading state active
      let resolveCreate!: () => void;
      mockConnectionState.createRoom.mockImplementation(
        () => new Promise<void>((resolve) => { resolveCreate = resolve; })
      );

      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'my-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Alice');
      fireEvent.click(screen.getByRole('button', { name: 'Create Room' }));

      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Creating...' })).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Joining...' })).toBeDisabled();
      });

      // Resolve and wait for loading state to clear
      resolveCreate();
      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Create Room' })).not.toBeDisabled();
      });
    });
  });

  describe('keyboard interaction', () => {
    it('triggers joinRoom on Enter key press in a text field', async () => {
      render(<JoinForm onUserNameChange={mockOnUserNameChange} />);

      await userEvent.type(screen.getByLabelText('Room Name'), 'my-room');
      await userEvent.type(screen.getByLabelText('Your Name'), 'Alice');

      fireEvent.keyDown(screen.getByLabelText('Your Name'), { key: 'Enter' });

      await waitFor(() => {
        expect(mockConnectionState.joinRoom).toHaveBeenCalledWith('my-room', 'Alice');
      });
    });
  });
});
