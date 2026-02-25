/**
 * Mock for @hiyve/angular
 *
 * Provides injectable mock services and stub components that mirror the
 * real @hiyve/angular public API. Services expose BehaviorSubjects so
 * tests can push state changes and verify component reactions.
 */
import { Injectable, Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { ConnectionState, RoomState, ParticipantsState } from './core';

// ---------------------------------------------------------------------------
// ConnectionService mock
// ---------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class ConnectionService {
  private connectionSubject = new BehaviorSubject<ConnectionState>({
    isConnected: false,
    isConnecting: false,
    error: null,
  });

  private errorSubject = new BehaviorSubject<string | null>(null);

  readonly connection$ = this.connectionSubject.asObservable();
  readonly isConnected$: Observable<boolean> = this.connection$.pipe(
    map((c) => c.isConnected),
  );
  readonly isConnecting$: Observable<boolean> = this.connection$.pipe(
    map((c) => c.isConnecting),
  );
  readonly error$ = this.errorSubject.asObservable();

  createRoom = jest.fn().mockResolvedValue(undefined);
  joinRoom = jest.fn().mockResolvedValue(undefined);
  leaveRoom = jest.fn();

  /** Test helper -- push a new connection state. */
  _setConnection(state: Partial<ConnectionState>): void {
    this.connectionSubject.next({ ...this.connectionSubject.value, ...state });
  }

  /** Test helper -- push an error. */
  _setError(error: string | null): void {
    this.errorSubject.next(error);
  }
}

// ---------------------------------------------------------------------------
// RoomService mock
// ---------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class RoomService {
  private roomSubject = new BehaviorSubject<RoomState>({
    room: null,
    isOwner: false,
    isInRoom: false,
    isNoVideo: false,
  });

  readonly room$ = this.roomSubject.asObservable();
  readonly isOwner$: Observable<boolean> = this.room$.pipe(map((r) => r.isOwner));
  readonly isInRoom$: Observable<boolean> = this.room$.pipe(map((r) => r.isInRoom));

  /** Test helper -- push a new room state. */
  _setRoom(state: Partial<RoomState>): void {
    this.roomSubject.next({ ...this.roomSubject.value, ...state });
  }
}

// ---------------------------------------------------------------------------
// ParticipantsService mock
// ---------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class ParticipantsService {
  private countSubject = new BehaviorSubject<number>(0);

  readonly participantCount$ = this.countSubject.asObservable();

  /** Test helper -- set participant count. */
  _setCount(count: number): void {
    this.countSubject.next(count);
  }
}

// ---------------------------------------------------------------------------
// Stub components for <hiyve-video-grid> and <hiyve-control-bar>
// ---------------------------------------------------------------------------
@Component({
  selector: 'hiyve-video-grid',
  standalone: true,
  template: '',
})
export class VideoGridComponent {
  @Input() localVideoElementId = '';
  @Input() localUserName = '';
  @Input() showNames = false;
  @Input() showMuteIndicators = false;
}

@Component({
  selector: 'hiyve-control-bar',
  standalone: true,
  template: '',
})
export class ControlBarComponent {
  @Input() showScreenShare = false;
  @Input() showLeaveButton = false;
  @Output() leave = new EventEmitter<void>();
}

// ---------------------------------------------------------------------------
// provideHiyve stub -- returns an empty providers array
// ---------------------------------------------------------------------------
export function provideHiyve(_config: unknown) {
  return [] as never;
}
