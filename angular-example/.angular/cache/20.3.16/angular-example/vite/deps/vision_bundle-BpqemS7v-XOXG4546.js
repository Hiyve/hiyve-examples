import {
  __async
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/core/node_modules/@hiyve/rtc-client/dist/vision_bundle-BpqemS7v.js
var t = "undefined" != typeof self ? self : {};
function n(n2, i2) {
  t: {
    for (var s2 = ["CLOSURE_FLAGS"], e2 = t, r2 = 0; s2.length > r2; r2++) if (null == (e2 = e2[s2[r2]])) {
      s2 = null;
      break t;
    }
    s2 = e2;
  }
  return null != (n2 = s2 && s2[n2]) ? n2 : i2;
}
function i() {
  throw Error("Invalid UTF8");
}
function s(t2, n2) {
  return n2 = String.fromCharCode.apply(null, n2), null == t2 ? n2 : t2 + n2;
}
var e;
var r;
var o = "undefined" != typeof TextDecoder;
var a;
var c = "undefined" != typeof TextEncoder;
function h(t2) {
  if (c) t2 = (a ||= new TextEncoder()).encode(t2);
  else {
    let i2 = 0;
    const s2 = new Uint8Array(3 * t2.length);
    for (let e2 = 0; t2.length > e2; e2++) {
      var n2 = t2.charCodeAt(e2);
      if (128 > n2) s2[i2++] = n2;
      else {
        if (2048 > n2) s2[i2++] = n2 >> 6 | 192;
        else {
          if (n2 >= 55296 && 57343 >= n2) {
            if (56319 >= n2 && t2.length > e2) {
              const r2 = t2.charCodeAt(++e2);
              if (r2 >= 56320 && 57343 >= r2) {
                s2[i2++] = (n2 = 1024 * (n2 - 55296) + r2 - 56320 + 65536) >> 18 | 240, s2[i2++] = n2 >> 12 & 63 | 128, s2[i2++] = n2 >> 6 & 63 | 128, s2[i2++] = 63 & n2 | 128;
                continue;
              }
              e2--;
            }
            n2 = 65533;
          }
          s2[i2++] = n2 >> 12 | 224, s2[i2++] = n2 >> 6 & 63 | 128;
        }
        s2[i2++] = 63 & n2 | 128;
      }
    }
    t2 = i2 === s2.length ? s2 : s2.subarray(0, i2);
  }
  return t2;
}
function u(n2) {
  t.setTimeout(() => {
    throw n2;
  }, 0);
}
var f;
var l = n(610401301, false);
var d = n(748402147, true);
var m = n(824648567, true);
var p = n(824656860, n(1, true));
function v() {
  var n2 = t.navigator;
  return n2 && (n2 = n2.userAgent) ? n2 : "";
}
var w = t.navigator;
function _(t2) {
  return _[" "](t2), t2;
}
f = w && w.userAgentData || null, _[" "] = () => {
};
var g = {};
var y = null;
function b() {
  if (!y) {
    y = {};
    var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n2 = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let i2 = 0; 5 > i2; i2++) {
      const s2 = t2.concat(n2[i2].split(""));
      g[i2] = s2;
      for (let t3 = 0; s2.length > t3; t3++) {
        const n3 = s2[t3];
        void 0 === y[n3] && (y[n3] = t3);
      }
    }
  }
}
var k = "undefined" != typeof Uint8Array;
var A = !!(l && f && f.brands.length > 0 || -1 == v().indexOf("Trident") && -1 == v().indexOf("MSIE")) && "function" == typeof btoa;
var E = /[-_.]/g;
var S = { "-": "+", t: "/", ".": "=" };
function x(t2) {
  return S[t2] || "";
}
function O(t2) {
  if (!A) return ((t3) => {
    const n3 = t3.length;
    let i2 = 3 * n3 / 4;
    i2 % 3 ? i2 = Math.floor(i2) : -1 != "=.".indexOf(t3[n3 - 1]) && (i2 = -1 != "=.".indexOf(t3[n3 - 2]) ? i2 - 2 : i2 - 1);
    const s2 = new Uint8Array(i2);
    let e2 = 0;
    return ((t4, n4) => {
      function i3(n5) {
        for (; t4.length > s3; ) {
          const n6 = t4.charAt(s3++), i4 = y[n6];
          if (null != i4) return i4;
          if (!/^[\s\xa0]*$/.test(n6)) throw Error("Unknown base64 encoding at char: " + n6);
        }
        return n5;
      }
      b();
      let s3 = 0;
      for (; ; ) {
        const t5 = i3(-1), s4 = i3(0), e3 = i3(64), r2 = i3(64);
        if (64 === r2 && -1 === t5) break;
        n4(t5 << 2 | s4 >> 4), 64 != e3 && (n4(s4 << 4 & 240 | e3 >> 2), 64 != r2 && n4(e3 << 6 & 192 | r2));
      }
    })(t3, (t4) => {
      s2[e2++] = t4;
    }), e2 !== i2 ? s2.subarray(0, e2) : s2;
  })(t2);
  t2 = E.test(t2) ? t2.replace(E, x) : t2, t2 = atob(t2);
  const n2 = new Uint8Array(t2.length);
  for (let i2 = 0; t2.length > i2; i2++) n2[i2] = t2.charCodeAt(i2);
  return n2;
}
function T(t2) {
  return k && null != t2 && t2 instanceof Uint8Array;
}
var I = {};
function L() {
  return U ||= new N(null, I);
}
function M(t2) {
  R(I);
  var n2 = t2.g;
  return null == (n2 = null == n2 || T(n2) ? n2 : "string" == typeof n2 ? O(n2) : null) ? n2 : t2.g = n2;
}
var N = class {
  h() {
    return new Uint8Array(M(this) || 0);
  }
  constructor(t2, n2) {
    if (R(n2), this.g = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
  }
};
var U;
var C;
function R(t2) {
  if (t2 !== I) throw Error("illegal external caller");
}
function P(t2, n2) {
  t2.p || (t2.p = {}), t2.p.severity = n2;
}
function B(t2) {
  return P(t2 = Error(t2), "warning"), t2;
}
function G(t2, n2) {
  if (null != t2) {
    var i2 = C ??= {}, s2 = i2[t2] || 0;
    s2 >= n2 || (i2[t2] = s2 + 1, P(t2 = Error(), "incident"), u(t2));
  }
}
function F() {
  return "function" == typeof BigInt;
}
var D = "function" == typeof Symbol && "symbol" == typeof Symbol();
function j(t2, n2, i2 = false) {
  return "function" == typeof Symbol && "symbol" == typeof Symbol() ? i2 && Symbol.for && t2 ? Symbol.for(t2) : null != t2 ? Symbol(t2) : Symbol() : n2;
}
var H = j("jas", void 0, true);
var V = j(void 0, "0di");
var z = j(void 0, "1oa");
var W = j(void 0, Symbol());
var K = j(void 0, "0ub");
var $ = j(void 0, "0ubs");
var q = j(void 0, "0ubsb");
var Y = j(void 0, "0actk");
var X = j("m_m", "Pa", true);
var J = j();
var Q = { Ga: { value: 0, configurable: true, writable: true, enumerable: false } };
var Z = Object.defineProperties;
var tt = D ? H : "Ga";
var nt;
var it = [];
function st(t2, n2) {
  D || tt in t2 || Z(t2, Q), t2[tt] |= n2;
}
function et(t2, n2) {
  D || tt in t2 || Z(t2, Q), t2[tt] = n2;
}
function rt(t2) {
  return st(t2, 34), t2;
}
function ot(t2) {
  return st(t2, 8192), t2;
}
et(it, 7), nt = Object.freeze(it);
var at = {};
function ct(t2, n2) {
  return void 0 === n2 ? t2.h !== ht && !!(2 & t2.v[tt]) : !!(2 & n2) && t2.h !== ht;
}
var ht = {};
function ut(t2, n2) {
  if (null != t2) {
    if ("string" == typeof t2) t2 = t2 ? new N(t2, I) : L();
    else if (t2.constructor !== N) if (T(t2)) t2 = t2.length ? new N(new Uint8Array(t2), I) : L();
    else {
      if (!n2) throw Error();
      t2 = void 0;
    }
  }
  return t2;
}
var ft = class {
  constructor(t2, n2, i2) {
    this.g = t2, this.h = n2, this.l = i2;
  }
  next() {
    const t2 = this.g.next();
    return t2.done || (t2.value = this.h.call(this.l, t2.value)), t2;
  }
  [Symbol.iterator]() {
    return this;
  }
};
var lt = Object.freeze({});
function dt(t2, n2, i2) {
  const s2 = 128 & n2 ? 0 : -1, e2 = t2.length;
  var r2;
  (r2 = !!e2) && (r2 = null != (r2 = t2[e2 - 1]) && "object" == typeof r2 && r2.constructor === Object);
  const o2 = e2 + (r2 ? -1 : 0);
  for (n2 = 128 & n2 ? 1 : 0; o2 > n2; n2++) i2(n2 - s2, t2[n2]);
  if (r2) {
    t2 = t2[e2 - 1];
    for (const n3 in t2) !isNaN(n3) && i2(+n3, t2[n3]);
  }
}
var mt = {};
function pt(t2) {
  return 128 & t2 ? mt : void 0;
}
function vt(t2) {
  return t2.Na = true, t2;
}
var wt = vt((t2) => "number" == typeof t2);
var _t = vt((t2) => "string" == typeof t2);
var gt = vt((t2) => "boolean" == typeof t2);
var yt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
function bt(t2) {
  var n2 = t2;
  if (_t(n2)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(n2)) throw Error(n2 + "");
  } else if (wt(n2) && !Number.isSafeInteger(n2)) throw Error(n2 + "");
  return yt ? BigInt(t2) : t2 = gt(t2) ? t2 ? "1" : "0" : _t(t2) ? t2.trim() || "0" : t2 + "";
}
var kt = vt((t2) => yt ? t2 >= Et && xt >= t2 : ((t3, n2) => {
  if (t3.length > n2.length) return false;
  if (n2.length > t3.length || t3 === n2) return true;
  for (let i2 = 0; t3.length > i2; i2++) {
    const s2 = t3[i2], e2 = n2[i2];
    if (s2 > e2) return false;
    if (e2 > s2) return true;
  }
})(t2, "-" === t2[0] ? At : St));
var At = "" + Number.MIN_SAFE_INTEGER;
var Et = yt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
var St = "" + Number.MAX_SAFE_INTEGER;
var xt = yt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
var Ot = "function" == typeof Uint8Array.prototype.slice;
var Tt;
var It = 0;
var Lt = 0;
function Mt(t2) {
  const n2 = t2 >>> 0;
  It = n2, Lt = (t2 - n2) / 4294967296 >>> 0;
}
function Nt(t2) {
  if (0 > t2) {
    Mt(-t2);
    const [n2, i2] = Ht(It, Lt);
    It = n2 >>> 0, Lt = i2 >>> 0;
  } else Mt(t2);
}
function Ut(t2) {
  const n2 = Tt ||= new DataView(new ArrayBuffer(8));
  n2.setFloat32(0, +t2, true), Lt = 0, It = n2.getUint32(0, true);
}
function Ct(t2, n2) {
  const i2 = 4294967296 * n2 + (t2 >>> 0);
  return Number.isSafeInteger(i2) ? i2 : Gt(t2, n2);
}
function Rt(t2, n2) {
  return bt(F() ? BigInt.asUintN(64, (BigInt(n2 >>> 0) << BigInt(32)) + BigInt(t2 >>> 0)) : Gt(t2, n2));
}
function Pt(t2, n2) {
  const i2 = 2147483648 & n2;
  return i2 && (n2 = ~n2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (n2 = n2 + 1 >>> 0)), "number" == typeof (t2 = Ct(t2, n2)) ? i2 ? -t2 : t2 : i2 ? "-" + t2 : t2;
}
function Bt(t2, n2) {
  return F() ? bt(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(n2)) << BigInt(32)) + BigInt.asUintN(32, BigInt(t2)))) : bt(Dt(t2, n2));
}
function Gt(t2, n2) {
  if (t2 >>>= 0, (n2 >>>= 0) > 2097151) F() ? i2 = "" + (BigInt(n2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (i2 = 16777215 & (t2 >>> 24 | n2 << 8)) + 6710656 * (n2 = n2 >> 16 & 65535), i2 += 8147497 * n2, n2 *= 2, t2 >= 1e7 && (i2 += t2 / 1e7 >>> 0, t2 %= 1e7), i2 >= 1e7 && (n2 += i2 / 1e7 >>> 0, i2 %= 1e7), i2 = n2 + Ft(i2) + Ft(t2));
  else var i2 = "" + (4294967296 * n2 + t2);
  return i2;
}
function Ft(t2) {
  return "0000000".slice((t2 += "").length) + t2;
}
function Dt(t2, n2) {
  if (2147483648 & n2) if (F()) t2 = "" + (BigInt(0 | n2) << BigInt(32) | BigInt(t2 >>> 0));
  else {
    const [i2, s2] = Ht(t2, n2);
    t2 = "-" + Gt(i2, s2);
  }
  else t2 = Gt(t2, n2);
  return t2;
}
function jt(t2) {
  if (16 > t2.length) Nt(+t2);
  else if (F()) t2 = BigInt(t2), It = +(t2 & BigInt(4294967295)) >>> 0, Lt = +(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const n2 = +("-" === t2[0]);
    Lt = It = 0;
    const i2 = t2.length;
    for (let s2 = n2, e2 = (i2 - n2) % 6 + n2; i2 >= e2; s2 = e2, e2 += 6) {
      const n3 = +t2.slice(s2, e2);
      Lt *= 1e6, It = 1e6 * It + n3, It >= 4294967296 && (Lt += Math.trunc(It / 4294967296), Lt >>>= 0, It >>>= 0);
    }
    if (n2) {
      const [t3, n3] = Ht(It, Lt);
      It = t3, Lt = n3;
    }
  }
}
function Ht(t2, n2) {
  return n2 = ~n2, t2 ? t2 = 1 + ~t2 : n2 += 1, [t2, n2];
}
function Vt(t2) {
  return [].slice.call(t2);
}
var zt = "function" == typeof BigInt ? BigInt.asIntN : void 0;
var Wt = "function" == typeof BigInt ? BigInt.asUintN : void 0;
var Kt = Number.isSafeInteger;
var $t = Number.isFinite;
var qt = Math.trunc;
var Yt = bt(0);
function Xt(t2) {
  if (null != t2 && "number" != typeof t2) throw Error(`Value of float/double field must be a number, found ${typeof t2}: ${t2}`);
  return t2;
}
function Jt(t2) {
  return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? +t2 : void 0;
}
function Qt(t2) {
  if (null != t2 && "boolean" != typeof t2) {
    var n2 = typeof t2;
    throw Error(`Expected boolean but got ${"object" != n2 ? n2 : t2 ? Array.isArray(t2) ? "array" : n2 : "null"}: ${t2}`);
  }
  return t2;
}
function Zt(t2) {
  return null == t2 || "boolean" == typeof t2 ? t2 : "number" == typeof t2 ? !!t2 : void 0;
}
var tn = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function nn(t2) {
  switch (typeof t2) {
    case "bigint":
      return true;
    case "number":
      return $t(t2);
    case "string":
      return tn.test(t2);
    default:
      return false;
  }
}
function sn(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2 && t2) t2 = +t2;
  else if ("number" != typeof t2) return;
  return $t(t2) ? 0 | t2 : void 0;
}
function en(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2 && t2) t2 = +t2;
  else if ("number" != typeof t2) return;
  return $t(t2) ? t2 >>> 0 : void 0;
}
function rn(t2) {
  const n2 = t2.length;
  return ("-" === t2[0] ? 20 > n2 || 20 === n2 && "-9223372036854775808" >= t2 : 19 > n2 || 19 === n2 && "9223372036854775807" >= t2) ? t2 : (jt(t2), Dt(It, Lt));
}
function on(t2) {
  return t2 = qt(t2), Kt(t2) || (Nt(t2), t2 = Pt(It, Lt)), t2;
}
function an(t2) {
  var n2 = qt(+t2);
  return Kt(n2) ? n2 + "" : (-1 !== (n2 = t2.indexOf(".")) && (t2 = t2.substring(0, n2)), rn(t2));
}
function cn(t2) {
  var n2 = qt(+t2);
  return Kt(n2) ? bt(n2) : (-1 !== (n2 = t2.indexOf(".")) && (t2 = t2.substring(0, n2)), F() ? bt(zt(64, BigInt(t2))) : bt(rn(t2)));
}
function hn(t2) {
  return Kt(t2) ? t2 = bt(on(t2)) : (t2 = qt(t2), Kt(t2) ? t2 += "" : (Nt(t2), t2 = Dt(It, Lt)), t2 = bt(t2)), t2;
}
function un(t2) {
  const n2 = typeof t2;
  return null == t2 ? t2 : "bigint" === n2 ? bt(zt(64, t2)) : nn(t2) ? "string" === n2 ? cn(t2) : hn(t2) : void 0;
}
function fn(t2) {
  if ("string" != typeof t2) throw Error();
  return t2;
}
function ln(t2) {
  if (null != t2 && "string" != typeof t2) throw Error();
  return t2;
}
function dn(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function mn(t2, n2, i2, s2) {
  return null != t2 && t2[X] === at ? t2 : Array.isArray(t2) ? ((s2 = (i2 = 0 | t2[tt]) | 32 & s2 | 2 & s2) !== i2 && et(t2, s2), new n2(t2)) : (i2 ? 2 & s2 ? ((t2 = n2[V]) || (rt((t2 = new n2()).v), t2 = n2[V] = t2), n2 = t2) : n2 = new n2() : n2 = void 0, n2);
}
function pn(t2, n2, i2) {
  if (n2) t: {
    if (!nn(n2 = t2)) throw B("int64");
    switch (typeof n2) {
      case "string":
        n2 = cn(n2);
        break t;
      case "bigint":
        n2 = bt(zt(64, n2));
        break t;
      default:
        n2 = hn(n2);
    }
  }
  else n2 = un(t2);
  return null == (t2 = n2) ? i2 ? Yt : void 0 : t2;
}
var vn = {};
var wn = (function() {
  try {
    return _(new class extends Map {
      constructor() {
        super();
      }
    }()), false;
  } catch {
    return true;
  }
})();
var _n = class {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t2) {
    return this.g.get(t2);
  }
  set(t2, n2) {
    return this.g.set(t2, n2), this.size = this.g.size, this;
  }
  delete(t2) {
    return t2 = this.g.delete(t2), this.size = this.g.size, t2;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t2) {
    return this.g.has(t2);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t2, n2) {
    return this.g.forEach(t2, n2);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var gn = wn ? (Object.setPrototypeOf(_n.prototype, Map.prototype), Object.defineProperties(_n.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), _n) : class extends Map {
  constructor() {
    super();
  }
};
function yn(t2) {
  return t2;
}
function bn(t2) {
  if (2 & t2.J) throw Error("Cannot mutate an immutable Map");
}
var kn = class extends gn {
  constructor(t2, n2, i2 = yn, s2 = yn) {
    super(), this.J = 0 | t2[tt], this.K = n2, this.S = i2, this.fa = this.K ? An : s2;
    for (let e2 = 0; t2.length > e2; e2++) {
      const r2 = t2[e2], o2 = i2(r2[0], false, true);
      let a2 = r2[1];
      n2 ? void 0 === a2 && (a2 = null) : a2 = s2(r2[1], false, true, void 0, void 0, this.J), super.set(o2, a2);
    }
  }
  V(t2) {
    return ot(Array.from(super.entries(), t2));
  }
  clear() {
    bn(this), super.clear();
  }
  delete(t2) {
    return bn(this), super.delete(this.S(t2, true, false));
  }
  entries() {
    if (this.K) {
      var t2 = super.keys();
      t2 = new ft(t2, En, this);
    } else t2 = super.entries();
    return t2;
  }
  values() {
    if (this.K) {
      var t2 = super.keys();
      t2 = new ft(t2, kn.prototype.get, this);
    } else t2 = super.values();
    return t2;
  }
  forEach(t2, n2) {
    this.K ? super.forEach((i2, s2, e2) => {
      t2.call(n2, e2.get(s2), s2, e2);
    }) : super.forEach(t2, n2);
  }
  set(t2, n2) {
    return bn(this), null == (t2 = this.S(t2, true, false)) ? this : null == n2 ? (super.delete(t2), this) : super.set(t2, this.fa(n2, true, true, this.K, false, this.J));
  }
  Ma(t2) {
    const n2 = this.S(t2[0], false, true);
    t2 = t2[1], t2 = this.K ? void 0 === t2 ? null : t2 : this.fa(t2, false, true, void 0, false, this.J), super.set(n2, t2);
  }
  has(t2) {
    return super.has(this.S(t2, false, false));
  }
  get(t2) {
    t2 = this.S(t2, false, false);
    const n2 = super.get(t2);
    if (void 0 !== n2) {
      var i2 = this.K;
      return i2 ? ((i2 = this.fa(n2, false, true, i2, this.ra, this.J)) !== n2 && super.set(t2, i2), i2) : n2;
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function An(t2, n2, i2, s2, e2, r2) {
  return t2 = mn(t2, s2, i2, r2), e2 && (t2 = Wn(t2)), t2;
}
function En(t2) {
  return [t2, this.get(t2)];
}
var Sn;
function xn() {
  return Sn ||= new kn(rt([]), void 0, void 0, void 0, vn);
}
function On(t2) {
  return W ? t2[W] : void 0;
}
function Tn(t2, n2) {
  for (const i2 in t2) !isNaN(i2) && n2(t2, +i2, t2[i2]);
}
kn.prototype.toJSON = void 0;
var In = class {
};
var Ln = { Ka: true };
function Mn(t2, n2) {
  100 > n2 || G($, 1);
}
function Nn(t2, n2, i2, s2) {
  const e2 = void 0 !== s2;
  s2 = !!s2;
  var r2, o2 = W;
  !e2 && D && o2 && (r2 = t2[o2]) && Tn(r2, Mn), o2 = [];
  var a2 = t2.length;
  let c2;
  r2 = 4294967295;
  let h2 = false;
  const u2 = !!(64 & n2), f2 = u2 ? 128 & n2 ? 0 : -1 : void 0;
  1 & n2 || (c2 = a2 && t2[a2 - 1], null != c2 && "object" == typeof c2 && c2.constructor === Object ? r2 = --a2 : c2 = void 0, !u2 || 128 & n2 || e2 || (h2 = true, r2 = r2 - f2 + f2)), n2 = void 0;
  for (var l2 = 0; a2 > l2; l2++) {
    let e3 = t2[l2];
    if (null != e3 && null != (e3 = i2(e3, s2))) if (u2 && l2 >= r2) {
      const t3 = l2 - f2;
      (n2 ??= {})[t3] = e3;
    } else o2[l2] = e3;
  }
  if (c2) for (let d2 in c2) {
    if (null == (a2 = c2[d2]) || null == (a2 = i2(a2, s2))) continue;
    let t3;
    l2 = +d2, u2 && !Number.isNaN(l2) && (t3 = l2 + f2) < r2 ? o2[t3] = a2 : (n2 ??= {})[d2] = a2;
  }
  return n2 && (h2 ? o2.push(n2) : o2[r2] = n2), e2 && W && (t2 = On(t2)) && t2 instanceof In && (o2[W] = ((t3) => {
    const n3 = new In();
    return Tn(t3, (t4, i3, s3) => {
      n3[i3] = Vt(s3);
    }), n3.da = t3.da, n3;
  })(t2)), o2;
}
function Un(t2) {
  return t2[0] = Cn(t2[0]), t2[1] = Cn(t2[1]), t2;
}
function Cn(t2) {
  switch (typeof t2) {
    case "number":
      return Number.isFinite(t2) ? t2 : "" + t2;
    case "bigint":
      return kt(t2) ? +t2 : "" + t2;
    case "boolean":
      return t2 ? 1 : 0;
    case "object":
      if (Array.isArray(t2)) {
        var n2 = 0 | t2[tt];
        return 0 === t2.length && 1 & n2 ? void 0 : Nn(t2, n2, Cn);
      }
      if (null != t2 && t2[X] === at) return Rn(t2);
      if (t2 instanceof N) {
        if (null == (n2 = t2.g)) t2 = "";
        else if ("string" == typeof n2) t2 = n2;
        else {
          if (A) {
            for (var i2 = "", s2 = 0, e2 = n2.length - 10240; e2 > s2; ) i2 += String.fromCharCode.apply(null, n2.subarray(s2, s2 += 10240));
            i2 += String.fromCharCode.apply(null, s2 ? n2.subarray(s2) : n2), n2 = btoa(i2);
          } else {
            void 0 === i2 && (i2 = 0), b(), i2 = g[i2], s2 = Array(Math.floor(n2.length / 3)), e2 = i2[64] || "";
            let t3 = 0, h2 = 0;
            for (; n2.length - 2 > t3; t3 += 3) {
              var r2 = n2[t3], o2 = n2[t3 + 1], a2 = n2[t3 + 2], c2 = i2[r2 >> 2];
              s2[h2++] = c2 + (r2 = i2[(3 & r2) << 4 | o2 >> 4]) + (o2 = i2[(15 & o2) << 2 | a2 >> 6]) + (a2 = i2[63 & a2]);
            }
            switch (c2 = 0, a2 = e2, n2.length - t3) {
              case 2:
                a2 = i2[(15 & (c2 = n2[t3 + 1])) << 2] || e2;
              case 1:
                s2[h2] = i2[(n2 = n2[t3]) >> 2] + i2[(3 & n2) << 4 | c2 >> 4] + a2 + e2;
            }
            n2 = s2.join("");
          }
          t2 = t2.g = n2;
        }
        return t2;
      }
      return t2 instanceof kn ? t2 = 0 !== t2.size ? t2.V(Un) : void 0 : void 0;
  }
  return t2;
}
function Rn(t2) {
  return Nn(t2 = t2.v, 0 | t2[tt], Cn);
}
var Pn;
var Bn;
function Gn(t2, n2) {
  return Fn(t2, n2[0], n2[1]);
}
function Fn(t2, n2, i2, s2 = 0) {
  if (null == t2) {
    var e2 = 32;
    i2 ? (t2 = [i2], e2 |= 128) : t2 = [], n2 && (e2 = -16760833 & e2 | (1023 & n2) << 14);
  } else {
    if (!Array.isArray(t2)) throw Error("narr");
    if (e2 = 0 | t2[tt], d && 1 & e2) throw Error("rfarr");
    if (2048 & e2 && !(2 & e2) && (() => {
      if (d) throw Error("carr");
      G(Y, 5);
    })(), 256 & e2) throw Error("farr");
    if (64 & e2) return (e2 | s2) !== e2 && et(t2, e2 | s2), t2;
    if (i2 && (e2 |= 128, i2 !== t2[0])) throw Error("mid");
    t: {
      e2 |= 64;
      var r2 = (i2 = t2).length;
      if (r2) {
        var o2 = r2 - 1;
        const t3 = i2[o2];
        if (null != t3 && "object" == typeof t3 && t3.constructor === Object) {
          if ((o2 -= n2 = 128 & e2 ? 0 : -1) >= 1024) throw Error("pvtlmt");
          for (var a2 in t3) (r2 = +a2) < o2 && (i2[r2 + n2] = t3[a2], delete t3[a2]);
          e2 = -16760833 & e2 | (1023 & o2) << 14;
          break t;
        }
      }
      if (n2) {
        if ((a2 = Math.max(n2, r2 - (128 & e2 ? 0 : -1))) > 1024) throw Error("spvt");
        e2 = -16760833 & e2 | (1023 & a2) << 14;
      }
    }
  }
  return et(t2, 64 | e2 | s2), t2;
}
function Dn(t2, n2) {
  if ("object" != typeof t2) return t2;
  if (Array.isArray(t2)) {
    var i2 = 0 | t2[tt];
    return 0 === t2.length && 1 & i2 ? void 0 : jn(t2, i2, n2);
  }
  if (null != t2 && t2[X] === at) return Vn(t2);
  if (t2 instanceof kn) {
    if (2 & (n2 = t2.J)) return t2;
    if (!t2.size) return;
    if (i2 = rt(t2.V()), t2.K) for (t2 = 0; i2.length > t2; t2++) {
      const s2 = i2[t2];
      let e2 = s2[1];
      e2 = null == e2 || "object" != typeof e2 ? void 0 : null != e2 && e2[X] === at ? Vn(e2) : Array.isArray(e2) ? jn(e2, 0 | e2[tt], !!(32 & n2)) : void 0, s2[1] = e2;
    }
    return i2;
  }
  return t2 instanceof N ? t2 : void 0;
}
function jn(t2, n2, i2) {
  return 2 & n2 || (!i2 || 4096 & n2 || 16 & n2 ? t2 = zn(t2, n2, false, i2 && !(16 & n2)) : (st(t2, 34), 4 & n2 && Object.freeze(t2))), t2;
}
function Hn(t2, n2, i2) {
  return t2 = new t2.constructor(n2), i2 && (t2.h = ht), t2.m = ht, t2;
}
function Vn(t2) {
  const n2 = t2.v, i2 = 0 | n2[tt];
  return ct(t2, i2) ? t2 : Yn(t2, n2, i2) ? Hn(t2, n2) : zn(n2, i2);
}
function zn(t2, n2, i2, s2) {
  return s2 ??= !!(34 & n2), t2 = Nn(t2, n2, Dn, s2), s2 = 32, i2 && (s2 |= 2), et(t2, n2 = 16769217 & n2 | s2), t2;
}
function Wn(t2) {
  const n2 = t2.v, i2 = 0 | n2[tt];
  return ct(t2, i2) ? Yn(t2, n2, i2) ? Hn(t2, n2, true) : new t2.constructor(zn(n2, i2, false)) : t2;
}
function Kn(t2) {
  if (t2.h !== ht) return false;
  var n2 = t2.v;
  return st(n2 = zn(n2, 0 | n2[tt]), 2048), t2.v = n2, t2.h = void 0, t2.m = void 0, true;
}
function $n(t2) {
  if (!Kn(t2) && ct(t2, 0 | t2.v[tt])) throw Error();
}
function qn(t2, n2) {
  void 0 === n2 && (n2 = 0 | t2[tt]), 32 & n2 && !(4096 & n2) && et(t2, 4096 | n2);
}
function Yn(t2, n2, i2) {
  return !!(2 & i2) || !(!(32 & i2) || 4096 & i2) && (et(n2, 2 | i2), t2.h = ht, true);
}
var Xn = bt(0);
var Jn = {};
function Qn(t2, n2, i2, s2, e2) {
  if (null !== (n2 = Zn(t2.v, n2, i2, e2)) || s2 && t2.m !== ht) return n2;
}
function Zn(t2, n2, i2, s2) {
  if (-1 === n2) return null;
  const e2 = n2 + (i2 ? 0 : -1), r2 = t2.length - 1;
  let o2, a2;
  if (r2 >= 1 + (i2 ? 0 : -1)) {
    if (r2 > e2) i2 = t2[e2];
    else if (o2 = t2[r2], null != o2 && "object" == typeof o2 && o2.constructor === Object) i2 = o2[n2], a2 = true;
    else {
      if (e2 !== r2) return;
      i2 = o2;
    }
    if (s2 && null != i2) {
      if (null == (s2 = s2(i2))) return s2;
      if (!Object.is(s2, i2)) return a2 ? o2[n2] = s2 : t2[e2] = s2, s2;
    }
    return i2;
  }
}
function ti(t2, n2, i2, s2) {
  $n(t2), ni(t2 = t2.v, 0 | t2[tt], n2, i2, s2);
}
function ni(t2, n2, i2, s2, e2) {
  const r2 = i2 + (e2 ? 0 : -1);
  var o2 = t2.length - 1;
  if (o2 >= 1 + (e2 ? 0 : -1) && r2 >= o2) {
    const e3 = t2[o2];
    if (null != e3 && "object" == typeof e3 && e3.constructor === Object) return e3[i2] = s2, n2;
  }
  return r2 > o2 ? (void 0 !== s2 && (i2 < (o2 = (n2 ??= 0 | t2[tt]) >> 14 & 1023 || 536870912) ? t2[r2] = s2 : null != s2 && (t2[o2 + (e2 ? 0 : -1)] = { [i2]: s2 })), n2) : (t2[r2] = s2, n2);
}
function ii() {
  return void 0 === lt ? 2 : 4;
}
function si(t2, n2, i2, s2, e2) {
  let r2 = t2.v, o2 = 0 | r2[tt];
  s2 = ct(t2, o2) ? 1 : s2, e2 = !!e2 || 3 === s2, 2 === s2 && Kn(t2) && (r2 = t2.v, o2 = 0 | r2[tt]);
  let a2 = (t2 = ri(r2, n2)) === nt ? 7 : 0 | t2[tt], c2 = oi(a2, o2);
  var h2 = !(4 & c2);
  if (h2) {
    4 & c2 && (t2 = Vt(t2), a2 = 0, c2 = Ei(c2, o2), o2 = ni(r2, o2, n2, t2));
    let s3 = 0, e3 = 0;
    for (; t2.length > s3; s3++) {
      const n3 = i2(t2[s3]);
      null != n3 && (t2[e3++] = n3);
    }
    s3 > e3 && (t2.length = e3), i2 = -513 & c2 | 4, c2 = i2 &= -1025, c2 &= -4097;
  }
  return c2 !== a2 && (et(t2, c2), 2 & c2 && Object.freeze(t2)), ei(t2, c2, r2, o2, n2, s2, h2, e2);
}
function ei(t2, n2, i2, s2, e2, r2, o2, a2) {
  let c2 = n2;
  return 1 === r2 || 4 === r2 && (2 & n2 || !(16 & n2) && 32 & s2) ? ai(n2) || ((n2 |= !t2.length || o2 && !(4096 & n2) || 32 & s2 && !(4096 & n2 || 16 & n2) ? 2 : 256) !== c2 && et(t2, n2), Object.freeze(t2)) : (2 === r2 && ai(n2) && (t2 = Vt(t2), c2 = 0, n2 = Ei(n2, s2), s2 = ni(i2, s2, e2, t2)), ai(n2) || (a2 || (n2 |= 16), n2 !== c2 && et(t2, n2))), 2 & n2 || !(4096 & n2 || 16 & n2) || qn(i2, s2), t2;
}
function ri(t2, n2, i2) {
  return t2 = Zn(t2, n2, i2), Array.isArray(t2) ? t2 : nt;
}
function oi(t2, n2) {
  return 2 & n2 && (t2 |= 2), 1 | t2;
}
function ai(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(256 & t2);
}
function ci(t2) {
  return ut(t2, true);
}
function hi(t2) {
  t2 = Vt(t2);
  for (let n2 = 0; t2.length > n2; n2++) {
    const i2 = t2[n2] = Vt(t2[n2]);
    Array.isArray(i2[1]) && (i2[1] = rt(i2[1]));
  }
  return ot(t2);
}
function ui(t2, n2, i2, s2) {
  $n(t2), ni(t2 = t2.v, 0 | t2[tt], n2, ("0" === s2 ? 0 === +i2 : i2 === s2) ? void 0 : i2);
}
function fi(t2, n2, i2) {
  if (2 & n2) throw Error();
  const s2 = pt(n2);
  let e2 = ri(t2, i2, s2), r2 = e2 === nt ? 7 : 0 | e2[tt], o2 = oi(r2, n2);
  return (2 & o2 || ai(o2) || 16 & o2) && (o2 === r2 || ai(o2) || et(e2, o2), e2 = Vt(e2), r2 = 0, o2 = Ei(o2, n2), ni(t2, n2, i2, e2, s2)), o2 &= -13, o2 !== r2 && et(e2, o2), e2;
}
function li(t2, n2) {
  var i2 = Rr;
  return pi(di(t2 = t2.v), t2, void 0, i2) === n2 ? n2 : -1;
}
function di(t2) {
  if (D) return t2[z] ?? (t2[z] = /* @__PURE__ */ new Map());
  if (z in t2) return t2[z];
  const n2 = /* @__PURE__ */ new Map();
  return Object.defineProperty(t2, z, { value: n2 }), n2;
}
function mi(t2, n2, i2, s2, e2) {
  const r2 = di(t2), o2 = pi(r2, t2, n2, i2, e2);
  return o2 !== s2 && (o2 && (n2 = ni(t2, n2, o2, void 0, e2)), r2.set(i2, s2)), n2;
}
function pi(t2, n2, i2, s2, e2) {
  let r2 = t2.get(s2);
  if (null != r2) return r2;
  r2 = 0;
  for (let o2 = 0; s2.length > o2; o2++) {
    const t3 = s2[o2];
    null != Zn(n2, t3, e2) && (0 !== r2 && (i2 = ni(n2, i2, r2, void 0, e2)), r2 = t3);
  }
  return t2.set(s2, r2), r2;
}
function vi(t2, n2, i2) {
  let s2 = 0 | t2[tt];
  const e2 = pt(s2), r2 = Zn(t2, i2, e2);
  let o2;
  if (null != r2 && r2[X] === at) {
    if (!ct(r2)) return Kn(r2), r2.v;
    o2 = r2.v;
  } else Array.isArray(r2) && (o2 = r2);
  if (o2) {
    const t3 = 0 | o2[tt];
    2 & t3 && (o2 = zn(o2, t3));
  }
  return o2 = Gn(o2, n2), o2 !== r2 && ni(t2, s2, i2, o2, e2), o2;
}
function wi(t2, n2, i2, s2, e2) {
  let r2 = false;
  if (null != (s2 = Zn(t2, s2, e2, (t3) => {
    const s3 = mn(t3, i2, false, n2);
    return r2 = s3 !== t3 && null != s3, s3;
  }))) return r2 && !ct(s2) && qn(t2, n2), s2;
}
function _i(t2, n2, i2, s2) {
  let e2 = t2.v, r2 = 0 | e2[tt];
  if (null == (n2 = wi(e2, r2, n2, i2, s2))) return n2;
  if (r2 = 0 | e2[tt], !ct(t2, r2)) {
    const o2 = Wn(n2);
    o2 !== n2 && (Kn(t2) && (e2 = t2.v, r2 = 0 | e2[tt]), r2 = ni(e2, r2, i2, n2 = o2, s2), qn(e2, r2));
  }
  return n2;
}
function gi(t2, n2, i2, s2, e2, r2, o2, a2) {
  var c2 = ct(t2, i2);
  r2 = c2 ? 1 : r2, o2 = !!o2 || 3 === r2, c2 = a2 && !c2, (2 === r2 || c2) && Kn(t2) && (i2 = 0 | (n2 = t2.v)[tt]);
  var h2 = (t2 = ri(n2, e2)) === nt ? 7 : 0 | t2[tt], u2 = oi(h2, i2);
  if (a2 = !(4 & u2)) {
    var f2 = t2, l2 = i2;
    const n3 = !!(2 & u2);
    n3 && (l2 |= 2);
    let e3 = !n3, r3 = true, o3 = 0, a3 = 0;
    for (; f2.length > o3; o3++) {
      const t3 = mn(f2[o3], s2, false, l2);
      if (t3 instanceof s2) {
        if (!n3) {
          const n4 = ct(t3);
          e3 &&= !n4, r3 &&= n4;
        }
        f2[a3++] = t3;
      }
    }
    o3 > a3 && (f2.length = a3), u2 |= 4, u2 = r3 ? -4097 & u2 : 4096 | u2, u2 = e3 ? 8 | u2 : -9 & u2;
  }
  if (u2 !== h2 && (et(t2, u2), 2 & u2 && Object.freeze(t2)), c2 && !(8 & u2 || !t2.length && (1 === r2 || 4 === r2 && (2 & u2 || !(16 & u2) && 32 & i2)))) {
    for (ai(u2) && (t2 = Vt(t2), u2 = Ei(u2, i2), i2 = ni(n2, i2, e2, t2)), s2 = t2, c2 = u2, h2 = 0; s2.length > h2; h2++) (f2 = s2[h2]) !== (u2 = Wn(f2)) && (s2[h2] = u2);
    c2 |= 8, et(t2, u2 = c2 = s2.length ? 4096 | c2 : -4097 & c2);
  }
  return ei(t2, u2, n2, i2, e2, r2, a2, o2);
}
function yi(t2, n2, i2) {
  const s2 = t2.v;
  return gi(t2, s2, 0 | s2[tt], n2, i2, ii(), false, true);
}
function bi(t2) {
  return null == t2 && (t2 = void 0), t2;
}
function ki(t2, n2, i2, s2, e2) {
  return ti(t2, i2, s2 = bi(s2), e2), s2 && !ct(s2) && qn(t2.v), t2;
}
function Ai(t2, n2, i2, s2) {
  t: {
    var e2 = s2 = bi(s2);
    $n(t2);
    const r2 = t2.v;
    let o2 = 0 | r2[tt];
    if (null == e2) {
      const t3 = di(r2);
      if (pi(t3, r2, o2, i2) !== n2) break t;
      t3.set(i2, 0);
    } else o2 = mi(r2, o2, i2, n2);
    ni(r2, o2, n2, e2);
  }
  s2 && !ct(s2) && qn(t2.v);
}
function Ei(t2, n2) {
  return -273 & (2 & n2 ? 2 | t2 : -3 & t2);
}
function Si(t2, n2, i2, s2) {
  var e2 = s2;
  $n(t2), t2 = gi(t2, s2 = t2.v, 0 | s2[tt], i2, n2, 2, true), e2 = null != e2 ? e2 : new i2(), t2.push(e2), n2 = i2 = t2 === nt ? 7 : 0 | t2[tt], (e2 = ct(e2)) ? (i2 &= -9, 1 === t2.length && (i2 &= -4097)) : i2 |= 4096, i2 !== n2 && et(t2, i2), e2 || qn(s2);
}
function xi(t2, n2, i2) {
  return sn(Qn(t2, n2, void 0, i2));
}
function Oi(t2) {
  return (p ? Qn(t2, 2, void 0, void 0, un) : un(Qn(t2, 2))) ?? Xn;
}
function Ti(t2, n2) {
  return Qn(t2, n2, void 0, void 0, Jt) ?? 0;
}
function Ii(t2, n2, i2) {
  if (null != i2) {
    if ("number" != typeof i2) throw B("int32");
    if (!$t(i2)) throw B("int32");
    i2 |= 0;
  }
  ti(t2, n2, i2);
}
function Li(t2, n2, i2) {
  ti(t2, n2, Xt(i2));
}
function Mi(t2, n2, i2) {
  ui(t2, n2, ln(i2), "");
}
function Ni(t2, n2, i2) {
  {
    $n(t2);
    const o2 = t2.v;
    let a2 = 0 | o2[tt];
    if (null == i2) ni(o2, a2, n2);
    else {
      var s2 = t2 = i2 === nt ? 7 : 0 | i2[tt], e2 = ai(t2), r2 = e2 || Object.isFrozen(i2);
      for (e2 || (t2 = 0), r2 || (i2 = Vt(i2), s2 = 0, t2 = Ei(t2, a2), r2 = false), t2 |= 5, t2 |= (4 & t2 ? 512 & t2 ? 512 : 1024 & t2 ? 1024 : 0 : void 0) ?? (p ? 1024 : 0), e2 = 0; i2.length > e2; e2++) {
        const n3 = i2[e2], o3 = fn(n3);
        Object.is(n3, o3) || (r2 && (i2 = Vt(i2), s2 = 0, t2 = Ei(t2, a2), r2 = false), i2[e2] = o3);
      }
      t2 !== s2 && (r2 && (i2 = Vt(i2), t2 = Ei(t2, a2)), et(i2, t2)), ni(o2, a2, n2, i2);
    }
  }
}
function Ui(t2, n2, i2) {
  $n(t2), si(t2, n2, dn, 2, true).push(fn(i2));
}
var Ci = class {
  constructor(t2, n2, i2) {
    if (this.buffer = t2, i2 && !n2) throw Error();
    this.g = n2;
  }
};
function Ri(t2, n2) {
  if ("string" == typeof t2) return new Ci(O(t2), n2);
  if (Array.isArray(t2)) return new Ci(new Uint8Array(t2), n2);
  if (t2.constructor === Uint8Array) return new Ci(t2, false);
  if (t2.constructor === ArrayBuffer) return t2 = new Uint8Array(t2), new Ci(t2, false);
  if (t2.constructor === N) return n2 = M(t2) || new Uint8Array(0), new Ci(n2, true, t2);
  if (t2 instanceof Uint8Array) return t2 = t2.constructor === Uint8Array ? t2 : new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), new Ci(t2, false);
  throw Error();
}
function Pi(t2, n2) {
  let i2, s2 = 0, e2 = 0, r2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    i2 = o2[a2++], s2 |= (127 & i2) << r2, r2 += 7;
  } while (32 > r2 && 128 & i2);
  if (r2 > 32) for (e2 |= (127 & i2) >> 4, r2 = 3; 32 > r2 && 128 & i2; r2 += 7) i2 = o2[a2++], e2 |= (127 & i2) << r2;
  if (Hi(t2, a2), !(128 & i2)) return n2(s2 >>> 0, e2 >>> 0);
  throw Error();
}
function Bi(t2) {
  let n2 = 0, i2 = t2.g;
  const s2 = i2 + 10, e2 = t2.h;
  for (; s2 > i2; ) {
    const s3 = e2[i2++];
    if (n2 |= s3, !(128 & s3)) return Hi(t2, i2), !!(127 & n2);
  }
  throw Error();
}
function Gi(t2) {
  const n2 = t2.h;
  let i2 = t2.g, s2 = n2[i2++], e2 = 127 & s2;
  if (128 & s2 && (s2 = n2[i2++], e2 |= (127 & s2) << 7, 128 & s2 && (s2 = n2[i2++], e2 |= (127 & s2) << 14, 128 & s2 && (s2 = n2[i2++], e2 |= (127 & s2) << 21, 128 & s2 && (s2 = n2[i2++], e2 |= s2 << 28, 128 & s2 && 128 & n2[i2++] && 128 & n2[i2++] && 128 & n2[i2++] && 128 & n2[i2++] && 128 & n2[i2++]))))) throw Error();
  return Hi(t2, i2), e2;
}
function Fi(t2) {
  return Gi(t2) >>> 0;
}
function Di(t2) {
  var n2 = t2.h;
  const i2 = t2.g;
  var s2 = n2[i2], e2 = n2[i2 + 1];
  const r2 = n2[i2 + 2];
  return n2 = n2[i2 + 3], Hi(t2, t2.g + 4), t2 = 2 * ((e2 = (s2 | e2 << 8 | r2 << 16 | n2 << 24) >>> 0) >> 31) + 1, s2 = e2 >>> 23 & 255, e2 &= 8388607, 255 == s2 ? e2 ? NaN : t2 * (1 / 0) : 0 == s2 ? 1401298464324817e-60 * t2 * e2 : t2 * Math.pow(2, s2 - 150) * (e2 + 8388608);
}
function ji(t2) {
  return Gi(t2);
}
function Hi(t2, n2) {
  if (t2.g = n2, n2 > t2.l) throw Error();
}
function Vi(t2, n2) {
  if (0 > n2) throw Error();
  const i2 = t2.g;
  if ((n2 = i2 + n2) > t2.l) throw Error();
  return t2.g = n2, i2;
}
function zi(t2, n2) {
  if (0 == n2) return L();
  var i2 = Vi(t2, n2);
  return t2.Y && t2.j ? i2 = t2.h.subarray(i2, i2 + n2) : (t2 = t2.h, i2 = i2 === (n2 = i2 + n2) ? new Uint8Array(0) : Ot ? t2.slice(i2, n2) : new Uint8Array(t2.subarray(i2, n2))), 0 == i2.length ? L() : new N(i2, I);
}
var Wi = [];
function Ki(t2, n2, i2, s2) {
  if (ns.length) {
    const e2 = ns.pop();
    return e2.o(s2), e2.g.init(t2, n2, i2, s2), e2;
  }
  return new ts(t2, n2, i2, s2);
}
function $i(t2) {
  t2.g.clear(), t2.l = -1, t2.h = -1, 100 > ns.length && ns.push(t2);
}
function qi(t2) {
  var n2 = t2.g;
  if (n2.g == n2.l) return false;
  t2.m = t2.g.g;
  var i2 = Fi(t2.g);
  if (n2 = i2 >>> 3, 0 > (i2 &= 7) || i2 > 5) throw Error();
  if (1 > n2) throw Error();
  return t2.l = n2, t2.h = i2, true;
}
function Yi(t2) {
  switch (t2.h) {
    case 0:
      0 != t2.h ? Yi(t2) : Bi(t2.g);
      break;
    case 1:
      Hi(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.h) Yi(t2);
      else {
        var n2 = Fi(t2.g);
        Hi(t2 = t2.g, t2.g + n2);
      }
      break;
    case 5:
      Hi(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (n2 = t2.l; ; ) {
        if (!qi(t2)) throw Error();
        if (4 == t2.h) {
          if (t2.l != n2) throw Error();
          break;
        }
        Yi(t2);
      }
      break;
    default:
      throw Error();
  }
}
function Xi(t2, n2, i2) {
  const s2 = t2.g.l;
  var e2 = Fi(t2.g);
  let r2 = (e2 = t2.g.g + e2) - s2;
  if (0 >= r2 && (t2.g.l = e2, i2(n2, t2, void 0, void 0, void 0), r2 = e2 - t2.g.g), r2) throw Error();
  return t2.g.g = e2, t2.g.l = s2, n2;
}
function Ji(t2) {
  var n2 = Fi(t2.g), a2 = Vi(t2 = t2.g, n2);
  if (t2 = t2.h, o) {
    var c2, h2 = t2;
    (c2 = r) || (c2 = r = new TextDecoder("utf-8", { fatal: true })), n2 = a2 + n2, h2 = 0 === a2 && n2 === h2.length ? h2 : h2.subarray(a2, n2);
    try {
      var u2 = c2.decode(h2);
    } catch (l2) {
      if (void 0 === e) {
        try {
          c2.decode(new Uint8Array([128]));
        } catch (d2) {
        }
        try {
          c2.decode(new Uint8Array([97])), e = true;
        } catch (d2) {
          e = false;
        }
      }
      throw !e && (r = void 0), l2;
    }
  } else {
    n2 = (u2 = a2) + n2, a2 = [];
    let e2, r2 = null;
    for (; n2 > u2; ) {
      var f2 = t2[u2++];
      128 > f2 ? a2.push(f2) : 224 > f2 ? n2 > u2 ? (e2 = t2[u2++], 194 > f2 || 128 != (192 & e2) ? (u2--, i()) : a2.push((31 & f2) << 6 | 63 & e2)) : i() : 240 > f2 ? n2 - 1 > u2 ? (e2 = t2[u2++], 128 != (192 & e2) || 224 === f2 && 160 > e2 || 237 === f2 && e2 >= 160 || 128 != (192 & (c2 = t2[u2++])) ? (u2--, i()) : a2.push((15 & f2) << 12 | (63 & e2) << 6 | 63 & c2)) : i() : f2 > 244 ? i() : n2 - 2 > u2 ? (e2 = t2[u2++], 128 != (192 & e2) || e2 - 144 + (f2 << 28) >> 30 || 128 != (192 & (c2 = t2[u2++])) || 128 != (192 & (h2 = t2[u2++])) ? (u2--, i()) : (f2 = (7 & f2) << 18 | (63 & e2) << 12 | (63 & c2) << 6 | 63 & h2, a2.push(55296 + ((f2 -= 65536) >> 10 & 1023), 56320 + (1023 & f2)))) : i(), a2.length >= 8192 && (r2 = s(r2, a2), a2.length = 0);
    }
    u2 = s(r2, a2);
  }
  return u2;
}
function Qi(t2) {
  const n2 = Fi(t2.g);
  return zi(t2.g, n2);
}
function Zi(t2, n2, i2) {
  var s2 = Fi(t2.g);
  for (s2 = t2.g.g + s2; s2 > t2.g.g; ) i2.push(n2(t2.g));
}
var ts = class {
  constructor(t2, n2, i2, s2) {
    if (Wi.length) {
      const e2 = Wi.pop();
      e2.init(t2, n2, i2, s2), t2 = e2;
    } else t2 = new class {
      constructor(t3, n3, i3, s3) {
        this.h = null, this.j = false, this.g = this.l = this.m = 0, this.init(t3, n3, i3, s3);
      }
      init(t3, n3, i3, { Y: s3 = false, ea: e2 = false } = {}) {
        this.Y = s3, this.ea = e2, t3 && (t3 = Ri(t3, this.ea), this.h = t3.buffer, this.j = t3.g, this.m = n3 || 0, this.l = void 0 !== i3 ? this.m + i3 : this.h.length, this.g = this.m);
      }
      clear() {
        this.h = null, this.j = false, this.g = this.l = this.m = 0, this.Y = false;
      }
    }(t2, n2, i2, s2);
    this.g = t2, this.m = this.g.g, this.h = this.l = -1, this.o(s2);
  }
  o({ ha: t2 = false } = {}) {
    this.ha = t2;
  }
};
var ns = [];
function is(t2) {
  return t2 ? /^\d+$/.test(t2) ? (jt(t2), new ss(It, Lt)) : null : es ||= new ss(0, 0);
}
var ss = class {
  constructor(t2, n2) {
    this.h = t2 >>> 0, this.g = n2 >>> 0;
  }
};
var es;
function rs(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (jt(t2), new os(It, Lt)) : null : as ||= new os(0, 0);
}
var os = class {
  constructor(t2, n2) {
    this.h = t2 >>> 0, this.g = n2 >>> 0;
  }
};
var as;
function cs(t2, n2, i2) {
  for (; i2 > 0 || n2 > 127; ) t2.g.push(127 & n2 | 128), n2 = (n2 >>> 7 | i2 << 25) >>> 0, i2 >>>= 7;
  t2.g.push(n2);
}
function hs(t2, n2) {
  for (; n2 > 127; ) t2.g.push(127 & n2 | 128), n2 >>>= 7;
  t2.g.push(n2);
}
function us(t2, n2) {
  if (0 > n2) {
    for (let i2 = 0; 9 > i2; i2++) t2.g.push(127 & n2 | 128), n2 >>= 7;
    t2.g.push(1);
  } else hs(t2, n2);
}
function fs(t2) {
  var n2 = It;
  t2.g.push(n2 >>> 0 & 255), t2.g.push(n2 >>> 8 & 255), t2.g.push(n2 >>> 16 & 255), t2.g.push(n2 >>> 24 & 255);
}
function ls(t2, n2) {
  0 !== n2.length && (t2.l.push(n2), t2.h += n2.length);
}
function ds(t2, n2, i2) {
  hs(t2.g, 8 * n2 + i2);
}
function ms(t2, n2) {
  return ds(t2, n2, 2), n2 = t2.g.end(), ls(t2, n2), n2.push(t2.h), n2;
}
function ps(t2, n2) {
  var i2 = n2.pop();
  for (i2 = t2.h + t2.g.length() - i2; i2 > 127; ) n2.push(127 & i2 | 128), i2 >>>= 7, t2.h++;
  n2.push(i2), t2.h++;
}
function vs(t2, n2, i2) {
  ds(t2, n2, 2), hs(t2.g, i2.length), ls(t2, t2.g.end()), ls(t2, i2);
}
function ws(t2, n2, i2, s2) {
  null != i2 && (n2 = ms(t2, n2), s2(i2, t2), ps(t2, n2));
}
function _s() {
  const t2 = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(t2, t2.prototype), t2;
}
var gs = _s();
var ys = _s();
var bs = _s();
var ks = _s();
var As = _s();
var Es = _s();
var Ss = _s();
var xs = _s();
var Os = _s();
var Ts = _s();
function Is(t2, n2, i2) {
  var s2 = t2.v;
  W && W in s2 && (s2 = s2[W]) && delete s2[n2.g], n2.h ? n2.j(t2, n2.h, n2.g, i2, n2.l) : n2.j(t2, n2.g, i2, n2.l);
}
var Ls = class {
  constructor(t2, n2) {
    this.v = Fn(t2, n2, void 0, 2048);
  }
  toJSON() {
    return Rn(this);
  }
  j() {
    var t2 = To, n2 = this.v, i2 = t2.g, s2 = W;
    if (D && s2 && null != n2[s2]?.[i2] && G(K, 3), n2 = t2.g, J && W && void 0 === J && (s2 = (i2 = this.v)[W]) && (s2 = s2.da)) try {
      s2(i2, n2, Ln);
    } catch (e2) {
      u(e2);
    }
    return t2.h ? t2.m(this, t2.h, t2.g, t2.l) : t2.m(this, t2.g, t2.defaultValue, t2.l);
  }
  clone() {
    const t2 = this.v, n2 = 0 | t2[tt];
    return Yn(this, t2, n2) ? Hn(this, t2, true) : new this.constructor(zn(t2, n2, false));
  }
};
Ls.prototype[X] = at, Ls.prototype.toString = function() {
  return "" + this.v;
};
var Ms = class {
  constructor(t2, n2, i2) {
    this.g = t2, this.h = n2, this.l = !!(t2 = gs) && i2 === t2 || false;
  }
};
function Ns(t2, n2) {
  return new Ms(t2, n2, gs);
}
function Us(t2, n2, i2, s2, e2) {
  ws(t2, i2, Ws(n2, s2), e2);
}
var Cs = Ns((t2, n2, i2, s2, e2) => 2 === t2.h && (Xi(t2, vi(n2, s2, i2), e2), true), Us);
var Rs = Ns((t2, n2, i2, s2, e2) => 2 === t2.h && (Xi(t2, vi(n2, s2, i2), e2), true), Us);
var Ps = Symbol();
var Bs = Symbol();
var Gs = Symbol();
var Fs = Symbol();
var Ds = Symbol();
var js;
var Hs;
function Vs(t2, n2, i2, s2) {
  var e2 = s2[t2];
  if (e2) return e2;
  (e2 = {}).qa = s2, e2.T = ((t3) => {
    switch (typeof t3) {
      case "boolean":
        return Pn ||= [0, void 0, true];
      case "number":
        return t3 > 0 ? void 0 : 0 === t3 ? Bn ||= [0, void 0] : [-t3, void 0];
      case "string":
        return [0, t3];
      case "object":
        return t3;
    }
  })(s2[0]);
  var r2 = s2[1];
  let o2 = 1;
  r2 && r2.constructor === Object && (e2.ba = r2, "function" == typeof (r2 = s2[++o2]) && (e2.ma = true, js ??= r2, Hs ??= s2[o2 + 1], r2 = s2[o2 += 2]));
  const a2 = {};
  for (; r2 && Array.isArray(r2) && r2.length && "number" == typeof r2[0] && r2[0] > 0; ) {
    for (var c2 = 0; r2.length > c2; c2++) a2[r2[c2]] = r2;
    r2 = s2[++o2];
  }
  for (c2 = 1; void 0 !== r2; ) {
    let t3;
    "number" == typeof r2 && (c2 += r2, r2 = s2[++o2]);
    var h2 = void 0;
    if (r2 instanceof Ms ? t3 = r2 : (t3 = Cs, o2--), t3?.l) {
      r2 = s2[++o2], h2 = s2;
      var u2 = o2;
      "function" == typeof r2 && (r2 = r2(), h2[u2] = r2), h2 = r2;
    }
    for (u2 = c2 + 1, "number" == typeof (r2 = s2[++o2]) && 0 > r2 && (u2 -= r2, r2 = s2[++o2]); u2 > c2; c2++) {
      const s3 = a2[c2];
      h2 ? i2(e2, c2, t3, h2, s3) : n2(e2, c2, t3, s3);
    }
  }
  return s2[t2] = e2;
}
function zs(t2) {
  return Array.isArray(t2) ? t2[0] instanceof Ms ? t2 : [Rs, t2] : [t2, void 0];
}
function Ws(t2, n2) {
  return t2 instanceof Ls ? t2.v : Array.isArray(t2) ? Gn(t2, n2) : void 0;
}
function Ks(t2, n2, i2, s2) {
  const e2 = i2.g;
  t2[n2] = s2 ? (t3, n3, i3) => e2(t3, n3, i3, s2) : e2;
}
function $s(t2, n2, i2, s2, e2) {
  const r2 = i2.g;
  let o2, a2;
  t2[n2] = (t3, n3, i3) => r2(t3, n3, i3, a2 ||= Vs(Bs, Ks, $s, s2).T, o2 ||= qs(s2), e2);
}
function qs(t2) {
  let n2 = t2[Gs];
  if (null != n2) return n2;
  const i2 = Vs(Bs, Ks, $s, t2);
  return n2 = i2.ma ? (t3, n3) => js(t3, n3, i2) : (t3, n3) => {
    for (; qi(n3) && 4 != n3.h; ) {
      var s2 = n3.l, e2 = i2[s2];
      if (null == e2) {
        var r2 = i2.ba;
        r2 && (r2 = r2[s2]) && null != (r2 = Xs(r2)) && (e2 = i2[s2] = r2);
      }
      if (null == e2 || !e2(n3, t3, s2)) {
        if (e2 = (r2 = n3).m, Yi(r2), r2.ha) var o2 = void 0;
        else o2 = r2.g.g - e2, r2.g.g = e2, o2 = zi(r2.g, o2);
        e2 = void 0, r2 = t3, o2 && ((e2 = r2[W] ?? (r2[W] = new In()))[s2] ?? (e2[s2] = [])).push(o2);
      }
    }
    return (t3 = On(t3)) && (t3.da = i2.qa[Ds]), true;
  }, t2[Gs] = n2, t2[Ds] = Ys.bind(t2), n2;
}
function Ys(t2, n2, i2, s2) {
  var e2 = this[Bs];
  const r2 = this[Gs], o2 = Gn(void 0, e2.T), a2 = On(t2);
  if (a2) {
    var c2 = false, h2 = e2.ba;
    if (h2) {
      if (e2 = (n3, i3, e3) => {
        if (0 !== e3.length) if (h2[i3]) for (const t3 of e3) {
          n3 = Ki(t3);
          try {
            c2 = true, r2(o2, n3);
          } finally {
            $i(n3);
          }
        }
        else s2?.(t2, i3, e3);
      }, null == n2) Tn(a2, e2);
      else if (null != a2) {
        const t3 = a2[n2];
        t3 && e2(a2, n2, t3);
      }
      if (c2) {
        let s3 = 0 | t2[tt];
        if (2 & s3 && 2048 & s3 && !i2?.Ka) throw Error();
        const e3 = pt(s3), r3 = (n3, r4) => {
          if (null != Zn(t2, n3, e3)) {
            if (1 === i2?.Qa) return;
            throw Error();
          }
          null != r4 && (s3 = ni(t2, s3, n3, r4, e3)), delete a2[n3];
        };
        null == n2 ? dt(o2, 0 | o2[tt], (t3, n3) => {
          r3(t3, n3);
        }) : r3(n2, Zn(o2, n2, e3));
      }
    }
  }
}
function Xs(t2) {
  const n2 = (t2 = zs(t2))[0].g;
  if (t2 = t2[1]) {
    const i2 = qs(t2), s2 = Vs(Bs, Ks, $s, t2).T;
    return (t3, e2, r2) => n2(t3, e2, r2, s2, i2);
  }
  return n2;
}
function Js(t2, n2, i2) {
  t2[n2] = i2.h;
}
function Qs(t2, n2, i2, s2) {
  let e2, r2;
  const o2 = i2.h;
  t2[n2] = (t3, n3, i3) => o2(t3, n3, i3, r2 ||= Vs(Ps, Js, Qs, s2).T, e2 ||= Zs(s2));
}
function Zs(t2) {
  let n2 = t2[Fs];
  if (!n2) {
    const i2 = Vs(Ps, Js, Qs, t2);
    n2 = (t3, n3) => te(t3, n3, i2), t2[Fs] = n2;
  }
  return n2;
}
function te(t2, n2, i2) {
  dt(t2, 0 | t2[tt], (t3, s2) => {
    if (null != s2) {
      var e2 = ((t4, n3) => {
        var i3 = t4[n3];
        if (i3) return i3;
        if ((i3 = t4.ba) && (i3 = i3[n3])) {
          var s3 = (i3 = zs(i3))[0].h;
          if (i3 = i3[1]) {
            const n4 = Zs(i3), e3 = Vs(Ps, Js, Qs, i3).T;
            i3 = t4.ma ? Hs(e3, n4) : (t5, i4, r2) => s3(t5, i4, r2, e3, n4);
          } else i3 = s3;
          return t4[n3] = i3;
        }
      })(i2, t3);
      e2 ? e2(n2, s2, t3) : 500 > t3 || G(q, 3);
    }
  }), (t2 = On(t2)) && Tn(t2, (t3, i3, s2) => {
    for (ls(n2, n2.g.end()), t3 = 0; s2.length > t3; t3++) ls(n2, M(s2[t3]) || new Uint8Array(0));
  });
}
var ne = bt(0);
function ie(t2, n2) {
  if (Array.isArray(n2)) {
    var i2 = 0 | n2[tt];
    if (4 & i2) return n2;
    for (var s2 = 0, e2 = 0; n2.length > s2; s2++) {
      const i3 = t2(n2[s2]);
      null != i3 && (n2[e2++] = i3);
    }
    return s2 > e2 && (n2.length = e2), (t2 = -1537 & i2 | 5) !== i2 && et(n2, t2), 2 & t2 && Object.freeze(n2), n2;
  }
}
function se(t2, n2, i2) {
  return new Ms(t2, n2, i2);
}
function ee(t2, n2, i2) {
  return new Ms(t2, n2, i2);
}
function re(t2, n2, i2) {
  ni(t2, 0 | t2[tt], n2, i2, pt(0 | t2[tt]));
}
var oe = Ns((t2, n2, i2, s2, e2) => {
  if (2 !== t2.h) return false;
  if (t2 = Vt(t2 = Xi(t2, Gn([void 0, void 0], s2), e2)), e2 = pt(s2 = 0 | n2[tt]), 2 & s2) throw Error();
  let r2 = Zn(n2, i2, e2);
  if (r2 instanceof kn) 2 & r2.J ? (r2 = r2.V(), r2.push(t2), ni(n2, s2, i2, r2, e2)) : r2.Ma(t2);
  else if (Array.isArray(r2)) {
    var o2 = 0 | r2[tt];
    8192 & o2 || et(r2, o2 |= 8192), 2 & o2 && (r2 = hi(r2), ni(n2, s2, i2, r2, e2)), r2.push(t2);
  } else ni(n2, s2, i2, ot([t2]), e2);
  return true;
}, (t2, n2, i2, s2, e2) => {
  if (n2 instanceof kn) n2.forEach((n3, r2) => {
    ws(t2, i2, Gn([r2, n3], s2), e2);
  });
  else if (Array.isArray(n2)) {
    for (let r2 = 0; n2.length > r2; r2++) {
      const o2 = n2[r2];
      Array.isArray(o2) && ws(t2, i2, Gn(o2, s2), e2);
    }
    ot(n2);
  }
});
function ae(t2, n2, i2) {
  null != (n2 = Jt(n2)) && (ds(t2, i2, 5), t2 = t2.g, Ut(n2), fs(t2));
}
function ce(t2, n2, i2) {
  if (null != (n2 = ((t3) => {
    if (null == t3) return t3;
    const n3 = typeof t3;
    if ("bigint" === n3) return zt(64, t3) + "";
    if (nn(t3)) {
      if ("string" === n3) return an(t3);
      if ("number" === n3) return on(t3);
    }
  })(n2)) && ("string" == typeof n2 && rs(n2), null != n2)) switch (ds(t2, i2, 0), typeof n2) {
    case "number":
      t2 = t2.g, Nt(n2), cs(t2, It, Lt);
      break;
    case "bigint":
      i2 = BigInt.asUintN(64, n2), i2 = new os(+(i2 & BigInt(4294967295)), +(i2 >> BigInt(32))), cs(t2.g, i2.h, i2.g);
      break;
    default:
      i2 = rs(n2), cs(t2.g, i2.h, i2.g);
  }
}
function he(t2, n2, i2) {
  null != (n2 = sn(n2)) && null != n2 && (ds(t2, i2, 0), us(t2.g, n2));
}
function ue(t2, n2, i2) {
  null != (n2 = Zt(n2)) && (ds(t2, i2, 0), t2.g.g.push(n2 ? 1 : 0));
}
function fe(t2, n2, i2) {
  null != (n2 = dn(n2)) && vs(t2, i2, h(n2));
}
function le(t2, n2, i2, s2, e2) {
  ws(t2, i2, Ws(n2, s2), e2);
}
function de(t2, n2, i2) {
  null != (n2 = null == n2 || "string" == typeof n2 || n2 instanceof N ? n2 : void 0) && vs(t2, i2, Ri(n2, true).buffer);
}
function me(t2, n2, i2) {
  return (5 === t2.h || 2 === t2.h) && (n2 = fi(n2, 0 | n2[tt], i2), 2 == t2.h ? Zi(t2, Di, n2) : n2.push(Di(t2.g)), true);
}
var pe = se((t2, n2, i2) => 5 === t2.h && (re(n2, i2, Di(t2.g)), true), ae, xs);
var ve = ee(me, (t2, n2, i2) => {
  if (null != (n2 = ie(Jt, n2))) for (let r2 = 0; n2.length > r2; r2++) {
    var s2 = t2, e2 = n2[r2];
    null != e2 && (ds(s2, i2, 5), s2 = s2.g, Ut(e2), fs(s2));
  }
}, xs);
var we = ee(me, (t2, n2, i2) => {
  if (null != (n2 = ie(Jt, n2)) && n2.length) {
    ds(t2, i2, 2), hs(t2.g, 4 * n2.length);
    for (let s2 = 0; n2.length > s2; s2++) i2 = t2.g, Ut(n2[s2]), fs(i2);
  }
}, xs);
var _e = se((t2, n2, i2) => 5 === t2.h && (re(n2, i2, 0 === (t2 = Di(t2.g)) ? void 0 : t2), true), ae, xs);
var ge = se((t2, n2, i2) => m ? (0 !== t2.h ? t2 = false : (re(n2, i2, Pi(t2.g, Bt)), t2 = true), t2) : 0 === t2.h && (re(n2, i2, Pi(t2.g, Pt)), true), ce, Es);
var ye = se((t2, n2, i2) => m ? (0 !== t2.h ? n2 = false : (re(n2, i2, (t2 = Pi(t2.g, Bt)) === ne ? void 0 : t2), n2 = true), n2) : 0 === t2.h && (re(n2, i2, 0 === (t2 = Pi(t2.g, Pt)) ? void 0 : t2), true), ce, Es);
var be = se((t2, n2, i2) => m ? (0 !== t2.h ? t2 = false : (re(n2, i2, Pi(t2.g, Rt)), t2 = true), t2) : 0 === t2.h && (re(n2, i2, Pi(t2.g, Ct)), true), (t2, n2, i2) => {
  if (null != (n2 = ((t3) => {
    if (null == t3) return t3;
    var n3 = typeof t3;
    if ("bigint" === n3) return Wt(64, t3) + "";
    if (nn(t3)) {
      if ("string" === n3) return n3 = qt(+t3), Kt(n3) && n3 >= 0 ? t3 = n3 + "" : (-1 !== (n3 = t3.indexOf(".")) && (t3 = t3.substring(0, n3)), (n3 = "-" !== t3[0] && (20 > (n3 = t3.length) || 20 === n3 && "18446744073709551615" >= t3)) || (jt(t3), t3 = Gt(It, Lt))), t3;
      if ("number" === n3) return (t3 = qt(t3)) >= 0 && Kt(t3) || (Nt(t3), t3 = Ct(It, Lt)), t3;
    }
  })(n2)) && ("string" == typeof n2 && is(n2), null != n2)) switch (ds(t2, i2, 0), typeof n2) {
    case "number":
      t2 = t2.g, Nt(n2), cs(t2, It, Lt);
      break;
    case "bigint":
      i2 = BigInt.asUintN(64, n2), i2 = new ss(+(i2 & BigInt(4294967295)), +(i2 >> BigInt(32))), cs(t2.g, i2.h, i2.g);
      break;
    default:
      i2 = is(n2), cs(t2.g, i2.h, i2.g);
  }
}, Ss);
var ke = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, Gi(t2.g)), true), he, ks);
var Ae = ee((t2, n2, i2) => (0 === t2.h || 2 === t2.h) && (n2 = fi(n2, 0 | n2[tt], i2), 2 == t2.h ? Zi(t2, Gi, n2) : n2.push(Gi(t2.g)), true), (t2, n2, i2) => {
  if (null != (n2 = ie(sn, n2)) && n2.length) {
    i2 = ms(t2, i2);
    for (let i3 = 0; n2.length > i3; i3++) us(t2.g, n2[i3]);
    ps(t2, i2);
  }
}, ks);
var Ee = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, 0 === (t2 = Gi(t2.g)) ? void 0 : t2), true), he, ks);
var Se = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, Bi(t2.g)), true), ue, ys);
var xe = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, false === (t2 = Bi(t2.g)) ? void 0 : t2), true), ue, ys);
var Oe = ee((t2, n2, i2) => 2 === t2.h && (t2 = Ji(t2), fi(n2, 0 | n2[tt], i2).push(t2), true), (t2, n2, i2) => {
  if (null != (n2 = ie(dn, n2))) for (let e2 = 0; n2.length > e2; e2++) {
    var s2 = n2[e2];
    null != s2 && vs(t2, i2, h(s2));
  }
}, bs);
var Te = se((t2, n2, i2) => 2 === t2.h && (re(n2, i2, "" === (t2 = Ji(t2)) ? void 0 : t2), true), fe, bs);
var Ie = se((t2, n2, i2) => 2 === t2.h && (re(n2, i2, Ji(t2)), true), fe, bs);
var Le = ((t2, n2, i2 = gs) => new Ms(t2, n2, i2))((t2, n2, i2, s2, e2) => 2 === t2.h && (s2 = Gn(void 0, s2), fi(n2, 0 | n2[tt], i2).push(s2), Xi(t2, s2, e2), true), (t2, n2, i2, s2, e2) => {
  if (Array.isArray(n2)) {
    for (let r2 = 0; n2.length > r2; r2++) le(t2, n2[r2], i2, s2, e2);
    1 & (t2 = 0 | n2[tt]) || et(n2, 1 | t2);
  }
});
var Me = Ns((t2, n2, i2, s2, e2, r2) => {
  if (2 !== t2.h) return false;
  let o2 = 0 | n2[tt];
  return mi(n2, o2, r2, i2, pt(o2)), Xi(t2, n2 = vi(n2, s2, i2), e2), true;
}, le);
var Ne = se((t2, n2, i2) => 2 === t2.h && (re(n2, i2, Qi(t2)), true), de, Os);
var Ue = ee((t2, n2, i2) => (0 === t2.h || 2 === t2.h) && (n2 = fi(n2, 0 | n2[tt], i2), 2 == t2.h ? Zi(t2, Fi, n2) : n2.push(Fi(t2.g)), true), (t2, n2, i2) => {
  if (null != (n2 = ie(en, n2))) for (let r2 = 0; n2.length > r2; r2++) {
    var s2 = t2, e2 = n2[r2];
    null != e2 && (ds(s2, i2, 0), hs(s2.g, e2));
  }
}, As);
var Ce = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, 0 === (t2 = Fi(t2.g)) ? void 0 : t2), true), (t2, n2, i2) => {
  null != (n2 = en(n2)) && null != n2 && (ds(t2, i2, 0), hs(t2.g, n2));
}, As);
var Re = se((t2, n2, i2) => 0 === t2.h && (re(n2, i2, Gi(t2.g)), true), (t2, n2, i2) => {
  null != (n2 = sn(n2)) && (n2 = parseInt(n2, 10), ds(t2, i2, 0), us(t2.g, n2));
}, Ts);
var Pe = class {
  constructor(t2, n2) {
    var i2 = tr;
    this.g = t2, this.h = n2, this.m = _i, this.j = ki, this.defaultValue = void 0, this.l = null != i2.Oa ? mt : void 0;
  }
  register() {
    _(this);
  }
};
function Be(t2, n2) {
  return new Pe(t2, n2);
}
function Ge(t2, n2) {
  return (i2, s2) => {
    {
      const r2 = { ea: true };
      s2 && Object.assign(r2, s2), i2 = Ki(i2, void 0, void 0, r2);
      try {
        const s3 = new t2(), r3 = s3.v;
        qs(n2)(r3, i2);
        var e2 = s3;
      } finally {
        $i(i2);
      }
    }
    return e2;
  };
}
function Fe(t2) {
  return function() {
    const n2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    te(this.v, n2, Vs(Ps, Js, Qs, t2)), ls(n2, n2.g.end());
    const i2 = new Uint8Array(n2.h), s2 = n2.l, e2 = s2.length;
    let r2 = 0;
    for (let t3 = 0; e2 > t3; t3++) {
      const n3 = s2[t3];
      i2.set(n3, r2), r2 += n3.length;
    }
    return n2.l = [i2], i2;
  };
}
var De = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var je = [0, Te, se((t2, n2, i2) => 2 === t2.h && (re(n2, i2, (t2 = Qi(t2)) === L() ? void 0 : t2), true), (t2, n2, i2) => {
  if (null != n2) {
    if (n2 instanceof Ls) {
      const s2 = n2.Ra;
      return void (s2 ? (n2 = s2(n2), null != n2 && vs(t2, i2, Ri(n2, true).buffer)) : G(q, 3));
    }
    if (Array.isArray(n2)) return void G(q, 3);
  }
  de(t2, n2, i2);
}, Os)];
var He;
var Ve = globalThis.trustedTypes;
function ze(t2) {
  var n2;
  return void 0 === He && (He = (() => {
    let t3 = null;
    if (!Ve) return t3;
    try {
      const n3 = (t4) => t4;
      t3 = Ve.createPolicy("goog#html", { createHTML: n3, createScript: n3, createScriptURL: n3 });
    } catch (n3) {
    }
    return t3;
  })()), t2 = (n2 = He) ? n2.createScriptURL(t2) : t2, new class {
    constructor(t3) {
      this.g = t3;
    }
    toString() {
      return this.g + "";
    }
  }(t2);
}
function We(t2, ...n2) {
  if (0 === n2.length) return ze(t2[0]);
  let i2 = t2[0];
  for (let s2 = 0; n2.length > s2; s2++) i2 += encodeURIComponent(n2[s2]) + t2[s2 + 1];
  return ze(i2);
}
var Ke = [0, ke, Re, Se, -1, Ae, Re, -1, Se];
var $e = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var qe = [0, Se, Ie, Se, Re, -1, ee((t2, n2, i2) => (0 === t2.h || 2 === t2.h) && (n2 = fi(n2, 0 | n2[tt], i2), 2 == t2.h ? Zi(t2, ji, n2) : n2.push(Gi(t2.g)), true), (t2, n2, i2) => {
  if (null != (n2 = ie(sn, n2)) && n2.length) {
    i2 = ms(t2, i2);
    for (let i3 = 0; n2.length > i3; i3++) us(t2.g, n2[i3]);
    ps(t2, i2);
  }
}, Ts), Ie, -1, [0, Se, -1], Re, Se, -1];
var Ye = [0, 3, Se, -1, 2, [0, ke], [0, Re, Se], [0, Ie, -1], [0]];
var Xe = [0, Ie, -2];
var Je = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Qe = [0];
var Ze = [0, ke, Se, 1, Se, -4];
var tr = class extends Ls {
  constructor(t2) {
    super(t2, 2);
  }
};
var nr = {};
nr[336783863] = [0, Ie, Se, -1, ke, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], Me, Qe, Me, qe, Me, Xe, Me, Ze, Me, Ke, Me, [0, Ie, -2], Me, [0, Ie, Re], Me, Ye, Me, [0, Re, -1, Se]], [0, Ie], Se, [0, [1, 3], [2, 4], Me, [0, Ae], -1, Me, [0, Oe], -1, Le, [0, Ie, -1]], Ie];
var ir = [0, ye, -1, xe, -3, ye, Ae, Te, Ee, ye, -1, xe, Ee, xe, -2, Te];
function sr(t2, n2) {
  Ui(t2, 3, n2);
}
function er(t2, n2) {
  Ui(t2, 4, n2);
}
var rr = class extends Ls {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return ki(this, 0, 7, t2);
  }
};
var or = [-1, {}];
var ar = [0, Ie, 1, or];
var cr = [0, Ie, Oe, or];
function hr(t2, n2) {
  Si(t2, 1, rr, n2);
}
function ur(t2, n2) {
  Ui(t2, 10, n2);
}
function fr(t2, n2) {
  Ui(t2, 15, n2);
}
var lr = class extends Ls {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return ki(this, 0, 1001, t2);
  }
};
var dr = [-500, Le, [-500, Te, -1, Oe, -3, [-2, nr, Se], Le, je, Ee, -1, ar, cr, Le, [0, Te, xe], Te, ir, Ee, Oe, 987, Oe], 4, Le, [-500, Ie, -1, [-1, {}], 998, Ie], Le, [-500, Ie, Oe, -1, [-2, {}, Se], 997, Oe, -1], Ee, Le, [-500, Ie, Oe, or, 998, Oe], Oe, Ee, ar, cr, Le, [0, Te, -1, or], Oe, -2, ir, Te, -1, xe, [0, xe, Ce], 978, or, Le, je];
lr.prototype.g = Fe(dr);
var mr = Ge(lr, dr);
var pr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var vr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  g() {
    return yi(this, pr, 1);
  }
};
var wr = [0, Le, [0, ke, pe, Ie, -1]];
var _r = Ge(vr, wr);
var gr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var yr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var br = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  l() {
    return _i(this, gr, 2);
  }
  g() {
    return yi(this, yr, 5);
  }
};
var kr = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, Oe, Ae, we, [0, Re, [0, ke, -3], [0, pe, -3], [0, ke, -1, [0, Le, [0, ke, -2]]], Le, [0, pe, -1, Ie, pe]], Ie, -1, ge, Le, [0, ke, pe], Oe, ge]);
var Ar = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Er = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, Le, [0, pe, -4]]);
var Sr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var xr = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, Le, [0, pe, -4]]);
var Or = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Tr = [0, ke, -1, we, Re];
var Ir = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
Ir.prototype.g = Fe([0, pe, -4, ge]);
var Lr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Mr = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, Le, [0, 1, ke, Ie, wr], ge]);
var Nr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Ur = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  na() {
    return Qn(this, 1, void 0, void 0, ci) ?? L();
  }
};
var Cr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Rr = [1, 2];
var Pr = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, Le, [0, Rr, Me, [0, we], Me, [0, Ne], ke, Ie], ge]);
var Br = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Gr = [0, Ie, ke, pe, Oe, -1];
var Fr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Dr = [0, Se, -1];
var jr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Hr = [1, 2, 3, 4, 5, 6];
var Vr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  g() {
    return null != Qn(this, 1, void 0, void 0, ci);
  }
  l() {
    return null != dn(Qn(this, 2));
  }
};
var zr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  g() {
    return Zt(Qn(this, 2)) ?? false;
  }
};
var Wr = [0, Ne, Ie, [0, ke, ge, -1], [0, be, ge]];
var Kr = [0, Wr, Se, [0, Hr, Me, Ze, Me, qe, Me, Ke, Me, Qe, Me, Xe, Me, Ye], Re];
var $r = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var qr = [0, Kr, pe, -1, ke];
var Yr = Be(502141897, $r);
nr[502141897] = qr;
var Xr = Ge(class extends Ls {
  constructor(t2) {
    super(t2);
  }
}, [0, [0, Re, -1, ve, Ue], Tr]);
var Jr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Qr = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Zr = [0, Kr, pe, [0, Kr], Se];
var to = Be(508968150, Qr);
nr[508968150] = [0, Kr, qr, Zr, pe, [0, [0, Wr]]], nr[508968149] = Zr;
var no = class extends Ls {
  constructor(t2) {
    super(t2);
  }
  l() {
    return _i(this, Br, 2);
  }
  g() {
    ti(this, 2);
  }
};
var io = [0, Kr, Gr];
nr[478825465] = io;
var so = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var eo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var ro = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var oo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var ao = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var co = [0, Kr, [0, Kr], io, -1];
var ho = [0, Kr, pe, ke];
var uo = [0, Kr, pe];
var fo = [0, Kr, ho, uo, pe];
var lo = Be(479097054, ao);
nr[479097054] = [0, Kr, fo, co], nr[463370452] = co, nr[464864288] = ho;
var mo = Be(462713202, oo);
nr[462713202] = fo, nr[474472470] = uo;
var po = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var vo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var wo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var _o = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var go = [0, Kr, pe, -1, ke];
var yo = [0, Kr, pe, Se];
_o.prototype.g = Fe([0, Kr, uo, [0, Kr], qr, Zr, go, yo]);
var bo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var ko = Be(456383383, bo);
nr[456383383] = [0, Kr, Gr];
var Ao = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Eo = Be(476348187, Ao);
nr[476348187] = [0, Kr, Dr];
var So = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var xo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Oo = [0, Re, -1];
var To = Be(458105876, class extends Ls {
  constructor(t2) {
    super(t2);
  }
  g() {
    let t2;
    var n2 = this.v;
    const i2 = 0 | n2[tt];
    return t2 = ct(this, i2), n2 = ((t3, n3, i3, s2) => {
      var e2 = xo;
      !s2 && Kn(t3) && (i3 = 0 | (n3 = t3.v)[tt]);
      var r2 = Zn(n3, 2);
      if (t3 = false, null == r2) {
        if (s2) return xn();
        r2 = [];
      } else if (r2.constructor === kn) {
        if (!(2 & r2.J) || s2) return r2;
        r2 = r2.V();
      } else Array.isArray(r2) ? t3 = !!(2 & r2[tt]) : r2 = [];
      if (s2) {
        if (!r2.length) return xn();
        t3 || (t3 = true, rt(r2));
      } else t3 && (t3 = false, ot(r2), r2 = hi(r2));
      return !t3 && 32 & i3 && st(r2, 32), i3 = ni(n3, i3, 2, s2 = new kn(r2, e2, pn, void 0)), t3 || qn(n3, i3), s2;
    })(this, n2, i2, t2), !t2 && xo && (n2.ra = true), n2;
  }
});
nr[458105876] = [0, Oo, oe, [true, ge, [0, Ie, -1, Oe]], [0, Ae, Se, Re]];
var Io = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Lo = Be(458105758, Io);
nr[458105758] = [0, Kr, Ie, Oo];
var Mo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var No = [0, _e, -1, xe];
var Uo = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Co = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Ro = [1, 2];
Co.prototype.g = Fe([0, Ro, Me, No, Me, [0, Le, No]]);
var Po = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Bo = Be(443442058, Po);
nr[443442058] = [0, Kr, Ie, ke, pe, Oe, -1, Se, pe], nr[514774813] = go;
var Go = class extends Ls {
  constructor(t2) {
    super(t2);
  }
};
var Fo = Be(516587230, Go);
function Do(t2, n2) {
  return n2 = n2 ? n2.clone() : new Br(), void 0 !== t2.displayNamesLocale ? ti(n2, 1, ln(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && ti(n2, 1), void 0 !== t2.maxResults ? Ii(n2, 2, t2.maxResults) : "maxResults" in t2 && ti(n2, 2), void 0 !== t2.scoreThreshold ? Li(n2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && ti(n2, 3), void 0 !== t2.categoryAllowlist ? Ni(n2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && ti(n2, 4), void 0 !== t2.categoryDenylist ? Ni(n2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && ti(n2, 5), n2;
}
function jo(t2) {
  const n2 = +t2;
  return Number.isSafeInteger(n2) ? n2 : t2 + "";
}
function Ho(t2, n2 = -1, i2 = "") {
  return { categories: t2.map((t3) => ({ index: xi(t3, 1) ?? 0 ?? -1, score: Ti(t3, 2) ?? 0, categoryName: dn(Qn(t3, 3)) ?? "" ?? "", displayName: dn(Qn(t3, 4)) ?? "" ?? "" })), headIndex: n2, headName: i2 };
}
function Vo(t2) {
  var n2 = si(t2, 3, Jt, ii()), i2 = si(t2, 2, sn, ii()), s2 = si(t2, 1, dn, ii()), e2 = si(t2, 9, dn, ii());
  const r2 = { categories: [], keypoints: [] };
  for (let o2 = 0; n2.length > o2; o2++) r2.categories.push({ score: n2[o2], index: i2[o2] ?? -1, categoryName: s2[o2] ?? "", displayName: e2[o2] ?? "" });
  if ((n2 = _i(t2, br, 4)?.l()) && (r2.boundingBox = { originX: xi(n2, 1, Jn) ?? 0, originY: xi(n2, 2, Jn) ?? 0, width: xi(n2, 3, Jn) ?? 0, height: xi(n2, 4, Jn) ?? 0, angle: 0 }), _i(t2, br, 4)?.g().length) for (const o2 of _i(t2, br, 4).g()) r2.keypoints.push({ x: Qn(o2, 1, void 0, Jn, Jt) ?? 0, y: Qn(o2, 2, void 0, Jn, Jt) ?? 0, score: Qn(o2, 4, void 0, Jn, Jt) ?? 0, label: dn(Qn(o2, 3, void 0, Jn)) ?? "" });
  return r2;
}
function zo(t2) {
  const n2 = [];
  for (const i2 of yi(t2, Sr, 1)) n2.push({ x: Ti(i2, 1) ?? 0, y: Ti(i2, 2) ?? 0, z: Ti(i2, 3) ?? 0, visibility: Ti(i2, 4) ?? 0 });
  return n2;
}
function Wo(t2) {
  const n2 = [];
  for (const i2 of yi(t2, Ar, 1)) n2.push({ x: Ti(i2, 1) ?? 0, y: Ti(i2, 2) ?? 0, z: Ti(i2, 3) ?? 0, visibility: Ti(i2, 4) ?? 0 });
  return n2;
}
function Ko(t2) {
  return Array.from(t2, (t3) => t3 > 127 ? t3 - 256 : t3);
}
function $o(t2, n2) {
  if (t2.length !== n2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${n2.length}).`);
  let i2 = 0, s2 = 0, e2 = 0;
  for (let r2 = 0; t2.length > r2; r2++) i2 += t2[r2] * n2[r2], s2 += t2[r2] * t2[r2], e2 += n2[r2] * n2[r2];
  if (0 >= s2 || 0 >= e2) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return i2 / Math.sqrt(s2 * e2);
}
var qo;
nr[516587230] = [0, Kr, go, yo, pe], nr[518928384] = yo;
var Yo = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
function Xo() {
  return __async(this, null, function* () {
    if (void 0 === qo) try {
      yield WebAssembly.instantiate(Yo), qo = true;
    } catch {
      qo = false;
    }
    return qo;
  });
}
function Jo(_0) {
  return __async(this, arguments, function* (t2, n2 = We``) {
    const i2 = (yield Xo()) ? "wasm_internal" : "wasm_nosimd_internal";
    return { wasmLoaderPath: `${n2}/${t2}_${i2}.js`, wasmBinaryPath: `${n2}/${t2}_${i2}.wasm` };
  });
}
var Qo = class {
};
function Zo() {
  var t2 = navigator;
  return !("undefined" == typeof OffscreenCanvas || ((t3 = navigator) => (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome"))(t2) && (!(t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) || 1 > t2.length || 17 > +t2[1]));
}
function ta(t2) {
  return __async(this, null, function* () {
    if ("function" != typeof importScripts) {
      const n2 = document.createElement("script");
      return n2.src = "" + t2, n2.crossOrigin = "anonymous", new Promise((t3, i2) => {
        n2.addEventListener("load", () => {
          t3();
        }, false), n2.addEventListener("error", (t4) => {
          i2(t4);
        }, false), document.body.appendChild(n2);
      });
    }
    try {
      importScripts("" + t2);
    } catch (n2) {
      if (!(n2 instanceof TypeError)) throw n2;
      yield self.import("" + t2);
    }
  });
}
function na(t2) {
  return void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
}
function ia(t2, n2, i2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), i2(n2 = t2.i.stringToNewUTF8(n2)), t2.i._(n2);
}
function sa(t2, n2, i2) {
  if (!t2.i.canvas) throw Error("No OpenGL canvas configured.");
  if (i2 ? t2.i.k(i2) : t2.i.$(), !(i2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  t2.i.gpuOriginForWebTexturesIsBottomLeft && i2.pixelStorei(i2.UNPACK_FLIP_Y_WEBGL, true), i2.texImage2D(i2.TEXTURE_2D, 0, i2.RGBA, i2.RGBA, i2.UNSIGNED_BYTE, n2), t2.i.gpuOriginForWebTexturesIsBottomLeft && i2.pixelStorei(i2.UNPACK_FLIP_Y_WEBGL, false);
  const [s2, e2] = na(n2);
  return !t2.l || s2 === t2.i.canvas.width && e2 === t2.i.canvas.height || (t2.i.canvas.width = s2, t2.i.canvas.height = e2), [s2, e2];
}
function ea(t2, n2, i2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const s2 = new Uint32Array(n2.length);
  for (let e2 = 0; n2.length > e2; e2++) s2[e2] = t2.i.stringToNewUTF8(n2[e2]);
  n2 = t2.i.q(4 * s2.length), t2.i.HEAPU32.set(s2, n2 >> 2), i2(n2);
  for (const e2 of s2) t2.i._(e2);
  t2.i._(n2);
}
function ra(t2, n2, i2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[n2] = i2;
}
function oa(t2, n2, i2) {
  let s2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[n2] = (t3, n3, e2) => {
    n3 ? (i2(s2, e2), s2 = []) : s2.push(t3);
  };
}
function aa(t2, n2) {
  const i2 = _i(t2.baseOptions, Vr, 1) || new Vr();
  "string" == typeof n2 ? (ti(i2, 2, ln(n2)), ti(i2, 1)) : n2 instanceof Uint8Array && (ti(i2, 1, ut(n2, false)), ti(i2, 2)), ki(t2.baseOptions, 0, 1, i2);
}
function ca(t2) {
  try {
    const n2 = t2.H.length;
    if (1 === n2) throw Error(t2.H[0].message);
    if (n2 > 1) throw Error("Encountered multiple errors: " + t2.H.map((t3) => t3.message).join(", "));
  } finally {
    t2.H = [];
  }
}
function ha(t2, n2) {
  t2.C = Math.max(t2.C, n2);
}
function ua(t2, n2) {
  t2.B = new rr(), Mi(t2.B, 2, "PassThroughCalculator"), sr(t2.B, "free_memory"), er(t2.B, "free_memory_unused_out"), ur(n2, "free_memory"), hr(n2, t2.B);
}
function fa(t2, n2) {
  sr(t2.B, n2), er(t2.B, n2 + "_unused_out");
}
function la(t2) {
  t2.g.addBoolToStream(true, "free_memory", t2.C);
}
Qo.forVisionTasks = (t2) => Jo("vision", t2), Qo.forTextTasks = (t2) => Jo("text", t2), Qo.forGenAiExperimentalTasks = (t2) => Jo("genai_experimental", t2), Qo.forGenAiTasks = (t2) => Jo("genai", t2), Qo.forAudioTasks = (t2) => Jo("audio", t2), Qo.isSimdSupported = () => Xo();
var da = class {
  constructor(t2) {
    this.g = t2, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(false);
  }
  l(t2, n2 = true) {
    if (n2) {
      const n3 = t2.baseOptions || {};
      if (t2.baseOptions?.modelAssetBuffer && t2.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(_i(this.baseOptions, Vr, 1)?.g() || _i(this.baseOptions, Vr, 1)?.l() || t2.baseOptions?.modelAssetBuffer || t2.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (((t3, n4) => {
        let i2 = _i(t3.baseOptions, jr, 3);
        if (!i2) {
          var s2 = i2 = new jr(), e2 = new Je();
          Ai(s2, 4, Hr, e2);
        }
        "delegate" in n4 && ("GPU" === n4.delegate ? (n4 = i2, s2 = new $e(), Ai(n4, 2, Hr, s2)) : (n4 = i2, s2 = new Je(), Ai(n4, 4, Hr, s2))), ki(t3.baseOptions, 0, 3, i2);
      })(this, n3), n3.modelAssetPath) return fetch("" + n3.modelAssetPath).then((t3) => {
        if (t3.ok) return t3.arrayBuffer();
        throw Error(`Failed to fetch model: ${n3.modelAssetPath} (${t3.status})`);
      }).then((t3) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), aa(this, "/model.dat"), this.m(), this.L();
      });
      if (n3.modelAssetBuffer instanceof Uint8Array) aa(this, n3.modelAssetBuffer);
      else if (n3.modelAssetBuffer) return ((t3) => __async(this, null, function* () {
        const n4 = [];
        for (var i2 = 0; ; ) {
          const { done: s2, value: e2 } = yield t3.read();
          if (s2) break;
          n4.push(e2), i2 += e2.length;
        }
        if (0 === n4.length) return new Uint8Array(0);
        if (1 === n4.length) return n4[0];
        t3 = new Uint8Array(i2), i2 = 0;
        for (const s2 of n4) t3.set(s2, i2), i2 += s2.length;
        return t3;
      }))(n3.modelAssetBuffer).then((t3) => {
        aa(this, t3), this.m(), this.L();
      });
    }
    return this.m(), this.L(), Promise.resolve();
  }
  L() {
  }
  ca() {
    let t2;
    if (this.g.ca((n2) => {
      t2 = mr(n2);
    }), !t2) throw Error("Failed to retrieve CalculatorGraphConfig");
    return t2;
  }
  setGraph(t2, n2) {
    this.g.attachErrorListener((t3, n3) => {
      this.H.push(Error(n3));
    }), this.g.Ja(), this.g.setGraph(t2, n2), this.B = void 0, ca(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), ca(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function ma(t2, n2) {
  if (!t2) throw Error("Unable to obtain required WebGL resource: " + n2);
  return t2;
}
da.prototype.close = da.prototype.close;
var pa = class {
  constructor(t2, n2, i2, s2) {
    this.g = t2, this.h = n2, this.m = i2, this.l = s2;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
};
function va(t2, n2, i2) {
  const s2 = t2.g;
  if (i2 = ma(s2.createShader(i2), "Failed to create WebGL shader"), s2.shaderSource(i2, n2), s2.compileShader(i2), !s2.getShaderParameter(i2, s2.COMPILE_STATUS)) throw Error("Could not compile WebGL shader: " + s2.getShaderInfoLog(i2));
  return s2.attachShader(t2.h, i2), i2;
}
function wa(t2, n2) {
  const i2 = t2.g, s2 = ma(i2.createVertexArray(), "Failed to create vertex array");
  i2.bindVertexArray(s2);
  const e2 = ma(i2.createBuffer(), "Failed to create buffer");
  i2.bindBuffer(i2.ARRAY_BUFFER, e2), i2.enableVertexAttribArray(t2.O), i2.vertexAttribPointer(t2.O, 2, i2.FLOAT, false, 0, 0), i2.bufferData(i2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), i2.STATIC_DRAW);
  const r2 = ma(i2.createBuffer(), "Failed to create buffer");
  return i2.bindBuffer(i2.ARRAY_BUFFER, r2), i2.enableVertexAttribArray(t2.L), i2.vertexAttribPointer(t2.L, 2, i2.FLOAT, false, 0, 0), i2.bufferData(i2.ARRAY_BUFFER, new Float32Array(n2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), i2.STATIC_DRAW), i2.bindBuffer(i2.ARRAY_BUFFER, null), i2.bindVertexArray(null), new pa(i2, s2, e2, r2);
}
function _a(t2, n2) {
  if (t2.g) {
    if (n2 !== t2.g) throw Error("Cannot change GL context once initialized");
  } else t2.g = n2;
}
function ga(t2, n2, i2, s2) {
  return _a(t2, n2), t2.h || (t2.m(), t2.D()), i2 ? (t2.u || (t2.u = wa(t2, true)), i2 = t2.u) : (t2.A || (t2.A = wa(t2, false)), i2 = t2.A), n2.useProgram(t2.h), i2.bind(), t2.l(), t2 = s2(), i2.g.bindVertexArray(null), t2;
}
function ya(t2, n2, i2) {
  return _a(t2, n2), t2 = ma(n2.createTexture(), "Failed to create texture"), n2.bindTexture(n2.TEXTURE_2D, t2), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_S, n2.CLAMP_TO_EDGE), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_T, n2.CLAMP_TO_EDGE), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MIN_FILTER, i2 ?? n2.LINEAR), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MAG_FILTER, i2 ?? n2.LINEAR), n2.bindTexture(n2.TEXTURE_2D, null), t2;
}
function ba(t2, n2, i2) {
  _a(t2, n2), t2.B || (t2.B = ma(n2.createFramebuffer(), "Failed to create framebuffe.")), n2.bindFramebuffer(n2.FRAMEBUFFER, t2.B), n2.framebufferTexture2D(n2.FRAMEBUFFER, n2.COLOR_ATTACHMENT0, n2.TEXTURE_2D, i2, 0);
}
function ka(t2) {
  t2.g?.bindFramebuffer(t2.g.FRAMEBUFFER, null);
}
var Aa = class {
  H() {
    return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
  }
  m() {
    const t2 = this.g;
    if (this.h = ma(t2.createProgram(), "Failed to create WebGL program"), this.X = va(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.W = va(this, this.H(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS)) throw Error("Error during program linking: " + t2.getProgramInfoLog(this.h));
    this.O = t2.getAttribLocation(this.h, "aVertex"), this.L = t2.getAttribLocation(this.h, "aTex");
  }
  D() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const t2 = this.g;
      t2.deleteProgram(this.h), t2.deleteShader(this.X), t2.deleteShader(this.W);
    }
    this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
  }
};
function Ea(t2, n2) {
  switch (n2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof Uint8Array);
    case 1:
      return t2.g.find((t3) => t3 instanceof Float32Array);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error("Type is not supported: " + n2);
  }
}
function Sa(t2) {
  var n2 = Ea(t2, 1);
  if (!n2) {
    if (n2 = Ea(t2, 0)) n2 = new Float32Array(n2).map((t3) => t3 / 255);
    else {
      n2 = new Float32Array(t2.width * t2.height);
      const s2 = Oa(t2);
      var i2 = Ia(t2);
      if (ba(i2, s2, xa(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
        i2 = new Float32Array(t2.width * t2.height * 4), s2.readPixels(0, 0, t2.width, t2.height, s2.RGBA, s2.FLOAT, i2);
        for (let t3 = 0, s3 = 0; n2.length > t3; ++t3, s3 += 4) n2[t3] = i2[s3];
      } else s2.readPixels(0, 0, t2.width, t2.height, s2.RED, s2.FLOAT, n2);
    }
    t2.g.push(n2);
  }
  return n2;
}
function xa(t2) {
  let n2 = Ea(t2, 2);
  if (!n2) {
    const i2 = Oa(t2);
    n2 = La(t2);
    const s2 = Sa(t2), e2 = Ta(t2);
    i2.texImage2D(i2.TEXTURE_2D, 0, e2, t2.width, t2.height, 0, i2.RED, i2.FLOAT, s2), Ma(t2);
  }
  return n2;
}
function Oa(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = ma(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function Ta(t2) {
  if (t2 = Oa(t2), !Na) if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend")) Na = t2.R32F;
  else {
    if (!t2.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Na = t2.R16F;
  }
  return Na;
}
function Ia(t2) {
  return t2.l || (t2.l = new Aa()), t2.l;
}
function La(t2) {
  const n2 = Oa(t2);
  n2.viewport(0, 0, t2.width, t2.height), n2.activeTexture(n2.TEXTURE0);
  let i2 = Ea(t2, 2);
  return i2 || (i2 = ya(Ia(t2), n2, t2.m ? n2.LINEAR : n2.NEAREST), t2.g.push(i2), t2.j = true), n2.bindTexture(n2.TEXTURE_2D, i2), i2;
}
function Ma(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
var Na;
var Ua = class {
  constructor(t2, n2, i2, s2, e2, r2, o2) {
    this.g = t2, this.m = n2, this.j = i2, this.canvas = s2, this.l = e2, this.width = r2, this.height = o2, this.j && 0 === --Ca && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  Fa() {
    return !!Ea(this, 0);
  }
  ka() {
    return !!Ea(this, 1);
  }
  R() {
    return !!Ea(this, 2);
  }
  ja() {
    return (t2 = Ea(this, 0)) || (t2 = Sa(this), t2 = new Uint8Array(t2.map((t3) => Math.round(255 * t3))), this.g.push(t2)), t2;
    var t2;
  }
  ia() {
    return Sa(this);
  }
  N() {
    return xa(this);
  }
  clone() {
    const t2 = [];
    for (const n2 of this.g) {
      let i2;
      if (n2 instanceof Uint8Array) i2 = new Uint8Array(n2);
      else if (n2 instanceof Float32Array) i2 = new Float32Array(n2);
      else {
        if (!(n2 instanceof WebGLTexture)) throw Error("Type is not supported: " + n2);
        {
          const t3 = Oa(this), n3 = Ia(this);
          t3.activeTexture(t3.TEXTURE1), i2 = ya(n3, t3, this.m ? t3.LINEAR : t3.NEAREST), t3.bindTexture(t3.TEXTURE_2D, i2);
          const s2 = Ta(this);
          t3.texImage2D(t3.TEXTURE_2D, 0, s2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), ba(n3, t3, i2), ga(n3, t3, false, () => {
            La(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ma(this);
          }), ka(n3), Ma(this);
        }
      }
      t2.push(i2);
    }
    return new Ua(t2, this.m, this.R(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Oa(this).deleteTexture(Ea(this, 2)), Ca = -1;
  }
};
Ua.prototype.close = Ua.prototype.close, Ua.prototype.clone = Ua.prototype.clone, Ua.prototype.getAsWebGLTexture = Ua.prototype.N, Ua.prototype.getAsFloat32Array = Ua.prototype.ia, Ua.prototype.getAsUint8Array = Ua.prototype.ja, Ua.prototype.hasWebGLTexture = Ua.prototype.R, Ua.prototype.hasFloat32Array = Ua.prototype.ka, Ua.prototype.hasUint8Array = Ua.prototype.Fa;
var Ca = 250;
function Ra(...t2) {
  return t2.map(([t3, n2]) => ({ start: t3, end: n2 }));
}
var Pa = /* @__PURE__ */ (function(t2) {
  return class extends t2 {
    Ja() {
      this.i.tt();
    }
  };
})((Ba = class {
  constructor(t2, n2) {
    this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i.nt, void 0 !== n2 ? this.i.canvas = n2 : Zo() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
  }
  initializeGraph(t2) {
    return __async(this, null, function* () {
      const n2 = yield (yield fetch(t2)).arrayBuffer();
      t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(n2), t2);
    });
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, n2) {
    const i2 = t2.length, s2 = this.i.q(i2);
    this.i.HEAPU8.set(t2, s2), n2 ? this.i.it(i2, s2) : this.i.st(i2, s2), this.i._(s2);
  }
  configureAudio(t2, n2, i2, s2, e2) {
    this.i.et || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), ia(this, s2 || "input_audio", (s3) => {
      ia(this, e2 = e2 || "audio_header", (e3) => {
        this.i.et(s3, e3, t2, n2 ?? 0, i2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.l = t2;
  }
  setAutoRenderToScreen(t2) {
    this.i.rt(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  ca(t2) {
    ra(this, "__graph_config__", (n2) => {
      t2(n2);
    }), ia(this, "__graph_config__", (t3) => {
      this.i.ot(t3, void 0);
    }), delete this.i.simpleListeners.ct;
  }
  attachErrorListener(t2) {
    this.i.errorListener = t2;
  }
  attachEmptyPacketListener(t2, n2) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = n2;
  }
  addAudioToStream(t2, n2, i2) {
    this.addAudioToStreamWithShape(t2, 0, 0, n2, i2);
  }
  addAudioToStreamWithShape(t2, n2, i2, s2, e2) {
    const r2 = 4 * t2.length;
    this.h !== r2 && (this.g && this.i._(this.g), this.g = this.i.q(r2), this.h = r2), this.i.HEAPF32.set(t2, this.g / 4), ia(this, s2, (t3) => {
      this.i.ht(this.g, n2, i2, t3, e2);
    });
  }
  addGpuBufferToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const [s2, e2] = sa(this, t2, n3);
      this.i.ut(n3, s2, e2, i2);
    });
  }
  addBoolToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      this.i.ft(t2, n3, i2);
    });
  }
  addDoubleToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      this.i.lt(t2, n3, i2);
    });
  }
  addFloatToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      this.i.dt(t2, n3, i2);
    });
  }
  addIntToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      this.i.nt(t2, n3, i2);
    });
  }
  addUintToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      this.i.vt(t2, n3, i2);
    });
  }
  addStringToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      ia(this, t2, (t3) => {
        this.i.wt(t3, n3, i2);
      });
    });
  }
  addStringRecordToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      ea(this, Object.keys(t2), (s2) => {
        ea(this, Object.values(t2), (e2) => {
          this.i._t(s2, e2, Object.keys(t2).length, n3, i2);
        });
      });
    });
  }
  addProtoToStream(t2, n2, i2, s2) {
    ia(this, i2, (i3) => {
      ia(this, n2, (n3) => {
        const e2 = this.i.q(t2.length);
        this.i.HEAPU8.set(t2, e2), this.i.gt(e2, t2.length, n3, i3, s2), this.i._(e2);
      });
    });
  }
  addEmptyPacketToStream(t2, n2) {
    ia(this, t2, (t3) => {
      this.i.yt(t3, n2);
    });
  }
  addBoolVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.bt(t2.length);
      if (!s2) throw Error("Unable to allocate new bool vector on heap.");
      for (const i3 of t2) this.i.kt(s2, i3);
      this.i.At(s2, n3, i2);
    });
  }
  addDoubleVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.Et(t2.length);
      if (!s2) throw Error("Unable to allocate new double vector on heap.");
      for (const i3 of t2) this.i.St(s2, i3);
      this.i.xt(s2, n3, i2);
    });
  }
  addFloatVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.Ot(t2.length);
      if (!s2) throw Error("Unable to allocate new float vector on heap.");
      for (const i3 of t2) this.i.Tt(s2, i3);
      this.i.It(s2, n3, i2);
    });
  }
  addIntVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.Lt(t2.length);
      if (!s2) throw Error("Unable to allocate new int vector on heap.");
      for (const i3 of t2) this.i.Mt(s2, i3);
      this.i.Nt(s2, n3, i2);
    });
  }
  addUintVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.Ut(t2.length);
      if (!s2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const i3 of t2) this.i.Ct(s2, i3);
      this.i.Rt(s2, n3, i2);
    });
  }
  addStringVectorToStream(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const s2 = this.i.Pt(t2.length);
      if (!s2) throw Error("Unable to allocate new string vector on heap.");
      for (const i3 of t2) ia(this, i3, (t3) => {
        this.i.Bt(s2, t3);
      });
      this.i.Gt(s2, n3, i2);
    });
  }
  addBoolToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      this.i.Ft(t2, n3);
    });
  }
  addDoubleToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      this.i.Dt(t2, n3);
    });
  }
  addFloatToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      this.i.jt(t2, n3);
    });
  }
  addIntToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      this.i.Ht(t2, n3);
    });
  }
  addUintToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      this.i.Vt(t2, n3);
    });
  }
  addStringToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      ia(this, t2, (t3) => {
        this.i.zt(t3, n3);
      });
    });
  }
  addProtoToInputSidePacket(t2, n2, i2) {
    ia(this, i2, (i3) => {
      ia(this, n2, (n3) => {
        const s2 = this.i.q(t2.length);
        this.i.HEAPU8.set(t2, s2), this.i.Wt(s2, t2.length, n3, i3), this.i._(s2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.bt(t2.length);
      if (!i2) throw Error("Unable to allocate new bool vector on heap.");
      for (const s2 of t2) this.i.kt(i2, s2);
      this.i.Kt(i2, n3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.Et(t2.length);
      if (!i2) throw Error("Unable to allocate new double vector on heap.");
      for (const s2 of t2) this.i.St(i2, s2);
      this.i.$t(i2, n3);
    });
  }
  addFloatVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.Ot(t2.length);
      if (!i2) throw Error("Unable to allocate new float vector on heap.");
      for (const s2 of t2) this.i.Tt(i2, s2);
      this.i.qt(i2, n3);
    });
  }
  addIntVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.Lt(t2.length);
      if (!i2) throw Error("Unable to allocate new int vector on heap.");
      for (const s2 of t2) this.i.Mt(i2, s2);
      this.i.Yt(i2, n3);
    });
  }
  addUintVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.Ut(t2.length);
      if (!i2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const s2 of t2) this.i.Ct(i2, s2);
      this.i.Xt(i2, n3);
    });
  }
  addStringVectorToInputSidePacket(t2, n2) {
    ia(this, n2, (n3) => {
      const i2 = this.i.Pt(t2.length);
      if (!i2) throw Error("Unable to allocate new string vector on heap.");
      for (const s2 of t2) ia(this, s2, (t3) => {
        this.i.Bt(i2, t3);
      });
      this.i.Jt(i2, n3);
    });
  }
  attachBoolListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.Qt(t3);
    });
  }
  attachBoolVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.Zt(t3);
    });
  }
  attachIntListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.tn(t3);
    });
  }
  attachIntVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.nn(t3);
    });
  }
  attachUintListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.sn(t3);
    });
  }
  attachUintVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.en(t3);
    });
  }
  attachDoubleListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.rn(t3);
    });
  }
  attachDoubleVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.an(t3);
    });
  }
  attachFloatListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.cn(t3);
    });
  }
  attachFloatVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.hn(t3);
    });
  }
  attachStringListener(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.un(t3);
    });
  }
  attachStringVectorListener(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.fn(t3);
    });
  }
  attachProtoListener(t2, n2, i2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.i.ln(t3, i2 || false);
    });
  }
  attachProtoVectorListener(t2, n2, i2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.i.dn(t3, i2 || false);
    });
  }
  attachAudioListener(t2, n2, i2) {
    this.i.mn || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), ra(this, t2, (t3, i3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), n2(t3, i3);
    }), ia(this, t2, (t3) => {
      this.i.mn(t3, i2 || false);
    });
  }
  finishProcessing() {
    this.i.pn();
  }
  closeGraph() {
    this.i.vn(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Ba {
  get ga() {
    return this.i;
  }
  pa(t2, n2, i2) {
    ia(this, n2, (n3) => {
      const [s2, e2] = sa(this, t2, n3);
      this.ga.wn(n3, s2, e2, i2);
    });
  }
  Z(t2, n2) {
    ra(this, t2, n2), ia(this, t2, (t3) => {
      this.ga._n(t3);
    });
  }
  aa(t2, n2) {
    oa(this, t2, n2), ia(this, t2, (t3) => {
      this.ga.gn(t3);
    });
  }
}));
var Ba;
var Ga = class extends Pa {
};
function Fa(t2, n2, i2) {
  return __async(this, null, function* () {
    return ((t3, n3, i3, s2) => __async(null, null, function* () {
      return ((t4, n4, i4, s3) => __async(null, null, function* () {
        return t4 = yield ((t5, n5, i5, s4, e2) => __async(null, null, function* () {
          if (n5 && (yield ta(n5)), !self.ModuleFactory) throw Error("ModuleFactory not set.");
          if (i5 && (yield ta(i5), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
          return self.Module && e2 && ((n5 = self.Module).locateFile = e2.locateFile, e2.mainScriptUrlOrBlob && (n5.mainScriptUrlOrBlob = e2.mainScriptUrlOrBlob)), e2 = yield self.ModuleFactory(self.Module || e2), self.ModuleFactory = self.Module = void 0, new t5(e2, s4);
        }))(t4, i4.wasmLoaderPath, i4.assetLoaderPath, n4, { locateFile: (t5) => t5.endsWith(".wasm") ? "" + i4.wasmBinaryPath : i4.assetBinaryPath && t5.endsWith(".data") ? "" + i4.assetBinaryPath : t5 }), yield t4.o(s3), t4;
      }))(t3, n3, i3, s2);
    }))(t2, i2.canvas ?? (Zo() ? void 0 : document.createElement("canvas")), n2, i2);
  });
}
function Da(t2, n2, i2, s2) {
  if (t2.U) {
    const r2 = new Ir();
    if (i2?.regionOfInterest) {
      if (!t2.oa) throw Error("This task doesn't support region-of-interest.");
      var e2 = i2.regionOfInterest;
      if (e2.left >= e2.right || e2.top >= e2.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > e2.left || 0 > e2.top || e2.right > 1 || e2.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      Li(r2, 1, (e2.left + e2.right) / 2), Li(r2, 2, (e2.top + e2.bottom) / 2), Li(r2, 4, e2.right - e2.left), Li(r2, 3, e2.bottom - e2.top);
    } else Li(r2, 1, 0.5), Li(r2, 2, 0.5), Li(r2, 4, 1), Li(r2, 3, 1);
    if (i2?.rotationDegrees) {
      if (i2?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (Li(r2, 5, -Math.PI * i2.rotationDegrees / 180), i2?.rotationDegrees % 180 != 0) {
        const [t3, s3] = na(n2);
        i2 = Ti(r2, 3) * s3 / t3, e2 = Ti(r2, 4) * t3 / s3, Li(r2, 4, i2), Li(r2, 3, e2);
      }
    }
    t2.g.addProtoToStream(r2.g(), "mediapipe.NormalizedRect", t2.U, s2);
  }
  t2.g.pa(n2, t2.X, s2 ?? performance.now()), t2.finishProcessing();
}
function ja(t2, n2, i2) {
  if (t2.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  Da(t2, n2, i2, t2.C + 1);
}
function Ha(t2, n2, i2, s2) {
  if (!t2.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  Da(t2, n2, i2, s2);
}
function Va(t2, n2, i2, s2) {
  var e2 = n2.data;
  const r2 = n2.width, o2 = r2 * (n2 = n2.height);
  if ((e2 instanceof Uint8Array || e2 instanceof Float32Array) && e2.length !== o2) throw Error("Unsupported channel count: " + e2.length / o2);
  return t2 = new Ua([e2], i2, false, t2.g.i.canvas, t2.P, r2, n2), s2 ? t2.clone() : t2;
}
var za = class extends da {
  constructor(t2, n2, i2, s2) {
    super(t2), this.g = t2, this.X = n2, this.U = i2, this.oa = s2, this.P = new Aa();
  }
  l(t2, n2 = true) {
    if ("runningMode" in t2 && ti(this.baseOptions, 2, Qt(!!t2.runningMode && "IMAGE" !== t2.runningMode)), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(t2, n2);
  }
  close() {
    this.P.close(), super.close();
  }
};
za.prototype.close = za.prototype.close;
var Wa = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, ki(t2 = this.h = new $r(), 0, 1, n2 = new zr()), Li(this.h, 2, 0.5), Li(this.h, 3, 0.3);
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return "minDetectionConfidence" in t2 && Li(this.h, 2, t2.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t2 && Li(this.h, 3, t2.minSuppressionThreshold ?? 0.3), this.l(t2);
  }
  F(t2, n2) {
    return this.j = { detections: [] }, ja(this, t2, n2), this.j;
  }
  G(t2, n2, i2) {
    return this.j = { detections: [] }, Ha(this, t2, i2, n2), this.j;
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect_in"), fr(t2, "detections");
    const n2 = new tr();
    Is(n2, Yr, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect_in"), er(i2, "DETECTIONS:detections"), i2.o(n2), hr(t2, i2), this.g.attachProtoVectorListener("detections", (t3, n3) => {
      for (const i3 of t3) t3 = kr(i3), this.j.detections.push(Vo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Wa.prototype.detectForVideo = Wa.prototype.G, Wa.prototype.detect = Wa.prototype.F, Wa.prototype.setOptions = Wa.prototype.o, Wa.createFromModelPath = (t2, n2) => __async(null, null, function* () {
  return Fa(Wa, t2, { baseOptions: { modelAssetPath: n2 } });
}), Wa.createFromModelBuffer = (t2, n2) => Fa(Wa, t2, { baseOptions: { modelAssetBuffer: n2 } }), Wa.createFromOptions = (t2, n2) => Fa(Wa, t2, n2);
var Ka = Ra([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
var $a = Ra([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
var qa = Ra([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
var Ya = Ra([474, 475], [475, 476], [476, 477], [477, 474]);
var Xa = Ra([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
var Ja = Ra([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
var Qa = Ra([469, 470], [470, 471], [471, 472], [472, 469]);
var Za = Ra([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
var tc = [...Ka, ...$a, ...qa, ...Xa, ...Ja, ...Za];
var nc = Ra([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function ic(t2) {
  t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var sc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, ki(t2 = this.h = new Qr(), 0, 1, n2 = new zr()), this.A = new Jr(), ki(this.h, 0, 3, this.A), this.u = new $r(), ki(this.h, 0, 2, this.u), Ii(this.u, 4, 1), Li(this.u, 2, 0.5), Li(this.A, 2, 0.5), Li(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return "numFaces" in t2 && Ii(this.u, 4, t2.numFaces ?? 1), "minFaceDetectionConfidence" in t2 && Li(this.u, 2, t2.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Li(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in t2 && Li(this.A, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
  }
  F(t2, n2) {
    return ic(this), ja(this, t2, n2), this.j;
  }
  G(t2, n2, i2) {
    return ic(this), Ha(this, t2, i2, n2), this.j;
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect"), fr(t2, "face_landmarks");
    const n2 = new tr();
    Is(n2, to, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "NORM_LANDMARKS:face_landmarks"), i2.o(n2), hr(t2, i2), this.g.attachProtoVectorListener("face_landmarks", (t3, n3) => {
      for (const i3 of t3) t3 = xr(i3), this.j.faceLandmarks.push(zo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      ha(this, t3);
    }), this.outputFaceBlendshapes && (fr(t2, "blendshapes"), er(i2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t3, n3) => {
      if (this.outputFaceBlendshapes) for (const i3 of t3) t3 = _r(i3), this.j.faceBlendshapes.push(Ho(t3.g() ?? []));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("blendshapes", (t3) => {
      ha(this, t3);
    })), this.outputFacialTransformationMatrixes && (fr(t2, "face_geometry"), er(i2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t3, n3) => {
      if (this.outputFacialTransformationMatrixes) for (const i3 of t3) (t3 = _i(t3 = Xr(i3), Or, 2)) && this.j.facialTransformationMatrixes.push({ rows: xi(t3, 1) ?? 0 ?? 0, columns: xi(t3, 2) ?? 0 ?? 0, data: si(t3, 3, Jt, ii()).slice() ?? [] });
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("face_geometry", (t3) => {
      ha(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
sc.prototype.detectForVideo = sc.prototype.G, sc.prototype.detect = sc.prototype.F, sc.prototype.setOptions = sc.prototype.o, sc.createFromModelPath = (t2, n2) => Fa(sc, t2, { baseOptions: { modelAssetPath: n2 } }), sc.createFromModelBuffer = (t2, n2) => Fa(sc, t2, { baseOptions: { modelAssetBuffer: n2 } }), sc.createFromOptions = (t2, n2) => Fa(sc, t2, n2), sc.FACE_LANDMARKS_LIPS = Ka, sc.FACE_LANDMARKS_LEFT_EYE = $a, sc.FACE_LANDMARKS_LEFT_EYEBROW = qa, sc.FACE_LANDMARKS_LEFT_IRIS = Ya, sc.FACE_LANDMARKS_RIGHT_EYE = Xa, sc.FACE_LANDMARKS_RIGHT_EYEBROW = Ja, sc.FACE_LANDMARKS_RIGHT_IRIS = Qa, sc.FACE_LANDMARKS_FACE_OVAL = Za, sc.FACE_LANDMARKS_CONTOURS = tc, sc.FACE_LANDMARKS_TESSELATION = nc;
var ec = Ra([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function rc(t2) {
  t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
}
function oc(t2) {
  return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
}
function ac(t2, n2 = true) {
  const i2 = [];
  for (const e2 of t2) {
    var s2 = _r(e2);
    t2 = [];
    for (const i3 of s2.g()) s2 = n2 && null != xi(i3, 1) ? xi(i3, 1) ?? 0 : -1, t2.push({ score: Ti(i3, 2) ?? 0, index: s2, categoryName: dn(Qn(i3, 3)) ?? "" ?? "", displayName: dn(Qn(i3, 4)) ?? "" ?? "" });
    i2.push(t2);
  }
  return i2;
}
var cc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ki(t2 = this.j = new ao(), 0, 1, n2 = new zr()), this.u = new oo(), ki(this.j, 0, 2, this.u), this.D = new ro(), ki(this.u, 0, 3, this.D), this.A = new eo(), ki(this.u, 0, 2, this.A), this.h = new so(), ki(this.j, 0, 3, this.h), Li(this.A, 2, 0.5), Li(this.u, 4, 0.5), Li(this.D, 2, 0.5);
  }
  get baseOptions() {
    return _i(this.j, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.j, 0, 1, t2);
  }
  o(t2) {
    if (Ii(this.A, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Li(this.A, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Li(this.u, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Li(this.D, 2, t2.minHandPresenceConfidence ?? 0.5), t2.cannedGesturesClassifierOptions) {
      var n2 = new no(), i2 = n2, s2 = Do(t2.cannedGesturesClassifierOptions, _i(this.h, no, 3)?.l());
      ki(i2, 0, 2, s2), ki(this.h, 0, 3, n2);
    } else void 0 === t2.cannedGesturesClassifierOptions && _i(this.h, no, 3)?.g();
    return t2.customGesturesClassifierOptions ? (ki(i2 = n2 = new no(), 0, 2, s2 = Do(t2.customGesturesClassifierOptions, _i(this.h, no, 4)?.l())), ki(this.h, 0, 4, n2)) : void 0 === t2.customGesturesClassifierOptions && _i(this.h, no, 4)?.g(), this.l(t2);
  }
  Ha(t2, n2) {
    return rc(this), ja(this, t2, n2), oc(this);
  }
  Ia(t2, n2, i2) {
    return rc(this), Ha(this, t2, i2, n2), oc(this);
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect"), fr(t2, "hand_gestures"), fr(t2, "hand_landmarks"), fr(t2, "world_hand_landmarks"), fr(t2, "handedness");
    const n2 = new tr();
    Is(n2, lo, this.j);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "HAND_GESTURES:hand_gestures"), er(i2, "LANDMARKS:hand_landmarks"), er(i2, "WORLD_LANDMARKS:world_hand_landmarks"), er(i2, "HANDEDNESS:handedness"), i2.o(n2), hr(t2, i2), this.g.attachProtoVectorListener("hand_landmarks", (t3, n3) => {
      for (const i3 of t3) {
        t3 = xr(i3);
        const n4 = [];
        for (const i4 of yi(t3, Sr, 1)) n4.push({ x: Ti(i4, 1) ?? 0, y: Ti(i4, 2) ?? 0, z: Ti(i4, 3) ?? 0, visibility: Ti(i4, 4) ?? 0 });
        this.landmarks.push(n4);
      }
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, n3) => {
      for (const i3 of t3) {
        t3 = Er(i3);
        const n4 = [];
        for (const i4 of yi(t3, Ar, 1)) n4.push({ x: Ti(i4, 1) ?? 0, y: Ti(i4, 2) ?? 0, z: Ti(i4, 3) ?? 0, visibility: Ti(i4, 4) ?? 0 });
        this.worldLandmarks.push(n4);
      }
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoVectorListener("hand_gestures", (t3, n3) => {
      this.gestures.push(...ac(t3, false)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("hand_gestures", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, n3) => {
      this.handedness.push(...ac(t3)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
function hc(t2) {
  return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
}
cc.prototype.recognizeForVideo = cc.prototype.Ia, cc.prototype.recognize = cc.prototype.Ha, cc.prototype.setOptions = cc.prototype.o, cc.createFromModelPath = (t2, n2) => Fa(cc, t2, { baseOptions: { modelAssetPath: n2 } }), cc.createFromModelBuffer = (t2, n2) => Fa(cc, t2, { baseOptions: { modelAssetBuffer: n2 } }), cc.createFromOptions = (t2, n2) => Fa(cc, t2, n2), cc.HAND_CONNECTIONS = ec;
var uc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ki(t2 = this.h = new oo(), 0, 1, n2 = new zr()), this.u = new ro(), ki(this.h, 0, 3, this.u), this.j = new eo(), ki(this.h, 0, 2, this.j), Ii(this.j, 3, 1), Li(this.j, 2, 0.5), Li(this.u, 2, 0.5), Li(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return "numHands" in t2 && Ii(this.j, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Li(this.j, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Li(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Li(this.u, 2, t2.minHandPresenceConfidence ?? 0.5), this.l(t2);
  }
  F(t2, n2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ja(this, t2, n2), hc(this);
  }
  G(t2, n2, i2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ha(this, t2, i2, n2), hc(this);
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect"), fr(t2, "hand_landmarks"), fr(t2, "world_hand_landmarks"), fr(t2, "handedness");
    const n2 = new tr();
    Is(n2, mo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "LANDMARKS:hand_landmarks"), er(i2, "WORLD_LANDMARKS:world_hand_landmarks"), er(i2, "HANDEDNESS:handedness"), i2.o(n2), hr(t2, i2), this.g.attachProtoVectorListener("hand_landmarks", (t3, n3) => {
      for (const i3 of t3) t3 = xr(i3), this.landmarks.push(zo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, n3) => {
      for (const i3 of t3) t3 = Er(i3), this.worldLandmarks.push(Wo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, n3) => {
      var i3 = this.handedness, s2 = i3.push;
      const e2 = [];
      for (const r2 of t3) {
        t3 = _r(r2);
        const n4 = [];
        for (const i4 of t3.g()) n4.push({ score: Ti(i4, 2) ?? 0, index: xi(i4, 1) ?? 0 ?? -1, categoryName: dn(Qn(i4, 3)) ?? "" ?? "", displayName: dn(Qn(i4, 4)) ?? "" ?? "" });
        e2.push(n4);
      }
      s2.call(i3, ...e2), ha(this, n3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
uc.prototype.detectForVideo = uc.prototype.G, uc.prototype.detect = uc.prototype.F, uc.prototype.setOptions = uc.prototype.o, uc.createFromModelPath = (t2, n2) => Fa(uc, t2, { baseOptions: { modelAssetPath: n2 } }), uc.createFromModelBuffer = (t2, n2) => Fa(uc, t2, { baseOptions: { modelAssetBuffer: n2 } }), uc.createFromOptions = (t2, n2) => Fa(uc, t2, n2), uc.HAND_CONNECTIONS = ec;
var fc = Ra([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
function lc(t2) {
  t2.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function dc(t2) {
  try {
    if (!t2.D) return t2.h;
    t2.D(t2.h);
  } finally {
    la(t2);
  }
}
function mc(t2, n2) {
  t2 = xr(t2), n2.push(zo(t2));
}
var pc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "input_frames_image", null, false), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = false, ki(t2 = this.j = new _o(), 0, 1, n2 = new zr()), this.I = new ro(), ki(this.j, 0, 2, this.I), this.W = new po(), ki(this.j, 0, 3, this.W), this.u = new $r(), ki(this.j, 0, 4, this.u), this.O = new Jr(), ki(this.j, 0, 5, this.O), this.A = new vo(), ki(this.j, 0, 6, this.A), this.M = new wo(), ki(this.j, 0, 7, this.M), Li(this.u, 2, 0.5), Li(this.u, 3, 0.3), Li(this.O, 2, 0.5), Li(this.A, 2, 0.5), Li(this.A, 3, 0.3), Li(this.M, 2, 0.5), Li(this.I, 2, 0.5);
  }
  get baseOptions() {
    return _i(this.j, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.j, 0, 1, t2);
  }
  o(t2) {
    return "minFaceDetectionConfidence" in t2 && Li(this.u, 2, t2.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in t2 && Li(this.u, 3, t2.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in t2 && Li(this.O, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "minPoseDetectionConfidence" in t2 && Li(this.A, 2, t2.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in t2 && Li(this.A, 3, t2.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in t2 && Li(this.M, 2, t2.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in t2 && (this.outputPoseSegmentationMasks = !!t2.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t2 && Li(this.I, 2, t2.minHandLandmarksConfidence ?? 0.5), this.l(t2);
  }
  F(t2, n2, i2) {
    const s2 = "function" != typeof n2 ? n2 : {};
    return this.D = "function" == typeof n2 ? n2 : i2, lc(this), ja(this, t2, s2), dc(this);
  }
  G(t2, n2, i2, s2) {
    const e2 = "function" != typeof i2 ? i2 : {};
    return this.D = "function" == typeof i2 ? i2 : s2, lc(this), Ha(this, t2, e2, n2), dc(this);
  }
  m() {
    var t2 = new lr();
    ur(t2, "input_frames_image"), fr(t2, "pose_landmarks"), fr(t2, "pose_world_landmarks"), fr(t2, "face_landmarks"), fr(t2, "left_hand_landmarks"), fr(t2, "left_hand_world_landmarks"), fr(t2, "right_hand_landmarks"), fr(t2, "right_hand_world_landmarks");
    const n2 = new tr(), i2 = new De();
    Mi(i2, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), ((t3, n3) => {
      if (null != n3) if (Array.isArray(n3)) ti(t3, 2, Nn(n3, 0, Cn));
      else {
        if (!("string" == typeof n3 || n3 instanceof N || T(n3))) throw Error("invalid value in Any.value field: " + n3 + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        ui(t3, 2, ut(n3, false), L());
      }
    })(i2, this.j.g());
    const s2 = new rr();
    Mi(s2, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), Si(s2, 8, De, i2), sr(s2, "IMAGE:input_frames_image"), er(s2, "POSE_LANDMARKS:pose_landmarks"), er(s2, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), er(s2, "FACE_LANDMARKS:face_landmarks"), er(s2, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), er(s2, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), er(s2, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), er(s2, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), s2.o(n2), hr(t2, s2), ua(this, t2), this.g.attachProtoListener("pose_landmarks", (t3, n3) => {
      mc(t3, this.h.poseLandmarks), ha(this, n3);
    }), this.g.attachEmptyPacketListener("pose_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoListener("pose_world_landmarks", (t3, n3) => {
      var i3 = this.h.poseWorldLandmarks;
      t3 = Er(t3), i3.push(Wo(t3)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("pose_world_landmarks", (t3) => {
      ha(this, t3);
    }), this.outputPoseSegmentationMasks && (er(s2, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), fa(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", (t3, n3) => {
      this.h.poseSegmentationMasks = [Va(this, t3, true, !this.D)], ha(this, n3);
    }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (t3) => {
      this.h.poseSegmentationMasks = [], ha(this, t3);
    })), this.g.attachProtoListener("face_landmarks", (t3, n3) => {
      mc(t3, this.h.faceLandmarks), ha(this, n3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      ha(this, t3);
    }), this.outputFaceBlendshapes && (fr(t2, "extra_blendshapes"), er(s2, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (t3, n3) => {
      var i3 = this.h.faceBlendshapes;
      this.outputFaceBlendshapes && (t3 = _r(t3), i3.push(Ho(t3.g() ?? []))), ha(this, n3);
    }), this.g.attachEmptyPacketListener("extra_blendshapes", (t3) => {
      ha(this, t3);
    })), this.g.attachProtoListener("left_hand_landmarks", (t3, n3) => {
      mc(t3, this.h.leftHandLandmarks), ha(this, n3);
    }), this.g.attachEmptyPacketListener("left_hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoListener("left_hand_world_landmarks", (t3, n3) => {
      var i3 = this.h.leftHandWorldLandmarks;
      t3 = Er(t3), i3.push(Wo(t3)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoListener("right_hand_landmarks", (t3, n3) => {
      mc(t3, this.h.rightHandLandmarks), ha(this, n3);
    }), this.g.attachEmptyPacketListener("right_hand_landmarks", (t3) => {
      ha(this, t3);
    }), this.g.attachProtoListener("right_hand_world_landmarks", (t3, n3) => {
      var i3 = this.h.rightHandWorldLandmarks;
      t3 = Er(t3), i3.push(Wo(t3)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
pc.prototype.detectForVideo = pc.prototype.G, pc.prototype.detect = pc.prototype.F, pc.prototype.setOptions = pc.prototype.o, pc.createFromModelPath = (t2, n2) => Fa(pc, t2, { baseOptions: { modelAssetPath: n2 } }), pc.createFromModelBuffer = (t2, n2) => Fa(pc, t2, { baseOptions: { modelAssetBuffer: n2 } }), pc.createFromOptions = (t2, n2) => Fa(pc, t2, n2), pc.HAND_CONNECTIONS = ec, pc.POSE_CONNECTIONS = fc, pc.FACE_LANDMARKS_LIPS = Ka, pc.FACE_LANDMARKS_LEFT_EYE = $a, pc.FACE_LANDMARKS_LEFT_EYEBROW = qa, pc.FACE_LANDMARKS_LEFT_IRIS = Ya, pc.FACE_LANDMARKS_RIGHT_EYE = Xa, pc.FACE_LANDMARKS_RIGHT_EYEBROW = Ja, pc.FACE_LANDMARKS_RIGHT_IRIS = Qa, pc.FACE_LANDMARKS_FACE_OVAL = Za, pc.FACE_LANDMARKS_CONTOURS = tc, pc.FACE_LANDMARKS_TESSELATION = nc;
var vc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "input_image", "norm_rect", true), this.j = { classifications: [] }, ki(t2 = this.h = new bo(), 0, 1, n2 = new zr());
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return ki(this.h, 0, 2, Do(t2, _i(this.h, Br, 2))), this.l(t2);
  }
  sa(t2, n2) {
    return this.j = { classifications: [] }, ja(this, t2, n2), this.j;
  }
  ta(t2, n2, i2) {
    return this.j = { classifications: [] }, Ha(this, t2, i2, n2), this.j;
  }
  m() {
    var t2 = new lr();
    ur(t2, "input_image"), ur(t2, "norm_rect"), fr(t2, "classifications");
    const n2 = new tr();
    Is(n2, ko, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), sr(i2, "IMAGE:input_image"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "CLASSIFICATIONS:classifications"), i2.o(n2), hr(t2, i2), this.g.attachProtoListener("classifications", (t3, n3) => {
      this.j = ((t4) => {
        const n4 = { classifications: yi(t4, Lr, 1).map((t5) => Ho(_i(t5, vr, 4)?.g() ?? [], xi(t5, 2) ?? 0, dn(Qn(t5, 3)) ?? "")) };
        return null != (i3 = t4, ((t5) => null == t5 ? t5 : "bigint" == typeof t5 ? (kt(t5) ? t5 = +t5 : (t5 = zt(64, t5), t5 = kt(t5) ? +t5 : t5 + ""), t5) : nn(t5) ? "number" == typeof t5 ? on(t5) : an(t5) : void 0)(p ? Qn(i3, 2, void 0, void 0, un) : Qn(i3, 2))) && (n4.timestampMs = jo(Oi(t4))), n4;
        var i3;
      })(Mr(t3)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("classifications", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
vc.prototype.classifyForVideo = vc.prototype.ta, vc.prototype.classify = vc.prototype.sa, vc.prototype.setOptions = vc.prototype.o, vc.createFromModelPath = (t2, n2) => Fa(vc, t2, { baseOptions: { modelAssetPath: n2 } }), vc.createFromModelBuffer = (t2, n2) => Fa(vc, t2, { baseOptions: { modelAssetBuffer: n2 } }), vc.createFromOptions = (t2, n2) => Fa(vc, t2, n2);
var wc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", true), this.h = new Ao(), this.embeddings = { embeddings: [] }, ki(t2 = this.h, 0, 1, n2 = new zr());
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    var n2 = this.h, i2 = _i(this.h, Fr, 2);
    return i2 = i2 ? i2.clone() : new Fr(), void 0 !== t2.l2Normalize ? ti(i2, 1, Qt(t2.l2Normalize)) : "l2Normalize" in t2 && ti(i2, 1), void 0 !== t2.quantize ? ti(i2, 2, Qt(t2.quantize)) : "quantize" in t2 && ti(i2, 2), ki(n2, 0, 2, i2), this.l(t2);
  }
  za(t2, n2) {
    return ja(this, t2, n2), this.embeddings;
  }
  Aa(t2, n2, i2) {
    return Ha(this, t2, i2, n2), this.embeddings;
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect"), fr(t2, "embeddings_out");
    const n2 = new tr();
    Is(n2, Eo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "EMBEDDINGS:embeddings_out"), i2.o(n2), hr(t2, i2), this.g.attachProtoListener("embeddings_out", (t3, n3) => {
      var i3;
      t3 = Pr(t3), this.embeddings = { embeddings: yi(i3 = t3, Cr, 1).map((t4) => {
        const n4 = { headIndex: xi(t4, 3) ?? 0 ?? -1, headName: dn(Qn(t4, 4)) ?? "" ?? "" };
        var i4 = t4.v;
        return void 0 !== wi(i4, 0 | i4[tt], Nr, li(t4, 1)) ? (t4 = si(t4 = _i(t4, Nr, li(t4, 1), void 0), 1, Jt, ii()), n4.floatEmbedding = t4.slice()) : (i4 = new Uint8Array(0), n4.quantizedEmbedding = _i(t4, Ur, li(t4, 2), void 0)?.na()?.h() ?? i4), n4;
      }), timestampMs: jo(Oi(i3)) }, ha(this, n3);
    }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
wc.cosineSimilarity = (t2, n2) => {
  if (t2.floatEmbedding && n2.floatEmbedding) t2 = $o(t2.floatEmbedding, n2.floatEmbedding);
  else {
    if (!t2.quantizedEmbedding || !n2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t2 = $o(Ko(t2.quantizedEmbedding), Ko(n2.quantizedEmbedding));
  }
  return t2;
}, wc.prototype.embedForVideo = wc.prototype.Aa, wc.prototype.embed = wc.prototype.za, wc.prototype.setOptions = wc.prototype.o, wc.createFromModelPath = (t2, n2) => Fa(wc, t2, { baseOptions: { modelAssetPath: n2 } }), wc.createFromModelBuffer = (t2, n2) => Fa(wc, t2, { baseOptions: { modelAssetBuffer: n2 } }), wc.createFromOptions = (t2, n2) => Fa(wc, t2, n2);
var _c = class {
  constructor(t2, n2, i2) {
    this.confidenceMasks = t2, this.categoryMask = n2, this.qualityScores = i2;
  }
  close() {
    this.confidenceMasks?.forEach((t2) => {
      t2.close();
    }), this.categoryMask?.close();
  }
};
function gc(t2) {
  t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
}
function yc(t2) {
  try {
    const n2 = new _c(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
    if (!t2.j) return n2;
    t2.j(n2);
  } finally {
    la(t2);
  }
}
_c.prototype.close = _c.prototype.close;
var bc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", false), this.u = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Io(), this.A = new So(), ki(this.h, 0, 3, this.A), ki(t2 = this.h, 0, 1, n2 = new zr());
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? ti(this.h, 2, ln(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && ti(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
  }
  L() {
    ((t2) => {
      const n2 = (i2 = t2.ca(), yi(i2, rr, 1)).filter((t3) => (dn(Qn(t3, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
      var i2;
      if (t2.u = [], n2.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      1 === n2.length && (_i(n2[0], tr, 7)?.j()?.g() ?? /* @__PURE__ */ new Map()).forEach((n3, i3) => {
        t2.u[+i3] = dn(Qn(n3, 1)) ?? "";
      });
    })(this);
  }
  segment(t2, n2, i2) {
    const s2 = "function" != typeof n2 ? n2 : {};
    return this.j = "function" == typeof n2 ? n2 : i2, gc(this), ja(this, t2, s2), yc(this);
  }
  La(t2, n2, i2, s2) {
    const e2 = "function" != typeof i2 ? i2 : {};
    return this.j = "function" == typeof i2 ? i2 : s2, gc(this), Ha(this, t2, e2, n2), yc(this);
  }
  Da() {
    return this.u;
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect");
    const n2 = new tr();
    Is(n2, Lo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), i2.o(n2), hr(t2, i2), ua(this, t2), this.outputConfidenceMasks && (fr(t2, "confidence_masks"), er(i2, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", (t3, n3) => {
      this.confidenceMasks = t3.map((t4) => Va(this, t4, true, !this.j)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], ha(this, t3);
    })), this.outputCategoryMask && (fr(t2, "category_mask"), er(i2, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", (t3, n3) => {
      this.categoryMask = Va(this, t3, false, !this.j), ha(this, n3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, ha(this, t3);
    })), fr(t2, "quality_scores"), er(i2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, n3) => {
      this.qualityScores = t3, ha(this, n3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
bc.prototype.getLabels = bc.prototype.Da, bc.prototype.segmentForVideo = bc.prototype.La, bc.prototype.segment = bc.prototype.segment, bc.prototype.setOptions = bc.prototype.o, bc.createFromModelPath = (t2, n2) => Fa(bc, t2, { baseOptions: { modelAssetPath: n2 } }), bc.createFromModelBuffer = (t2, n2) => Fa(bc, t2, { baseOptions: { modelAssetBuffer: n2 } }), bc.createFromOptions = (t2, n2) => Fa(bc, t2, n2);
var kc = class {
  constructor(t2, n2, i2) {
    this.confidenceMasks = t2, this.categoryMask = n2, this.qualityScores = i2;
  }
  close() {
    this.confidenceMasks?.forEach((t2) => {
      t2.close();
    }), this.categoryMask?.close();
  }
};
kc.prototype.close = kc.prototype.close;
var Ac = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Io(), this.u = new So(), ki(this.h, 0, 3, this.u), ki(t2 = this.h, 0, 1, n2 = new zr());
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
  }
  segment(t2, n2, i2, s2) {
    const e2 = "function" != typeof i2 ? i2 : {};
    if (this.j = "function" == typeof i2 ? i2 : s2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, i2 = this.C + 1, s2 = new Co(), n2.keypoint && n2.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (n2.keypoint) {
      var r2 = new Mo();
      ui(r2, 3, Qt(true), false), ui(r2, 1, Xt(n2.keypoint.x), 0), ui(r2, 2, Xt(n2.keypoint.y), 0), Ai(s2, 1, Ro, r2);
    } else {
      if (!n2.scribble) throw Error("Must provide either a keypoint or a scribble.");
      {
        const t3 = new Uo();
        for (r2 of n2.scribble) ui(n2 = new Mo(), 3, Qt(true), false), ui(n2, 1, Xt(r2.x), 0), ui(n2, 2, Xt(r2.y), 0), Si(t3, 1, Mo, n2);
        Ai(s2, 2, Ro, t3);
      }
    }
    this.g.addProtoToStream(s2.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", i2), ja(this, t2, e2);
    t: {
      try {
        const t3 = new kc(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var o2 = t3;
          break t;
        }
        this.j(t3);
      } finally {
        la(this);
      }
      o2 = void 0;
    }
    return o2;
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "roi_in"), ur(t2, "norm_rect_in");
    const n2 = new tr();
    Is(n2, Lo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), sr(i2, "IMAGE:image_in"), sr(i2, "ROI:roi_in"), sr(i2, "NORM_RECT:norm_rect_in"), i2.o(n2), hr(t2, i2), ua(this, t2), this.outputConfidenceMasks && (fr(t2, "confidence_masks"), er(i2, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", (t3, n3) => {
      this.confidenceMasks = t3.map((t4) => Va(this, t4, true, !this.j)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], ha(this, t3);
    })), this.outputCategoryMask && (fr(t2, "category_mask"), er(i2, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", (t3, n3) => {
      this.categoryMask = Va(this, t3, false, !this.j), ha(this, n3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, ha(this, t3);
    })), fr(t2, "quality_scores"), er(i2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, n3) => {
      this.qualityScores = t3, ha(this, n3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Ac.prototype.segment = Ac.prototype.segment, Ac.prototype.setOptions = Ac.prototype.o, Ac.createFromModelPath = (t2, n2) => Fa(Ac, t2, { baseOptions: { modelAssetPath: n2 } }), Ac.createFromModelBuffer = (t2, n2) => Fa(Ac, t2, { baseOptions: { modelAssetBuffer: n2 } }), Ac.createFromOptions = (t2, n2) => Fa(Ac, t2, n2);
var Ec = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, ki(t2 = this.h = new Po(), 0, 1, n2 = new zr());
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? ti(this.h, 2, ln(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && ti(this.h, 2), void 0 !== t2.maxResults ? Ii(this.h, 3, t2.maxResults) : "maxResults" in t2 && ti(this.h, 3), void 0 !== t2.scoreThreshold ? Li(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && ti(this.h, 4), void 0 !== t2.categoryAllowlist ? Ni(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && ti(this.h, 5), void 0 !== t2.categoryDenylist ? Ni(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && ti(this.h, 6), this.l(t2);
  }
  F(t2, n2) {
    return this.j = { detections: [] }, ja(this, t2, n2), this.j;
  }
  G(t2, n2, i2) {
    return this.j = { detections: [] }, Ha(this, t2, i2, n2), this.j;
  }
  m() {
    var t2 = new lr();
    ur(t2, "input_frame_gpu"), ur(t2, "norm_rect"), fr(t2, "detections");
    const n2 = new tr();
    Is(n2, Bo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), sr(i2, "IMAGE:input_frame_gpu"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "DETECTIONS:detections"), i2.o(n2), hr(t2, i2), this.g.attachProtoVectorListener("detections", (t3, n3) => {
      for (const i3 of t3) t3 = kr(i3), this.j.detections.push(Vo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      ha(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Ec.prototype.detectForVideo = Ec.prototype.G, Ec.prototype.detect = Ec.prototype.F, Ec.prototype.setOptions = Ec.prototype.o, Ec.createFromModelPath = (t2, n2) => __async(null, null, function* () {
  return Fa(Ec, t2, { baseOptions: { modelAssetPath: n2 } });
}), Ec.createFromModelBuffer = (t2, n2) => Fa(Ec, t2, { baseOptions: { modelAssetBuffer: n2 } }), Ec.createFromOptions = (t2, n2) => Fa(Ec, t2, n2);
var Sc = class {
  constructor(t2, n2, i2) {
    this.landmarks = t2, this.worldLandmarks = n2, this.segmentationMasks = i2;
  }
  close() {
    this.segmentationMasks?.forEach((t2) => {
      t2.close();
    });
  }
};
function xc(t2) {
  t2.landmarks = [], t2.worldLandmarks = [], t2.segmentationMasks = void 0;
}
function Oc(t2) {
  try {
    const n2 = new Sc(t2.landmarks, t2.worldLandmarks, t2.segmentationMasks);
    if (!t2.u) return n2;
    t2.u(n2);
  } finally {
    la(t2);
  }
}
Sc.prototype.close = Sc.prototype.close;
var Tc = class extends za {
  constructor(t2, n2) {
    super(new Ga(t2, n2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, ki(t2 = this.h = new Go(), 0, 1, n2 = new zr()), this.A = new wo(), ki(this.h, 0, 3, this.A), this.j = new vo(), ki(this.h, 0, 2, this.j), Ii(this.j, 4, 1), Li(this.j, 2, 0.5), Li(this.A, 2, 0.5), Li(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _i(this.h, zr, 1);
  }
  set baseOptions(t2) {
    ki(this.h, 0, 1, t2);
  }
  o(t2) {
    return "numPoses" in t2 && Ii(this.j, 4, t2.numPoses ?? 1), "minPoseDetectionConfidence" in t2 && Li(this.j, 2, t2.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Li(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in t2 && Li(this.A, 2, t2.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = t2.outputSegmentationMasks ?? false), this.l(t2);
  }
  F(t2, n2, i2) {
    const s2 = "function" != typeof n2 ? n2 : {};
    return this.u = "function" == typeof n2 ? n2 : i2, xc(this), ja(this, t2, s2), Oc(this);
  }
  G(t2, n2, i2, s2) {
    const e2 = "function" != typeof i2 ? i2 : {};
    return this.u = "function" == typeof i2 ? i2 : s2, xc(this), Ha(this, t2, e2, n2), Oc(this);
  }
  m() {
    var t2 = new lr();
    ur(t2, "image_in"), ur(t2, "norm_rect"), fr(t2, "normalized_landmarks"), fr(t2, "world_landmarks"), fr(t2, "segmentation_masks");
    const n2 = new tr();
    Is(n2, Fo, this.h);
    const i2 = new rr();
    Mi(i2, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), sr(i2, "IMAGE:image_in"), sr(i2, "NORM_RECT:norm_rect"), er(i2, "NORM_LANDMARKS:normalized_landmarks"), er(i2, "WORLD_LANDMARKS:world_landmarks"), i2.o(n2), hr(t2, i2), ua(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", (t3, n3) => {
      this.landmarks = [];
      for (const i3 of t3) t3 = xr(i3), this.landmarks.push(zo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (t3) => {
      this.landmarks = [], ha(this, t3);
    }), this.g.attachProtoVectorListener("world_landmarks", (t3, n3) => {
      this.worldLandmarks = [];
      for (const i3 of t3) t3 = Er(i3), this.worldLandmarks.push(Wo(t3));
      ha(this, n3);
    }), this.g.attachEmptyPacketListener("world_landmarks", (t3) => {
      this.worldLandmarks = [], ha(this, t3);
    }), this.outputSegmentationMasks && (er(i2, "SEGMENTATION_MASK:segmentation_masks"), fa(this, "segmentation_masks"), this.g.aa("segmentation_masks", (t3, n3) => {
      this.segmentationMasks = t3.map((t4) => Va(this, t4, true, !this.u)), ha(this, n3);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (t3) => {
      this.segmentationMasks = [], ha(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Tc.prototype.detectForVideo = Tc.prototype.G, Tc.prototype.detect = Tc.prototype.F, Tc.prototype.setOptions = Tc.prototype.o, Tc.createFromModelPath = (t2, n2) => Fa(Tc, t2, { baseOptions: { modelAssetPath: n2 } }), Tc.createFromModelBuffer = (t2, n2) => Fa(Tc, t2, { baseOptions: { modelAssetBuffer: n2 } }), Tc.createFromOptions = (t2, n2) => Fa(Tc, t2, n2), Tc.POSE_CONNECTIONS = fc;
export {
  Wa as FaceDetector,
  sc as FaceLandmarker,
  Qo as FilesetResolver,
  cc as GestureRecognizer,
  uc as HandLandmarker,
  pc as HolisticLandmarker,
  vc as ImageClassifier,
  wc as ImageEmbedder,
  bc as ImageSegmenter,
  _c as ImageSegmenterResult,
  Ac as InteractiveSegmenter,
  kc as InteractiveSegmenterResult,
  Ua as MPMask,
  Ec as ObjectDetector,
  Tc as PoseLandmarker,
  da as TaskRunner,
  za as VisionTaskRunner
};
//# sourceMappingURL=vision_bundle-BpqemS7v-XOXG4546.js.map
