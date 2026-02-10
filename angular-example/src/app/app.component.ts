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
import { ConnectionService, RoomService } from '@hiyve/angular-provider';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { VideoRoomComponent } from './components/video-room/video-room.component';

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
  private connection = inject(ConnectionService);
  private room = inject(RoomService);
  private snackBar = inject(MatSnackBar);

  connection$ = this.connection.connection$;
  isInRoom$ = this.room.isInRoom$;
  userName = '';

  private subscription = new Subscription();

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

  onUserNameChange(name: string): void {
    this.userName = name;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
