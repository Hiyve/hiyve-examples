/**
 * @fileoverview Angular Example - Join Form Component
 * @module angular-example/join-form.component
 *
 * Pre-call screen where the user enters a room name and display name,
 * then either creates a new room or joins an existing one.
 *
 * Uses the Hiyve `ConnectionService` to initiate room connections.
 * In React, the equivalent would be calling `useConnection().createRoom()`
 * or `useConnection().joinRoom()`. In Angular, `ConnectionService` is
 * injected via `inject()` and the same methods are available directly.
 *
 * Communication with the parent:
 * - `@Output() userNameChange` emits the display name to `AppComponent`
 *   so it can be forwarded to `VideoRoomComponent` as an `@Input`.
 *   This is the Angular equivalent of lifting state up via a callback
 *   prop in React: `<JoinForm onUserNameChange={setUserName} />`.
 *
 * Error handling:
 * - `createRoom` / `joinRoom` errors are caught but not displayed here.
 *   The SDK's `ConnectionService` pushes errors to its `error$` observable,
 *   which `AppComponent` subscribes to and displays via SnackBar.
 */
import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { ConnectionService } from '@hiyve/angular';

/**
 * Join form component that collects room name and user name, then
 * delegates to the Hiyve SDK to create or join a WebRTC room.
 *
 * The template binds `roomName` and `userName` with `[(ngModel)]`
 * (two-way binding via `FormsModule`) and disables buttons when
 * either field is empty or a connection is in progress.
 */
@Component({
  selector: 'app-join-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinFormComponent {
  /**
   * Emits the trimmed display name to the parent component whenever
   * the user initiates a create or join action. The parent stores this
   * value and passes it down to `VideoRoomComponent` via `@Input`.
   *
   * Angular's `@Output() + EventEmitter` is the equivalent of a React
   * callback prop: `onUserNameChange: (name: string) => void`.
   */
  @Output() userNameChange = new EventEmitter<string>();

  /**
   * Hiyve ConnectionService -- provides `createRoom()` and `joinRoom()`
   * methods plus the `connection$` observable for tracking connection state.
   */
  private connection = inject(ConnectionService);

  /** Room name entered by the user (two-way bound via ngModel). */
  roomName = '';

  /** Display name entered by the user (two-way bound via ngModel). */
  userName = '';

  /**
   * Observable of the current connection state. Used in the template
   * via `connection$ | async` to show spinners while connecting and
   * to disable form controls during the connection attempt.
   */
  connection$ = this.connection.connection$;

  /**
   * Creates a new room with the entered room name and user name.
   * The SDK's `generateRoomToken` callback (configured in `appConfig`)
   * is invoked internally to obtain a token before the room is created.
   *
   * Errors are intentionally caught and swallowed here because
   * `ConnectionService` surfaces them via its `error$` observable,
   * which `AppComponent` subscribes to for centralized error display.
   */
  async onCreateRoom(): Promise<void> {
    if (!this.roomName.trim() || !this.userName.trim()) return;
    this.userNameChange.emit(this.userName.trim());
    try {
      await this.connection.createRoom(this.roomName.trim(), this.userName.trim());
    } catch {
      // Error handled by ConnectionService (surfaced via error$)
    }
  }

  /**
   * Joins an existing room by name. Behaves identically to `onCreateRoom`
   * except the SDK connects to a room that already exists rather than
   * creating a new one.
   *
   * If the room does not exist, the SDK will surface an error through
   * `ConnectionService.error$`.
   */
  async onJoinRoom(): Promise<void> {
    if (!this.roomName.trim() || !this.userName.trim()) return;
    this.userNameChange.emit(this.userName.trim());
    try {
      await this.connection.joinRoom(this.roomName.trim(), this.userName.trim());
    } catch {
      // Error handled by ConnectionService (surfaced via error$)
    }
  }
}
