import {
  NgStyle
} from "./chunk-KNLYCVVO.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QJF4VL4L.js";
import {
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/utilities/dist/video.js
function y(t) {
  return t <= 1 ? 1 : t <= 2 || t <= 4 ? 2 : t <= 6 || t <= 9 ? 3 : t <= 12 ? 4 : Math.ceil(Math.sqrt(t));
}
function S(t) {
  return t === 1 ? "grid-1" : t === 2 ? "grid-2" : t === 3 ? "grid-3" : t === 4 ? "grid-4" : t <= 6 ? "grid-6" : t <= 9 ? "grid-9" : "grid-many";
}
function v(t) {
  switch (t) {
    case "top-left":
      return { top: "0", left: "0" };
    case "top-right":
      return { top: "0", right: "0" };
    case "bottom-left":
      return { bottom: "0", left: "0" };
    case "bottom-right":
      return { bottom: "0", right: "0" };
    default:
      return { bottom: "0", left: "0" };
  }
}
function L(t, u, r, o, e, h, s, n) {
  const f = {};
  if (r.length === 0) return f;
  const i = o && r.includes(o) ? o : r[0], l = r.filter((M) => M !== i), m = l.length > 0, a = m ? u - e * 2 - h - s : u - e * 2, c = t - e * 2;
  if (f[i] = {
    left: e,
    top: e,
    width: Math.max(c, 0),
    height: Math.max(a, 0)
  }, m) {
    const M = e + a + h, x = t - e * 2, b = Math.min(n, (x - h * (l.length - 1)) / l.length);
    l.forEach((g, w) => {
      f[g] = {
        left: e + w * (b + h),
        top: M,
        width: Math.max(b, 0),
        height: Math.max(s, 0)
      };
    });
  }
  return f;
}
function C(t, u, r, o, e, h, s) {
  const n = {};
  if (r.length === 0) return n;
  const f = o && r.includes(o) ? o : r[0], i = r.filter((c) => c !== f), l = i.length > 0, m = l ? t - e * 2 - h - s : t - e * 2, a = u - e * 2;
  if (n[f] = {
    left: e,
    top: e,
    width: Math.max(m, 0),
    height: Math.max(a, 0)
  }, l) {
    const c = e + m + h, M = u - e * 2, x = Math.min(
      (M - h * (i.length - 1)) / i.length,
      s * 0.75
      // aspect ratio cap
    );
    i.forEach((b, g) => {
      n[b] = {
        left: c,
        top: e + g * (x + h),
        width: Math.max(s, 0),
        height: Math.max(x, 0)
      };
    });
  }
  return n;
}

// node_modules/@hiyve/angular-video-tile/dist/fesm2022/hiyve-angular-video-tile.mjs
var _c0 = [[["", "hiyveOverlay", ""]]];
var _c1 = ["[hiyveOverlay]"];
var _c2 = (a0, a1) => ({
  "background-color": a0,
  "color": a1
});
var _c3 = (a0, a1, a2, a3, a4, a5) => ({
  "background": a0,
  "color": a1,
  "padding": a2,
  "border-radius": a3,
  "font-size": a4,
  "max-width": a5
});
var _c4 = (a0) => ({
  "background": a0
});
var _c5 = (a0) => ({
  "background-color": a0
});
function VideoTileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "video", 8);
    ɵɵlistener("error", function VideoTileComponent_Conditional_1_Template_video_error_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onVideoError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("hiyveMediaStream", ctx_r1.videoStream);
  }
}
function VideoTileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 9);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c2, ctx_r1.avatarColor, ctx_r1.mergedColors.avatarText || "#fff"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.initials, " ");
  }
}
function VideoTileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "audio", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("hiyveMediaStream", ctx_r1.audioStream);
  }
}
function VideoTileComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "span", 11);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("top-left", ctx_r1.labelPosition === "top-left")("top-right", ctx_r1.labelPosition === "top-right")("bottom-left", ctx_r1.labelPosition === "bottom-left")("bottom-right", ctx_r1.labelPosition === "bottom-right");
    ɵɵproperty("ngStyle", ɵɵpureFunction6(10, _c3, ctx_r1.mergedColors.nameLabelBackground || "rgba(0,0,0,0.6)", ctx_r1.mergedColors.nameLabelText || "#fff", ctx_r1.mergedStyles.nameLabelPadding || "2px 8px", ctx_r1.mergedStyles.nameLabelBorderRadius || "4px", ctx_r1.mergedStyles.nameLabelFontSize || "12px", ctx_r1.mergedStyles.nameLabelMaxWidth || "80%"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.displayName);
  }
}
function VideoTileComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "span", 15);
    ɵɵtext(2, "mic_off");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c4, ctx_r1.mergedColors.mutedIndicator || "#f44336"));
    ɵɵattribute("title", ctx_r1.mergedLabels.muted);
  }
}
function VideoTileComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "span", 15);
    ɵɵtext(2, "videocam_off");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c4, ctx_r1.mergedColors.mutedIndicator || "#f44336"));
    ɵɵattribute("title", ctx_r1.mergedLabels.cameraOff);
  }
}
function VideoTileComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "span", 15);
    ɵɵtext(2, "volume_off");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c4, ctx_r1.mergedColors.mutedIndicator || "#f44336"));
    ɵɵattribute("title", ctx_r1.mergedLabels.outputMuted);
  }
}
function VideoTileComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14)(1, "span", 15);
    ɵɵtext(2, "pan_tool");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c4, ctx_r1.mergedColors.handRaisedIndicator || "#ff9800"));
    ɵɵattribute("title", ctx_r1.mergedLabels.handRaised);
  }
}
function VideoTileComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵconditionalCreate(1, VideoTileComponent_Conditional_5_Conditional_1_Template, 3, 4, "div", 13);
    ɵɵconditionalCreate(2, VideoTileComponent_Conditional_5_Conditional_2_Template, 3, 4, "div", 13);
    ɵɵconditionalCreate(3, VideoTileComponent_Conditional_5_Conditional_3_Template, 3, 4, "div", 13);
    ɵɵconditionalCreate(4, VideoTileComponent_Conditional_5_Conditional_4_Template, 3, 4, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("top-left", ctx_r1.statusPosition === "top-left")("top-right", ctx_r1.statusPosition === "top-right")("bottom-left", ctx_r1.statusPosition === "bottom-left")("bottom-right", ctx_r1.statusPosition === "bottom-right");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMuteIndicators && ctx_r1.isMuted.audio ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMuteIndicators && ctx_r1.isMuted.video ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMuteIndicators && ctx_r1.isMuted.output ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isRaisedHand ? 4 : -1);
  }
}
function VideoTileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16)(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("top-left", ctx_r1.moodPosition === "top-left")("top-right", ctx_r1.moodPosition === "top-right")("bottom-left", ctx_r1.moodPosition === "bottom-left")("bottom-right", ctx_r1.moodPosition === "bottom-right");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.moodLabel);
  }
}
function VideoTileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelement(1, "div", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("top-left", ctx_r1.engagementPosition === "top-left")("top-right", ctx_r1.engagementPosition === "top-right")("bottom-left", ctx_r1.engagementPosition === "bottom-left")("bottom-right", ctx_r1.engagementPosition === "bottom-right");
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c5, ctx_r1.engagementColor));
  }
}
var _c6 = ["*"];
var _c7 = (a0, a1, a2, a3, a4) => ({
  "background": a0,
  "color": a1,
  "padding": a2,
  "border-radius": a3,
  "font-size": a4
});
function LocalVideoTileComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function LocalVideoTileComponent_Conditional_5_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.toggleFlip();
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵelementStart(1, "span", 7);
    ɵɵtext(2, "flip");
    ɵɵelementEnd()();
  }
}
function LocalVideoTileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "span", 8);
    ɵɵelementStart(2, "span", 9);
    ɵɵtext(3);
    ɵɵpipe(4, "hiyveDuration");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, ctx_r1.recordingDuration));
  }
}
var MediaStreamDirective = class _MediaStreamDirective {
  stream = null;
  el = inject(ElementRef);
  ngOnChanges() {
    const element = this.el.nativeElement;
    if (element.srcObject !== this.stream) {
      element.srcObject = this.stream;
    }
  }
  ngOnDestroy() {
    this.el.nativeElement.srcObject = null;
  }
  static ɵfac = function MediaStreamDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaStreamDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MediaStreamDirective,
    selectors: [["", "hiyveMediaStream", ""]],
    inputs: {
      stream: [0, "hiyveMediaStream", "stream"]
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaStreamDirective, [{
    type: Directive,
    args: [{
      selector: "[hiyveMediaStream]",
      standalone: true
    }]
  }], null, {
    stream: [{
      type: Input,
      args: ["hiyveMediaStream"]
    }]
  });
})();
var DEFAULT_VIDEO_TILE_LABELS = {
  handRaised: "Hand Raised",
  muted: "Muted",
  cameraOff: "Camera Off",
  outputMuted: "Output Muted",
  fullscreen: "Fullscreen",
  exitFullscreen: "Exit Fullscreen",
  engagementLabel: "Engagement"
};
var DEFAULT_VIDEO_TILE_COLORS = {
  avatarPalette: ["#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#00bcd4", "#009688", "#4caf50", "#ff9800", "#ff5722", "#795548", "#607d8b"],
  background: "#1a1a2e",
  nameLabelBackground: "rgba(0, 0, 0, 0.6)",
  nameLabelText: "#ffffff",
  mutedIndicator: "#f44336",
  handRaisedIndicator: "#ff9800",
  indicatorIcon: "#ffffff",
  dominantBorder: "#4caf50",
  avatarText: "#ffffff",
  controlBackground: "rgba(0, 0, 0, 0.5)",
  controlHover: "rgba(0, 0, 0, 0.7)",
  controlIcon: "#ffffff",
  engagementHigh: "#4caf50",
  engagementMedium: "#ff9800",
  engagementLow: "#f44336",
  engagementVeryLow: "#9e9e9e"
};
var DEFAULT_VIDEO_TILE_STYLES = {
  borderRadius: "8px",
  overlayPadding: "8px",
  overlayGap: "4px",
  nameLabelPadding: "2px 8px",
  nameLabelBorderRadius: "4px",
  nameLabelFontSize: "12px",
  nameLabelMaxWidth: "80%",
  indicatorSize: "24px",
  indicatorIconSize: "16px",
  dominantBorderWidth: "3px",
  controlButtonSize: "32px"
};
var VideoTileComponent = class _VideoTileComponent {
  // Stream inputs
  videoStream = null;
  audioStream = null;
  audioOnly = false;
  userId = "";
  userName = "";
  // Status inputs
  isMuted = {
    audio: false,
    video: false
  };
  isRaisedHand = false;
  isDominant = false;
  // Display toggle inputs
  showMuteIndicators = true;
  showName = true;
  showZoom = false;
  showMood = false;
  showEngagement = false;
  // Position inputs
  labelPosition = "bottom-left";
  statusPosition = "top-right";
  controlPosition = "bottom-right";
  moodPosition = "top-left";
  engagementPosition = "top-left";
  // Data inputs
  moodData = null;
  // Customization inputs
  labels = {};
  colors = {};
  styles = {};
  // Events
  tileClick = new EventEmitter();
  tileError = new EventEmitter();
  // Internal state
  isFullscreen = false;
  isHovered = false;
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_LABELS), this.labels);
  }
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_COLORS), this.colors);
  }
  get mergedStyles() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_STYLES), this.styles);
  }
  get showVideo() {
    return !!this.videoStream && !this.audioOnly && !this.isMuted.video;
  }
  get displayName() {
    return this.userName || this.userId || "Unknown";
  }
  get initials() {
    const name = this.displayName;
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  get avatarColor() {
    const palette = this.mergedColors.avatarPalette || DEFAULT_VIDEO_TILE_COLORS.avatarPalette;
    let hash = 0;
    for (let i = 0; i < this.userId.length; i++) {
      hash = (hash << 5) - hash + this.userId.charCodeAt(i) | 0;
    }
    return palette[Math.abs(hash) % palette.length];
  }
  get containerStyle() {
    const s = this.mergedStyles;
    const c = this.mergedColors;
    const style = {
      "border-radius": s.borderRadius || "8px",
      "background": c.background || "#1a1a2e"
    };
    if (this.isDominant) {
      style["border"] = `${s.dominantBorderWidth || "3px"} solid ${c.dominantBorder || "#4caf50"}`;
    }
    return style;
  }
  get labelPositionStyle() {
    return v(this.labelPosition);
  }
  get statusPositionStyle() {
    return v(this.statusPosition);
  }
  get moodLabel() {
    if (!this.moodData?.mood) return "";
    return this.mergedLabels.moodLabels?.[this.moodData.mood] ?? this.moodData.mood;
  }
  get engagementLevel() {
    if (!this.moodData?.engagement) return "none";
    if (this.moodData.engagement > 0.7) return "high";
    if (this.moodData.engagement > 0.4) return "medium";
    if (this.moodData.engagement > 0.2) return "low";
    return "very-low";
  }
  get engagementColor() {
    const c = this.mergedColors;
    switch (this.engagementLevel) {
      case "high":
        return c.engagementHigh || "#4caf50";
      case "medium":
        return c.engagementMedium || "#ff9800";
      case "low":
        return c.engagementLow || "#f44336";
      default:
        return c.engagementVeryLow || "#9e9e9e";
    }
  }
  onTileClick() {
    this.tileClick.emit(this.userId);
  }
  onVideoError(event) {
    this.tileError.emit(new Error("Video playback error"));
  }
  static ɵfac = function VideoTileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoTileComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _VideoTileComponent,
    selectors: [["hiyve-video-tile"]],
    inputs: {
      videoStream: "videoStream",
      audioStream: "audioStream",
      audioOnly: "audioOnly",
      userId: "userId",
      userName: "userName",
      isMuted: "isMuted",
      isRaisedHand: "isRaisedHand",
      isDominant: "isDominant",
      showMuteIndicators: "showMuteIndicators",
      showName: "showName",
      showZoom: "showZoom",
      showMood: "showMood",
      showEngagement: "showEngagement",
      labelPosition: "labelPosition",
      statusPosition: "statusPosition",
      controlPosition: "controlPosition",
      moodPosition: "moodPosition",
      engagementPosition: "engagementPosition",
      moodData: "moodData",
      labels: "labels",
      colors: "colors",
      styles: "styles"
    },
    outputs: {
      tileClick: "tileClick",
      tileError: "tileError"
    },
    ngContentSelectors: _c1,
    decls: 9,
    vars: 7,
    consts: [[1, "video-tile-container", 3, "click", "mouseenter", "mouseleave", "ngStyle"], ["autoplay", "", "playsinline", "", "muted", "", 1, "video-element", 3, "hiyveMediaStream"], [1, "avatar-container"], ["autoplay", "", 3, "hiyveMediaStream"], [1, "name-label", 3, "ngStyle", "top-left", "top-right", "bottom-left", "bottom-right"], [1, "status-indicators", 3, "top-left", "top-right", "bottom-left", "bottom-right"], [1, "mood-indicator", 3, "top-left", "top-right", "bottom-left", "bottom-right"], [1, "engagement-indicator", 3, "top-left", "top-right", "bottom-left", "bottom-right"], ["autoplay", "", "playsinline", "", "muted", "", 1, "video-element", 3, "error", "hiyveMediaStream"], [1, "avatar", 3, "ngStyle"], [1, "name-label", 3, "ngStyle"], [1, "name-text"], [1, "status-indicators"], [1, "indicator", 3, "ngStyle"], [1, "indicator", "hand-raised", 3, "ngStyle"], [1, "indicator-icon"], [1, "mood-indicator"], [1, "mood-text"], [1, "engagement-indicator"], [1, "engagement-dot", 3, "ngStyle"]],
    template: function VideoTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function VideoTileComponent_Template_div_click_0_listener() {
          return ctx.onTileClick();
        })("mouseenter", function VideoTileComponent_Template_div_mouseenter_0_listener() {
          return ctx.isHovered = true;
        })("mouseleave", function VideoTileComponent_Template_div_mouseleave_0_listener() {
          return ctx.isHovered = false;
        });
        ɵɵconditionalCreate(1, VideoTileComponent_Conditional_1_Template, 1, 1, "video", 1)(2, VideoTileComponent_Conditional_2_Template, 3, 5, "div", 2);
        ɵɵconditionalCreate(3, VideoTileComponent_Conditional_3_Template, 1, 1, "audio", 3);
        ɵɵconditionalCreate(4, VideoTileComponent_Conditional_4_Template, 3, 17, "div", 4);
        ɵɵconditionalCreate(5, VideoTileComponent_Conditional_5_Template, 5, 12, "div", 5);
        ɵɵconditionalCreate(6, VideoTileComponent_Conditional_6_Template, 3, 9, "div", 6);
        ɵɵconditionalCreate(7, VideoTileComponent_Conditional_7_Template, 2, 11, "div", 7);
        ɵɵprojection(8);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.containerStyle);
        ɵɵadvance();
        ɵɵconditional(ctx.showVideo ? 1 : 2);
        ɵɵadvance(2);
        ɵɵconditional(ctx.audioStream ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showName ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showMuteIndicators || ctx.isRaisedHand ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showMood && (ctx.moodData == null ? null : ctx.moodData.mood) ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showEngagement && (ctx.moodData == null ? null : ctx.moodData.engagement) != null ? 7 : -1);
      }
    },
    dependencies: [NgStyle, MediaStreamDirective],
    styles: ["[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%}.video-tile-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden;cursor:pointer}.video-element[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.avatar-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:50%;font-size:24px;font-weight:500;-webkit-user-select:none;user-select:none}.name-label[_ngcontent-%COMP%], .status-indicators[_ngcontent-%COMP%], .mood-indicator[_ngcontent-%COMP%], .engagement-indicator[_ngcontent-%COMP%]{position:absolute;z-index:2}.name-label.top-left[_ngcontent-%COMP%], .status-indicators.top-left[_ngcontent-%COMP%], .mood-indicator.top-left[_ngcontent-%COMP%], .engagement-indicator.top-left[_ngcontent-%COMP%]{top:8px;left:8px}.name-label.top-right[_ngcontent-%COMP%], .status-indicators.top-right[_ngcontent-%COMP%], .mood-indicator.top-right[_ngcontent-%COMP%], .engagement-indicator.top-right[_ngcontent-%COMP%]{top:8px;right:8px}.name-label.bottom-left[_ngcontent-%COMP%], .status-indicators.bottom-left[_ngcontent-%COMP%], .mood-indicator.bottom-left[_ngcontent-%COMP%], .engagement-indicator.bottom-left[_ngcontent-%COMP%]{bottom:8px;left:8px}.name-label.bottom-right[_ngcontent-%COMP%], .status-indicators.bottom-right[_ngcontent-%COMP%], .mood-indicator.bottom-right[_ngcontent-%COMP%], .engagement-indicator.bottom-right[_ngcontent-%COMP%]{bottom:8px;right:8px}.name-label[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status-indicators[_ngcontent-%COMP%]{display:flex;gap:4px}.indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%}.indicator.hand-raised[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s ease-in-out infinite}.indicator-icon[_ngcontent-%COMP%]{font-family:Material Icons;font-size:16px;color:#fff}.mood-indicator[_ngcontent-%COMP%]{padding:2px 6px;border-radius:4px;background:#0009;color:#fff;font-size:11px}.engagement-indicator[_ngcontent-%COMP%]{display:flex;align-items:center}.engagement-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.5)}@keyframes _ngcontent-%COMP%_pulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}audio[_ngcontent-%COMP%]{display:none}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoTileComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-video-tile",
      standalone: true,
      imports: [NgStyle, MediaStreamDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="video-tile-container"
  [ngStyle]="containerStyle"
  (click)="onTileClick()"
  (mouseenter)="isHovered = true"
  (mouseleave)="isHovered = false"
>
  <!-- Video Stream -->
  @if (showVideo) {
    <video
      class="video-element"
      [hiyveMediaStream]="videoStream"
      autoplay
      playsinline
      muted
      (error)="onVideoError($event)"
    ></video>
  } @else {
    <!-- Avatar Placeholder -->
    <div class="avatar-container">
      <div
        class="avatar"
        [ngStyle]="{ 'background-color': avatarColor, 'color': mergedColors.avatarText || '#fff' }"
      >
        {{ initials }}
      </div>
    </div>
  }

  <!-- Hidden Audio Element -->
  @if (audioStream) {
    <audio
      [hiyveMediaStream]="audioStream"
      autoplay
    ></audio>
  }

  <!-- Name Label -->
  @if (showName) {
    <div
      class="name-label"
      [ngStyle]="{
        'background': mergedColors.nameLabelBackground || 'rgba(0,0,0,0.6)',
        'color': mergedColors.nameLabelText || '#fff',
        'padding': mergedStyles.nameLabelPadding || '2px 8px',
        'border-radius': mergedStyles.nameLabelBorderRadius || '4px',
        'font-size': mergedStyles.nameLabelFontSize || '12px',
        'max-width': mergedStyles.nameLabelMaxWidth || '80%'
      }"
      [class.top-left]="labelPosition === 'top-left'"
      [class.top-right]="labelPosition === 'top-right'"
      [class.bottom-left]="labelPosition === 'bottom-left'"
      [class.bottom-right]="labelPosition === 'bottom-right'"
    >
      <span class="name-text">{{ displayName }}</span>
    </div>
  }

  <!-- Status Indicators -->
  @if (showMuteIndicators || isRaisedHand) {
    <div
      class="status-indicators"
      [class.top-left]="statusPosition === 'top-left'"
      [class.top-right]="statusPosition === 'top-right'"
      [class.bottom-left]="statusPosition === 'bottom-left'"
      [class.bottom-right]="statusPosition === 'bottom-right'"
    >
      @if (showMuteIndicators && isMuted.audio) {
        <div
          class="indicator"
          [ngStyle]="{ 'background': mergedColors.mutedIndicator || '#f44336' }"
          [attr.title]="mergedLabels.muted"
        >
          <span class="indicator-icon">mic_off</span>
        </div>
      }
      @if (showMuteIndicators && isMuted.video) {
        <div
          class="indicator"
          [ngStyle]="{ 'background': mergedColors.mutedIndicator || '#f44336' }"
          [attr.title]="mergedLabels.cameraOff"
        >
          <span class="indicator-icon">videocam_off</span>
        </div>
      }
      @if (showMuteIndicators && isMuted.output) {
        <div
          class="indicator"
          [ngStyle]="{ 'background': mergedColors.mutedIndicator || '#f44336' }"
          [attr.title]="mergedLabels.outputMuted"
        >
          <span class="indicator-icon">volume_off</span>
        </div>
      }
      @if (isRaisedHand) {
        <div
          class="indicator hand-raised"
          [ngStyle]="{ 'background': mergedColors.handRaisedIndicator || '#ff9800' }"
          [attr.title]="mergedLabels.handRaised"
        >
          <span class="indicator-icon">pan_tool</span>
        </div>
      }
    </div>
  }

  <!-- Mood Indicator -->
  @if (showMood && moodData?.mood) {
    <div
      class="mood-indicator"
      [class.top-left]="moodPosition === 'top-left'"
      [class.top-right]="moodPosition === 'top-right'"
      [class.bottom-left]="moodPosition === 'bottom-left'"
      [class.bottom-right]="moodPosition === 'bottom-right'"
    >
      <span class="mood-text">{{ moodLabel }}</span>
    </div>
  }

  <!-- Engagement Indicator -->
  @if (showEngagement && moodData?.engagement != null) {
    <div
      class="engagement-indicator"
      [class.top-left]="engagementPosition === 'top-left'"
      [class.top-right]="engagementPosition === 'top-right'"
      [class.bottom-left]="engagementPosition === 'bottom-left'"
      [class.bottom-right]="engagementPosition === 'bottom-right'"
    >
      <div
        class="engagement-dot"
        [ngStyle]="{ 'background-color': engagementColor }"
      ></div>
    </div>
  }

  <!-- Extra content projection -->
  <ng-content select="[hiyveOverlay]"></ng-content>
</div>
`,
      styles: [":host{display:block;position:relative;width:100%;height:100%}.video-tile-container{position:relative;width:100%;height:100%;overflow:hidden;cursor:pointer}.video-element{width:100%;height:100%;object-fit:cover}.avatar-container{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.avatar{display:flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:50%;font-size:24px;font-weight:500;-webkit-user-select:none;user-select:none}.name-label,.status-indicators,.mood-indicator,.engagement-indicator{position:absolute;z-index:2}.name-label.top-left,.status-indicators.top-left,.mood-indicator.top-left,.engagement-indicator.top-left{top:8px;left:8px}.name-label.top-right,.status-indicators.top-right,.mood-indicator.top-right,.engagement-indicator.top-right{top:8px;right:8px}.name-label.bottom-left,.status-indicators.bottom-left,.mood-indicator.bottom-left,.engagement-indicator.bottom-left{bottom:8px;left:8px}.name-label.bottom-right,.status-indicators.bottom-right,.mood-indicator.bottom-right,.engagement-indicator.bottom-right{bottom:8px;right:8px}.name-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status-indicators{display:flex;gap:4px}.indicator{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%}.indicator.hand-raised{animation:pulse 1.5s ease-in-out infinite}.indicator-icon{font-family:Material Icons;font-size:16px;color:#fff}.mood-indicator{padding:2px 6px;border-radius:4px;background:#0009;color:#fff;font-size:11px}.engagement-indicator{display:flex;align-items:center}.engagement-dot{width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.5)}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}audio{display:none}\n"]
    }]
  }], null, {
    videoStream: [{
      type: Input
    }],
    audioStream: [{
      type: Input
    }],
    audioOnly: [{
      type: Input
    }],
    userId: [{
      type: Input
    }],
    userName: [{
      type: Input
    }],
    isMuted: [{
      type: Input
    }],
    isRaisedHand: [{
      type: Input
    }],
    isDominant: [{
      type: Input
    }],
    showMuteIndicators: [{
      type: Input
    }],
    showName: [{
      type: Input
    }],
    showZoom: [{
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
    moodData: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    tileClick: [{
      type: Output
    }],
    tileError: [{
      type: Output
    }]
  });
})();
var HiyveDurationPipe = class _HiyveDurationPipe {
  transform(seconds) {
    if (seconds == null || seconds < 0) return "00:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    const pad = (n) => n.toString().padStart(2, "0");
    return hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
  }
  static ɵfac = function HiyveDurationPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HiyveDurationPipe)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "hiyveDuration",
    type: _HiyveDurationPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HiyveDurationPipe, [{
    type: Pipe,
    args: [{
      name: "hiyveDuration",
      standalone: true
    }]
  }], null, null);
})();
var LocalVideoTileComponent = class _LocalVideoTileComponent {
  localVideoElementId = "local-video";
  userName = "";
  showFlip = false;
  flipped = true;
  recordingIndicator = false;
  recordingDuration = 0;
  labels = {};
  colors = {};
  styles = {};
  flipChange = new EventEmitter();
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_LABELS), this.labels);
  }
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_COLORS), this.colors);
  }
  get mergedStyles() {
    return __spreadValues(__spreadValues({}, DEFAULT_VIDEO_TILE_STYLES), this.styles);
  }
  get containerStyle() {
    return {
      "border-radius": this.mergedStyles.borderRadius || "8px",
      "background": this.mergedColors.background || "#1a1a2e"
    };
  }
  toggleFlip() {
    this.flipped = !this.flipped;
    this.flipChange.emit(this.flipped);
  }
  static ɵfac = function LocalVideoTileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalVideoTileComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LocalVideoTileComponent,
    selectors: [["hiyve-local-video-tile"]],
    inputs: {
      localVideoElementId: "localVideoElementId",
      userName: "userName",
      showFlip: "showFlip",
      flipped: "flipped",
      recordingIndicator: "recordingIndicator",
      recordingDuration: "recordingDuration",
      labels: "labels",
      colors: "colors",
      styles: "styles"
    },
    outputs: {
      flipChange: "flipChange"
    },
    ngContentSelectors: _c6,
    decls: 8,
    vars: 14,
    consts: [[1, "local-video-tile-container", 3, "ngStyle"], ["autoplay", "", "playsinline", "", "muted", "", 1, "local-video-element", 3, "id"], [1, "name-label", 3, "ngStyle"], [1, "name-text"], ["title", "Flip video", 1, "flip-button"], [1, "recording-indicator"], ["title", "Flip video", 1, "flip-button", 3, "click"], [1, "flip-icon"], [1, "recording-dot"], [1, "recording-time"]],
    template: function LocalVideoTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "video", 1);
        ɵɵelementStart(2, "div", 2)(3, "span", 3);
        ɵɵtext(4);
        ɵɵelementEnd()();
        ɵɵconditionalCreate(5, LocalVideoTileComponent_Conditional_5_Template, 3, 0, "button", 4);
        ɵɵconditionalCreate(6, LocalVideoTileComponent_Conditional_6_Template, 5, 3, "div", 5);
        ɵɵprojection(7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.containerStyle);
        ɵɵadvance();
        ɵɵclassProp("flipped", ctx.flipped);
        ɵɵproperty("id", ctx.localVideoElementId);
        ɵɵadvance();
        ɵɵproperty("ngStyle", ɵɵpureFunction5(8, _c7, ctx.mergedColors.nameLabelBackground || "rgba(0,0,0,0.6)", ctx.mergedColors.nameLabelText || "#fff", ctx.mergedStyles.nameLabelPadding || "2px 8px", ctx.mergedStyles.nameLabelBorderRadius || "4px", ctx.mergedStyles.nameLabelFontSize || "12px"));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.userName || "You");
        ɵɵadvance();
        ɵɵconditional(ctx.showFlip ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.recordingIndicator ? 6 : -1);
      }
    },
    dependencies: [NgStyle, HiyveDurationPipe],
    styles: ["[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%}.local-video-tile-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}.local-video-element[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.local-video-element.flipped[_ngcontent-%COMP%]{transform:scaleX(-1)}.name-label[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:2}.flip-button[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;border:none;background:#00000080;color:#fff;cursor:pointer;z-index:2;opacity:0;transition:opacity .2s ease}.flip-button[_ngcontent-%COMP%]:hover{background:#000000b3}[_nghost-%COMP%]:hover   .flip-button[_ngcontent-%COMP%]{opacity:1}.flip-icon[_ngcontent-%COMP%]{font-family:Material Icons;font-size:18px}.recording-indicator[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px;display:flex;align-items:center;gap:6px;padding:2px 8px;border-radius:4px;background:#0009;color:#fff;font-size:12px;z-index:2}.recording-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#f44336;animation:_ngcontent-%COMP%_blink 1s ease-in-out infinite}@keyframes _ngcontent-%COMP%_blink{0%,to{opacity:1}50%{opacity:.3}}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalVideoTileComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-local-video-tile",
      standalone: true,
      imports: [NgStyle, HiyveDurationPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="local-video-tile-container" [ngStyle]="containerStyle">
  <video
    [id]="localVideoElementId"
    class="local-video-element"
    [class.flipped]="flipped"
    autoplay
    playsinline
    muted
  ></video>

  <!-- Name Label -->
  <div
    class="name-label"
    [ngStyle]="{
      'background': mergedColors.nameLabelBackground || 'rgba(0,0,0,0.6)',
      'color': mergedColors.nameLabelText || '#fff',
      'padding': mergedStyles.nameLabelPadding || '2px 8px',
      'border-radius': mergedStyles.nameLabelBorderRadius || '4px',
      'font-size': mergedStyles.nameLabelFontSize || '12px'
    }"
  >
    <span class="name-text">{{ userName || 'You' }}</span>
  </div>

  <!-- Flip Button -->
  @if (showFlip) {
    <button
      class="flip-button"
      (click)="toggleFlip(); $event.stopPropagation()"
      title="Flip video"
    >
      <span class="flip-icon">flip</span>
    </button>
  }

  <!-- Recording Indicator -->
  @if (recordingIndicator) {
    <div class="recording-indicator">
      <span class="recording-dot"></span>
      <span class="recording-time">{{ recordingDuration | hiyveDuration }}</span>
    </div>
  }

  <ng-content></ng-content>
</div>
`,
      styles: [":host{display:block;position:relative;width:100%;height:100%}.local-video-tile-container{position:relative;width:100%;height:100%;overflow:hidden}.local-video-element{width:100%;height:100%;object-fit:cover}.local-video-element.flipped{transform:scaleX(-1)}.name-label{position:absolute;bottom:8px;left:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:2}.flip-button{position:absolute;top:8px;right:8px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;border:none;background:#00000080;color:#fff;cursor:pointer;z-index:2;opacity:0;transition:opacity .2s ease}.flip-button:hover{background:#000000b3}:host:hover .flip-button{opacity:1}.flip-icon{font-family:Material Icons;font-size:18px}.recording-indicator{position:absolute;top:8px;left:8px;display:flex;align-items:center;gap:6px;padding:2px 8px;border-radius:4px;background:#0009;color:#fff;font-size:12px;z-index:2}.recording-dot{width:8px;height:8px;border-radius:50%;background:#f44336;animation:blink 1s ease-in-out infinite}@keyframes blink{0%,to{opacity:1}50%{opacity:.3}}\n"]
    }]
  }], null, {
    localVideoElementId: [{
      type: Input
    }],
    userName: [{
      type: Input
    }],
    showFlip: [{
      type: Input
    }],
    flipped: [{
      type: Input
    }],
    recordingIndicator: [{
      type: Input
    }],
    recordingDuration: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    flipChange: [{
      type: Output
    }]
  });
})();

export {
  y,
  S,
  L,
  C,
  MediaStreamDirective,
  VideoTileComponent,
  HiyveDurationPipe,
  LocalVideoTileComponent
};
//# sourceMappingURL=chunk-GTNPRJ4J.js.map
