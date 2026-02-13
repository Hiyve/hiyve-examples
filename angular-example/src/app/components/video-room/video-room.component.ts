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
  @Input() userName = '';

  private connection = inject(ConnectionService);
  private room = inject(RoomService);
  private participants = inject(ParticipantsService);

  room$ = this.room.room$;
  isOwner$ = this.room.isOwner$;
  participantCount$ = this.participants.participantCount$;

  onLeave(): void {
    this.connection.leaveRoom();
  }
}
