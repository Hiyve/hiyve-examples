import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ConnectionService } from '@hiyve/angular';
import { JoinFormComponent } from './join-form.component';

describe('JoinFormComponent', () => {
  let fixture: ComponentFixture<JoinFormComponent>;
  let component: JoinFormComponent;
  let connectionService: ConnectionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinFormComponent, FormsModule],
      providers: [provideNoopAnimations()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    connectionService = TestBed.inject(ConnectionService);

    fixture = TestBed.createComponent(JoinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('initial state', () => {
    it('should have empty roomName and userName', () => {
      expect(component.roomName).toBe('');
      expect(component.userName).toBe('');
    });
  });

  describe('onCreateRoom', () => {
    it('should call ConnectionService.createRoom with trimmed values', async () => {
      component.roomName = '  test-room  ';
      component.userName = '  Alice  ';

      const emitSpy = jest.spyOn(component.userNameChange, 'emit');

      await component.onCreateRoom();

      expect(emitSpy).toHaveBeenCalledWith('Alice');
      expect(connectionService.createRoom).toHaveBeenCalledWith('test-room', 'Alice');
    });

    it('should not call createRoom when roomName is empty', async () => {
      component.roomName = '';
      component.userName = 'Alice';

      await component.onCreateRoom();

      expect(connectionService.createRoom).not.toHaveBeenCalled();
    });

    it('should not call createRoom when userName is empty', async () => {
      component.roomName = 'test-room';
      component.userName = '';

      await component.onCreateRoom();

      expect(connectionService.createRoom).not.toHaveBeenCalled();
    });

    it('should not call createRoom when roomName is only whitespace', async () => {
      component.roomName = '   ';
      component.userName = 'Alice';

      await component.onCreateRoom();

      expect(connectionService.createRoom).not.toHaveBeenCalled();
    });

    it('should catch and swallow errors from createRoom', async () => {
      component.roomName = 'test-room';
      component.userName = 'Alice';
      (connectionService.createRoom as jest.Mock).mockRejectedValueOnce(
        new Error('Connection failed'),
      );

      // Should not throw
      await expect(component.onCreateRoom()).resolves.toBeUndefined();
    });
  });

  describe('onJoinRoom', () => {
    it('should call ConnectionService.joinRoom with trimmed values', async () => {
      component.roomName = '  test-room  ';
      component.userName = '  Bob  ';

      const emitSpy = jest.spyOn(component.userNameChange, 'emit');

      await component.onJoinRoom();

      expect(emitSpy).toHaveBeenCalledWith('Bob');
      expect(connectionService.joinRoom).toHaveBeenCalledWith('test-room', 'Bob');
    });

    it('should not call joinRoom when roomName is empty', async () => {
      component.roomName = '';
      component.userName = 'Bob';

      await component.onJoinRoom();

      expect(connectionService.joinRoom).not.toHaveBeenCalled();
    });

    it('should not call joinRoom when userName is empty', async () => {
      component.roomName = 'test-room';
      component.userName = '';

      await component.onJoinRoom();

      expect(connectionService.joinRoom).not.toHaveBeenCalled();
    });

    it('should not call joinRoom when userName is only whitespace', async () => {
      component.roomName = 'test-room';
      component.userName = '   ';

      await component.onJoinRoom();

      expect(connectionService.joinRoom).not.toHaveBeenCalled();
    });

    it('should catch and swallow errors from joinRoom', async () => {
      component.roomName = 'test-room';
      component.userName = 'Bob';
      (connectionService.joinRoom as jest.Mock).mockRejectedValueOnce(
        new Error('Room not found'),
      );

      await expect(component.onJoinRoom()).resolves.toBeUndefined();
    });
  });

  describe('userNameChange output', () => {
    it('should emit the trimmed userName on createRoom', async () => {
      const emitSpy = jest.spyOn(component.userNameChange, 'emit');
      component.roomName = 'room';
      component.userName = '  Charlie  ';

      await component.onCreateRoom();

      expect(emitSpy).toHaveBeenCalledWith('Charlie');
    });

    it('should emit the trimmed userName on joinRoom', async () => {
      const emitSpy = jest.spyOn(component.userNameChange, 'emit');
      component.roomName = 'room';
      component.userName = '  Dana  ';

      await component.onJoinRoom();

      expect(emitSpy).toHaveBeenCalledWith('Dana');
    });

    it('should not emit when form is invalid', async () => {
      const emitSpy = jest.spyOn(component.userNameChange, 'emit');
      component.roomName = '';
      component.userName = '';

      await component.onCreateRoom();
      await component.onJoinRoom();

      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  describe('template rendering', () => {
    it('should render the title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Hiyve Angular Example');
    });

    it('should render the subtitle', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Video conferencing with Angular 20 + Hiyve SDK');
    });

    it('should show buttons when connection state is available and not connecting', fakeAsync(() => {
      (connectionService as any)._setConnection({
        isConnecting: false,
        isConnected: false,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      const buttonTexts = Array.from(buttons).map((b) => b.textContent?.trim());
      expect(buttonTexts.some((t) => t?.includes('Create Room'))).toBe(true);
      expect(buttonTexts.some((t) => t?.includes('Join Room'))).toBe(true);
    }));

    it('should disable buttons when connecting', fakeAsync(() => {
      (connectionService as any)._setConnection({
        isConnecting: true,
        isConnected: false,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      buttons.forEach((button) => {
        expect(button.disabled).toBe(true);
      });
    }));
  });
});
