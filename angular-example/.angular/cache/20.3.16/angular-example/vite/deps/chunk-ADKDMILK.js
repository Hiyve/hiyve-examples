import {
  Injectable,
  InjectionToken,
  NgZone,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QJF4VL4L.js";
import {
  BehaviorSubject,
  map,
  of,
  switchMap,
  timer
} from "./chunk-RSS3ODKE.js";
import {
  __async,
  __asyncGenerator,
  __await,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/rtc-client/dist/hiyve-rtc-client.mjs
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
  return $t || ($t = 1, Object.defineProperty(Ft, "h", { value: true }), Ft.getRtpEncodings = ({ offerMediaObject: t2, codecs: e2 }) => {
    const i2 = /* @__PURE__ */ new Set();
    for (const o2 of t2.ssrcs ?? []) {
      const t3 = o2.id;
      t3 && i2.add(t3);
    }
    if (0 === i2.size) throw Error("no a=ssrc lines found");
    const s2 = /* @__PURE__ */ new Map();
    for (const o2 of t2.ssrcGroups ?? []) {
      if ("FID" !== o2.semantics) continue;
      const t3 = o2.ssrcs.split(/\s+/), e3 = +t3[0], r3 = +t3[1];
      i2.has(e3) && (i2.delete(e3), i2.delete(r3), s2.set(e3, r3));
    }
    for (const o2 of i2) s2.set(o2, void 0);
    const r2 = [];
    for (const [o2, n2] of s2) {
      const t3 = { ssrc: o2 };
      n2 && e2.length > 1 && (t3.rtx = { ssrc: n2 }), r2.push(t3);
    }
    return r2;
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
        const y3 = [];
        y3.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v2 = i3.getLocalRtpCapabilities(g3, y3), b2 = this.Y(v2), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 })), l3?.absCaptureTime && (a2.addHeaderExtension({ offerMediaObject: g3.media[m3.idx], headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        const T3 = f3.mid;
        E3.mid = T3, g3 = t2.parse(this.Mt.localDescription.sdp);
        const R2 = g3.media[m3.idx];
        if (E3.rtcp.cname = a2.getCname({ offerMediaObject: R2 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          const t3 = c2.getRtpEncodings({ offerMediaObject: R2, codecs: E3.codecs });
          Object.assign(t3[0], n3[0]), E3.encodings = t3;
        } else E3.encodings = n3;
        else E3.encodings = c2.getRtpEncodings({ offerMediaObject: R2, codecs: E3.codecs });
        this.xt.send({ offerMediaObject: R2, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const S3 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", S3), yield this.Mt.setRemoteDescription(S3), this.At.set(T3, f3), { localId: T3, rtpParameters: E3, rtpSender: f3.sender };
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
        const y3 = e3.getLocalRtpCapabilities(w3, g3), v2 = this.Y(y3), b2 = s2.getSendingRtpParameters(i3.kind, v2);
        b2.codecs = s2.reduceCodecs(b2.codecs, u3);
        const E3 = s2.getSendingRemoteRtpParameters(i3.kind, v2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: w3 }));
        let I3 = false;
        const T3 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        let R2;
        1 === n3?.length && T3.spatialLayers > 1 && "video/vp9" === b2.codecs[0].mimeType.toLowerCase() && (d2.debug("send() | enabling legacy simulcast for VP9 SVC"), I3 = true, w3 = t2.parse(f3.sdp), R2 = w3.media[p3.idx], c2.addLegacySimulcast({ offerMediaObject: R2, numStreams: T3.spatialLayers }), f3 = { type: "offer", sdp: t2.write(w3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", f3), l3?.absCaptureTime && (R2 = w3.media[p3.idx], a2.addHeaderExtension({ offerMediaObject: R2, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: E3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), f3 = { type: "offer", sdp: t2.write(w3) }), yield this.Mt.setLocalDescription(f3);
        const S3 = m3.mid;
        if (b2.mid = S3, w3 = t2.parse(this.Mt.localDescription.sdp), R2 = w3.media[p3.idx], b2.rtcp.cname = a2.getCname({ offerMediaObject: R2 }), b2.msid = `${r3 ?? this.Nt.id} ${i3.id}`, n3) if (1 === n3.length) {
          let t3 = c2.getRtpEncodings({ offerMediaObject: R2, codecs: b2.codecs });
          Object.assign(t3[0], n3[0]), I3 && (t3 = [t3[0]]), b2.encodings = t3;
        } else b2.encodings = n3;
        else b2.encodings = c2.getRtpEncodings({ offerMediaObject: R2, codecs: b2.codecs });
        if (b2.encodings.length > 1 && ("video/vp8" === b2.codecs[0].mimeType.toLowerCase() || "video/h264" === b2.codecs[0].mimeType.toLowerCase())) for (const t3 of b2.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + T3.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: R2, reuseMid: p3.reuseMid, offerRtpParameters: b2, answerRtpParameters: E3, codecOptions: h3 });
        const k2 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", k2), yield this.Mt.setRemoteDescription(k2), this.At.set(S3, m3), { localId: S3, rtpParameters: b2, rtpSender: m3.sender };
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
        const w3 = i3.getLocalRtpCapabilities(f3), g3 = this.Y(w3), y3 = r2.getSendingRtpParameters(e3.kind, g3);
        y3.codecs = r2.reduceCodecs(y3.codecs, l3);
        const v2 = r2.getSendingRemoteRtpParameters(e3.kind, g3);
        v2.codecs = r2.reduceCodecs(v2.codecs, l3), this.Ft || (yield this.setupTransport({ localDtlsRole: "client", localSdpObject: f3 }));
        const b2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", m3), yield this.Mt.setLocalDescription(m3);
        const E3 = p3.mid;
        y3.mid = E3, f3 = t2.parse(this.Mt.localDescription.sdp);
        const I3 = f3.media[f3.media.length - 1];
        if (y3.rtcp.cname = a2.getCname({ offerMediaObject: I3 }), y3.msid = `${s3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          const t3 = c2.getRtpEncodings({ offerMediaObject: I3, codecs: y3.codecs });
          Object.assign(t3[0], n3[0]), y3.encodings = t3;
        } else y3.encodings = n3;
        else y3.encodings = c2.getRtpEncodings({ offerMediaObject: I3, codecs: y3.codecs });
        if (y3.encodings.length > 1 && ("video/vp8" === y3.codecs[0].mimeType.toLowerCase() || "video/h264" === y3.codecs[0].mimeType.toLowerCase())) for (const t3 of y3.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + b2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: I3, offerRtpParameters: y3, answerRtpParameters: v2, codecOptions: h3 });
        const T3 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", T3), yield this.Mt.setRemoteDescription(T3), this.At.set(E3, p3), { localId: E3, rtpParameters: y3, rtpSender: p3.sender };
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
        const y3 = [];
        y3.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v2 = i3.getLocalRtpCapabilities(g3, y3), b2 = this.Y(v2), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        let T3;
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 }));
        const R2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        n3 && n3.length > 1 && (d2.debug("send() | enabling legacy simulcast"), g3 = t2.parse(w3.sdp), T3 = g3.media[m3.idx], c2.addLegacySimulcast({ offerMediaObject: T3, numStreams: n3.length }), w3 = { type: "offer", sdp: t2.write(g3) }), l3?.absCaptureTime && (T3 = g3.media[m3.idx], a2.addHeaderExtension({ offerMediaObject: T3, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        const S3 = f3.mid;
        if (E3.mid = S3, g3 = t2.parse(this.Mt.localDescription.sdp), T3 = g3.media[m3.idx], E3.rtcp.cname = a2.getCname({ offerMediaObject: T3 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, E3.encodings = c2.getRtpEncodings({ offerMediaObject: T3, codecs: E3.codecs }), n3) for (let t3 = 0; E3.encodings.length > t3; ++t3) n3[t3] && Object.assign(E3.encodings[t3], n3[t3]);
        if (E3.encodings.length > 1 && ("video/vp8" === E3.codecs[0].mimeType.toLowerCase() || "video/h264" === E3.codecs[0].mimeType.toLowerCase())) for (const t3 of E3.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + R2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: T3, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const k2 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", k2), yield this.Mt.setRemoteDescription(k2), this.At.set(S3, f3), { localId: S3, rtpParameters: E3, rtpSender: f3.sender };
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
        const y3 = [];
        y3.push({ uri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", kind: e3.kind, direction: "sendonly" });
        const v2 = i3.getLocalRtpCapabilities(g3, y3), b2 = this.Y(v2), E3 = s2.getSendingRtpParameters(e3.kind, b2);
        E3.codecs = s2.reduceCodecs(E3.codecs, u3);
        const I3 = s2.getSendingRemoteRtpParameters(e3.kind, b2);
        I3.codecs = s2.reduceCodecs(I3.codecs, u3), this.Ft || (yield this.setupTransport({ localDtlsRole: this.Ot ?? "client", localSdpObject: g3 }));
        let T3 = false;
        const R2 = (0, o2.parse)((n3 ?? [{}])[0].scalabilityMode);
        let S3;
        1 === n3?.length && R2.spatialLayers > 1 && "video/vp9" === E3.codecs[0].mimeType.toLowerCase() && (d2.debug("send() | enabling legacy simulcast for VP9 SVC"), T3 = true, g3 = t2.parse(w3.sdp), S3 = g3.media[m3.idx], c2.addLegacySimulcast({ offerMediaObject: S3, numStreams: R2.spatialLayers }), w3 = { type: "offer", sdp: t2.write(g3) }), l3?.absCaptureTime && (S3 = g3.media[m3.idx], a2.addHeaderExtension({ offerMediaObject: S3, headerExtensionUri: "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time", headerExtensionId: I3.headerExtensions.find((t3) => "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time" === t3.uri).id }), w3 = { type: "offer", sdp: t2.write(g3) }), d2.debug("send() | calling pc.setLocalDescription() [offer:%o]", w3), yield this.Mt.setLocalDescription(w3);
        let k2 = f3.mid ?? void 0;
        if (k2 || d2.warn("send() | missing transceiver.mid (bug in react-native-webrtc, using a workaround"), E3.mid = k2, g3 = t2.parse(this.Mt.localDescription.sdp), S3 = g3.media[m3.idx], E3.rtcp.cname = a2.getCname({ offerMediaObject: S3 }), E3.msid = `${r3 ?? this.Nt.id} ${e3.id}`, n3) if (1 === n3.length) {
          let t3 = c2.getRtpEncodings({ offerMediaObject: S3, codecs: E3.codecs });
          Object.assign(t3[0], n3[0]), T3 && (t3 = [t3[0]]), E3.encodings = t3;
        } else E3.encodings = n3;
        else E3.encodings = c2.getRtpEncodings({ offerMediaObject: S3, codecs: E3.codecs });
        if (E3.encodings.length > 1 && ("video/vp8" === E3.codecs[0].mimeType.toLowerCase() || "video/h264" === E3.codecs[0].mimeType.toLowerCase())) for (const t3 of E3.encodings) t3.scalabilityMode = t3.scalabilityMode ? "L1T" + R2.temporalLayers : "L1T3";
        this.xt.send({ offerMediaObject: S3, reuseMid: m3.reuseMid, offerRtpParameters: E3, answerRtpParameters: I3, codecOptions: h3 });
        const C2 = { type: "answer", sdp: this.xt.getSdp() };
        return d2.debug("send() | calling pc.setRemoteDescription() [answer:%o]", C2), yield this.Mt.setRemoteDescription(C2), k2 || (k2 = f3.mid, E3.mid = k2), this.At.set(k2, f3), { localId: k2, rtpParameters: E3, rtpSender: f3.sender };
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
      if (y3()) return void l2.debug("getChromiumMajorVersion() | this is React-Native => undefined");
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
      if (y3()) return void l2.debug("getFirefoxMajorVersion() | this is React-Native => undefined");
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
      if (y3()) return void l2.debug("getMacOSWebKitMajorVersion() | this is React-Native => undefined");
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
      if (y3()) return void l2.debug("getIOSWebKitMajorVersion() | this is React-Native => undefined");
      const e4 = t4?.match(/AppleWebKit\/(\w+)/i);
      if (e4?.[1]) {
        const t5 = +e4[1];
        return l2.debug("getIOSWebKitMajorVersion() | WebKit major version based on User-Agent => " + t5), t5;
      }
      l2.debug("getIOSWebKitMajorVersion() | this is not WebKit => undefined");
    })(t3);
    return o3 ? 605 > o3 ? void l2.warn("detectDeviceImpl() | unsupported iOS Safari based browser/version") : (l2.debug("detectDeviceImpl() | using Safari12 handler"), "Safari12") : y3() ? "undefined" != typeof RTCPeerConnection && "undefined" != typeof RTCRtpTransceiver ? (l2.debug("detectDeviceImpl() | using ReactNative106 handler"), "ReactNative106") : void l2.warn("detectDeviceImpl() | unsupported react-native-webrtc version without RTCPeerConnection or RTCRtpTransceiver, forgot to call registerGlobals() on it?") : void l2.warn('detectDeviceImpl() | device not supported [userAgent:"%s", userAgentData:%o]', t3, e3);
  }
  function w3(t3, e3) {
    return l2.debug("isIOS()"), "iOS" === e3?.platform ? (l2.debug("isIOS() | this is iOS based on NavigatorUAData.platform => true"), true) : e3?.platform ? (l2.debug("isIOS() | this is not iOS based on NavigatorUAData.platform => false"), false) : t3 && /iPad|iPhone|iPod/.test(t3) ? (l2.debug("isIOS() | this is iOS based on User-Agent => true"), true) : "object" == typeof navigator && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? (l2.debug("isIOS() | this is iPadOS 13+ based on User-Agent => true"), true) : (l2.debug("isIOS() | this is not iOS => false"), false);
  }
  function y3() {
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
    Object.defineProperty(t2, "h", { value: true }), t2.debug = t2.testFakeParameters = t2.FakeHandler = t2.enhancedEvents = t2.ortc = t2.parseScalabilityMode = t2.detectDeviceAsync = t2.detectDevice = t2.Device = t2.version = t2.types = void 0, t2.debug = d().default, t2.types = p(), t2.version = "3.18.6";
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
    const t2 = navigator.userAgent.toLowerCase(), e2 = navigator.userAgentData, i2 = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(t2) || e2?.mobile, s2 = t2.includes("android"), r2 = /iphone|ipad|ipod/i.test(t2) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, o2 = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, n2 = /ipad|android.*tablet|kindle|silk/i.test(t2) || o2, a2 = t2.includes("wv") || t2.includes("webview") || r2 && !t2.includes("safari") || t2.includes("fban") || t2.includes("fbav"), c2 = !(!navigator.brave || !navigator.brave.isBrave) || t2.includes("brave") || e2?.brands?.some((t3) => "Brave" === t3.brand), h2 = t2.includes("edge") || t2.includes("edg/") || e2?.brands?.some((t3) => t3.brand.includes("Edge")), d2 = t2.includes("edge/") && !t2.includes("edg/"), l2 = t2.includes("edg/") || e2?.brands?.some((t3) => "Microsoft Edge" === t3.brand), u2 = t2.includes("opera") || t2.includes("opr/") || e2?.brands?.some((t3) => "Opera" === t3.brand), p3 = t2.includes("samsungbrowser"), m3 = t2.includes("duckduckgo"), f3 = t2.includes("ucbrowser"), w3 = t2.includes("vivaldi"), g3 = t2.includes("firefox") && !h2, y3 = t2.includes("chrome") && !h2 && !c2 && !u2 && !p3 && !f3 && !w3, v2 = t2.includes("safari") && !t2.includes("chrome") || r2 && !y3 && !g3 && !u2, b2 = t2.includes("webkit"), E3 = y3 && s2, I3 = t2.includes("crios"), T3 = E3 || I3;
    let R2 = false, S3 = 0;
    if (y3 || c2 || l2) {
      try {
        const t3 = "__mediadevice_incognito_test_" + Date.now();
        localStorage.setItem(t3, "1"), localStorage.removeItem(t3);
      } catch (k2) {
        "QuotaExceededError" !== k2.name && 22 !== k2.code && 1014 !== k2.code || (S3 += 2);
      }
      try {
        window.webkitRequestFileSystem && window.webkitRequestFileSystem(0, 0, () => {
        }, () => {
          S3 += 2;
        });
      } catch (k2) {
        S3 += 1;
      }
      try {
        window.indexedDB || (S3 += 1);
      } catch (k2) {
        S3 += 1;
      }
      if (y3) try {
        navigator.webkitTemporaryStorage || (S3 += 1);
      } catch (k2) {
        S3 += 1;
      }
      R2 = S3 >= 2, navigator.storage?.estimate && navigator.storage.estimate().then((t3) => {
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
    if (v2) try {
      localStorage.setItem("__safari_private_test", "1"), localStorage.removeItem("__safari_private_test");
    } catch (k2) {
      R2 = true;
    }
    return { isFirefox: g3, isChrome: y3, isSafari: v2, isEdge: h2, isEdgeLegacy: d2, isEdgeChromium: l2, isBrave: c2, isOpera: u2, isSamsungInternet: p3, isDuckDuckGo: m3, isUCBrowser: f3, isVivaldi: w3, isMobile: i2, isAndroid: s2, isIOS: r2, isTablet: n2, isWebView: a2, isChromeAndroid: E3, isChromeIOS: I3, isChromeMobile: T3, isWebkit: b2, isIncognito: R2, userAgent: t2, incognitoScore: S3 };
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
var g2 = {
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
var D2 = "hiyve-selected-devices";
var _2 = 0;
var p2 = () => `msg-${++_2}`;
var A2 = 0;
var M2 = () => `trans-${++A2}`;
function T2() {
  try {
    const h2 = localStorage.getItem(D2);
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
    const i2 = T2();
    i2[h2] = e2, localStorage.setItem(D2, JSON.stringify(i2));
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
            id: p2(),
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
            id: p2(),
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
      g2.log(" RECORDING_STARTED event:", t2.detail);
    }), i2(Le.RECORDING_STOPPED, () => {
      g2.log(" RECORDING_STOPPED event"), this.updateSlice("recording", {
        isRecording: false,
        isRecordingStarting: false,
        recordingId: null,
        recordingStartTime: null,
        responseId: null,
        error: null
      });
    }), i2(Le.RECORDING_STATE_CHANGED, (t2) => __async(this, null, function* () {
      const { status: n2, recordingId: a2, responseId: s2 } = t2.detail;
      if (g2.log(" RECORDING_STATE_CHANGED event:", { status: n2, recordingId: a2, responseId: s2 }), n2 === "recording started")
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
            g2.warn(" Failed to fetch streaming URL:", o2);
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
        id: p2(),
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
              id: p2(),
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
            id: p2(),
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
      g2.log(" Audio output device changed:", t2.detail);
    }), i2(Le.CONSTRAINTS_RELAXED, (t2) => {
      g2.log(" Media constraints relaxed:", t2.detail);
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
          g2.error(" Error fetching waiting room users:", e2);
        }
    });
  }
  initClient() {
    return __async(this, null, function* () {
      var s2, l2;
      const e2 = yield this.options.generateRoomToken(), i2 = new nr({ roomToken: e2 });
      this.client = i2, this.updateSlice("client", { client: i2 }), this.setupEventHandlers(i2);
      const t2 = T2(), n2 = ((s2 = this.options.connectOptions) == null ? void 0 : s2.videoDeviceId) ?? t2.videoInput, a2 = ((l2 = this.options.connectOptions) == null ? void 0 : l2.audioDeviceId) ?? t2.audioInput;
      return n2 && (yield i2.setLocalVideoDevice({ videoDeviceId: n2 })), a2 && (yield i2.setLocalAudioInputDevice({ audioInputDeviceId: a2 })), i2;
    });
  }
  loadChatHistoryInternal(e2, i2) {
    return __async(this, null, function* () {
      try {
        const t2 = yield e2.getChatHistory({ cursor: null }), { messages: n2 } = t2;
        if (n2 && n2.length > 0) {
          const a2 = n2.map((s2) => ({
            id: s2.id || p2(),
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
        g2.warn(" Failed to load chat history:", t2);
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
            id: p2(),
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
            id: p2(),
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
            id: p2(),
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
      id: p2(),
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
            id: s2.id || p2(),
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
        return g2.error(" Failed to load chat history:", i2), { hasMore: false };
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
          g2.error(" muteRemoteOutput: API call failed", t2);
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
  /** Destroy the store, clean up all resources. */
  destroy() {
    this.client && (this.client.closeConnection(), this.client = null, this.updateSlice("client", { client: null })), this.waitingRoomPollInterval && (clearInterval(this.waitingRoomPollInterval), this.waitingRoomPollInterval = null), this.globalListeners.clear(), this.sliceListeners.clear();
  }
};

// node_modules/@hiyve/angular-provider/dist/fesm2022/hiyve-angular-provider.mjs
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
      aiChat: this.aiChatSubject
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

export {
  HIYVE_CONFIG,
  HiyveService,
  ConnectionService,
  RoomService,
  ParticipantsService,
  LocalMediaService,
  DevicesService,
  RecordingService,
  StreamingService,
  TranscriptionService,
  ChatService,
  WaitingRoomService,
  WaitForHostService,
  LayoutService,
  HandRaiseService,
  AudioProcessingService,
  AiChatService,
  JoinTokenService,
  provideHiyve
};
//# sourceMappingURL=chunk-ADKDMILK.js.map
