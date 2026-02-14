/**
 * @fileoverview Angular Example - Root Application Component
 * @module angular-example/app.component
 *
 * Serves as the root component and state-based router for the application.
 * Switches between three views based on SDK connection and room state:
 *
 *   connection.isConnecting === true  -->  Loading spinner
 *   room.isInRoom === true            -->  VideoRoomComponent
 *   otherwise                         -->  JoinFormComponent
 *
 * State routing diagram (driven by observables in the template):
 *
 *   +-----------+     create/join     +-----------+
 *   | JoinForm  | -----------------> | VideoRoom  |
 *   +-----------+                     +-----------+
 *        ^                                 |
 *        |           leaveRoom()           |
 *        +---------------------------------+
 *
 * Angular vs React patterns:
 * - In React, you would use `useConnection()` and `useRoom()` hooks.
 *   In Angular, the equivalent `ConnectionService` and `RoomService`
 *   are injected via `inject()` and expose RxJS Observables.
 * - The template uses `connection$ | async` (Angular's AsyncPipe) where
 *   React would destructure hook return values.
 * - Error handling subscribes to `connection.error$` (an Observable) and
 *   displays errors via Material SnackBar, equivalent to a React
 *   `useEffect` watching an error state.
 */
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription, filter } from 'rxjs';
import { ConnectionService, RoomService } from '@hiyve/angular';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { VideoRoomComponent } from './components/video-room/video-room.component';

/**
 * Root component that acts as a state-based router between the join form
 * and the active video room. Uses `OnPush` change detection for performance --
 * all reactive state flows through observables consumed by `AsyncPipe`.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    JoinFormComponent,
    VideoRoomComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Hiyve ConnectionService -- manages signaling server connection,
   * room creation/joining, and exposes connection state as observables.
   * Angular equivalent of React's `useConnection()` hook.
   */
  private connection = inject(ConnectionService);

  /**
   * Hiyve RoomService -- provides room metadata and membership state.
   * Angular equivalent of React's `useRoom()` hook.
   */
  private room = inject(RoomService);

  /** Material snack bar for displaying transient error notifications. */
  private snackBar = inject(MatSnackBar);

  /** Observable of the current connection state (isConnecting, isConnected, etc.). */
  connection$ = this.connection.connection$;

  /** Observable boolean indicating whether the local user is currently in a room. */
  isInRoom$ = this.room.isInRoom$;

  /** Display name for the local user, set by the join form before entering a room. */
  userName = '';

  /**
   * Aggregate RxJS subscription container. All observable subscriptions are
   * added here and torn down together in `ngOnDestroy` to prevent memory leaks.
   */
  private subscription = new Subscription();

  /**
   * Lifecycle hook -- subscribes to connection errors and surfaces them as
   * Material SnackBar notifications. The `filter` operator discards null
   * values so only actual error messages trigger the snackbar.
   */
  ngOnInit(): void {
    // Show connection errors via snackbar
    this.subscription.add(
      this.connection.error$
        .pipe(filter((err): err is string => err !== null))
        .subscribe((message) => {
          this.snackBar.open(message, 'Dismiss', {
            duration: 5000,
            panelClass: 'error-snackbar',
          });
        }),
    );
  }

  /**
   * Called when the join form emits the user's display name.
   * Stores the name so it can be passed as an `@Input` to VideoRoomComponent.
   *
   * @param name - The display name entered by the user.
   */
  onUserNameChange(name: string): void {
    this.userName = name;
  }

  /** Lifecycle hook -- unsubscribes from all observables to prevent memory leaks. */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
