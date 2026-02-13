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
  @Output() userNameChange = new EventEmitter<string>();

  private connection = inject(ConnectionService);

  roomName = '';
  userName = '';

  connection$ = this.connection.connection$;

  async onCreateRoom(): Promise<void> {
    if (!this.roomName.trim() || !this.userName.trim()) return;
    this.userNameChange.emit(this.userName.trim());
    try {
      await this.connection.createRoom(this.roomName.trim(), this.userName.trim());
    } catch {
      // Error handled by ConnectionService (surfaced via error$)
    }
  }

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
