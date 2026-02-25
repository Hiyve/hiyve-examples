/**
 * @fileoverview Tests for the root App component.
 *
 * Verifies that AppContent correctly routes between the four visual states:
 * - Error display when connectionError is set
 * - Loading spinner when isConnecting is true
 * - RoomScreen when isInRoom is true
 * - JoinScreen by default (lobby state)
 *
 * Also verifies that the provider hierarchy (SafeAreaProvider, HiyveRNProvider)
 * is rendered around the content.
 */

import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from '../src/App';
import {useConnection, useRoom} from '@hiyve/rn-react';

// Type the mocked hooks for proper TypeScript usage
const mockUseConnection = useConnection as jest.Mock;
const mockUseRoom = useRoom as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();

  // Reset to default lobby state
  mockUseConnection.mockReturnValue({
    isConnecting: false,
    isConnected: false,
    error: null,
    createRoom: jest.fn(),
    joinRoom: jest.fn(),
    leaveRoom: jest.fn(),
    disconnect: jest.fn(),
  });

  mockUseRoom.mockReturnValue({
    isInRoom: false,
    room: null,
  });
});

describe('App', () => {
  it('renders the HiyveRNProvider wrapper', () => {
    render(<App />);

    expect(screen.getByTestId('hiyve-rn-provider')).toBeTruthy();
  });

  it('renders the SafeAreaProvider wrapper', () => {
    render(<App />);

    expect(screen.getByTestId('safe-area-provider')).toBeTruthy();
  });
});

describe('AppContent - state routing', () => {
  it('shows JoinScreen in default lobby state', () => {
    render(<App />);

    // JoinScreen renders the title "Hiyve" and subtitle
    expect(screen.getByText('Hiyve')).toBeTruthy();
    expect(screen.getByText('React Native Example')).toBeTruthy();
  });

  it('shows error display when connectionError is set', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      isConnected: false,
      error: 'Server unreachable',
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText('Connection Error')).toBeTruthy();
    expect(screen.getByText('Server unreachable')).toBeTruthy();
  });

  it('shows loading spinner when isConnecting is true', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      isConnected: false,
      error: null,
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText('Connecting...')).toBeTruthy();
  });

  it('shows RoomScreen when isInRoom is true', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      isConnected: true,
      error: null,
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    mockUseRoom.mockReturnValue({
      isInRoom: true,
      room: {name: 'test-room', id: 'room-123'},
    });

    render(<App />);

    // RoomScreen renders VideoGrid and ControlBar via mocks
    expect(screen.getByTestId('video-grid')).toBeTruthy();
    expect(screen.getByTestId('control-bar')).toBeTruthy();
  });

  it('prioritizes error state over connecting state', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      isConnected: false,
      error: 'Timeout',
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    render(<App />);

    // Error takes precedence -- no spinner should be visible
    expect(screen.getByText('Connection Error')).toBeTruthy();
    expect(screen.queryByText('Connecting...')).toBeNull();
  });

  it('prioritizes connecting state over in-room state', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: true,
      isConnected: false,
      error: null,
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    mockUseRoom.mockReturnValue({
      isInRoom: true,
      room: {name: 'test-room', id: 'room-123'},
    });

    render(<App />);

    // Connecting takes precedence over in-room
    expect(screen.getByText('Connecting...')).toBeTruthy();
    expect(screen.queryByTestId('video-grid')).toBeNull();
  });

  it('shows JoinScreen when connected but not yet in a room', () => {
    mockUseConnection.mockReturnValue({
      isConnecting: false,
      isConnected: true,
      error: null,
      createRoom: jest.fn(),
      joinRoom: jest.fn(),
      leaveRoom: jest.fn(),
      disconnect: jest.fn(),
    });

    mockUseRoom.mockReturnValue({
      isInRoom: false,
      room: null,
    });

    render(<App />);

    expect(screen.getByText('Hiyve')).toBeTruthy();
    expect(screen.getByText('React Native Example')).toBeTruthy();
  });
});
