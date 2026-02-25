import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { ConnectionService, RoomService } from '@hiyve/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let connectionService: ConnectionService;
  let roomService: RoomService;
  let snackBarOpenSpy: jest.SpyInstance;

  beforeEach(async () => {
    // Spy on the MatSnackBar prototype BEFORE TestBed creates any instances.
    // This ensures that any instance created by Angular DI will use the spy.
    snackBarOpenSpy = jest
      .spyOn(MatSnackBar.prototype, 'open')
      .mockReturnValue({} as any);

    await TestBed.configureTestingModule({
      imports: [AppComponent, MatSnackBarModule, OverlayModule],
      providers: [provideNoopAnimations()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    connectionService = TestBed.inject(ConnectionService);
    roomService = TestBed.inject(RoomService);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    snackBarOpenSpy.mockRestore();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('loading state', () => {
    it('should display the loading spinner when isConnecting is true', fakeAsync(() => {
      (connectionService as any)._setConnection({
        isConnecting: true,
        isConnected: false,
      });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const spinner = compiled.querySelector('mat-spinner');
      expect(spinner).toBeTruthy();

      const connectingText = compiled.textContent;
      expect(connectingText).toContain('Connecting...');
    }));
  });

  describe('join form state', () => {
    it('should display the join form when not connecting and not in room', fakeAsync(() => {
      (connectionService as any)._setConnection({
        isConnecting: false,
        isConnected: false,
      });
      (roomService as any)._setRoom({ isInRoom: false });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const joinForm = compiled.querySelector('app-join-form');
      expect(joinForm).toBeTruthy();
    }));
  });

  describe('in-room state', () => {
    it('should display the video room when isInRoom is true', fakeAsync(() => {
      (connectionService as any)._setConnection({
        isConnecting: false,
        isConnected: true,
      });
      (roomService as any)._setRoom({ isInRoom: true });
      fixture.detectChanges();
      tick();

      const compiled = fixture.nativeElement as HTMLElement;
      const videoRoom = compiled.querySelector('app-video-room');
      expect(videoRoom).toBeTruthy();
    }));
  });

  describe('error handling', () => {
    it('should display a snackbar when an error is emitted', fakeAsync(() => {
      snackBarOpenSpy.mockClear();

      (connectionService as any)._setError('Connection failed');
      tick();

      expect(snackBarOpenSpy).toHaveBeenCalledWith('Connection failed', 'Dismiss', {
        duration: 5000,
        panelClass: 'error-snackbar',
      });
    }));

    it('should not display a snackbar for null errors', fakeAsync(() => {
      snackBarOpenSpy.mockClear();

      (connectionService as any)._setError(null);
      tick();

      expect(snackBarOpenSpy).not.toHaveBeenCalled();
    }));
  });

  describe('onUserNameChange', () => {
    it('should store the user name', () => {
      component.onUserNameChange('Alice');
      expect(component.userName).toBe('Alice');
    });
  });

  describe('cleanup', () => {
    it('should unsubscribe on destroy', () => {
      const unsubSpy = jest.spyOn(component['subscription'], 'unsubscribe');
      component.ngOnDestroy();
      expect(unsubSpy).toHaveBeenCalled();
    });
  });
});
