/**
 * @fileoverview Angular Example - Video Room Component
 * @module angular-example/video-room.component
 *
 * Active meeting view displayed once the user has joined a room.
 * Composes SDK-provided UI components with a custom header toolbar.
 *
 * Template layout:
 *
 *   +---------------------------------------+
 *   | MatToolbar  (room name, owner badge,  |
 *   |              participant count)        |
 *   +---------------------------------------+
 *   |                                       |
 *   |   <hiyve-video-grid>                  |
 *   |     Renders local + remote video      |
 *   |     tiles automatically               |
 *   |                                       |
 *   +---------------------------------------+
 *   | <hiyve-control-bar>                   |
 *   |   Mic | Camera | ScreenShare | Leave  |
 *   +---------------------------------------+
 *
 * SDK components used:
 * - `<hiyve-video-grid>` -- Renders all participant video tiles in a
 *   responsive grid. Handles track subscription and layout internally.
 * - `<hiyve-control-bar>` -- Media toggle buttons (mic, camera, screen
 *   share) and a leave button. Emits a `(leave)` event when clicked.
 *
 * Angular vs React patterns:
 * - In React you would use `useRoom()`, `useParticipants()`, and
 *   `useConnection()` hooks. Here, the Angular equivalents --
 *   `RoomService`, `ParticipantsService`, `ConnectionService` --
 *   are injected via `inject()` and expose RxJS Observables.
 * - `@Input() userName` receives the display name from the parent
 *   component, equivalent to a React prop.
 * - The `(leave)` event binding on `<hiyve-control-bar>` is the
 *   Angular equivalent of React's `onLeave` callback prop.
 */
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  ConnectionService,
  RoomService,
  ParticipantsService,
  VideoGridComponent,
  ControlBarComponent,
} from '@hiyve/angular';

/**
 * Video room component shown when the local user is in an active room.
 * Combines a custom Material toolbar header with Hiyve SDK components
 * for the video grid and media control bar.
 */
@Component({
  selector: 'app-video-room',
  standalone: true,
  imports: [
    AsyncPipe,
    MatToolbarModule,
    MatIconModule,
    VideoGridComponent,
    ControlBarComponent,
  ],
  templateUrl: './video-room.component.html',
  styleUrl: './video-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRoomComponent {
  /**
   * Display name of the local user, passed down from `AppComponent`.
   * Forwarded to `<hiyve-video-grid>` as `[localUserName]` so the
   * local video tile shows the correct name label.
   */
  @Input() userName = '';

  /**
   * Hiyve ConnectionService -- used here only for `leaveRoom()`.
   * Angular equivalent of React's `useConnection()` hook.
   */
  private connection = inject(ConnectionService);

  /**
   * Hiyve RoomService -- provides room metadata (name, settings) and
   * ownership status. Angular equivalent of React's `useRoom()` hook.
   */
  private room = inject(RoomService);

  /**
   * Hiyve ParticipantsService -- provides the participant list and count.
   * Angular equivalent of React's `useParticipants()` hook.
   */
  private participants = inject(ParticipantsService);

  /** Observable of the full room state object (name, settings, etc.). */
  room$ = this.room.room$;

  /** Observable boolean -- true if the local user is the room owner. */
  isOwner$ = this.room.isOwner$;

  /** Observable of the current number of participants in the room. */
  participantCount$ = this.participants.participantCount$;

  /**
   * Handles the `(leave)` event emitted by `<hiyve-control-bar>`.
   * Disconnects from the room and returns the user to the join form.
   * The SDK handles all WebRTC cleanup (closing transports, stopping
   * tracks) internally when `leaveRoom()` is called.
   */
  onLeave(): void {
    this.connection.leaveRoom();
  }
}
