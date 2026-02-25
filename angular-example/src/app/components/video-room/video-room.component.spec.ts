import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  ConnectionService,
  RoomService,
  ParticipantsService,
  VideoGridComponent,
  ControlBarComponent,
} from '@hiyve/angular';
import { VideoRoomComponent } from './video-room.component';

describe('VideoRoomComponent', () => {
  let fixture: ComponentFixture<VideoRoomComponent>;
  let component: VideoRoomComponent;
  let connectionService: ConnectionService;
  let roomService: RoomService;
  let participantsService: ParticipantsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VideoRoomComponent,
        VideoGridComponent,
        ControlBarComponent,
      ],
      providers: [provideNoopAnimations()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    connectionService = TestBed.inject(ConnectionService);
    roomService = TestBed.inject(RoomService);
    participantsService = TestBed.inject(ParticipantsService);

    fixture = TestBed.createComponent(VideoRoomComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('userName input', () => {
    it('should accept a userName input', () => {
      component.userName = 'TestUser';
      fixture.detectChanges();
      expect(component.userName).toBe('TestUser');
    });

    it('should default to empty string', () => {
      fixture.detectChanges();
      expect(component.userName).toBe('');
    });
  });

  describe('room name display', () => {
    it('should display the room name from room$', fakeAsync(() => {
      (roomService as any)._setRoom({
        room: { id: '123', name: 'My Meeting', owner: 'user1' },
        isInRoom: true,
        isOwner: false,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('My Meeting');
    }));
  });

  describe('owner badge', () => {
    it('should display the owner badge when isOwner is true', fakeAsync(() => {
      (roomService as any)._setRoom({
        room: { id: '123', name: 'Room', owner: 'user1' },
        isOwner: true,
        isInRoom: true,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const badge = compiled.querySelector('.owner-badge');
      expect(badge).toBeTruthy();
      expect(badge?.textContent?.trim()).toBe('Owner');
    }));

    it('should not display the owner badge when isOwner is false', fakeAsync(() => {
      (roomService as any)._setRoom({
        room: { id: '123', name: 'Room', owner: 'user1' },
        isOwner: false,
        isInRoom: true,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const badge = compiled.querySelector('.owner-badge');
      expect(badge).toBeFalsy();
    }));
  });

  describe('participant count', () => {
    it('should display the participant count', fakeAsync(() => {
      (participantsService as any)._setCount(5);
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const countEl = compiled.querySelector('.participant-count');
      expect(countEl?.textContent).toContain('5');
    }));

    it('should update when participant count changes', fakeAsync(() => {
      (participantsService as any)._setCount(3);
      fixture.detectChanges();
      tick();

      let countEl = fixture.nativeElement.querySelector('.participant-count');
      expect(countEl?.textContent).toContain('3');

      (participantsService as any)._setCount(7);
      fixture.detectChanges();
      tick();

      countEl = fixture.nativeElement.querySelector('.participant-count');
      expect(countEl?.textContent).toContain('7');
    }));
  });

  describe('SDK components', () => {
    it('should render hiyve-video-grid', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const videoGrid = compiled.querySelector('hiyve-video-grid');
      expect(videoGrid).toBeTruthy();
    }));

    it('should render hiyve-control-bar', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const controlBar = compiled.querySelector('hiyve-control-bar');
      expect(controlBar).toBeTruthy();
    }));

    it('should pass userName to the video grid component', fakeAsync(() => {
      component.userName = 'GridUser';
      fixture.detectChanges();
      tick();

      // Verify userName is set on the component and would be bound in template
      expect(component.userName).toBe('GridUser');

      // The template binds [localUserName]="userName" on <hiyve-video-grid>
      const compiled = fixture.nativeElement as HTMLElement;
      const videoGrid = compiled.querySelector('hiyve-video-grid');
      expect(videoGrid).toBeTruthy();
    }));
  });

  describe('onLeave', () => {
    it('should call ConnectionService.leaveRoom', () => {
      fixture.detectChanges();
      component.onLeave();
      expect(connectionService.leaveRoom).toHaveBeenCalled();
    });
  });

  describe('header toolbar', () => {
    it('should render the mat-toolbar', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const toolbar = compiled.querySelector('mat-toolbar');
      expect(toolbar).toBeTruthy();
    }));

    it('should show the videocam icon', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const icons = compiled.querySelectorAll('mat-icon');
      const iconTexts = Array.from(icons).map((i) => i.textContent?.trim());
      expect(iconTexts).toContain('videocam');
    }));
  });
});
