import {
  BasePortalOutlet,
  CdkPortalOutlet,
  CdkScrollable,
  CdkScrollableModule,
  ComponentPortal,
  DomPortalOutlet,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  PortalModule,
  ScrollDispatcher,
  TemplatePortal,
  ViewportRuler,
  createBlockScrollStrategy,
  createFlexibleConnectedPositionStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-JMOXL3HB.js";
import {
  MatButtonModule,
  MatMiniFabButton,
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-NW6FA322.js";
import {
  coerceBooleanProperty
} from "./chunk-46HAYV32.js";
import "./chunk-CU443EYV.js";
import {
  _animationsDisabled
} from "./chunk-OFWMD3WQ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5YAY4UVX.js";
import {
  A11yModule,
  AriaDescriber,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  LEFT_ARROW,
  MatCommonModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _IdGenerator,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions
} from "./chunk-QX4BPWCE.js";
import {
  Directionality
} from "./chunk-OWGP7QB7.js";
import "./chunk-CHBD6IFK.js";
import "./chunk-JDNE2ZTR.js";
import {
  Platform,
  _CdkPrivateStyleLoader,
  coerceNumberProperty
} from "./chunk-AEKS5FGB.js";
import "./chunk-WBJQB62A.js";
import {
  AsyncPipe,
  NgClass,
  NgStyle
} from "./chunk-OBXDPFTH.js";
import "./chunk-R6U7IGMG.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7NW4AOI7.js";
import "./chunk-JRFR6BLO.js";
import {
  defer,
  merge
} from "./chunk-HWYXSU2G.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  combineLatest,
  filter,
  map,
  of,
  shareReplay,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer
} from "./chunk-MARUHEWW.js";
import "./chunk-5UQVDOBI.js";
import "./chunk-GEURD2S3.js";
import {
  __async,
  __asyncGenerator,
  __await,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/core/node_modules/@hiyve/rtc-client/dist/hiyve-rtc-client.mjs
function t(t2) {
  return t2 && t2.h && {}.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
var e;
var i;
var s;
var r;
var o;
var n = {};
var a = { exports: {} };
function c() {
  if (i) return e;
  i = 1;
  var t2 = 1e3, s2 = 60 * t2, r2 = 60 * s2, o2 = 24 * r2, n2 = 7 * o2;
  function a2(t3, e2, i2, s3) {
    var r3 = e2 >= 1.5 * i2;
    return Math.round(t3 / i2) + " " + s3 + (r3 ? "s" : "");
  }
  return e = (e2, i2) => {
    i2 = i2 || {};
    var c2, h2, d2 = typeof e2;
    if ("string" === d2 && e2.length > 0) return ((e3) => {
      if (100 >= (e3 += "").length) {
        var i3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e3);
        if (i3) {
          var a3 = parseFloat(i3[1]);
          switch ((i3[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * a3;
            case "weeks":
            case "week":
            case "w":
              return a3 * n2;
            case "days":
            case "day":
            case "d":
              return a3 * o2;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return a3 * r2;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return a3 * s2;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return a3 * t2;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return a3;
            default:
              return;
          }
        }
      }
    })(e2);
    if ("number" === d2 && isFinite(e2)) return i2.long ? o2 > (h2 = Math.abs(c2 = e2)) ? r2 > h2 ? s2 > h2 ? t2 > h2 ? c2 + " ms" : a2(c2, h2, t2, "second") : a2(c2, h2, s2, "minute") : a2(c2, h2, r2, "hour") : a2(c2, h2, o2, "day") : ((e3) => {
      var i3 = Math.abs(e3);
      return o2 > i3 ? r2 > i3 ? s2 > i3 ? t2 > i3 ? e3 + "ms" : Math.round(e3 / t2) + "s" : Math.round(e3 / s2) + "m" : Math.round(e3 / r2) + "h" : Math.round(e3 / o2) + "d";
    })(e2);
    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e2));
  };
}
function h() {
  return r ? s : (r = 1, s = function(t2) {
    function e2(t3) {
      let s3, r2, o2, n2 = null;
      function a2(...t4) {
        if (!a2.enabled) return;
        const i3 = a2, r3 = +/* @__PURE__ */ new Date();
        i3.diff = r3 - (s3 || r3), i3.prev = s3, i3.curr = r3, s3 = r3, t4[0] = e2.coerce(t4[0]), "string" != typeof t4[0] && t4.unshift("%O");
        let o3 = 0;
        t4[0] = t4[0].replace(/%([a-zA-Z%])/g, (s4, r4) => {
          if ("%%" === s4) return "%";
          o3++;
          const n3 = e2.formatters[r4];
          return "function" == typeof n3 && (s4 = n3.call(i3, t4[o3]), t4.splice(o3, 1), o3--), s4;
        }), e2.formatArgs.call(i3, t4), (i3.log || e2.log).apply(i3, t4);
      }
      return a2.namespace = t3, a2.useColors = e2.useColors(), a2.color = e2.selectColor(t3), a2.extend = i2, a2.destroy = e2.destroy, Object.defineProperty(a2, "enabled", { enumerable: true, configurable: false, get() {
        return null !== n2 ? n2 : (r2 !== e2.namespaces && (r2 = e2.namespaces, o2 = e2.enabled(t3)), o2);
      }, set(t4) {
        n2 = t4;
      } }), "function" == typeof e2.init && e2.init(a2), a2;
    }
    function i2(t3, i3) {
      const s3 = e2(this.namespace + (void 0 === i3 ? ":" : i3) + t3);
      return s3.log = this.log, s3;
    }
    function s2(t3, e3) {
      let i3 = 0, s3 = 0, r2 = -1, o2 = 0;
      for (; t3.length > i3; ) if (s3 >= e3.length || e3[s3] !== t3[i3] && "*" !== e3[s3]) {
        if (-1 === r2) return false;
        s3 = r2 + 1, o2++, i3 = o2;
      } else "*" === e3[s3] ? (r2 = s3, o2 = i3, s3++) : (i3++, s3++);
      for (; e3.length > s3 && "*" === e3[s3]; ) s3++;
      return s3 === e3.length;
    }
    return e2.debug = e2, e2.default = e2, e2.coerce = (t3) => t3 instanceof Error ? t3.stack || t3.message : t3, e2.disable = () => {
      const t3 = [...e2.names, ...e2.skips.map((t4) => "-" + t4)].join(",");
      return e2.enable(""), t3;
    }, e2.enable = (t3) => {
      e2.save(t3), e2.namespaces = t3, e2.names = [], e2.skips = [];
      const i3 = ("string" == typeof t3 ? t3 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const s3 of i3) "-" === s3[0] ? e2.skips.push(s3.slice(1)) : e2.names.push(s3);
    }, e2.enabled = (t3) => {
      for (const i3 of e2.skips) if (s2(t3, i3)) return false;
      for (const i3 of e2.names) if (s2(t3, i3)) return true;
      return false;
    }, e2.humanize = c(), e2.destroy = () => {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(t2).forEach((i3) => {
      e2[i3] = t2[i3];
    }), e2.names = [], e2.skips = [], e2.formatters = {}, e2.selectColor = (t3) => {
      let i3 = 0;
      for (let e3 = 0; t3.length > e3; e3++) i3 = (i3 << 5) - i3 + t3.charCodeAt(e3), i3 |= 0;
      return e2.colors[Math.abs(i3) % e2.colors.length];
    }, e2.enable(e2.load()), e2;
  });
}
function d() {
  return o || (o = 1, (function(t2, e2) {
    e2.formatArgs = function(e3) {
      if (e3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e3[0] + (this.useColors ? "%c " : " ") + "+" + t2.exports.humanize(this.diff), !this.useColors) return;
      const i3 = "color: " + this.color;
      e3.splice(1, 0, i3, "color: inherit");
      let s2 = 0, r2 = 0;
      e3[0].replace(/%[a-zA-Z%]/g, (t3) => {
        "%%" !== t3 && (s2++, "%c" === t3 && (r2 = s2));
      }), e3.splice(r2, 0, i3);
    }, e2.save = (t3) => {
      try {
        t3 ? e2.storage.setItem("debug", t3) : e2.storage.removeItem("debug");
      } catch (i3) {
      }
    }, e2.load = () => {
      let t3;
      try {
        t3 = e2.storage.getItem("debug") || e2.storage.getItem("DEBUG");
      } catch (i3) {
      }
      return !t3 && "undefined" != typeof process && "env" in process && (t3 = process.env.DEBUG), t3;
    }, e2.useColors = () => {
      if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
      if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let t3;
      return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (t3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t3[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }, e2.storage = (() => {
      try {
        return localStorage;
      } catch (t3) {
      }
    })(), e2.destroy = /* @__PURE__ */ (() => {
      let t3 = false;
      return () => {
        t3 || (t3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e2.log = console.debug || console.log || (() => {
    }), t2.exports = h()(e2);
    const { formatters: i2 } = t2.exports;
    i2.j = (t3) => {
      try {
        return JSON.stringify(t3);
      } catch (e3) {
        return "[UnexpectedJSONParseError]: " + e3.message;
      }
    };
  })(a, a.exports)), a.exports;
}
var l;
var u = {};
function p() {
  return l || (l = 1, Object.defineProperty(u, "h", { value: true })), u;
}
var m;
var f = {};
var w = {};
function g() {
  if (m) return w;
  m = 1, Object.defineProperty(w, "h", { value: true }), w.Logger = void 0;
  const t2 = d(), e2 = "mediasoup-client";
  return w.Logger = class {
    l;
    I;
    T;
    constructor(i2) {
      i2 ? (this.l = (0, t2.default)(`${e2}:${i2}`), this.I = (0, t2.default)(`${e2}:WARN:${i2}`), this.T = (0, t2.default)(`${e2}:ERROR:${i2}`)) : (this.l = (0, t2.default)(e2), this.I = (0, t2.default)(e2 + ":WARN"), this.T = (0, t2.default)(e2 + ":ERROR")), this.l.log = console.info.bind(console), this.I.log = console.warn.bind(console), this.T.log = console.error.bind(console);
    }
    get debug() {
      return this.l;
    }
    get warn() {
      return this.I;
    }
    get error() {
      return this.T;
    }
  }, w;
}
var y;
var v;
var b = {};
var E = { exports: {} };
function I() {
  if (y) return E.exports;
  y = 1;
  var t2, e2 = "object" == typeof Reflect ? Reflect : null, i2 = e2 && "function" == typeof e2.apply ? e2.apply : (t3, e3, i3) => (() => {
  }).apply.call(t3, e3, i3);
  t2 = e2 && "function" == typeof e2.ownKeys ? e2.ownKeys : Object.getOwnPropertySymbols ? (t3) => Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3)) : (t3) => Object.getOwnPropertyNames(t3);
  var s2 = Number.isNaN || ((t3) => t3 != t3);
  function r2() {
    r2.init.call(this);
  }
  E.exports = r2, E.exports.once = (t3, e3) => new Promise((i3, s3) => {
    function r3(i4) {
      t3.removeListener(e3, o3), s3(i4);
    }
    function o3() {
      "function" == typeof t3.removeListener && t3.removeListener("error", r3), i3([].slice.call(arguments));
    }
    m3(t3, e3, o3, { once: true }), "error" !== e3 && ((t4, e4) => {
      "function" == typeof t4.on && m3(t4, "error", e4, { once: true });
    })(t3, r3);
  }), r2.EventEmitter = r2, r2.prototype.R = void 0, r2.prototype.S = 0, r2.prototype.k = void 0;
  var o2 = 10;
  function n2(t3) {
    if ("function" != typeof t3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3);
  }
  function a2(t3) {
    return void 0 === t3.k ? r2.defaultMaxListeners : t3.k;
  }
  function c2(t3, e3, i3, s3) {
    var r3, o3, c3;
    if (n2(i3), void 0 === (o3 = t3.R) ? (o3 = t3.R = /* @__PURE__ */ Object.create(null), t3.S = 0) : (void 0 !== o3.newListener && (t3.emit("newListener", e3, i3.listener ? i3.listener : i3), o3 = t3.R), c3 = o3[e3]), void 0 === c3) c3 = o3[e3] = i3, ++t3.S;
    else if ("function" == typeof c3 ? c3 = o3[e3] = s3 ? [i3, c3] : [c3, i3] : s3 ? c3.unshift(i3) : c3.push(i3), (r3 = a2(t3)) > 0 && c3.length > r3 && !c3.warned) {
      c3.warned = true;
      var h3 = Error("Possible EventEmitter memory leak detected. " + c3.length + " " + e3 + " listeners added. Use emitter.setMaxListeners() to increase limit");
      h3.name = "MaxListenersExceededWarning", h3.emitter = t3, h3.type = e3, h3.count = c3.length, console && console.warn && console.warn(h3);
    }
    return t3;
  }
  function h2() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function d2(t3, e3, i3) {
    var s3 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: i3 }, r3 = h2.bind(s3);
    return r3.listener = i3, s3.wrapFn = r3, r3;
  }
  function l2(t3, e3, i3) {
    var s3 = t3.R;
    if (void 0 === s3) return [];
    var r3 = s3[e3];
    return void 0 === r3 ? [] : "function" == typeof r3 ? i3 ? [r3.listener || r3] : [r3] : i3 ? ((t4) => {
      for (var e4 = Array(t4.length), i4 = 0; e4.length > i4; ++i4) e4[i4] = t4[i4].listener || t4[i4];
      return e4;
    })(r3) : p3(r3, r3.length);
  }
  function u2(t3) {
    var e3 = this.R;
    if (void 0 !== e3) {
      var i3 = e3[t3];
      if ("function" == typeof i3) return 1;
      if (void 0 !== i3) return i3.length;
    }
    return 0;
  }
  function p3(t3, e3) {
    for (var i3 = Array(e3), s3 = 0; e3 > s3; ++s3) i3[s3] = t3[s3];
    return i3;
  }
  function m3(t3, e3, i3, s3) {
    if ("function" == typeof t3.on) s3.once ? t3.once(e3, i3) : t3.on(e3, i3);
    else {
      if ("function" != typeof t3.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t3);
      t3.addEventListener(e3, function r3(o3) {
        s3.once && t3.removeEventListener(e3, r3), i3(o3);
      });
    }
  }
  return Object.defineProperty(r2, "defaultMaxListeners", { enumerable: true, get() {
    return o2;
  }, set(t3) {
    if ("number" != typeof t3 || 0 > t3 || s2(t3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
    o2 = t3;
  } }), r2.init = function() {
    void 0 !== this.R && this.R !== Object.getPrototypeOf(this).R || (this.R = /* @__PURE__ */ Object.create(null), this.S = 0), this.k = this.k || void 0;
  }, r2.prototype.setMaxListeners = function(t3) {
    if ("number" != typeof t3 || 0 > t3 || s2(t3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
    return this.k = t3, this;
  }, r2.prototype.getMaxListeners = function() {
    return a2(this);
  }, r2.prototype.emit = function(t3) {
    for (var e3 = [], s3 = 1; arguments.length > s3; s3++) e3.push(arguments[s3]);
    var r3 = "error" === t3, o3 = this.R;
    if (void 0 !== o3) r3 = r3 && void 0 === o3.error;
    else if (!r3) return false;
    if (r3) {
      var n3;
      if (e3.length > 0 && (n3 = e3[0]), n3 instanceof Error) throw n3;
      var a3 = Error("Unhandled error." + (n3 ? " (" + n3.message + ")" : ""));
      throw a3.context = n3, a3;
    }
    var c3 = o3[t3];
    if (void 0 === c3) return false;
    if ("function" == typeof c3) i2(c3, this, e3);
    else {
      var h3 = c3.length, d3 = p3(c3, h3);
      for (s3 = 0; h3 > s3; ++s3) i2(d3[s3], this, e3);
    }
    return true;
  }, r2.prototype.on = r2.prototype.addListener = function(t3, e3) {
    return c2(this, t3, e3, false);
  }, r2.prototype.prependListener = function(t3, e3) {
    return c2(this, t3, e3, true);
  }, r2.prototype.once = function(t3, e3) {
    return n2(e3), this.on(t3, d2(this, t3, e3)), this;
  }, r2.prototype.prependOnceListener = function(t3, e3) {
    return n2(e3), this.prependListener(t3, d2(this, t3, e3)), this;
  }, r2.prototype.off = r2.prototype.removeListener = function(t3, e3) {
    var i3, s3, r3, o3, a3;
    if (n2(e3), void 0 === (s3 = this.R)) return this;
    if (void 0 === (i3 = s3[t3])) return this;
    if (i3 === e3 || i3.listener === e3) 0 === --this.S ? this.R = /* @__PURE__ */ Object.create(null) : (delete s3[t3], s3.removeListener && this.emit("removeListener", t3, i3.listener || e3));
    else if ("function" != typeof i3) {
      for (r3 = -1, o3 = i3.length - 1; o3 >= 0; o3--) if (i3[o3] === e3 || i3[o3].listener === e3) {
        a3 = i3[o3].listener, r3 = o3;
        break;
      }
      if (0 > r3) return this;
      0 === r3 ? i3.shift() : ((t4, e4) => {
        for (; t4.length > e4 + 1; e4++) t4[e4] = t4[e4 + 1];
        t4.pop();
      })(i3, r3), 1 === i3.length && (s3[t3] = i3[0]), void 0 !== s3.removeListener && this.emit("removeListener", t3, a3 || e3);
    }
    return this;
  }, r2.prototype.removeAllListeners = function(t3) {
    var e3, i3, s3;
    if (void 0 === (i3 = this.R)) return this;
    if (void 0 === i3.removeListener) return 0 === arguments.length ? (this.R = /* @__PURE__ */ Object.create(null), this.S = 0) : void 0 !== i3[t3] && (0 === --this.S ? this.R = /* @__PURE__ */ Object.create(null) : delete i3[t3]), this;
    if (0 === arguments.length) {
      var r3, o3 = Object.keys(i3);
      for (s3 = 0; o3.length > s3; ++s3) "removeListener" !== (r3 = o3[s3]) && this.removeAllListeners(r3);
      return this.removeAllListeners("removeListener"), this.R = /* @__PURE__ */ Object.create(null), this.S = 0, this;
    }
    if ("function" == typeof (e3 = i3[t3])) this.removeListener(t3, e3);
    else if (void 0 !== e3) for (s3 = e3.length - 1; s3 >= 0; s3--) this.removeListener(t3, e3[s3]);
    return this;
  }, r2.prototype.listeners = function(t3) {
    return l2(this, t3, true);
  }, r2.prototype.rawListeners = function(t3) {
    return l2(this, t3, false);
  }, r2.listenerCount = (t3, e3) => "function" == typeof t3.listenerCount ? t3.listenerCount(e3) : u2.call(t3, e3), r2.prototype.listenerCount = u2, r2.prototype.eventNames = function() {
    return this.S > 0 ? t2(this.R) : [];
  }, E.exports;
}
function T() {
  if (v) return b;
  v = 1, Object.defineProperty(b, "h", { value: true }), b.EnhancedEventEmitter = void 0;
  const t2 = I(), e2 = new (g()).Logger("EnhancedEventEmitter");
  return b.EnhancedEventEmitter = class extends t2.EventEmitter {
    constructor() {
      super(), this.setMaxListeners(Infinity);
    }
    close() {
      super.removeAllListeners();
    }
    emit(t3, ...e3) {
      return super.emit(t3, ...e3);
    }
    safeEmit(t3, ...i2) {
      try {
        return super.emit(t3, ...i2);
      } catch (s2) {
        e2.error("safeEmit() | event listener threw an error [eventName:%s]:%o", t3, s2);
        try {
          super.emit("listenererror", t3, s2);
        } catch (r2) {
        }
        return !!super.listenerCount(t3);
      }
    }
    on(t3, e3) {
      return super.on(t3, e3), this;
    }
    off(t3, e3) {
      return super.off(t3, e3), this;
    }
    addListener(t3, e3) {
      return super.on(t3, e3), this;
    }
    prependListener(t3, e3) {
      return super.prependListener(t3, e3), this;
    }
    once(t3, e3) {
      return super.once(t3, e3), this;
    }
    prependOnceListener(t3, e3) {
      return super.prependOnceListener(t3, e3), this;
    }
    removeListener(t3, e3) {
      return super.off(t3, e3), this;
    }
    removeAllListeners(t3) {
      return super.removeAllListeners(t3), this;
    }
    listenerCount(t3) {
      return super.listenerCount(t3);
    }
    listeners(t3) {
      return super.listeners(t3);
    }
    rawListeners(t3) {
      return super.rawListeners(t3);
    }
  }, b;
}
var R;
var S = {};
function k() {
  if (R) return S;
  R = 1, Object.defineProperty(S, "h", { value: true }), S.InvalidStateError = S.UnsupportedError = void 0;
  class t2 extends Error {
    constructor(e3) {
      super(e3), this.name = "UnsupportedError", Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, t2) : this.stack = Error(e3).stack;
    }
  }
  S.UnsupportedError = t2;
  class e2 extends Error {
    constructor(t3) {
      super(t3), this.name = "InvalidStateError", Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, e2) : this.stack = Error(t3).stack;
    }
  }
  return S.InvalidStateError = e2, S;
}
var C;
var _ = {};
function P() {
  return C || (C = 1, Object.defineProperty(_, "h", { value: true }), _.clone = (t2) => void 0 === t2 ? void 0 : Number.isNaN(t2) ? NaN : "function" == typeof structuredClone ? structuredClone(t2) : JSON.parse(JSON.stringify(t2)), _.generateRandomNumber = () => Math.round(1e7 * Math.random()), _.deepFreeze = function t2(e2) {
    const i2 = Reflect.ownKeys(e2);
    for (const s2 of i2) {
      const i3 = e2[s2];
      (i3 && "object" == typeof i3 || "function" == typeof i3) && t2(i3);
    }
    return Object.freeze(e2);
  }), _;
}
var D;
var x;
var O;
var M = {};
var A = {};
var N = {};
function j() {
  if (D) return N;
  D = 1, Object.defineProperty(N, "h", { value: true }), N.Logger = void 0;
  const t2 = d(), e2 = "h264-profile-level-id";
  return N.Logger = class {
    l;
    I;
    T;
    constructor(i2) {
      i2 ? (this.l = (0, t2.default)(`${e2}:${i2}`), this.I = (0, t2.default)(`${e2}:WARN:${i2}`), this.T = (0, t2.default)(`${e2}:ERROR:${i2}`)) : (this.l = (0, t2.default)(e2), this.I = (0, t2.default)(e2 + ":WARN"), this.T = (0, t2.default)(e2 + ":ERROR")), this.l.log = console.info.bind(console), this.I.log = console.warn.bind(console), this.T.log = console.error.bind(console);
    }
    get debug() {
      return this.l;
    }
    get warn() {
      return this.I;
    }
    get error() {
      return this.T;
    }
  }, N;
}
function $() {
  if (x) return A;
  x = 1, Object.defineProperty(A, "h", { value: true }), A.ProfileLevelId = A.Level = A.Profile = void 0, A.parseProfileLevelId = l2, A.profileLevelIdToString = u2, A.profileToString = (i3) => {
    switch (i3) {
      case e2.ConstrainedBaseline:
        return "ConstrainedBaseline";
      case e2.Baseline:
        return "Baseline";
      case e2.Main:
        return "Main";
      case e2.ConstrainedHigh:
        return "ConstrainedHigh";
      case e2.High:
        return "High";
      case e2.PredictiveHigh444:
        return "PredictiveHigh444";
      default:
        return void t2.warn("profileToString() | unrecognized profile " + i3);
    }
  }, A.levelToString = (e3) => {
    switch (e3) {
      case s2.L1_b:
        return "1b";
      case s2.L1:
        return "1";
      case s2.L1_1:
        return "1.1";
      case s2.L1_2:
        return "1.2";
      case s2.L1_3:
        return "1.3";
      case s2.L2:
        return "2";
      case s2.L2_1:
        return "2.1";
      case s2.L2_2:
        return "2.2";
      case s2.L3:
        return "3";
      case s2.L3_1:
        return "3.1";
      case s2.L3_2:
        return "3.2";
      case s2.L4:
        return "4";
      case s2.L4_1:
        return "4.1";
      case s2.L4_2:
        return "4.2";
      case s2.L5:
        return "5";
      case s2.L5_1:
        return "5.1";
      case s2.L5_2:
        return "5.2";
      default:
        return void t2.warn("levelToString() | unrecognized level " + e3);
    }
  }, A.parseSdpProfileLevelId = p3, A.isSameProfile = (t3 = {}, e3 = {}) => {
    const i3 = p3(t3), s3 = p3(e3);
    return !(!i3 || !s3 || i3.profile !== s3.profile);
  }, A.isSameProfileAndLevel = (t3 = {}, e3 = {}) => {
    const i3 = p3(t3), s3 = p3(e3);
    return !(!i3 || !s3 || i3.profile !== s3.profile || i3.level != s3.level);
  }, A.generateProfileLevelIdStringForAnswer = (e3 = {}, i3 = {}) => {
    if (!e3["profile-level-id"] && !i3["profile-level-id"]) return void t2.warn("generateProfileLevelIdStringForAnswer() | profile-level-id missing in local and remote params");
    const r3 = p3(e3), n3 = p3(i3);
    if (!r3) throw new TypeError("invalid local_profile_level_id");
    if (!n3) throw new TypeError("invalid remote_profile_level_id");
    if (r3.profile !== n3.profile) throw new TypeError("H264 Profile mismatch");
    const a3 = f3(e3) && f3(i3), c3 = r3.level, h3 = ((t3, e4) => t3 === s2.L1_b ? e4 !== s2.L1 && e4 !== s2.L1_b : e4 === s2.L1_b ? t3 !== s2.L1 : e4 > t3)(l3 = c3, m4 = n3.level) ? l3 : m4, d3 = a3 ? c3 : h3;
    var l3, m4;
    return t2.debug(`generateProfileLevelIdStringForAnswer() | result [profile:${r3.profile}, level:${d3}]`), u2(new o2(r3.profile, d3));
  }, A.supportedLevel = (e3, i3) => {
    for (let s3 = d2.length - 1; s3 >= 0; --s3) {
      const r3 = d2[s3];
      if (e3 >= 256 * r3.max_macroblock_frame_size && i3 * r3.max_macroblock_frame_size >= r3.max_macroblocks_per_second) return t2.debug(`supportedLevel() | result [max_frame_pixel_count:${e3}, max_fps:${i3}, level:${r3.level}]`), r3.level;
    }
    t2.warn(`supportedLevel() | no level supported [max_frame_pixel_count:${e3}, max_fps:${i3}]`);
  };
  const t2 = new (j()).Logger();
  var e2, i2, s2, r2;
  (i2 = e2 || (A.Profile = e2 = {}))[i2.ConstrainedBaseline = 1] = "ConstrainedBaseline", i2[i2.Baseline = 2] = "Baseline", i2[i2.Main = 3] = "Main", i2[i2.ConstrainedHigh = 4] = "ConstrainedHigh", i2[i2.High = 5] = "High", i2[i2.PredictiveHigh444 = 6] = "PredictiveHigh444", (r2 = s2 || (A.Level = s2 = {}))[r2.L1_b = 0] = "L1_b", r2[r2.L1 = 10] = "L1", r2[r2.L1_1 = 11] = "L1_1", r2[r2.L1_2 = 12] = "L1_2", r2[r2.L1_3 = 13] = "L1_3", r2[r2.L2 = 20] = "L2", r2[r2.L2_1 = 21] = "L2_1", r2[r2.L2_2 = 22] = "L2_2", r2[r2.L3 = 30] = "L3", r2[r2.L3_1 = 31] = "L3_1", r2[r2.L3_2 = 32] = "L3_2", r2[r2.L4 = 40] = "L4", r2[r2.L4_1 = 41] = "L4_1", r2[r2.L4_2 = 42] = "L4_2", r2[r2.L5 = 50] = "L5", r2[r2.L5_1 = 51] = "L5_1", r2[r2.L5_2 = 52] = "L5_2";
  class o2 {
    profile;
    level;
    constructor(t3, e3) {
      this.profile = t3, this.level = e3;
    }
  }
  A.ProfileLevelId = o2;
  const n2 = new o2(e2.ConstrainedBaseline, s2.L3_1);
  class a2 {
    mask;
    masked_value;
    constructor(t3) {
      this.mask = ~m3("x", t3), this.masked_value = m3("1", t3);
    }
    isMatch(t3) {
      return this.masked_value === (t3 & this.mask);
    }
  }
  class c2 {
    profile_idc;
    profile_iop;
    profile;
    constructor(t3, e3, i3) {
      this.profile_idc = t3, this.profile_iop = e3, this.profile = i3;
    }
  }
  const h2 = [new c2(66, new a2("x1xx0000"), e2.ConstrainedBaseline), new c2(77, new a2("1xxx0000"), e2.ConstrainedBaseline), new c2(88, new a2("11xx0000"), e2.ConstrainedBaseline), new c2(66, new a2("x0xx0000"), e2.Baseline), new c2(88, new a2("10xx0000"), e2.Baseline), new c2(77, new a2("0x0x0000"), e2.Main), new c2(100, new a2("00000000"), e2.High), new c2(100, new a2("00001100"), e2.ConstrainedHigh), new c2(244, new a2("00000000"), e2.PredictiveHigh444)], d2 = [{ max_macroblocks_per_second: 1485, max_macroblock_frame_size: 99, level: s2.L1 }, { max_macroblocks_per_second: 1485, max_macroblock_frame_size: 99, level: s2.L1_b }, { max_macroblocks_per_second: 3e3, max_macroblock_frame_size: 396, level: s2.L1_1 }, { max_macroblocks_per_second: 6e3, max_macroblock_frame_size: 396, level: s2.L1_2 }, { max_macroblocks_per_second: 11880, max_macroblock_frame_size: 396, level: s2.L1_3 }, { max_macroblocks_per_second: 11880, max_macroblock_frame_size: 396, level: s2.L2 }, { max_macroblocks_per_second: 19800, max_macroblock_frame_size: 792, level: s2.L2_1 }, { max_macroblocks_per_second: 20250, max_macroblock_frame_size: 1620, level: s2.L2_2 }, { max_macroblocks_per_second: 40500, max_macroblock_frame_size: 1620, level: s2.L3 }, { max_macroblocks_per_second: 108e3, max_macroblock_frame_size: 3600, level: s2.L3_1 }, { max_macroblocks_per_second: 216e3, max_macroblock_frame_size: 5120, level: s2.L3_2 }, { max_macroblocks_per_second: 245760, max_macroblock_frame_size: 8192, level: s2.L4 }, { max_macroblocks_per_second: 245760, max_macroblock_frame_size: 8192, level: s2.L4_1 }, { max_macroblocks_per_second: 522240, max_macroblock_frame_size: 8704, level: s2.L4_2 }, { max_macroblocks_per_second: 589824, max_macroblock_frame_size: 22080, level: s2.L5 }, { max_macroblocks_per_second: 983040, max_macroblock_frame_size: 36864, level: s2.L5_1 }, { max_macroblocks_per_second: 2073600, max_macroblock_frame_size: 36864, level: s2.L5_2 }];
  function l2(e3) {
    if ("string" != typeof e3 || 6 !== e3.length) return;
    const i3 = parseInt(e3, 16);
    if (0 === i3) return;
    const r3 = 255 & i3, n3 = i3 >> 8 & 255, a3 = i3 >> 16 & 255;
    let c3;
    switch (r3) {
      case s2.L1_1:
        c3 = 16 & n3 ? s2.L1_b : s2.L1_1;
        break;
      case s2.L1:
      case s2.L1_2:
      case s2.L1_3:
      case s2.L2:
      case s2.L2_1:
      case s2.L2_2:
      case s2.L3:
      case s2.L3_1:
      case s2.L3_2:
      case s2.L4:
      case s2.L4_1:
      case s2.L4_2:
      case s2.L5:
      case s2.L5_1:
      case s2.L5_2:
        c3 = r3;
        break;
      default:
        return void t2.warn(`parseProfileLevelId() | unrecognized level_idc [str:${e3}, level_idc:${r3}]`);
    }
    for (const s3 of h2) if (a3 === s3.profile_idc && s3.profile_iop.isMatch(n3)) return t2.debug(`parseProfileLevelId() | result [str:${e3}, profile:${s3.profile}, level:${c3}]`), new o2(s3.profile, c3);
    t2.warn(`parseProfileLevelId() | unrecognized profile_idc/profile_iop combination [str:${e3}, profile_idc:${a3}, profile_iop:${n3}]`);
  }
  function u2(i3) {
    if (i3.level == s2.L1_b) switch (i3.profile) {
      case e2.ConstrainedBaseline:
        return "42f00b";
      case e2.Baseline:
        return "42100b";
      case e2.Main:
        return "4d100b";
      default:
        return void t2.warn("profileLevelIdToString() | Level 1_b not is allowed for profile " + i3.profile);
    }
    let r3;
    switch (i3.profile) {
      case e2.ConstrainedBaseline:
        r3 = "42e0";
        break;
      case e2.Baseline:
        r3 = "4200";
        break;
      case e2.Main:
        r3 = "4d00";
        break;
      case e2.ConstrainedHigh:
        r3 = "640c";
        break;
      case e2.High:
        r3 = "6400";
        break;
      case e2.PredictiveHigh444:
        r3 = "f400";
        break;
      default:
        return void t2.warn("profileLevelIdToString() | unrecognized profile " + i3.profile);
    }
    let o3 = i3.level.toString(16);
    return 1 === o3.length && (o3 = "0" + o3), `${r3}${o3}`;
  }
  function p3(t3 = {}) {
    const e3 = t3["profile-level-id"];
    return e3 ? l2(e3) : n2;
  }
  function m3(t3, e3) {
    return +(e3[0] === t3) << 7 | +(e3[1] === t3) << 6 | +(e3[2] === t3) << 5 | +(e3[3] === t3) << 4 | +(e3[4] === t3) << 3 | +(e3[5] === t3) << 2 | +(e3[6] === t3) << 1 | +(e3[7] === t3);
  }
  function f3(t3 = {}) {
    const e3 = t3["level-asymmetry-allowed"];
    return true === e3 || 1 === e3 || "1" === e3;
  }
  return A;
}
function F() {
  if (O) return M;
  O = 1, Object.defineProperty(M, "h", { value: true }), M.validateAndNormalizeRtpCapabilities = (t3) => {
    if ("object" != typeof t3) throw new TypeError("caps is not an object");
    if (t3.codecs && !Array.isArray(t3.codecs)) throw new TypeError("caps.codecs is not an array");
    t3.codecs || (t3.codecs = []);
    for (const e3 of t3.codecs) n2(e3);
    if (t3.headerExtensions && !Array.isArray(t3.headerExtensions)) throw new TypeError("caps.headerExtensions is not an array");
    t3.headerExtensions || (t3.headerExtensions = []);
    for (const e3 of t3.headerExtensions) c2(e3);
  }, M.validateAndNormalizeRtpParameters = o2, M.validateAndNormalizeSctpStreamParameters = (t3) => {
    if ("object" != typeof t3) throw new TypeError("params is not an object");
    if ("number" != typeof t3.streamId) throw new TypeError("missing params.streamId");
    let e3 = false;
    if ("boolean" == typeof t3.ordered ? e3 = true : t3.ordered = true, t3.maxPacketLifeTime && "number" != typeof t3.maxPacketLifeTime) throw new TypeError("invalid params.maxPacketLifeTime");
    if (t3.maxRetransmits && "number" != typeof t3.maxRetransmits) throw new TypeError("invalid params.maxRetransmits");
    if (t3.maxPacketLifeTime && t3.maxRetransmits) throw new TypeError("cannot provide both maxPacketLifeTime and maxRetransmits");
    if (e3 && t3.ordered && (t3.maxPacketLifeTime || t3.maxRetransmits)) throw new TypeError("cannot be ordered with maxPacketLifeTime or maxRetransmits");
    if (e3 || !t3.maxPacketLifeTime && !t3.maxRetransmits || (t3.ordered = false), t3.label && "string" != typeof t3.label) throw new TypeError("invalid params.label");
    if (t3.protocol && "string" != typeof t3.protocol) throw new TypeError("invalid params.protocol");
  }, M.validateSctpCapabilities = (t3) => {
    if ("object" != typeof t3) throw new TypeError("caps is not an object");
    if (!t3.numStreams || "object" != typeof t3.numStreams) throw new TypeError("missing caps.numStreams");
    ((t4) => {
      if ("object" != typeof t4) throw new TypeError("numStreams is not an object");
      if ("number" != typeof t4.OS) throw new TypeError("missing numStreams.OS");
      if ("number" != typeof t4.MIS) throw new TypeError("missing numStreams.MIS");
    })(t3.numStreams);
  }, M.getExtendedRtpCapabilities = (t3, e3, i3) => {
    const s3 = { codecs: [], headerExtensions: [] };
    if (i3) for (const r3 of t3.codecs ?? []) {
      if (u2(r3)) continue;
      const t4 = (e3.codecs ?? []).find((t5) => p3(t5, r3, { strict: true, modify: true }));
      if (!t4) continue;
      const i4 = { kind: r3.kind, mimeType: r3.mimeType, clockRate: r3.clockRate, channels: r3.channels, localPayloadType: r3.preferredPayloadType, localRtxPayloadType: void 0, remotePayloadType: t4.preferredPayloadType, remoteRtxPayloadType: void 0, localParameters: r3.parameters ?? {}, remoteParameters: t4.parameters ?? {}, rtcpFeedback: m3(r3, t4) };
      s3.codecs.push(i4);
    }
    else for (const r3 of e3.codecs ?? []) {
      if (u2(r3)) continue;
      const e4 = (t3.codecs ?? []).find((t4) => p3(t4, r3, { strict: true, modify: true }));
      if (!e4) continue;
      const i4 = { kind: e4.kind, mimeType: e4.mimeType, clockRate: e4.clockRate, channels: e4.channels, localPayloadType: e4.preferredPayloadType, localRtxPayloadType: void 0, remotePayloadType: r3.preferredPayloadType, remoteRtxPayloadType: void 0, localParameters: e4.parameters ?? {}, remoteParameters: r3.parameters ?? {}, rtcpFeedback: m3(e4, r3) };
      s3.codecs.push(i4);
    }
    for (const r3 of s3.codecs) {
      const i4 = t3.codecs.find((t4) => u2(t4) && t4.parameters?.apt === r3.localPayloadType), s4 = e3.codecs.find((t4) => u2(t4) && t4.parameters?.apt === r3.remotePayloadType);
      i4 && s4 && (r3.localRtxPayloadType = i4.preferredPayloadType, r3.remoteRtxPayloadType = s4.preferredPayloadType);
    }
    for (const r3 of e3.headerExtensions) {
      const e4 = t3.headerExtensions.find((t4) => {
        return i5 = r3, !((e5 = t4).kind && i5.kind && e5.kind !== i5.kind || e5.uri !== i5.uri);
        var e5, i5;
      });
      if (!e4) continue;
      const i4 = { kind: r3.kind, uri: r3.uri, sendId: e4.preferredId, recvId: r3.preferredId, encrypt: e4.preferredEncrypt ?? false, direction: "sendrecv" };
      switch (r3.direction) {
        case "sendrecv":
          i4.direction = "sendrecv";
          break;
        case "recvonly":
          i4.direction = "sendonly";
          break;
        case "sendonly":
          i4.direction = "recvonly";
          break;
        case "inactive":
          i4.direction = "inactive";
      }
      s3.headerExtensions.push(i4);
    }
    return s3;
  }, M.getRecvRtpCapabilities = (t3) => {
    const e3 = { codecs: [], headerExtensions: [] };
    for (const i3 of t3.codecs) e3.codecs.push({ kind: i3.kind, mimeType: i3.mimeType, preferredPayloadType: i3.remotePayloadType, clockRate: i3.clockRate, channels: i3.channels, parameters: i3.localParameters, rtcpFeedback: i3.rtcpFeedback }), i3.remoteRtxPayloadType && e3.codecs.push({ kind: i3.kind, mimeType: i3.kind + "/rtx", preferredPayloadType: i3.remoteRtxPayloadType, clockRate: i3.clockRate, parameters: { apt: i3.remotePayloadType }, rtcpFeedback: [] });
    for (const i3 of t3.headerExtensions) "sendrecv" !== i3.direction && "recvonly" !== i3.direction || e3.headerExtensions.push({ kind: i3.kind, uri: i3.uri, preferredId: i3.recvId, preferredEncrypt: i3.encrypt ?? false, direction: i3.direction });
    return e3;
  }, M.getSendingRtpParameters = (t3, e3) => {
    const i3 = { mid: void 0, codecs: [], headerExtensions: [], encodings: [], rtcp: {} };
    for (const s3 of e3.codecs) s3.kind === t3 && (i3.codecs.push({ mimeType: s3.mimeType, payloadType: s3.localPayloadType, clockRate: s3.clockRate, channels: s3.channels, parameters: s3.localParameters, rtcpFeedback: s3.rtcpFeedback }), s3.localRtxPayloadType && i3.codecs.push({ mimeType: s3.kind + "/rtx", payloadType: s3.localRtxPayloadType, clockRate: s3.clockRate, parameters: { apt: s3.localPayloadType }, rtcpFeedback: [] }));
    for (const s3 of e3.headerExtensions) s3.kind && s3.kind !== t3 || "sendrecv" !== s3.direction && "sendonly" !== s3.direction || i3.headerExtensions.push({ uri: s3.uri, id: s3.sendId, encrypt: s3.encrypt, parameters: {} });
    return i3;
  }, M.getSendingRemoteRtpParameters = (t3, e3) => {
    const i3 = { mid: void 0, codecs: [], headerExtensions: [], encodings: [], rtcp: {} };
    for (const s3 of e3.codecs) s3.kind === t3 && (i3.codecs.push({ mimeType: s3.mimeType, payloadType: s3.localPayloadType, clockRate: s3.clockRate, channels: s3.channels, parameters: s3.remoteParameters, rtcpFeedback: s3.rtcpFeedback }), s3.localRtxPayloadType && i3.codecs.push({ mimeType: s3.kind + "/rtx", payloadType: s3.localRtxPayloadType, clockRate: s3.clockRate, parameters: { apt: s3.localPayloadType }, rtcpFeedback: [] }));
    for (const s3 of e3.headerExtensions) s3.kind && s3.kind !== t3 || "sendrecv" !== s3.direction && "sendonly" !== s3.direction || i3.headerExtensions.push({ uri: s3.uri, id: s3.sendId, encrypt: s3.encrypt, parameters: {} });
    if (i3.headerExtensions.some((t4) => "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === t4.uri)) for (const s3 of i3.codecs) s3.rtcpFeedback = (s3.rtcpFeedback ?? []).filter((t4) => "goog-remb" !== t4.type);
    else if (i3.headerExtensions.some((t4) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === t4.uri)) for (const s3 of i3.codecs) s3.rtcpFeedback = (s3.rtcpFeedback ?? []).filter((t4) => "transport-cc" !== t4.type);
    else for (const s3 of i3.codecs) s3.rtcpFeedback = (s3.rtcpFeedback ?? []).filter((t4) => "transport-cc" !== t4.type && "goog-remb" !== t4.type);
    return i3;
  }, M.reduceCodecs = (t3, e3) => {
    const i3 = [];
    if (e3) {
      for (let s3 = 0; t3.length > s3; ++s3) if (p3(t3[s3], e3, { strict: true })) {
        i3.push(t3[s3]), u2(t3[s3 + 1]) && i3.push(t3[s3 + 1]);
        break;
      }
      if (0 === i3.length) throw new TypeError("no matching codec found");
    } else i3.push(t3[0]), u2(t3[1]) && i3.push(t3[1]);
    return i3;
  }, M.generateProbatorRtpParameters = (t3) => {
    o2(t3 = e2.clone(t3));
    const n3 = { mid: i2, codecs: [], headerExtensions: [], encodings: [{ ssrc: s2 }], rtcp: { cname: "probator" } };
    return n3.codecs.push(t3.codecs[0]), n3.codecs[0].payloadType = r2, n3.headerExtensions = t3.headerExtensions, n3;
  }, M.canSend = (t3, e3) => (e3.codecs ?? []).some((e4) => e4.kind === t3), M.canReceive = (t3, e3) => {
    if (o2(t3), 0 === t3.codecs.length) return false;
    const i3 = t3.codecs[0];
    return (e3.codecs ?? []).some((t4) => t4.preferredPayloadType === i3.payloadType);
  };
  const t2 = $(), e2 = P(), i2 = "probator", s2 = 1234, r2 = 127;
  function o2(t3) {
    if ("object" != typeof t3) throw new TypeError("params is not an object");
    if (t3.mid && "string" != typeof t3.mid) throw new TypeError("params.mid is not a string");
    if (!Array.isArray(t3.codecs)) throw new TypeError("missing params.codecs");
    for (const e3 of t3.codecs) h2(e3);
    if (t3.headerExtensions && !Array.isArray(t3.headerExtensions)) throw new TypeError("params.headerExtensions is not an array");
    t3.headerExtensions || (t3.headerExtensions = []);
    for (const e3 of t3.headerExtensions) d2(e3);
    if (t3.encodings && !Array.isArray(t3.encodings)) throw new TypeError("params.encodings is not an array");
    t3.encodings || (t3.encodings = []);
    for (const e3 of t3.encodings) l2(e3);
    if (t3.rtcp && "object" != typeof t3.rtcp) throw new TypeError("params.rtcp is not an object");
    t3.rtcp || (t3.rtcp = {}), ((t4) => {
      if ("object" != typeof t4) throw new TypeError("rtcp is not an object");
      if (t4.cname && "string" != typeof t4.cname) throw new TypeError("invalid rtcp.cname");
      t4.reducedSize && "boolean" == typeof t4.reducedSize || (t4.reducedSize = true);
    })(t3.rtcp);
  }
  function n2(t3) {
    const e3 = RegExp("^(audio|video)/(.+)", "i");
    if ("object" != typeof t3) throw new TypeError("codec is not an object");
    if (!t3.mimeType || "string" != typeof t3.mimeType) throw new TypeError("missing codec.mimeType");
    const i3 = e3.exec(t3.mimeType);
    if (!i3) throw new TypeError("invalid codec.mimeType");
    if (t3.kind = i3[1].toLowerCase(), "number" != typeof t3.preferredPayloadType) throw new TypeError("missing codec.preferredPayloadType");
    if ("number" != typeof t3.clockRate) throw new TypeError("missing codec.clockRate");
    "audio" === t3.kind ? "number" != typeof t3.channels && (t3.channels = 1) : delete t3.channels, t3.parameters && "object" == typeof t3.parameters || (t3.parameters = {});
    for (const s3 of Object.keys(t3.parameters)) {
      let e4 = t3.parameters[s3];
      if (void 0 === e4 && (t3.parameters[s3] = "", e4 = ""), "string" != typeof e4 && "number" != typeof e4) throw new TypeError(`invalid codec parameter [key:${s3}s, value:${e4}]`);
      if ("apt" === s3 && "number" != typeof e4) throw new TypeError("invalid codec apt parameter");
    }
    t3.rtcpFeedback && Array.isArray(t3.rtcpFeedback) || (t3.rtcpFeedback = []);
    for (const s3 of t3.rtcpFeedback) a2(s3);
  }
  function a2(t3) {
    if ("object" != typeof t3) throw new TypeError("fb is not an object");
    if (!t3.type || "string" != typeof t3.type) throw new TypeError("missing fb.type");
    t3.parameter && "string" == typeof t3.parameter || (t3.parameter = "");
  }
  function c2(t3) {
    if ("object" != typeof t3) throw new TypeError("ext is not an object");
    if ("audio" !== t3.kind && "video" !== t3.kind) throw new TypeError("invalid ext.kind");
    if (!t3.uri || "string" != typeof t3.uri) throw new TypeError("missing ext.uri");
    if ("number" != typeof t3.preferredId) throw new TypeError("missing ext.preferredId");
    if (t3.preferredEncrypt && "boolean" != typeof t3.preferredEncrypt) throw new TypeError("invalid ext.preferredEncrypt");
    if (t3.preferredEncrypt || (t3.preferredEncrypt = false), t3.direction && "string" != typeof t3.direction) throw new TypeError("invalid ext.direction");
    t3.direction || (t3.direction = "sendrecv");
  }
  function h2(t3) {
    const e3 = RegExp("^(audio|video)/(.+)", "i");
    if ("object" != typeof t3) throw new TypeError("codec is not an object");
    if (!t3.mimeType || "string" != typeof t3.mimeType) throw new TypeError("missing codec.mimeType");
    const i3 = e3.exec(t3.mimeType);
    if (!i3) throw new TypeError("invalid codec.mimeType");
    if ("number" != typeof t3.payloadType) throw new TypeError("missing codec.payloadType");
    if ("number" != typeof t3.clockRate) throw new TypeError("missing codec.clockRate");
    "audio" === i3[1].toLowerCase() ? "number" != typeof t3.channels && (t3.channels = 1) : delete t3.channels, t3.parameters && "object" == typeof t3.parameters || (t3.parameters = {});
    for (const s3 of Object.keys(t3.parameters)) {
      let e4 = t3.parameters[s3];
      if (void 0 === e4 && (t3.parameters[s3] = "", e4 = ""), "string" != typeof e4 && "number" != typeof e4) throw new TypeError(`invalid codec parameter [key:${s3}s, value:${e4}]`);
      if ("apt" === s3 && "number" != typeof e4) throw new TypeError("invalid codec apt parameter");
    }
    t3.rtcpFeedback && Array.isArray(t3.rtcpFeedback) || (t3.rtcpFeedback = []);
    for (const s3 of t3.rtcpFeedback) a2(s3);
  }
  function d2(t3) {
    if ("object" != typeof t3) throw new TypeError("ext is not an object");
    if (!t3.uri || "string" != typeof t3.uri) throw new TypeError("missing ext.uri");
    if ("number" != typeof t3.id) throw new TypeError("missing ext.id");
    if (t3.encrypt && "boolean" != typeof t3.encrypt) throw new TypeError("invalid ext.encrypt");
    t3.encrypt || (t3.encrypt = false), t3.parameters && "object" == typeof t3.parameters || (t3.parameters = {});
    for (const e3 of Object.keys(t3.parameters)) {
      let i3 = t3.parameters[e3];
      if (void 0 === i3 && (t3.parameters[e3] = "", i3 = ""), "string" != typeof i3 && "number" != typeof i3) throw new TypeError("invalid header extension parameter");
    }
  }
  function l2(t3) {
    if ("object" != typeof t3) throw new TypeError("encoding is not an object");
    if (t3.ssrc && "number" != typeof t3.ssrc) throw new TypeError("invalid encoding.ssrc");
    if (t3.rid && "string" != typeof t3.rid) throw new TypeError("invalid encoding.rid");
    if (t3.rtx && "object" != typeof t3.rtx) throw new TypeError("invalid encoding.rtx");
    if (t3.rtx && "number" != typeof t3.rtx.ssrc) throw new TypeError("missing encoding.rtx.ssrc");
    if (t3.dtx && "boolean" == typeof t3.dtx || (t3.dtx = false), t3.scalabilityMode && "string" != typeof t3.scalabilityMode) throw new TypeError("invalid encoding.scalabilityMode");
  }
  function u2(t3) {
    return !!t3 && /.+\/rtx$/i.test(t3.mimeType);
  }
  function p3(e3, i3, { strict: s3 = false, modify: r3 = false } = {}) {
    const o3 = e3.mimeType.toLowerCase();
    if (o3 !== i3.mimeType.toLowerCase()) return false;
    if (e3.clockRate !== i3.clockRate) return false;
    if (e3.channels !== i3.channels) return false;
    switch (o3) {
      case "video/h264":
        if (s3) {
          if ((e3.parameters["packetization-mode"] ?? 0) !== (i3.parameters["packetization-mode"] ?? 0)) return false;
          if (!t2.isSameProfile(e3.parameters, i3.parameters)) return false;
          let s4;
          try {
            s4 = t2.generateProfileLevelIdStringForAnswer(e3.parameters, i3.parameters);
          } catch (n3) {
            return false;
          }
          r3 && (s4 ? (e3.parameters["profile-level-id"] = s4, i3.parameters["profile-level-id"] = s4) : (delete e3.parameters["profile-level-id"], delete i3.parameters["profile-level-id"]));
        }
        break;
      case "video/vp9":
        if (s3 && (e3.parameters["profile-id"] ?? 0) !== (i3.parameters["profile-id"] ?? 0)) return false;
    }
    return true;
  }
  function m3(t3, e3) {
    const i3 = [];
    for (const s3 of t3.rtcpFeedback ?? []) {
      const t4 = (e3.rtcpFeedback ?? []).find((t5) => t5.type === s3.type && (t5.parameter === s3.parameter || !t5.parameter && !s3.parameter));
      t4 && i3.push(t4);
    }
    return i3;
  }
  return M;
}
var L;
var U = {};
var V = {};
var B = {};
var q = {};
function z() {
  if (L) return q;
  L = 1, Object.defineProperty(q, "h", { value: true }), q.Logger = void 0;
  const t2 = d(), e2 = "awaitqueue";
  return q.Logger = class {
    l;
    I;
    T;
    constructor(i2) {
      i2 ? (this.l = t2(`${e2}:${i2}`), this.I = t2(`${e2}:WARN:${i2}`), this.T = t2(`${e2}:ERROR:${i2}`)) : (this.l = t2(e2), this.I = t2(e2 + ":WARN"), this.T = t2(e2 + ":ERROR")), this.l.log = console.info.bind(console), this.I.log = console.warn.bind(console), this.T.log = console.error.bind(console);
    }
    get debug() {
      return this.l;
    }
    get warn() {
      return this.I;
    }
    get error() {
      return this.T;
    }
  }, q;
}
var G;
var W;
var H;
var J = {};
function K() {
  if (G) return J;
  G = 1, Object.defineProperty(J, "h", { value: true }), J.AwaitQueueRemovedTaskError = J.AwaitQueueStoppedError = void 0;
  class t2 extends Error {
    constructor(e3) {
      super(e3 ?? "queue stopped"), this.name = "AwaitQueueStoppedError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t2);
    }
  }
  J.AwaitQueueStoppedError = t2;
  class e2 extends Error {
    constructor(t3) {
      super(t3 ?? "queue task removed"), this.name = "AwaitQueueRemovedTaskError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e2);
    }
  }
  return J.AwaitQueueRemovedTaskError = e2, J;
}
function Y() {
  if (W) return B;
  W = 1, Object.defineProperty(B, "h", { value: true }), B.AwaitQueue = void 0;
  const t2 = z(), e2 = K(), i2 = new t2.Logger("AwaitQueue");
  return B.AwaitQueue = class {
    pendingTasks = /* @__PURE__ */ new Map();
    nextTaskId = 0;
    constructor() {
      i2.debug("constructor()");
    }
    get size() {
      return this.pendingTasks.size;
    }
    push(t3, s2, r2) {
      return __async(this, null, function* () {
        if (i2.debug(`push() [name:${s2 = s2 ?? t3.name}, options:%o]`, r2), "function" != typeof t3) throw new TypeError("given task is not a function");
        if (s2) try {
          Object.defineProperty(t3, "name", { value: s2 });
        } catch (o2) {
        }
        return new Promise((o2, n2) => {
          if (s2 && r2?.removeOngoingTasksWithSameName) for (const t4 of this.pendingTasks.values()) t4.name === s2 && t4.reject(new e2.AwaitQueueRemovedTaskError(), { canExecuteNextTask: false });
          const a2 = { id: this.nextTaskId++, task: t3, name: s2, enqueuedAt: Date.now(), executedAt: void 0, completed: false, resolve: (t4) => {
            if (a2.completed) return;
            a2.completed = true, this.pendingTasks.delete(a2.id), i2.debug(`resolving task [name:${a2.name}]`), o2(t4);
            const [e3] = this.pendingTasks.values();
            e3 && !e3.executedAt && this.execute(e3);
          }, reject: (t4, { canExecuteNextTask: e3 }) => {
            if (!a2.completed && (a2.completed = true, this.pendingTasks.delete(a2.id), i2.debug(`rejecting task [name:${a2.name}]: %s`, t4 + ""), n2(t4), e3)) {
              const [t5] = this.pendingTasks.values();
              t5 && !t5.executedAt && this.execute(t5);
            }
          } };
          this.pendingTasks.set(a2.id, a2), 1 === this.pendingTasks.size && this.execute(a2);
        });
      });
    }
    stop() {
      i2.debug("stop()");
      for (const t3 of this.pendingTasks.values()) i2.debug(`stop() | stopping task [name:${t3.name}]`), t3.reject(new e2.AwaitQueueStoppedError(), { canExecuteNextTask: false });
    }
    remove(t3) {
      i2.debug(`remove() [taskIdx:${t3}]`);
      const s2 = Array.from(this.pendingTasks.values())[t3];
      s2 ? s2.reject(new e2.AwaitQueueRemovedTaskError(), { canExecuteNextTask: true }) : i2.debug(`stop() | no task with given idx [taskIdx:${t3}]`);
    }
    dump() {
      const t3 = Date.now();
      let e3 = 0;
      return Array.from(this.pendingTasks.values()).map((i3) => ({ idx: e3++, task: i3.task, name: i3.name, enqueuedTime: i3.executedAt ? i3.executedAt - i3.enqueuedAt : t3 - i3.enqueuedAt, executionTime: i3.executedAt ? t3 - i3.executedAt : 0 }));
    }
    execute(t3) {
      return __async(this, null, function* () {
        if (i2.debug(`execute() [name:${t3.name}]`), t3.executedAt) throw Error("task already being executed");
        t3.executedAt = Date.now();
        try {
          const e3 = yield t3.task();
          t3.resolve(e3);
        } catch (e3) {
          t3.reject(e3, { canExecuteNextTask: true });
        }
      });
    }
  }, B;
}
function Q() {
  return H || (H = 1, ((t2) => {
    Object.defineProperty(t2, "h", { value: true }), t2.AwaitQueueRemovedTaskError = t2.AwaitQueueStoppedError = t2.AwaitQueue = void 0;
    var e2 = Y();
    Object.defineProperty(t2, "AwaitQueue", { enumerable: true, get() {
      return e2.AwaitQueue;
    } });
    var i2 = K();
    Object.defineProperty(t2, "AwaitQueueStoppedError", { enumerable: true, get() {
      return i2.AwaitQueueStoppedError;
    } }), Object.defineProperty(t2, "AwaitQueueRemovedTaskError", { enumerable: true, get() {
      return i2.AwaitQueueRemovedTaskError;
    } });
  })(V)), V;
}
var X;
var Z = {};
function tt() {
  if (X) return Z;
  X = 1, Object.defineProperty(Z, "h", { value: true }), Z.Producer = void 0;
  const t2 = g(), e2 = T(), i2 = k(), s2 = new t2.Logger("Producer");
  return Z.Producer = class extends e2.EnhancedEventEmitter {
    C;
    _;
    P = false;
    D;
    O;
    M;
    A;
    N;
    $;
    F;
    L;
    U;
    V;
    B = new e2.EnhancedEventEmitter();
    constructor({ id: t3, localId: e3, rtpSender: i3, track: r2, rtpParameters: o2, stopTracks: n2, disableTrackOnPause: a2, zeroRtpOnPause: c2, appData: h2 }) {
      super(), s2.debug("constructor()"), this.C = t3, this._ = e3, this.D = i3, this.O = r2, this.M = r2.kind, this.A = o2, this.N = !!a2 && !r2.enabled, this.$ = void 0, this.F = n2, this.L = a2, this.U = c2, this.V = h2 ?? {}, this.onTrackEnded = this.onTrackEnded.bind(this), this.handleTrack();
    }
    get id() {
      return this.C;
    }
    get localId() {
      return this._;
    }
    get closed() {
      return this.P;
    }
    get kind() {
      return this.M;
    }
    get rtpSender() {
      return this.D;
    }
    get track() {
      return this.O;
    }
    get rtpParameters() {
      return this.A;
    }
    get paused() {
      return this.N;
    }
    get maxSpatialLayer() {
      return this.$;
    }
    get appData() {
      return this.V;
    }
    set appData(t3) {
      this.V = t3;
    }
    get observer() {
      return this.B;
    }
    close() {
      this.P || (s2.debug("close()"), this.P = true, this.destroyTrack(), this.emit("@close"), this.B.safeEmit("close"), super.close(), this.B.close());
    }
    transportClosed() {
      this.P || (s2.debug("transportClosed()"), this.P = true, this.destroyTrack(), this.safeEmit("transportclose"), this.B.safeEmit("close"));
    }
    getStats() {
      return __async(this, null, function* () {
        if (this.P) throw new i2.InvalidStateError("closed");
        return new Promise((t3, e3) => {
          this.safeEmit("@getstats", t3, e3);
        });
      });
    }
    pause() {
      s2.debug("pause()"), this.P ? s2.error("pause() | Producer closed") : (this.N = true, this.O && this.L && (this.O.enabled = false), this.U && new Promise((t3, e3) => {
        this.safeEmit("@pause", t3, e3);
      }).catch(() => {
      }), this.B.safeEmit("pause"));
    }
    resume() {
      s2.debug("resume()"), this.P ? s2.error("resume() | Producer closed") : (this.N = false, this.O && this.L && (this.O.enabled = true), this.U && new Promise((t3, e3) => {
        this.safeEmit("@resume", t3, e3);
      }).catch(() => {
      }), this.B.safeEmit("resume"));
    }
    replaceTrack(_0) {
      return __async(this, arguments, function* ({ track: t3 }) {
        if (s2.debug("replaceTrack() [track:%o]", t3), this.P) {
          if (t3 && this.F) try {
            t3.stop();
          } catch (e3) {
          }
          throw new i2.InvalidStateError("closed");
        }
        if ("ended" === t3?.readyState) throw new i2.InvalidStateError("track ended");
        t3 !== this.O ? (yield new Promise((e3, i3) => {
          this.safeEmit("@replacetrack", t3, e3, i3);
        }), this.destroyTrack(), this.O = t3, this.O && this.L && (this.N ? this.N && (this.O.enabled = false) : this.O.enabled = true), this.handleTrack()) : s2.debug("replaceTrack() | same track, ignored");
      });
    }
    setMaxSpatialLayer(t3) {
      return __async(this, null, function* () {
        if (this.P) throw new i2.InvalidStateError("closed");
        if ("video" !== this.M) throw new i2.UnsupportedError("not a video Producer");
        if ("number" != typeof t3) throw new TypeError("invalid spatialLayer");
        t3 !== this.$ && (yield new Promise((e3, i3) => {
          this.safeEmit("@setmaxspatiallayer", t3, e3, i3);
        }).catch(() => {
        }), this.$ = t3);
      });
    }
    setRtpEncodingParameters(t3) {
      return __async(this, null, function* () {
        if (this.P) throw new i2.InvalidStateError("closed");
        if ("object" != typeof t3) throw new TypeError("invalid params");
        yield new Promise((e3, i3) => {
          this.safeEmit("@setrtpencodingparameters", t3, e3, i3);
        });
      });
    }
    onTrackEnded() {
      s2.debug('track "ended" event'), this.safeEmit("trackended"), this.B.safeEmit("trackended");
    }
    handleTrack() {
      this.O && this.O.addEventListener("ended", this.onTrackEnded);
    }
    destroyTrack() {
      if (this.O) try {
        this.O.removeEventListener("ended", this.onTrackEnded), this.F && this.O.stop();
      } catch (t3) {
      }
    }
  }, Z;
}
var et;
var it = {};
function st() {
  if (et) return it;
  et = 1, Object.defineProperty(it, "h", { value: true }), it.Consumer = void 0;
  const t2 = g(), e2 = T(), i2 = k(), s2 = new t2.Logger("Consumer");
  return it.Consumer = class extends e2.EnhancedEventEmitter {
    C;
    _;
    q;
    P = false;
    G;
    O;
    A;
    N;
    V;
    B = new e2.EnhancedEventEmitter();
    constructor({ id: t3, localId: e3, producerId: i3, rtpReceiver: r2, track: o2, rtpParameters: n2, appData: a2 }) {
      super(), s2.debug("constructor()"), this.C = t3, this._ = e3, this.q = i3, this.G = r2, this.O = o2, this.A = n2, this.N = !o2.enabled, this.V = a2 ?? {}, this.onTrackEnded = this.onTrackEnded.bind(this), this.handleTrack();
    }
    get id() {
      return this.C;
    }
    get localId() {
      return this._;
    }
    get producerId() {
      return this.q;
    }
    get closed() {
      return this.P;
    }
    get kind() {
      return this.O.kind;
    }
    get rtpReceiver() {
      return this.G;
    }
    get track() {
      return this.O;
    }
    get rtpParameters() {
      return this.A;
    }
    get paused() {
      return this.N;
    }
    get appData() {
      return this.V;
    }
    set appData(t3) {
      this.V = t3;
    }
    get observer() {
      return this.B;
    }
    close() {
      this.P || (s2.debug("close()"), this.P = true, this.destroyTrack(), this.emit("@close"), this.B.safeEmit("close"), super.close(), this.B.close());
    }
    transportClosed() {
      this.P || (s2.debug("transportClosed()"), this.P = true, this.destroyTrack(), this.safeEmit("transportclose"), this.B.safeEmit("close"));
    }
    getStats() {
      return __async(this, null, function* () {
        if (this.P) throw new i2.InvalidStateError("closed");
        return new Promise((t3, e3) => {
          this.safeEmit("@getstats", t3, e3);
        });
      });
    }
    pause() {
      s2.debug("pause()"), this.P ? s2.error("pause() | Consumer closed") : this.N ? s2.debug("pause() | Consumer is already paused") : (this.N = true, this.O.enabled = false, this.emit("@pause"), this.B.safeEmit("pause"));
    }
    resume() {
      s2.debug("resume()"), this.P ? s2.error("resume() | Consumer closed") : this.N ? (this.N = false, this.O.enabled = true, this.emit("@resume"), this.B.safeEmit("resume")) : s2.debug("resume() | Consumer is already resumed");
    }
    onTrackEnded() {
      s2.debug('track "ended" event'), this.safeEmit("trackended"), this.B.safeEmit("trackended");
    }
    handleTrack() {
      this.O.addEventListener("ended", this.onTrackEnded);
    }
    destroyTrack() {
      try {
        this.O.removeEventListener("ended", this.onTrackEnded), this.O.stop();
      } catch (t3) {
      }
    }
  }, it;
}
var rt;
var ot = {};
function nt() {
  if (rt) return ot;
  rt = 1, Object.defineProperty(ot, "h", { value: true }), ot.DataProducer = void 0;
  const t2 = g(), e2 = T(), i2 = k(), s2 = new t2.Logger("DataProducer");
  return ot.DataProducer = class extends e2.EnhancedEventEmitter {
    C;
    W;
    P = false;
    H;
    V;
    B = new e2.EnhancedEventEmitter();
    constructor({ id: t3, dataChannel: e3, sctpStreamParameters: i3, appData: r2 }) {
      super(), s2.debug("constructor()"), this.C = t3, this.W = e3, this.H = i3, this.V = r2 ?? {}, this.handleDataChannel();
    }
    get id() {
      return this.C;
    }
    get closed() {
      return this.P;
    }
    get sctpStreamParameters() {
      return this.H;
    }
    get readyState() {
      return this.W.readyState;
    }
    get label() {
      return this.W.label;
    }
    get protocol() {
      return this.W.protocol;
    }
    get bufferedAmount() {
      return this.W.bufferedAmount;
    }
    get bufferedAmountLowThreshold() {
      return this.W.bufferedAmountLowThreshold;
    }
    set bufferedAmountLowThreshold(t3) {
      this.W.bufferedAmountLowThreshold = t3;
    }
    get appData() {
      return this.V;
    }
    set appData(t3) {
      this.V = t3;
    }
    get observer() {
      return this.B;
    }
    close() {
      this.P || (s2.debug("close()"), this.P = true, this.W.close(), this.emit("@close"), this.B.safeEmit("close"), super.close(), this.B.close());
    }
    transportClosed() {
      this.P || (s2.debug("transportClosed()"), this.P = true, this.W.close(), this.safeEmit("transportclose"), this.B.safeEmit("close"));
    }
    send(t3) {
      if (s2.debug("send()"), this.P) throw new i2.InvalidStateError("closed");
      this.W.send(t3);
    }
    handleDataChannel() {
      this.W.addEventListener("open", () => {
        this.P || (s2.debug('DataChannel "open" event'), this.safeEmit("open"));
      }), this.W.addEventListener("error", (t3) => {
        if (this.P) return;
        const e3 = t3.error ?? Error("unknown DataChannel error");
        "sctp-failure" === t3.error?.errorDetail ? s2.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", t3.error?.sctpCauseCode, t3.error.message) : s2.error('DataChannel "error" event: %o', e3), this.safeEmit("error", e3);
      }), this.W.addEventListener("close", () => {
        this.P || (s2.warn('DataChannel "close" event'), this.P = true, this.emit("@close"), this.safeEmit("close"), this.B.safeEmit("close"));
      }), this.W.addEventListener("message", () => {
        this.P || s2.warn('DataChannel "message" event in a DataProducer, message discarded');
      }), this.W.addEventListener("bufferedamountlow", () => {
        this.P || this.safeEmit("bufferedamountlow");
      });
    }
  }, ot;
}
var at;
var ct;
var ht = {};
function dt() {
  if (at) return ht;
  at = 1, Object.defineProperty(ht, "h", { value: true }), ht.DataConsumer = void 0;
  const t2 = g(), e2 = T(), i2 = new t2.Logger("DataConsumer");
  return ht.DataConsumer = class extends e2.EnhancedEventEmitter {
    C;
    J;
    W;
    P = false;
    H;
    V;
    B = new e2.EnhancedEventEmitter();
    constructor({ id: t3, dataProducerId: e3, dataChannel: s2, sctpStreamParameters: r2, appData: o2 }) {
      super(), i2.debug("constructor()"), this.C = t3, this.J = e3, this.W = s2, this.H = r2, this.V = o2 ?? {}, this.handleDataChannel();
    }
    get id() {
      return this.C;
    }
    get dataProducerId() {
      return this.J;
    }
    get closed() {
      return this.P;
    }
    get sctpStreamParameters() {
      return this.H;
    }
    get readyState() {
      return this.W.readyState;
    }
    get label() {
      return this.W.label;
    }
    get protocol() {
      return this.W.protocol;
    }
    get binaryType() {
      return this.W.binaryType;
    }
    set binaryType(t3) {
      this.W.binaryType = t3;
    }
    get appData() {
      return this.V;
    }
    set appData(t3) {
      this.V = t3;
    }
    get observer() {
      return this.B;
    }
    close() {
      this.P || (i2.debug("close()"), this.P = true, this.W.close(), this.emit("@close"), this.B.safeEmit("close"), super.close(), this.B.close());
    }
    transportClosed() {
      this.P || (i2.debug("transportClosed()"), this.P = true, this.W.close(), this.safeEmit("transportclose"), this.B.safeEmit("close"));
    }
    handleDataChannel() {
      this.W.addEventListener("open", () => {
        this.P || (i2.debug('DataChannel "open" event'), this.safeEmit("open"));
      }), this.W.addEventListener("error", (t3) => {
        if (this.P) return;
        const e3 = t3.error ?? Error("unknown DataChannel error");
        "sctp-failure" === t3.error?.errorDetail ? i2.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", t3.error?.sctpCauseCode, t3.error.message) : i2.error('DataChannel "error" event: %o', e3), this.safeEmit("error", e3);
      }), this.W.addEventListener("close", () => {
        this.P || (i2.warn('DataChannel "close" event'), this.P = true, this.emit("@close"), this.safeEmit("close"), this.B.safeEmit("close"));
      }), this.W.addEventListener("message", (t3) => {
        this.P || this.safeEmit("message", t3.data);
      });
    }
  }, ht;
}
function lt() {
  if (ct) return U;
  ct = 1, Object.defineProperty(U, "h", { value: true }), U.Transport = void 0;
  const t2 = Q(), e2 = g(), i2 = T(), s2 = k(), r2 = P(), o2 = F(), n2 = tt(), a2 = st(), c2 = nt(), h2 = dt(), d2 = new e2.Logger("Transport");
  class l2 {
    consumerOptions;
    promise;
    resolve;
    reject;
    constructor(t3) {
      this.consumerOptions = t3, this.promise = new Promise((t4, e3) => {
        this.resolve = t4, this.reject = e3;
      });
    }
  }
  return U.Transport = class extends i2.EnhancedEventEmitter {
    C;
    P = false;
    K;
    Y;
    X;
    Z;
    tt;
    et;
    it = "new";
    st = "new";
    V;
    rt = /* @__PURE__ */ new Map();
    ot = /* @__PURE__ */ new Map();
    nt = /* @__PURE__ */ new Map();
    ct = /* @__PURE__ */ new Map();
    ht = false;
    dt = new t2.AwaitQueue();
    lt = [];
    ut = false;
    ft = /* @__PURE__ */ new Map();
    wt = false;
    gt = /* @__PURE__ */ new Map();
    yt = false;
    vt = /* @__PURE__ */ new Map();
    bt = false;
    B = new i2.EnhancedEventEmitter();
    constructor({ direction: t3, id: e3, iceParameters: i3, iceCandidates: s3, dtlsParameters: o3, sctpParameters: n3, iceServers: a3, iceTransportPolicy: c3, additionalSettings: h3, appData: l3, handlerFactory: u2, getSendExtendedRtpCapabilities: p3, recvRtpCapabilities: m3, canProduceByKind: f3 }) {
      super(), d2.debug("constructor() [id:%s, direction:%s]", e3, t3), this.C = e3, this.K = t3, this.Y = p3, this.X = m3, this.Z = f3, this.tt = n3 ? n3.maxMessageSize : null;
      const w3 = r2.clone(h3) ?? {};
      delete w3.iceServers, delete w3.iceTransportPolicy, delete w3.bundlePolicy, delete w3.rtcpMuxPolicy, this.et = u2.factory({ direction: t3, iceParameters: i3, iceCandidates: s3, dtlsParameters: o3, sctpParameters: n3, iceServers: a3, iceTransportPolicy: c3, additionalSettings: w3, getSendExtendedRtpCapabilities: this.Y }), this.V = l3 ?? {}, this.handleHandler();
    }
    get id() {
      return this.C;
    }
    get closed() {
      return this.P;
    }
    get direction() {
      return this.K;
    }
    get handler() {
      return this.et;
    }
    get iceGatheringState() {
      return this.it;
    }
    get connectionState() {
      return this.st;
    }
    get appData() {
      return this.V;
    }
    set appData(t3) {
      this.V = t3;
    }
    get observer() {
      return this.B;
    }
    close() {
      if (!this.P) {
        d2.debug("close()"), this.P = true, this.dt.stop(), this.et.close(), this.st = "closed";
        for (const t3 of this.rt.values()) t3.transportClosed();
        this.rt.clear();
        for (const t3 of this.ot.values()) t3.transportClosed();
        this.ot.clear();
        for (const t3 of this.nt.values()) t3.transportClosed();
        this.nt.clear();
        for (const t3 of this.ct.values()) t3.transportClosed();
        this.ct.clear(), this.B.safeEmit("close"), super.close(), this.B.close();
      }
    }
    getStats() {
      return __async(this, null, function* () {
        if (this.P) throw new s2.InvalidStateError("closed");
        return this.et.getTransportStats();
      });
    }
    restartIce(_0) {
      return __async(this, arguments, function* ({ iceParameters: t3 }) {
        if (d2.debug("restartIce()"), this.P) throw new s2.InvalidStateError("closed");
        if (!t3) throw new TypeError("missing iceParameters");
        return this.dt.push(() => __async(this, null, function* () {
          return yield this.et.restartIce(t3);
        }), "transport.restartIce()");
      });
    }
    updateIceServers() {
      return __async(this, arguments, function* ({ iceServers: t3 } = {}) {
        if (d2.debug("updateIceServers()"), this.P) throw new s2.InvalidStateError("closed");
        if (!Array.isArray(t3)) throw new TypeError("missing iceServers");
        return this.dt.push(() => __async(this, null, function* () {
          return this.et.updateIceServers(t3);
        }), "transport.updateIceServers()");
      });
    }
    produce() {
      return __async(this, arguments, function* ({ track: t3, streamId: e3, encodings: i3, codecOptions: r3, headerExtensionOptions: a3, codec: c3, stopTracks: h3 = true, disableTrackOnPause: l3 = true, zeroRtpOnPause: u2 = false, onRtpSender: p3, appData: m3 = {} } = {}) {
        if (d2.debug("produce() [track:%o]", t3), this.P) throw new s2.InvalidStateError("closed");
        if (!t3) throw new TypeError("missing track");
        if ("send" !== this.K) throw new s2.UnsupportedError("not a sending Transport");
        if (!this.Z[t3.kind]) throw new s2.UnsupportedError("cannot produce " + t3.kind);
        if ("ended" === t3.readyState) throw new s2.InvalidStateError("track ended");
        if (0 === this.listenerCount("connect") && "new" === this.st) throw new TypeError('no "connect" listener set into this transport');
        if (0 === this.listenerCount("produce")) throw new TypeError('no "produce" listener set into this transport');
        if (m3 && "object" != typeof m3) throw new TypeError("if given, appData must be an object");
        return this.dt.push(() => __async(this, null, function* () {
          let s3;
          if (i3 && !Array.isArray(i3)) throw TypeError("encodings must be an array");
          0 === i3?.length ? s3 = void 0 : i3 && (s3 = i3.map((t4) => {
            const e4 = { active: true };
            return false === t4.active && (e4.active = false), "boolean" == typeof t4.dtx && (e4.dtx = t4.dtx), "string" == typeof t4.scalabilityMode && (e4.scalabilityMode = t4.scalabilityMode), "number" == typeof t4.scaleResolutionDownBy && (e4.scaleResolutionDownBy = t4.scaleResolutionDownBy), "number" == typeof t4.maxBitrate && (e4.maxBitrate = t4.maxBitrate), "number" == typeof t4.maxFramerate && (e4.maxFramerate = t4.maxFramerate), "boolean" == typeof t4.adaptivePtime && (e4.adaptivePtime = t4.adaptivePtime), "string" == typeof t4.priority && (e4.priority = t4.priority), "string" == typeof t4.networkPriority && (e4.networkPriority = t4.networkPriority), e4;
          }));
          const { localId: d3, rtpParameters: f3, rtpSender: w3 } = yield this.et.send({ track: t3, streamId: e3, encodings: s3, codecOptions: r3, headerExtensionOptions: a3, codec: c3, onRtpSender: p3 });
          try {
            o2.validateAndNormalizeRtpParameters(f3);
            const { id: e4 } = yield new Promise((e5, i5) => {
              this.safeEmit("produce", { kind: t3.kind, rtpParameters: f3, appData: m3 }, e5, i5);
            }), i4 = new n2.Producer({ id: e4, localId: d3, rtpSender: w3, track: t3, rtpParameters: f3, stopTracks: h3, disableTrackOnPause: l3, zeroRtpOnPause: u2, appData: m3 });
            return this.rt.set(i4.id, i4), this.handleProducer(i4), this.B.safeEmit("newproducer", i4), i4;
          } catch (g3) {
            throw this.et.stopSending(d3).catch(() => {
            }), g3;
          }
        }), "transport.produce()").catch((e4) => {
          if (h3) try {
            t3.stop();
          } catch (i4) {
          }
          throw e4;
        });
      });
    }
    consume(_0) {
      return __async(this, arguments, function* ({ id: t3, producerId: e3, kind: i3, rtpParameters: n3, streamId: a3, onRtpReceiver: c3, appData: h3 = {} }) {
        if (d2.debug("consume()"), this.P) throw new s2.InvalidStateError("closed");
        if ("recv" !== this.K) throw new s2.UnsupportedError("not a receiving Transport");
        if ("string" != typeof t3) throw new TypeError("missing id");
        if ("string" != typeof e3) throw new TypeError("missing producerId");
        if ("audio" !== i3 && "video" !== i3) throw new TypeError(`invalid kind '${i3}'`);
        if (0 === this.listenerCount("connect") && "new" === this.st) throw new TypeError('no "connect" listener set into this transport');
        if (h3 && "object" != typeof h3) throw new TypeError("if given, appData must be an object");
        const u2 = r2.clone(n3);
        if (!o2.canReceive(u2, this.X)) throw new s2.UnsupportedError("cannot consume this Producer");
        const p3 = new l2({ id: t3, producerId: e3, kind: i3, rtpParameters: u2, streamId: a3, onRtpReceiver: c3, appData: h3 });
        return this.lt.push(p3), queueMicrotask(() => {
          this.P || false === this.ut && this.createPendingConsumers();
        }), p3.promise;
      });
    }
    produceData() {
      return __async(this, arguments, function* ({ ordered: t3 = true, maxPacketLifeTime: e3, maxRetransmits: i3, label: r3 = "", protocol: n3 = "", appData: a3 = {} } = {}) {
        if (d2.debug("produceData()"), this.P) throw new s2.InvalidStateError("closed");
        if ("send" !== this.K) throw new s2.UnsupportedError("not a sending Transport");
        if (!this.tt) throw new s2.UnsupportedError("SCTP not enabled by remote Transport");
        if (0 === this.listenerCount("connect") && "new" === this.st) throw new TypeError('no "connect" listener set into this transport');
        if (0 === this.listenerCount("producedata")) throw new TypeError('no "producedata" listener set into this transport');
        if (a3 && "object" != typeof a3) throw new TypeError("if given, appData must be an object");
        return (e3 || i3) && (t3 = false), this.dt.push(() => __async(this, null, function* () {
          const { dataChannel: s3, sctpStreamParameters: h3 } = yield this.et.sendDataChannel({ ordered: t3, maxPacketLifeTime: e3, maxRetransmits: i3, label: r3, protocol: n3 });
          o2.validateAndNormalizeSctpStreamParameters(h3);
          const { id: d3 } = yield new Promise((t4, e4) => {
            this.safeEmit("producedata", { sctpStreamParameters: h3, label: r3, protocol: n3, appData: a3 }, t4, e4);
          }), l3 = new c2.DataProducer({ id: d3, dataChannel: s3, sctpStreamParameters: h3, appData: a3 });
          return this.nt.set(l3.id, l3), this.handleDataProducer(l3), this.B.safeEmit("newdataproducer", l3), l3;
        }), "transport.produceData()");
      });
    }
    consumeData(_0) {
      return __async(this, arguments, function* ({ id: t3, dataProducerId: e3, sctpStreamParameters: i3, label: n3 = "", protocol: a3 = "", appData: c3 = {} }) {
        if (d2.debug("consumeData()"), this.P) throw new s2.InvalidStateError("closed");
        if ("recv" !== this.K) throw new s2.UnsupportedError("not a receiving Transport");
        if (!this.tt) throw new s2.UnsupportedError("SCTP not enabled by remote Transport");
        if ("string" != typeof t3) throw new TypeError("missing id");
        if ("string" != typeof e3) throw new TypeError("missing dataProducerId");
        if (0 === this.listenerCount("connect") && "new" === this.st) throw new TypeError('no "connect" listener set into this transport');
        if (c3 && "object" != typeof c3) throw new TypeError("if given, appData must be an object");
        const l3 = r2.clone(i3);
        return o2.validateAndNormalizeSctpStreamParameters(l3), this.dt.push(() => __async(this, null, function* () {
          const { dataChannel: i4 } = yield this.et.receiveDataChannel({ sctpStreamParameters: l3, label: n3, protocol: a3 }), s3 = new h2.DataConsumer({ id: t3, dataProducerId: e3, dataChannel: i4, sctpStreamParameters: l3, appData: c3 });
          return this.ct.set(s3.id, s3), this.handleDataConsumer(s3), this.B.safeEmit("newdataconsumer", s3), s3;
        }), "transport.consumeData()");
      });
    }
    createPendingConsumers() {
      this.ut = true, this.dt.push(() => __async(this, null, function* () {
        if (0 === this.lt.length) return void d2.debug("createPendingConsumers() | there is no Consumer to be created");
        const t3 = [...this.lt];
        let e3;
        this.lt = [];
        const i3 = [];
        for (const r3 of t3) {
          const { id: t4, kind: e4, rtpParameters: s3, streamId: o3, onRtpReceiver: n3 } = r3.consumerOptions;
          i3.push({ trackId: t4, kind: e4, rtpParameters: s3, streamId: o3, onRtpReceiver: n3 });
        }
        try {
          const s3 = yield this.et.receive(i3);
          for (let i4 = 0; s3.length > i4; ++i4) {
            const r3 = t3[i4], o3 = s3[i4], { id: n3, producerId: c3, kind: h3, rtpParameters: d3, appData: l3 } = r3.consumerOptions, { localId: u2, rtpReceiver: p3, track: m3 } = o3, f3 = new a2.Consumer({ id: n3, localId: u2, producerId: c3, rtpReceiver: p3, track: m3, rtpParameters: d3, appData: l3 });
            this.ot.set(f3.id, f3), this.handleConsumer(f3), this.ht || e3 || "video" !== h3 || (e3 = f3), this.B.safeEmit("newconsumer", f3), r3.resolve(f3);
          }
        } catch (s3) {
          for (const e4 of t3) e4.reject(s3);
        }
        if (e3) try {
          const t4 = o2.generateProbatorRtpParameters(e3.rtpParameters);
          yield this.et.receive([{ trackId: "probator", kind: "video", rtpParameters: t4 }]), d2.debug("createPendingConsumers() | Consumer for RTP probation created"), this.ht = true;
        } catch (s3) {
          d2.error("createPendingConsumers() | failed to create Consumer for RTP probation:%o", s3);
        }
      }), "transport.createPendingConsumers()").then(() => {
        this.ut = false, this.lt.length > 0 && this.createPendingConsumers();
      }).catch(() => {
      });
    }
    pausePendingConsumers() {
      this.wt = true, this.dt.push(() => __async(this, null, function* () {
        if (0 === this.ft.size) return void d2.debug("pausePendingConsumers() | there is no Consumer to be paused");
        const t3 = Array.from(this.ft.values());
        this.ft.clear();
        try {
          const e3 = t3.map((t4) => t4.localId);
          yield this.et.pauseReceiving(e3);
        } catch (e3) {
          d2.error("pausePendingConsumers() | failed to pause Consumers:", e3);
        }
      }), "transport.pausePendingConsumers()").then(() => {
        this.wt = false, this.ft.size > 0 && this.pausePendingConsumers();
      }).catch(() => {
      });
    }
    resumePendingConsumers() {
      this.yt = true, this.dt.push(() => __async(this, null, function* () {
        if (0 === this.gt.size) return void d2.debug("resumePendingConsumers() | there is no Consumer to be resumed");
        const t3 = Array.from(this.gt.values());
        this.gt.clear();
        try {
          const e3 = t3.map((t4) => t4.localId);
          yield this.et.resumeReceiving(e3);
        } catch (e3) {
          d2.error("resumePendingConsumers() | failed to resume Consumers:", e3);
        }
      }), "transport.resumePendingConsumers()").then(() => {
        this.yt = false, this.gt.size > 0 && this.resumePendingConsumers();
      }).catch(() => {
      });
    }
    closePendingConsumers() {
      this.bt = true, this.dt.push(() => __async(this, null, function* () {
        if (0 === this.vt.size) return void d2.debug("closePendingConsumers() | there is no Consumer to be closed");
        const t3 = Array.from(this.vt.values());
        this.vt.clear();
        try {
          yield this.et.stopReceiving(t3.map((t4) => t4.localId));
        } catch (e3) {
          d2.error("closePendingConsumers() | failed to close Consumers:", e3);
        }
      }), "transport.closePendingConsumers()").then(() => {
        this.bt = false, this.vt.size > 0 && this.closePendingConsumers();
      }).catch(() => {
      });
    }
    handleHandler() {
      const t3 = this.et;
      t3.on("@connect", ({ dtlsParameters: t4 }, e3, i3) => {
        this.P ? i3(new s2.InvalidStateError("closed")) : this.safeEmit("connect", { dtlsParameters: t4 }, e3, i3);
      }), t3.on("@icegatheringstatechange", (t4) => {
        t4 !== this.it && (d2.debug("ICE gathering state changed to %s", t4), this.it = t4, this.P || this.safeEmit("icegatheringstatechange", t4));
      }), t3.on("@icecandidateerror", (t4) => {
        d2.warn(`ICE candidate error [url:${t4.url}, localAddress:${t4.address}, localPort:${t4.port}]: ${t4.errorCode} "${t4.errorText}"`), this.safeEmit("icecandidateerror", t4);
      }), t3.on("@connectionstatechange", (t4) => {
        t4 !== this.st && (d2.debug("connection state changed to %s", t4), this.st = t4, this.P || this.safeEmit("connectionstatechange", t4));
      });
    }
    handleProducer(t3) {
      t3.on("@close", () => {
        this.rt.delete(t3.id), this.P || this.dt.push(() => __async(this, null, function* () {
          return yield this.et.stopSending(t3.localId);
        }), "producer @close event").catch((t4) => d2.warn("producer.close() failed:%o", t4));
      }), t3.on("@pause", (e3, i3) => {
        this.dt.push(() => __async(this, null, function* () {
          return yield this.et.pauseSending(t3.localId);
        }), "producer @pause event").then(e3).catch(i3);
      }), t3.on("@resume", (e3, i3) => {
        this.dt.push(() => __async(this, null, function* () {
          return yield this.et.resumeSending(t3.localId);
        }), "producer @resume event").then(e3).catch(i3);
      }), t3.on("@replacetrack", (e3, i3, s3) => {
        this.dt.push(() => __async(this, null, function* () {
          return yield this.et.replaceTrack(t3.localId, e3);
        }), "producer @replacetrack event").then(i3).catch(s3);
      }), t3.on("@setmaxspatiallayer", (e3, i3, s3) => {
        this.dt.push(() => __async(this, null, function* () {
          return yield this.et.setMaxSpatialLayer(t3.localId, e3);
        }), "producer @setmaxspatiallayer event").then(i3).catch(s3);
      }), t3.on("@setrtpencodingparameters", (e3, i3, s3) => {
        this.dt.push(() => __async(this, null, function* () {
          return yield this.et.setRtpEncodingParameters(t3.localId, e3);
        }), "producer @setrtpencodingparameters event").then(i3).catch(s3);
      }), t3.on("@getstats", (e3, i3) => {
        if (this.P) return i3(new s2.InvalidStateError("closed"));
        this.et.getSenderStats(t3.localId).then(e3).catch(i3);
      });
    }
    handleConsumer(t3) {
      t3.on("@close", () => {
        this.ot.delete(t3.id), this.ft.delete(t3.id), this.gt.delete(t3.id), this.P || (this.vt.set(t3.id, t3), false === this.bt && this.closePendingConsumers());
      }), t3.on("@pause", () => {
        this.gt.has(t3.id) && this.gt.delete(t3.id), this.ft.set(t3.id, t3), queueMicrotask(() => {
          this.P || false === this.wt && this.pausePendingConsumers();
        });
      }), t3.on("@resume", () => {
        this.ft.has(t3.id) && this.ft.delete(t3.id), this.gt.set(t3.id, t3), queueMicrotask(() => {
          this.P || false === this.yt && this.resumePendingConsumers();
        });
      }), t3.on("@getstats", (e3, i3) => {
        if (this.P) return i3(new s2.InvalidStateError("closed"));
        this.et.getReceiverStats(t3.localId).then(e3).catch(i3);
      });
    }
    handleDataProducer(t3) {
      t3.on("@close", () => {
        this.nt.delete(t3.id);
      });
    }
    handleDataConsumer(t3) {
      t3.on("@close", () => {
        this.ct.delete(t3.id);
      });
    }
  }, U;
}
var ut;
var pt;
var mt;
var ft;
var wt;
var gt = {};
var yt = {};
var vt = {};
var bt = { exports: {} };
function Et() {
  if (ut) return bt.exports;
  ut = 1;
  var t2 = bt.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format(t3) {
    return t3.encoding ? "rtpmap:%d %s/%s/%s" : t3.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
  } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format(t3) {
    return null != t3.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
  } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format(t3) {
    return null != t3.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
  } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/, names: ["value", "direction", "encrypt-uri", "uri", "config"], format(t3) {
    return "extmap:%d" + (t3.direction ? "/%s" : "%v") + (t3["encrypt-uri"] ? " %s" : "%v") + " %s" + (t3.config ? " %s" : "");
  } }, { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format(t3) {
    return null != t3.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
  } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { push: "msid", reg: /^msid:([\w-]+)(?: ([\w-]+))?/, names: ["id", "appdata"], format: "msid:%s %s" }, { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format(t3) {
    var e2 = "candidate:%s %d %s %d %s %d typ %s";
    return e2 += null != t3.raddr ? " raddr %s rport %d" : "%v%v", e2 += null != t3.tcptype ? " tcptype %s" : "%v", null != t3.generation && (e2 += " generation %d"), (e2 += null != t3["network-id"] ? " network-id %d" : "%v") + (null != t3["network-cost"] ? " network-cost %d" : "%v");
  } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format(t3) {
    var e2 = "ssrc:%d";
    return null != t3.attribute && (e2 += " %s", null != t3.value && (e2 += ":%s")), e2;
  } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format(t3) {
    return null != t3.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
  } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format(t3) {
    return t3.params ? "rid:%s %s %s" : "rid:%s %s";
  } }, { push: "imageattrs", reg: RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format(t3) {
    return "imageattr:%s %s %s" + (t3.dir2 ? " %s %s" : "");
  } }, { name: "simulcast", reg: RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format(t3) {
    return "simulcast:%s %s" + (t3.dir2 ? " %s %s" : "");
  } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { name: "bundleOnly", reg: /^(bundle-only)/ }, { name: "label", reg: /^label:(.+)/, format: "label:%s" }, { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" }, { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" }, { push: "tsRefClocks", reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/, names: ["clksrc", "clksrcExt"], format(t3) {
    return "ts-refclk:%s" + (null != t3.clksrcExt ? "=%s" : "");
  } }, { name: "mediaClk", reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/, names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"], format(t3) {
    var e2 = "mediaclk:";
    return e2 += null != t3.id ? "id=%s %s" : "%v%s", e2 += null != t3.mediaClockValue ? "=%s" : "", (e2 += null != t3.rateNumerator ? " rate=%s" : "") + (null != t3.rateDenominator ? "/%s" : "");
  } }, { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" }, { name: "content", reg: /^content:(.+)/, format: "content:%s" }, { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" }, { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" }, { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" }, { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" }, { push: "invalid", names: ["value"] }] };
  return Object.keys(t2).forEach((e2) => {
    t2[e2].forEach((t3) => {
      t3.reg || (t3.reg = /(.*)/), t3.format || (t3.format = "%s");
    });
  }), bt.exports;
}
function It() {
  return pt || (pt = 1, ((t2) => {
    var e2 = (t3) => +t3 + "" === t3 ? +t3 : t3, i2 = (t3, i3, s3) => {
      var r3 = t3.name && t3.names;
      t3.push && !i3[t3.push] ? i3[t3.push] = [] : r3 && !i3[t3.name] && (i3[t3.name] = {});
      var o3 = t3.push ? {} : r3 ? i3[t3.name] : i3;
      ((t4, i4, s4, r4) => {
        if (r4 && !s4) i4[r4] = e2(t4[1]);
        else for (var o4 = 0; s4.length > o4; o4 += 1) null != t4[o4 + 1] && (i4[s4[o4]] = e2(t4[o4 + 1]));
      })(s3.match(t3.reg), o3, t3.names, t3.name), t3.push && i3[t3.push].push(o3);
    }, s2 = Et(), r2 = /t/.test.bind(/^([a-z])=(.*)/);
    t2.parse = (t3) => {
      var e3 = {}, o3 = [], n2 = e3;
      return t3.split(/(\r\n|\r|\n)/).filter(r2).forEach((t4) => {
        var e4 = t4[0], r3 = t4.slice(2);
        "m" === e4 && (o3.push({ rtp: [], fmtp: [] }), n2 = o3[o3.length - 1]);
        for (var a2 = 0; (s2[e4] || []).length > a2; a2 += 1) {
          var c2 = s2[e4][a2];
          if (c2.reg.test(r3)) return i2(c2, n2, r3);
        }
      }), e3.media = o3, e3;
    };
    var o2 = (t3, i3) => {
      var s3 = i3.split(/=(.+)/, 2);
      return 2 === s3.length ? t3[s3[0]] = e2(s3[1]) : 1 === s3.length && i3.length > 1 && (t3[s3[0]] = void 0), t3;
    };
    t2.parseParams = (t3) => t3.split(/;\s?/).reduce(o2, {}), t2.parseFmtpConfig = t2.parseParams, t2.parsePayloads = (t3) => ("" + t3).split(" ").map(Number), t2.parseRemoteCandidates = (t3) => {
      for (var i3 = [], s3 = t3.split(" ").map(e2), r3 = 0; s3.length > r3; r3 += 3) i3.push({ component: s3[r3], ip: s3[r3 + 1], port: s3[r3 + 2] });
      return i3;
    }, t2.parseImageAttributes = (t3) => t3.split(" ").map((t4) => t4.substring(1, t4.length - 1).split(",").reduce(o2, {})), t2.parseSimulcastStreamList = (t3) => t3.split(";").map((t4) => t4.split(",").map((t5) => {
      var i3, s3 = false;
      return "~" !== t5[0] ? i3 = e2(t5) : (i3 = e2(t5.substring(1, t5.length)), s3 = true), { scid: i3, paused: s3 };
    }));
  })(vt)), vt;
}
function Tt() {
  if (ft) return mt;
  ft = 1;
  var t2 = Et(), e2 = /%[sdv%]/g, i2 = function(t3) {
    var i3 = 1, s3 = arguments, r3 = s3.length;
    return t3.replace(e2, (t4) => {
      if (i3 >= r3) return t4;
      var e3 = s3[i3];
      switch (i3 += 1, t4) {
        case "%%":
          return "%";
        case "%s":
          return e3 + "";
        case "%d":
          return +e3;
        case "%v":
          return "";
      }
    });
  }, s2 = (t3, e3, s3) => {
    var r3 = [t3 + "=" + (e3.format instanceof Function ? e3.format(e3.push ? s3 : s3[e3.name]) : e3.format)];
    if (e3.names) for (var o3 = 0; e3.names.length > o3; o3 += 1) r3.push(e3.name ? s3[e3.name][e3.names[o3]] : s3[e3.names[o3]]);
    else r3.push(s3[e3.name]);
    return i2.apply(null, r3);
  }, r2 = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"], o2 = ["i", "c", "b", "a"];
  return mt = (e3, i3) => {
    i3 = i3 || {}, null == e3.version && (e3.version = 0), null == e3.name && (e3.name = " "), e3.media.forEach((t3) => {
      null == t3.payloads && (t3.payloads = "");
    });
    var n2 = i3.innerOrder || o2, a2 = [];
    return (i3.outerOrder || r2).forEach((i4) => {
      t2[i4].forEach((t3) => {
        t3.name in e3 && null != e3[t3.name] ? a2.push(s2(i4, t3, e3)) : t3.push in e3 && null != e3[t3.push] && e3[t3.push].forEach((e4) => {
          a2.push(s2(i4, t3, e4));
        });
      });
    }), e3.media.forEach((e4) => {
      a2.push(s2("m", t2.m[0], e4)), n2.forEach((i4) => {
        t2[i4].forEach((t3) => {
          t3.name in e4 && null != e4[t3.name] ? a2.push(s2(i4, t3, e4)) : t3.push in e4 && null != e4[t3.push] && e4[t3.push].forEach((e5) => {
            a2.push(s2(i4, t3, e5));
          });
        });
      });
    }), a2.join("\r\n") + "\r\n";
  };
}
function Rt() {
  if (wt) return yt;
  wt = 1;
  var t2 = It(), e2 = Tt();
  return yt.grammar = Et(), yt.write = e2, yt.parse = t2.parse, yt.parseParams = t2.parseParams, yt.parseFmtpConfig = t2.parseFmtpConfig, yt.parsePayloads = t2.parsePayloads, yt.parseRemoteCandidates = t2.parseRemoteCandidates, yt.parseImageAttributes = t2.parseImageAttributes, yt.parseSimulcastStreamList = t2.parseSimulcastStreamList, yt;
}
var St;
var kt = {};
function Ct() {
  if (St) return kt;
  St = 1, Object.defineProperty(kt, "h", { value: true }), kt.parse = (e2) => {
    const i2 = t2.exec(e2 ?? "");
    return i2 ? { spatialLayers: +i2[1], temporalLayers: +i2[2] } : { spatialLayers: 1, temporalLayers: 1 };
  };
  const t2 = RegExp("^[LS]([1-9]\\d{0,1})T([1-9]\\d{0,1})");
  return kt;
}
var _t;
var Pt;
var Dt = {};
var xt = {};
function Ot() {
  if (_t) return xt;
  _t = 1, Object.defineProperty(xt, "h", { value: true }), xt.OfferMediaSection = xt.AnswerMediaSection = xt.MediaSection = void 0;
  const t2 = Rt(), e2 = P();
  let i2 = class {
    Et;
    constructor({ iceParameters: t3, iceCandidates: e3, dtlsParameters: i3 }) {
      if (this.Et = { type: "", port: 0, protocol: "", payloads: "", rtp: [], fmtp: [] }, t3 && this.setIceParameters(t3), e3) {
        this.Et.candidates = [];
        for (const t4 of e3) {
          const e4 = { foundation: t4.foundation, component: 1, ip: t4.address ?? t4.ip, port: t4.port, priority: t4.priority, transport: t4.protocol, type: t4.type };
          t4.tcpType && (e4.tcptype = t4.tcpType), this.Et.candidates.push(e4);
        }
        this.Et.endOfCandidates = "end-of-candidates", this.Et.iceOptions = "renomination";
      }
      i3 && this.setDtlsRole(i3.role);
    }
    get mid() {
      return this.Et.mid + "";
    }
    get closed() {
      return 0 === this.Et.port;
    }
    getObject() {
      return this.Et;
    }
    setIceParameters(t3) {
      this.Et.iceUfrag = t3.usernameFragment, this.Et.icePwd = t3.password;
    }
    pause() {
      this.Et.direction = "inactive";
    }
    disable() {
      this.pause();
    }
    close() {
      this.disable(), this.Et.port = 0, delete this.Et.candidates, delete this.Et.endOfCandidates, delete this.Et.iceUfrag, delete this.Et.icePwd, delete this.Et.iceOptions, this.Et.rtp = [], this.Et.fmtp = [], delete this.Et.rtcp, delete this.Et.rtcpFb, delete this.Et.ssrcs, delete this.Et.ssrcGroups, delete this.Et.simulcast, delete this.Et.simulcast_03, delete this.Et.rids, delete this.Et.extmapAllowMixed;
    }
  };
  function s2(t3) {
    const e3 = RegExp("^(audio|video)/(.+)", "i").exec(t3.mimeType);
    if (!e3) throw new TypeError("invalid codec.mimeType");
    return e3[2];
  }
  return xt.MediaSection = i2, xt.AnswerMediaSection = class extends i2 {
    constructor({ iceParameters: t3, iceCandidates: i3, dtlsParameters: r2, sctpParameters: o2, plainRtpParameters: n2, offerMediaObject: a2, offerRtpParameters: c2, answerRtpParameters: h2, codecOptions: d2 }) {
      switch (super({ iceParameters: t3, iceCandidates: i3, dtlsParameters: r2 }), this.Et.mid = a2.mid + "", this.Et.type = a2.type, this.Et.protocol = a2.protocol, n2 ? (this.Et.connection = { ip: n2.ip, version: n2.ipVersion }, this.Et.port = n2.port) : (this.Et.connection = { ip: "127.0.0.1", version: 4 }, this.Et.port = 7), a2.type) {
        case "audio":
        case "video":
          this.Et.direction = "recvonly", this.Et.rtp = [], this.Et.rtcpFb = [], this.Et.fmtp = [];
          for (const t4 of h2.codecs) {
            const i4 = { payload: t4.payloadType, codec: s2(t4), rate: t4.clockRate };
            t4.channels > 1 && (i4.encoding = t4.channels), this.Et.rtp.push(i4);
            const r3 = e2.clone(t4.parameters) ?? {};
            let o3 = e2.clone(t4.rtcpFeedback) ?? [];
            if (d2) {
              const { opusStereo: e3, opusFec: i5, opusDtx: s3, opusMaxPlaybackRate: n4, opusMaxAverageBitrate: a3, opusPtime: h3, opusNack: l2, videoGoogleStartBitrate: u2, videoGoogleMaxBitrate: p3, videoGoogleMinBitrate: m3 } = d2, f3 = c2.codecs.find((e4) => e4.payloadType === t4.payloadType);
              switch (t4.mimeType.toLowerCase()) {
                case "audio/opus":
                case "audio/multiopus":
                  void 0 !== e3 && (f3.parameters["sprop-stereo"] = e3 ? 1 : 0, r3.stereo = e3 ? 1 : 0), void 0 !== i5 && (f3.parameters.useinbandfec = i5 ? 1 : 0, r3.useinbandfec = i5 ? 1 : 0), void 0 !== s3 && (f3.parameters.usedtx = s3 ? 1 : 0, r3.usedtx = s3 ? 1 : 0), void 0 !== n4 && (r3.maxplaybackrate = n4), void 0 !== a3 && (r3.maxaveragebitrate = a3), void 0 !== h3 && (f3.parameters.ptime = h3, r3.ptime = h3), l2 || (f3.rtcpFeedback = f3.rtcpFeedback.filter((t5) => "nack" !== t5.type || t5.parameter), o3 = o3.filter((t5) => "nack" !== t5.type || t5.parameter));
                  break;
                case "video/vp8":
                case "video/vp9":
                case "video/h264":
                case "video/h265":
                case "video/av1":
                  void 0 !== u2 && (r3["x-google-start-bitrate"] = u2), void 0 !== p3 && (r3["x-google-max-bitrate"] = p3), void 0 !== m3 && (r3["x-google-min-bitrate"] = m3);
              }
            }
            const n3 = { payload: t4.payloadType, config: "" };
            for (const t5 of Object.keys(r3)) n3.config && (n3.config += ";"), n3.config += `${t5}=${r3[t5]}`;
            n3.config && this.Et.fmtp.push(n3);
            for (const e3 of o3) this.Et.rtcpFb.push({ payload: t4.payloadType, type: e3.type, subtype: e3.parameter });
          }
          this.Et.payloads = h2.codecs.map((t4) => t4.payloadType).join(" "), this.Et.ext = [];
          for (const t4 of h2.headerExtensions) (a2.ext ?? []).some((e3) => e3.uri === t4.uri) && this.Et.ext.push({ uri: t4.uri, value: t4.id });
          if ("extmap-allow-mixed" === a2.extmapAllowMixed && (this.Et.extmapAllowMixed = "extmap-allow-mixed"), a2.simulcast) {
            this.Et.simulcast = { dir1: "recv", list1: a2.simulcast.list1 }, this.Et.rids = [];
            for (const t4 of a2.rids ?? []) "send" === t4.direction && this.Et.rids.push({ id: t4.id, direction: "recv" });
          } else if (a2.simulcast_03) {
            this.Et.simulcast_03 = { value: a2.simulcast_03.value.replace(/send/g, "recv") }, this.Et.rids = [];
            for (const t4 of a2.rids ?? []) "send" === t4.direction && this.Et.rids.push({ id: t4.id, direction: "recv" });
          }
          this.Et.rtcpMux = "rtcp-mux", this.Et.rtcpRsize = "rtcp-rsize";
          break;
        case "application":
          "number" == typeof a2.sctpPort ? (this.Et.payloads = "webrtc-datachannel", this.Et.sctpPort = o2.port, this.Et.maxMessageSize = o2.maxMessageSize) : a2.sctpmap && (this.Et.payloads = o2.port + "", this.Et.sctpmap = { app: "webrtc-datachannel", sctpmapNumber: o2.port, maxMessageSize: o2.maxMessageSize });
      }
    }
    setDtlsRole(t3) {
      switch (t3) {
        case "client":
          this.Et.setup = "active";
          break;
        case "server":
          this.Et.setup = "passive";
          break;
        case "auto":
          this.Et.setup = "actpass";
      }
    }
    resume() {
      this.Et.direction = "recvonly";
    }
    muxSimulcastStreams(e3) {
      if (!this.Et.simulcast?.list1) return;
      const i3 = {};
      for (const t3 of e3) t3.rid && (i3[t3.rid] = t3);
      const s3 = t2.parseSimulcastStreamList(this.Et.simulcast.list1);
      for (const t3 of s3) for (const e4 of t3) e4.paused = !i3[e4.scid]?.active;
      this.Et.simulcast.list1 = s3.map((t3) => t3.map((t4) => `${t4.paused ? "~" : ""}${t4.scid}`).join(",")).join(";");
    }
  }, xt.OfferMediaSection = class extends i2 {
    constructor({ iceParameters: t3, iceCandidates: e3, dtlsParameters: i3, sctpParameters: r2, plainRtpParameters: o2, mid: n2, kind: a2, offerRtpParameters: c2, streamId: h2, trackId: d2 }) {
      switch (super({ iceParameters: t3, iceCandidates: e3, dtlsParameters: i3 }), this.Et.mid = n2 + "", this.Et.type = a2, o2 ? (this.Et.connection = { ip: o2.ip, version: o2.ipVersion }, this.Et.protocol = "RTP/AVP", this.Et.port = o2.port) : (this.Et.connection = { ip: "127.0.0.1", version: 4 }, this.Et.protocol = r2 ? "UDP/DTLS/SCTP" : "UDP/TLS/RTP/SAVPF", this.Et.port = 7), this.Et.extmapAllowMixed = "extmap-allow-mixed", a2) {
        case "audio":
        case "video": {
          this.Et.direction = "sendonly", this.Et.rtp = [], this.Et.rtcpFb = [], this.Et.fmtp = [], this.Et.msid = [{ id: h2, appdata: d2 }];
          for (const r3 of c2.codecs) {
            const t5 = { payload: r3.payloadType, codec: s2(r3), rate: r3.clockRate };
            r3.channels > 1 && (t5.encoding = r3.channels), this.Et.rtp.push(t5);
            const e5 = { payload: r3.payloadType, config: "" };
            for (const i5 of Object.keys(r3.parameters ?? {})) e5.config && (e5.config += ";"), e5.config += `${i5}=${r3.parameters[i5]}`;
            e5.config && this.Et.fmtp.push(e5);
            for (const i5 of r3.rtcpFeedback) this.Et.rtcpFb.push({ payload: r3.payloadType, type: i5.type, subtype: i5.parameter });
          }
          this.Et.payloads = c2.codecs.map((t5) => t5.payloadType).join(" "), this.Et.ext = [];
          for (const s3 of c2.headerExtensions) this.Et.ext.push({ uri: s3.uri, value: s3.id });
          this.Et.rtcpMux = "rtcp-mux", this.Et.rtcpRsize = "rtcp-rsize";
          const t4 = c2.encodings[0], e4 = t4.ssrc, i4 = t4.rtx?.ssrc;
          this.Et.ssrcs = [], this.Et.ssrcGroups = [], e4 && c2.rtcp.cname && this.Et.ssrcs.push({ id: e4, attribute: "cname", value: c2.rtcp.cname }), i4 && (c2.rtcp.cname && this.Et.ssrcs.push({ id: i4, attribute: "cname", value: c2.rtcp.cname }), e4 && this.Et.ssrcGroups.push({ semantics: "FID", ssrcs: `${e4} ${i4}` }));
          break;
        }
        case "application":
          this.Et.payloads = "webrtc-datachannel", this.Et.sctpPort = r2.port, this.Et.maxMessageSize = r2.maxMessageSize;
      }
    }
    setDtlsRole(t3) {
      this.Et.setup = "actpass";
    }
    resume() {
      this.Et.direction = "sendonly";
    }
  }, xt;
}
function Mt() {
  if (Pt) return Dt;
  Pt = 1, Object.defineProperty(Dt, "h", { value: true }), Dt.RemoteSdp = void 0;
  const t2 = Rt(), e2 = g(), i2 = Ot(), s2 = De(), r2 = ["av1", "h264"], o2 = new e2.Logger("RemoteSdp");
  return Dt.RemoteSdp = class {
    It;
    Tt;
    Rt;
    St;
    kt;
    Ct = [];
    _t = /* @__PURE__ */ new Map();
    Pt;
    Dt;
    constructor({ iceParameters: t3, iceCandidates: e3, dtlsParameters: i3, sctpParameters: r3, plainRtpParameters: o3 }) {
      if (this.It = t3, this.Tt = e3, this.Rt = i3, this.St = r3, this.kt = o3, this.Dt = { version: 0, origin: { address: "0.0.0.0", ipVer: 4, netType: "IN", sessionId: "10000", sessionVersion: 0, username: "mediasoup-client-v" + s2.version }, name: "-", timing: { start: 0, stop: 0 }, media: [] }, this.Dt.iceOptions = "ice2", t3?.iceLite && (this.Dt.icelite = "ice-lite"), i3) {
        this.Dt.msidSemantic = { semantic: "WMS", token: "*" };
        const t4 = this.Rt.fingerprints.length;
        this.Dt.fingerprint = { type: i3.fingerprints[t4 - 1].algorithm, hash: i3.fingerprints[t4 - 1].value }, this.Dt.groups = [{ type: "BUNDLE", mids: "" }];
      }
      o3 && (this.Dt.origin.address = o3.ip, this.Dt.origin.ipVer = o3.ipVersion);
    }
    updateIceParameters(t3) {
      o2.debug("updateIceParameters() [iceParameters:%o]", t3), this.It = t3, this.Dt.icelite = t3.iceLite ? "ice-lite" : void 0;
      for (const e3 of this.Ct) e3.setIceParameters(t3);
    }
    updateDtlsRole(t3) {
      o2.debug("updateDtlsRole() [role:%s]", t3), this.Rt.role = t3;
      for (const e3 of this.Ct) e3.setDtlsRole(t3);
    }
    setSessionExtmapAllowMixed() {
      o2.debug("setSessionExtmapAllowMixed()"), this.Dt.extmapAllowMixed = "extmap-allow-mixed";
    }
    getNextMediaSectionIdx() {
      for (let t3 = 0; this.Ct.length > t3; ++t3) {
        const e3 = this.Ct[t3];
        if (e3.closed) return { idx: t3, reuseMid: e3.mid };
      }
      return { idx: this.Ct.length };
    }
    send({ offerMediaObject: t3, reuseMid: e3, offerRtpParameters: s3, answerRtpParameters: o3, codecOptions: n2 }) {
      const a2 = new i2.AnswerMediaSection({ iceParameters: this.It, iceCandidates: this.Tt, dtlsParameters: this.Rt, plainRtpParameters: this.kt, offerMediaObject: t3, offerRtpParameters: s3, answerRtpParameters: o3, codecOptions: n2 }), c2 = a2.getObject();
      c2.rtp.find((t4) => r2.includes(t4.codec.toLowerCase())) || (c2.ext = c2.ext?.filter((t4) => "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension" !== t4.uri)), e3 ? this.replaceMediaSection(a2, e3) : this._t.has(a2.mid) ? this.replaceMediaSection(a2) : this.addMediaSection(a2);
    }
    receive({ mid: t3, kind: e3, offerRtpParameters: s3, streamId: r3, trackId: o3 }) {
      this.setSessionExtmapAllowMixed();
      const n2 = new i2.OfferMediaSection({ iceParameters: this.It, iceCandidates: this.Tt, dtlsParameters: this.Rt, plainRtpParameters: this.kt, mid: t3, kind: e3, offerRtpParameters: s3, streamId: r3, trackId: o3 }), a2 = this.Ct.find((t4) => t4.closed);
      a2 ? this.replaceMediaSection(n2, a2.mid) : this.addMediaSection(n2);
    }
    pauseMediaSection(t3) {
      this.findMediaSection(t3).pause();
    }
    resumeSendingMediaSection(t3) {
      this.findMediaSection(t3).resume();
    }
    resumeReceivingMediaSection(t3) {
      this.findMediaSection(t3).resume();
    }
    disableMediaSection(t3) {
      this.findMediaSection(t3).disable();
    }
    closeMediaSection(t3) {
      const e3 = this.findMediaSection(t3);
      return t3 === this.Pt ? (o2.debug("closeMediaSection() | cannot close first media section, disabling it instead [mid:%s]", t3), this.disableMediaSection(t3), false) : (e3.close(), this.regenerateBundleMids(), true);
    }
    muxMediaSectionSimulcast(t3, e3) {
      const i3 = this.findMediaSection(t3);
      i3.muxSimulcastStreams(e3), this.replaceMediaSection(i3);
    }
    sendSctpAssociation({ offerMediaObject: t3 }) {
      const e3 = new i2.AnswerMediaSection({ iceParameters: this.It, iceCandidates: this.Tt, dtlsParameters: this.Rt, sctpParameters: this.St, plainRtpParameters: this.kt, offerMediaObject: t3 });
      this.addMediaSection(e3);
    }
    receiveSctpAssociation() {
      const t3 = new i2.OfferMediaSection({ iceParameters: this.It, iceCandidates: this.Tt, dtlsParameters: this.Rt, sctpParameters: this.St, plainRtpParameters: this.kt, mid: "datachannel", kind: "application" });
      this.addMediaSection(t3);
    }
    getSdp() {
      return this.Dt.origin.sessionVersion++, t2.write(this.Dt);
    }
    addMediaSection(t3) {
      this.Pt || (this.Pt = t3.mid), this.Ct.push(t3), this._t.set(t3.mid, this.Ct.length - 1), this.Dt.media.push(t3.getObject()), this.regenerateBundleMids();
    }
    replaceMediaSection(t3, e3) {
      if ("string" == typeof e3) {
        const i3 = this._t.get(e3);
        if (void 0 === i3) throw Error(`no media section found for reuseMid '${e3}'`);
        const s3 = this.Ct[i3];
        this.Ct[i3] = t3, this._t.delete(s3.mid), this._t.set(t3.mid, i3), this.Dt.media[i3] = t3.getObject(), this.regenerateBundleMids();
      } else {
        const e4 = this._t.get(t3.mid);
        if (void 0 === e4) throw Error(`no media section found with mid '${t3.mid}'`);
        this.Ct[e4] = t3, this.Dt.media[e4] = t3.getObject();
      }
    }
    findMediaSection(t3) {
      const e3 = this._t.get(t3);
      if (void 0 === e3) throw Error(`no media section found with mid '${t3}'`);
      return this.Ct[e3];
    }
    regenerateBundleMids() {
      this.Rt && (this.Dt.groups[0].mids = this.Ct.filter((t3) => !t3.closed).map((t3) => t3.mid).join(" "));
    }
  }, Dt;
}
var At;
var Nt = {};
function jt() {
  if (At) return Nt;
  At = 1, Object.defineProperty(Nt, "h", { value: true }), Nt.extractRtpCapabilities = ({ sdpObject: e2 }) => {
    const i2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map();
    for (const r2 of e2.media) {
      const e3 = r2.type;
      switch (e3) {
        case "audio":
        case "video":
          break;
        default:
          continue;
      }
      for (const t3 of r2.rtp) {
        const s3 = { kind: e3, mimeType: `${e3}/${t3.codec}`, preferredPayloadType: t3.payload, clockRate: t3.rate, channels: t3.encoding, parameters: {}, rtcpFeedback: [] };
        i2.set(s3.preferredPayloadType, s3);
      }
      for (const s3 of r2.fmtp ?? []) {
        const e4 = t2.parseParams(s3.config), r3 = i2.get(s3.payload);
        r3 && (e4?.hasOwnProperty("profile-level-id") && (e4["profile-level-id"] = e4["profile-level-id"] + ""), r3.parameters = e4);
      }
      for (const t3 of r2.rtcpFb ?? []) {
        const s3 = { type: t3.type, parameter: t3.subtype };
        if (s3.parameter || delete s3.parameter, "*" !== t3.payload) {
          const e4 = i2.get(+t3.payload);
          if (!e4) continue;
          e4.rtcpFeedback.push(s3);
        } else for (const t4 of i2.values()) t4.kind !== e3 || /.+\/rtx$/i.test(t4.mimeType) || t4.rtcpFeedback.push(s3);
      }
      for (const t3 of r2.ext ?? []) {
        if (t3["encrypt-uri"]) continue;
        const i3 = { kind: e3, uri: t3.uri, preferredId: t3.value };
        s2.set(i3.preferredId, i3);
      }
    }
    return { codecs: Array.from(i2.values()), headerExtensions: Array.from(s2.values()) };
  }, Nt.extractDtlsParameters = ({ sdpObject: t3 }) => {
    let e2, i2 = t3.setup, s2 = t3.fingerprint;
    if (!i2 || !s2) {
      const e3 = (t3.media ?? []).find((t4) => 0 !== t4.port);
      e3 && (i2 = i2 ?? e3.setup, s2 = s2 ?? e3.fingerprint);
    }
    if (!i2) throw Error("no a=setup found at SDP session or media level");
    if (!s2) throw Error("no a=fingerprint found at SDP session or media level");
    switch (i2) {
      case "active":
        e2 = "client";
        break;
      case "passive":
        e2 = "server";
        break;
      case "actpass":
        e2 = "auto";
    }
    return { role: e2, fingerprints: [{ algorithm: s2.type, value: s2.hash }] };
  }, Nt.getCname = ({ offerMediaObject: t3 }) => {
    const e2 = (t3.ssrcs ?? []).find((t4) => "cname" === t4.attribute);
    return e2 ? e2.value : "";
  }, Nt.applyCodecParameters = ({ offerRtpParameters: e2, answerMediaObject: i2 }) => {
    for (const s2 of e2.codecs) {
      const e3 = s2.mimeType.toLowerCase();
      if ("audio/opus" !== e3) continue;
      if (!(i2.rtp ?? []).find((t3) => t3.payload === s2.payloadType)) continue;
      i2.fmtp = i2.fmtp ?? [];
      let r2 = i2.fmtp.find((t3) => t3.payload === s2.payloadType);
      r2 || (r2 = { payload: s2.payloadType, config: "" }, i2.fmtp.push(r2));
      const o2 = t2.parseParams(r2.config);
      switch (e3) {
        case "audio/opus": {
          const t3 = s2.parameters?.["sprop-stereo"];
          void 0 !== t3 && (o2.stereo = +t3 ? 1 : 0);
          break;
        }
      }
      r2.config = "";
      for (const t3 of Object.keys(o2)) r2.config && (r2.config += ";"), r2.config += `${t3}=${o2[t3]}`;
    }
  }, Nt.addHeaderExtension = ({ offerMediaObject: t3, headerExtensionUri: e2, headerExtensionId: i2 }) => {
    t3.ext || (t3.ext = []), t3.ext.push({ uri: e2, value: i2 });
  };
  const t2 = Rt();
  return Nt;
}
var $t;
var Ft = {};
function Lt() {
  return $t || ($t = 1, Object.defineProperty(Ft, "h", { value: true }), Ft.getRtpEncodings = ({ offerMediaObject: t2 }) => {
    const e2 = /* @__PURE__ */ new Set();
    for (const r2 of t2.ssrcs ?? []) {
      const t3 = r2.id;
      t3 && e2.add(t3);
    }
    if (0 === e2.size) throw Error("no a=ssrc lines found");
    const i2 = /* @__PURE__ */ new Map();
    for (const r2 of t2.ssrcGroups ?? []) {
      if ("FID" !== r2.semantics) continue;
      const t3 = r2.ssrcs.split(/\s+/), s3 = +t3[0], o2 = +t3[1];
      e2.has(s3) && (e2.delete(s3), e2.delete(o2), i2.set(s3, o2));
    }
    for (const r2 of e2) i2.set(r2, void 0);
    const s2 = [];
    for (const [r2, o2] of i2) {
      const t3 = { ssrc: r2 };
      o2 && (t3.rtx = { ssrc: o2 }), s2.push(t3);
    }
    return s2;
  }, Ft.addLegacySimulcast = ({ offerMediaObject: t2, numStreams: e2 }) => {
    if (1 >= e2) throw new TypeError("numStreams must be greater than 1");
    const i2 = (t2.ssrcs ?? []).find((t3) => "msid" === t3.attribute);
    if (!i2) throw Error("a=ssrc line with msid information not found");
    const [s2, r2] = i2.value.split(" "), o2 = +i2.id;
    let n2;
    (t2.ssrcGroups ?? []).some((t3) => {
      if ("FID" !== t3.semantics) return false;
      const e3 = t3.ssrcs.split(/\s+/);
      return +e3[0] === o2 && (n2 = +e3[1], true);
    });
    const a2 = (t2.ssrcs ?? []).find((t3) => "cname" === t3.attribute);
    if (!a2) throw Error("a=ssrc line with cname information not found");
    const c2 = a2.value, h2 = [], d2 = [];
    for (let l2 = 0; e2 > l2; ++l2) h2.push(o2 + l2), n2 && d2.push(n2 + l2);
    t2.ssrcGroups = [], t2.ssrcs = [], t2.ssrcGroups.push({ semantics: "SIM", ssrcs: h2.join(" ") });
    for (const l2 of h2) t2.ssrcs.push({ id: l2, attribute: "cname", value: c2 }), t2.ssrcs.push({ id: l2, attribute: "msid", value: `${s2} ${r2}` });
    for (let l2 = 0; d2.length > l2; ++l2) {
      const e3 = h2[l2], i3 = d2[l2];
      t2.ssrcs.push({ id: i3, attribute: "cname", value: c2 }), t2.ssrcs.push({ id: i3, attribute: "msid", value: `${s2} ${r2}` }), t2.ssrcGroups.push({ semantics: "FID", ssrcs: `${e3} ${i3}` });
    }
  }), Ft;
}
var Ut;
var Vt;
var Bt = {};
function qt() {
  return Ut || (Ut = 1, Object.defineProperty(Bt, "h", { value: true }), Bt.addNackSupportForOpus = (t2) => {
    for (const e2 of t2.codecs ?? []) "audio/opus" !== e2.mimeType.toLowerCase() && "audio/multiopus" !== e2.mimeType.toLowerCase() || e2.rtcpFeedback?.some((t3) => "nack" === t3.type && !t3.parameter) || (e2.rtcpFeedback || (e2.rtcpFeedback = []), e2.rtcpFeedback.push({ type: "nack" }));
  }, Bt.addHeaderExtensionSupport = (t2, e2) => {
    let i2;
    const s2 = t2.headerExtensions?.find((t3) => t3.uri === e2.uri);
    if (s2) {
      if (s2.kind === e2.kind) return;
      i2 = s2.preferredId;
    }
    if (t2.headerExtensions || (t2.headerExtensions = []), void 0 === i2) {
      i2 = 1;
      const e3 = new Set(t2.headerExtensions.map((t3) => t3.preferredId));
      for (; e3.has(i2); ) ++i2;
    }
    t2.headerExtensions.push({ kind: e2.kind, uri: e2.uri, preferredId: i2, preferredEncrypt: false, direction: e2.direction });
  }, Bt.getMsidStreamIdAndTrackId = (t2) => {
    if (!t2 || "string" != typeof t2) return { msidStreamId: void 0, msidTrackId: void 0 };
    const [e2, i2] = t2.trim().split(/\s+/);
    return e2 ? { msidStreamId: e2, msidTrackId: i2 } : { msidStreamId: void 0, msidTrackId: void 0 };
  }), Bt;
}
function zt() {
  if (Vt) return gt;
  Vt = 1, Object.defineProperty(gt, "h", { value: true }), gt.Chrome111 = void 0;
  const t2 = Rt(), e2 = T(), i2 = g(), s2 = F(), r2 = k(), o2 = Ct(), n2 = Mt(), a2 = jt(), c2 = Lt(), h2 = qt(), d2 = new i2.Logger("Chrome111"), l2 = "Chrome111", u2 = { OS: 1024, MIS: 1024 };
  return gt.Chrome111 = class i3 extends e2.EnhancedEventEmitter {
    P = false;
    K;
    xt;
    Y;
    Ot;
    Mt;
    At = /* @__PURE__ */ new Map();
    Nt = new MediaStream();
    jt = false;
    $t = 0;
    Ft = false;
    static createFactory() {
      return { name: l2, factory(t3) {
        return new i3(t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          d2.debug("getNativeRtpCapabilities()");
          let e3 = new RTCPeerConnection({ iceServers: [], iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" });
          try {
            e3.addTransceiver("audio"), e3.addTransceiver("video", { sendEncodings: [{ scalabilityMode: "L3T3" }] });
            const r3 = yield e3.createOffer();
            try {
              e3.close();
            } catch (s3) {
            }
            e3 = void 0;
            const o3 = t2.parse(r3.sdp);
            return i3.getLocalRtpCapabilities(o3);
          } catch (s3) {
            try {
              e3?.close();
            } catch (r3) {
            }
            throw e3 = void 0, s3;
          }
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return d2.debug("getNativeSctpCapabilities()"), { numStreams: u2 };
        });
      } };
    }
    static getLocalRtpCapabilities(t3, e3 = []) {
      const i4 = a2.extractRtpCapabilities({ sdpObject: t3 });
      s2.validateAndNormalizeRtpCapabilities(i4), h2.addNackSupportForOpus(i4);
      for (const s3 of e3) h2.addHeaderExtensionSupport(i4, s3);
      return i4;
    }
    constructor({ direction: t3, iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: a3, additionalSettings: c3, getSendExtendedRtpCapabilities: h3 }) {
      super(), d2.debug("constructor()"), this.K = t3, this.xt = new n2.RemoteSdp({ iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3 }), this.Y = h3, s3.role && "auto" !== s3.role && (this.Ot = "server" === s3.role ? "client" : "server"), this.Mt = new RTCPeerConnection(__spreadValues({ iceServers: o3 ?? [], iceTransportPolicy: a3 ?? "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, c3)), this.Mt.addEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.addEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.connectionState ? this.Mt.addEventListener("connectionstatechange", this.onConnectionStateChange) : (d2.warn("run() | pc.connectionState not supported, using pc.iceConnectionState"), this.Mt.addEventListener("iceconnectionstatechange", this.onIceConnectionStateChange));
    }
    get name() {
      return l2;
    }
    close() {
      if (d2.debug("close()"), !this.P) {
        this.P = true;
        try {
          this.Mt.close();
        } catch (t3) {
        }
        this.Mt.removeEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.removeEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.removeEventListener("connectionstatechange", this.onConnectionStateChange), this.Mt.removeEventListener("iceconnectionstatechange", this.onIceConnectionStateChange), this.emit("@close"), super.close();
      }
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), d2.debug("updateIceServers()");
        const e3 = this.Mt.getConfiguration();
        e3.iceServers = t3, this.Mt.setConfiguration(e3);
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        if (this.assertNotClosed(), d2.debug("restartIce()"), this.xt.updateIceParameters(t3), this.Ft) if ("send" === this.K) {
          const t4 = yield this.Mt.createOffer({ iceRestart: true });
          d2.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", t4), yield this.Mt.setLocalDescription(t4);
          const e3 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        } else {
          const t4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", t4), yield this.Mt.setRemoteDescription(t4);
          const e3 = yield this.Mt.createAnswer();
          d2.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", e3), yield this.Mt.setLocalDescription(e3);
        }
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), this.Mt.getStats();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: e3, streamId: r3, encodings: n3, codecOptions: h3, headerExtensionOptions: l3, codec: u3, onRtpSender: p3 }) {
        if (this.assertNotClosed(), this.assertSendDirection(), d2.debug("send() [kind:%s, track.id:%s, streamId:%s]", e3.kind, e3.id, r3), n3 && n3.length > 1) {
          let t3 = 1;
          for (const e4 of n3) {
            const i4 = e4.scalabilityMode ? (0, o2.parse)(e4.scalabilityMode).temporalLayers : 3;
            i4 > t3 && (t3 = i4);
          }
          n3.forEach((e4, i4) => {
            e4.rid = "r" + i4, e4.scalabilityMode = "L1T" + t3;
          });
        }
        const m3 = this.xt.getNextMediaSectionIdx(), f3 = this.Mt.addTransceiver(e3, { direction: "sendonly", streams: [this.Nt], sendEncodings: n3 });
        p3 && p3(f3.sender);
        let w3 = yield this.Mt.createOffer(), g3 = t2.parse(w3.sdp);
        g3.extmapAllowMixed && this.xt.setSessionExtmapAllowMixed();
        const y4 = [];
        y4.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v3 = i3.getLocalRtpCapabilities(g3, y4), b2 = this.Y(v3), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 })), l3?.absCaptureTime && (a2.addHeaderExtension({ offerMediaObject: g3.media[m3.idx], headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        const T3 = f3.mid;
        E3.mid = T3, g3 = t2.parse(this.Mt.localDescription.sdp);
        const R2 = g3.media[m3.idx];
        if (E3.rtcp.cname = a2.getCname({ offerMediaObject: R2 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          const t3 = c2.getRtpEncodings({ offerMediaObject: R2 });
          Object.assign(t3[0], n3[0]), E3.encodings = t3;
        } else E3.encodings = n3;
        else E3.encodings = c2.getRtpEncodings({ offerMediaObject: R2 });
        this.xt.send({ offerMediaObject: R2, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const S4 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", S4), yield this.Mt.setRemoteDescription(S4), this.At.set(T3, f3), { localId: T3, rtpParameters: E3, rtpSender: f3.sender };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (this.assertSendDirection(), d2.debug("stopSending() [localId:%s]", t3), this.P) return;
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        if (e3.sender.replaceTrack(null), this.Mt.removeTrack(e3.sender), this.xt.closeMediaSection(e3.mid)) try {
          e3.stop();
        } catch (r3) {
        }
        const i4 = yield this.Mt.createOffer();
        d2.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3), this.At.delete(t3);
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("pauseSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "inactive", this.xt.pauseMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("resumeSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (this.xt.resumeSendingMediaSection(t3), !e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "sendonly";
        const i4 = yield this.Mt.createOffer();
        d2.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    replaceTrack(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), e3 ? d2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e3.id) : d2.debug("replaceTrack() [localId:%s, no track]", t3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        yield i4.sender.replaceTrack(e3);
      });
    }
    setMaxSpatialLayer(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          t4.active = e3 >= i5;
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    setRtpEncodingParameters(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          s3.encodings[i5] = __spreadValues(__spreadValues({}, t4), e3);
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.sender.getStats();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, label: r3, protocol: o3 }) {
        this.assertNotClosed(), this.assertSendDirection();
        const n3 = { negotiated: true, id: this.$t, ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, protocol: o3 };
        d2.debug("sendDataChannel() [options:%o]", n3);
        const a3 = this.Mt.createDataChannel(r3, n3);
        if (this.$t = ++this.$t % u2.MIS, !this.jt) {
          const e4 = yield this.Mt.createOffer(), i5 = t2.parse(e4.sdp), s4 = i5.media.find((t3) => "application" === t3.type);
          this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: i5 })), d2.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", e4), yield this.Mt.setLocalDescription(e4), this.xt.sendSctpAssociation({ offerMediaObject: s4 });
          const r4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", r4), yield this.Mt.setRemoteDescription(r4), this.jt = true;
        }
        return { dataChannel: a3, sctpStreamParameters: { streamId: n3.id, ordered: n3.ordered, maxPacketLifeTime: n3.maxPacketLifeTime, maxRetransmits: n3.maxRetransmits } };
      });
    }
    receive(e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const i4 = [], s3 = /* @__PURE__ */ new Map();
        for (const t3 of e3) {
          const { trackId: e4, kind: i5, rtpParameters: r4, streamId: o4 } = t3;
          d2.debug("receive() [trackId:%s, kind:%s]", e4, i5);
          const n4 = r4.mid ?? this.At.size + "";
          s3.set(e4, n4);
          const { msidStreamId: a3 } = h2.getMsidStreamIdAndTrackId(r4.msid);
          this.xt.receive({ mid: n4, kind: i5, offerRtpParameters: r4, streamId: o4 ?? a3 ?? r4.rtcp?.cname ?? "-", trackId: e4 });
        }
        const r3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", r3), yield this.Mt.setRemoteDescription(r3);
        for (const t3 of e3) {
          const { trackId: e4, onRtpReceiver: i5 } = t3;
          if (i5) {
            const t4 = s3.get(e4), r4 = this.Mt.getTransceivers().find((e5) => e5.mid === t4);
            if (!r4) throw Error("transceiver not found");
            i5(r4.receiver);
          }
        }
        let o3 = yield this.Mt.createAnswer();
        const n3 = t2.parse(o3.sdp);
        for (const t3 of e3) {
          const { trackId: e4, rtpParameters: i5 } = t3, r4 = s3.get(e4), o4 = n3.media.find((t4) => t4.mid + "" === r4);
          a2.applyCodecParameters({ offerRtpParameters: i5, answerMediaObject: o4 });
        }
        o3 = { type: "answer", sdp: t2.write(n3) }, this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: n3 })), d2.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o3), yield this.Mt.setLocalDescription(o3);
        for (const t3 of e3) {
          const { trackId: e4 } = t3, r4 = s3.get(e4), o4 = this.Mt.getTransceivers().find((t4) => t4.mid === r4);
          if (!o4) throw Error("new RTCRtpTransceiver not found");
          this.At.set(r4, o4), i4.push({ localId: r4, track: o4.receiver.track, rtpReceiver: o4.receiver });
        }
        return i4;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (this.assertRecvDirection(), this.P) return;
        for (const s3 of t3) {
          d2.debug("stopReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          this.xt.closeMediaSection(t4.mid);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        for (const s3 of t3) this.At.delete(s3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("pauseReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "inactive", this.xt.pauseMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("resumeReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "recvonly", this.xt.resumeReceivingMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.receiver.getStats();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: e3, label: i4, protocol: s3 }) {
        this.assertNotClosed(), this.assertRecvDirection();
        const { streamId: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3 } = e3, c3 = { negotiated: true, id: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3, protocol: s3 };
        d2.debug("receiveDataChannel() [options:%o]", c3);
        const h3 = this.Mt.createDataChannel(i4, c3);
        if (!this.jt) {
          this.xt.receiveSctpAssociation();
          const e4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
          const i5 = yield this.Mt.createAnswer();
          if (!this.Ft) {
            const e5 = t2.parse(i5.sdp);
            yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: e5 });
          }
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", i5), yield this.Mt.setLocalDescription(i5), this.jt = true;
        }
        return { dataChannel: h3 };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: e3, localSdpObject: i4 }) {
        i4 || (i4 = t2.parse(this.Mt.localDescription.sdp));
        const s3 = a2.extractDtlsParameters({ sdpObject: i4 });
        s3.role = e3, this.xt.updateDtlsRole("client" === e3 ? "server" : "client"), yield new Promise((t3, e4) => {
          this.safeEmit("@connect", { dtlsParameters: s3 }, t3, e4);
        }), this.Ft = true;
      });
    }
    onIceGatheringStateChange = () => {
      this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
    };
    onIceCandidateError = (t3) => {
      this.emit("@icecandidateerror", t3);
    };
    onConnectionStateChange = () => {
      this.emit("@connectionstatechange", this.Mt.connectionState);
    };
    onIceConnectionStateChange = () => {
      switch (this.Mt.iceConnectionState) {
        case "checking":
          this.emit("@connectionstatechange", "connecting");
          break;
        case "connected":
        case "completed":
          this.emit("@connectionstatechange", "connected");
          break;
        case "failed":
          this.emit("@connectionstatechange", "failed");
          break;
        case "disconnected":
          this.emit("@connectionstatechange", "disconnected");
          break;
        case "closed":
          this.emit("@connectionstatechange", "closed");
      }
    };
    assertNotClosed() {
      if (this.P) throw new r2.InvalidStateError("method called in a closed handler");
    }
    assertSendDirection() {
      if ("send" !== this.K) throw Error('method can just be called for handlers with "send" direction');
    }
    assertRecvDirection() {
      if ("recv" !== this.K) throw Error('method can just be called for handlers with "recv" direction');
    }
  }, gt;
}
var Gt;
var Wt = {};
function Ht() {
  if (Gt) return Wt;
  Gt = 1, Object.defineProperty(Wt, "h", { value: true }), Wt.Chrome74 = void 0;
  const t2 = Rt(), e2 = g(), i2 = T(), s2 = F(), r2 = k(), o2 = Ct(), n2 = Mt(), a2 = jt(), c2 = Lt(), h2 = qt(), d2 = new e2.Logger("Chrome74"), l2 = "Chrome74", u2 = { OS: 1024, MIS: 1024 };
  return Wt.Chrome74 = class e3 extends i2.EnhancedEventEmitter {
    P = false;
    K;
    xt;
    Y;
    Ot;
    Mt;
    At = /* @__PURE__ */ new Map();
    Nt = new MediaStream();
    jt = false;
    $t = 0;
    Ft = false;
    static createFactory() {
      return { name: l2, factory(t3) {
        return new e3(t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          d2.debug("getNativeRtpCapabilities()");
          let i3 = new RTCPeerConnection({ iceServers: [], iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" });
          try {
            i3.addTransceiver("audio"), i3.addTransceiver("video");
            const r3 = yield i3.createOffer();
            try {
              i3.close();
            } catch (s3) {
            }
            i3 = void 0;
            const o3 = t2.parse(r3.sdp);
            return e3.getLocalRtpCapabilities(o3);
          } catch (s3) {
            try {
              i3?.close();
            } catch (r3) {
            }
            throw i3 = void 0, s3;
          }
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return d2.debug("getNativeSctpCapabilities()"), { numStreams: u2 };
        });
      } };
    }
    static getLocalRtpCapabilities(t3, e4 = []) {
      const i3 = a2.extractRtpCapabilities({ sdpObject: t3 });
      s2.validateAndNormalizeRtpCapabilities(i3), h2.addNackSupportForOpus(i3);
      for (const s3 of e4) h2.addHeaderExtensionSupport(i3, s3);
      return i3;
    }
    constructor({ direction: t3, iceParameters: e4, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: a3, additionalSettings: c3, getSendExtendedRtpCapabilities: h3 }) {
      super(), d2.debug("constructor()"), this.K = t3, this.xt = new n2.RemoteSdp({ iceParameters: e4, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3 }), this.Y = h3, s3.role && "auto" !== s3.role && (this.Ot = "server" === s3.role ? "client" : "server"), this.Mt = new RTCPeerConnection(__spreadValues({ iceServers: o3 ?? [], iceTransportPolicy: a3 ?? "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, c3)), this.Mt.addEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.addEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.connectionState ? this.Mt.addEventListener("connectionstatechange", this.onConnectionStateChange) : (d2.warn("run() | pc.connectionState not supported, using pc.iceConnectionState"), this.Mt.addEventListener("iceconnectionstatechange", this.onIceConnectionStateChange));
    }
    get name() {
      return l2;
    }
    close() {
      if (d2.debug("close()"), !this.P) {
        this.P = true;
        try {
          this.Mt.close();
        } catch (t3) {
        }
        this.Mt.removeEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.removeEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.removeEventListener("connectionstatechange", this.onConnectionStateChange), this.Mt.removeEventListener("iceconnectionstatechange", this.onIceConnectionStateChange), this.emit("@close"), super.close();
      }
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), d2.debug("updateIceServers()");
        const e4 = this.Mt.getConfiguration();
        e4.iceServers = t3, this.Mt.setConfiguration(e4);
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        if (this.assertNotClosed(), d2.debug("restartIce()"), this.xt.updateIceParameters(t3), this.Ft) if ("send" === this.K) {
          const t4 = yield this.Mt.createOffer({ iceRestart: true });
          d2.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", t4), yield this.Mt.setLocalDescription(t4);
          const e4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
        } else {
          const t4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", t4), yield this.Mt.setRemoteDescription(t4);
          const e4 = yield this.Mt.createAnswer();
          d2.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", e4), yield this.Mt.setLocalDescription(e4);
        }
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), this.Mt.getStats();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: i3, streamId: r3, encodings: n3, codecOptions: h3, headerExtensionOptions: l3, codec: u3 }) {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("send() [kind:%s, track.id:%s, streamId:%s]", i3.kind, i3.id, r3), n3 && n3.length > 1 && n3.forEach((t3, e4) => {
          t3.rid = "r" + e4;
        });
        const p3 = this.xt.getNextMediaSectionIdx(), m3 = this.Mt.addTransceiver(i3, { direction: "sendonly", streams: [this.Nt], sendEncodings: n3 });
        let f3 = yield this.Mt.createOffer(), w3 = t2.parse(f3.sdp);
        w3.extmapAllowMixed && this.xt.setSessionExtmapAllowMixed();
        const g3 = [];
        g3.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: i3.kind, direction: "sendonly" });
        const y4 = e3.getLocalRtpCapabilities(w3, g3), v3 = this.Y(y4), b2 = s2.getSendingRtpParameters(i3.kind, v3);
        b2.codecs = s2.reduceCodecs(b2.codecs, u3);
        const E3 = s2.getSendingRemoteRtpParameters(i3.kind, v3);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: w3 }));
        let I3 = false;
        const T3 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        let R2;
        1 === n3?.length && T3.spatialLayers > 1 && "video/vp9" === b2.codecs[0].mimeType.toLowerCase() && (d2.debug("send() | enabling legacy simulcast for VP9 SVC"), I3 = true, w3 = t2.parse(f3.sdp), R2 = w3.media[p3.idx], c2.addLegacySimulcast({ offerMediaObject: R2, numStreams: T3.spatialLayers }), f3 = { type: "offer", sdp: t2.write(w3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", f3), l3?.absCaptureTime && (R2 = w3.media[p3.idx], a2.addHeaderExtension({ offerMediaObject: R2, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: E3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), f3 = { type: "offer", sdp: t2.write(w3) }), yield this.Mt.setLocalDescription(f3);
        const S4 = m3.mid;
        if (b2.mid = S4, w3 = t2.parse(this.Mt.localDescription.sdp), R2 = w3.media[p3.idx], b2.rtcp.cname = a2.getCname({ offerMediaObject: R2 }), b2.msid = `${r3 ?? this.Nt.id} ${i3.id}`, n3) if (1 === n3.length) {
          let t3 = c2.getRtpEncodings({ offerMediaObject: R2 });
          Object.assign(t3[0], n3[0]), I3 && (t3 = [t3[0]]), b2.encodings = t3;
        } else b2.encodings = n3;
        else b2.encodings = c2.getRtpEncodings({ offerMediaObject: R2 });
        if (b2.encodings.length > 1 && ("video/vp8" === b2.codecs[0].mimeType.toLowerCase() || "video/h264" === b2.codecs[0].mimeType.toLowerCase())) for (const t3 of b2.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + T3.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: R2, reuseMid: p3.reuseMid, offerRtpParameters: b2, answerRtpParameters: E3, codecOptions: h3 });
        const k2 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", k2), yield this.Mt.setRemoteDescription(k2), this.At.set(S4, m3), { localId: S4, rtpParameters: b2, rtpSender: m3.sender };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (this.assertSendDirection(), d2.debug("stopSending() [localId:%s]", t3), this.P) return;
        const e4 = this.At.get(t3);
        if (!e4) throw Error("associated RTCRtpTransceiver not found");
        if (e4.sender.replaceTrack(null), this.Mt.removeTrack(e4.sender), this.xt.closeMediaSection(e4.mid)) try {
          e4.stop();
        } catch (r3) {
        }
        const i3 = yield this.Mt.createOffer();
        d2.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", i3), yield this.Mt.setLocalDescription(i3);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3), this.At.delete(t3);
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("pauseSending() [localId:%s]", t3);
        const e4 = this.At.get(t3);
        if (!e4) throw Error("associated RTCRtpTransceiver not found");
        e4.direction = "inactive", this.xt.pauseMediaSection(t3);
        const i3 = yield this.Mt.createOffer();
        d2.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", i3), yield this.Mt.setLocalDescription(i3);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("resumeSending() [localId:%s]", t3);
        const e4 = this.At.get(t3);
        if (this.xt.resumeSendingMediaSection(t3), !e4) throw Error("associated RTCRtpTransceiver not found");
        e4.direction = "sendonly";
        const i3 = yield this.Mt.createOffer();
        d2.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", i3), yield this.Mt.setLocalDescription(i3);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    replaceTrack(t3, e4) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), e4 ? d2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e4.id) : d2.debug("replaceTrack() [localId:%s, no track]", t3);
        const i3 = this.At.get(t3);
        if (!i3) throw Error("associated RTCRtpTransceiver not found");
        yield i3.sender.replaceTrack(e4);
      });
    }
    setMaxSpatialLayer(t3, e4) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e4);
        const i3 = this.At.get(t3);
        if (!i3) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i3.sender.getParameters();
        s3.encodings.forEach((t4, i4) => {
          t4.active = e4 >= i4;
        }), yield i3.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    setRtpEncodingParameters(t3, e4) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e4);
        const i3 = this.At.get(t3);
        if (!i3) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i3.sender.getParameters();
        s3.encodings.forEach((t4, i4) => {
          s3.encodings[i4] = __spreadValues(__spreadValues({}, t4), e4);
        }), yield i3.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection();
        const e4 = this.At.get(t3);
        if (!e4) throw Error("associated RTCRtpTransceiver not found");
        return e4.sender.getStats();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: e4, maxPacketLifeTime: i3, maxRetransmits: s3, label: r3, protocol: o3 }) {
        this.assertNotClosed(), this.assertSendDirection();
        const n3 = { negotiated: true, id: this.$t, ordered: e4, maxPacketLifeTime: i3, maxRetransmits: s3, protocol: o3 };
        d2.debug("sendDataChannel() [options:%o]", n3);
        const a3 = this.Mt.createDataChannel(r3, n3);
        if (this.$t = ++this.$t % u2.MIS, !this.jt) {
          const e5 = yield this.Mt.createOffer(), i4 = t2.parse(e5.sdp), s4 = i4.media.find((t3) => "application" === t3.type);
          this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: i4 })), d2.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", e5), yield this.Mt.setLocalDescription(e5), this.xt.sendSctpAssociation({ offerMediaObject: s4 });
          const r4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", r4), yield this.Mt.setRemoteDescription(r4), this.jt = true;
        }
        return { dataChannel: a3, sctpStreamParameters: { streamId: n3.id, ordered: n3.ordered, maxPacketLifeTime: n3.maxPacketLifeTime, maxRetransmits: n3.maxRetransmits } };
      });
    }
    receive(e4) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const i3 = [], s3 = /* @__PURE__ */ new Map();
        for (const t3 of e4) {
          const { trackId: e5, kind: i4, rtpParameters: r4, streamId: o4 } = t3;
          d2.debug("receive() [trackId:%s, kind:%s]", e5, i4);
          const n4 = r4.mid ?? this.At.size + "";
          s3.set(e5, n4);
          const { msidStreamId: a3 } = h2.getMsidStreamIdAndTrackId(r4.msid);
          this.xt.receive({ mid: n4, kind: i4, offerRtpParameters: r4, streamId: o4 ?? a3 ?? r4.rtcp?.cname ?? "-", trackId: e5 });
        }
        const r3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", r3), yield this.Mt.setRemoteDescription(r3);
        let o3 = yield this.Mt.createAnswer();
        const n3 = t2.parse(o3.sdp);
        for (const t3 of e4) {
          const { trackId: e5, rtpParameters: i4 } = t3, r4 = s3.get(e5), o4 = n3.media.find((t4) => t4.mid + "" === r4);
          a2.applyCodecParameters({ offerRtpParameters: i4, answerMediaObject: o4 });
        }
        o3 = { type: "answer", sdp: t2.write(n3) }, this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: n3 })), d2.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o3), yield this.Mt.setLocalDescription(o3);
        for (const t3 of e4) {
          const { trackId: e5 } = t3, r4 = s3.get(e5), o4 = this.Mt.getTransceivers().find((t4) => t4.mid === r4);
          if (!o4) throw Error("new RTCRtpTransceiver not found");
          this.At.set(r4, o4), i3.push({ localId: r4, track: o4.receiver.track, rtpReceiver: o4.receiver });
        }
        return i3;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (this.assertRecvDirection(), this.P) return;
        for (const s3 of t3) {
          d2.debug("stopReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          this.xt.closeMediaSection(t4.mid);
        }
        const e4 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
        const i3 = yield this.Mt.createAnswer();
        d2.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", i3), yield this.Mt.setLocalDescription(i3);
        for (const s3 of t3) this.At.delete(s3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("pauseReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "inactive", this.xt.pauseMediaSection(s3);
        }
        const e4 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
        const i3 = yield this.Mt.createAnswer();
        d2.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", i3), yield this.Mt.setLocalDescription(i3);
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("resumeReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "recvonly", this.xt.resumeReceivingMediaSection(s3);
        }
        const e4 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
        const i3 = yield this.Mt.createAnswer();
        d2.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", i3), yield this.Mt.setLocalDescription(i3);
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const e4 = this.At.get(t3);
        if (!e4) throw Error("associated RTCRtpTransceiver not found");
        return e4.receiver.getStats();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: e4, label: i3, protocol: s3 }) {
        this.assertNotClosed(), this.assertRecvDirection();
        const { streamId: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3 } = e4, c3 = { negotiated: true, id: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3, protocol: s3 };
        d2.debug("receiveDataChannel() [options:%o]", c3);
        const h3 = this.Mt.createDataChannel(i3, c3);
        if (!this.jt) {
          this.xt.receiveSctpAssociation();
          const e5 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", e5), yield this.Mt.setRemoteDescription(e5);
          const i4 = yield this.Mt.createAnswer();
          if (!this.Ft) {
            const e6 = t2.parse(i4.sdp);
            yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: e6 });
          }
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4), this.jt = true;
        }
        return { dataChannel: h3 };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: e4, localSdpObject: i3 }) {
        i3 || (i3 = t2.parse(this.Mt.localDescription.sdp));
        const s3 = a2.extractDtlsParameters({ sdpObject: i3 });
        s3.role = e4, this.xt.updateDtlsRole("client" === e4 ? "server" : "client"), yield new Promise((t3, e5) => {
          this.safeEmit("@connect", { dtlsParameters: s3 }, t3, e5);
        }), this.Ft = true;
      });
    }
    onIceGatheringStateChange = () => {
      this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
    };
    onIceCandidateError = (t3) => {
      this.emit("@icecandidateerror", t3);
    };
    onConnectionStateChange = () => {
      this.emit("@connectionstatechange", this.Mt.connectionState);
    };
    onIceConnectionStateChange = () => {
      switch (this.Mt.iceConnectionState) {
        case "checking":
          this.emit("@connectionstatechange", "connecting");
          break;
        case "connected":
        case "completed":
          this.emit("@connectionstatechange", "connected");
          break;
        case "failed":
          this.emit("@connectionstatechange", "failed");
          break;
        case "disconnected":
          this.emit("@connectionstatechange", "disconnected");
          break;
        case "closed":
          this.emit("@connectionstatechange", "closed");
      }
    };
    assertNotClosed() {
      if (this.P) throw new r2.InvalidStateError("method called in a closed handler");
    }
    assertSendDirection() {
      if ("send" !== this.K) throw Error('method can just be called for handlers with "send" direction');
    }
    assertRecvDirection() {
      if ("recv" !== this.K) throw Error('method can just be called for handlers with "recv" direction');
    }
  }, Wt;
}
var Jt;
var Kt = {};
function Yt() {
  if (Jt) return Kt;
  Jt = 1, Object.defineProperty(Kt, "h", { value: true }), Kt.Firefox120 = void 0;
  const t2 = Rt(), e2 = T(), i2 = g(), s2 = k(), r2 = F(), o2 = Ct(), n2 = Mt(), a2 = jt(), c2 = Lt(), h2 = qt(), d2 = new i2.Logger("Firefox120"), l2 = "Firefox120", u2 = { OS: 16, MIS: 2048 };
  return Kt.Firefox120 = class i3 extends e2.EnhancedEventEmitter {
    P = false;
    K;
    xt;
    Y;
    Mt;
    At = /* @__PURE__ */ new Map();
    Nt = new MediaStream();
    jt = false;
    $t = 0;
    Ft = false;
    static createFactory() {
      return { name: l2, factory(t3) {
        return new i3(t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          d2.debug("getNativeRtpCapabilities()");
          let e3 = new RTCPeerConnection({ iceServers: [], iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" });
          const s3 = document.createElement("canvas");
          s3.getContext("2d");
          const r3 = s3.captureStream().getVideoTracks()[0];
          try {
            e3.addTransceiver("audio", { direction: "sendrecv" }), e3.addTransceiver(r3, { direction: "sendrecv", sendEncodings: [{ rid: "r0", maxBitrate: 1e5 }, { rid: "r1", maxBitrate: 5e5 }] });
            const n3 = yield e3.createOffer();
            try {
              s3.remove();
            } catch (o3) {
            }
            try {
              r3.stop();
            } catch (o3) {
            }
            try {
              e3.close();
            } catch (o3) {
            }
            e3 = void 0;
            const a3 = t2.parse(n3.sdp);
            return i3.getLocalRtpCapabilities(a3);
          } catch (o3) {
            try {
              s3.remove();
            } catch (n3) {
            }
            try {
              r3.stop();
            } catch (n3) {
            }
            try {
              e3?.close();
            } catch (n3) {
            }
            throw e3 = void 0, o3;
          }
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return d2.debug("getNativeSctpCapabilities()"), { numStreams: u2 };
        });
      } };
    }
    static getLocalRtpCapabilities(t3) {
      const e3 = a2.extractRtpCapabilities({ sdpObject: t3 });
      return r2.validateAndNormalizeRtpCapabilities(e3), e3;
    }
    constructor({ direction: t3, iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: a3, additionalSettings: c3, getSendExtendedRtpCapabilities: h3 }) {
      super(), d2.debug("constructor()"), this.K = t3, this.xt = new n2.RemoteSdp({ iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3 }), this.Y = h3, this.Mt = new RTCPeerConnection(__spreadValues({ iceServers: o3 ?? [], iceTransportPolicy: a3 ?? "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, c3)), this.Mt.addEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.addEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.connectionState ? this.Mt.addEventListener("connectionstatechange", this.onConnectionStateChange) : (d2.warn("run() | pc.connectionState not supported, using pc.iceConnectionState"), this.Mt.addEventListener("iceconnectionstatechange", this.onIceConnectionStateChange));
    }
    get name() {
      return l2;
    }
    close() {
      if (d2.debug("close()"), !this.P) {
        this.P = true;
        try {
          this.Mt.close();
        } catch (t3) {
        }
        this.Mt.removeEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.removeEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.removeEventListener("connectionstatechange", this.onConnectionStateChange), this.Mt.removeEventListener("iceconnectionstatechange", this.onIceConnectionStateChange), this.emit("@close"), super.close();
      }
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        throw this.assertNotClosed(), new s2.UnsupportedError("not supported");
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        if (this.assertNotClosed(), d2.debug("restartIce()"), this.xt.updateIceParameters(t3), this.Ft) if ("send" === this.K) {
          const t4 = yield this.Mt.createOffer({ iceRestart: true });
          d2.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", t4), yield this.Mt.setLocalDescription(t4);
          const e3 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        } else {
          const t4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", t4), yield this.Mt.setRemoteDescription(t4);
          const e3 = yield this.Mt.createAnswer();
          d2.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", e3), yield this.Mt.setLocalDescription(e3);
        }
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), this.Mt.getStats();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: e3, streamId: s3, encodings: n3, codecOptions: h3, codec: l3, onRtpSender: u3 }) {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("send() [kind:%s, track.id:%s, streamId:%s]", e3.kind, e3.id, s3), n3 && n3.length > 1 && n3.forEach((t3, e4) => {
          t3.rid = "r" + e4;
        });
        const p3 = this.Mt.addTransceiver(e3, { direction: "sendonly", streams: [this.Nt], sendEncodings: n3 });
        u3 && u3(p3.sender);
        const m3 = yield this.Mt.createOffer();
        let f3 = t2.parse(m3.sdp);
        f3.extmapAllowMixed && this.xt.setSessionExtmapAllowMixed();
        const w3 = i3.getLocalRtpCapabilities(f3), g3 = this.Y(w3), y4 = r2.getSendingRtpParameters(e3.kind, g3);
        y4.codecs = r2.reduceCodecs(y4.codecs, l3);
        const v3 = r2.getSendingRemoteRtpParameters(e3.kind, g3);
        v3.codecs = r2.reduceCodecs(v3.codecs, l3), this.Ft || (yield this.setupTransport({ localDtlsRole: "client", localSdpObject: f3 }));
        const b2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", m3), yield this.Mt.setLocalDescription(m3);
        const E3 = p3.mid;
        y4.mid = E3, f3 = t2.parse(this.Mt.localDescription.sdp);
        const I3 = f3.media[f3.media.length - 1];
        if (y4.rtcp.cname = a2.getCname({ offerMediaObject: I3 }), y4.msid = `${s3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          const t3 = c2.getRtpEncodings({ offerMediaObject: I3 });
          Object.assign(t3[0], n3[0]), y4.encodings = t3;
        } else y4.encodings = n3;
        else y4.encodings = c2.getRtpEncodings({ offerMediaObject: I3 });
        if (y4.encodings.length > 1 && ("video/vp8" === y4.codecs[0].mimeType.toLowerCase() || "video/h264" === y4.codecs[0].mimeType.toLowerCase())) for (const t3 of y4.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + b2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: I3, offerRtpParameters: y4, answerRtpParameters: v3, codecOptions: h3 });
        const T3 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", T3), yield this.Mt.setRemoteDescription(T3), this.At.set(E3, p3), { localId: E3, rtpParameters: y4, rtpSender: p3.sender };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (this.assertSendDirection(), d2.debug("stopSending() [localId:%s]", t3), this.P) return;
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated transceiver not found");
        e3.sender.replaceTrack(null), this.Mt.removeTrack(e3.sender), this.xt.disableMediaSection(e3.mid);
        const i4 = yield this.Mt.createOffer();
        d2.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3), this.At.delete(t3);
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("pauseSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "inactive", this.xt.pauseMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("resumeSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "sendonly", this.xt.resumeSendingMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    replaceTrack(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), e3 ? d2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e3.id) : d2.debug("replaceTrack() [localId:%s, no track]", t3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        yield i4.sender.replaceTrack(e3);
      });
    }
    setMaxSpatialLayer(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated transceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          t4.active = e3 >= i5;
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    setRtpEncodingParameters(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          s3.encodings[i5] = __spreadValues(__spreadValues({}, t4), e3);
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.sender.getStats();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, label: r3, protocol: o3 }) {
        this.assertNotClosed(), this.assertSendDirection();
        const n3 = { negotiated: true, id: this.$t, ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, protocol: o3 };
        d2.debug("sendDataChannel() [options:%o]", n3);
        const a3 = this.Mt.createDataChannel(r3, n3);
        if (this.$t = ++this.$t % u2.MIS, !this.jt) {
          const e4 = yield this.Mt.createOffer(), i5 = t2.parse(e4.sdp), s4 = i5.media.find((t3) => "application" === t3.type);
          this.Ft || (yield this.setupTransport({ localDtlsRole: "client", localSdpObject: i5 })), d2.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", e4), yield this.Mt.setLocalDescription(e4), this.xt.sendSctpAssociation({ offerMediaObject: s4 });
          const r4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", r4), yield this.Mt.setRemoteDescription(r4), this.jt = true;
        }
        return { dataChannel: a3, sctpStreamParameters: { streamId: n3.id, ordered: n3.ordered, maxPacketLifeTime: n3.maxPacketLifeTime, maxRetransmits: n3.maxRetransmits } };
      });
    }
    receive(e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const i4 = [], s3 = /* @__PURE__ */ new Map();
        for (const t3 of e3) {
          const { trackId: e4, kind: i5, rtpParameters: r4, streamId: o4 } = t3;
          d2.debug("receive() [trackId:%s, kind:%s]", e4, i5);
          const n4 = r4.mid ?? this.At.size + "";
          s3.set(e4, n4);
          const { msidStreamId: a3 } = h2.getMsidStreamIdAndTrackId(r4.msid);
          this.xt.receive({ mid: n4, kind: i5, offerRtpParameters: r4, streamId: o4 ?? a3 ?? r4.rtcp?.cname ?? "-", trackId: e4 });
        }
        const r3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", r3), yield this.Mt.setRemoteDescription(r3);
        for (const t3 of e3) {
          const { trackId: e4, onRtpReceiver: i5 } = t3;
          if (i5) {
            const t4 = s3.get(e4), r4 = this.Mt.getTransceivers().find((e5) => e5.mid === t4);
            if (!r4) throw Error("transceiver not found");
            i5(r4.receiver);
          }
        }
        let o3 = yield this.Mt.createAnswer();
        const n3 = t2.parse(o3.sdp);
        for (const c3 of e3) {
          const { trackId: e4, rtpParameters: i5 } = c3, r4 = s3.get(e4), h3 = n3.media.find((t3) => t3.mid + "" === r4);
          a2.applyCodecParameters({ offerRtpParameters: i5, answerMediaObject: h3 }), o3 = { type: "answer", sdp: t2.write(n3) };
        }
        this.Ft || (yield this.setupTransport({ localDtlsRole: "client", localSdpObject: n3 })), d2.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o3), yield this.Mt.setLocalDescription(o3);
        for (const t3 of e3) {
          const { trackId: e4 } = t3, r4 = s3.get(e4), o4 = this.Mt.getTransceivers().find((t4) => t4.mid === r4);
          if (!o4) throw Error("new RTCRtpTransceiver not found");
          this.At.set(r4, o4), i4.push({ localId: r4, track: o4.receiver.track, rtpReceiver: o4.receiver });
        }
        return i4;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (this.assertRecvDirection(), this.P) return;
        for (const s3 of t3) {
          d2.debug("stopReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          this.xt.closeMediaSection(t4.mid);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        for (const s3 of t3) this.At.delete(s3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("pauseReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "inactive", this.xt.pauseMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("resumeReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "recvonly", this.xt.resumeReceivingMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        this.assertRecvDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.receiver.getStats();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: e3, label: i4, protocol: s3 }) {
        this.assertNotClosed(), this.assertRecvDirection();
        const { streamId: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3 } = e3, c3 = { negotiated: true, id: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3, protocol: s3 };
        d2.debug("receiveDataChannel() [options:%o]", c3);
        const h3 = this.Mt.createDataChannel(i4, c3);
        if (!this.jt) {
          this.xt.receiveSctpAssociation();
          const e4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
          const i5 = yield this.Mt.createAnswer();
          if (!this.Ft) {
            const e5 = t2.parse(i5.sdp);
            yield this.setupTransport({ localDtlsRole: "client", localSdpObject: e5 });
          }
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", i5), yield this.Mt.setLocalDescription(i5), this.jt = true;
        }
        return { dataChannel: h3 };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: e3, localSdpObject: i4 }) {
        i4 || (i4 = t2.parse(this.Mt.localDescription.sdp));
        const s3 = a2.extractDtlsParameters({ sdpObject: i4 });
        s3.role = e3, this.xt.updateDtlsRole("client" === e3 ? "server" : "client"), yield new Promise((t3, e4) => {
          this.safeEmit("@connect", { dtlsParameters: s3 }, t3, e4);
        }), this.Ft = true;
      });
    }
    onIceGatheringStateChange = () => {
      this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
    };
    onIceCandidateError = (t3) => {
      this.emit("@icecandidateerror", t3);
    };
    onConnectionStateChange = () => {
      this.emit("@connectionstatechange", this.Mt.connectionState);
    };
    onIceConnectionStateChange = () => {
      switch (this.Mt.iceConnectionState) {
        case "checking":
          this.emit("@connectionstatechange", "connecting");
          break;
        case "connected":
        case "completed":
          this.emit("@connectionstatechange", "connected");
          break;
        case "failed":
          this.emit("@connectionstatechange", "failed");
          break;
        case "disconnected":
          this.emit("@connectionstatechange", "disconnected");
          break;
        case "closed":
          this.emit("@connectionstatechange", "closed");
      }
    };
    assertNotClosed() {
      if (this.P) throw new s2.InvalidStateError("method called in a closed handler");
    }
    assertSendDirection() {
      if ("send" !== this.K) throw Error('method can just be called for handlers with "send" direction');
    }
    assertRecvDirection() {
      if ("recv" !== this.K) throw Error('method can just be called for handlers with "recv" direction');
    }
  }, Kt;
}
var Qt;
var Xt = {};
function Zt() {
  if (Qt) return Xt;
  Qt = 1, Object.defineProperty(Xt, "h", { value: true }), Xt.Safari12 = void 0;
  const t2 = Rt(), e2 = T(), i2 = g(), s2 = F(), r2 = k(), o2 = Ct(), n2 = Mt(), a2 = jt(), c2 = Lt(), h2 = qt(), d2 = new i2.Logger("Safari12"), l2 = "Safari12", u2 = { OS: 1024, MIS: 1024 };
  return Xt.Safari12 = class i3 extends e2.EnhancedEventEmitter {
    P = false;
    K;
    xt;
    Y;
    Ot;
    Mt;
    At = /* @__PURE__ */ new Map();
    Nt = new MediaStream();
    jt = false;
    $t = 0;
    Ft = false;
    static createFactory() {
      return { name: l2, factory(t3) {
        return new i3(t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          d2.debug("getNativeRtpCapabilities()");
          let e3 = new RTCPeerConnection({ iceServers: [], iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" });
          try {
            e3.addTransceiver("audio"), e3.addTransceiver("video");
            const r3 = yield e3.createOffer();
            try {
              e3.close();
            } catch (s3) {
            }
            e3 = void 0;
            const o3 = t2.parse(r3.sdp);
            return i3.getLocalRtpCapabilities(o3);
          } catch (s3) {
            try {
              e3?.close();
            } catch (r3) {
            }
            throw e3 = void 0, s3;
          }
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return d2.debug("getNativeSctpCapabilities()"), { numStreams: u2 };
        });
      } };
    }
    static getLocalRtpCapabilities(t3, e3 = []) {
      const i4 = a2.extractRtpCapabilities({ sdpObject: t3 });
      s2.validateAndNormalizeRtpCapabilities(i4), h2.addNackSupportForOpus(i4);
      for (const s3 of e3) h2.addHeaderExtensionSupport(i4, s3);
      return i4;
    }
    constructor({ direction: t3, iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: a3, additionalSettings: c3, getSendExtendedRtpCapabilities: h3 }) {
      super(), d2.debug("constructor()"), this.K = t3, this.xt = new n2.RemoteSdp({ iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3 }), this.Y = h3, s3.role && "auto" !== s3.role && (this.Ot = "server" === s3.role ? "client" : "server"), this.Mt = new RTCPeerConnection(__spreadValues({ iceServers: o3 ?? [], iceTransportPolicy: a3 ?? "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, c3)), this.Mt.addEventListener("icegatheringstatechange", () => {
        this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
      }), this.Mt.addEventListener("icecandidateerror", (t4) => {
        this.emit("@icecandidateerror", t4);
      }), this.Mt.addEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.addEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.connectionState ? this.Mt.addEventListener("connectionstatechange", this.onConnectionStateChange) : (d2.warn("run() | pc.connectionState not supported, using pc.iceConnectionState"), this.Mt.addEventListener("iceconnectionstatechange", this.onIceConnectionStateChange));
    }
    get name() {
      return l2;
    }
    close() {
      if (d2.debug("close()"), !this.P) {
        this.P = true;
        try {
          this.Mt.close();
        } catch (t3) {
        }
        this.Mt.removeEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.removeEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.removeEventListener("connectionstatechange", this.onConnectionStateChange), this.Mt.removeEventListener("iceconnectionstatechange", this.onIceConnectionStateChange), this.emit("@close"), super.close();
      }
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), d2.debug("updateIceServers()");
        const e3 = this.Mt.getConfiguration();
        e3.iceServers = t3, this.Mt.setConfiguration(e3);
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        if (this.assertNotClosed(), d2.debug("restartIce()"), this.xt.updateIceParameters(t3), this.Ft) if ("send" === this.K) {
          const t4 = yield this.Mt.createOffer({ iceRestart: true });
          d2.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", t4), yield this.Mt.setLocalDescription(t4);
          const e3 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        } else {
          const t4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", t4), yield this.Mt.setRemoteDescription(t4);
          const e3 = yield this.Mt.createAnswer();
          d2.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", e3), yield this.Mt.setLocalDescription(e3);
        }
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), this.Mt.getStats();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: e3, streamId: r3, encodings: n3, codecOptions: h3, headerExtensionOptions: l3, codec: u3, onRtpSender: p3 }) {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("send() [kind:%s, track.id:%s, streamId:%s]", e3.kind, e3.id, r3);
        const m3 = this.xt.getNextMediaSectionIdx(), f3 = this.Mt.addTransceiver(e3, { direction: "sendonly", streams: [this.Nt] });
        p3 && p3(f3.sender);
        let w3 = yield this.Mt.createOffer(), g3 = t2.parse(w3.sdp);
        g3.extmapAllowMixed && this.xt.setSessionExtmapAllowMixed();
        const y4 = [];
        y4.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v3 = i3.getLocalRtpCapabilities(g3, y4), b2 = this.Y(v3), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        let T3;
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 }));
        const R2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        n3 && n3.length > 1 && (d2.debug("send() | enabling legacy simulcast"), g3 = t2.parse(w3.sdp), T3 = g3.media[m3.idx], c2.addLegacySimulcast({ offerMediaObject: T3, numStreams: n3.length }), w3 = { type: "offer", sdp: t2.write(g3) }), l3?.absCaptureTime && (T3 = g3.media[m3.idx], a2.addHeaderExtension({ offerMediaObject: T3, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        const S4 = f3.mid;
        if (E3.mid = S4, g3 = t2.parse(this.Mt.localDescription.sdp), T3 = g3.media[m3.idx], E3.rtcp.cname = a2.getCname({ offerMediaObject: T3 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, E3.encodings = c2.getRtpEncodings({ offerMediaObject: T3 }), n3) for (let t3 = 0; E3.encodings.length > t3; ++t3) n3[t3] && Object.assign(E3.encodings[t3], n3[t3]);
        if (E3.encodings.length > 1 && ("video/vp8" === E3.codecs[0].mimeType.toLowerCase() || "video/h264" === E3.codecs[0].mimeType.toLowerCase())) for (const t3 of E3.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + R2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: T3, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const k2 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", k2), yield this.Mt.setRemoteDescription(k2), this.At.set(S4, f3), { localId: S4, rtpParameters: E3, rtpSender: f3.sender };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (this.assertSendDirection(), this.P) return;
        d2.debug("stopSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        if (e3.sender.replaceTrack(null), this.Mt.removeTrack(e3.sender), this.xt.closeMediaSection(e3.mid)) try {
          e3.stop();
        } catch (r3) {
        }
        const i4 = yield this.Mt.createOffer();
        d2.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3), this.At.delete(t3);
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("pauseSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "inactive", this.xt.pauseMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("resumeSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "sendonly", this.xt.resumeSendingMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    replaceTrack(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), e3 ? d2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e3.id) : d2.debug("replaceTrack() [localId:%s, no track]", t3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        yield i4.sender.replaceTrack(e3);
      });
    }
    setMaxSpatialLayer(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          t4.active = e3 >= i5;
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    setRtpEncodingParameters(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          s3.encodings[i5] = __spreadValues(__spreadValues({}, t4), e3);
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.sender.getStats();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, label: r3, protocol: o3 }) {
        this.assertNotClosed(), this.assertSendDirection();
        const n3 = { negotiated: true, id: this.$t, ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, protocol: o3 };
        d2.debug("sendDataChannel() [options:%o]", n3);
        const a3 = this.Mt.createDataChannel(r3, n3);
        if (this.$t = ++this.$t % u2.MIS, !this.jt) {
          const e4 = yield this.Mt.createOffer(), i5 = t2.parse(e4.sdp), s4 = i5.media.find((t3) => "application" === t3.type);
          this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: i5 })), d2.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", e4), yield this.Mt.setLocalDescription(e4), this.xt.sendSctpAssociation({ offerMediaObject: s4 });
          const r4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", r4), yield this.Mt.setRemoteDescription(r4), this.jt = true;
        }
        return { dataChannel: a3, sctpStreamParameters: { streamId: n3.id, ordered: n3.ordered, maxPacketLifeTime: n3.maxPacketLifeTime, maxRetransmits: n3.maxRetransmits } };
      });
    }
    receive(e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const i4 = [], s3 = /* @__PURE__ */ new Map();
        for (const t3 of e3) {
          const { trackId: e4, kind: i5, rtpParameters: r4, streamId: o4 } = t3;
          d2.debug("receive() [trackId:%s, kind:%s]", e4, i5);
          const n4 = r4.mid ?? this.At.size + "";
          s3.set(e4, n4);
          const { msidStreamId: a3 } = h2.getMsidStreamIdAndTrackId(r4.msid);
          this.xt.receive({ mid: n4, kind: i5, offerRtpParameters: r4, streamId: o4 ?? a3 ?? r4.rtcp?.cname ?? "-", trackId: e4 });
        }
        const r3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", r3), yield this.Mt.setRemoteDescription(r3);
        for (const t3 of e3) {
          const { trackId: e4, onRtpReceiver: i5 } = t3;
          if (i5) {
            const t4 = s3.get(e4), r4 = this.Mt.getTransceivers().find((e5) => e5.mid === t4);
            if (!r4) throw Error("transceiver not found");
            i5(r4.receiver);
          }
        }
        let o3 = yield this.Mt.createAnswer();
        const n3 = t2.parse(o3.sdp);
        for (const t3 of e3) {
          const { trackId: e4, rtpParameters: i5 } = t3, r4 = s3.get(e4), o4 = n3.media.find((t4) => t4.mid + "" === r4);
          a2.applyCodecParameters({ offerRtpParameters: i5, answerMediaObject: o4 });
        }
        o3 = { type: "answer", sdp: t2.write(n3) }, this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: n3 })), d2.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o3), yield this.Mt.setLocalDescription(o3);
        for (const t3 of e3) {
          const { trackId: e4 } = t3, r4 = s3.get(e4), o4 = this.Mt.getTransceivers().find((t4) => t4.mid === r4);
          if (!o4) throw Error("new RTCRtpTransceiver not found");
          this.At.set(r4, o4), i4.push({ localId: r4, track: o4.receiver.track, rtpReceiver: o4.receiver });
        }
        return i4;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (this.assertRecvDirection(), this.P) return;
        for (const s3 of t3) {
          d2.debug("stopReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          this.xt.closeMediaSection(t4.mid);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        for (const s3 of t3) this.At.delete(s3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("pauseReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "inactive", this.xt.pauseMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("resumeReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "recvonly", this.xt.resumeReceivingMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.receiver.getStats();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: e3, label: i4, protocol: s3 }) {
        this.assertNotClosed(), this.assertRecvDirection();
        const { streamId: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3 } = e3, c3 = { negotiated: true, id: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3, protocol: s3 };
        d2.debug("receiveDataChannel() [options:%o]", c3);
        const h3 = this.Mt.createDataChannel(i4, c3);
        if (!this.jt) {
          this.xt.receiveSctpAssociation();
          const e4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
          const i5 = yield this.Mt.createAnswer();
          if (!this.Ft) {
            const e5 = t2.parse(i5.sdp);
            yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: e5 });
          }
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", i5), yield this.Mt.setLocalDescription(i5), this.jt = true;
        }
        return { dataChannel: h3 };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: e3, localSdpObject: i4 }) {
        i4 || (i4 = t2.parse(this.Mt.localDescription.sdp));
        const s3 = a2.extractDtlsParameters({ sdpObject: i4 });
        s3.role = e3, this.xt.updateDtlsRole("client" === e3 ? "server" : "client"), yield new Promise((t3, e4) => {
          this.safeEmit("@connect", { dtlsParameters: s3 }, t3, e4);
        }), this.Ft = true;
      });
    }
    onIceGatheringStateChange = () => {
      this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
    };
    onIceCandidateError = (t3) => {
      this.emit("@icecandidateerror", t3);
    };
    onConnectionStateChange = () => {
      this.emit("@connectionstatechange", this.Mt.connectionState);
    };
    onIceConnectionStateChange = () => {
      switch (this.Mt.iceConnectionState) {
        case "checking":
          this.emit("@connectionstatechange", "connecting");
          break;
        case "connected":
        case "completed":
          this.emit("@connectionstatechange", "connected");
          break;
        case "failed":
          this.emit("@connectionstatechange", "failed");
          break;
        case "disconnected":
          this.emit("@connectionstatechange", "disconnected");
          break;
        case "closed":
          this.emit("@connectionstatechange", "closed");
      }
    };
    assertNotClosed() {
      if (this.P) throw new r2.InvalidStateError("method called in a closed handler");
    }
    assertSendDirection() {
      if ("send" !== this.K) throw Error('method can just be called for handlers with "send" direction');
    }
    assertRecvDirection() {
      if ("recv" !== this.K) throw Error('method can just be called for handlers with "recv" direction');
    }
  }, Xt;
}
var te;
var ee;
var ie = {};
function se() {
  if (te) return ie;
  te = 1, Object.defineProperty(ie, "h", { value: true }), ie.ReactNative106 = void 0;
  const t2 = Rt(), e2 = T(), i2 = g(), s2 = F(), r2 = k(), o2 = Ct(), n2 = Mt(), a2 = jt(), c2 = Lt(), h2 = qt(), d2 = new i2.Logger("ReactNative106"), l2 = "ReactNative106", u2 = { OS: 1024, MIS: 1024 };
  return ie.ReactNative106 = class i3 extends e2.EnhancedEventEmitter {
    P = false;
    K;
    xt;
    Y;
    Ot;
    Mt;
    At = /* @__PURE__ */ new Map();
    Nt = new MediaStream();
    jt = false;
    $t = 0;
    Ft = false;
    static createFactory() {
      return { name: l2, factory(t3) {
        return new i3(t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          d2.debug("getNativeRtpCapabilities()");
          let e3 = new RTCPeerConnection({ iceServers: [], iceTransportPolicy: "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" });
          try {
            e3.addTransceiver("audio"), e3.addTransceiver("video");
            const r3 = yield e3.createOffer();
            try {
              e3.close();
            } catch (s3) {
            }
            e3 = void 0;
            const o3 = t2.parse(r3.sdp);
            return i3.getLocalRtpCapabilities(o3);
          } catch (s3) {
            try {
              e3?.close();
            } catch (r3) {
            }
            throw e3 = void 0, s3;
          }
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return d2.debug("getNativeSctpCapabilities()"), { numStreams: u2 };
        });
      } };
    }
    static getLocalRtpCapabilities(t3, e3 = []) {
      const i4 = a2.extractRtpCapabilities({ sdpObject: t3 });
      s2.validateAndNormalizeRtpCapabilities(i4), h2.addNackSupportForOpus(i4);
      for (const s3 of e3) h2.addHeaderExtensionSupport(i4, s3);
      return i4;
    }
    constructor({ direction: t3, iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: a3, additionalSettings: c3, getSendExtendedRtpCapabilities: h3 }) {
      super(), d2.debug("constructor()"), this.K = t3, this.xt = new n2.RemoteSdp({ iceParameters: e3, iceCandidates: i4, dtlsParameters: s3, sctpParameters: r3 }), this.Y = h3, s3.role && "auto" !== s3.role && (this.Ot = "server" === s3.role ? "client" : "server"), this.Mt = new RTCPeerConnection(__spreadValues({ iceServers: o3 ?? [], iceTransportPolicy: a3 ?? "all", bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" }, c3)), this.Mt.addEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.addEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.connectionState ? this.Mt.addEventListener("connectionstatechange", this.onConnectionStateChange) : (d2.warn("run() | pc.connectionState not supported, using pc.iceConnectionState"), this.Mt.addEventListener("iceconnectionstatechange", this.onIceConnectionStateChange));
    }
    get name() {
      return l2;
    }
    close() {
      if (d2.debug("close()"), !this.P) {
        this.P = true, this.Nt.release(false);
        try {
          this.Mt.close();
        } catch (t3) {
        }
        this.Mt.removeEventListener("icegatheringstatechange", this.onIceGatheringStateChange), this.Mt.removeEventListener("icecandidateerror", this.onIceCandidateError), this.Mt.removeEventListener("connectionstatechange", this.onConnectionStateChange), this.Mt.removeEventListener("iceconnectionstatechange", this.onIceConnectionStateChange), this.emit("@close"), super.close();
      }
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), d2.debug("updateIceServers()");
        const e3 = this.Mt.getConfiguration();
        e3.iceServers = t3, this.Mt.setConfiguration(e3);
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        if (this.assertNotClosed(), d2.debug("restartIce()"), this.xt.updateIceParameters(t3), this.Ft) if ("send" === this.K) {
          const t4 = yield this.Mt.createOffer({ iceRestart: true });
          d2.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", t4), yield this.Mt.setLocalDescription(t4);
          const e3 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        } else {
          const t4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", t4), yield this.Mt.setRemoteDescription(t4);
          const e3 = yield this.Mt.createAnswer();
          d2.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", e3), yield this.Mt.setLocalDescription(e3);
        }
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), this.Mt.getStats();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: e3, streamId: r3, encodings: n3, codecOptions: h3, headerExtensionOptions: l3, codec: u3, onRtpSender: p3 }) {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("send() [kind:%s, track.id:%s, streamId:%s]", e3.kind, e3.id, r3), n3 && n3.length > 1 && n3.forEach((t3, e4) => {
          t3.rid = "r" + e4;
        });
        const m3 = this.xt.getNextMediaSectionIdx(), f3 = this.Mt.addTransceiver(e3, { direction: "sendonly", streams: [this.Nt], sendEncodings: n3 });
        p3 && p3(f3.sender);
        let w3 = yield this.Mt.createOffer(), g3 = t2.parse(w3.sdp);
        g3.extmapAllowMixed && this.xt.setSessionExtmapAllowMixed();
        const y4 = [];
        y4.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v3 = i3.getLocalRtpCapabilities(g3, y4), b2 = this.Y(v3), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 }));
        let T3 = false;
        const R2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        let S4;
        1 === n3?.length && R2.spatialLayers > 1 && "video/vp9" === E3.codecs[0].mimeType.toLowerCase() && (d2.debug("send() | enabling legacy simulcast for VP9 SVC"), T3 = true, g3 = t2.parse(w3.sdp), S4 = g3.media[m3.idx], c2.addLegacySimulcast({ offerMediaObject: S4, numStreams: R2.spatialLayers }), w3 = { type: "offer", sdp: t2.write(g3) }), l3?.absCaptureTime && (S4 = g3.media[m3.idx], a2.addHeaderExtension({ offerMediaObject: S4, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        let k2 = f3.mid ?? void 0;
        if (k2 || d2.warn("send() | missing transceiver.mid (bug in react-native-webrtc, using a workaround"), E3.mid = k2, g3 = t2.parse(this.Mt.localDescription.sdp), S4 = g3.media[m3.idx], E3.rtcp.cname = a2.getCname({ offerMediaObject: S4 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          let t3 = c2.getRtpEncodings({ offerMediaObject: S4 });
          Object.assign(t3[0], n3[0]), T3 && (t3 = [t3[0]]), E3.encodings = t3;
        } else E3.encodings = n3;
        else E3.encodings = c2.getRtpEncodings({ offerMediaObject: S4 });
        if (E3.encodings.length > 1 && ("video/vp8" === E3.codecs[0].mimeType.toLowerCase() || "video/h264" === E3.codecs[0].mimeType.toLowerCase())) for (const t3 of E3.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + R2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: S4, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const C3 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", C3), yield this.Mt.setRemoteDescription(C3), k2 || (k2 = f3.mid, E3.mid = k2), this.At.set(k2, f3), { localId: k2, rtpParameters: E3, rtpSender: f3.sender };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (this.assertSendDirection(), this.P) return;
        d2.debug("stopSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        if (e3.sender.replaceTrack(null), this.Mt.removeTrack(e3.sender), this.xt.closeMediaSection(e3.mid)) try {
          e3.stop();
        } catch (r3) {
        }
        const i4 = yield this.Mt.createOffer();
        d2.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3), this.At.delete(t3);
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("pauseSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "inactive", this.xt.pauseMediaSection(t3);
        const i4 = yield this.Mt.createOffer();
        d2.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("resumeSending() [localId:%s]", t3);
        const e3 = this.At.get(t3);
        if (this.xt.resumeSendingMediaSection(t3), !e3) throw Error("associated RTCRtpTransceiver not found");
        e3.direction = "sendonly";
        const i4 = yield this.Mt.createOffer();
        d2.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        const s3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", s3), yield this.Mt.setRemoteDescription(s3);
      });
    }
    replaceTrack(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), e3 ? d2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e3.id) : d2.debug("replaceTrack() [localId:%s, no track]", t3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        yield i4.sender.replaceTrack(e3);
      });
    }
    setMaxSpatialLayer(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          t4.active = e3 >= i5;
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    setRtpEncodingParameters(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection(), d2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e3);
        const i4 = this.At.get(t3);
        if (!i4) throw Error("associated RTCRtpTransceiver not found");
        const s3 = i4.sender.getParameters();
        s3.encodings.forEach((t4, i5) => {
          s3.encodings[i5] = __spreadValues(__spreadValues({}, t4), e3);
        }), yield i4.sender.setParameters(s3), this.xt.muxMediaSectionSimulcast(t3, s3.encodings);
        const r3 = yield this.Mt.createOffer();
        d2.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", r3), yield this.Mt.setLocalDescription(r3);
        const o3 = { type: "answer", sdp: this.xt.getSdp() };
        d2.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", o3), yield this.Mt.setRemoteDescription(o3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertSendDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.sender.getStats();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, label: r3, protocol: o3 }) {
        this.assertNotClosed(), this.assertSendDirection();
        const n3 = { negotiated: true, id: this.$t, ordered: e3, maxPacketLifeTime: i4, maxRetransmits: s3, protocol: o3 };
        d2.debug("sendDataChannel() [options:%o]", n3);
        const a3 = this.Mt.createDataChannel(r3, n3);
        if (this.$t = ++this.$t % u2.MIS, !this.jt) {
          const e4 = yield this.Mt.createOffer(), i5 = t2.parse(e4.sdp), s4 = i5.media.find((t3) => "application" === t3.type);
          this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: i5 })), d2.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", e4), yield this.Mt.setLocalDescription(e4), this.xt.sendSctpAssociation({ offerMediaObject: s4 });
          const r4 = { type: "answer", sdp: this.xt.getSdp() };
          d2.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", r4), yield this.Mt.setRemoteDescription(r4), this.jt = true;
        }
        return { dataChannel: a3, sctpStreamParameters: { streamId: n3.id, ordered: n3.ordered, maxPacketLifeTime: n3.maxPacketLifeTime, maxRetransmits: n3.maxRetransmits } };
      });
    }
    receive(e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const i4 = [], s3 = /* @__PURE__ */ new Map();
        for (const t3 of e3) {
          const { trackId: e4, kind: i5, rtpParameters: r4, streamId: o4 } = t3;
          d2.debug("receive() [trackId:%s, kind:%s]", e4, i5);
          const n4 = r4.mid ?? this.At.size + "";
          s3.set(e4, n4);
          const { msidStreamId: a3 } = h2.getMsidStreamIdAndTrackId(r4.msid);
          this.xt.receive({ mid: n4, kind: i5, offerRtpParameters: r4, streamId: o4 ?? a3 ?? r4.rtcp?.cname ?? "-", trackId: e4 });
        }
        const r3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", r3), yield this.Mt.setRemoteDescription(r3);
        for (const t3 of e3) {
          const { trackId: e4, onRtpReceiver: i5 } = t3;
          if (i5) {
            const t4 = s3.get(e4), r4 = this.Mt.getTransceivers().find((e5) => e5.mid === t4);
            if (!r4) throw Error("transceiver not found");
            i5(r4.receiver);
          }
        }
        let o3 = yield this.Mt.createAnswer();
        const n3 = t2.parse(o3.sdp);
        for (const t3 of e3) {
          const { trackId: e4, rtpParameters: i5 } = t3, r4 = s3.get(e4), o4 = n3.media.find((t4) => t4.mid + "" === r4);
          a2.applyCodecParameters({ offerRtpParameters: i5, answerMediaObject: o4 });
        }
        o3 = { type: "answer", sdp: t2.write(n3) }, this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: n3 })), d2.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o3), yield this.Mt.setLocalDescription(o3);
        for (const t3 of e3) {
          const { trackId: e4 } = t3, r4 = s3.get(e4), o4 = this.Mt.getTransceivers().find((t4) => t4.mid === r4);
          if (!o4) throw Error("new RTCRtpTransceiver not found");
          this.At.set(r4, o4), i4.push({ localId: r4, track: o4.receiver.track, rtpReceiver: o4.receiver });
        }
        return i4;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (this.assertRecvDirection(), this.P) return;
        for (const s3 of t3) {
          d2.debug("stopReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          this.xt.closeMediaSection(t4.mid);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
        for (const s3 of t3) this.At.delete(s3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("pauseReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "inactive", this.xt.pauseMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        for (const s3 of t3) {
          d2.debug("resumeReceiving() [localId:%s]", s3);
          const t4 = this.At.get(s3);
          if (!t4) throw Error("associated RTCRtpTransceiver not found");
          t4.direction = "recvonly", this.xt.resumeReceivingMediaSection(s3);
        }
        const e3 = { type: "offer", sdp: this.xt.getSdp() };
        d2.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", e3), yield this.Mt.setRemoteDescription(e3);
        const i4 = yield this.Mt.createAnswer();
        d2.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", i4), yield this.Mt.setLocalDescription(i4);
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), this.assertRecvDirection();
        const e3 = this.At.get(t3);
        if (!e3) throw Error("associated RTCRtpTransceiver not found");
        return e3.receiver.getStats();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: e3, label: i4, protocol: s3 }) {
        this.assertNotClosed(), this.assertRecvDirection();
        const { streamId: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3 } = e3, c3 = { negotiated: true, id: r3, ordered: o3, maxPacketLifeTime: n3, maxRetransmits: a3, protocol: s3 };
        d2.debug("receiveDataChannel() [options:%o]", c3);
        const h3 = this.Mt.createDataChannel(i4, c3);
        if (!this.jt) {
          this.xt.receiveSctpAssociation();
          const e4 = { type: "offer", sdp: this.xt.getSdp() };
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", e4), yield this.Mt.setRemoteDescription(e4);
          const i5 = yield this.Mt.createAnswer();
          if (!this.Ft) {
            const e5 = t2.parse(i5.sdp);
            yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: e5 });
          }
          d2.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", i5), yield this.Mt.setLocalDescription(i5), this.jt = true;
        }
        return { dataChannel: h3 };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: e3, localSdpObject: i4 }) {
        i4 || (i4 = t2.parse(this.Mt.localDescription.sdp));
        const s3 = a2.extractDtlsParameters({ sdpObject: i4 });
        s3.role = e3, this.xt.updateDtlsRole("client" === e3 ? "server" : "client"), yield new Promise((t3, e4) => {
          this.safeEmit("@connect", { dtlsParameters: s3 }, t3, e4);
        }), this.Ft = true;
      });
    }
    onIceGatheringStateChange = () => {
      this.emit("@icegatheringstatechange", this.Mt.iceGatheringState);
    };
    onIceCandidateError = (t3) => {
      this.emit("@icecandidateerror", t3);
    };
    onConnectionStateChange = () => {
      this.emit("@connectionstatechange", this.Mt.connectionState);
    };
    onIceConnectionStateChange = () => {
      switch (this.Mt.iceConnectionState) {
        case "checking":
          this.emit("@connectionstatechange", "connecting");
          break;
        case "connected":
        case "completed":
          this.emit("@connectionstatechange", "connected");
          break;
        case "failed":
          this.emit("@connectionstatechange", "failed");
          break;
        case "disconnected":
          this.emit("@connectionstatechange", "disconnected");
          break;
        case "closed":
          this.emit("@connectionstatechange", "closed");
      }
    };
    assertNotClosed() {
      if (this.P) throw new r2.InvalidStateError("method called in a closed handler");
    }
    assertSendDirection() {
      if ("send" !== this.K) throw Error('method can just be called for handlers with "send" direction');
    }
    assertRecvDirection() {
      if ("recv" !== this.K) throw Error('method can just be called for handlers with "recv" direction');
    }
  }, ie;
}
function re() {
  if (ee) return f;
  ee = 1, Object.defineProperty(f, "h", { value: true }), f.Device = void 0, f.detectDevice = u2, f.detectDeviceAsync = p3;
  const t2 = g(), e2 = T(), i2 = k(), s2 = P(), r2 = F(), o2 = lt(), n2 = zt(), a2 = Ht(), c2 = Yt(), h2 = Zt(), d2 = se(), l2 = new t2.Logger("Device");
  function u2(t3, e3) {
    return l2.debug("detectDevice()"), t3 || "object" != typeof navigator || (t3 = navigator.userAgent), e3 || "object" != typeof navigator || (e3 = navigator.userAgentData), m3(t3, e3);
  }
  function p3(t3, e3) {
    return __async(this, null, function* () {
      return l2.debug("detectDeviceAsync()"), t3 || "object" != typeof navigator || (t3 = navigator.userAgent), e3 || "object" != typeof navigator || (e3 = navigator.userAgentData), m3(t3, e3);
    });
  }
  function m3(t3, e3) {
    l2.debug('detectDeviceImpl() [userAgent:"%s", userAgentData:%o]', t3, e3);
    const i3 = ((t4, e4) => {
      if (l2.debug("getChromiumMajorVersion()"), w3(t4, e4)) return void l2.debug("getChromiumMajorVersion() | this is iOS => undefined");
      if (y4()) return void l2.debug("getChromiumMajorVersion() | this is React-Native => undefined");
      if (e4) {
        const t5 = (e4.brands ?? []).find((t6) => "Chromium" === t6.brand);
        if (t5) {
          const e5 = +t5.version;
          return l2.debug("getChromiumMajorVersion() | Chromium major version based on NavigatorUAData => " + e5), e5;
        }
      }
      const i4 = t4?.match(/\b(?:Chrome|Chromium)\/(\w+)/i);
      if (i4?.[1]) {
        const t5 = +i4[1];
        return l2.debug("getChromiumMajorVersion() | Chromium major version based on User-Agent => " + t5), t5;
      }
      l2.debug("getChromiumMajorVersion() | this is not Chromium => undefined");
    })(t3, e3);
    if (i3) return 111 > i3 ? 74 > i3 ? void l2.warn("detectDeviceImpl() | unsupported Chromium based browser/version") : (l2.debug("detectDeviceImpl() | using Chrome74 handler"), "Chrome74") : (l2.debug("detectDeviceImpl() | using Chrome111 handler"), "Chrome111");
    const s3 = ((t4) => {
      if (l2.debug("getFirefoxMajorVersion()"), w3(t4)) return void l2.debug("getFirefoxMajorVersion() | this is iOS => undefined");
      if (y4()) return void l2.debug("getFirefoxMajorVersion() | this is React-Native => undefined");
      const e4 = t4?.match(/\bFirefox\/(\w+)/i);
      if (e4?.[1]) {
        const t5 = +e4[1];
        return l2.debug("getFirefoxMajorVersion() | Firefox major version based on User-Agent => " + t5), t5;
      }
      l2.debug("getFirefoxMajorVersion() | this is not Firefox => undefined");
    })(t3);
    if (s3) return 120 > s3 ? void l2.warn("detectDeviceImpl() | unsupported Firefox browser/version") : (l2.debug("detectDeviceImpl() | using Firefox120 handler"), "Firefox120");
    const r3 = ((t4) => {
      if (l2.debug("getMacOSWebKitMajorVersion()"), w3(t4)) return void l2.debug("getMacOSWebKitMajorVersion() | this is iOS => undefined");
      if (y4()) return void l2.debug("getMacOSWebKitMajorVersion() | this is React-Native => undefined");
      if (!t4 || !/\bSafari\b/i.test(t4) || /\bChrome\b/i.test(t4) || /\bChromium\b/i.test(t4) || /\bFirefox\b/i.test(t4)) return void l2.debug("getMacOSWebKitMajorVersion() | this is not Safari => undefined");
      const e4 = t4.match(/AppleWebKit\/(\w+)/i);
      if (e4?.[1]) {
        const t5 = +e4[1];
        return l2.debug("getMacOSWebKitMajorVersion() | WebKit major version based on User-Agent => " + t5), t5;
      }
      l2.debug("getMacOSWebKitMajorVersion() | this is not WebKit => undefined");
    })(t3);
    if (r3) return 605 > r3 ? void l2.warn("detectDeviceImpl() | unsupported desktop Safari browser/version") : (l2.debug("detectDeviceImpl() | using Safari12 handler"), "Safari12");
    const o3 = ((t4) => {
      if (l2.debug("getIOSWebKitMajorVersion()"), !w3(t4)) return void l2.debug("getIOSWebKitMajorVersion() | this is not iOS => undefined");
      if (y4()) return void l2.debug("getIOSWebKitMajorVersion() | this is React-Native => undefined");
      const e4 = t4?.match(/AppleWebKit\/(\w+)/i);
      if (e4?.[1]) {
        const t5 = +e4[1];
        return l2.debug("getIOSWebKitMajorVersion() | WebKit major version based on User-Agent => " + t5), t5;
      }
      l2.debug("getIOSWebKitMajorVersion() | this is not WebKit => undefined");
    })(t3);
    return o3 ? 605 > o3 ? void l2.warn("detectDeviceImpl() | unsupported iOS Safari based browser/version") : (l2.debug("detectDeviceImpl() | using Safari12 handler"), "Safari12") : y4() ? "undefined" != typeof RTCPeerConnection && "undefined" != typeof RTCRtpTransceiver ? (l2.debug("detectDeviceImpl() | using ReactNative106 handler"), "ReactNative106") : void l2.warn("detectDeviceImpl() | unsupported react-native-webrtc version without RTCPeerConnection or RTCRtpTransceiver, forgot to call registerGlobals() on it?") : void l2.warn('detectDeviceImpl() | device not supported [userAgent:"%s", userAgentData:%o]', t3, e3);
  }
  function w3(t3, e3) {
    return l2.debug("isIOS()"), "iOS" === e3?.platform ? (l2.debug("isIOS() | this is iOS based on NavigatorUAData.platform => true"), true) : e3?.platform ? (l2.debug("isIOS() | this is not iOS based on NavigatorUAData.platform => false"), false) : t3 && /iPad|iPhone|iPod/.test(t3) ? (l2.debug("isIOS() | this is iOS based on User-Agent => true"), true) : "object" == typeof navigator && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? (l2.debug("isIOS() | this is iPadOS 13+ based on User-Agent => true"), true) : (l2.debug("isIOS() | this is not iOS => false"), false);
  }
  function y4() {
    return l2.debug("isReactNative()"), "object" == typeof navigator && "ReactNative" === navigator.product ? (l2.debug("isReactNative() | this is React-Native based on navigator.product"), true) : (l2.debug("isReactNative() | this is not React-Native => false"), false);
  }
  return f.Device = class t3 {
    Lt;
    Ut;
    Vt = false;
    Y;
    X;
    Z = { audio: false, video: false };
    Bt;
    B = new e2.EnhancedEventEmitter();
    static factory() {
      return __async(this, arguments, function* ({ handlerName: e3, handlerFactory: s3 } = {}) {
        if (l2.debug("factory()"), e3 && s3) throw new TypeError("just one of handlerName or handlerInterface can be given");
        if (!e3 && !s3 && !(e3 = yield p3())) throw new i2.UnsupportedError("device not supported");
        return new t3({ handlerName: e3, handlerFactory: s3 });
      });
    }
    constructor({ handlerName: t4, handlerFactory: e3 } = {}) {
      if (l2.debug("constructor()"), t4 && e3) throw new TypeError("just one of handlerName or handlerInterface can be given");
      if (e3) this.Lt = e3;
      else {
        if (t4) l2.debug("constructor() | handler given: %s", t4);
        else {
          if (!(t4 = u2())) throw new i2.UnsupportedError("device not supported");
          l2.debug("constructor() | detected handler: %s", t4);
        }
        switch (t4) {
          case "Chrome111":
            this.Lt = n2.Chrome111.createFactory();
            break;
          case "Chrome74":
            this.Lt = a2.Chrome74.createFactory();
            break;
          case "Firefox120":
            this.Lt = c2.Firefox120.createFactory();
            break;
          case "Safari12":
            this.Lt = h2.Safari12.createFactory();
            break;
          case "ReactNative106":
            this.Lt = d2.ReactNative106.createFactory();
            break;
          default:
            throw new TypeError(`unknown handlerName "${t4}"`);
        }
      }
      this.Ut = this.Lt.name;
    }
    get handlerName() {
      return this.Ut;
    }
    get loaded() {
      return this.Vt;
    }
    get rtpCapabilities() {
      if (!this.Vt) throw new i2.InvalidStateError("not loaded");
      return this.X;
    }
    get sctpCapabilities() {
      if (!this.Vt) throw new i2.InvalidStateError("not loaded");
      return this.Bt;
    }
    get observer() {
      return this.B;
    }
    load(_0) {
      return __async(this, arguments, function* ({ routerRtpCapabilities: t4, preferLocalCodecsOrder: e3 = false }) {
        if (l2.debug("load() [routerRtpCapabilities:%o]", t4), this.Vt) throw new i2.InvalidStateError("already loaded");
        const o3 = s2.clone(t4);
        r2.validateAndNormalizeRtpCapabilities(o3);
        const { getNativeRtpCapabilities: n3, getNativeSctpCapabilities: a3 } = this.Lt, c3 = s2.clone(yield n3());
        r2.validateAndNormalizeRtpCapabilities(c3), l2.debug("load() | got native RTP capabilities:%o", c3), this.Y = (t5) => s2.clone(r2.getExtendedRtpCapabilities(t5, o3, e3));
        const h3 = r2.getExtendedRtpCapabilities(c3, o3, false);
        this.X = r2.getRecvRtpCapabilities(h3), r2.validateAndNormalizeRtpCapabilities(this.X), l2.debug("load() | got receiving RTP capabilities:%o", this.X), this.Z.audio = r2.canSend("audio", this.X), this.Z.video = r2.canSend("video", this.X), this.Bt = yield a3(), r2.validateSctpCapabilities(this.Bt), l2.debug("load() | got native SCTP capabilities:%o", this.Bt), l2.debug("load() succeeded"), this.Vt = true;
      });
    }
    canProduce(t4) {
      if (!this.Vt) throw new i2.InvalidStateError("not loaded");
      if ("audio" !== t4 && "video" !== t4) throw new TypeError(`invalid kind "${t4}"`);
      return this.Z[t4];
    }
    createSendTransport({ id: t4, iceParameters: e3, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: n3, additionalSettings: a3, appData: c3 }) {
      return l2.debug("createSendTransport()"), this.createTransport({ direction: "send", id: t4, iceParameters: e3, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: n3, additionalSettings: a3, appData: c3 });
    }
    createRecvTransport({ id: t4, iceParameters: e3, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: n3, additionalSettings: a3, appData: c3 }) {
      return l2.debug("createRecvTransport()"), this.createTransport({ direction: "recv", id: t4, iceParameters: e3, iceCandidates: i3, dtlsParameters: s3, sctpParameters: r3, iceServers: o3, iceTransportPolicy: n3, additionalSettings: a3, appData: c3 });
    }
    createTransport({ direction: t4, id: e3, iceParameters: s3, iceCandidates: r3, dtlsParameters: n3, sctpParameters: a3, iceServers: c3, iceTransportPolicy: h3, additionalSettings: d3, appData: l3 }) {
      if (!this.Vt) throw new i2.InvalidStateError("not loaded");
      if ("string" != typeof e3) throw new TypeError("missing id");
      if ("object" != typeof s3) throw new TypeError("missing iceParameters");
      if (!Array.isArray(r3)) throw new TypeError("missing iceCandidates");
      if ("object" != typeof n3) throw new TypeError("missing dtlsParameters");
      if (a3 && "object" != typeof a3) throw new TypeError("wrong sctpParameters");
      if (l3 && "object" != typeof l3) throw new TypeError("if given, appData must be an object");
      const u3 = new o2.Transport({ direction: t4, id: e3, iceParameters: s3, iceCandidates: r3, dtlsParameters: n3, sctpParameters: a3, iceServers: c3, iceTransportPolicy: h3, additionalSettings: d3, appData: l3, handlerFactory: this.Lt, getSendExtendedRtpCapabilities: this.Y, recvRtpCapabilities: this.X, canProduceByKind: this.Z });
      return this.B.safeEmit("newtransport", u3), u3;
    }
  }, f;
}
var oe;
var ne = {};
var ae = {};
var ce = {};
function he() {
  if (oe) return ce;
  oe = 1;
  for (var t2, e2 = 256, i2 = []; e2--; ) i2[e2] = (e2 + 256).toString(16).substring(1);
  return ce.v4 = () => {
    var s2, r2 = 0, o2 = "";
    if (!t2 || e2 + 16 > 256) {
      for (t2 = Array(r2 = 256); r2--; ) t2[r2] = 256 * Math.random() | 0;
      r2 = e2 = 0;
    }
    for (; 16 > r2; r2++) s2 = t2[e2 + r2], o2 += 6 == r2 ? i2[15 & s2 | 64] : 8 == r2 ? i2[63 & s2 | 128] : i2[s2], 1 & r2 && r2 > 1 && 11 > r2 && (o2 += "-");
    return e2++, o2;
  }, ce;
}
var de;
var le = {};
function ue() {
  return de || (de = 1, Object.defineProperty(le, "h", { value: true }), le.FakeEventTarget = void 0, le.FakeEventTarget = class {
    listeners = {};
    addEventListener(t2, e2, i2) {
      e2 && (this.listeners[t2] = this.listeners[t2] ?? [], this.listeners[t2].push({ callback: "function" == typeof e2 ? e2 : e2.handleEvent, once: "object" == typeof i2 && true === i2.once }));
    }
    removeEventListener(t2, e2, i2) {
      this.listeners[t2] && e2 && (this.listeners[t2] = this.listeners[t2].filter((t3) => t3.callback !== ("function" == typeof e2 ? e2 : e2.handleEvent)));
    }
    dispatchEvent(t2) {
      if (!t2 || "string" != typeof t2.type) throw Error("invalid event object");
      const e2 = this.listeners[t2.type];
      if (!e2) return true;
      for (const s2 of [...e2]) {
        try {
          s2.callback.call(this, t2);
        } catch (i2) {
          setTimeout(() => {
            throw i2;
          }, 0);
        }
        s2.once && this.removeEventListener(t2.type, s2.callback);
      }
      return !t2.defaultPrevented;
    }
  }), le;
}
var pe;
var me = {};
function fe() {
  return pe || (pe = 1, Object.defineProperty(me, "h", { value: true }), me.FakeEvent = void 0, me.FakeEvent = class {
    NONE = 0;
    CAPTURING_PHASE = 1;
    AT_TARGET = 2;
    BUBBLING_PHASE = 3;
    type;
    bubbles;
    cancelable;
    defaultPrevented = false;
    composed = false;
    currentTarget = null;
    eventPhase = this.NONE;
    isTrusted = true;
    target = null;
    timeStamp = 0;
    cancelBubble = false;
    returnValue = true;
    srcElement = null;
    constructor(t2, e2 = {}) {
      this.type = t2, this.bubbles = e2.bubbles ?? false, this.cancelable = e2.cancelable ?? false;
    }
    preventDefault() {
      this.cancelable && (this.defaultPrevented = true);
    }
    stopPropagation() {
    }
    stopImmediatePropagation() {
    }
    composedPath() {
      return [];
    }
    initEvent(t2, e2, i2) {
    }
  }), me;
}
var we;
var ge;
var ye = {};
function ve() {
  return we || (we = 1, Object.defineProperty(ye, "h", { value: true }), ye.clone = (t2) => void 0 === t2 ? void 0 : Number.isNaN(t2) ? NaN : "function" == typeof structuredClone ? structuredClone(t2) : JSON.parse(JSON.stringify(t2))), ye;
}
function be() {
  if (ge) return ae;
  ge = 1, Object.defineProperty(ae, "h", { value: true }), ae.FakeMediaStreamTrack = void 0;
  const t2 = he(), e2 = ue(), i2 = fe(), s2 = ve();
  class r2 extends e2.FakeEventTarget {
    #t;
    #e;
    #i;
    #s;
    #r;
    #o;
    #n;
    #a;
    #c;
    #h;
    #d;
    #l = null;
    #u = null;
    #p = null;
    #m = null;
    #f = null;
    constructor({ kind: e3, id: i3, label: s3, contentHint: r3, enabled: o2, muted: n2, readyState: a2, capabilities: c2, constraints: h2, settings: d2, data: l2 }) {
      super(), this.#t = i3 ?? (0, t2.v4)(), this.#e = e3, this.#i = s3 ?? "", this.#n = r3 ?? "", this.#r = o2 ?? true, this.#o = n2 ?? false, this.#s = a2 ?? "live", this.#a = c2 ?? {}, this.#c = h2 ?? {}, this.#h = d2 ?? {}, this.#d = l2 ?? {};
    }
    get id() {
      return this.#t;
    }
    get kind() {
      return this.#e;
    }
    get label() {
      return this.#i;
    }
    get contentHint() {
      return this.#n;
    }
    set contentHint(t3) {
      this.#n = t3;
    }
    get enabled() {
      return this.#r;
    }
    set enabled(t3) {
      const e3 = this.#r !== t3;
      this.#r = t3, e3 && this.dispatchEvent(new i2.FakeEvent("enabledchange"));
    }
    get muted() {
      return this.#o;
    }
    get readyState() {
      return this.#s;
    }
    get data() {
      return this.#d;
    }
    set data(t3) {
      this.#d = t3;
    }
    get onmute() {
      return this.#l;
    }
    set onmute(t3) {
      this.#l && this.removeEventListener("mute", this.#l), this.#l = t3, t3 && this.addEventListener("mute", t3);
    }
    get onunmute() {
      return this.#u;
    }
    set onunmute(t3) {
      this.#u && this.removeEventListener("unmute", this.#u), this.#u = t3, t3 && this.addEventListener("unmute", t3);
    }
    get onended() {
      return this.#p;
    }
    set onended(t3) {
      this.#p && this.removeEventListener("ended", this.#p), this.#p = t3, t3 && this.addEventListener("ended", t3);
    }
    get onenabledchange() {
      return this.#m;
    }
    set onenabledchange(t3) {
      this.#m && this.removeEventListener("enabledchange", this.#m), this.#m = t3, t3 && this.addEventListener("enabledchange", t3);
    }
    get onstopped() {
      return this.#f;
    }
    set onstopped(t3) {
      this.#f && this.removeEventListener("stopped", this.#f), this.#f = t3, t3 && this.addEventListener("stopped", t3);
    }
    addEventListener(t3, e3, i3) {
      super.addEventListener(t3, e3, i3);
    }
    removeEventListener(t3, e3, i3) {
      super.removeEventListener(t3, e3, i3);
    }
    stop() {
      "ended" !== this.#s && (this.#s = "ended", this.dispatchEvent(new i2.FakeEvent("stopped")));
    }
    clone({ id: e3, data: i3 } = {}) {
      return new r2({ id: e3 ?? (0, t2.v4)(), kind: this.#e, label: this.#i, contentHint: this.#n, enabled: this.#r, muted: this.#o, readyState: this.#s, capabilities: (0, s2.clone)(this.#a), constraints: (0, s2.clone)(this.#c), settings: (0, s2.clone)(this.#h), data: i3 ?? (0, s2.clone)(this.#d) });
    }
    getCapabilities() {
      return this.#a;
    }
    getConstraints() {
      return this.#c;
    }
    applyConstraints() {
      return __async(this, arguments, function* (t3 = {}) {
        return this.#c = t3, Promise.resolve();
      });
    }
    getSettings() {
      return this.#h;
    }
    remoteStop() {
      "ended" !== this.#s && (this.#s = "ended", this.dispatchEvent(new i2.FakeEvent("stopped")), this.dispatchEvent(new i2.FakeEvent("ended")));
    }
    remoteMute() {
      this.#o || (this.#o = true, this.dispatchEvent(new i2.FakeEvent("mute")));
    }
    remoteUnmute() {
      this.#o && (this.#o = false, this.dispatchEvent(new i2.FakeEvent("unmute")));
    }
  }
  return ae.FakeMediaStreamTrack = r2, ae;
}
var Ee;
var Ie;
var Te = {};
function Re() {
  return Ee || (Ee = 1, Object.defineProperty(Te, "h", { value: true }), Te.FakeEventTarget = void 0, Te.FakeEventTarget = class {
    listeners = {};
    addEventListener(t2, e2, i2) {
      e2 && (this.listeners[t2] = this.listeners[t2] ?? [], this.listeners[t2].push({ callback: "function" == typeof e2 ? e2 : e2.handleEvent, once: "object" == typeof i2 && true === i2.once }));
    }
    removeEventListener(t2, e2, i2) {
      this.listeners[t2] && e2 && (this.listeners[t2] = this.listeners[t2].filter((t3) => t3.callback !== ("function" == typeof e2 ? e2 : e2.handleEvent)));
    }
    dispatchEvent(t2) {
      if (!t2 || "string" != typeof t2.type) throw Error("invalid event object");
      const e2 = this.listeners[t2.type];
      if (!e2) return true;
      for (const s2 of [...e2]) {
        try {
          s2.callback.call(this, t2);
        } catch (i2) {
          setTimeout(() => {
            throw i2;
          }, 0);
        }
        s2.once && this.removeEventListener(t2.type, s2.callback);
      }
      return !t2.defaultPrevented;
    }
  }), Te;
}
function Se() {
  if (Ie) return ne;
  Ie = 1, Object.defineProperty(ne, "h", { value: true }), ne.FakeHandler = void 0;
  const t2 = be(), e2 = T(), i2 = g(), s2 = P(), r2 = F(), o2 = k(), n2 = Re(), a2 = new i2.Logger("FakeHandler"), c2 = "FakeHandler";
  ne.FakeHandler = class i3 extends e2.EnhancedEventEmitter {
    P = false;
    qt;
    Y;
    zt = "CNAME-" + s2.generateRandomNumber();
    Gt = "" + s2.generateRandomNumber();
    Ft = false;
    Wt = 1;
    Ht = /* @__PURE__ */ new Map();
    Jt = 0;
    static createFactory(t3) {
      return { name: c2, factory(e3) {
        return new i3(e3, t3);
      }, getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          return a2.debug("getNativeRtpCapabilities()"), i3.getLocalRtpCapabilities(t3);
        });
      }, getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          return a2.debug("getNativeSctpCapabilities()"), t3.generateNativeSctpCapabilities();
        });
      } };
    }
    static getLocalRtpCapabilities(t3) {
      const e3 = t3.generateNativeRtpCapabilities();
      return r2.validateAndNormalizeRtpCapabilities(e3), e3;
    }
    constructor({ getSendExtendedRtpCapabilities: t3 }, e3) {
      super(), a2.debug("constructor()"), this.Y = t3, this.qt = e3;
    }
    get name() {
      return c2;
    }
    close() {
      a2.debug("close()"), this.P || (this.P = true, super.close());
    }
    setIceGatheringState(t3) {
      this.emit("@icegatheringstatechange", t3);
    }
    setConnectionState(t3) {
      this.emit("@connectionstatechange", t3);
    }
    updateIceServers(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), a2.debug("updateIceServers()");
      });
    }
    restartIce(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), a2.debug("restartIce()");
      });
    }
    getTransportStats() {
      return __async(this, null, function* () {
        return this.assertNotClosed(), /* @__PURE__ */ new Map();
      });
    }
    send(_0) {
      return __async(this, arguments, function* ({ track: t3, streamId: e3, encodings: o3, codec: n3 }) {
        this.assertNotClosed(), a2.debug("send() [kind:%s, track.id:%s]", t3.kind, t3.id), this.Ft || (yield this.setupTransport({ localDtlsRole: "server" }));
        const c3 = i3.getLocalRtpCapabilities(this.qt), h3 = this.Y(c3), d2 = r2.getSendingRtpParameters(t3.kind, h3);
        d2.codecs = r2.reduceCodecs(d2.codecs, n3);
        const l2 = d2.codecs.some((t4) => /.+\/rtx$/i.test(t4.mimeType));
        d2.mid = "mid-" + s2.generateRandomNumber(), d2.msid = `${e3 ?? "-"} ${t3.id}`, o3 || (o3 = [{}]);
        for (const i4 of o3) i4.ssrc = s2.generateRandomNumber(), l2 && (i4.rtx = { ssrc: s2.generateRandomNumber() });
        d2.encodings = o3, d2.rtcp = { cname: this.zt, reducedSize: true, mux: true }, d2.msid = `${e3 ?? this.Gt} ${t3.id}`;
        const u2 = this.Wt++;
        return this.Ht.set(u2, t3), { localId: u2 + "", rtpParameters: d2 };
      });
    }
    stopSending(t3) {
      return __async(this, null, function* () {
        if (a2.debug("stopSending() [localId:%s]", t3), !this.P) {
          if (!this.Ht.has(+t3)) throw Error("local track not found");
          this.Ht.delete(+t3);
        }
      });
    }
    pauseSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed();
      });
    }
    resumeSending(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed();
      });
    }
    replaceTrack(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), e3 ? a2.debug("replaceTrack() [localId:%s, track.id:%s]", t3, e3.id) : a2.debug("replaceTrack() [localId:%s, no track]", t3), this.Ht.delete(+t3), this.Ht.set(+t3, e3);
      });
    }
    setMaxSpatialLayer(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), a2.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t3, e3);
      });
    }
    setRtpEncodingParameters(t3, e3) {
      return __async(this, null, function* () {
        this.assertNotClosed(), a2.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t3, e3);
      });
    }
    getSenderStats(t3) {
      return __async(this, null, function* () {
        return this.assertNotClosed(), /* @__PURE__ */ new Map();
      });
    }
    sendDataChannel(_0) {
      return __async(this, arguments, function* ({ ordered: t3, maxPacketLifeTime: e3, maxRetransmits: i4, label: s3, protocol: r3 }) {
        return this.assertNotClosed(), this.Ft || (yield this.setupTransport({ localDtlsRole: "server" })), a2.debug("sendDataChannel()"), { dataChannel: new h2({ id: this.Jt++, ordered: t3, maxPacketLifeTime: e3, maxRetransmits: i4, label: s3, protocol: r3 }), sctpStreamParameters: { streamId: this.Jt, ordered: t3, maxPacketLifeTime: e3, maxRetransmits: i4 } };
      });
    }
    receive(e3) {
      return __async(this, null, function* () {
        this.assertNotClosed();
        const i4 = [];
        for (const s3 of e3) {
          const { trackId: e4, kind: r3 } = s3;
          this.Ft || (yield this.setupTransport({ localDtlsRole: "client" })), a2.debug("receive() [trackId:%s, kind:%s]", e4, r3);
          const o3 = this.Wt++, n3 = new t2.FakeMediaStreamTrack({ kind: r3 });
          this.Ht.set(o3, n3), i4.push({ localId: o3 + "", track: n3 });
        }
        return i4;
      });
    }
    stopReceiving(t3) {
      return __async(this, null, function* () {
        if (!this.P) for (const e3 of t3) a2.debug("stopReceiving() [localId:%s]", e3), this.Ht.delete(+e3);
      });
    }
    pauseReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed();
      });
    }
    resumeReceiving(t3) {
      return __async(this, null, function* () {
        this.assertNotClosed();
      });
    }
    getReceiverStats(t3) {
      return __async(this, null, function* () {
        return this.assertNotClosed(), /* @__PURE__ */ new Map();
      });
    }
    receiveDataChannel(_0) {
      return __async(this, arguments, function* ({ sctpStreamParameters: t3, label: e3, protocol: i4 }) {
        return this.assertNotClosed(), this.Ft || (yield this.setupTransport({ localDtlsRole: "client" })), a2.debug("receiveDataChannel()"), { dataChannel: new h2({ id: t3.streamId, ordered: t3.ordered, maxPacketLifeTime: t3.maxPacketLifeTime, maxRetransmits: t3.maxRetransmits, label: e3, protocol: i4 }) };
      });
    }
    setupTransport(_0) {
      return __async(this, arguments, function* ({ localDtlsRole: t3 }) {
        const e3 = s2.clone(this.qt.generateLocalDtlsParameters());
        t3 && (e3.role = t3), this.emit("@connectionstatechange", "connecting"), yield new Promise((t4, i4) => this.emit("@connect", { dtlsParameters: e3 }, t4, i4)), this.Ft = true;
      });
    }
    assertNotClosed() {
      if (this.P) throw new o2.InvalidStateError("method called in a closed handler");
    }
  };
  class h2 extends n2.FakeEventTarget {
    C;
    Kt = true;
    Yt;
    Qt;
    Xt;
    Zt;
    te;
    ee = "connecting";
    ie = 0;
    se = 0;
    re = "arraybuffer";
    oe = null;
    ne = null;
    ae = null;
    ce = null;
    he = null;
    de = null;
    constructor({ id: t3, ordered: e3 = true, maxPacketLifeTime: i3 = null, maxRetransmits: s3 = null, label: r3 = "", protocol: o3 = "" }) {
      super(), a2.debug(`constructor() [id:${t3}, ordered:${e3}, maxPacketLifeTime:${i3}, maxRetransmits:${s3}, label:${r3}, protocol:${o3}`), this.C = t3, this.Yt = e3, this.Qt = i3, this.Xt = s3, this.Zt = r3, this.te = o3;
    }
    get id() {
      return this.C;
    }
    get negotiated() {
      return this.Kt;
    }
    get ordered() {
      return this.Yt;
    }
    get maxPacketLifeTime() {
      return this.Qt;
    }
    get maxRetransmits() {
      return this.Xt;
    }
    get label() {
      return this.Zt;
    }
    get protocol() {
      return this.te;
    }
    get readyState() {
      return this.ee;
    }
    get bufferedAmount() {
      return this.ie;
    }
    get bufferedAmountLowThreshold() {
      return this.se;
    }
    set bufferedAmountLowThreshold(t3) {
      this.se = t3;
    }
    get binaryType() {
      return this.re;
    }
    set binaryType(t3) {
      this.re = t3;
    }
    get onopen() {
      return this.oe;
    }
    set onopen(t3) {
      this.oe && this.removeEventListener("open", this.oe), this.oe = t3, t3 && this.addEventListener("open", t3);
    }
    get onclosing() {
      return this.ne;
    }
    set onclosing(t3) {
      this.ne && this.removeEventListener("closing", this.ne), this.ne = t3, t3 && this.addEventListener("closing", t3);
    }
    get onclose() {
      return this.ae;
    }
    set onclose(t3) {
      this.ae && this.removeEventListener("close", this.ae), this.ae = t3, t3 && this.addEventListener("close", t3);
    }
    get onmessage() {
      return this.ce;
    }
    set onmessage(t3) {
      this.ce && this.removeEventListener("message", this.ce), this.ce = t3, t3 && this.addEventListener("message", t3);
    }
    get onbufferedamountlow() {
      return this.he;
    }
    set onbufferedamountlow(t3) {
      this.he && this.removeEventListener("bufferedamountlow", this.he), this.he = t3, t3 && this.addEventListener("bufferedamountlow", t3);
    }
    get onerror() {
      return this.de;
    }
    set onerror(t3) {
      this.de && this.removeEventListener("error", this.de), this.de = t3, t3 && this.addEventListener("error", t3);
    }
    addEventListener(t3, e3, i3) {
      super.addEventListener(t3, e3, i3);
    }
    removeEventListener(t3, e3, i3) {
      super.removeEventListener(t3, e3, i3);
    }
    close() {
      ["closing", "closed"].includes(this.ee) || (this.ee = "closed");
    }
    send(t3) {
      if ("open" !== this.ee) throw new o2.InvalidStateError("not open");
    }
  }
  return ne;
}
var ke;
var Ce;
var _e = {};
function Pe() {
  if (ke) return _e;
  ke = 1, Object.defineProperty(_e, "h", { value: true }), _e.generateRouterRtpCapabilities = () => t2.deepFreeze({ codecs: [{ mimeType: "audio/opus", kind: "audio", preferredPayloadType: 100, clockRate: 48e3, channels: 2, rtcpFeedback: [{ type: "transport-cc" }], parameters: { useinbandfec: 1, foo: "bar" } }, { mimeType: "video/VP8", kind: "video", preferredPayloadType: 101, clockRate: 9e4, rtcpFeedback: [{ type: "nack" }, { type: "nack", parameter: "pli" }, { type: "ccm", parameter: "fir" }, { type: "goog-remb" }, { type: "transport-cc" }], parameters: { "x-google-start-bitrate": 1500 } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 102, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 101 } }, { mimeType: "video/H264", kind: "video", preferredPayloadType: 103, clockRate: 9e4, rtcpFeedback: [{ type: "nack" }, { type: "nack", parameter: "pli" }, { type: "ccm", parameter: "fir" }, { type: "goog-remb" }, { type: "transport-cc" }], parameters: { "level-asymmetry-allowed": 1, "packetization-mode": 1, "profile-level-id": "42e01f" } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 104, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 103 } }, { mimeType: "video/VP9", kind: "video", preferredPayloadType: 105, clockRate: 9e4, rtcpFeedback: [{ type: "nack" }, { type: "nack", parameter: "pli" }, { type: "ccm", parameter: "fir" }, { type: "goog-remb" }, { type: "transport-cc" }], parameters: { "profile-id": 0, "x-google-start-bitrate": 1500 } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 106, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 105 } }], headerExtensions: [{ kind: "audio", uri: "urn:ietf:params:rtp-hdrext:sdes:mid", preferredId: 1, preferredEncrypt: false, direction: "sendrecv" }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:sdes:mid", preferredId: 1, preferredEncrypt: false, direction: "sendrecv" }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id", preferredId: 2, preferredEncrypt: false, direction: "recvonly" }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id", preferredId: 3, preferredEncrypt: false, direction: "recvonly" }, { kind: "audio", uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time", preferredId: 4, preferredEncrypt: false, direction: "sendrecv" }, { kind: "video", uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time", preferredId: 4, preferredEncrypt: false, direction: "sendrecv" }, { kind: "audio", uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", preferredId: 5, preferredEncrypt: false, direction: "recvonly" }, { kind: "video", uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", preferredId: 5, preferredEncrypt: false, direction: "sendrecv" }, { kind: "audio", uri: "urn:ietf:params:rtp-hdrext:ssrc-audio-level", preferredId: 10, preferredEncrypt: false, direction: "sendrecv" }, { kind: "video", uri: "urn:3gpp:video-orientation", preferredId: 11, preferredEncrypt: false, direction: "sendrecv" }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:toffset", preferredId: 12, preferredEncrypt: false, direction: "sendrecv" }] }), _e.generateNativeRtpCapabilities = () => ({ codecs: [{ mimeType: "audio/opus", kind: "audio", preferredPayloadType: 111, clockRate: 48e3, channels: 2, rtcpFeedback: [{ type: "transport-cc" }], parameters: { minptime: 10, useinbandfec: 1 } }, { mimeType: "audio/ISAC", kind: "audio", preferredPayloadType: 103, clockRate: 16e3, channels: 1, rtcpFeedback: [{ type: "transport-cc" }], parameters: {} }, { mimeType: "audio/CN", kind: "audio", preferredPayloadType: 106, clockRate: 32e3, channels: 1, rtcpFeedback: [{ type: "transport-cc" }], parameters: {} }, { mimeType: "audio/foo", kind: "audio", preferredPayloadType: 107, clockRate: 9e4, channels: 4, rtcpFeedback: [{ type: "foo-qwe-qwe" }], parameters: { foo: "lalala" } }, { mimeType: "video/BAZCODEC", kind: "video", preferredPayloadType: 100, clockRate: 9e4, rtcpFeedback: [{ type: "foo" }, { type: "transport-cc" }, { type: "ccm", parameter: "fir" }, { type: "nack" }, { type: "nack", parameter: "pli" }], parameters: { baz: "1234abcd" } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 101, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 100 } }, { mimeType: "video/VP8", kind: "video", preferredPayloadType: 96, clockRate: 9e4, rtcpFeedback: [{ type: "goog-remb" }, { type: "transport-cc" }, { type: "ccm", parameter: "fir" }, { type: "nack" }, { type: "nack", parameter: "pli" }], parameters: { baz: "1234abcd" } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 97, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 96 } }, { mimeType: "video/VP9", kind: "video", preferredPayloadType: 98, clockRate: 9e4, rtcpFeedback: [{ type: "goog-remb" }, { type: "transport-cc" }, { type: "ccm", parameter: "fir" }, { type: "nack" }, { type: "nack", parameter: "pli" }], parameters: { "profile-id": 0 } }, { mimeType: "video/rtx", kind: "video", preferredPayloadType: 99, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 98 } }], headerExtensions: [{ kind: "audio", uri: "urn:ietf:params:rtp-hdrext:sdes:mid", preferredId: 1 }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:sdes:mid", preferredId: 1 }, { kind: "video", uri: "urn:ietf:params:rtp-hdrext:toffset", preferredId: 2 }, { kind: "video", uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time", preferredId: 3 }, { kind: "video", uri: "urn:3gpp:video-orientation", preferredId: 4 }, { kind: "video", uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", preferredId: 5 }, { kind: "video", uri: "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay", preferredId: 6 }, { kind: "video", uri: "http://www.webrtc.org/experiments/rtp-hdrext/video-content-type", preferredId: 7 }, { kind: "video", uri: "http://www.webrtc.org/experiments/rtp-hdrext/video-timing", preferredId: 8 }, { kind: "audio", uri: "urn:ietf:params:rtp-hdrext:ssrc-audio-level", preferredId: 10 }] }), _e.generateNativeSctpCapabilities = () => t2.deepFreeze({ numStreams: { OS: 2048, MIS: 2048 } }), _e.generateLocalDtlsParameters = () => t2.deepFreeze({ fingerprints: [{ algorithm: "sha-256", value: "82:5A:68:3D:36:C3:0A:DE:AF:E7:32:43:D2:88:83:57:AC:2D:65:E5:80:C4:B6:FB:AF:1A:A0:21:9F:6D:0C:AD" }], role: "auto" }), _e.generateTransportRemoteParameters = () => ({ id: e2(), iceParameters: t2.deepFreeze({ iceLite: true, password: "yku5ej8nvfaor28lvtrabcx0wkrpkztz", usernameFragment: "h3hk1iz6qqlnqlne" }), iceCandidates: t2.deepFreeze([{ foundation: "udpcandidate", address: "9.9.9.9", ip: "9.9.9.9", port: 40533, priority: 1078862079, protocol: "udp", type: "host", tcpType: "passive" }, { foundation: "udpcandidate", address: "9.9.9.9", ip: "9:9:9:9:9:9", port: 41333, priority: 1078862089, protocol: "udp", type: "host", tcpType: "passive" }]), dtlsParameters: t2.deepFreeze({ fingerprints: [{ algorithm: "sha-256", value: "A9:F4:E0:D2:74:D3:0F:D9:CA:A5:2F:9F:7F:47:FA:F0:C4:72:DD:73:49:D0:3B:14:90:20:51:30:1B:90:8E:71" }, { algorithm: "sha-384", value: "03:D9:0B:87:13:98:F6:6D:BC:FC:92:2E:39:D4:E1:97:32:61:30:56:84:70:81:6E:D1:82:97:EA:D9:C1:21:0F:6B:C5:E7:7F:E1:97:0C:17:97:6E:CF:B3:EF:2E:74:B0" }, { algorithm: "sha-512", value: "84:27:A4:28:A4:73:AF:43:02:2A:44:68:FF:2F:29:5C:3B:11:9A:60:F4:A8:F0:F5:AC:A0:E3:49:3E:B1:34:53:A9:85:CE:51:9B:ED:87:5E:B8:F4:8E:3D:FA:20:51:B8:96:EE:DA:56:DC:2F:5C:62:79:15:23:E0:21:82:2B:2C" }], role: "auto" }), sctpParameters: t2.deepFreeze({ port: 5e3, OS: 2048, MIS: 2048, maxMessageSize: 2e6 }) }), _e.generateProducerRemoteParameters = () => t2.deepFreeze({ id: e2() }), _e.generateConsumerRemoteParameters = ({ id: i2, codecMimeType: s2 } = {}) => {
    switch (s2) {
      case "audio/opus":
        return { id: i2 ?? e2(), producerId: e2(), kind: "audio", rtpParameters: t2.deepFreeze({ codecs: [{ mimeType: "audio/opus", payloadType: 100, clockRate: 48e3, channels: 2, rtcpFeedback: [{ type: "transport-cc" }], parameters: { useinbandfec: 1, foo: "bar" } }], encodings: [{ ssrc: 46687003 }], headerExtensions: [{ uri: "urn:ietf:params:rtp-hdrext:sdes:mid", id: 1 }, { uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", id: 5 }, { uri: "urn:ietf:params:rtp-hdrext:ssrc-audio-level", id: 10 }], rtcp: { cname: "wB4Ql4lrsxYLjzuN", reducedSize: true, mux: true } }) };
      case "audio/ISAC":
        return { id: i2 ?? e2(), producerId: e2(), kind: "audio", rtpParameters: t2.deepFreeze({ codecs: [{ mimeType: "audio/ISAC", payloadType: 111, clockRate: 16e3, channels: 1, rtcpFeedback: [{ type: "transport-cc" }], parameters: {} }], encodings: [{ ssrc: 46687004 }], headerExtensions: [{ uri: "urn:ietf:params:rtp-hdrext:sdes:mid", id: 1 }, { uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", id: 5 }], rtcp: { cname: "wB4Ql4lrsxYLjzuN", reducedSize: true, mux: true } }) };
      case "video/VP8":
        return { id: i2 ?? e2(), producerId: e2(), kind: "video", rtpParameters: t2.deepFreeze({ codecs: [{ mimeType: "video/VP8", payloadType: 101, clockRate: 9e4, rtcpFeedback: [{ type: "nack" }, { type: "nack", parameter: "pli" }, { type: "ccm", parameter: "fir" }, { type: "goog-remb" }, { type: "transport-cc" }], parameters: { "x-google-start-bitrate": 1500 } }, { mimeType: "video/rtx", payloadType: 102, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 101 } }], encodings: [{ ssrc: 99991111, rtx: { ssrc: 99991112 } }], headerExtensions: [{ uri: "urn:ietf:params:rtp-hdrext:sdes:mid", id: 1 }, { uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time", id: 4 }, { uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", id: 5 }, { uri: "urn:3gpp:video-orientation", id: 11 }, { uri: "urn:ietf:params:rtp-hdrext:toffset", id: 12 }], rtcp: { cname: "wB4Ql4lrsxYLjzuN", reducedSize: true, mux: true } }) };
      case "video/H264":
        return { id: i2 ?? e2(), producerId: e2(), kind: "video", rtpParameters: t2.deepFreeze({ codecs: [{ mimeType: "video/H264", payloadType: 103, clockRate: 9e4, rtcpFeedback: [{ type: "nack" }, { type: "nack", parameter: "pli" }, { type: "ccm", parameter: "fir" }, { type: "goog-remb" }, { type: "transport-cc" }], parameters: { "level-asymmetry-allowed": 1, "packetization-mode": 1, "profile-level-id": "42e01f" } }, { mimeType: "video/rtx", payloadType: 104, clockRate: 9e4, rtcpFeedback: [], parameters: { apt: 103 } }], encodings: [{ ssrc: 99991113, rtx: { ssrc: 99991114 } }], headerExtensions: [{ uri: "urn:ietf:params:rtp-hdrext:sdes:mid", id: 1 }, { uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time", id: 4 }, { uri: "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01", id: 5 }, { uri: "urn:3gpp:video-orientation", id: 11 }, { uri: "urn:ietf:params:rtp-hdrext:toffset", id: 12 }], rtcp: { cname: "wB4Ql4lrsxYLjzuN", reducedSize: true, mux: true } }) };
      default:
        throw new TypeError(`unknown codecMimeType '${s2}'`);
    }
  }, _e.generateDataProducerRemoteParameters = () => t2.deepFreeze({ id: e2() }), _e.generateDataConsumerRemoteParameters = ({ id: i2 } = {}) => ({ id: i2 ?? e2(), dataProducerId: e2(), sctpStreamParameters: t2.deepFreeze({ streamId: 666, maxPacketLifeTime: 5e3, maxRetransmits: void 0 }) });
  const t2 = P();
  function e2() {
    return t2.generateRandomNumber() + "";
  }
  return _e;
}
function De() {
  return Ce || (Ce = 1, ((t2) => {
    Object.defineProperty(t2, "h", { value: true }), t2.debug = t2.testFakeParameters = t2.FakeHandler = t2.enhancedEvents = t2.ortc = t2.parseScalabilityMode = t2.detectDeviceAsync = t2.detectDevice = t2.Device = t2.version = t2.types = void 0, t2.debug = d().default, t2.types = p(), t2.version = "3.18.4";
    var e2 = re();
    Object.defineProperty(t2, "Device", { enumerable: true, get() {
      return e2.Device;
    } }), Object.defineProperty(t2, "detectDevice", { enumerable: true, get() {
      return e2.detectDevice;
    } }), Object.defineProperty(t2, "detectDeviceAsync", { enumerable: true, get() {
      return e2.detectDeviceAsync;
    } });
    var i2 = Ct();
    Object.defineProperty(t2, "parseScalabilityMode", { enumerable: true, get() {
      return i2.parse;
    } }), t2.ortc = F(), t2.enhancedEvents = T();
    var s2 = Se();
    Object.defineProperty(t2, "FakeHandler", { enumerable: true, get() {
      return s2.FakeHandler;
    } }), t2.testFakeParameters = Pe();
  })(n)), n;
}
var xe = De();
var Oe = class {
  constructor({ audioContext: t2, stream: e2 }) {
    this.audioContext = t2, this.stream = e2, this.source = this.audioContext.createMediaStreamSource(this.stream), this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = 512, this.source.connect(this.analyser), this.dataArray = new Uint8Array(this.analyser.frequencyBinCount), console.log("AudioInputProcessor initialized");
  }
  getVolume() {
    if (!this.analyser) return 0;
    this.analyser.getByteFrequencyData(this.dataArray);
    let t2 = 0;
    for (let e2 = 0; this.dataArray.length > e2; e2++) t2 += this.dataArray[e2];
    return t2 / this.dataArray.length;
  }
  dispose() {
    this.source && this.analyser && (this.source.disconnect(), this.analyser.disconnect(), this.source = null, this.analyser = null, this.stream = null, console.log("AudioInputProcessor disposed"));
  }
  getSource() {
    return this.source;
  }
  getAnalyser() {
    return this.analyser;
  }
};
var Me = class {
  constructor({ audioContext: t2 } = {}) {
    this.le = t2 || new AudioContext(), this.ue = this.le.createMediaStreamDestination(), this.pe = this.le.createGain(), this.pe.connect(this.ue), this.me = /* @__PURE__ */ new Map(), this.fe = this.ue.stream.getAudioTracks()[0];
  }
  initializeWithVideoStream(t2) {
    if (!t2) throw Error("Initial video stream is required");
    const e2 = t2.getAudioTracks()[0];
    if (!e2) throw Error("Video element does not have an audio track");
    const i2 = this.le.createMediaStreamSource(new MediaStream([e2])), s2 = this.le.createGain();
    i2.connect(s2), s2.connect(this.pe), this.me.set("initial", { source: i2, gainNode: s2, stream: t2 });
  }
  getTrackForProducer({ audioGainControl: t2 }) {
    return t2 && t2.connect(this.pe), this.fe;
  }
  addStream(t2) {
    return __async(this, null, function* () {
      if (!t2 || !t2.getAudioTracks().length) throw Error("Invalid input: stream with audio track is required");
      const e2 = this.le.createMediaStreamSource(t2), i2 = this.le.createGain();
      e2.connect(i2), i2.connect(this.pe), this.me.set(t2, { source: e2, gainNode: i2 });
    });
  }
  removeStream(t2) {
    if ("initial" === t2) throw Error("Cannot remove the initial stream");
    const e2 = this.me.get(t2);
    if (!e2) throw Error("Stream not found");
    e2.source.disconnect(), e2.gainNode.disconnect(), this.me.delete(t2);
  }
  adjustVolume(t2, e2) {
    if ("number" != typeof e2 || 0 > e2 || e2 > 1) throw Error("Invalid volume: must be a number between 0 and 1");
    const i2 = this.me.get("initial" === t2 ? "initial" : t2);
    if (!i2) throw Error("Stream not found");
    i2.gainNode.gain.setValueAtTime(e2, this.le.currentTime);
  }
  dispose() {
    this.me.forEach(({ source: t2, gainNode: e2, stream: i2 }) => {
      i2 && i2.getTracks && i2.getTracks().forEach((t3) => {
        "ended" !== t3.readyState && (t3.stop(), console.log(`AudioMerger: Stopped track ${t3.id} (${t3.kind})`));
      }), t2.disconnect(), e2.disconnect();
    }), this.pe.disconnect(), this.ue.disconnect(), this.me.clear();
  }
};
var Ae = { defaultAudioConstraints: { echoCancellation: true, noiseSuppression: true, autoGainControl: false, googAutoGainControl: false, googEchoCancellation: false, googNoiseSuppression: false, googAudioMirroring: false, sampleRate: 48e3, sampleSize: 16, channelCount: 1 }, musicModeConstraints: { echoCancellation: true, noiseSuppression: false, autoGainControl: false, googAutoGainControl: false, googEchoCancellation: false, googNoiseSuppression: false, googAudioMirroring: false, sampleRate: 48e3, sampleSize: 16, channelCount: 2 }, presentationModeConstraints: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, googAutoGainControl: true, googEchoCancellation: true, googNoiseSuppression: true, googAudioMirroring: false, sampleRate: 48e3, sampleSize: 16, channelCount: 1 }, browserSpecific: { chrome: { googAutoGainControl: false, googTypingNoiseDetection: true }, firefox: {}, safari: {} } };
var Ne = new class {
  constructor() {
    this.isDebugMode = "undefined" != typeof window && ("localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname || window.location.hostname.includes("dev") || false);
  }
  debug(...t2) {
    this.isDebugMode && console.log(...t2);
  }
  info(...t2) {
    this.isDebugMode && console.info(...t2);
  }
  warn(...t2) {
    console.warn(...t2);
  }
  error(...t2) {
    console.error(...t2);
  }
  table(t2) {
    this.isDebugMode && console.table(t2);
  }
}();
var je = new class {
  constructor() {
    this.config = null, this.mode = "default", this.customConfig = null, this.loadConfiguration();
  }
  loadConfiguration() {
    try {
      this.config = Ae, Ne.debug("Audio configuration loaded successfully");
    } catch (t2) {
      Ne.error("Failed to load audio configuration, using defaults", t2), this.config = this.getHardcodedDefaults();
    }
  }
  getHardcodedDefaults() {
    return { defaultAudioConstraints: { echoCancellation: true, noiseSuppression: true, autoGainControl: false, sampleRate: 48e3, sampleSize: 16, channelCount: 1 } };
  }
  setMode(t2) {
    ["default", "music", "presentation", "custom"].includes(t2) ? (this.mode = t2, Ne.debug("Audio mode set to: " + t2)) : (Ne.warn(`Invalid audio mode: ${t2}, using default`), this.mode = "default");
  }
  setCustomConfig(t2) {
    this.customConfig = t2, this.mode = "custom";
  }
  getBrowserSpecificConstraints() {
    const t2 = navigator.userAgent.toLowerCase();
    return t2.includes("chrome") || t2.includes("chromium") ? this.config.browserSpecific?.chrome || {} : t2.includes("firefox") ? this.config.browserSpecific?.firefox || {} : t2.includes("safari") && !t2.includes("chrome") && this.config.browserSpecific?.safari || {};
  }
  getAudioConstraints(t2 = {}) {
    let e2 = {};
    switch (this.mode) {
      case "music":
        e2 = __spreadValues({}, this.config.musicModeConstraints);
        break;
      case "presentation":
        e2 = __spreadValues({}, this.config.presentationModeConstraints);
        break;
      case "custom":
        e2 = __spreadValues({}, this.customConfig);
        break;
      default:
        e2 = __spreadValues({}, this.config.defaultAudioConstraints);
    }
    const i2 = this.getBrowserSpecificConstraints();
    e2 = __spreadValues(__spreadValues({}, e2), i2), e2 = __spreadValues(__spreadValues({}, e2), t2);
    const s2 = navigator.userAgent.toLowerCase();
    return (s2.includes("chrome") || s2.includes("chromium")) && (true === e2.echoCancellation && (e2.googEchoCancellation = true), true === e2.noiseSuppression && (e2.googNoiseSuppression = true), true !== e2.echoCancellation && true !== e2.noiseSuppression || (e2.googHighpassFilter = true)), Ne.debug("Computed audio constraints:", { mode: this.mode, constraints: e2, browser: navigator.userAgent }), e2;
  }
  getDefaultConstraints() {
    return __spreadValues({}, this.config.defaultAudioConstraints);
  }
  reloadConfiguration() {
    this.loadConfiguration();
  }
  isEchoCancellationEnabled(t2) {
    return true === t2.echoCancellation || true === t2.googEchoCancellation;
  }
  validateConstraints(t2) {
    const e2 = __spreadValues({}, t2);
    return ["echoCancellation", "noiseSuppression", "autoGainControl", "googEchoCancellation", "googNoiseSuppression", "googAutoGainControl", "googAudioMirroring", "googHighpassFilter", "googTypingNoiseDetection"].forEach((t3) => {
      void 0 !== e2[t3] && (e2[t3] = !!e2[t3]);
    }), e2.sampleRate && (e2.sampleRate = Math.max(8e3, Math.min(96e3, e2.sampleRate))), e2.sampleSize && (e2.sampleSize = Math.max(8, Math.min(32, e2.sampleSize))), e2.channelCount && (e2.channelCount = Math.max(1, Math.min(2, e2.channelCount))), e2;
  }
}();
var $e = class {
  constructor(t2 = {}) {
    this.options = { feedbackThreshold: t2.feedbackThreshold || 0.8, feedbackDuration: t2.feedbackDuration || 500, minFrequency: t2.minFrequency || 1e3, maxFrequency: t2.maxFrequency || 8e3, sampleRate: t2.sampleRate || 100, autoMute: false !== t2.autoMute, cooldownPeriod: t2.cooldownPeriod || 3e3 }, this.isMonitoring = false, this.feedbackDetected = false, this.lastFeedbackTime = 0, this.highLevelStartTime = null, this.analyser = null, this.audioContext = null, this.source = null, this.monitorInterval = null, this.dataArray = null, this.callbacks = { onFeedbackDetected: null, onFeedbackStopped: null }, this.feedbackEvents = [], this.maxEvents = 100;
  }
  initialize(t2, e2) {
    if (!t2 || !e2) throw Error("AudioContext and stream are required");
    this.audioContext = t2, this.analyser = t2.createAnalyser(), this.analyser.fftSize = 2048, this.analyser.smoothingTimeConstant = 0.2, this.source = t2.createMediaStreamSource(e2), this.source.connect(this.analyser), this.dataArray = new Uint8Array(this.analyser.frequencyBinCount), Ne.debug("FeedbackDetector initialized", { fftSize: this.analyser.fftSize, sampleRate: t2.sampleRate, frequencyBinCount: this.analyser.frequencyBinCount });
  }
  startMonitoring(t2, e2) {
    if (this.isMonitoring) Ne.warn("FeedbackDetector already monitoring");
    else {
      if (!this.analyser) throw Error("FeedbackDetector not initialized");
      this.callbacks.onFeedbackDetected = t2, this.callbacks.onFeedbackStopped = e2, this.isMonitoring = true, this.monitorInterval = setInterval(() => {
        this.we();
      }, 1e3 / this.options.sampleRate), Ne.debug("FeedbackDetector monitoring started");
    }
  }
  stopMonitoring() {
    this.isMonitoring && (this.isMonitoring = false, this.monitorInterval && (clearInterval(this.monitorInterval), this.monitorInterval = null), Ne.debug("FeedbackDetector monitoring stopped"));
  }
  we() {
    if (!this.isMonitoring || !this.analyser) return;
    const t2 = Date.now();
    if (this.options.cooldownPeriod > t2 - this.lastFeedbackTime) return;
    this.analyser.getByteFrequencyData(this.dataArray);
    const e2 = this.audioContext.sampleRate / 2 / this.analyser.frequencyBinCount, i2 = Math.floor(this.options.minFrequency / e2), s2 = Math.ceil(this.options.maxFrequency / e2);
    let r2 = 0, o2 = 0, n2 = 0, a2 = 0;
    for (let h2 = i2; s2 >= h2 && this.dataArray.length > h2; h2++) {
      const t3 = this.dataArray[h2] / 255;
      n2 += t3, a2++, t3 > r2 && (r2 = t3, o2 = h2 * e2);
    }
    const c2 = this.ge(r2, a2 > 0 ? n2 / a2 : 0, o2);
    c2 && !this.feedbackDetected ? this.ye(r2, o2) : !c2 && this.feedbackDetected && this.ve();
  }
  ge(t2, e2, i2) {
    const s2 = Date.now();
    if (t2 > this.options.feedbackThreshold && t2 > 2.5 * e2) {
      if (this.highLevelStartTime || (this.highLevelStartTime = s2), s2 - this.highLevelStartTime >= this.options.feedbackDuration) return true;
    } else this.highLevelStartTime = null;
    return false;
  }
  ye(t2, e2) {
    this.feedbackDetected = true, this.lastFeedbackTime = Date.now();
    const i2 = { timestamp: this.lastFeedbackTime, level: t2, frequency: e2, duration: this.lastFeedbackTime - (this.highLevelStartTime || this.lastFeedbackTime) };
    this.feedbackEvents.push(i2), this.feedbackEvents.length > this.maxEvents && this.feedbackEvents.shift(), Ne.warn("Acoustic feedback detected!", i2), this.callbacks.onFeedbackDetected && this.callbacks.onFeedbackDetected(i2);
  }
  ve() {
    this.feedbackDetected = false, this.highLevelStartTime = null, Ne.debug("Acoustic feedback stopped"), this.callbacks.onFeedbackStopped && this.callbacks.onFeedbackStopped();
  }
  getStatistics() {
    const t2 = Date.now(), e2 = this.feedbackEvents.filter((e3) => 6e4 > t2 - e3.timestamp);
    return { totalEvents: this.feedbackEvents.length, recentEvents: e2.length, lastFeedbackTime: this.lastFeedbackTime, isInFeedback: this.feedbackDetected, averageFrequency: e2.length > 0 ? e2.reduce((t3, e3) => t3 + e3.frequency, 0) / e2.length : 0, averageLevel: e2.length > 0 ? e2.reduce((t3, e3) => t3 + e3.level, 0) / e2.length : 0 };
  }
  dispose() {
    if (this.stopMonitoring(), this.source) {
      try {
        this.source.disconnect();
      } catch (t2) {
        Ne.warn("Error disconnecting feedback detector source:", t2);
      }
      this.source = null;
    }
    if (this.analyser) {
      try {
        this.analyser.disconnect();
      } catch (t2) {
        Ne.warn("Error disconnecting feedback detector analyser:", t2);
      }
      this.analyser = null;
    }
    this.audioContext = null, this.dataArray = null, this.feedbackEvents = [], this.callbacks = { onFeedbackDetected: null, onFeedbackStopped: null }, Ne.debug("FeedbackDetector disposed");
  }
};
var Fe = class {
  constructor() {
    this.timers = [], this.consumers = [];
  }
  addConsumer(t2) {
    "video" === t2.kind && (this.consumers.push(t2), console.log("Consumer added for monitoring:", t2.id));
  }
  clearConsumers() {
    this.consumers.length = 0;
  }
  dispose() {
    this.stopBandwidthMonitoring(), this.clearConsumers();
  }
  startBandwidthMonitoring() {
    this.timers && this.timers.length > 0 && this.timers.forEach((t2) => t2()), this.timers = [];
    for (const t2 of this.consumers) {
      if (t2.closed) continue;
      const e2 = this.be(t2);
      this.timers.push(e2);
    }
  }
  stopBandwidthMonitoring() {
    this.timers && this.timers.length > 0 && this.timers.forEach((t2) => t2()), this.timers = [], this.consumers = this.consumers.filter((t2) => !t2.closed);
  }
  be(t2) {
    let e2 = 0, i2 = Date.now();
    const s2 = setInterval(() => __async(null, null, function* () {
      if (t2 && !t2.closed) try {
        const s3 = yield t2.getStats();
        let r2 = null;
        if (s3.forEach((t3) => {
          "inbound-rtp" === t3.type && "video" === t3.kind && (r2 = t3);
        }), r2) {
          const s4 = r2.bytesReceived, o2 = Date.now();
          console.log(`Current bitrate: ${(8 * (s4 - e2) / (o2 - i2) * 1e3 / 1e3).toFixed(2)} kbps, Resolution: ${r2.frameWidth}x${r2.frameHeight}, FPS: ${r2.framesPerSecond} for consumer: ${t2.id}`), e2 = s4, i2 = o2;
        }
      } catch (s3) {
        console.log("Error monitoring bandwidth:", s3);
      }
    }), 2e3);
    return () => clearInterval(s2);
  }
};
var Le = { READY: "ready", CONNECTED: "connected", DISCONNECTED: "disconnected", USER_DISCONNECTED: "user-disconnected", USER_JOINED_ROOM: "user-joined-room", ROOM_JOINED: "room-joined", ROOM_CLOSED: "room-closed", ERROR: "error", MEDIA_TRACK_ADDED: "media-track-added", MEDIA_TRACK_REMOVED: "media-track-removed", NEW_PRODUCER: "new-producer", AUDIO_MUTED: "audio-muted", VIDEO_MUTED: "video-muted", OUTPUT_MUTED: "output-muted", REMOTE_AUDIO_MUTED: "remote-audio-muted", REMOTE_VIDEO_MUTED: "remote-video-muted", REMOTE_OUTPUT_MUTED: "remote-output-muted", AUDIO_INPUT_MONITOR_CREATED: "audio-input-monitor-created", AUDIO_GAIN_CONTROL_CREATED: "audio-gain-control-created", UPDATE_ICE_PARAMETERS: "update-ice-parameters", SCREEN_SHARE_STARTED: "screen-share-started", SCREEN_SHARE_STOPPED: "screen-share-stopped", DATA_MESSAGE: "data-message", RECORDING_STARTED: "recording-started", RECORDING_STOPPED: "recording-stopped", RECORDING_STATE_CHANGED: "recording-state-changed", STREAMING_STARTED: "streaming-started", STREAMING_STOPPED: "streaming-stopped", AUDIO_STREAM_ADDED: "audio-stream-added", AUDIO_STREAM_REMOVED: "audio-stream-removed", RECEIVE_CHAT_MESSAGE: "receive-chat-message", STREAMING_USER_CHANGED: "streaming-user-changed", ADMIT_WAITING_ROOM: "admit-waiting-room", REJECT_WAITING_ROOM: "reject-waiting-room", TRANSCRIPTION_RECEIVED: "transcription-received", TRANSCRIPTION_STARTED: "transcription-started", TRANSCRIPTION_STOPPED: "transcription-stopped", FEEDBACK_DETECTED: "feedback-detected", FEEDBACK_STOPPED: "feedback-stopped", AUDIO_INPUT_DEVICE_CHANGED: "audio-input-device-changed", VIDEO_INPUT_DEVICE_CHANGED: "video-input-device-changed", AUDIO_OUTPUT_DEVICE_CHANGED: "audio-output-device-changed", AUDIO_VALIDATION_FAILED: "audio-validation-failed", AUDIO_VALIDATION_WARNING: "audio-validation-warning", CONSTRAINTS_RELAXED: "constraints-relaxed", WAIT_FOR_HOST_STARTED: "wait-for-host-started", WAIT_FOR_HOST_ROOM_READY: "wait-for-host-room-ready", WAIT_FOR_HOST_TIMEOUT: "wait-for-host-timeout", WAIT_FOR_HOST_CANCELLED: "wait-for-host-cancelled" };
var Ue = class {
  constructor(t2) {
    this.client = t2;
  }
  getStats() {
    return __async(this, null, function* () {
      if (!this.client.sendTransport) throw Error("Must create room before getting stats");
      const t2 = yield navigator.mediaDevices.enumerateDevices(), e2 = t2 && t2.find((t3) => t3.deviceId === this.client.localAudioInputDeviceId), i2 = yield navigator.mediaDevices.enumerateDevices(), s2 = i2 && i2.find((t3) => t3.deviceId === this.client.localVideoDeviceId), r2 = { sendTransport: yield this.client.sendTransport.getStats(), receiveTransport: yield this.client.receiveTransport.getStats(), audioInputDeviceId: this.client.localAudioInputDeviceId, audioInputDeviceLabel: e2 && e2.label, audioConstraints: this.client.localAudioConstraints, videoDeviceId: this.client.localVideoDeviceId, videoDeviceLabel: s2 && s2.label, audioOutputDeviceId: this.client.localAudioOutputDeviceId };
      Ne.debug("Send transport stats:"), Ne.debug("________________________________________________________");
      let o2 = yield this.client.sendTransport.getStats();
      for (const n2 of o2.values()) Ne.table(n2);
      Ne.debug("Receive transport stats:"), Ne.debug("________________________________________________________"), o2 = yield this.client.receiveTransport.getStats();
      for (const n2 of o2.values()) Ne.table(n2);
      return Ne.debug("Device Info"), Ne.debug("________________________________________________________"), Ne.debug("Audio Device:", this.client.localAudioInputDeviceId), Ne.debug("Audio Device Constraints:", this.client.localAudioConstraints), Ne.debug("Audio Device Info:", e2 && e2.label), Ne.debug("Video Device:", this.client.localVideoDeviceId), Ne.debug("Video Device Info:", s2 && s2.label), Ne.debug("Audio Output Device:", this.client.localAudioOutputDeviceId), Ne.debug("________________________________________________________"), r2;
    });
  }
};
var Ve = { serverRegionUrl: ".rtc.muziemedia.com", regions: ["us-west-2"] };
var Be = { CONNECT: "connect", CONNECT_ERROR: "connect_error", ANNOUNCE_CONNECTED: "announce-connected", ERROR: "error", USER_CONNECTED: "user-connected", USER_DISCONNECTED: "user-disconnected", USER_JOINED_ROOM: "user-joined-room", DATA_MESSAGE: "data-message", CREATE: "create", JOIN: "join", JOIN_WITH_TOKEN: "join-with-token", CLOSE: "close", ROOM_CLOSED: "room-closed", MUTE_AUDIO_STATE: "mute-audio-state", MUTE_VIDEO_STATE: "mute-video-state", MUTE_OUTPUT_STATE: "mute-output-state", MUTE_REMOTE_AUDIO: "mute-remote-audio", MUTE_REMOTE_VIDEO: "mute-remote-video", MUTE_REMOTE_OUTPUT: "mute-remote-output", GET_ATTENDEES: "get-attendees", START_RECORDING: "start-recording", STOP_RECORDING: "stop-recording", RECORDING_STARTED: "recording-started", RECORDING_STOPPED: "recording-stopped", START_TRANSCRIBE_BOT: "start-transcribe-bot", STOP_TRANSCRIBE_BOT: "stop-transcribe-bot", START_COMPOSITION: "start-composition", GET_ROOM_STATS: "get-room-stats", RECORDING_STATE: "recording-state", UPDATE_USERS_DEVICE_INFO: "update-users-device-info", SEND_CHAT_MESSAGE: "send-chat-message", RECEIVE_CHAT_MESSAGE: "receive-chat-message", START_STREAMING: "start-streaming", STOP_STREAMING: "stop-streaming", STREAMING_STARTED: "streaming-started", STREAMING_STOPPED: "streaming-stopped", SWITCH_STREAMING_USER: "switch-streaming-user", STREAMING_USER_CHANGED: "streaming-user-changed", ADMIT_WAITING_ROOM: "admit-waiting-room", REJECT_WAITING_ROOM: "reject-waiting-room", START_TRANSCRIPTION: "start-transcription", STORED_ROOMS: "/stored-rooms", STORED_ROOM: "/stored-room", STORED_ROOMS_UPDATE: "/stored-rooms/update", ROOM_SUMMARY: "/room-summary", GET_TRANSCRIPTION_STATUS: "/get-transcription-status", GET_TRANSCRIPTION_SUMMARY: "/get-transcription-summary", GET_LOOKUP_URLS: "get-lookup-urls", GET_COMPOSITION_STATUS: "/composition/status", GET_COMPOSITION_URL: "/composition/url", GET_SIGNED_COMPOSITION_URL: "/composition/signedurl", GET_COMPOSITION_LIST: "/composition/list", GET_RECORDING_URLS: "/recording/urls", GET_CHAT_HISTORY: "/chat/history", GET_STREAMING_URLS: "/streaming/urls", GET_UPLOAD_URL: "/upload/url", GET_MODIFY_URL: "/upload/modifyurl", FILE_UPLOADED: "/upload/file-uploaded", FILE_MODIFIED: "/upload/file-modified", UPDATE_FILENAME: "/upload/update-filename", CREATE_FOLDER: "/upload/folder", DELETE_FILE: "/upload/file", DELETE_FOLDER: "/upload/folder", MOVE_FILE: "/upload/file/move", GET_SIGNED_FILE_URL: "/upload/file/signedurl", GET_FILE_METADATA: "/upload/file/metadata", SHARE_FILE: "/upload/file/share", GET_USERS_FILE_TYPES: "/upload/file/types", GET_USERS_FILES_FOR_TYPE: "/upload/files/type", GET_ALL_USERS_FILES: "/upload/files/all", GET_ALL_USERS_FILES_SINCE_SYNC: "/upload/files/sync", GET_SYMBOLS: "/symbol/list", GET_ROOM_USERS: "/room/users", TRANSCRIPTION_RESULT: "transcription-result", MEDIA_GET_ROUTER_RTP_CAPABILITIES: "getRouterRtpCapabilities", MEDIA_CREATE_TRANSPORT: "createTransport", MEDIA_CONNECT_TRANSPORT: "connectTransport", MEDIA_PRODUCE: "produce", MEDIA_CONSUME: "consume", MEDIA_DISCONNECT_TRANSPORT: "disconnectTransport", MEDIA_EXISTING_PRODUCERS: "existingProducers", MEDIA_UNPAUSE_CONSUMER: "unpauseConsumer", MEDIA_UPDATE_ICE_PARAMETERS: "updateIceParameters", MEDIA_NEW_PRODUCER: "newProducer" };
var qe;
var ze = { exports: {} };
var Ge = ze.exports;
function We() {
  return qe || (qe = 1, t2 = Ge, e2 = function() {
    var t3 = () => {
    }, e3 = "undefined", i2 = typeof window !== e3 && typeof window.navigator !== e3 && /Trident\/|MSIE /.test(window.navigator.userAgent), s2 = ["trace", "debug", "info", "warn", "error"], r2 = {}, o2 = null;
    function n2(t4, e4) {
      var i3 = t4[e4];
      if ("function" == typeof i3.bind) return i3.bind(t4);
      try {
        return (() => {
        }).bind.call(i3, t4);
      } catch (s3) {
        return function() {
          return (() => {
          }).apply.call(i3, t4, arguments);
        };
      }
    }
    function a2() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : (() => {
      }).apply.call(console.log, console, arguments)), console.trace && console.trace();
    }
    function c2() {
      for (var i3 = this.getLevel(), r3 = 0; s2.length > r3; r3++) {
        var o3 = s2[r3];
        this[o3] = i3 > r3 ? t3 : this.methodFactory(o3, i3, this.name);
      }
      if (this.log = this.debug, typeof console === e3 && this.levels.SILENT > i3) return "No console available for logging";
    }
    function h2(t4) {
      return function() {
        typeof console !== e3 && (c2.call(this), this[t4].apply(this, arguments));
      };
    }
    function d2(s3, r3, o3) {
      return ((s4) => ("debug" === s4 && (s4 = "log"), typeof console !== e3 && ("trace" === s4 && i2 ? a2 : void 0 !== console[s4] ? n2(console, s4) : void 0 !== console.log ? n2(console, "log") : t3)))(s3) || h2.apply(this, arguments);
    }
    function l2(t4, i3) {
      var n3, a3, h3, l3 = this, u3 = "loglevel";
      function p3() {
        var t5;
        if (typeof window !== e3 && u3) {
          try {
            t5 = window.localStorage[u3];
          } catch (o3) {
          }
          if (typeof t5 === e3) try {
            var i4 = window.document.cookie, s3 = encodeURIComponent(u3), r3 = i4.indexOf(s3 + "=");
            -1 !== r3 && (t5 = /^([^;]+)/.exec(i4.slice(r3 + s3.length + 1))[1]);
          } catch (o3) {
          }
          return void 0 === l3.levels[t5] && (t5 = void 0), t5;
        }
      }
      function m3(t5) {
        var e4 = t5;
        if ("string" == typeof e4 && void 0 !== l3.levels[e4.toUpperCase()] && (e4 = l3.levels[e4.toUpperCase()]), "number" != typeof e4 || 0 > e4 || e4 > l3.levels.SILENT) throw new TypeError("log.setLevel() called with invalid level: " + t5);
        return e4;
      }
      "string" == typeof t4 ? u3 += ":" + t4 : "symbol" == typeof t4 && (u3 = void 0), l3.name = t4, l3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, l3.methodFactory = i3 || d2, l3.getLevel = () => null != h3 ? h3 : null != a3 ? a3 : n3, l3.setLevel = (t5, i4) => (h3 = m3(t5), false !== i4 && ((t6) => {
        var i5 = (s2[t6] || "silent").toUpperCase();
        if (typeof window !== e3 && u3) {
          try {
            return void (window.localStorage[u3] = i5);
          } catch (r3) {
          }
          try {
            window.document.cookie = encodeURIComponent(u3) + "=" + i5 + ";";
          } catch (r3) {
          }
        }
      })(h3), c2.call(l3)), l3.setDefaultLevel = (t5) => {
        a3 = m3(t5), p3() || l3.setLevel(t5, false);
      }, l3.resetLevel = () => {
        h3 = null, (() => {
          if (typeof window !== e3 && u3) {
            try {
              window.localStorage.removeItem(u3);
            } catch (t5) {
            }
            try {
              window.document.cookie = encodeURIComponent(u3) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch (t5) {
            }
          }
        })(), c2.call(l3);
      }, l3.enableAll = (t5) => {
        l3.setLevel(l3.levels.TRACE, t5);
      }, l3.disableAll = (t5) => {
        l3.setLevel(l3.levels.SILENT, t5);
      }, l3.rebuild = () => {
        if (o2 !== l3 && (n3 = m3(o2.getLevel())), c2.call(l3), o2 === l3) for (var t5 in r2) r2[t5].rebuild();
      }, n3 = m3(o2 ? o2.getLevel() : "WARN");
      var f3 = p3();
      null != f3 && (h3 = m3(f3)), c2.call(l3);
    }
    (o2 = new l2()).getLogger = (t4) => {
      if ("symbol" != typeof t4 && "string" != typeof t4 || "" === t4) throw new TypeError("You must supply a name when creating a logger.");
      var e4 = r2[t4];
      return e4 || (e4 = r2[t4] = new l2(t4, o2.methodFactory)), e4;
    };
    var u2 = typeof window !== e3 ? window.log : void 0;
    return o2.noConflict = () => (typeof window !== e3 && window.log === o2 && (window.log = u2), o2), o2.getLoggers = () => r2, o2.default = o2, o2;
  }, ze.exports ? ze.exports = e2() : t2.log = e2()), ze.exports;
  var t2, e2;
}
var He = t(We());
var Je = class _Je {
  constructor() {
    this.latencies = [], this.regions = Ve.regions;
  }
  static getBestRoomRegion() {
    return __async(this, null, function* () {
      const t2 = new _Je(), e2 = yield t2.getBestRoomRegion();
      return Ne.debug("Best region:", e2), e2.region;
    });
  }
  Ee() {
    return __async(this, null, function* () {
      this.latencies = [];
      for (const e2 of this.regions) {
        const i2 = `https://dynamodb.${e2}.amazonaws.com/ping`, s2 = performance.now();
        try {
          const t2 = yield fetch(i2, { method: "GET" });
          if (t2.ok) {
            const t3 = performance.now() - s2;
            this.latencies.push({ region: e2, latency: t3 }), Ne.debug(`Latency to ${e2}: ${t3.toFixed(2)} ms`);
          } else Ne.debug(`Failed to reach ${e2}: ${t2.statusText}`), this.latencies.push({ region: e2, latency: Infinity });
        } catch (t2) {
          Ne.error(`Error accessing ${i2}:`, t2.message), this.latencies.push({ region: e2, latency: Infinity });
        }
      }
    });
  }
  Ie() {
    if (!this.latencies || 0 === this.latencies.length) return Ne.error("No latencies available"), null;
    let t2 = this.latencies[0];
    for (const e2 of this.latencies) t2.latency > e2.latency && (t2 = e2);
    return Ne.debug("Closest region:", t2), t2;
  }
  getBestRoomRegion() {
    return __async(this, null, function* () {
      return yield this.Ee(), this.Ie();
    });
  }
  checkRoomRegion({ region: t2 }) {
    return this.regions.includes(t2) ? t2 : "us-east-1";
  }
};
function Ke(t2) {
  return t2.replace(/[^-_a-zA-Z0-9]/g, "_").toLowerCase();
}
function Ye(t2) {
  return t2.replace(/[^-@_a-zA-Z0-9]/g, "_").toLowerCase();
}
function Qe(t2) {
  return new Promise((e2) => setTimeout(e2, t2));
}
function ti(_0) {
  return __async(this, arguments, function* ({ roomRegion: t2, userId: e2, roomToken: i2 }) {
    if (!e2) throw Error("userId is required");
    try {
      const s2 = `https://${t2}${Ve.serverRegionUrl}/token`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: e2, roomToken: i2 }) });
      if (!r2.ok) {
        const t3 = yield r2.json();
        throw Error("Error " + t3.error);
      }
      const o2 = yield r2.json();
      return sessionStorage.setItem("token", o2.token), o2.token;
    } catch (s2) {
      throw He.error(s2), s2;
    }
  });
}
function ei(_0) {
  return __async(this, arguments, function* ({ roomRegion: t2, joinToken: e2, joinUserId: i2, password: s2, roomToken: r2 }) {
    if (!e2 || !i2 || !r2) throw Error("joinToken, joinUserId, roomToken are required");
    try {
      const o2 = `https://${new Je({ regions: Ve.regions }).checkRoomRegion({ region: t2 })}${Ve.serverRegionUrl}/roomname-from-jointoken`, n2 = yield fetch(o2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ joinToken: e2, joinUserId: i2, roomToken: r2, password: s2 }) });
      if (!n2.ok) {
        const t3 = yield n2.json();
        throw Error("Error " + t3.error);
      }
      return yield n2.json();
    } catch (o2) {
      throw He.error(o2), o2;
    }
  });
}
function ii() {
  return __async(this, null, function* () {
    const t2 = navigator.userAgent, e2 = { browserName: "Unknown", browserVersion: "Unknown", os: "Unknown", deviceType: "Unknown", deviceModel: "Unknown", deviceVendor: "Unknown" };
    try {
      if ("userAgentData" in navigator && navigator.userAgentData) {
        const t3 = yield navigator.userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).catch(() => null), i2 = navigator.userAgentData.brands.find((t4) => !t4.brand.includes("Not A Brand") && !t4.brand.includes("Chromium"));
        i2 && (e2.browserName = i2.brand, e2.browserVersion = t3?.fullVersionList?.find((t4) => t4.brand === i2.brand)?.version || i2.version), e2.os = t3?.platform || navigator.userAgentData.platform, e2.deviceType = navigator.userAgentData.mobile ? "Mobile" : "Desktop", t3?.model && (e2.deviceModel = t3.model);
      }
    } catch (i2) {
      Ne.warn("Error accessing userAgentData:", i2);
    }
    if ("Unknown" === e2.browserName) {
      const i2 = [{ name: "Opera", regex: /(?:OPR|Opera)\/(\d+(\.\d+)?)/ }, { name: "Edge", regex: /(?:Edge|Edg)\/(\d+(\.\d+)?)/ }, { name: "Chrome", regex: /Chrome\/(\d+(\.\d+)?)/ }, { name: "Safari", regex: /Version\/(\d+(\.\d+)?).*Safari/ }, { name: "Firefox", regex: /Firefox\/(\d+(\.\d+)?)/ }];
      for (const s2 of i2) {
        const i3 = t2.match(s2.regex);
        if (i3) {
          e2.browserName = s2.name, e2.browserVersion = i3[1];
          break;
        }
      }
    }
    if ("Unknown" === e2.os) {
      const i2 = [{ name: "iOS", regex: /iPhone|iPad|iPod/ }, { name: "Android", regex: /Android/ }, { name: "Linux", regex: /Linux(?!.*Android)/ }, { name: "macOS", regex: /Mac OS X ([0-9._]+)/ }, { name: "Windows", regex: /Windows NT (\d+\.\d+)/ }];
      for (const s2 of i2) {
        const i3 = t2.match(s2.regex);
        if (i3) {
          e2.os = s2.name, i3[1] && (e2.os += " " + i3[1].replace(/_/g, "."));
          break;
        }
      }
    }
    if ("Unknown" === e2.deviceType && (e2.deviceType = /Mobile|Tablet|Android|iPhone|iPad|iPod/.test(t2) ? "Mobile" : "Desktop"), "Unknown" === e2.deviceVendor && "Unknown" === e2.deviceModel) {
      const i2 = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "LG", "Huawei", "Oppo", "Vivo", "Motorola", "Nokia"], s2 = t2.match(/\(([^;]+); ([^;]+); ([^)]+)\)/);
      if (s2) {
        const t3 = s2[3]?.trim() || s2[1]?.trim();
        if (t3) {
          const s3 = i2.find((e3) => t3.includes(e3));
          s3 ? (e2.deviceVendor = s3, e2.deviceModel = t3.replace(s3, "").trim()) : e2.deviceModel = t3;
        }
      }
    }
    return e2;
  });
}
function si(t2, e2) {
  let i2 = 0;
  return function(...s2) {
    const r2 = Date.now();
    if (e2 > r2 - i2) throw Error("Function is being called too frequently");
    return i2 = r2, t2.apply(this, s2);
  };
}
function ri(t2, e2) {
  return !(!t2 || !e2) && "string" == typeof t2 && "string" == typeof e2 && t2.toLowerCase() === e2.toLowerCase();
}
function oi(t2, e2) {
  return new Promise((i2, s2) => {
    if (e2?.aborted) return void s2(new DOMException("Aborted", "AbortError"));
    const r2 = setTimeout(i2, t2);
    if (e2) {
      const t3 = () => {
        clearTimeout(r2), s2(new DOMException("Aborted", "AbortError"));
      };
      e2.addEventListener("abort", t3, { once: true });
      const o2 = i2;
      i2 = () => {
        e2.removeEventListener("abort", t3), o2();
      };
    }
  });
}
var { serverRegionUrl: ni, regions: ai } = Ve;
var ci = class {
  constructor({ roomRegion: t2, roomToken: e2 }) {
    this.Te = t2 || ai[0], this.Re = e2, this.Se = null, this.ke = null;
  }
  Ce() {
    return __async(this, arguments, function* ({ forceRefresh: t2 = false } = {}) {
      return this.Se && !t2 || (this.Se = yield ((_0) => __async(this, [_0], function* ({ roomRegion: t3, roomToken: e2 }) {
        if (!e2) throw Error("roomToken is required");
        try {
          const i2 = `https://${t3}${Ve.serverRegionUrl}/fetchtoken`, s2 = yield fetch(i2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ roomToken: e2 }) });
          if (!s2.ok) {
            const t4 = yield s2.json();
            throw Error("Error " + t4.error);
          }
          return (yield s2.json()).token;
        } catch (i2) {
          throw He.error(i2), i2;
        }
      }))({ roomRegion: this.Te, roomToken: this.Re })), this.Se;
    });
  }
  _e(_0) {
    return __async(this, arguments, function* (t2, { forceRefresh: e2 = false } = {}) {
      return this.ke && !e2 || (this.ke = yield ti({ roomRegion: this.Te, roomToken: this.Re, userId: t2 })), this.ke;
    });
  }
  clearCachedTokens() {
    this.Se = null, this.ke = null;
  }
  Pe(t2) {
    return __async(this, null, function* () {
      const e2 = yield t2.json();
      if (!t2.ok) {
        if (401 === t2.status || 403 === t2.status) {
          this.clearCachedTokens();
          const i2 = Error(e2.error || "Token expired or invalid");
          throw i2.tokenExpired = true, i2.statusCode = t2.status, i2;
        }
        throw Error(e2.error);
      }
      return e2;
    });
  }
  getCompositionStatus(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      const s2 = yield this.Ce();
      if (!(t2 && i2 && e2 && s2)) throw Error("Invalid parameters");
      const r2 = `https://${this.Te}${ni}${Be.GET_COMPOSITION_STATUS}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, recordingId: t2, userId: i2, roomName: e2 }) });
      return yield this.Pe(o2);
    });
  }
  getTranscriptionStatus(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      const s2 = yield this.Ce();
      if (!(t2 && i2 && e2 && s2)) throw Error("Invalid parameters");
      const r2 = `https://${this.Te}${ni}${Be.GET_TRANSCRIPTION_STATUS}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, recordingId: t2, userId: i2, roomName: e2 }) });
      return yield this.Pe(o2);
    });
  }
  getCompositionUrl(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      const s2 = yield this.Ce();
      if (!(t2 && i2 && e2 && s2)) throw Error("Invalid parameters");
      const r2 = `https://${this.Te}${ni}${Be.GET_COMPOSITION_URL}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, recordingId: t2, userId: i2, roomName: e2 }) });
      return (yield this.Pe(o2)).url;
    });
  }
  getTranscriptionSummary(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, userId: e2 }) {
      const i2 = yield this.Ce();
      if (!t2 || !e2 || !i2) throw Error("Invalid parameters");
      const s2 = `https://${this.Te}${ni}${Be.GET_TRANSCRIPTION_SUMMARY}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: i2, recordingId: t2, userId: e2 }) });
      return (yield this.Pe(r2)).summary;
    });
  }
  getSignedCompositionUrl(_0) {
    return __async(this, arguments, function* ({ url: t2 }) {
      const e2 = yield this.Ce();
      if (!t2 || !e2) throw Error("Invalid parameters");
      const i2 = `https://${this.Te}${ni}${Be.GET_SIGNED_COMPOSITION_URL}`, s2 = yield fetch(i2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, url: t2 }) });
      return (yield this.Pe(s2)).signedUrl;
    });
  }
  getCompositionList(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2 }) {
      const i2 = yield this.Ce();
      if (!t2 || !e2 || !i2) throw Error("Invalid parameters");
      const s2 = `https://${this.Te}${ni}${Be.GET_COMPOSITION_LIST}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: i2, roomName: t2, userId: e2 }) });
      return (yield this.Pe(r2)).compositionList;
    });
  }
  getRecordingUrls(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      const s2 = yield this.Ce();
      if (!(t2 && e2 && i2 && s2)) throw Error("Invalid parameters");
      const r2 = `https://${this.Te}${ni}${Be.GET_RECORDING_URLS}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, recordingId: t2, roomName: e2, userId: i2 }) });
      return (yield this.Pe(o2)).recordingUrls;
    });
  }
  getStreamingUrls(_0) {
    return __async(this, arguments, function* ({ streamingId: t2, roomName: e2, userId: i2 }) {
      const s2 = yield this.Ce();
      if (!(t2 && e2 && i2 && s2)) throw Error("Invalid parameters");
      const r2 = `https://${this.Te}${ni}${Be.GET_STREAMING_URLS}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, streamingId: t2, roomName: e2, userId: i2 }) });
      return (yield this.Pe(o2)).streamingUrls;
    });
  }
  addStoredRoomToStorage(_0) {
    return __async(this, arguments, function* ({ userId: t2, storedRoom: e2 }) {
      const i2 = this.Te, s2 = yield this._e(t2);
      if (!(i2 && e2 && t2 && s2)) throw Error("Invalid parameters");
      e2.userId = t2;
      const r2 = `https://${i2}${Ve.serverRegionUrl}${Be.STORED_ROOMS}`, o2 = yield fetch(r2, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, storedRoom: e2 }) });
      return yield this.Pe(o2);
    });
  }
  updateStoredRoomInStorage(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2, updates: i2 }) {
      const s2 = this.Te, r2 = yield this._e(t2);
      if (!(s2 && e2 && t2 && r2)) throw Error("Invalid parameters");
      const o2 = `https://${s2}${Ve.serverRegionUrl}${Be.STORED_ROOMS_UPDATE}`, n2 = yield fetch(o2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: r2, alias: e2, updates: i2 }) });
      return yield this.Pe(n2);
    });
  }
  getStoredRoomsFromStorage(_0) {
    return __async(this, arguments, function* ({ userId: t2 }) {
      const e2 = this.Te, i2 = yield this._e(t2);
      if (!e2 || !t2 || !i2) throw Error("Invalid parameters");
      const s2 = `https://${e2}${Ve.serverRegionUrl}${Be.STORED_ROOMS}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: i2, userId: t2 }) });
      return (yield this.Pe(r2)).rooms;
    });
  }
  getStoredRoomFromStorage(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2 }) {
      const i2 = this.Te, s2 = yield this._e(t2);
      if (!(i2 && t2 && s2 && e2)) throw Error("Invalid parameters");
      const r2 = `https://${i2}${Ve.serverRegionUrl}${Be.STORED_ROOM}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, alias: e2 }) });
      return (yield this.Pe(o2)).room;
    });
  }
  deleteStoredRoomFromStorage(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2 }) {
      const i2 = this.Te, s2 = yield this._e(t2);
      if (!i2 || !e2 || !s2) throw Error("Invalid parameters");
      const r2 = `https://${i2}${Ve.serverRegionUrl}${Be.STORED_ROOMS}`, o2 = yield fetch(r2, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, alias: e2 }) });
      return yield this.Pe(o2);
    });
  }
  getAllUserIdsForRoom(_0) {
    return __async(this, arguments, function* ({ userId: t2, roomName: e2 }) {
      const i2 = this.Te, s2 = yield this._e(t2);
      if (!i2 || !e2 || !s2) throw Error("Invalid parameters");
      const r2 = `https://${i2}${Ve.serverRegionUrl}${Be.GET_ROOM_USERS}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: s2, roomName: e2 }) });
      return yield this.Pe(o2);
    });
  }
};
var hi = class {
  constructor({ transport: t2, signaling: e2, transportId: i2, type: s2 = "unknown", coordinateWith: r2 = null }) {
    this.transport = t2, this.signaling = e2, this.transportId = i2, this.type = s2, this.coordinateWith = r2, this.setState(t2.connectionState), this.timer = null;
  }
  setState(t2) {
    this.timer && "connected" === t2 ? (clearTimeout(this.timer), this.timer = null) : this.timer || "disconnected" !== t2 && "failed" !== t2 || (this.timer = setTimeout(() => __async(this, null, function* () {
      if (!this.transport || this.transport.closed) return console.log(this.type + " transport ICE restart aborted - transport closed"), void (this.timer = null);
      if (this.coordinateWith && this.coordinateWith.timer && "send" === this.type) console.log("Coordinating ICE restart - send handler taking lead"), this.coordinateWith.stop();
      else if (this.coordinateWith && this.coordinateWith.timer && "receive" === this.type) return console.log("Coordinating ICE restart - deferring to send handler"), void (this.timer = null);
      const t3 = yield this.signaling.updateIceParameters({ transportId: this.transportId });
      if (!this.transport || this.transport.closed) return console.log(this.type + " transport ICE restart aborted - transport closed during parameter fetch"), void (this.timer = null);
      t3 && (this.transport.restartIce({ iceParameters: t3 }), console.log(`ICE Restarted for ${this.type} transport`)), this.timer = null;
    }), 2e3));
  }
  forceRestartIce() {
    return __async(this, null, function* () {
      if (!this.transport || this.transport.closed) return void console.log(this.type + " transport force ICE restart aborted - transport closed");
      const t2 = yield this.signaling.updateIceParameters({ transportId: this.transportId });
      this.transport && !this.transport.closed ? t2 && (this.transport.restartIce({ iceParameters: t2 }), console.log(`ICE Force Restarted for ${this.type} transport`)) : console.log(this.type + " transport force ICE restart aborted - transport closed during parameter fetch");
    });
  }
  stop() {
    this.timer && (clearTimeout(this.timer), this.timer = null);
  }
};
var di = class {
  constructor(t2 = {}) {
    this.options = __spreadValues({ firefoxDelay: 100, chromeDelay: 100, chromeMobileDelay: 250, safariDelay: 200, braveDelay: 150, edgeDelay: 150, enableVideoFirst: true, enableFallbacks: true, chromeRetryAttempts: 3, chromeIncognitoDelay: 200, braveRetryAttempts: 3, safariLegacyMode: false, debug: false }, t2), this.browserInfo = this.De(), this.xe = /* @__PURE__ */ new Map(), this.Oe = 5e3, this.Me = /* @__PURE__ */ new Set(), this.Ae();
  }
  De() {
    const t2 = navigator.userAgent.toLowerCase(), e2 = navigator.userAgentData, i2 = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(t2) || e2?.mobile, s2 = t2.includes("android"), r2 = /iphone|ipad|ipod/i.test(t2) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, o2 = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, n2 = /ipad|android.*tablet|kindle|silk/i.test(t2) || o2, a2 = t2.includes("wv") || t2.includes("webview") || r2 && !t2.includes("safari") || t2.includes("fban") || t2.includes("fbav"), c2 = !(!navigator.brave || !navigator.brave.isBrave) || t2.includes("brave") || e2?.brands?.some((t3) => "Brave" === t3.brand), h2 = t2.includes("edge") || t2.includes("edg/") || e2?.brands?.some((t3) => t3.brand.includes("Edge")), d2 = t2.includes("edge/") && !t2.includes("edg/"), l2 = t2.includes("edg/") || e2?.brands?.some((t3) => "Microsoft Edge" === t3.brand), u2 = t2.includes("opera") || t2.includes("opr/") || e2?.brands?.some((t3) => "Opera" === t3.brand), p3 = t2.includes("samsungbrowser"), m3 = t2.includes("duckduckgo"), f3 = t2.includes("ucbrowser"), w3 = t2.includes("vivaldi"), g3 = t2.includes("firefox") && !h2, y4 = t2.includes("chrome") && !h2 && !c2 && !u2 && !p3 && !f3 && !w3, v3 = t2.includes("safari") && !t2.includes("chrome") || r2 && !y4 && !g3 && !u2, b2 = t2.includes("webkit"), E3 = y4 && s2, I3 = t2.includes("crios"), T3 = E3 || I3;
    let R2 = false, S4 = 0;
    if (y4 || c2 || l2) {
      try {
        const t3 = "__mediadevice_incognito_test_" + Date.now();
        localStorage.setItem(t3, "1"), localStorage.removeItem(t3);
      } catch (k2) {
        "QuotaExceededError" !== k2.name && 22 !== k2.code && 1014 !== k2.code || (S4 += 2);
      }
      try {
        window.webkitRequestFileSystem && window.webkitRequestFileSystem(0, 0, () => {
        }, () => {
          S4 += 2;
        });
      } catch (k2) {
        S4 += 1;
      }
      try {
        window.indexedDB || (S4 += 1);
      } catch (k2) {
        S4 += 1;
      }
      if (y4) try {
        navigator.webkitTemporaryStorage || (S4 += 1);
      } catch (k2) {
        S4 += 1;
      }
      R2 = S4 >= 2, navigator.storage?.estimate && navigator.storage.estimate().then((t3) => {
        t3.quota && 12e7 > t3.quota && (this.browserInfo.isIncognito = true);
      }).catch(() => {
      });
    }
    if (g3) try {
      indexedDB.open("test").onerror = () => {
        R2 = true;
      };
    } catch (k2) {
      R2 = true;
    }
    if (v3) try {
      localStorage.setItem("__safari_private_test", "1"), localStorage.removeItem("__safari_private_test");
    } catch (k2) {
      R2 = true;
    }
    return { isFirefox: g3, isChrome: y4, isSafari: v3, isEdge: h2, isEdgeLegacy: d2, isEdgeChromium: l2, isBrave: c2, isOpera: u2, isSamsungInternet: p3, isDuckDuckGo: m3, isUCBrowser: f3, isVivaldi: w3, isMobile: i2, isAndroid: s2, isIOS: r2, isTablet: n2, isWebView: a2, isChromeAndroid: E3, isChromeIOS: I3, isChromeMobile: T3, isWebkit: b2, isIncognito: R2, userAgent: t2, incognitoScore: S4 };
  }
  Ne(...t2) {
    this.options.debug && console.log("[MediaDeviceManager]", ...t2);
  }
  isSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia);
  }
  je(t2 = 1) {
    let e2 = this.options.chromeDelay;
    return this.browserInfo.isFirefox ? e2 = this.options.firefoxDelay : this.browserInfo.isBrave ? e2 = this.options.braveDelay : this.browserInfo.isSafari ? (e2 = this.options.safariDelay, this.browserInfo.isIOS && (e2 *= 1.5)) : this.browserInfo.isEdge ? e2 = this.browserInfo.isEdgeChromium ? this.options.edgeDelay : this.options.firefoxDelay : this.browserInfo.isOpera || this.browserInfo.isSamsungInternet ? e2 = 1.2 * this.options.chromeDelay : this.browserInfo.isChrome && (e2 = this.browserInfo.isChromeMobile ? this.browserInfo.isIncognito ? Math.max(this.options.chromeMobileDelay, this.options.chromeIncognitoDelay) : this.options.chromeMobileDelay : this.browserInfo.isIncognito ? this.options.chromeIncognitoDelay : this.options.chromeDelay), this.browserInfo.isWebView && (e2 *= 1.5), this.browserInfo.isTablet && (e2 *= 1.2), Math.round(e2 * t2);
  }
  $e(t2) {
    const e2 = t2.name?.toLowerCase() || "", i2 = t2.message?.toLowerCase() || "";
    return e2.includes("notallowed") || i2.includes("permission denied") ? { type: "permission", retry: false, message: "Permission denied" } : e2.includes("notfound") || i2.includes("no devices found") ? { type: "nodevice", retry: false, message: "No devices found" } : e2.includes("overconstrained") || i2.includes("overconstrained") ? { type: "constraints", retry: true, message: "Constraints too strict", constraint: t2.constraint || null } : e2.includes("notreadable") || i2.includes("device in use") ? { type: "busy", retry: true, message: "Device busy" } : e2.includes("aborterror") || i2.includes("aborted") ? { type: "aborted", retry: true, message: "Request aborted" } : i2.includes("timeout") || i2.includes("network") ? { type: "network", retry: true, message: "Network/timeout error" } : { type: "unknown", retry: true, message: t2.message || "Unknown error" };
  }
  Fe(t2, e2 = 3, i2 = "") {
    return __async(this, null, function* () {
      let s2, r2;
      const o2 = this.je();
      let n2 = 0, a2 = false, c2 = null, h2 = false;
      const d2 = [];
      let l2 = null;
      try {
        for (let p3 = 1; e2 >= p3 && !h2; p3++) {
          this.Ne(`${i2}: Attempt ${p3}/${e2} (relaxation level: ${n2})`);
          for (const [e3, o3] of t2) {
            const t3 = n2 > 0 ? this.Le(o3, n2) : o3;
            try {
              this.Ne(`${i2}: Trying ${e3} constraints (relaxation: ${n2}):`, t3);
              const s3 = yield navigator.mediaDevices.getUserMedia(t3);
              return this.Ne(`${i2}: Success with ${e3} constraints`), d2.push(s3), n2 > 0 && !a2 && (a2 = true, c2 = { level: n2, originalConstraints: o3, relaxedConstraints: t3, failedConstraint: r2?.constraint || null }), d2.slice(0, -1).forEach((t4) => {
                t4.getTracks().forEach((t5) => {
                  t5.stop(), this.Ne(`${i2}: Stopped leaked track ${t5.kind} (${t5.id})`);
                });
              }), l2 = s3, { stream: s3, constraintType: e3, constraintsRelaxed: a2, relaxationDetails: c2 };
            } catch (u2) {
              const t4 = this.$e(u2);
              if (this.Ne(`${i2}: ${e3} failed: ${t4.message}${t4.constraint ? ` (constraint: ${t4.constraint})` : ""}`), s2 = u2, r2 = t4, !t4.retry) {
                h2 = true;
                break;
              }
              "constraints" === t4.type && 3 > n2 && this.Ne(i2 + ": Constraint error detected, will increase relaxation on next attempt");
            }
          }
          if (e2 > p3 && s2) {
            const t3 = this.$e(s2);
            if (!t3.retry) break;
            {
              "constraints" === t3.type && 3 > n2 && (n2++, this.Ne(`${i2}: Increasing constraint relaxation to level ${n2}`));
              const e3 = o2 * p3;
              this.Ne(`${i2}: Waiting ${e3}ms before retry...`), yield new Promise((t4) => setTimeout(t4, e3));
            }
          }
        }
        throw s2 || Error(i2 + ": All attempts failed");
      } finally {
        d2.length > 0 && d2.forEach((t3) => {
          t3 !== l2 && t3.getTracks().forEach((t4) => {
            "ended" !== t4.readyState && (t4.stop(), this.Ne(`${i2}: Stopped leaked track ${t4.kind} (${t4.id}) in finally block`));
          });
        });
      }
    });
  }
  getUserMedia(t2) {
    return __async(this, null, function* () {
      if (!this.isSupported()) throw Error("MediaDevices API not supported");
      this.Ne("Getting user media with constraints:", t2), this.Ne("Browser info:", this.browserInfo);
      let e2 = [], i2 = 3, s2 = "getUserMedia";
      if (this.browserInfo.isChrome) {
        if (s2 = "Chrome", i2 = this.browserInfo.isIncognito ? 5 : 3, e2 = [["exact", this.Ue(t2)], ["ideal", this.Ve(t2)], ["minimal", this.Be(t2)]], this.browserInfo.isIncognito || this.browserInfo.isChromeMobile) {
          const s3 = this.qe(t2);
          e2.unshift(["aggressive", s3]), i2 = Math.max(i2, 4);
        }
      } else this.browserInfo.isFirefox ? (s2 = "Firefox", i2 = 4, e2 = [["ideal", this.Ve(t2)], ["exact", this.Ue(t2)], ["minimal", this.Be(t2)]]) : this.browserInfo.isSafari ? (s2 = "Safari", i2 = 3, e2 = [["safari", this.ze(t2)], ["ideal", this.Ve(t2)], ["minimal", this.Be(t2)]]) : this.browserInfo.isBrave ? (s2 = "Brave", i2 = 4, e2 = [["ideal", this.Ve(t2)], ["exact", this.Ue(t2)], ["minimal", this.Be(t2)]]) : this.browserInfo.isEdge ? (s2 = this.browserInfo.isEdgeChromium ? "Edge-Chromium" : "Edge-Legacy", i2 = 3, e2 = this.browserInfo.isEdgeChromium ? [["exact", this.Ue(t2)], ["ideal", this.Ve(t2)], ["minimal", this.Be(t2)]] : [["ideal", this.Ve(t2)], ["exact", this.Ue(t2)], ["minimal", this.Be(t2)]]) : this.browserInfo.isOpera || this.browserInfo.isSamsungInternet ? (s2 = this.browserInfo.isOpera ? "Opera" : "Samsung Internet", i2 = 3, e2 = [["exact", this.Ue(t2)], ["ideal", this.Ve(t2)], ["minimal", this.Be(t2)]]) : (s2 = "Generic", e2 = [["ideal", this.Ve(t2)], ["exact", this.Ue(t2)], ["minimal", this.Be(t2)]]);
      try {
        const t3 = yield this.Fe(e2, i2, s2);
        return this.Ne(`${s2}: Success with ${t3.constraintType} constraints`), t3.constraintsRelaxed && t3.relaxationDetails && (this.Ne(`${s2}: WARNING - Constraints were relaxed (level ${t3.relaxationDetails.level})`), t3.relaxationDetails.failedConstraint && this.Ne(`${s2}: Failed constraint: ${t3.relaxationDetails.failedConstraint}`)), t3.stream && (t3.stream.Ge = t3.constraintsRelaxed, t3.stream.We = t3.relaxationDetails, t3.stream.He = () => {
          t3.stream.getTracks().forEach((t4) => {
            "ended" !== t4.readyState && t4.stop();
          });
        }), t3.stream;
      } catch (r2) {
        throw this.Ne(s2 + ": All constraint attempts failed:", r2.message), r2;
      }
    });
  }
  qe(t2) {
    const e2 = JSON.parse(JSON.stringify(t2));
    return e2.video && "object" == typeof e2.video && this.browserInfo.isIncognito && (e2.video.width = { exact: 640 }, e2.video.height = { exact: 480 }, e2.video.frameRate = { exact: 30 }), e2;
  }
  Be(t2) {
    const e2 = {};
    return t2.audio && (true === t2.audio ? e2.audio = true : "object" == typeof t2.audio && (e2.audio = {}, t2.audio.deviceId && ("string" == typeof t2.audio.deviceId ? e2.audio.deviceId = { ideal: t2.audio.deviceId } : (t2.audio.deviceId.exact || t2.audio.deviceId.ideal) && (e2.audio.deviceId = { ideal: t2.audio.deviceId.exact || t2.audio.deviceId.ideal })), void 0 !== t2.audio.echoCancellation && (e2.audio.echoCancellation = t2.audio.echoCancellation), void 0 !== t2.audio.noiseSuppression && (e2.audio.noiseSuppression = t2.audio.noiseSuppression))), t2.video && (true === t2.video ? e2.video = true : "object" == typeof t2.video && (e2.video = {}, t2.video.deviceId && ("string" == typeof t2.video.deviceId ? e2.video.deviceId = { ideal: t2.video.deviceId } : (t2.video.deviceId.exact || t2.video.deviceId.ideal) && (e2.video.deviceId = { ideal: t2.video.deviceId.exact || t2.video.deviceId.ideal })), t2.video.facingMode && (e2.video.facingMode = t2.video.facingMode), (this.browserInfo.isMobile || this.browserInfo.isWebView) && (e2.video.width = { ideal: 640 }, e2.video.height = { ideal: 480 }))), e2;
  }
  ze(t2) {
    const e2 = JSON.parse(JSON.stringify(t2));
    return e2.audio && "object" == typeof e2.audio && e2.audio.deviceId && "string" == typeof e2.audio.deviceId && (e2.audio.deviceId = { ideal: e2.audio.deviceId }), e2.video && "object" == typeof e2.video && e2.video.deviceId && "string" == typeof e2.video.deviceId && (e2.video.deviceId = { ideal: e2.video.deviceId }), e2;
  }
  Le(t2, e2) {
    if (0 === e2) return t2;
    const i2 = JSON.parse(JSON.stringify(t2));
    if (1 > e2 || (this.Je(i2.audio), this.Je(i2.video), this.Ne(`Constraint relaxation level ${e2}: Converted exact → ideal`)), e2 >= 2) {
      if (i2.audio && "object" == typeof i2.audio) {
        const t3 = {};
        i2.audio.deviceId && (t3.deviceId = i2.audio.deviceId), void 0 !== i2.audio.echoCancellation && (t3.echoCancellation = i2.audio.echoCancellation), void 0 !== i2.audio.noiseSuppression && (t3.noiseSuppression = i2.audio.noiseSuppression), void 0 !== i2.audio.autoGainControl && (t3.autoGainControl = i2.audio.autoGainControl), Object.assign(i2.audio, t3);
      }
      if (i2.video && "object" == typeof i2.video) {
        const t3 = {};
        i2.video.deviceId && (t3.deviceId = i2.video.deviceId), i2.video.facingMode && (t3.facingMode = i2.video.facingMode), Object.assign(i2.video, t3);
      }
      this.Ne(`Constraint relaxation level ${e2}: Removed strict constraints`);
    }
    if (e2 >= 3) {
      if (i2.audio && "object" == typeof i2.audio) {
        const t3 = {};
        i2.audio.deviceId && (t3.deviceId = i2.audio.deviceId), i2.audio = 0 >= Object.keys(t3).length || t3;
      }
      if (i2.video && "object" == typeof i2.video) {
        const t3 = {};
        i2.video.deviceId && (t3.deviceId = i2.video.deviceId), i2.video = 0 >= Object.keys(t3).length || t3;
      }
      this.Ne(`Constraint relaxation level ${e2}: Using absolute minimal constraints`);
    }
    return i2;
  }
  Je(t2) {
    if (t2 && "object" == typeof t2) for (const e2 in t2) {
      const i2 = t2[e2];
      "deviceId" !== e2 && i2 && "object" == typeof i2 && void 0 !== i2.exact && (t2[e2] = { ideal: i2.exact }, this.Ne(`  Converted ${e2}.exact → ${e2}.ideal`));
    }
  }
  Ue(t2) {
    const e2 = JSON.parse(JSON.stringify(t2));
    return e2.audio && "object" == typeof e2.audio && e2.audio.deviceId && ("string" == typeof e2.audio.deviceId ? e2.audio.deviceId = { exact: e2.audio.deviceId } : e2.audio.deviceId.ideal && (e2.audio.deviceId = { exact: e2.audio.deviceId.ideal })), e2.video && "object" == typeof e2.video && e2.video.deviceId && ("string" == typeof e2.video.deviceId ? e2.video.deviceId = { exact: e2.video.deviceId } : e2.video.deviceId.ideal && (e2.video.deviceId = { exact: e2.video.deviceId.ideal })), e2;
  }
  Ve(t2) {
    const e2 = JSON.parse(JSON.stringify(t2));
    return e2.audio && "object" == typeof e2.audio && e2.audio.deviceId && ("string" == typeof e2.audio.deviceId ? e2.audio.deviceId = { ideal: e2.audio.deviceId } : e2.audio.deviceId.exact && (e2.audio.deviceId = { ideal: e2.audio.deviceId.exact })), e2.video && "object" == typeof e2.video && e2.video.deviceId && ("string" == typeof e2.video.deviceId ? e2.video.deviceId = { ideal: e2.video.deviceId } : e2.video.deviceId.exact && (e2.video.deviceId = { ideal: e2.video.deviceId.exact })), e2;
  }
  enumerateDevices(t2 = false) {
    return __async(this, null, function* () {
      if (!this.isSupported()) return this.Ne("MediaDevices API not supported"), [];
      const e2 = "allDevices";
      if (!t2 && this.xe.has(e2)) {
        const t3 = this.xe.get(e2);
        if (Date.now() - t3.timestamp < this.Oe) return this.Ne("Returning cached devices"), t3.devices;
      }
      let i2;
      this.Ne("Enumerating devices...");
      try {
        i2 = yield navigator.mediaDevices.enumerateDevices();
      } catch (s2) {
        return this.Ne("Failed to enumerate devices:", s2), [];
      }
      return i2 && Array.isArray(i2) ? (i2 = i2.filter((t3) => t3 && t3.deviceId && t3.kind).map((t3) => ({ deviceId: t3.deviceId, kind: t3.kind, label: t3.label || "", groupId: t3.groupId || "" })), i2.some((t3) => t3.label && "" !== t3.label.trim()) ? (this.Ne(`Found ${i2.length} devices with labels`), this.Ke(e2, i2), i2) : (this.Ne("No device labels found, requesting permissions..."), i2 = yield this.Ye(i2), this.Ke(e2, i2), i2)) : (this.Ne("Invalid device enumeration result"), []);
    });
  }
  Ye(t2) {
    return __async(this, null, function* () {
      const e2 = this.je();
      if (this.browserInfo.isChrome || this.browserInfo.isEdgeChromium) return this.Ne("Using Chrome strategy: video-first with retries" + (this.browserInfo.isEdgeChromium ? " (Edge Chromium)" : "")), yield this.Qe(t2, e2);
      if (this.browserInfo.isBrave) return this.Ne("Using Brave strategy: multiple permission attempts with privacy consideration"), yield this.Xe(t2, e2);
      if (this.browserInfo.isSafari) return this.Ne("Using Safari strategy: conservative permission requests"), yield this.Ze(t2, e2);
      if (this.browserInfo.isFirefox && this.options.enableVideoFirst) {
        this.Ne("Using Firefox strategy: video first, then audio");
        try {
          (yield navigator.mediaDevices.getUserMedia({ video: true })).getTracks().forEach((t4) => t4.stop()), yield new Promise((t4) => setTimeout(t4, e2));
          try {
            (yield navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((t4) => t4.stop()), yield new Promise((t4) => setTimeout(t4, e2));
          } catch (i2) {
          }
          const t3 = yield navigator.mediaDevices.enumerateDevices();
          return this.ti(t3);
        } catch (i2) {
          return yield this.ei(t2, e2);
        }
      }
      return yield this.ei(t2, e2);
    });
  }
  ei(t2, e2) {
    return __async(this, null, function* () {
      try {
        this.Ne("Requesting audio permission..."), (yield navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((t3) => t3.stop()), yield new Promise((t3) => setTimeout(t3, e2));
        const i2 = yield navigator.mediaDevices.enumerateDevices(), s2 = this.ti(i2);
        return s2.some((t3) => t3.label && "" !== t3.label.trim()) ? s2 : yield this.ii(t2, e2);
      } catch (i2) {
        return this.Ne("Audio permission failed, trying video fallback..."), yield this.ii(t2, e2);
      }
    });
  }
  ii(t2, e2) {
    return __async(this, null, function* () {
      try {
        this.Ne("Requesting video permission..."), (yield navigator.mediaDevices.getUserMedia({ video: true })).getTracks().forEach((t4) => t4.stop()), yield new Promise((t4) => setTimeout(t4, e2));
        const t3 = yield navigator.mediaDevices.enumerateDevices();
        return this.ti(t3);
      } catch (i2) {
        return this.Ne("Video permission also failed:", i2.message), t2;
      }
    });
  }
  Xe(t2, e2) {
    return __async(this, null, function* () {
      const i2 = this.options.braveRetryAttempts;
      for (let o2 = 1; i2 >= o2; o2++) {
        this.Ne(`Brave permission attempt ${o2}/${i2}`);
        try {
          let t3 = false, r2 = false;
          try {
            (yield navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((t4) => t4.stop()), t3 = true, this.Ne("Brave: Audio permission granted");
          } catch (s2) {
            this.Ne("Brave: Audio permission denied");
          }
          yield new Promise((t4) => setTimeout(t4, 1.5 * e2));
          try {
            (yield navigator.mediaDevices.getUserMedia({ video: true })).getTracks().forEach((t4) => t4.stop()), r2 = true, this.Ne("Brave: Video permission granted");
          } catch (s2) {
            this.Ne("Brave: Video permission denied");
          }
          if (t3 || r2) {
            yield new Promise((t5) => setTimeout(t5, 2 * e2));
            const t4 = yield navigator.mediaDevices.enumerateDevices(), i3 = this.ti(t4);
            if (i3.some((t5) => t5.label && "Unlabeled device" !== t5.label)) return this.Ne("Brave: Successfully obtained device labels"), i3;
          }
          i2 > o2 && (this.Ne(`Brave: Attempt ${o2} failed, retrying in ${2 * e2}ms...`), yield new Promise((t4) => setTimeout(t4, 2 * e2)));
        } catch (r2) {
          if (this.Ne(`Brave attempt ${o2} failed:`, r2.message), o2 === i2) break;
        }
      }
      return this.Ne("Brave: All permission attempts failed, returning unlabeled devices"), t2;
    });
  }
  Ze(t2, e2) {
    return __async(this, null, function* () {
      this.Ne("Safari: Starting conservative permission strategy");
      try {
        let t3 = false;
        try {
          this.Ne("Safari: Requesting audio permission..."), (yield navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((t4) => t4.stop()), t3 = true, this.Ne("Safari: Audio permission granted"), yield new Promise((t4) => setTimeout(t4, 2 * e2));
        } catch (i2) {
          this.Ne("Safari: Audio permission failed:", i2.message);
        }
        let s2 = false;
        try {
          this.Ne("Safari: Requesting video permission..."), (yield navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 640 }, height: { ideal: 480 } } })).getTracks().forEach((t4) => t4.stop()), s2 = true, this.Ne("Safari: Video permission granted"), yield new Promise((t4) => setTimeout(t4, 2 * e2));
        } catch (i2) {
          this.Ne("Safari: Video permission failed:", i2.message);
        }
        if (t3 || s2) {
          yield new Promise((t5) => setTimeout(t5, 3 * e2));
          const t4 = yield navigator.mediaDevices.enumerateDevices(), i2 = this.ti(t4);
          if (i2.length > 0) return this.Ne("Safari: Device enumeration successful"), i2;
        }
      } catch (i2) {
        this.Ne("Safari: Permission strategy failed:", i2.message);
      }
      return this.Ne("Safari: Returning unlabeled devices"), t2;
    });
  }
  Qe(t2, e2) {
    return __async(this, null, function* () {
      const i2 = this.browserInfo.isEdgeChromium ? "Edge" : "Chrome";
      this.Ne(i2 + ": Starting Chrome-optimized permission strategy"), this.Ne(i2 + " Mobile:", this.browserInfo.isChromeMobile, "Android:", this.browserInfo.isAndroid, "Incognito/InPrivate:", this.browserInfo.isIncognito);
      const s2 = this.browserInfo.isIncognito ? 5 : this.options.chromeRetryAttempts || 3;
      for (let a2 = 1; s2 >= a2; a2++) {
        this.Ne(`${i2}: Permission attempt ${a2}/${s2}`);
        try {
          let t3 = false, c2 = false;
          if (this.browserInfo.isIncognito && 1 === a2) {
            this.Ne(i2 + " Incognito/InPrivate: Attempting to force fresh permission prompt");
            try {
              (yield navigator.mediaDevices.getUserMedia({ video: { width: { exact: 640 }, height: { exact: 480 }, frameRate: { exact: 30 } } })).getTracks().forEach((t4) => t4.stop()), t3 = true, this.Ne(i2 + " Incognito/InPrivate: Forced permission prompt succeeded");
            } catch (r2) {
              this.Ne(i2 + " Incognito/InPrivate: Forced permission prompt failed, trying standard approach");
            }
          }
          if (!t3) try {
            this.Ne(i2 + ": Requesting video permission...");
            const e3 = this.browserInfo.isChromeMobile ? { video: { width: { ideal: 640 }, height: { ideal: 480 } } } : { video: true };
            (yield navigator.mediaDevices.getUserMedia(e3)).getTracks().forEach((t4) => t4.stop()), t3 = true, this.Ne(i2 + ": Video permission granted");
          } catch (o2) {
            if (this.Ne(i2 + ": Video permission failed:", o2.message), this.browserInfo.isIncognito) try {
              this.Ne(i2 + " Incognito/InPrivate: Trying ultra-basic video constraints"), (yield navigator.mediaDevices.getUserMedia({ video: {} })).getTracks().forEach((t4) => t4.stop()), t3 = true, this.Ne(i2 + " Incognito/InPrivate: Ultra-basic video permission granted");
            } catch (n2) {
              this.Ne(i2 + " Incognito/InPrivate: Even basic video permission failed:", n2.message);
            }
          }
          yield new Promise((t4) => setTimeout(t4, e2));
          try {
            this.Ne(i2 + ": Requesting audio permission..."), (yield navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((t4) => t4.stop()), c2 = true, this.Ne(i2 + ": Audio permission granted");
          } catch (o2) {
            this.Ne(i2 + ": Audio permission failed:", o2.message);
          }
          if (t3 || c2) {
            const t4 = this.browserInfo.isChromeMobile ? 2 * e2 : this.browserInfo.isIncognito ? 3 * e2 : e2;
            yield new Promise((e3) => setTimeout(e3, t4)), this.Ne(i2 + ": Enumerating devices after permission grant...");
            const s3 = yield navigator.mediaDevices.enumerateDevices(), r2 = this.ti(s3);
            if (r2.some((t5) => t5.label && "" !== t5.label.trim() && "Unlabeled device" !== t5.label)) return this.Ne(`${i2}: Successfully obtained ${r2.length} devices with labels`), r2;
            this.Ne(i2 + ": Got devices but no labels, may need retry");
          }
          if (s2 > a2) {
            const t4 = e2 * a2;
            this.Ne(`${i2}: Attempt ${a2} incomplete, retrying in ${t4}ms...`), yield new Promise((e3) => setTimeout(e3, t4));
          }
        } catch (o2) {
          if (this.Ne(`${i2}: Permission attempt ${a2} failed:`, o2.message), a2 === s2) break;
          yield new Promise((t3) => setTimeout(t3, e2 * a2));
        }
      }
      this.Ne(i2 + ": All permission attempts completed, returning available devices");
      try {
        const t3 = yield navigator.mediaDevices.enumerateDevices(), e3 = this.ti(t3);
        if (e3.length > 0) return this.Ne(`${i2}: Final enumeration found ${e3.length} devices`), e3;
      } catch (o2) {
        this.Ne(i2 + ": Final enumeration failed:", o2.message);
      }
      return t2;
    });
  }
  ti(t2) {
    return t2 && Array.isArray(t2) ? t2.filter((t3) => t3 && t3.deviceId && t3.kind).map((t3) => ({ deviceId: t3.deviceId, kind: t3.kind, label: t3.label || "Unlabeled device", groupId: t3.groupId || "" })) : [];
  }
  Ke(t2, e2) {
    this.xe.set(t2, { devices: [...e2], timestamp: Date.now() });
  }
  listVideoDevices(t2 = false) {
    return __async(this, null, function* () {
      return (yield this.enumerateDevices(t2)).filter((t3) => "videoinput" === t3.kind);
    });
  }
  listAudioInputDevices(t2 = false) {
    return __async(this, null, function* () {
      return (yield this.enumerateDevices(t2)).filter((t3) => "audioinput" === t3.kind);
    });
  }
  listAudioOutputDevices(t2 = false) {
    return __async(this, null, function* () {
      return (yield this.enumerateDevices(t2)).filter((t3) => "audiooutput" === t3.kind);
    });
  }
  getDefaultDevice(t2, e2) {
    return __async(this, null, function* () {
      let i2;
      switch (t2) {
        case "videoinput":
          i2 = yield this.listVideoDevices();
          break;
        case "audioinput":
          i2 = yield this.listAudioInputDevices();
          break;
        case "audiooutput":
          i2 = yield this.listAudioOutputDevices();
          break;
        default:
          throw Error("Invalid device type: " + t2);
      }
      if (!i2 || 0 === i2.length) return;
      if (e2) try {
        const t3 = localStorage.getItem(e2);
        if (t3) {
          const e3 = i2.find((e4) => e4.deviceId === t3);
          if (e3) return this.Ne("Found saved device preference: " + e3.label), t3;
        }
      } catch (r2) {
      }
      const s2 = i2[0];
      return this.Ne("Using default device: " + s2.label), s2.deviceId;
    });
  }
  saveDevicePreference(t2, e2) {
    try {
      localStorage.setItem(t2, e2), this.Ne(`Saved device preference: ${t2} = ${e2}`);
    } catch (i2) {
      this.Ne("Failed to save device preference: " + i2.message);
    }
  }
  Ae() {
    if (!navigator.mediaDevices?.addEventListener) return;
    const t2 = () => {
      this.Ne("Device change detected, clearing cache"), this.xe.clear(), this.Me.forEach((t3) => {
        try {
          t3();
        } catch (e2) {
          this.Ne("Device change listener error:", e2.message);
        }
      });
    };
    navigator.mediaDevices.addEventListener("devicechange", t2), this.si = t2;
  }
  addDeviceChangeListener(t2) {
    "function" == typeof t2 && this.Me.add(t2);
  }
  removeDeviceChangeListener(t2) {
    this.Me.delete(t2);
  }
  clearCache() {
    this.xe.clear(), this.Ne("Device cache cleared");
  }
  dispose() {
    this.si && navigator.mediaDevices?.removeEventListener && navigator.mediaDevices.removeEventListener("devicechange", this.si), this.Me.clear(), this.xe.clear();
  }
  getBrowserInfo() {
    return __spreadValues({}, this.browserInfo);
  }
};
var ui = (t2, e2) => e2.some((e3) => t2 instanceof e3);
var pi;
var mi;
var fi = /* @__PURE__ */ new WeakMap();
var wi = /* @__PURE__ */ new WeakMap();
var gi = /* @__PURE__ */ new WeakMap();
var yi = { get(t2, e2, i2) {
  if (t2 instanceof IDBTransaction) {
    if ("done" === e2) return fi.get(t2);
    if ("store" === e2) return i2.objectStoreNames[1] ? void 0 : i2.objectStore(i2.objectStoreNames[0]);
  }
  return bi(t2[e2]);
}, set: (t2, e2, i2) => (t2[e2] = i2, true), has: (t2, e2) => t2 instanceof IDBTransaction && ("done" === e2 || "store" === e2) || e2 in t2 };
function vi(t2) {
  yi = t2(yi);
}
function bi(t2) {
  if (t2 instanceof IDBRequest) return ((t3) => {
    const e3 = new Promise((e4, i2) => {
      const s2 = () => {
        t3.removeEventListener("success", r2), t3.removeEventListener("error", o2);
      }, r2 = () => {
        e4(bi(t3.result)), s2();
      }, o2 = () => {
        i2(t3.error), s2();
      };
      t3.addEventListener("success", r2), t3.addEventListener("error", o2);
    });
    return gi.set(e3, t3), e3;
  })(t2);
  if (wi.has(t2)) return wi.get(t2);
  const e2 = (function(t3) {
    return "function" == typeof t3 ? (e3 = t3, (mi || (mi = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e3) ? function(...t4) {
      return e3.apply(Ei(this), t4), bi(this.request);
    } : function(...t4) {
      return bi(e3.apply(Ei(this), t4));
    }) : (t3 instanceof IDBTransaction && ((t4) => {
      if (fi.has(t4)) return;
      const e4 = new Promise((e5, i2) => {
        const s2 = () => {
          t4.removeEventListener("complete", r2), t4.removeEventListener("error", o2), t4.removeEventListener("abort", o2);
        }, r2 = () => {
          e5(), s2();
        }, o2 = () => {
          i2(t4.error || new DOMException("AbortError", "AbortError")), s2();
        };
        t4.addEventListener("complete", r2), t4.addEventListener("error", o2), t4.addEventListener("abort", o2);
      });
      fi.set(t4, e4);
    })(t3), ui(t3, pi || (pi = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t3, yi) : t3);
    var e3;
  })(t2);
  return e2 !== t2 && (wi.set(t2, e2), gi.set(e2, t2)), e2;
}
var Ei = (t2) => gi.get(t2);
var Ii = ["get", "getKey", "getAll", "getAllKeys", "count"];
var Ti = ["put", "add", "delete", "clear"];
var Ri = /* @__PURE__ */ new Map();
function Si(t2, e2) {
  if (!(t2 instanceof IDBDatabase) || e2 in t2 || "string" != typeof e2) return;
  if (Ri.get(e2)) return Ri.get(e2);
  const i2 = e2.replace(/FromIndex$/, ""), s2 = e2 !== i2, r2 = Ti.includes(i2);
  if (!(i2 in (s2 ? IDBIndex : IDBObjectStore).prototype) || !r2 && !Ii.includes(i2)) return;
  const o2 = function(t3, ...e3) {
    return __async(this, null, function* () {
      const o3 = this.transaction(t3, r2 ? "readwrite" : "readonly");
      let n2 = o3.store;
      return s2 && (n2 = n2.index(e3.shift())), (yield Promise.all([n2[i2](...e3), r2 && o3.done]))[0];
    });
  };
  return Ri.set(e2, o2), o2;
}
vi((t2) => __spreadProps(__spreadValues({}, t2), { get(e2, i2, s2) {
  return Si(e2, i2) || t2.get(e2, i2, s2);
}, has(e2, i2) {
  return !!Si(e2, i2) || t2.has(e2, i2);
} }));
var ki = ["continue", "continuePrimaryKey", "advance"];
var Ci = {};
var _i = /* @__PURE__ */ new WeakMap();
var Pi = /* @__PURE__ */ new WeakMap();
var Di = { get(t2, e2) {
  if (!ki.includes(e2)) return t2[e2];
  let i2 = Ci[e2];
  return i2 || (i2 = Ci[e2] = function(...t3) {
    _i.set(this, Pi.get(this)[e2](...t3));
  }), i2;
} };
function xi(...t2) {
  return __asyncGenerator(this, null, function* () {
    let e2 = this;
    if (e2 instanceof IDBCursor || (e2 = yield new __await(e2.openCursor(...t2))), !e2) return;
    const i2 = new Proxy(e2, Di);
    for (Pi.set(i2, e2), gi.set(i2, Ei(e2)); e2; ) yield i2, e2 = yield new __await(_i.get(i2) || e2.continue()), _i.delete(i2);
  });
}
function Oi(t2, e2) {
  return e2 === Symbol.asyncIterator && ui(t2, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === e2 && ui(t2, [IDBIndex, IDBObjectStore]);
}
vi((t2) => __spreadProps(__spreadValues({}, t2), { get: (e2, i2, s2) => Oi(e2, i2) ? xi : t2.get(e2, i2, s2), has: (e2, i2) => Oi(e2, i2) || t2.has(e2, i2) }));
var Li = /* @__PURE__ */ Object.create(null);
Li.open = "0", Li.close = "1", Li.ping = "2", Li.pong = "3", Li.message = "4", Li.upgrade = "5", Li.noop = "6";
var Ui = /* @__PURE__ */ Object.create(null);
Object.keys(Li).forEach((t2) => {
  Ui[Li[t2]] = t2;
});
var Vi = { type: "error", data: "parser error" };
var Bi = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === {}.toString.call(Blob);
var qi = "function" == typeof ArrayBuffer;
var zi = (t2) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t2) : t2 && t2.buffer instanceof ArrayBuffer;
var Gi = ({ type: t2, data: e2 }, i2, s2) => Bi && e2 instanceof Blob ? i2 ? s2(e2) : Wi(e2, s2) : qi && (e2 instanceof ArrayBuffer || zi(e2)) ? i2 ? s2(e2) : Wi(new Blob([e2]), s2) : s2(Li[t2] + (e2 || ""));
var Wi = (t2, e2) => {
  const i2 = new FileReader();
  return i2.onload = () => {
    const t3 = i2.result.split(",")[1];
    e2("b" + (t3 || ""));
  }, i2.readAsDataURL(t2);
};
function Hi(t2) {
  return t2 instanceof Uint8Array ? t2 : t2 instanceof ArrayBuffer ? new Uint8Array(t2) : new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength);
}
var Ji;
var Ki = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
for (let fr = 0; 64 > fr; fr++) Ki["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(fr)] = fr;
var Yi = "function" == typeof ArrayBuffer;
var Qi = (t2, e2) => {
  if ("string" != typeof t2) return { type: "message", data: Zi(t2, e2) };
  const i2 = t2.charAt(0);
  return "b" === i2 ? { type: "message", data: Xi(t2.substring(1), e2) } : Ui[i2] ? t2.length > 1 ? { type: Ui[i2], data: t2.substring(1) } : { type: Ui[i2] } : Vi;
};
var Xi = (t2, e2) => {
  if (Yi) {
    const i2 = ((t3) => {
      let e3, i3, s2, r2, o2, n2 = 0.75 * t3.length, a2 = t3.length, c2 = 0;
      "=" === t3[t3.length - 1] && (n2--, "=" === t3[t3.length - 2] && n2--);
      const h2 = new ArrayBuffer(n2), d2 = new Uint8Array(h2);
      for (e3 = 0; a2 > e3; e3 += 4) i3 = Ki[t3.charCodeAt(e3)], s2 = Ki[t3.charCodeAt(e3 + 1)], r2 = Ki[t3.charCodeAt(e3 + 2)], o2 = Ki[t3.charCodeAt(e3 + 3)], d2[c2++] = i3 << 2 | s2 >> 4, d2[c2++] = (15 & s2) << 4 | r2 >> 2, d2[c2++] = (3 & r2) << 6 | 63 & o2;
      return h2;
    })(t2);
    return Zi(i2, e2);
  }
  return { base64: true, data: t2 };
};
var Zi = (t2, e2) => "blob" === e2 ? t2 instanceof Blob ? t2 : new Blob([t2]) : t2 instanceof ArrayBuffer ? t2 : t2.buffer;
var ts;
function es(t2) {
  return t2.reduce((t3, e2) => t3 + e2.length, 0);
}
function is(t2, e2) {
  if (t2[0].length === e2) return t2.shift();
  const i2 = new Uint8Array(e2);
  let s2 = 0;
  for (let r2 = 0; e2 > r2; r2++) i2[r2] = t2[0][s2++], s2 === t2[0].length && (t2.shift(), s2 = 0);
  return t2.length && t2[0].length > s2 && (t2[0] = t2[0].slice(s2)), i2;
}
function ss(t2) {
  if (t2) return ((t3) => {
    for (var e2 in ss.prototype) t3[e2] = ss.prototype[e2];
    return t3;
  })(t2);
}
ss.prototype.on = ss.prototype.addEventListener = function(t2, e2) {
  return this.hi = this.hi || {}, (this.hi["$" + t2] = this.hi["$" + t2] || []).push(e2), this;
}, ss.prototype.once = function(t2, e2) {
  function i2() {
    this.off(t2, i2), e2.apply(this, arguments);
  }
  return i2.fn = e2, this.on(t2, i2), this;
}, ss.prototype.off = ss.prototype.removeListener = ss.prototype.removeAllListeners = ss.prototype.removeEventListener = function(t2, e2) {
  if (this.hi = this.hi || {}, 0 == arguments.length) return this.hi = {}, this;
  var i2, s2 = this.hi["$" + t2];
  if (!s2) return this;
  if (1 == arguments.length) return delete this.hi["$" + t2], this;
  for (var r2 = 0; s2.length > r2; r2++) if ((i2 = s2[r2]) === e2 || i2.fn === e2) {
    s2.splice(r2, 1);
    break;
  }
  return 0 === s2.length && delete this.hi["$" + t2], this;
}, ss.prototype.emitReserved = ss.prototype.emit = function(t2) {
  this.hi = this.hi || {};
  for (var e2 = Array(arguments.length - 1), i2 = this.hi["$" + t2], s2 = 1; arguments.length > s2; s2++) e2[s2 - 1] = arguments[s2];
  if (i2) {
    s2 = 0;
    for (var r2 = (i2 = i2.slice(0)).length; r2 > s2; ++s2) i2[s2].apply(this, e2);
  }
  return this;
}, ss.prototype.listeners = function(t2) {
  return this.hi = this.hi || {}, this.hi["$" + t2] || [];
}, ss.prototype.hasListeners = function(t2) {
  return !!this.listeners(t2).length;
};
var rs = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t2) => Promise.resolve().then(t2) : (t2, e2) => e2(t2, 0);
var os = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("", "return this")();
function ns(t2, ...e2) {
  return e2.reduce((e3, i2) => (t2.hasOwnProperty(i2) && (e3[i2] = t2[i2]), e3), {});
}
var as = os.setTimeout;
var cs = os.clearTimeout;
function hs(t2, e2) {
  e2.useNativeTimers ? (t2.setTimeoutFn = as.bind(os), t2.clearTimeoutFn = cs.bind(os)) : (t2.setTimeoutFn = os.setTimeout.bind(os), t2.clearTimeoutFn = os.clearTimeout.bind(os));
}
function ds(t2) {
  return "string" == typeof t2 ? ((t3) => {
    let e2 = 0, i2 = 0;
    for (let s2 = 0, r2 = t3.length; r2 > s2; s2++) e2 = t3.charCodeAt(s2), 128 > e2 ? i2 += 1 : 2048 > e2 ? i2 += 2 : 55296 > e2 || e2 >= 57344 ? i2 += 3 : (s2++, i2 += 4);
    return i2;
  })(t2) : Math.ceil(1.33 * (t2.byteLength || t2.size));
}
function ls() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
var us = class extends Error {
  constructor(t2, e2, i2) {
    super(t2), this.description = e2, this.context = i2, this.type = "TransportError";
  }
};
var ps = class extends ss {
  constructor(t2) {
    super(), this.writable = false, hs(this, t2), this.opts = t2, this.query = t2.query, this.socket = t2.socket, this.supportsBinary = !t2.forceBase64;
  }
  onError(t2, e2, i2) {
    return super.emitReserved("error", new us(t2, e2, i2)), this;
  }
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  close() {
    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
  }
  send(t2) {
    "open" === this.readyState && this.write(t2);
  }
  onOpen() {
    this.readyState = "open", this.writable = true, super.emitReserved("open");
  }
  onData(t2) {
    const e2 = Qi(t2, this.socket.binaryType);
    this.onPacket(e2);
  }
  onPacket(t2) {
    super.emitReserved("packet", t2);
  }
  onClose(t2) {
    this.readyState = "closed", super.emitReserved("close", t2);
  }
  pause(t2) {
  }
  createUri(t2, e2 = {}) {
    return t2 + "://" + this.di() + this.li() + this.opts.path + this.ui(e2);
  }
  di() {
    const t2 = this.opts.hostname;
    return -1 === t2.indexOf(":") ? t2 : "[" + t2 + "]";
  }
  li() {
    return this.opts.port && (this.opts.secure && 443 !== +this.opts.port || !this.opts.secure && 80 !== +this.opts.port) ? ":" + this.opts.port : "";
  }
  ui(t2) {
    const e2 = ((t3) => {
      let e3 = "";
      for (let i2 in t3) t3.hasOwnProperty(i2) && (e3.length && (e3 += "&"), e3 += encodeURIComponent(i2) + "=" + encodeURIComponent(t3[i2]));
      return e3;
    })(t2);
    return e2.length ? "?" + e2 : "";
  }
};
var ms = class extends ps {
  constructor() {
    super(...arguments), this.pi = false;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.mi();
  }
  pause(t2) {
    this.readyState = "pausing";
    const e2 = () => {
      this.readyState = "paused", t2();
    };
    if (this.pi || !this.writable) {
      let t3 = 0;
      this.pi && (t3++, this.once("pollComplete", () => {
        --t3 || e2();
      })), this.writable || (t3++, this.once("drain", () => {
        --t3 || e2();
      }));
    } else e2();
  }
  mi() {
    this.pi = true, this.doPoll(), this.emitReserved("poll");
  }
  onData(t2) {
    ((t3, e2) => {
      const i2 = t3.split(""), s2 = [];
      for (let r2 = 0; i2.length > r2; r2++) {
        const t4 = Qi(i2[r2], e2);
        if (s2.push(t4), "error" === t4.type) break;
      }
      return s2;
    })(t2, this.socket.binaryType).forEach((t3) => {
      if ("opening" === this.readyState && "open" === t3.type && this.onOpen(), "close" === t3.type) return this.onClose({ description: "transport closed by the server" }), false;
      this.onPacket(t3);
    }), "closed" !== this.readyState && (this.pi = false, this.emitReserved("pollComplete"), "open" === this.readyState && this.mi());
  }
  doClose() {
    const t2 = () => {
      this.write([{ type: "close" }]);
    };
    "open" === this.readyState ? t2() : this.once("open", t2);
  }
  write(t2) {
    this.writable = false, ((t3, e2) => {
      const i2 = t3.length, s2 = Array(i2);
      let r2 = 0;
      t3.forEach((t4, o2) => {
        Gi(t4, false, (t5) => {
          s2[o2] = t5, ++r2 === i2 && e2(s2.join(""));
        });
      });
    })(t2, (t3) => {
      this.doWrite(t3, () => {
        this.writable = true, this.emitReserved("drain");
      });
    });
  }
  uri() {
    const t2 = this.opts.secure ? "https" : "http", e2 = this.query || {};
    return false !== this.opts.timestampRequests && (e2[this.opts.timestampParam] = ls()), this.supportsBinary || e2.sid || (e2.b64 = 1), this.createUri(t2, e2);
  }
};
var fs = false;
try {
  fs = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (mr) {
}
var ws = fs;
function gs() {
}
var ys = class extends ms {
  constructor(t2) {
    if (super(t2), "undefined" != typeof location) {
      const e2 = "https:" === location.protocol;
      let i2 = location.port;
      i2 || (i2 = e2 ? "443" : "80"), this.xd = "undefined" != typeof location && t2.hostname !== location.hostname || i2 !== t2.port;
    }
  }
  doWrite(t2, e2) {
    const i2 = this.request({ method: "POST", data: t2 });
    i2.on("success", e2), i2.on("error", (t3, e3) => {
      this.onError("xhr post error", t3, e3);
    });
  }
  doPoll() {
    const t2 = this.request();
    t2.on("data", this.onData.bind(this)), t2.on("error", (t3, e2) => {
      this.onError("xhr poll error", t3, e2);
    }), this.pollXhr = t2;
  }
};
var vs = class _vs extends ss {
  constructor(t2, e2, i2) {
    super(), this.createRequest = t2, hs(this, i2), this.fi = i2, this.wi = i2.method || "GET", this.gi = e2, this.yi = void 0 !== i2.data ? i2.data : null, this.bi();
  }
  bi() {
    var t2;
    const e2 = ns(this.fi, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e2.xdomain = !!this.fi.xd;
    const i2 = this.Ei = this.createRequest(e2);
    try {
      i2.open(this.wi, this.gi, true);
      try {
        if (this.fi.extraHeaders) {
          i2.setDisableHeaderCheck && i2.setDisableHeaderCheck(true);
          for (let t3 in this.fi.extraHeaders) this.fi.extraHeaders.hasOwnProperty(t3) && i2.setRequestHeader(t3, this.fi.extraHeaders[t3]);
        }
      } catch (s2) {
      }
      if ("POST" === this.wi) try {
        i2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
      } catch (s2) {
      }
      try {
        i2.setRequestHeader("Accept", "*/*");
      } catch (s2) {
      }
      null === (t2 = this.fi.cookieJar) || void 0 === t2 || t2.addCookies(i2), "withCredentials" in i2 && (i2.withCredentials = this.fi.withCredentials), this.fi.requestTimeout && (i2.timeout = this.fi.requestTimeout), i2.onreadystatechange = () => {
        var t3;
        3 === i2.readyState && (null === (t3 = this.fi.cookieJar) || void 0 === t3 || t3.parseCookies(i2.getResponseHeader("set-cookie"))), 4 === i2.readyState && (200 === i2.status || 1223 === i2.status ? this.Ii() : this.setTimeoutFn(() => {
          this.Ti("number" == typeof i2.status ? i2.status : 0);
        }, 0));
      }, i2.send(this.yi);
    } catch (s2) {
      return void this.setTimeoutFn(() => {
        this.Ti(s2);
      }, 0);
    }
    "undefined" != typeof document && (this.Ri = _vs.requestsCount++, _vs.requests[this.Ri] = this);
  }
  Ti(t2) {
    this.emitReserved("error", t2, this.Ei), this.He(true);
  }
  He(t2) {
    if (null != this.Ei) {
      if (this.Ei.onreadystatechange = gs, t2) try {
        this.Ei.abort();
      } catch (e2) {
      }
      "undefined" != typeof document && delete _vs.requests[this.Ri], this.Ei = null;
    }
  }
  Ii() {
    const t2 = this.Ei.responseText;
    null !== t2 && (this.emitReserved("data", t2), this.emitReserved("success"), this.He());
  }
  abort() {
    this.He();
  }
};
function bs() {
  for (let t2 in vs.requests) vs.requests.hasOwnProperty(t2) && vs.requests[t2].abort();
}
vs.requestsCount = 0, vs.requests = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", bs) : "function" == typeof addEventListener && addEventListener("onpagehide" in os ? "pagehide" : "unload", bs, false));
var Es = (() => {
  const t2 = Is({ xdomain: false });
  return t2 && null !== t2.responseType;
})();
function Is(t2) {
  const e2 = t2.xdomain;
  try {
    if ("undefined" != typeof XMLHttpRequest && (!e2 || ws)) return new XMLHttpRequest();
  } catch (i2) {
  }
  if (!e2) try {
    return new os[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
  } catch (i2) {
  }
}
var Ts = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
var Rs = class extends ps {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t2 = this.uri(), e2 = this.opts.protocols, i2 = Ts ? {} : ns(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i2.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t2, e2, i2);
    } catch (mr) {
      return this.emitReserved("error", mr);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws.Si.unref(), this.onOpen();
    }, this.ws.onclose = (t2) => this.onClose({ description: "websocket connection closed", context: t2 }), this.ws.onmessage = (t2) => this.onData(t2.data), this.ws.onerror = (t2) => this.onError("websocket error", t2);
  }
  write(t2) {
    this.writable = false;
    for (let e2 = 0; t2.length > e2; e2++) {
      const i2 = t2[e2], s2 = e2 === t2.length - 1;
      Gi(i2, this.supportsBinary, (t3) => {
        try {
          this.doWrite(i2, t3);
        } catch (e3) {
        }
        s2 && rs(() => {
          this.writable = true, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    void 0 !== this.ws && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  uri() {
    const t2 = this.opts.secure ? "wss" : "ws", e2 = this.query || {};
    return this.opts.timestampRequests && (e2[this.opts.timestampParam] = ls()), this.supportsBinary || (e2.b64 = 1), this.createUri(t2, e2);
  }
};
var Ss = os.WebSocket || os.MozWebSocket;
var ks = { websocket: class extends Rs {
  createSocket(t2, e2, i2) {
    return Ts ? new Ss(t2, e2, i2) : e2 ? new Ss(t2, e2) : new Ss(t2);
  }
  doWrite(t2, e2) {
    this.ws.send(e2);
  }
}, webtransport: class extends ps {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this.ki = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (mr) {
      return this.emitReserved("error", mr);
    }
    this.ki.closed.then(() => {
      this.onClose();
    }).catch((t2) => {
      this.onError("webtransport error", t2);
    }), this.ki.ready.then(() => {
      this.ki.createBidirectionalStream().then((t2) => {
        const e2 = ((t3, e3) => {
          ts || (ts = new TextDecoder());
          const i3 = [];
          let s3 = 0, r3 = -1, o3 = false;
          return new TransformStream({ transform(n2, a2) {
            for (i3.push(n2); ; ) {
              if (0 === s3) {
                if (1 > es(i3)) break;
                const t4 = is(i3, 1);
                o3 = !(128 & ~t4[0]), r3 = 127 & t4[0], s3 = 126 > r3 ? 3 : 126 === r3 ? 1 : 2;
              } else if (1 === s3) {
                if (2 > es(i3)) break;
                const t4 = is(i3, 2);
                r3 = new DataView(t4.buffer, t4.byteOffset, t4.length).getUint16(0), s3 = 3;
              } else if (2 === s3) {
                if (8 > es(i3)) break;
                const t4 = is(i3, 8), e4 = new DataView(t4.buffer, t4.byteOffset, t4.length), o4 = e4.getUint32(0);
                if (o4 > 2097151) {
                  a2.enqueue(Vi);
                  break;
                }
                r3 = 4294967296 * o4 + e4.getUint32(4), s3 = 3;
              } else {
                if (es(i3) < r3) break;
                const t4 = is(i3, r3);
                a2.enqueue(Qi(o3 ? t4 : ts.decode(t4), e3)), s3 = 0;
              }
              if (0 === r3 || r3 > t3) {
                a2.enqueue(Vi);
                break;
              }
            }
          } });
        })(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i2 = t2.readable.pipeThrough(e2).getReader(), s2 = new TransformStream({ transform(t3, e3) {
          ((t4, e4) => {
            Bi && t4.data instanceof Blob ? t4.data.arrayBuffer().then(Hi).then(e4) : qi && (t4.data instanceof ArrayBuffer || zi(t4.data)) ? e4(Hi(t4.data)) : Gi(t4, false, (t5) => {
              Ji || (Ji = new TextEncoder()), e4(Ji.encode(t5));
            });
          })(t3, (i3) => {
            const s3 = i3.length;
            let r3;
            if (126 > s3) r3 = new Uint8Array(1), new DataView(r3.buffer).setUint8(0, s3);
            else if (65536 > s3) {
              r3 = new Uint8Array(3);
              const t4 = new DataView(r3.buffer);
              t4.setUint8(0, 126), t4.setUint16(1, s3);
            } else {
              r3 = new Uint8Array(9);
              const t4 = new DataView(r3.buffer);
              t4.setUint8(0, 127), t4.setBigUint64(1, BigInt(s3));
            }
            t3.data && "string" != typeof t3.data && (r3[0] |= 128), e3.enqueue(r3), e3.enqueue(i3);
          });
        } });
        s2.readable.pipeTo(t2.writable), this.Ci = s2.writable.getWriter();
        const r2 = () => {
          i2.read().then(({ done: t3, value: e3 }) => {
            t3 || (this.onPacket(e3), r2());
          }).catch((t3) => {
          });
        };
        r2();
        const o2 = { type: "open" };
        this.query.sid && (o2.data = `{"sid":"${this.query.sid}"}`), this.Ci.write(o2).then(() => this.onOpen());
      });
    });
  }
  write(t2) {
    this.writable = false;
    for (let e2 = 0; t2.length > e2; e2++) {
      const i2 = e2 === t2.length - 1;
      this.Ci.write(t2[e2]).then(() => {
        i2 && rs(() => {
          this.writable = true, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t2;
    null === (t2 = this.ki) || void 0 === t2 || t2.close();
  }
}, polling: class extends ys {
  constructor(t2) {
    super(t2), this.supportsBinary = Es && !(t2 && t2.forceBase64);
  }
  request(t2 = {}) {
    return Object.assign(t2, { xd: this.xd }, this.opts), new vs(Is, this.uri(), t2);
  }
} };
var Cs = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var _s = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Ps(t2) {
  if (t2.length > 8e3) throw "URI too long";
  const e2 = t2, i2 = t2.indexOf("["), s2 = t2.indexOf("]");
  -1 != i2 && -1 != s2 && (t2 = t2.substring(0, i2) + t2.substring(i2, s2).replace(/:/g, ";") + t2.substring(s2, t2.length));
  let r2 = Cs.exec(t2 || ""), o2 = {}, n2 = 14;
  for (; n2--; ) o2[_s[n2]] = r2[n2] || "";
  return -1 != i2 && -1 != s2 && (o2.source = e2, o2.host = o2.host.substring(1, o2.host.length - 1).replace(/;/g, ":"), o2.authority = o2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o2.ipv6uri = true), o2.pathNames = ((t3, e3) => {
    const i3 = e3.replace(/\/{2,9}/g, "/").split("/");
    return "/" != e3.slice(0, 1) && 0 !== e3.length || i3.splice(0, 1), "/" == e3.slice(-1) && i3.splice(i3.length - 1, 1), i3;
  })(0, o2.path), o2.queryKey = ((t3, e3) => {
    const i3 = {};
    return e3.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (t4, e4, s3) => {
      e4 && (i3[e4] = s3);
    }), i3;
  })(0, o2.query), o2;
}
var Ds = "function" == typeof addEventListener && "function" == typeof removeEventListener;
var xs = [];
Ds && addEventListener("offline", () => {
  xs.forEach((t2) => t2());
}, false);
var Os = class _Os extends ss {
  constructor(t2, e2) {
    if (super(), this.binaryType = "arraybuffer", this.writeBuffer = [], this._i = 0, this.Pi = -1, this.Di = -1, this.xi = -1, this.Oi = Infinity, t2 && "object" == typeof t2 && (e2 = t2, t2 = null), t2) {
      const i2 = Ps(t2);
      e2.hostname = i2.host, e2.secure = "https" === i2.protocol || "wss" === i2.protocol, e2.port = i2.port, i2.query && (e2.query = i2.query);
    } else e2.host && (e2.hostname = Ps(e2.host).host);
    hs(this, e2), this.secure = null != e2.secure ? e2.secure : "undefined" != typeof location && "https:" === location.protocol, e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.hostname = e2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this.Mi = {}, e2.transports.forEach((t3) => {
      const e3 = t3.prototype.name;
      this.transports.push(e3), this.Mi[e3] = t3;
    }), this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, e2), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = (() => {
      let t3 = {}, e3 = this.opts.query.split("&");
      for (let i2 = 0, s2 = e3.length; s2 > i2; i2++) {
        let s3 = e3[i2].split("=");
        t3[decodeURIComponent(s3[0])] = decodeURIComponent(s3[1]);
      }
      return t3;
    })()), Ds && (this.opts.closeOnBeforeunload && (this.Ai = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.Ai, false)), "localhost" !== this.hostname && (this.Ni = () => {
      this.ji("transport close", { description: "network connection lost" });
    }, xs.push(this.Ni))), this.opts.withCredentials && (this.$i = void 0), this.Fi();
  }
  createTransport(t2) {
    const e2 = Object.assign({}, this.opts.query);
    e2.EIO = 4, e2.transport = t2, this.id && (e2.sid = this.id);
    const i2 = Object.assign({}, this.opts, { query: e2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[t2]);
    return new this.Mi[t2](i2);
  }
  Fi() {
    if (0 === this.transports.length) return void this.setTimeoutFn(() => {
      this.emitReserved("error", "No transports available");
    }, 0);
    const t2 = this.opts.rememberUpgrade && _Os.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket") ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const e2 = this.createTransport(t2);
    e2.open(), this.setTransport(e2);
  }
  setTransport(t2) {
    this.transport && this.transport.removeAllListeners(), this.transport = t2, t2.on("drain", this.Li.bind(this)).on("packet", this.Ui.bind(this)).on("error", this.Ti.bind(this)).on("close", (t3) => this.ji("transport close", t3));
  }
  onOpen() {
    this.readyState = "open", _Os.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush();
  }
  Ui(t2) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t2), this.emitReserved("heartbeat"), t2.type) {
      case "open":
        this.onHandshake(JSON.parse(t2.data));
        break;
      case "ping":
        this.Vi("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this.Bi();
        break;
      case "error":
        const e2 = Error("server error");
        e2.code = t2.data, this.Ti(e2);
        break;
      case "message":
        this.emitReserved("data", t2.data), this.emitReserved("message", t2.data);
    }
  }
  onHandshake(t2) {
    this.emitReserved("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.Pi = t2.pingInterval, this.Di = t2.pingTimeout, this.xi = t2.maxPayload, this.onOpen(), "closed" !== this.readyState && this.Bi();
  }
  Bi() {
    this.clearTimeoutFn(this.qi);
    const t2 = this.Pi + this.Di;
    this.Oi = Date.now() + t2, this.qi = this.setTimeoutFn(() => {
      this.ji("ping timeout");
    }, t2), this.opts.autoUnref && this.qi.unref();
  }
  Li() {
    this.writeBuffer.splice(0, this._i), this._i = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t2 = this.zi();
      this.transport.send(t2), this._i = t2.length, this.emitReserved("flush");
    }
  }
  zi() {
    if (!this.xi || "polling" !== this.transport.name || 1 >= this.writeBuffer.length) return this.writeBuffer;
    let t2 = 1;
    for (let e2 = 0; this.writeBuffer.length > e2; e2++) {
      const i2 = this.writeBuffer[e2].data;
      if (i2 && (t2 += ds(i2)), e2 > 0 && t2 > this.xi) return this.writeBuffer.slice(0, e2);
      t2 += 2;
    }
    return this.writeBuffer;
  }
  Gi() {
    if (!this.Oi) return true;
    const t2 = Date.now() > this.Oi;
    return t2 && (this.Oi = 0, rs(() => {
      this.ji("ping timeout");
    }, this.setTimeoutFn)), t2;
  }
  write(t2, e2, i2) {
    return this.Vi("message", t2, e2, i2), this;
  }
  send(t2, e2, i2) {
    return this.Vi("message", t2, e2, i2), this;
  }
  Vi(t2, e2, i2, s2) {
    if ("function" == typeof e2 && (s2 = e2, e2 = void 0), "function" == typeof i2 && (s2 = i2, i2 = null), "closing" === this.readyState || "closed" === this.readyState) return;
    (i2 = i2 || {}).compress = false !== i2.compress;
    const r2 = { type: t2, data: e2, options: i2 };
    this.emitReserved("packetCreate", r2), this.writeBuffer.push(r2), s2 && this.once("flush", s2), this.flush();
  }
  close() {
    const t2 = () => {
      this.ji("forced close"), this.transport.close();
    }, e2 = () => {
      this.off("upgrade", e2), this.off("upgradeError", e2), t2();
    }, i2 = () => {
      this.once("upgrade", e2), this.once("upgradeError", e2);
    };
    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i2() : t2();
    }) : this.upgrading ? i2() : t2()), this;
  }
  Ti(t2) {
    if (_Os.priorWebsocketSuccess = false, this.opts.tryAllTransports && this.transports.length > 1 && "opening" === this.readyState) return this.transports.shift(), this.Fi();
    this.emitReserved("error", t2), this.ji("transport error", t2);
  }
  ji(t2, e2) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      if (this.clearTimeoutFn(this.qi), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Ds && (this.Ai && removeEventListener("beforeunload", this.Ai, false), this.Ni)) {
        const t3 = xs.indexOf(this.Ni);
        -1 !== t3 && xs.splice(t3, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t2, e2), this.writeBuffer = [], this._i = 0;
    }
  }
};
Os.protocol = 4;
var Ms = class extends Os {
  constructor() {
    super(...arguments), this.Wi = [];
  }
  onOpen() {
    if (super.onOpen(), "open" === this.readyState && this.opts.upgrade) for (let t2 = 0; this.Wi.length > t2; t2++) this.Hi(this.Wi[t2]);
  }
  Hi(t2) {
    let e2 = this.createTransport(t2), i2 = false;
    Os.priorWebsocketSuccess = false;
    const s2 = () => {
      i2 || (e2.send([{ type: "ping", data: "probe" }]), e2.once("packet", (t3) => {
        if (!i2) if ("pong" === t3.type && "probe" === t3.data) {
          if (this.upgrading = true, this.emitReserved("upgrading", e2), !e2) return;
          Os.priorWebsocketSuccess = "websocket" === e2.name, this.transport.pause(() => {
            i2 || "closed" !== this.readyState && (h2(), this.setTransport(e2), e2.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e2), e2 = null, this.upgrading = false, this.flush());
          });
        } else {
          const t4 = Error("probe error");
          t4.transport = e2.name, this.emitReserved("upgradeError", t4);
        }
      }));
    };
    function r2() {
      i2 || (i2 = true, h2(), e2.close(), e2 = null);
    }
    const o2 = (t3) => {
      const i3 = Error("probe error: " + t3);
      i3.transport = e2.name, r2(), this.emitReserved("upgradeError", i3);
    };
    function n2() {
      o2("transport closed");
    }
    function a2() {
      o2("socket closed");
    }
    function c2(t3) {
      e2 && t3.name !== e2.name && r2();
    }
    const h2 = () => {
      e2.removeListener("open", s2), e2.removeListener("error", o2), e2.removeListener("close", n2), this.off("close", a2), this.off("upgrading", c2);
    };
    e2.once("open", s2), e2.once("error", o2), e2.once("close", n2), this.once("close", a2), this.once("upgrading", c2), -1 !== this.Wi.indexOf("webtransport") && "webtransport" !== t2 ? this.setTimeoutFn(() => {
      i2 || e2.open();
    }, 200) : e2.open();
  }
  onHandshake(t2) {
    this.Wi = this.Ji(t2.upgrades), super.onHandshake(t2);
  }
  Ji(t2) {
    const e2 = [];
    for (let i2 = 0; t2.length > i2; i2++) ~this.transports.indexOf(t2[i2]) && e2.push(t2[i2]);
    return e2;
  }
};
var As = class extends Ms {
  constructor(t2, e2 = {}) {
    const i2 = "object" == typeof t2 ? t2 : e2;
    (!i2.transports || i2.transports && "string" == typeof i2.transports[0]) && (i2.transports = (i2.transports || ["polling", "websocket", "webtransport"]).map((t3) => ks[t3]).filter((t3) => !!t3)), super(t2, i2);
  }
};
var Ns = "function" == typeof ArrayBuffer;
var js = {}.toString;
var $s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === js.call(Blob);
var Fs = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === js.call(File);
function Ls(t2) {
  return Ns && (t2 instanceof ArrayBuffer || ((t3) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t3) : t3.buffer instanceof ArrayBuffer)(t2)) || $s && t2 instanceof Blob || Fs && t2 instanceof File;
}
function Us(t2, e2) {
  if (!t2 || "object" != typeof t2) return false;
  if (Array.isArray(t2)) {
    for (let e3 = 0, i2 = t2.length; i2 > e3; e3++) if (Us(t2[e3])) return true;
    return false;
  }
  if (Ls(t2)) return true;
  if (t2.toJSON && "function" == typeof t2.toJSON && 1 === arguments.length) return Us(t2.toJSON(), true);
  for (const i2 in t2) if ({}.hasOwnProperty.call(t2, i2) && Us(t2[i2])) return true;
  return false;
}
function Vs(t2) {
  const e2 = [], i2 = t2;
  return i2.data = Bs(t2.data, e2), i2.attachments = e2.length, { packet: i2, buffers: e2 };
}
function Bs(t2, e2) {
  if (!t2) return t2;
  if (Ls(t2)) {
    const i2 = { Ki: true, num: e2.length };
    return e2.push(t2), i2;
  }
  if (Array.isArray(t2)) {
    const i2 = Array(t2.length);
    for (let s2 = 0; t2.length > s2; s2++) i2[s2] = Bs(t2[s2], e2);
    return i2;
  }
  if ("object" == typeof t2 && !(t2 instanceof Date)) {
    const i2 = {};
    for (const s2 in t2) ({}).hasOwnProperty.call(t2, s2) && (i2[s2] = Bs(t2[s2], e2));
    return i2;
  }
  return t2;
}
function qs(t2, e2) {
  return t2.data = zs(t2.data, e2), delete t2.attachments, t2;
}
function zs(t2, e2) {
  if (!t2) return t2;
  if (t2 && true === t2.Ki) {
    if ("number" == typeof t2.num && t2.num >= 0 && e2.length > t2.num) return e2[t2.num];
    throw Error("illegal attachments");
  }
  if (Array.isArray(t2)) for (let i2 = 0; t2.length > i2; i2++) t2[i2] = zs(t2[i2], e2);
  else if ("object" == typeof t2) for (const i2 in t2) ({}).hasOwnProperty.call(t2, i2) && (t2[i2] = zs(t2[i2], e2));
  return t2;
}
var Gs = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Ws;
var Hs;
(Hs = Ws || (Ws = {}))[Hs.CONNECT = 0] = "CONNECT", Hs[Hs.DISCONNECT = 1] = "DISCONNECT", Hs[Hs.EVENT = 2] = "EVENT", Hs[Hs.ACK = 3] = "ACK", Hs[Hs.CONNECT_ERROR = 4] = "CONNECT_ERROR", Hs[Hs.BINARY_EVENT = 5] = "BINARY_EVENT", Hs[Hs.BINARY_ACK = 6] = "BINARY_ACK";
var Js = class _Js extends ss {
  constructor(t2) {
    super(), this.reviver = t2;
  }
  add(t2) {
    let e2;
    if ("string" == typeof t2) {
      if (this.reconstructor) throw Error("got plaintext data when reconstructing a packet");
      e2 = this.decodeString(t2);
      const i2 = e2.type === Ws.BINARY_EVENT;
      i2 || e2.type === Ws.BINARY_ACK ? (e2.type = i2 ? Ws.EVENT : Ws.ACK, this.reconstructor = new Ks(e2), 0 === e2.attachments && super.emitReserved("decoded", e2)) : super.emitReserved("decoded", e2);
    } else {
      if (!Ls(t2) && !t2.base64) throw Error("Unknown type: " + t2);
      if (!this.reconstructor) throw Error("got binary data when not reconstructing a packet");
      e2 = this.reconstructor.takeBinaryData(t2), e2 && (this.reconstructor = null, super.emitReserved("decoded", e2));
    }
  }
  decodeString(t2) {
    let e2 = 0;
    const i2 = { type: +t2.charAt(0) };
    if (void 0 === Ws[i2.type]) throw Error("unknown packet type " + i2.type);
    if (i2.type === Ws.BINARY_EVENT || i2.type === Ws.BINARY_ACK) {
      const s3 = e2 + 1;
      for (; "-" !== t2.charAt(++e2) && e2 != t2.length; ) ;
      const r2 = t2.substring(s3, e2);
      if (r2 != +r2 || "-" !== t2.charAt(e2)) throw Error("Illegal attachments");
      i2.attachments = +r2;
    }
    if ("/" === t2.charAt(e2 + 1)) {
      const s3 = e2 + 1;
      for (; ++e2 && "," !== t2.charAt(e2) && e2 !== t2.length; ) ;
      i2.nsp = t2.substring(s3, e2);
    } else i2.nsp = "/";
    const s2 = t2.charAt(e2 + 1);
    if ("" !== s2 && +s2 == s2) {
      const s3 = e2 + 1;
      for (; ++e2; ) {
        const i3 = t2.charAt(e2);
        if (null == i3 || +i3 != i3) {
          --e2;
          break;
        }
        if (e2 === t2.length) break;
      }
      i2.id = +t2.substring(s3, e2 + 1);
    }
    if (t2.charAt(++e2)) {
      const s3 = this.tryParse(t2.substr(e2));
      if (!_Js.isPayloadValid(i2.type, s3)) throw Error("invalid payload");
      i2.data = s3;
    }
    return i2;
  }
  tryParse(t2) {
    try {
      return JSON.parse(t2, this.reviver);
    } catch (e2) {
      return false;
    }
  }
  static isPayloadValid(t2, e2) {
    switch (t2) {
      case Ws.CONNECT:
        return Ys(e2);
      case Ws.DISCONNECT:
        return void 0 === e2;
      case Ws.CONNECT_ERROR:
        return "string" == typeof e2 || Ys(e2);
      case Ws.EVENT:
      case Ws.BINARY_EVENT:
        return Array.isArray(e2) && ("number" == typeof e2[0] || "string" == typeof e2[0] && -1 === Gs.indexOf(e2[0]));
      case Ws.ACK:
      case Ws.BINARY_ACK:
        return Array.isArray(e2);
    }
  }
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
};
var Ks = class {
  constructor(t2) {
    this.packet = t2, this.buffers = [], this.reconPack = t2;
  }
  takeBinaryData(t2) {
    if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
      const t3 = qs(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t3;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
};
function Ys(t2) {
  return "[object Object]" === {}.toString.call(t2);
}
var Qs = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: Js, Encoder: class {
  constructor(t2) {
    this.replacer = t2;
  }
  encode(t2) {
    return t2.type !== Ws.EVENT && t2.type !== Ws.ACK || !Us(t2) ? [this.encodeAsString(t2)] : this.encodeAsBinary({ type: t2.type === Ws.EVENT ? Ws.BINARY_EVENT : Ws.BINARY_ACK, nsp: t2.nsp, data: t2.data, id: t2.id });
  }
  encodeAsString(t2) {
    let e2 = "" + t2.type;
    return t2.type !== Ws.BINARY_EVENT && t2.type !== Ws.BINARY_ACK || (e2 += t2.attachments + "-"), t2.nsp && "/" !== t2.nsp && (e2 += t2.nsp + ","), null != t2.id && (e2 += t2.id), null != t2.data && (e2 += JSON.stringify(t2.data, this.replacer)), e2;
  }
  encodeAsBinary(t2) {
    const e2 = Vs(t2), i2 = this.encodeAsString(e2.packet), s2 = e2.buffers;
    return s2.unshift(i2), s2;
  }
}, get PacketType() {
  return Ws;
} }, Symbol.toStringTag, { value: "Module" }));
function Xs(t2, e2, i2) {
  return t2.on(e2, i2), () => {
    t2.off(e2, i2);
  };
}
var Zs = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
var tr = class extends ss {
  constructor(t2, e2, i2) {
    super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this.Yi = [], this.Qi = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t2, this.nsp = e2, i2 && i2.auth && (this.auth = i2.auth), this.fi = Object.assign({}, i2), this.io.Xi && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t2 = this.io;
    this.subs = [Xs(t2, "open", this.onopen.bind(this)), Xs(t2, "packet", this.onpacket.bind(this)), Xs(t2, "error", this.onerror.bind(this)), Xs(t2, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected || (this.subEvents(), this.io.Zi || this.io.open(), "open" === this.io.ee && this.onopen()), this;
  }
  open() {
    return this.connect();
  }
  send(...t2) {
    return t2.unshift("message"), this.emit.apply(this, t2), this;
  }
  emit(t2, ...e2) {
    var i2, s2, r2;
    if (Zs.hasOwnProperty(t2)) throw Error('"' + t2 + '" is a reserved event name');
    if (e2.unshift(t2), this.fi.retries && !this.flags.fromQueue && !this.flags.volatile) return this.ts(e2), this;
    const o2 = { type: Ws.EVENT, data: e2, options: {} };
    if (o2.options.compress = false !== this.flags.compress, "function" == typeof e2[e2.length - 1]) {
      const t3 = this.ids++, i3 = e2.pop();
      this.es(t3, i3), o2.id = t3;
    }
    const n2 = null === (s2 = null === (i2 = this.io.engine) || void 0 === i2 ? void 0 : i2.transport) || void 0 === s2 ? void 0 : s2.writable, a2 = this.connected && !(null === (r2 = this.io.engine) || void 0 === r2 ? void 0 : r2.Gi());
    return this.flags.volatile && !n2 || (a2 ? (this.notifyOutgoingListeners(o2), this.packet(o2)) : this.sendBuffer.push(o2)), this.flags = {}, this;
  }
  es(t2, e2) {
    var i2;
    const s2 = null !== (i2 = this.flags.timeout) && void 0 !== i2 ? i2 : this.fi.ackTimeout;
    if (void 0 === s2) return void (this.acks[t2] = e2);
    const r2 = this.io.setTimeoutFn(() => {
      delete this.acks[t2];
      for (let e3 = 0; this.sendBuffer.length > e3; e3++) this.sendBuffer[e3].id === t2 && this.sendBuffer.splice(e3, 1);
      e2.call(this, Error("operation has timed out"));
    }, s2), o2 = (...t3) => {
      this.io.clearTimeoutFn(r2), e2.apply(this, t3);
    };
    o2.withError = true, this.acks[t2] = o2;
  }
  emitWithAck(t2, ...e2) {
    return new Promise((i2, s2) => {
      const r2 = (t3, e3) => t3 ? s2(t3) : i2(e3);
      r2.withError = true, e2.push(r2), this.emit(t2, ...e2);
    });
  }
  ts(t2) {
    let e2;
    "function" == typeof t2[t2.length - 1] && (e2 = t2.pop());
    const i2 = { id: this.Qi++, tryCount: 0, pending: false, args: t2, flags: Object.assign({ fromQueue: true }, this.flags) };
    t2.push((t3, ...s2) => (null !== t3 ? i2.tryCount > this.fi.retries && (this.Yi.shift(), e2 && e2(t3)) : (this.Yi.shift(), e2 && e2(null, ...s2)), i2.pending = false, this.ss())), this.Yi.push(i2), this.ss();
  }
  ss(t2 = false) {
    if (!this.connected || 0 === this.Yi.length) return;
    const e2 = this.Yi[0];
    e2.pending && !t2 || (e2.pending = true, e2.tryCount++, this.flags = e2.flags, this.emit.apply(this, e2.args));
  }
  packet(t2) {
    t2.nsp = this.nsp, this.io.rs(t2);
  }
  onopen() {
    "function" == typeof this.auth ? this.auth((t2) => {
      this.ns(t2);
    }) : this.ns(this.auth);
  }
  ns(t2) {
    this.packet({ type: Ws.CONNECT, data: this.cs ? Object.assign({ pid: this.cs, offset: this.hs }, t2) : t2 });
  }
  onerror(t2) {
    this.connected || this.emitReserved("connect_error", t2);
  }
  onclose(t2, e2) {
    this.connected = false, delete this.id, this.emitReserved("disconnect", t2, e2), this.ds();
  }
  ds() {
    Object.keys(this.acks).forEach((t2) => {
      if (!this.sendBuffer.some((e2) => e2.id + "" === t2)) {
        const e2 = this.acks[t2];
        delete this.acks[t2], e2.withError && e2.call(this, Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t2) {
    if (t2.nsp === this.nsp) switch (t2.type) {
      case Ws.CONNECT:
        t2.data && t2.data.sid ? this.onconnect(t2.data.sid, t2.data.pid) : this.emitReserved("connect_error", Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        break;
      case Ws.EVENT:
      case Ws.BINARY_EVENT:
        this.onevent(t2);
        break;
      case Ws.ACK:
      case Ws.BINARY_ACK:
        this.onack(t2);
        break;
      case Ws.DISCONNECT:
        this.ondisconnect();
        break;
      case Ws.CONNECT_ERROR:
        this.destroy();
        const e2 = Error(t2.data.message);
        e2.data = t2.data.data, this.emitReserved("connect_error", e2);
    }
  }
  onevent(t2) {
    const e2 = t2.data || [];
    null != t2.id && e2.push(this.ack(t2.id)), this.connected ? this.emitEvent(e2) : this.receiveBuffer.push(Object.freeze(e2));
  }
  emitEvent(t2) {
    if (this.ls && this.ls.length) {
      const e2 = this.ls.slice();
      for (const i2 of e2) i2.apply(this, t2);
    }
    super.emit.apply(this, t2), this.cs && t2.length && "string" == typeof t2[t2.length - 1] && (this.hs = t2[t2.length - 1]);
  }
  ack(t2) {
    const e2 = this;
    let i2 = false;
    return (...s2) => {
      i2 || (i2 = true, e2.packet({ type: Ws.ACK, id: t2, data: s2 }));
    };
  }
  onack(t2) {
    const e2 = this.acks[t2.id];
    "function" == typeof e2 && (delete this.acks[t2.id], e2.withError && t2.data.unshift(null), e2.apply(this, t2.data));
  }
  onconnect(t2, e2) {
    this.id = t2, this.recovered = e2 && this.cs === e2, this.cs = e2, this.connected = true, this.emitBuffered(), this.ss(true), this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t2) => this.emitEvent(t2)), this.receiveBuffer = [], this.sendBuffer.forEach((t2) => {
      this.notifyOutgoingListeners(t2), this.packet(t2);
    }), this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t2) => t2()), this.subs = void 0), this.io.us(this);
  }
  disconnect() {
    return this.connected && this.packet({ type: Ws.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  close() {
    return this.disconnect();
  }
  compress(t2) {
    return this.flags.compress = t2, this;
  }
  get volatile() {
    return this.flags.volatile = true, this;
  }
  timeout(t2) {
    return this.flags.timeout = t2, this;
  }
  onAny(t2) {
    return this.ls = this.ls || [], this.ls.push(t2), this;
  }
  prependAny(t2) {
    return this.ls = this.ls || [], this.ls.unshift(t2), this;
  }
  offAny(t2) {
    if (!this.ls) return this;
    if (t2) {
      const e2 = this.ls;
      for (let i2 = 0; e2.length > i2; i2++) if (t2 === e2[i2]) return e2.splice(i2, 1), this;
    } else this.ls = [];
    return this;
  }
  listenersAny() {
    return this.ls || [];
  }
  onAnyOutgoing(t2) {
    return this.ps = this.ps || [], this.ps.push(t2), this;
  }
  prependAnyOutgoing(t2) {
    return this.ps = this.ps || [], this.ps.unshift(t2), this;
  }
  offAnyOutgoing(t2) {
    if (!this.ps) return this;
    if (t2) {
      const e2 = this.ps;
      for (let i2 = 0; e2.length > i2; i2++) if (t2 === e2[i2]) return e2.splice(i2, 1), this;
    } else this.ps = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this.ps || [];
  }
  notifyOutgoingListeners(t2) {
    if (this.ps && this.ps.length) {
      const e2 = this.ps.slice();
      for (const i2 of e2) i2.apply(this, t2.data);
    }
  }
};
function er(t2) {
  this.ms = (t2 = t2 || {}).min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && 1 >= t2.jitter ? t2.jitter : 0, this.attempts = 0;
}
er.prototype.duration = function() {
  var t2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e2 = Math.random(), i2 = Math.floor(e2 * this.jitter * t2);
    t2 = 1 & Math.floor(10 * e2) ? t2 + i2 : t2 - i2;
  }
  return 0 | Math.min(t2, this.max);
}, er.prototype.reset = function() {
  this.attempts = 0;
}, er.prototype.setMin = function(t2) {
  this.ms = t2;
}, er.prototype.setMax = function(t2) {
  this.max = t2;
}, er.prototype.setJitter = function(t2) {
  this.jitter = t2;
};
var ir = class extends ss {
  constructor(t2, e2) {
    var i2;
    super(), this.nsps = {}, this.subs = [], t2 && "object" == typeof t2 && (e2 = t2, t2 = void 0), (e2 = e2 || {}).path = e2.path || "/socket.io", this.opts = e2, hs(this, e2), this.reconnection(false !== e2.reconnection), this.reconnectionAttempts(e2.reconnectionAttempts || Infinity), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (i2 = e2.randomizationFactor) && void 0 !== i2 ? i2 : 0.5), this.backoff = new er({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(e2.timeout ?? 2e4), this.ee = "closed", this.uri = t2;
    const s2 = e2.parser || Qs;
    this.encoder = new s2.Encoder(), this.decoder = new s2.Decoder(), this.Xi = false !== e2.autoConnect, this.Xi && this.open();
  }
  reconnection(t2) {
    return arguments.length ? (this.fs = !!t2, t2 || (this.skipReconnect = true), this) : this.fs;
  }
  reconnectionAttempts(t2) {
    return void 0 === t2 ? this.gs : (this.gs = t2, this);
  }
  reconnectionDelay(t2) {
    var e2;
    return void 0 === t2 ? this.ys : (this.ys = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMin(t2), this);
  }
  randomizationFactor(t2) {
    var e2;
    return void 0 === t2 ? this.vs : (this.vs = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setJitter(t2), this);
  }
  reconnectionDelayMax(t2) {
    var e2;
    return void 0 === t2 ? this.bs : (this.bs = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMax(t2), this);
  }
  timeout(t2) {
    return arguments.length ? (this.Es = t2, this) : this.Es;
  }
  maybeReconnectOnOpen() {
    !this.Zi && this.fs && 0 === this.backoff.attempts && this.reconnect();
  }
  open(t2) {
    if (~this.ee.indexOf("open")) return this;
    this.engine = new As(this.uri, this.opts);
    const e2 = this.engine, i2 = this;
    this.ee = "opening", this.skipReconnect = false;
    const s2 = Xs(e2, "open", () => {
      i2.onopen(), t2 && t2();
    }), r2 = (e3) => {
      this.cleanup(), this.ee = "closed", this.emitReserved("error", e3), t2 ? t2(e3) : this.maybeReconnectOnOpen();
    }, o2 = Xs(e2, "error", r2);
    if (false !== this.Es) {
      const t3 = this.setTimeoutFn(() => {
        s2(), r2(Error("timeout")), e2.close();
      }, this.Es);
      this.opts.autoUnref && t3.unref(), this.subs.push(() => {
        this.clearTimeoutFn(t3);
      });
    }
    return this.subs.push(s2), this.subs.push(o2), this;
  }
  connect(t2) {
    return this.open(t2);
  }
  onopen() {
    this.cleanup(), this.ee = "open", this.emitReserved("open");
    const t2 = this.engine;
    this.subs.push(Xs(t2, "ping", this.onping.bind(this)), Xs(t2, "data", this.ondata.bind(this)), Xs(t2, "error", this.onerror.bind(this)), Xs(t2, "close", this.onclose.bind(this)), Xs(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t2) {
    try {
      this.decoder.add(t2);
    } catch (e2) {
      this.onclose("parse error", e2);
    }
  }
  ondecoded(t2) {
    rs(() => {
      this.emitReserved("packet", t2);
    }, this.setTimeoutFn);
  }
  onerror(t2) {
    this.emitReserved("error", t2);
  }
  socket(t2, e2) {
    let i2 = this.nsps[t2];
    return i2 ? this.Xi && !i2.active && i2.connect() : (i2 = new tr(this, t2, e2), this.nsps[t2] = i2), i2;
  }
  us(t2) {
    const e2 = Object.keys(this.nsps);
    for (const i2 of e2) if (this.nsps[i2].active) return;
    this.Is();
  }
  rs(t2) {
    const e2 = this.encoder.encode(t2);
    for (let i2 = 0; e2.length > i2; i2++) this.engine.write(e2[i2], t2.options);
  }
  cleanup() {
    this.subs.forEach((t2) => t2()), this.subs.length = 0, this.decoder.destroy();
  }
  Is() {
    this.skipReconnect = true, this.Zi = false, this.onclose("forced close");
  }
  disconnect() {
    return this.Is();
  }
  onclose(t2, e2) {
    var i2;
    this.cleanup(), null === (i2 = this.engine) || void 0 === i2 || i2.close(), this.backoff.reset(), this.ee = "closed", this.emitReserved("close", t2, e2), this.fs && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this.Zi || this.skipReconnect) return this;
    const t2 = this;
    if (this.gs > this.backoff.attempts) {
      const e2 = this.backoff.duration();
      this.Zi = true;
      const i2 = this.setTimeoutFn(() => {
        t2.skipReconnect || (this.emitReserved("reconnect_attempt", t2.backoff.attempts), t2.skipReconnect || t2.open((e3) => {
          e3 ? (t2.Zi = false, t2.reconnect(), this.emitReserved("reconnect_error", e3)) : t2.onreconnect();
        }));
      }, e2);
      this.opts.autoUnref && i2.unref(), this.subs.push(() => {
        this.clearTimeoutFn(i2);
      });
    } else this.backoff.reset(), this.emitReserved("reconnect_failed"), this.Zi = false;
  }
  onreconnect() {
    const t2 = this.backoff.attempts;
    this.Zi = false, this.backoff.reset(), this.emitReserved("reconnect", t2);
  }
};
var sr = {};
function rr(t2, e2) {
  "object" == typeof t2 && (e2 = t2, t2 = void 0);
  const i2 = ((t3, e3 = "", i3) => {
    let s3 = t3;
    i3 = i3 || "undefined" != typeof location && location, null == t3 && (t3 = i3.protocol + "//" + i3.host), "string" == typeof t3 && ("/" === t3.charAt(0) && (t3 = "/" === t3.charAt(1) ? i3.protocol + t3 : i3.host + t3), /^(https?|wss?):\/\//.test(t3) || (t3 = void 0 !== i3 ? i3.protocol + "//" + t3 : "https://" + t3), s3 = Ps(t3)), s3.port || (/^(http|ws)$/.test(s3.protocol) ? s3.port = "80" : /^(http|ws)s$/.test(s3.protocol) && (s3.port = "443")), s3.path = s3.path || "/";
    const r3 = -1 !== s3.host.indexOf(":") ? "[" + s3.host + "]" : s3.host;
    return s3.id = s3.protocol + "://" + r3 + ":" + s3.port + e3, s3.href = s3.protocol + "://" + r3 + (i3 && i3.port === s3.port ? "" : ":" + s3.port), s3;
  })(t2, (e2 = e2 || {}).path || "/socket.io"), s2 = i2.source, r2 = i2.id;
  let o2;
  return e2.forceNew || e2["force new connection"] || false === e2.multiplex || sr[r2] && i2.path in sr[r2].nsps ? o2 = new ir(s2, e2) : (sr[r2] || (sr[r2] = new ir(s2, e2)), o2 = sr[r2]), i2.query && !e2.query && (e2.query = i2.queryKey), o2.socket(i2.path, e2);
}
Object.assign(rr, { Manager: ir, Socket: tr, io: rr, connect: rr });
var or = class extends EventTarget {
  constructor() {
    super(), this.socket = null, this.roomId = null, this.roomName = null, this.userId = null, this.token = null, this.roomToken = null, this.roomRegion = null, this.localAudioMutedByLocalUser = false, this.localOutputMutedByLocalUser = false, this.localVideoMutedByLocalUser = false, this.createRoom = this.createRoom.bind(this), this.joinRoom = this.joinRoom.bind(this), this.closeRoom = this.closeRoom.bind(this), this.getRtpCapabilities = this.getRtpCapabilities.bind(this), this.createTransport = this.createTransport.bind(this), this.connectTransport = this.connectTransport.bind(this), this.closeTransport = this.closeTransport.bind(this), this.produce = this.produce.bind(this), this.consume = this.consume.bind(this), this.getExistingProducers = this.getExistingProducers.bind(this), this.resumeConsumer = this.resumeConsumer.bind(this), this.muteLocalAudio = this.muteLocalAudio.bind(this), this.muteLocalVideo = this.muteLocalVideo.bind(this), this.muteLocalOutput = this.muteLocalOutput.bind(this), this.muteRemoteAudio = this.muteRemoteAudio.bind(this), this.muteRemoteVideo = this.muteRemoteVideo.bind(this), this.muteRemoteOutput = this.muteRemoteOutput.bind(this), this.updateIceParameters = this.updateIceParameters.bind(this), this.getLookupUrls = this.getLookupUrls.bind(this), this.refreshToken = this.refreshToken.bind(this), this.emitNewProducerEvent = this.emitNewProducerEvent.bind(this), this.emitUserDisconnectedEvent = this.emitUserDisconnectedEvent.bind(this), this.emitRoomClosedEvent = this.emitRoomClosedEvent.bind(this), this.emitMuteLocalAudioEvent = this.emitMuteLocalAudioEvent.bind(this), this.emitMuteLocalVideoEvent = this.emitMuteLocalVideoEvent.bind(this), this.emitMuteRemoteAudioEvent = this.emitMuteRemoteAudioEvent.bind(this), this.emitMuteRemoteVideoEvent = this.emitMuteRemoteVideoEvent.bind(this), this.emitMuteLocalOutputEvent = this.emitMuteLocalOutputEvent.bind(this), this.emitMuteRemoteOutputEvent = this.emitMuteRemoteOutputEvent.bind(this), this.emitMediaUpdateIceParametersEvent = this.emitMediaUpdateIceParametersEvent.bind(this), this.emitDataMessageEvent = this.emitDataMessageEvent.bind(this), this.emitRecordingStartedEvent = this.emitRecordingStartedEvent.bind(this), this.emitRecordingStoppedEvent = this.emitRecordingStoppedEvent.bind(this), this.emitUserJoinedRoomEvent = this.emitUserJoinedRoomEvent.bind(this), this.emitRecordingStateChangedEvent = this.emitRecordingStateChangedEvent.bind(this), this.emitReceiveChatMessageEvent = this.emitReceiveChatMessageEvent.bind(this), this.emitStreamingStartedEvent = this.emitStreamingStartedEvent.bind(this), this.emitStreamingStoppedEvent = this.emitStreamingStoppedEvent.bind(this), this.emitStreamingUserChangedEvent = this.emitStreamingUserChangedEvent.bind(this), this.emitAdmitToRoomEvent = this.emitAdmitToRoomEvent.bind(this), this.emitRejectToRoomEvent = this.emitRejectToRoomEvent.bind(this), this.emitTranscriptionReceivedEvent = this.emitTranscriptionReceivedEvent.bind(this), this.emitTranscriptionStartedEvent = this.emitTranscriptionStartedEvent.bind(this), this.emitTranscriptionStoppedEvent = this.emitTranscriptionStoppedEvent.bind(this), this.emitErrorEvent = this.emitErrorEvent.bind(this), this.handleUserConnectedEvent = this.handleUserConnectedEvent.bind(this);
  }
  getRegion() {
    return this.roomRegion || Ve.regions[0];
  }
  init(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2, externalUserId: i2, roomToken: s2, roomRegion: r2 }) {
      this.deviceInfo = yield (() => __async(this, null, function* () {
        const t3 = yield ii(), { browserName: e3, os: i3, deviceType: s3, deviceModel: r3, deviceVendor: o3 } = t3 || {};
        if (!e3 || !i3) return {};
        const n2 = e3.toLowerCase(), a2 = i3.toLowerCase();
        return Ne.debug("Browser:", n2, "OS:", a2, "Device Type:", s3, "Device Model:", r3, "Device Vendor:", o3), { browser: n2, operatingSystem: a2, deviceType: s3, deviceModel: r3, deviceVendor: o3 };
      }))();
      const o2 = new Je({ regions: Ve.regions });
      if (r2) this.roomRegion = o2.checkRoomRegion({ region: r2 });
      else {
        const t3 = yield o2.getBestRoomRegion();
        this.roomRegion = t3.region;
      }
      this.userId = e2, this.externalUserId = i2, this.roomToken = s2, this.token = yield ti({ roomRegion: this.roomRegion, userId: e2, roomToken: s2 });
      try {
        this.socket = yield this.Ts({ roomName: t2, token: this.token, externalUserId: i2 });
      } catch (mr) {
        throw console.error("Error connecting to signaling server:", mr), mr;
      }
      this.Rs();
    });
  }
  close() {
    return __async(this, null, function* () {
      this.Ss(), this.socket && this.socket.disconnect(), this.roomName = null, this.userId = null, this.token = null, this.roomToken = null, this.roomId = null;
    });
  }
  refreshToken() {
    return __async(this, null, function* () {
      if (!this.userId || !this.roomToken || !this.roomRegion) throw Error("Cannot refresh token: missing userId, roomToken, or roomRegion");
      try {
        return this.token = yield ti({ roomRegion: this.roomRegion, userId: this.userId, roomToken: this.roomToken }), this.token;
      } catch (mr) {
        throw console.error("Error refreshing token:", mr), mr;
      }
    });
  }
  Ts(_0) {
    return __async(this, arguments, function* ({ roomName: t2, token: e2, externalUserId: i2 }) {
      return new Promise((s2, r2) => {
        this.serverUrl = `https://${this.roomRegion}${Ve.serverRegionUrl}`, this.socket = rr(this.serverUrl, { query: { roomName: t2, token: e2, externalUserId: i2 }, transports: ["websocket"], secure: true, reconnection: false }), this.socket.on(Be.CONNECT, () => {
          s2(this.socket);
        }), this.socket.on(Be.CONNECT_ERROR, (t3) => {
          const e3 = t3.message || "" + t3;
          e3.includes("token") && (e3.includes("expired") || e3.includes("invalid") || e3.includes("unauthorized")) ? (console.error("Token expired or invalid:", e3), this.emitErrorEvent({ error: "Token expired or invalid", tokenExpired: true })) : this.emitErrorEvent({ error: e3 }), r2(t3);
        }), this.socket.on(Be.ERROR, (t3) => {
          const e3 = t3.message || "" + t3;
          console.log("error", e3), e3.includes("token") && (e3.includes("expired") || e3.includes("invalid") || e3.includes("unauthorized")) ? (console.error("Token expired or invalid:", e3), this.emitErrorEvent({ error: "Token expired or invalid", tokenExpired: true })) : this.emitErrorEvent({ error: e3 }), r2(t3);
        });
      });
    });
  }
  Rs() {
    this.socket.on(Be.MEDIA_NEW_PRODUCER, this.emitNewProducerEvent), this.socket.on(Be.USER_DISCONNECTED, this.emitUserDisconnectedEvent), this.socket.on(Be.ROOM_CLOSED, this.emitRoomClosedEvent), this.socket.on(Be.MUTE_AUDIO_STATE, this.emitMuteLocalAudioEvent), this.socket.on(Be.MUTE_VIDEO_STATE, this.emitMuteLocalVideoEvent), this.socket.on(Be.MUTE_REMOTE_AUDIO, this.emitMuteRemoteAudioEvent), this.socket.on(Be.MUTE_REMOTE_VIDEO, this.emitMuteRemoteVideoEvent), this.socket.on(Be.MUTE_OUTPUT_STATE, this.emitMuteLocalOutputEvent), this.socket.on(Be.MUTE_REMOTE_OUTPUT, this.emitMuteRemoteOutputEvent), this.socket.on(Be.MEDIA_UPDATE_ICE_PARAMETERS, this.emitMediaUpdateIceParametersEvent), this.socket.on(Be.DATA_MESSAGE, this.emitDataMessageEvent), this.socket.on(Be.RECORDING_STARTED, this.emitRecordingStartedEvent), this.socket.on(Be.RECORDING_STOPPED, this.emitRecordingStoppedEvent), this.socket.on(Be.RECORDING_STATE, this.emitRecordingStateChangedEvent), this.socket.on(Be.USER_JOINED_ROOM, this.emitUserJoinedRoomEvent), this.socket.on(Be.RECEIVE_CHAT_MESSAGE, this.emitReceiveChatMessageEvent), this.socket.on(Be.STREAMING_STARTED, this.emitStreamingStartedEvent), this.socket.on(Be.STREAMING_STOPPED, this.emitStreamingStoppedEvent), this.socket.on(Be.STREAMING_USER_CHANGED, this.emitStreamingUserChangedEvent), this.socket.on(Be.ADMIT_WAITING_ROOM, this.emitAdmitToRoomEvent), this.socket.on(Be.REJECT_WAITING_ROOM, this.emitRejectToRoomEvent), this.socket.on(Be.TRANSCRIPTION_RESULT, this.emitTranscriptionReceivedEvent), this.socket.on(Be.TRANSCRIPTION_STARTED, this.emitTranscriptionStartedEvent), this.socket.on(Be.TRANSCRIPTION_STOPPED, this.emitTranscriptionStoppedEvent), this.socket.on(Be.USER_CONNECTED, this.handleUserConnectedEvent);
  }
  Ss() {
    this.socket && (this.socket.off(Be.MEDIA_NEW_PRODUCER, this.emitNewProducerEvent), this.socket.off(Be.USER_DISCONNECTED, this.emitUserDisconnectedEvent), this.socket.off(Be.ROOM_CLOSED, this.emitRoomClosedEvent), this.socket.off(Be.MUTE_AUDIO_STATE, this.emitMuteLocalAudioEvent), this.socket.off(Be.MUTE_VIDEO_STATE, this.emitMuteLocalVideoEvent), this.socket.off(Be.MUTE_REMOTE_AUDIO, this.emitMuteRemoteAudioEvent), this.socket.off(Be.MUTE_REMOTE_VIDEO, this.emitMuteRemoteVideoEvent), this.socket.off(Be.MUTE_OUTPUT_STATE, this.emitMuteLocalOutputEvent), this.socket.off(Be.MUTE_REMOTE_OUTPUT, this.emitMuteRemoteOutputEvent), this.socket.off(Be.MEDIA_UPDATE_ICE_PARAMETERS, this.emitMediaUpdateIceParametersEvent), this.socket.off(Be.DATA_MESSAGE, this.emitDataMessageEvent), this.socket.off(Be.RECORDING_STARTED, this.emitRecordingStartedEvent), this.socket.off(Be.RECORDING_STOPPED, this.emitRecordingStoppedEvent), this.socket.off(Be.RECORDING_STATE, this.emitRecordingStateChangedEvent), this.socket.off(Be.USER_JOINED_ROOM, this.emitUserJoinedRoomEvent), this.socket.off(Be.RECEIVE_CHAT_MESSAGE, this.emitReceiveChatMessageEvent), this.socket.off(Be.STREAMING_STARTED, this.emitStreamingStartedEvent), this.socket.off(Be.STREAMING_STOPPED, this.emitStreamingStoppedEvent), this.socket.off(Be.STREAMING_USER_CHANGED, this.emitStreamingUserChangedEvent), this.socket.off(Be.ADMIT_WAITING_ROOM, this.emitAdmitToRoomEvent), this.socket.off(Be.REJECT_WAITING_ROOM, this.emitRejectToRoomEvent), this.socket.off(Be.TRANSCRIPTION_RESULT, this.emitTranscriptionReceivedEvent), this.socket.off(Be.TRANSCRIPTION_STARTED, this.emitTranscriptionStartedEvent), this.socket.off(Be.TRANSCRIPTION_STOPPED, this.emitTranscriptionStoppedEvent), this.socket.off(Be.USER_CONNECTED, this.handleUserConnectedEvent));
  }
  emitErrorEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.ERROR, { detail: t2 }));
  }
  emitTranscriptionStartedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.TRANSCRIPTION_STARTED, { detail: t2 }));
  }
  emitTranscriptionStoppedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.TRANSCRIPTION_STOPPED, { detail: t2 }));
  }
  handleUserConnectedEvent(t2) {
    console.log("user connected", t2);
  }
  emitRejectToRoomEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.REJECT_WAITING_ROOM, { detail: t2 }));
  }
  emitAdmitToRoomEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.ADMIT_WAITING_ROOM, { detail: t2 }));
  }
  emitStreamingUserChangedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.STREAMING_USER_CHANGED, { detail: t2 }));
  }
  emitStreamingStartedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.STREAMING_STARTED, { detail: t2 }));
  }
  emitStreamingStoppedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.STREAMING_STOPPED, { detail: t2 }));
  }
  emitReceiveChatMessageEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.RECEIVE_CHAT_MESSAGE, { detail: t2 }));
  }
  emitRecordingStateChangedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.RECORDING_STATE_CHANGED, { detail: t2 }));
  }
  emitUserJoinedRoomEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.USER_JOINED_ROOM, { detail: t2 }));
  }
  emitRecordingStartedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.RECORDING_STARTED, { detail: t2 }));
  }
  emitRecordingStoppedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.RECORDING_STOPPED, { detail: t2 }));
  }
  emitDataMessageEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.DATA_MESSAGE, { detail: t2 }));
  }
  emitNewProducerEvent(t2) {
    ri(t2.userId, this.userId) || this.dispatchEvent(new CustomEvent(Le.NEW_PRODUCER, { detail: t2 }));
  }
  emitUserDisconnectedEvent(t2) {
    ri(t2, this.userId) || this.dispatchEvent(new CustomEvent(Le.USER_DISCONNECTED, { detail: { userId: t2 } }));
  }
  emitRoomClosedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.ROOM_CLOSED, { detail: t2 }));
  }
  emitMuteLocalAudioEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) ? this.dispatchEvent(new CustomEvent(Le.AUDIO_MUTED, { detail: t2 })) : this.dispatchEvent(new CustomEvent(Le.REMOTE_AUDIO_MUTED, { detail: t2 }));
  }
  emitMuteLocalVideoEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) ? this.dispatchEvent(new CustomEvent(Le.VIDEO_MUTED, { detail: t2 })) : this.dispatchEvent(new CustomEvent(Le.REMOTE_VIDEO_MUTED, { detail: t2 }));
  }
  emitMuteRemoteAudioEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) && !this.localAudioMutedByLocalUser && this.dispatchEvent(new CustomEvent(Le.REMOTE_AUDIO_MUTED, { detail: t2 }));
  }
  emitMuteRemoteVideoEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) && !this.localVideoMutedByLocalUser && this.dispatchEvent(new CustomEvent(Le.REMOTE_VIDEO_MUTED, { detail: t2 }));
  }
  emitMuteLocalOutputEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) ? this.dispatchEvent(new CustomEvent(Le.OUTPUT_MUTED, { detail: t2 })) : this.dispatchEvent(new CustomEvent(Le.REMOTE_OUTPUT_MUTED, { detail: t2 }));
  }
  emitMuteRemoteOutputEvent(t2) {
    const { userId: e2 } = t2;
    ri(e2, this.userId) && !this.localOutputMutedByLocalUser && this.dispatchEvent(new CustomEvent(Le.REMOTE_OUTPUT_MUTED, { detail: t2 }));
  }
  emitMediaUpdateIceParametersEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.UPDATE_ICE_PARAMETERS, { detail: t2 }));
  }
  emitTranscriptionReceivedEvent(t2) {
    this.dispatchEvent(new CustomEvent(Le.TRANSCRIPTION_RECEIVED, { detail: t2 }));
  }
  getRtpCapabilities() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.MEDIA_GET_ROUTER_RTP_CAPABILITIES, { roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  createTransport({ device: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MEDIA_CREATE_TRANSPORT, { roomId: this.roomId, roomName: this.roomName, token: this.token, sctpCapabilities: t2.sctpCapabilities, externalUserId: this.externalUserId, device: this.deviceInfo }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  connectTransport({ transportId: t2, dtlsParameters: e2, waitingRoomToken: i2 }) {
    return new Promise((s2, r2) => {
      try {
        this.socket.emit(Be.MEDIA_CONNECT_TRANSPORT, { roomId: this.roomId, roomName: this.roomName, token: this.token, transportId: t2, dtlsParameters: e2, waitingRoomToken: i2 }, (t3, e3) => {
          t3 ? r2(t3) : s2(e3);
        });
      } catch (mr) {
        r2(mr);
      }
    });
  }
  createRoom({ roomName: t2, options: e2 }) {
    return new Promise((i2, s2) => {
      try {
        this.isOwner = false, this.socket.emit(Be.CREATE, { roomName: t2, token: this.token, inactivityTimeout: e2?.inactivityTimeout, timeoutOnEmptyRoomOnly: e2?.timeoutOnEmptyRoomOnly, requireWaitingRoom: e2?.requireWaitingRoom }, (e3, r2) => {
          e3 ? s2(e3) : (this.roomId = r2?.id, this.roomName = t2, this.isOwner = true, i2(r2));
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  createNoVideoRoom({ roomName: t2 }) {
    return this.isOwner = true, this.roomName = t2, { roomName: t2, isOwner: this.isOwner, roomRegion: this.roomRegion };
  }
  joinNoVideoRoom({ roomName: t2 }) {
    return this.isOwner = false, this.roomName = t2, { roomName: t2, isOwner: this.isOwner, roomRegion: this.roomRegion };
  }
  closeNoVideoRoom() {
    this.Ss(), this.socket.disconnect(), this.token = null, this.roomName = null, this.roomId = null;
  }
  joinRoom(t2) {
    return new Promise((e2, i2) => {
      try {
        this.isOwner = false, this.socket.emit(Be.JOIN, { roomName: t2, token: this.token }, (s2, r2) => {
          s2 ? i2(s2) : (this.roomId = r2?.id, this.roomName = t2, this.isOwner = false, e2(r2));
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  joinRoomWithToken({ roomName: t2, joinUserId: e2, joinToken: i2, password: s2 }) {
    return new Promise((r2, o2) => {
      try {
        this.isOwner = false, this.socket.emit(Be.JOIN_WITH_TOKEN, { joinUserId: e2, joinToken: i2, password: s2 }, (e3, i3) => {
          e3 ? o2(e3) : (this.roomId = i3?.id, this.roomName = t2, this.isOwner = false, r2(i3));
        });
      } catch (mr) {
        o2(mr);
      }
    });
  }
  signalConnected() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.ANNOUNCE_CONNECTED, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  getRoomStats() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.GET_ROOM_STATS, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  closeTransport({ transportId: t2, reconnect: e2 }) {
    return new Promise((i2, s2) => {
      try {
        this.socket.emit(Be.MEDIA_DISCONNECT_TRANSPORT, { transportId: t2, roomId: this.roomId, roomName: this.roomName, token: this.token, reconnect: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  closeRoom() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.CLOSE, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : (this.socket.disconnect(), this.token = null, this.roomName = null, this.roomId = null, t2(s2));
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  produce({ transportId: t2, kind: e2, rtpParameters: i2, appData: s2 }) {
    return new Promise((r2, o2) => {
      try {
        this.socket.emit(Be.MEDIA_PRODUCE, { roomId: this.roomId, roomName: this.roomName, token: this.token, transportId: t2, kind: e2, rtpParameters: i2, appData: s2 }, (t3, e3) => {
          t3 ? o2(t3) : r2(e3);
        });
      } catch (mr) {
        o2(mr);
      }
    });
  }
  consume({ transportId: t2, producerId: e2, rtpCapabilities: i2 }) {
    return new Promise((s2, r2) => {
      try {
        this.socket.emit(Be.MEDIA_CONSUME, { roomId: this.roomId, roomName: this.roomName, token: this.token, transportId: t2, producerId: e2, rtpCapabilities: i2 }, (t3, e3) => {
          t3 ? r2(t3) : s2(e3);
        });
      } catch (mr) {
        r2(mr);
      }
    });
  }
  getExistingProducers() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.MEDIA_EXISTING_PRODUCERS, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  resumeConsumer({ consumerId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MEDIA_UNPAUSE_CONSUMER, { roomId: this.roomId, roomName: this.roomName, token: this.token, consumerId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  muteLocalAudio({ muted: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MUTE_AUDIO_STATE, { roomName: this.roomName, token: this.token, muted: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  muteLocalVideo({ muted: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MUTE_VIDEO_STATE, { roomName: this.roomName, token: this.token, muted: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  muteLocalOutput({ muted: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MUTE_OUTPUT_STATE, { roomName: this.roomName, token: this.token, muted: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  muteRemoteAudio({ userId: t2, muted: e2 }) {
    return new Promise((i2, s2) => {
      try {
        this.socket.emit(Be.MUTE_REMOTE_AUDIO, { roomName: this.roomName, token: this.token, userId: t2, muted: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  muteRemoteVideo({ userId: t2, muted: e2 }) {
    return new Promise((i2, s2) => {
      try {
        this.socket.emit(Be.MUTE_REMOTE_VIDEO, { roomName: this.roomName, token: this.token, userId: t2, muted: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  muteRemoteOutput({ userId: t2, muted: e2 }) {
    return new Promise((i2, s2) => {
      try {
        this.socket.emit(Be.MUTE_REMOTE_OUTPUT, { roomName: this.roomName, token: this.token, userId: t2, muted: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  updateIceParameters({ transportId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.MEDIA_UPDATE_ICE_PARAMETERS, { roomName: this.roomName, token: this.token, transportId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  getLookupUrls() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.GET_LOOKUP_URLS, { token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  getAttendees() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.GET_ATTENDEES, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  sendDataMessage({ userId: t2, message: e2, preventReturn: i2 }) {
    return new Promise((s2, r2) => {
      try {
        this.socket.emit(Be.DATA_MESSAGE, { roomName: t2 ? null : this.roomName, token: this.token, userId: t2, message: e2, preventReturn: i2 }, (t3, e3) => {
          t3 ? r2(t3) : s2(e3);
        });
      } catch (mr) {
        r2(mr);
      }
    });
  }
  sendChatMessage({ message: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.SEND_CHAT_MESSAGE, { roomName: this.roomName, token: this.token, message: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  startRecording(t2) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.START_RECORDING, { roomId: this.roomId, roomName: this.roomName, token: this.token, transcribe: t2?.transcribe, useContext: t2?.useContext, postMeetingSummary: t2?.postMeetingSummary, legacy: t2?.legacy }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  stopRecording({ recordingId: t2, transcribingId: e2 }) {
    return new Promise((i2, s2) => {
      try {
        t2 && this.roomName && this.token || s2(Error("Invalid parameters")), this.socket.emit(Be.STOP_RECORDING, { roomId: this.roomId, roomName: this.roomName, token: this.token, recordingId: t2, transcribingId: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  startTranscribing() {
    return new Promise((t2, e2) => {
      try {
        this.socket.emit(Be.START_TRANSCRIBE_BOT, { roomId: this.roomId, roomName: this.roomName, token: this.token }, (i2, s2) => {
          i2 ? e2(i2) : t2(s2);
        });
      } catch (mr) {
        e2(mr);
      }
    });
  }
  stopTranscribing({ transcribingId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        t2 && this.roomName && this.token || i2(Error("Invalid parameters")), this.socket.emit(Be.STOP_TRANSCRIBE_BOT, { roomId: this.roomId, roomName: this.roomName, token: this.token, transcribingId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  startStreaming(t2) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.START_STREAMING, { roomId: this.roomId, roomName: this.roomName, token: this.token, create_mp4: t2?.create_mp4, mode: t2?.mode, rtmpUrl: t2?.rtmpUrl }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  stopStreaming({ streamingId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        t2 && this.roomName && this.token || i2(Error("Invalid parameters")), this.socket.emit(Be.STOP_STREAMING, { roomId: this.roomId, roomName: this.roomName, token: this.token, streamingId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  switchStreamingUser({ streamingId: t2, userToSwitchTo: e2 }) {
    return new Promise((i2, s2) => {
      try {
        t2 && e2 && this.roomName && this.token || s2(Error("Invalid parameters")), this.socket.emit(Be.SWITCH_STREAMING_USER, { roomName: this.roomName, token: this.token, streamingId: t2, userToSwitchTo: e2 }, (t3, e3) => {
          t3 ? s2(t3) : i2(e3);
        });
      } catch (mr) {
        s2(mr);
      }
    });
  }
  startComposition({ recordingId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        t2 && this.token && this.roomName || i2(Error("Invalid parameters")), this.socket.emit(Be.START_COMPOSITION, { roomId: this.roomId, roomName: this.roomName, token: this.token, recordingId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  startTranscription({ recordingId: t2 }) {
    return new Promise((e2, i2) => {
      try {
        t2 && this.token && this.roomName || i2(Error("Invalid parameters")), this.socket.emit(Be.START_TRANSCRIPTION, { roomId: this.roomId, roomName: this.roomName, token: this.token, recordingId: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  updateDeviceInfo({ constraints: t2 }) {
    return new Promise((e2, i2) => {
      try {
        if (!this.socket || !this.socket.connected) return console.warn("Socket not connected, skipping device info update"), void e2(null);
        this.socket.emit(Be.UPDATE_USERS_DEVICE_INFO, { token: this.token, deviceInfo: this.deviceInfo, constraints: t2 }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  admitWaitingRoomUser({ userToAdmit: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.ADMIT_WAITING_ROOM, { token: this.token, userToAdmit: t2, roomName: this.roomName }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  rejectWaitingRoomUser({ userToReject: t2 }) {
    return new Promise((e2, i2) => {
      try {
        this.socket.emit(Be.REJECT_WAITING_ROOM, { token: this.token, userToReject: t2, roomName: this.roomName }, (t3, s2) => {
          t3 ? i2(t3) : e2(s2);
        });
      } catch (mr) {
        i2(mr);
      }
    });
  }
  restartIce(_0) {
    return __async(this, arguments, function* ({ transport: t2 }) {
      const e2 = yield this.updateIceParameters({ transportId: t2.id });
      e2 && (yield t2.restartIce({ iceParameters: e2 }), console.log("ICE Restarted"));
    });
  }
};
var nr = class extends EventTarget {
  constructor({ roomToken: t2, options: e2 }) {
    if (super(), !t2) throw Error("roomToken is required");
    e2 && e2.enableBandwidthMonitoring && (this.bandwidthMonitor = new Fe()), this.roomToken = t2, this.device = new xe.Device(), this.deviceManager = new di({ debug: e2?.debug || false }), this.audioConfigManager = je, e2?.audioMode && this.audioConfigManager.setMode(e2.audioMode), this.signaling = null, this.sendTransportDetails = null, this.sendTransport = null, this.receiveTransport = null, this.receiveTransportDetails = null, this.eventQueue = [], this.isProcessingQueue = false, this.consumers = /* @__PURE__ */ new Map(), this.consumedProducers = /* @__PURE__ */ new Set(), this.ks = /* @__PURE__ */ new Map(), this.Cs = /* @__PURE__ */ new Set(), this.receiveTransportInitiallyConnected = false, this.localAudioConstraints = null, this.localAudioInputDeviceId = null, this.localVideoDeviceId = null, this.localVideoElementId = null, this.localAudioOutputDeviceId = null, this.audioProducer = null, this.videoProducer = null, this.audioMutedByRoomOwner = false, this.videoMutedByRoomOwner = false, this.outputMutedByRoomOwner = false, this.audioContext = null, this.audioInputMonitor = null, this.audioGainControl = null, this.audioInputSourceNode = null, this.feedbackDetector = null, this.inScreenShare = false, this.autoCompose = false, this.recordingId = null, this.streamingId = null, this.streamingType = null, this.isRoomOwner = false, this.isAudioOnlyMode = false, this.manager = new Ue(this), this.createRoom = si(this.createRoom.bind(this), 1e3), this.joinRoom = si(this.joinRoom.bind(this), 1e3), this.joinRoomWithToken = si(this.joinRoomWithToken.bind(this), 1e3), this.connectTransports = si(this.connectTransports.bind(this), 1e3), this._s = new ci({ roomToken: t2 }), this.Ps = this.Ps.bind(this), this.Ds = this.Ds.bind(this), this.xs = this.xs.bind(this), this.Os = this.Os.bind(this), this.closeConnection = this.closeConnection.bind(this), this.Ms = this.Ms.bind(this), this.As = this.As.bind(this), this.Ns = this.Ns.bind(this), this.$s = this.$s.bind(this), this.stopScreenShare = this.stopScreenShare.bind(this), this.Fs = null, this.Ls = false, this.screenShareTrack = null, this.Us(), this.Vs = false, this.Bs = null, this.qs = null, this.Bs = new Promise((t3) => {
      this.qs = t3;
    }), this.zs().then(() => {
      this.Vs = true, this.qs(this), this.dispatchEvent(new CustomEvent(Le.READY, { detail: { client: this } })), Ne.debug("Client ready after browser-specific initialization");
    });
  }
  ready() {
    return __async(this, null, function* () {
      return this.Vs ? this : this.Bs;
    });
  }
  get isReady() {
    return this.Vs;
  }
  zs() {
    return __async(this, null, function* () {
      const t2 = this.deviceManager.browserInfo, e2 = this.deviceManager.options;
      let i2 = 0;
      t2.isChrome || t2.isEdgeChromium || t2.isBrave ? (i2 = e2.chromeDelay || 100, t2.isIncognito ? i2 = e2.chromeIncognitoDelay || 200 : t2.isChromeMobile && (i2 = e2.chromeMobileDelay || 250), Ne.debug(`Applying Chrome/Chromium delay: ${i2}ms`, { isIncognito: t2.isIncognito, isChromeMobile: t2.isChromeMobile })) : t2.isSafari ? (i2 = e2.safariDelay || 200, t2.isIOS && (i2 = Math.round(1.5 * i2)), Ne.debug(`Applying Safari delay: ${i2}ms`, { isIOS: t2.isIOS })) : t2.isFirefox && (i2 = e2.firefoxDelay || 100, Ne.debug(`Applying Firefox delay: ${i2}ms`)), i2 > 0 && (yield new Promise((t3) => setTimeout(t3, i2)));
    });
  }
  Gs() {
    this.Ws && cancelAnimationFrame(this.Ws);
    let t2 = this.Hs(), e2 = null;
    const i2 = () => {
      if (!this.videoProducer) return void (this.Ws = null);
      const s2 = this.Hs();
      s2 !== t2 && (t2 = s2, Ne.debug("Orientation change detected via polling", { newOrientation: s2 ? "landscape" : "portrait" }), clearTimeout(e2), e2 = setTimeout(() => {
        this.videoProducer && this.localVideoElementId && this.Fs();
      }, 300)), this.Ws = requestAnimationFrame(i2);
    };
    this.Ws = requestAnimationFrame(i2), Ne.debug("Started orientation polling for iOS PWA");
  }
  Us() {
    if (!this.Js()) return;
    const t2 = () => __async(this, null, function* () {
      if (this.Ls) return void Ne.debug("Orientation change already in progress, ignoring duplicate event");
      if (!this.videoProducer || !this.localVideoElementId) return void Ne.debug("Orientation changed but no active video producer");
      const t3 = Date.now(), e3 = this.Hs();
      Ne.debug("iOS orientation changed, replacing video track", { isLandscape: e3, producerId: this.videoProducer?.id }), this.Ls = true;
      let i3 = null;
      try {
        const s3 = this.videoProducer?.track, r2 = s3?.id, o2 = { deviceId: this.localVideoDeviceId ? { ideal: this.localVideoDeviceId } : void 0 };
        e3 && (o2.width = { ideal: 1280, min: 640 }, o2.height = { ideal: 720, min: 480 }, o2.aspectRatio = { ideal: 16 / 9 }, Ne.debug("Applying landscape constraints for orientation change", o2)), yield Qe(300);
        const n2 = 1e4, a2 = this.ri({ video: o2, audio: false }), c2 = new Promise((t4, e4) => {
          setTimeout(() => e4(Error("Orientation change timeout after 10s")), n2);
        });
        i3 = yield Promise.race([a2, c2]);
        const h2 = i3.getVideoTracks()[0];
        if (!h2) throw Error("Failed to get new video track for orientation change");
        const d2 = h2.getSettings();
        Ne.debug("New video track acquired for orientation change", { trackId: h2.id, width: d2.width, height: d2.height, aspectRatio: d2.aspectRatio, isLandscape: e3 }), this.Ks(this.videoProducer, h2);
        const l2 = document.getElementById(this.localVideoElementId);
        l2 && (l2.srcObject = i3, this.Ys(l2, true));
        const u2 = Date.now() - t3;
        Ne.debug("Video track replaced after orientation change", { duration: u2 + "ms", producerId: this.videoProducer?.id, oldTrackId: r2, newTrackId: h2.id });
      } catch (s3) {
        if (Ne.error("Error replacing video track after orientation change:", s3), i3) try {
          i3.getTracks().forEach((t4) => {
            "ended" !== t4.readyState && (t4.stop(), Ne.debug("Stopped orphaned track from failed orientation change:", t4.id));
          });
        } catch (r2) {
          Ne.warn("Error stopping orphaned track:", r2);
        }
        this.dispatchEvent(new CustomEvent(Le.ERROR, { detail: { error: "Failed to update video after orientation change", originalError: s3 } }));
      } finally {
        this.Ls = false;
      }
    });
    if (this.Fs = t2, window.visualViewport) try {
      let e3, i3 = this.Hs();
      const s3 = () => {
        clearTimeout(e3), e3 = setTimeout(() => {
          const e4 = this.Hs();
          e4 !== i3 && (i3 = e4, t2());
        }, 300);
      };
      return window.visualViewport.addEventListener("resize", s3), this.Qs = s3, this.Gs(), void Ne.debug("iOS orientation handler installed using visualViewport events + polling (hybrid approach)");
    } catch (r2) {
      Ne.warn("visualViewport orientation detection failed:", r2);
    }
    if (window.matchMedia) try {
      const e3 = window.matchMedia("(orientation: portrait)"), i3 = window.matchMedia("(orientation: landscape)");
      if (e3 && void 0 !== e3.matches) {
        const s3 = e3.addListener || e3.addEventListener;
        if (s3) return s3.call(e3, t2), s3.call(i3, t2), this.Xs = e3, this.Zs = i3, void Ne.debug("iOS orientation handler installed using matchMedia (PWA compatible)");
      }
    } catch (r2) {
      Ne.warn("matchMedia orientation detection failed:", r2);
    }
    if (window.screen?.orientation) try {
      return window.screen.orientation.addEventListener("change", t2), this.tr = true, void Ne.debug("iOS orientation handler installed using screen.orientation API (browser mode)");
    } catch (r2) {
      Ne.warn("screen.orientation detection failed:", r2);
    }
    let e2, i2 = this.Hs();
    const s2 = () => {
      clearTimeout(e2), e2 = setTimeout(() => {
        const e3 = this.Hs();
        e3 !== i2 && (i2 = e3, t2());
      }, 200);
    };
    window.addEventListener("resize", s2), this.er = s2, Ne.debug("iOS orientation handler installed using resize event (fallback mode)");
  }
  isConnected() {
    return this.sendTransport && "connected" === this.sendTransport.connectionState;
  }
  ir() {
    return this.signaling && this.signaling.room;
  }
  sr() {
    const t2 = this.sendTransport?.id || this.receiveTransport?.id || "unknown";
    this.Cs.has(t2) ? Ne.debug("Events already forwarded for transport, skipping duplicate:", t2) : (this.Cs.add(t2), [Le.USER_JOINED_ROOM, Le.ROOM_CLOSED, Le.USER_DISCONNECTED, Le.AUDIO_MUTED, Le.VIDEO_MUTED, Le.REMOTE_AUDIO_MUTED, Le.REMOTE_VIDEO_MUTED, Le.OUTPUT_MUTED, Le.REMOTE_OUTPUT_MUTED, Le.DATA_MESSAGE, Le.RECORDING_STARTED, Le.RECORDING_STOPPED, Le.RECORDING_STATE_CHANGED, Le.RECEIVE_CHAT_MESSAGE, Le.STREAMING_STARTED, Le.STREAMING_STOPPED, Le.STREAMING_USER_CHANGED, Le.ADMIT_WAITING_ROOM, Le.REJECT_WAITING_ROOM, Le.TRANSCRIPTION_RECEIVED, Le.TRANSCRIPTION_STARTED, Le.TRANSCRIPTION_STOPPED, Le.ERROR].forEach((t3) => {
      this.signaling.addEventListener(t3, this.Os);
    }));
  }
  forwardEvent(t2) {
    this.Os(t2);
  }
  Os(t2) {
    const e2 = new CustomEvent(t2.type, { detail: t2.detail });
    this.dispatchEvent(e2);
  }
  rr() {
    [Le.USER_JOINED_ROOM, Le.ROOM_CLOSED, Le.USER_DISCONNECTED, Le.AUDIO_MUTED, Le.VIDEO_MUTED, Le.REMOTE_AUDIO_MUTED, Le.REMOTE_VIDEO_MUTED, Le.OUTPUT_MUTED, Le.REMOTE_OUTPUT_MUTED, Le.DATA_MESSAGE, Le.RECORDING_STARTED, Le.RECORDING_STOPPED, Le.RECORDING_STATE_CHANGED, Le.RECEIVE_CHAT_MESSAGE, Le.STREAMING_STARTED, Le.STREAMING_STOPPED, Le.STREAMING_USER_CHANGED, Le.ADMIT_WAITING_ROOM, Le.REJECT_WAITING_ROOM, Le.TRANSCRIPTION_RECEIVED, Le.TRANSCRIPTION_STARTED, Le.TRANSCRIPTION_STOPPED, Le.ERROR].forEach((t2) => {
      this.signaling?.removeEventListener(t2, this.Os);
    }), this.Cs.clear();
  }
  checkVideoDevice() {
    return this.device.canProduce("video");
  }
  checkAudioDevice() {
    return this.device.canProduce("audio");
  }
  isLocalUserRoomOwner() {
    if (!this.signaling) throw Error("Must create room before checking room owner");
    return this.isRoomOwner;
  }
  getRecordingId() {
    return this.recordingId;
  }
  getStreamingId() {
    return this.streamingId;
  }
  getTranscribingId() {
    return this.transcribingId;
  }
  getLocalAudioConstraints() {
    return this.localAudioConstraints;
  }
  setAudioMode(t2) {
    this.audioConfigManager.setMode(t2), Ne.debug("Audio mode set to: " + t2);
  }
  setCustomAudioConfig(t2) {
    this.audioConfigManager.setCustomConfig(t2), Ne.debug("Custom audio configuration set", t2);
  }
  getAudioMode() {
    return this.audioConfigManager.mode;
  }
  getAudioValidation() {
    const t2 = document.getElementById(this.localVideoElementId);
    return t2 && t2.srcObject ? this.nr(t2.srcObject, this.localAudioConstraints) : null;
  }
  getLocalAudioInputDeviceId() {
    return this.localAudioInputDeviceId;
  }
  getLocalVideoDeviceId() {
    return this.localVideoDeviceId;
  }
  getAudioOutputDeviceId() {
    return this.localAudioOutputDeviceId;
  }
  listVideoDevices() {
    return __async(this, null, function* () {
      return yield this.deviceManager.listVideoDevices();
    });
  }
  listAudioInputDevices() {
    return __async(this, null, function* () {
      return yield this.deviceManager.listAudioInputDevices();
    });
  }
  listAudioOutputDevices() {
    return __async(this, null, function* () {
      return yield this.deviceManager.listAudioOutputDevices();
    });
  }
  setAudioOutputDevice(_0) {
    return __async(this, arguments, function* ({ audioOutputDeviceId: t2 }) {
      if (!t2) throw Error("audioOutputDeviceId is required");
      const e2 = this.localAudioOutputDeviceId;
      if (this.localAudioOutputDeviceId = t2, "function" != typeof document.createElement("audio").setSinkId) return Ne.warn("setSinkId is not supported by this browser - audio output device selection not available"), { success: false, updatedElements: 0, errors: ["setSinkId not supported"] };
      const i2 = document.querySelectorAll('[id^="remote-video-"]'), s2 = { success: true, updatedElements: 0, errors: [] };
      if (i2 && i2.length > 0) for (const r2 of i2) try {
        yield r2.setSinkId(t2), s2.updatedElements++, Ne.debug("Applied audio output device to element: " + r2.id);
      } catch (mr) {
        s2.errors.push({ elementId: r2.id, error: mr.message }), Ne.warn(`Failed to set audio output device on ${r2.id}: ${mr.message}`);
      }
      return s2.errors.length > 0 && (s2.success = false), Ne.debug(`Audio output device set to: ${t2}, updated ${s2.updatedElements} elements`), e2 !== t2 && this.dispatchEvent(new CustomEvent(Le.AUDIO_OUTPUT_DEVICE_CHANGED, { detail: { previousDeviceId: e2, newDeviceId: t2, updatedElements: s2.updatedElements } })), s2;
    });
  }
  applyAudioOutputToElement(t2) {
    return __async(this, null, function* () {
      if (!t2) return Ne.warn("applyAudioOutputToElement: No element provided"), false;
      if (!this.localAudioOutputDeviceId) return Ne.debug("applyAudioOutputToElement: No audio output device configured, using system default"), true;
      if ("function" != typeof t2.setSinkId) return Ne.warn("applyAudioOutputToElement: setSinkId not supported by this browser"), false;
      try {
        return yield t2.setSinkId(this.localAudioOutputDeviceId), Ne.debug(`Applied audio output device ${this.localAudioOutputDeviceId} to element`), true;
      } catch (mr) {
        return Ne.warn("Failed to apply audio output device to element: " + mr.message), false;
      }
    });
  }
  isAudioOutputSelectionSupported() {
    return "function" == typeof document.createElement("audio").setSinkId;
  }
  setLocalVideoDevice(_0) {
    return __async(this, arguments, function* ({ videoDeviceId: t2, force: e2 }) {
      if (!t2) throw Error("videoDeviceId is required");
      if (this.localVideoDeviceId !== t2 || this.inScreenShare || e2) {
        if (this.sendTransport) {
          const e3 = this.localAudioConstraints || this.audioConfigManager.getAudioConstraints(), i2 = { audio: __spreadValues({ deviceId: this.localAudioInputDeviceId ? { ideal: this.localAudioInputDeviceId } : void 0 }, e3), video: { deviceId: { ideal: t2 } } };
          let s2, r2 = 0;
          const o2 = 2;
          for (; o2 > r2; ) try {
            s2 = yield this.ri(i2);
            break;
          } catch (mr) {
            if (r2++, Ne.warn(`Failed to get video stream (attempt ${r2}/${o2}):`, mr.message), ("NotReadableError" === mr.name || mr.message.includes("busy") || mr.message.includes("in use")) && o2 > r2) {
              Ne.debug("Device may be busy, waiting before retry..."), yield Qe(500);
              continue;
            }
            throw Ne.error("Failed to get media stream for video device:", t2, mr), Error("Failed to access video device: " + mr.message);
          }
          if (!this.sendTransport) throw Ne.warn("Connection closed during video device switch, cleaning up stream"), this.ar(s2), Error("Connection closed during device switch");
          Ne.debug("Video device setting", i2);
          const n2 = document.getElementById(this.localVideoElementId);
          if (!n2) throw this.ar(s2), Error("Video element not found");
          const a2 = n2.srcObject;
          a2 && this.ar(a2), yield Qe(100), n2.srcObject = s2, this.Ys(n2, true);
          let c2 = null;
          this.audioInputMonitor && (this.options.enableAudioGainControl && (c2 = this.cr({ stream: s2 })), this.hr({ stream: s2 }), this.dr({ stream: s2 }));
          for (const t3 of s2.getTracks()) "video" === t3.kind && this.videoProducer && this.Ks(this.videoProducer, t3), "audio" === t3.kind && (c2 || (c2 = t3), this.audioMerger && (c2 = this.audioMerger.getTrackForProducer({ audioGainControl: this.audioGainControl })), this.audioProducer && this.Ks(this.audioProducer, c2));
        }
        this.localVideoDeviceId = t2, Ne.debug("Video device set to :", t2);
      }
    });
  }
  setLocalAudioInputDevice(_0) {
    return __async(this, arguments, function* ({ audioInputDeviceId: t2, constraints: e2, force: i2 }) {
      if (!t2) throw Error("audioInputDeviceId is required");
      const s2 = this.audioConfigManager.getAudioConstraints(e2), r2 = this.audioConfigManager.validateConstraints(s2), o2 = JSON.stringify(this.localAudioConstraints || {}), n2 = JSON.stringify(r2);
      if (this.localAudioInputDeviceId !== t2 || o2 !== n2 || i2) {
        let e3 = null;
        if (this.sendTransport) {
          const i4 = { audio: __spreadValues({ deviceId: { ideal: t2 } }, r2), video: !this.isAudioOnlyMode && { deviceId: this.localVideoDeviceId ? { ideal: this.localVideoDeviceId } : void 0 } };
          let s3 = 0;
          const o3 = 2;
          for (; o3 > s3; ) try {
            e3 = yield this.ri(i4);
            break;
          } catch (mr) {
            if (s3++, Ne.warn(`Failed to get audio stream (attempt ${s3}/${o3}):`, mr.message), ("NotReadableError" === mr.name || mr.message.includes("busy") || mr.message.includes("in use")) && o3 > s3) {
              Ne.debug("Audio device may be busy, waiting before retry..."), yield Qe(500);
              continue;
            }
            throw Ne.error("Failed to get media stream for audio device:", t2, mr), Error("Failed to access audio device: " + mr.message);
          }
          if (!this.sendTransport) throw Ne.warn("Connection closed during audio device switch, cleaning up stream"), this.ar(e3), Error("Connection closed during device switch");
          if (Ne.debug("Audio device setting", i4), this.isAudioOnlyMode) this.lr && this.ar(this.lr), yield Qe(150), this.lr = e3;
          else {
            const t3 = document.getElementById(this.localVideoElementId);
            if (!t3) throw this.ar(e3), Error("Video element not found");
            const i5 = t3.srcObject;
            i5 && this.ar(i5), yield Qe(150), t3.srcObject = e3, this.Ys(t3, true);
          }
          let n3 = null;
          this.audioInputMonitor && (this.options.enableAudioGainControl && (n3 = this.cr({ stream: e3 })), this.hr({ stream: e3 }), this.dr({ stream: e3 }));
          for (const t3 of e3.getTracks()) {
            if ("audio" === t3.kind) {
              if (n3 || (n3 = t3), this.audioMerger) {
                try {
                  this.audioMerger.dispose();
                } catch (mr) {
                  Ne.warn("Error disposing audio merger:", mr);
                }
                this.audioMerger = null, yield Qe(50), this.audioMerger = new Me({ audioContext: this.audioContext }), this.audioMerger.initializeWithVideoStream(e3), n3 = this.audioMerger.getTrackForProducer({ audioGainControl: this.audioGainControl });
              }
              this.audioProducer && this.Ks(this.audioProducer, n3);
            }
            "video" === t3.kind && this.videoProducer && this.Ks(this.videoProducer, t3);
          }
        }
        this.signaling && (yield this.signaling.updateDeviceInfo({ constraints: r2 }));
        let i3 = null;
        e3 && (i3 = this.nr(e3, r2)), this.localAudioInputDeviceId = t2, this.localAudioConstraints = r2, i3 && (i3.isValid ? i3.issues.length > 0 && this.dispatchEvent(new CustomEvent(Le.AUDIO_VALIDATION_WARNING, { detail: { deviceId: t2, issues: i3.issues, recommendations: i3.recommendations, settings: i3.settings } })) : this.dispatchEvent(new CustomEvent(Le.AUDIO_VALIDATION_FAILED, { detail: { deviceId: t2, issues: i3.issues, recommendations: i3.recommendations, settings: i3.settings } }))), Ne.debug("Audio device set to :", t2, { constraints: r2, actualSettings: i3?.settings, issues: i3?.issues?.length || 0 });
      }
    });
  }
  createJoinToken(_0) {
    return __async(this, arguments, function* ({ userId: t2, roomName: e2, joinUserId: i2, password: s2, expiresIn: r2, type: o2 }) {
      return yield ((_02) => __async(null, [_02], function* ({ roomRegion: t3, userId: e3, roomName: i3, joinUserId: s3, roomToken: r3, password: o3, expiresIn: n2, type: a2 }) {
        if (!(e3 && i3 && a2 && r3)) throw Error("userId, roomName,  type, roomToken are required");
        try {
          const c2 = `https://${t3}${Ve.serverRegionUrl}/join-token`, h2 = yield fetch(c2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: e3, roomName: i3, joinUserId: s3, roomToken: r3, password: o3, expiresIn: n2, type: a2 }) });
          if (!h2.ok) {
            const t4 = yield h2.json();
            throw Error("Error " + t4.error);
          }
          return yield h2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: yield Je.getBestRoomRegion(), userId: t2, roomName: e2, joinUserId: i2, roomToken: this.roomToken, password: s2, expiresIn: r2, type: o2 });
    });
  }
  createRoom(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2, externalUserId: i2, options: s2 }) {
      let r2;
      try {
        r2 = yield this.ur({ roomName: Ke(t2), userId: Ye(e2), externalUserId: i2, create: "create", options: s2 });
      } catch (mr) {
        throw this.closeConnection(), Ne.error("Error creating room:", mr), mr;
      }
      return r2;
    });
  }
  createNoVideoRoom(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2 }) {
      let i2;
      try {
        i2 = yield this.ur({ roomName: Ke(t2), userId: Ye(e2), create: "create-novideo" });
      } catch (mr) {
        throw this.closeNoVideoRoom(), Ne.error("Error creating room:", mr), mr;
      }
      return i2;
    });
  }
  joinNoVideoRoom(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2 }) {
      let i2;
      try {
        i2 = yield this.ur({ roomName: Ke(t2), userId: Ye(e2), create: "join-novideo" });
      } catch (mr) {
        throw this.closeNoVideoRoom(), Ne.error("Error creating room:", mr), mr;
      }
      return i2;
    });
  }
  closeNoVideoRoom() {
    return __async(this, null, function* () {
      this.signaling && (this.signaling.closeNoVideoRoom(), this.signaling = null), this.device = new xe.Device(), this.capabilities = null;
    });
  }
  joinRoom(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2, externalUserId: i2 }) {
      let s2;
      try {
        s2 = yield this.ur({ roomName: Ke(t2), userId: Ye(e2), externalUserId: i2, create: "join" });
      } catch (mr) {
        if ("redirect" === mr.type) {
          this.closeConnection(), yield Qe(250), console.log("Redirecting to region", mr.region);
          try {
            s2 = yield this.ur({ roomName: Ke(t2), userId: Ye(e2), externalUserId: i2, create: "join", roomRegion: mr.region });
          } catch (r2) {
            throw this.closeConnection(), Ne.error("Error creating room:", r2), r2;
          }
          return s2;
        }
        throw this.closeConnection(), Ne.error("Error creating room:", mr), mr;
      }
      return s2;
    });
  }
  joinRoomWithToken(_0) {
    return __async(this, arguments, function* ({ joinToken: t2, password: e2, userId: i2, roomRegion: s2 }) {
      const r2 = yield ei({ roomRegion: s2, joinToken: t2, joinUserId: i2, roomToken: this.roomToken, password: e2 });
      if (!r2?.roomName) throw Error("Room not found when decoding token");
      let o2;
      try {
        o2 = yield this.ur({ roomName: Ke(r2.roomName), userId: Ye(i2), create: "token", joinToken: t2, password: e2, roomRegion: s2 });
      } catch (mr) {
        if ("redirect" === mr.type) {
          this.closeConnection(), yield Qe(250), console.log("Redirecting to region", mr.region);
          try {
            o2 = yield this.ur({ roomName: Ke(r2.roomName), userId: Ye(i2), create: "token", joinToken: t2, password: e2, roomRegion: mr.region });
          } catch (n2) {
            throw this.closeConnection(), Ne.error("Error creating room after redirect:", n2), n2;
          }
          return o2;
        }
        throw this.closeConnection(), Ne.error("Error creating room:", mr), mr;
      }
      return o2;
    });
  }
  getRoomNameFromToken(_0) {
    return __async(this, arguments, function* ({ joinToken: t2, password: e2, userId: i2, roomRegion: s2 }) {
      const r2 = yield ei({ roomRegion: s2, joinToken: t2, joinUserId: i2, roomToken: this.roomToken, password: e2 });
      if (!r2?.roomName) throw Error("Room not found when decoding token");
      return r2.roomName = Ke(r2.roomName), r2;
    });
  }
  joinRoomWithTokenAndWait({ joinToken: t2, password: e2, userId: i2, roomRegion: s2, timeout: r2 = 3e5, pollingInterval: o2 = 3e3 }) {
    const n2 = new AbortController();
    return { abortController: n2, promise: this.pr({ joinToken: t2, password: e2, userId: i2, roomRegion: s2, timeout: r2, pollingInterval: o2, signal: n2.signal }) };
  }
  pr(_0) {
    return __async(this, arguments, function* ({ joinToken: t2, password: e2, userId: i2, roomRegion: s2, timeout: r2, pollingInterval: o2, signal: n2 }) {
      const a2 = Date.now(), c2 = yield ei({ roomRegion: s2, joinToken: t2, joinUserId: i2, roomToken: this.roomToken, password: e2 });
      if (!c2?.roomName) throw Error("Room not found when decoding token");
      const h2 = Ke(c2.roomName), d2 = Ye(i2);
      if (c2.active) {
        console.log("Room is already active, joining immediately");
        try {
          return yield this.ur({ roomName: h2, userId: d2, create: "token", joinToken: t2, password: e2, roomRegion: s2 });
        } catch (mr) {
          if ("redirect" === mr.type) {
            this.closeConnection(), yield Qe(250), console.log("Redirecting to region", mr.region);
            try {
              return yield this.ur({ roomName: h2, userId: d2, create: "token", joinToken: t2, password: e2, roomRegion: mr.region });
            } catch (l2) {
              throw this.closeConnection(), Ne.error("Error creating room after redirect:", l2), l2;
            }
          }
          throw this.closeConnection(), Ne.error("Error creating room:", mr), mr;
        }
      }
      for (console.log(`Room "${h2}" not active, waiting for host (timeout: ${r2}ms)`), this.dispatchEvent(new CustomEvent(Le.WAIT_FOR_HOST_STARTED, { detail: { roomName: h2, timeout: r2, pollingInterval: o2 } })); Date.now() - a2 < r2; ) {
        if (n2.aborted) throw Ne.debug("Wait for host cancelled by user"), this.dispatchEvent(new CustomEvent(Le.WAIT_FOR_HOST_CANCELLED, { detail: { roomName: h2, elapsedTime: Date.now() - a2 } })), new DOMException("Wait for host cancelled by user", "AbortError");
        try {
          yield oi(o2, n2);
        } catch (mr) {
          throw "AbortError" === mr.name && (Ne.debug("Wait for host cancelled by user"), this.dispatchEvent(new CustomEvent(Le.WAIT_FOR_HOST_CANCELLED, { detail: { roomName: h2, elapsedTime: Date.now() - a2 } }))), mr;
        }
        try {
          const r3 = yield ei({ roomRegion: s2, joinToken: t2, joinUserId: i2, roomToken: this.roomToken, password: e2 });
          if (r3?.active) {
            console.log(`Room "${h2}" is now active, joining...`), this.dispatchEvent(new CustomEvent(Le.WAIT_FOR_HOST_ROOM_READY, { detail: { roomName: h2, elapsedTime: Date.now() - a2 } }));
            try {
              return yield this.ur({ roomName: h2, userId: d2, create: "token", joinToken: t2, password: e2, roomRegion: s2 });
            } catch (mr) {
              if ("redirect" === mr.type) {
                this.closeConnection(), yield Qe(250), console.log("Redirecting to region", mr.region);
                try {
                  return yield this.ur({ roomName: h2, userId: d2, create: "token", joinToken: t2, password: e2, roomRegion: mr.region });
                } catch (l2) {
                  throw this.closeConnection(), Ne.error("Error creating room after redirect:", l2), l2;
                }
              }
              throw this.closeConnection(), Ne.error("Error creating room:", mr), mr;
            }
          }
          console.log(`Room "${h2}" still not active, continuing to wait...`);
        } catch (mr) {
          Ne.warn("Error checking room status:", mr.message);
        }
      }
      throw Ne.debug(`Timeout waiting for host after ${r2}ms`), this.dispatchEvent(new CustomEvent(Le.WAIT_FOR_HOST_TIMEOUT, { detail: { roomName: h2, timeout: r2, elapsedTime: Date.now() - a2 } })), Error(`Timeout waiting for host to start the meeting after ${r2}ms`);
    });
  }
  ur(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2, externalUserId: i2, create: s2, joinToken: r2, password: o2, roomRegion: n2, options: a2 }) {
      this.signaling = new or(), i2 || (i2 = `${e2}_${t2}`);
      try {
        yield this.signaling.init({ roomName: t2, userId: e2, externalUserId: i2, roomToken: this.roomToken, roomRegion: n2 });
      } catch (mr) {
        throw console.error("Error initializing signaling:", mr), mr;
      }
      let c2;
      return this.sr(), this.signaling.addEventListener(Le.NEW_PRODUCER, this.Ps), this.signaling.addEventListener(Le.ROOM_CLOSED, this.closeConnection), this.signaling.addEventListener(Le.REMOTE_AUDIO_MUTED, this.Ms), this.signaling.addEventListener(Le.REMOTE_VIDEO_MUTED, this.As), this.signaling.addEventListener(Le.REMOTE_OUTPUT_MUTED, this.Ns), this.signaling.addEventListener(Le.UPDATE_ICE_PARAMETERS, this.$s), yield Qe(1e3), "create" === s2 ? (c2 = yield this.signaling.createRoom({ roomName: t2, options: a2 }), this.isRoomOwner = true) : "create-novideo" === s2 ? (c2 = this.signaling.createNoVideoRoom({ roomName: t2 }), this.isRoomOwner = true) : "join-novideo" === s2 ? (c2 = this.signaling.joinNoVideoRoom({ roomName: t2 }), this.isRoomOwner = false) : "join" === s2 ? (c2 = yield this.signaling.joinRoom(t2), this.isRoomOwner = false) : "token" === s2 && (c2 = yield this.signaling.joinRoomWithToken({ roomName: t2, joinUserId: e2, joinToken: r2, password: o2 }), this.isRoomOwner = false), "create-novideo" !== s2 && "join-novideo" !== s2 && (this.capabilities = yield this.signaling.getRtpCapabilities(), this.capabilities = yield ((_02) => __async(this, [_02], function* ({ rtpCapabilities: t3 }) {
        const e3 = yield ii(), { browserName: i3, os: s3 } = e3 || {};
        if (!i3 || !s3) return Ne.warn("needRotateVideo: Could not detect browser/OS"), t3;
        const r3 = i3.toLowerCase(), o3 = s3.toLowerCase(), n3 = navigator.userAgent, a3 = /iPad/.test(n3) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, c3 = o3.includes("ios") || a3, h2 = t3.headerExtensions.length, d2 = t3.headerExtensions.some((t4) => "urn:3gpp:video-orientation" === t4.uri);
        if (Ne.debug("needRotateVideo detection:", { browserName: i3, os: s3, browser: r3, operatingSystem: o3, isIPad: a3, isIOS: c3, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints, userAgent: n3, headerExtensionCount: h2, hasVideoOrientation: d2 }), "firefox" === r3 || c3) {
          t3.headerExtensions = t3.headerExtensions.filter((t4) => "urn:3gpp:video-orientation" !== t4.uri);
          const e4 = t3.headerExtensions.length, i4 = h2 - e4;
          return Ne.debug("Filtered video-orientation header extension", { browser: r3, os: o3, isIOS: c3, isIPad: a3, beforeCount: h2, afterCount: e4, removed: i4, success: i4 > 0 }), 0 === i4 && d2 ? Ne.warn("Failed to filter video-orientation header extension!") : i4 > 0 && Ne.debug(`Successfully removed ${i4} video-orientation header extension(s) for iOS/Firefox`), t3;
        }
        return Ne.debug("Not filtering video-orientation (not iOS/Firefox)", { browser: r3, os: o3 }), t3;
      }))({ rtpCapabilities: this.capabilities }), yield this.device.load({ routerRtpCapabilities: this.capabilities })), this.dispatchEvent(new CustomEvent(Le.ROOM_JOINED, { detail: c2 })), c2;
    });
  }
  connectTransports(_0) {
    return __async(this, arguments, function* ({ localVideoElementId: t2, options: e2, waitingRoomToken: i2, audioOnly: s2 = false }) {
      this.isAudioOnlyMode = s2;
      try {
        yield this.mr({ localVideoElementId: t2, options: e2, waitingRoomToken: i2, audioOnly: s2, sendTransportComplete: () => __async(this, null, function* () {
          return yield this.wr({ waitingRoomToken: i2 });
        }) });
      } catch (mr) {
        throw console.error("Error creating send transport:", mr), mr;
      }
    });
  }
  mr(_0) {
    return __async(this, arguments, function* ({ localVideoElementId: t2, options: e2, waitingRoomToken: i2, audioOnly: s2, sendTransportComplete: r2 }) {
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && this.gr && (Ne.debug("Safari rejoin detected - adding delay for WebRTC state cleanup"), yield Qe(1500)), this.gr = true, this.sendTransportDetails = yield this.signaling.createTransport({ device: this.device });
      const o2 = this.sendTransportDetails.id, n2 = yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, roomToken: e3 }) {
        const i3 = `https://${t3}${Ve.serverRegionUrl}/room/iceserverinfo`, s3 = yield fetch(i3, { headers: { Authorization: "Bearer " + e3 } });
        let r3;
        r3 = yield s3.json();
        {
          const t4 = [];
          for (const e4 of r3.stunServers) t4.push({ urls: e4, username: r3.turnServerUsername, credential: r3.turnServerPassword });
          for (const e4 of r3.turnServers) t4.push({ urls: e4, username: r3.turnServerUsername, credential: r3.turnServerPassword });
          r3 = { iceServers: t4, iceGatheringTimeout: 5e3 };
        }
        return r3;
      }))({ roomRegion: this.signaling.getRegion(), roomToken: this.roomToken });
      this.sendTransportDetails.iceServers = n2.iceServers, this.sendTransport = this.device.createSendTransport(this.sendTransportDetails), this.sendTransport.on("connect", (_02, _1, _22) => __async(this, [_02, _1, _22], function* ({ dtlsParameters: t3 }, e3, s3) {
        try {
          yield this.signaling.connectTransport({ transportId: o2, dtlsParameters: t3, waitingRoomToken: i2 }), e3();
        } catch (mr) {
          s3(mr), this.dispatchEvent(new CustomEvent(Le.ERROR, { detail: mr }));
        }
      })), this.sendTransport.on("produce", (_02, _1, _22) => __async(this, [_02, _1, _22], function* ({ kind: t3, rtpParameters: e3 }, i3, s3) {
        try {
          e3.encodings && 0 !== e3.encodings.length || (e3.encodings = [{}]);
          const s4 = yield ii(), { id: r3 } = yield this.signaling.produce({ transportId: o2, kind: t3, rtpParameters: e3, appData: __spreadProps(__spreadValues({}, s4), { audioOnly: this.isAudioOnlyMode }) });
          this.producerId = r3, i3({ id: r3 });
        } catch (mr) {
          s3(mr);
        }
      })), this.sendTransport.on("connectionstatechange", (t3) => __async(this, null, function* () {
        console.log("Send transport connection state changed to:", t3), this.sendTransportConnectionTimer && this.sendTransportConnectionTimer.setState(t3), "connected" === t3 ? (this.dispatchEvent(new CustomEvent(Le.CONNECTED)), this.sendTransportConnectionTimer && (this.sendTransportConnectionTimer.stop(), this.sendTransportConnectionTimer = null), this.signaling.isOwner || setTimeout(() => {
          this.signaling && (this.signaling.signalConnected(), console.log("Signaled connected"));
        }, 2e3), yield Qe(1e3), r2 && (yield r2())) : "failed" !== t3 && "disconnected" !== t3 || (this.dispatchEvent(new CustomEvent(Le.DISCONNECTED)), this.sendTransportConnectionTimer ? console.log("Send transport connection failed, reconnection already in progress") : (console.log("Send transport connection failed, starting reconnection"), this.sendTransportConnectionTimer = new hi({ transport: this.sendTransport, signaling: this.signaling, transportId: o2, type: "send", coordinateWith: this.receiveTransportConnectionTimer })));
      })), yield Qe(1e3);
      const a2 = this.yr({ localVideoElementId: t2, options: e2, audioOnly: s2 }), c2 = new Promise((t3, e3) => setTimeout(() => e3(Error("Media production timed out - camera/microphone access may be blocked or device not responding")), 15e3));
      try {
        yield Promise.race([a2, c2]);
      } catch (mr) {
        if (Ne.error("Failed to produce media, cleaning up:", mr), !s2) {
          const e3 = document.getElementById(t2);
          e3 && this.ar(e3);
        }
        throw mr;
      }
      return this.sendTransport;
    });
  }
  reconnect(_0) {
    return __async(this, arguments, function* ({ options: t2, waitingRoomToken: e2 }) {
      if (this.recordingId) {
        try {
          yield this.stopRecording();
        } catch (d2) {
        }
        this.recordingId = null;
      }
      if (this.streamingId) {
        try {
          yield this.stopStreaming();
        } catch (d2) {
        }
        this.streamingId = null, this.streamingType = null;
      }
      if (!this.transcribingId) {
        try {
          yield this.stopTranscribing();
        } catch (d2) {
        }
        this.transcribingId = null;
      }
      const i2 = this.isLocalAudioPaused(), s2 = this.isLocalVideoPaused(), r2 = this.isLocalOutputPaused(), o2 = this.audioMutedByRoomOwner, n2 = this.videoMutedByRoomOwner, a2 = this.outputMutedByRoomOwner;
      if (this.audioProducer) {
        try {
          Ne.debug("Closing audio producer before reconnect", { producerId: this.audioProducer.id }), this.audioProducer.close();
        } catch (mr) {
          Ne.warn("Error closing audio producer during reconnect:", mr);
        }
        this.audioProducer = null;
      }
      if (this.videoProducer) {
        try {
          Ne.debug("Closing video producer before reconnect", { producerId: this.videoProducer.id }), this.videoProducer.close();
        } catch (mr) {
          Ne.warn("Error closing video producer during reconnect:", mr);
        }
        this.videoProducer = null;
      }
      if (this.stopDevices(), this.sendTransport) {
        const t3 = this.sendTransportDetails?.id;
        try {
          this.vr(), this.sendTransport.close(), this.receiveTransport?.close(), this.bandwidthMonitor && this.bandwidthMonitor.dispose(), this.bandwidthMonitor = null;
        } catch (mr) {
          Ne.warn("Error closing local transports during reconnect:", mr);
        }
        if (this.sendTransport = null, this.sendTransportDetails = null, this.receiveTransport = null, this.receiveTransportDetails = null, t3) try {
          yield Qe(500), yield this.signaling.closeTransport({ transportId: t3, reconnect: true });
        } catch (mr) {
          (mr?.message || mr?.error || mr + "").includes("not found") ? Ne.debug("Transport already cleaned up on server, continuing reconnect") : Ne.warn("Error closing transport on server during reconnect:", mr);
        }
      }
      this.br(), this.consumers.clear(), this.consumedProducers.clear(), this.receiveTransportInitiallyConnected = false;
      const c2 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), h2 = c2 ? 2500 : 1500;
      Ne.debug(`Waiting ${h2}ms for transport cleanup`, { isSafari: c2 }), yield Qe(h2), this.options = t2, yield this.connectTransports({ localVideoElementId: this.localVideoElementId, options: this.options, waitingRoomToken: e2, audioOnly: this.isAudioOnlyMode }), yield Qe(1e3), o2 ? (this.audioMutedByRoomOwner = true, yield this.Er(true, true)) : i2 && (yield this.muteLocalAudio(true)), n2 ? (this.videoMutedByRoomOwner = true, yield this.Ir(true, true)) : s2 && (yield this.muteLocalVideo(true)), a2 ? (this.outputMutedByRoomOwner = true, yield this.Tr(true, true)) : r2 && (yield this.muteLocalOutput(true)), Ne.debug("Reconnect completed successfully", { audioProducerId: this.audioProducer?.id, videoProducerId: this.videoProducer?.id, audioMuted: i2, videoMuted: s2, outputMuted: r2 });
    });
  }
  ri(t2) {
    return __async(this, null, function* () {
      const e2 = yield this.deviceManager.getUserMedia(t2);
      if (e2 && e2.Ge && e2.We) {
        const t3 = e2.We;
        this.dispatchEvent(new CustomEvent(Le.CONSTRAINTS_RELAXED, { detail: { level: t3.level, originalConstraints: t3.originalConstraints, relaxedConstraints: t3.relaxedConstraints, failedConstraint: t3.failedConstraint, message: `Constraints were relaxed from level 0 to level ${t3.level} due to device limitations` } })), delete e2.Ge, delete e2.We;
      }
      return e2;
    });
  }
  yr(_0) {
    return __async(this, arguments, function* ({ localVideoElementId: t2, options: e2, audioOnly: i2 = false }) {
      if (!this.sendTransport) throw Error("Send transport not created");
      if (!i2 && !t2) throw Error("Local video element id is required");
      try {
        if (this.localVideoDeviceId && this.deviceManager) {
          const t3 = yield this.deviceManager.listVideoDevices();
          t3.some((t4) => t4.deviceId === this.localVideoDeviceId) || (Ne.warn("Saved video device not found on current device, clearing preference", { savedDeviceId: this.localVideoDeviceId, availableDevices: t3.map((t4) => t4.deviceId) }), this.localVideoDeviceId = null);
        }
        if (this.localAudioInputDeviceId && this.deviceManager) {
          const t3 = yield this.deviceManager.listAudioInputDevices();
          t3.some((t4) => t4.deviceId === this.localAudioInputDeviceId) || (Ne.warn("Saved audio input device not found on current device, clearing preference", { savedDeviceId: this.localAudioInputDeviceId, availableDevices: t3.map((t4) => t4.deviceId) }), this.localAudioInputDeviceId = null);
        }
      } catch (l2) {
        Ne.warn("Failed to validate device IDs, continuing with defaults:", l2), this.localVideoDeviceId = null, this.localAudioInputDeviceId = null;
      }
      let s2 = false;
      if (!i2) {
        const t3 = this.Js(), e3 = this.Hs();
        s2 = { deviceId: this.localVideoDeviceId ? { ideal: this.localVideoDeviceId } : void 0 }, t3 && e3 && (s2.width = { ideal: 1280, min: 640 }, s2.height = { ideal: 720, min: 480 }, s2.aspectRatio = { ideal: 16 / 9 }, Ne.debug("iOS landscape detected - applying landscape constraints", { width: s2.width, height: s2.height, aspectRatio: s2.aspectRatio }));
      }
      const r2 = { audio: __spreadValues({ deviceId: this.localAudioInputDeviceId ? { ideal: this.localAudioInputDeviceId } : void 0 }, this.localAudioConstraints), video: s2 }, o2 = yield this.ri(r2);
      if (Ne.debug("Media settings", r2), i2) Ne.debug("Audio-only mode - skipping video element setup");
      else {
        const e3 = o2.getVideoTracks()[0], i3 = this.Js(), s3 = this.Hs();
        if (e3 && !this.localVideoDeviceId) {
          const t3 = e3.getSettings();
          t3.deviceId && (this.localVideoDeviceId = t3.deviceId, Ne.debug("Captured default video device ID:", t3.deviceId));
        }
        if (e3 && i3) {
          const t3 = e3.getSettings();
          Ne.debug("iOS video track captured", { width: t3.width, height: t3.height, aspectRatio: t3.aspectRatio, orientation: window.screen?.orientation?.type || "unknown", expectedLandscape: s3 }), s3 && t3.width && t3.height && t3.height > t3.width && Ne.warn("iOS captured portrait video in landscape mode", { capturedWidth: t3.width, capturedHeight: t3.height, deviceOrientation: window.screen?.orientation?.type });
        }
        const r3 = document.getElementById(t2);
        if (!r3) throw Error("Video element not found");
        r3.srcObject = o2, this.Ys(r3, true), this.localVideoElementId = t2;
      }
      const n2 = o2.getAudioTracks()[0];
      if (n2 && !this.localAudioInputDeviceId) {
        const t3 = n2.getSettings();
        t3.deviceId && (this.localAudioInputDeviceId = t3.deviceId, Ne.debug("Captured default audio input device ID:", t3.deviceId));
      }
      this.options = e2 || {};
      const { enableAudioInputMonitor: a2, enableAudioMerge: c2, enableAudioGainControl: h2 } = e2 || {};
      let d2 = null;
      a2 && (h2 && (d2 = this.cr({ stream: o2 })), this.hr({ stream: o2 }), this.dr({ stream: o2 }));
      for (const u2 of o2.getTracks()) if ("video" === u2.kind) {
        const t3 = /Firefox/i.test(navigator.userAgent);
        console.log(" Detected Firefox:", t3);
        const e3 = t3 ? [{ rid: "q", maxBitrate: 25e4 }, { rid: "h", maxBitrate: 1e6 }] : [{ rid: "r0", scalabilityMode: "L1T3", scaleResolutionDownBy: 4, maxBitrate: 15e4 }, { rid: "r1", scalabilityMode: "L1T3", scaleResolutionDownBy: 2, maxBitrate: 5e5 }, { rid: "r2", scalabilityMode: "L1T3", scaleResolutionDownBy: 1, maxBitrate: 15e5 }], i3 = yield ii();
        this.videoProducer = yield this.sendTransport.produce({ track: u2, encodings: e3, appData: __spreadProps(__spreadValues({}, i3), { audioOnly: this.isAudioOnlyMode }) }), Ne.debug("Video producer created", { producerId: this.videoProducer.id, trackId: u2.id, settings: u2.getSettings() }), this.Js() && !this.Ws && this.Gs();
      } else "audio" === u2.kind && (d2 || (d2 = u2), c2 && (this.audioMerger = new Me({ audioContext: this.audioContext }), this.audioMerger.initializeWithVideoStream(o2), d2 = this.audioMerger.getTrackForProducer({ audioGainControl: this.audioGainControl })), this.audioProducer = yield this.sendTransport.produce({ track: d2, encodings: [{ ssrc: u2.id }] }), Ne.debug("Audio producer created", { producerId: this.audioProducer.id, trackId: d2.id, settings: d2.getSettings() }));
    });
  }
  $s(t2) {
    const e2 = t2.detail.iceParameters || t2.detail;
    if (e2 && "object" == typeof e2) if (e2.usernameFragment && e2.password) {
      Ne.debug("Restarting ICE with new parameters", { usernameFragment: e2.usernameFragment, hasSendTransport: !!this.sendTransport, hasReceiveTransport: !!this.receiveTransport });
      try {
        if (!this.sendTransport || !this.receiveTransport) return void Ne.warn("Cannot restart ICE - transports not available", { hasSendTransport: !!this.sendTransport, hasReceiveTransport: !!this.receiveTransport });
        const t3 = this.audioProducer?.paused || false, i2 = this.videoProducer?.paused || false;
        Ne.debug("Pausing producers before ICE restart", { audioProducerId: this.audioProducer?.id, videoProducerId: this.videoProducer?.id, wasAudioPaused: t3, wasVideoPaused: i2 }), this.audioProducer && !t3 && this.audioProducer.pause(), this.videoProducer && !i2 && this.videoProducer.pause(), this.sendTransport.restartIce({ iceParameters: e2 }), this.receiveTransport.restartIce({ iceParameters: e2 }), setTimeout(() => {
          this.audioProducer && !t3 && (this.audioProducer.resume(), Ne.debug("Resumed audio producer after ICE restart", { producerId: this.audioProducer.id })), this.videoProducer && !i2 && (this.videoProducer.resume(), Ne.debug("Resumed video producer after ICE restart", { producerId: this.videoProducer.id }));
        }, 100), Ne.debug("ICE restart completed successfully");
      } catch (mr) {
        Ne.error("Error restarting ICE:", mr, { errorMessage: mr.message, iceParameters: e2 });
      }
    } else Ne.error("Invalid ICE parameters - missing required fields", { iceParameters: e2, hasUsernameFragment: !!e2.usernameFragment, hasPassword: !!e2.password });
    else Ne.error("Invalid ICE parameters in update event - missing or not an object", { detail: t2.detail });
  }
  dr({ stream: t2 }) {
    if (this.feedbackDetector) {
      try {
        this.feedbackDetector.dispose();
      } catch (mr) {
        Ne.warn("Error disposing existing feedback detector:", mr);
      }
      this.feedbackDetector = null;
    }
    if (this.audioContext && this.options?.enableFeedbackDetection) try {
      this.feedbackDetector = new $e({ feedbackThreshold: 0.75, feedbackDuration: 300, autoMute: true, cooldownPeriod: 2e3 }), this.feedbackDetector.initialize(this.audioContext, t2), this.feedbackDetector.startMonitoring((t3) => {
        Ne.warn("Feedback detected, auto-muting audio", t3), this.audioGainControl && this.audioGainControl.gain.setValueAtTime(0.1 * this.audioGainControl.gain.value, this.audioContext.currentTime), this.muteLocalAudio(true).catch((t4) => {
          Ne.error("Failed to auto-mute on feedback:", t4);
        }), this.dispatchEvent(new CustomEvent(Le.FEEDBACK_DETECTED, { detail: t3 }));
      }, () => {
        Ne.debug("Feedback stopped"), this.audioGainControl && this.audioGainControl.gain.linearRampToValueAtTime(1, this.audioContext.currentTime + 1), this.dispatchEvent(new CustomEvent(Le.FEEDBACK_STOPPED));
      }), Ne.debug("Feedback detector initialized and monitoring");
    } catch (e2) {
      Ne.error("Failed to initialize feedback detector:", e2);
    }
  }
  hr({ stream: t2 }) {
    if (this.audioInputMonitor) {
      try {
        this.audioInputMonitor.dispose();
      } catch (mr) {
        Ne.warn("Error disposing existing audio input monitor:", mr);
      }
      this.audioInputMonitor = null;
    }
    this.audioContext ? "suspended" === this.audioContext.state && this.audioContext.resume() : this.audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 48e3, latencyHint: "interactive" }), this.audioInputMonitor = new Oe({ audioContext: this.audioContext, stream: t2 }), this.audioGainControl && this.audioGainControl.connect(this.audioInputMonitor.getAnalyser());
    const e2 = this.nr(t2, this.localAudioConstraints);
    e2.isValid || (Ne.warn("Audio track validation failed:", e2.issues), this.dispatchEvent(new CustomEvent(Le.AUDIO_VALIDATION_FAILED, { detail: { issues: e2.issues, recommendations: e2.recommendations, settings: e2.settings } }))), e2.issues.length > 0 && (Ne.warn("Audio track issues detected:", e2.issues), e2.recommendations.length > 0 && Ne.info("Audio recommendations:", e2.recommendations)), this.dispatchEvent(new CustomEvent(Le.AUDIO_INPUT_MONITOR_CREATED, { detail: this.audioInputMonitor }));
  }
  cr({ stream: t2 }) {
    this.audioContext || (this.audioContext = new AudioContext());
    let e2 = 1;
    if (this.audioGainControl) {
      e2 = this.audioGainControl.gain.value;
      try {
        this.audioGainControl.disconnect();
      } catch (mr) {
        Ne.warn("Error disconnecting existing gain control:", mr);
      }
      this.audioGainControl = null;
    }
    if (this.audioInputSourceNode) {
      try {
        this.audioInputSourceNode.disconnect();
      } catch (mr) {
        Ne.warn("Error disconnecting existing audio input source node:", mr);
      }
      this.audioInputSourceNode = null;
    }
    const i2 = (({ audioContext: t3, stream: e3, gainValue: i3 = 1 }) => {
      const s2 = e3.getAudioTracks()[0];
      let r2 = t3.createMediaStreamSource(new MediaStream([s2]));
      const o2 = t3.createGain();
      r2.connect(o2), o2.gain.value = i3;
      const n2 = t3.createMediaStreamDestination();
      return o2.connect(n2), console.log("AudioGainControl initialized"), { gainNode: o2, inputNode: r2, producerTrack: n2.stream.getAudioTracks()[0] };
    })({ audioContext: this.audioContext, stream: t2, gainValue: e2 });
    return this.audioGainControl = i2.gainNode, this.audioInputSourceNode = i2.inputNode, this.dispatchEvent(new CustomEvent(Le.AUDIO_GAIN_CONTROL_CREATED, { detail: this.audioGainControl })), i2.producerTrack;
  }
  getAudioInputMonitor() {
    return this.audioInputMonitor;
  }
  getAudioGainControl() {
    return this.audioGainControl;
  }
  nr(t2, e2 = {}) {
    const i2 = { isValid: true, issues: [], settings: {}, recommendations: [] };
    try {
      if (!t2 || "function" != typeof t2.getAudioTracks) return i2.isValid = false, i2.issues.push("Invalid or missing audio stream"), i2;
      const s2 = t2.getAudioTracks();
      if (0 === s2.length) return i2.isValid = false, i2.issues.push("No audio tracks found in stream"), i2;
      const r2 = s2[0], o2 = r2.getSettings(), n2 = r2.getCapabilities ? r2.getCapabilities() : {};
      i2.settings = o2;
      const a2 = this.audioConfigManager.isEchoCancellationEnabled(e2), c2 = this.audioConfigManager.isEchoCancellationEnabled(o2);
      a2 && !c2 && (i2.isValid = false, i2.issues.push("Echo cancellation requested but not enabled"), n2.echoCancellation && n2.echoCancellation.includes(true) ? i2.recommendations.push("Echo cancellation is supported - try switching audio mode or device") : i2.recommendations.push("Echo cancellation not supported by device - consider using a different microphone")), true !== e2.noiseSuppression || o2.noiseSuppression || (i2.issues.push("Noise suppression requested but not enabled"), n2.noiseSuppression && n2.noiseSuppression.includes(true) && i2.recommendations.push("Noise suppression supported but not active")), true !== e2.autoGainControl || o2.autoGainControl || (i2.issues.push("Auto gain control requested but not enabled"), n2.autoGainControl && n2.autoGainControl.includes(true) && i2.recommendations.push("Auto gain control supported but not active")), e2.sampleRate && o2.sampleRate !== e2.sampleRate && i2.issues.push(`Sample rate mismatch: expected ${e2.sampleRate}, got ${o2.sampleRate}`), e2.channelCount && o2.channelCount !== e2.channelCount && i2.issues.push(`Channel count mismatch: expected ${e2.channelCount}, got ${o2.channelCount}`), o2.echoCancellation || o2.noiseSuppression || (i2.issues.push("Both echo cancellation and noise suppression are disabled - high risk of feedback"), i2.recommendations.push("Enable at least echo cancellation to prevent feedback loops")), Ne.debug("Audio track validation completed", { deviceId: o2.deviceId, echoCancellation: o2.echoCancellation, noiseSuppression: o2.noiseSuppression, autoGainControl: o2.autoGainControl, sampleRate: o2.sampleRate, channelCount: o2.channelCount, issues: i2.issues.length });
    } catch (s2) {
      i2.isValid = false, i2.issues.push("Error validating audio track: " + s2.message), Ne.error("Audio track validation error:", s2);
    }
    return i2;
  }
  Ks(t2, e2) {
    if (t2 && e2) try {
      const i2 = t2.track;
      if (t2.replaceTrack({ track: e2 }), i2 && i2 !== e2 && "ended" !== i2.readyState) try {
        i2.stop(), Ne.debug(`Stopped old ${i2.kind} track:`, i2.id);
      } catch (mr) {
        Ne.warn("Error stopping old producer track:", mr);
      }
      Ne.debug(`Replaced ${e2.kind} track in producer`);
    } catch (i2) {
      Ne.error("Error replacing producer track:", i2);
    }
    else Ne.warn("Invalid parameters for producer track replacement");
  }
  Rr(t2, e2, i2) {
    if (t2 && e2 && i2) try {
      const s2 = t2.srcObject;
      if (s2 instanceof MediaStream) {
        const t3 = "audio" === i2 ? s2.getAudioTracks() : s2.getVideoTracks(), r2 = "audio" === i2 ? e2.getAudioTracks() : e2.getVideoTracks();
        t3.forEach((t4) => {
          s2.removeTrack(t4), "ended" !== t4.readyState && t4.stop();
        }), r2.forEach((t4) => {
          s2.addTrack(t4);
        }), Ne.debug(`Replaced ${t3.length} old ${i2} tracks with ${r2.length} new ones`);
      } else t2.srcObject = e2, Ne.debug(`Set new ${i2} stream`);
    } catch (s2) {
      Ne.error(`Error replacing ${i2} tracks:`, s2), t2.srcObject = e2;
    }
    else Ne.warn("Invalid parameters for track replacement");
  }
  ar(t2, e2 = void 0) {
    try {
      let i2 = null;
      if (t2 instanceof MediaStream) i2 = t2;
      else {
        if (!(t2 && t2.srcObject instanceof MediaStream)) return void Ne.warn("Unable to extract stream from source for track stopping");
        i2 = t2.srcObject;
      }
      if (!i2 || "function" != typeof i2.getTracks) return void Ne.warn("Invalid stream for track stopping");
      let s2 = [];
      s2 = "audio" === e2 ? i2.getAudioTracks() : "video" === e2 ? i2.getVideoTracks() : i2.getTracks(), s2.forEach((t3) => {
        try {
          "ended" !== t3.readyState && (t3.stop(), Ne.debug(`Stopped ${t3.kind} track:`, t3.id));
        } catch (e3) {
          Ne.warn(`Error stopping ${t3.kind} track:`, e3.message);
        }
      }), t2 && t2.srcObject && (t2.srcObject = null), Ne.debug(`Stopped ${s2.length} ${e2 || "all"} tracks`);
    } catch (i2) {
      Ne.error("Error in _stopAllTracks:", i2);
    }
  }
  Js() {
    const t2 = navigator.userAgent, e2 = /iPad/.test(t2) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
    return /iPhone|iPad|iPod/.test(t2) || e2;
  }
  Hs() {
    if (window.visualViewport) {
      const t3 = window.visualViewport.width, e2 = window.visualViewport.height;
      if (t3 && e2) return t3 > e2;
    }
    if (window.matchMedia) {
      const t3 = window.matchMedia("(orientation: landscape)");
      if (t3 && void 0 !== t3.matches) return t3.matches;
    }
    const t2 = window.screen?.orientation?.type || "";
    return t2 ? t2.includes("landscape") : (window.screen?.width || window.innerWidth) > (window.screen?.height || window.innerHeight);
  }
  Ys(t2, e2 = true) {
    if (t2) if (e2) t2.muted = true, t2.volume = 0, t2.autoplay = true, t2.playsInline = true;
    else {
      const e3 = this.isLocalOutputPaused();
      t2.muted = e3, e3 || (t2.volume = 1);
    }
  }
  vr() {
    if (this.sendTransportConnectionTimer) {
      try {
        this.sendTransportConnectionTimer.stop(), Ne.debug("Stopped send transport ICE handler timer");
      } catch (mr) {
        Ne.warn("Error stopping send transport ICE handler:", mr);
      }
      this.sendTransportConnectionTimer = null;
    }
    if (this.receiveTransportConnectionTimer) {
      try {
        this.receiveTransportConnectionTimer.stop(), Ne.debug("Stopped receive transport ICE handler timer");
      } catch (mr) {
        Ne.warn("Error stopping receive transport ICE handler:", mr);
      }
      this.receiveTransportConnectionTimer = null;
    }
    if (this.sendTransport) try {
      this.sendTransport.removeAllListeners();
    } catch (mr) {
      Ne.warn("Error removing send transport event listeners:", mr);
    }
    if (this.receiveTransport) try {
      this.receiveTransport.removeAllListeners();
    } catch (mr) {
      Ne.warn("Error removing receive transport event listeners:", mr);
    }
  }
  br() {
    this.consumers.forEach(({ consumer: t2 }) => {
      if (t2) try {
        t2.removeAllListeners();
      } catch (mr) {
        Ne.warn("Error removing consumer event listeners:", mr);
      }
    });
  }
  Sr() {
    return __async(this, null, function* () {
      try {
        if (this.audioInputMonitor) {
          try {
            this.audioInputMonitor.dispose();
          } catch (mr) {
            Ne.warn("Error disposing audio input monitor:", mr);
          }
          this.audioInputMonitor = null;
        }
        if (this.audioGainControl) {
          try {
            this.audioGainControl.disconnect();
          } catch (mr) {
            Ne.warn("Error disconnecting gain control:", mr);
          }
          this.audioGainControl = null;
        }
        if (this.audioInputSourceNode) {
          try {
            this.audioInputSourceNode.disconnect();
          } catch (mr) {
            Ne.warn("Error disconnecting audio input source node:", mr);
          }
          this.audioInputSourceNode = null;
        }
        if (this.audioMerger) {
          try {
            this.audioMerger.dispose();
          } catch (mr) {
            Ne.warn("Error disposing audio merger:", mr);
          }
          this.audioMerger = null;
        }
        if (this.lr) {
          try {
            this.ar(this.lr);
          } catch (mr) {
            Ne.warn("Error stopping audio-only stream:", mr);
          }
          this.lr = null;
        }
        if (this.feedbackDetector) {
          try {
            this.feedbackDetector.dispose();
          } catch (mr) {
            Ne.warn("Error disposing feedback detector:", mr);
          }
          this.feedbackDetector = null;
        }
        if (this.audioContext) {
          try {
            "closed" !== this.audioContext.state && (yield this.audioContext.suspend(), yield this.audioContext.close());
          } catch (mr) {
            Ne.warn("Error closing audio context:", mr);
          }
          this.audioContext = null;
        }
        Ne.debug("Audio resources cleaned up successfully");
      } catch (t2) {
        Ne.error("Error cleaning up audio resources:", t2);
      }
    });
  }
  closeConnection() {
    return __async(this, null, function* () {
      try {
        if (this.recordingId) {
          try {
            yield this.stopRecording();
          } catch (t2) {
          }
          this.recordingId = null;
        }
        if (this.streamingId) {
          try {
            yield this.stopStreaming();
          } catch (t2) {
          }
          this.streamingId = null, this.streamingType = null;
        }
        if (this.transcribingId) {
          try {
            yield this.stopTranscribing();
          } catch (t2) {
          }
          this.transcribingId = null;
        }
        if (this.sendTransport) {
          const t2 = this.sendTransportDetails.id;
          try {
            this.vr(), this.sendTransport?.close(), this.receiveTransport?.close(), yield this.signaling?.closeTransport({ transportId: t2 });
          } catch (mr) {
            console.error("Error closing transport:", mr);
          }
        }
        this.isRoomOwner = false, this.sendTransport = null, this.sendTransportDetails = null, this.receiveTransport = null, this.receiveTransportDetails = null, this.audioProducer && this.audioProducer.close(), this.videoProducer && this.videoProducer.close(), this.audioProducer = null, this.videoProducer = null, this.br(), this.consumers.clear(), this.consumedProducers.clear(), this.receiveTransportInitiallyConnected = false, this.device = new xe.Device(), this.capabilities = null, Ne.debug("Reset Device for clean rejoin state");
        try {
          yield this.signaling?.closeRoom();
        } catch (mr) {
          console.error("Error closing room:", mr);
        }
        if (this.signaling?.close(), this.dispatchEvent(new CustomEvent(Le.ROOM_CLOSED)), this.rr(), this.signaling?.removeEventListener(Le.NEW_PRODUCER, this.Ps), this.signaling?.removeEventListener(Le.ROOM_CLOSED, this.closeConnection), this.signaling?.removeEventListener(Le.REMOTE_AUDIO_MUTED, this.Ms), this.signaling?.removeEventListener(Le.REMOTE_VIDEO_MUTED, this.As), this.signaling?.removeEventListener(Le.REMOTE_OUTPUT_MUTED, this.Ns), this.signaling?.removeEventListener(Le.UPDATE_ICE_PARAMETERS, this.$s), this.signaling = null, this.Ws && (cancelAnimationFrame(this.Ws), this.Ws = null, Ne.debug("Stopped orientation polling")), this.Fs) {
          if (this.Qs && window.visualViewport && (window.visualViewport.removeEventListener("resize", this.Qs), this.Qs = null), this.Xs) {
            const t2 = this.Xs.removeListener || this.Xs.removeEventListener;
            t2 && (t2.call(this.Xs, this.Fs), t2.call(this.Zs, this.Fs)), this.Xs = null, this.Zs = null;
          }
          this.tr && window.screen?.orientation && (window.screen.orientation.removeEventListener("change", this.Fs), this.tr = false), this.er && (window.removeEventListener("resize", this.er), this.er = null), this.Fs = null;
        }
        this.sendTransportConnectionTimer && (this.sendTransportConnectionTimer.stop(), this.sendTransportConnectionTimer = null), this.receiveTransportConnectionTimer && (this.receiveTransportConnectionTimer.stop(), this.receiveTransportConnectionTimer = null), yield this.Sr(), this.inScreenShare = false, this.screenShareTrack && (this.screenShareTrack.onended = null, this.screenShareTrack = null), this.bandwidthMonitor && this.bandwidthMonitor.dispose(), this.stopDevices(), this.deviceManager && this.deviceManager.dispose(), Ne.debug("Connection and room closed");
      } catch (mr) {
        Ne.error(mr);
      }
    });
  }
  stopDevices() {
    const t2 = document.getElementById(this.localVideoElementId);
    t2 && (this.ar(t2), t2.src = "", Ne.debug("Local devices stopped")), this.lr && (this.ar(this.lr), this.lr = null, Ne.debug("Audio-only stream stopped"));
  }
  wr(_0) {
    return __async(this, arguments, function* ({ waitingRoomToken: t2 }) {
      this.receiveTransportDetails = yield this.signaling.createTransport({ device: this.device });
      const e2 = this.receiveTransportDetails.id;
      return this.receiveTransport = this.device.createRecvTransport(this.receiveTransportDetails), this.receiveTransport.on("connect", (_02, _1, _22) => __async(this, [_02, _1, _22], function* ({ dtlsParameters: i2 }, s2, r2) {
        try {
          yield this.signaling.connectTransport({ transportId: e2, dtlsParameters: i2, waitingRoomToken: t2 }), s2();
        } catch (mr) {
          r2(mr);
        }
      })), this.receiveTransport.on("connectionstatechange", (t3) => {
        console.log("Receive transport connection state changed to:", t3), this.receiveTransportConnectionTimer && this.receiveTransportConnectionTimer.setState(t3), "connected" === t3 ? (this.dispatchEvent(new CustomEvent(Le.CONNECTED)), this.receiveTransportConnectionTimer && (this.receiveTransportConnectionTimer.stop(), this.receiveTransportConnectionTimer = null), this.receiveTransportInitiallyConnected || (this.receiveTransportInitiallyConnected = true, this.xs())) : "failed" === t3 || "disconnected" === t3 ? (this.dispatchEvent(new CustomEvent(Le.DISCONNECTED)), this.receiveTransportConnectionTimer ? console.log("Receive transport connection failed, reconnection already in progress") : (console.log("Receive transport connection failed, starting reconnection"), this.receiveTransportConnectionTimer = new hi({ transport: this.receiveTransport, signaling: this.signaling, transportId: e2, type: "receive", coordinateWith: this.sendTransportConnectionTimer }), this.sendTransportConnectionTimer && (this.sendTransportConnectionTimer.coordinateWith = this.receiveTransportConnectionTimer))) : "closed" === t3 && (Ne.info("Receive transport closed, clearing event queue"), this.eventQueue = [], this.isProcessingQueue = false);
      }), this.signaling.getExistingProducers().then((t3) => {
        for (const e3 of t3) this.Ps({ detail: e3 });
      }).catch((t3) => {
        console.error("Failed to get existing producers:", t3), this.dispatchEvent(new CustomEvent(Le.ERROR, { detail: { error: "Failed to fetch existing media streams", originalError: t3 } }));
      }), this.receiveTransport;
    });
  }
  Ps(t2) {
    return __async(this, null, function* () {
      100 > this.eventQueue.length || (Ne.warn("Event queue at max capacity, dropping oldest event"), this.eventQueue.shift()), this.eventQueue.push(t2), !this.receiveTransport || this.receiveTransport.closed || this.isProcessingQueue ? this.receiveTransport?.closed && Ne.warn("Receive transport is closed, cannot process new producer events") : this.Ds();
    });
  }
  Ds() {
    return __async(this, null, function* () {
      this.isProcessingQueue = true;
      try {
        for (; this.eventQueue.length > 0; ) {
          const t2 = this.eventQueue.shift(), { userId: e2, producerId: i2, kind: s2, paused: r2, audioOnly: o2 } = t2.detail;
          if (e2 !== this.signaling.userId) {
            if (this.consumedProducers.has(i2)) {
              console.log("Skipping already consumed producer:", i2);
              continue;
            }
            if (!this.receiveTransport || this.receiveTransport.closed) {
              Ne.warn("Transport is closed, cannot consume producer:", i2);
              continue;
            }
            try {
              const t3 = yield this.signaling.consume({ transportId: this.receiveTransportDetails.id, producerId: i2, rtpCapabilities: this.device.rtpCapabilities });
              for (const n2 of t3) {
                const t4 = yield this.receiveTransport.consume(n2), { track: a2 } = t4;
                if (e2 !== this.signaling.userId) {
                  this.consumedProducers.add(i2), this.consumers.set(i2, { consumer: t4, userId: e2, kind: s2, paused: r2 ?? false, audioOnly: o2 ?? false });
                  const c2 = () => {
                    console.log("Producer closed, cleaning up consumer:", i2), this.kr(i2, e2, s2, true);
                  }, h2 = () => {
                    console.log("Transport closed, cleaning up consumer:", i2), this.kr(i2, e2, s2, false);
                  };
                  this.ks.set(i2, { producerCloseHandler: c2, transportCloseHandler: h2 }), t4.on("producerclose", c2), t4.on("transportclose", h2), this.dispatchEvent(new CustomEvent(Le.MEDIA_TRACK_ADDED, { detail: { userId: e2, track: a2, kind: s2, paused: r2 ?? false, audioOnly: o2 ?? false } })), yield this.signaling.resumeConsumer({ consumerId: n2.id }), console.log("Resumed consumer :", n2.id), this.bandwidthMonitor && this.bandwidthMonitor.addConsumer(t4);
                }
              }
            } catch (mr) {
              if ("InvalidStateError" === mr.name && this.receiveTransport?.closed) {
                Ne.warn("Cannot consume producer due to closed transport:", i2);
                continue;
              }
              console.error("Error consuming producer:", i2, mr), this.dispatchEvent(new CustomEvent(Le.ERROR, { detail: { error: "Failed to consume media stream", producerId: i2, originalError: mr } }));
            }
          }
        }
      } finally {
        this.isProcessingQueue = false;
      }
    });
  }
  xs() {
    this.Ds();
  }
  kr(t2, e2, i2, s2 = true) {
    const r2 = this.ks.get(t2), o2 = this.consumers.get(t2);
    if (r2 && o2?.consumer) try {
      o2.consumer.off("producerclose", r2.producerCloseHandler), o2.consumer.off("transportclose", r2.transportCloseHandler);
    } catch (n2) {
      Ne.debug("Error removing consumer handlers:", n2);
    }
    this.ks.delete(t2), this.consumers.delete(t2), this.consumedProducers.delete(t2), s2 && this.dispatchEvent(new CustomEvent(Le.MEDIA_TRACK_REMOVED, { detail: { userId: e2, producerId: t2, kind: i2 } }));
  }
  admitWaitingRoomUser(_0) {
    return __async(this, arguments, function* ({ userToAdmit: t2 }) {
      if (!this.signaling || !this.isRoomOwner) throw Error("Must be the room owner to admit waiting room user");
      yield this.signaling.admitWaitingRoomUser({ userToAdmit: t2 });
    });
  }
  rejectWaitingRoomUser(_0) {
    return __async(this, arguments, function* ({ userToReject: t2 }) {
      if (!this.signaling || !this.isRoomOwner) throw Error("Must be the room owner to reject waiting room user");
      yield this.signaling.rejectWaitingRoomUser({ userToReject: t2 });
    });
  }
  muteLocalAudio(t2, e2) {
    return __async(this, null, function* () {
      return this.signaling.localAudioMutedByLocalUser = t2, yield this.Er(t2, e2);
    });
  }
  Er(t2, e2) {
    return __async(this, null, function* () {
      if (!this.audioProducer) throw Error("Must create room before muting audio");
      if (!e2 && this.audioMutedByRoomOwner) throw Error("Audio is muted by room owner");
      return t2 ? this.audioProducer.pause() : this.audioProducer.resume(), yield this.signaling.muteLocalAudio({ muted: t2 ? "muted" : "unmuted" });
    });
  }
  isLocalAudioPaused() {
    return this.audioProducer && this.audioProducer.paused;
  }
  muteLocalVideo(t2, e2) {
    return __async(this, null, function* () {
      return this.signaling.localVideoMutedByLocalUser = t2, yield this.Ir(t2, e2);
    });
  }
  Ir(t2, e2) {
    return __async(this, null, function* () {
      if (!this.videoProducer) {
        if (this.isAudioOnlyMode) return { muted: "muted" };
        throw Error("Must create room before muting video");
      }
      if (!e2 && this.videoMutedByRoomOwner) throw Error("Video is muted by room owner");
      return t2 ? this.videoProducer.pause() : this.videoProducer.resume(), yield this.signaling.muteLocalVideo({ muted: t2 ? "muted" : "unmuted" });
    });
  }
  isLocalVideoPaused() {
    return this.videoProducer && this.videoProducer.paused;
  }
  isAudioOnly() {
    return true === this.isAudioOnlyMode || !this.videoProducer;
  }
  getRemoteUserMediaStatus(t2) {
    let e2 = false, i2 = false;
    for (const { userId: s2, kind: r2 } of this.consumers.values()) s2 === t2 && ("audio" === r2 && (e2 = true), "video" === r2 && (i2 = true));
    return { hasAudio: e2, hasVideo: i2 };
  }
  isRemoteUserAudioOnly(t2) {
    const { hasAudio: e2, hasVideo: i2 } = this.getRemoteUserMediaStatus(t2);
    return e2 && !i2;
  }
  muteLocalOutput(t2, e2) {
    return __async(this, null, function* () {
      return this.signaling.localOutputMutedByLocalUser = t2, yield this.Tr(t2, e2);
    });
  }
  Tr(t2, e2) {
    return __async(this, null, function* () {
      if (!this.audioProducer) throw Error("Must create room before muting output");
      if (!e2 && this.outputMutedByRoomOwner) throw Error("Output is muted by room owner");
      const i2 = document.querySelectorAll('[id^="remote-video-"]');
      i2 && i2.forEach((e3) => {
        e3 && (e3.muted = t2);
      });
      const s2 = document.querySelectorAll('[id^="remote-audio-"]');
      return s2 && s2.forEach((e3) => {
        e3 && (e3.muted = t2);
      }), yield this.signaling.muteLocalOutput({ muted: t2 ? "muted" : "unmuted" });
    });
  }
  isLocalOutputPaused() {
    let t2 = false;
    const e2 = document.querySelectorAll('[id^="remote-video-"]');
    e2 && e2.forEach((e3) => {
      e3 && (t2 = e3.muted);
    });
    const i2 = document.querySelectorAll('[id^="remote-audio-"]');
    return i2 && i2.forEach((e3) => {
      e3 && (t2 = t2 || e3.muted);
    }), t2;
  }
  muteRemoteAudio(_0) {
    return __async(this, arguments, function* ({ room: t2, userId: e2, muteAudio: i2 }) {
      if (!t2 || !e2 || !this.audioProducer) throw Error("Must create room before muting remote audio");
      if (!this.isLocalUserRoomOwner()) throw Error("Must be the room owner to mute remote audio");
      return yield this.signaling.muteRemoteAudio({ userId: e2, muted: i2 ? "muted" : "unmuted" });
    });
  }
  muteRemoteVideo(_0) {
    return __async(this, arguments, function* ({ room: t2, userId: e2, muteVideo: i2 }) {
      if (!t2 || !e2 || !this.videoProducer) throw Error("Must create room before muting remote video");
      if (!this.isLocalUserRoomOwner()) throw Error("Must be the room owner to mute remote video");
      return yield this.signaling.muteRemoteVideo({ userId: e2, muted: i2 ? "muted" : "unmuted" });
    });
  }
  muteRemoteOutput(_0) {
    return __async(this, arguments, function* ({ room: t2, userId: e2, muteOutput: i2 }) {
      if (!t2 || !e2 || !this.audioProducer) throw Error("Must create room before muting remote output");
      if (!this.isLocalUserRoomOwner()) throw Error("Must be the room owner to mute remote output");
      return yield this.signaling.muteRemoteOutput({ userId: e2, muted: i2 ? "muted" : "unmuted" });
    });
  }
  Ms(_0) {
    return __async(this, arguments, function* ({ detail: { userId: t2, muted: e2 } }) {
      ri(t2, this.signaling.userId) && (this.signaling.localAudioMutedByLocalUser || (yield this.Er("muted" === e2, true), this.audioMutedByRoomOwner = "muted" === e2));
    });
  }
  As(_0) {
    return __async(this, arguments, function* ({ detail: { userId: t2, muted: e2 } }) {
      ri(t2, this.signaling.userId) && (this.signaling.localVideoMutedByLocalUser || (yield this.Ir("muted" === e2, true), this.videoMutedByRoomOwner = "muted" === e2));
    });
  }
  Ns(_0) {
    return __async(this, arguments, function* ({ detail: { userId: t2, muted: e2 } }) {
      ri(t2, this.signaling.userId) && (this.signaling.localOutputMutedByLocalUser || (yield this.Tr("muted" === e2, true), this.outputMutedByRoomOwner = "muted" === e2));
    });
  }
  isScreenShareActive() {
    return this.inScreenShare;
  }
  startScreenShare() {
    return __async(this, null, function* () {
      let t2 = null;
      try {
        t2 = yield navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        const e2 = t2.getVideoTracks()[0], i2 = t2.getAudioTracks()[0], s2 = document.getElementById(this.localVideoElementId);
        if (!s2) throw Error("Video element not found");
        s2.srcObject = t2, this.Ys(s2, true), this.Ks(this.videoProducer, e2), this.options.enableAudioMerge && i2 && this.mergeAudioInput({ stream: t2 }), this.inScreenShare = true, this.screenShareTrack = e2, e2.onended = () => this.stopScreenShare(), this.dispatchEvent(new CustomEvent(Le.SCREEN_SHARE_STARTED));
      } catch (e2) {
        console.error("Error sharing screen:", e2), t2 && t2.getTracks().forEach((t3) => {
          "ended" !== t3.readyState && (t3.stop(), Ne.debug("Stopped orphaned screen share track:", t3.id));
        });
      }
    });
  }
  stopScreenShare() {
    return __async(this, null, function* () {
      if (this.screenShareTrack && (this.screenShareTrack.onended = null, "ended" !== this.screenShareTrack.readyState && (this.screenShareTrack.stop(), Ne.debug("Stopped screen share track:", this.screenShareTrack.id)), this.screenShareTrack = null), this.options.enableAudioMerge) {
        const t3 = document.getElementById(this.localVideoElementId);
        if (t3 && t3.srcObject) {
          const e2 = t3.srcObject;
          e2.getAudioTracks()[0] && this.unmergeAudioInput({ stream: e2 });
        }
      }
      let t2 = this.localVideoDeviceId;
      if (!t2 && this.deviceManager) try {
        const e2 = yield this.deviceManager.listVideoDevices();
        e2.length > 0 && (t2 = e2[0].deviceId, Ne.debug("Using fallback video device:", t2));
      } catch (mr) {
        Ne.warn("Failed to get fallback video device:", mr);
      }
      t2 ? this.setLocalVideoDevice({ videoDeviceId: t2 }) : Ne.warn("No video device available to restore after screen share"), this.inScreenShare = false, this.dispatchEvent(new CustomEvent(Le.SCREEN_SHARE_STOPPED));
    });
  }
  getAttendees() {
    return __async(this, null, function* () {
      if (!this.signaling || !this.signaling.roomName) throw Error("Must create room before getting attendees");
      return yield this.signaling.getAttendees();
    });
  }
  sendDataMessage(_0) {
    return __async(this, arguments, function* ({ userId: t2, message: e2, preventReturn: i2 }) {
      if (!this.signaling) throw Error("Must create room before sending data message");
      if (!e2) throw Error("Message is required");
      return yield this.signaling.sendDataMessage({ userId: t2, message: e2, preventReturn: i2 });
    });
  }
  mergeAudioInput({ stream: t2 }) {
    if (this.audioContext || (this.audioContext = new AudioContext()), !t2) throw Error("Stream is required");
    if (!this.audioMerger) throw Error("Audio Merging is not enabled");
    this.audioMerger.addStream(t2), this.dispatchEvent(new CustomEvent(Le.AUDIO_STREAM_ADDED, { detail: this.audioMerger }));
  }
  unmergeAudioInput({ stream: t2 }) {
    if (!this.audioMerger) throw Error("Audio Merging is not enabled");
    if (!t2) throw Error("Stream is required");
    this.audioMerger.removeStream(t2), this.dispatchEvent(new CustomEvent(Le.AUDIO_STREAM_REMOVED, { detail: this.audioMerger }));
  }
  startRecording(_0) {
    return __async(this, arguments, function* ({ type: t2, options: e2 }) {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start recording");
      if (!this.signaling) throw Error("Must create room before starting recording");
      if (this.transcribingId) throw Error("Transcribing is in progress");
      if (this.recordingId) throw Error("Recording is already in progress");
      if (this.streamingId) throw Error("Streaming is in progress");
      if (e2 && (this.autoCompose = !!e2.autoCompose, e2.useContext && !e2.transcribe)) throw Error("useContext can only be true if transcribe is also true");
      let i2, s2;
      if (this.recordingType = t2, "cloud" !== t2) throw this.recordingType = null, this.recordingId = null, Error('Recording type not supported only "cloud" is currently supported');
      {
        e2 && e2.transcribe && (s2 = {}, s2.transcribe = true, e2.useContext && (s2.useContext = true), e2.postMeetingSummary && (s2.postMeetingSummary = true)), e2 && e2.legacy && (s2 = s2 || {}, s2.legacy = true);
        const t3 = yield this.signaling.startRecording(s2);
        if (!t3 || !t3.recordingId) throw Error("Failed to start recording");
        i2 = t3.recordingId, this.recordingId = i2, e2 && e2.transcribe && (this.transcribingId = t3?.transcribingId || t3?.status?.transcribingId, !t3?.transcribingId && t3?.status?.transcribingId && console.warn("[Client] transcribingId found in response.status instead of response root"));
      }
      return this.recordingId;
    });
  }
  stopRecording() {
    return __async(this, null, function* () {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start recording");
      if (!this.signaling) throw Error("Must create room before stopping recording");
      if (!this.recordingId) throw Error("Recording is not in progress");
      let t2;
      if ("cloud" === this.recordingType) {
        if (t2 = yield this.signaling.stopRecording({ recordingId: this.recordingId, transcribingId: this.transcribingId }), !t2 || !t2.recordingId) throw Error("Failed to stop recording");
        this.autoCompose && (yield this.startComposition({ recordingId: this.recordingId }), this.autoCompose = false);
      }
      return this.recordingId = null, this.transcribingId && (this.transcribingId = null), t2;
    });
  }
  startTranscribing() {
    return __async(this, null, function* () {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start transcribing");
      if (!this.signaling) throw Error("Must create room before starting transcribing");
      if (this.recordingId) throw Error("Recording is already in progress");
      if (this.streamingId) throw Error("Streaming is in progress");
      if (this.transcribingId) throw Error("Transcribing is already in progress");
      let t2;
      const e2 = yield this.signaling.startTranscribing();
      if (!e2 || !e2.transcribingId) throw Error("Failed to start transcribing");
      return t2 = e2.transcribingId, this.isLocalUserRoomOwner() && (this.transcribingId = t2), this.transcribingId;
    });
  }
  stopTranscribing() {
    return __async(this, null, function* () {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start transcribing");
      if (!this.signaling) throw Error("Must create room before stopping transcribing");
      if (!this.transcribingId) throw Error("Transcribing is not in progress");
      const t2 = yield this.signaling.stopTranscribing({ transcribingId: this.transcribingId });
      return this.transcribingId = null, t2;
    });
  }
  startStreaming(_0) {
    return __async(this, arguments, function* ({ type: t2, options: e2 }) {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start streaming");
      if (!this.signaling) throw Error("Must create room before starting streaming");
      if (this.recordingId) throw Error("Recording is in progress");
      if (this.transcribingId) throw Error("Transcribing is in progress");
      if (this.streamingId) throw Error("Streaming is already in progress");
      let i2;
      if (this.streamingType = t2, "cloud" !== t2) throw this.streamingType = null, this.streamingId = null, Error('Streaming type not supported only "cloud" is currently supported');
      return i2 = (yield this.signaling.startStreaming(e2)).streamingId, this.isLocalUserRoomOwner() && (this.streamingId = i2), this.streamingId;
    });
  }
  stopStreaming() {
    return __async(this, null, function* () {
      if (!this.isRoomOwner) throw Error("Must be the room owner to stop streaming");
      if (!this.signaling) throw Error("Must create room before stopping streaming");
      if (!this.streamingId) throw Error("Streaming is not in progress");
      let t2;
      return "cloud" === this.streamingType && (t2 = yield this.signaling.stopStreaming({ streamingId: this.streamingId })), this.streamingId = null, this.streamingType = null, t2;
    });
  }
  switchStreamingUser(_0) {
    return __async(this, arguments, function* ({ userToSwitchTo: t2 }) {
      if (!this.isRoomOwner) throw Error("Must be the room owner to switch streaming user");
      if (!this.signaling) throw Error("Must create room before switching streaming user");
      if (!this.streamingId) throw Error("Streaming is not in progress");
      if (!t2) throw Error("User to switch to is required");
      let e2;
      return "cloud" === this.streamingType && (e2 = yield this.signaling.switchStreamingUser({ streamingId: this.streamingId, userToSwitchTo: t2 })), e2;
    });
  }
  startComposition(_0) {
    return __async(this, arguments, function* ({ recordingId: t2 }) {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start recording");
      if (!this.signaling) throw Error("Must create room before starting composition");
      if (!t2) throw Error("Recording Id is required");
      return this.signaling.startComposition({ recordingId: t2 });
    });
  }
  getCompositionStatus(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      if (!this._s) throw Error("Must create client before getting composition");
      if (!t2) throw Error("Recording Id is required");
      if (!e2) throw Error("Room Name is required");
      if (!i2) throw Error("User Id is required");
      return yield this._s.getCompositionStatus({ recordingId: t2, roomName: e2, userId: i2 });
    });
  }
  getCompositionUrl(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      if (!this._s) throw Error("Must create client before getting composition");
      if (!t2) throw Error("Recording Id is required");
      if (!e2) throw Error("Room Name is required");
      if (!i2) throw Error("User Id is required");
      return yield this._s.getCompositionUrl({ recordingId: t2, roomName: e2.toLowerCase(), userId: i2.toLowerCase() });
    });
  }
  getTranscriptionStatus(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      if (!this._s) throw Error("Must create client before getting transcription");
      if (!t2) throw Error("Recording Id is required");
      if (!e2) throw Error("Room Name is required");
      if (!i2) throw Error("User Id is required");
      return yield this._s.getTranscriptionStatus({ recordingId: t2, roomName: e2, userId: i2 });
    });
  }
  getTranscriptionSummary(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, userId: e2 }) {
      if (!this._s) throw Error("Must create client before getting transcription summary");
      if (!t2) throw Error("Recording Id is required");
      return yield this._s.getTranscriptionSummary({ recordingId: t2, userId: e2 });
    });
  }
  getRecordingUrls(_0) {
    return __async(this, arguments, function* ({ recordingId: t2, roomName: e2, userId: i2 }) {
      if (!this._s) throw Error("Must create client before getting recordings");
      if (!t2) throw Error("Recording Id is required");
      if (!e2) throw Error("Room Name is required");
      if (!i2) throw Error("User Id is required");
      return yield this._s.getRecordingUrls({ recordingId: t2, roomName: e2, userId: i2 });
    });
  }
  getStreamingUrls(_0) {
    return __async(this, arguments, function* ({ streamingId: t2, roomName: e2, userId: i2 }) {
      if (!this._s) throw Error("Must create client before getting recordings");
      if (!t2) throw Error("Streaming Id is required");
      if (!e2) throw Error("Room Name is required");
      if (!i2) throw Error("User Id is required");
      return yield this._s.getStreamingUrls({ streamingId: t2, roomName: e2, userId: i2 });
    });
  }
  getSignedCompositionUrl(_0) {
    return __async(this, arguments, function* ({ url: t2 }) {
      if (!this._s) throw Error("Must create client before getting composition");
      if (!t2) throw Error("Url is required");
      return yield this._s.getSignedCompositionUrl({ url: t2 });
    });
  }
  getCompositionList(_0) {
    return __async(this, arguments, function* ({ roomName: t2, userId: e2 }) {
      if (!this._s) throw Error("Must create client before getting composition list");
      if (!t2) throw Error("Room Name is required");
      if (!e2) throw Error("User Id is required");
      return yield this._s.getCompositionList({ roomName: t2, userId: e2 });
    });
  }
  startTranscription(_0) {
    return __async(this, arguments, function* ({ recordingId: t2 }) {
      if (!this.isRoomOwner) throw Error("Must be the room owner to start transcription");
      if (!this.signaling) throw Error("Must create room before starting transcription");
      if (!t2) throw Error("Recording Id is required");
      return this.signaling.startTranscription({ recordingId: t2 });
    });
  }
  getRoomStats() {
    return __async(this, null, function* () {
      if (!this.signaling) throw Error("Must create room before getting stats");
      if (!this.signaling.isOwner) throw Error("Must be the room owner to get room stats");
      return yield this.signaling.getRoomStats();
    });
  }
  sendChatMessage(_0) {
    return __async(this, arguments, function* ({ message: t2 }) {
      if (!this.signaling) throw Error("Must create room before sending chat message");
      if (!t2) throw Error("Message is required");
      yield this.signaling.sendChatMessage({ message: t2 });
    });
  }
  getChatHistory(_0) {
    return __async(this, arguments, function* ({ cursor: t2 }) {
      if (!this.signaling) throw Error("Must create room before getting chat history");
      return yield ((_02) => __async(this, [_02], function* ({ roomName: t3, roomRegion: e2, token: i2, cursor: s2 }) {
        if (!t3 || !e2 || !i2) throw Error("roomName, roomRegion, token are required");
        try {
          const r2 = `https://${e2}${Ve.serverRegionUrl}${Be.GET_CHAT_HISTORY}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ roomName: t3, token: i2, cursor: s2 }) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomName: this.signaling.roomName, roomRegion: this.signaling.roomRegion, token: this.signaling.token, cursor: t2 });
    });
  }
  uploadFile(_0) {
    return __async(this, arguments, function* ({ file: t2, location: e2, resourceType: i2, appData: s2 }) {
      if (!this.signaling) throw Error("Must create room before uploading file");
      if (!t2) throw Error("File is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomName: t3, roomRegion: e3, token: i3, file: s3, location: r2, resourceType: o2, appData: n2 }) {
        if (!e3 || !i3 || !s3) throw Error("roomRegion, token, file are required");
        try {
          const { name: a2, type: c2 } = s3, { url: h2, fileId: d2, s3Key: l2 } = yield ((_03) => __async(this, [_03], function* ({ roomRegion: t4, token: e4, fileName: i4 }) {
            if (!t4 || !e4) throw Error("roomRegion, fileName, token are required");
            try {
              const s4 = `https://${t4}${Ve.serverRegionUrl}${Be.GET_UPLOAD_URL}`, r3 = yield fetch(s4, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e4, fileName: i4 }) });
              if (!r3.ok) throw Error("HTTP error! status: " + r3.status);
              return yield r3.json();
            } catch (mr) {
              throw He.error(mr), mr;
            }
          }))({ roomRegion: e3, token: i3, fileName: a2 });
          let u2 = c2;
          u2 || (u2 = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", gif: "image/gif", bmp: "image/bmp", webp: "image/webp", svg: "image/svg+xml", pdf: "application/pdf", doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", xls: "application/vnd.ms-excel", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ppt: "application/vnd.ms-powerpoint", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", txt: "text/plain", md: "text/markdown", html: "text/html", css: "text/css", js: "application/javascript", json: "application/json", xml: "application/xml", zip: "application/zip", tar: "application/x-tar", gz: "application/gzip", mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", mp4: "video/mp4", webm: "video/webm", avi: "video/x-msvideo", flv: "video/x-flv", mov: "video/quicktime", wmv: "video/x-ms-wmv" }[a2.split(".").pop()] || "application/octet-stream");
          let p3 = { "Content-Type": u2 };
          return yield fetch(h2, { method: "PUT", body: s3, headers: p3 }), yield ((_03) => __async(this, [_03], function* ({ roomName: t4, roomRegion: e4, token: i4, fileName: s4, location: r3, s3Path: o3, fileId: n3, resourceType: a3, appData: c3 }) {
            if (!(t4 && e4 && i4 && s4 && r3 && o3 && n3)) throw Error("roomName, roomRegion, fileName, token are required");
            try {
              const h3 = `https://${e4}${Ve.serverRegionUrl}${Be.FILE_UPLOADED}`, d3 = yield fetch(h3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ roomName: t4, token: i4, fileName: s4, location: r3, s3Path: o3, fileId: n3, resourceType: a3, appData: c3 }) });
              if (!d3.ok) throw Error("HTTP error! status: " + d3.status);
              return yield d3.json();
            } catch (mr) {
              throw He.error(mr), mr;
            }
          }))({ roomName: t3, roomRegion: e3, token: i3, fileName: a2, location: r2, s3Path: l2, fileId: d2, resourceType: o2, appData: n2 }), { fileId: d2 };
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ file: t2, location: e2, roomName: this.signaling.roomName, roomRegion: this.signaling.roomRegion, token: this.signaling.token, resourceType: i2, appData: s2 });
    });
  }
  modifyFile(_0) {
    return __async(this, arguments, function* ({ file: t2, fileId: e2, appData: i2 }) {
      if (!this.signaling) throw Error("Must create room before modifying file");
      if (!t2) throw Error("File is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e3, fileId: i3, file: s2, appData: r2 }) {
        if (!(t3 && e3 && i3 && s2)) throw Error("Invalid parameters");
        try {
          const { type: o2 } = s2, { url: n2 } = yield ((_03) => __async(this, [_03], function* ({ roomRegion: t4, token: e4, fileId: i4, type: s3 }) {
            if (!(t4 && e4 && i4 && s3)) throw Error("roomRegion, fileId, token and mine type are required");
            try {
              const r3 = `https://${t4}${Ve.serverRegionUrl}${Be.GET_MODIFY_URL}`, o3 = yield fetch(r3, { method: "POST", headers: { "Content-Type": s3 }, body: JSON.stringify({ token: e4, fileId: i4, type: s3 }) });
              if (!o3.ok) throw Error("HTTP error! status: " + o3.status);
              return yield o3.json();
            } catch (mr) {
              throw He.error(mr), mr;
            }
          }))({ roomRegion: t3, token: e3, fileId: i3, type: o2 });
          yield fetch(n2, { method: "PUT", body: s2, headers: { "Content-Type": o2 } }), yield ((_03) => __async(this, [_03], function* ({ roomRegion: t4, token: e4, fileId: i4, newName: s3, appData: r3 }) {
            if (!t4 || !e4 || !i4) throw Error("roomRegion, fileId, token are required");
            try {
              const o3 = `https://${t4}${Ve.serverRegionUrl}${Be.FILE_MODIFIED}`, n3 = yield fetch(o3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e4, fileId: i4, newName: s3, appData: r3 }) });
              if (!n3.ok) throw Error("HTTP error! status: " + n3.status);
              return yield n3.json();
            } catch (mr) {
              throw He.error(mr), mr;
            }
          }))({ roomRegion: t3, token: e3, fileId: i3, newName: s2.name, appData: r2 });
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ file: t2, fileId: e2, roomRegion: this.signaling.roomRegion, token: this.signaling.token, appData: i2 });
    });
  }
  updateFilename(_0) {
    return __async(this, arguments, function* ({ fileId: t2, newFilename: e2 }) {
      if (!this.signaling) throw Error("Must create room before updating filename");
      if (!t2 || !e2) throw Error("File ID and new filename are required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e3, fileId: i2, newFilename: s2 }) {
        if (!(t3 && e3 && i2 && s2)) throw Error("roomRegion, token, fileId and newFilename are required");
        try {
          const r2 = `https://${t3}${Ve.serverRegionUrl}${Be.UPDATE_FILENAME}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e3, fileId: i2, newFilename: s2 }) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ fileId: t2, newFilename: e2, roomRegion: this.signaling.roomRegion, token: this.signaling.token });
    });
  }
  getAllUsersFiles() {
    return __async(this, null, function* () {
      if (!this.signaling) throw Error("Must create room before getting files");
      return yield ((_0) => __async(this, [_0], function* ({ roomRegion: t2, token: e2, roomName: i2 }) {
        if (!t2 || !e2) throw Error("roomRegion, token are required");
        try {
          const s2 = `https://${t2}${Ve.serverRegionUrl}${Be.GET_ALL_USERS_FILES}`, r2 = { token: e2 };
          null != i2 && (r2.roomName = i2);
          const o2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r2) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, roomName: this.isRoomOwner ? null : this.signaling.roomName });
    });
  }
  getAllUsersFilesSinceLastSync(_0) {
    return __async(this, arguments, function* ({ lastSyncTime: t2 }) {
      if (!this.signaling) throw Error("Must create room before getting files");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, roomName: e2, token: i2, lastSyncTime: s2 }) {
        if (!(t3 && i2 && s2 && e2)) throw Error("roomRegion, token are required");
        try {
          const r2 = `https://${t3}${Ve.serverRegionUrl}${Be.GET_ALL_USERS_FILES_SINCE_SYNC}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: i2, lastSyncTime: s2, roomName: e2 }) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, lastSyncTime: t2, roomName: this.signaling.roomName });
    });
  }
  getUsersFilesOfType(_0) {
    return __async(this, arguments, function* ({ resourceType: t2 }) {
      if (!this.signaling) throw Error("Must create room before getting files");
      return yield ((_02) => __async(this, [_02], function* ({ roomName: t3, roomRegion: e2, token: i2, resourceType: s2 }) {
        if (!e2 || !i2 || !s2) throw Error("roomRegion, token are required");
        try {
          const r2 = `https://${e2}${Ve.serverRegionUrl}${Be.GET_USERS_FILES_FOR_TYPE}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ roomName: t3, token: i2, resourceType: s2 }) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomName: this.signaling.roomName, roomRegion: this.signaling.roomRegion, token: this.signaling.token, resourceType: t2 });
    });
  }
  getUsersFileTypes() {
    return __async(this, null, function* () {
      if (!this.signaling) throw Error("Must create room before getting file types");
      return yield ((_0) => __async(this, [_0], function* ({ roomRegion: t2, token: e2, roomName: i2 }) {
        if (!e2 || !t2 || !i2) throw Error("Invalid parameters");
        const s2 = `https://${t2}${Ve.serverRegionUrl}${Be.GET_USERS_FILE_TYPES}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, roomName: i2 }) }), o2 = yield r2.json();
        if (!r2.ok) throw Error(o2.error);
        return o2.resourceTypes;
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, roomName: this.signaling.roomName });
    });
  }
  createFolder(_0) {
    return __async(this, arguments, function* ({ location: t2 }) {
      if (!this.signaling) throw Error("Must create room before creating folder");
      if (!t2) throw Error("Location is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e2, location: i2, roomName: s2 }) {
        if (!(t3 && e2 && i2 && s2)) throw Error("roomRegion,location, token are required");
        try {
          const r2 = `https://${t3}${Ve.serverRegionUrl}${Be.CREATE_FOLDER}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, location: i2, roomName: s2 }) });
          if (!o2.ok) throw Error("HTTP error! status: " + o2.status);
          return yield o2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, roomName: this.signaling.roomName, token: this.signaling.token, location: t2 });
    });
  }
  deleteFolder(_0) {
    return __async(this, arguments, function* ({ location: t2 }) {
      if (!this.signaling) throw Error("Must create room before creating folder");
      if (!t2) throw Error("Location is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e2, location: i2 }) {
        if (!t3 || !e2 || !i2) throw Error("roomRegion,location, token are required");
        try {
          const s2 = `https://${t3}${Ve.serverRegionUrl}${Be.DELETE_FOLDER}`, r2 = yield fetch(s2, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, location: i2 }) });
          if (!r2.ok) throw Error("HTTP error! status: " + r2.status);
          return yield r2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, location: t2 });
    });
  }
  deleteFile(_0) {
    return __async(this, arguments, function* ({ fileId: t2 }) {
      if (!this.signaling) throw Error("Must create room before deleting file");
      if (!t2) throw Error("fileId is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e2, fileId: i2 }) {
        if (!t3 || !e2 || !i2) throw Error("roomRegion, fileId, token are required");
        try {
          const s2 = `https://${t3}${Ve.serverRegionUrl}${Be.DELETE_FILE}`, r2 = yield fetch(s2, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, fileId: i2 }) });
          if (!r2.ok) throw Error("HTTP error! status: " + r2.status);
          return yield r2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2 });
    });
  }
  moveFile(_0) {
    return __async(this, arguments, function* ({ fileId: t2, newLocation: e2 }) {
      if (!this.signaling) throw Error("Must create room before moving file");
      if (!t2) throw Error("fileId is required");
      if (!e2) throw Error("newLocation is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e3, fileId: i2, location: s2 }) {
        if (!(i2 && s2 && e3 && t3)) throw Error("Invalid parameters");
        const r2 = `https://${t3}${Ve.serverRegionUrl}${Be.MOVE_FILE}`, o2 = yield fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e3, fileId: i2, location: s2 }) }), n2 = yield o2.json();
        if (!o2.ok) throw Error(n2.error);
        return n2;
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2, location: e2 });
    });
  }
  shareFile(_0) {
    return __async(this, arguments, function* ({ fileId: t2, userIds: e2, sharedRoom: i2 }) {
      if (!this.signaling) throw Error("Must create room before sharing file");
      if (!t2) throw Error("fileId is required");
      if (!e2 || !Array.isArray(e2)) throw Error("userIds is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e3, fileId: i3, userIds: s2, sharedRoom: r2 }) {
        if (!(i3 && s2 && e3 && t3)) throw Error("Invalid parameters");
        const o2 = `https://${t3}${Ve.serverRegionUrl}${Be.SHARE_FILE}`, n2 = yield fetch(o2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e3, fileId: i3, userIds: s2, sharedRoom: r2 }) }), a2 = yield n2.json();
        if (!n2.ok) throw Error(a2.error);
        return a2;
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2, userIds: e2, sharedRoom: i2 });
    });
  }
  getFileURL(_0) {
    return __async(this, arguments, function* ({ fileId: t2 }) {
      if (!this.signaling) throw Error("Must create room before getting file url");
      if (!t2) throw Error("fileId is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e2, fileId: i2 }) {
        if (!i2 || !e2 || !t3) throw Error("Invalid parameters");
        const s2 = `https://${t3}${Ve.serverRegionUrl}${Be.GET_SIGNED_FILE_URL}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, fileId: i2 }) }), o2 = yield r2.json();
        if (!r2.ok) throw Error(o2.error);
        return o2.signedUrl;
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2 });
    });
  }
  getFileMetadata(_0) {
    return __async(this, arguments, function* ({ fileId: t2 }) {
      if (!this.signaling) throw Error("Must create room before getting file metadata");
      if (!t2) throw Error("fileId is required");
      return yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e2, fileId: i2 }) {
        if (!t3 || !e2 || !i2) throw Error("roomRegion, fileId, token are required");
        try {
          const s2 = `https://${t3}${Ve.serverRegionUrl}${Be.GET_FILE_METADATA}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2, fileId: i2 }) });
          if (!r2.ok) throw Error("HTTP error! status: " + r2.status);
          return yield r2.json();
        } catch (mr) {
          throw He.error(mr), mr;
        }
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2 });
    });
  }
  getRoomSummary(_0) {
    return __async(this, arguments, function* ({ fileId: t2 }) {
      if (!this.signaling) throw Error("Must create room before enriching room summary");
      if (!t2) throw Error("fileId is required");
      let e2;
      try {
        e2 = yield ((_02) => __async(this, [_02], function* ({ roomRegion: t3, token: e3, fileId: i2 }) {
          if (!i2 || !e3 || !t3) throw Error("Invalid parameters");
          const s2 = `https://${t3}${Ve.serverRegionUrl}${Be.ROOM_SUMMARY}`, r2 = yield fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e3, fileId: i2 }) }), o2 = yield r2.json();
          if (!r2.ok) throw Error(o2.error);
          return o2;
        }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token, fileId: t2 });
      } catch (i2) {
        throw console.error("Error generating room summary:", i2), Error("Failed to generate room summary");
      }
      return e2;
    });
  }
  getSymbols() {
    return __async(this, null, function* () {
      if (!this.signaling) throw Error("Must create room before getting symbols");
      return yield ((_0) => __async(this, [_0], function* ({ roomRegion: t2, token: e2 }) {
        if (!e2 || !t2) throw Error("Invalid parameters");
        const i2 = `https://${t2}${Ve.serverRegionUrl}${Be.GET_SYMBOLS}`, s2 = yield fetch(i2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: e2 }) }), r2 = yield s2.json();
        if (!s2.ok) throw Error(r2.error);
        return r2;
      }))({ roomRegion: this.signaling.roomRegion, token: this.signaling.token });
    });
  }
  addStoredRoom(_0) {
    return __async(this, arguments, function* ({ userId: t2, storedRoom: e2 }) {
      if (!this._s || !t2) throw Error("Must create client before adding stored room");
      return yield this._s.addStoredRoomToStorage({ storedRoom: e2, userId: Ye(t2) });
    });
  }
  updateStoredRoom(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2, updates: i2 }) {
      if (!this._s || !t2) throw Error("Must create client before updating stored room");
      return yield this._s.updateStoredRoomInStorage({ alias: e2, updates: i2, userId: Ye(t2) });
    });
  }
  getStoredRooms(_0) {
    return __async(this, arguments, function* ({ userId: t2 }) {
      if (!this._s || !t2) throw Error("Must create client before adding stored room");
      return yield this._s.getStoredRoomsFromStorage({ userId: Ye(t2) });
    });
  }
  getStoredRoom(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2 }) {
      if (!this._s || !t2) throw Error("Must create client before getting stored room");
      return yield this._s.getStoredRoomFromStorage({ userId: Ye(t2), alias: e2 });
    });
  }
  deleteStoredRoom(_0) {
    return __async(this, arguments, function* ({ userId: t2, alias: e2 }) {
      if (!this._s || !t2) throw Error("Must create client before adding stored room");
      return yield this._s.deleteStoredRoomFromStorage({ alias: e2, userId: Ye(t2) });
    });
  }
  getStats() {
    return __async(this, null, function* () {
      return yield this.manager.getStats();
    });
  }
  getBandwidthMonitor() {
    return this.bandwidthMonitor;
  }
  getLookupUrls() {
    return __async(this, null, function* () {
      if (this.signaling) return yield this.signaling.getLookupUrls();
    });
  }
  getRoomUserIds() {
    return __async(this, null, function* () {
      if (!this.signaling || !this._s) throw Error("Must create room before getting room user ids");
      if (!this.isRoomOwner) throw Error("Must be the room owner to get userIds");
      return yield this._s.getAllUserIdsForRoom({ roomName: this.signaling.roomName, userId: this.signaling.userId });
    });
  }
};

// node_modules/@hiyve/core/dist/index.js
var O2 = Object.defineProperty;
var y2 = (h2, e2, i2) => e2 in h2 ? O2(h2, e2, { enumerable: true, configurable: true, writable: true, value: i2 }) : h2[e2] = i2;
var m2 = (h2, e2, i2) => y2(h2, typeof e2 != "symbol" ? e2 + "" : e2, i2);
var I2 = "[HiyveCore]";
function f2() {
  var h2;
  if (typeof process < "u" && ((h2 = process.env) == null ? void 0 : h2.HIYVE_DEBUG) === "true")
    return true;
  if (typeof window < "u") {
    if (window.__HIYVE_DEBUG__)
      return true;
    try {
      if (localStorage.getItem("HIYVE_DEBUG") === "true")
        return true;
    } catch {
    }
  }
  return false;
}
var p2 = {
  /**
   * Log a debug message (equivalent to console.log)
   */
  log(...h2) {
    f2() && console.log(I2, ...h2);
  },
  /**
   * Log a warning message (equivalent to console.warn)
   */
  warn(...h2) {
    f2() && console.warn(I2, ...h2);
  },
  /**
   * Log an error message - ALWAYS logs (errors should always be visible)
   */
  error(...h2) {
    console.error(I2, ...h2);
  },
  /**
   * Check if debug mode is currently enabled
   */
  isEnabled() {
    return f2();
  },
  /**
   * Enable debug mode at runtime
   */
  enable() {
    typeof window < "u" && (window.__HIYVE_DEBUG__ = true);
  },
  /**
   * Disable debug mode at runtime
   */
  disable() {
    typeof window < "u" && (window.__HIYVE_DEBUG__ = false);
  }
};
var S2 = {
  DOMINANT: "dominant",
  HAND_RAISED: "hand-raised"
};
var T2 = "hiyve-selected-devices";
var A2 = 0;
var g2 = () => `msg-${++A2}`;
var _2 = 0;
var M2 = () => `trans-${++_2}`;
function D2() {
  try {
    const h2 = localStorage.getItem(T2);
    if (h2) {
      const e2 = JSON.parse(h2);
      if (typeof e2 == "object" && e2 !== null)
        return {
          videoInput: typeof e2.videoInput == "string" ? e2.videoInput : void 0,
          audioInput: typeof e2.audioInput == "string" ? e2.audioInput : void 0,
          audioOutput: typeof e2.audioOutput == "string" ? e2.audioOutput : void 0
        };
    }
  } catch {
  }
  return {};
}
function w2(h2, e2) {
  try {
    const i2 = D2();
    i2[h2] = e2, localStorage.setItem(T2, JSON.stringify(i2));
  } catch {
  }
}
function E2() {
  return {
    connection: { isConnected: false, isConnecting: false, error: null },
    room: { room: null, isOwner: false, isInRoom: false },
    client: { client: null },
    participants: { participants: /* @__PURE__ */ new Map(), localUserId: null },
    localMedia: { isAudioMuted: false, isVideoMuted: false, isOutputMuted: false, isScreenSharing: false },
    recording: { isRecording: false, isRecordingStarting: false, recordingId: null, recordingStartTime: null, responseId: null, error: null },
    streaming: { isStreaming: false, isStreamingStarting: false, streamingId: null, featuredUserId: null, streamingStartTime: null, streamingUrl: null, error: null },
    transcription: { isTranscribing: false, isTranscriptionStarting: false, transcriptions: [] },
    chat: { messages: [], unreadCount: 0 },
    waitingRoom: { waitingUsers: [], isWaitingForAdmission: false, wasRejected: false },
    waitForHost: { isWaiting: false, roomName: null, timeout: null, elapsedTime: 0 },
    audioProcessing: { feedbackDetected: false, audioValidation: null, gainNode: null, audioInputMonitor: null },
    layout: { dominantSpeaker: null },
    handRaise: { raisedHands: /* @__PURE__ */ new Map() },
    intelligence: {
      isActive: false,
      coachingEnabled: false,
      coachingVariant: "general",
      realtimeHints: [],
      talkRatio: { speaking: 50, listening: 50 },
      currentTopic: null,
      topicShifts: []
    },
    aiChat: { messages: [] }
  };
}
var N2 = class {
  constructor(e2) {
    m2(this, "state");
    m2(this, "client", null);
    m2(this, "localUserIdInternal", null);
    m2(this, "roomInternal", null);
    m2(this, "isOwnerInternal", false);
    m2(this, "waitingRoomEnabledInternal", false);
    m2(this, "waitingRoomPollInterval", null);
    m2(this, "options");
    m2(this, "globalListeners", /* @__PURE__ */ new Set());
    m2(this, "sliceListeners", /* @__PURE__ */ new Map());
    m2(this, "sliceSnapshots", /* @__PURE__ */ new Map());
    this.options = __spreadProps(__spreadValues({}, e2), {
      localVideoElementId: e2.localVideoElementId ?? "local-video",
      persistDeviceChanges: e2.persistDeviceChanges ?? false
    }), this.state = E2(), this.cacheSliceSnapshots();
  }
  // ==================== SUBSCRIPTION API ====================
  /** Subscribe to all state changes. Returns unsubscribe function. */
  subscribe(e2) {
    return this.globalListeners.add(e2), () => {
      this.globalListeners.delete(e2);
    };
  }
  /** Subscribe to changes in a specific state slice. Returns unsubscribe function. */
  subscribeToSlice(e2, i2) {
    let t2 = this.sliceListeners.get(e2);
    return t2 || (t2 = /* @__PURE__ */ new Set(), this.sliceListeners.set(e2, t2)), t2.add(i2), () => {
      t2.delete(i2);
    };
  }
  /** Get the full current state (immutable snapshot). */
  getState() {
    return this.state;
  }
  /** Get a specific state slice (immutable snapshot). */
  getSlice(e2) {
    return this.state[e2];
  }
  /** Get the raw Client instance (for advanced usage). */
  getClient() {
    return this.client;
  }
  // ==================== STATE UPDATE INTERNALS ====================
  updateSlice(e2, i2) {
    const t2 = this.state[e2], n2 = typeof i2 == "function" ? i2(t2) : i2;
    t2 !== n2 && (this.state = __spreadProps(__spreadValues({}, this.state), { [e2]: n2 }), this.sliceSnapshots.set(e2, n2), this.notifySlice(e2), this.notifyGlobal());
  }
  cacheSliceSnapshots() {
    for (const e2 of Object.keys(this.state))
      this.sliceSnapshots.set(e2, this.state[e2]);
  }
  notifyGlobal() {
    for (const e2 of this.globalListeners)
      e2();
  }
  notifySlice(e2) {
    const i2 = this.sliceListeners.get(e2);
    if (i2)
      for (const t2 of i2)
        t2();
  }
  // ==================== EVENT HANDLERS ====================
  setupEventHandlers(e2) {
    const i2 = (t2, n2) => {
      e2.addEventListener(t2, n2);
    };
    i2(Le.CONNECTED, () => {
      this.updateSlice("connection", (t2) => __spreadProps(__spreadValues({}, t2), { isConnected: true }));
    }), i2(Le.DISCONNECTED, () => {
      this.updateSlice("connection", (t2) => __spreadProps(__spreadValues({}, t2), { isConnected: false }));
    }), i2(Le.ERROR, (t2) => {
      var a2, s2;
      const { error: n2 } = t2.detail;
      this.updateSlice("connection", (l2) => __spreadProps(__spreadValues({}, l2), { error: n2 || "Unknown error" })), (s2 = (a2 = this.options).onError) == null || s2.call(a2, new Error(n2));
    }), i2(Le.ROOM_JOINED, (t2) => {
      const n2 = t2.detail;
      this.roomInternal = n2, this.updateSlice("room", (a2) => __spreadProps(__spreadValues({}, a2), { room: n2, isInRoom: true }));
    }), i2(Le.ROOM_CLOSED, () => {
      this.resetState();
    }), i2(Le.USER_JOINED_ROOM, (t2) => {
      const { userId: n2, externalUserId: a2 } = t2.detail;
      this.updateSlice("chat", (s2) => __spreadProps(__spreadValues({}, s2), {
        messages: [
          ...s2.messages,
          {
            id: g2(),
            userId: "system",
            content: `${a2 || n2} joined the room`,
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }
        ]
      })), this.fetchWaitingRoomUsers();
    }), i2(Le.USER_DISCONNECTED, (t2) => {
      const { userId: n2 } = t2.detail;
      this.updateSlice("participants", (a2) => {
        const s2 = new Map(a2.participants);
        return s2.delete(n2), __spreadProps(__spreadValues({}, a2), { participants: s2 });
      }), this.updateSlice("chat", (a2) => __spreadProps(__spreadValues({}, a2), {
        messages: [
          ...a2.messages,
          {
            id: g2(),
            userId: "system",
            content: `${n2} left the room`,
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }
        ]
      })), this.fetchWaitingRoomUsers(), this.updateSlice("handRaise", (a2) => {
        if (a2.raisedHands.has(n2)) {
          const s2 = new Map(a2.raisedHands);
          return s2.delete(n2), { raisedHands: s2 };
        }
        return a2;
      });
    }), i2(Le.MEDIA_TRACK_ADDED, (t2) => {
      const { userId: n2, track: a2, kind: s2, paused: l2, audioOnly: r2 } = t2.detail;
      this.updateSlice("participants", (o2) => {
        const d2 = new Map(o2.participants), u2 = d2.get(n2) || {
          userId: n2,
          videoStream: null,
          audioStream: null,
          audioOnly: true,
          isAudioMuted: false,
          isVideoMuted: false
        };
        return s2 === "video" ? (u2.videoStream = new MediaStream([a2]), u2.audioOnly = false, u2.isVideoMuted = l2) : s2 === "audio" && (u2.audioStream = new MediaStream([a2]), u2.isAudioMuted = l2), r2 !== void 0 && (u2.audioOnly = r2), d2.set(n2, u2), __spreadProps(__spreadValues({}, o2), { participants: d2 });
      });
    }), i2(Le.MEDIA_TRACK_REMOVED, (t2) => {
      const { userId: n2, kind: a2 } = t2.detail;
      this.updateSlice("participants", (s2) => {
        const l2 = new Map(s2.participants), r2 = l2.get(n2);
        return r2 && (a2 === "video" ? (r2.videoStream = null, r2.audioOnly = true) : a2 === "audio" && (r2.audioStream = null), l2.set(n2, r2)), __spreadProps(__spreadValues({}, s2), { participants: l2 });
      });
    }), i2(Le.AUDIO_MUTED, (t2) => {
      const { muted: n2, userId: a2 } = t2.detail, s2 = n2 === "muted" || n2 === true, l2 = this.localUserIdInternal;
      !a2 || a2 === l2 ? this.updateSlice("localMedia", (o2) => __spreadProps(__spreadValues({}, o2), { isAudioMuted: s2 })) : this.updateSlice("participants", (o2) => {
        const d2 = new Map(o2.participants), u2 = d2.get(a2);
        return u2 && (u2.isAudioMuted = s2, d2.set(a2, u2)), __spreadProps(__spreadValues({}, o2), { participants: d2 });
      });
    }), i2(Le.VIDEO_MUTED, (t2) => {
      const { muted: n2, userId: a2 } = t2.detail, s2 = n2 === "muted" || n2 === true, l2 = this.localUserIdInternal;
      !a2 || a2 === l2 ? this.updateSlice("localMedia", (o2) => __spreadProps(__spreadValues({}, o2), { isVideoMuted: s2 })) : this.updateSlice("participants", (o2) => {
        const d2 = new Map(o2.participants), u2 = d2.get(a2);
        return u2 && (u2.isVideoMuted = s2, d2.set(a2, u2)), __spreadProps(__spreadValues({}, o2), { participants: d2 });
      });
    }), i2(Le.OUTPUT_MUTED, (t2) => {
      const { muted: n2 } = t2.detail, a2 = n2 === "muted" || n2 === true;
      this.updateSlice("localMedia", (s2) => __spreadProps(__spreadValues({}, s2), { isOutputMuted: a2 }));
    }), i2(Le.REMOTE_AUDIO_MUTED, (t2) => {
      const { userId: n2, muted: a2 } = t2.detail, s2 = a2 === "muted" || a2 === true;
      this.updateSlice("participants", (l2) => {
        const r2 = new Map(l2.participants), o2 = r2.get(n2);
        return o2 && (o2.isAudioMuted = s2, r2.set(n2, o2)), __spreadProps(__spreadValues({}, l2), { participants: r2 });
      });
    }), i2(Le.REMOTE_VIDEO_MUTED, (t2) => {
      const { userId: n2, muted: a2 } = t2.detail, s2 = a2 === "muted" || a2 === true;
      this.updateSlice("participants", (l2) => {
        const r2 = new Map(l2.participants), o2 = r2.get(n2);
        return o2 && (o2.isVideoMuted = s2, r2.set(n2, o2)), __spreadProps(__spreadValues({}, l2), { participants: r2 });
      });
    }), i2(Le.REMOTE_OUTPUT_MUTED, (t2) => {
      const { userId: n2, muted: a2 } = t2.detail, s2 = this.localUserIdInternal, l2 = a2 === "muted" || a2 === true;
      n2 === s2 && this.updateSlice("localMedia", (r2) => __spreadProps(__spreadValues({}, r2), { isOutputMuted: l2 })), this.updateSlice("participants", (r2) => {
        const o2 = new Map(r2.participants), d2 = o2.get(n2);
        return d2 && (d2.isOutputMuted = l2, o2.set(n2, d2)), __spreadProps(__spreadValues({}, r2), { participants: o2 });
      });
    }), i2(Le.SCREEN_SHARE_STARTED, () => {
      this.updateSlice("localMedia", (t2) => __spreadProps(__spreadValues({}, t2), { isScreenSharing: true }));
    }), i2(Le.SCREEN_SHARE_STOPPED, () => {
      this.updateSlice("localMedia", (t2) => __spreadProps(__spreadValues({}, t2), { isScreenSharing: false }));
    }), i2(Le.RECORDING_STARTED, (t2) => {
      p2.log(" RECORDING_STARTED event:", t2.detail);
    }), i2(Le.RECORDING_STOPPED, () => {
      p2.log(" RECORDING_STOPPED event"), this.updateSlice("recording", {
        isRecording: false,
        isRecordingStarting: false,
        recordingId: null,
        recordingStartTime: null,
        responseId: null,
        error: null
      });
    }), i2(Le.RECORDING_STATE_CHANGED, (t2) => __async(this, null, function* () {
      const { status: n2, recordingId: a2, responseId: s2 } = t2.detail;
      if (p2.log(" RECORDING_STATE_CHANGED event:", { status: n2, recordingId: a2, responseId: s2 }), n2 === "recording started")
        this.updateSlice("recording", {
          isRecording: true,
          isRecordingStarting: false,
          recordingId: a2,
          recordingStartTime: /* @__PURE__ */ new Date(),
          responseId: s2 || null,
          error: null
        });
      else if (n2 === "recording stopped")
        this.updateSlice("recording", {
          isRecording: false,
          isRecordingStarting: false,
          recordingId: null,
          recordingStartTime: null,
          responseId: null,
          error: null
        });
      else if (n2 === "streaming started") {
        const l2 = /* @__PURE__ */ new Date();
        this.updateSlice("streaming", (o2) => __spreadProps(__spreadValues({}, o2), {
          isStreaming: true,
          isStreamingStarting: false,
          streamingId: a2,
          streamingStartTime: l2
        }));
        const r2 = this.roomInternal;
        if (this.client && r2)
          try {
            const o2 = yield this.client.getStreamingUrls({
              streamingId: a2,
              roomName: r2.name,
              userId: r2.owner
            }), d2 = (o2 == null ? void 0 : o2.url) || null;
            this.updateSlice("streaming", (u2) => __spreadProps(__spreadValues({}, u2), {
              streamingUrl: d2
            }));
          } catch (o2) {
            p2.warn(" Failed to fetch streaming URL:", o2);
          }
      } else n2 === "streaming stopped" && this.updateSlice("streaming", {
        isStreaming: false,
        isStreamingStarting: false,
        streamingId: null,
        featuredUserId: null,
        streamingStartTime: null,
        streamingUrl: null,
        error: null
      });
    })), i2(Le.STREAMING_STARTED, (t2) => {
      const { streamingId: n2 } = t2.detail;
      this.updateSlice("streaming", (a2) => __spreadProps(__spreadValues({}, a2), {
        streamingId: n2
      }));
    }), i2(Le.STREAMING_STOPPED, () => {
      this.updateSlice("streaming", {
        isStreaming: false,
        isStreamingStarting: false,
        streamingId: null,
        featuredUserId: null,
        streamingStartTime: null,
        streamingUrl: null,
        error: null
      });
    }), i2(Le.STREAMING_USER_CHANGED, (t2) => {
      const { userId: n2 } = t2.detail;
      this.updateSlice("streaming", (a2) => __spreadProps(__spreadValues({}, a2), { featuredUserId: n2 }));
    }), i2(Le.TRANSCRIPTION_STARTED, () => {
      this.updateSlice("transcription", (t2) => __spreadProps(__spreadValues({}, t2), { isTranscribing: true, isTranscriptionStarting: false }));
    }), i2(Le.TRANSCRIPTION_STOPPED, () => {
      this.updateSlice("transcription", (t2) => __spreadProps(__spreadValues({}, t2), { isTranscribing: false, isTranscriptionStarting: false }));
    }), i2(Le.TRANSCRIPTION_RECEIVED, (t2) => {
      const { transcriptionData: n2 } = t2.detail, { userId: a2, text: s2, isFinal: l2, responseId: r2 } = n2 || {};
      if (r2 && this.updateSlice("recording", (d2) => __spreadProps(__spreadValues({}, d2), {
        responseId: r2
      })), !s2) return;
      const o2 = {
        id: M2(),
        userId: a2 || "unknown",
        text: s2,
        timestamp: /* @__PURE__ */ new Date(),
        isFinal: l2 ?? true
      };
      this.updateSlice("transcription", (d2) => __spreadProps(__spreadValues({}, d2), {
        transcriptions: [...d2.transcriptions, o2]
      }));
    }), i2(Le.RECEIVE_CHAT_MESSAGE, (t2) => {
      const { from: n2, message: a2, timestamp: s2, externalUserId: l2 } = t2.detail, r2 = this.localUserIdInternal;
      if (n2 === r2) return;
      const o2 = {
        id: g2(),
        userId: n2,
        externalUserId: l2,
        content: a2,
        timestamp: s2 ? new Date(s2) : /* @__PURE__ */ new Date(),
        isLocal: false
      };
      this.updateSlice("chat", (d2) => ({
        messages: [...d2.messages, o2],
        unreadCount: d2.unreadCount + 1
      }));
    }), i2(Le.DATA_MESSAGE, (t2) => {
      const { message: n2 } = t2.detail || {}, { type: a2, payload: s2 } = n2 || {};
      if (a2 === S2.DOMINANT)
        this.updateSlice("layout", { dominantSpeaker: s2 });
      else if (a2 === S2.HAND_RAISED) {
        const { userId: l2, raised: r2, timestamp: o2 } = s2 || {};
        l2 === "*" && !r2 ? this.updateSlice("handRaise", { raisedHands: /* @__PURE__ */ new Map() }) : l2 && this.updateSlice("handRaise", (d2) => {
          const u2 = new Map(d2.raisedHands);
          return r2 ? u2.set(l2, o2 || Date.now()) : u2.delete(l2), { raisedHands: u2 };
        });
      }
    }), i2(Le.ADMIT_WAITING_ROOM, (t2) => __async(this, null, function* () {
      var r2;
      const { userId: n2, externalUserId: a2, waitingRoomToken: s2 } = t2.detail;
      if (s2) {
        this.updateSlice("waitingRoom", (o2) => __spreadProps(__spreadValues({}, o2), {
          isWaitingForAdmission: false,
          wasRejected: false
        })), this.updateSlice("room", (o2) => __spreadProps(__spreadValues({}, o2), {
          isInRoom: true
        })), this.updateSlice("chat", (o2) => __spreadProps(__spreadValues({}, o2), {
          messages: [
            ...o2.messages,
            {
              id: g2(),
              userId: "system",
              content: "You have been admitted to the room. Say hello!",
              timestamp: /* @__PURE__ */ new Date(),
              isSystem: true
            }
          ]
        }));
        try {
          yield (r2 = this.client) == null ? void 0 : r2.connectTransports({
            localVideoElementId: this.options.localVideoElementId,
            waitingRoomToken: s2
          });
        } catch (o2) {
          this.updateSlice("connection", (d2) => __spreadProps(__spreadValues({}, d2), {
            error: o2 instanceof Error ? o2.message : "Failed to connect after admission"
          }));
        }
        return;
      }
      const l2 = {
        userId: n2,
        externalUserId: a2,
        requestedAt: /* @__PURE__ */ new Date()
      };
      this.updateSlice("waitingRoom", (o2) => __spreadProps(__spreadValues({}, o2), {
        waitingUsers: [...o2.waitingUsers, l2]
      }));
    })), i2(Le.REJECT_WAITING_ROOM, (t2) => {
      var a2;
      const { message: n2 } = t2.detail;
      this.updateSlice("waitingRoom", (s2) => __spreadProps(__spreadValues({}, s2), {
        isWaitingForAdmission: false,
        wasRejected: true
      })), (a2 = this.client) == null || a2.closeConnection(), this.client = null, this.updateSlice("client", { client: null }), this.updateSlice("chat", (s2) => __spreadProps(__spreadValues({}, s2), {
        messages: [
          ...s2.messages,
          {
            id: g2(),
            userId: "system",
            content: n2 || "You were not admitted to the room.",
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }
        ]
      }));
    }), i2(Le.FEEDBACK_DETECTED, () => {
      this.updateSlice("audioProcessing", (t2) => __spreadProps(__spreadValues({}, t2), { feedbackDetected: true }));
    }), i2(Le.FEEDBACK_STOPPED, () => {
      this.updateSlice("audioProcessing", (t2) => __spreadProps(__spreadValues({}, t2), { feedbackDetected: false }));
    }), i2(Le.AUDIO_VALIDATION_FAILED, (t2) => {
      const { deviceId: n2, issues: a2, recommendations: s2, settings: l2 } = t2.detail;
      this.updateSlice("audioProcessing", (r2) => __spreadProps(__spreadValues({}, r2), {
        audioValidation: { deviceId: n2, issues: a2, recommendations: s2, settings: l2, severity: "error" }
      }));
    }), i2(Le.AUDIO_VALIDATION_WARNING, (t2) => {
      const { deviceId: n2, issues: a2, recommendations: s2, settings: l2 } = t2.detail;
      this.updateSlice("audioProcessing", (r2) => __spreadProps(__spreadValues({}, r2), {
        audioValidation: { deviceId: n2, issues: a2, recommendations: s2, settings: l2, severity: "warning" }
      }));
    }), i2(Le.AUDIO_GAIN_CONTROL_CREATED, (t2) => {
      this.updateSlice("audioProcessing", (n2) => __spreadProps(__spreadValues({}, n2), { gainNode: t2.detail }));
    }), i2(Le.AUDIO_INPUT_MONITOR_CREATED, (t2) => {
      this.updateSlice("audioProcessing", (n2) => __spreadProps(__spreadValues({}, n2), { audioInputMonitor: t2.detail }));
    }), i2(Le.WAIT_FOR_HOST_STARTED, (t2) => {
      const { roomName: n2, timeout: a2 } = t2.detail;
      this.updateSlice("waitForHost", { isWaiting: true, roomName: n2, timeout: a2, elapsedTime: 0 });
    }), i2(Le.WAIT_FOR_HOST_ROOM_READY, () => {
      this.updateSlice("waitForHost", (t2) => __spreadProps(__spreadValues({}, t2), { isWaiting: false }));
    }), i2(Le.WAIT_FOR_HOST_TIMEOUT, () => {
      this.updateSlice("waitForHost", (t2) => __spreadProps(__spreadValues({}, t2), { isWaiting: false }));
    }), i2(Le.WAIT_FOR_HOST_CANCELLED, () => {
      this.updateSlice("waitForHost", (t2) => __spreadProps(__spreadValues({}, t2), { isWaiting: false }));
    }), i2(Le.AUDIO_OUTPUT_DEVICE_CHANGED, (t2) => {
      p2.log(" Audio output device changed:", t2.detail);
    }), i2(Le.CONSTRAINTS_RELAXED, (t2) => {
      p2.log(" Media constraints relaxed:", t2.detail);
    });
  }
  // ==================== INTERNAL HELPERS ====================
  resetState() {
    this.localUserIdInternal = null, this.isOwnerInternal = false, this.waitingRoomEnabledInternal = false, this.roomInternal = null, this.waitingRoomPollInterval && (clearInterval(this.waitingRoomPollInterval), this.waitingRoomPollInterval = null), this.state = E2(), this.cacheSliceSnapshots(), this.notifyGlobal();
    for (const [e2] of this.sliceListeners)
      this.notifySlice(e2);
  }
  fetchWaitingRoomUsers() {
    return __async(this, null, function* () {
      if (!(!this.client || !this.isOwnerInternal || !this.waitingRoomEnabledInternal))
        try {
          const e2 = yield this.client.getAttendees();
          if (!e2 || !Array.isArray(e2)) return;
          const i2 = this.localUserIdInternal, n2 = e2.filter(
            (a2) => !a2.connected && a2.userId !== i2
          ).map((a2) => ({
            userId: a2.userId,
            externalUserId: a2.externalUserId || a2.userId,
            requestedAt: /* @__PURE__ */ new Date()
          }));
          this.updateSlice("waitingRoom", (a2) => __spreadProps(__spreadValues({}, a2), {
            waitingUsers: n2
          }));
        } catch (e2) {
          p2.error(" Error fetching waiting room users:", e2);
        }
    });
  }
  initClient() {
    return __async(this, null, function* () {
      var s2, l2;
      const e2 = yield this.options.generateRoomToken(), i2 = new nr({ roomToken: e2 });
      this.client = i2, this.updateSlice("client", { client: i2 }), this.setupEventHandlers(i2);
      const t2 = D2(), n2 = ((s2 = this.options.connectOptions) == null ? void 0 : s2.videoDeviceId) ?? t2.videoInput, a2 = ((l2 = this.options.connectOptions) == null ? void 0 : l2.audioDeviceId) ?? t2.audioInput;
      return n2 && (yield i2.setLocalVideoDevice({ videoDeviceId: n2 })), a2 && (yield i2.setLocalAudioInputDevice({ audioInputDeviceId: a2 })), i2;
    });
  }
  loadChatHistoryInternal(e2, i2) {
    return __async(this, null, function* () {
      try {
        const t2 = yield e2.getChatHistory({ cursor: null }), { messages: n2 } = t2;
        if (n2 && n2.length > 0) {
          const a2 = n2.map((s2) => ({
            id: s2.id || g2(),
            userId: s2.from || s2.userId,
            externalUserId: s2.externalUserId,
            userName: s2.userName,
            content: s2.message || s2.content,
            timestamp: s2.timestamp ? new Date(s2.timestamp) : /* @__PURE__ */ new Date(),
            isLocal: s2.from === i2 || s2.userId === i2,
            isSystem: s2.isSystem || false
          })).reverse();
          this.updateSlice("chat", (s2) => __spreadProps(__spreadValues({}, s2), {
            messages: [...a2, ...s2.messages]
          }));
        }
      } catch (t2) {
        p2.warn(" Failed to load chat history:", t2);
      }
    });
  }
  setRoomStateFromJoin(e2, i2, t2) {
    this.roomInternal = e2, e2.recordingId && this.updateSlice("recording", {
      isRecording: true,
      isRecordingStarting: false,
      recordingId: String(e2.recordingId),
      recordingStartTime: /* @__PURE__ */ new Date(),
      responseId: e2.responseId ? String(e2.responseId) : null,
      error: null
    }), e2.streamingId && this.updateSlice("streaming", (n2) => __spreadProps(__spreadValues({}, n2), {
      isStreaming: true,
      streamingId: String(e2.streamingId),
      error: null
    })), e2.transcribingId && this.updateSlice("transcription", (n2) => __spreadProps(__spreadValues({}, n2), {
      isTranscribing: true
    }));
  }
  // ==================== PUBLIC ACTIONS ====================
  /** Create a new room as the owner/host. */
  createRoom(e2, i2, t2) {
    return __async(this, null, function* () {
      var n2, a2;
      this.updateSlice("connection", (s2) => __spreadProps(__spreadValues({}, s2), { isConnecting: true, error: null }));
      try {
        const s2 = yield this.initClient(), l2 = i2.trim().replace(/[^a-zA-Z0-9_]/g, "_"), r2 = yield s2.createRoom({
          roomName: e2.trim(),
          userId: l2,
          options: t2 != null && t2.requireWaitingRoom ? { requireWaitingRoom: true } : void 0
        });
        this.updateSlice("room", { room: r2, isOwner: true, isInRoom: true }), this.isOwnerInternal = true, this.localUserIdInternal = l2, this.roomInternal = r2, this.updateSlice("participants", (o2) => __spreadProps(__spreadValues({}, o2), { localUserId: l2 })), this.updateSlice("connection", (o2) => __spreadProps(__spreadValues({}, o2), { isConnecting: false })), this.updateSlice("chat", (o2) => __spreadProps(__spreadValues({}, o2), {
          messages: [{
            id: g2(),
            userId: "system",
            content: `Room "${r2.name}" created. Share the room name with others.`,
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }]
        })), yield s2.connectTransports({ localVideoElementId: this.options.localVideoElementId }), yield this.loadChatHistoryInternal(s2, l2), t2 != null && t2.requireWaitingRoom && (this.waitingRoomEnabledInternal = true, this.fetchWaitingRoomUsers(), this.waitingRoomPollInterval = setInterval(() => {
          this.fetchWaitingRoomUsers();
        }, 3e3));
      } catch (s2) {
        const l2 = s2 instanceof Error ? s2.message : "Failed to create room";
        throw this.updateSlice("connection", { isConnected: false, isConnecting: false, error: l2 }), (a2 = (n2 = this.options).onError) == null || a2.call(n2, s2 instanceof Error ? s2 : new Error(l2)), s2;
      }
    });
  }
  /** Join an existing room as a participant. */
  joinRoom(e2, i2) {
    return __async(this, null, function* () {
      var t2, n2;
      this.updateSlice("connection", (a2) => __spreadProps(__spreadValues({}, a2), { isConnecting: true, error: null }));
      try {
        const a2 = yield this.initClient(), s2 = i2.trim().replace(/[^a-zA-Z0-9_]/g, "_"), l2 = yield a2.joinRoom({
          roomName: e2.trim(),
          userId: s2
        });
        if (this.localUserIdInternal = s2, this.isOwnerInternal = false, this.updateSlice("participants", (r2) => __spreadProps(__spreadValues({}, r2), { localUserId: s2 })), this.updateSlice("connection", (r2) => __spreadProps(__spreadValues({}, r2), { isConnecting: false })), l2.requireWaitingRoom) {
          this.updateSlice("room", { room: l2, isOwner: false, isInRoom: false }), this.updateSlice("waitingRoom", (r2) => __spreadProps(__spreadValues({}, r2), {
            isWaitingForAdmission: true,
            wasRejected: false
          }));
          return;
        }
        this.updateSlice("room", { room: l2, isOwner: false, isInRoom: true }), this.setRoomStateFromJoin(l2, s2, false), this.updateSlice("chat", (r2) => __spreadProps(__spreadValues({}, r2), {
          messages: [{
            id: g2(),
            userId: "system",
            content: `You joined "${l2.name}". Say hello!`,
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }]
        })), yield a2.connectTransports({ localVideoElementId: this.options.localVideoElementId }), yield this.loadChatHistoryInternal(a2, s2);
      } catch (a2) {
        const s2 = a2 instanceof Error ? a2.message : "Failed to join room";
        throw this.updateSlice("connection", { isConnected: false, isConnecting: false, error: s2 }), (n2 = (t2 = this.options).onError) == null || n2.call(t2, a2 instanceof Error ? a2 : new Error(s2)), a2;
      }
    });
  }
  /** Join a room using a join token (from an invite link). */
  joinRoomWithToken(e2) {
    return __async(this, null, function* () {
      var s2, l2;
      const { joinToken: i2, roomRegion: t2, userId: n2, password: a2 } = e2;
      this.updateSlice("connection", (r2) => __spreadProps(__spreadValues({}, r2), { isConnecting: true, error: null }));
      try {
        const r2 = yield this.initClient(), o2 = n2.trim().replace(/[^a-zA-Z0-9_]/g, "_"), d2 = yield r2.joinRoomWithToken({
          joinToken: i2,
          roomRegion: t2,
          userId: o2,
          password: a2 || void 0
        });
        if (this.localUserIdInternal = o2, this.isOwnerInternal = false, this.updateSlice("participants", (u2) => __spreadProps(__spreadValues({}, u2), { localUserId: o2 })), this.updateSlice("connection", (u2) => __spreadProps(__spreadValues({}, u2), { isConnecting: false })), d2.requireWaitingRoom) {
          this.updateSlice("room", { room: d2, isOwner: false, isInRoom: false }), this.updateSlice("waitingRoom", (u2) => __spreadProps(__spreadValues({}, u2), {
            isWaitingForAdmission: true,
            wasRejected: false
          }));
          return;
        }
        this.updateSlice("room", { room: d2, isOwner: false, isInRoom: true }), this.setRoomStateFromJoin(d2, o2, false), this.updateSlice("chat", (u2) => __spreadProps(__spreadValues({}, u2), {
          messages: [{
            id: g2(),
            userId: "system",
            content: `You joined "${d2.name}". Say hello!`,
            timestamp: /* @__PURE__ */ new Date(),
            isSystem: true
          }]
        })), yield r2.connectTransports({ localVideoElementId: this.options.localVideoElementId }), yield this.loadChatHistoryInternal(r2, o2);
      } catch (r2) {
        const o2 = r2 instanceof Error ? r2.message : "Failed to join room";
        throw this.updateSlice("connection", { isConnected: false, isConnecting: false, error: o2 }), (l2 = (s2 = this.options).onError) == null || l2.call(s2, r2 instanceof Error ? r2 : new Error(o2)), r2;
      }
    });
  }
  /** Get room information from a join token without joining. */
  getRoomInfoFromToken(e2) {
    return __async(this, null, function* () {
      const { joinToken: i2, roomRegion: t2, password: n2 } = e2, a2 = yield this.options.generateRoomToken(), s2 = new nr({ roomToken: a2 });
      try {
        const l2 = "validator_" + Math.random().toString(36).substring(7), r2 = yield s2.getRoomNameFromToken({
          joinToken: i2,
          roomRegion: t2,
          userId: l2,
          password: n2 || void 0
        });
        return { roomName: r2.roomName, isActive: r2.active ?? false };
      } finally {
        try {
          s2.closeConnection();
        } catch {
        }
      }
    });
  }
  /** Leave the current room and disconnect. */
  leaveRoom() {
    this.client && (this.client.closeConnection(), this.client = null, this.updateSlice("client", { client: null })), this.resetState();
  }
  /** Toggle local microphone mute/unmute. */
  toggleAudio() {
    return __async(this, null, function* () {
      this.client && (yield this.client.muteLocalAudio(!this.state.localMedia.isAudioMuted));
    });
  }
  /** Toggle local camera on/off. */
  toggleVideo() {
    return __async(this, null, function* () {
      this.client && (yield this.client.muteLocalVideo(!this.state.localMedia.isVideoMuted));
    });
  }
  /** Toggle speaker/output mute. */
  toggleOutputMute() {
    return __async(this, null, function* () {
      this.client && (yield this.client.muteLocalOutput(!this.state.localMedia.isOutputMuted));
    });
  }
  /** Start sharing screen. */
  startScreenShare() {
    return __async(this, null, function* () {
      this.client && (yield this.client.startScreenShare());
    });
  }
  /** Stop sharing screen. */
  stopScreenShare() {
    return __async(this, null, function* () {
      this.client && (yield this.client.stopScreenShare());
    });
  }
  /** Switch to a different camera. */
  setVideoDevice(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.setLocalVideoDevice({ videoDeviceId: e2 }), this.options.persistDeviceChanges && w2("videoInput", e2));
    });
  }
  /** Switch to a different microphone. */
  setAudioInputDevice(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.setLocalAudioInputDevice({ audioInputDeviceId: e2 }), this.options.persistDeviceChanges && w2("audioInput", e2));
    });
  }
  /** Switch to a different speaker. */
  setAudioOutputDevice(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.setAudioOutputDevice({ audioOutputDeviceId: e2 }), this.options.persistDeviceChanges && w2("audioOutput", e2));
    });
  }
  /** Start recording. Returns true if API call succeeded. */
  startRecording(e2) {
    return __async(this, null, function* () {
      if (!this.client) return false;
      this.updateSlice("recording", (i2) => __spreadProps(__spreadValues({}, i2), { isRecordingStarting: true }));
      try {
        const i2 = {
          type: "cloud",
          options: e2 ? {
            autoCompose: e2.autoCompose,
            transcribe: e2.transcribe,
            useContext: e2.useContext,
            postMeetingSummary: e2.postMeetingSummary
          } : void 0
        };
        return yield this.client.startRecording(i2), true;
      } catch (i2) {
        const t2 = i2 instanceof Error ? i2.message : "Failed to start recording";
        return this.updateSlice("recording", (n2) => __spreadProps(__spreadValues({}, n2), { isRecordingStarting: false, error: t2 })), false;
      }
    });
  }
  /** Stop the current recording. */
  stopRecording() {
    return __async(this, null, function* () {
      this.client && (yield this.client.stopRecording());
    });
  }
  /** Clear recording error. */
  clearRecordingError() {
    this.updateSlice("recording", (e2) => __spreadProps(__spreadValues({}, e2), { error: null }));
  }
  /** Start cloud streaming. */
  startStreaming(e2) {
    return __async(this, null, function* () {
      if (this.client) {
        this.updateSlice("streaming", (i2) => __spreadProps(__spreadValues({}, i2), { isStreamingStarting: true }));
        try {
          yield this.client.startStreaming({
            type: "cloud",
            options: {
              create_mp4: (e2 == null ? void 0 : e2.createMp4) ?? false,
              mode: e2 == null ? void 0 : e2.mode,
              rtmpUrl: e2 == null ? void 0 : e2.rtmpUrl
            }
          });
        } catch (i2) {
          const t2 = i2 instanceof Error ? i2.message : "Failed to start streaming";
          throw this.updateSlice("streaming", (n2) => __spreadProps(__spreadValues({}, n2), { isStreamingStarting: false, error: t2 })), i2;
        }
      }
    });
  }
  /** Stop live streaming. */
  stopStreaming() {
    return __async(this, null, function* () {
      this.client && (yield this.client.stopStreaming());
    });
  }
  /** Clear streaming error. */
  clearStreamingError() {
    this.updateSlice("streaming", (e2) => __spreadProps(__spreadValues({}, e2), { error: null }));
  }
  /** Switch the featured user in the stream. */
  switchStreamingUser(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.switchStreamingUser({ userToSwitchTo: e2 }));
    });
  }
  /** Get the streaming URLs for the current stream. */
  getStreamingUrls() {
    return __async(this, null, function* () {
      const e2 = this.state.room.room;
      if (!this.client || !this.state.streaming.streamingId || !e2) return null;
      try {
        const i2 = yield this.client.getStreamingUrls({
          streamingId: this.state.streaming.streamingId,
          roomName: e2.name,
          userId: e2.owner
        });
        return (i2 == null ? void 0 : i2.url) || null;
      } catch {
        return null;
      }
    });
  }
  /** Start real-time transcription. Returns true if API call succeeded. */
  startTranscription() {
    return __async(this, null, function* () {
      if (!this.client) return false;
      this.updateSlice("transcription", (e2) => __spreadProps(__spreadValues({}, e2), { isTranscriptionStarting: true }));
      try {
        return yield this.client.startTranscribing(), true;
      } catch {
        return this.updateSlice("transcription", (i2) => __spreadProps(__spreadValues({}, i2), { isTranscriptionStarting: false })), false;
      }
    });
  }
  /** Stop transcription. */
  stopTranscription() {
    return __async(this, null, function* () {
      this.client && (yield this.client.stopTranscribing());
    });
  }
  /** Enrich recent transcriptions with mood/sentiment data. */
  enrichTranscription(e2, i2) {
    const t2 = Date.now(), n2 = 3e4;
    this.updateSlice("transcription", (a2) => __spreadProps(__spreadValues({}, a2), {
      transcriptions: a2.transcriptions.map((s2) => {
        const l2 = s2.timestamp.getTime(), r2 = t2 - l2 < n2, o2 = s2.userId === e2, d2 = !s2.sentiment;
        return r2 && o2 && d2 ? __spreadProps(__spreadValues({}, s2), {
          sentiment: i2.sentiment,
          emotion: i2.emotion,
          engagement: i2.engagement,
          moodConfidence: i2.confidence,
          moodAnalyzedAt: t2
        }) : s2;
      })
    }));
  }
  /** Send a text chat message. */
  sendMessage(e2) {
    if (!this.client) return;
    this.client.sendChatMessage({ message: e2 });
    const i2 = {
      id: g2(),
      userId: this.localUserIdInternal || "unknown",
      content: e2,
      timestamp: /* @__PURE__ */ new Date(),
      isLocal: true
    };
    this.updateSlice("chat", (t2) => __spreadProps(__spreadValues({}, t2), {
      messages: [...t2.messages, i2]
    }));
  }
  /** Send a data message (arbitrary JSON). */
  sendDataMessage(e2) {
    this.client && this.client.sendDataMessage({ message: e2 });
  }
  /** Clear the unread message counter. */
  clearUnread() {
    this.updateSlice("chat", (e2) => __spreadProps(__spreadValues({}, e2), { unreadCount: 0 }));
  }
  /** Load chat history from the server. */
  loadChatHistory(e2) {
    return __async(this, null, function* () {
      if (!this.client) return { hasMore: false };
      try {
        const i2 = yield this.client.getChatHistory({ cursor: e2 ?? null }), { messages: t2, nextCursor: n2 } = i2;
        if (t2 && t2.length > 0) {
          const a2 = t2.map((s2) => ({
            id: s2.id || g2(),
            userId: s2.from || s2.userId,
            externalUserId: s2.externalUserId,
            userName: s2.userName,
            content: s2.message || s2.content,
            timestamp: s2.timestamp ? new Date(s2.timestamp) : /* @__PURE__ */ new Date(),
            isLocal: s2.from === this.localUserIdInternal || s2.userId === this.localUserIdInternal,
            isSystem: s2.isSystem || false
          })).reverse();
          this.updateSlice("chat", (s2) => __spreadProps(__spreadValues({}, s2), {
            messages: [...a2, ...s2.messages]
          }));
        }
        return { hasMore: !!n2 };
      } catch (i2) {
        return p2.error(" Failed to load chat history:", i2), { hasMore: false };
      }
    });
  }
  /** Admit a user from the waiting room (owner only). */
  admitUser(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.admitWaitingRoomUser({ userToAdmit: e2 }), this.updateSlice("waitingRoom", (i2) => __spreadProps(__spreadValues({}, i2), {
        waitingUsers: i2.waitingUsers.filter((t2) => t2.userId !== e2)
      })));
    });
  }
  /** Reject a user from the waiting room (owner only). */
  rejectUser(e2) {
    return __async(this, null, function* () {
      this.client && (yield this.client.rejectWaitingRoomUser({ userToReject: e2 }), this.updateSlice("waitingRoom", (i2) => __spreadProps(__spreadValues({}, i2), {
        waitingUsers: i2.waitingUsers.filter((t2) => t2.userId !== e2)
      })));
    });
  }
  /** Remotely mute/unmute a participant's audio (owner only). */
  remoteMuteAudio(e2, i2) {
    return __async(this, null, function* () {
      !this.client || !this.state.room.room || (yield this.client.muteRemoteAudio({
        room: this.state.room.room,
        userId: e2,
        muteAudio: i2
      }), this.updateSlice("participants", (t2) => {
        const n2 = new Map(t2.participants), a2 = n2.get(e2);
        return a2 && n2.set(e2, __spreadProps(__spreadValues({}, a2), { isAudioMuted: i2 })), __spreadProps(__spreadValues({}, t2), { participants: n2 });
      }));
    });
  }
  /** Remotely mute/unmute a participant's video (owner only). */
  remoteMuteVideo(e2, i2) {
    return __async(this, null, function* () {
      !this.client || !this.state.room.room || (yield this.client.muteRemoteVideo({
        room: this.state.room.room,
        userId: e2,
        muteVideo: i2
      }), this.updateSlice("participants", (t2) => {
        const n2 = new Map(t2.participants), a2 = n2.get(e2);
        return a2 && n2.set(e2, __spreadProps(__spreadValues({}, a2), { isVideoMuted: i2 })), __spreadProps(__spreadValues({}, t2), { participants: n2 });
      }));
    });
  }
  /** Mute/unmute a remote participant's audio output locally (owner only). */
  muteRemoteOutput(e2, i2) {
    return __async(this, null, function* () {
      if (!(!this.client || !this.state.room.room))
        try {
          yield this.client.muteRemoteOutput({
            room: this.state.room.room,
            userId: e2,
            muteOutput: i2
          }), this.updateSlice("participants", (t2) => {
            const n2 = new Map(t2.participants), a2 = n2.get(e2);
            return a2 && n2.set(e2, __spreadProps(__spreadValues({}, a2), { isOutputMuted: i2 })), __spreadProps(__spreadValues({}, t2), { participants: n2 });
          });
        } catch (t2) {
          p2.error(" muteRemoteOutput: API call failed", t2);
        }
    });
  }
  /** Set the microphone gain (0-100). */
  setGain(e2) {
    this.state.audioProcessing.gainNode && (this.state.audioProcessing.gainNode.gain.value = e2 / 100);
  }
  /** Set the dominant speaker for video grid layouts (owner only). */
  setDominant(e2) {
    this.client && this.isOwnerInternal && (this.client.sendDataMessage({
      message: { type: S2.DOMINANT, payload: e2 }
    }), this.updateSlice("layout", { dominantSpeaker: e2 }));
  }
  /** Toggle the local user's hand raised state. */
  toggleHandRaised() {
    return __async(this, null, function* () {
      if (!this.client || !this.localUserIdInternal) return;
      const e2 = this.localUserIdInternal, i2 = Date.now(), n2 = !this.state.handRaise.raisedHands.has(e2);
      this.client.sendDataMessage({
        message: {
          type: S2.HAND_RAISED,
          payload: { userId: e2, raised: n2, timestamp: i2 }
        }
      }), this.updateSlice("handRaise", (a2) => {
        const s2 = new Map(a2.raisedHands);
        return n2 ? s2.set(e2, i2) : s2.delete(e2), { raisedHands: s2 };
      });
    });
  }
  /** Lower all raised hands in the room (host only). */
  lowerAllHands() {
    return __async(this, null, function* () {
      !this.client || !this.isOwnerInternal || (this.client.sendDataMessage({
        message: {
          type: S2.HAND_RAISED,
          payload: { userId: "*", raised: false, timestamp: Date.now() }
        }
      }), this.updateSlice("handRaise", { raisedHands: /* @__PURE__ */ new Map() }));
    });
  }
  /** Set AI chat messages. */
  setAiChatMessages(e2) {
    this.updateSlice("aiChat", { messages: e2 });
  }
  // ============================================================================
  // Intelligence Actions
  // ============================================================================
  /** Enable real-time coaching with a specific variant. */
  enableCoaching(e2 = "general") {
    this.updateSlice("intelligence", (i2) => __spreadProps(__spreadValues({}, i2), {
      isActive: true,
      coachingEnabled: true,
      coachingVariant: e2
    })), p2.log(`Coaching enabled: ${e2}`);
  }
  /** Disable real-time coaching. */
  disableCoaching() {
    this.updateSlice("intelligence", (e2) => __spreadProps(__spreadValues({}, e2), {
      isActive: false,
      coachingEnabled: false,
      realtimeHints: [],
      talkRatio: { speaking: 50, listening: 50 },
      currentTopic: null,
      topicShifts: []
    })), p2.log("Coaching disabled");
  }
  /** Update coaching data from the coaching endpoint response. */
  updateCoachingData(e2) {
    this.updateSlice("intelligence", (i2) => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, i2), e2.hints !== void 0 && { realtimeHints: e2.hints }), e2.talkRatio !== void 0 && { talkRatio: e2.talkRatio }), e2.currentTopic !== void 0 && { currentTopic: e2.currentTopic }), e2.topicShifts !== void 0 && {
      topicShifts: [...i2.topicShifts, ...e2.topicShifts]
    }));
  }
  /** Dismiss a coaching hint by ID. */
  dismissHint(e2) {
    this.updateSlice("intelligence", (i2) => __spreadProps(__spreadValues({}, i2), {
      realtimeHints: i2.realtimeHints.map(
        (t2) => t2.id === e2 ? __spreadProps(__spreadValues({}, t2), { dismissed: true }) : t2
      )
    }));
  }
  /** Destroy the store, clean up all resources. */
  destroy() {
    this.client && (this.client.closeConnection(), this.client = null, this.updateSlice("client", { client: null })), this.waitingRoomPollInterval && (clearInterval(this.waitingRoomPollInterval), this.waitingRoomPollInterval = null), this.globalListeners.clear(), this.sliceListeners.clear();
  }
};

// node_modules/@hiyve/utilities/dist/video.js
function y3(t2) {
  return t2 <= 1 ? 1 : t2 <= 2 || t2 <= 4 ? 2 : t2 <= 6 || t2 <= 9 ? 3 : t2 <= 12 ? 4 : Math.ceil(Math.sqrt(t2));
}
function S3(t2) {
  return t2 === 1 ? "grid-1" : t2 === 2 ? "grid-2" : t2 === 3 ? "grid-3" : t2 === 4 ? "grid-4" : t2 <= 6 ? "grid-6" : t2 <= 9 ? "grid-9" : "grid-many";
}
function v2(t2) {
  switch (t2) {
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
function L2(t2, u2, r2, o2, e2, h2, s2, n2) {
  const f3 = {};
  if (r2.length === 0) return f3;
  const i2 = o2 && r2.includes(o2) ? o2 : r2[0], l2 = r2.filter((M3) => M3 !== i2), m3 = l2.length > 0, a2 = m3 ? u2 - e2 * 2 - h2 - s2 : u2 - e2 * 2, c2 = t2 - e2 * 2;
  if (f3[i2] = {
    left: e2,
    top: e2,
    width: Math.max(c2, 0),
    height: Math.max(a2, 0)
  }, m3) {
    const M3 = e2 + a2 + h2, x2 = t2 - e2 * 2, b2 = Math.min(n2, (x2 - h2 * (l2.length - 1)) / l2.length);
    l2.forEach((g3, w3) => {
      f3[g3] = {
        left: e2 + w3 * (b2 + h2),
        top: M3,
        width: Math.max(b2, 0),
        height: Math.max(s2, 0)
      };
    });
  }
  return f3;
}
function C2(t2, u2, r2, o2, e2, h2, s2) {
  const n2 = {};
  if (r2.length === 0) return n2;
  const f3 = o2 && r2.includes(o2) ? o2 : r2[0], i2 = r2.filter((c2) => c2 !== f3), l2 = i2.length > 0, m3 = l2 ? t2 - e2 * 2 - h2 - s2 : t2 - e2 * 2, a2 = u2 - e2 * 2;
  if (n2[f3] = {
    left: e2,
    top: e2,
    width: Math.max(m3, 0),
    height: Math.max(a2, 0)
  }, l2) {
    const c2 = e2 + m3 + h2, M3 = u2 - e2 * 2, x2 = Math.min(
      (M3 - h2 * (i2.length - 1)) / i2.length,
      s2 * 0.75
      // aspect ratio cap
    );
    i2.forEach((b2, g3) => {
      n2[b2] = {
        left: c2,
        top: e2 + g3 * (x2 + h2),
        width: Math.max(s2, 0),
        height: Math.max(x2, 0)
      };
    });
  }
  return n2;
}

// node_modules/@angular/material/fesm2022/tooltip2.mjs
var _c0 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector, {
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, {
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _ariaDescriber = inject(AriaDescriber);
  _focusMonitor = inject(FocusMonitor);
  _dir = inject(Directionality);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _tooltipInstance;
  _overlayPanelClass;
  // Used for styling internally.
  _portal;
  _position = "below";
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = "mat-mdc";
  _ariaDescriptionPending;
  _dirSubscribed = false;
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  _showDelay;
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  /**
   * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
   * uses a long press gesture to show and hide, however it can conflict with the native browser
   * gestures. To work around the conflict, Angular Material disables native gestures on the
   * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
   * elements). The different values for this option configure the touch event handling as follows:
   * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
   *   browser gestures on particular elements. In particular, it allows text selection on inputs
   *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
   * - `on` - Enables touch gestures for all elements and disables native
   *   browser gestures with no exceptions.
   * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
   *   showing on touch devices.
   */
  touchGestures = "auto";
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = "";
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  /** Manually-bound passive event listeners. */
  _passiveListeners = [];
  /** Timer started at the last `touchstart` event. */
  _touchstartTimeout = null;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether ngOnDestroyed has been called. */
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = createOverlayRef(this._injector, {
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
      disableAnimations: this._animationsDisabled
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x: x2,
      y: y4
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x2,
        originY: y4
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x: x2,
      y: y4
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x2,
        overlayY: y4
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x2, y4) {
    if (this.position === "above" || this.position === "below") {
      if (y4 === "top") {
        y4 = "bottom";
      } else if (y4 === "bottom") {
        y4 = "top";
      }
    } else {
      if (x2 === "end") {
        x2 = "start";
      } else if (x2 === "start") {
        x2 = "end";
      }
    }
    return {
      x: x2,
      y: y4
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      };
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style.webkitUserDrag = "none";
      }
      style.touchAction = "none";
      style.webkitTapHighlightColor = "transparent";
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    if (!this._isDestroyed) {
      afterNextRender({
        write: () => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
          }
        }
      }, {
        injector: this._injector
      });
    }
  }
  static ɵfac = function MatTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltip)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatTooltip,
    selectors: [["", "matTooltip", ""]],
    hostAttrs: [1, "mat-mdc-tooltip-trigger"],
    hostVars: 2,
    hostBindings: function MatTooltip_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-mdc-tooltip-disabled", ctx.disabled);
      }
    },
    inputs: {
      position: [0, "matTooltipPosition", "position"],
      positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
      disabled: [0, "matTooltipDisabled", "disabled"],
      showDelay: [0, "matTooltipShowDelay", "showDelay"],
      hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
      touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
      message: [0, "matTooltip", "message"],
      tooltipClass: [0, "matTooltipClass", "tooltipClass"]
    },
    exportAs: ["matTooltip"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      }
    }]
  }], () => [], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /* Whether the tooltip text overflows to multiple lines */
  _isMultiline = false;
  /** Message to display in the tooltip */
  message;
  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  tooltipClass;
  /** The timeout ID of any current timer set to show the tooltip */
  _showTimeoutId;
  /** The timeout ID of any current timer set to hide the tooltip */
  _hideTimeoutId;
  /** Element that caused the tooltip to open. */
  _triggerElement;
  /** Amount of milliseconds to delay the closing sequence. */
  _mouseLeaveHideDelay;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** Reference to the internal tooltip element. */
  _tooltip;
  /** Whether interactions on the page should close the tooltip */
  _closeOnInteraction = false;
  /** Whether the tooltip is currently visible. */
  _isVisible = false;
  /** Subject for notifying that the tooltip has been hidden from the view */
  _onHide = new Subject();
  /** Name of the show animation and the class that toggles it. */
  _showAnimation = "mat-mdc-tooltip-show";
  /** Name of the hide animation and the class that toggles it. */
  _hideAnimation = "mat-mdc-tooltip-hide";
  constructor() {
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
  static ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipComponent,
    selectors: [["mat-tooltip-component"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._tooltip = _t2.first);
      }
    },
    hostAttrs: ["aria-hidden", "true"],
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
          return ctx._handleMouseLeave($event);
        });
      }
    },
    decls: 4,
    vars: 4,
    consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵlistener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx._handleAnimationEnd($event));
        });
        ɵɵelementStart(2, "div", 2);
        ɵɵtext(3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassProp("mdc-tooltip--multiline", ctx._isMultiline);
        ɵɵproperty("ngClass", ctx.tooltipClass);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.message);
      }
    },
    dependencies: [NgClass],
    styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      imports: [NgClass],
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n']
    }]
  }], () => [], {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/tooltip-module.mjs
var MatTooltipModule = class _MatTooltipModule {
  static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c02 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2);
    ɵɵelement(1, "polygon", 3);
    ɵɵelementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 0);
    ɵɵdomListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onAnimationDone($event.animationName));
    });
    ɵɵdomElementStart(1, "div", 1);
    ɵɵprojection(2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1._classList);
    ɵɵclassProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    ɵɵdomProperty("id", ctx_r1.panelId);
    ɵɵattribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** ARIA role for the menu item. */
  role = "menuitem";
  /** Whether the menu item is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the menu item. */
  disableRipple = false;
  /** Stream that emits when the menu item is hovered. */
  _hovered = new Subject();
  /** Stream that emits when the menu item is focused. */
  _focused = new Subject();
  /** Whether the menu item is highlighted. */
  _highlighted = false;
  /** Whether the menu item acts as a trigger for a sub-menu. */
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i2 = 0; i2 < icons.length; i2++) {
      icons[i2].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static ɵfac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        ɵɵclassProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    attrs: _c02,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵprojection(0);
        ɵɵelementStart(1, "span", 0);
        ɵɵprojection(2, 1);
        ɵɵelementEnd();
        ɵɵelement(3, "div", 1);
        ɵɵconditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        ɵɵadvance();
        ɵɵconditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  /** Emits when the menu content has been attached. */
  _attached = new Subject();
  constructor() {
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static ɵfac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [ɵɵProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], () => [], null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** All items inside the menu. Includes items nested inside another menu. */
  _allItems;
  /** Only the direct descendant menu items. */
  _directDescendantItems = new QueryList();
  /** Classes to be applied to the menu panel. */
  _classList = {};
  /** Current state of the panel animation. */
  _panelAnimationState = "void";
  /** Emits whenever an animation on the menu completes. */
  _animationDone = new Subject();
  /** Whether the menu is animating. */
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  /** Parent menu of the current menu panel. */
  parentMenu;
  /** Layout direction of the menu. */
  direction;
  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass;
  /** Class to be added to the backdrop element. */
  backdropClass;
  /** aria-label for the menu panel. */
  ariaLabel;
  /** aria-labelledby for the menu panel. */
  ariaLabelledby;
  /** aria-describedby for the menu panel. */
  ariaDescribedby;
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** @docs-private */
  templateRef;
  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  items;
  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  lazyContent;
  /** Whether the menu should overlap its trigger. */
  overlapTrigger;
  /** Whether the menu has a backdrop. */
  hasBackdrop;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  /** Event emitted when the menu is closed. */
  closed = new EventEmitter();
  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @breaking-change 8.0.0
   */
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * @deprecated No longer used and will be removed.
   * @breaking-change 21.0.0
   */
  setElevation(_depth) {
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating.set(false);
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating.set(true);
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  /** Gets the menu panel DOM node. */
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static ɵfac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MAT_MENU_CONTENT, 5);
        ɵɵcontentQuery(dirIndex, MatMenuItem, 5);
        ɵɵcontentQuery(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.lazyContent = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._allItems = _t2);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.items = _t2);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templateRef = _t2.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [ɵɵProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  /**
   * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
   * interface lacks some functionality around nested menus and animations.
   */
  _parentMaterialMenu;
  /**
   * Cached value of the padding of the parent menu panel.
   * Used to offset sub-menus to compensate for the padding.
   */
  _parentInnerPadding;
  // Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the menu is opened via the keyboard
  _openedBy = void 0;
  /** Menu currently assigned to the trigger. */
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  /** Internal method to open menu providing option to auto focus on first item. */
  _openMenu(autoFocus) {
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  /**
   * Determines whether the trigger owns a specific menu panel, at the current point in time.
   * This allows us to distinguish the case where the same panel is passed into multiple triggers
   * and multiple are open at a time.
   */
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  static ɵfac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v3) {
    this.menu = v3;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /**
   * Event emitted when the associated menu is opened.
   * @deprecated Switch to `menuOpened` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuOpen = this.menuOpened;
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  /**
   * Event emitted when the associated menu is closed.
   * @deprecated Switch to `menuClosed` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    this._openMenu(true);
  }
  /** Closes the menu. */
  closeMenu() {
    this._closeMenu();
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled && // Ignore hover events if the parent menu is in the process of being closed (see #31956).
        this._parentMaterialMenu?._panelAnimationState !== "void") {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static ɵfac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Whether the context menu is disabled. */
  disabled = false;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  /** Handler for `contextmenu` events. */
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  /** Checks whether an element is within the trigger or the opened overlay. */
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  /** Opens the context menu. */
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  /** Initializes the point representing the origin relative to which the menu will be rendered. */
  _initializePoint(x2, y4) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x2;
    point.y = point.initialY = y4;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  /** Refreshes the position of the overlay. */
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static ɵfac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
        ɵɵclassProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static ɵfac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
var matMenuAnimations = {
  // Represents:
  // trigger('transformMenu', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
  // ])
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: {
    type: 7,
    name: "transformMenu",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms 25ms linear"
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('fadeInItems', [
  //   // TODO(crisbeto): this is inside the `transformMenu`
  //   // now. Remove next time we do breaking changes.
  //   state('showing', style({opacity: 1})),
  //   transition('void => *', [
  //     style({opacity: 0}),
  //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: {
    type: 7,
    name: "fadeInItems",
    definitions: [{
      type: 0,
      name: "showing",
      styles: {
        type: 6,
        styles: {
          opacity: 1
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => *",
      animation: [{
        type: 6,
        styles: {
          opacity: 0
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Optional CSS class or classes applied to the overlay panel. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Optional CSS class or classes applied to the overlay backdrop. */
  backdropClass = "";
  /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
  disableClose = false;
  /** Function used to determine whether the dialog is allowed to close. */
  closePredicate;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
  positionStrategy;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Dialog label applied via `aria-label` */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the previously-focused element upon closing.
   * Has the following behavior based on the type that is passed in:
   * - `boolean` - when true, will return focus to the element that was focused before the dialog
   *    was opened, otherwise won't restore focus at all.
   * - `string` - focus will be restored to the first element that matches the CSS selector.
   * - `HTMLElement` - focus will be restored to the specific element.
   */
  restoreFocus = true;
  /**
   * Scroll strategy to be used for the dialog. This determines how
   * the dialog responds to scrolling underneath the panel element.
   */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user navigates backwards or forwards through browser
   * history. This does not apply to navigation via anchor element unless using URL-hash based
   * routing (`HashLocationStrategy` in the Angular router).
   */
  closeOnNavigation = true;
  /**
   * Whether the dialog should close when the dialog service is destroyed. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead.
   */
  closeOnDestroy = true;
  /**
   * Whether the dialog should close when the underlying overlay is detached. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead. E.g. an
   * external detachment can happen as a result of a scroll strategy triggering it or when the
   * browser location changes.
   */
  closeOnOverlayDetachments = true;
  /**
   * Whether the built-in overlay animations should be disabled.
   */
  disableAnimations = false;
  /**
   * Providers that will be exposed to the contents of the dialog. Can also
   * be provided as a function in order to generate the providers lazily.
   */
  providers;
  /**
   * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
   * A configuration object can be passed in to customize the providers that will be exposed
   * to the dialog container.
   */
  container;
  /**
   * Context that will be passed to template-based dialogs.
   * A function can be passed in to resolve the context lazily.
   */
  templateContext;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  /** The portal outlet inside of this container into which the dialog content will be loaded. */
  _portalOutlet;
  _focusTrapped = new Subject();
  /** The class that traps and manages focus within the dialog. */
  _focusTrap = null;
  /** Element that was focused before the dialog was opened. Save this to restore upon close. */
  _elementFocusedBeforeDialogWasOpened = null;
  /**
   * Type of interaction that led to the dialog being closed. This is used to determine
   * whether the focus style will be applied when returning focus to its original location
   * after the dialog is closed.
   */
  _closeInteractionType = null;
  /**
   * Queue of the IDs of the dialog's label element, based on their definition order. The first
   * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
   * where there are two or more titles in the DOM at a time and the first one is destroyed while
   * the rest are present.
   */
  _ariaLabelledByQueue = [];
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the dialog container.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus(options) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer(options) {
    this._elementRef.nativeElement.focus?.(options);
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  static ɵfac = function CdkDialogContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDialogContainer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._portalOutlet = _t2.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  /**
   * Instance of component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Instance of the container that is rendering out the dialog content. */
  containerInstance;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Emits when the dialog has been closed. */
  closed = new Subject();
  /** Emits when the backdrop of the dialog is clicked. */
  backdropClick;
  /** Emits when on keyboard events within the dialog. */
  keydownEvents;
  /** Emits on pointer events that happen outside of the dialog. */
  outsidePointerEvents;
  /** Unique ID for the dialog. */
  id;
  /** Subscription to external detachments of the dialog. */
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose && this._canClose()) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      } else {
        this.containerInstance._recaptureFocus?.();
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this._canClose(result)) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
  /** Whether the dialog is allowed to close. */
  _canClose(result) {
    const config = this.config;
    return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
function getDirectionality(value) {
  const valueSignal = signal(value, ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
var Dialog = class _Dialog {
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = createOverlayRef(this._injector, overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation,
      disableAnimations: config.disableAnimations
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: getDirectionality(config.direction)
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i2 = siblings.length - 1; i2 > -1; i2--) {
        const sibling = siblings[i2];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static ɵfac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _Dialog,
    factory: _Dialog.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function reverseForEach(items, callback) {
  let i2 = items.length;
  while (i2--) {
    callback(items[i2]);
  }
}
var DialogModule = class _DialogModule {
  static ɵfac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DialogModule,
    imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
    exports: [
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule,
      CdkDialogContainer
    ]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [Dialog],
    imports: [
      OverlayModule,
      PortalModule,
      A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule
    ]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/dialog-module.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Custom class for the overlay pane. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass = "";
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */
  disableClose = false;
  /** Function used to determine whether the dialog is allowed to close. */
  closePredicate;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Position overrides. */
  position;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Whether to wait for the opening animation to finish before trapping focus. */
  delayFocusTrap = true;
  /** Scroll strategy to be used for the dialog. */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Duration of the enter animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  enterAnimationDuration;
  /**
   * Duration of the exit animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  exitAnimationDuration;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether animations are enabled. */
  _animationsEnabled = !_animationsDisabled();
  /** Number of actions projected in the dialog. */
  _actionSectionCount = 0;
  /** Host element of the dialog container component. */
  _hostElement = this._elementRef.nativeElement;
  /** Duration of the dialog open animation. */
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  /** Duration of the dialog close animation. */
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  /** Current timer for dialog animations. */
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Completes the dialog open by clearing potential animation classes, trapping
   * focus and emitting an opened event.
   */
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  /**
   * Completes the dialog close by clearing potential animation classes, restoring
   * focus and emitting a closed event.
   */
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(__ngFactoryType__) {
      return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = ɵɵgetInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx._config.id);
        ɵɵattribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        ɵɵclassProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵtemplate(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵɵelementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _config;
  _containerInstance;
  /** The instance of component opened into the dialog. */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Unique ID for the dialog. */
  id;
  /** Subject for notifying the user that the dialog has finished opening. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the dialog has started closing. */
  _beforeClosed = new Subject();
  /** Result to be passed to afterClosed. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  /** Current state of the dialog. */
  _state = MatDialogState.OPEN;
  // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
  // already has a second `options` parameter that we can use. The problem is that internal tests
  // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
  // because it'll be called with two arguments by things like `MatDialogClose`.
  /** Interaction that caused the dialog to close. */
  _closeInteractionType;
  constructor(_ref, _config, _containerInstance) {
    this._ref = _ref;
    this._config = _config;
    this._containerInstance = _containerInstance;
    this.disableClose = _config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    const closePredicate = this._config.closePredicate;
    if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
      return;
    }
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var MatDialog = class _MatDialog {
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _injector = inject(Injector);
  _dialog = inject(Dialog);
  _animationsDisabled = _animationsDisabled();
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Closing is tied to our animation so the close predicate has to be implemented separately.
      closePredicate: void 0,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i2 = dialogs.length;
    while (i2--) {
      dialogs[i2].close();
    }
  }
  static ɵfac = function MatDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialog)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MatDialog,
    factory: _MatDialog.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Default to "button" to prevents accidental form submits. */
  type = "button";
  /** Dialog close input. */
  dialogResult;
  _matDialogClose;
  constructor() {
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static ɵfac = function MatDialogClose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogClose)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  constructor() {
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static ɵfac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogLayoutSection)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatDialogLayoutSection
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], () => [], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(__ngFactoryType__) {
      return (ɵMatDialogTitle_BaseFactory || (ɵMatDialogTitle_BaseFactory = ɵɵgetInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static ɵfac = function MatDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    features: [ɵɵHostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  /**
   * Horizontal alignment of action buttons.
   */
  align;
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(__ngFactoryType__) {
      return (ɵMatDialogActions_BaseFactory || (ɵMatDialogActions_BaseFactory = ɵɵgetInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static ɵfac = function MatDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatDialogModule,
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
    exports: [MatCommonModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// node_modules/@hiyve/angular/dist/fesm2022/hiyve-angular.mjs
var _c03 = [[["", "hiyveOverlay", ""]]];
var _c12 = ["[hiyveOverlay]"];
var _c22 = (a0, a1) => ({
  "background-color": a0,
  "color": a1
});
var _c32 = (a0, a1, a2, a3, a4, a5) => ({
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
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c22, ctx_r1.avatarColor, ctx_r1.mergedColors.avatarText || "#fff"));
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
    ɵɵproperty("ngStyle", ɵɵpureFunction6(10, _c32, ctx_r1.mergedColors.nameLabelBackground || "rgba(0,0,0,0.6)", ctx_r1.mergedColors.nameLabelText || "#fff", ctx_r1.mergedStyles.nameLabelPadding || "2px 8px", ctx_r1.mergedStyles.nameLabelBorderRadius || "4px", ctx_r1.mergedStyles.nameLabelFontSize || "12px", ctx_r1.mergedStyles.nameLabelMaxWidth || "80%"));
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
var _c8 = (a0, a1) => ({
  "gap.px": a0,
  "padding.px": a1
});
var _c9 = (a0) => ({
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
    ɵɵproperty("ngStyle", ɵɵpureFunction2(11, _c8, ctx_r1.mergedStyles.gap || 8, ctx_r1.mergedStyles.padding || 8));
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
    ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c9, ctx_r1.mergedStyles.padding || 8));
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
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c4, ctx_r1.mergedColors.background || "#0a0a1a"));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.layout === "grid" ? 1 : 2);
  }
}
function MediaControlsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function MediaControlsComponent_Conditional_0_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onToggleAudio());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const media_r3 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", !media_r3.isAudioMuted)("muted", media_r3.isAudioMuted);
    ɵɵproperty("disabled", ctx_r1.disabled)("matTooltip", media_r3.isAudioMuted ? ctx_r1.mergedLabels.unmute : ctx_r1.mergedLabels.mute);
    ɵɵadvance(2);
    ɵɵtextInterpolate(media_r3.isAudioMuted ? "mic_off" : "mic");
  }
}
function MediaControlsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function MediaControlsComponent_Conditional_0_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onToggleVideo());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const media_r3 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", !media_r3.isVideoMuted)("muted", media_r3.isVideoMuted);
    ɵɵproperty("disabled", ctx_r1.disabled)("matTooltip", media_r3.isVideoMuted ? ctx_r1.mergedLabels.startVideo : ctx_r1.mergedLabels.stopVideo);
    ɵɵadvance(2);
    ɵɵtextInterpolate(media_r3.isVideoMuted ? "videocam_off" : "videocam");
  }
}
function MediaControlsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function MediaControlsComponent_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const media_r3 = ɵɵnextContext();
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onToggleScreenShare(media_r3.isScreenSharing));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const media_r3 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("sharing", media_r3.isScreenSharing);
    ɵɵproperty("disabled", ctx_r1.disabled)("matTooltip", media_r3.isScreenSharing ? ctx_r1.mergedLabels.stopScreenShare : ctx_r1.mergedLabels.shareScreen);
    ɵɵadvance(2);
    ɵɵtextInterpolate(media_r3.isScreenSharing ? "stop_screen_share" : "screen_share");
  }
}
function MediaControlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, MediaControlsComponent_Conditional_0_Conditional_0_Template, 3, 7, "button", 0);
    ɵɵconditionalCreate(1, MediaControlsComponent_Conditional_0_Conditional_1_Template, 3, 7, "button", 0);
    ɵɵconditionalCreate(2, MediaControlsComponent_Conditional_0_Conditional_2_Template, 3, 5, "button", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.showAudioToggle ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showVideoToggle ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showScreenShare ? 2 : -1);
  }
}
var _forTrack1 = ($index, $item) => $item.deviceId;
function DeviceMenuComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function DeviceMenuComponent_Conditional_5_For_3_Template_button_click_0_listener() {
      const device_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.selectVideoDevice(device_r3.deviceId));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "videocam");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const device_r3 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    ɵɵadvance(4);
    ɵɵtextInterpolate(device_r3.label || "Camera " + ($index_r5 + 1));
  }
}
function DeviceMenuComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(2, DeviceMenuComponent_Conditional_5_For_3_Template, 5, 1, "button", 3, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.mergedLabels.camera);
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.videoDevices);
  }
}
function DeviceMenuComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function DeviceMenuComponent_Conditional_6_For_3_Template_button_click_0_listener() {
      const device_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.selectAudioInput(device_r7.deviceId));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "mic");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const device_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    ɵɵadvance(4);
    ɵɵtextInterpolate(device_r7.label || "Microphone " + ($index_r8 + 1));
  }
}
function DeviceMenuComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(2, DeviceMenuComponent_Conditional_6_For_3_Template, 5, 1, "button", 3, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.mergedLabels.microphone);
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.audioInputDevices);
  }
}
function DeviceMenuComponent_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function DeviceMenuComponent_Conditional_7_For_3_Template_button_click_0_listener() {
      const device_r10 = ɵɵrestoreView(_r9).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.selectAudioOutput(device_r10.deviceId));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "volume_up");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const device_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    ɵɵadvance(4);
    ɵɵtextInterpolate(device_r10.label || "Speaker " + ($index_r11 + 1));
  }
}
function DeviceMenuComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(2, DeviceMenuComponent_Conditional_7_For_3_Template, 5, 1, "button", 3, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.mergedLabels.speaker);
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.audioOutputDevices);
  }
}
var _forTrack2 = ($index, $item) => $item.id;
function LayoutMenuComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function LayoutMenuComponent_For_6_Template_button_click_0_listener() {
      const layout_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSelectLayout(layout_r2.id));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const layout_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(layout_r2.icon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(layout_r2.label);
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onStartRecording());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "fiber_manual_record");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.mergedLabels.recordRoom);
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onStopRecording());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "stop");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "hiyveDuration");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(4);
    ɵɵtextInterpolate2("", ctx_r1.mergedLabels.stopRecording, " (", ɵɵpipeBind1(6, 4, ɵɵpipeBind1(5, 2, ctx_r1.recordingDuration$)), ")");
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onStartStreaming());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "live_tv");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.mergedLabels.startStreaming);
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onStopStreaming());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "stop");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "hiyveDuration");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance(4);
    ɵɵtextInterpolate2("", ctx_r1.mergedLabels.stopStreaming, " (", ɵɵpipeBind1(6, 4, ɵɵpipeBind1(5, 2, ctx_r1.streamingDuration$)), ")");
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template, 5, 1, "button", 2)(1, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template, 7, 6, "button", 2);
  }
  if (rf & 2) {
    const stream_r6 = ɵɵnextContext();
    ɵɵconditional(!stream_r6.isStreaming && !stream_r6.isStreamingStarting ? 0 : 1);
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 1)(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
    ɵɵelementStart(3, "mat-menu", null, 0);
    ɵɵconditionalCreate(5, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_5_Template, 5, 1, "button", 2)(6, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_6_Template, 7, 6, "button", 2);
    ɵɵconditionalCreate(7, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Conditional_7_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const recordingMenu_r7 = ɵɵreference(4);
    const rec_r8 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("recording", rec_r8.isRecording)("streaming", ctx.isStreaming);
    ɵɵproperty("matMenuTriggerFor", recordingMenu_r7)("disabled", ctx_r1.disabled)("matTooltip", ctx_r1.mergedLabels.recordRoom);
    ɵɵadvance(2);
    ɵɵtextInterpolate(rec_r8.isRecording ? "stop" : "fiber_manual_record");
    ɵɵadvance(3);
    ɵɵconditional(!rec_r8.isRecording && !rec_r8.isRecordingStarting ? 5 : 6);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.showStreamingOption ? 7 : -1);
  }
}
function RecordingMenuComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, RecordingMenuComponent_Conditional_0_Conditional_0_Conditional_0_Template, 8, 10);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional((tmp_3_0 = ɵɵpipeBind1(1, 1, ctx_r1.streaming$)) ? 0 : -1, tmp_3_0);
  }
}
function RecordingMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, RecordingMenuComponent_Conditional_0_Conditional_0_Template, 2, 3);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(1, 1, ctx_r1.recording$)) ? 0 : -1, tmp_1_0);
  }
}
function FeatureControlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function FeatureControlsComponent_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onToggleHandRaise());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.isLocalHandRaised);
    ɵɵproperty("disabled", ctx_r1.disabled)("matTooltip", ctx_r1.isLocalHandRaised ? ctx_r1.mergedLabels.lowerHand : ctx_r1.mergedLabels.handRaise);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.isLocalHandRaised ? "do_not_touch" : "pan_tool");
  }
}
var _c10 = [[["", "hiyveExtraControls", ""]]];
var _c11 = ["[hiyveExtraControls]"];
function ControlBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hiyve-device-menu", 8);
    ɵɵlistener("videoDeviceChange", function ControlBarComponent_Conditional_2_Template_hiyve_device_menu_videoDeviceChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.videoDeviceChange.emit($event));
    })("audioDeviceChange", function ControlBarComponent_Conditional_2_Template_hiyve_device_menu_audioDeviceChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.audioDeviceChange.emit($event));
    })("audioOutputDeviceChange", function ControlBarComponent_Conditional_2_Template_hiyve_device_menu_audioOutputDeviceChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.audioOutputDeviceChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.disabled)("labels", ctx_r1.labels);
  }
}
function ControlBarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hiyve-layout-menu", 9);
    ɵɵlistener("layoutChange", function ControlBarComponent_Conditional_3_Template_hiyve_layout_menu_layoutChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.layoutChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.disabled)("labels", ctx_r1.labels)("layouts", ctx_r1.layouts);
  }
}
function ControlBarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hiyve-feature-controls", 10);
    ɵɵlistener("handRaiseChange", function ControlBarComponent_Conditional_4_Template_hiyve_feature_controls_handRaiseChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handRaiseChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showHandRaise", ctx_r1.showHandRaise)("disabled", ctx_r1.disabled)("labels", ctx_r1.labels);
  }
}
function ControlBarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hiyve-recording-menu", 11);
    ɵɵlistener("recordingStarted", function ControlBarComponent_Conditional_5_Template_hiyve_recording_menu_recordingStarted_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.recordingStarted.emit());
    })("recordingStopped", function ControlBarComponent_Conditional_5_Template_hiyve_recording_menu_recordingStopped_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.recordingStopped.emit());
    })("streamingStarted", function ControlBarComponent_Conditional_5_Template_hiyve_recording_menu_streamingStarted_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.streamingStarted.emit());
    })("streamingStopped", function ControlBarComponent_Conditional_5_Template_hiyve_recording_menu_streamingStopped_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.streamingStopped.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showStreamingOption", ctx_r1.showStreamingOption)("disabled", ctx_r1.disabled)("labels", ctx_r1.labels);
  }
}
function ControlBarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hiyve-leave-button", 12);
    ɵɵlistener("leave", function ControlBarComponent_Conditional_8_Template_hiyve_leave_button_leave_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeave());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showConfirmation", ctx_r1.showLeaveConfirmation)("disabled", ctx_r1.disabled)("labels", ctx_r1.labels)("colors", ctx_r1.colors);
  }
}
var HIYVE_CONFIG = new InjectionToken("HIYVE_CONFIG");
var HiyveService = class _HiyveService {
  config = inject(HIYVE_CONFIG);
  ngZone = inject(NgZone);
  store;
  cleanupFns = [];
  // BehaviorSubjects for each state slice
  connectionSubject = new BehaviorSubject({
    isConnected: false,
    isConnecting: false,
    error: null
  });
  roomSubject = new BehaviorSubject({
    room: null,
    isOwner: false,
    isInRoom: false
  });
  clientSubject = new BehaviorSubject({
    client: null
  });
  participantsSubject = new BehaviorSubject({
    participants: /* @__PURE__ */ new Map(),
    localUserId: null
  });
  localMediaSubject = new BehaviorSubject({
    isAudioMuted: false,
    isVideoMuted: false,
    isOutputMuted: false,
    isScreenSharing: false
  });
  recordingSubject = new BehaviorSubject({
    isRecording: false,
    isRecordingStarting: false,
    recordingId: null,
    recordingStartTime: null,
    responseId: null,
    error: null
  });
  streamingSubject = new BehaviorSubject({
    isStreaming: false,
    isStreamingStarting: false,
    streamingId: null,
    featuredUserId: null,
    streamingStartTime: null,
    streamingUrl: null,
    error: null
  });
  transcriptionSubject = new BehaviorSubject({
    isTranscribing: false,
    isTranscriptionStarting: false,
    transcriptions: []
  });
  chatSubject = new BehaviorSubject({
    messages: [],
    unreadCount: 0
  });
  waitingRoomSubject = new BehaviorSubject({
    waitingUsers: [],
    isWaitingForAdmission: false,
    wasRejected: false
  });
  waitForHostSubject = new BehaviorSubject({
    isWaiting: false,
    roomName: null,
    timeout: null,
    elapsedTime: 0
  });
  audioProcessingSubject = new BehaviorSubject({
    feedbackDetected: false,
    audioValidation: null,
    gainNode: null,
    audioInputMonitor: null
  });
  layoutSubject = new BehaviorSubject({
    dominantSpeaker: null
  });
  handRaiseSubject = new BehaviorSubject({
    raisedHands: /* @__PURE__ */ new Map()
  });
  aiChatSubject = new BehaviorSubject({
    messages: []
  });
  intelligenceSubject = new BehaviorSubject({
    isActive: false,
    coachingEnabled: false,
    coachingVariant: "general",
    realtimeHints: [],
    talkRatio: {
      speaking: 50,
      listening: 50
    },
    currentTopic: null,
    topicShifts: []
  });
  // Public observables
  connection$ = this.connectionSubject.asObservable();
  room$ = this.roomSubject.asObservable();
  client$ = this.clientSubject.asObservable();
  participants$ = this.participantsSubject.asObservable();
  localMedia$ = this.localMediaSubject.asObservable();
  recording$ = this.recordingSubject.asObservable();
  streaming$ = this.streamingSubject.asObservable();
  transcription$ = this.transcriptionSubject.asObservable();
  chat$ = this.chatSubject.asObservable();
  waitingRoom$ = this.waitingRoomSubject.asObservable();
  waitForHost$ = this.waitForHostSubject.asObservable();
  audioProcessing$ = this.audioProcessingSubject.asObservable();
  layout$ = this.layoutSubject.asObservable();
  handRaise$ = this.handRaiseSubject.asObservable();
  aiChat$ = this.aiChatSubject.asObservable();
  intelligence$ = this.intelligenceSubject.asObservable();
  constructor() {
    this.store = new N2(this.config);
    this.setupSubscriptions();
  }
  setupSubscriptions() {
    const sliceMap = {
      connection: this.connectionSubject,
      room: this.roomSubject,
      client: this.clientSubject,
      participants: this.participantsSubject,
      localMedia: this.localMediaSubject,
      recording: this.recordingSubject,
      streaming: this.streamingSubject,
      transcription: this.transcriptionSubject,
      chat: this.chatSubject,
      waitingRoom: this.waitingRoomSubject,
      waitForHost: this.waitForHostSubject,
      audioProcessing: this.audioProcessingSubject,
      layout: this.layoutSubject,
      handRaise: this.handRaiseSubject,
      aiChat: this.aiChatSubject,
      intelligence: this.intelligenceSubject
    };
    for (const [slice, subject] of Object.entries(sliceMap)) {
      subject.next(this.store.getSlice(slice));
      const unsub = this.store.subscribeToSlice(slice, () => {
        this.ngZone.run(() => {
          subject.next(this.store.getSlice(slice));
        });
      });
      this.cleanupFns.push(unsub);
    }
  }
  // ==================== Connection Actions ====================
  createRoom(roomName, userId, options) {
    return __async(this, null, function* () {
      yield this.store.createRoom(roomName, userId, options);
    });
  }
  joinRoom(roomName, userId) {
    return __async(this, null, function* () {
      yield this.store.joinRoom(roomName, userId);
    });
  }
  joinRoomWithToken(options) {
    return __async(this, null, function* () {
      yield this.store.joinRoomWithToken(options);
    });
  }
  getRoomInfoFromToken(options) {
    return __async(this, null, function* () {
      return this.store.getRoomInfoFromToken(options);
    });
  }
  leaveRoom() {
    this.store.leaveRoom();
  }
  // ==================== Media Actions ====================
  toggleAudio() {
    return __async(this, null, function* () {
      yield this.store.toggleAudio();
    });
  }
  toggleVideo() {
    return __async(this, null, function* () {
      yield this.store.toggleVideo();
    });
  }
  toggleOutputMute() {
    return __async(this, null, function* () {
      yield this.store.toggleOutputMute();
    });
  }
  startScreenShare() {
    return __async(this, null, function* () {
      yield this.store.startScreenShare();
    });
  }
  stopScreenShare() {
    return __async(this, null, function* () {
      yield this.store.stopScreenShare();
    });
  }
  setVideoDevice(deviceId) {
    return __async(this, null, function* () {
      yield this.store.setVideoDevice(deviceId);
    });
  }
  setAudioInputDevice(deviceId) {
    return __async(this, null, function* () {
      yield this.store.setAudioInputDevice(deviceId);
    });
  }
  setAudioOutputDevice(deviceId) {
    return __async(this, null, function* () {
      yield this.store.setAudioOutputDevice(deviceId);
    });
  }
  remoteMuteAudio(userId, muted) {
    return __async(this, null, function* () {
      yield this.store.remoteMuteAudio(userId, muted);
    });
  }
  remoteMuteVideo(userId, muted) {
    return __async(this, null, function* () {
      yield this.store.remoteMuteVideo(userId, muted);
    });
  }
  muteRemoteOutput(userId, muted) {
    return __async(this, null, function* () {
      yield this.store.muteRemoteOutput(userId, muted);
    });
  }
  // ==================== Recording Actions ====================
  startRecording(options) {
    return __async(this, null, function* () {
      yield this.store.startRecording(options);
    });
  }
  stopRecording() {
    return __async(this, null, function* () {
      yield this.store.stopRecording();
    });
  }
  // ==================== Streaming Actions ====================
  startStreaming(options) {
    return __async(this, null, function* () {
      yield this.store.startStreaming(options);
    });
  }
  stopStreaming() {
    return __async(this, null, function* () {
      yield this.store.stopStreaming();
    });
  }
  // ==================== Transcription Actions ====================
  startTranscription() {
    return __async(this, null, function* () {
      yield this.store.startTranscription();
    });
  }
  stopTranscription() {
    return __async(this, null, function* () {
      yield this.store.stopTranscription();
    });
  }
  enrichTranscription(userId, moodData) {
    this.store.enrichTranscription(userId, moodData);
  }
  // ==================== Chat Actions ====================
  sendMessage(content) {
    this.store.sendMessage(content);
  }
  sendDataMessage(data) {
    this.store.sendDataMessage(data);
  }
  clearUnread() {
    this.store.clearUnread();
  }
  loadChatHistory(cursor) {
    return __async(this, null, function* () {
      return this.store.loadChatHistory(cursor);
    });
  }
  // ==================== Waiting Room Actions ====================
  admitUser(userId) {
    return __async(this, null, function* () {
      yield this.store.admitUser(userId);
    });
  }
  rejectUser(userId) {
    return __async(this, null, function* () {
      yield this.store.rejectUser(userId);
    });
  }
  // ==================== Interaction Actions ====================
  toggleHandRaised() {
    return __async(this, null, function* () {
      yield this.store.toggleHandRaised();
    });
  }
  lowerAllHands() {
    return __async(this, null, function* () {
      yield this.store.lowerAllHands();
    });
  }
  setDominant(userId) {
    this.store.setDominant(userId);
  }
  setGain(value) {
    this.store.setGain(value);
  }
  // ==================== AI Chat Actions ====================
  setAiChatMessages(messages) {
    this.store.setAiChatMessages(messages);
  }
  // ==================== Raw Access ====================
  getStore() {
    return this.store;
  }
  getClient() {
    return this.store.getClient();
  }
  ngOnDestroy() {
    this.cleanupFns.forEach((fn) => fn());
    this.cleanupFns = [];
    this.store.destroy();
    this.connectionSubject.complete();
    this.roomSubject.complete();
    this.clientSubject.complete();
    this.participantsSubject.complete();
    this.localMediaSubject.complete();
    this.recordingSubject.complete();
    this.streamingSubject.complete();
    this.transcriptionSubject.complete();
    this.chatSubject.complete();
    this.waitingRoomSubject.complete();
    this.waitForHostSubject.complete();
    this.audioProcessingSubject.complete();
    this.layoutSubject.complete();
    this.handRaiseSubject.complete();
    this.aiChatSubject.complete();
  }
  static ɵfac = function HiyveService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HiyveService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HiyveService,
    factory: _HiyveService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HiyveService, [{
    type: Injectable
  }], () => [], null);
})();
var ConnectionService = class _ConnectionService {
  hiyve = inject(HiyveService);
  isConnected$ = this.hiyve.connection$.pipe(map((c2) => c2.isConnected));
  isConnecting$ = this.hiyve.connection$.pipe(map((c2) => c2.isConnecting));
  error$ = this.hiyve.connection$.pipe(map((c2) => c2.error));
  connection$ = this.hiyve.connection$;
  createRoom(roomName, userId, options) {
    return this.hiyve.createRoom(roomName, userId, options);
  }
  joinRoom(roomName, userId) {
    return this.hiyve.joinRoom(roomName, userId);
  }
  leaveRoom() {
    this.hiyve.leaveRoom();
  }
  static ɵfac = function ConnectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConnectionService,
    factory: _ConnectionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionService, [{
    type: Injectable
  }], null, null);
})();
var RoomService = class _RoomService {
  hiyve = inject(HiyveService);
  room$ = this.hiyve.room$;
  roomInfo$ = this.hiyve.room$.pipe(map((r2) => r2.room));
  isOwner$ = this.hiyve.room$.pipe(map((r2) => r2.isOwner));
  isInRoom$ = this.hiyve.room$.pipe(map((r2) => r2.isInRoom));
  static ɵfac = function RoomService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoomService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RoomService,
    factory: _RoomService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomService, [{
    type: Injectable
  }], null, null);
})();
var ParticipantsService = class _ParticipantsService {
  hiyve = inject(HiyveService);
  participants$ = this.hiyve.participants$;
  participantList$ = this.hiyve.participants$.pipe(map((s2) => Array.from(s2.participants.values())));
  remoteParticipants$ = this.hiyve.participants$.pipe(map((s2) => {
    const remote = [];
    s2.participants.forEach((p3) => {
      if (p3.userId !== s2.localUserId) remote.push(p3);
    });
    return remote;
  }));
  localUserId$ = this.hiyve.participants$.pipe(map((s2) => s2.localUserId));
  participantCount$ = this.hiyve.participants$.pipe(map((s2) => s2.participants.size));
  getParticipant(userId) {
    return this.hiyve.participants$.pipe(map((s2) => s2.participants.get(userId) ?? null));
  }
  static ɵfac = function ParticipantsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticipantsService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ParticipantsService,
    factory: _ParticipantsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParticipantsService, [{
    type: Injectable
  }], null, null);
})();
var LocalMediaService = class _LocalMediaService {
  hiyve = inject(HiyveService);
  localMedia$ = this.hiyve.localMedia$;
  isAudioMuted$ = this.hiyve.localMedia$.pipe(map((m3) => m3.isAudioMuted));
  isVideoMuted$ = this.hiyve.localMedia$.pipe(map((m3) => m3.isVideoMuted));
  isOutputMuted$ = this.hiyve.localMedia$.pipe(map((m3) => m3.isOutputMuted));
  isScreenSharing$ = this.hiyve.localMedia$.pipe(map((m3) => m3.isScreenSharing));
  toggleAudio() {
    return this.hiyve.toggleAudio();
  }
  toggleVideo() {
    return this.hiyve.toggleVideo();
  }
  toggleOutputMute() {
    return this.hiyve.toggleOutputMute();
  }
  startScreenShare() {
    return this.hiyve.startScreenShare();
  }
  stopScreenShare() {
    return this.hiyve.stopScreenShare();
  }
  static ɵfac = function LocalMediaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalMediaService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LocalMediaService,
    factory: _LocalMediaService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalMediaService, [{
    type: Injectable
  }], null, null);
})();
var DevicesService = class _DevicesService {
  hiyve = inject(HiyveService);
  setVideoDevice(deviceId) {
    return this.hiyve.setVideoDevice(deviceId);
  }
  setAudioInputDevice(deviceId) {
    return this.hiyve.setAudioInputDevice(deviceId);
  }
  setAudioOutputDevice(deviceId) {
    return this.hiyve.setAudioOutputDevice(deviceId);
  }
  remoteMuteAudio(userId, muted) {
    return this.hiyve.remoteMuteAudio(userId, muted);
  }
  remoteMuteVideo(userId, muted) {
    return this.hiyve.remoteMuteVideo(userId, muted);
  }
  muteRemoteOutput(userId, muted) {
    return this.hiyve.muteRemoteOutput(userId, muted);
  }
  static ɵfac = function DevicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevicesService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DevicesService,
    factory: _DevicesService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevicesService, [{
    type: Injectable
  }], null, null);
})();
var RecordingService = class _RecordingService {
  hiyve = inject(HiyveService);
  recording$ = this.hiyve.recording$;
  isRecording$ = this.hiyve.recording$.pipe(map((r2) => r2.isRecording));
  isRecordingStarting$ = this.hiyve.recording$.pipe(map((r2) => r2.isRecordingStarting));
  recordingId$ = this.hiyve.recording$.pipe(map((r2) => r2.recordingId));
  error$ = this.hiyve.recording$.pipe(map((r2) => r2.error));
  responseId$ = this.hiyve.recording$.pipe(map((r2) => r2.responseId));
  recordingDuration$ = this.hiyve.recording$.pipe(switchMap((r2) => r2.isRecording && r2.recordingStartTime ? timer(0, 1e3).pipe(map(() => Math.floor((Date.now() - r2.recordingStartTime.getTime()) / 1e3))) : of(0)));
  startRecording(options) {
    return this.hiyve.startRecording(options);
  }
  stopRecording() {
    return this.hiyve.stopRecording();
  }
  static ɵfac = function RecordingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RecordingService,
    factory: _RecordingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordingService, [{
    type: Injectable
  }], null, null);
})();
var StreamingService = class _StreamingService {
  hiyve = inject(HiyveService);
  streaming$ = this.hiyve.streaming$;
  isStreaming$ = this.hiyve.streaming$.pipe(map((s2) => s2.isStreaming));
  isStreamingStarting$ = this.hiyve.streaming$.pipe(map((s2) => s2.isStreamingStarting));
  streamingUrl$ = this.hiyve.streaming$.pipe(map((s2) => s2.streamingUrl));
  error$ = this.hiyve.streaming$.pipe(map((s2) => s2.error));
  streamingDuration$ = this.hiyve.streaming$.pipe(switchMap((s2) => s2.isStreaming && s2.streamingStartTime ? timer(0, 1e3).pipe(map(() => Math.floor((Date.now() - s2.streamingStartTime.getTime()) / 1e3))) : of(0)));
  startStreaming(options) {
    return this.hiyve.startStreaming(options);
  }
  stopStreaming() {
    return this.hiyve.stopStreaming();
  }
  static ɵfac = function StreamingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StreamingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StreamingService,
    factory: _StreamingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StreamingService, [{
    type: Injectable
  }], null, null);
})();
var TranscriptionService = class _TranscriptionService {
  hiyve = inject(HiyveService);
  transcription$ = this.hiyve.transcription$;
  isTranscribing$ = this.hiyve.transcription$.pipe(map((t2) => t2.isTranscribing));
  isTranscriptionStarting$ = this.hiyve.transcription$.pipe(map((t2) => t2.isTranscriptionStarting));
  transcriptions$ = this.hiyve.transcription$.pipe(map((t2) => t2.transcriptions));
  startTranscription() {
    return this.hiyve.startTranscription();
  }
  stopTranscription() {
    return this.hiyve.stopTranscription();
  }
  enrichTranscription(userId, moodData) {
    this.hiyve.enrichTranscription(userId, moodData);
  }
  static ɵfac = function TranscriptionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranscriptionService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TranscriptionService,
    factory: _TranscriptionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranscriptionService, [{
    type: Injectable
  }], null, null);
})();
var ChatService = class _ChatService {
  hiyve = inject(HiyveService);
  chat$ = this.hiyve.chat$;
  messages$ = this.hiyve.chat$.pipe(map((c2) => c2.messages));
  unreadCount$ = this.hiyve.chat$.pipe(map((c2) => c2.unreadCount));
  sendMessage(content) {
    this.hiyve.sendMessage(content);
  }
  sendDataMessage(data) {
    this.hiyve.sendDataMessage(data);
  }
  clearUnread() {
    this.hiyve.clearUnread();
  }
  loadChatHistory(cursor) {
    return this.hiyve.loadChatHistory(cursor);
  }
  static ɵfac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ChatService,
    factory: _ChatService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable
  }], null, null);
})();
var WaitingRoomService = class _WaitingRoomService {
  hiyve = inject(HiyveService);
  waitingRoom$ = this.hiyve.waitingRoom$;
  waitingUsers$ = this.hiyve.waitingRoom$.pipe(map((w3) => w3.waitingUsers));
  isWaitingForAdmission$ = this.hiyve.waitingRoom$.pipe(map((w3) => w3.isWaitingForAdmission));
  wasRejected$ = this.hiyve.waitingRoom$.pipe(map((w3) => w3.wasRejected));
  admitUser(userId) {
    return this.hiyve.admitUser(userId);
  }
  rejectUser(userId) {
    return this.hiyve.rejectUser(userId);
  }
  static ɵfac = function WaitingRoomService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaitingRoomService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaitingRoomService,
    factory: _WaitingRoomService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaitingRoomService, [{
    type: Injectable
  }], null, null);
})();
var WaitForHostService = class _WaitForHostService {
  hiyve = inject(HiyveService);
  waitForHost$ = this.hiyve.waitForHost$;
  isWaiting$ = this.hiyve.waitForHost$.pipe(map((w3) => w3.isWaiting));
  roomName$ = this.hiyve.waitForHost$.pipe(map((w3) => w3.roomName));
  timeout$ = this.hiyve.waitForHost$.pipe(map((w3) => w3.timeout));
  elapsedTime$ = this.hiyve.waitForHost$.pipe(map((w3) => w3.elapsedTime));
  static ɵfac = function WaitForHostService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaitForHostService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaitForHostService,
    factory: _WaitForHostService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaitForHostService, [{
    type: Injectable
  }], null, null);
})();
var LayoutService = class _LayoutService {
  hiyve = inject(HiyveService);
  layout$ = this.hiyve.layout$;
  dominantSpeaker$ = this.hiyve.layout$.pipe(map((l2) => l2.dominantSpeaker));
  setDominant(userId) {
    this.hiyve.setDominant(userId);
  }
  static ɵfac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LayoutService,
    factory: _LayoutService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable
  }], null, null);
})();
var HandRaiseService = class _HandRaiseService {
  hiyve = inject(HiyveService);
  handRaise$ = this.hiyve.handRaise$;
  raisedHands$ = this.hiyve.handRaise$.pipe(map((h2) => h2.raisedHands));
  isHandRaised$(userId) {
    return this.hiyve.handRaise$.pipe(map((h2) => h2.raisedHands.has(userId)));
  }
  toggleHandRaised() {
    return this.hiyve.toggleHandRaised();
  }
  lowerAllHands() {
    return this.hiyve.lowerAllHands();
  }
  static ɵfac = function HandRaiseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HandRaiseService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HandRaiseService,
    factory: _HandRaiseService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HandRaiseService, [{
    type: Injectable
  }], null, null);
})();
var AudioProcessingService = class _AudioProcessingService {
  hiyve = inject(HiyveService);
  audioProcessing$ = this.hiyve.audioProcessing$;
  feedbackDetected$ = this.hiyve.audioProcessing$.pipe(map((a2) => a2.feedbackDetected));
  audioValidation$ = this.hiyve.audioProcessing$.pipe(map((a2) => a2.audioValidation));
  gainNode$ = this.hiyve.audioProcessing$.pipe(map((a2) => a2.gainNode));
  setGain(value) {
    this.hiyve.setGain(value);
  }
  static ɵfac = function AudioProcessingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioProcessingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AudioProcessingService,
    factory: _AudioProcessingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioProcessingService, [{
    type: Injectable
  }], null, null);
})();
var AiChatService = class _AiChatService {
  hiyve = inject(HiyveService);
  aiChat$ = this.hiyve.aiChat$;
  messages$ = this.hiyve.aiChat$.pipe(map((a2) => a2.messages));
  setMessages(messages) {
    this.hiyve.setAiChatMessages(messages);
  }
  static ɵfac = function AiChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiChatService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AiChatService,
    factory: _AiChatService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiChatService, [{
    type: Injectable
  }], null, null);
})();
var JoinTokenService = class _JoinTokenService {
  hiyve = inject(HiyveService);
  joinRoomWithToken(options) {
    return this.hiyve.joinRoomWithToken(options);
  }
  getRoomInfoFromToken(options) {
    return this.hiyve.getRoomInfoFromToken(options);
  }
  static ɵfac = function JoinTokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JoinTokenService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _JoinTokenService,
    factory: _JoinTokenService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JoinTokenService, [{
    type: Injectable
  }], null, null);
})();
function provideHiyve(config) {
  return makeEnvironmentProviders([{
    provide: HIYVE_CONFIG,
    useValue: config
  }, HiyveService, ConnectionService, RoomService, ParticipantsService, LocalMediaService, DevicesService, RecordingService, StreamingService, TranscriptionService, ChatService, WaitingRoomService, WaitForHostService, LayoutService, HandRaiseService, AudioProcessingService, AiChatService, JoinTokenService]);
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
    for (let i2 = 0; i2 < this.userId.length; i2++) {
      hash = (hash << 5) - hash + this.userId.charCodeAt(i2) | 0;
    }
    return palette[Math.abs(hash) % palette.length];
  }
  get containerStyle() {
    const s2 = this.mergedStyles;
    const c2 = this.mergedColors;
    const style = {
      "border-radius": s2.borderRadius || "8px",
      "background": c2.background || "#1a1a2e"
    };
    if (this.isDominant) {
      style["border"] = `${s2.dominantBorderWidth || "3px"} solid ${c2.dominantBorder || "#4caf50"}`;
    }
    return style;
  }
  get labelPositionStyle() {
    return v2(this.labelPosition);
  }
  get statusPositionStyle() {
    return v2(this.statusPosition);
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
    const c2 = this.mergedColors;
    switch (this.engagementLevel) {
      case "high":
        return c2.engagementHigh || "#4caf50";
      case "medium":
        return c2.engagementMedium || "#ff9800";
      case "low":
        return c2.engagementLow || "#f44336";
      default:
        return c2.engagementVeryLow || "#9e9e9e";
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
    ngContentSelectors: _c12,
    decls: 9,
    vars: 7,
    consts: [[1, "video-tile-container", 3, "click", "mouseenter", "mouseleave", "ngStyle"], ["autoplay", "", "playsinline", "", "muted", "", 1, "video-element", 3, "hiyveMediaStream"], [1, "avatar-container"], ["autoplay", "", 3, "hiyveMediaStream"], [1, "name-label", 3, "ngStyle", "top-left", "top-right", "bottom-left", "bottom-right"], [1, "status-indicators", 3, "top-left", "top-right", "bottom-left", "bottom-right"], [1, "mood-indicator", 3, "top-left", "top-right", "bottom-left", "bottom-right"], [1, "engagement-indicator", 3, "top-left", "top-right", "bottom-left", "bottom-right"], ["autoplay", "", "playsinline", "", "muted", "", 1, "video-element", 3, "error", "hiyveMediaStream"], [1, "avatar", 3, "ngStyle"], [1, "name-label", 3, "ngStyle"], [1, "name-text"], [1, "status-indicators"], [1, "indicator", 3, "ngStyle"], [1, "indicator", "hand-raised", 3, "ngStyle"], [1, "indicator-icon"], [1, "mood-indicator"], [1, "mood-text"], [1, "engagement-indicator"], [1, "engagement-dot", 3, "ngStyle"]],
    template: function VideoTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c03);
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
    const pad = (n2) => n2.toString().padStart(2, "0");
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
    state.participants.forEach((p3) => {
      if (p3.userId !== state.localUserId) {
        remoteParticipants.push(p3);
      }
    });
    const totalCount = remoteParticipants.length + 1;
    return {
      remoteParticipants,
      localUserId: state.localUserId,
      totalCount,
      gridClass: S3(totalCount),
      isRecording,
      recordingDuration,
      dominantSpeaker,
      raisedHands,
      isOwner
    };
  }), shareReplay(1));
  getMuteStatus(p3) {
    return {
      audio: p3.isAudioMuted,
      video: p3.isVideoMuted,
      output: p3.isOutputMuted
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
var DEFAULT_CONTROL_BAR_LABELS = {
  mute: "Mute",
  unmute: "Unmute",
  startVideo: "Start Video",
  stopVideo: "Stop Video",
  shareScreen: "Share Screen",
  stopScreenShare: "Stop Sharing",
  leave: "Leave",
  leaveConfirmTitle: "Leave Room",
  leaveConfirmMessage: "Are you sure you want to leave this room?",
  leaveConfirmYes: "Leave",
  leaveConfirmCancel: "Cancel",
  settings: "Settings",
  camera: "Camera",
  microphone: "Microphone",
  speaker: "Speaker",
  layout: "Layout",
  gridLayout: "Grid",
  speakerLayout: "Speaker",
  sidebarLayout: "Sidebar",
  recordRoom: "Record",
  stopRecording: "Stop Recording",
  startStreaming: "Start Streaming",
  stopStreaming: "Stop Streaming",
  moodAnalysis: "Mood Analysis",
  intelligence: "Intelligence",
  handRaise: "Raise Hand",
  lowerHand: "Lower Hand"
};
var DEFAULT_CONTROL_BAR_COLORS = {
  background: "rgba(0, 0, 0, 0.85)",
  buttonDefault: "rgba(255, 255, 255, 0.1)",
  buttonActive: "rgba(255, 255, 255, 0.2)",
  buttonHover: "rgba(255, 255, 255, 0.15)",
  leaveButton: "#f44336",
  leaveButtonHover: "#d32f2f",
  iconDefault: "#ffffff",
  iconActive: "#ffffff",
  divider: "rgba(255, 255, 255, 0.2)",
  recordingIndicator: "#f44336",
  streamingIndicator: "#4caf50"
};
var DEFAULT_CONTROL_BAR_STYLES = {
  gap: "8px",
  padding: "8px 16px",
  buttonSize: "medium",
  borderRadius: "12px",
  fontSize: "14px",
  iconSize: "24px"
};
var DEFAULT_LAYOUTS = [{
  id: "grid",
  label: "Grid",
  icon: "grid_view"
}, {
  id: "speaker",
  label: "Speaker",
  icon: "person"
}, {
  id: "sidebar",
  label: "Sidebar",
  icon: "view_sidebar"
}];
var MediaControlsComponent = class _MediaControlsComponent {
  localMedia = inject(LocalMediaService);
  showAudioToggle = true;
  showVideoToggle = true;
  showScreenShare = true;
  disabled = false;
  labels = {};
  colors = {};
  audioMuteChange = new EventEmitter();
  videoMuteChange = new EventEmitter();
  screenShareChange = new EventEmitter();
  localMedia$ = this.localMedia.localMedia$;
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_COLORS), this.colors);
  }
  onToggleAudio() {
    return __async(this, null, function* () {
      yield this.localMedia.toggleAudio();
      this.audioMuteChange.emit(true);
    });
  }
  onToggleVideo() {
    return __async(this, null, function* () {
      yield this.localMedia.toggleVideo();
      this.videoMuteChange.emit(true);
    });
  }
  onToggleScreenShare(isScreenSharing) {
    return __async(this, null, function* () {
      if (isScreenSharing) {
        yield this.localMedia.stopScreenShare();
      } else {
        yield this.localMedia.startScreenShare();
      }
      this.screenShareChange.emit(!isScreenSharing);
    });
  }
  static ɵfac = function MediaControlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaControlsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MediaControlsComponent,
    selectors: [["hiyve-media-controls"]],
    inputs: {
      showAudioToggle: "showAudioToggle",
      showVideoToggle: "showVideoToggle",
      showScreenShare: "showScreenShare",
      disabled: "disabled",
      labels: "labels",
      colors: "colors"
    },
    outputs: {
      audioMuteChange: "audioMuteChange",
      videoMuteChange: "videoMuteChange",
      screenShareChange: "screenShareChange"
    },
    decls: 2,
    vars: 3,
    consts: [["mat-mini-fab", "", 3, "active", "muted", "disabled", "matTooltip"], ["mat-mini-fab", "", 3, "sharing", "disabled", "matTooltip"], ["mat-mini-fab", "", 3, "click", "disabled", "matTooltip"]],
    template: function MediaControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, MediaControlsComponent_Conditional_0_Template, 3, 3);
        ɵɵpipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.localMedia$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, AsyncPipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaControlsComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-media-controls",
      standalone: true,
      imports: [AsyncPipe, MatButtonModule, MatIconModule, MatTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (localMedia$ | async; as media) {
  @if (showAudioToggle) {
    <button
      mat-mini-fab
      [class.active]="!media.isAudioMuted"
      [class.muted]="media.isAudioMuted"
      [disabled]="disabled"
      (click)="onToggleAudio()"
      [matTooltip]="media.isAudioMuted ? mergedLabels.unmute! : mergedLabels.mute!"
    >
      <mat-icon>{{ media.isAudioMuted ? 'mic_off' : 'mic' }}</mat-icon>
    </button>
  }

  @if (showVideoToggle) {
    <button
      mat-mini-fab
      [class.active]="!media.isVideoMuted"
      [class.muted]="media.isVideoMuted"
      [disabled]="disabled"
      (click)="onToggleVideo()"
      [matTooltip]="media.isVideoMuted ? mergedLabels.startVideo! : mergedLabels.stopVideo!"
    >
      <mat-icon>{{ media.isVideoMuted ? 'videocam_off' : 'videocam' }}</mat-icon>
    </button>
  }

  @if (showScreenShare) {
    <button
      mat-mini-fab
      [class.sharing]="media.isScreenSharing"
      [disabled]="disabled"
      (click)="onToggleScreenShare(media.isScreenSharing)"
      [matTooltip]="media.isScreenSharing ? mergedLabels.stopScreenShare! : mergedLabels.shareScreen!"
    >
      <mat-icon>{{ media.isScreenSharing ? 'stop_screen_share' : 'screen_share' }}</mat-icon>
    </button>
  }
}
`
    }]
  }], null, {
    showAudioToggle: [{
      type: Input
    }],
    showVideoToggle: [{
      type: Input
    }],
    showScreenShare: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    audioMuteChange: [{
      type: Output
    }],
    videoMuteChange: [{
      type: Output
    }],
    screenShareChange: [{
      type: Output
    }]
  });
})();
var DeviceMenuComponent = class _DeviceMenuComponent {
  devices = inject(DevicesService);
  disabled = false;
  labels = {};
  videoDeviceChange = new EventEmitter();
  audioDeviceChange = new EventEmitter();
  audioOutputDeviceChange = new EventEmitter();
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  videoDevices = [];
  audioInputDevices = [];
  audioOutputDevices = [];
  loadDevices() {
    return __async(this, null, function* () {
      try {
        const devices = yield navigator.mediaDevices.enumerateDevices();
        this.videoDevices = devices.filter((d2) => d2.kind === "videoinput");
        this.audioInputDevices = devices.filter((d2) => d2.kind === "audioinput");
        this.audioOutputDevices = devices.filter((d2) => d2.kind === "audiooutput");
      } catch {
      }
    });
  }
  selectVideoDevice(deviceId) {
    return __async(this, null, function* () {
      yield this.devices.setVideoDevice(deviceId);
      this.videoDeviceChange.emit(deviceId);
    });
  }
  selectAudioInput(deviceId) {
    return __async(this, null, function* () {
      yield this.devices.setAudioInputDevice(deviceId);
      this.audioDeviceChange.emit(deviceId);
    });
  }
  selectAudioOutput(deviceId) {
    return __async(this, null, function* () {
      yield this.devices.setAudioOutputDevice(deviceId);
      this.audioOutputDeviceChange.emit(deviceId);
    });
  }
  static ɵfac = function DeviceMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceMenuComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DeviceMenuComponent,
    selectors: [["hiyve-device-menu"]],
    inputs: {
      disabled: "disabled",
      labels: "labels"
    },
    outputs: {
      videoDeviceChange: "videoDeviceChange",
      audioDeviceChange: "audioDeviceChange",
      audioOutputDeviceChange: "audioOutputDeviceChange"
    },
    decls: 8,
    vars: 6,
    consts: [["deviceMenu", "matMenu"], ["mat-mini-fab", "", 3, "menuOpened", "matMenuTriggerFor", "disabled", "matTooltip"], [1, "device-section-label"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
    template: function DeviceMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 1);
        ɵɵlistener("menuOpened", function DeviceMenuComponent_Template_button_menuOpened_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.loadDevices());
        });
        ɵɵelementStart(1, "mat-icon");
        ɵɵtext(2, "settings");
        ɵɵelementEnd()();
        ɵɵelementStart(3, "mat-menu", null, 0);
        ɵɵconditionalCreate(5, DeviceMenuComponent_Conditional_5_Template, 4, 1);
        ɵɵconditionalCreate(6, DeviceMenuComponent_Conditional_6_Template, 4, 1);
        ɵɵconditionalCreate(7, DeviceMenuComponent_Conditional_7_Template, 4, 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const deviceMenu_r12 = ɵɵreference(4);
        ɵɵproperty("matMenuTriggerFor", deviceMenu_r12)("disabled", ctx.disabled)("matTooltip", ctx.mergedLabels.settings);
        ɵɵadvance(5);
        ɵɵconditional(ctx.videoDevices.length > 0 ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.audioInputDevices.length > 0 ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.audioOutputDevices.length > 0 ? 7 : -1);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltipModule, MatTooltip],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceMenuComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-device-menu",
      standalone: true,
      imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<button
  mat-mini-fab
  [matMenuTriggerFor]="deviceMenu"
  [disabled]="disabled"
  [matTooltip]="mergedLabels.settings!"
  (menuOpened)="loadDevices()"
>
  <mat-icon>settings</mat-icon>
</button>

<mat-menu #deviceMenu="matMenu">
  @if (videoDevices.length > 0) {
    <div class="device-section-label">{{ mergedLabels.camera }}</div>
    @for (device of videoDevices; track device.deviceId) {
      <button mat-menu-item (click)="selectVideoDevice(device.deviceId)">
        <mat-icon>videocam</mat-icon>
        <span>{{ device.label || 'Camera ' + ($index + 1) }}</span>
      </button>
    }
  }

  @if (audioInputDevices.length > 0) {
    <div class="device-section-label">{{ mergedLabels.microphone }}</div>
    @for (device of audioInputDevices; track device.deviceId) {
      <button mat-menu-item (click)="selectAudioInput(device.deviceId)">
        <mat-icon>mic</mat-icon>
        <span>{{ device.label || 'Microphone ' + ($index + 1) }}</span>
      </button>
    }
  }

  @if (audioOutputDevices.length > 0) {
    <div class="device-section-label">{{ mergedLabels.speaker }}</div>
    @for (device of audioOutputDevices; track device.deviceId) {
      <button mat-menu-item (click)="selectAudioOutput(device.deviceId)">
        <mat-icon>volume_up</mat-icon>
        <span>{{ device.label || 'Speaker ' + ($index + 1) }}</span>
      </button>
    }
  }
</mat-menu>
`
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    videoDeviceChange: [{
      type: Output
    }],
    audioDeviceChange: [{
      type: Output
    }],
    audioOutputDeviceChange: [{
      type: Output
    }]
  });
})();
var LayoutMenuComponent = class _LayoutMenuComponent {
  disabled = false;
  labels = {};
  layouts = DEFAULT_LAYOUTS;
  layoutChange = new EventEmitter();
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  onSelectLayout(layoutId) {
    this.layoutChange.emit(layoutId);
  }
  static ɵfac = function LayoutMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutMenuComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LayoutMenuComponent,
    selectors: [["hiyve-layout-menu"]],
    inputs: {
      disabled: "disabled",
      labels: "labels",
      layouts: "layouts"
    },
    outputs: {
      layoutChange: "layoutChange"
    },
    decls: 7,
    vars: 3,
    consts: [["layoutMenu", "matMenu"], ["mat-mini-fab", "", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
    template: function LayoutMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 1)(1, "mat-icon");
        ɵɵtext(2, "grid_view");
        ɵɵelementEnd()();
        ɵɵelementStart(3, "mat-menu", null, 0);
        ɵɵrepeaterCreate(5, LayoutMenuComponent_For_6_Template, 5, 2, "button", 2, _forTrack2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const layoutMenu_r4 = ɵɵreference(4);
        ɵɵproperty("matMenuTriggerFor", layoutMenu_r4)("disabled", ctx.disabled)("matTooltip", ctx.mergedLabels.layout);
        ɵɵadvance(5);
        ɵɵrepeater(ctx.layouts);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltipModule, MatTooltip],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutMenuComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-layout-menu",
      standalone: true,
      imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<button\n  mat-mini-fab\n  [matMenuTriggerFor]="layoutMenu"\n  [disabled]="disabled"\n  [matTooltip]="mergedLabels.layout!"\n>\n  <mat-icon>grid_view</mat-icon>\n</button>\n\n<mat-menu #layoutMenu="matMenu">\n  @for (layout of layouts; track layout.id) {\n    <button mat-menu-item (click)="onSelectLayout(layout.id)">\n      <mat-icon>{{ layout.icon }}</mat-icon>\n      <span>{{ layout.label }}</span>\n    </button>\n  }\n</mat-menu>\n'
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    layouts: [{
      type: Input
    }],
    layoutChange: [{
      type: Output
    }]
  });
})();
var RecordingMenuComponent = class _RecordingMenuComponent {
  recordingService = inject(RecordingService);
  streamingService = inject(StreamingService);
  room = inject(RoomService);
  showStreamingOption = false;
  disabled = false;
  labels = {};
  recordingStarted = new EventEmitter();
  recordingStopped = new EventEmitter();
  streamingStarted = new EventEmitter();
  streamingStopped = new EventEmitter();
  recording$ = this.recordingService.recording$;
  streaming$ = this.streamingService.streaming$;
  recordingDuration$ = this.recordingService.recordingDuration$;
  streamingDuration$ = this.streamingService.streamingDuration$;
  isOwner$ = this.room.isOwner$;
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  onStartRecording() {
    return __async(this, null, function* () {
      yield this.recordingService.startRecording();
      this.recordingStarted.emit();
    });
  }
  onStopRecording() {
    return __async(this, null, function* () {
      yield this.recordingService.stopRecording();
      this.recordingStopped.emit();
    });
  }
  onStartStreaming() {
    return __async(this, null, function* () {
      yield this.streamingService.startStreaming();
      this.streamingStarted.emit();
    });
  }
  onStopStreaming() {
    return __async(this, null, function* () {
      yield this.streamingService.stopStreaming();
      this.streamingStopped.emit();
    });
  }
  static ɵfac = function RecordingMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordingMenuComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RecordingMenuComponent,
    selectors: [["hiyve-recording-menu"]],
    inputs: {
      showStreamingOption: "showStreamingOption",
      disabled: "disabled",
      labels: "labels"
    },
    outputs: {
      recordingStarted: "recordingStarted",
      recordingStopped: "recordingStopped",
      streamingStarted: "streamingStarted",
      streamingStopped: "streamingStopped"
    },
    decls: 2,
    vars: 3,
    consts: [["recordingMenu", "matMenu"], ["mat-mini-fab", "", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
    template: function RecordingMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, RecordingMenuComponent_Conditional_0_Template, 2, 3);
        ɵɵpipe(1, "async");
      }
      if (rf & 2) {
        ɵɵconditional(ɵɵpipeBind1(1, 1, ctx.isOwner$) ? 0 : -1);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltipModule, MatTooltip, AsyncPipe, HiyveDurationPipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordingMenuComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-recording-menu",
      standalone: true,
      imports: [AsyncPipe, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, HiyveDurationPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (isOwner$ | async) {
  @if (recording$ | async; as rec) {
    @if (streaming$ | async; as stream) {
      <button
        mat-mini-fab
        [matMenuTriggerFor]="recordingMenu"
        [disabled]="disabled"
        [class.recording]="rec.isRecording"
        [class.streaming]="stream.isStreaming"
        [matTooltip]="mergedLabels.recordRoom!"
      >
        <mat-icon>{{ rec.isRecording ? 'stop' : 'fiber_manual_record' }}</mat-icon>
      </button>

      <mat-menu #recordingMenu="matMenu">
        @if (!rec.isRecording && !rec.isRecordingStarting) {
          <button mat-menu-item (click)="onStartRecording()">
            <mat-icon>fiber_manual_record</mat-icon>
            <span>{{ mergedLabels.recordRoom }}</span>
          </button>
        } @else {
          <button mat-menu-item (click)="onStopRecording()">
            <mat-icon>stop</mat-icon>
            <span>{{ mergedLabels.stopRecording }} ({{ recordingDuration$ | async | hiyveDuration }})</span>
          </button>
        }

        @if (showStreamingOption) {
          @if (!stream.isStreaming && !stream.isStreamingStarting) {
            <button mat-menu-item (click)="onStartStreaming()">
              <mat-icon>live_tv</mat-icon>
              <span>{{ mergedLabels.startStreaming }}</span>
            </button>
          } @else {
            <button mat-menu-item (click)="onStopStreaming()">
              <mat-icon>stop</mat-icon>
              <span>{{ mergedLabels.stopStreaming }} ({{ streamingDuration$ | async | hiyveDuration }})</span>
            </button>
          }
        }
      </mat-menu>
    }
  }
}
`
    }]
  }], null, {
    showStreamingOption: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    recordingStarted: [{
      type: Output
    }],
    recordingStopped: [{
      type: Output
    }],
    streamingStarted: [{
      type: Output
    }],
    streamingStopped: [{
      type: Output
    }]
  });
})();
var LeaveButtonComponent = class _LeaveButtonComponent {
  connection = inject(ConnectionService);
  dialog = inject(MatDialog);
  showConfirmation = true;
  disabled = false;
  labels = {};
  colors = {};
  leave = new EventEmitter();
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_COLORS), this.colors);
  }
  onLeave() {
    if (this.showConfirmation) {
      const confirmed = window.confirm(this.mergedLabels.leaveConfirmMessage);
      if (!confirmed) return;
    }
    this.connection.leaveRoom();
    this.leave.emit();
  }
  static ɵfac = function LeaveButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveButtonComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LeaveButtonComponent,
    selectors: [["hiyve-leave-button"]],
    inputs: {
      showConfirmation: "showConfirmation",
      disabled: "disabled",
      labels: "labels",
      colors: "colors"
    },
    outputs: {
      leave: "leave"
    },
    decls: 3,
    vars: 4,
    consts: [["mat-mini-fab", "", 1, "leave-btn", 3, "click", "disabled", "matTooltip"]],
    template: function LeaveButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function LeaveButtonComponent_Template_button_click_0_listener() {
          return ctx.onLeave();
        });
        ɵɵelementStart(1, "mat-icon");
        ɵɵtext(2, "call_end");
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵstyleProp("background-color", ctx.mergedColors.leaveButton);
        ɵɵproperty("disabled", ctx.disabled)("matTooltip", ctx.mergedLabels.leave);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatDialogModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveButtonComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-leave-button",
      standalone: true,
      imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<button\n  mat-mini-fab\n  class="leave-btn"\n  [disabled]="disabled"\n  (click)="onLeave()"\n  [matTooltip]="mergedLabels.leave!"\n  [style.background-color]="mergedColors.leaveButton"\n>\n  <mat-icon>call_end</mat-icon>\n</button>\n'
    }]
  }], null, {
    showConfirmation: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    leave: [{
      type: Output
    }]
  });
})();
var FeatureControlsComponent = class _FeatureControlsComponent {
  handRaiseService = inject(HandRaiseService);
  room = inject(RoomService);
  showHandRaise = true;
  disabled = false;
  labels = {};
  handRaiseChange = new EventEmitter();
  isOwner$ = this.room.isOwner$;
  raisedHands$ = this.handRaiseService.raisedHands$;
  // Track local hand raise state via toggle
  isLocalHandRaised = false;
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  onToggleHandRaise() {
    return __async(this, null, function* () {
      yield this.handRaiseService.toggleHandRaised();
      this.isLocalHandRaised = !this.isLocalHandRaised;
      this.handRaiseChange.emit(this.isLocalHandRaised);
    });
  }
  onLowerAllHands() {
    return __async(this, null, function* () {
      yield this.handRaiseService.lowerAllHands();
    });
  }
  static ɵfac = function FeatureControlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureControlsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FeatureControlsComponent,
    selectors: [["hiyve-feature-controls"]],
    inputs: {
      showHandRaise: "showHandRaise",
      disabled: "disabled",
      labels: "labels"
    },
    outputs: {
      handRaiseChange: "handRaiseChange"
    },
    decls: 1,
    vars: 1,
    consts: [["mat-mini-fab", "", 3, "active", "disabled", "matTooltip"], ["mat-mini-fab", "", 3, "click", "disabled", "matTooltip"]],
    template: function FeatureControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, FeatureControlsComponent_Conditional_0_Template, 3, 5, "button", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.showHandRaise ? 0 : -1);
      }
    },
    dependencies: [MatButtonModule, MatMiniFabButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureControlsComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-feature-controls",
      standalone: true,
      imports: [AsyncPipe, MatButtonModule, MatIconModule, MatTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (showHandRaise) {
  <button
    mat-mini-fab
    [class.active]="isLocalHandRaised"
    [disabled]="disabled"
    (click)="onToggleHandRaise()"
    [matTooltip]="isLocalHandRaised ? mergedLabels.lowerHand! : mergedLabels.handRaise!"
  >
    <mat-icon>{{ isLocalHandRaised ? 'do_not_touch' : 'pan_tool' }}</mat-icon>
  </button>
}
`
    }]
  }], null, {
    showHandRaise: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    handRaiseChange: [{
      type: Output
    }]
  });
})();
var ControlBarComponent = class _ControlBarComponent {
  // Visibility inputs
  showAudioToggle = true;
  showVideoToggle = true;
  showScreenShare = true;
  showSettings = true;
  showLeaveButton = true;
  showLeaveConfirmation = true;
  showLayoutSelector = false;
  showHandRaise = false;
  showRecordingMenu = false;
  showStreamingOption = false;
  showFeatureControls = false;
  disabled = false;
  // Config inputs
  layouts = DEFAULT_LAYOUTS;
  // Customization inputs
  labels = {};
  colors = {};
  styles = {};
  // Events
  leave = new EventEmitter();
  audioMuteChange = new EventEmitter();
  videoMuteChange = new EventEmitter();
  screenShareChange = new EventEmitter();
  layoutChange = new EventEmitter();
  handRaiseChange = new EventEmitter();
  recordingStarted = new EventEmitter();
  recordingStopped = new EventEmitter();
  streamingStarted = new EventEmitter();
  streamingStopped = new EventEmitter();
  videoDeviceChange = new EventEmitter();
  audioDeviceChange = new EventEmitter();
  audioOutputDeviceChange = new EventEmitter();
  controlBarError = new EventEmitter();
  get mergedLabels() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_LABELS), this.labels);
  }
  get mergedColors() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_COLORS), this.colors);
  }
  get mergedStyles() {
    return __spreadValues(__spreadValues({}, DEFAULT_CONTROL_BAR_STYLES), this.styles);
  }
  get containerStyle() {
    const s2 = this.mergedStyles;
    const c2 = this.mergedColors;
    return {
      "background": c2.background || "rgba(0,0,0,0.85)",
      "padding": s2.padding || "8px 16px",
      "gap": s2.gap || "8px",
      "border-radius": s2.borderRadius || "12px"
    };
  }
  onLeave() {
    this.leave.emit();
  }
  static ɵfac = function ControlBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ControlBarComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ControlBarComponent,
    selectors: [["hiyve-control-bar"]],
    inputs: {
      showAudioToggle: "showAudioToggle",
      showVideoToggle: "showVideoToggle",
      showScreenShare: "showScreenShare",
      showSettings: "showSettings",
      showLeaveButton: "showLeaveButton",
      showLeaveConfirmation: "showLeaveConfirmation",
      showLayoutSelector: "showLayoutSelector",
      showHandRaise: "showHandRaise",
      showRecordingMenu: "showRecordingMenu",
      showStreamingOption: "showStreamingOption",
      showFeatureControls: "showFeatureControls",
      disabled: "disabled",
      layouts: "layouts",
      labels: "labels",
      colors: "colors",
      styles: "styles"
    },
    outputs: {
      leave: "leave",
      audioMuteChange: "audioMuteChange",
      videoMuteChange: "videoMuteChange",
      screenShareChange: "screenShareChange",
      layoutChange: "layoutChange",
      handRaiseChange: "handRaiseChange",
      recordingStarted: "recordingStarted",
      recordingStopped: "recordingStopped",
      streamingStarted: "streamingStarted",
      streamingStopped: "streamingStopped",
      videoDeviceChange: "videoDeviceChange",
      audioDeviceChange: "audioDeviceChange",
      audioOutputDeviceChange: "audioOutputDeviceChange",
      controlBarError: "controlBarError"
    },
    ngContentSelectors: _c11,
    decls: 9,
    vars: 13,
    consts: [[1, "control-bar"], [3, "audioMuteChange", "videoMuteChange", "screenShareChange", "showAudioToggle", "showVideoToggle", "showScreenShare", "disabled", "labels", "colors"], [3, "disabled", "labels"], [3, "disabled", "labels", "layouts"], [3, "showHandRaise", "disabled", "labels"], [3, "showStreamingOption", "disabled", "labels"], [1, "control-divider"], [3, "showConfirmation", "disabled", "labels", "colors"], [3, "videoDeviceChange", "audioDeviceChange", "audioOutputDeviceChange", "disabled", "labels"], [3, "layoutChange", "disabled", "labels", "layouts"], [3, "handRaiseChange", "showHandRaise", "disabled", "labels"], [3, "recordingStarted", "recordingStopped", "streamingStarted", "streamingStopped", "showStreamingOption", "disabled", "labels"], [3, "leave", "showConfirmation", "disabled", "labels", "colors"]],
    template: function ControlBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c10);
        ɵɵelementStart(0, "div", 0)(1, "hiyve-media-controls", 1);
        ɵɵlistener("audioMuteChange", function ControlBarComponent_Template_hiyve_media_controls_audioMuteChange_1_listener($event) {
          return ctx.audioMuteChange.emit($event);
        })("videoMuteChange", function ControlBarComponent_Template_hiyve_media_controls_videoMuteChange_1_listener($event) {
          return ctx.videoMuteChange.emit($event);
        })("screenShareChange", function ControlBarComponent_Template_hiyve_media_controls_screenShareChange_1_listener($event) {
          return ctx.screenShareChange.emit($event);
        });
        ɵɵelementEnd();
        ɵɵconditionalCreate(2, ControlBarComponent_Conditional_2_Template, 1, 2, "hiyve-device-menu", 2);
        ɵɵconditionalCreate(3, ControlBarComponent_Conditional_3_Template, 1, 3, "hiyve-layout-menu", 3);
        ɵɵconditionalCreate(4, ControlBarComponent_Conditional_4_Template, 1, 3, "hiyve-feature-controls", 4);
        ɵɵconditionalCreate(5, ControlBarComponent_Conditional_5_Template, 1, 3, "hiyve-recording-menu", 5);
        ɵɵprojection(6);
        ɵɵelement(7, "div", 6);
        ɵɵconditionalCreate(8, ControlBarComponent_Conditional_8_Template, 1, 4, "hiyve-leave-button", 7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.containerStyle);
        ɵɵadvance();
        ɵɵproperty("showAudioToggle", ctx.showAudioToggle)("showVideoToggle", ctx.showVideoToggle)("showScreenShare", ctx.showScreenShare)("disabled", ctx.disabled)("labels", ctx.labels)("colors", ctx.colors);
        ɵɵadvance();
        ɵɵconditional(ctx.showSettings ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showLayoutSelector ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showFeatureControls || ctx.showHandRaise ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showRecordingMenu ? 5 : -1);
        ɵɵadvance(3);
        ɵɵconditional(ctx.showLeaveButton ? 8 : -1);
      }
    },
    dependencies: [MediaControlsComponent, DeviceMenuComponent, LayoutMenuComponent, RecordingMenuComponent, LeaveButtonComponent, FeatureControlsComponent],
    styles: ["[_nghost-%COMP%]{display:block}.control-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab{width:40px;height:40px}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.active{background:#fff3}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.muted{background:#f443364d}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.muted:hover{background:#f4433666}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.sharing{background:#4caf504d}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.recording{background:#f443364d}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.streaming{background:#4caf504d}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.leave-btn{background:#f44336}.control-bar[_ngcontent-%COMP%]     button.mat-mdc-mini-fab.leave-btn:hover{background:#d32f2f}.control-divider[_ngcontent-%COMP%]{width:1px;height:24px;background:#fff3;margin:0 4px}  .device-section-label{padding:8px 16px 4px;font-size:11px;font-weight:500;text-transform:uppercase;color:#ffffff80;letter-spacing:.5px}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlBarComponent, [{
    type: Component,
    args: [{
      selector: "hiyve-control-bar",
      standalone: true,
      imports: [MediaControlsComponent, DeviceMenuComponent, LayoutMenuComponent, RecordingMenuComponent, LeaveButtonComponent, FeatureControlsComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="control-bar" [style]="containerStyle">\n  <!-- Media Controls -->\n  <hiyve-media-controls\n    [showAudioToggle]="showAudioToggle"\n    [showVideoToggle]="showVideoToggle"\n    [showScreenShare]="showScreenShare"\n    [disabled]="disabled"\n    [labels]="labels"\n    [colors]="colors"\n    (audioMuteChange)="audioMuteChange.emit($event)"\n    (videoMuteChange)="videoMuteChange.emit($event)"\n    (screenShareChange)="screenShareChange.emit($event)"\n  ></hiyve-media-controls>\n\n  <!-- Device Menu -->\n  @if (showSettings) {\n    <hiyve-device-menu\n      [disabled]="disabled"\n      [labels]="labels"\n      (videoDeviceChange)="videoDeviceChange.emit($event)"\n      (audioDeviceChange)="audioDeviceChange.emit($event)"\n      (audioOutputDeviceChange)="audioOutputDeviceChange.emit($event)"\n    ></hiyve-device-menu>\n  }\n\n  <!-- Layout Selector -->\n  @if (showLayoutSelector) {\n    <hiyve-layout-menu\n      [disabled]="disabled"\n      [labels]="labels"\n      [layouts]="layouts"\n      (layoutChange)="layoutChange.emit($event)"\n    ></hiyve-layout-menu>\n  }\n\n  <!-- Feature Controls (Hand Raise) -->\n  @if (showFeatureControls || showHandRaise) {\n    <hiyve-feature-controls\n      [showHandRaise]="showHandRaise"\n      [disabled]="disabled"\n      [labels]="labels"\n      (handRaiseChange)="handRaiseChange.emit($event)"\n    ></hiyve-feature-controls>\n  }\n\n  <!-- Recording Menu -->\n  @if (showRecordingMenu) {\n    <hiyve-recording-menu\n      [showStreamingOption]="showStreamingOption"\n      [disabled]="disabled"\n      [labels]="labels"\n      (recordingStarted)="recordingStarted.emit()"\n      (recordingStopped)="recordingStopped.emit()"\n      (streamingStarted)="streamingStarted.emit()"\n      (streamingStopped)="streamingStopped.emit()"\n    ></hiyve-recording-menu>\n  }\n\n  <!-- Extra controls projection -->\n  <ng-content select="[hiyveExtraControls]"></ng-content>\n\n  <div class="control-divider"></div>\n\n  <!-- Leave Button -->\n  @if (showLeaveButton) {\n    <hiyve-leave-button\n      [showConfirmation]="showLeaveConfirmation"\n      [disabled]="disabled"\n      [labels]="labels"\n      [colors]="colors"\n      (leave)="onLeave()"\n    ></hiyve-leave-button>\n  }\n</div>\n',
      styles: [":host{display:block}.control-bar{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.control-bar ::ng-deep button.mat-mdc-mini-fab{width:40px;height:40px}.control-bar ::ng-deep button.mat-mdc-mini-fab.active{background:#fff3}.control-bar ::ng-deep button.mat-mdc-mini-fab.muted{background:#f443364d}.control-bar ::ng-deep button.mat-mdc-mini-fab.muted:hover{background:#f4433666}.control-bar ::ng-deep button.mat-mdc-mini-fab.sharing{background:#4caf504d}.control-bar ::ng-deep button.mat-mdc-mini-fab.recording{background:#f443364d}.control-bar ::ng-deep button.mat-mdc-mini-fab.streaming{background:#4caf504d}.control-bar ::ng-deep button.mat-mdc-mini-fab.leave-btn{background:#f44336}.control-bar ::ng-deep button.mat-mdc-mini-fab.leave-btn:hover{background:#d32f2f}.control-divider{width:1px;height:24px;background:#fff3;margin:0 4px}::ng-deep .device-section-label{padding:8px 16px 4px;font-size:11px;font-weight:500;text-transform:uppercase;color:#ffffff80;letter-spacing:.5px}\n"]
    }]
  }], null, {
    showAudioToggle: [{
      type: Input
    }],
    showVideoToggle: [{
      type: Input
    }],
    showScreenShare: [{
      type: Input
    }],
    showSettings: [{
      type: Input
    }],
    showLeaveButton: [{
      type: Input
    }],
    showLeaveConfirmation: [{
      type: Input
    }],
    showLayoutSelector: [{
      type: Input
    }],
    showHandRaise: [{
      type: Input
    }],
    showRecordingMenu: [{
      type: Input
    }],
    showStreamingOption: [{
      type: Input
    }],
    showFeatureControls: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    layouts: [{
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
    leave: [{
      type: Output
    }],
    audioMuteChange: [{
      type: Output
    }],
    videoMuteChange: [{
      type: Output
    }],
    screenShareChange: [{
      type: Output
    }],
    layoutChange: [{
      type: Output
    }],
    handRaiseChange: [{
      type: Output
    }],
    recordingStarted: [{
      type: Output
    }],
    recordingStopped: [{
      type: Output
    }],
    streamingStarted: [{
      type: Output
    }],
    streamingStopped: [{
      type: Output
    }],
    videoDeviceChange: [{
      type: Output
    }],
    audioDeviceChange: [{
      type: Output
    }],
    audioOutputDeviceChange: [{
      type: Output
    }],
    controlBarError: [{
      type: Output
    }]
  });
})();
export {
  AiChatService,
  AudioProcessingService,
  ChatService,
  ConnectionService,
  ControlBarComponent,
  DEFAULT_CONTROL_BAR_COLORS,
  DEFAULT_CONTROL_BAR_LABELS,
  DEFAULT_CONTROL_BAR_STYLES,
  DEFAULT_LAYOUTS,
  DEFAULT_VIDEO_GRID_COLORS,
  DEFAULT_VIDEO_GRID_STYLES,
  DEFAULT_VIDEO_TILE_COLORS,
  DEFAULT_VIDEO_TILE_LABELS,
  DEFAULT_VIDEO_TILE_STYLES,
  DeviceMenuComponent,
  DevicesService,
  FeatureControlsComponent,
  HIYVE_CONFIG,
  HandRaiseService,
  HiyveDurationPipe,
  HiyveService,
  JoinTokenService,
  LayoutMenuComponent,
  LayoutService,
  LeaveButtonComponent,
  LocalMediaService,
  LocalVideoTileComponent,
  MediaControlsComponent,
  MediaStreamDirective,
  ParticipantsService,
  RecordingMenuComponent,
  RecordingService,
  RoomService,
  StreamingService,
  TranscriptionService,
  VideoGridComponent,
  VideoTileComponent,
  WaitForHostService,
  WaitingRoomService,
  C2 as calculateSidebarLayout,
  L2 as calculateSpeakerLayout,
  S3 as getGridClass,
  y3 as getGridColumns,
  v2 as getPositionStyles,
  provideHiyve
};
//# sourceMappingURL=@hiyve_angular.js.map
