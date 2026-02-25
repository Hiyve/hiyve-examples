/**
 * @fileoverview Tests for JoinScreen component.
 *
 * Covers:
 * - Initial render with both input fields and buttons
 * - Form validation (buttons disabled when fields are empty)
 * - Permission request handling (granted and denied)
 * - createRoom and joinRoom calls with correct parameters
 * - Error display for permission denial, SDK errors, and connection errors
 */

import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native';
import JoinScreen from '../src/screens/JoinScreen';
import {useConnection, usePermissions} from '@hiyve/rn-react';

const mockUseConnection = useConnection as jest.Mock;
const mockUsePermissions = usePermissions as jest.Mock;

// Shared mock functions so we can inspect calls
const mockCreateRoom = jest.fn().mockResolvedValue(undefined);
const mockJoinRoom = jest.fn().mockResolvedValue(undefined);
const mockRequestPermissions = jest.fn().mockResolvedValue(true);

beforeEach(() => {
  jest.clearAllMocks();

  mockCreateRoom.mockResolvedValue(undefined);
  mockJoinRoom.mockResolvedValue(undefined);
  mockRequestPermissions.mockResolvedValue(true);

  mockUseConnection.mockReturnValue({
    createRoom: mockCreateRoom,
    joinRoom: mockJoinRoom,
    error: null,
  });

  mockUsePermissions.mockReturnValue({
    requestPermissions: mockRequestPermissions,
    hasPermissions: true,
  });
});

describe('JoinScreen', () => {
  describe('initial render', () => {
    it('renders the title and subtitle', () => {
      render(<JoinScreen />);

      expect(screen.getByText('Hiyve')).toBeTruthy();
      expect(screen.getByText('React Native Example')).toBeTruthy();
    });

    it('renders both input fields with placeholders', () => {
      render(<JoinScreen />);

      expect(screen.getByPlaceholderText('Room Name')).toBeTruthy();
      expect(screen.getByPlaceholderText('Your Name')).toBeTruthy();
    });

    it('renders Create Room and Join Room buttons', () => {
      render(<JoinScreen />);

      expect(screen.getByText('Create Room')).toBeTruthy();
      expect(screen.getByText('Join Room')).toBeTruthy();
    });

    it('does not display any error initially', () => {
      render(<JoinScreen />);

      expect(
        screen.queryByText('Camera and microphone permissions are required'),
      ).toBeNull();
    });
  });

  describe('form validation', () => {
    it('buttons are disabled when both fields are empty', () => {
      render(<JoinScreen />);

      const createButton = screen.getByText('Create Room');
      fireEvent.press(createButton);

      // createRoom should not be called since form is invalid
      expect(mockCreateRoom).not.toHaveBeenCalled();
    });

    it('buttons are disabled when only room name is filled', () => {
      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'my-room');
      fireEvent.press(screen.getByText('Create Room'));

      expect(mockRequestPermissions).not.toHaveBeenCalled();
      expect(mockCreateRoom).not.toHaveBeenCalled();
    });

    it('buttons are disabled when only display name is filled', () => {
      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Alice');
      fireEvent.press(screen.getByText('Join Room'));

      expect(mockRequestPermissions).not.toHaveBeenCalled();
      expect(mockJoinRoom).not.toHaveBeenCalled();
    });

    it('buttons are disabled when fields contain only whitespace', () => {
      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), '   ');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), '   ');
      fireEvent.press(screen.getByText('Create Room'));

      expect(mockRequestPermissions).not.toHaveBeenCalled();
      expect(mockCreateRoom).not.toHaveBeenCalled();
    });
  });

  describe('permission handling', () => {
    it('requests permissions before creating a room', async () => {
      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'my-room');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Alice');
      fireEvent.press(screen.getByText('Create Room'));

      await waitFor(() => {
        expect(mockRequestPermissions).toHaveBeenCalledTimes(1);
      });
    });

    it('shows error when permissions are denied', async () => {
      mockRequestPermissions.mockResolvedValue(false);

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'my-room');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Alice');
      fireEvent.press(screen.getByText('Create Room'));

      await waitFor(() => {
        expect(
          screen.getByText('Camera and microphone permissions are required'),
        ).toBeTruthy();
      });

      // Should not proceed to createRoom
      expect(mockCreateRoom).not.toHaveBeenCalled();
    });

    it('does not call createRoom or joinRoom when permissions denied', async () => {
      mockRequestPermissions.mockResolvedValue(false);

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'test');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Bob');

      fireEvent.press(screen.getByText('Create Room'));
      await waitFor(() => {
        expect(mockRequestPermissions).toHaveBeenCalled();
      });

      fireEvent.press(screen.getByText('Join Room'));
      await waitFor(() => {
        expect(mockRequestPermissions).toHaveBeenCalledTimes(2);
      });

      expect(mockCreateRoom).not.toHaveBeenCalled();
      expect(mockJoinRoom).not.toHaveBeenCalled();
    });
  });

  describe('createRoom', () => {
    it('calls createRoom with trimmed room name and display name', async () => {
      render(<JoinScreen />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Room Name'),
        '  my-room  ',
      );
      fireEvent.changeText(
        screen.getByPlaceholderText('Your Name'),
        '  Alice  ',
      );
      fireEvent.press(screen.getByText('Create Room'));

      await waitFor(() => {
        expect(mockCreateRoom).toHaveBeenCalledWith('my-room', 'Alice');
      });
    });

    it('displays error when createRoom throws', async () => {
      mockCreateRoom.mockRejectedValue(new Error('Room already exists'));

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'taken');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Alice');
      fireEvent.press(screen.getByText('Create Room'));

      await waitFor(() => {
        expect(screen.getByText('Room already exists')).toBeTruthy();
      });
    });

    it('displays fallback error for non-Error throws', async () => {
      mockCreateRoom.mockRejectedValue('something went wrong');

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'test');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Bob');
      fireEvent.press(screen.getByText('Create Room'));

      await waitFor(() => {
        expect(screen.getByText('Failed to create room')).toBeTruthy();
      });
    });
  });

  describe('joinRoom', () => {
    it('calls joinRoom with trimmed room name and display name', async () => {
      render(<JoinScreen />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Room Name'),
        'existing-room',
      );
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Bob');
      fireEvent.press(screen.getByText('Join Room'));

      await waitFor(() => {
        expect(mockJoinRoom).toHaveBeenCalledWith('existing-room', 'Bob');
      });
    });

    it('displays error when joinRoom throws', async () => {
      mockJoinRoom.mockRejectedValue(new Error('Room not found'));

      render(<JoinScreen />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Room Name'),
        'nonexistent',
      );
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Bob');
      fireEvent.press(screen.getByText('Join Room'));

      await waitFor(() => {
        expect(screen.getByText('Room not found')).toBeTruthy();
      });
    });

    it('displays fallback error for non-Error throws on join', async () => {
      mockJoinRoom.mockRejectedValue(42);

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'test');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Bob');
      fireEvent.press(screen.getByText('Join Room'));

      await waitFor(() => {
        expect(screen.getByText('Failed to join room')).toBeTruthy();
      });
    });
  });

  describe('connection error display', () => {
    it('displays connection error from useConnection hook', () => {
      mockUseConnection.mockReturnValue({
        createRoom: mockCreateRoom,
        joinRoom: mockJoinRoom,
        error: 'WebSocket disconnected',
      });

      render(<JoinScreen />);

      expect(screen.getByText('WebSocket disconnected')).toBeTruthy();
    });

    it('clears local error when a new action is attempted', async () => {
      mockCreateRoom
        .mockRejectedValueOnce(new Error('First error'))
        .mockResolvedValueOnce(undefined);

      render(<JoinScreen />);

      fireEvent.changeText(screen.getByPlaceholderText('Room Name'), 'room');
      fireEvent.changeText(screen.getByPlaceholderText('Your Name'), 'Alice');

      // First attempt - should show error
      fireEvent.press(screen.getByText('Create Room'));
      await waitFor(() => {
        expect(screen.getByText('First error')).toBeTruthy();
      });

      // Second attempt - error should clear before the action runs
      fireEvent.press(screen.getByText('Create Room'));
      await waitFor(() => {
        expect(screen.queryByText('First error')).toBeNull();
      });
    });
  });
});
