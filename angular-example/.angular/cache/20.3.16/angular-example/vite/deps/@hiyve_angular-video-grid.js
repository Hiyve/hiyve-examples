import {
  C,
  HiyveDurationPipe,
  L,
  LocalVideoTileComponent,
  MediaStreamDirective,
  S,
  VideoTileComponent,
  y
} from "./chunk-GTNPRJ4J.js";
import {
  HandRaiseService,
  LayoutService,
  ParticipantsService,
  RecordingService,
  RoomService
} from "./chunk-X733CRZK.js";
import {
  AsyncPipe,
  NgStyle
} from "./chunk-KNLYCVVO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-QJF4VL4L.js";
import {
  BehaviorSubject,
  combineLatest,
  map,
  shareReplay
} from "./chunk-RSS3ODKE.js";
import {
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/angular-video-grid/dist/fesm2022/hiyve-angular-video-grid.mjs
var _c0 = (a0) => ({
  "background": a0
});
var _c1 = (a0, a1) => ({
  "gap.px": a0,
  "padding.px": a1
});
var _c2 = (a0) => ({
  "padding.px": a0
});
var _forTrack0 = ($index, $item) => $item.userId;
function VideoGridComponent_Conditional_0_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "hiyve-video-tile", 6);
    ɵɵlistener("tileClick", function VideoGridComponent_Conditional_0_Conditional_1_For_4_Template_hiyve_video_tile_tileClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onParticipantClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const vm_r4 = ɵɵnextContext(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("videoStream", p_r3.videoStream)("audioStream", p_r3.audioStream)("audioOnly", p_r3.audioOnly)("userId", p_r3.userId)("userName", p_r3.userName || p_r3.userId)("isMuted", ctx_r1.getMuteStatus(p_r3))("isRaisedHand", ctx_r1.isRaisedHand(vm_r4.raisedHands, p_r3.userId))("isDominant", ctx_r1.isDominant(vm_r4.dominantSpeaker, p_r3.userId))("showMuteIndicators", ctx_r1.showMuteIndicators)("showName", ctx_r1.showNames)("showZoom", ctx_r1.showZoom)("showMood", ctx_r1.showMood)("showEngagement", ctx_r1.showEngagement)("labelPosition", ctx_r1.labelPosition)("statusPosition", ctx_r1.statusPosition)("controlPosition", ctx_r1.controlPosition)("moodPosition", ctx_r1.moodPosition)("engagementPosition", ctx_r1.engagementPosition)("labels", ctx_r1.tileLabels)("colors", ctx_r1.tileColors)("styles", ctx_r1.tileStyles);
  }
}
function VideoGridComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵelement(2, "hiyve-local-video-tile", 5);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(3, VideoGridComponent_Conditional_0_Conditional_1_For_4_Template, 2, 21, "div", 4, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const vm_r4 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(vm_r4.gridClass);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(11, _c1, ctx_r1.mergedStyles.gap || 8, ctx_r1.mergedStyles.padding || 8));
    ɵɵadvance(2);
    ɵɵproperty("localVideoElementId", ctx_r1.localVideoElementId)("userName", ctx_r1.localUserName)("showFlip", ctx_r1.showLocalFlip)("recordingIndicator", ctx_r1.showTimer && vm_r4.isRecording)("recordingDuration", vm_r4.recordingDuration)("labels", ctx_r1.localTileLabels)("colors", ctx_r1.localTileColors)("styles", ctx_r1.localTileStyles);
    ɵɵadvance();
    ɵɵrepeater(vm_r4.remoteParticipants);
  }
}
function VideoGridComponent_Conditional_0_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "hiyve-video-tile", 6);
    ɵɵlistener("tileClick", function VideoGridComponent_Conditional_0_Conditional_2_For_4_Template_hiyve_video_tile_tileClick_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onParticipantClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const vm_r4 = ɵɵnextContext(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("videoStream", p_r6.videoStream)("audioStream", p_r6.audioStream)("audioOnly", p_r6.audioOnly)("userId", p_r6.userId)("userName", p_r6.userName || p_r6.userId)("isMuted", ctx_r1.getMuteStatus(p_r6))("isRaisedHand", ctx_r1.isRaisedHand(vm_r4.raisedHands, p_r6.userId))("isDominant", ctx_r1.isDominant(vm_r4.dominantSpeaker, p_r6.userId))("showMuteIndicators", ctx_r1.showMuteIndicators)("showName", ctx_r1.showNames)("showZoom", ctx_r1.showZoom)("showMood", ctx_r1.showMood)("showEngagement", ctx_r1.showEngagement)("labelPosition", ctx_r1.labelPosition)("statusPosition", ctx_r1.statusPosition)("controlPosition", ctx_r1.controlPosition)("moodPosition", ctx_r1.moodPosition)("engagementPosition", ctx_r1.engagementPosition)("labels", ctx_r1.tileLabels)("colors", ctx_r1.tileColors)("styles", ctx_r1.tileStyles);
  }
}
function VideoGridComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 4);
    ɵɵelement(2, "hiyve-local-video-tile", 5);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(3, VideoGridComponent_Conditional_0_Conditional_2_For_4_Template, 2, 21, "div", 4, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const vm_r4 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c2, ctx_r1.mergedStyles.padding || 8));
    ɵɵadvance(2);
    ɵɵproperty("localVideoElementId", ctx_r1.localVideoElementId)("userName", ctx_r1.localUserName)("showFlip", ctx_r1.showLocalFlip)("recordingIndicator", ctx_r1.showTimer && vm_r4.isRecording)("recordingDuration", vm_r4.recordingDuration)("labels", ctx_r1.localTileLabels)("colors", ctx_r1.localTileColors)("styles", ctx_r1.localTileStyles);
    ɵɵadvance();
    ɵɵrepeater(vm_r4.remoteParticipants);
  }
}
function VideoGridComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, VideoGridComponent_Conditional_0_Conditional_1_Template, 5, 14, "div", 1)(2, VideoGridComponent_Conditional_0_Conditional_2_Template, 5, 11, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c0, ctx_r1.mergedColors.background || "#0a0a1a"));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.layout === "grid" ? 1 : 2);
  }
}
var DEFAULT_VIDEO_GRID_COLORS = {
  background: "#0a0a1a",
  dominantBorder: "#4caf50"
};
var DEFAULT_VIDEO_GRID_STYLES = {
  padding: 8,
  gap: 8,
  filmstripHeight: 120,
  filmstripTileWidth: 160,
  sidebarWidth: 240,
  sidebarMaxTileRatio: 0.3,
  transitionDuration: "0.3s",
  transitionEasing: "ease-in-out",
  dominantBorderWidth: "3px"
};
var VideoGridComponent = class _VideoGridComponent {
  participants = inject(ParticipantsService);
  recording = inject(RecordingService);
  room = inject(RoomService);
  layoutService = inject(LayoutService);
  handRaise = inject(HandRaiseService);
  elRef = inject(ElementRef);
  ngZone = inject(NgZone);
  // Required inputs
  localVideoElementId = "local-video";
  // Layout inputs
  layout = "grid";
  customLayoutHandler = null;
  gap;
  // Display inputs
  localUserName = "";
  showLocalFlip = false;
  showZoom = false;
  showNames = true;
  showMuteIndicators = true;
  showTimer = false;
  showMood = false;
  showEngagement = false;
  // Position config (passed through to tiles)
  labelPosition = "bottom-left";
  statusPosition = "top-right";
  controlPosition = "bottom-right";
  moodPosition = "top-left";
  engagementPosition = "top-left";
  // Tile config pass-through
  tileLabels = {};
  tileColors = {};
  tileStyles = {};
  localTileLabels = {};
  localTileColors = {};
  localTileStyles = {};
  // Grid config
  colors = {};
  styles = {};
  // Events
  participantClick = new EventEmitter();
  localClick = new EventEmitter();
  layoutChange = new EventEmitter();
  resizeObserver = null;
  containerSize$ = new BehaviorSubject({
    width: 0,
    height: 0
  });
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_GRID_COLORS), this.colors);
  }
  get mergedStyles() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_GRID_STYLES), this.styles);
  }
  /** Combined view model for the grid */
  vm$ = combineLatest([this.participants.participants$, this.recording.isRecording$, this.recording.recordingDuration$, this.layoutService.dominantSpeaker$, this.handRaise.raisedHands$, this.room.isOwner$]).pipe(map(([state, isRecording, recordingDuration, dominantSpeaker, raisedHands, isOwner]) => {
    const remoteParticipants = [];
    state.participants.forEach((p) => {
      if (p.userId !== state.localUserId) {
        remoteParticipants.push(p);
      }
    });
    const totalCount = remoteParticipants.length + 1;
    return {
      remoteParticipants,
      localUserId: state.localUserId,
      totalCount,
      gridClass: S(totalCount),
      isRecording,
      recordingDuration,
      dominantSpeaker,
      raisedHands,
      isOwner
    };
  }), shareReplay(1));
  getMuteStatus(p) {
    return {
      audio: p.isAudioMuted,
      video: p.isVideoMuted,
      output: p.isOutputMuted
    };
  }
  isRaisedHand(raisedHands, userId) {
    return raisedHands.has(userId);
  }
  isDominant(dominantSpeaker, userId) {
    return dominantSpeaker === userId;
  }
  onParticipantClick(userId) {
    this.participantClick.emit(userId);
  }
  onLocalClick() {
    this.localClick.emit();
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          this.containerSize$.next({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      });
      this.resizeObserver.observe(this.elRef.nativeElement);
    });
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.containerSize$.complete();
  }
  trackByUserId(_index, participant) {
    return participant.userId;
  }
  static ɵfac = function VideoGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoGridComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _VideoGridComponent,
    selectors: [["hiyve-video-grid"]],
    inputs: {
      localVideoElementId: "localVideoElementId",
      layout: "layout",
      customLayoutHandler: "customLayoutHandler",
      gap: "gap",
      localUserName: "localUserName",
      showLocalFlip: "showLocalFlip",
      showZoom: "showZoom",
      showNames: "showNames",
      showMuteIndicators: "showMuteIndicators",
      showTimer: "showTimer",
      showMood: "showMood",
      showEngagement: "showEngagement",
      labelPosition: "labelPosition",
      statusPosition: "statusPosition",
      controlPosition: "controlPosition",
      moodPosition: "moodPosition",
      engagementPosition: "engagementPosition",
      tileLabels: "tileLabels",
      tileColors: "tileColors",
      tileStyles: "tileStyles",
      localTileLabels: "localTileLabels",
      localTileColors: "localTileColors",
      localTileStyles: "localTileStyles",
      colors: "colors",
      styles: "styles"
    },
    outputs: {
      participantClick: "participantClick",
      localClick: "localClick",
      layoutChange: "layoutChange"
    },
    decls: 2,
    vars: 3,
    consts: [[1, "video-grid-container", 3, "ngStyle"], [1, "video-grid", 3, "class", "ngStyle"], [1, "video-grid-absolute", 3, "ngStyle"], [1, "video-grid", 3, "ngStyle"], [1, "grid-tile"], [3, "localVideoElementId", "userName", "showFlip", "recordingIndicator", "recordingDuration", "labels", "colors", "styles"], [3, "tileClick", "videoStream", "audioStream", "audioOnly", "userId", "userName", "isMuted", "isRaisedHand", "isDominant", "showMuteIndicators", "showName", "showZoom", "showMood", "showEngagement", "labelPosition", "statusPosition", "controlPosition", "moodPosition", "engagementPosition", "labels", "colors", "styles"]],
    template: function VideoGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, VideoGridComponent_Conditional_0_Template, 3, 4, "div", 0);
        ɵɵpipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [NgStyle, VideoTileComponent, LocalVideoTileComponent, AsyncPipe],
    styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}.video-grid-container[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;border-radius:8px}.video-grid[_ngcontent-%COMP%]{display:grid;width:100%;height:100%;box-sizing:border-box}.video-grid.grid-1[_ngcontent-%COMP%]{grid-template-columns:1fr}.video-grid.grid-2[_ngcontent-%COMP%], .video-grid.grid-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.video-grid.grid-3[_ngcontent-%COMP%]   .grid-tile[_ngcontent-%COMP%]:first-child{grid-column:1/-1}.video-grid.grid-4[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.video-grid.grid-6[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);grid-template-rows:1fr 1fr}.video-grid.grid-9[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.video-grid.grid-many[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr}.grid-tile[_ngcontent-%COMP%]{position:relative;overflow:hidden;border-radius:8px;min-height:0}.video-grid-absolute[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;box-sizing:border-box}.video-grid-absolute[_ngcontent-%COMP%]   .grid-tile[_ngcontent-%COMP%]{position:absolute;transition:all .3s ease-in-out}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoGridComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-video-grid",
      standalone: true,
      imports: [AsyncPipe, NgStyle, VideoTileComponent, LocalVideoTileComponent, MediaStreamDirective, HiyveDurationPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (vm$ | async; as vm) {
  <div
    class="video-grid-container"
    [ngStyle]="{ 'background': mergedColors.background || '#0a0a1a' }"
  >
    @if (layout === 'grid') {
      <!-- CSS Grid Layout -->
      <div
        class="video-grid"
        [class]="vm.gridClass"
        [ngStyle]="{ 'gap.px': mergedStyles.gap || 8, 'padding.px': mergedStyles.padding || 8 }"
      >
        <!-- Local Video Tile -->
        <div class="grid-tile">
          <hiyve-local-video-tile
            [localVideoElementId]="localVideoElementId"
            [userName]="localUserName"
            [showFlip]="showLocalFlip"
            [recordingIndicator]="showTimer && vm.isRecording"
            [recordingDuration]="vm.recordingDuration"
            [labels]="localTileLabels"
            [colors]="localTileColors"
            [styles]="localTileStyles"
          ></hiyve-local-video-tile>
        </div>

        <!-- Remote Tiles -->
        @for (p of vm.remoteParticipants; track p.userId) {
          <div class="grid-tile">
            <hiyve-video-tile
              [videoStream]="p.videoStream"
              [audioStream]="p.audioStream"
              [audioOnly]="p.audioOnly"
              [userId]="p.userId"
              [userName]="p.userName || p.userId"
              [isMuted]="getMuteStatus(p)"
              [isRaisedHand]="isRaisedHand(vm.raisedHands, p.userId)"
              [isDominant]="isDominant(vm.dominantSpeaker, p.userId)"
              [showMuteIndicators]="showMuteIndicators"
              [showName]="showNames"
              [showZoom]="showZoom"
              [showMood]="showMood"
              [showEngagement]="showEngagement"
              [labelPosition]="labelPosition"
              [statusPosition]="statusPosition"
              [controlPosition]="controlPosition"
              [moodPosition]="moodPosition"
              [engagementPosition]="engagementPosition"
              [labels]="tileLabels"
              [colors]="tileColors"
              [styles]="tileStyles"
              (tileClick)="onParticipantClick($event)"
            ></hiyve-video-tile>
          </div>
        }
      </div>
    } @else {
      <!-- Absolute positioned layouts (speaker/sidebar) -->
      <div
        class="video-grid-absolute"
        [ngStyle]="{ 'padding.px': mergedStyles.padding || 8 }"
      >
        <!-- Local Video Tile -->
        <div class="grid-tile">
          <hiyve-local-video-tile
            [localVideoElementId]="localVideoElementId"
            [userName]="localUserName"
            [showFlip]="showLocalFlip"
            [recordingIndicator]="showTimer && vm.isRecording"
            [recordingDuration]="vm.recordingDuration"
            [labels]="localTileLabels"
            [colors]="localTileColors"
            [styles]="localTileStyles"
          ></hiyve-local-video-tile>
        </div>

        <!-- Remote Tiles -->
        @for (p of vm.remoteParticipants; track p.userId) {
          <div class="grid-tile">
            <hiyve-video-tile
              [videoStream]="p.videoStream"
              [audioStream]="p.audioStream"
              [audioOnly]="p.audioOnly"
              [userId]="p.userId"
              [userName]="p.userName || p.userId"
              [isMuted]="getMuteStatus(p)"
              [isRaisedHand]="isRaisedHand(vm.raisedHands, p.userId)"
              [isDominant]="isDominant(vm.dominantSpeaker, p.userId)"
              [showMuteIndicators]="showMuteIndicators"
              [showName]="showNames"
              [showZoom]="showZoom"
              [showMood]="showMood"
              [showEngagement]="showEngagement"
              [labelPosition]="labelPosition"
              [statusPosition]="statusPosition"
              [controlPosition]="controlPosition"
              [moodPosition]="moodPosition"
              [engagementPosition]="engagementPosition"
              [labels]="tileLabels"
              [colors]="tileColors"
              [styles]="tileStyles"
              (tileClick)="onParticipantClick($event)"
            ></hiyve-video-tile>
          </div>
        }
      </div>
    }
  </div>
}
`,
      styles: [":host{display:block;width:100%;height:100%;position:relative}.video-grid-container{width:100%;height:100%;overflow:hidden;border-radius:8px}.video-grid{display:grid;width:100%;height:100%;box-sizing:border-box}.video-grid.grid-1{grid-template-columns:1fr}.video-grid.grid-2,.video-grid.grid-3{grid-template-columns:1fr 1fr}.video-grid.grid-3 .grid-tile:first-child{grid-column:1/-1}.video-grid.grid-4{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.video-grid.grid-6{grid-template-columns:repeat(3,1fr);grid-template-rows:1fr 1fr}.video-grid.grid-9{grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.video-grid.grid-many{grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr}.grid-tile{position:relative;overflow:hidden;border-radius:8px;min-height:0}.video-grid-absolute{position:relative;width:100%;height:100%;box-sizing:border-box}.video-grid-absolute .grid-tile{position:absolute;transition:all .3s ease-in-out}\n"]
    }]
  }], null, {
    localVideoElementId: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    customLayoutHandler: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    localUserName: [{
      type: Input
    }],
    showLocalFlip: [{
      type: Input
    }],
    showZoom: [{
      type: Input
    }],
    showNames: [{
      type: Input
    }],
    showMuteIndicators: [{
      type: Input
    }],
    showTimer: [{
      type: Input
    }],
    showMood: [{
      type: Input
    }],
    showEngagement: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    statusPosition: [{
      type: Input
    }],
    controlPosition: [{
      type: Input
    }],
    moodPosition: [{
      type: Input
    }],
    engagementPosition: [{
      type: Input
    }],
    tileLabels: [{
      type: Input
    }],
    tileColors: [{
      type: Input
    }],
    tileStyles: [{
      type: Input
    }],
    localTileLabels: [{
      type: Input
    }],
    localTileColors: [{
      type: Input
    }],
    localTileStyles: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    participantClick: [{
      type: Output
    }],
    localClick: [{
      type: Output
    }],
    layoutChange: [{
      type: Output
    }]
  });
})();
export {
  DEFAULT_VIDEO_GRID_COLORS,
  DEFAULT_VIDEO_GRID_STYLES,
  VideoGridComponent,
  C as calculateSidebarLayout,
  L as calculateSpeakerLayout,
  S as getGridClass,
  y as getGridColumns
};
//# sourceMappingURL=@hiyve_angular-video-grid.js.map
