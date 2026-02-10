import {
  __commonJS,
  __require
} from "./chunk-GEHV7EKW.js";

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  "node_modules/util/support/isBufferBrowser.js"(exports, module2) {
    module2.exports = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/util/util.js
var require_util = __commonJS({
  "node_modules/util/util.js"(exports) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f2) {
      if (!isString(f2)) {
        var objects = [];
        for (var i2 = 0; i2 < arguments.length; i2++) {
          objects.push(inspect(arguments[i2]));
        }
        return objects.join(" ");
      }
      var i2 = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f2).replace(formatRegExp, function(x3) {
        if (x3 === "%%") return "%";
        if (i2 >= len) return x3;
        switch (x3) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_2) {
              return "[Circular]";
            }
          default:
            return x3;
        }
      });
      for (var x2 = args[i2]; i2 < len; x2 = args[++i2]) {
        if (isNull(x2) || !isObject(x2)) {
          str += " " + x2;
        } else {
          str += " " + inspect(x2);
        }
      }
      return str;
    };
    exports.deprecate = function(fn2, msg) {
      if (isUndefined(global.process)) {
        return function() {
          return exports.deprecate(fn2, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn2;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn2.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || "";
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      // "name": intentionally not styling
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n2 = value.name ? ": " + value.name : "";
        base = " [Function" + n2 + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i2 = 0, l2 = value.length; i2 < l2; ++i2) {
        if (hasOwnProperty(value, String(i2))) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            String(i2),
            true
          ));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key,
            true
          ));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    function isArray(ar2) {
      return Array.isArray(ar2);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re2) {
      return isObject(re2) && objectToString(re2) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d2) {
      return isObject(d2) && objectToString(d2) === "[object Date]";
    }
    exports.isDate = isDate;
    function isError(e2) {
      return isObject(e2) && (objectToString(e2) === "[object Error]" || e2 instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o2) {
      return Object.prototype.toString.call(o2);
    }
    function pad(n2) {
      return n2 < 10 ? "0" + n2.toString(10) : n2.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d2 = /* @__PURE__ */ new Date();
      var time = [
        pad(d2.getHours()),
        pad(d2.getMinutes()),
        pad(d2.getSeconds())
      ].join(":");
      return [d2.getDate(), months[d2.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i2 = keys.length;
      while (i2--) {
        origin[keys[i2]] = add[keys[i2]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@hiyve/rtc-client/dist/index-BtzUc0cx.js
var t = (n2, r2) => (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && ((t2, n3) => {
  t2.__proto__ = n3;
}) || ((t2, n3) => {
  for (var r3 in n3) n3.hasOwnProperty(r3) && (t2[r3] = n3[r3]);
}))(n2, r2);
function n(n2, r2) {
  function e2() {
    this.constructor = n2;
  }
  t(n2, r2), n2.prototype = null === r2 ? Object.create(r2) : (e2.prototype = r2.prototype, new e2());
}
function r(t2, n2, r2, e2) {
  return new (r2 || (r2 = Promise))((n3, i2) => {
    function o2(t3) {
      try {
        s2(e2.next(t3));
      } catch (n4) {
        i2(n4);
      }
    }
    function a2(t3) {
      try {
        s2(e2.throw(t3));
      } catch (n4) {
        i2(n4);
      }
    }
    function s2(t3) {
      t3.done ? n3(t3.value) : new r2((n4) => {
        n4(t3.value);
      }).then(o2, a2);
    }
    s2((e2 = e2.call(t2)).next());
  });
}
function e(t2, n2) {
  var r2, e2, i2, o2, a2 = { label: 0, sent() {
    if (1 & i2[0]) throw i2[1];
    return i2[1];
  }, trys: [], ops: [] };
  return o2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
    return this;
  }), o2;
  function s2(o3) {
    return (s3) => ((o4) => {
      if (r2) throw new TypeError("Generator is already executing.");
      for (; a2; ) try {
        if (r2 = 1, e2 && (i2 = 2 & o4[0] ? e2.return : o4[0] ? e2.throw || ((i2 = e2.return) && i2.call(e2), 0) : e2.next) && !(i2 = i2.call(e2, o4[1])).done) return i2;
        switch (e2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
          case 0:
          case 1:
            i2 = o4;
            break;
          case 4:
            return a2.label++, { value: o4[1], done: false };
          case 5:
            a2.label++, e2 = o4[1], o4 = [0];
            continue;
          case 7:
            o4 = a2.ops.pop(), a2.trys.pop();
            continue;
          default:
            if (!(i2 = (i2 = a2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
              a2 = 0;
              continue;
            }
            if (3 === o4[0] && (!i2 || o4[1] > i2[0] && i2[3] > o4[1])) {
              a2.label = o4[1];
              break;
            }
            if (6 === o4[0] && i2[1] > a2.label) {
              a2.label = i2[1], i2 = o4;
              break;
            }
            if (i2 && i2[2] > a2.label) {
              a2.label = i2[2], a2.ops.push(o4);
              break;
            }
            i2[2] && a2.ops.pop(), a2.trys.pop();
            continue;
        }
        o4 = n2.call(t2, a2);
      } catch (s4) {
        o4 = [6, s4], e2 = 0;
      } finally {
        r2 = i2 = 0;
      }
      if (5 & o4[0]) throw o4[1];
      return { value: o4[0] ? o4[1] : void 0, done: true };
    })([o3, s3]);
  }
}
var i = (function() {
  function t2(t3) {
    this.global = t3, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags();
  }
  return t2.prototype.setPlatform = function(t3, n2) {
    null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + n2 + "."), this.platformName = t3, this.platform = n2;
  }, t2.prototype.registerFlag = function(t3, n2, r2) {
    if (this.flagRegistry[t3] = { evaluationFn: n2, setHook: r2 }, null != this.urlFlags[t3]) {
      var e2 = this.urlFlags[t3];
      console.warn("Setting feature override from URL " + t3 + ": " + e2 + "."), this.set(t3, e2);
    }
  }, t2.prototype.get = function(t3) {
    return t3 in this.flags || (this.flags[t3] = this.evaluateFlag(t3)), this.flags[t3];
  }, t2.prototype.getNumber = function(t3) {
    return this.get(t3);
  }, t2.prototype.getBool = function(t3) {
    return this.get(t3);
  }, t2.prototype.getFlags = function() {
    return this.flags;
  }, Object.defineProperty(t2.prototype, "features", { get() {
    return this.flags;
  }, enumerable: true, configurable: true }), t2.prototype.set = function(t3, n2) {
    if (null == this.flagRegistry[t3]) throw Error("Cannot set flag " + t3 + " as it has not been registered.");
    this.flags[t3] = n2, null != this.flagRegistry[t3].setHook && this.flagRegistry[t3].setHook(n2);
  }, t2.prototype.evaluateFlag = function(t3) {
    if (null == this.flagRegistry[t3]) throw Error("Cannot evaluate flag '" + t3 + "': no evaluation function found.");
    return this.flagRegistry[t3].evaluationFn();
  }, t2.prototype.setFlags = function(t3) {
    this.flags = Object.assign({}, t3);
  }, t2.prototype.reset = function() {
    this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
  }, t2.prototype.populateURLFlags = function() {
    var t3 = this;
    if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
      var n2, r2 = (n2 = {}, this.global.location.search.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(t4) {
        for (var r3 = [], e2 = 1; arguments.length > e2; e2++) r3[e2 - 1] = arguments[e2];
        return ((t5, n3, r4) => {
          t5[decodeURIComponent(n3)] = decodeURIComponent(r4 || "");
        })(n2, r3[0], r3[1]), r3.join("=");
      }), n2);
      "tfjsflags" in r2 && r2.tfjsflags.split(",").forEach((n3) => {
        var r3 = n3.split(":"), e2 = r3[0];
        t3.urlFlags[e2] = ((t4, n4) => {
          if ("true" === (n4 = n4.toLowerCase()) || "false" === n4) return "true" === n4;
          if ("" + +n4 === n4) return +n4;
          throw Error("Could not parse value flag value " + n4 + " for flag " + t4 + ".");
        })(e2, r3[1]);
      });
    }
  }, t2;
})();
function o() {
  return a;
}
var a = null;
var s = /* @__PURE__ */ new Map();
var u = /* @__PURE__ */ new Map();
function c(t2, n2) {
  var r2 = v(t2, n2);
  return s.get(r2);
}
function l(t2) {
  return u.get(t2);
}
function h(t2) {
  for (var n2 = s.entries(), r2 = []; ; ) {
    var e2 = n2.next(), i2 = e2.value;
    if (e2.done) break;
    var o2 = i2[1];
    i2[0].split("_")[0] === t2 && r2.push(o2);
  }
  return r2;
}
function f(t2) {
  var n2 = t2.kernelName, r2 = t2.backendName, e2 = v(n2, r2);
  if (s.has(e2)) throw Error("The kernel '" + n2 + "' for backend '" + r2 + "' is already registered");
  s.set(e2, t2);
}
function d(t2) {
  var n2 = t2.kernelName;
  u.has(n2) && console.warn("Overriding the gradient for '" + n2 + "'"), u.set(n2, t2);
}
function v(t2, n2) {
  return n2 + "_" + t2;
}
function p(t2) {
  for (var n2 = t2.length, r2 = 0, e2 = 0; n2 > 0; ) e2 = Math.random() * n2 | 0, r2 = t2[--n2], t2[n2] = t2[e2], t2[e2] = r2;
}
function m(t2, n2, r2) {
  return Math.max(t2, Math.min(n2, r2));
}
function x(t2) {
  return t2 % 2 == 0 ? t2 : t2 + 1;
}
function b(t2) {
  for (var n2 = 0, r2 = 0; t2.length > r2; r2++) n2 += t2[r2];
  return n2;
}
function g(t2, n2) {
  if (!t2) throw Error("string" == typeof n2 ? n2 : n2());
}
function w(t2, n2, r2) {
  void 0 === r2 && (r2 = ""), g(E(t2, n2), () => r2 + " Shapes " + t2 + " and " + n2 + " must match");
}
function y(t2) {
  g(null != t2, () => "The input to the tensor constructor must be a non-null value.");
}
function C(t2, n2, r2) {
  if (void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = false), null == n2 && (n2 = []), Array.isArray(t2) || B(t2) && !r2) for (var e2 = 0; t2.length > e2; ++e2) C(t2[e2], n2, r2);
  else n2.push(t2);
  return n2;
}
function _(t2) {
  if (0 === t2.length) return 1;
  for (var n2 = t2[0], r2 = 1; t2.length > r2; r2++) n2 *= t2[r2];
  return n2;
}
function E(t2, n2) {
  if (t2 === n2) return true;
  if (null == t2 || null == n2) return false;
  if (t2.length !== n2.length) return false;
  for (var r2 = 0; t2.length > r2; r2++) if (t2[r2] !== n2[r2]) return false;
  return true;
}
function R(t2) {
  return t2 % 1 == 0;
}
function A(t2) {
  if (null != Math.tanh) return Math.tanh(t2);
  if (t2 === 1 / 0) return 1;
  if (t2 === -1 / 0) return -1;
  var n2 = Math.exp(2 * t2);
  return (n2 - 1) / (n2 + 1);
}
function N(t2) {
  var n2 = Math.ceil(Math.sqrt(t2));
  return [n2, Math.ceil(t2 / n2)];
}
function O(t2, n2) {
  return n2 > t2.length ? t2 + " ".repeat(n2 - t2.length) : t2;
}
function M(t2, n2, r2) {
  return void 0 === n2 && (n2 = (t3) => 0), new Promise((e2, i2) => {
    var o2 = 0, a2 = () => {
      if (t2()) e2();
      else {
        o2++;
        var s2 = n2(o2);
        null == r2 || r2 > o2 ? setTimeout(a2, s2) : i2();
      }
    };
    a2();
  });
}
function I(t2, n2) {
  for (var r2 = 1, e2 = -1, i2 = 0; t2.length > i2; ++i2) if (0 > t2[i2]) {
    if (-1 === t2[i2]) {
      if (-1 !== e2) throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + e2 + " and dim " + i2);
      e2 = i2;
    } else if (0 > t2[i2]) throw Error("Shapes can not be < 0. Found " + t2[i2] + " at dim " + i2);
  } else r2 *= t2[i2];
  if (-1 === e2) {
    if (n2 > 0 && n2 !== r2) throw Error("Size(" + n2 + ") must match the product of shape " + t2);
    return t2;
  }
  if (0 === r2) throw Error("Cannot infer the missing size in [" + t2 + "] when there are 0 elements");
  if (n2 % r2 != 0) throw Error("The implicit shape can't be a fractional number. Got " + n2 + " / " + r2);
  var o2 = t2.slice();
  return o2[e2] = n2 / r2, o2;
}
function T(t2, n2) {
  var r2 = n2.length;
  return g((t2 = null == t2 ? n2.map((t3, n3) => n3) : [].concat(t2)).every((t3) => t3 >= -r2 && r2 > t3), () => "All values in axis param must be in range [-" + r2 + ", " + r2 + ") but got axis " + t2), g(t2.every((t3) => R(t3)), () => "All values in axis param must be integers but got axis " + t2), t2.map((t3) => 0 > t3 ? r2 + t3 : t3);
}
function S(t2, n2) {
  for (var r2 = [], e2 = [], i2 = null == n2 || null != n2 && Array.isArray(n2) && 0 === n2.length ? null : T(n2, t2).sort(), o2 = 0, a2 = 0; t2.length > a2; ++a2) {
    if (null != i2) {
      if (i2[o2] === a2 && 1 !== t2[a2]) throw Error("Can't squeeze axis " + a2 + " since its dim '" + t2[a2] + "' is not 1");
      (null == i2[o2] || i2[o2] > a2) && 1 === t2[a2] && (r2.push(t2[a2]), e2.push(a2)), a2 >= i2[o2] && o2++;
    }
    1 !== t2[a2] && (r2.push(t2[a2]), e2.push(a2));
  }
  return { newShape: r2, keptDims: e2 };
}
function D(t2, n2) {
  var r2 = null;
  if (null == t2 || "float32" === t2) r2 = new Float32Array(n2);
  else if ("int32" === t2) r2 = new Int32Array(n2);
  else {
    if ("bool" !== t2) throw Error("Unknown data type " + t2);
    r2 = new Uint8Array(n2);
  }
  return r2;
}
function k(t2, n2) {
  var r2 = null;
  if (null == t2 || "float32" === t2) r2 = new Float32Array(n2);
  else if ("int32" === t2) r2 = new Int32Array(n2);
  else if ("bool" === t2) r2 = new Uint8Array(n2);
  else {
    if ("string" !== t2) throw Error("Unknown data type " + t2);
    r2 = Array(n2);
  }
  return r2;
}
function P(t2, n2) {
  for (var r2 = 0; t2.length > r2; r2++) {
    var e2 = t2[r2];
    if (isNaN(e2) || !isFinite(e2)) throw Error("A tensor of type " + n2 + " being uploaded contains " + e2 + ".");
  }
}
function F(t2) {
  return "bool" === t2 || "complex64" === t2 || "float32" === t2 || "int32" === t2 || "string" === t2;
}
function L(t2, n2) {
  return !("complex64" === n2 || "float32" === n2 && "complex64" !== t2 || "int32" === n2 && "float32" !== t2 && "complex64" !== t2 || "bool" === n2 && "bool" === t2);
}
function B(t2) {
  return t2 instanceof Float32Array || t2 instanceof Int32Array || t2 instanceof Uint8Array;
}
function V(t2) {
  if ("float32" === t2 || "int32" === t2) return 4;
  if ("complex64" === t2) return 8;
  if ("bool" === t2) return 1;
  throw Error("Unknown dtype " + t2);
}
function W(t2) {
  if (null == t2) return 0;
  var n2 = 0;
  return t2.forEach((t3) => n2 += t3.length), n2;
}
function z(t2) {
  return "string" == typeof t2 || t2 instanceof String;
}
function G(t2) {
  return "boolean" == typeof t2;
}
function U(t2) {
  return "number" == typeof t2;
}
function j(t2) {
  return Array.isArray(t2) ? j(t2[0]) : t2 instanceof Float32Array ? "float32" : t2 instanceof Int32Array || t2 instanceof Uint8Array ? "int32" : U(t2) ? "float32" : z(t2) ? "string" : G(t2) ? "bool" : "float32";
}
function q(t2) {
  return !!(t2 && t2.constructor && t2.call && t2.apply);
}
function H(t2, n2) {
  for (var r2 = n2; t2 > r2; ++r2) if (t2 % r2 == 0) return r2;
  return t2;
}
function X(t2) {
  var n2 = t2.length;
  if (2 > n2) return [];
  var r2 = Array(n2 - 1);
  r2[n2 - 2] = t2[n2 - 1];
  for (var e2 = n2 - 3; e2 >= 0; --e2) r2[e2] = r2[e2 + 1] * t2[e2 + 1];
  return r2;
}
function $(t2, n2, r2) {
  if ("string" === n2) throw Error("Cannot convert a string[] to a TypedArray");
  if (Array.isArray(t2) && (t2 = C(t2)), r2 && P(t2, n2), i2 = n2, (e2 = t2) instanceof Float32Array && "float32" === i2 || e2 instanceof Int32Array && "int32" === i2 || e2 instanceof Uint8Array && "bool" === i2) return t2;
  var e2, i2;
  if (null == n2 || "float32" === n2 || "complex64" === n2) return new Float32Array(t2);
  if ("int32" === n2) return new Int32Array(t2);
  if ("bool" === n2) {
    for (var o2 = new Uint8Array(t2.length), a2 = 0; o2.length > a2; ++a2) 0 !== Math.round(t2[a2]) && (o2[a2] = 1);
    return o2;
  }
  throw Error("Unknown data type " + n2);
}
function K(t2, n2) {
  if (0 === t2.length) return n2[0];
  var r2 = t2.reduce((t3, n3) => t3 * n3);
  if (0 === r2) return [];
  if (r2 !== n2.length) throw Error("[" + t2 + "] does not match the input size.");
  return (function t3(n3, r3, e2) {
    var i2 = [];
    if (1 === r3.length) for (var o2 = r3[0], a2 = 0; o2 > a2; a2++) i2[a2] = e2[n3 + a2];
    else {
      o2 = r3[0];
      var s2 = r3.slice(1), u2 = s2.reduce((t4, n4) => t4 * n4);
      for (a2 = 0; o2 > a2; a2++) i2[a2] = t3(n3 + a2 * u2, s2, e2);
    }
    return i2;
  })(0, t2, n2);
}
function Y(t2, n2) {
  for (var r2 = J(t2, n2), e2 = 0; r2.length > e2; e2++) r2[e2] = 1;
  return r2;
}
function J(t2, n2) {
  if (null == n2 || "float32" === n2 || "complex64" === n2) return new Float32Array(t2);
  if ("int32" === n2) return new Int32Array(t2);
  if ("bool" === n2) return new Uint8Array(t2);
  throw Error("Unknown data type " + n2);
}
function Z() {
  return o().platform.now();
}
function Q(t2) {
  t2.forEach((n2) => {
    g(Number.isInteger(n2) && n2 >= 0, () => "Tensor must have a shape comprised of positive integers but got shape [" + t2 + "].");
  });
}
function tt(t2, n2) {
  return void 0 === n2 && (n2 = "utf-8"), n2 = n2 || "utf-8", o().platform.encode(t2, n2);
}
function nt(t2, n2) {
  return void 0 === n2 && (n2 = "utf-8"), n2 = n2 || "utf-8", o().platform.decode(t2, n2);
}
function rt(t2, n2, r2) {
  if (0 === n2) return 0;
  if (1 === n2) return t2[0];
  for (var e2 = t2[t2.length - 1], i2 = 0; t2.length - 1 > i2; ++i2) e2 += r2[i2] * t2[i2];
  return e2;
}
function et(t2, n2, r2) {
  if (0 === n2) return [];
  if (1 === n2) return [t2];
  for (var e2 = Array(n2), i2 = 0; e2.length - 1 > i2; ++i2) e2[i2] = Math.floor(t2 / r2[i2]), t2 -= e2[i2] * r2[i2];
  return e2[e2.length - 1] = t2, e2;
}
var it = Object.freeze({ shuffle: p, clamp: m, nearestLargerEven: x, sum: b, randUniform(t2, n2) {
  var r2 = Math.random();
  return n2 * r2 + (1 - r2) * t2;
}, distSquared(t2, n2) {
  for (var r2 = 0, e2 = 0; t2.length > e2; e2++) {
    var i2 = +t2[e2] - +n2[e2];
    r2 += i2 * i2;
  }
  return r2;
}, assert: g, assertShapesMatch: w, assertNonNull: y, flatten: C, sizeFromShape: _, isScalarShape(t2) {
  return 0 === t2.length;
}, arraysEqual: E, isInt: R, tanh: A, sizeToSquarishShape: N, createShuffledIndices(t2) {
  for (var n2 = new Uint32Array(t2), r2 = 0; t2 > r2; ++r2) n2[r2] = r2;
  return p(n2), n2;
}, rightPad: O, repeatedTry: M, inferFromImplicitShape: I, parseAxisParam: T, squeezeShape: S, getTypedArrayFromDType: D, getArrayFromDType: k, checkConversionForErrors: P, isValidDtype: F, hasEncodingLoss: L, isTypedArray: B, bytesPerElement: V, bytesFromStringArray: W, isString: z, isBoolean: G, isNumber: U, inferDtype: j, isFunction: q, nearestDivisor: H, computeStrides: X, toTypedArray: $, toNestedArray: K, makeOnesTypedArray: Y, makeZerosTypedArray: J, now: Z, assertNonNegativeIntegerDimensions: Q, fetch(t2, n2) {
  return o().platform.fetch(t2, n2);
}, encodeString: tt, decodeString: nt, locToIndex: rt, indexToLoc: et });
var ot = (function() {
  function t2(t3, n2) {
    this.backendTimer = t3, this.logger = n2, null == n2 && (this.logger = new at());
  }
  return t2.prototype.profileKernel = function(t3, n2, r2) {
    var e2, i2 = this, o2 = this.backendTimer.time(() => {
      e2 = r2();
    });
    return e2.forEach((r3) => {
      r3.data().then((e3) => {
        ((t4, n3, r4) => {
          if ("float32" !== n3) return false;
          for (var e4 = 0; t4.length > e4; e4++) {
            var i3 = t4[e4];
            if (isNaN(i3) || !isFinite(i3)) return console.warn("Found " + i3 + " in the result of '" + r4 + "'"), true;
          }
        })(e3, r3.dtype, t3), o2.then((o3) => {
          var a2 = "";
          null != o3.getExtraProfileInfo && (a2 = o3.getExtraProfileInfo()), i2.logger.logKernelProfile(t3, r3, e3, o3.kernelMs, n2, a2);
        });
      });
    }), e2;
  }, t2;
})();
var at = (() => {
  function t2() {
  }
  return t2.prototype.logKernelProfile = (t3, n2, r2, e2, i2, o2) => {
    var a2 = "number" == typeof e2 ? O(e2 + "ms", 9) : e2.error, s2 = O(t3, 25), u2 = n2.rank, c2 = n2.size, l2 = O("" + n2.shape, 14), h2 = "";
    for (var f2 in i2) {
      var d2 = i2[f2].shape || n2.shape, v2 = d2.length;
      h2 += f2 + ": " + v2 + "D " + (v2 > 0 ? d2 : "") + " ";
    }
    console.log("%c" + s2 + "	%c" + a2 + "	%c" + u2 + "D " + l2 + "	%c" + c2 + "	%c" + h2 + "	%c" + o2, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
  }, t2;
})();
function st(t2, n2, r2) {
  return O(Array.isArray(t2) ? parseFloat(t2[0].toFixed(7)) + " + " + parseFloat(t2[1].toFixed(7)) + "j" : z(t2) ? "'" + t2 + "'" : "bool" === r2 ? ut(t2) : "" + parseFloat(t2.toFixed(7)), n2);
}
function ut(t2) {
  return 0 === t2 ? "false" : "true";
}
function ct(t2) {
  for (var n2 = [], r2 = 0; t2.length > r2; r2 += 2) n2.push([t2[r2], t2[r2 + 1]]);
  return n2;
}
var lt = (function() {
  function t2(t3, n2, r2) {
    var e2 = this;
    if (this.dtype = n2, this.shape = t3.slice(), this.size = _(t3), null != r2) {
      var i2 = r2.length;
      g(i2 === this.size, () => "Length of values '" + i2 + "' does not match the size inferred by the shape '" + e2.size + "'.");
    }
    if ("complex64" === n2) throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
    this.values = r2 || k(n2, this.size), this.strides = X(t3);
  }
  return t2.prototype.set = function(t3) {
    for (var n2 = this, r2 = [], e2 = 1; arguments.length > e2; e2++) r2[e2 - 1] = arguments[e2];
    0 === r2.length && (r2 = [0]), g(r2.length === this.rank, () => "The number of provided coordinates (" + r2.length + ") must match the rank (" + n2.rank + ")");
    var i2 = this.locToIndex(r2);
    this.values[i2] = t3;
  }, t2.prototype.get = function() {
    for (var t3 = [], n2 = 0; arguments.length > n2; n2++) t3[n2] = arguments[n2];
    0 === t3.length && (t3 = [0]);
    for (var r2 = 0, e2 = 0, i2 = t3; i2.length > e2; e2++) {
      var o2 = i2[e2];
      if (0 > o2 || o2 >= this.shape[r2]) throw Error("Requested out of range element at " + t3 + ".   Buffer shape=" + this.shape);
      r2++;
    }
    for (var a2 = t3[t3.length - 1], s2 = 0; t3.length - 1 > s2; ++s2) a2 += this.strides[s2] * t3[s2];
    return this.values[a2];
  }, t2.prototype.locToIndex = function(t3) {
    if (0 === this.rank) return 0;
    if (1 === this.rank) return t3[0];
    for (var n2 = t3[t3.length - 1], r2 = 0; t3.length - 1 > r2; ++r2) n2 += this.strides[r2] * t3[r2];
    return n2;
  }, t2.prototype.indexToLoc = function(t3) {
    if (0 === this.rank) return [];
    if (1 === this.rank) return [t3];
    for (var n2 = Array(this.shape.length), r2 = 0; n2.length - 1 > r2; ++r2) n2[r2] = Math.floor(t3 / this.strides[r2]), t3 -= n2[r2] * this.strides[r2];
    return n2[n2.length - 1] = t3, n2;
  }, Object.defineProperty(t2.prototype, "rank", { get() {
    return this.shape.length;
  }, enumerable: true, configurable: true }), t2.prototype.toTensor = function() {
    return ht().makeTensor(this.values, this.shape, this.dtype);
  }, t2;
})();
var ht = null;
var ft = null;
var dt = null;
var vt = (function() {
  function t2(t3, n2, r2, e2) {
    this.kept = false, this.isDisposedInternal = false, this.shape = t3.slice(), this.dtype = n2 || "float32", this.size = _(t3), this.strides = X(t3), this.dataId = r2, this.id = e2, this.rankType = 5 > this.rank ? "" + this.rank : "higher";
  }
  return t2.prototype.flatten = function() {
    return this.throwIfDisposed(), this.as1D();
  }, t2.prototype.asScalar = function() {
    return this.throwIfDisposed(), g(1 === this.size, () => "The array must have only 1 element."), this.reshape([]);
  }, t2.prototype.as1D = function() {
    return this.throwIfDisposed(), this.reshape([this.size]);
  }, t2.prototype.as2D = function(t3, n2) {
    return this.throwIfDisposed(), this.reshape([t3, n2]);
  }, t2.prototype.as3D = function(t3, n2, r2) {
    return this.throwIfDisposed(), this.reshape([t3, n2, r2]);
  }, t2.prototype.as4D = function(t3, n2, r2, e2) {
    return this.throwIfDisposed(), this.reshape([t3, n2, r2, e2]);
  }, t2.prototype.as5D = function(t3, n2, r2, e2, i2) {
    return this.throwIfDisposed(), this.reshape([t3, n2, r2, e2, i2]);
  }, t2.prototype.asType = function(t3) {
    return this.throwIfDisposed(), ft.cast(this, t3);
  }, Object.defineProperty(t2.prototype, "rank", { get() {
    return this.shape.length;
  }, enumerable: true, configurable: true }), t2.prototype.buffer = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t3 = n2.sent(), [2, ft.buffer(this.shape, this.dtype, t3)];
        }
      });
    });
  }, t2.prototype.bufferSync = function() {
    return ft.buffer(this.shape, this.dtype, this.dataSync());
  }, t2.prototype.array = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t3 = n2.sent(), [2, K(this.shape, t3)];
        }
      });
    });
  }, t2.prototype.arraySync = function() {
    return K(this.shape, this.dataSync());
  }, t2.prototype.data = function() {
    return r(this, 0, void 0, function() {
      var t3, n2;
      return e(this, function(r2) {
        switch (r2.label) {
          case 0:
            return this.throwIfDisposed(), t3 = ht().read(this.dataId), "string" !== this.dtype ? [3, 2] : [4, t3];
          case 1:
            n2 = r2.sent();
            try {
              return [2, n2.map((t4) => nt(t4))];
            } catch (e2) {
              throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
            }
            r2.label = 2;
          case 2:
            return [2, t3];
        }
      });
    });
  }, t2.prototype.dataSync = function() {
    this.throwIfDisposed();
    var t3 = ht().readSync(this.dataId);
    if ("string" === this.dtype) try {
      return t3.map((t4) => nt(t4));
    } catch (n2) {
      throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
    }
    return t3;
  }, t2.prototype.bytes = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.throwIfDisposed(), [4, ht().read(this.dataId)];
          case 1:
            return t3 = n2.sent(), "string" === this.dtype ? [2, t3] : [2, new Uint8Array(t3.buffer)];
        }
      });
    });
  }, t2.prototype.dispose = function() {
    this.isDisposed || (ht().disposeTensor(this), this.isDisposedInternal = true);
  }, Object.defineProperty(t2.prototype, "isDisposed", { get() {
    return this.isDisposedInternal;
  }, enumerable: true, configurable: true }), t2.prototype.throwIfDisposed = function() {
    if (this.isDisposed) throw Error("Tensor is disposed.");
  }, t2.prototype.toFloat = function() {
    return this.asType("float32");
  }, t2.prototype.toInt = function() {
    return this.asType("int32");
  }, t2.prototype.toBool = function() {
    return this.asType("bool");
  }, t2.prototype.print = function(t3) {
    return void 0 === t3 && (t3 = false), ft.print(this, t3);
  }, t2.prototype.reshape = function(t3) {
    return this.throwIfDisposed(), ft.reshape(this, t3);
  }, t2.prototype.reshapeAs = function(t3) {
    return this.throwIfDisposed(), this.reshape(t3.shape);
  }, t2.prototype.expandDims = function(t3) {
    return void 0 === t3 && (t3 = 0), ft.expandDims(this, t3);
  }, t2.prototype.cumsum = function(t3, n2, r2) {
    return void 0 === t3 && (t3 = 0), void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false), ft.cumsum(this, t3, n2, r2);
  }, t2.prototype.squeeze = function(t3) {
    return this.throwIfDisposed(), ft.squeeze(this, t3);
  }, t2.prototype.clone = function() {
    return this.throwIfDisposed(), ft.clone(this);
  }, t2.prototype.oneHot = function(t3, n2, r2) {
    return this.throwIfDisposed(), ft.oneHot(this, t3, n2, r2);
  }, t2.prototype.toString = function(t3) {
    return void 0 === t3 && (t3 = false), ((t4, n2, r2, e2) => {
      var i2 = X(n2), o2 = ((t5, n3, r3, e3) => {
        var i3 = _(n3), o3 = e3[e3.length - 1], a3 = Array(o3).fill(0), s3 = n3.length, u3 = "complex64" === r3 ? ct(t5) : t5;
        if (s3 > 1) for (var c2 = 0; i3 / o3 > c2; c2++) for (var l2 = c2 * o3, h2 = 0; o3 > h2; h2++) a3[h2] = Math.max(a3[h2], st(u3[l2 + h2], 0, r3).length);
        return a3;
      })(t4, n2, r2, i2), a2 = n2.length, s2 = (function t5(n3, r3, e3, i3, o3, a3) {
        void 0 === a3 && (a3 = true);
        var s3 = "complex64" === e3 ? 2 : 1, u3 = r3[0], c2 = r3.length;
        if (0 === c2) return "complex64" === e3 ? [st(ct(n3)[0], 0, e3)] : "bool" === e3 ? [ut(n3[0])] : ["" + n3[0]];
        if (1 === c2) {
          if (u3 > 20) {
            var l2 = Array.from(n3.slice(0, 3 * s3)), h2 = Array.from(n3.slice((u3 - 3) * s3, u3 * s3));
            return "complex64" === e3 && (l2 = ct(l2), h2 = ct(h2)), ["[" + l2.map((t6, n4) => st(t6, o3[n4], e3)).join(", ") + ", ..., " + h2.map((t6, n4) => st(t6, o3[u3 - 3 + n4], e3)).join(", ") + "]"];
          }
          return ["[" + ("complex64" === e3 ? ct(n3) : Array.from(n3)).map((t6, n4) => st(t6, o3[n4], e3)).join(", ") + "]"];
        }
        var f2 = r3.slice(1), d2 = i3.slice(1), v2 = i3[0] * s3, p2 = [];
        if (u3 > 20) {
          for (var m2 = 0; 3 > m2; m2++) {
            var x2 = (b2 = m2 * v2) + v2;
            p2.push.apply(p2, t5(n3.slice(b2, x2), f2, e3, d2, o3, false));
          }
          for (p2.push("..."), m2 = u3 - 3; u3 > m2; m2++) x2 = (b2 = m2 * v2) + v2, p2.push.apply(p2, t5(n3.slice(b2, x2), f2, e3, d2, o3, m2 === u3 - 1));
        } else for (m2 = 0; u3 > m2; m2++) {
          var b2;
          x2 = (b2 = m2 * v2) + v2, p2.push.apply(p2, t5(n3.slice(b2, x2), f2, e3, d2, o3, m2 === u3 - 1));
        }
        var g2 = 2 === c2 ? "," : "";
        for (p2[0] = "[" + p2[0] + g2, m2 = 1; p2.length - 1 > m2; m2++) p2[m2] = " " + p2[m2] + g2;
        var w2 = ",\n";
        for (m2 = 2; c2 > m2; m2++) w2 += "\n";
        return p2[p2.length - 1] = " " + p2[p2.length - 1] + "]" + (a3 ? "" : w2), p2;
      })(t4, n2, r2, i2, o2), u2 = ["Tensor"];
      return e2 && (u2.push("  dtype: " + r2), u2.push("  rank: " + a2), u2.push("  shape: [" + n2 + "]"), u2.push("  values:")), u2.push(s2.map((t5) => "    " + t5).join("\n")), u2.join("\n");
    })(this.dataSync(), this.shape, this.dtype, t3);
  }, t2.prototype.tile = function(t3) {
    return this.throwIfDisposed(), ft.tile(this, t3);
  }, t2.prototype.gather = function(t3, n2) {
    return void 0 === n2 && (n2 = 0), this.throwIfDisposed(), ft.gather(this, t3, n2);
  }, t2.prototype.matMul = function(t3, n2, r2) {
    return void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false), this.throwIfDisposed(), ft.matMul(this, t3, n2, r2);
  }, t2.prototype.dot = function(t3) {
    return this.throwIfDisposed(), ft.dot(this, t3);
  }, t2.prototype.norm = function(t3, n2, r2) {
    return void 0 === t3 && (t3 = "euclidean"), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.throwIfDisposed(), ft.norm(this, t3, n2, r2);
  }, t2.prototype.slice = function(t3, n2) {
    return this.throwIfDisposed(), ft.slice(this, t3, n2);
  }, t2.prototype.reverse = function(t3) {
    return this.throwIfDisposed(), ft.reverse(this, t3);
  }, t2.prototype.concat = function(n2, r2) {
    return void 0 === r2 && (r2 = 0), this.throwIfDisposed(), n2 instanceof t2 && (n2 = [n2]), ft.concat([this].concat(n2), r2);
  }, t2.prototype.split = function(t3, n2) {
    return void 0 === n2 && (n2 = 0), this.throwIfDisposed(), ft.split(this, t3, n2);
  }, t2.prototype.stack = function(t3, n2) {
    return void 0 === n2 && (n2 = 0), ft.stack([this, t3], n2);
  }, t2.prototype.unstack = function(t3) {
    return void 0 === t3 && (t3 = 0), ft.unstack(this, t3);
  }, t2.prototype.pad = function(t3, n2) {
    return void 0 === n2 && (n2 = 0), ft.pad(this, t3, n2);
  }, t2.prototype.batchNormalization = function(t3, n2, r2, e2, i2) {
    return void 0 === r2 && (r2 = 1e-3), dt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t3, n2, i2, e2, r2);
  }, t2.prototype.batchNorm = function(t3, n2, r2, e2, i2) {
    return void 0 === i2 && (i2 = 1e-3), this.throwIfDisposed(), ft.batchNorm(this, t3, n2, r2, e2, i2);
  }, t2.prototype.all = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.all(this, t3, n2);
  }, t2.prototype.any = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.any(this, t3, n2);
  }, t2.prototype.logSumExp = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.logSumExp(this, t3, n2);
  }, t2.prototype.sum = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.sum(this, t3, n2);
  }, t2.prototype.prod = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.prod(this, t3, n2);
  }, t2.prototype.mean = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.mean(this, t3, n2);
  }, t2.prototype.min = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.min(this, t3, n2);
  }, t2.prototype.max = function(t3, n2) {
    return void 0 === t3 && (t3 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.max(this, t3, n2);
  }, t2.prototype.argMin = function(t3) {
    return void 0 === t3 && (t3 = null), this.throwIfDisposed(), ft.argMin(this, t3);
  }, t2.prototype.argMax = function(t3) {
    return void 0 === t3 && (t3 = null), this.throwIfDisposed(), ft.argMax(this, t3);
  }, t2.prototype.cast = function(t3) {
    return this.throwIfDisposed(), ft.cast(this, t3);
  }, t2.prototype.add = function(t3) {
    return this.throwIfDisposed(), ft.add(this, t3);
  }, t2.prototype.addStrict = function(t3) {
    return this.throwIfDisposed(), ft.addStrict(this, t3);
  }, t2.prototype.atan2 = function(t3) {
    return this.throwIfDisposed(), ft.atan2(this, t3);
  }, t2.prototype.sub = function(t3) {
    return this.throwIfDisposed(), ft.sub(this, t3);
  }, t2.prototype.subStrict = function(t3) {
    return this.throwIfDisposed(), ft.subStrict(this, t3);
  }, t2.prototype.pow = function(t3) {
    return this.throwIfDisposed(), ft.pow(this, t3);
  }, t2.prototype.powStrict = function(t3) {
    return this.throwIfDisposed(), ft.powStrict(this, t3);
  }, t2.prototype.mul = function(t3) {
    return this.throwIfDisposed(), ft.mul(this, t3);
  }, t2.prototype.mulStrict = function(t3) {
    return this.throwIfDisposed(), ft.mulStrict(this, t3);
  }, t2.prototype.div = function(t3) {
    return this.throwIfDisposed(), ft.div(this, t3);
  }, t2.prototype.divNoNan = function(t3) {
    return this.throwIfDisposed(), ft.divNoNan(this, t3);
  }, t2.prototype.floorDiv = function(t3) {
    return this.throwIfDisposed(), ft.floorDiv(this, t3);
  }, t2.prototype.divStrict = function(t3) {
    return this.throwIfDisposed(), ft.divStrict(this, t3);
  }, t2.prototype.minimum = function(t3) {
    return this.throwIfDisposed(), ft.minimum(this, t3);
  }, t2.prototype.minimumStrict = function(t3) {
    return this.throwIfDisposed(), ft.minimumStrict(this, t3);
  }, t2.prototype.maximum = function(t3) {
    return this.throwIfDisposed(), ft.maximum(this, t3);
  }, t2.prototype.maximumStrict = function(t3) {
    return this.throwIfDisposed(), ft.maximumStrict(this, t3);
  }, t2.prototype.mod = function(t3) {
    return this.throwIfDisposed(), ft.mod(this, t3);
  }, t2.prototype.modStrict = function(t3) {
    return this.throwIfDisposed(), ft.modStrict(this, t3);
  }, t2.prototype.squaredDifferenceStrict = function(t3) {
    return this.throwIfDisposed(), ft.squaredDifferenceStrict(this, t3);
  }, t2.prototype.transpose = function(t3) {
    return this.throwIfDisposed(), ft.transpose(this, t3);
  }, t2.prototype.notEqual = function(t3) {
    return this.throwIfDisposed(), ft.notEqual(this, t3);
  }, t2.prototype.notEqualStrict = function(t3) {
    return this.throwIfDisposed(), ft.notEqualStrict(this, t3);
  }, t2.prototype.less = function(t3) {
    return this.throwIfDisposed(), ft.less(this, t3);
  }, t2.prototype.lessStrict = function(t3) {
    return this.throwIfDisposed(), ft.lessStrict(this, t3);
  }, t2.prototype.equal = function(t3) {
    return this.throwIfDisposed(), ft.equal(this, t3);
  }, t2.prototype.equalStrict = function(t3) {
    return this.throwIfDisposed(), ft.equalStrict(this, t3);
  }, t2.prototype.lessEqual = function(t3) {
    return this.throwIfDisposed(), ft.lessEqual(this, t3);
  }, t2.prototype.lessEqualStrict = function(t3) {
    return this.throwIfDisposed(), ft.lessEqualStrict(this, t3);
  }, t2.prototype.greater = function(t3) {
    return this.throwIfDisposed(), ft.greater(this, t3);
  }, t2.prototype.greaterStrict = function(t3) {
    return this.throwIfDisposed(), ft.greaterStrict(this, t3);
  }, t2.prototype.greaterEqual = function(t3) {
    return this.throwIfDisposed(), ft.greaterEqual(this, t3);
  }, t2.prototype.greaterEqualStrict = function(t3) {
    return this.throwIfDisposed(), ft.greaterEqualStrict(this, t3);
  }, t2.prototype.logicalAnd = function(t3) {
    return this.throwIfDisposed(), ft.logicalAnd(this, t3);
  }, t2.prototype.logicalOr = function(t3) {
    return this.throwIfDisposed(), ft.logicalOr(this, t3);
  }, t2.prototype.logicalNot = function() {
    return this.throwIfDisposed(), ft.logicalNot(this);
  }, t2.prototype.logicalXor = function(t3) {
    return this.throwIfDisposed(), ft.logicalXor(this, t3);
  }, t2.prototype.where = function(t3, n2) {
    return this.throwIfDisposed(), ft.where(t3, this, n2);
  }, t2.prototype.neg = function() {
    return this.throwIfDisposed(), ft.neg(this);
  }, t2.prototype.ceil = function() {
    return this.throwIfDisposed(), ft.ceil(this);
  }, t2.prototype.floor = function() {
    return this.throwIfDisposed(), ft.floor(this);
  }, t2.prototype.sign = function() {
    return this.throwIfDisposed(), ft.sign(this);
  }, t2.prototype.isNaN = function() {
    return this.throwIfDisposed(), ft.isNaN(this);
  }, t2.prototype.isInf = function() {
    return this.throwIfDisposed(), ft.isInf(this);
  }, t2.prototype.isFinite = function() {
    return this.throwIfDisposed(), ft.isFinite(this);
  }, t2.prototype.exp = function() {
    return this.throwIfDisposed(), ft.exp(this);
  }, t2.prototype.expm1 = function() {
    return this.throwIfDisposed(), ft.expm1(this);
  }, t2.prototype.log = function() {
    return this.throwIfDisposed(), ft.log(this);
  }, t2.prototype.log1p = function() {
    return this.throwIfDisposed(), ft.log1p(this);
  }, t2.prototype.sqrt = function() {
    return this.throwIfDisposed(), ft.sqrt(this);
  }, t2.prototype.rsqrt = function() {
    return this.throwIfDisposed(), ft.rsqrt(this);
  }, t2.prototype.square = function() {
    return this.throwIfDisposed(), ft.square(this);
  }, t2.prototype.reciprocal = function() {
    return this.throwIfDisposed(), ft.reciprocal(this);
  }, t2.prototype.abs = function() {
    return this.throwIfDisposed(), ft.abs(this);
  }, t2.prototype.clipByValue = function(t3, n2) {
    return this.throwIfDisposed(), ft.clipByValue(this, t3, n2);
  }, t2.prototype.relu = function() {
    return this.throwIfDisposed(), ft.relu(this);
  }, t2.prototype.relu6 = function() {
    return this.throwIfDisposed(), ft.relu6(this);
  }, t2.prototype.elu = function() {
    return this.throwIfDisposed(), ft.elu(this);
  }, t2.prototype.selu = function() {
    return this.throwIfDisposed(), ft.selu(this);
  }, t2.prototype.leakyRelu = function(t3) {
    return void 0 === t3 && (t3 = 0.2), this.throwIfDisposed(), ft.leakyRelu(this, t3);
  }, t2.prototype.prelu = function(t3) {
    return this.throwIfDisposed(), ft.prelu(this, t3);
  }, t2.prototype.sigmoid = function() {
    return this.throwIfDisposed(), ft.sigmoid(this);
  }, t2.prototype.logSigmoid = function() {
    return this.throwIfDisposed(), ft.logSigmoid(this);
  }, t2.prototype.softplus = function() {
    return this.throwIfDisposed(), ft.softplus(this);
  }, t2.prototype.zerosLike = function() {
    return this.throwIfDisposed(), ft.zerosLike(this);
  }, t2.prototype.onesLike = function() {
    return this.throwIfDisposed(), ft.onesLike(this);
  }, t2.prototype.sin = function() {
    return this.throwIfDisposed(), ft.sin(this);
  }, t2.prototype.cos = function() {
    return this.throwIfDisposed(), ft.cos(this);
  }, t2.prototype.tan = function() {
    return this.throwIfDisposed(), ft.tan(this);
  }, t2.prototype.asin = function() {
    return this.throwIfDisposed(), ft.asin(this);
  }, t2.prototype.acos = function() {
    return this.throwIfDisposed(), ft.acos(this);
  }, t2.prototype.atan = function() {
    return this.throwIfDisposed(), ft.atan(this);
  }, t2.prototype.sinh = function() {
    return this.throwIfDisposed(), ft.sinh(this);
  }, t2.prototype.cosh = function() {
    return this.throwIfDisposed(), ft.cosh(this);
  }, t2.prototype.tanh = function() {
    return this.throwIfDisposed(), ft.tanh(this);
  }, t2.prototype.asinh = function() {
    return this.throwIfDisposed(), ft.asinh(this);
  }, t2.prototype.acosh = function() {
    return this.throwIfDisposed(), ft.acosh(this);
  }, t2.prototype.atanh = function() {
    return this.throwIfDisposed(), ft.atanh(this);
  }, t2.prototype.erf = function() {
    return this.throwIfDisposed(), ft.erf(this);
  }, t2.prototype.round = function() {
    return this.throwIfDisposed(), ft.round(this);
  }, t2.prototype.step = function(t3) {
    return void 0 === t3 && (t3 = 0), this.throwIfDisposed(), ft.step(this, t3);
  }, t2.prototype.softmax = function(t3) {
    return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), ft.softmax(this, t3);
  }, t2.prototype.logSoftmax = function(t3) {
    return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), ft.logSoftmax(this, t3);
  }, t2.prototype.resizeBilinear = function(t3, n2) {
    return void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.image.resizeBilinear(this, t3, n2);
  }, t2.prototype.resizeNearestNeighbor = function(t3, n2) {
    return void 0 === n2 && (n2 = false), this.throwIfDisposed(), ft.image.resizeNearestNeighbor(this, t3, n2);
  }, t2.prototype.conv1d = function(t3, n2, r2, e2, i2, o2) {
    return void 0 === e2 && (e2 = "NWC"), void 0 === i2 && (i2 = 1), this.throwIfDisposed(), ft.conv1d(this, t3, n2, r2, e2, i2, o2);
  }, t2.prototype.conv2d = function(t3, n2, r2, e2, i2, o2) {
    return void 0 === e2 && (e2 = "NHWC"), void 0 === i2 && (i2 = [1, 1]), this.throwIfDisposed(), ft.conv2d(this, t3, n2, r2, e2, i2, o2);
  }, t2.prototype.conv2dTranspose = function(t3, n2, r2, e2, i2) {
    return this.throwIfDisposed(), ft.conv2dTranspose(this, t3, n2, r2, e2, i2);
  }, t2.prototype.depthwiseConv2D = function(t3, n2, r2, e2, i2, o2) {
    return void 0 === e2 && (e2 = "NHWC"), void 0 === i2 && (i2 = [1, 1]), this.throwIfDisposed(), ft.depthwiseConv2d(this, t3, n2, r2, e2, i2, o2);
  }, t2.prototype.separableConv2d = function(t3, n2, r2, e2, i2, o2) {
    return void 0 === i2 && (i2 = [1, 1]), void 0 === o2 && (o2 = "NHWC"), this.throwIfDisposed(), ft.separableConv2d(this, t3, n2, r2, e2, i2, o2);
  }, t2.prototype.avgPool = function(t3, n2, r2, e2) {
    return this.throwIfDisposed(), ft.avgPool(this, t3, n2, r2, e2);
  }, t2.prototype.maxPool = function(t3, n2, r2, e2) {
    return this.throwIfDisposed(), ft.maxPool(this, t3, n2, r2, e2);
  }, t2.prototype.localResponseNormalization = function(t3, n2, r2, e2) {
    return void 0 === t3 && (t3 = 5), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = 0.5), ft.localResponseNormalization(this, t3, n2, r2, e2);
  }, t2.prototype.pool = function(t3, n2, r2, e2, i2) {
    return this.throwIfDisposed(), ft.pool(this, t3, n2, r2, e2, i2);
  }, t2.prototype.variable = function(t3, n2, r2) {
    return void 0 === t3 && (t3 = true), this.throwIfDisposed(), ht().makeVariable(this, t3, n2, r2);
  }, t2.prototype.unsortedSegmentSum = function(t3, n2) {
    return this.throwIfDisposed(), ft.unsortedSegmentSum(this, t3, n2);
  }, t2.prototype.batchToSpaceND = function(t3, n2) {
    return this.throwIfDisposed(), ft.batchToSpaceND(this, t3, n2);
  }, t2.prototype.spaceToBatchND = function(t3, n2) {
    return this.throwIfDisposed(), ft.spaceToBatchND(this, t3, n2);
  }, t2.prototype.topk = function(t3, n2) {
    return void 0 === t3 && (t3 = 1), void 0 === n2 && (n2 = true), this.throwIfDisposed(), ft.topk(this, t3, n2);
  }, t2.prototype.stridedSlice = function(t3, n2, r2, e2, i2, o2, a2, s2) {
    return void 0 === e2 && (e2 = 0), void 0 === i2 && (i2 = 0), void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === s2 && (s2 = 0), this.throwIfDisposed(), ft.stridedSlice(this, t3, n2, r2, e2, i2, o2, a2, s2);
  }, t2.prototype.depthToSpace = function(t3, n2) {
    return this.throwIfDisposed(), ft.depthToSpace(this, t3, n2);
  }, t2.prototype.fft = function() {
    return this.throwIfDisposed(), ft.spectral.fft(this);
  }, t2.prototype.ifft = function() {
    return this.throwIfDisposed(), ft.spectral.ifft(this);
  }, t2.prototype.rfft = function() {
    return this.throwIfDisposed(), ft.spectral.rfft(this);
  }, t2.prototype.irfft = function() {
    return this.throwIfDisposed(), ft.spectral.irfft(this);
  }, t2;
})();
Object.defineProperty(vt, Symbol.hasInstance, { value(t2) {
  return !!t2 && null != t2.dataId && null != t2.shape && null != t2.dtype;
} });
var pt;
var mt;
var xt;
var bt;
var gt;
var wt;
var yt = (function(t2) {
  function r2(n2, r3, e2, i2) {
    var o2 = t2.call(this, n2.shape, n2.dtype, n2.dataId, i2) || this;
    return o2.trainable = r3, o2.name = e2, o2;
  }
  return n(r2, t2), r2.prototype.assign = function(t3) {
    if (t3.dtype !== this.dtype) throw Error("dtype of the new value (" + t3.dtype + ") and previous value (" + this.dtype + ") must match");
    if (!E(t3.shape, this.shape)) throw Error("shape of the new value (" + t3.shape + ") and previous value (" + this.shape + ") must match");
    ht().disposeTensor(this), this.dataId = t3.dataId, ht().incRef(this, null);
  }, r2.prototype.dispose = function() {
    ht().disposeVariable(this), this.isDisposedInternal = true;
  }, r2;
})(vt);
Object.defineProperty(yt, Symbol.hasInstance, { value(t2) {
  return t2 instanceof vt && null != t2.assign && t2.assign instanceof Function;
} }), (wt = pt || (pt = {})).R0 = "R0", wt.R1 = "R1", wt.R2 = "R2", wt.R3 = "R3", wt.R4 = "R4", wt.R5 = "R5", wt.R6 = "R6", ((t2) => {
  t2.float32 = "float32", t2.int32 = "int32", t2.bool = "int32", t2.complex64 = "complex64";
})(mt || (mt = {})), ((t2) => {
  t2.float32 = "float32", t2.int32 = "int32", t2.bool = "bool", t2.complex64 = "complex64";
})(xt || (xt = {})), ((t2) => {
  t2.float32 = "float32", t2.int32 = "float32", t2.bool = "float32", t2.complex64 = "complex64";
})(bt || (bt = {})), ((t2) => {
  t2.float32 = "complex64", t2.int32 = "complex64", t2.bool = "complex64", t2.complex64 = "complex64";
})(gt || (gt = {}));
var Ct = { float32: bt, int32: mt, bool: xt, complex64: gt };
function _t(t2, n2) {
  if ("string" === t2 || "string" === n2) {
    if ("string" === t2 && "string" === n2) return "string";
    throw Error("Can not upcast " + t2 + " with " + n2);
  }
  return Ct[t2][n2];
}
function Et(t2) {
  return _t(t2, "int32");
}
function Rt(t2, n2) {
  if (t2.dtype === n2.dtype) return [t2, n2];
  var r2 = _t(t2.dtype, n2.dtype);
  return [t2.cast(r2), n2.cast(r2)];
}
function At(t2, n2) {
  g(t2.dtype === n2.dtype, () => "The dtypes of the first(" + t2.dtype + ") and second(" + n2.dtype + ") input must match");
}
function Nt(t2) {
  var n2 = [];
  return (function t3(n3, r2, e2) {
    if (null != n3) {
      if (n3 instanceof vt) r2.push(n3);
      else if (Array.isArray(i2 = n3) || "object" == typeof i2) {
        var i2, o2 = n3;
        for (var a2 in o2) {
          var s2 = o2[a2];
          e2.has(s2) || (e2.add(s2), t3(s2, r2, e2));
        }
      }
    }
  })(t2, n2, /* @__PURE__ */ new Set()), n2;
}
var Ot;
var Mt = Object.freeze({ makeTypesMatch: Rt, assertTypesMatch: At, isTensorInList(t2, n2) {
  return n2.some((n3) => n3.id === t2.id);
}, getTensorsInContainer: Nt });
var It = (function() {
  function t2() {
    this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = /* @__PURE__ */ new WeakMap(), this.profiling = false, this.activeProfile = { newBytes: 0, newTensors: 0, peakBytes: 0, kernels: [], result: null };
  }
  return t2.prototype.dispose = function() {
    for (var t3 in this.registeredVariables) this.registeredVariables[t3].dispose();
  }, t2;
})();
var Tt = (function() {
  function t2(t3) {
    this.ENV = t3, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new It();
  }
  return t2.prototype.ready = function() {
    return r(this, 0, void 0, function() {
      var t3, n2, r2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (null != this.pendingBackendInit) return [2, this.pendingBackendInit.then(() => {
            })];
            if (null != this.backendInstance) return [2];
            t3 = this.getSortedBackends(), n2 = 0, e2.label = 1;
          case 1:
            return t3.length > n2 ? [4, this.initializeBackend(r2 = t3[n2]).success] : [3, 5];
          case 2:
            return e2.sent() ? [4, this.setBackend(r2)] : [3, 4];
          case 3:
            return e2.sent(), [2];
          case 4:
            return n2++, [3, 1];
          case 5:
            throw Error("Could not initialize any backends, all backend initializations failed.");
        }
      });
    });
  }, Object.defineProperty(t2.prototype, "backend", { get() {
    if (null != this.pendingBackendInit) throw Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
    if (null == this.backendInstance) {
      var t3 = this.initializeBackendsAndReturnBest(), n2 = t3.name;
      if (t3.asyncInit) throw Error("The highest priority backend '" + n2 + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
      this.setBackend(n2);
    }
    return this.backendInstance;
  }, enumerable: true, configurable: true }), t2.prototype.backendNames = function() {
    return Object.keys(this.registryFactory);
  }, t2.prototype.findBackend = function(t3) {
    if (!(t3 in this.registry)) {
      if (!(t3 in this.registryFactory)) return null;
      if (this.initializeBackend(t3).asyncInit) return null;
    }
    return this.registry[t3];
  }, t2.prototype.findBackendFactory = function(t3) {
    return t3 in this.registryFactory ? this.registryFactory[t3].factory : null;
  }, t2.prototype.registerBackend = function(t3, n2, r2) {
    return void 0 === r2 && (r2 = 1), t3 in this.registryFactory ? (console.warn(t3 + " backend was already registered. Reusing existing backend factory."), false) : (this.registryFactory[t3] = { factory: n2, priority: r2 }, true);
  }, t2.prototype.setBackend = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (null == this.registryFactory[t3]) throw Error("Backend name '" + t3 + "' not found in registry");
            return this.backendName = t3, null != this.registry[t3] ? [3, 4] : (this.backendInstance = null, n2 = this.initializeBackend(t3), r2 = n2.success, n2.asyncInit ? [4, r2] : [3, 2]);
          case 1:
            return i2 = e2.sent(), [3, 3];
          case 2:
            i2 = r2, e2.label = 3;
          case 3:
            if (!i2) return [2, false];
            e2.label = 4;
          case 4:
            return this.backendInstance = this.registry[t3], this.setupRegisteredKernels(), this.profiler = new ot(this.backendInstance), [2, true];
        }
      });
    });
  }, t2.prototype.setupRegisteredKernels = function() {
    var t3 = this;
    h(this.backendName).forEach((n2) => {
      null != n2.setupFunc && n2.setupFunc(t3.backendInstance);
    });
  }, t2.prototype.disposeRegisteredKernels = function(t3) {
    var n2 = this;
    h(t3).forEach((r2) => {
      null != r2.disposeFunc && r2.disposeFunc(n2.registry[t3]);
    });
  }, t2.prototype.initializeBackend = function(t3) {
    var n2 = this, r2 = this.registryFactory[t3];
    if (null == r2) throw Error("Cannot initialize backend " + t3 + ", no registration found.");
    try {
      var e2 = r2.factory();
      if (Promise.resolve(e2) === e2) {
        var i2 = ++this.pendingBackendInitId, o2 = e2.then((r3) => !(n2.pendingBackendInitId > i2 || (n2.registry[t3] = r3, n2.pendingBackendInit = null, 0))).catch((r3) => !(n2.pendingBackendInitId > i2 || (n2.pendingBackendInit = null, console.warn("Initialization of backend " + t3 + " failed"), console.warn(r3.stack || r3.message), 1)));
        return this.pendingBackendInit = o2, { success: o2, asyncInit: true };
      }
      return this.registry[t3] = e2, { success: true, asyncInit: false };
    } catch (a2) {
      return console.warn("Initialization of backend " + t3 + " failed"), console.warn(a2.stack || a2.message), { success: false, asyncInit: false };
    }
  }, t2.prototype.removeBackend = function(t3) {
    if (!(t3 in this.registryFactory)) throw Error(t3 + " backend not found in registry");
    this.backendName === t3 && null != this.pendingBackendInit && this.pendingBackendInitId++, t3 in this.registry && (this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3]), delete this.registryFactory[t3], this.backendName === t3 && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null);
  }, t2.prototype.getSortedBackends = function() {
    var t3 = this;
    if (0 === Object.keys(this.registryFactory).length) throw Error("No backend found in registry.");
    return Object.keys(this.registryFactory).sort((n2, r2) => t3.registryFactory[r2].priority - t3.registryFactory[n2].priority);
  }, t2.prototype.initializeBackendsAndReturnBest = function() {
    for (var t3 = this.getSortedBackends(), n2 = 0; t3.length > n2; n2++) {
      var r2 = t3[n2], e2 = this.initializeBackend(r2), i2 = e2.asyncInit;
      if (i2 || e2.success) return { name: r2, asyncInit: i2 };
    }
    throw Error("Could not initialize any backends, all backend initializations failed.");
  }, t2.prototype.moveData = function(t3, n2) {
    var r2 = this.state.tensorInfo.get(n2), e2 = r2.backend, i2 = this.readSync(n2);
    e2.disposeData(n2), r2.backend = t3, t3.move(n2, i2, r2.shape, r2.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
  }, t2.prototype.tidy = function(t3, n2) {
    var r2, e2 = this, i2 = null;
    if (null == n2) {
      if ("function" != typeof t3) throw Error("Please provide a function to tidy()");
      n2 = t3;
    } else {
      if ("string" != typeof t3 && !(t3 instanceof String)) throw Error("When calling with two arguments, the first argument to tidy() must be a string");
      if ("function" != typeof n2) throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
      i2 = t3;
    }
    return this.scopedRun(() => e2.startScope(i2), () => e2.endScope(r2), () => ((r2 = n2()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), r2));
  }, t2.prototype.scopedRun = (t3, n2, r2) => {
    t3();
    try {
      var e2 = r2();
      return n2(), e2;
    } catch (i2) {
      throw n2(), i2;
    }
  }, t2.prototype.nextTensorId = () => t2.nextTensorId++, t2.prototype.nextVariableId = () => t2.nextVariableId++, t2.prototype.clone = function(t3) {
    var n2 = this.makeTensorFromDataId(t3.dataId, t3.shape, t3.dtype);
    return this.addTapeNode(this.state.activeScope.name, { x: t3 }, [n2], (t4) => ({ x() {
      return t4.toFloat();
    } }), []), n2;
  }, t2.prototype.runKernel = function(t3, n2, r2, e2, i2) {
    return this.runKernelFunc(null, n2, null, t3, r2, e2, i2);
  }, t2.prototype.shouldCheckForMemLeaks = function() {
    return this.ENV.getBool("IS_TEST");
  }, t2.prototype.checkKernelForMemLeak = function(t3, n2, r2) {
    var e2 = this.backend.numDataIds(), i2 = 0;
    r2.forEach((t4) => {
      i2 += "complex64" === t4.dtype ? 3 : 1;
    });
    var o2 = e2 - n2 - i2 - this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1];
    if (o2 > 0) throw Error("Backend '" + this.backendName + "' has an internal memory leak (" + o2 + " data ids) after running '" + t3 + "'");
  }, t2.prototype.runKernelFunc = function(t3, n2, r2, e2, i2, o2, a2) {
    var s2, u2 = this;
    void 0 === o2 && (o2 = []), void 0 === a2 && (a2 = []);
    var l2 = [], h2 = this.isTapeOn();
    null == e2 && (e2 = null != this.state.activeScope ? this.state.activeScope.name : "");
    var f2, d2 = (t4) => {
      h2 && (l2 = t4.map((t5) => u2.keep(u2.clone(t5))));
    }, v2 = this.state.numBytes, p2 = this.state.numTensors;
    this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
    var m2, x2 = c(e2, this.backendName);
    return f2 = null != x2 ? () => {
      var t4 = u2.backend.numDataIds();
      m2 = x2.kernelFunc({ inputs: n2, attrs: i2, backend: u2.backend });
      var r3 = Array.isArray(m2) ? m2 : [m2];
      u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(e2, t4, r3);
      var s3 = r3.map((t5) => u2.makeTensorFromDataId(t5.dataId, t5.shape, t5.dtype)), c2 = s3.filter((t5, n3) => a2[n3]);
      return d2((o2 || []).slice().concat(c2)), s3;
    } : () => {
      var n3 = u2.backend.numDataIds();
      m2 = u2.tidy(() => t3(u2.backend, d2));
      var r3 = Array.isArray(m2) ? m2 : [m2];
      return u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(e2, n3, r3), r3;
    }, this.scopedRun(() => u2.state.kernelDepth++, () => u2.state.kernelDepth--, () => {
      s2 = u2.ENV.getBool("DEBUG") ? u2.profiler.profileKernel(e2, n2, () => f2()) : f2();
    }), h2 && this.addTapeNode(e2, n2, s2, r2, l2), this.state.profiling && this.state.activeProfile.kernels.push({ name: e2, bytesAdded: this.state.numBytes - v2, totalBytesSnapshot: this.state.numBytes, tensorsAdded: this.state.numTensors - p2, totalTensorsSnapshot: this.state.numTensors, inputShapes: Object.keys(n2).map((t4) => n2[t4].shape), outputShapes: s2.map((t4) => t4.shape) }), Array.isArray(m2) ? s2 : s2[0];
  }, t2.prototype.makeTensor = function(t3, n2, r2, e2) {
    if (null == t3) throw Error("Values passed to engine.makeTensor() are null");
    e2 = e2 || this.backend;
    var i2 = t3;
    "string" === (r2 = r2 || "float32") && z(t3[0]) && (i2 = t3.map((t4) => tt(t4)));
    var o2 = e2.write(i2, n2, r2), a2 = new vt(n2, r2, o2, this.nextTensorId());
    if (this.incRef(a2, e2), "string" === r2) {
      var s2 = this.state.tensorInfo.get(o2), u2 = W(i2);
      this.state.numBytes += u2 - s2.bytes, s2.bytes = u2;
    }
    return a2;
  }, t2.prototype.makeTensorFromDataId = function(t3, n2, r2, e2) {
    var i2 = new vt(n2, r2 = r2 || "float32", t3, this.nextTensorId());
    return this.incRef(i2, e2), i2;
  }, t2.prototype.makeVariable = function(t3, n2, r2, e2) {
    void 0 === n2 && (n2 = true), r2 = r2 || "" + this.nextVariableId(), null != e2 && e2 !== t3.dtype && (t3 = t3.asType(e2));
    var i2 = new yt(t3, n2, r2, this.nextTensorId());
    if (null != this.state.registeredVariables[i2.name]) throw Error("Variable with name " + i2.name + " was already registered");
    return this.state.registeredVariables[i2.name] = i2, this.incRef(i2, this.backend), i2;
  }, t2.prototype.incRef = function(t3, n2) {
    var r2 = this.state.tensorInfo.has(t3.dataId) ? this.state.tensorInfo.get(t3.dataId).refCount : 0;
    if (this.state.numTensors++, "string" === t3.dtype && this.state.numStringTensors++, 0 === r2) {
      this.state.numDataBuffers++;
      var e2 = 0;
      "complex64" !== t3.dtype && "string" !== t3.dtype && (e2 = t3.size * V(t3.dtype)), this.state.tensorInfo.set(t3.dataId, { backend: n2 || this.backend, dtype: t3.dtype, shape: t3.shape, bytes: e2, refCount: 0 }), this.state.numBytes += e2;
    }
    this.state.tensorInfo.get(t3.dataId).refCount++, t3 instanceof yt || this.track(t3);
  }, t2.prototype.disposeTensor = function(t3) {
    if (this.state.tensorInfo.has(t3.dataId)) {
      this.state.numTensors--, "string" === t3.dtype && this.state.numStringTensors--;
      var n2 = this.state.tensorInfo.get(t3.dataId);
      n2.refCount > 1 ? this.state.tensorInfo.get(t3.dataId).refCount-- : ("complex64" !== t3.dtype && (this.state.numBytes -= n2.bytes), this.state.numDataBuffers--, n2.backend.disposeData(t3.dataId), this.state.tensorInfo.delete(t3.dataId));
    }
  }, t2.prototype.disposeVariables = function() {
    for (var t3 in this.state.registeredVariables) this.disposeVariable(this.state.registeredVariables[t3]);
  }, t2.prototype.disposeVariable = function(t3) {
    this.disposeTensor(t3), null != this.state.registeredVariables[t3.name] && delete this.state.registeredVariables[t3.name];
  }, t2.prototype.memory = function() {
    var t3 = this.backend.memory();
    return t3.numTensors = this.state.numTensors, t3.numDataBuffers = this.state.numDataBuffers, t3.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (t3.unreliable = true, null == t3.reasons && (t3.reasons = []), t3.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t3;
  }, t2.prototype.profile = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2;
      return e(this, function(e2) {
        return this.state.profiling = true, n2 = this.state.numBytes, r2 = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = t3(), this.state.profiling = false, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map((t4) => t4.totalBytesSnapshot)), this.state.activeProfile.newBytes = this.state.numBytes - n2, this.state.activeProfile.newTensors = this.state.numTensors - r2, [2, this.state.activeProfile];
      });
    });
  }, t2.prototype.isTapeOn = function() {
    return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
  }, t2.prototype.addTapeNode = function(t3, n2, r2, e2, i2) {
    var o2 = this, a2 = { id: this.state.nextTapeNodeId++, kernelName: t3, inputs: n2, outputs: r2, saved: i2 }, s2 = l(t3);
    null != s2 && (e2 = s2.gradFunc), null != e2 && (a2.gradient = (t4) => (t4 = t4.map((t5, n3) => {
      if (null == t5) {
        var e3 = r2[n3], i3 = J(e3.size, e3.dtype);
        return o2.makeTensor(i3, e3.shape, e3.dtype);
      }
      return t5;
    }), e2(t4.length > 1 ? t4 : t4[0], i2))), this.state.activeTape.push(a2);
  }, t2.prototype.keep = (t3) => (t3.kept = true, t3), t2.prototype.startTape = function() {
    0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++;
  }, t2.prototype.endTape = function() {
    this.state.gradientDepth--;
  }, t2.prototype.startScope = function(t3) {
    var n2 = { track: [], name: "unnamed scope", id: this.state.nextScopeId++ };
    t3 && (n2.name = t3), this.state.scopeStack.push(n2), this.state.activeScope = n2;
  }, t2.prototype.endScope = function(t3) {
    for (var n2 = this, r2 = Nt(t3), e2 = new Set(r2.map((t4) => t4.id)), i2 = 0; this.state.activeScope.track.length > i2; i2++) {
      var o2 = this.state.activeScope.track[i2];
      o2.kept || e2.has(o2.id) || o2.dispose();
    }
    var a2 = this.state.scopeStack.pop();
    this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1], r2.forEach((t4) => {
      t4.kept || t4.scopeId !== a2.id || n2.track(t4);
    });
  }, t2.prototype.gradients = function(t3, n2, r2, e2) {
    var i2 = this;
    if (void 0 === e2 && (e2 = false), g(n2.length > 0, () => "gradients() received an empty list of xs."), null != r2 && "float32" !== r2.dtype) throw Error("dy must have 'float32' dtype, but has '" + r2.dtype + "'");
    var o2 = this.scopedRun(() => i2.startTape(), () => i2.endTape(), () => i2.tidy("forward", t3));
    g(o2 instanceof vt, () => "The result y returned by f() must be a tensor.");
    var a2 = ((t4, n3, r3) => {
      for (var e3 = {}, i3 = {}, o3 = 0; n3.length > o3; o3++) e3[n3[o3].id] = true;
      for (o3 = 0; t4.length > o3; o3++) {
        var a3 = (v2 = t4[o3]).inputs;
        for (var s2 in a3) {
          for (var u2 = a3[s2], c2 = false, l2 = 0; n3.length > l2; l2++) if (e3[u2.id]) {
            v2.outputs.forEach((t5) => e3[t5.id] = true), c2 = true, i3[v2.id] = true;
            break;
          }
          if (c2) break;
        }
      }
      var h2 = {};
      h2[r3.id] = true;
      var f2 = {};
      for (o3 = t4.length - 1; o3 >= 0; o3--) for (a3 = (v2 = t4[o3]).inputs, l2 = 0; v2.outputs.length > l2; l2++) if (h2[v2.outputs[l2].id]) {
        for (var s2 in a3) h2[a3[s2].id] = true, f2[v2.id] = true;
        break;
      }
      var d2 = [];
      for (o3 = 0; t4.length > o3; o3++) {
        var v2;
        if (i3[(v2 = t4[o3]).id] && f2[v2.id]) {
          var p2 = {};
          for (var s2 in v2.inputs) {
            var m2 = v2.inputs[s2];
            e3[m2.id] && (p2[s2] = m2);
          }
          var x2 = Object.assign({}, v2);
          x2.inputs = p2, x2.outputs = v2.outputs, d2.push(x2);
        }
      }
      return d2;
    })(this.state.activeTape, n2, o2);
    if (!e2 && 0 === a2.length && n2.length > 0) throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
    return this.tidy("backward", () => {
      var t4, e3, s2 = {};
      s2[o2.id] = r2 ?? (e3 = Y(_(t4 = o2.shape), "float32"), St.makeTensor(e3, t4, "float32")), ((t5, n3) => {
        for (var r3 = ((r4) => {
          var e5 = n3[r4], o3 = [];
          if (e5.outputs.forEach((n4) => {
            var r5 = t5[n4.id];
            o3.push(null != r5 ? r5 : null);
          }), null == e5.gradient) throw Error("Cannot compute gradient: gradient function not found for " + e5.kernelName + ".");
          var a3 = e5.gradient(o3), s3 = (n4) => {
            if (!(n4 in a3)) throw Error("Cannot backprop through input " + n4 + ". Available gradients found: " + Object.keys(a3) + ".");
            var r5 = i2.tidy(() => a3[n4]());
            if ("float32" !== r5.dtype) throw Error("Error in gradient for op " + e5.kernelName + ". The gradient of input " + n4 + " must have 'float32' dtype, but has '" + r5.dtype + "'");
            var o4 = e5.inputs[n4];
            if (!E(r5.shape, o4.shape)) throw Error("Error in gradient for op " + e5.kernelName + ". The gradient of input '" + n4 + "' has shape '" + r5.shape + "', which does not match the shape of the input '" + o4.shape + "'");
            if (null == t5[o4.id]) t5[o4.id] = r5;
            else {
              var s4 = t5[o4.id];
              t5[o4.id] = s4.add(r5), s4.dispose();
            }
          };
          for (var u3 in e5.inputs) s3(u3);
        }), e4 = n3.length - 1; e4 >= 0; e4--) r3(e4);
      })(s2, a2);
      var u2 = n2.map((t5) => s2[t5.id]);
      return 0 === i2.state.gradientDepth && (i2.state.activeTape.forEach((t5) => {
        for (var n3 = 0, r3 = t5.saved; r3.length > n3; n3++) r3[n3].dispose();
      }), i2.state.activeTape = null), { value: o2, grads: u2 };
    });
  }, t2.prototype.customGrad = function(t3) {
    var n2 = this;
    return g(q(t3), () => "The f passed in customGrad(f) must be a function."), function() {
      for (var r2, e2 = [], i2 = 0; arguments.length > i2; i2++) e2[i2] = arguments[i2];
      g(e2.every((t4) => t4 instanceof vt), () => "The args passed in customGrad(f)(x1, x2,...) must all be tensors");
      var o2 = {};
      return e2.forEach((t4, n3) => {
        o2[n3] = t4;
      }), n2.runKernelFunc((n3, i3) => (g((r2 = t3.apply(void 0, e2.concat([i3]))).value instanceof vt, () => "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"), g(q(r2.gradFunc), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."), r2.value), o2, (t4, n3) => {
        var i3 = r2.gradFunc(t4, n3), o3 = Array.isArray(i3) ? i3 : [i3];
        g(o3.length === e2.length, () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."), g(o3.every((t5) => t5 instanceof vt), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");
        var a2 = {};
        return o3.forEach((t5, n4) => {
          a2[n4] = () => t5;
        }), a2;
      });
    };
  }, t2.prototype.readSync = function(t3) {
    return this.state.tensorInfo.get(t3).backend.readSync(t3);
  }, t2.prototype.read = function(t3) {
    return this.state.tensorInfo.get(t3).backend.read(t3);
  }, t2.prototype.time = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            return n2 = Z(), [4, this.backend.time(t3)];
          case 1:
            return (r2 = e2.sent()).wallMs = Z() - n2, [2, r2];
        }
      });
    });
  }, t2.prototype.track = function(t3) {
    return null != this.state.activeScope && (t3.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t3)), t3;
  }, Object.defineProperty(t2.prototype, "registeredVariables", { get() {
    return this.state.registeredVariables;
  }, enumerable: true, configurable: true }), t2.prototype.reset = function() {
    for (var t3 in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new It(), this.registry) this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3];
    this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null;
  }, t2.nextTensorId = 0, t2.nextVariableId = 0, t2;
})();
var St = (() => {
  var t2 = (() => {
    if (null == Ot) {
      var t3 = void 0;
      if ("undefined" != typeof window) t3 = window;
      else if ("undefined" != typeof global) t3 = global;
      else if ("undefined" != typeof process) t3 = process;
      else {
        if ("undefined" == typeof self) throw Error("Could not find a global object");
        t3 = self;
      }
      Ot = t3;
    }
    return Ot;
  })();
  if (null == t2.t) {
    var n2 = new i(t2);
    t2.t = new Tt(n2);
  }
  return a = t2.t.ENV, ht = () => t2.t, t2.t;
})();
function Dt() {
  return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope;
}
var kt = o();
kt.registerFlag("DEBUG", () => false, (t2) => {
  t2 && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
}), kt.registerFlag("IS_BROWSER", () => Dt()), kt.registerFlag("IS_NODE", () => "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node), kt.registerFlag("IS_CHROME", () => "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)), kt.registerFlag("PROD", () => false), kt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", () => kt.getBool("DEBUG")), kt.registerFlag("DEPRECATION_WARNINGS_ENABLED", () => true), kt.registerFlag("IS_TEST", () => false);
var Pt;
var Ft;
var Lt;
var Bt = {};
var Vt = { alpha: false, antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: false, depth: false, stencil: false, failIfMajorPerformanceCaveat: true };
function Wt(t2, n2) {
  Bt[t2] = n2;
}
function zt(t2) {
  t2 in Bt || (Bt[t2] = ((t3) => {
    if (1 !== t3 && 2 !== t3) throw Error("Cannot get WebGL rendering context, WebGL is disabled.");
    var n3 = ((t4) => {
      if ("undefined" != typeof OffscreenCanvas && 2 === t4) return new OffscreenCanvas(300, 150);
      if ("undefined" != typeof document) return document.createElement("canvas");
      throw Error("Cannot create a canvas in this context");
    })(t3);
    return n3.addEventListener("webglcontextlost", (n4) => {
      n4.preventDefault(), delete Bt[t3];
    }, false), 1 === t3 ? n3.getContext("webgl", Vt) || n3.getContext("experimental-webgl", Vt) : n3.getContext("webgl2", Vt);
  })(t2));
  var n2 = Bt[t2];
  return n2.isContextLost() ? (delete Bt[t2], zt(t2)) : (n2.disable(n2.DEPTH_TEST), n2.disable(n2.STENCIL_TEST), n2.disable(n2.BLEND), n2.disable(n2.DITHER), n2.disable(n2.POLYGON_OFFSET_FILL), n2.disable(n2.SAMPLE_COVERAGE), n2.enable(n2.SCISSOR_TEST), n2.enable(n2.CULL_FACE), n2.cullFace(n2.BACK), Bt[t2]);
}
function Gt(t2, n2) {
  return [n2, t2];
}
function Ut(t2) {
  var n2 = _(t2);
  return N(Math.ceil(n2 / 4));
}
function jt(t2, n2) {
  return [Math.max(1, Math.ceil(n2 / 2)), Math.max(1, Math.ceil(t2 / 2))];
}
function qt(t2, n2) {
  var r2, e2, i2, a2, s2, u2, c2, l2, h2, f2 = t2;
  return 2 === o().getNumber("WEBGL_VERSION") ? (r2 = f2.R32F, e2 = f2.R16F, i2 = f2.RGBA16F, a2 = f2.RGBA32F, s2 = f2.RED, u2 = 4, c2 = 1, l2 = f2.HALF_FLOAT, h2 = f2.FLOAT) : (r2 = t2.RGBA, e2 = t2.RGBA, i2 = t2.RGBA, a2 = f2.RGBA, s2 = t2.RGBA, u2 = 4, c2 = 4, l2 = null != n2 ? n2.HALF_FLOAT_OES : null, h2 = t2.FLOAT), { internalFormatFloat: r2, internalFormatHalfFloat: e2, internalFormatPackedHalfFloat: i2, internalFormatPackedFloat: a2, textureFormatFloat: s2, downloadTextureFormat: t2.RGBA, downloadUnpackNumChannels: u2, defaultNumChannels: c2, textureTypeHalfFloat: l2, textureTypeFloat: h2 };
}
function Ht(t2, n2, r2) {
  var e2 = r2();
  return n2 && ((t3) => {
    var n3 = t3.getError();
    if (n3 !== t3.NO_ERROR) throw Error("WebGL Error: " + $t(t3, n3));
  })(t2), e2;
}
function Xt(t2) {
  return !!(o().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t2 || Math.abs(t2) > 596e-10 && 65504 > Math.abs(t2));
}
function $t(t2, n2) {
  switch (n2) {
    case t2.NO_ERROR:
      return "NO_ERROR";
    case t2.INVALID_ENUM:
      return "INVALID_ENUM";
    case t2.INVALID_VALUE:
      return "INVALID_VALUE";
    case t2.INVALID_OPERATION:
      return "INVALID_OPERATION";
    case t2.INVALID_FRAMEBUFFER_OPERATION:
      return "INVALID_FRAMEBUFFER_OPERATION";
    case t2.OUT_OF_MEMORY:
      return "OUT_OF_MEMORY";
    case t2.CONTEXT_LOST_WEBGL:
      return "CONTEXT_LOST_WEBGL";
    default:
      return "Unknown error code " + n2;
  }
}
function Kt(t2, n2, r2) {
  return gn(t2, n2, () => t2.getExtension(r2), 'Extension "' + r2 + '" not supported on this browser.');
}
function Yt(t2, n2, r2) {
  var e2 = gn(t2, n2, () => t2.createShader(t2.VERTEX_SHADER), "Unable to create vertex WebGLShader.");
  if (Ht(t2, n2, () => t2.shaderSource(e2, r2)), Ht(t2, n2, () => t2.compileShader(e2)), false === t2.getShaderParameter(e2, t2.COMPILE_STATUS)) throw console.log(t2.getShaderInfoLog(e2)), Error("Failed to compile vertex shader.");
  return e2;
}
function Jt(t2, n2, r2) {
  var e2 = gn(t2, n2, () => t2.createShader(t2.FRAGMENT_SHADER), "Unable to create fragment WebGLShader.");
  if (Ht(t2, n2, () => t2.shaderSource(e2, r2)), Ht(t2, n2, () => t2.compileShader(e2)), false === t2.getShaderParameter(e2, t2.COMPILE_STATUS)) throw ((t3, n3) => {
    var r3 = tn.exec(n3);
    if (null == r3) return console.log("Couldn't parse line number in error: " + n3), void console.log(t3);
    for (var e3 = +r3[1], i2 = t3.split("\n"), o2 = ("" + i2.length).length + 2, a2 = i2.map((t4, n4) => O("" + (n4 + 1), o2) + t4), s2 = 0, u2 = 0; a2.length > u2; u2++) s2 = Math.max(a2[u2].length, s2);
    var c2 = a2.slice(0, e3 - 1), l2 = a2.slice(e3 - 1, e3), h2 = a2.slice(e3);
    console.log(c2.join("\n")), console.log(n3.split("\n")[0]), console.log("%c " + O(l2[0], s2), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h2.join("\n"));
  })(r2, t2.getShaderInfoLog(e2)), Error("Failed to compile fragment shader.");
  return e2;
}
((t2) => {
  t2[t2.DENSE = 0] = "DENSE", t2[t2.SHARED_BATCH = 1] = "SHARED_BATCH";
})(Pt || (Pt = {})), ((t2) => {
  t2[t2.RENDER = 0] = "RENDER", t2[t2.UPLOAD = 1] = "UPLOAD", t2[t2.PIXELS = 2] = "PIXELS", t2[t2.DOWNLOAD = 3] = "DOWNLOAD";
})(Ft || (Ft = {})), ((t2) => {
  t2[t2.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", t2[t2.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", t2[t2.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", t2[t2.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", t2[t2.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";
})(Lt || (Lt = {}));
var Zt;
var Qt;
var tn = /ERROR: [0-9]+:([0-9]+):/g;
function nn(t2, n2) {
  return gn(t2, n2, () => t2.createProgram(), "Unable to create WebGLProgram.");
}
function rn(t2, n2, r2) {
  if (Ht(t2, n2, () => t2.linkProgram(r2)), false === t2.getProgramParameter(r2, t2.LINK_STATUS)) throw console.log(t2.getProgramInfoLog(r2)), Error("Failed to link vertex and fragment shaders.");
}
function en(t2, n2, r2) {
  if (Ht(t2, n2, () => t2.validateProgram(r2)), false === t2.getProgramParameter(r2, t2.VALIDATE_STATUS)) throw console.log(t2.getProgramInfoLog(r2)), Error("Shader program validation failed.");
}
function on(t2, n2, r2) {
  var e2 = gn(t2, n2, () => t2.createBuffer(), "Unable to create WebGLBuffer");
  return Ht(t2, n2, () => t2.bindBuffer(t2.ARRAY_BUFFER, e2)), Ht(t2, n2, () => t2.bufferData(t2.ARRAY_BUFFER, r2, t2.STATIC_DRAW)), e2;
}
function an(t2, n2, r2) {
  var e2 = gn(t2, n2, () => t2.createBuffer(), "Unable to create WebGLBuffer");
  return Ht(t2, n2, () => t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, e2)), Ht(t2, n2, () => t2.bufferData(t2.ELEMENT_ARRAY_BUFFER, r2, t2.STATIC_DRAW)), e2;
}
function sn(t2, n2) {
  return gn(t2, n2, () => t2.createTexture(), "Unable to create WebGLTexture.");
}
function un(t2, n2) {
  var r2 = o().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (0 >= t2 || 0 >= n2) {
    var e2 = "[" + t2 + "x" + n2 + "]";
    throw Error("Requested texture size " + e2 + " is invalid.");
  }
  if (t2 > r2 || n2 > r2) throw Error("Requested texture size " + (e2 = "[" + t2 + "x" + n2 + "]") + " greater than WebGL maximum on this browser / GPU [" + r2 + "x" + r2 + "].");
}
function cn(t2, n2) {
  return gn(t2, n2, () => t2.createFramebuffer(), "Unable to create WebGLFramebuffer.");
}
function ln(t2, n2, r2, e2, i2, o2, a2, s2) {
  var u2 = t2.getAttribLocation(r2, e2);
  return -1 !== u2 && (Ht(t2, n2, () => t2.bindBuffer(t2.ARRAY_BUFFER, i2)), Ht(t2, n2, () => t2.vertexAttribPointer(u2, o2, t2.FLOAT, false, a2, s2)), Ht(t2, n2, () => t2.enableVertexAttribArray(u2)), true);
}
function hn(t2, n2, r2, e2) {
  wn(t2, e2), Ht(t2, n2, () => t2.activeTexture(t2.TEXTURE0 + e2)), Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, r2));
}
function fn(t2, n2, r2, e2) {
  return gn(t2, n2, () => t2.getUniformLocation(r2, e2), 'uniform "' + e2 + '" not present in program.');
}
function dn(t2, n2, r2) {
  return t2.getUniformLocation(n2, r2);
}
function vn(t2, n2, r2, e2, i2, o2) {
  Ht(t2, n2, () => hn(t2, n2, e2, o2)), Ht(t2, n2, () => t2.uniform1i(i2, o2));
}
function pn(t2, n2, r2, e2) {
  Ht(t2, n2, () => t2.bindFramebuffer(t2.FRAMEBUFFER, e2)), Ht(t2, n2, () => t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, r2, 0));
}
function mn(t2, n2, r2) {
  Ht(t2, n2, () => t2.bindFramebuffer(t2.FRAMEBUFFER, r2)), Ht(t2, n2, () => t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, null, 0));
}
function xn(t2) {
  var n2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER);
  if (n2 !== t2.FRAMEBUFFER_COMPLETE) throw Error("Error binding framebuffer: " + bn(t2, n2));
}
function bn(t2, n2) {
  switch (n2) {
    case t2.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case t2.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case t2.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case t2.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    default:
      return "unknown error " + n2;
  }
}
function gn(t2, n2, r2, e2) {
  var i2 = Ht(t2, n2, () => r2());
  if (null == i2) throw Error(e2);
  return i2;
}
function wn(t2, n2) {
  var r2 = t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, e2 = n2 + t2.TEXTURE0;
  if (t2.TEXTURE0 > e2 || e2 > r2) throw Error("textureUnit must be in [gl.TEXTURE0, gl.TEXTURE" + r2 + "].");
}
function yn(t2, n2) {
  return void 0 === n2 && (n2 = 2), _(t2.slice(0, t2.length - n2));
}
function Cn(t2) {
  if (0 === t2.length) throw Error("Cannot get rows and columns of an empty shape array.");
  return [t2.length > 1 ? t2[t2.length - 2] : 1, t2[t2.length - 1]];
}
function _n(t2) {
  var n2 = [1, 1, 1];
  return 0 === t2.length || 1 === t2.length && 1 === t2[0] || (n2 = [yn(t2)].concat(Cn(t2))), n2;
}
function En(t2, n2) {
  var r2;
  void 0 === n2 && (n2 = false);
  var e2 = o().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (n2 && (e2 *= 2, 1 === (t2 = t2.map((n3, r3) => t2.length - 2 > r3 ? t2[r3] : x(t2[r3]))).length && (t2 = [2, t2[0]])), 2 !== t2.length) {
    var i2 = S(t2);
    t2 = i2.newShape;
  }
  var a2 = _(t2);
  if (1 >= t2.length && e2 >= a2) return [1, a2];
  if (2 === t2.length && e2 >= t2[0] && e2 >= t2[1]) return t2;
  if (3 === t2.length && e2 >= t2[0] * t2[1] && e2 >= t2[2]) return [t2[0] * t2[1], t2[2]];
  if (3 === t2.length && e2 >= t2[0] && e2 >= t2[1] * t2[2]) return [t2[0], t2[1] * t2[2]];
  if (4 === t2.length && e2 >= t2[0] * t2[1] * t2[2] && e2 >= t2[3]) return [t2[0] * t2[1] * t2[2], t2[3]];
  if (4 === t2.length && e2 >= t2[0] && e2 >= t2[1] * t2[2] * t2[3]) return [t2[0], t2[1] * t2[2] * t2[3]];
  if (n2) {
    var s2 = yn(t2), u2 = 2, c2 = 2;
    return t2.length && (u2 = (r2 = Cn(t2))[0], c2 = r2[1]), N(a2 = s2 * (u2 / 2) * (c2 / 2)).map((t3) => 2 * t3);
  }
  return N(a2);
}
function Rn(t2) {
  return t2 % 2 == 0;
}
function An(t2, n2) {
  if (E(t2 = t2.slice(-2), n2 = n2.slice(-2))) return true;
  if (!t2.length || !n2.length) return true;
  if (0 === t2[0] || 0 === t2[1] || 0 === n2[0] || 0 === n2[1]) return true;
  if (t2.length !== n2.length) {
    var r2 = t2.slice(-1)[0], e2 = n2.slice(-1)[0];
    if (r2 === e2) return true;
    if (Rn(r2) && Rn(e2) && (1 === t2[0] || 1 === n2[0])) return true;
  }
  return t2[1] === n2[1] && Rn(t2[0]) && Rn(n2[0]);
}
function Nn(t2) {
  if (null == Zt) {
    var n2 = zt(t2);
    Zt = n2.getParameter(n2.MAX_TEXTURE_SIZE);
  }
  return Zt;
}
function On(t2) {
  if (null == Qt) {
    var n2 = zt(t2);
    Qt = n2.getParameter(n2.MAX_TEXTURE_IMAGE_UNITS);
  }
  return Math.min(16, Qt);
}
function Mn(t2) {
  if (0 === t2) return 0;
  var n2 = zt(t2);
  return In(n2, "EXT_disjoint_timer_query_webgl2") && 2 === t2 ? 2 : In(n2, "EXT_disjoint_timer_query") ? 1 : 0;
}
function In(t2, n2) {
  return null != t2.getExtension(n2);
}
function Tn(t2) {
  try {
    if (null != zt(t2)) return true;
  } catch (n2) {
    return false;
  }
  return false;
}
function Sn(t2) {
  if (0 === t2) return false;
  var n2 = zt(t2);
  if (1 === t2) {
    if (!In(n2, "OES_texture_float")) return false;
  } else if (!In(n2, "EXT_color_buffer_float")) return false;
  return kn(n2);
}
function Dn(t2) {
  if (0 === t2) return false;
  var n2 = zt(t2);
  if (1 !== t2) {
    if (In(n2, "EXT_color_buffer_float")) return kn(n2);
    if (In(n2, "EXT_color_buffer_half_float")) {
      var r2 = n2.getExtension("EXT_color_buffer_half_float");
      return ((t3, n3) => {
        var r3 = qt(t3, n3), e2 = t3.createTexture();
        t3.bindTexture(t3.TEXTURE_2D, e2), t3.texImage2D(t3.TEXTURE_2D, 0, r3.internalFormatHalfFloat, 1, 1, 0, r3.textureFormatFloat, r3.textureTypeHalfFloat, null);
        var i2 = t3.createFramebuffer();
        t3.bindFramebuffer(t3.FRAMEBUFFER, i2), t3.framebufferTexture2D(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.TEXTURE_2D, e2, 0);
        var o2 = t3.checkFramebufferStatus(t3.FRAMEBUFFER) === t3.FRAMEBUFFER_COMPLETE;
        return t3.bindTexture(t3.TEXTURE_2D, null), t3.bindFramebuffer(t3.FRAMEBUFFER, null), t3.deleteTexture(e2), t3.deleteFramebuffer(i2), o2;
      })(n2, r2);
    }
    return false;
  }
  return !!In(n2, "OES_texture_float") && !!In(n2, "WEBGL_color_buffer_float") && kn(n2);
}
function kn(t2) {
  var n2 = qt(t2), r2 = t2.createTexture();
  t2.bindTexture(t2.TEXTURE_2D, r2), t2.texImage2D(t2.TEXTURE_2D, 0, n2.internalFormatFloat, 1, 1, 0, n2.textureFormatFloat, n2.textureTypeFloat, null);
  var e2 = t2.createFramebuffer();
  t2.bindFramebuffer(t2.FRAMEBUFFER, e2), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, r2, 0);
  var i2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER) === t2.FRAMEBUFFER_COMPLETE;
  return t2.bindTexture(t2.TEXTURE_2D, null), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteTexture(r2), t2.deleteFramebuffer(e2), i2;
}
function Pn(t2) {
  return 2 === t2 && null != zt(t2).fenceSync;
}
var Fn = Object.freeze({ callAndCheck: Ht, canBeRepresented: Xt, getWebGLErrorMessage: $t, getExtensionOrThrow: Kt, createVertexShader: Yt, createFragmentShader: Jt, createProgram: nn, linkProgram: rn, validateProgram: en, createStaticVertexBuffer: on, createStaticIndexBuffer: an, getNumChannels() {
  return 2 === o().getNumber("WEBGL_VERSION") ? 1 : 4;
}, createTexture: sn, validateTextureSize: un, createFramebuffer: cn, bindVertexBufferToProgramAttribute: ln, bindTextureUnit: hn, unbindTextureUnit(t2, n2, r2) {
  wn(t2, r2), Ht(t2, n2, () => t2.activeTexture(t2.TEXTURE0 + r2)), Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, null));
}, getProgramUniformLocationOrThrow: fn, getProgramUniformLocation: dn, bindTextureToProgramUniformSampler: vn, bindCanvasToFramebuffer(t2, n2) {
  Ht(t2, n2, () => t2.bindFramebuffer(t2.FRAMEBUFFER, null)), Ht(t2, n2, () => t2.viewport(0, 0, t2.canvas.width, t2.canvas.height)), Ht(t2, n2, () => t2.scissor(0, 0, t2.canvas.width, t2.canvas.height));
}, bindColorTextureToFramebuffer: pn, unbindColorTextureFromFramebuffer: mn, validateFramebuffer: xn, getFramebufferErrorMessage: bn, getBatchDim: yn, getRowsCols: Cn, getShapeAs3D: _n, getTextureShapeFromLogicalShape: En, isReshapeFree: An, getWebGLMaxTextureSize: Nn, resetMaxTextureSize() {
  Zt = null;
}, resetMaxTexturesInShader() {
  Qt = null;
}, getMaxTexturesInShader: On, getWebGLDisjointQueryTimerVersion: Mn, hasExtension: In, isWebGLVersionEnabled: Tn, isCapableOfRenderingToFloatTexture: Sn, isDownloadFloatTextureEnabled: Dn, isWebGLFenceEnabled: Pn });
var Ln = o();
function Bn(t2) {
  o().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t2 + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
}
function Vn(t2, n2) {
  return St.tidy(t2, n2);
}
function Wn(t2) {
  Nt(t2).forEach((t3) => t3.dispose());
}
function zn(t2) {
  return St.keep(t2);
}
function Gn() {
  for (var t2 = [], n2 = 0; arguments.length > n2; n2++) t2[n2] = arguments[n2];
  o().getBool("IS_TEST") || console.warn.apply(console, t2);
}
function Un(t2, n2) {
  var r2 = t2;
  if (B(t2)) return "string" === n2 ? [] : [t2.length];
  if (!Array.isArray(t2)) return [];
  for (var e2 = []; Array.isArray(r2) || B(r2) && "string" !== n2; ) e2.push(r2.length), r2 = r2[0];
  return Array.isArray(t2) && o().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && (function t3(n3, r3, e3) {
    if (e3 = e3 || [], Array.isArray(n3) || B(n3)) {
      g(r3.length > 0, () => "Element arr[" + e3.join("][") + "] should be a primitive, but is an array of " + n3.length + " elements"), g(n3.length === r3[0], () => "Element arr[" + e3.join("][") + "] should have " + r3[0] + " elements, but has " + n3.length + " elements");
      for (var i2 = r3.slice(1), o2 = 0; n3.length > o2; ++o2) t3(n3[o2], i2, e3.concat(o2));
    } else g(0 === r3.length, () => "Element arr[" + e3.join("][") + "] is a primitive, but should be an array/TypedArray of " + r3[0] + " elements");
  })(t2, e2, []), e2;
}
function jn(t2, n2, r2, e2) {
  if (null != t2 && ("numeric" !== t2 && t2 !== n2 || "numeric" === t2 && "string" === n2)) throw Error("Argument '" + r2 + "' passed to '" + e2 + "' must be " + t2 + " tensor, but got " + n2 + " tensor");
}
function qn(t2, n2, r2, e2) {
  if (void 0 === e2 && (e2 = "numeric"), t2 instanceof vt) return jn(e2, t2.dtype, n2, r2), t2;
  var i2 = j(t2);
  if ("string" !== i2 && ["bool", "int32", "float32"].indexOf(e2) >= 0 && (i2 = e2), jn(e2, i2, n2, r2), null == t2 || !B(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2) throw Error("Argument '" + n2 + "' passed to '" + r2 + "' must be a Tensor or TensorLike, but got '" + (null == t2 ? "null" : t2.constructor.name) + "'");
  var a2 = Un(t2, i2);
  B(t2) || Array.isArray(t2) || (t2 = [t2]);
  var s2 = "string" !== i2 ? $(t2, i2, o().getBool("DEBUG")) : C(t2, [], true);
  return St.makeTensor(s2, a2, i2);
}
function Hn(t2, n2, r2, e2) {
  if (void 0 === e2 && (e2 = "numeric"), !Array.isArray(t2)) throw Error("Argument " + n2 + " passed to " + r2 + " must be a `Tensor[]` or `TensorLike[]`");
  return t2.map((t3, e3) => qn(t3, n2 + "[" + e3 + "]", r2), e2);
}
function Xn(t2, n2) {
  for (var r2 = 0; t2.length > r2; ++r2) if (t2[t2.length - r2 - 1] !== n2 - 1 - r2) return false;
  return true;
}
function $n(t2, n2, r2) {
  for (var e2 = t2.length + n2.length, i2 = [], o2 = 0, a2 = 0, s2 = 0; e2 > s2; s2++) -1 === r2.indexOf(s2) ? i2.push(t2[o2++]) : i2.push(n2[a2++]);
  return i2;
}
function Kn(t2, n2) {
  for (var r2 = [], e2 = t2.length, i2 = 0; e2 > i2; i2++) -1 === n2.indexOf(i2) && r2.push(t2[i2]);
  return [r2, n2.map((n3) => t2[n3])];
}
function Yn(t2, n2) {
  return $n(t2, n2.map((t3) => 1), n2);
}
function Jn(t2, n2, r2) {
  g(Xn(n2, r2), () => t2 + " supports only inner-most axes for now. Got axes " + n2 + " and rank-" + r2 + " input.");
}
function Zn(t2, n2) {
  if (Xn(t2, n2)) return null;
  for (var r2 = [], e2 = 0; n2 > e2; ++e2) -1 === t2.indexOf(e2) && r2.push(e2);
  return t2.forEach((t3) => r2.push(t3)), r2;
}
function Qn(t2) {
  return t2.map((t3, n2) => [n2, t3]).sort((t3, n2) => t3[1] - n2[1]).map((t3) => t3[0]);
}
function tr(t2, n2) {
  for (var r2 = [], e2 = n2 - t2; n2 > e2; ++e2) r2.push(e2);
  return r2;
}
function nr(t2, n2) {
  var r2 = t2[0].length;
  t2.forEach((t3, n3) => {
    g(t3.length === r2, () => "Error in concat" + r2 + "D: rank of tensors[" + n3 + "] must be the same as the rank of the rest (" + r2 + ")");
  }), g(n2 >= 0 && r2 > n2, () => "Error in concat" + r2 + "D: axis must be between 0 and " + (r2 - 1) + ".");
  var e2 = t2[0];
  t2.forEach((t3, i2) => {
    for (var o2 = 0; r2 > o2; o2++) g(o2 === n2 || t3[o2] === e2[o2], () => "Error in concat" + r2 + "D: Shape of tensors[" + i2 + "] (" + t3 + ") does not match the shape of the rest (" + e2 + ") along the non-concatenated axis " + i2 + ".");
  });
}
function rr(t2, n2) {
  for (var r2 = t2[0].slice(), e2 = 1; t2.length > e2; e2++) r2[n2] += t2[e2][n2];
  return r2;
}
function er(t2) {
  var n2 = Object.keys(t2);
  if (1 !== n2.length) throw Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + n2.length + " keys.");
  var r2 = n2[0], e2 = t2[r2];
  r2.endsWith("_") && (r2 = r2.substring(0, r2.length - 1));
  var i2 = function() {
    for (var t3 = [], n3 = 0; arguments.length > n3; n3++) t3[n3] = arguments[n3];
    St.startScope(r2);
    try {
      var i3 = e2.apply(void 0, t3);
      return i3 instanceof Promise && console.error("Cannot return a Promise inside of tidy."), St.endScope(i3), i3;
    } catch (o2) {
      throw St.endScope(null), o2;
    }
  };
  return Object.defineProperty(i2, "name", { value: r2, configurable: true }), i2;
}
Ln.registerFlag("HAS_WEBGL", () => Ln.getNumber("WEBGL_VERSION") > 0), Ln.registerFlag("WEBGL_VERSION", () => Tn(2) ? 2 : Tn(1) ? 1 : 0), Ln.registerFlag("WEBGL_BUFFER_SUPPORTED", () => 2 === Ln.get("WEBGL_VERSION")), Ln.registerFlag("WEBGL_CPU_FORWARD", () => true), Ln.registerFlag("WEBGL_FORCE_F16_TEXTURES", () => false), Ln.registerFlag("WEBGL_PACK", () => Ln.getBool("HAS_WEBGL")), Ln.registerFlag("WEBGL_PACK_NORMALIZATION", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_CLIP", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_DEPTHWISECONV", () => false), Ln.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_PACK_REDUCE", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_LAZILY_UNPACK", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_CONV_IM2COL", () => Ln.getBool("WEBGL_PACK")), Ln.registerFlag("WEBGL_MAX_TEXTURE_SIZE", () => Nn(Ln.getNumber("WEBGL_VERSION"))), Ln.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", () => On(Ln.getNumber("WEBGL_VERSION"))), Ln.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", () => {
  var t2 = Ln.getNumber("WEBGL_VERSION");
  return 0 === t2 ? 0 : Mn(t2);
}), Ln.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", () => {
  return Ln.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && (t2 = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t2) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t2.substr(0, 4))));
  var t2;
}), Ln.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", () => Sn(Ln.getNumber("WEBGL_VERSION"))), Ln.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", () => !Ln.getBool("WEBGL_FORCE_F16_TEXTURES") && Ln.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")), Ln.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", () => Dn(Ln.getNumber("WEBGL_VERSION"))), Ln.registerFlag("WEBGL_FENCE_API_ENABLED", () => Pn(Ln.getNumber("WEBGL_VERSION"))), Ln.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", () => Ln.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0), dt = Bn;
var ir = er({ complex_(t2, n2) {
  var r2 = qn(t2, "real", "complex"), e2 = qn(n2, "imag", "complex");
  return w(r2.shape, e2.shape, "real and imag shapes, " + r2.shape + " and " + e2.shape + ", must match in call to tf.complex()."), St.runKernelFunc((t3) => t3.complex(r2, e2), { $real: r2, $imag: e2 });
} });
var or = er({ real_(t2) {
  var n2 = qn(t2, "input", "real");
  return St.runKernelFunc((t3) => t3.real(n2), { $input: n2 });
} });
var ar = er({ imag_(t2) {
  var n2 = qn(t2, "input", "imag");
  return St.runKernelFunc((t3) => t3.imag(n2), { $input: n2 });
} });
function sr(t2, n2, r2) {
  return ur(t2, n2, Un(t2, r2), r2);
}
function ur(t2, n2, r2, e2) {
  if (null == e2 && (e2 = j(t2)), "complex64" === e2) throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
  if (!B(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2) throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
  if (null != n2) {
    Q(n2);
    var i2 = _(n2), a2 = _(r2);
    g(i2 === a2, () => "Based on the provided shape, [" + n2 + "], the tensor should have " + i2 + " values but has " + a2);
    for (var s2 = 0; r2.length > s2; ++s2) {
      var u2 = s2 !== r2.length - 1 || r2[s2] !== _(n2.slice(s2));
      g(r2[s2] === n2[s2] || !u2, () => "Error creating a new Tensor. Inferred shape (" + r2 + ") does not match the provided shape (" + n2 + "). ");
    }
  }
  return B(t2) || Array.isArray(t2) || (t2 = [t2]), n2 = n2 || r2, t2 = "string" !== e2 ? $(t2, e2, o().getBool("DEBUG")) : C(t2, [], true), St.makeTensor(t2, n2, e2);
}
function cr(t2, n2) {
  if ((B(t2) && "string" !== n2 || Array.isArray(t2)) && "complex64" !== n2) throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
  if ("string" === n2 && B(t2) && !(t2 instanceof Uint8Array)) throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
  return ur(t2, [], [], n2);
}
function lr(t2, n2) {
  y(t2);
  var r2 = Un(t2, n2);
  if (1 !== r2.length) throw Error("tensor1d() requires values to be a flat/TypedArray");
  return ur(t2, null, r2, n2);
}
function hr(t2, n2, r2) {
  if (y(t2), null != n2 && 2 !== n2.length) throw Error("tensor2d() requires shape to have two numbers");
  var e2 = Un(t2, r2);
  if (2 !== e2.length && 1 !== e2.length) throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");
  if (1 === e2.length && null == n2) throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
  return ur(t2, n2, e2, r2);
}
function fr(t2, n2, r2) {
  if (y(t2), null != n2 && 3 !== n2.length) throw Error("tensor3d() requires shape to have three numbers");
  var e2 = Un(t2, r2);
  if (3 !== e2.length && 1 !== e2.length) throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
  if (1 === e2.length && null == n2) throw Error("tensor3d() requires shape to be provided when `values` are a flat array");
  return ur(t2, n2, e2, r2);
}
function dr(t2, n2, r2) {
  if (y(t2), null != n2 && 4 !== n2.length) throw Error("tensor4d() requires shape to have four numbers");
  var e2 = Un(t2, r2);
  if (4 !== e2.length && 1 !== e2.length) throw Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (1 === e2.length && null == n2) throw Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return ur(t2, n2, e2, r2);
}
function vr(t2, n2, r2) {
  if (y(t2), null != n2 && 5 !== n2.length) throw Error("tensor5d() requires shape to have five numbers");
  var e2 = Un(t2, r2);
  if (5 !== e2.length && 1 !== e2.length) throw Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (1 === e2.length && null == n2) throw Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return ur(t2, n2, e2, r2);
}
function pr(t2, n2, r2) {
  if (y(t2), null != n2 && 6 !== n2.length) throw Error("tensor6d() requires shape to have six numbers");
  var e2 = Un(t2, r2);
  if (6 !== e2.length && 1 !== e2.length) throw Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (1 === e2.length && null == n2) throw Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return ur(t2, n2 = n2 || e2, e2, r2);
}
function mr(t2, n2, r2, e2) {
  return void 0 === n2 && (n2 = true), St.makeVariable(t2, n2, r2, e2);
}
function xr(t2, n2) {
  if (void 0 === n2 && (n2 = "float32"), "complex64" === n2) {
    var r2 = xr(t2, "float32"), e2 = br(t2, "float32");
    return ir(r2, e2);
  }
  var i2 = Y(_(t2), n2);
  return St.makeTensor(i2, t2, n2);
}
function br(t2, n2) {
  if (void 0 === n2 && (n2 = "float32"), "complex64" === n2) {
    var r2 = br(t2, "float32"), e2 = br(t2, "float32");
    return ir(r2, e2);
  }
  var i2 = J(_(t2), n2);
  return St.makeTensor(i2, t2, n2);
}
function gr(t2, n2, r2) {
  return St.runKernelFunc((e2) => e2.fill(t2, n2, r2), {});
}
function wr(t2, n2, r2) {
  if (0 >= r2) throw Error("The number of values should be positive.");
  return St.runKernelFunc((e2) => e2.linspace(t2, n2, r2), {});
}
function yr(t2, n2, r2, e2) {
  if (void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = "float32"), 0 === r2) throw Error("Cannot have a step of zero");
  if (t2 === n2 || n2 > t2 && 0 > r2 || t2 > n2 && r2 > 1) return br([0], e2);
  var i2 = J(Math.abs(Math.ceil((n2 - t2) / r2)), e2);
  t2 > n2 && 1 === r2 && (r2 = -1), i2[0] = t2;
  for (var o2 = 1; i2.length > o2; o2++) i2[o2] = i2[o2 - 1] + r2;
  return lr(i2, e2);
}
var Cr = er({ onesLike_(t2) {
  var n2 = qn(t2, "x", "onesLike");
  if ("complex64" === n2.dtype) {
    var r2 = Cr(or(n2)), e2 = _r(ar(n2));
    return ir(r2, e2);
  }
  return St.runKernelFunc((t3) => t3.onesLike(n2), { $x: n2 }, (t3, n3) => ({ $x() {
    return _r(t3);
  } }));
} });
var _r = er({ zerosLike_(t2) {
  var n2 = qn(t2, "x", "zerosLike");
  return St.runKernelFunc((t3) => t3.zerosLike(n2), { $x: n2 }, (t3, n3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Er = er({ concat_(t2, n2) {
  void 0 === n2 && (n2 = 0), g(t2.length >= 1, () => "Pass at least one tensor to concat");
  var r2 = Hn(t2, "tensors", "concat");
  "complex64" === r2[0].dtype && r2.forEach((t3) => {
    if ("complex64" !== t3.dtype) throw Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + t3.dtype + ". ");
  }), n2 = T(n2, r2[0].shape)[0];
  var e2 = rr(r2.map((t3) => t3.shape), n2);
  if (0 === _(e2)) return sr([], e2);
  if (1 === (r2 = r2.filter((t3) => t3.size > 0)).length) return r2[0];
  var i2 = r2.map((t3) => t3.shape);
  return nr(i2, n2), St.runKernelFunc((t3) => t3.concat(r2, n2), r2, (t3) => {
    var r3 = i2.map((t4) => t4[n2]);
    return Mr(t3, r3, n2).map((t4) => () => t4);
  }, "Concat", { axis: n2 });
} });
var Rr = er({ concat1d_(t2) {
  return Er(t2, 0);
} });
var Ar = er({ concat2d_(t2, n2) {
  return Er(t2, n2);
} });
var Nr = er({ concat3d_(t2, n2) {
  return Er(t2, n2);
} });
var Or = er({ concat4d_(t2, n2) {
  return Er(t2, n2);
} });
var Mr = er({ split_(t2, n2, r2) {
  void 0 === r2 && (r2 = 0);
  var e2, i2 = qn(t2, "x", "split");
  return r2 = T(r2, i2.shape)[0], "number" == typeof n2 ? (g(i2.shape[r2] % n2 == 0, () => "Number of splits must evenly divide the axis."), e2 = Array(n2).fill(i2.shape[r2] / n2)) : (g(i2.shape[r2] === n2.reduce((t3, n3) => t3 + n3), () => "The sum of sizes must match the size of the axis dimension."), e2 = n2), St.runKernelFunc((t3) => t3.split(i2, e2, r2), { $x: i2 }, (t3) => ({ $x() {
    return Er(t3, r2);
  } }));
} });
function Ir(t2, n2) {
  return t2(n2 = { exports: {} }, n2.exports), n2.exports;
}
var Tr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3, r3 = this, e3 = (n3 = 4022871197, (t5) => {
        t5 = "" + t5;
        for (var r4 = 0; t5.length > r4; r4++) {
          var e4 = 0.02519603282416938 * (n3 += t5.charCodeAt(r4));
          e4 -= n3 = e4 >>> 0, n3 = (e4 *= n3) >>> 0, n3 += 4294967296 * (e4 -= n3);
        }
        return 23283064365386963e-26 * (n3 >>> 0);
      });
      r3.next = () => {
        var t5 = 2091639 * r3.s0 + 23283064365386963e-26 * r3.c;
        return r3.s0 = r3.s1, r3.s1 = r3.s2, r3.s2 = t5 - (r3.c = 0 | t5);
      }, r3.c = 1, r3.s0 = e3(" "), r3.s1 = e3(" "), r3.s2 = e3(" "), r3.s0 -= e3(t4), 0 > r3.s0 && (r3.s0 += 1), r3.s1 -= e3(t4), 0 > r3.s1 && (r3.s1 += 1), r3.s2 -= e3(t4), 0 > r3.s2 && (r3.s2 += 1), e3 = null;
    }
    function e2(t4, n3) {
      return n3.c = t4.c, n3.s0 = t4.s0, n3.s1 = t4.s1, n3.s2 = t4.s2, n3;
    }
    function i2(t4, n3) {
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = i3.next;
      return a2.int32 = () => 4294967296 * i3.next() | 0, a2.double = () => a2() + 11102230246251565e-32 * (2097152 * a2() | 0), a2.quick = a2, o2 && ("object" == typeof o2 && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.alea = i2;
  })(0, t2);
});
var Sr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3 = this, r3 = "";
      n3.x = 0, n3.y = 0, n3.z = 0, n3.w = 0, n3.next = () => {
        var t5 = n3.x ^ n3.x << 11;
        return n3.x = n3.y, n3.y = n3.z, n3.z = n3.w, n3.w ^= n3.w >>> 19 ^ t5 ^ t5 >>> 8;
      }, t4 === (0 | t4) ? n3.x = t4 : r3 += t4;
      for (var e3 = 0; r3.length + 64 > e3; e3++) n3.x ^= 0 | r3.charCodeAt(e3), n3.next();
    }
    function e2(t4, n3) {
      return n3.x = t4.x, n3.y = t4.y, n3.z = t4.z, n3.w = t4.w, n3;
    }
    function i2(t4, n3) {
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = () => (i3.next() >>> 0) / 4294967296;
      return a2.double = () => {
        do {
          var t5 = ((i3.next() >>> 11) + (i3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, a2.int32 = i3.next, a2.quick = a2, o2 && ("object" == typeof o2 && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.xor128 = i2;
  })(0, t2);
});
var Dr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3 = this, r3 = "";
      n3.next = () => {
        var t5 = n3.x ^ n3.x >>> 2;
        return n3.x = n3.y, n3.y = n3.z, n3.z = n3.w, n3.w = n3.v, (n3.d = n3.d + 362437 | 0) + (n3.v = n3.v ^ n3.v << 4 ^ t5 ^ t5 << 1) | 0;
      }, n3.x = 0, n3.y = 0, n3.z = 0, n3.w = 0, n3.v = 0, t4 === (0 | t4) ? n3.x = t4 : r3 += t4;
      for (var e3 = 0; r3.length + 64 > e3; e3++) n3.x ^= 0 | r3.charCodeAt(e3), e3 == r3.length && (n3.d = n3.x << 10 ^ n3.x >>> 4), n3.next();
    }
    function e2(t4, n3) {
      return n3.x = t4.x, n3.y = t4.y, n3.z = t4.z, n3.w = t4.w, n3.v = t4.v, n3.d = t4.d, n3;
    }
    function i2(t4, n3) {
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = () => (i3.next() >>> 0) / 4294967296;
      return a2.double = () => {
        do {
          var t5 = ((i3.next() >>> 11) + (i3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, a2.int32 = i3.next, a2.quick = a2, o2 && ("object" == typeof o2 && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.xorwow = i2;
  })(0, t2);
});
var kr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3 = this;
      n3.next = () => {
        var t5, r3, e3 = n3.x, i3 = n3.i;
        return t5 = e3[i3], r3 = (t5 ^= t5 >>> 7) ^ t5 << 24, r3 ^= (t5 = e3[i3 + 1 & 7]) ^ t5 >>> 10, r3 ^= (t5 = e3[i3 + 3 & 7]) ^ t5 >>> 3, r3 ^= (t5 = e3[i3 + 4 & 7]) ^ t5 << 7, t5 = e3[i3 + 7 & 7], r3 ^= (t5 ^= t5 << 13) ^ t5 << 9, e3[i3] = r3, n3.i = i3 + 1 & 7, r3;
      }, ((t5, n4) => {
        var r3, e3 = [];
        if (n4 === (0 | n4)) e3[0] = n4;
        else for (n4 = "" + n4, r3 = 0; n4.length > r3; ++r3) e3[7 & r3] = e3[7 & r3] << 15 ^ n4.charCodeAt(r3) + e3[r3 + 1 & 7] << 13;
        for (; 8 > e3.length; ) e3.push(0);
        for (r3 = 0; 8 > r3 && 0 === e3[r3]; ++r3) ;
        for (8 == r3 && (e3[7] = -1), t5.x = e3, t5.i = 0, r3 = 256; r3 > 0; --r3) t5.next();
      })(n3, t4);
    }
    function e2(t4, n3) {
      return n3.x = t4.x.slice(), n3.i = t4.i, n3;
    }
    function i2(t4, n3) {
      null == t4 && (t4 = +/* @__PURE__ */ new Date());
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = () => (i3.next() >>> 0) / 4294967296;
      return a2.double = () => {
        do {
          var t5 = ((i3.next() >>> 11) + (i3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, a2.int32 = i3.next, a2.quick = a2, o2 && (o2.x && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.xorshift7 = i2;
  })(0, t2);
});
var Pr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3 = this;
      n3.next = () => {
        var t5, r3, e3 = n3.w, i3 = n3.X, o2 = n3.i;
        return n3.w = e3 = e3 + 1640531527 | 0, r3 = i3[o2 + 34 & 127], t5 = i3[o2 = o2 + 1 & 127], r3 ^= r3 << 13, t5 ^= t5 << 17, r3 = i3[o2] = (r3 ^= r3 >>> 15) ^ (t5 ^= t5 >>> 12), n3.i = o2, r3 + (e3 ^ e3 >>> 16) | 0;
      }, ((t5, n4) => {
        var r3, e3, i3, o2, a2, s2 = [], u2 = 128;
        for (n4 === (0 | n4) ? (e3 = n4, n4 = null) : (e3 = 0, u2 = Math.max(u2, (n4 += "\0").length)), i3 = 0, o2 = -32; u2 > o2; ++o2) n4 && (e3 ^= n4.charCodeAt((o2 + 32) % n4.length)), 0 === o2 && (a2 = e3), e3 ^= e3 << 10, e3 ^= e3 >>> 15, e3 ^= e3 << 4, e3 ^= e3 >>> 13, o2 >= 0 && (i3 = 0 == (r3 = s2[127 & o2] ^= e3 + (a2 = a2 + 1640531527 | 0)) ? i3 + 1 : 0);
        for (i3 >= 128 && (s2[127 & (n4 && n4.length || 0)] = -1), i3 = 127, o2 = 512; o2 > 0; --o2) e3 = s2[i3 + 34 & 127], r3 = s2[i3 = i3 + 1 & 127], e3 ^= e3 << 13, r3 ^= r3 << 17, s2[i3] = (e3 ^= e3 >>> 15) ^ (r3 ^= r3 >>> 12);
        t5.w = a2, t5.X = s2, t5.i = i3;
      })(n3, t4);
    }
    function e2(t4, n3) {
      return n3.i = t4.i, n3.w = t4.w, n3.X = t4.X.slice(), n3;
    }
    function i2(t4, n3) {
      null == t4 && (t4 = +/* @__PURE__ */ new Date());
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = () => (i3.next() >>> 0) / 4294967296;
      return a2.double = () => {
        do {
          var t5 = ((i3.next() >>> 11) + (i3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, a2.int32 = i3.next, a2.quick = a2, o2 && (o2.X && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.xor4096 = i2;
  })(0, t2);
});
var Fr = Ir(function(t2) {
  !(function(t3, n2) {
    function r2(t4) {
      var n3 = this, r3 = "";
      n3.next = () => {
        var t5 = n3.b, r4 = n3.c, e4 = n3.d, i3 = n3.a;
        return t5 = t5 << 25 ^ t5 >>> 7 ^ r4, r4 = r4 - e4 | 0, e4 = e4 << 24 ^ e4 >>> 8 ^ i3, i3 = i3 - t5 | 0, n3.b = t5 = t5 << 20 ^ t5 >>> 12 ^ r4, n3.c = r4 = r4 - e4 | 0, n3.d = e4 << 16 ^ r4 >>> 16 ^ i3, n3.a = i3 - t5 | 0;
      }, n3.a = 0, n3.b = 0, n3.c = -1640531527, n3.d = 1367130551, t4 === Math.floor(t4) ? (n3.a = t4 / 4294967296 | 0, n3.b = 0 | t4) : r3 += t4;
      for (var e3 = 0; r3.length + 20 > e3; e3++) n3.b ^= 0 | r3.charCodeAt(e3), n3.next();
    }
    function e2(t4, n3) {
      return n3.a = t4.a, n3.b = t4.b, n3.c = t4.c, n3.d = t4.d, n3;
    }
    function i2(t4, n3) {
      var i3 = new r2(t4), o2 = n3 && n3.state, a2 = () => (i3.next() >>> 0) / 4294967296;
      return a2.double = () => {
        do {
          var t5 = ((i3.next() >>> 11) + (i3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, a2.int32 = i3.next, a2.quick = a2, o2 && ("object" == typeof o2 && e2(o2, i3), a2.state = () => e2(i3, {})), a2;
    }
    n2 && n2.exports ? n2.exports = i2 : this.tychei = i2;
  })(0, t2);
});
var Lr = Ir(function(t2) {
  !(function(n2, r2) {
    var e2, i2 = this, o2 = 256, a2 = "random", s2 = r2.pow(o2, 6), u2 = r2.pow(2, 52), c2 = 2 * u2, l2 = 255;
    function h2(t3, l3, h3) {
      var m2 = [], x2 = v2((function t4(n3, r3) {
        var e3, i3 = [], o3 = typeof n3;
        if (r3 && "object" == o3) for (e3 in n3) try {
          i3.push(t4(n3[e3], r3 - 1));
        } catch (a3) {
        }
        return i3.length ? i3 : "string" == o3 ? n3 : n3 + "\0";
      })((l3 = 1 == l3 ? { entropy: true } : l3 || {}).entropy ? [t3, p2(n2)] : t3 ?? (() => {
        try {
          var t4;
          return e2 && (t4 = e2.randomBytes) ? t4 = t4(o2) : (t4 = new Uint8Array(o2), (i2.crypto || i2.msCrypto).getRandomValues(t4)), p2(t4);
        } catch (s3) {
          var r3 = i2.navigator, a3 = r3 && r3.plugins;
          return [+/* @__PURE__ */ new Date(), i2, a3, i2.screen, p2(n2)];
        }
      })(), 3), m2), b2 = new f2(m2), g2 = () => {
        for (var t4 = b2.g(6), n3 = s2, r3 = 0; u2 > t4; ) t4 = (t4 + r3) * o2, n3 *= o2, r3 = b2.g(1);
        for (; t4 >= c2; ) t4 /= 2, n3 /= 2, r3 >>>= 1;
        return (t4 + r3) / n3;
      };
      return g2.int32 = () => 0 | b2.g(4), g2.quick = () => b2.g(4) / 4294967296, g2.double = g2, v2(p2(b2.S), n2), (l3.pass || h3 || ((t4, n3, e3, i3) => (i3 && (i3.S && d2(i3, b2), t4.state = () => d2(b2, {})), e3 ? (r2[a2] = t4, n3) : t4)))(g2, x2, "global" in l3 ? l3.global : this == r2, l3.state);
    }
    function f2(t3) {
      var n3, r3 = t3.length, e3 = this, i3 = 0, a3 = e3.i = e3.j = 0, s3 = e3.S = [];
      for (r3 || (t3 = [r3++]); o2 > i3; ) s3[i3] = i3++;
      for (i3 = 0; o2 > i3; i3++) s3[i3] = s3[a3 = l2 & a3 + t3[i3 % r3] + (n3 = s3[i3])], s3[a3] = n3;
      (e3.g = (t4) => {
        for (var n4, r4 = 0, i4 = e3.i, a4 = e3.j, s4 = e3.S; t4--; ) n4 = s4[i4 = l2 & i4 + 1], r4 = r4 * o2 + s4[l2 & (s4[i4] = s4[a4 = l2 & a4 + n4]) + (s4[a4] = n4)];
        return e3.i = i4, e3.j = a4, r4;
      })(o2);
    }
    function d2(t3, n3) {
      return n3.i = t3.i, n3.j = t3.j, n3.S = t3.S.slice(), n3;
    }
    function v2(t3, n3) {
      for (var r3, e3 = t3 + "", i3 = 0; e3.length > i3; ) n3[l2 & i3] = l2 & (r3 ^= 19 * n3[l2 & i3]) + e3.charCodeAt(i3++);
      return p2(n3);
    }
    function p2(t3) {
      return String.fromCharCode.apply(0, t3);
    }
    if (r2["seed" + a2] = h2, v2(r2.random(), n2), t2.exports) {
      t2.exports = h2;
      try {
        e2 = require_crypto();
      } catch (m2) {
      }
    }
  })([], Math);
});
Lr.alea = Tr, Lr.xor128 = Sr, Lr.xorwow = Dr, Lr.xorshift7 = kr, Lr.xor4096 = Pr, Lr.tychei = Fr;
var Br = Lr.alea;
var Vr = (function() {
  function t2(t3, n2, r2, e2, i2) {
    this.mean = t3, this.stdDev = n2, this.dtype = r2, this.nextVal = NaN, this.truncated = e2, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
    var o2 = i2 || Math.random();
    this.random = Br("" + o2);
  }
  return t2.prototype.nextValue = function() {
    if (!isNaN(this.nextVal)) {
      var t3 = this.nextVal;
      return this.nextVal = NaN, t3;
    }
    for (var n2, r2, e2 = false; !e2; ) {
      var i2 = void 0, o2 = void 0, a2 = void 0;
      do {
        a2 = (i2 = 2 * this.random() - 1) * i2 + (o2 = 2 * this.random() - 1) * o2;
      } while (a2 >= 1 || 0 === a2);
      var s2 = Math.sqrt(-2 * Math.log(a2) / a2);
      n2 = this.mean + this.stdDev * i2 * s2, r2 = this.mean + this.stdDev * o2 * s2, this.truncated && !this.isValidTruncated(n2) || (e2 = true);
    }
    return this.truncated && !this.isValidTruncated(r2) || (this.nextVal = this.convertValue(r2)), this.convertValue(n2);
  }, t2.prototype.convertValue = function(t3) {
    return null == this.dtype || "float32" === this.dtype ? t3 : Math.round(t3);
  }, t2.prototype.isValidTruncated = function(t3) {
    return this.upper >= t3 && t3 >= this.lower;
  }, t2;
})();
var Wr = (function() {
  function t2(t3, n2, r2, e2) {
    this.alpha = t3, this.beta = 1 / n2, this.dtype = r2;
    var i2 = e2 || Math.random();
    this.randu = Br("" + i2), this.randn = new Vr(0, 1, r2, false, this.randu()), this.d = 1 > t3 ? t3 + 2 / 3 : t3 - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d);
  }
  return t2.prototype.nextValue = function() {
    for (var t3, n2, r2, e2, i2, o2; ; ) {
      do {
        e2 = this.randn.nextValue(), o2 = 1 + this.c * e2;
      } while (0 >= o2);
      if (n2 = 1 - 0.331 * (t3 = e2 * e2) * t3, r2 = 0.5 * t3 + this.d * (1 - (o2 *= o2 * o2) + Math.log(o2)), (i2 = this.randu()) < n2 || r2 > Math.log(i2)) break;
    }
    return o2 *= 1 / this.beta * this.d, 1 > this.alpha && (o2 *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(o2);
  }, t2.prototype.convertValue = function(t3) {
    return "float32" === this.dtype ? t3 : Math.round(t3);
  }, t2;
})();
var zr = (function() {
  function t2(t3, n2, r2, e2) {
    var i2 = this;
    if (void 0 === t3 && (t3 = 0), void 0 === n2 && (n2 = 1), this.canReturnFloat = () => null == i2.dtype || "float32" === i2.dtype, this.min = t3, this.range = n2 - t3, this.dtype = r2, null == e2 && (e2 = Math.random()), "number" == typeof e2 && (e2 = "" + e2), !this.canReturnFloat() && 1 >= this.range) throw Error("The difference between " + t3 + " - " + n2 + " <= 1 and dtype is not float");
    this.random = Br(e2);
  }
  return t2.prototype.convertValue = function(t3) {
    return this.canReturnFloat() ? t3 : Math.round(t3);
  }, t2.prototype.nextValue = function() {
    return this.convertValue(this.min + this.range * this.random());
  }, t2;
})();
function Gr(t2, n2, r2) {
  return void 0 === n2 && (n2 = "float32"), n2 = n2 || "float32", Q(t2), new lt(t2, n2, r2);
}
function Ur(t2, n2) {
  void 0 === n2 && (n2 = false), console.log(t2.toString(n2));
}
var jr = er({ batchToSpaceND_(t2, n2, r2) {
  var e2 = qn(t2, "x", "batchToSpaceND"), i2 = n2.reduce((t3, n3) => t3 * n3);
  return g(e2.rank >= 1 + n2.length, () => "input rank is " + e2.rank + " but should be > than blockShape.length " + n2.length), g(r2.length === n2.length, () => "crops.length is " + r2.length + " but should be equal to blockShape.length  " + n2.length), g(e2.shape[0] % i2 == 0, () => "input tensor batch is " + e2.shape[0] + " but is not divisible by the product of the elements of blockShape " + n2.join(" * ") + " === " + i2), St.runKernelFunc((t3) => t3.batchToSpaceND(e2, n2, r2), { $x: e2 }, (t3) => ({ $x() {
    return t3.spaceToBatchND(n2, r2);
  } }));
} });
var qr = er({ broadcastTo_(t2, n2) {
  var r2 = qn(t2, "broadcastTo", "x"), e2 = r2.shape;
  if (n2.some((t3) => !(t3 > 0) || t3 % 1 != 0)) throw Error("broadcastTo(): Invalid broadcast shape [" + n2 + "].");
  if (r2.rank > n2.length) throw Error("broadcastTo(): shape.length=" + n2.length + " < input.rank=" + r2.rank + ".");
  if (n2.length > r2.rank) {
    for (var i2 = r2.shape.slice(); n2.length > i2.length; ) i2.unshift(1);
    r2 = r2.reshape(i2);
  }
  for (var o2 = Array.from(n2), a2 = n2.length - 1; a2 >= 0; a2--) if (r2.shape[a2] === n2[a2]) o2[a2] = 1;
  else if (1 !== r2.shape[a2]) throw Error("broadcastTo(): [" + e2 + "] cannot be broadcast to [" + n2 + "].");
  var s2 = o2.map((t3, n3) => t3 > 1 ? n3 : -1).filter((t3) => t3 >= 0);
  return 0 === s2.length ? r2.clone() : St.runKernelFunc((t3) => t3.tile(r2, o2), { input: r2 }, (t3) => ({ input() {
    return t3.sum(s2, true);
  } }));
} });
var Hr = er({ cast_(t2, n2) {
  var r2 = qn(t2, "x", "cast");
  if (!F(n2)) throw Error("Failed to cast to unknown dtype " + n2);
  if ("string" === n2 && "string" !== r2.dtype || "string" !== n2 && "string" === r2.dtype) throw Error("Only strings can be casted to strings");
  return St.runKernelFunc((t3) => t3.cast(r2, n2), { x: r2 }, (t3) => ({ x() {
    return t3.clone();
  } }), "Cast", { dtype: n2 });
} });
var Xr = er({ clone_(t2) {
  var n2 = qn(t2, "x", "clone", null);
  return St.runKernelFunc(() => St.makeTensorFromDataId(n2.dataId, n2.shape, n2.dtype), { $x: n2 }, (t3) => ({ $x() {
    return t3.toFloat();
  } }));
} });
var $r = er({ cumsum_(t2, n2, r2, e2) {
  void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = false), void 0 === e2 && (e2 = false);
  var i2 = qn(t2, "x", "cumsum"), o2 = Zn([n2 |= 0], i2.rank), a2 = i2;
  null != o2 && (a2 = i2.transpose(o2));
  var s2 = tr(1, i2.rank)[0], u2 = St.runKernelFunc((t3) => t3.cumsum(a2, s2, r2, e2), { permutedX: a2 }, (t3) => ({ permutedX() {
    return t3.cumsum(n2, r2, !e2);
  } }));
  return null != o2 && (u2 = u2.transpose(o2)), u2;
} });
var Kr = er({ depthToSpace_(t2, n2, r2) {
  void 0 === r2 && (r2 = "NHWC");
  var e2 = qn(t2, "x", "depthToSpace"), i2 = "NHWC" === r2 ? e2.shape[1] : e2.shape[2], o2 = "NHWC" === r2 ? e2.shape[2] : e2.shape[3], a2 = "NHWC" === r2 ? e2.shape[3] : e2.shape[1];
  return g(i2 * n2 >= 0, () => "Negative dimension size caused by overflow when multiplying\n      " + i2 + " and " + n2 + "  for depthToSpace with input shape\n      " + e2.shape), g(o2 * n2 >= 0, () => "Negative dimension size caused by overflow when multiplying\n      " + o2 + " and " + n2 + " for depthToSpace with input shape\n          " + e2.shape), g(a2 % (n2 * n2) == 0, () => "Dimension size must be evenly divisible by " + n2 * n2 + " but is " + a2 + " for depthToSpace with input shape " + e2.shape), St.runKernelFunc((t3) => t3.depthToSpace(e2, n2, r2), { $x: e2 });
} });
var Yr = er({ expandDims_(t2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = qn(t2, "x", "expandDims", null);
  g(r2.rank >= n2, () => "Axis must be <= rank of the tensor");
  var e2 = r2.shape.slice();
  return 0 > n2 && (g(n2 >= -(r2.rank + 1), () => "Axis must be in the interval [" + -(r2.rank + 1) + ", " + r2.rank + "]"), n2 = r2.rank + n2 + 1), e2.splice(n2, 0, 1), ce(r2, e2);
} });
var Jr = er({ eye_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = "float32"), null == n2 && (n2 = t2);
  for (var i2 = Gr([t2, n2], e2), o2 = t2 > n2 ? n2 : t2, a2 = 0; o2 > a2; ++a2) i2.set(1, a2, a2);
  var s2 = i2.toTensor().as2D(t2, n2);
  if (null == r2) return s2;
  if (1 === r2.length) return de(Yr(s2, 0), [r2[0], 1, 1]);
  if (2 === r2.length) return de(Yr(Yr(s2, 0), 0), [r2[0], r2[1], 1, 1]);
  if (3 === r2.length) return de(Yr(Yr(Yr(s2, 0), 0), 0), [r2[0], r2[1], r2[2], 1, 1]);
  throw Error("eye() currently supports only 1D and 2D batchShapes, but received " + r2.length + "D.");
} });
var Zr = er({ multinomial_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = false);
  var i2 = qn(t2, "logits", "multinomial"), o2 = i2.size, a2 = i2.rank;
  if (2 > o2) throw Error("Error in multinomial: you need at least 2 outcomes, but got " + o2 + ".");
  if (a2 > 2) throw Error("Rank of probabilities must be 1 or 2, but is " + a2);
  r2 = r2 || Math.random();
  var s2 = 1 === a2 ? i2.as2D(1, -1) : i2, u2 = St.runKernelFunc((t3) => t3.multinomial(s2, e2, n2, r2), { logits2D: s2 });
  return 1 === a2 ? u2.as1D() : u2;
} });
var Qr = er({ oneHot_(t2, n2, r2, e2) {
  if (void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = 0), 2 > n2) throw Error("Error in oneHot: depth must be >=2, but it is " + n2);
  var i2 = qn(t2, "indices", "oneHot", "int32"), o2 = i2.shape.concat([n2]);
  return i2 = i2.flatten(), St.runKernelFunc((t3) => t3.oneHot(i2, n2, r2, e2), { $indices: i2 }, (t3) => ({ $indices() {
    return br(i2.shape, "float32");
  } })).reshape(o2);
} });
var te = er({ pad_(t2, n2, r2) {
  void 0 === r2 && (r2 = 0);
  var e2 = qn(t2, "x", "pad");
  if (0 === e2.rank) throw Error("pad(scalar) is not defined. Pass non-scalar to pad");
  return St.runKernelFunc((t3) => t3.pad(e2, n2, r2), { x: e2 }, (t3) => {
    var r3 = n2.map((t4) => t4[0]);
    return { x() {
      return t3.slice(r3, e2.shape);
    } };
  }, "PadV2", { paddings: n2, constantValue: r2 });
} });
var ne = er({ pad1d_(t2, n2, r2) {
  return void 0 === r2 && (r2 = 0), g(2 === n2.length, () => "Invalid number of paddings. Must be length of 2."), te(t2, [n2], r2);
} });
var re = er({ pad2d_(t2, n2, r2) {
  return void 0 === r2 && (r2 = 0), g(2 === n2.length && 2 === n2[0].length && 2 === n2[1].length, () => "Invalid number of paddings. Must be length of 2 each."), te(t2, n2, r2);
} });
var ee = er({ pad3d_(t2, n2, r2) {
  return void 0 === r2 && (r2 = 0), g(3 === n2.length && 2 === n2[0].length && 2 === n2[1].length && 2 === n2[2].length, () => "Invalid number of paddings. Must be length of 2 each."), te(t2, n2, r2);
} });
var ie = er({ pad4d_(t2, n2, r2) {
  return void 0 === r2 && (r2 = 0), g(4 === n2.length && 2 === n2[0].length && 2 === n2[1].length && 2 === n2[2].length && 2 === n2[3].length, () => "Invalid number of paddings. Must be length of 2 each."), te(t2, n2, r2);
} });
var oe = er({ rand_(t2, n2, r2) {
  var e2 = _(t2), i2 = null;
  if (null == r2 || "float32" === r2) i2 = new Float32Array(e2);
  else if ("int32" === r2) i2 = new Int32Array(e2);
  else {
    if ("bool" !== r2) throw Error("Unknown data type " + r2);
    i2 = new Uint8Array(e2);
  }
  for (var o2 = 0; e2 > o2; o2++) i2[o2] = n2();
  return St.makeTensor(i2, t2, r2);
} });
var ae = er({ randomNormal_(t2, n2, r2, e2, i2) {
  if (void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = 1), null != e2 && "bool" === e2) throw Error("Unsupported data type " + e2);
  for (var o2 = new Vr(n2, r2, e2, false, i2), a2 = Gr(t2, e2), s2 = 0; a2.values.length > s2; s2++) a2.values[s2] = o2.nextValue();
  return a2.toTensor();
} });
var se = er({ randomGamma_(t2, n2, r2, e2, i2) {
  if (void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = "float32"), null == r2 && (r2 = 1), null == e2 && (e2 = "float32"), "float32" !== e2 && "int32" !== e2) throw Error("Unsupported data type " + e2);
  for (var o2 = new Wr(n2, r2, e2, i2), a2 = Gr(t2, e2), s2 = 0; a2.values.length > s2; s2++) a2.values[s2] = o2.nextValue();
  return a2.toTensor();
} });
var ue = er({ randomUniform_(t2, n2, r2, e2, i2) {
  void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = "float32");
  for (var o2 = Gr(t2, e2), a2 = new zr(n2, r2, null, i2), s2 = 0; o2.values.length > s2; s2++) o2.values[s2] = a2.nextValue();
  return o2.toTensor();
} });
var ce = er({ reshape_(t2, n2) {
  var r2 = qn(t2, "x", "reshape", null);
  return n2 = I(n2, r2.size), g(r2.size === _(n2), () => "new shape and old shape must have the same number of elements."), St.runKernelFunc((t3) => t3.reshape(r2, n2), { x: r2 }, (t3) => ({ x() {
    return t3.reshape(r2.shape);
  } }), "Reshape", { shape: n2 });
} });
var le = er({ spaceToBatchND_(t2, n2, r2) {
  var e2 = qn(t2, "x", "spaceToBatchND");
  return g(e2.rank >= 1 + n2.length, () => "input rank " + e2.rank + " should be > than [blockShape] " + n2.length), g(r2.length === n2.length, () => "paddings.shape[0] " + r2.length + " must be equal to [blockShape] " + n2.length), g(e2.shape.reduce((t3, e3, i2) => i2 > 0 && n2.length >= i2 ? t3 && (e3 + r2[i2 - 1][0] + r2[i2 - 1][1]) % n2[i2 - 1] == 0 : t3, true), () => "input spatial dimensions " + e2.shape.slice(1) + " with paddings " + r2 + " must be divisible by blockShapes " + n2), St.runKernelFunc((t3) => t3.spaceToBatchND(e2, n2, r2), { $x: e2 }, (t3) => ({ $x() {
    return t3.batchToSpaceND(n2, r2);
  } }));
} });
var he = er({ squeeze_(t2, n2) {
  var r2 = qn(t2, "x", "squeeze");
  return ce(r2, S(r2.shape, n2).newShape);
} });
var fe = er({ stack_(t2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = Hn(t2, "tensors", "stack");
  if (g(r2.length >= 1, () => "Pass at least one tensor to tf.stack"), 1 === r2.length) return r2[0].expandDims(n2);
  var e2 = r2[0].shape, i2 = r2[0].dtype;
  g(r2[0].rank >= n2, () => "Axis must be <= rank of the tensor"), r2.forEach((t3) => {
    w(e2, t3.shape, "All tensors passed to stack must have matching shapes");
  }), r2.forEach((t3) => {
    g(i2 === t3.dtype, () => "All tensors passed to stack must have matching dtypes");
  });
  var o2 = r2.map((t3) => t3.expandDims(n2));
  return Er(o2, n2);
} });
var de = er({ tile_(t2, n2) {
  var r2 = qn(t2, "x", "tile", null);
  return g(r2.rank === n2.length, () => "Error in transpose: rank of input " + r2.rank + " must match length of reps " + n2 + "."), St.runKernelFunc((t3, e2) => {
    var i2 = t3.tile(r2, n2);
    return e2([r2]), i2;
  }, { x: r2 }, (t3, r3) => {
    var e2 = r3[0];
    return { x() {
      var r4 = _r(e2);
      if (1 === e2.rank) for (var i2 = 0; n2[0] > i2; ++i2) r4 = r4.add(t3.slice([i2 * e2.shape[0]], [e2.shape[0]]));
      else if (2 === e2.rank) for (i2 = 0; n2[0] > i2; ++i2) for (var o2 = 0; n2[1] > o2; ++o2) r4 = r4.add(t3.slice([i2 * e2.shape[0], o2 * e2.shape[1]], [e2.shape[0], e2.shape[1]]));
      else if (3 === e2.rank) for (i2 = 0; n2[0] > i2; ++i2) for (o2 = 0; n2[1] > o2; ++o2) for (var a2 = 0; n2[2] > a2; ++a2) r4 = r4.add(t3.slice([i2 * e2.shape[0], o2 * e2.shape[1], a2 * e2.shape[2]], [e2.shape[0], e2.shape[1], e2.shape[2]]));
      else {
        if (4 !== e2.rank) throw Error("Gradient for tile operation is not implemented for rank-" + e2.rank + " tensors yet.");
        for (i2 = 0; n2[0] > i2; ++i2) for (o2 = 0; n2[1] > o2; ++o2) for (a2 = 0; n2[2] > a2; ++a2) for (var s2 = 0; n2[3] > s2; ++s2) r4 = r4.add(t3.slice([i2 * e2.shape[0], o2 * e2.shape[1], a2 * e2.shape[2], s2 * e2.shape[3]], [e2.shape[0], e2.shape[1], e2.shape[2], e2.shape[3]]));
      }
      return r4;
    } };
  }, "Tile", { reps: n2 }, [r2]);
} });
var ve = er({ truncatedNormal_(t2, n2, r2, e2, i2) {
  if (void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = 1), null != e2 && "bool" === e2) throw Error("Unsupported data type " + e2);
  for (var o2 = new Vr(n2, r2, e2, true, i2), a2 = Gr(t2, e2), s2 = 0; a2.values.length > s2; s2++) a2.values[s2] = o2.nextValue();
  return a2.toTensor();
} });
var pe = er({ unstack_(t2, n2) {
  void 0 === n2 && (n2 = 0), n2 = n2 || 0;
  var r2 = qn(t2, "x", "unstack");
  return g(n2 >= -r2.shape.length && r2.shape.length > n2, () => "Axis = " + n2 + " is not in [-" + r2.shape.length + ", " + r2.shape.length + ")"), 0 > n2 && (n2 += r2.shape.length), St.runKernelFunc((t3) => t3.unstack(r2, n2), { x: r2 }, (t3) => ({ x() {
    return fe(t3, n2);
  } }), "Unpack", { axis: n2 });
} });
var me = function(t2, n2) {
  return r(this, 0, void 0, function() {
    var r2, i2, o2, a2, s2, u2, c2, l2, h2, f2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return r2 = qn(t2, "x", "setdiff1d"), i2 = qn(n2, "y", "setdiff1d"), g(r2.dtype === i2.dtype, () => "x and y should have the same dtype, but got x (" + r2.dtype + ") and y (" + i2.dtype + ")."), g(1 === r2.rank, () => "x should be 1D tensor, but got x (" + r2.shape + ")."), g(1 === i2.rank, () => "y should be 1D tensor, but got y (" + i2.shape + ")."), [4, r2.data()];
        case 1:
          return o2 = e2.sent(), [4, i2.data()];
        case 2:
          for (a2 = e2.sent(), s2 = new Set(a2), u2 = 0, h2 = 0; o2.length > h2; h2++) s2.has(o2[h2]) || u2++;
          for (c2 = new lt([u2], r2.dtype), l2 = new lt([u2], "int32"), h2 = 0, f2 = 0; o2.length > h2; h2++) s2.has(o2[h2]) || (c2.values[f2] = o2[h2], l2.values[f2] = h2, f2++);
          return [2, [c2.toTensor(), l2.toTensor()]];
      }
    });
  });
};
function xe(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = true);
  var i2 = [];
  if (e2) (i2 = i2.concat(n2.slice(0))).push(t2[0] / r2), i2 = i2.concat(t2.slice(1));
  else {
    i2 = i2.concat(t2[0]);
    for (var o2 = n2.length, a2 = 0; o2 > a2; ++a2) i2 = i2.concat([t2[a2 + 1] / n2[a2], n2[a2]]);
    i2 = i2.concat(t2.slice(o2 + 1));
  }
  return i2;
}
function be(t2, n2, r2) {
  void 0 === r2 && (r2 = true);
  var e2 = [];
  if (r2) {
    e2.push(n2);
    for (var i2 = n2 + 1; t2 > i2; ++i2) i2 > 2 * n2 ? e2.push(i2) : (e2.push(i2), e2.push(i2 - (n2 + 1)));
  } else {
    var o2 = [], a2 = [];
    for (i2 = 1; t2 > i2; ++i2) 2 * n2 + 1 > i2 && i2 % 2 != 1 ? o2.push(i2) : a2.push(i2);
    e2.push.apply(e2, o2), e2.push(0), e2.push.apply(e2, a2);
  }
  return e2;
}
function ge(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = true);
  var i2 = [];
  i2.push(e2 ? t2[0] / r2 : t2[0] * r2);
  for (var o2 = 1; t2.length > o2; ++o2) i2.push(o2 > n2.length ? t2[o2] : e2 ? n2[o2 - 1] * t2[o2] : t2[o2] / n2[o2 - 1]);
  return i2;
}
function we(t2, n2) {
  for (var r2 = [0], e2 = 0; n2 > e2; ++e2) r2.push(t2[e2][0]);
  return r2;
}
function ye(t2, n2, r2) {
  for (var e2 = t2.slice(0, 1), i2 = 0; r2 > i2; ++i2) e2.push(t2[i2 + 1] - n2[i2][0] - n2[i2][1]);
  return e2;
}
function Ce(t2, n2) {
  if (1 > t2.rank) throw Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t2.rank + ".");
  if (1 > n2.rank) throw Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + n2.rank + ".");
  if ("int32" !== n2.dtype) throw Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + n2.dtype + ".");
  if (n2.shape[n2.rank - 1] > t2.rank) throw Error("index innermost dimension length must be <= tensor rank; saw: " + n2.shape[n2.rank - 1] + " vs. " + t2.rank);
  if (0 === t2.size) throw Error("Requested more than 0 entries, but input is empty. Input shape: " + t2.shape + ".");
  for (var r2 = n2.shape, e2 = r2[r2.length - 1], i2 = 1, o2 = 0; r2.length - 1 > o2; ++o2) i2 *= r2[o2];
  var a2 = t2.shape, s2 = r2.slice();
  s2.pop();
  var u2 = 1;
  for (o2 = e2; t2.rank > o2; ++o2) u2 *= a2[o2], s2.push(a2[o2]);
  var c2 = X(t2.shape).map((t3) => t3 / u2).concat([1]).slice(0, e2);
  return [s2, i2, u2, c2];
}
var _e = Object.freeze({ prepareAndValidate: Ce });
function Ee(t2) {
  return t2 > 30 ? H(t2, Math.floor(Math.sqrt(t2))) : t2;
}
function Re(t2, n2, r2) {
  var e2 = n2.rank > 1 ? n2.shape[n2.rank - 1] : 1, i2 = n2.rank > 1 ? n2.rank - 1 : 1, o2 = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + r2.shape + ", indices.shape: " + n2.shape + ", shape: " + t2 + ", sliceDim: " + e2 + ", and batchDim: " + i2 + ".";
  if (i2 > r2.rank) throw Error(o2 + " update.rank < " + i2 + ". ");
  if (e2 + (r2.rank - i2) > t2.length) throw Error(o2 + " Output shape length < " + (e2 + (r2.rank - i2)));
  if (r2.rank !== i2 + t2.length - e2) throw Error(o2 + " update.rank != " + (i2 + t2.length - e2));
  for (var a2 = 0; i2 > a2; ++a2) if (r2.shape[a2] !== n2.shape[a2]) throw Error(o2 + " updates.shape[" + a2 + "] (" + r2.shape[a2] + ") != indices.shape[" + a2 + "] (" + n2.shape[a2] + ").");
  for (a2 = 0; r2.rank - i2 > a2; ++a2) if (r2.shape[a2 + i2] !== t2[a2 + e2]) throw Error(o2 + " updates.shape[" + (a2 + i2) + "] (" + r2.shape[a2 + i2] + ") != shape[" + (a2 + i2) + "] (" + t2[a2 + i2] + ")");
}
function Ae(t2, n2, r2) {
  if (1 > n2.rank) throw Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + n2.rank + ".");
  if (1 > t2.rank) throw Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t2.rank + ".");
  if ("int32" !== n2.dtype) throw Error("The dtype of 'indices' should be int32, but got dtype: " + n2.dtype);
  if (1 > r2.length) throw Error("Output rank must be greater or equal to 1, but got shape: " + r2);
  if (0 === r2.length) {
    if (0 === n2.size) throw Error("Indices specified for empty output. indices shape: " + n2.shape);
    if (0 === t2.size) throw Error("Updates specified for empty output. updates shape: " + t2.shape);
  }
  Re(r2, n2, t2);
}
function Ne(t2, n2, r2) {
  for (var e2 = n2.shape.length, i2 = e2 > 1 ? n2.shape[e2 - 1] : 1, o2 = r2.length, a2 = 1, s2 = i2; o2 > s2; ++s2) a2 *= r2[s2];
  var u2 = 1 > i2 ? 1 : i2;
  return { sliceRank: i2, numUpdates: _(n2.shape) / u2, sliceSize: a2, strides: X(r2.slice(0, i2)).concat([1]), outputSize: _(r2) };
}
var Oe = Object.freeze({ validateUpdateShape: Re, validateInput: Ae, calculateShapes: Ne });
function Me(t2, n2, r2) {
  g(t2.rank === n2.length, () => "Error in slice" + t2.rank + "D: Length of begin " + n2 + " must match the rank of the array (" + t2.rank + ")."), g(t2.rank === r2.length, () => "Error in slice" + t2.rank + "D: Length of size " + r2 + " must match the rank of the array (" + t2.rank + ").");
  for (var e2 = (e3) => {
    g(t2.shape[e3] >= n2[e3] + r2[e3], () => "Error in slice" + t2.rank + "D: begin[" + e3 + "] + size[" + e3 + "] (" + (n2[e3] + r2[e3]) + ") would overflow input.shape[" + e3 + "] (" + t2.shape[e3] + ")");
  }, i2 = 0; t2.rank > i2; ++i2) e2(i2);
}
function Ie(t2) {
  for (var n2 = [], r2 = 0; t2 > 0; ) 1 & t2 && n2.push(r2), t2 /= 2, r2++;
  return n2;
}
function Te(t2, n2, r2) {
  for (var e2 = [], i2 = 0; t2.length > i2; i2++) e2[i2] = Math.ceil((n2[i2] - t2[i2]) / r2[i2]);
  return e2;
}
function Se(t2, n2, r2, e2, i2) {
  var o2 = n2[i2];
  (t2 & 1 << i2 || null == o2) && (o2 = (r2[i2] || 1) > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
  var a2 = e2[i2];
  return 0 > o2 && (o2 += a2), m(0, o2, a2 - 1);
}
function De(t2, n2, r2, e2, i2) {
  var o2 = n2[i2], a2 = r2[i2] || 1;
  (t2 & 1 << i2 || null == o2) && (o2 = a2 > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
  var s2 = e2[i2];
  return 0 > o2 && (o2 += s2), a2 > 0 ? m(0, o2, s2) : m(-1, o2, s2 - 1);
}
function ke(t2, n2, r2) {
  for (var e2 = r2.length, i2 = 0; r2.length > i2; i2++) if (r2[i2] > 1) {
    e2 = i2;
    break;
  }
  for (i2 = e2 + 1; r2.length > i2; i2++) if (n2[i2] > 0 || r2[i2] !== t2[i2]) return false;
  return true;
}
function Pe(t2, n2) {
  for (var r2 = t2.length > 0 ? t2[t2.length - 1] : 1, e2 = 0; t2.length - 1 > e2; e2++) r2 += t2[e2] * n2[e2];
  return r2;
}
var Fe = Object.freeze({ assertParamsValid: Me, maskToAxes: Ie, computeOutShape: Te, startForAxis: Se, stopForAxis: De, isSliceContinous: ke, computeFlatOffset: Pe });
function Le(t2, n2) {
  g(q(t2), () => "The f passed in variableGrads(f) must be a function"), g(null == n2 || Array.isArray(n2) && n2.every((t3) => t3 instanceof yt), () => "The varList passed in variableGrads(f, varList) must be an array of variables");
  var r2 = null != n2;
  if (!r2) for (var e2 in n2 = [], St.registeredVariables) n2.push(St.registeredVariables[e2]);
  var i2 = r2 ? n2.filter((t3) => !t3.trainable) : null, o2 = n2.length;
  g((n2 = n2.filter((t3) => t3.trainable)).length > 0, () => "variableGrads() expects at least one of the input variables to be trainable, but none of the " + o2 + " variables is trainable.");
  var a2 = St.gradients(t2, n2, null, true), s2 = a2.value, u2 = a2.grads;
  g(u2.some((t3) => null != t3), () => "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."), g(0 === s2.rank, () => "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s2.rank + " tensor");
  var c2 = {};
  return n2.forEach((t3, n3) => {
    null != u2[n3] && (c2[t3.name] = u2[n3]);
  }), null != i2 && i2.forEach((t3) => c2[t3.name] = null), { value: s2, grads: c2 };
}
function Be(t2) {
  return St.customGrad(t2);
}
function Ve(t2) {
  if (t2.filter((t3) => null == t3).length > 0) throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.");
}
var We = er({ softmax_(t2, n2) {
  void 0 === n2 && (n2 = -1);
  var r2 = qn(t2, "logits", "softmax", "float32");
  if (-1 === n2 && (n2 = r2.rank - 1), n2 !== r2.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + r2.rank + " and dim was " + n2);
  return St.runKernelFunc((t3, e2) => {
    var i2 = t3.softmax(r2, n2);
    return e2([i2]), i2;
  }, { logits: r2 }, (t3, r3) => {
    var e2 = r3[0], i2 = t3.mul(e2);
    return { logits() {
      return i2.sub(i2.sum([n2], true).mul(e2));
    } };
  }, "Softmax", { dim: n2 }, [], [true]);
} });
var ze = er({ logSoftmax_(t2, n2) {
  void 0 === n2 && (n2 = -1);
  var r2 = qn(t2, "logits", "logSoftmax");
  if (-1 === n2 && (n2 = r2.rank - 1), n2 !== r2.rank - 1) throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + r2.rank + " and axis was " + n2);
  return Be((t3, r3) => {
    var e2 = t3.max(n2, true), i2 = t3.sub(e2), o2 = i2.toFloat().sub(i2.exp().sum(n2, true).log());
    return r3([o2]), { value: o2, gradFunc(t4, r4) {
      var e3 = r4[0].exp();
      return t4.sub(t4.sum(n2, true).mul(e3));
    } };
  })(r2);
} });
var Ge = (function() {
  function t2(t3, n2) {
    this.backend = t3, this.dataMover = n2, this.data = /* @__PURE__ */ new WeakMap(), this.dataIdsCount = 0;
  }
  return t2.prototype.get = function(t3) {
    return this.data.has(t3) || this.dataMover.moveData(this.backend, t3), this.data.get(t3);
  }, t2.prototype.set = function(t3, n2) {
    this.dataIdsCount++, this.data.set(t3, n2);
  }, t2.prototype.has = function(t3) {
    return this.data.has(t3);
  }, t2.prototype.delete = function(t3) {
    return this.dataIdsCount--, this.data.delete(t3);
  }, t2.prototype.numDataIds = function() {
    return this.dataIdsCount;
  }, t2;
})();
var Ue = (function() {
  function t2() {
  }
  return t2.prototype.time = (t3) => je("time"), t2.prototype.read = (t3) => je("read"), t2.prototype.readSync = (t3) => je("readSync"), t2.prototype.numDataIds = () => je("numDataIds"), t2.prototype.disposeData = (t3) => je("disposeData"), t2.prototype.write = (t3, n2, r2) => je("write"), t2.prototype.move = (t3, n2, r2, e2) => je("move"), t2.prototype.memory = () => je("memory"), t2.prototype.floatPrecision = () => je("floatPrecision"), t2.prototype.epsilon = function() {
    return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
  }, t2.prototype.batchMatMul = (t3, n2, r2, e2) => je("batchMatMul"), t2.prototype.fusedBatchMatMul = (t3) => je("fusedBatchMatMul"), t2.prototype.slice = (t3, n2, r2) => je("slice"), t2.prototype.stridedSlice = (t3, n2, r2, e2) => je("stridedSlice"), t2.prototype.unstack = (t3, n2) => je("unstack"), t2.prototype.reverse = (t3, n2) => je("reverse"), t2.prototype.concat = (t3, n2) => je("concat"), t2.prototype.neg = (t3) => je("neg"), t2.prototype.add = (t3, n2) => je("add"), t2.prototype.addN = (t3) => je("addN"), t2.prototype.subtract = (t3, n2) => je("subtract"), t2.prototype.multiply = (t3, n2) => je("multiply"), t2.prototype.realDivide = (t3, n2) => je("realDivide"), t2.prototype.floorDiv = (t3, n2) => je("floorDiv"), t2.prototype.sum = (t3, n2) => je("sum"), t2.prototype.prod = (t3, n2) => je("prod"), t2.prototype.unsortedSegmentSum = (t3, n2, r2) => je("unsortedSegmentSum"), t2.prototype.argMin = (t3, n2) => je("argMin"), t2.prototype.argMax = (t3, n2) => je("argMax"), t2.prototype.equal = (t3, n2) => je("equal"), t2.prototype.notEqual = (t3, n2) => je("notEqual"), t2.prototype.less = (t3, n2) => je("less"), t2.prototype.lessEqual = (t3, n2) => je("lessEqual"), t2.prototype.greater = (t3, n2) => je("greater"), t2.prototype.greaterEqual = (t3, n2) => je("greaterEqual"), t2.prototype.logicalNot = (t3) => je("logicalNot"), t2.prototype.logicalAnd = (t3, n2) => je("logicalAnd"), t2.prototype.logicalOr = (t3, n2) => je("logicalOr"), t2.prototype.where = (t3) => je("where"), t2.prototype.select = (t3, n2, r2) => je("select"), t2.prototype.topk = (t3, n2, r2) => je("topk"), t2.prototype.min = (t3, n2) => je("min"), t2.prototype.minimum = (t3, n2) => je("minimum"), t2.prototype.mod = (t3, n2) => je("mod"), t2.prototype.max = (t3, n2) => je("max"), t2.prototype.maximum = (t3, n2) => je("maximum"), t2.prototype.all = (t3, n2) => je("all"), t2.prototype.any = (t3, n2) => je("any"), t2.prototype.squaredDifference = (t3, n2) => je("squaredDifference"), t2.prototype.ceil = (t3) => je("ceil"), t2.prototype.floor = (t3) => je("floor"), t2.prototype.round = (t3) => je("round"), t2.prototype.sign = (t3) => je("sign"), t2.prototype.isNaN = (t3) => je("isNaN"), t2.prototype.isInf = (t3) => je("isInf"), t2.prototype.isFinite = (t3) => je("isFinite"), t2.prototype.pow = (t3, n2) => je("pow"), t2.prototype.exp = (t3) => je("exp"), t2.prototype.expm1 = (t3) => je("expm1"), t2.prototype.softmax = (t3, n2) => je("softmax"), t2.prototype.log = (t3) => je("log"), t2.prototype.log1p = (t3) => je("log1p"), t2.prototype.sqrt = (t3) => je("sqrt"), t2.prototype.rsqrt = (t3) => je("rsqrt"), t2.prototype.square = (t3) => je("square"), t2.prototype.reciprocal = (t3) => je("reciprocal"), t2.prototype.relu = (t3) => je("relu"), t2.prototype.relu6 = (t3) => je("relu6"), t2.prototype.prelu = (t3, n2) => je("prelu"), t2.prototype.elu = (t3) => je("elu"), t2.prototype.eluDer = (t3, n2) => je("eluDer"), t2.prototype.selu = (t3) => je("selu"), t2.prototype.int = (t3) => je("int"), t2.prototype.clip = (t3, n2, r2) => je("clip"), t2.prototype.abs = (t3) => je("abs"), t2.prototype.complexAbs = (t3) => je("complexAbs"), t2.prototype.sigmoid = (t3) => je("sigmoid"), t2.prototype.softplus = (t3) => je("softplus"), t2.prototype.sin = (t3) => je("sin"), t2.prototype.cos = (t3) => je("cos"), t2.prototype.tan = (t3) => je("tan"), t2.prototype.asin = (t3) => je("asin"), t2.prototype.acos = (t3) => je("acos"), t2.prototype.atan = (t3) => je("atan"), t2.prototype.atan2 = (t3, n2) => je("atan2"), t2.prototype.sinh = (t3) => je("sinh"), t2.prototype.cosh = (t3) => je("cosh"), t2.prototype.tanh = (t3) => je("tanh"), t2.prototype.asinh = (t3) => je("asinh"), t2.prototype.acosh = (t3) => je("acosh"), t2.prototype.atanh = (t3) => je("atanh"), t2.prototype.erf = (t3) => je("erf"), t2.prototype.step = (t3, n2) => je("step"), t2.prototype.fusedConv2d = (t3) => je("fusedConv2d"), t2.prototype.conv2d = (t3, n2, r2) => je("conv2d"), t2.prototype.conv2dDerInput = (t3, n2, r2) => je("conv2dDerInput"), t2.prototype.conv2dDerFilter = (t3, n2, r2) => je("conv2dDerFilter"), t2.prototype.fusedDepthwiseConv2D = (t3) => je("fusedDepthwiseConv2D"), t2.prototype.depthwiseConv2D = (t3, n2, r2) => je("depthwiseConv2D"), t2.prototype.depthwiseConv2DDerInput = (t3, n2, r2) => je("depthwiseConv2DDerInput"), t2.prototype.depthwiseConv2DDerFilter = (t3, n2, r2) => je("depthwiseConv2DDerFilter"), t2.prototype.conv3d = (t3, n2, r2) => je("conv3d"), t2.prototype.conv3dDerInput = (t3, n2, r2) => je("conv3dDerInput"), t2.prototype.conv3dDerFilter = (t3, n2, r2) => je("conv3dDerFilter"), t2.prototype.maxPool = (t3, n2) => je("maxPool"), t2.prototype.maxPoolBackprop = (t3, n2, r2, e2) => je("maxPoolBackprop"), t2.prototype.avgPool = (t3, n2) => je("avgPool"), t2.prototype.avgPoolBackprop = (t3, n2, r2) => je("avgPoolBackprop"), t2.prototype.avgPool3d = (t3, n2) => je("avgPool3d"), t2.prototype.avgPool3dBackprop = (t3, n2, r2) => je("avgPool3dBackprop"), t2.prototype.maxPool3d = (t3, n2) => je("maxPool3d"), t2.prototype.maxPool3dBackprop = (t3, n2, r2, e2) => je("maxPool3dBackprop"), t2.prototype.reshape = (t3, n2) => je("reshape"), t2.prototype.cast = (t3, n2) => je("cast"), t2.prototype.tile = (t3, n2) => je("tile"), t2.prototype.pad = (t3, n2, r2) => je("pad"), t2.prototype.transpose = (t3, n2) => je("transpose"), t2.prototype.gather = (t3, n2, r2) => je("gather"), t2.prototype.gatherND = (t3, n2) => je("gatherND"), t2.prototype.scatterND = (t3, n2, r2) => je("scatterND"), t2.prototype.batchToSpaceND = (t3, n2, r2) => je("batchToSpaceND"), t2.prototype.spaceToBatchND = (t3, n2, r2) => je("spaceToBatchND"), t2.prototype.resizeBilinear = (t3, n2, r2, e2) => je("resizeBilinear"), t2.prototype.resizeBilinearBackprop = (t3, n2, r2) => je("resizeBilinearBackprop"), t2.prototype.resizeNearestNeighbor = (t3, n2, r2, e2) => je("resizeNearestNeighbor"), t2.prototype.resizeNearestNeighborBackprop = (t3, n2, r2) => je("resizeNearestNeighborBackprop"), t2.prototype.batchNormalization = (t3, n2, r2, e2, i2, o2) => je("batchNormalization"), t2.prototype.localResponseNormalization4D = (t3, n2, r2, e2, i2) => je("localResponseNormalization4D"), t2.prototype.LRNGrad = (t3, n2, r2, e2, i2, o2, a2) => je("LRNGrad"), t2.prototype.multinomial = (t3, n2, r2, e2) => je("multinomial"), t2.prototype.oneHot = (t3, n2, r2, e2) => je("oneHot"), t2.prototype.cumsum = (t3, n2, r2, e2) => je("cumsum"), t2.prototype.nonMaxSuppression = (t3, n2, r2, e2, i2) => je("nonMaxSuppression"), t2.prototype.fft = (t3) => je("fft"), t2.prototype.ifft = (t3) => je("ifft"), t2.prototype.complex = (t3, n2) => je("complex"), t2.prototype.real = (t3) => je("real"), t2.prototype.imag = (t3) => je("imag"), t2.prototype.cropAndResize = (t3, n2, r2, e2, i2, o2) => je("cropAndResize"), t2.prototype.depthToSpace = (t3, n2, r2) => je("depthToSpace"), t2.prototype.split = (t3, n2, r2) => je("split"), t2.prototype.sparseToDense = (t3, n2, r2, e2) => je("sparseToDense"), t2.prototype.diag = (t3) => je("diag"), t2.prototype.fill = (t3, n2, r2) => je("fill"), t2.prototype.onesLike = (t3) => je("onesLike"), t2.prototype.zerosLike = (t3) => je("zerosLike"), t2.prototype.linspace = (t3, n2, r2) => je("linspace"), t2.prototype.dispose = () => je("dispose"), t2;
})();
function je(t2) {
  throw Error("'" + t2 + "' not yet implemented or not found in the registry. Did you forget to import the kernel?");
}
function qe(t2, n2) {
  for (var r2 = t2.length, e2 = [], i2 = 0; r2 > i2; i2++) {
    var o2 = r2 - 1 - i2;
    (n2[n2.length - 1 - i2] || 1) > 1 && 1 === (t2[o2] || 1) && e2.unshift(o2);
  }
  return e2;
}
function He(t2, n2) {
  for (var r2 = [], e2 = 0; n2.length > e2; e2++) {
    var i2 = t2[t2.length - e2 - 1], o2 = n2.length - e2 - 1;
    (null == i2 || 1 === i2 && n2[o2] > 1) && r2.unshift(o2);
  }
  return r2;
}
function Xe(t2, n2) {
  for (var r2 = [], e2 = Math.max(t2.length, n2.length), i2 = 0; e2 > i2; i2++) {
    var o2 = t2[t2.length - i2 - 1];
    null == o2 && (o2 = 1);
    var a2 = n2[n2.length - i2 - 1];
    if (null == a2 && (a2 = 1), 1 === o2) r2.unshift(a2);
    else if (1 === a2) r2.unshift(o2);
    else {
      if (o2 !== a2) throw Error("Operands could not be broadcast together with shapes " + t2 + " and " + n2 + ".");
      r2.unshift(o2);
    }
  }
  return r2;
}
function $e(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === a2 && (a2 = "channelsLast");
  var s2, u2 = Qe(n2), c2 = u2[0], l2 = u2[1];
  if ("channelsLast" === a2) s2 = [c2, l2, t2[3], t2[3]];
  else {
    if ("channelsFirst" !== a2) throw Error("Unknown dataFormat " + a2);
    s2 = [c2, l2, t2[1], t2[1]];
  }
  return Ye(t2, s2, r2, e2, i2, o2, false, a2);
}
function Ke(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === a2 && (a2 = "NDHWC");
  var s2, u2, c2 = ti(n2), l2 = c2[0], h2 = c2[1], f2 = c2[2];
  if ("NDHWC" === a2) u2 = "channelsLast", s2 = [l2, h2, f2, t2[4], t2[4]];
  else {
    if ("NCDHW" !== a2) throw Error("Unknown dataFormat " + a2);
    u2 = "channelsFirst", s2 = [l2, h2, f2, t2[1], t2[1]];
  }
  return Je(t2, s2, r2, e2, i2, false, u2, o2);
}
function Ye(t2, n2, r2, e2, i2, o2, a2, s2) {
  void 0 === a2 && (a2 = false), void 0 === s2 && (s2 = "channelsLast");
  var u2 = -1, c2 = -1, l2 = -1, h2 = -1;
  if ("channelsLast" === s2) u2 = t2[0], c2 = t2[1], l2 = t2[2], h2 = t2[3];
  else {
    if ("channelsFirst" !== s2) throw Error("Unknown dataFormat " + s2);
    u2 = t2[0], h2 = t2[1], c2 = t2[2], l2 = t2[3];
  }
  var f2, d2 = n2[0], v2 = n2[1], p2 = n2[3], m2 = Qe(r2), x2 = m2[0], b2 = m2[1], w2 = Qe(e2), y2 = w2[0], C2 = w2[1], _2 = ni(d2, y2), E2 = ni(v2, C2), A2 = ((t3, n3, r3, e3, i3, o3, a3, s3) => {
    var u3, c3, l3;
    if ("number" == typeof t3) {
      u3 = { top: t3, bottom: t3, left: t3, right: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
      var h3 = ((t4, n4, r4, e4, i4) => {
        null == e4 && (e4 = Ze(t4, n4, r4));
        var o4 = t4[1], a4 = ri((t4[0] - n4 + 2 * e4) / r4 + 1, i4);
        g(R(a4), () => "The output # of rows (" + a4 + ") must be an integer. Change the stride and/or zero pad parameters");
        var s4 = ri((o4 - n4 + 2 * e4) / r4 + 1, i4);
        return g(R(s4), () => "The output # of columns (" + s4 + ") must be an integer. Change the stride and/or zero pad parameters"), [a4, s4];
      })([n3, r3], o3, e3, t3, s3);
      c3 = h3[0], l3 = h3[1];
    } else if ("same" === t3) {
      c3 = Math.ceil(n3 / e3), l3 = Math.ceil(r3 / i3);
      var f3 = Math.max(0, (c3 - 1) * e3 + o3 - n3), d3 = Math.max(0, (l3 - 1) * i3 + a3 - r3), v3 = Math.floor(f3 / 2), p3 = f3 - v3, m3 = Math.floor(d3 / 2);
      u3 = { top: v3, bottom: p3, left: m3, right: d3 - m3, type: "SAME" };
    } else {
      if ("valid" !== t3) throw Error("Unknown padding parameter: " + t3);
      u3 = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }, c3 = Math.ceil((n3 - o3 + 1) / e3), l3 = Math.ceil((r3 - a3 + 1) / i3);
    }
    return { padInfo: u3, outHeight: c3, outWidth: l3 };
  })(i2, c2, l2, x2, b2, _2, E2, o2), N2 = A2.outHeight, O2 = A2.outWidth, M2 = a2 ? p2 * h2 : p2;
  return "channelsFirst" === s2 ? f2 = [u2, M2, N2, O2] : "channelsLast" === s2 && (f2 = [u2, N2, O2, M2]), { batchSize: u2, dataFormat: s2, inHeight: c2, inWidth: l2, inChannels: h2, outHeight: N2, outWidth: O2, outChannels: M2, padInfo: A2.padInfo, strideHeight: x2, strideWidth: b2, filterHeight: d2, filterWidth: v2, effectiveFilterHeight: _2, effectiveFilterWidth: E2, dilationHeight: y2, dilationWidth: C2, inShape: t2, outShape: f2, filterShape: n2 };
}
function Je(t2, n2, r2, e2, i2, o2, a2, s2) {
  void 0 === o2 && (o2 = false), void 0 === a2 && (a2 = "channelsLast");
  var u2 = -1, c2 = -1, l2 = -1, h2 = -1, f2 = -1;
  if ("channelsLast" === a2) u2 = t2[0], c2 = t2[1], l2 = t2[2], h2 = t2[3], f2 = t2[4];
  else {
    if ("channelsFirst" !== a2) throw Error("Unknown dataFormat " + a2);
    u2 = t2[0], f2 = t2[1], c2 = t2[2], l2 = t2[3], h2 = t2[4];
  }
  var d2, v2 = n2[0], p2 = n2[1], m2 = n2[2], x2 = n2[4], b2 = ti(r2), w2 = b2[0], y2 = b2[1], C2 = b2[2], _2 = ti(e2), E2 = _2[0], A2 = _2[1], N2 = _2[2], O2 = ni(v2, E2), M2 = ni(p2, A2), I2 = ni(m2, N2), T2 = ((t3, n3, r3, e3, i3, o3, a3, s3, u3, c3, l3) => {
    var h3, f3, d3, v3;
    if ("number" == typeof t3) {
      h3 = { top: t3, bottom: t3, left: t3, right: t3, front: t3, back: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
      var p3 = ((t4, n4, r4, e4, i4, o4) => {
        null == i4 && (i4 = Ze(t4, n4, e4));
        var a4 = t4[1], s4 = t4[2], u4 = ri((t4[0] - n4 + 2 * i4) / e4 + 1, o4);
        g(R(u4), () => "The output # of depths (" + u4 + ") must be an integer. Change the stride and/or zero pad parameters");
        var c4 = ri((a4 - n4 + 2 * i4) / e4 + 1, o4);
        g(R(c4), () => "The output # of rows (" + c4 + ") must be an integer. Change the stride and/or zero pad parameters");
        var l4 = ri((s4 - n4 + 2 * i4) / e4 + 1, o4);
        return g(R(l4), () => "The output # of columns (" + l4 + ") must be an integer. Change the stride and/or zero pad parameters"), [u4, c4, l4, 1];
      })([n3, r3, e3, 1], s3, 0, i3, t3, l3);
      f3 = p3[0], d3 = p3[1], v3 = p3[2];
    } else if ("same" === t3) {
      var m3 = ((f3 = Math.ceil(n3 / i3)) - 1) * i3 + s3 - n3, x3 = ((d3 = Math.ceil(r3 / o3)) - 1) * o3 + u3 - r3, b3 = ((v3 = Math.ceil(e3 / a3)) - 1) * a3 + c3 - e3, w3 = Math.floor(m3 / 2), y3 = m3 - w3, C3 = Math.floor(x3 / 2), _3 = x3 - C3, E3 = Math.floor(b3 / 2);
      h3 = { top: C3, bottom: _3, left: E3, right: b3 - E3, front: w3, back: y3, type: "SAME" };
    } else {
      if ("valid" !== t3) throw Error("Unknown padding parameter: " + t3);
      h3 = { top: 0, bottom: 0, left: 0, right: 0, front: 0, back: 0, type: "VALID" }, f3 = Math.ceil((n3 - s3 + 1) / i3), d3 = Math.ceil((r3 - u3 + 1) / o3), v3 = Math.ceil((e3 - c3 + 1) / a3);
    }
    return { padInfo: h3, outDepth: f3, outHeight: d3, outWidth: v3 };
  })(i2, c2, l2, h2, w2, y2, C2, O2, M2, I2, s2), S2 = T2.outDepth, D2 = T2.outHeight, k2 = T2.outWidth, P2 = o2 ? x2 * f2 : x2;
  return "channelsFirst" === a2 ? d2 = [u2, P2, S2, D2, k2] : "channelsLast" === a2 && (d2 = [u2, S2, D2, k2, P2]), { batchSize: u2, dataFormat: a2, inDepth: c2, inHeight: l2, inWidth: h2, inChannels: f2, outDepth: S2, outHeight: D2, outWidth: k2, outChannels: P2, padInfo: T2.padInfo, strideDepth: w2, strideHeight: y2, strideWidth: C2, filterDepth: v2, filterHeight: p2, filterWidth: m2, effectiveFilterDepth: O2, effectiveFilterHeight: M2, effectiveFilterWidth: I2, dilationDepth: E2, dilationHeight: A2, dilationWidth: N2, inShape: t2, outShape: d2, filterShape: n2 };
}
function Ze(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = 1);
  var i2 = ni(n2, e2);
  return Math.floor((t2[0] * (r2 - 1) - r2 + i2) / 2);
}
function Qe(t2) {
  return "number" == typeof t2 ? [t2, t2, t2] : 2 === t2.length ? [t2[0], t2[1], 1] : t2;
}
function ti(t2) {
  return "number" == typeof t2 ? [t2, t2, t2] : t2;
}
function ni(t2, n2) {
  return n2 > 1 ? t2 + (t2 - 1) * (n2 - 1) : t2;
}
function ri(t2, n2) {
  if (!n2) return t2;
  switch (n2) {
    case "round":
      return Math.round(t2);
    case "ceil":
      return Math.ceil(t2);
    case "floor":
      return Math.floor(t2);
    default:
      throw Error("Unknown roundingMode " + n2);
  }
}
function ei(t2) {
  var n2 = Qe(t2);
  return 1 === n2[0] && 1 === n2[1] && 1 === n2[2];
}
function ii(t2, n2) {
  return ei(t2) || ei(n2);
}
function oi(t2) {
  if ("NHWC" === t2) return "channelsLast";
  if ("NCHW" === t2) return "channelsFirst";
  throw Error("Unknown dataFormat " + t2);
}
function ai(t2, n2, r2) {
  if ("complex64" === n2) {
    if ("complex64" === t2.dtype) return t2.clone();
    var e2 = br(t2.shape), i2 = t2.toFloat(), o2 = r2.complex(i2, e2);
    return e2.dispose(), i2.dispose(), o2;
  }
  if (!L(t2.dtype, n2)) return St.makeTensorFromDataId(t2.dataId, t2.shape, n2);
  if ("complex64" === t2.dtype) {
    var a2 = r2.real(t2);
    return o2 = a2.cast(n2), a2.dispose(), o2;
  }
  if ("int32" === n2) return r2.int(t2);
  if ("bool" === n2) {
    var s2 = cr(0, t2.dtype);
    return o2 = r2.notEqual(t2, s2), s2.dispose(), o2;
  }
  throw Error("Error in Cast: failed to cast " + t2.dtype + " to " + n2);
}
function si(t2, n2) {
  return St.makeTensorFromDataId(t2.dataId, n2, t2.dtype);
}
function ui(t2, n2, r2) {
  var e2 = (n2 - t2) / (r2 - 1), i2 = J(r2, "float32");
  i2[0] = t2;
  for (var o2 = 1; i2.length > o2; o2++) i2[o2] = i2[o2 - 1] + e2;
  return lr(i2, "float32");
}
var ci = Object.freeze({ castTensor: ai, reshapeTensor: si, linspaceImpl: ui, upcastType: _t, axesAreInnerMostDims: Xn, combineLocations: $n, computeOutAndReduceShapes: Kn, expandShapeToKeepDim: Yn, assertAxesAreInnerMostDims: Jn, getAxesPermutation: Zn, getUndoAxesPermutation: Qn, getInnerMostAxes: tr, getBroadcastDims: qe, getReductionAxes: He, assertAndGetBroadcastShape: Xe, assertParamsConsistent: nr, computeOutShape: rr, computePool2DInfo: $e, computePool3DInfo: Ke, computeConv2DInfo: Ye, computeConv3DInfo: Je, computeDefaultPad: Ze, tupleValuesAreOne: ei, eitherStridesOrDilationsAreOne: ii, convertConv2DDataFormat: oi, PARALLELIZE_THRESHOLD: 30, computeOptimalWindowSize: Ee });
function li(t2, n2) {
  if (t2.length !== n2.length) throw Error("Cannot merge real and imag arrays of different lengths. real:" + t2.length + ", imag: " + n2.length + ".");
  for (var r2 = new Float32Array(2 * t2.length), e2 = 0; r2.length > e2; e2 += 2) r2[e2] = t2[e2 / 2], r2[e2 + 1] = n2[e2 / 2];
  return r2;
}
function hi(t2, n2) {
  return { real: t2[2 * n2], imag: t2[2 * n2 + 1] };
}
function fi(t2, n2, r2, e2) {
  t2[2 * e2] = n2, t2[2 * e2 + 1] = r2;
}
function di(t2, n2, r2) {
  var e2 = (r2 ? 2 : -2) * Math.PI * (t2 / n2);
  return { real: Math.cos(e2), imag: Math.sin(e2) };
}
function vi(t2, n2, r2) {
  var e2 = ((t3, n3, r3) => {
    for (var e3 = 0, i2 = t3.length, o2 = 0, a2 = false; i2 > e3; ) {
      var s2 = r3(n3, t3[o2 = e3 + (i2 - e3 >>> 1)]);
      s2 > 0 ? e3 = o2 + 1 : (i2 = o2, a2 = !s2);
    }
    return a2 ? e3 : -e3 - 1;
  })(t2, n2, r2 || pi);
  t2.splice(0 > e2 ? -(e2 + 1) : e2, 0, n2);
}
function pi(t2, n2) {
  return t2 > n2 ? 1 : n2 > t2 ? -1 : 0;
}
function mi(t2, n2, r2, e2, i2) {
  return bi(t2, n2, r2, e2, i2, 0).selectedIndices;
}
function xi(t2, n2, r2, e2, i2, o2) {
  var a2 = bi(t2, n2, r2, e2, i2, o2);
  return a2.numValidOutputs.dispose(), { selectedIndices: a2.selectedIndices, selectedScores: a2.selectedScores };
}
function bi(t2, n2, r2, e2, i2, o2, a2, s2) {
  void 0 === s2 && (s2 = false);
  for (var u2 = Array.from(n2).map((t3, n3) => ({ score: t3, boxIndex: n3, suppressBeginIndex: 0 })).filter((t3) => t3.score > i2).sort(yi), c2 = o2 > 0 ? -0.5 / o2 : 0, l2 = [], h2 = []; r2 > l2.length && u2.length > 0; ) {
    var f2 = u2.pop(), d2 = f2.score, v2 = f2.boxIndex, p2 = f2.suppressBeginIndex;
    if (i2 > d2) break;
    for (var m2 = false, x2 = l2.length - 1; x2 >= p2; --x2) {
      var b2 = gi(t2, v2, l2[x2]);
      if (b2 >= e2) {
        m2 = true;
        break;
      }
      if (f2.score = f2.score * wi(e2, c2, b2), i2 >= f2.score) break;
    }
    f2.suppressBeginIndex = l2.length, m2 || (f2.score === d2 ? (l2.push(v2), h2.push(f2.score)) : f2.score > i2 && vi(u2, f2, yi));
  }
  var g2 = l2.length;
  return s2 && (l2.fill(0, g2), h2.fill(0, g2)), { selectedIndices: lr(l2, "int32"), selectedScores: lr(h2, "float32"), numValidOutputs: cr(g2, "int32") };
}
function gi(t2, n2, r2) {
  var e2 = t2.subarray(4 * n2, 4 * n2 + 4), i2 = t2.subarray(4 * r2, 4 * r2 + 4), o2 = Math.min(e2[0], e2[2]), a2 = Math.min(e2[1], e2[3]), s2 = Math.max(e2[0], e2[2]), u2 = Math.max(e2[1], e2[3]), c2 = Math.min(i2[0], i2[2]), l2 = Math.min(i2[1], i2[3]), h2 = Math.max(i2[0], i2[2]), f2 = Math.max(i2[1], i2[3]), d2 = (s2 - o2) * (u2 - a2), v2 = (h2 - c2) * (f2 - l2);
  if (0 >= d2 || 0 >= v2) return 0;
  var p2 = Math.max(o2, c2), m2 = Math.max(a2, l2), x2 = Math.min(s2, h2), b2 = Math.min(u2, f2), g2 = Math.max(x2 - p2, 0) * Math.max(b2 - m2, 0);
  return g2 / (d2 + v2 - g2);
}
function wi(t2, n2, r2) {
  return r2 > t2 ? 0 : Math.exp(n2 * r2 * r2);
}
function yi(t2, n2) {
  return t2.score - n2.score || t2.score === n2.score && n2.boxIndex - t2.boxIndex;
}
function Ci(t2, n2, r2) {
  var e2 = Array(t2.rank).fill(0), i2 = t2.shape.slice();
  return n2.map((n3) => {
    i2[r2] = n3;
    var o2 = t2.slice(e2, i2);
    return e2[r2] += n3, o2;
  });
}
function _i(t2, n2) {
  for (var r2 = Array(t2.rank), e2 = 0; r2.length > e2; e2++) r2[e2] = t2.shape[e2] * n2[e2];
  var i2 = Gr(r2, t2.dtype);
  for (e2 = 0; i2.values.length > e2; ++e2) {
    for (var o2 = i2.indexToLoc(e2), a2 = Array(t2.rank), s2 = 0; a2.length > s2; s2++) a2[s2] = o2[s2] % t2.shape[s2];
    var u2 = t2.locToIndex(a2);
    i2.values[e2] = t2.values[u2];
  }
  return i2.toTensor();
}
function Ei(t2, n2, r2, e2, i2) {
  for (var o2 = n2[n2.length - 1], a2 = [t2.length / o2, o2], s2 = a2[0], u2 = a2[1], c2 = D(r2, s2 * e2), l2 = D("int32", s2 * e2), h2 = 0; s2 > h2; h2++) {
    for (var f2 = h2 * u2, d2 = t2.subarray(f2, f2 + u2), v2 = [], p2 = 0; d2.length > p2; p2++) v2.push({ value: d2[p2], index: p2 });
    v2.sort((t3, n3) => n3.value - t3.value);
    var m2 = h2 * e2, x2 = c2.subarray(m2, m2 + e2), b2 = l2.subarray(m2, m2 + e2);
    for (p2 = 0; e2 > p2; p2++) x2[p2] = v2[p2].value, b2[p2] = v2[p2].index;
  }
  var g2 = n2.slice();
  return g2[g2.length - 1] = e2, [sr(c2, g2, r2), sr(l2, g2, "int32")];
}
function Ri(t2, n2) {
  for (var r2 = [], e2 = 0; n2.length > e2; e2++) n2[e2] && r2.push(e2);
  var i2 = Gr(t2, "int32"), o2 = Gr([r2.length, t2.length], "int32");
  for (e2 = 0; r2.length > e2; e2++) {
    var a2 = i2.indexToLoc(r2[e2]);
    o2.values.set(a2, e2 * t2.length);
  }
  return o2.toTensor();
}
var Ai = function(t2, n2) {
  this.outputShape = [], this.outputShape = t2, this.variableNames = n2.map((t3, n3) => "T" + n3);
  var r2 = [];
  this.variableNames.forEach((t3) => {
    r2.push("float v" + t3 + " = get" + t3 + "AtOutCoords();");
  });
  var e2 = this.variableNames.map((t3) => "v" + t3).join(" + ");
  this.userCode = "\n      void main() {\n        " + r2.join("\n        ") + "\n\n        float result = " + e2 + ";\n        setOutput(result);\n      }\n    ";
};
var Ni = function(t2, n2) {
  this.outputShape = [], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.variableNames = n2.map((t3, n3) => "T" + n3);
  var r2 = [];
  this.variableNames.forEach((t3) => {
    r2.push("vec4 v" + t3 + " = get" + t3 + "AtOutCoords();");
  });
  var e2 = this.variableNames.map((t3) => "v" + t3).join(" + ");
  this.userCode = "\n      void main() {\n        " + r2.join("\n        ") + "\n\n        vec4 result = " + e2 + ";\n        setOutput(result);\n      }\n    ";
};
var Oi = function(t2, n2, r2) {
  this.variableNames = ["A"];
  var e2 = t2.windowSize, i2 = t2.batchSize, o2 = Math.ceil(t2.inSize / e2);
  r2 || this.variableNames.push("bestIndicesA"), this.outputShape = [i2, o2], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + e2 + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + e2 + "; i++) {\n          int inIdx = " + (r2 ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));") + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + ("max" === n2 ? ">" : "<") + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";
};
function Mi(t2, n2) {
  return ["x", "y", "z", "w", "u", "v"].slice(0, n2).map((n3) => t2 + "." + n3);
}
function Ii(t2, n2) {
  return 1 === n2 ? [t2] : Mi(t2, n2);
}
function Ti() {
  var t2, n2, r2, e2, i2, a2, s2, u2, c2, l2;
  return 2 === o().getNumber("WEBGL_VERSION") ? (t2 = "#version 300 es", n2 = "in", r2 = "out", e2 = "in", i2 = "texture", a2 = "outputColor", s2 = "out vec4 outputColor;", u2 = "\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ", c2 = "", l2 = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (t2 = "", n2 = "attribute", r2 = "varying", e2 = "varying", i2 = "texture2D", a2 = "gl_FragColor", s2 = "", u2 = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", c2 = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", l2 = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), { version: t2, attribute: n2, varyingVs: r2, varyingFs: e2, texture2D: i2, output: a2, defineOutput: s2, defineSpecialNaN: u2, defineSpecialInf: c2, defineRound: l2 };
}
function Si(t2, n2, r2) {
  void 0 === r2 && (r2 = "index");
  var e2 = X(n2);
  return e2.map((n3, i2) => "int " + t2[i2] + " = " + r2 + " / " + n3 + "; " + (i2 === e2.length - 1 ? "int " + t2[i2 + 1] + " = " + r2 + " - " + t2[i2] + " * " + n3 : "index -= " + t2[i2] + " * " + n3) + ";").join("");
}
function Di(t2) {
  var n2 = X(t2).map((t3) => "" + t3);
  return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * " + n2[0] + " + coords.y * " + n2[1] + " + coords.z;\n  }\n";
}
var ki = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";
function Pi(t2, n2, r2, e2) {
  var i2 = [];
  t2.forEach((t3) => {
    var n3 = _(t3.shapeInfo.logicalShape);
    t3.shapeInfo.isUniform ? i2.push("uniform float " + t3.name + (n3 > 1 ? "[" + n3 + "]" : "") + ";") : (i2.push("uniform sampler2D " + t3.name + ";"), i2.push("uniform int offset" + t3.name + ";"));
  });
  var o2, a2, s2, u2 = i2.join("\n"), c2 = t2.map((t3) => ((t4, n3, r3) => {
    void 0 === r3 && (r3 = false);
    var e3 = "";
    return e3 += r3 ? Li(t4) : Fi(t4), n3.logicalShape.length >= t4.shapeInfo.logicalShape.length && (e3 += r3 ? ((t5, n4) => {
      var r4, e4, i3 = t5.name, o3 = i3.charAt(0).toUpperCase() + i3.slice(1), a3 = "get" + o3 + "AtOutCoords", s3 = t5.shapeInfo.logicalShape.length, u3 = n4.logicalShape.length, c3 = qe(t5.shapeInfo.logicalShape, n4.logicalShape), l3 = ji(u3), h3 = u3 - s3, f3 = ["x", "y", "z", "w", "u", "v"];
      r4 = 0 === s3 ? "" : 2 > u3 && c3.length >= 1 ? "coords = 0;" : c3.map((t6) => "coords." + f3[t6 + h3] + " = 0;").join("\n"), e4 = 2 > u3 && s3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map((t6, n5) => "coords." + f3[n5 + h3]).join(", ");
      var d3 = "return outputValue;", v2 = 1 === _(t5.shapeInfo.logicalShape), p2 = 1 === _(n4.logicalShape);
      if (1 !== s3 || v2 || p2) {
        if (v2 && !p2) d3 = 1 === u3 ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      ";
        else if (c3.length) {
          var m2 = s3 - 2, x2 = s3 - 1;
          c3.indexOf(m2) > -1 && c3.indexOf(x2) > -1 ? d3 = "return vec4(outputValue.x);" : c3.indexOf(m2) > -1 ? d3 = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : c3.indexOf(x2) > -1 && (d3 = "return vec4(outputValue.xx, outputValue.zz);");
        }
      } else d3 = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
      return "\n    vec4 " + a3 + "() {\n      " + l3 + " coords = getOutputCoords();\n      " + r4 + "\n      vec4 outputValue = get" + o3 + "(" + e4 + ");\n      " + d3 + "\n    }\n  ";
    })(t4, n3) : ((t5, n4) => {
      var r4 = t5.name, e4 = r4.charAt(0).toUpperCase() + r4.slice(1), i3 = "get" + e4 + "AtOutCoords", o3 = t5.shapeInfo.logicalShape.length, a3 = n4.logicalShape.length;
      if (!t5.shapeInfo.isUniform && o3 === a3 && null == t5.shapeInfo.flatOffset && E(t5.shapeInfo.texShape, n4.texShape)) return "\n      float " + i3 + "() {\n        return sampleTexture(" + r4 + ", resultUV);\n      }\n    ";
      var s3 = ji(a3), u3 = qe(t5.shapeInfo.logicalShape, n4.logicalShape), c3 = a3 - o3, l3 = ["x", "y", "z", "w", "u", "v"];
      return "\n    float " + i3 + "() {\n      " + s3 + " coords = getOutputCoords();\n      " + (0 === o3 ? "" : 2 > a3 && u3.length >= 1 ? "coords = 0;" : u3.map((t6) => "coords." + l3[t6 + c3] + " = 0;").join("\n")) + "\n      return get" + e4 + "(" + (2 > a3 && o3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map((t6, n5) => "coords." + l3[n5 + c3]).join(", ")) + ");\n    }\n  ";
    })(t4, n3)), e3;
  })(t3, n2, e2)).join("\n"), l2 = n2.texShape, h2 = Ti(), f2 = "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + h2.texture2D + "(textureSampler, uv).r;\n    }\n  ", d2 = (s2 = h2).version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + s2.varyingFs + " vec2 resultUV;\n    " + s2.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    " + s2.defineSpecialNaN + "\n    " + s2.defineSpecialInf + "\n    " + s2.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    " + Bi + "\n    " + Vi + "\n    " + Wi + "\n  ";
  return n2.isPacked ? (o2 = ((t3, n3) => {
    switch (t3.length) {
      case 0:
        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
      case 1:
        return 1 === (e3 = [Math.ceil((r3 = n3)[0] / 2), Math.ceil(r3[1] / 2)])[0] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + e3[1] + ".0);\n      }\n    " : 1 === e3[1] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + e3[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e3[0] + ", " + e3[1] + "));\n      return 2 * (resTexRC.x * " + e3[1] + " + resTexRC.y);\n    }\n  ";
      case 2:
        return ((t4, n4) => {
          var r4 = [Math.ceil(n4[0] / 2), Math.ceil(n4[1] / 2)];
          if (E(t4, n4)) return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + r4[0] + ", " + r4[1] + "));\n      }\n    ";
          var e4 = Math.ceil(t4[1] / 2);
          return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r4[0] + ", " + r4[1] + "));\n\n      int index = resTexRC.x * " + r4[1] + " + resTexRC.y;\n      int r = 2 * (index / " + e4 + ");\n      int c = imod(index, " + e4 + ") * 2;\n\n      return ivec2(r, c);\n    }\n  ";
        })(t3, n3);
      case 3:
        return i3 = t3, "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + (a3 = [Math.ceil((o3 = n3)[0] / 2), Math.ceil(o3[1] / 2)])[0] + ", " + a3[1] + "));\n      int index = resTexRC.x * " + a3[1] + " + resTexRC.y;\n\n      int b = index / " + (u3 = (s3 = Math.ceil(i3[2] / 2)) * Math.ceil(i3[1] / 2)) + ";\n      index -= b * " + u3 + ";\n\n      int r = 2 * (index / " + s3 + ");\n      int c = imod(index, " + s3 + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
      default:
        return ((t4, n4) => {
          for (var r4 = [Math.ceil(n4[0] / 2), Math.ceil(n4[1] / 2)], e4 = Math.ceil(t4[t4.length - 1] / 2), i4 = e4 * Math.ceil(t4[t4.length - 2] / 2), o4 = i4, a4 = "", s4 = "b, r, c", u4 = 2; t4.length - 1 > u4; u4++) a4 = "\n      int b" + u4 + " = index / " + (o4 *= t4[t4.length - u4 - 1]) + ";\n      index -= b" + u4 + " * " + o4 + ";\n    " + a4, s4 = "b" + u4 + ", " + s4;
          return "\n    ivec" + t4.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r4[0] + ", " + r4[1] + "));\n      int index = resTexRC.x * " + r4[1] + " + resTexRC.y;\n\n      " + a4 + "\n\n      int b = index / " + i4 + ";\n      index -= b * " + i4 + ";\n\n      int r = 2 * (index / " + e4 + ");\n      int c = imod(index, " + e4 + ") * 2;\n\n      return ivec" + t4.length + "(" + s4 + ");\n    }\n  ";
        })(t3, n3);
    }
    var r3, e3, i3, o3, a3, s3, u3;
  })(n2.logicalShape, l2), a2 = ((t3) => "\n    void setOutput(vec4 val) {\n      " + t3.output + " = val;\n    }\n  ")(h2)) : (o2 = ((t3, n3) => {
    switch (t3.length) {
      case 0:
        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
      case 1:
        return 1 === (r3 = n3)[0] ? "\n      int getOutputCoords() {\n        return int(resultUV.x * " + r3[1] + ".0);\n      }\n    " : 1 === r3[1] ? "\n      int getOutputCoords() {\n        return int(resultUV.y * " + r3[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r3[0] + ", " + r3[1] + "));\n      return resTexRC.x * " + r3[1] + " + resTexRC.y;\n    }\n  ";
      case 2:
        return ((t4, n4) => E(t4, n4) ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + n4[0] + ", " + n4[1] + "));\n      }\n    " : 1 === t4[1] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + n4[0] + ", " + n4[1] + "));\n        int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : 1 === t4[0] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + n4[0] + ", " + n4[1] + "));\n        int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n      int r = index / " + t4[1] + ";\n      int c = index - r * " + t4[1] + ";\n      return ivec2(r, c);\n    }\n  ")(t3, n3);
      case 3:
        return e3 = n3, i3 = Si(["r", "c", "d"], t3), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e3[0] + ", " + e3[1] + "));\n      int index = resTexRC.x * " + e3[1] + " + resTexRC.y;\n      " + i3 + "\n      return ivec3(r, c, d);\n    }\n  ";
      case 4:
        return ((t4, n4) => {
          var r4 = Si(["r", "c", "d", "d2"], t4);
          return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n4[0] + ", " + n4[1] + "));\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n      " + r4 + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
        })(t3, n3);
      case 5:
        return ((t4, n4) => {
          var r4 = Si(["r", "c", "d", "d2", "d3"], t4);
          return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + n4[0] + ",\n                             " + n4[1] + "));\n\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n\n      " + r4 + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
        })(t3, n3);
      case 6:
        return ((t4, n4) => {
          var r4 = Si(["r", "c", "d", "d2", "d3", "d4"], t4);
          return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n4[0] + ", " + n4[1] + "));\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n\n      " + r4 + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
        })(t3, n3);
      default:
        throw Error(t3.length + "-D output sampling is not yet supported");
    }
    var r3, e3, i3;
  })(n2.logicalShape, l2), a2 = ((t3) => "\n    void setOutput(float val) {\n      " + t3.output + " = vec4(val, 0, 0, 0);\n    }\n  ")(h2)), e2 && (d2 += zi), [d2, f2, a2, u2, o2, c2, r2].join("\n");
}
function Fi(t2) {
  var n2 = t2.shapeInfo.logicalShape;
  switch (n2.length) {
    case 0:
      return ((t3) => {
        var n3 = t3.name, r2 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1);
        if (t3.shapeInfo.isUniform) return "float " + r2 + "() {return " + n3 + ";}";
        var e2 = t3.shapeInfo.texShape;
        if (1 === e2[0] && 1 === e2[1]) return "\n      float " + r2 + "() {\n        return sampleTexture(" + n3 + ", halfCR);\n      }\n    ";
        var i2 = t3.shapeInfo.texShape;
        return "\n    float " + r2 + "() {\n      vec2 uv = uvFromFlat(" + i2[0] + ", " + i2[1] + ", " + Gi(n3) + ");\n      return sampleTexture(" + n3 + ", uv);\n    }\n  ";
      })(t2);
    case 1:
      return ((t3) => {
        var n3 = t3.name, r2 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1);
        if (t3.shapeInfo.isUniform) return "\n      float " + r2 + "(int index) {\n        " + Ui(t3) + "\n      }\n    ";
        var e2 = t3.shapeInfo.texShape, i2 = e2[0], o2 = e2[1];
        if (1 === o2 && 1 === i2) return "\n      float " + r2 + "(int index) {\n        return sampleTexture(" + n3 + ", halfCR);\n      }\n    ";
        var a2 = Gi(n3);
        return 1 === o2 ? "\n      float " + r2 + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + a2 + ") + 0.5) / " + i2 + ".0);\n        return sampleTexture(" + n3 + ", uv);\n      }\n    " : 1 === i2 ? "\n      float " + r2 + "(int index) {\n        vec2 uv = vec2((float(index + " + a2 + ") + 0.5) / " + o2 + ".0, 0.5);\n        return sampleTexture(" + n3 + ", uv);\n      }\n    " : "\n    float " + r2 + "(int index) {\n      vec2 uv = uvFromFlat(" + i2 + ", " + o2 + ", index + " + a2 + ");\n      return sampleTexture(" + n3 + ", uv);\n    }\n  ";
      })(t2);
    case 2:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r2 = t3.name, e2 = "get" + r2.charAt(0).toUpperCase() + r2.slice(1), i2 = t3.shapeInfo.texShape;
        if (null != i2 && E(n3, i2)) return "\n    float " + e2 + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + i2[1] + ".0, " + i2[0] + ".0);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  ";
        var o2 = S(n3), a2 = o2.newShape, s2 = o2.keptDims;
        if (n3.length > a2.length) return "\n      " + Fi(qi(t3, a2)) + "\n      float " + e2 + "(int row, int col) {\n        return " + e2 + "(" + Hi(["row", "col"], s2) + ");\n      }\n    ";
        if (t3.shapeInfo.isUniform) return "\n      float " + e2 + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + n3[1] + ", 1)));\n        " + Ui(t3) + "\n      }\n    ";
        var u2 = i2[0], c2 = i2[1], l2 = Gi(r2);
        return 1 === c2 ? "\n    float " + e2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + l2 + "), vec3(" + n3[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + u2 + ".0);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  " : 1 === u2 ? "\n    float " + e2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + l2 + "), vec3(" + n3[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + c2 + ".0, 0.5);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  " : "\n  float " + e2 + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + n3[1] + " + col + " + l2 + ";\n    vec2 uv = uvFromFlat(" + u2 + ", " + c2 + ", index);\n    return sampleTexture(" + r2 + ", uv);\n  }\n";
      })(t2);
    case 3:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r2 = t3.name, e2 = "get" + r2.charAt(0).toUpperCase() + r2.slice(1), i2 = n3[1] * n3[2], o2 = n3[2], a2 = S(n3), s2 = a2.newShape, u2 = a2.keptDims;
        if (n3.length > s2.length) return "\n        " + Fi(qi(t3, s2)) + "\n        float " + e2 + "(int row, int col, int depth) {\n          return " + e2 + "(" + Hi(["row", "col", "depth"], u2) + ");\n        }\n      ";
        if (t3.shapeInfo.isUniform) return "\n      float " + e2 + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + i2 + ", " + o2 + ", 1)));\n        " + Ui(t3) + "\n      }\n    ";
        var c2 = t3.shapeInfo.texShape, l2 = c2[0], h2 = c2[1], f2 = t3.shapeInfo.flatOffset;
        return h2 === i2 && null == f2 ? "\n        float " + e2 + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + o2 + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + h2 + ".0, " + l2 + ".0);\n          return sampleTexture(" + r2 + ", uv);\n        }\n      " : h2 === o2 && null == f2 ? "\n    float " + e2 + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + n3[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + h2 + ".0, " + l2 + ".0);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  " : "\n      float " + e2 + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + i2 + " + col * " + o2 + " + depth + " + Gi(r2) + ";\n        vec2 uv = uvFromFlat(" + l2 + ", " + h2 + ", index);\n        return sampleTexture(" + r2 + ", uv);\n      }\n  ";
      })(t2);
    case 4:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r2 = t3.name, e2 = "get" + r2.charAt(0).toUpperCase() + r2.slice(1), i2 = n3[3], o2 = n3[2] * i2, a2 = n3[1] * o2, s2 = S(n3), u2 = s2.newShape, c2 = s2.keptDims;
        if (n3.length > u2.length) return "\n      " + Fi(qi(t3, u2)) + "\n      float " + e2 + "(int row, int col, int depth, int depth2) {\n        return " + e2 + "(" + Hi(["row", "col", "depth", "depth2"], c2) + ");\n      }\n    ";
        if (t3.shapeInfo.isUniform) return "\n      float " + e2 + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + a2 + ", " + o2 + ", " + i2 + ", 1)));\n        " + Ui(t3) + "\n      }\n    ";
        var l2 = t3.shapeInfo.flatOffset, h2 = t3.shapeInfo.texShape, f2 = h2[0], d2 = h2[1];
        return d2 === a2 && null == l2 ? "\n      float " + e2 + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + o2 + ", " + i2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + d2 + ".0, " + f2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : d2 === i2 && null == l2 ? "\n      float " + e2 + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + n3[1] * n3[2] + ", " + n3[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + d2 + ".0, " + f2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : "\n    float " + e2 + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + a2 + " + col * " + o2 + " +\n          depth * " + i2 + " + depth2;\n      vec2 uv = uvFromFlat(" + f2 + ", " + d2 + ", index + " + Gi(r2) + ");\n      return sampleTexture(" + r2 + ", uv);\n    }\n  ";
      })(t2);
    case 5:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r2 = t3.name, e2 = "get" + r2.charAt(0).toUpperCase() + r2.slice(1), i2 = n3[4], o2 = n3[3] * i2, a2 = n3[2] * o2, s2 = n3[1] * a2, u2 = S(n3), c2 = u2.newShape, l2 = u2.keptDims;
        if (n3.length > c2.length) return "\n      " + Fi(qi(t3, c2)) + "\n      float " + e2 + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + e2 + "(" + Hi(["row", "col", "depth", "depth2", "depth3"], l2) + ");\n      }\n    ";
        if (t3.shapeInfo.isUniform) return "\n      float " + e2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s2 + ", " + a2 + ", " + o2 + ", " + i2 + ")) +\n          depth3;\n        " + Ui(t3) + "\n      }\n    ";
        var h2 = t3.shapeInfo.flatOffset, f2 = t3.shapeInfo.texShape, d2 = f2[0], v2 = f2[1];
        return v2 === s2 && null == h2 ? "\n      float " + e2 + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + a2 + ", " + o2 + ", " + i2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : v2 === i2 && null == h2 ? "\n      float " + e2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + n3[1] * n3[2] * n3[3] + ",\n               " + n3[2] * n3[3] + ", " + n3[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : "\n    float " + e2 + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + s2 + " + col * " + a2 + " + depth * " + o2 + " +\n          depth2 * " + i2 + " + depth3 + " + Gi(r2) + ";\n      vec2 uv = uvFromFlat(" + d2 + ", " + v2 + ", index);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  ";
      })(t2);
    case 6:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r2 = t3.name, e2 = "get" + r2.charAt(0).toUpperCase() + r2.slice(1), i2 = S(n3), o2 = i2.newShape, a2 = i2.keptDims;
        if (n3.length > o2.length) return "\n      " + Fi(qi(t3, o2)) + "\n      float " + e2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + e2 + "(" + Hi(["row", "col", "depth", "depth2", "depth3", "depth4"], a2) + ");\n      }\n    ";
        var s2 = n3[5], u2 = n3[4] * s2, c2 = n3[3] * u2, l2 = n3[2] * c2, h2 = n3[1] * l2;
        if (t3.shapeInfo.isUniform) return "\n      float " + e2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + h2 + ", " + l2 + ", " + c2 + ", " + u2 + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + s2 + ", 1)));\n        " + Ui(t3) + "\n      }\n    ";
        var f2 = t3.shapeInfo.flatOffset, d2 = t3.shapeInfo.texShape, v2 = d2[0], p2 = d2[1];
        return p2 === h2 && null == f2 ? "\n      float " + e2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + l2 + ", " + c2 + ", " + u2 + ", " + s2 + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + p2 + ".0, " + v2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : p2 === s2 && null == f2 ? "\n      float " + e2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + n3[1] * n3[2] * n3[3] * n3[4] + ",\n               " + n3[2] * n3[3] * n3[4] + ",\n               " + n3[3] * n3[4] + ",\n               " + n3[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + p2 + ".0, " + v2 + ".0);\n        return sampleTexture(" + r2 + ", uv);\n      }\n    " : "\n    float " + e2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + h2 + " + col * " + l2 + " + depth * " + c2 + " +\n          depth2 * " + u2 + " + depth3 * " + s2 + " + depth4 + " + Gi(r2) + ";\n      vec2 uv = uvFromFlat(" + v2 + ", " + p2 + ", index);\n      return sampleTexture(" + r2 + ", uv);\n    }\n  ";
      })(t2);
    default:
      throw Error(n2.length + "-D input sampling is not yet supported");
  }
}
function Li(t2) {
  var n2, r2, e2, i2, o2, a2, s2;
  switch (t2.shapeInfo.logicalShape.length) {
    case 0:
      return "\n    vec4 get" + (n2 = t2.name).charAt(0).toUpperCase() + n2.slice(1) + "() {\n      return " + Ti().texture2D + "(" + n2 + ", halfCR);\n    }\n  ";
    case 1:
      return i2 = "get" + (e2 = (r2 = t2).name).charAt(0).toUpperCase() + e2.slice(1), a2 = [Math.ceil((o2 = r2.shapeInfo.texShape)[0] / 2), Math.ceil(o2[1] / 2)], s2 = Ti(), "\n    vec4 " + i2 + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + a2[0] + ", " + a2[1] + ", index);\n      return " + s2.texture2D + "(" + e2 + ", uv);\n    }\n  ";
    case 2:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r3 = t3.name, e3 = "get" + r3.charAt(0).toUpperCase() + r3.slice(1), i3 = t3.shapeInfo.texShape, o3 = i3[0], a3 = i3[1], s3 = Ti();
        if (null != i3 && E(n3, i3)) return "\n      vec4 " + e3 + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a3 + ".0, " + o3 + ".0);\n\n        return " + s3.texture2D + "(" + r3 + ", uv);\n      }\n    ";
        var u2 = [Math.ceil(i3[0] / 2), Math.ceil(i3[1] / 2)];
        return "\n    vec4 " + e3 + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + Math.ceil(n3[1] / 2) + ", " + u2[0] + ", " + u2[1] + ", row, col);\n      return " + s3.texture2D + "(" + r3 + ", uv);\n    }\n  ";
      })(t2);
    case 3:
      return ((t3) => {
        var n3 = t3.shapeInfo.logicalShape, r3 = t3.name, e3 = "get" + r3.charAt(0).toUpperCase() + r3.slice(1), i3 = t3.shapeInfo.texShape, o3 = [Math.ceil(i3[0] / 2), Math.ceil(i3[1] / 2)];
        if (1 === n3[0]) return "\n        " + Li(qi(t3, n3.slice(1))) + "\n        vec4 " + e3 + "(int b, int row, int col) {\n          return " + e3 + "(" + Hi(["b", "row", "col"], [1, 2]) + ");\n        }\n      ";
        var a3 = o3[0], s3 = o3[1], u2 = Math.ceil(n3[2] / 2);
        return "\n    vec4 " + e3 + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + a3 + ", " + s3 + ", " + u2 * Math.ceil(n3[1] / 2) + ", " + u2 + ", b, row, col);\n      return " + Ti().texture2D + "(" + r3 + ", uv);\n    }\n  ";
      })(t2);
    default:
      return ((t3) => {
        for (var n3 = t3.shapeInfo.logicalShape, r3 = n3.length, e3 = t3.name, i3 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1), o3 = t3.shapeInfo.texShape, a3 = [Math.ceil(o3[0] / 2), Math.ceil(o3[1] / 2)], s3 = a3[0], u2 = a3[1], c2 = Math.ceil(n3[r3 - 1] / 2), l2 = c2 * Math.ceil(n3[r3 - 2] / 2), h2 = "int b, int row, int col", f2 = "b * " + l2 + " + (row / 2) * " + c2 + " + (col / 2)", d2 = 2; r3 - 1 > d2; d2++) h2 = "int b" + d2 + ", " + h2, f2 = "b" + d2 + " * " + (l2 *= n3[r3 - d2 - 1]) + " + " + f2;
        return "\n    vec4 " + i3 + "(" + h2 + ") {\n      int index = " + f2 + ";\n      int texR = index / " + u2 + ";\n      int texC = index - texR * " + u2 + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + u2 + ", " + s3 + ");\n      return " + Ti().texture2D + "(" + e3 + ", uv);\n    }\n  ";
      })(t2);
  }
}
var Bi = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var Vi = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var Wi = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var zi = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
function Gi(t2) {
  return "offset" + t2;
}
function Ui(t2) {
  var n2 = t2.name, r2 = _(t2.shapeInfo.logicalShape);
  return 2 > r2 ? "return " + n2 + ";" : "\n    for (int i = 0; i < " + r2 + "; i++) {\n      if (i == index) {\n        return " + n2 + "[i];\n      }\n    }\n  ";
}
function ji(t2) {
  if (1 >= t2) return "int";
  if (2 === t2) return "ivec2";
  if (3 === t2) return "ivec3";
  if (4 === t2) return "ivec4";
  if (5 === t2) return "ivec5";
  if (6 === t2) return "ivec6";
  throw Error("GPU for rank " + t2 + " is not yet supported");
}
function qi(t2, n2) {
  var r2 = JSON.parse(JSON.stringify(t2));
  return r2.shapeInfo.logicalShape = n2, r2;
}
function Hi(t2, n2) {
  return n2.map((n3) => t2[n3]).join(", ");
}
var Xi = function(t2, n2, r2, e2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, g(t2.length > 2, () => "Packed arg" + (r2.charAt(0).toUpperCase() + r2.slice(1)) + " supports only inputs with rank above 2.");
  var i2 = Math.ceil(t2[t2.length - 1] / n2);
  this.outputShape = t2.slice(0, -1), i2 > 1 && this.outputShape.push(i2), e2 || this.variableNames.push("bestIndicesA");
  var o2, a2, s2 = this.outputShape, u2 = s2.length, c2 = ji(u2), l2 = Ii("coords", u2);
  if (1 === i2) {
    var h2 = ji(a2 = u2 + 1);
    o2 = "\n        " + h2 + " sourceLocR = " + h2 + "(" + l2.join() + ", 0);\n        ++" + l2[u2 - 1] + ";\n        " + h2 + " sourceLocG = " + h2 + "(" + l2.join() + ", 0);\n        ++" + l2[u2 - 2] + ";\n        " + h2 + " sourceLocA = " + h2 + "(" + l2.join() + ", 0);\n        --" + l2[u2 - 1] + ";\n        " + h2 + " sourceLocB = " + h2 + "(" + l2.join() + ", 0);\n        --" + l2[u2 - 2] + ";";
  } else a2 = u2, o2 = "\n        " + c2 + " sourceLocR = coords;\n        ++" + l2[u2 - 1] + ";\n        " + c2 + " sourceLocG = coords;\n        ++" + l2[u2 - 2] + ";\n        " + c2 + " sourceLocA = coords;\n        --" + l2[u2 - 1] + ";\n        " + c2 + " sourceLocB = coords;\n        --" + l2[u2 - 2] + ";";
  var f2 = ["x", "y", "z", "w", "u", "v"].slice(0, a2), d2 = "." + f2[a2 - 1], v2 = f2.map((t3) => "int " + t3), p2 = Ii("sourceLocR", a2 - 1).concat("inIdx.r"), m2 = Ii("sourceLocG", a2 - 1).concat("inIdx.g"), x2 = Ii("sourceLocB", a2 - 1).concat("inIdx.b"), b2 = Ii("sourceLocA", a2 - 1).concat("inIdx.a"), w2 = "max" === r2 ? "greaterThan" : "lessThan", y2 = e2 ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + p2.join() + "),\n                             getBestIndicesAChannel(" + m2.join() + "),\n                             getBestIndicesAChannel(" + x2.join() + "),\n                             getBestIndicesAChannel(" + b2.join() + ")));", C2 = "vec4(\n            getAChannel(" + p2.join() + "),\n            hasNextCol ? getAChannel(" + m2.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + x2.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + b2.join() + ") : 0.)", _2 = e2 ? "" : "\n      float getBestIndicesAChannel(" + v2.join() + ") {\n        return getChannel(getBestIndicesA(" + f2.join() + "),\n                                          vec2(" + f2.slice(-2).join() + "));\n      }";
  this.userCode = "\n      float getAChannel(" + v2.join() + ") {\n        return getChannel(getA(" + f2.join() + "),\n                               vec2(" + f2.slice(-2).join() + "));\n      }\n      " + _2 + "\n      void main() {\n        " + c2 + " coords = getOutputCoords();\n        bool hasNextCol = " + l2[u2 - 1] + " < " + (s2[u2 - 1] - 1) + ";\n        bool hasNextRow = " + l2[u2 - 2] + " < " + (s2[u2 - 2] - 1) + ";\n        " + o2 + "\n        ivec4 srcIdx = ivec4(sourceLocR" + d2 + ", sourceLocG" + d2 + ",\n          sourceLocB" + d2 + ", sourceLocA" + d2 + ") * " + n2 + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + C2 + ";\n\n        for (int i = 0; i < " + n2 + "; i++) {\n          inIdx = srcIdx;\n          " + y2 + "\n          vec4 candidate = " + C2 + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + w2 + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";
};
var $i = function(t2) {
  this.variableNames = ["dy"], this.outputShape = t2.inShape;
  var n2 = t2.effectiveFilterHeight, r2 = t2.effectiveFilterWidth;
  this.userCode = "\n      const ivec2 pads = ivec2(" + (n2 - 1 - t2.padInfo.top) + ", " + (r2 - 1 - t2.padInfo.left) + ");\n      const float avgMultiplier = float(" + 1 / (t2.filterHeight * t2.filterWidth) + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + n2 + ";\n            wR += " + t2.dilationHeight + ") {\n          float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + r2 + ";\n            wC+= " + t2.dilationWidth + ") {\n            float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Ki = function(t2) {
  this.variableNames = ["dy"], this.outputShape = t2.inShape;
  var n2 = t2.effectiveFilterDepth, r2 = t2.effectiveFilterHeight, e2 = t2.effectiveFilterWidth;
  this.userCode = "\n      const ivec3 pads = ivec3(" + (n2 - 1 - t2.padInfo.front) + ", " + (r2 - 1 - t2.padInfo.top) + ", " + (e2 - 1 - t2.padInfo.left) + ");\n      const float avgMultiplier = float(" + 1 / (t2.filterDepth * t2.filterHeight * t2.filterWidth) + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + n2 + ";\n            wD += " + t2.dilationDepth + ") {\n          float dyD = float(dyDCorner + wD) / " + t2.strideDepth + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + r2 + ";\n              wR += " + t2.dilationHeight + ") {\n            float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + e2 + ";\n                wC += " + t2.dilationWidth + ") {\n              float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Yi = function(t2, n2, r2, e2, i2, o2) {
  this.outputShape = [], this.variableNames = ["x", "mean", "variance"], Xe(t2, n2), Xe(t2, r2);
  var a2 = "0.0";
  null != e2 && (Xe(t2, e2), this.variableNames.push("offset"), a2 = "getOffsetAtOutCoords()");
  var s2 = "1.0";
  null != i2 && (Xe(t2, i2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + a2 + ";\n        float scale = " + s2 + ";\n        float inv = scale * inversesqrt(variance + float(" + o2 + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";
};
var Ji = function(t2, n2, r2, e2, i2, o2) {
  this.packedInputs = true, this.packedOutput = true, this.variableNames = ["x", "mean", "variance"], Xe(t2, n2), Xe(t2, r2);
  var a2 = "vec4(0.0)";
  null != e2 && (Xe(t2, e2), this.variableNames.push("offset"), a2 = "getOffsetAtOutCoords()");
  var s2 = "vec4(1.0)";
  null != i2 && (Xe(t2, i2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        vec4 offset = " + a2 + ";\n        vec4 scale = " + s2 + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + o2 + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";
};
var Zi = function(t2, n2, r2) {
  this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = Xe(n2, r2), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t2 + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";
};
var Qi = "return a + b;";
var to = "return a - b;";
var no = "return a * b;";
var ro = "return (a < 0.) ? b * a : a;";
var eo = function(t2, n2, r2) {
  this.variableNames = ["A", "B"], this.outputShape = Xe(n2, r2), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + t2 + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";
};
var io = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
var oo = function(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = false), this.variableNames = ["A", "B"], this.supportsBroadcasting = true, this.packedInputs = true, this.packedOutput = true, this.outputShape = Xe(n2, r2);
  var i2 = this.outputShape.length, o2 = "";
  if (e2) if (0 === i2 || 1 === _(this.outputShape)) o2 = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";
  else if (o2 = "\n          " + ji(i2) + " coords = getOutputCoords();\n        ", 1 === i2) o2 += "\n            result.y = (coords + 1) >= " + this.outputShape[0] + " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";
  else {
    var a2 = Ii("coords", i2);
    o2 += "\n            bool nextRowOutOfBounds =\n              (" + a2[i2 - 2] + " + 1) >= " + this.outputShape[i2 - 2] + ";\n            bool nextColOutOfBounds =\n              (" + a2[i2 - 1] + " + 1) >= " + this.outputShape[i2 - 1] + ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";
  }
  this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + t2 + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        " + o2 + "\n\n        setOutput(result);\n      }\n    ";
};
var ao = (function() {
  function t2(t3) {
    this.variableNames = ["A"], this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3, n2) {
    var r2 = this;
    return (e2, i2) => {
      null == r2.minLoc && (r2.minLoc = e2.getUniformLocationNoThrow(i2, "minVal"), r2.maxLoc = e2.getUniformLocationNoThrow(i2, "maxVal")), e2.gl.uniform1f(r2.minLoc, t3), e2.gl.uniform1f(r2.maxLoc, n2);
    };
  }, t2;
})();
var so = (function() {
  function t2(t3) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3, n2) {
    var r2 = this;
    return (e2, i2) => {
      null == r2.minLoc && (r2.minLoc = e2.getUniformLocationNoThrow(i2, "minVal"), r2.maxLoc = e2.getUniformLocationNoThrow(i2, "maxVal")), e2.gl.uniform1f(r2.minLoc, t3), e2.gl.uniform1f(r2.maxLoc, n2);
    };
  }, t2;
})();
var uo = function(t2) {
  this.variableNames = ["real", "imag"], this.outputShape = t2, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";
};
var co = function(t2) {
  this.outputShape = [], this.outputShape = rr(t2, 1), this.variableNames = t2.map((t3, n3) => "T" + n3);
  var n2 = Array(t2.length - 1);
  n2[0] = t2[0][1];
  for (var r2 = 1; n2.length > r2; r2++) n2[r2] = n2[r2 - 1] + t2[r2][1];
  var e2 = ["if (yC < " + n2[0] + ") setOutput(getT0(yR, yC));"];
  for (r2 = 1; n2.length > r2; r2++) e2.push("else if (yC < " + n2[r2] + ") setOutput(getT" + r2 + "(yR, yC-" + n2[r2 - 1] + "));");
  e2.push("else setOutput(getT" + n2.length + "(yR, yC-" + n2[n2.length - 1] + "));"), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + e2.join("\n        ") + "\n      }\n    ";
};
var lo = function(t2, n2) {
  this.packedInputs = true, this.packedOutput = true, this.outputShape = [], this.outputShape = rr(t2, n2);
  var r2 = this.outputShape, e2 = r2.length, i2 = ji(e2), o2 = Ii("coords", e2), a2 = ["x", "y", "z", "w", "u", "v"].slice(0, e2);
  this.variableNames = t2.map((t3, n3) => "T" + n3);
  var s2 = Array(t2.length - 1);
  s2[0] = t2[0][n2];
  for (var u2 = 1; s2.length > u2; u2++) s2[u2] = s2[u2 - 1] + t2[u2][n2];
  var c2 = a2[n2], l2 = a2.slice(-2), h2 = a2.join(), f2 = "if (" + c2 + " < " + s2[0] + ") {\n        return getChannel(\n            getT0(" + h2 + "), vec2(" + l2.join() + "));\n        }";
  for (u2 = 1; s2.length > u2; u2++) {
    var d2 = s2[u2 - 1];
    f2 += "\n        if (" + c2 + " < " + s2[u2] + "  && " + c2 + " >= " + s2[u2 - 1] + ") {\n          return getChannel(\n            getT" + u2 + "(" + ho(a2, c2, d2) + "),\n            vec2(" + ho(l2, c2, d2) + "));\n        }";
  }
  var v2 = s2[s2.length - 1];
  f2 += "\n        return getChannel(\n          getT" + s2.length + "(" + ho(a2, c2, v2) + "),\n          vec2(" + ho(l2, c2, v2) + "));", this.userCode = "\n      float getValue(" + a2.map((t3) => "int " + t3) + ") {\n        " + f2 + "\n      }\n\n      void main() {\n        " + i2 + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + o2 + "), 0., 0., 0.);\n\n        " + o2[e2 - 1] + " = " + o2[e2 - 1] + " + 1;\n        if (" + o2[e2 - 1] + " < " + r2[e2 - 1] + ") {\n          result.g = getValue(" + o2 + ");\n        }\n\n        " + o2[e2 - 2] + " = " + o2[e2 - 2] + " + 1;\n        if (" + o2[e2 - 2] + " < " + r2[e2 - 2] + ") {\n          result.a = getValue(" + o2 + ");\n        }\n\n        " + o2[e2 - 1] + " = " + o2[e2 - 1] + " - 1;\n        if (" + o2[e2 - 2] + " < " + r2[e2 - 2] + " &&\n            " + o2[e2 - 1] + " < " + r2[e2 - 1] + ") {\n          result.b = getValue(" + o2 + ");\n        }\n        setOutput(result);\n      }\n    ";
};
function ho(t2, n2, r2) {
  var e2 = t2.indexOf(n2);
  return t2.map((t3, n3) => n3 === e2 ? t3 + " - " + r2 : t3).join();
}
var fo = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + t2.strideHeight + " - " + t2.padInfo.top + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + t2.strideWidth + " - " + t2.padInfo.left + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              if (" + ("channelsLast" === t2.dataFormat) + ") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var vo = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var n2 = t2.filterHeight, r2 = t2.filterWidth, e2 = "channelsLast" === t2.dataFormat;
  this.userCode = "\n      const ivec2 pads = ivec2(" + (n2 - 1 - t2.padInfo.top) + ", " + (r2 - 1 - t2.padInfo.left) + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[" + (e2 ? 3 : 1) + "];\n\n        ivec2 dyCorner = ivec2(coords[" + (e2 ? 1 : 2) + "], coords[" + (e2 ? 2 : 3) + "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + n2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + n2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + r2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + r2 + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n\n              if (" + e2 + ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var po = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape, this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t2.outDepth + "; yF++) {\n            int xF = wF + yF * " + t2.strideDepth + " - " + t2.padInfo.front + ";\n\n            if (xF < 0 || xF >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n              int xR = wR + yR * " + t2.strideHeight + " - " + t2.padInfo.top + ";\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n                int xC = wC + yC * " + t2.strideWidth + " - " + t2.padInfo.left + ";\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var mo = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var n2 = t2.filterDepth, r2 = t2.filterHeight, e2 = t2.filterWidth;
  this.userCode = "\n      const ivec3 pads = ivec3(" + (n2 - 1 - t2.padInfo.front) + ", " + (r2 - 1 - t2.padInfo.top) + ", " + (e2 - 1 - t2.padInfo.left) + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + n2 + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + t2.strideDepth + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t2.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + n2 + " - 1 - wF;\n\n          for (int wR = 0; wR < " + r2 + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + r2 + " - 1 - wR;\n\n            for (int wC = 0; wC < " + e2 + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + e2 + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var xo = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + t2.outChannels / t2.inChannels + " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + t2.strideHeight + " - " + t2.padInfo.top + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + t2.strideWidth + " - " + t2.padInfo.left + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var bo = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var n2 = t2.filterHeight, r2 = t2.filterWidth, e2 = t2.outChannels / t2.inChannels;
  this.userCode = "\n      const ivec2 pads = ivec2(" + (n2 - 1 - t2.padInfo.top) + ", " + (r2 - 1 - t2.padInfo.left) + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + n2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + n2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + r2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + r2 + " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + e2 + "; dm++) {\n              int d2 = d1 * " + e2 + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var go = function(t2, n2, r2, e2) {
  void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = null), void 0 === e2 && (e2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var i2 = t2.padInfo.top, o2 = t2.padInfo.left, a2 = t2.strideHeight, s2 = t2.strideWidth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterHeight, h2 = t2.filterWidth, f2 = 4 * Math.floor(t2.inChannels / 4), d2 = t2.inChannels % 4, v2 = "channelsLast" === t2.dataFormat, p2 = v2 ? 1 : 2, m2 = v2 ? 2 : 3, x2 = v2 ? 3 : 1, b2 = "", g2 = "";
  r2 && (b2 = e2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + r2 + "\n        }" : "\n          float activation(float x) {\n            " + r2 + "\n          }\n        ", g2 = "result = activation(result);");
  var w2 = n2 ? "result += getBiasAtOutCoords();" : "";
  n2 && this.variableNames.push("bias"), e2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + b2 + "\n\n      const ivec2 strides = ivec2(" + a2 + ", " + s2 + ");\n      const ivec2 pads = ivec2(" + i2 + ", " + o2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[" + x2 + "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[" + p2 + "], coords[" + m2 + "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + l2 + "; wR++) {\n          int xR = xRCorner + wR * " + u2 + ";\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + h2 + "; wC++) {\n            int xC = xCCorner + wC * " + c2 + ";\n\n            if (xC < 0 || xC >= " + t2.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + f2 + "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (" + v2 + ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (" + (1 === d2) + ") {\n\n              if (" + v2 + ") {\n                dotProd +=\n                    getX(batch, xR, xC, " + f2 + ") *\n                    getW(wR, wC, " + f2 + ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, " + f2 + ", xR, xC) *\n                    getW(wR, wC, " + f2 + ", d2);\n              }\n\n            } else if (" + (2 === d2) + ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2)\n              );\n\n              if (" + v2 + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (" + (3 === d2) + ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2),\n                getW(wR, wC, " + f2 + " + 2, d2)\n              );\n\n              if (" + v2 + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1),\n                  getX(batch, xR, xC, " + f2 + " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC),\n                  getX(batch, " + f2 + " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        " + w2 + "\n        " + g2 + "\n        setOutput(result);\n      }\n    ";
};
var wo = function(t2) {
  this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var n2 = t2.padInfo.front, r2 = t2.padInfo.top, e2 = t2.padInfo.left, i2 = t2.strideDepth, o2 = t2.strideHeight, a2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterDepth, h2 = t2.filterHeight, f2 = t2.filterWidth, d2 = 4 * Math.floor(t2.inChannels / 4), v2 = t2.inChannels % 4;
  this.userCode = "\n      const ivec3 strides = ivec3(" + i2 + ", " + o2 + ", " + a2 + ");\n      const ivec3 pads = ivec3(" + n2 + ", " + r2 + ", " + e2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l2 + "; wF++) {\n          int xF = xFCorner + wF * " + s2 + ";\n\n          if (xF < 0 || xF >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h2 + "; wR++) {\n            int xR = xRCorner + wR * " + u2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + f2 + "; wC++) {\n              int xC = xCCorner + wC * " + c2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + d2 + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === v2) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + d2 + ") *\n                  getW(wF, wR, wC, " + d2 + ", d2);\n              } else if (" + (2 === v2) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === v2) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1),\n                  getX(batch, xF, xR, xC, " + d2 + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2),\n                  getW(wF, wR, wC, " + d2 + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var yo = function(t2, n2, r2, e2) {
  void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = null), void 0 === e2 && (e2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var i2 = t2.inHeight, o2 = t2.inWidth, a2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, v2 = t2.outChannels / t2.inChannels, p2 = "", m2 = "";
  r2 && (p2 = e2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + r2 + "\n        }" : "\n          float activation(float x) {\n            " + r2 + "\n          }\n        ", m2 = "result = activation(result);");
  var x2 = n2 ? "result += getBiasAtOutCoords();" : "";
  n2 && this.variableNames.push("bias"), e2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + p2 + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + a2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + v2 + ";\n        int q = d2 - d1 * " + v2 + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + f2 + "; wR++) {\n          int xR = xRCorner + wR * " + l2 + ";\n\n          if (xR < 0 || xR >= " + i2 + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + d2 + "; wC++) {\n            int xC = xCCorner + wC * " + h2 + ";\n\n            if (xC < 0 || xC >= " + o2 + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        " + x2 + "\n        " + m2 + "\n        setOutput(result);\n      }\n    ";
};
var Co = function(t2, n2, r2, e2) {
  void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = null), void 0 === e2 && (e2 = false), this.variableNames = ["x", "W"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2.outShape;
  for (var i2 = t2.inHeight, o2 = t2.inWidth, a2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, v2 = d2, p2 = "int xR; int xC; int xCOffset;", m2 = 0; f2 > m2; m2++) for (var b2 = 0; d2 > b2; b2++) p2 += "\n          vec4 xTexelR" + m2 + "C" + 2 * b2 + " = vec4(0.);\n          vec4 wR" + m2 + "C" + b2 + " = vec4(0.);\n          vec4 xR" + m2 + "C" + b2 + " = vec4(0.);";
  for (m2 = 0; f2 > m2; m2++) for (var g2 = 0; v2 > g2; g2++) {
    if (p2 += "\n          xR = xRCorner + " + m2 * l2 + ";\n          xC = xCCorner + " + (b2 = 2 * g2) * h2 + ";\n        ", 1 === c2) {
      if (d2 > b2 && (p2 += s2 % 2 == 1 ? "\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < " + i2 + " && xCOffset >= 0 && xCOffset < " + o2 + ") {\n                  xTexelR" + m2 + "C" + b2 + " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + o2 + ") {\n                    xTexelR" + m2 + "C" + b2 + ".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR" + m2 + "C" + b2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < " + i2 + " && xCOffset >= 0 && xCOffset < " + o2 + ") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + o2 + ") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR" + m2 + "C" + b2 + " = vec4(previous.zw, xTexelR" + m2 + "C" + b2 + ".xy);\n                } else {\n                  xR" + m2 + "C" + b2 + " = vec4(0, 0, xTexelR" + m2 + "C" + b2 + ".xy);\n                }\n              " : "\n                if(xR >= 0 && xR < " + i2 + " && xC >= 0 && xC < " + o2 + ") {\n                  xTexelR" + m2 + "C" + b2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m2 + "C" + b2 + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + b2 + " = xTexelR" + m2 + "C" + b2 + ";\n              ", d2 > b2 + 1)) {
        var w2 = s2 % 2 == 0 ? x(h2) : h2;
        h2 % 2 == 0 && s2 % 2 == 1 || h2 % 2 != 0 && s2 % 2 != 1 ? (p2 += "\n                  xCOffset = xC + " + s2 % 2 + " + " + w2 + ";\n\n                  if(xR >= 0 && xR < " + i2 + " &&\n                    xCOffset >= 0 && xCOffset < " + o2 + ") {\n                    xTexelR" + m2 + "C" + (b2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n                ", h2 > 1 && (p2 += "\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < " + i2 + " &&\n                      xCOffset >= 0 && xCOffset < " + o2 + ") {\n                      xTexelR" + m2 + "C" + b2 + " = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR" + m2 + "C" + b2 + " = vec4(0.);\n                    }\n                  "), p2 += "\n                  xR" + m2 + "C" + (b2 + 1) + " = vec4(\n                    xTexelR" + m2 + "C" + b2 + ".zw, xTexelR" + m2 + "C" + (b2 + 2) + ".xy);\n                ") : p2 += "\n                  xCOffset = xC + " + w2 + ";\n\n                  if(xR >= 0 && xR < " + i2 + " &&\n                    xCOffset >= 0 && xCOffset < " + o2 + ") {\n                    xTexelR" + m2 + "C" + (b2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR" + m2 + "C" + (b2 + 1) + " = xTexelR" + m2 + "C" + (b2 + 2) + ";\n                ";
      }
    } else d2 > b2 && (p2 += "\n              if(xR >= 0 && xR < " + i2 + ") {\n            ", s2 % 2 == 1 ? (p2 += "\n                xCOffset = xC + 1 - " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + o2 + ") {\n                  xTexelR" + m2 + "C" + b2 + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m2 + "C" + b2 + " = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < " + o2 + ") {\n                  xTexelR" + m2 + "C" + (b2 + 2) + " = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR" + m2 + "C" + (b2 + 2) + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + b2 + " = vec4(\n                  xTexelR" + m2 + "C" + b2 + ".zw, xTexelR" + m2 + "C" + (b2 + 2) + ".zw);\n              ", d2 > b2 + 1 && (p2 += "\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + " + c2 + ";\n                  if(xCOffset >= 0 && xCOffset < " + o2 + ") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR" + m2 + "C" + (b2 + 1) + " = vec4(xTexelR" + m2 + "C" + (b2 + 2) + ".xy, final.xy);\n                ")) : (p2 += "\n                if(xC >= 0 && xC < " + o2 + ") {\n                  xTexelR" + m2 + "C" + b2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m2 + "C" + b2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + o2 + ") {\n                  xTexelR" + m2 + "C" + (b2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m2 + "C" + (b2 + 2) + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + b2 + " = vec4(\n                  xTexelR" + m2 + "C" + b2 + ".xy, xTexelR" + m2 + "C" + (b2 + 2) + ".xy);\n              ", d2 > b2 + 1 && (p2 += "\n                  xR" + m2 + "C" + (b2 + 1) + " = vec4(\n                    xTexelR" + m2 + "C" + b2 + ".zw, xTexelR" + m2 + "C" + (b2 + 2) + ".zw);\n                ")), p2 += "}");
    d2 > b2 && (p2 += "\n            vec4 wTexelR" + m2 + "C" + b2 + " = getW(" + m2 + ", " + b2 + ", d1, q);\n            wR" + m2 + "C" + b2 + " = vec4(wTexelR" + m2 + "C" + b2 + ".xz, wTexelR" + m2 + "C" + b2 + ".xz);\n          ", d2 > b2 + 1 && (p2 += "\n              vec4 wTexelR" + m2 + "C" + (b2 + 1) + " = getW(" + m2 + ", " + (b2 + 1) + ", d1, q);\n              wR" + m2 + "C" + (b2 + 1) + " =\n                vec4(wTexelR" + m2 + "C" + (b2 + 1) + ".xz, wTexelR" + m2 + "C" + (b2 + 1) + ".xz);"));
  }
  for (m2 = 0; f2 > m2; m2++) for (b2 = 0; d2 > b2; b2++) p2 += "dotProd += xR" + m2 + "C" + b2 + " * wR" + m2 + "C" + b2 + ";";
  var y2 = "", C2 = "";
  r2 && (y2 = e2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + r2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + r2 + "\n        }", C2 = "result = activation(result);");
  var _2 = n2 ? "result += getBiasAtOutCoords();" : "";
  n2 && this.variableNames.push("bias"), e2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + y2 + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + a2 + ", " + s2 + ");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        " + p2 + "\n\n        vec4 result = dotProd;\n        " + _2 + "\n        " + C2 + "\n        setOutput(result);\n      }\n    ";
};
var _o = function(t2, n2, r2, e2, i2) {
  this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
  var o2 = t2[0], a2 = t2[1], s2 = t2[2], u2 = r2[0], c2 = r2[1];
  this.outputShape = [n2[0], u2, c2, t2[3]];
  var l2 = [a2 - 1 + ".0", s2 - 1 + ".0"], h2 = l2[0], f2 = l2[1], d2 = u2 > 1 ? ["" + (a2 - 1) / (u2 - 1), "(y2-y1) * height_ratio", "y1*" + h2 + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + h2], v2 = c2 > 1 ? ["" + (s2 - 1) / (c2 - 1), "(x2-x1) * width_ratio", "x1*" + f2 + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + f2];
  this.userCode = "\n      const float height_ratio = float(" + d2[0] + ");\n      const float width_ratio = float(" + v2[0] + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + o2 + ") {\n          return;\n        }\n\n        float height_scale = " + d2[1] + ";\n        float width_scale = " + v2[1] + ";\n\n        float in_y = " + d2[2] + ";\n        if( in_y < 0.0 || in_y > " + h2 + " ) {\n          setOutput(float(" + i2 + "));\n          return;\n        }\n        float in_x = " + v2[2] + ";\n        if( in_x < 0.0 || in_x > " + f2 + " ) {\n          setOutput(float(" + i2 + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + ("bilinear" === e2 ? 1 : 0) + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";
};
var Eo = function(t2, n2, r2) {
  this.variableNames = ["x"], this.outputShape = t2;
  var e2 = t2.length, i2 = t2[t2.length - 1], o2 = r2 ? "<" : ">";
  this.userCode = "\n      int getIndex(int i) {\n        " + (r2 ? "return " + i2 + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + ji(e2) + " coords = getOutputCoords();\n        int end = " + Ro(e2, "coords") + ";\n        float val = 0.0;\n        for (int i = " + i2 + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + o2 + " end) {\n            continue;\n          }\n          if (idx == end && " + n2 + ") {\n            continue;\n          }\n          " + Ro(e2, "coords") + " = idx;\n          val += getX(" + ((t3, n3) => {
    if (1 === t3) return "" + n3;
    if (2 === t3) return n3 + ".x, " + n3 + ".y";
    if (3 === t3) return n3 + ".x, " + n3 + ".y, " + n3 + ".z";
    if (4 === t3) return n3 + ".x, " + n3 + ".y, " + n3 + ".z, " + n3 + ".w";
    throw Error("Cumulative sum for rank " + t3 + " is not yet supported");
  })(e2, "coords") + ");\n        }\n        setOutput(val);\n      }\n    ";
};
function Ro(t2, n2) {
  if (1 === t2) return "" + n2;
  if (2 === t2) return n2 + ".y";
  if (3 === t2) return n2 + ".z";
  if (4 === t2) return n2 + ".w";
  throw Error("Cumulative sum for rank " + t2 + " is not yet supported");
}
var Ao = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outPackingScheme = Pt.DENSE;
  var n2 = Ut(t2), r2 = Ti();
  this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + Si(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + n2[0] + ", " + n2[1] + "));\n        int index = 4 * (resTexRC.x * " + n2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        " + r2.output + " = result;\n      }\n    ";
};
var No = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outPackingScheme = Pt.DENSE;
  var n2 = Ut(t2), r2 = Ti();
  this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + Si(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + n2[0] + ", " + n2[1] + "));\n        int index = 4 * (resTexRC.x * " + n2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        " + r2.output + " = result;\n      }\n    ";
};
var Oo = (function() {
  function t2(t3, n2, r2) {
    this.variableNames = ["x"], this.outputShape = [], this.outputShape = t3, this.blockSize = n2, this.dataFormat = r2, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + n2 + ";\n      int offset_h = imod(h, " + n2 + ");\n      int in_w = w / " + n2 + ";\n      int offset_w = imod(w, " + n2 + ");\n      int offset_d = (offset_h * " + n2 + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  ";
  }
  return t2.prototype.getHeightCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]";
  }, t2.prototype.getWidthCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]";
  }, t2.prototype.getDepthCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]";
  }, t2.prototype.getOutputDepthSize = function() {
    return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1];
  }, t2.prototype.getInputSamplingString = function() {
    return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)";
  }, t2;
})();
var Mo = function(t2) {
  this.variableNames = ["X"], this.outputShape = [t2, t2], this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";
};
var Io = function(t2) {
  this.variableNames = ["A"], this.outTexUsage = Ft.DOWNLOAD;
  var n2 = Ti();
  this.outputShape = t2, this.userCode = "\n      " + ki + "\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + n2.output + " = encode_float(x);\n      }\n    ";
};
var To = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outTexUsage = Ft.DOWNLOAD;
  var n2 = Ti();
  this.outputShape = t2, this.userCode = "\n      " + ki + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        " + n2.output + " = encode_float(x);\n      }\n    ";
};
var So = function(t2, n2, r2) {
  void 0 === r2 && (r2 = false), this.variableNames = ["A"];
  var e2 = Ti(), i2 = n2[0], o2 = n2[1];
  this.outputShape = t2;
  var a2 = "result";
  r2 && (a2 = "floor(result * 255. + 0.5)"), this.userCode = "\n      " + Di(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / " + o2 + ";\n        int c = imod(flatIndex, " + o2 + ");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(" + o2 + ".0, " + i2 + ".0);\n        vec4 values = " + e2.texture2D + "(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        " + e2.output + " = vec4(" + a2 + ", 0., 0., 0.);\n      }\n    ";
};
var Do = function(t2, n2, r2) {
  void 0 === r2 && (r2 = false), this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
  var e2 = Ti(), i2 = n2[0], o2 = n2[1];
  this.outputShape = t2;
  var a2 = "", s2 = "result";
  r2 && (s2 = "floor(result * 255. + 0.5)");
  for (var u2 = 0; 1 >= u2; u2++) for (var c2 = 0; 1 >= c2; c2++) {
    var l2 = 2 * u2 + c2;
    a2 += "\n          localCoords = coords;\n          if(localCoords[2] + " + c2 + " < " + t2[2] + ") {\n            localCoords[2] += " + c2 + ";\n            if(localCoords[1] + " + u2 + " < " + t2[1] + ") {\n              localCoords[1] += " + u2 + ";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / " + o2 + ";\n              c = imod(flatIndex, " + o2 + ");\n              uv = (vec2(c, r) + halfCR) / vec2(" + o2 + ".0, " + i2 + ".0);\n              values = " + e2.texture2D + "(A, uv);\n\n              if(offset == 0) {\n                result[" + l2 + "] = values[0];\n              } else if(offset == 1) {\n                result[" + l2 + "] = values[1];\n              } else if(offset == 2) {\n                result[" + l2 + "] = values[2];\n              } else {\n                result[" + l2 + "] = values[3];\n              }\n            }\n          }\n        ";
  }
  this.userCode = "\n      " + Di(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        " + a2 + "\n\n        " + e2.output + " = " + s2 + ";\n      }\n    ";
};
var ko = function(t2, n2, r2) {
  this.variableNames = ["real", "imag"];
  var e2 = n2[1];
  this.outputShape = n2, this.userCode = "\n      const float exponentMultiplier = " + (r2 ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI) + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t2 + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + e2 + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + e2 + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + (r2 ? e2 + ".0" : "1.0") + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";
};
var Po = (function() {
  function t2(t3, n2) {
    this.outputShape = [], this.variableNames = ["x"], this.outputShape = t3, this.userCode = "\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var n2 = this;
    return (r2, e2) => {
      null == n2.valueLoc && (n2.valueLoc = r2.getUniformLocationNoThrow(e2, "value")), r2.gl.uniform1f(n2.valueLoc, t3);
    };
  }, t2;
})();
var Fo = function(t2, n2, r2) {
  this.variableNames = ["A", "indices"];
  var e2 = t2.slice();
  e2[r2] = n2, this.outputShape = e2, this.rank = e2.length;
  var i2 = ji(this.rank), o2 = ((t3, n3) => {
    var r3 = t3.length;
    if (r3 > 4) throw Error("Gather for rank " + r3 + " is not yet supported");
    if (1 === r3) return "int(getIndices(resRC))";
    for (var e3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i3 = [], o3 = 0; t3.length > o3; o3++) i3.push(o3 === n3 ? "int(getIndices(" + e3[o3] + "))" : "" + e3[o3]);
    return i3.join();
  })(t2, r2);
  this.userCode = "\n      void main() {\n        " + i2 + " resRC = getOutputCoords();\n        setOutput(getA(" + o2 + "));\n      }\n    ";
};
var Lo = function(t2, n2, r2) {
  this.sliceDim = t2, this.strides = n2, this.variableNames = ["x", "indices"], this.outputShape = r2;
  var e2 = ji(n2.length), i2 = ji(r2.length);
  this.userCode = "\n        " + e2 + " strides = " + e2 + "(" + this.strides + ");\n         void main() {\n          " + i2 + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + (this.sliceDim > 1 ? "strides[j]" : "strides") + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";
};
function Bo(t2, n2) {
  var r2 = Ti();
  return Yt(t2, n2, r2.version + "\n    precision highp float;\n    " + r2.attribute + " vec3 clipSpacePos;\n    " + r2.attribute + " vec2 uv;\n    " + r2.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }");
}
function Vo(t2, n2) {
  return on(t2, n2, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]));
}
function Wo(t2, n2) {
  return an(t2, n2, new Uint16Array([0, 1, 2, 2, 1, 3]));
}
function zo(t2, n2, r2, e2, i2, o2, a2) {
  un(r2, e2);
  var s2 = sn(t2, n2), u2 = t2.TEXTURE_2D;
  return Ht(t2, n2, () => t2.bindTexture(u2, s2)), Ht(t2, n2, () => t2.texParameteri(u2, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE)), Ht(t2, n2, () => t2.texParameteri(u2, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE)), Ht(t2, n2, () => t2.texParameteri(u2, t2.TEXTURE_MIN_FILTER, t2.NEAREST)), Ht(t2, n2, () => t2.texParameteri(u2, t2.TEXTURE_MAG_FILTER, t2.NEAREST)), Ht(t2, n2, () => t2.texImage2D(u2, 0, i2, r2, e2, 0, o2, a2, null)), Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, null)), s2;
}
function Go(t2, n2, r2, e2, i2) {
  var o2 = Gt(r2, e2);
  return zo(t2, n2, o2[0], o2[1], i2.internalFormatFloat, i2.textureFormatFloat, t2.FLOAT);
}
function Uo(t2, n2, r2, e2, i2) {
  var o2 = Gt(r2, e2);
  return zo(t2, n2, o2[0], o2[1], i2.internalFormatHalfFloat, i2.textureFormatFloat, i2.textureTypeHalfFloat);
}
function jo(t2, n2, r2, e2, i2) {
  var o2 = Gt(r2, e2);
  return zo(t2, n2, o2[0], o2[1], t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE);
}
function qo(t2, n2, r2, e2, i2) {
  var o2 = jt(r2, e2);
  return zo(t2, n2, o2[0], o2[1], i2.internalFormatPackedFloat, t2.RGBA, t2.FLOAT);
}
function Ho(t2, n2, r2, e2, i2) {
  var o2 = jt(r2, e2);
  return zo(t2, n2, o2[0], o2[1], i2.internalFormatPackedHalfFloat, t2.RGBA, i2.textureTypeHalfFloat);
}
function Xo(t2, n2, r2, e2) {
  return Ht(t2, n2, () => t2.bindBuffer(t2.ARRAY_BUFFER, e2)), ln(t2, n2, r2, "clipSpacePos", e2, 3, 20, 0) && ln(t2, n2, r2, "uv", e2, 2, 20, 12);
}
function $o(t2, n2, r2, e2, i2, o2, a2) {
  var s2, u2, c2;
  Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, r2)), o2 instanceof Uint8Array ? (s2 = new Uint8Array(e2 * i2 * 4), u2 = t2.UNSIGNED_BYTE, c2 = t2.RGBA) : (s2 = new Float32Array(e2 * i2 * 4), u2 = t2.FLOAT, c2 = a2.internalFormatPackedFloat), s2.set(o2), Ht(t2, n2, () => t2.texImage2D(t2.TEXTURE_2D, 0, c2, e2, i2, 0, t2.RGBA, u2, s2)), Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, null));
}
function Ko(t2, n2, r2, e2) {
  Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, r2)), e2.data instanceof Uint8Array ? Ht(t2, n2, () => t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, e2.width, e2.height, 0, t2.RGBA, t2.UNSIGNED_BYTE, e2.data)) : Ht(t2, n2, () => t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE, e2)), Ht(t2, n2, () => t2.bindTexture(t2.TEXTURE_2D, null));
}
function Yo(t2, n2, r2, e2, i2) {
  var o2 = t2.createBuffer();
  Ht(t2, n2, () => t2.bindBuffer(t2.PIXEL_PACK_BUFFER, o2));
  var a2 = 16 * r2 * e2;
  return Ht(t2, n2, () => t2.bufferData(t2.PIXEL_PACK_BUFFER, a2, t2.STREAM_READ)), Ht(t2, n2, () => t2.readPixels(0, 0, e2, r2, t2.RGBA, t2.FLOAT, 0)), Ht(t2, n2, () => t2.bindBuffer(t2.PIXEL_PACK_BUFFER, null)), o2;
}
function Jo(t2, n2, r2) {
  var e2 = t2, i2 = new Float32Array(r2);
  return e2.bindBuffer(e2.PIXEL_PACK_BUFFER, n2), e2.getBufferSubData(e2.PIXEL_PACK_BUFFER, 0, i2), e2.bindBuffer(e2.PIXEL_PACK_BUFFER, null), i2;
}
function Zo(t2, n2, r2, e2, i2) {
  var o2 = Gt(r2, e2), a2 = o2[0], s2 = o2[1], u2 = new Uint8Array(r2 * e2 * 4);
  return Ht(t2, n2, () => t2.readPixels(0, 0, a2, s2, i2.downloadTextureFormat, t2.UNSIGNED_BYTE, u2)), new Float32Array(u2.buffer);
}
function Qo(t2, n2, r2, e2, i2, o2, a2, s2) {
  var u2, c2 = t2, l2 = new Float32Array((u2 = jt(o2, a2))[0] * u2[1] * 4);
  return c2.bindBuffer(c2.PIXEL_PACK_BUFFER, n2), c2.getBufferSubData(c2.PIXEL_PACK_BUFFER, 0, l2), c2.bindBuffer(c2.PIXEL_PACK_BUFFER, null), l2;
}
function ta(t2, n2, r2, e2) {
  var i2 = new Float32Array(r2 * e2 * 4);
  return Ht(t2, n2, () => t2.readPixels(0, 0, e2, r2, t2.RGBA, t2.FLOAT, i2)), i2;
}
var na = Object.freeze({ createVertexShader: Bo, createVertexBuffer: Vo, createIndexBuffer: Wo, createFloat32MatrixTexture: Go, createFloat16MatrixTexture: Uo, createUnsignedBytesMatrixTexture: jo, createPackedMatrixTexture: qo, createFloat16PackedMatrixTexture: Ho, bindVertexProgramAttributeStreams: Xo, uploadDenseMatrixToTexture: $o, uploadPixelDataToTexture: Ko, createBufferFromOutputTexture: Yo, downloadFloat32MatrixFromBuffer: Jo, downloadByteEncodedFloatMatrixFromOutputTexture: Zo, downloadPackedMatrixFromBuffer: Qo, downloadMatrixFromPackedOutputTexture: ta });
var ra = (function() {
  function t2(t3) {
    this.outputTexture = null, this.program = null, this.disposed = false, this.vertexAttrsAreBound = false, this.itemsToPoll = [];
    var n2 = o().getNumber("WEBGL_VERSION");
    null != t3 ? (this.gl = t3, Wt(n2, t3)) : this.gl = zt(n2);
    var r2 = "WEBGL_color_buffer_float";
    if (1 === o().getNumber("WEBGL_VERSION")) {
      if (this.textureFloatExtension = Kt(this.gl, this.debug, "OES_texture_float"), In(this.gl, "OES_texture_half_float")) this.textureHalfFloatExtension = Kt(this.gl, this.debug, "OES_texture_half_float");
      else if (o().get("WEBGL_FORCE_F16_TEXTURES")) throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      if (this.colorBufferFloatExtension = this.gl.getExtension(r2), In(this.gl, "EXT_color_buffer_half_float")) this.colorBufferHalfFloatExtension = Kt(this.gl, this.debug, "EXT_color_buffer_half_float");
      else if (o().get("WEBGL_FORCE_F16_TEXTURES")) throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
    } else if (In(this.gl, r2 = "EXT_color_buffer_float")) this.colorBufferFloatExtension = this.gl.getExtension(r2);
    else {
      if (!In(this.gl, "EXT_color_buffer_half_float")) throw Error("GL context does not support color renderable floats");
      this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float");
    }
    this.vertexBuffer = Vo(this.gl, this.debug), this.indexBuffer = Wo(this.gl, this.debug), this.framebuffer = cn(this.gl, this.debug), this.textureConfig = qt(this.gl, this.textureHalfFloatExtension);
  }
  return Object.defineProperty(t2.prototype, "debug", { get() {
    return o().getBool("DEBUG");
  }, enumerable: true, configurable: true }), t2.prototype.dispose = function() {
    var t3 = this;
    if (!this.disposed) {
      null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
      var n2 = this.gl;
      Ht(n2, this.debug, () => n2.finish()), Ht(n2, this.debug, () => n2.bindFramebuffer(n2.FRAMEBUFFER, null)), Ht(n2, this.debug, () => n2.deleteFramebuffer(t3.framebuffer)), Ht(n2, this.debug, () => n2.bindBuffer(n2.ARRAY_BUFFER, null)), Ht(n2, this.debug, () => n2.bindBuffer(n2.ELEMENT_ARRAY_BUFFER, null)), Ht(n2, this.debug, () => n2.deleteBuffer(t3.indexBuffer)), this.disposed = true;
    }
  }, t2.prototype.createFloat32MatrixTexture = function(t3, n2) {
    return this.throwIfDisposed(), Go(this.gl, this.debug, t3, n2, this.textureConfig);
  }, t2.prototype.createFloat16MatrixTexture = function(t3, n2) {
    return this.throwIfDisposed(), Uo(this.gl, this.debug, t3, n2, this.textureConfig);
  }, t2.prototype.createUnsignedBytesMatrixTexture = function(t3, n2) {
    return this.throwIfDisposed(), jo(this.gl, this.debug, t3, n2);
  }, t2.prototype.uploadPixelDataToTexture = function(t3, n2) {
    this.throwIfDisposed(), Ko(this.gl, this.debug, t3, n2);
  }, t2.prototype.uploadDenseMatrixToTexture = function(t3, n2, r2, e2) {
    this.throwIfDisposed(), $o(this.gl, this.debug, t3, n2, r2, e2, this.textureConfig);
  }, t2.prototype.createFloat16PackedMatrixTexture = function(t3, n2) {
    return this.throwIfDisposed(), Ho(this.gl, this.debug, t3, n2, this.textureConfig);
  }, t2.prototype.createPackedMatrixTexture = function(t3, n2) {
    return this.throwIfDisposed(), qo(this.gl, this.debug, t3, n2, this.textureConfig);
  }, t2.prototype.deleteMatrixTexture = function(t3) {
    var n2 = this;
    this.throwIfDisposed(), this.outputTexture === t3 && (mn(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Ht(this.gl, this.debug, () => n2.gl.deleteTexture(t3));
  }, t2.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(t3, n2, r2) {
    var e2 = this;
    return this.downloadMatrixDriver(t3, () => Zo(e2.gl, e2.debug, n2, r2, e2.textureConfig));
  }, t2.prototype.downloadPackedMatrixFromBuffer = function(t3, n2, r2, e2, i2, o2) {
    return Qo(this.gl, t3, 0, 0, 0, i2, o2);
  }, t2.prototype.downloadFloat32MatrixFromBuffer = function(t3, n2) {
    return Jo(this.gl, t3, n2);
  }, t2.prototype.createBufferFromTexture = function(t3, n2, r2) {
    this.bindTextureToFrameBuffer(t3);
    var e2 = Yo(this.gl, this.debug, n2, r2);
    return this.unbindTextureToFrameBuffer(), e2;
  }, t2.prototype.createAndWaitForFence = function() {
    var t3 = this.createFence(this.gl);
    return this.pollFence(t3);
  }, t2.prototype.createFence = function(t3) {
    var n2, r2, e2 = this;
    if (o().getBool("WEBGL_FENCE_API_ENABLED")) {
      var i2 = t3, a2 = i2.fenceSync(i2.SYNC_GPU_COMMANDS_COMPLETE, 0);
      t3.flush(), r2 = () => {
        var t4 = i2.clientWaitSync(a2, 0, 0);
        return t4 === i2.ALREADY_SIGNALED || t4 === i2.CONDITION_SATISFIED;
      }, n2 = a2;
    } else o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (n2 = this.beginQuery(), this.endQuery(), r2 = () => e2.isQueryAvailable(n2, o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))) : r2 = () => true;
    return { query: n2, isFencePassed: r2 };
  }, t2.prototype.downloadMatrixFromPackedTexture = function(t3, n2, r2) {
    var e2 = this;
    return this.downloadMatrixDriver(t3, () => ta(e2.gl, e2.debug, n2, r2));
  }, t2.prototype.createProgram = function(t3) {
    this.throwIfDisposed();
    var n2 = this.gl, r2 = Jt(n2, this.debug, t3), e2 = Bo(n2, this.debug), i2 = nn(n2, this.debug);
    return Ht(n2, this.debug, () => n2.attachShader(i2, e2)), Ht(n2, this.debug, () => n2.attachShader(i2, r2)), rn(n2, this.debug, i2), this.debug && en(n2, this.debug, i2), this.vertexAttrsAreBound || (this.setProgram(i2), this.vertexAttrsAreBound = Xo(n2, this.debug, this.program, this.vertexBuffer)), i2;
  }, t2.prototype.deleteProgram = function(t3) {
    var n2 = this;
    this.throwIfDisposed(), t3 === this.program && (this.program = null), null != t3 && Ht(this.gl, this.debug, () => n2.gl.deleteProgram(t3));
  }, t2.prototype.setProgram = function(t3) {
    var n2 = this;
    this.throwIfDisposed(), this.program = t3, null != this.program && this.debug && en(this.gl, this.debug, this.program), Ht(this.gl, this.debug, () => n2.gl.useProgram(t3));
  }, t2.prototype.getUniformLocation = function(t3, n2, r2) {
    return void 0 === r2 && (r2 = true), this.throwIfDisposed(), r2 ? fn(this.gl, this.debug, t3, n2) : dn(this.gl, t3, n2);
  }, t2.prototype.getAttributeLocation = function(t3, n2) {
    var r2 = this;
    return this.throwIfDisposed(), Ht(this.gl, this.debug, () => r2.gl.getAttribLocation(t3, n2));
  }, t2.prototype.getUniformLocationNoThrow = function(t3, n2) {
    return this.throwIfDisposed(), this.gl.getUniformLocation(t3, n2);
  }, t2.prototype.setInputMatrixTexture = function(t3, n2, r2) {
    this.throwIfDisposed(), this.throwIfNoProgram(), vn(this.gl, this.debug, 0, t3, n2, r2);
  }, t2.prototype.setOutputMatrixTexture = function(t3, n2, r2) {
    this.setOutputMatrixTextureDriver(t3, r2, n2);
  }, t2.prototype.setOutputPackedMatrixTexture = function(t3, n2, r2) {
    this.throwIfDisposed();
    var e2 = jt(n2, r2);
    this.setOutputMatrixTextureDriver(t3, e2[0], e2[1]);
  }, t2.prototype.setOutputMatrixWriteRegion = function(t3, n2, r2, e2) {
    this.setOutputMatrixWriteRegionDriver(r2, t3, e2, n2);
  }, t2.prototype.setOutputPackedMatrixWriteRegion = (t3, n2, r2, e2) => {
    throw Error("setOutputPackedMatrixWriteRegion not implemented.");
  }, t2.prototype.debugValidate = function() {
    null != this.program && en(this.gl, this.debug, this.program), xn(this.gl);
  }, t2.prototype.executeProgram = function() {
    this.throwIfDisposed(), this.throwIfNoProgram();
    var t3 = this.gl;
    this.debug && this.debugValidate(), Ht(t3, this.debug, () => t3.drawElements(t3.TRIANGLES, 6, t3.UNSIGNED_SHORT, 0));
  }, t2.prototype.blockUntilAllProgramsCompleted = function() {
    var t3 = this;
    this.throwIfDisposed(), Ht(this.gl, this.debug, () => t3.gl.finish());
  }, t2.prototype.getQueryTimerExtension = function() {
    return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = Kt(this.gl, this.debug, 2 === o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension;
  }, t2.prototype.getQueryTimerExtensionWebGL2 = function() {
    return this.getQueryTimerExtension();
  }, t2.prototype.getQueryTimerExtensionWebGL1 = function() {
    return this.getQueryTimerExtension();
  }, t2.prototype.beginQuery = function() {
    if (2 === o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
      var t3 = this.gl, n2 = this.getQueryTimerExtensionWebGL2(), r2 = t3.createQuery();
      return t3.beginQuery(n2.TIME_ELAPSED_EXT, r2), r2;
    }
    var e2 = this.getQueryTimerExtensionWebGL1(), i2 = e2.createQueryEXT();
    return e2.beginQueryEXT(e2.TIME_ELAPSED_EXT, i2), i2;
  }, t2.prototype.endQuery = function() {
    if (2 !== o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
      var t3 = this.getQueryTimerExtensionWebGL1();
      t3.endQueryEXT(t3.TIME_ELAPSED_EXT);
    } else {
      var n2 = this.gl, r2 = this.getQueryTimerExtensionWebGL2();
      n2.endQuery(r2.TIME_ELAPSED_EXT);
    }
  }, t2.prototype.waitForQueryAndGetTime = function(t3) {
    return r(this, 0, void 0, function() {
      var n2 = this;
      return e(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, M(() => n2.disposed || n2.isQueryAvailable(t3, o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))];
          case 1:
            return r2.sent(), [2, this.getQueryTime(t3, o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))];
        }
      });
    });
  }, t2.prototype.getQueryTime = function(t3, n2) {
    if (0 === n2) return null;
    if (2 === n2) {
      var r2 = this.gl;
      return r2.getQueryParameter(t3, r2.QUERY_RESULT) / 1e6;
    }
    var e2 = this.getQueryTimerExtensionWebGL1();
    return e2.getQueryObjectEXT(t3, e2.QUERY_RESULT_EXT) / 1e6;
  }, t2.prototype.isQueryAvailable = function(t3, n2) {
    if (0 === n2) return true;
    if (2 === n2) {
      var r2 = this.gl, e2 = this.getQueryTimerExtensionWebGL2(), i2 = r2.getQueryParameter(t3, r2.QUERY_RESULT_AVAILABLE);
      return null == this.disjoint && (this.disjoint = this.gl.getParameter(e2.GPU_DISJOINT_EXT)), i2 && !this.disjoint;
    }
    return i2 = (e2 = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t3, e2.QUERY_RESULT_AVAILABLE_EXT), null == this.disjoint && (this.disjoint = this.gl.getParameter(e2.GPU_DISJOINT_EXT)), i2 && !this.disjoint;
  }, t2.prototype.pollFence = function(t3) {
    var n2 = this;
    return new Promise((r2) => {
      n2.addItemToPoll(() => t3.isFencePassed(), () => r2());
    });
  }, t2.prototype.pollItems = function() {
    for (var t3 = ((t4) => {
      for (var n3 = 0; t4.length > n3 && t4[n3](); ++n3) ;
      return n3 - 1;
    })(this.itemsToPoll.map((t4) => t4.isDoneFn)), n2 = 0; t3 >= n2; ++n2) (0, this.itemsToPoll[n2].resolveFn)();
    this.itemsToPoll = this.itemsToPoll.slice(t3 + 1);
  }, t2.prototype.addItemToPoll = function(t3, n2) {
    var r2 = this;
    this.itemsToPoll.push({ isDoneFn: t3, resolveFn: n2 }), this.itemsToPoll.length > 1 || M(() => (r2.pollItems(), 0 === r2.itemsToPoll.length));
  }, t2.prototype.bindTextureToFrameBuffer = function(t3) {
    this.throwIfDisposed(), pn(this.gl, this.debug, t3, this.framebuffer), this.debug && xn(this.gl);
  }, t2.prototype.unbindTextureToFrameBuffer = function() {
    null != this.outputTexture ? (pn(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && xn(this.gl)) : mn(this.gl, this.debug, this.framebuffer);
  }, t2.prototype.downloadMatrixDriver = function(t3, n2) {
    this.bindTextureToFrameBuffer(t3);
    var r2 = n2();
    return this.unbindTextureToFrameBuffer(), r2;
  }, t2.prototype.setOutputMatrixTextureDriver = function(t3, n2, r2) {
    this.throwIfDisposed();
    var e2 = this.gl;
    pn(e2, this.debug, t3, this.framebuffer), this.debug && xn(e2), this.outputTexture = t3, Ht(e2, this.debug, () => e2.viewport(0, 0, n2, r2)), Ht(e2, this.debug, () => e2.scissor(0, 0, n2, r2));
  }, t2.prototype.setOutputMatrixWriteRegionDriver = function(t3, n2, r2, e2) {
    var i2 = this;
    this.throwIfDisposed(), Ht(this.gl, this.debug, () => i2.gl.scissor(t3, n2, r2, e2));
  }, t2.prototype.throwIfDisposed = function() {
    if (this.disposed) throw Error("Attempted to use disposed GPGPUContext.");
  }, t2.prototype.throwIfNoProgram = function() {
    if (null == this.program) throw Error("No GPU program is currently set.");
  }, t2;
})();
function ea(t2, n2) {
  if (t2.length !== n2.length) throw Error("Binary was compiled with " + t2.length + " inputs, but was executed with " + n2.length + " inputs");
  t2.forEach((t3, r2) => {
    var e2 = t3.logicalShape, i2 = n2[r2], o2 = i2.shape;
    if (!E(e2, o2)) throw Error("Binary was compiled with different shapes than the current args. Shapes " + e2 + " and " + o2 + " must match");
    if (!t3.isUniform || !i2.isUniform) {
      var a2 = t3.texShape, s2 = i2.isUniform ? null : i2.texData.texShape;
      if (!E(a2, s2)) throw Error("Binary was compiled with different texture shapes than the current args. Shape " + a2 + " and " + s2 + " must match");
    }
  });
}
var ia = function(t2, n2, r2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
  for (var e2 = r2.inChannels, i2 = r2.strideWidth, o2 = r2.strideHeight, a2 = r2.padInfo, s2 = r2.outWidth, u2 = r2.dilationWidth, c2 = r2.dilationHeight, l2 = r2.dataFormat, h2 = a2.left, f2 = a2.top, d2 = e2 * r2.filterWidth, v2 = Ti(), p2 = "channelsLast" === l2, m2 = p2 ? 0 : 1, x2 = p2 ? 1 : 2, b2 = "", g2 = 0; 1 >= g2; g2++) for (var w2 = 0; 1 >= w2; w2++) b2 += "\n          blockIndex = rc.y + " + w2 + ";\n          pos = rc.x + " + g2 + ";\n\n          if(blockIndex < " + t2[1] + " && pos < " + t2[0] + ") {\n            offsetY = int(blockIndex / (" + s2 + ")) * " + o2 + " - " + f2 + ";\n            d0 = offsetY + " + c2 + " * (pos / " + d2 + ");\n\n            if(d0 < " + n2[m2] + " && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), " + s2 + ".) * " + i2 + ". - " + h2 + ".);\n              d1 = offsetX + " + u2 + " * (int(mod(float(pos), " + d2 + ".) / " + e2 + ".));\n\n              if(d1 < " + n2[x2] + " && d1 >= 0) {\n\n                ch = int(mod(float(pos), " + e2 + ".));\n\n                if (" + p2 + ") {\n                  innerDims = vec2(d1, ch);\n                  result[" + (2 * g2 + w2) + "] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[" + (2 * g2 + w2) + "] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";
  this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        " + b2 + "\n\n        " + v2.output + " = result;\n      }\n    ";
};
var oa = function(t2, n2, r2, e2, i2) {
  this.variableNames = ["x"], this.outputShape = [];
  var o2 = n2, a2 = t2[3] - 1;
  this.outputShape = t2;
  var s2 = "float(" + r2 + ") + float(" + e2 + ") * sum";
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + o2 + "; j <= " + o2 + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + a2 + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + (0.5 === i2 ? "inversesqrt(" + s2 + ")" : 1 === i2 ? "1.0/(" + s2 + ")" : "exp(log(" + s2 + ") * float(-" + i2 + "));") + ";\n        setOutput(val);\n      }\n    ";
};
var aa = function(t2, n2, r2, e2, i2) {
  this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = t2, this.depth = t2[3], this.depthRadius = n2, this.bias = r2, this.alpha = e2, this.beta = i2, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + n2 + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + n2 + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + e2 + ") * norm + float(" + r2 + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + e2 + ")\n                * float(" + i2 + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + i2 + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";
};
var sa = function(t2, n2, r2, e2, i2) {
  this.variableNames = ["x"], this.outputShape = [], this.packedInputs = true, this.packedOutput = true;
  var o2 = n2, a2 = t2[3] - 1;
  this.outputShape = t2;
  var s2 = "float(" + r2 + ") + float(" + e2 + ") * sum";
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < " + this.outputShape[3] + ";\n        bool hasNextRow = c < " + this.outputShape[2] + ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - " + o2 + ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - " + o2 + "; j <= " + o2 + "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(" + a2 + "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * " + (0.5 === i2 ? "inversesqrt(" + s2 + ")" : 1 === i2 ? "1.0/(" + s2 + ")" : "exp(log(" + s2 + ") * float(-" + i2 + "));") + ";\n        setOutput(result);\n      }\n    ";
};
var ua = function(t2) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
  var n2 = t2.effectiveFilterHeight, r2 = t2.effectiveFilterWidth;
  this.userCode = "\n      const ivec2 pads = ivec2(" + (n2 - 1 - t2.padInfo.top) + ", " + (r2 - 1 - t2.padInfo.left) + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + n2 + ";\n          wR += " + t2.dilationHeight + ") {\n          float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + r2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + (n2 * r2 - 1) + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + r2 + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var ca = function(t2) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
  var n2 = t2.effectiveFilterDepth, r2 = t2.effectiveFilterHeight, e2 = t2.effectiveFilterWidth;
  this.userCode = "\n      const ivec3 pads = ivec3(" + (n2 - 1 - t2.padInfo.front) + ", " + (r2 - 1 - t2.padInfo.top) + ", " + (e2 - 1 - t2.padInfo.left) + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + n2 + ";\n           wD += " + t2.dilationDepth + ") {\n          float dyD = float(dyDCorner + wD) / " + t2.strideDepth + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + r2 + ";\n              wR += " + t2.dilationHeight + ") {\n            float dyR = float(dyRCorner + wR) / " + t2.strideHeight + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + e2 + ";\n                wC += " + t2.dilationWidth + ") {\n              float dyC = float(dyCCorner + wC) / " + t2.strideWidth + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = " + (n2 * r2 * e2 - 1) + " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * " + r2 + " * " + e2 + " +\n                  wR * " + e2 + " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var la = function(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === r2 && (r2 = false), void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false), void 0 === o2 && (o2 = null), void 0 === a2 && (a2 = false), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = true, this.packedOutput = true, this.outputShape = n2;
  var s2 = Math.ceil((r2 ? t2[1] : t2[2]) / 2), u2 = r2 ? "i * 2, rc.y" : "rc.y, i * 2", c2 = e2 ? "rc.z, i * 2" : "i * 2, rc.z", l2 = r2 ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"], h2 = e2 ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], f2 = "", d2 = "";
  o2 && (f2 = a2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + o2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + o2 + "\n        }", d2 = "result = activation(result);");
  var v2 = i2 ? "result += getBiasAtOutCoords();" : "";
  i2 && this.variableNames.push("bias"), a2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + f2 + "\n\n      const float sharedDimension = " + s2 + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + s2 + "; i++) {\n          vec4 a = getMatrixA(rc.x, " + u2 + ");\n          vec4 b = getMatrixB(rc.x, " + c2 + ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (" + l2[0] + " * " + h2[0] + ");\n          result += (" + l2[1] + " * " + h2[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + v2 + "\n\n        " + d2 + "\n\n        setOutput(result);\n      }\n    ";
};
var ha = (function() {
  function t2(t3, n2, r2) {
    this.variableNames = ["probs"], this.outputShape = [t3, r2], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (n2 - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (n2 - 1) + "));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var n2 = this;
    return (r2, e2) => {
      null == n2.seedLoc && (n2.seedLoc = r2.getUniformLocation(e2, "seed")), r2.gl.uniform1f(n2.seedLoc, t3);
    };
  }, t2;
})();
var fa = function(t2, n2, r2, e2) {
  this.variableNames = ["indices"], this.outputShape = [t2, n2], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + e2 + "), float(" + r2 + "),\n                      float(index == coords.y)));\n      }\n    ";
};
var da = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outputShape = t2;
  var n2, r2, e2, i2 = t2.length;
  if (0 === i2) this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
  else {
    var o2 = Ii("rc", i2), a2 = ji(i2), s2 = ((t3, n3, r3) => {
      if (1 === t3) return "rc > " + n3[0];
      for (var e3 = "", i3 = t3 - 2; t3 > i3; i3++) e3 += r3[i3] + " >= " + n3[i3], t3 - 1 > i3 && (e3 += "||");
      return e3;
    })(i2, t2, o2), u2 = ((t3, n3, r3, e3) => {
      if (1 === t3) return "";
      var i3 = e3.slice(-2);
      return "\n    int r = " + i3[0] + ";\n    int c = " + i3[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + n3 + ";\n    bool rEdge = rp1 >= " + r3 + ";\n  ";
    })(i2, t2[t2.length - 1], t2[t2.length - 2], o2), c2 = (e2 = ((t3, n3) => {
      for (var r3 = [], e3 = 0; 1 >= e3; e3++) for (var i3 = 0; 1 >= i3; i3++) {
        for (var o3 = (0 === e3 ? "r" : "rp1") + ", " + (0 === i3 ? "c" : "cp1"), a3 = 2; t3 > a3; a3++) o3 = n3[n3.length - 1 - a3] + "," + o3;
        r3.push(o3);
      }
      return r3;
    })(r2 = (n2 = t2).length, o2), 1 === r2 ? "getA(rc),\n            rc + 1 >= " + n2[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + e2[0] + "),\n          cEdge ? 0. : getA(" + e2[1] + "),\n          rEdge ? 0. : getA(" + e2[2] + "),\n          rEdge || cEdge ? 0. : getA(" + e2[3] + ")");
    this.userCode = "\n        void main() {\n          " + a2 + " rc = getOutputCoords();\n\n          if(" + s2 + ") {\n            setOutput(vec4(0));\n          } else {\n            " + u2 + "\n\n            setOutput(vec4(" + c2 + "));\n          }\n        }\n      ";
  }
};
var va = function(t2, n2, r2) {
  this.variableNames = ["x"], this.outputShape = n2.map((n3, r3) => n3[0] + t2[r3] + n3[1]);
  var e2 = t2.length, i2 = ji(e2), o2 = n2.map((t3) => t3[0]).join(","), a2 = n2.map((n3, r3) => n3[0] + t2[r3]).join(",");
  this.userCode = 1 !== e2 ? "\n      " + i2 + " start = " + i2 + "(" + o2 + ");\n      " + i2 + " end = " + i2 + "(" + a2 + ");\n\n      void main() {\n        " + i2 + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + r2 + "));\n        } else {\n          " + i2 + " coords = outC - start;\n          setOutput(getX(" + ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, e2) + "));\n        }\n      }\n    " : "\n        int start = " + o2 + ";\n        int end = " + a2 + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + r2 + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";
};
var pa = function(t2, n2, r2) {
  this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true, this.outputShape = n2.map((n3, r3) => n3[0] + t2[r3] + n3[1]);
  for (var e2 = t2.length, i2 = ji(e2), o2 = n2.map((t3) => t3[0]).join(","), a2 = n2.map((n3, r3) => n3[0] + t2[r3]).join(","), s2 = Ii("rc", e2), u2 = Ii("source", e2), c2 = s2[e2 - 1] + " < " + this.outputShape[e2 - 1], l2 = 1 === e2 ? "source" : "vec2(" + u2.slice(-2).join() + ")", h2 = [i2 + " rc = outputLoc;", s2[e2 - 1] + " += 1;\n       if(" + c2 + ") {\n      ", 1 === e2 ? "" : "}\n       rc = outputLoc;\n       " + s2[e2 - 2] + " += 1;\n       if(" + s2[e2 - 2] + " < " + this.outputShape[e2 - 2] + ") {", 1 === e2 ? "" : "  " + s2[e2 - 1] + " += 1;\n         if(" + c2 + ") {"], f2 = 1 === e2 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", d2 = "", v2 = 0, p2 = 1 === e2 ? 2 : 4; p2 > v2; v2++) d2 += "\n        " + h2[v2] + "\n        if (" + f2 + ") {\n          result[" + v2 + "] = float(" + r2 + ");\n        } else {\n          " + i2 + " source = rc - start;\n          result[" + v2 + "] = getChannel(getX(" + u2.join() + "), " + l2 + ");\n        }\n      ";
  this.userCode = "\n      const " + i2 + " start = " + i2 + "(" + o2 + ");\n      const " + i2 + " end = " + i2 + "(" + a2 + ");\n\n      void main() {\n        " + i2 + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + (d2 += 1 === e2 ? "} " : "}}") + "\n        setOutput(result);\n      }\n    ";
};
var ma = function(t2, n2, r2) {
  if (this.variableNames = ["x"], "avg" === n2 && r2) throw Error("Cannot compute positions for average pool.");
  var e2 = t2.filterWidth, i2 = t2.strideHeight, o2 = t2.strideWidth, a2 = t2.dilationHeight, s2 = t2.dilationWidth, u2 = t2.effectiveFilterHeight, c2 = t2.effectiveFilterWidth, l2 = t2.padInfo.top, h2 = t2.padInfo.left;
  this.outputShape = t2.outShape;
  var f2 = "avg" === n2, d2 = "0.0";
  if (f2 || (d2 = "-1.0 / 1e-20"), r2) this.userCode = "\n        const ivec2 strides = ivec2(" + i2 + ", " + o2 + ");\n        const ivec2 pads = ivec2(" + l2 + ", " + h2 + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + u2 + ";\n              wR += " + a2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + c2 + ";\n                wC += " + s2 + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + c2 + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
  else {
    var v2 = n2 + "(" + n2 + "(" + n2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    "avg" === n2 && (v2 = "avgValue / count");
    var p2 = 4 * Math.floor(e2 / 4), m2 = e2 % 4, x2 = "\n      if (" + f2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
    this.userCode = "\n      const ivec2 strides = ivec2(" + i2 + ", " + o2 + ");\n      const ivec2 pads = ivec2(" + l2 + ", " + h2 + ");\n      const float initializationValue = " + d2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + d2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + u2 + ";\n            wR += " + a2 + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + p2 + "; wC += 4) {\n            int xC = xCCorner + wC * " + s2 + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              getValue(batch, xR, xC + 2 * " + s2 + ", d),\n              getValue(batch, xR, xC + 3 * " + s2 + ", d)\n            );\n\n            " + x2 + "\n          }\n\n          int xC = xCCorner + " + p2 + ";\n          if (" + (1 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + x2 + "\n          } else if (" + (2 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + x2 + "\n          } else if (" + (3 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              getValue(batch, xR, xC + 2 * " + s2 + ", d),\n              initializationValue\n            );\n\n            " + x2 + "\n          }\n        }\n        setOutput(" + v2 + ");\n      }\n    ";
  }
};
var xa = function(t2, n2, r2) {
  if (this.variableNames = ["x"], "avg" === n2 && r2) throw Error("Cannot compute positions for average pool.");
  var e2 = t2.filterWidth, i2 = t2.strideDepth, o2 = t2.strideHeight, a2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.effectiveFilterDepth, h2 = t2.effectiveFilterHeight, f2 = t2.effectiveFilterWidth, d2 = t2.padInfo.front, v2 = t2.padInfo.top, p2 = t2.padInfo.left;
  this.outputShape = t2.outShape;
  var m2 = "avg" === n2, x2 = "0.0";
  if (m2 || (x2 = "-1.0 / 1e-20"), r2) this.userCode = "\n        const ivec3 strides =\n            ivec3(" + i2 + ", " + o2 + ", " + a2 + ");\n        const ivec3 pads = ivec3(" + d2 + ", " + v2 + ", " + p2 + ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < " + l2 + ";\n              wD += " + s2 + ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < " + h2 + ";\n                wR += " + u2 + ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < " + f2 + ";\n                  wC += " + c2 + ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * " + h2 + " * " + f2 + " +\n                      wR * " + f2 + " + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
  else {
    var b2 = n2 + "(" + n2 + "(" + n2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    "avg" === n2 && (b2 = "avgValue / count");
    var g2 = 4 * Math.floor(e2 / 4), w2 = e2 % 4, y2 = "\n      if (" + m2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
    this.userCode = "\n      const ivec3 strides =\n        ivec3(" + i2 + ", " + o2 + ", " + a2 + ");\n      const ivec3 pads = ivec3(" + d2 + ", " + v2 + ", " + p2 + ");\n      const float initializationValue = " + x2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + x2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < " + l2 + ";\n            wD += " + s2 + ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h2 + ";\n            wR += " + u2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + g2 + "; wC += 4) {\n              int xC = xCCorner + wC * " + c2 + ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 3 * " + c2 + ", ch)\n              );\n\n              " + y2 + "\n            }\n\n            int xC = xCCorner + " + g2 + ";\n            if (" + (1 === w2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              " + y2 + "\n            } else if (" + (2 === w2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              " + y2 + "\n            } else if (" + (3 === w2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c2 + ", ch),\n                initializationValue\n              );\n\n              " + y2 + "\n            }\n          }\n          setOutput(" + b2 + ");\n        }\n      }\n    ";
  }
};
var ba = function(t2, n2) {
  this.variableNames = ["x"];
  var r2 = t2.windowSize, e2 = t2.inSize;
  this.outputShape = [t2.batchSize, Math.ceil(e2 / r2)];
  var i2 = "0.0", o2 = "";
  "prod" === n2 ? i2 = "1.0" : "min" === n2 ? (i2 = "1.0 / 1e-20", o2 = "min") : "max" === n2 && (i2 = "-1.0 / 1e-20", o2 = "max");
  var a2 = n2 + "(" + n2 + "(" + n2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
  "sum" === n2 ? a2 = "sumValue" : "prod" === n2 ? a2 = "prodValue" : "all" === n2 ? a2 = "allValue" : "any" === n2 && (a2 = "anyValue");
  var s2 = 4 * Math.floor(r2 / 4), u2 = r2 % 4, c2 = "\n      if (" + ("sum" === n2) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === n2) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + o2 + "(values, minMaxValue);\n      }\n    ", l2 = "vec4";
  "all" === n2 ? (i2 = "1.0", c2 = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", l2 = "bvec4") : "any" === n2 && (i2 = "0.0", c2 = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", l2 = "bvec4");
  var h2 = "";
  e2 % r2 > 0 && (h2 = "\n        if (inIdx < 0 || inIdx >= " + e2 + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + i2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + h2 + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r2 + ";\n\n        vec4 minMaxValue = vec4(" + i2 + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + s2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + l2 + " values = " + l2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + c2 + "\n        }\n\n        int inIdx = inOffset + " + s2 + ";\n        if (" + (1 === u2) + ") {\n          " + l2 + " values = " + l2 + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + c2 + "\n        } else if (" + (2 === u2) + ") {\n          " + l2 + " values = " + l2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + c2 + "\n        } else if (" + (3 === u2) + ") {\n          " + l2 + " values = " + l2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + c2 + "\n        }\n        setOutput(" + a2 + ");\n      }\n    ";
};
var ga = function(t2, n2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
  for (var r2 = "", e2 = 0; 4 > e2; e2++) {
    var i2 = "thisRC = rc;";
    e2 % 2 == 1 && (i2 += "thisRC.z += 1;"), e2 > 1 && (i2 += "thisRC.y += 1;"), r2 += "\n        " + i2 + "\n        " + (e2 > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + e2 + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (e2 > 0 ? "}" : "") + "\n      ";
  }
  this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + Si(["r", "c", "d"], n2) + "\n      return ivec3(r, c, d);\n    }\n  \n      " + Di(t2) + "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t2[1] + ";\n        int cols = " + t2[2] + ";\n\n        " + r2 + "\n\n        setOutput(result);\n      }\n    ";
};
var wa = function(t2, n2, r2) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = n2.shape;
  var e2 = n2.shape, i2 = e2[1], o2 = e2[2], a2 = t2.shape, s2 = a2[1], u2 = a2[2], c2 = [r2 && s2 > 1 ? i2 - 1 : i2, r2 && u2 > 1 ? o2 - 1 : o2], l2 = [r2 && s2 > 1 ? s2 - 1 : s2, r2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, v2 = 1 / f2;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + v2 + ");\n\n        const int winHeight = int(" + (2 * Math.ceil(d2) + 2) + ");\n        const int winWidth = int(" + (2 * Math.ceil(v2) + 2) + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (i2 - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (o2 - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
};
var ya = function(t2, n2, r2, e2) {
  this.variableNames = ["A"], this.outputShape = [];
  var i2 = t2[1], o2 = t2[2];
  this.outputShape = [t2[0], n2, r2, t2[3]];
  var a2 = [e2 && n2 > 1 ? i2 - 1 : i2, e2 && r2 > 1 ? o2 - 1 : o2], s2 = [e2 && n2 > 1 ? n2 - 1 : n2, e2 && r2 > 1 ? r2 - 1 : r2];
  this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + a2[0] / s2[0] + ",\n          " + a2[1] / s2[1] + ");\n      const vec2 inputShapeRC = vec2(" + i2 + ".0, " + o2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";
};
var Ca = function(t2, n2, r2, e2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = [];
  var i2 = t2[1], o2 = t2[2], a2 = t2[3];
  this.outputShape = [t2[0], n2, r2, a2];
  var s2 = [e2 && n2 > 1 ? i2 - 1 : i2, e2 && r2 > 1 ? o2 - 1 : o2], u2 = [e2 && n2 > 1 ? n2 - 1 : n2, e2 && r2 > 1 ? r2 - 1 : r2];
  this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + s2[0] / u2[0] + ",\n          " + s2[1] / u2[1] + ",\n          " + s2[1] / u2[1] + ");\n      const vec3 inputShapeRC = vec3(" + i2 + ".0, " + o2 + ".0,\n                                     " + o2 + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (a2 - 1) + ";\n        bool hasNextRow = coords.z < " + (r2 - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";
};
var _a = function(t2, n2, r2) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = n2.shape;
  var e2 = n2.shape, i2 = e2[1], o2 = e2[2], a2 = t2.shape, s2 = a2[1], u2 = a2[2], c2 = [r2 && s2 > 1 ? i2 - 1 : i2, r2 && u2 > 1 ? o2 - 1 : o2], l2 = [r2 && s2 > 1 ? s2 - 1 : s2, r2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, v2 = 1 / f2;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + v2 + ");\n\n        const int winHeight = int(" + (2 * Math.ceil(d2) + 2) + ");\n        const int winWidth = int(" + (2 * Math.ceil(v2) + 2) + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c2[0] + ") *\n                (float(dyR) / float(" + l2[0] + "));\n\n            float sourceFracCol =\n                float(" + c2[1] + ") *\n                  (float(dyC) / float(" + l2[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + i2 + ") - 1),\n                " + r2 + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + o2 + ") - 1),\n                " + r2 + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
};
var Ea = function(t2, n2, r2, e2) {
  this.variableNames = ["A"], this.outputShape = [];
  var i2 = t2[1], o2 = t2[2];
  this.outputShape = [t2[0], n2, r2, t2[3]];
  var a2 = [e2 && n2 > 1 ? i2 - 1 : i2, e2 && r2 > 1 ? o2 - 1 : o2], s2 = [e2 && n2 > 1 ? n2 - 1 : n2, e2 && r2 > 1 ? r2 - 1 : r2];
  this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + a2[0] / s2[0] + ",\n          " + a2[1] / s2[1] + ");\n      const vec2 inputShapeRC = vec2(" + i2 + ".0, " + o2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + (e2 ? "0.5" : "0.0") + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";
};
var Ra = function(t2, n2) {
  this.variableNames = ["x"];
  var r2 = t2.length;
  if (r2 > 4) throw Error("WebGL backend: Reverse of rank-" + r2 + " tensor is not yet supported");
  if (this.outputShape = t2, 1 !== r2) {
    var e2 = t2.map((r3, e3) => {
      return -1 !== n2.indexOf(i3 = e3) && 1 !== t2[i3] ? t2[i3] + " - coords[" + i3 + "] - 1" : "coords[" + i3 + "]";
      var i3;
    }).join(","), i2 = ji(r2);
    this.userCode = "\n      void main() {\n        " + i2 + " coords = getOutputCoords();\n        setOutput(getX(" + e2 + "));\n      }\n    ";
  } else this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + t2[0] + " - coord - 1));\n        }\n      ";
};
var Aa = function(t2, n2) {
  this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true;
  var r2 = t2.length;
  if (r2 > 4) throw Error("WebGL backend: Reverse of rank-" + r2 + " tensor is not yet supported");
  this.outputShape = t2;
  var e2, i2 = Ii("rc", r2), o2 = i2[r2 - 1] + " + 1 < " + this.outputShape[r2 - 1], a2 = i2[r2 - 2] + " + 1 < " + this.outputShape[r2 - 2], s2 = ji(r2);
  function u2(r3) {
    var e3 = t2.map((e4, i3) => {
      return a3 = r3, -1 !== n2.indexOf(o3 = i3) && 1 !== t2[o3] ? t2[o3] + " - " + a3[o3] + " - 1" : "" + a3[o3];
      var o3, a3;
    });
    return "getChannel(getX(" + e3.join(",") + "), vec2(" + e3.slice(-2).join(",") + "))";
  }
  this.userCode = 1 === r2 ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + t2[0] + " - rc - 1),\n            " + t2[0] + " - rc - 1);\n          if(" + o2 + "){\n              result.g = getChannel(getX(" + t2[0] + " - (rc  + 1) - 1),\n                " + t2[0] + " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + s2 + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + u2(i2.slice()) + ";\n          if(" + o2 + "){\n            result.g = " + ((e2 = i2.slice())[r2 - 1] = "(" + e2[r2 - 1] + " + 1)", u2(e2) + ";\n          }\n          if(") + a2 + ") {\n            result.b = " + ((t3) => (t3[r2 - 2] = "(" + t3[r2 - 2] + " + 1)", u2(t3)))(i2.slice()) + ";\n            if(" + o2 + ") {\n              result.a = " + ((t3) => (t3[r2 - 1] = "(" + t3[r2 - 1] + " + 1)", t3[r2 - 2] = "(" + t3[r2 - 2] + " + 1)", u2(t3)))(i2.slice()) + ";\n            }\n          }\n          setOutput(result);\n        }\n    ";
};
var Na = function(t2, n2, r2, e2, i2, o2, a2) {
  this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = o2;
  var s2 = ji(i2.length), u2 = ji(o2.length), c2 = "";
  1 === r2 ? c2 = "i" : 2 === r2 && (c2 = "i, j");
  var l2 = "";
  1 === e2 ? l2 = "i" : 2 === e2 && (l2 = "i, coords[1]"), this.userCode = "\n        " + s2 + " strides = " + s2 + "(" + i2 + ");\n\n        void main() {\n          " + u2 + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t2 + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + n2 + "; j++) {\n              int index = round(getIndices(" + c2 + "));\n              flattenedIndex += index * " + (n2 > 1 ? "strides[j]" : "strides") + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += getUpdates(" + l2 + ");\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";
};
var Oa = function(t2, n2) {
  this.variableNames = ["x", "segmentIds"];
  var r2 = t2.windowSize, e2 = t2.inSize, i2 = t2.numSegments;
  this.outputShape = [t2.batchSize, i2 * Math.ceil(e2 / r2)];
  var o2 = 4 * Math.floor(r2 / 4), a2 = r2 % 4, s2 = "\n        sumValue += dot(values, segFilter);\n    ", u2 = "";
  e2 % r2 > 0 && (u2 = "\n        if (inIdx < 0 || inIdx >= " + e2 + ") {\n          return initializationValue;\n        }\n      ");
  var c2 = "";
  e2 % r2 > 0 && (c2 = "\n        if (inIdx < 0 || inIdx >= " + e2 + ") {\n          return -1.0;\n        }\n      "), this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + u2 + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + c2 + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + i2 + ")) * float(" + r2 + "));\n        int currentSeg = int(mod(float(outIdx), float(" + i2 + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + o2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + s2 + "\n        }\n\n        int inIdx = inOffset + " + o2 + ";\n        if (" + (1 === a2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + s2 + "\n        } else if (" + (2 === a2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + s2 + "\n        } else if (" + (3 === a2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + s2 + "\n        }\n        setOutput(sumValue);\n      }\n    ";
};
var Ma = function(t2, n2, r2) {
  var e2, i2;
  if (this.variableNames = ["c", "a", "b"], this.outputShape = n2, r2 > 4) throw Error("Where for rank " + r2 + " is not yet supported");
  if (1 === r2) i2 = "resRC", e2 = "resRC";
  else {
    for (var o2 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], a2 = [], s2 = [], u2 = 0; n2.length > u2; u2++) s2.push("" + o2[u2]), t2 > u2 && a2.push("" + o2[u2]);
    e2 = a2.join(), i2 = s2.join();
  }
  var c2 = ji(r2);
  this.userCode = "\n      void main() {\n        " + c2 + " resRC = getOutputCoords();\n        float cVal = getC(" + e2 + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + i2 + "));\n        } else {\n          setOutput(getB(" + i2 + "));\n        }\n      }\n    ";
};
var Ia = (function() {
  function t2(t3) {
    this.variableNames = ["source"], this.outputShape = t3, this.rank = t3.length;
    var n2, r2 = ji(this.rank), e2 = "uniform int start[" + this.rank + "];", i2 = ((t4) => {
      if (1 === t4) return "sourceLoc";
      if (6 >= t4) return Ta.slice(0, t4).map((t5) => "sourceLoc." + t5).join(",");
      throw Error("Slicing for rank " + t4 + " is not yet supported");
    })(this.rank);
    n2 = "\n        " + r2 + " sourceLoc;\n        " + r2 + " coords = getOutputCoords();\n        " + t3.map((t4, n3) => "sourceLoc." + Ta[n3] + " = start[" + n3 + "] + coords." + Ta[n3] + ";").join("\n") + "\n      ", this.userCode = "\n      " + e2 + "\n      void main() {\n        " + n2 + "\n        setOutput(getSource(" + i2 + "));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var n2 = this;
    if (t3.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
    return (r2, e2) => {
      null == n2.startLoc && (n2.startLoc = r2.getUniformLocationNoThrow(e2, "start"), null == n2.startLoc) || r2.gl.uniform1iv(n2.startLoc, t3);
    };
  }, t2;
})();
var Ta = ["x", "y", "z", "w", "u", "v"];
var Sa = (function() {
  function t2(t3) {
    this.variableNames = ["source"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.rank = t3.length;
    var n2 = ji(this.rank), r2 = Ii("coords", this.rank), e2 = Ii("sourceLoc", this.rank), i2 = 1 === this.rank ? "sourceLoc" : "vec2(" + e2.slice(-2).join() + ")", o2 = "getChannel(getSource(" + e2.join() + "), " + i2 + ")", a2 = "\n      result.x = " + o2 + ";\n      if (++" + r2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n        ++" + e2[this.rank - 1] + ";\n        result.y = " + o2 + ";\n        --" + e2[this.rank - 1] + ";\n      }\n    ", s2 = 1 === this.rank ? "" : "\n      --" + r2[this.rank - 1] + ";\n      if (++" + r2[this.rank - 2] + " < " + t3[this.rank - 2] + ") {\n        ++" + e2[this.rank - 2] + ";\n        result.z = " + o2 + ";\n        if (++" + r2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n          ++" + e2[this.rank - 1] + ";\n          result.w = " + o2 + ";\n        }\n      }\n    ", u2 = this.rank > 4 ? t3.map((t4, n3) => e2[n3] + " = " + r2[n3] + " + start[" + n3 + "];").join("\n") : "sourceLoc = coords +\n            " + n2 + "(" + t3.map((t4, n3) => "start[" + n3 + "]").join() + ");";
    this.userCode = "\n      uniform int start[" + this.rank + "];\n      void main() {\n        " + n2 + " coords = getOutputCoords();\n        " + n2 + " sourceLoc;\n        " + u2 + "\n        vec4 result = vec4(0.);\n        " + a2 + "\n        " + s2 + "\n        setOutput(result);\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var n2 = this;
    if (t3.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
    return (r2, e2) => {
      null == n2.startLoc && (n2.startLoc = r2.getUniformLocationNoThrow(e2, "start"), null == n2.startLoc) || r2.gl.uniform1iv(n2.startLoc, t3);
    };
  }, t2;
})();
var Da = function(t2, n2, r2) {
  this.variableNames = ["x"], this.outputShape = r2;
  var e2 = r2.length, i2 = ji(r2.length), o2 = ji(r2.length), a2 = "";
  if (1 === e2) a2 = "coords * strides + begin";
  else {
    var s2 = 0;
    a2 = r2.map((t3, n3) => (s2++, 1 === r2.length ? "coords * strides[" + n3 + "] + begin[" + n3 + "]" : "coords[" + (s2 - 1) + "] * strides[" + n3 + "] + begin[" + n3 + "]")).join(",");
  }
  this.userCode = "\n      " + i2 + " begin = " + i2 + "(" + t2 + ");\n      " + i2 + " strides = " + i2 + "(" + n2 + ");\n\n      void main() {\n        " + o2 + " coords = getOutputCoords();\n        setOutput(getX(" + a2 + "));\n      }\n    ";
};
var ka = (function() {
  function t2(t3) {
    this.gpgpu = t3, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = false, this.usedTextures = {};
  }
  return t2.prototype.acquireTexture = function(t3, n2, r2) {
    var e2, i2 = Pa(n2, r2), o2 = Fa(t3, i2, r2);
    if (o2 in this.freeTextures || (this.freeTextures[o2] = []), o2 in this.usedTextures || (this.usedTextures[o2] = []), this.freeTextures[o2].length > 0) {
      this.numFreeTextures--, this.numUsedTextures++, this.log();
      var a2 = this.freeTextures[o2].shift();
      return this.usedTextures[o2].push(a2), a2;
    }
    return this.numUsedTextures++, this.log(), i2 === Lt.PACKED_2X2_FLOAT32 ? e2 = this.gpgpu.createPackedMatrixTexture(t3[0], t3[1]) : i2 === Lt.PACKED_2X2_FLOAT16 ? e2 = this.gpgpu.createFloat16PackedMatrixTexture(t3[0], t3[1]) : i2 === Lt.UNPACKED_FLOAT32 ? e2 = this.gpgpu.createFloat32MatrixTexture(t3[0], t3[1]) : i2 === Lt.UNPACKED_FLOAT16 ? e2 = this.gpgpu.createFloat16MatrixTexture(t3[0], t3[1]) : i2 === Lt.PACKED_4X1_UNSIGNED_BYTE && (e2 = this.gpgpu.createUnsignedBytesMatrixTexture(t3[0], t3[1])), this.usedTextures[o2].push(e2), e2;
  }, t2.prototype.releaseTexture = function(t3, n2, r2, e2) {
    if (null != this.freeTextures) {
      var i2 = Fa(n2, Pa(r2, e2), e2);
      i2 in this.freeTextures || (this.freeTextures[i2] = []), this.freeTextures[i2].push(t3), this.numFreeTextures++, this.numUsedTextures--;
      var o2 = this.usedTextures[i2], a2 = o2.indexOf(t3);
      if (0 > a2) throw Error("Cannot release a texture that was never provided by this texture manager");
      o2.splice(a2, 1), this.log();
    }
  }, t2.prototype.log = function() {
    this.logEnabled && console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + (this.numFreeTextures + this.numUsedTextures) + ")");
  }, t2.prototype.getNumUsedTextures = function() {
    return this.numUsedTextures;
  }, t2.prototype.getNumFreeTextures = function() {
    return this.numFreeTextures;
  }, t2.prototype.dispose = function() {
    var t3 = this;
    if (null != this.freeTextures) {
      for (var n2 in this.freeTextures) this.freeTextures[n2].forEach((n3) => {
        t3.gpgpu.deleteMatrixTexture(n3);
      });
      for (var n2 in this.usedTextures) this.usedTextures[n2].forEach((n3) => {
        t3.gpgpu.deleteMatrixTexture(n3);
      });
      this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0;
    }
  }, t2;
})();
function Pa(t2, n2) {
  if (t2 === Ft.UPLOAD) return Lt.PACKED_2X2_FLOAT32;
  if (t2 === Ft.RENDER || null == t2) return r2 = n2, o().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? r2 ? Lt.PACKED_2X2_FLOAT32 : Lt.UNPACKED_FLOAT32 : r2 ? Lt.PACKED_2X2_FLOAT16 : Lt.UNPACKED_FLOAT16;
  var r2;
  if (t2 === Ft.DOWNLOAD || t2 === Ft.PIXELS) return Lt.PACKED_4X1_UNSIGNED_BYTE;
  throw Error("Unknown logical texture type " + t2);
}
function Fa(t2, n2, r2) {
  return t2[0] + "_" + t2[1] + "_" + n2 + "_" + r2;
}
var La = function(t2, n2) {
  this.variableNames = ["A"];
  for (var r2 = Array(t2.length), e2 = 0; r2.length > e2; e2++) r2[e2] = t2[e2] * n2[e2];
  this.outputShape = r2, this.rank = r2.length;
  var i2 = ji(this.rank), o2 = ((t3) => {
    var n3 = t3.length;
    if (n3 > 5) throw Error("Tile for rank " + n3 + " is not yet supported");
    if (1 === n3) return "imod(resRC, " + t3[0] + ")";
    for (var r3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], e3 = [], i3 = 0; t3.length > i3; i3++) e3.push("imod(" + r3[i3] + ", " + t3[i3] + ")");
    return e3.join();
  })(t2);
  this.userCode = "\n      void main() {\n        " + i2 + " resRC = getOutputCoords();\n        setOutput(getA(" + o2 + "));\n      }\n    ";
};
var Ba = function(t2, n2) {
  this.variableNames = ["A"];
  for (var r2 = Array(t2.length), e2 = 0; r2.length > e2; e2++) r2[e2] = t2[n2[e2]];
  this.outputShape = r2, this.rank = r2.length;
  var i2 = ji(this.rank), o2 = ((t3) => {
    var n3 = t3.length;
    if (n3 > 6) throw Error("Transpose for rank " + n3 + " is not yet supported");
    for (var r3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], e3 = Array(n3), i3 = 0; t3.length > i3; i3++) e3[t3[i3]] = r3[i3];
    return e3.join();
  })(n2);
  this.userCode = "\n    void main() {\n      " + i2 + " resRC = getOutputCoords();\n      setOutput(getA(" + o2 + "));\n    }\n    ";
};
var Va = function(t2, n2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true;
  for (var r2 = Array(t2.length), e2 = 0; r2.length > e2; e2++) r2[e2] = t2[n2[e2]];
  if (this.outputShape = r2, this.rank = r2.length, this.rank > 6) throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
  var i2 = ji(this.rank), o2 = Mi("rc", this.rank), a2 = Array(this.rank);
  for (e2 = 0; n2.length > e2; e2++) a2[n2[e2]] = o2[e2];
  var s2 = "vec2(" + a2.slice(-2).join() + ")", u2 = "++" + o2[this.rank - 1] + " < " + r2[this.rank - 1], c2 = "getChannel(getA(" + a2.join() + "), " + s2 + ")";
  this.userCode = "\n    void main() {\n      " + i2 + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + c2 + ";\n      if(" + u2 + ") {\n        result[1] = " + c2 + ";\n      }\n      --" + o2[this.rank - 1] + ";\n      if(++" + o2[this.rank - 2] + " < " + r2[this.rank - 2] + ") {\n        result[2] = " + c2 + ";\n        if(" + u2 + ") {\n          result[3] = " + c2 + ";\n        }\n      }\n      setOutput(result);\n    }\n    ";
};
var Wa = 1.7580993408473768;
var za = 1.0507009873554805;
var Ga = function(t2, n2) {
  this.variableNames = ["A"], this.outputShape = t2, this.userCode = "\n      float unaryOperation(float x) {\n        " + n2 + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
};
var Ua = "if (isnan(x)) return x;";
var ja = "return abs(x);";
var qa = Ua + "\n  return (x < 0.0) ? 0.0 : x;\n";
var Ha = Ua + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
var Xa = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
var $a = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + Wa + ";\n  float scale = " + za + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
var Ka = "return -x;";
var Ya = "return ceil(x);";
var Ja = "return floor(x);";
var Za = "return exp(x);";
var Qa = "return exp(x) - 1.0;";
var ts = Ua + "\n  return sin(x);\n";
var ns = Ua + "\n  return cos(x);\n";
var rs = Ua + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n";
var es = Ua + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n";
var is = Ua + "\n  return atan(x);\n";
var os = Ua + "return log(x + sqrt(x * x + 1.0));";
var as = Ua + "\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));";
var ss = Ua + "\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;";
var us = "return x;";
var cs = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var ls = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var hs = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n";
var fs = function(t2, n2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + n2 + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
};
var ds = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outputShape = t2;
  var n2 = t2.length, r2 = Ii("rc", n2), e2 = ji(n2), i2 = ((t3, n3) => {
    if (1 === t3) return "rc";
    for (var r3 = "", e3 = 0; t3 > e3; e3++) r3 += n3[e3], t3 - 1 > e3 && (r3 += ",");
    return r3;
  })(n2, r2), o2 = r2.slice(-2), a2 = n2 > 1 ? "vec2(" + o2.join(",") + ")" : "rc";
  this.userCode = "\n      void main() {\n        " + e2 + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + i2 + ");\n\n        setOutput(getChannel(packedInput, " + a2 + "));\n      }\n    ";
};
var vs = {};
function ps(t2, n2) {
  if (void 0 === n2 && (n2 = false), "linear" === t2) return "return x;";
  if ("relu" === t2) return n2 ? cs : qa;
  if ("elu" === t2) return n2 ? hs : Xa;
  if ("relu6" === t2) return n2 ? ls : Ha;
  if ("prelu" === t2) return n2 ? io : ro;
  throw Error("Activation " + t2 + " has not been implemented for the WebGL backend.");
}
var ms = (function(t2) {
  function i2(n2) {
    var r2, e2 = t2.call(this) || this;
    if (e2.pendingRead = /* @__PURE__ */ new WeakMap(), e2.pendingDisposal = /* @__PURE__ */ new WeakSet(), e2.dataRefCount = /* @__PURE__ */ new WeakMap(), e2.numBytesInGPU = 0, e2.uploadWaitMs = 0, e2.downloadWaitMs = 0, e2.warnedAboutMemory = false, e2.pendingDeletes = 0, e2.disposed = false, !o().getBool("HAS_WEBGL")) throw Error("WebGL is not supported on this device");
    if (null == n2) {
      var i3 = zt(o().getNumber("WEBGL_VERSION"));
      e2.binaryCache = ((r2 = o().getNumber("WEBGL_VERSION")) in vs || (vs[r2] = {}), vs[r2]), e2.gpgpu = new ra(i3), e2.canvas = i3.canvas, e2.gpgpuCreatedLocally = true;
    } else e2.gpgpu = n2, e2.binaryCache = {}, e2.gpgpuCreatedLocally = false, e2.canvas = n2.gl.canvas;
    return e2.textureManager = new ka(e2.gpgpu), e2.numMBBeforeWarning = null == o().global.screen ? 1024 : o().global.screen.height * o().global.screen.width * window.devicePixelRatio * 600 / 1024 / 1024, e2.texData = new Ge(e2, St), e2;
  }
  return n(i2, t2), i2.prototype.numDataIds = function() {
    return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes;
  }, i2.prototype.write = function(t3, n2, r2) {
    if (o().getBool("DEBUG") && this.checkNumericalProblems(t3), "complex64" === r2 && null != t3) throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    var e2 = {};
    return this.texData.set(e2, { shape: n2, dtype: r2, values: t3, usage: Ft.UPLOAD }), e2;
  }, i2.prototype.move = function(t3, n2, r2, e2) {
    if (o().getBool("DEBUG") && this.checkNumericalProblems(n2), "complex64" === e2) throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    this.texData.set(t3, { shape: r2, dtype: e2, values: n2, usage: Ft.UPLOAD });
  }, i2.prototype.readSync = function(t3) {
    var n2 = this.texData.get(t3), r2 = n2.values, e2 = n2.dtype, i3 = n2.complexTensors, o2 = n2.shape;
    if (null != n2.slice) {
      var a2;
      a2 = n2.isPacked ? new fs(o2, us) : new Ga(o2, us);
      var s2 = this.runWebGLProgram(a2, [{ dataId: t3, shape: o2, dtype: e2 }], e2), u2 = this.readSync(s2.dataId);
      return this.disposeData(s2.dataId), u2;
    }
    if (null != r2) return this.convertAndCacheOnCPU(t3);
    if ("string" === e2) return r2;
    var c2, l2, h2 = null != this.activeTimers;
    return h2 && (c2 = Z()), l2 = "complex64" === e2 ? li(i3.real.dataSync(), i3.imag.dataSync()) : this.getValuesFromTexture(t3), h2 && (this.downloadWaitMs += Z() - c2), this.convertAndCacheOnCPU(t3, l2);
  }, i2.prototype.read = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i3, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2, w2, y2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (this.pendingRead.has(t3)) return n2 = this.pendingRead.get(t3), [2, new Promise((t4) => n2.push(t4))];
            if (r2 = this.texData.get(t3), i3 = r2.values, a2 = r2.shape, s2 = r2.dtype, u2 = r2.complexTensors, c2 = r2.isPacked, null != r2.slice) return l2 = c2 ? new fs(a2, us) : new Ga(a2, us), h2 = this.runWebGLProgram(l2, [{ dataId: t3, shape: a2, dtype: s2 }], s2), f2 = this.read(h2.dataId), this.disposeData(h2.dataId), [2, f2];
            if (null != i3) return [2, this.convertAndCacheOnCPU(t3)];
            if (!o().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === o().getNumber("WEBGL_VERSION")) throw Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
            return d2 = null, "complex64" !== s2 && o().get("WEBGL_BUFFER_SUPPORTED") && (v2 = this.decode(t3), p2 = this.texData.get(v2.dataId), d2 = (y2 = this.gpgpu).createBufferFromTexture.apply(y2, [p2.texture].concat(Ut(a2)))), this.pendingRead.set(t3, []), "complex64" === s2 ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
          case 1:
            e2.sent(), e2.label = 2;
          case 2:
            return "complex64" !== s2 ? [3, 4] : [4, Promise.all([u2.real.data(), u2.imag.data()])];
          case 3:
            return x2 = e2.sent(), m2 = li(x2[0], x2[1]), [3, 5];
          case 4:
            null == d2 ? m2 = this.getValuesFromTexture(t3) : (b2 = _(a2), m2 = this.gpgpu.downloadFloat32MatrixFromBuffer(d2, b2)), e2.label = 5;
          case 5:
            return null != v2 && this.disposeData(v2.dataId), g2 = this.convertAndCacheOnCPU(t3, m2), w2 = this.pendingRead.get(t3), this.pendingRead.delete(t3), w2.forEach((t4) => t4(g2)), this.pendingDisposal.has(t3) && (this.pendingDisposal.delete(t3), this.disposeData(t3), this.pendingDeletes--), [2, g2];
        }
      });
    });
  }, i2.prototype.checkNumericalProblems = (t3) => {
    if (null != t3) for (var n2 = 0; t3.length > n2; n2++) {
      var r2 = t3[n2];
      if (!Xt(r2)) {
        if (o().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")) throw Error("The value " + r2 + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
        throw Error("The value " + r2 + " cannot be represented on this device.");
      }
    }
  }, i2.prototype.getValuesFromTexture = function(t3) {
    var n2, r2 = this.texData.get(t3), e2 = r2.shape, i3 = r2.dtype, a2 = r2.isPacked, s2 = _(e2);
    if (o().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
      var u2 = this.decode(t3), c2 = this.texData.get(u2.dataId), l2 = (n2 = this.gpgpu).downloadMatrixFromPackedTexture.apply(n2, [c2.texture].concat(Ut(e2))).subarray(0, s2);
      return this.disposeData(u2.dataId), l2;
    }
    var h2 = o().getBool("WEBGL_PACK") && true === a2, f2 = h2 ? _n(e2) : e2, d2 = h2 ? new To(f2) : new Io(f2), v2 = this.runWebGLProgram(d2, [{ shape: f2, dtype: i3, dataId: t3 }], "float32"), p2 = this.texData.get(v2.dataId), m2 = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p2.texture, p2.texShape[0], p2.texShape[1]).subarray(0, s2);
    return this.disposeData(v2.dataId), m2;
  }, i2.prototype.time = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i3, a2, s2, u2, c2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            return n2 = this.activeTimers, r2 = [], i3 = false, null == this.programTimersStack ? (this.programTimersStack = r2, i3 = true) : this.activeTimers.push(r2), this.activeTimers = r2, t3(), a2 = C(this.activeTimers.map((t4) => t4.query)).filter((t4) => null != t4), s2 = C(this.activeTimers.map((t4) => t4.name)).filter((t4) => null != t4), this.activeTimers = n2, i3 && (this.programTimersStack = null), u2 = { uploadWaitMs: this.uploadWaitMs, downloadWaitMs: this.downloadWaitMs, kernelMs: null, wallMs: null }, o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(a2)] : [3, 2];
          case 1:
            return c2 = e2.sent(), u2.kernelMs = b(c2), u2.getExtraProfileInfo = () => c2.map((t4, n3) => ({ name: s2[n3], ms: t4 })).map((t4) => t4.name + ": " + t4.ms).join(", "), [3, 3];
          case 2:
            u2.kernelMs = { error: "WebGL query timers are not supported in this environment." }, e2.label = 3;
          case 3:
            return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, u2];
        }
      });
    });
  }, i2.prototype.memory = function() {
    return { unreliable: false, numBytesInGPU: this.numBytesInGPU };
  }, i2.prototype.startTimer = function() {
    return o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : { startMs: Z(), endMs: null };
  }, i2.prototype.endTimer = function(t3) {
    return o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(), t3) : (t3.endMs = Z(), t3);
  }, i2.prototype.getQueryTime = function(t3) {
    return r(this, 0, void 0, function() {
      var n2;
      return e(this, function(r2) {
        return o().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(t3)] : [2, (n2 = t3).endMs - n2.startMs];
      });
    });
  }, i2.prototype.disposeData = function(t3) {
    if (!this.pendingDisposal.has(t3)) {
      if (this.pendingRead.has(t3)) return this.pendingDisposal.add(t3), void this.pendingDeletes++;
      if (this.texData.has(t3)) {
        this.releaseGPUData(t3);
        var n2 = this.texData.get(t3).complexTensors;
        null != n2 && (n2.real.dispose(), n2.imag.dispose()), this.texData.delete(t3);
      }
    }
  }, i2.prototype.releaseGPUData = function(t3) {
    var n2 = this.texData.get(t3), r2 = n2.texture, e2 = n2.dtype, i3 = n2.texShape, o2 = n2.usage, a2 = n2.isPacked, s2 = n2.slice, u2 = s2 && s2.origDataId || t3, c2 = this.dataRefCount.get(u2);
    c2 > 1 ? this.dataRefCount.set(u2, c2 - 1) : (this.dataRefCount.delete(u2), null != r2 && (this.numBytesInGPU -= this.computeBytes(i3, e2), this.textureManager.releaseTexture(r2, i3, o2, a2)));
    var l2 = this.texData.get(t3);
    l2.texture = null, l2.texShape = null, l2.isPacked = false, l2.slice = null;
  }, i2.prototype.getTexture = function(t3) {
    return this.uploadToGPU(t3), this.texData.get(t3).texture;
  }, i2.prototype.getDataInfo = function(t3) {
    return this.texData.get(t3);
  }, i2.prototype.getCPUBackend = function() {
    return o().getBool("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = St.findBackend("cpu")), this.cpuBackend) : null;
  }, i2.prototype.shouldExecuteOnCPU = function(t3, n2) {
    var r2 = this;
    return void 0 === n2 && (n2 = 128), null != this.getCPUBackend() && t3.every((t4) => null == r2.texData.get(t4.dataId).texture && n2 > t4.size);
  }, i2.prototype.getGPGPUContext = function() {
    return this.gpgpu;
  }, i2.prototype.complex = function(t3, n2) {
    var r2 = this.makeOutput(t3.shape, "complex64");
    return this.texData.get(r2.dataId).complexTensors = { real: St.keep(t3.clone()), imag: St.keep(n2.clone()) }, r2;
  }, i2.prototype.real = function(t3) {
    return this.texData.get(t3.dataId).complexTensors.real.clone();
  }, i2.prototype.imag = function(t3) {
    return this.texData.get(t3.dataId).complexTensors.imag.clone();
  }, i2.prototype.slice = function(t3, n2, r2) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.slice(t3, n2, r2);
    if (0 === _(r2)) return sr([], r2, t3.dtype);
    var e2 = this.texData.get(t3.dataId).isPacked, i3 = ke(t3.shape, n2, r2);
    if (e2 || !i3) {
      var a2 = o().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Sa(r2) : new Ia(r2), s2 = a2.getCustomSetupFunc(n2);
      return this.compileAndRun(a2, [t3], null, s2);
    }
    return this.uploadToGPU(t3.dataId), this.shallowSlice(t3, n2, r2);
  }, i2.prototype.shallowSlice = function(t3, n2, r2) {
    var e2 = this.texData.get(t3.dataId), i3 = this.makeOutput(r2, t3.dtype), o2 = this.texData.get(i3.dataId);
    Object.assign(o2, e2), o2.shape = r2, o2.dtype = t3.dtype;
    var a2 = Pe(n2, t3.strides);
    e2.slice && (a2 += e2.slice.flatOffset), o2.slice = { flatOffset: a2, origDataId: e2.slice && e2.slice.origDataId || t3.dataId };
    var s2 = this.dataRefCount.get(o2.slice.origDataId) || 1;
    return this.dataRefCount.set(o2.slice.origDataId, s2 + 1), i3;
  }, i2.prototype.stridedSlice = function(t3, n2, r2, e2) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.stridedSlice(t3, n2, r2, e2);
    var i3 = Te(n2, r2, e2);
    if (i3.some((t4) => 0 === t4)) return sr([], i3);
    var o2 = new Da(n2, e2, i3);
    return this.compileAndRun(o2, [t3]);
  }, i2.prototype.reverse = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Aa(t3.shape, n2) : new Ra(t3.shape, n2);
    return this.compileAndRun(r2, [t3]);
  }, i2.prototype.concat = function(t3, n2) {
    if ("complex64" === t3[0].dtype) {
      var r2 = t3.map((t4) => or(t4)), e2 = t3.map((t4) => ar(t4));
      return ir(this.concat(r2, n2), this.concat(e2, n2));
    }
    if (this.shouldExecuteOnCPU(t3)) return this.cpuBackend.concat(t3, n2);
    if (1 === t3.length) return t3[0];
    if (t3.length > o().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var i3 = Math.floor(t3.length / 2), a2 = this.concat(t3.slice(0, i3), n2), s2 = this.concat(t3.slice(i3), n2);
      return this.concat([a2, s2], n2);
    }
    if (o().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && t3[0].rank > 1) {
      var u2 = new lo(t3.map((t4) => t4.shape), n2);
      return this.compileAndRun(u2, t3);
    }
    var c2 = rr(t3.map((t4) => t4.shape), n2), l2 = t3.map((t4) => t4.as2D(-1, _(t4.shape.slice(n2)))), h2 = new co(l2.map((t4) => t4.shape));
    return this.compileAndRun(h2, l2).reshape(c2);
  }, i2.prototype.neg = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.neg(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, Ka, t3.dtype);
    var n2 = new Ga(t3.shape, Ka);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.batchMatMul = function(t3, n2, r2, e2) {
    var i3 = r2 ? t3.shape[2] : t3.shape[1], o2 = e2 ? n2.shape[1] : n2.shape[2], a2 = r2 ? t3.shape[1] : t3.shape[2], s2 = t3.shape[0];
    if ((1 === i3 || 1 === o2) && a2 > 1e3) {
      r2 && (t3 = t3.transpose([0, 2, 1])), e2 && (n2 = n2.transpose([0, 2, 1]));
      var u2 = 1 === o2 ? t3 : t3.as3D(s2, a2, 1), c2 = 1 === o2 ? 2 : 1, l2 = 1 === o2 ? n2.as3D(s2, 1, a2) : n2;
      return this.multiply(u2, l2).sum(c2, true);
    }
    var h2 = _t(t3.dtype, n2.dtype), f2 = new la(t3.shape, [s2, i3, o2], r2, e2);
    return this.compileAndRun(f2, [t3, n2], h2);
  }, i2.prototype.fusedBatchMatMul = function(t3) {
    var n2 = t3.a, r2 = t3.b, e2 = t3.transposeA, i3 = t3.transposeB, o2 = t3.bias, a2 = t3.activation, s2 = t3.preluActivationWeights, u2 = e2 ? n2.shape[2] : n2.shape[1], c2 = i3 ? r2.shape[1] : r2.shape[2], l2 = n2.shape[0], h2 = _t(n2.dtype, r2.dtype), f2 = null != o2, d2 = null != s2, v2 = a2 ? ps(a2, true) : null, p2 = new la(n2.shape, [l2, u2, c2], e2, i3, f2, v2, d2), m2 = [n2, r2];
    return o2 && m2.push(o2), s2 && m2.push(s2), this.compileAndRun(p2, m2, h2);
  }, i2.prototype.multiply = function(t3, n2) {
    if ("complex64" === t3.dtype) {
      var r2 = this.texData.get(t3.dataId), e2 = this.texData.get(n2.dataId), i3 = new Zi("return areal * breal - aimag * bimag;", t3.shape, n2.shape), a2 = new Zi("return areal * bimag + aimag * breal;", t3.shape, n2.shape), s2 = [this.makeComplexComponentTensorInfo(t3, r2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, r2.complexTensors.imag), this.makeComplexComponentTensorInfo(n2, e2.complexTensors.real), this.makeComplexComponentTensorInfo(n2, e2.complexTensors.imag)], u2 = this.compileAndRun(i3, s2), c2 = this.compileAndRun(a2, s2), l2 = this.complex(u2, c2);
      return u2.dispose(), c2.dispose(), l2;
    }
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.multiply(t3, n2);
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, no, t3.dtype);
    var h2 = new eo(no, t3.shape, n2.shape);
    return this.compileAndRun(h2, [t3, n2], t3.dtype);
  }, i2.prototype.batchNormalization = function(t3, n2, r2, e2, i3, a2) {
    var s2 = [t3, n2, r2], u2 = null;
    null != a2 && (u2 = a2.shape, s2.push(a2));
    var c2 = null;
    if (null != i3 && (c2 = i3.shape, s2.push(i3)), o().getBool("WEBGL_PACK_NORMALIZATION")) {
      var l2 = new Ji(t3.shape, n2.shape, r2.shape, u2, c2, e2);
      return this.compileAndRun(l2, s2);
    }
    var h2 = new Yi(t3.shape, n2.shape, r2.shape, u2, c2, e2);
    return this.compileAndRun(h2, s2);
  }, i2.prototype.localResponseNormalization4D = function(t3, n2, r2, e2, i3) {
    var a2 = o().getBool("WEBGL_PACK_NORMALIZATION") ? new sa(t3.shape, n2, r2, e2, i3) : new oa(t3.shape, n2, r2, e2, i3);
    return this.compileAndRun(a2, [t3]);
  }, i2.prototype.LRNGrad = function(t3, n2, r2, e2, i3, o2, a2) {
    var s2 = new aa(n2.shape, e2, i3, o2, a2);
    return this.compileAndRun(s2, [n2, r2, t3]);
  }, i2.prototype.tile = function(t3, n2) {
    if ("string" === t3.dtype) {
      var r2 = this.readSync(t3.dataId).map((t4) => nt(t4));
      return _i(Gr(t3.shape, t3.dtype, r2), n2);
    }
    var e2 = new La(t3.shape, n2);
    return this.compileAndRun(e2, [t3]);
  }, i2.prototype.pad = function(t3, n2, r2) {
    var e2 = o().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new pa(t3.shape, n2, r2) : new va(t3.shape, n2, r2);
    return this.compileAndRun(e2, [t3]);
  }, i2.prototype.transpose = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.transpose(t3, n2);
    var r2 = o().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Va(t3.shape, n2) : new Ba(t3.shape, n2);
    return this.compileAndRun(r2, [t3]);
  }, i2.prototype.gather = function(t3, n2, r2) {
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.gather(t3, n2, r2);
    var e2 = new Fo(t3.shape, n2.size, r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.batchToSpaceND = (t3, n2, r2) => {
    g(4 >= t3.rank, () => "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");
    var e2 = n2.reduce((t4, n3) => t4 * n3), i3 = xe(t3.shape, n2, e2), o2 = be(i3.length, n2.length), a2 = ge(t3.shape, n2, e2), s2 = we(r2, n2.length), u2 = ye(a2, r2, n2.length);
    return t3.reshape(i3).transpose(o2).reshape(a2).slice(s2, u2);
  }, i2.prototype.spaceToBatchND = (t3, n2, r2) => {
    g(4 >= t3.rank, () => "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");
    var e2 = n2.reduce((t4, n3) => t4 * n3), i3 = [[0, 0]];
    i3.push.apply(i3, r2);
    for (var o2 = 1 + n2.length; t3.shape.length > o2; ++o2) i3.push([0, 0]);
    var a2 = t3.pad(i3), s2 = xe(a2.shape, n2, e2, false), u2 = be(s2.length, n2.length, false), c2 = ge(a2.shape, n2, e2, false);
    return a2.reshape(s2).transpose(u2).reshape(c2);
  }, i2.prototype.reduce = function(t3, n2, r2) {
    var e2 = t3.shape[0], i3 = t3.shape[1], o2 = Ee(i3), a2 = new ba({ windowSize: o2, inSize: i3, batchSize: e2 }, n2), s2 = this.compileAndRun(a2, [t3], r2);
    return 1 === s2.shape[1] ? s2 : this.reduce(s2, n2, r2);
  }, i2.prototype.argReduce = function(t3, n2, r2) {
    void 0 === r2 && (r2 = null);
    var e2 = t3.shape[0], i3 = t3.shape[1];
    null != r2 && (e2 = r2.shape[0], i3 = r2.shape[1]);
    var o2 = Ee(i3), a2 = new Oi({ windowSize: o2, inSize: i3, batchSize: e2 }, n2, null == r2), s2 = [t3];
    null != r2 && s2.push(r2);
    var u2 = this.compileAndRun(a2, s2, "int32");
    return 1 === u2.shape[1] ? u2 : this.argReduce(t3, n2, u2);
  }, i2.prototype.argReducePacked = function(t3, n2, r2) {
    void 0 === r2 && (r2 = null);
    var e2 = null != r2 ? r2.shape : t3.shape, i3 = Ee(e2[e2.length - 1]), o2 = new Xi(e2, i3, n2, null == r2), a2 = this.compileAndRun(o2, null == r2 ? [t3] : [t3, r2], "int32");
    return a2.rank === t3.rank ? this.argReducePacked(t3, n2, a2) : a2;
  }, i2.prototype.sum = function(t3, n2) {
    Jn("sum", n2, t3.rank);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3), a2 = Et(t3.dtype);
    return this.reduce(o2, "sum", a2).reshape(e2);
  }, i2.prototype.prod = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.prod(t3, n2);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3), a2 = Et(t3.dtype);
    return this.reduce(o2, "prod", a2).reshape(e2);
  }, i2.prototype.unsortedSegmentSum = function(t3, n2, r2) {
    var e2 = 0, i3 = Zn([e2], t3.rank), o2 = t3;
    null != i3 && (o2 = t3.transpose(i3), e2 = tr(1, t3.rank)[0]);
    var a2 = ((t4, n3, r3) => {
      for (var e3 = [], i4 = t4.length, o3 = 0; i4 > o3; o3++) e3.push(o3 !== n3 ? t4[o3] : r3);
      return e3;
    })(o2.shape, e2, r2), s2 = _([o2.shape[e2]]), u2 = o2.as2D(-1, s2), c2 = Et(t3.dtype), l2 = this.segOpCompute(u2, "unsortedSegmentSum", n2, c2, r2).reshape(a2);
    return null != i3 && (l2 = l2.transpose(Qn(i3))), l2;
  }, i2.prototype.segOpCompute = function(t3, n2, r2, e2, i3) {
    var o2 = t3.shape[0], a2 = t3.shape[1], s2 = ((t4, n3) => {
      var r3, e3 = false;
      for (t4 > 30 ? r3 = H(t4, Math.floor(Math.sqrt(t4))) : (r3 = t4, e3 = true); !e3; ) r3 > n3 || r3 === t4 ? e3 = true : r3 = H(t4, r3 + 1);
      return r3;
    })(a2, i3), u2 = new Oa({ windowSize: s2, inSize: a2, batchSize: o2, numSegments: i3 }), c2 = this.compileAndRun(u2, [t3, r2], e2);
    return c2.shape[1] === i3 ? c2 : (r2 = yr(0, i3).tile([a2 / s2]), this.segOpCompute(c2, n2, r2, e2, i3));
  }, i2.prototype.argMinMaxReduce = function(t3, n2, r2) {
    var e2 = [n2];
    if (Jn("arg" + r2.charAt(0).toUpperCase() + r2.slice(1), e2, t3.rank), !o().getBool("WEBGL_PACK_REDUCE") || 2 >= t3.rank) {
      var i3 = Kn(t3.shape, e2), a2 = i3[0], s2 = _(i3[1]), u2 = t3.as2D(-1, s2);
      return this.argReduce(u2, r2).reshape(a2);
    }
    return this.argReducePacked(t3, r2);
  }, i2.prototype.argMin = function(t3, n2) {
    return this.argMinMaxReduce(t3, n2, "min");
  }, i2.prototype.argMax = function(t3, n2) {
    return this.argMinMaxReduce(t3, n2, "max");
  }, i2.prototype.cumsum = function(t3, n2, r2, e2) {
    if (n2 !== t3.rank - 1) throw Error("WebGL cumsum shader expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + n2);
    var i3 = new Eo(t3.shape, r2, e2);
    return this.compileAndRun(i3, [t3]);
  }, i2.prototype.equal = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(equal(a, b));\n", "bool");
    var r2 = new eo("return float(a == b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.notEqual = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(notEqual(a, b));\n", "bool");
    var r2 = new eo("return float(a != b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.less = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.less(t3, n2);
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(lessThan(a, b));\n", "bool");
    var r2 = new eo("return float(a < b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.lessEqual = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(lessThanEqual(a, b));\n", "bool");
    var r2 = new eo("return float(a <= b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.greater = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.greater(t3, n2);
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(greaterThan(a, b));\n", "bool");
    var r2 = new eo("return float(a > b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.greaterEqual = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(greaterThanEqual(a, b));\n", "bool");
    var r2 = new eo("return float(a >= b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.logicalNot = function(t3) {
    var n2 = new Ga(t3.shape, "return float(!(x >= 1.0));");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.logicalAnd = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n", "bool");
    var r2 = new eo("return float(a >= 1.0 && b >= 1.0);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.logicalOr = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n", "bool");
    var r2 = new eo("return float(a >= 1.0 || b >= 1.0);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "bool");
  }, i2.prototype.select = function(t3, n2, r2) {
    var e2 = new Ma(t3.rank, n2.shape, n2.rank);
    return this.compileAndRun(e2, [t3, n2, r2], _t(n2.dtype, r2.dtype));
  }, i2.prototype.where = (t3) => {
    Gn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
    var n2 = t3.dataSync();
    return Ri(t3.shape, n2);
  }, i2.prototype.topk = (t3, n2, r2) => Ei(t3.dataSync(), t3.shape, t3.dtype, n2), i2.prototype.min = function(t3, n2) {
    Jn("min", n2, t3.rank);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3);
    return this.reduce(o2, "min", o2.dtype).reshape(e2);
  }, i2.prototype.minimum = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.minimum(t3, n2);
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, n2.shape) : new eo("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.mod = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, n2.shape) : new eo("if (b == 0.0) return NAN;\n  return mod(a, b);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.max = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.max(t3, n2);
    Jn("max", n2, t3.rank);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3);
    return this.reduce(o2, "max", o2.dtype).reshape(e2);
  }, i2.prototype.maximum = function(t3, n2) {
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.maximum(t3, n2);
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, n2.shape) : new eo("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.all = function(t3, n2) {
    Jn("all", n2, t3.rank);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3);
    return this.reduce(o2, "all", o2.dtype).reshape(e2);
  }, i2.prototype.any = function(t3, n2) {
    Jn("any", n2, t3.rank);
    var r2 = Kn(t3.shape, n2), e2 = r2[0], i3 = _(r2[1]), o2 = t3.as2D(-1, i3);
    return this.reduce(o2, "any", o2.dtype).reshape(e2);
  }, i2.prototype.realDivide = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n", "float32", true);
    var r2 = new eo("\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "float32");
  }, i2.prototype.floorDiv = function(t3, n2) {
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n", "int32");
    var r2 = new eo("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2], "int32");
  }, i2.prototype.add = function(t3, n2) {
    if ("complex64" === t3.dtype && "complex64" === n2.dtype) return this.complexSeparableBinaryOp(t3, n2, Qi);
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.add(t3, n2);
    var r2 = _t(t3.dtype, n2.dtype);
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, Qi, r2);
    var e2 = new eo(Qi, t3.shape, n2.shape);
    return this.compileAndRun(e2, [t3, n2], r2);
  }, i2.prototype.packedUnaryOp = function(t3, n2, r2) {
    var e2 = new fs(t3.shape, n2);
    return this.compileAndRun(e2, [t3], r2);
  }, i2.prototype.packedBinaryOp = function(t3, n2, r2, e2, i3) {
    void 0 === i3 && (i3 = false);
    var o2 = new oo(r2, t3.shape, n2.shape, i3);
    return this.compileAndRun(o2, [t3, n2], e2);
  }, i2.prototype.complexSeparableBinaryOp = function(t3, n2, r2) {
    var e2 = this, i3 = this.texData.get(t3.dataId), o2 = this.texData.get(n2.dataId), a2 = [[i3.complexTensors.real, o2.complexTensors.real], [i3.complexTensors.imag, o2.complexTensors.imag]].map((i4) => {
      var o3 = i4[0], a3 = i4[1], s3 = e2.makeComplexComponentTensorInfo(t3, o3), u3 = e2.makeComplexComponentTensorInfo(n2, a3), c3 = new eo(r2, t3.shape, n2.shape);
      return e2.compileAndRun(c3, [s3, u3], _t(o3.dtype, a3.dtype));
    }), s2 = a2[0], u2 = a2[1], c2 = this.complex(s2, u2);
    return s2.dispose(), u2.dispose(), c2;
  }, i2.prototype.makeComplexComponentTensorInfo = (t3, n2) => ({ dataId: n2.dataId, dtype: n2.dtype, shape: t3.shape }), i2.prototype.addN = function(t3) {
    if (1 === t3.length) return t3[0];
    if (t3.length > o().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var n2 = Math.floor(t3.length / 2), r2 = this.addN(t3.slice(0, n2)), e2 = this.addN(t3.slice(n2));
      return this.addN([r2, e2]);
    }
    var i3 = t3.map((t4) => t4.dtype).reduce((t4, n3) => _t(t4, n3)), a2 = t3.map((t4) => t4.shape), s2 = o().getBool("WEBGL_PACK") ? new Ni(t3[0].shape, a2) : new Ai(t3[0].shape, a2);
    return this.compileAndRun(s2, t3, i3);
  }, i2.prototype.subtract = function(t3, n2) {
    if ("complex64" === t3.dtype && "complex64" === n2.dtype) return this.complexSeparableBinaryOp(t3, n2, to);
    if (this.shouldExecuteOnCPU([t3, n2])) return this.cpuBackend.subtract(t3, n2);
    var r2 = _t(t3.dtype, n2.dtype);
    if (o().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t3, n2, to, t3.dtype);
    var e2 = new eo(to, t3.shape, n2.shape);
    return this.compileAndRun(e2, [t3, n2], r2);
  }, i2.prototype.pow = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, n2.shape) : new eo("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", t3.shape, n2.shape), e2 = _t(t3.dtype, n2.dtype);
    return this.compileAndRun(r2, [t3, n2], e2);
  }, i2.prototype.ceil = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.ceil(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, Ya, t3.dtype);
    var n2 = new Ga(t3.shape, Ya);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.floor = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.floor(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, Ja, t3.dtype);
    var n2 = new Ga(t3.shape, Ja);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.sign = function(t3) {
    var n2 = new Ga(t3.shape, "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.isNaN = function(t3) {
    var n2 = new Ga(t3.shape, "return float(isnan(x));");
    return this.compileAndRun(n2, [t3], "bool");
  }, i2.prototype.isInf = function(t3) {
    var n2 = new Ga(t3.shape, "return float(isinf(x));");
    return this.compileAndRun(n2, [t3], "bool");
  }, i2.prototype.isFinite = function(t3) {
    var n2 = new Ga(t3.shape, "return float(!isnan(x) && !isinf(x));");
    return this.compileAndRun(n2, [t3], "bool");
  }, i2.prototype.round = function(t3) {
    var n2 = new Ga(t3.shape, "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.exp = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.exp(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, Za, t3.dtype);
    var n2 = new Ga(t3.shape, Za);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.expm1 = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.expm1(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, Qa, t3.dtype);
    var n2 = new Ga(t3.shape, Qa);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.softmax = function(t3, n2) {
    var r2 = T([n2], t3.shape), e2 = this.max(t3, r2), i3 = Yn(e2.shape, r2), o2 = this.subtract(t3, e2.reshape(i3)), a2 = this.exp(o2), s2 = this.sum(a2, r2).reshape(i3);
    return this.realDivide(a2, s2);
  }, i2.prototype.log = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.log(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, "\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n", t3.dtype);
    var n2 = new Ga(t3.shape, "if (x < 0.0) return NAN;\n  return log(x);");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.log1p = function(t3) {
    var n2 = new Ga(t3.shape, "return log(1.0 + x);");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.sqrt = function(t3) {
    var n2 = new Ga(t3.shape, "return sqrt(x);");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.rsqrt = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.rsqrt(t3);
    var n2 = new Ga(t3.shape, "return inversesqrt(x);");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.reciprocal = function(t3) {
    var n2 = new Ga(t3.shape, "return 1.0 / x;");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.relu = function(t3) {
    var n2;
    return n2 = o().getBool("WEBGL_PACK") ? new fs(t3.shape, cs) : new Ga(t3.shape, qa), this.compileAndRun(n2, [t3]);
  }, i2.prototype.relu6 = function(t3) {
    var n2;
    return n2 = o().getBool("WEBGL_PACK") ? new fs(t3.shape, ls) : new Ga(t3.shape, Ha), this.compileAndRun(n2, [t3]);
  }, i2.prototype.prelu = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo(io, t3.shape, n2.shape) : new eo(ro, t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.elu = function(t3) {
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, hs, t3.dtype);
    var n2 = new Ga(t3.shape, Xa);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.eluDer = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", t3.shape, n2.shape) : new eo("return (b >= 1.0) ? a : a * (b + 1.0);", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.selu = function(t3) {
    var n2 = new Ga(t3.shape, $a);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.int = function(t3) {
    var n2 = new Ga(t3.shape, "return float(int(x));");
    return this.compileAndRun(n2, [t3], "int32");
  }, i2.prototype.clip = function(t3, n2, r2) {
    var e2, i3 = (e2 = o().getBool("WEBGL_PACK_CLIP") ? new so(t3.shape) : new ao(t3.shape)).getCustomSetupFunc(n2, r2);
    return this.compileAndRun(e2, [t3], null, i3);
  }, i2.prototype.abs = function(t3) {
    if (this.shouldExecuteOnCPU([t3])) return this.cpuBackend.abs(t3);
    if (o().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t3, ja, t3.dtype);
    var n2 = new Ga(t3.shape, ja);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.complexAbs = function(t3) {
    var n2 = this.texData.get(t3.dataId), r2 = new uo(t3.shape), e2 = [this.makeComplexComponentTensorInfo(t3, n2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, n2.complexTensors.imag)];
    return this.compileAndRun(r2, e2);
  }, i2.prototype.sigmoid = function(t3) {
    var n2 = new Ga(t3.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.softplus = function(t3) {
    var n2 = new Ga(t3.shape, "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.sin = function(t3) {
    var n2 = new Ga(t3.shape, ts);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.cos = function(t3) {
    var n2 = new Ga(t3.shape, ns);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.tan = function(t3) {
    var n2 = new Ga(t3.shape, "return tan(x);");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.asin = function(t3) {
    var n2 = new Ga(t3.shape, rs);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.acos = function(t3) {
    var n2 = new Ga(t3.shape, es);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.atan = function(t3) {
    var n2 = new Ga(t3.shape, is);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.atan2 = function(t3, n2) {
    var r2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, n2.shape) : new eo("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n", t3.shape, n2.shape);
    return this.compileAndRun(r2, [t3, n2]);
  }, i2.prototype.sinh = function(t3) {
    var n2 = new Ga(t3.shape, "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.cosh = function(t3) {
    var n2 = new Ga(t3.shape, "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.tanh = function(t3) {
    var n2 = new Ga(t3.shape, "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.asinh = function(t3) {
    var n2 = new Ga(t3.shape, os);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.acosh = function(t3) {
    var n2 = new Ga(t3.shape, as);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.atanh = function(t3) {
    var n2 = new Ga(t3.shape, ss);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.erf = function(t3) {
    var n2 = new Ga(t3.shape, '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.step = function(t3, n2) {
    var r2, e2 = new Ga(t3.shape, (void 0 === (r2 = n2) && (r2 = 0), Ua + "\n    return x > 0.0 ? 1.0 : float(" + r2 + ");\n  "));
    return this.compileAndRun(e2, [t3]);
  }, i2.prototype.conv2dByMatMul = function(t3, n2, r2, e2, i3, a2) {
    var s2 = t3.shape, u2 = this.texData.get(t3.dataId), c2 = "channelsLast" === r2.dataFormat, l2 = s2[2] % 2 != 0 && !!u2.isPacked;
    if ((1 === s2[0] * s2[1] * s2[2] || 1 === r2.outChannels) && r2.inChannels > 1e3 || !o().getBool("WEBGL_LAZILY_UNPACK") || !o().getBool("WEBGL_PACK_BINARY_OPERATIONS") || !l2) {
      var h2 = this.reshape(t3, [1, c2 ? s2[0] * s2[1] * s2[2] : s2[0] * s2[2] * s2[3], r2.inChannels]), f2 = this.reshape(n2, [1, r2.inChannels, r2.outChannels]);
      return this.reshape(this.fusedBatchMatMul({ a: h2, b: f2, transposeA: false, transposeB: false, bias: e2, activation: i3, preluActivationWeights: a2 }), r2.outShape);
    }
    var d2 = { dataId: t3.dataId, shape: [1, c2 ? s2[0] * s2[1] * (s2[2] + 1) : s2[0] * s2[2] * (s2[3] + 1), r2.inChannels], dtype: t3.dtype }, v2 = u2.shape;
    u2.shape = u2.shape.slice(), u2.shape[u2.shape.length - 2]++, g(An(u2.shape, d2.shape), () => "packed reshape " + u2.shape + " to " + d2.shape + " isn't free");
    var p2 = this.reshape(n2, [1, r2.inChannels, r2.outChannels]), m2 = this.fusedBatchMatMul({ a: d2, b: p2, transposeA: false, transposeB: false, bias: e2, activation: i3, preluActivationWeights: a2 }), x2 = this.texData.get(m2.dataId);
    return g(x2.isPacked, () => "batchMatMul result is expected to be packed"), u2.shape = v2, x2.shape = r2.outShape, St.makeTensorFromDataId(m2.dataId, r2.outShape, m2.dtype);
  }, i2.prototype.conv2dWithIm2Row = function(t3, n2, r2, e2, i3, o2) {
    var a2 = r2.outWidth, s2 = r2.outHeight, u2 = "channelsLast" === r2.dataFormat, c2 = r2.filterWidth * r2.filterHeight * r2.inChannels, l2 = s2 * a2, h2 = [c2, l2], f2 = t3.squeeze([0]), d2 = n2.reshape([1, c2, -1]), v2 = new ia(h2, f2.shape, r2), p2 = this.compileAndRun(v2, [f2]).reshape([1, h2[0], h2[1]]), m2 = null != e2, x2 = null != o2, b2 = i3 ? ps(i3, true) : null, g2 = new la(p2.shape, [1, l2, r2.outChannels], true, false, m2, b2, x2), w2 = [p2, d2];
    return e2 && w2.push(e2), x2 && w2.push(o2), this.compileAndRun(g2, w2).reshape(u2 ? [1, s2, a2, r2.outChannels] : [1, r2.outChannels, s2, a2]);
  }, i2.prototype.fusedConv2d = function(t3) {
    var n2 = t3.input, r2 = t3.filter, e2 = t3.convInfo, i3 = t3.bias, a2 = t3.activation, s2 = t3.preluActivationWeights;
    if (1 === e2.filterHeight && 1 === e2.filterWidth && 1 === e2.dilationHeight && 1 === e2.dilationWidth && 1 === e2.strideHeight && 1 === e2.strideWidth && ("SAME" === e2.padInfo.type || "VALID" === e2.padInfo.type)) return this.conv2dByMatMul(n2, r2, e2, i3, a2, s2);
    if (o().getBool("WEBGL_CONV_IM2COL") && 1 === n2.shape[0]) return this.conv2dWithIm2Row(n2, r2, e2, i3, a2, s2);
    var u2 = null != i3, c2 = null != s2, l2 = a2 ? ps(a2, false) : null, h2 = new go(e2, u2, l2, c2), f2 = [n2, r2];
    return i3 && f2.push(i3), s2 && f2.push(s2), this.compileAndRun(h2, f2);
  }, i2.prototype.conv2d = function(t3, n2, r2) {
    if (1 === r2.filterHeight && 1 === r2.filterWidth && 1 === r2.dilationHeight && 1 === r2.dilationWidth && 1 === r2.strideHeight && 1 === r2.strideWidth && ("SAME" === r2.padInfo.type || "VALID" === r2.padInfo.type)) return this.conv2dByMatMul(t3, n2, r2);
    if (o().getBool("WEBGL_CONV_IM2COL") && 1 === t3.shape[0]) return this.conv2dWithIm2Row(t3, n2, r2);
    var e2 = new go(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.conv2dDerInput = function(t3, n2, r2) {
    var e2 = new vo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.conv2dDerFilter = function(t3, n2, r2) {
    var e2 = new fo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.fusedDepthwiseConv2D = function(t3) {
    var n2, r2 = t3.input, e2 = t3.filter, i3 = t3.convInfo, a2 = t3.bias, s2 = t3.activation, u2 = t3.preluActivationWeights, c2 = o().getBool("WEBGL_PACK_DEPTHWISECONV") && 2 >= i3.strideWidth && i3.outChannels / i3.inChannels == 1, l2 = s2 ? ps(s2, c2) : null, h2 = [r2, e2], f2 = null != a2, d2 = null != u2;
    return f2 && h2.push(a2), d2 && h2.push(u2), c2 ? (n2 = new Co(i3, f2, l2, d2), this.compileAndRun(n2, h2)) : (n2 = new yo(i3, f2, l2, d2), this.compileAndRun(n2, h2));
  }, i2.prototype.depthwiseConv2D = function(t3, n2, r2) {
    var e2;
    return o().getBool("WEBGL_PACK_DEPTHWISECONV") && 2 >= r2.strideWidth && r2.outChannels / r2.inChannels == 1 ? (e2 = new Co(r2), this.compileAndRun(e2, [t3, n2])) : (e2 = new yo(r2), this.compileAndRun(e2, [t3, n2]));
  }, i2.prototype.depthwiseConv2DDerInput = function(t3, n2, r2) {
    var e2 = new bo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.depthwiseConv2DDerFilter = function(t3, n2, r2) {
    var e2 = new xo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.conv3d = function(t3, n2, r2) {
    var e2 = new wo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.conv3dDerInput = function(t3, n2, r2) {
    var e2 = new mo(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.conv3dDerFilter = function(t3, n2, r2) {
    var e2 = new po(r2);
    return this.compileAndRun(e2, [t3, n2]);
  }, i2.prototype.maxPool = function(t3, n2) {
    var r2 = new ma(n2, "max", false);
    return this.compileAndRun(r2, [t3]);
  }, i2.prototype.avgPool = function(t3, n2) {
    var r2 = new ma(n2, "avg", false);
    return this.compileAndRun(r2, [t3], "float32");
  }, i2.prototype.maxPoolBackprop = function(t3, n2, r2, e2) {
    var i3 = new ma(e2, "max", true), o2 = this.compileAndRun(i3, [n2]), a2 = new ua(e2), s2 = this.compileAndRun(a2, [t3, o2], n2.dtype);
    return o2.dispose(), s2;
  }, i2.prototype.avgPoolBackprop = function(t3, n2, r2) {
    var e2 = new $i(r2);
    return this.compileAndRun(e2, [t3], n2.dtype);
  }, i2.prototype.cast = function(t3, n2) {
    return ai(t3, n2, this);
  }, i2.prototype.unstack = function(t3, n2) {
    for (var r2 = t3.shape[n2], e2 = Array(t3.rank - 1), i3 = 0, o2 = 0; t3.rank > o2; o2++) o2 !== n2 && (e2[i3++] = t3.shape[o2]);
    var a2 = Array(t3.rank).fill(0), s2 = t3.shape.slice();
    s2[n2] = 1;
    var u2 = Array(r2);
    for (o2 = 0; u2.length > o2; o2++) a2[n2] = o2, u2[o2] = this.slice(t3, a2, s2).reshape(e2);
    return u2;
  }, i2.prototype.avgPool3d = function(t3, n2) {
    var r2 = new xa(n2, "avg", false);
    return this.compileAndRun(r2, [t3], "float32");
  }, i2.prototype.avgPool3dBackprop = function(t3, n2, r2) {
    var e2 = new Ki(r2);
    return this.compileAndRun(e2, [t3], n2.dtype);
  }, i2.prototype.maxPool3d = function(t3, n2) {
    var r2 = new xa(n2, "max", false);
    return this.compileAndRun(r2, [t3], "float32");
  }, i2.prototype.maxPool3dBackprop = function(t3, n2, r2, e2) {
    var i3 = new xa(e2, "max", true), o2 = this.compileAndRun(i3, [n2]), a2 = new ca(e2), s2 = this.compileAndRun(a2, [t3, o2], n2.dtype);
    return o2.dispose(), s2;
  }, i2.prototype.reshape = function(t3, n2) {
    var r2 = this.texData.get(t3.dataId);
    if (r2.isPacked && !An(t3.shape, n2) && (null === r2.texture || !An(r2.shape, n2))) {
      var e2 = this.packedReshape(t3, n2);
      return St.makeTensorFromDataId(e2.dataId, e2.shape, e2.dtype);
    }
    return si(t3, n2);
  }, i2.prototype.resizeBilinear = function(t3, n2, r2, e2) {
    var i3 = o().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new Ca(t3.shape, n2, r2, e2) : new ya(t3.shape, n2, r2, e2);
    return this.compileAndRun(i3, [t3], "float32");
  }, i2.prototype.resizeBilinearBackprop = function(t3, n2, r2) {
    var e2 = new wa(t3, n2, r2);
    return this.compileAndRun(e2, [t3]);
  }, i2.prototype.resizeNearestNeighbor = function(t3, n2, r2, e2) {
    var i3 = new Ea(t3.shape, n2, r2, e2);
    return this.compileAndRun(i3, [t3]);
  }, i2.prototype.resizeNearestNeighborBackprop = function(t3, n2, r2) {
    var e2 = new _a(t3, n2, r2);
    return this.compileAndRun(e2, [t3]);
  }, i2.prototype.multinomial = function(t3, n2, r2, e2) {
    var i3 = n2 ? t3 : We(t3), o2 = new ha(i3.shape[0], i3.shape[1], r2), a2 = o2.getCustomSetupFunc(e2);
    return this.compileAndRun(o2, [i3], "int32", a2);
  }, i2.prototype.oneHot = function(t3, n2, r2, e2) {
    var i3 = new fa(t3.size, n2, r2, e2);
    return this.compileAndRun(i3, [t3]);
  }, i2.prototype.diag = function(t3) {
    var n2 = new Mo(t3.size);
    return this.compileAndRun(n2, [t3]);
  }, i2.prototype.nonMaxSuppression = (t3, n2, r2, e2, i3) => (Gn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), mi(t3.dataSync(), n2.dataSync(), r2, e2, i3)), i2.prototype.cropAndResize = function(t3, n2, r2, e2, i3, o2) {
    var a2 = new _o(t3.shape, n2.shape, e2, i3, o2);
    return this.compileAndRun(a2, [t3, n2, r2], "float32");
  }, i2.prototype.depthToSpace = function(t3, n2, r2) {
    g(n2 > 1, () => "blockSize should be > 1 for depthToSpace, but was: " + n2);
    var e2 = t3.shape[0], i3 = ("NHWC" === r2 ? t3.shape[1] : t3.shape[2]) * n2, o2 = ("NHWC" === r2 ? t3.shape[2] : t3.shape[3]) * n2, a2 = ("NHWC" === r2 ? t3.shape[3] : t3.shape[1]) / (n2 * n2), s2 = new Oo("NHWC" === r2 ? [e2, i3, o2, a2] : [e2, a2, i3, o2], n2, r2);
    return this.compileAndRun(s2, [t3]);
  }, i2.prototype.split = (t3, n2, r2) => Ci(t3, n2, r2), i2.prototype.scatterND = function(t3, n2, r2) {
    var e2 = Ne(0, t3, r2), i3 = e2.sliceRank, o2 = e2.numUpdates, a2 = e2.sliceSize, s2 = e2.strides, u2 = e2.outputSize, c2 = [u2 / a2, a2], l2 = t3.reshape([o2, i3]), h2 = n2.reshape([o2, a2]);
    if (0 === u2) return si(sr([]), r2);
    var f2 = cr(0), d2 = new Na(o2, i3, l2.rank, h2.rank, s2, c2);
    return this.compileAndRun(d2, [h2, l2, f2]).reshape(r2);
  }, i2.prototype.sparseToDense = function(t3, n2, r2, e2) {
    var i3 = Ne(0, t3, r2), o2 = new Na(i3.numUpdates, i3.sliceRank, t3.rank, n2.rank, i3.strides, [i3.outputSize, 1]);
    return this.compileAndRun(o2, [n2, t3, e2]).reshape(r2);
  }, i2.prototype.fft = function(t3) {
    return this.fftImpl(t3, false);
  }, i2.prototype.ifft = function(t3) {
    return this.fftImpl(t3, true);
  }, i2.prototype.fftImpl = function(t3, n2) {
    var r2 = this.texData.get(t3.dataId), e2 = new ko("return real * expR - imag * expI;", t3.shape, n2), i3 = new ko("return real * expI + imag * expR;", t3.shape, n2), o2 = [this.makeComplexComponentTensorInfo(t3, r2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, r2.complexTensors.imag)], a2 = this.compileAndRun(e2, o2), s2 = this.compileAndRun(i3, o2), u2 = this.complex(a2, s2).as2D(t3.shape[0], t3.shape[1]);
    return a2.dispose(), s2.dispose(), u2;
  }, i2.prototype.gatherND = function(t3, n2) {
    var r2 = n2.shape, e2 = r2[r2.length - 1], i3 = Ce(t3, n2), o2 = i3[0], a2 = i3[1], s2 = i3[2], u2 = i3[3], c2 = n2.reshape([a2, e2]), l2 = t3.reshape([t3.size / s2, s2]), h2 = new Lo(e2, u2, [a2, s2]);
    return this.compileAndRun(h2, [l2, c2]).reshape(o2);
  }, i2.prototype.fill = function(t3, n2, r2) {
    if ("string" === (r2 = r2 || j(n2))) {
      var e2 = k(r2, _(t3));
      return e2.fill(n2), St.makeTensor(e2, t3, r2, this);
    }
    var i3 = new Po(t3, n2), o2 = i3.getCustomSetupFunc(n2);
    return this.compileAndRun(i3, [], r2, o2);
  }, i2.prototype.onesLike = function(t3) {
    if ("string" === t3.dtype) throw Error("onesLike is not supported under string dtype");
    return this.fill(t3.shape, 1, t3.dtype);
  }, i2.prototype.zerosLike = function(t3) {
    return this.fill(t3.shape, "string" === t3.dtype ? "" : 0, t3.dtype);
  }, i2.prototype.linspace = (t3, n2, r2) => ui(t3, n2, r2), i2.prototype.makeTensorInfo = function(t3, n2) {
    var r2 = this.write(null, t3, n2);
    return this.texData.get(r2).usage = null, { dataId: r2, shape: t3, dtype: n2 };
  }, i2.prototype.makeOutput = function(t3, n2) {
    var r2 = this.makeTensorInfo(t3, n2).dataId;
    return St.makeTensorFromDataId(r2, t3, n2, this);
  }, i2.prototype.unpackTensor = function(t3) {
    var n2 = new ds(t3.shape);
    return this.runWebGLProgram(n2, [t3], t3.dtype);
  }, i2.prototype.packTensor = function(t3) {
    var n2 = new da(t3.shape);
    return this.runWebGLProgram(n2, [t3], t3.dtype, null, true);
  }, i2.prototype.packedReshape = function(t3, n2) {
    var r2 = [yn(t3.shape)].concat(Cn(t3.shape)), e2 = { dtype: t3.dtype, shape: r2, dataId: t3.dataId }, i3 = [yn(n2)].concat(Cn(n2)), o2 = new ga(i3, r2), a2 = this.runWebGLProgram(o2, [e2], t3.dtype, null, true);
    return { dataId: a2.dataId, shape: n2, dtype: a2.dtype };
  }, i2.prototype.decode = function(t3) {
    var n2, r2 = this.texData.get(t3), e2 = r2.isPacked, i3 = r2.shape, o2 = r2.dtype, a2 = _n(i3);
    return n2 = e2 ? new No(a2) : new Ao(a2), { dtype: o2, shape: i3, dataId: this.runWebGLProgram(n2, [{ shape: a2, dtype: o2, dataId: t3 }], o2, null, true).dataId };
  }, i2.prototype.runWebGLProgram = function(t3, n2, r2, e2, i3) {
    var a2 = this;
    void 0 === i3 && (i3 = false);
    var s2 = this.makeTensorInfo(t3.outputShape, r2), u2 = this.texData.get(s2.dataId);
    if (t3.packedOutput && (u2.isPacked = true), t3.outPackingScheme === Pt.DENSE) {
      var c2 = Ut(t3.outputShape);
      u2.texShape = c2.map((t4) => 2 * t4);
    }
    if (null != t3.outTexUsage && (u2.usage = t3.outTexUsage), 0 === _(s2.shape)) return u2.values = D(s2.dtype, 0), s2;
    var l2 = [], h2 = n2.map((n3) => {
      if ("complex64" === n3.dtype) throw Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
      var r3 = a2.texData.get(n3.dataId);
      if (null == r3.texture) {
        if (!t3.packedInputs && _(n3.shape) <= o().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) return { shape: n3.shape, texData: null, isUniform: true, uniformValues: r3.values };
        t3.packedInputs && (r3.isPacked = true, r3.shape = n3.shape);
      } else if (!!r3.isPacked != !!t3.packedInputs) n3 = r3.isPacked ? a2.unpackTensor(n3) : a2.packTensor(n3), l2.push(n3), r3 = a2.texData.get(n3.dataId);
      else if (r3.isPacked && !An(r3.shape, n3.shape)) {
        var e3 = n3, i4 = n3.shape;
        n3.shape = r3.shape, n3 = a2.packedReshape(n3, i4), l2.push(n3), r3 = a2.texData.get(n3.dataId), e3.shape = i4;
      }
      return a2.uploadToGPU(n3.dataId), { shape: n3.shape, texData: r3, isUniform: false };
    });
    this.uploadToGPU(s2.dataId);
    var f2, d2, v2, p2 = { shape: s2.shape, texData: u2, isUniform: false }, m2 = (d2 = t3, v2 = "", h2.concat(p2).forEach((t4) => {
      v2 += t4.shape + "_" + (t4.isUniform ? "uniform" : t4.texData.texShape) + "_" + (null != t4.texData && null != t4.texData.slice && t4.texData.slice.flatOffset > 0);
    }), d2.constructor.name + "_" + v2 + "_" + d2.userCode), x2 = this.getAndSaveBinary(m2, () => ((t4, n3, r3, e3) => {
      var i4 = n3.userCode, a3 = r3.map((t5, r4) => {
        var e4 = { logicalShape: t5.shape, texShape: t5.isUniform ? null : t5.texData.texShape, isUniform: t5.isUniform, isPacked: !t5.isUniform && t5.texData.isPacked, flatOffset: null };
        return null != t5.texData && null != t5.texData.slice && t5.texData.slice.flatOffset > 0 && (e4.flatOffset = t5.texData.slice.flatOffset), { name: n3.variableNames[r4], shapeInfo: e4 };
      }), s3 = a3.map((t5) => t5.shapeInfo), u3 = { logicalShape: e3.shape, texShape: e3.texData.texShape, isUniform: false, isPacked: e3.texData.isPacked, flatOffset: null }, c3 = Pi(a3, u3, i4, n3.packedInputs), l3 = t4.createProgram(c3), h3 = null, f3 = t4.getUniformLocation(l3, "NAN", false);
      1 === o().getNumber("WEBGL_VERSION") && (h3 = t4.getUniformLocation(l3, "INFINITY", false));
      for (var d3 = {}, v3 = 0; n3.variableNames.length > v3; v3++) {
        var p3 = n3.variableNames[v3];
        d3[p3] = t4.getUniformLocation(l3, p3, false), d3["offset" + p3] = t4.getUniformLocation(l3, "offset" + p3, false);
      }
      return { program: n3, source: c3, webGLProgram: l3, uniformLocations: d3, inShapeInfos: s3, outShapeInfo: u3, infLoc: h3, nanLoc: f3 };
    })(a2.gpgpu, t3, h2, p2)), b2 = null != this.activeTimers;
    if (b2 && (f2 = this.startTimer()), ((t4, n3, r3, e3, i4) => {
      ea(n3.inShapeInfos, r3), ea([n3.outShapeInfo], [e3]);
      var a3 = e3.texData.texture, s3 = e3.texData.texShape;
      e3.texData.isPacked ? t4.setOutputPackedMatrixTexture(a3, s3[0], s3[1]) : t4.setOutputMatrixTexture(a3, s3[0], s3[1]), t4.setProgram(n3.webGLProgram), 1 === o().getNumber("WEBGL_VERSION") && null !== n3.infLoc && t4.gl.uniform1f(n3.infLoc, 1 / 0), null !== n3.nanLoc && t4.gl.uniform1f(n3.nanLoc, NaN), r3.forEach((r4, e4) => {
        var i5 = n3.program.variableNames[e4], o2 = n3.uniformLocations[i5], a4 = n3.uniformLocations["offset" + i5];
        if (null != o2) if (r4.isUniform) if (2 > _(r4.shape)) t4.gl.uniform1f(o2, r4.uniformValues[0]);
        else {
          var s4 = r4.uniformValues;
          s4 instanceof Float32Array || (s4 = new Float32Array(s4)), t4.gl.uniform1fv(o2, s4);
        }
        else null != r4.texData.slice && null != a4 && t4.gl.uniform1i(a4, r4.texData.slice.flatOffset), t4.setInputMatrixTexture(r4.texData.texture, o2, e4);
      }), null != i4 && i4(t4, n3.webGLProgram), t4.executeProgram();
    })(this.gpgpu, x2, h2, p2, e2), l2.forEach((t4) => a2.disposeData(t4.dataId)), b2 && (f2 = this.endTimer(f2), this.activeTimers.push({ name: t3.constructor.name, query: this.getQueryTime(f2) })), !o().getBool("WEBGL_LAZILY_UNPACK") && u2.isPacked && false === i3) {
      var g2 = this.unpackTensor(s2);
      return this.disposeData(s2.dataId), g2;
    }
    return s2;
  }, i2.prototype.compileAndRun = function(t3, n2, r2, e2, i3) {
    void 0 === i3 && (i3 = false);
    var o2 = this.runWebGLProgram(t3, n2, r2 = r2 || n2[0].dtype, e2, i3);
    return St.makeTensorFromDataId(o2.dataId, o2.shape, o2.dtype);
  }, i2.prototype.getAndSaveBinary = function(t3, n2) {
    return t3 in this.binaryCache || (this.binaryCache[t3] = n2()), this.binaryCache[t3];
  }, i2.prototype.getTextureManager = function() {
    return this.textureManager;
  }, i2.prototype.dispose = function() {
    var t3 = this;
    this.disposed || (o().getBool("IS_TEST") || Object.keys(this.binaryCache).forEach((n2) => {
      t3.gpgpu.deleteProgram(t3.binaryCache[n2].webGLProgram), delete t3.binaryCache[n2];
    }), this.textureManager.dispose(), null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = true);
  }, i2.prototype.floatPrecision = function() {
    var t3 = this;
    return null == this.floatPrecisionValue && (this.floatPrecisionValue = Vn(() => {
      if (!o().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
        var n2 = o().getBool("DEBUG");
        o().set("DEBUG", false);
        var r2 = t3.abs(cr(1e-8)).dataSync()[0];
        if (o().set("DEBUG", n2), r2 > 0) return 32;
      }
      return 16;
    })), this.floatPrecisionValue;
  }, i2.prototype.epsilon = function() {
    return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
  }, i2.prototype.uploadToGPU = function(t3) {
    var n2, r2 = this.texData.get(t3), e2 = r2.shape, i3 = r2.dtype, o2 = r2.values, a2 = r2.usage, s2 = r2.isPacked;
    if (null == r2.texture) {
      var u2, c2 = null != this.activeTimers;
      c2 && (u2 = Z());
      var l2 = r2.texShape;
      if (null == l2 && (l2 = En(e2, s2), r2.texShape = l2), null != o2) {
        var h2 = _n(e2), f2 = void 0, d2 = l2[1], v2 = l2[0], p2 = o2 instanceof Uint8Array;
        s2 ? (d2 = (n2 = jt(l2[0], l2[1]))[0], f2 = new Do(h2, [v2 = n2[1], d2], p2)) : f2 = new So(h2, [v2, d2], p2);
        var m2 = this.makeTensorInfo([v2, d2], i3);
        this.texData.get(m2.dataId).usage = p2 ? Ft.PIXELS : Ft.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m2.dataId), d2, v2, o2);
        var x2 = this.runWebGLProgram(f2, [m2], i3, null, true), b2 = this.texData.get(x2.dataId);
        r2.texture = b2.texture, r2.texShape = b2.texShape, r2.isPacked = b2.isPacked, r2.usage = b2.usage, this.disposeData(m2.dataId), this.texData.delete(x2.dataId), r2.values = null, c2 && (this.uploadWaitMs += Z() - u2);
      } else {
        var g2 = this.acquireTexture(l2, a2, i3, s2);
        r2.texture = g2;
      }
    }
  }, i2.prototype.convertAndCacheOnCPU = function(t3, n2) {
    var r2 = this.texData.get(t3), e2 = r2.dtype;
    return this.releaseGPUData(t3), null != n2 && (r2.values = ((t4, n3) => {
      if ("float32" === n3 || "complex64" === n3) return t4;
      if ("int32" === n3 || "bool" === n3) {
        for (var r3 = "int32" === n3 ? new Int32Array(t4.length) : new Uint8Array(t4.length), e3 = 0; r3.length > e3; ++e3) r3[e3] = Math.round(t4[e3]);
        return r3;
      }
      throw Error("Unknown dtype " + n3);
    })(n2, e2)), r2.values;
  }, i2.prototype.acquireTexture = function(t3, n2, r2, e2) {
    if (this.numBytesInGPU += this.computeBytes(t3, r2), !this.warnedAboutMemory && this.numBytesInGPU > 1048576 * this.numMBBeforeWarning) {
      var i3 = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
      this.warnedAboutMemory = true, console.warn("High memory usage in GPU: " + i3 + " MB, most likely due to a memory leak");
    }
    return this.textureManager.acquireTexture(t3, n2, e2);
  }, i2.prototype.computeBytes = (t3, n2) => t3[0] * t3[1] * V(n2), i2;
})(Ue);
Dt() && St.registerBackend("webgl", () => new ms(), 2);
var xs = er({ square_(t2) {
  var n2 = qn(t2, "x", "square");
  return St.runKernelFunc((t3, r2) => (r2([n2]), t3.square(n2)), { x: n2 }, null, "Square", {}, [n2], []);
} });
var bs = "SquaredDifference";
var gs = er({ squaredDifference_(t2, n2) {
  var r2, e2 = qn(t2, "a", "squaredDifference"), i2 = qn(n2, "b", "squaredDifference");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3, n3) => {
    var r3 = t3.squaredDifference(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1], i3 = cr(2);
    return { a() {
      return t3.mul(r3.sub(e3).mul(i3));
    }, b() {
      return t3.mul(e3.sub(r3).mul(i3));
    } };
  }, bs, {}, [e2, i2], []);
} });
var ws = er({ abs_(t2) {
  var n2 = qn(t2, "x", "abs");
  return "complex64" === n2.dtype ? St.runKernelFunc((t3) => t3.complexAbs(n2), { $x: n2 }) : St.runKernelFunc((t3, r2) => {
    var e2 = t3.abs(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return t3.mul(r2.toFloat().step(-1));
    } };
  }, "Abs");
} });
var ys = er({ acos_(t2) {
  var n2 = qn(t2, "x", "acos");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.acos(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.divStrict(cr(1).sub(r2.toFloat().square()).sqrt()).neg();
    } };
  });
} });
var Cs = er({ acosh_(t2) {
  var n2 = qn(t2, "x", "acosh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.acosh(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.divStrict(r2.toFloat().square().sub(1).sqrt());
    } };
  });
} });
var _s = er({ asin_(t2) {
  var n2 = qn(t2, "x", "asin");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.asin(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.divStrict(cr(1).sub(r2.toFloat().square()).sqrt());
    } };
  });
} });
var Es = er({ asinh_(t2) {
  var n2 = qn(t2, "x", "asinh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.asinh(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.divStrict(cr(1).add(r2.toFloat().square()).sqrt());
    } };
  });
} });
var Rs = er({ atan_(t2) {
  var n2 = qn(t2, "x", "atan");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.atan(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(r2.toFloat().square().add(1));
    } };
  });
} });
var As = er({ atanh_(t2) {
  var n2 = qn(t2, "x", "atanh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.atanh(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(cr(1).sub(r2.toFloat().square()));
    } };
  });
} });
var Ns = er({ ceil_(t2) {
  var n2 = qn(t2, "x", "ceil");
  return St.runKernelFunc((t3) => t3.ceil(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Os = er({ clipByValue_(t2, n2, r2) {
  var e2 = qn(t2, "x", "clipByValue");
  return g(r2 >= n2, () => "Error in clip: min (" + n2 + ") must be less than or equal to max (" + r2 + ")."), St.runKernelFunc((t3, i2) => {
    var o2 = t3.clip(e2, n2, r2);
    return i2([e2]), o2;
  }, { x: e2 }, (t3, e3) => {
    var i2 = e3[0];
    return { x() {
      return t3.where(i2.greaterEqual(n2).logicalAnd(i2.lessEqual(r2)), _r(t3));
    } };
  }, "ClipByValue", { min: n2, max: r2 }, [e2]);
} });
var Ms = er({ cos_(t2) {
  var n2 = qn(t2, "x", "cos");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.cos(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return r2.toFloat().sin().neg().mul(t3);
    } };
  }, "Cos", {}, [n2]);
} });
var Is = er({ cosh_(t2) {
  var n2 = qn(t2, "x", "cosh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.cosh(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return r2.toFloat().sinh().mulStrict(t3);
    } };
  });
} });
var Ts = er({ erf_(t2) {
  var n2 = qn(t2, "x", "erf");
  return g("int32" === n2.dtype || "float32" === n2.dtype, () => "Input dtype must be `int32` or `float32`."), "int32" === n2.dtype && (n2 = n2.toFloat()), St.runKernelFunc((t3, r2) => {
    var e2 = t3.erf(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.mul(r2.square().neg().exp().mul(1.1283791670955126));
    } };
  });
} });
var Ss = er({ exp_(t2) {
  var n2 = qn(t2, "x", "exp");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.exp(n2);
    return r2([e2]), e2;
  }, { x: n2 }, (t3, n3) => ({ x() {
    return t3.mulStrict(n3[0]);
  } }), "Exp", {}, [], [true]);
} });
var Ds = er({ expm1_(t2) {
  var n2 = qn(t2, "x", "expm1");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.expm1(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.mul(r2.exp());
    } };
  });
} });
var ks = er({ floor_(t2) {
  var n2 = qn(t2, "x", "floor");
  return St.runKernelFunc((t3) => t3.floor(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Ps = er({ log_(t2) {
  var n2 = qn(t2, "x", "log");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.log(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return t3.div(r2.toFloat());
    } };
  }, "Log", {}, [n2]);
} });
var Fs = er({ log1p_(t2) {
  var n2 = qn(t2, "x", "log1p");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.log1p(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(r2.add(1));
    } };
  });
} });
var Ls = er({ logSigmoid_(t2) {
  var n2 = qn(t2, "x", "logSigmoid");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.softplus(n2.neg()).neg();
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.mul(r2.neg().sigmoid());
    } };
  });
} });
var Bs = er({ neg_(t2) {
  var n2 = qn(t2, "x", "neg");
  return St.runKernelFunc((t3) => t3.neg(n2), { x: n2 }, (t3) => ({ x() {
    return t3.neg();
  } }), "Neg", {}, [n2]);
} });
var Vs = er({ reciprocal_(t2) {
  var n2 = qn(t2, "x", "reciprocal");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.reciprocal(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(r2.square().neg());
    } };
  });
} });
var Ws = er({ round_(t2) {
  var n2 = qn(t2, "x", "round");
  return St.runKernelFunc((t3) => t3.round(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var zs = er({ rsqrt_(t2) {
  var n2 = qn(t2, "x", "rsqrt");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.rsqrt(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return t3.div(r2.pow(1.5).mul(2)).neg();
    } };
  }, "Rsqrt", {}, [n2]);
} });
var Gs = er({ sigmoid_(t2) {
  var n2 = qn(t2, "x", "sigmoid");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.sigmoid(n2);
    return r2([e2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return t3.mul(r2.mul(cr(1).sub(r2)));
    } };
  }, "Sigmoid");
} });
var Us = er({ sign_(t2) {
  var n2 = qn(t2, "x", "sign");
  return St.runKernelFunc((t3) => t3.sign(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var js = er({ isNaN_(t2) {
  var n2 = qn(t2, "x", "isNaN");
  return St.runKernelFunc((t3) => t3.isNaN(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var qs = er({ isInf_(t2) {
  var n2 = qn(t2, "x", "isInf");
  return St.runKernelFunc((t3) => t3.isInf(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Hs = er({ isFinite_(t2) {
  var n2 = qn(t2, "x", "isFinite");
  return St.runKernelFunc((t3) => t3.isFinite(n2), { $x: n2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Xs = er({ sin_(t2) {
  var n2 = qn(t2, "x", "sin");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.sin(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return r2.toFloat().cos().mul(t3);
    } };
  }, "Sin", {}, [n2]);
} });
var $s = er({ sinh_(t2) {
  var n2 = qn(t2, "x", "sinh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.sinh(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return r2.toFloat().cosh().mulStrict(t3);
    } };
  });
} });
var Ks = er({ softplus_(t2) {
  var n2 = qn(t2, "x", "softplus");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.softplus(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.mul(r2.sigmoid());
    } };
  });
} });
var Ys = er({ sqrt_(t2) {
  var n2 = qn(t2, "x", "sqrt");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.sqrt(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(r2.toFloat().sqrt().mul(2));
    } };
  });
} });
var Js = er({ step_(t2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = qn(t2, "x", "step");
  return St.runKernelFunc((t3) => t3.step(r2, n2), { $x: r2 }, (t3) => ({ $x() {
    return _r(t3);
  } }));
} });
var Zs = er({ tan_(t2) {
  var n2 = qn(t2, "x", "tan");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.tan(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return t3.div(r2.cos().square());
    } };
  });
} });
var Qs = er({ tanh_(t2) {
  var n2 = qn(t2, "x", "tanh");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.tanh(n2);
    return r2([e2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return cr(1).sub(r2.square()).mulStrict(t3);
    } };
  }, "Tanh", {}, null, [true]);
} });
function tu(t2, n2, r2, e2, i2, o2) {
  var a2, s2, u2 = qn(t2, "x", "batchNorm"), c2 = qn(n2, "mean", "batchNorm"), l2 = qn(r2, "variance", "batchNorm");
  return null != i2 && (a2 = qn(i2, "scale", "batchNorm")), null != e2 && (s2 = qn(e2, "offset", "batchNorm")), g(2 === u2.rank, () => "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + "."), g(2 === c2.rank || 1 === c2.rank, () => "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c2.rank + "."), g(2 === l2.rank || 1 === l2.rank, () => "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l2.rank + "."), null != a2 && g(2 === a2.rank || 1 === a2.rank, () => "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + a2.rank + "."), null != s2 && g(2 === s2.rank || 1 === s2.rank, () => "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s2.rank + "."), eu(u2, c2, l2, s2, a2, o2);
}
function nu(t2, n2, r2, e2, i2, o2) {
  var a2, s2, u2 = qn(t2, "x", "batchNorm"), c2 = qn(n2, "mean", "batchNorm"), l2 = qn(r2, "variance", "batchNorm");
  return null != i2 && (a2 = qn(i2, "scale", "batchNorm")), null != e2 && (s2 = qn(e2, "offset", "batchNorm")), g(3 === u2.rank, () => "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + "."), g(3 === c2.rank || 1 === c2.rank, () => "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c2.rank + "."), g(3 === l2.rank || 1 === l2.rank, () => "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l2.rank + "."), null != a2 && g(3 === a2.rank || 1 === a2.rank, () => "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + a2.rank + "."), null != s2 && g(3 === s2.rank || 1 === s2.rank, () => "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s2.rank + "."), eu(u2, c2, l2, s2, a2, o2);
}
function ru(t2, n2, r2, e2, i2, o2) {
  var a2, s2, u2 = qn(t2, "x", "batchNorm"), c2 = qn(n2, "mean", "batchNorm"), l2 = qn(r2, "variance", "batchNorm");
  return null != i2 && (a2 = qn(i2, "scale", "batchNorm")), null != e2 && (s2 = qn(e2, "offset", "batchNorm")), g(4 === u2.rank, () => "Error in batchNorm4D: x must be rank 4 but got rank " + u2.rank + "."), g(4 === c2.rank || 1 === c2.rank, () => "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c2.rank + "."), g(4 === l2.rank || 1 === l2.rank, () => "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l2.rank + "."), null != a2 && g(4 === a2.rank || 1 === a2.rank, () => "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + a2.rank + "."), null != s2 && g(4 === s2.rank || 1 === s2.rank, () => "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s2.rank + "."), eu(u2, c2, l2, s2, a2, o2);
}
function eu(t2, n2, r2, e2, i2, o2) {
  null == o2 && (o2 = 1e-3);
  var a2, s2, u2, c2 = qn(t2, "x", "batchNorm"), l2 = qn(n2, "mean", "batchNorm"), h2 = qn(r2, "variance", "batchNorm");
  return null != i2 && (a2 = qn(i2, "scale", "batchNorm")), null != e2 && (s2 = qn(e2, "offset", "batchNorm")), g(l2.rank === h2.rank, () => "Batch normalization gradient requires mean and variance to have equal ranks."), g(null == s2 || l2.rank === s2.rank, () => "Batch normalization gradient requires mean and offset to have equal ranks."), g(null == a2 || l2.rank === a2.rank, () => "Batch normalization gradient requires mean and scale to have equal ranks."), u2 = 0 === c2.rank || 1 === c2.rank ? c2.as4D(1, 1, 1, c2.size) : 2 === c2.rank ? c2.as4D(1, 1, c2.shape[0], c2.shape[1]) : 3 === c2.rank ? c2.as4D(1, c2.shape[0], c2.shape[1], c2.shape[2]) : c2, St.runKernelFunc((t3, n3) => {
    var r3 = t3.batchNormalization(u2, iu(l2), iu(h2), o2, iu(a2), iu(s2));
    return n3([c2, l2, h2, a2]), r3;
  }, { x: c2, mean: l2, variance: h2, scale: a2, offset: s2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1], i3 = n3[2], a3 = n3[3] ?? cr(1), s3 = He(e3.shape, u2.shape), c3 = [];
    if (1 === e3.rank) {
      for (var l3 = 0; u2.shape.length - 1 > l3; ++l3) c3.push(u2.shape[l3]);
      c3.push(1);
    }
    var h3 = r3.sub(e3), f2 = t3.mul(a3), d2 = zs(i3.add(cr(o2))), v2 = d2.mul(d2).mul(d2).mul(cr(-0.5));
    return { x() {
      return 1 === e3.rank ? t3.mul(de(d2.as4D(1, 1, 1, e3.shape[0]), c3)).mul(a3).reshape(r3.shape) : t3.mul(d2).mul(a3).reshape(r3.shape);
    }, mean() {
      var t4 = d2.mul(cr(-1)).mul(f2);
      return 1 === e3.rank && (t4 = t4.sum(s3)), t4.reshape(e3.shape);
    }, variance() {
      var t4 = v2.mul(h3).mul(f2);
      return 1 === e3.rank && (t4 = t4.sum(s3)), t4.reshape(e3.shape);
    }, scale() {
      var n4 = h3.mul(d2), r4 = t3.mul(n4);
      return 1 === e3.rank && (r4 = r4.sum(s3)), r4.reshape(e3.shape);
    }, offset() {
      var n4 = t3;
      return 1 === e3.rank && (n4 = n4.sum(s3)), n4.reshape(e3.shape);
    } };
  }, "BatchNormalization", { varianceEpsilon: o2 }, [c2, l2, h2, a2]).reshape(c2.shape);
}
function iu(t2) {
  return null == t2 ? null : 0 === t2.rank ? t2.as1D() : 1 === t2.rank ? t2 : 2 === t2.rank ? t2.as4D(1, 1, t2.shape[0], t2.shape[1]) : 3 === t2.rank ? t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]) : t2;
}
function ou() {
  Bn("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");
}
var au = er({ batchNormalization2d_(t2, n2, r2, e2, i2, o2) {
  return void 0 === e2 && (e2 = 1e-3), ou(), tu(t2, n2, r2, o2, i2, e2);
} });
var su = er({ batchNormalization3d_(t2, n2, r2, e2, i2, o2) {
  return void 0 === e2 && (e2 = 1e-3), ou(), nu(t2, n2, r2, o2, i2, e2);
} });
var uu = er({ batchNormalization4d_(t2, n2, r2, e2, i2, o2) {
  return void 0 === e2 && (e2 = 1e-3), ou(), ru(t2, n2, r2, o2, i2, e2);
} });
var cu = er({ batchNormalization_(t2, n2, r2, e2, i2, o2) {
  return void 0 === e2 && (e2 = 1e-3), ou(), eu(t2, n2, r2, o2, i2, e2);
} });
var lu = er({ batchNorm_: eu });
var hu = er({ batchNorm2d_: tu });
var fu = er({ batchNorm3d_: nu });
var du = er({ batchNorm4d_: ru });
var vu = er({ logicalAnd_(t2, n2) {
  var r2 = qn(t2, "a", "logicalAnd", "bool"), e2 = qn(n2, "b", "logicalAnd", "bool");
  return Xe(r2.shape, e2.shape), St.runKernelFunc((t3) => t3.logicalAnd(r2, e2), { a: r2, b: e2 }, null, "LogicalAnd");
} });
var pu = er({ logicalNot_(t2) {
  var n2 = qn(t2, "x", "logicalNot", "bool");
  return St.runKernelFunc((t3) => t3.logicalNot(n2), { $x: n2 });
} });
var mu = er({ logicalOr_(t2, n2) {
  var r2 = qn(t2, "a", "logicalOr", "bool"), e2 = qn(n2, "b", "logicalOr", "bool");
  return Xe(r2.shape, e2.shape), St.runKernelFunc((t3) => t3.logicalOr(r2, e2), { $a: r2, $b: e2 });
} });
var xu = er({ logicalXor_(t2, n2) {
  var r2 = qn(t2, "a", "logicalXor", "bool"), e2 = qn(n2, "b", "logicalXor", "bool");
  return Xe(r2.shape, e2.shape), mu(t2, n2).logicalAnd(vu(t2, n2).logicalNot());
} });
var bu = er({ where_(t2, n2, r2) {
  var e2 = qn(n2, "a", "where"), i2 = qn(r2, "b", "where"), o2 = qn(t2, "condition", "where", "bool");
  return w(e2.shape, i2.shape, "Error in where: "), 1 === o2.rank ? g(o2.shape[0] === e2.shape[0], () => "The first dimension of `a` must match the size of `condition`.") : w(o2.shape, i2.shape, "Error in where: "), St.runKernelFunc((t3, n3) => {
    var r3 = t3.select(o2, e2, i2);
    return n3([o2]), r3;
  }, { $condition: o2, $a: e2, $b: i2 }, (t3, n3) => {
    var r3 = n3[0];
    return { $condition() {
      return _r(r3).toFloat();
    }, $a() {
      return t3.mul(r3.cast(t3.dtype));
    }, $b() {
      return t3.mul(r3.logicalNot().cast(t3.dtype));
    } };
  });
} });
var gu = function(t2) {
  return r(this, 0, void 0, function() {
    var n2, r2, i2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return [4, (n2 = qn(t2, "condition", "whereAsync", "bool")).data()];
        case 1:
          return r2 = e2.sent(), i2 = Ri(n2.shape, r2), t2 !== n2 && n2.dispose(), [2, i2];
      }
    });
  });
};
var wu = er({ add_(t2, n2) {
  var r2, e2 = qn(t2, "a", "add"), i2 = qn(n2, "b", "add");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3) => t3.add(e2, i2), { a: e2, b: i2 }, (t3) => ({ a() {
    var n3 = t3, r3 = He(e2.shape, o2);
    return r3.length > 0 && (n3 = n3.sum(r3)), n3.reshape(e2.shape);
  }, b() {
    var n3 = t3, r3 = He(i2.shape, o2);
    return r3.length > 0 && (n3 = n3.sum(r3)), n3.reshape(i2.shape);
  } }), "Add");
} });
var yu = er({ addN_(t2) {
  g(Array.isArray(t2), () => "The argument passed to tf.addN() must be a list of tensors"), g(t2.length >= 1, () => "Must pass at least one tensor to tf.addN(), but got " + t2.length);
  var n2 = t2.map((t3, n3) => qn(t3, "tensors" + n3, "addN")), r2 = n2[0];
  return n2.forEach((t3) => {
    if (t3.dtype !== r2.dtype) throw Error("All tensors passed to tf.addN() must have the same dtype");
  }), n2.forEach((t3) => {
    if (!E(t3.shape, r2.shape)) throw Error("All tensors passed to tf.addN() must have the same shape");
  }), St.runKernelFunc((t3) => t3.addN(n2), n2, (t3) => {
    var r3 = {};
    return n2.forEach((n3, e2) => {
      r3[e2] = () => t3.clone();
    }), r3;
  }, "AddN");
} });
var Cu = er({ addStrict_(t2, n2) {
  var r2 = qn(t2, "a", "addStrict"), e2 = qn(n2, "b", "addStrict");
  return w(r2.shape, e2.shape, "Error in addStrict: "), r2.add(e2);
} });
var _u = er({ atan2_(t2, n2) {
  var r2, e2 = qn(t2, "a", "atan2"), i2 = qn(n2, "b", "atan2");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.atan2(e2, i2);
    return n3([e2, i2]), r3;
  }, { $a: e2, $b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { $a() {
      var n4 = wu(r3.square(), e3.square()), i3 = t3.mul(e3.div(n4)), a2 = He(r3.shape, o2);
      return a2.length > 0 && (i3 = i3.sum(a2)), i3.reshape(r3.shape);
    }, $b() {
      var n4 = wu(r3.square(), e3.square()), i3 = Bs(t3.mul(r3.div(n4))), a2 = He(e3.shape, o2);
      return a2.length > 0 && (i3 = i3.sum(a2)), i3.reshape(e3.shape);
    } };
  });
} });
var Eu = er({ div_(t2, n2) {
  var r2, e2 = qn(t2, "a", "div"), i2 = qn(n2, "b", "div");
  if (r2 = Rt(e2, i2), i2 = r2[1], "int32" === (e2 = r2[0]).dtype && "int32" === i2.dtype) return Nu(e2, i2);
  var o2 = Xe(e2.shape, i2.shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.realDivide(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      var n4 = t3.div(e3.toFloat()), i3 = He(r3.shape, o2);
      return i3.length > 0 ? n4.sum(i3).reshape(r3.shape) : n4;
    }, b() {
      var n4 = t3.mul(r3.toFloat()), i3 = He(e3.shape, o2);
      i3.length > 0 && (n4 = n4.sum(i3).reshape(e3.shape));
      var a2 = e3.square();
      return n4.div(a2.toFloat()).neg();
    } };
  }, "Div");
} });
var Ru = er({ divNoNan_(t2, n2) {
  var r2, e2 = qn(t2, "a", "div"), i2 = qn(n2, "b", "div");
  e2 = (r2 = Rt(e2, i2))[0];
  var o2 = Eu(e2, i2 = r2[1]), a2 = _r(o2), s2 = i2.equal(a2);
  return bu(s2, a2, o2);
} });
var Au = er({ divStrict_(t2, n2) {
  var r2 = qn(t2, "a", "div"), e2 = qn(n2, "b", "div");
  return w(r2.shape, e2.shape, "Error in divideStrict: "), r2.div(e2);
} });
var Nu = er({ floorDiv_(t2, n2) {
  var r2, e2 = qn(t2, "a", "floorDiv"), i2 = qn(n2, "b", "floorDiv");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.floorDiv(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      var n4 = t3.div(e3.toFloat()), i3 = He(r3.shape, o2);
      return i3.length > 0 ? n4.sum(i3).reshape(r3.shape) : n4;
    }, b() {
      var n4 = t3.mul(r3.toFloat()), i3 = He(e3.shape, o2);
      i3.length > 0 && (n4 = n4.sum(i3).reshape(e3.shape));
      var a2 = e3.square();
      return n4.div(a2.toFloat()).neg();
    } };
  }, "FloorDiv");
} });
var Ou = er({ maximum_(t2, n2) {
  var r2, e2 = qn(t2, "a", "maximum"), i2 = qn(n2, "b", "maximum");
  return r2 = Rt(e2, i2), i2 = r2[1], "bool" === (e2 = r2[0]).dtype && (e2 = e2.toInt(), i2 = i2.toInt()), Xe(e2.shape, i2.shape), St.runKernelFunc((t3, n3) => {
    var r3 = t3.maximum(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      return t3.mul(r3.greaterEqual(e3).toFloat());
    }, b() {
      return t3.mul(r3.less(e3).toFloat());
    } };
  }, "Maximum");
} });
var Mu = er({ maximumStrict_(t2, n2) {
  var r2 = qn(t2, "a", "maximumStrict"), e2 = qn(n2, "b", "maximumStrict");
  return w(r2.shape, e2.shape, "Error in maximumStrict: "), r2.maximum(e2);
} });
var Iu = er({ minimum_(t2, n2) {
  var r2, e2 = qn(t2, "a", "minimum"), i2 = qn(n2, "b", "minimum");
  return r2 = Rt(e2, i2), i2 = r2[1], "bool" === (e2 = r2[0]).dtype && (e2 = e2.toInt(), i2 = i2.toInt()), Xe(e2.shape, i2.shape), St.runKernelFunc((t3, n3) => {
    var r3 = t3.minimum(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      return t3.mul(r3.lessEqual(e3).toFloat());
    }, b() {
      return t3.mul(r3.greater(e3).toFloat());
    } };
  }, "Minimum");
} });
var Tu = er({ minimumStrict_(t2, n2) {
  var r2 = qn(t2, "a", "minimumStrict"), e2 = qn(n2, "b", "minimumStrict");
  return w(r2.shape, e2.shape, "Error in minimumStrict: "), r2.minimum(e2);
} });
var Su = er({ mod_(t2, n2) {
  var r2, e2 = qn(t2, "a", "mod"), i2 = qn(n2, "b", "mod");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.mod(e2, i2);
    return n3([e2, i2]), r3;
  }, { $a: e2, $b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { $a() {
      var n4 = He(r3.shape, o2);
      return n4.length > 0 ? t3.sum(n4).reshape(r3.shape) : t3;
    }, $b() {
      var n4 = t3.mul(r3.div(e3).floor().neg()), i3 = He(e3.shape, o2);
      return i3.length > 0 ? n4.sum(i3).reshape(e3.shape) : n4;
    } };
  });
} });
var Du = er({ modStrict_(t2, n2) {
  var r2 = qn(t2, "a", "modStrict"), e2 = qn(n2, "b", "modStrict");
  return w(r2.shape, e2.shape, "Error in modStrict: "), r2.mod(e2);
} });
var ku = er({ mul_(t2, n2) {
  var r2, e2 = qn(t2, "a", "mul"), i2 = qn(n2, "b", "mul");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.multiply(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      var n4 = t3.mul(e3.toFloat()), i3 = He(r3.shape, o2);
      return i3.length > 0 ? n4.sum(i3).reshape(r3.shape) : n4;
    }, b() {
      var n4 = t3.mul(r3.toFloat()), i3 = He(e3.shape, o2);
      return i3.length > 0 ? n4.sum(i3).reshape(e3.shape) : n4;
    } };
  }, "Mul");
} });
var Pu = er({ mulStrict_(t2, n2) {
  var r2 = qn(t2, "a", "mul"), e2 = qn(n2, "b", "mul");
  return w(r2.shape, e2.shape, "Error in multiplyStrict: "), r2.mul(e2);
} });
var Fu = er({ pow_(t2, n2) {
  var r2, e2 = qn(t2, "base", "pow"), i2 = qn(n2, "exp", "pow");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3, n3) => {
    var r3 = t3.pow(e2, i2);
    return n3([e2, i2, r3]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1], i3 = n3[2];
    return { a() {
      var n4 = e3.toFloat(), i4 = t3.mul(n4.mul(r3.pow(n4.sub(cr(1))))), a2 = He(r3.shape, o2);
      return a2.length > 0 && (i4 = i4.sum(a2)), i4.reshape(r3.shape);
    }, b() {
      var n4 = r3.greater(0), a2 = r3.log().where(n4, _r(r3)), s2 = t3.mul(i3.mul(a2)), u2 = He(e3.shape, o2);
      return u2.length > 0 && (s2 = s2.sum(u2)), s2.reshape(e3.shape);
    } };
  }, "Pow", {}, [e2, i2], [true]);
} });
var Lu = er({ powStrict_(t2, n2) {
  return w(t2.shape, n2.shape, "Error in powStrict: "), t2.pow(n2);
} });
var Bu = er({ squaredDifferenceStrict_(t2, n2) {
  var r2 = qn(t2, "a", "squaredDifferenceStrict"), e2 = qn(n2, "b", "squaredDifferenceStrict");
  return w(r2.shape, e2.shape, "Error in squaredDifferenceStrict: "), r2.squaredDifference(e2);
} });
var Vu = er({ sub_(t2, n2) {
  var r2, e2 = qn(t2, "a", "sub"), i2 = qn(n2, "b", "sub");
  r2 = Rt(e2, i2);
  var o2 = Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape);
  return St.runKernelFunc((t3) => t3.subtract(e2, i2), { a: e2, b: i2 }, (t3) => ({ a() {
    var n3 = t3, r3 = He(e2.shape, o2);
    return r3.length > 0 && (n3 = n3.sum(r3)), n3.reshape(e2.shape);
  }, b() {
    var n3 = t3, r3 = He(i2.shape, o2);
    return r3.length > 0 && (n3 = n3.sum(r3)), n3.neg().reshape(i2.shape);
  } }), "Sub");
} });
var Wu = er({ subStrict_(t2, n2) {
  var r2 = qn(t2, "a", "subStrict"), e2 = qn(n2, "b", "subStrict");
  return w(r2.shape, e2.shape, "Error in subStrict: "), r2.sub(e2);
} });
var zu = er({ equal_(t2, n2) {
  var r2, e2 = qn(t2, "a", "equal"), i2 = qn(n2, "b", "equal");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3) => t3.equal(e2, i2), { $a: e2, $b: i2 });
} });
var Gu = er({ equalStrict_(t2, n2) {
  var r2 = qn(t2, "a", "equalStrict"), e2 = qn(n2, "b", "equalStrict");
  return w(r2.shape, e2.shape, "Error in equalStrict: "), r2.equal(e2);
} });
var Uu = er({ greater_(t2, n2) {
  var r2, e2 = qn(t2, "a", "greater"), i2 = qn(n2, "b", "greater");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3) => t3.greater(e2, i2), { a: e2, b: i2 }, null, "Greater");
} });
var ju = er({ greaterEqual_(t2, n2) {
  var r2, e2 = qn(t2, "a", "greaterEqual"), i2 = qn(n2, "b", "greaterEqual");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3, n3) => {
    var r3 = t3.greaterEqual(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1];
    return { a() {
      return _r(r3);
    }, b() {
      return _r(e3);
    } };
  }, "GreaterEqual");
} });
var qu = er({ greaterEqualStrict_(t2, n2) {
  var r2 = qn(t2, "a", "greaterEqualStrict"), e2 = qn(n2, "b", "greaterEqualStrict");
  return w(r2.shape, e2.shape, "Error in greaterEqualStrict: "), r2.greaterEqual(e2);
} });
var Hu = er({ greaterStrict_(t2, n2) {
  var r2 = qn(t2, "a", "greaterStrict"), e2 = qn(n2, "b", "greaterStrict");
  return w(r2.shape, e2.shape, "Error in greaterStrict: "), r2.greater(e2);
} });
var Xu = er({ less_(t2, n2) {
  var r2, e2 = qn(t2, "a", "less"), i2 = qn(n2, "b", "less");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3) => t3.less(e2, i2), { a: e2, b: i2 }, null, "Less");
} });
var $u = er({ lessEqual_(t2, n2) {
  var r2, e2 = qn(t2, "a", "lessEqual"), i2 = qn(n2, "b", "lessEqual");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3, n3) => {
    var r3 = t3.lessEqual(e2, i2);
    return n3([e2, i2]), r3;
  }, { a: e2, b: i2 }, null, "LessEqual");
} });
var Ku = er({ lessEqualStrict_(t2, n2) {
  var r2 = qn(t2, "a", "lessEqualStrict"), e2 = qn(n2, "b", "lessEqualStrict");
  return w(r2.shape, e2.shape, "Error in lessEqualStrict: "), r2.lessEqual(e2);
} });
var Yu = er({ lessStrict_(t2, n2) {
  var r2 = qn(t2, "a", "lessStrict"), e2 = qn(n2, "b", "lessStrict");
  return w(r2.shape, e2.shape, "Error in lessStrict: "), r2.less(e2);
} });
var Ju = er({ notEqual_(t2, n2) {
  var r2, e2 = qn(t2, "a", "notEqual"), i2 = qn(n2, "b", "notEqual");
  return r2 = Rt(e2, i2), Xe((e2 = r2[0]).shape, (i2 = r2[1]).shape), St.runKernelFunc((t3) => t3.notEqual(e2, i2), { a: e2, b: i2 }, null, "NotEqual");
} });
var Zu = er({ notEqualStrict_(t2, n2) {
  var r2 = qn(t2, "a", "notEqualStrict"), e2 = qn(n2, "b", "notEqualStrict");
  return w(r2.shape, e2.shape, "Error in notEqualStrict: "), r2.notEqual(e2);
} });
function Qu(t2, n2) {
  for (var r2 = [], e2 = t2; n2 > e2; ++e2) r2.push(e2);
  return r2;
}
function tc(t2) {
  for (var n2 = [], r2 = 0; t2.length > r2; ++r2) for (var e2 = 0; t2[r2].length > e2; ++e2) n2.push(t2[r2][e2]);
  return n2;
}
var nc = er({ gather_(t2, n2, r2) {
  void 0 === r2 && (r2 = 0);
  var e2 = qn(t2, "x", "gather"), i2 = qn(n2, "indices", "gather", "int32");
  r2 = T(r2, e2.shape)[0];
  var o2 = ((t3, n3, r3) => {
    for (var e3 = t3.shape[r3], i3 = [], o3 = 1, a2 = 1, s2 = 0; r3 > s2; s2++) i3.push(t3.shape[s2]), o3 *= t3.shape[s2];
    for (s2 = 0; n3.rank > s2; s2++) i3.push(n3.shape[s2]);
    for (s2 = r3 + 1; t3.rank > s2; s2++) i3.push(t3.shape[s2]), a2 *= t3.shape[s2];
    return { batchSize: o3, sliceSize: a2, dimSize: e3, outputShape: i3 };
  })(e2, i2, r2);
  return St.runKernelFunc((t3, n3) => {
    var o3 = t3.gather(e2, i2.flatten(), r2);
    return n3([i2]), o3;
  }, { x: e2, indices: i2 }, (t3, n3) => {
    var i3 = n3[0];
    return { x() {
      var n4 = e2.shape, o3 = i3.size, a2 = n4.slice(0, r2), s2 = a2.length, u2 = n4.slice(r2, n4.length).slice(1), c2 = u2.length, l2 = Qu(0, s2), h2 = Qu(s2 + 1, s2 + 1 + c2), f2 = tc([a2, [o3], u2]), d2 = t3.reshape(f2), v2 = i3.reshape([o3]), p2 = tc([[s2], l2, h2]), m2 = d2.transpose(p2), x2 = rc(m2, v2, e2.shape[r2]), b2 = Qn(p2);
      return x2.transpose(b2);
    }, indices() {
      return i3;
    } };
  }, "Gather", { axis: r2 }).reshape(o2.outputShape);
} });
var rc = er({ unsortedSegmentSum_(t2, n2, r2) {
  var e2 = qn(t2, "x", "unsortedSegmentSum"), i2 = qn(n2, "segmentIds", "unsortedSegmentSum", "int32");
  return g(R(r2), () => "numSegments must be of dtype int"), St.runKernelFunc((t3, n3) => {
    var o2 = t3.unsortedSegmentSum(e2, i2, r2);
    return n3([i2]), o2;
  }, { $x: e2 }, (t3, n3) => {
    var r3 = n3[0];
    return { $x() {
      return ((t4, n4) => {
        for (var r4 = Ou(n4, _r(n4)), e3 = nc(t4, r4), i3 = ju(n4, cr(0, "int32")), o2 = e3.rank - i3.rank, a2 = 0; o2 > a2; ++a2) i3 = Yr(i3, a2 + 1);
        i3 = vu(i3, xr(e3.shape, "bool"));
        var s2 = _r(e3);
        return bu(i3, e3, s2);
      })(t3, r3);
    } };
  });
} });
var ec = function(t2, n2, i2) {
  return r(this, 0, void 0, function() {
    var r2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          for (r2 = qn(t2, "tensor", "boolMask"), o2 = qn(n2, "mask", "boolMask", "bool"), a2 = i2 ?? 0, u2 = r2.shape, g((s2 = o2.rank) > 0, () => "mask cannot be scalar"), w(u2.slice(a2, a2 + s2), o2.shape, "mask's shape must match the first K dimensions of tensor's shape,"), c2 = 1, l2 = a2; a2 + s2 > l2; l2++) c2 *= u2[l2];
          return h2 = u2.slice(0, a2).concat([c2], u2.slice(a2 + s2)), f2 = r2.reshape(h2), d2 = o2.reshape([-1]), [4, gu(d2)];
        case 1:
          return v2 = e2.sent(), p2 = v2.squeeze([1]), m2 = nc(f2, p2, a2), t2 !== r2 && r2.dispose(), n2 !== o2 && o2.dispose(), p2.dispose(), f2.dispose(), d2.dispose(), v2.dispose(), [2, m2];
      }
    });
  });
};
function ic(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = "NHWC"), g(t2.length === n2.rank, () => "Length of inShape (" + t2.length + ") and rank of dy (" + n2.rank + ") must match");
  var s2 = t2, u2 = n2, c2 = false;
  3 === n2.rank && (c2 = true, u2 = n2.as4D(1, n2.shape[0], n2.shape[1], n2.shape[2]), s2 = [1, t2[0], t2[1], t2[2]]), g(4 === s2.length, () => "Error in conv2dDerInput: inShape must be length 4, but got length " + s2.length + "."), g(4 === u2.rank, () => "Error in conv2dDerInput: dy must be rank 4, but got rank " + u2.rank), g(4 === r2.rank, () => "Error in conv2dDerInput: filter must be rank 4, but got rank " + r2.rank);
  var l2 = "NHWC" === o2 ? s2[3] : s2[1], h2 = "NHWC" === o2 ? u2.shape[3] : u2.shape[1];
  g(l2 === r2.shape[2], () => "Error in conv2dDerInput: depth of input (" + l2 + ") must match input depth for filter " + r2.shape[2] + "."), g(h2 === r2.shape[3], () => "Error in conv2dDerInput: depth of output (" + h2 + ") must match output depth for filter " + r2.shape[3] + "."), null != a2 && g(R(i2), () => "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + i2 + ".");
  var f2 = oi(o2), d2 = Ye(s2, r2.shape, e2, 1, i2, a2, false, f2), v2 = St.runKernelFunc((t3, n3) => {
    var e3 = t3.conv2dDerInput(u2, r2, d2);
    return n3([r2, u2]), e3;
  }, { dy4D: u2, filter: r2 }, (t3, n3) => {
    var r3 = n3[0], s3 = n3[1];
    return { dy4D() {
      return uc(t3, r3, e2, i2, o2, 1, a2);
    }, filter() {
      return lc(t3, s3, r3.shape, e2, i2, o2, a2);
    } };
  });
  return c2 ? v2.as3D(v2.shape[1], v2.shape[2], v2.shape[3]) : v2;
}
function oc(t2) {
  var n2, r2 = "number" == typeof (n2 = t2) ? [n2, n2, n2] : 2 === n2.length ? [n2[0], n2[1], 1] : n2;
  return 1 === r2[0] && 1 === r2[1] && 1 === r2[2];
}
function ac(t2, n2, r2, e2, i2) {
  g(t2.length === n2.rank, () => "Length of inShape (" + t2.length + ") and rank of dy (" + n2.rank + ") must match");
  var o2 = t2, a2 = n2, s2 = false;
  4 === n2.rank && (s2 = true, a2 = n2.as5D(1, n2.shape[0], n2.shape[1], n2.shape[2], n2.shape[3]), o2 = [1, t2[0], t2[1], t2[2], t2[3]]);
  var u2 = o2[4], c2 = a2.shape[4];
  g(5 === o2.length, () => "Error in conv3dDerInput: inShape must be length 5, but got length " + o2.length + "."), g(5 === a2.rank, () => "Error in conv3dDerInput: dy must be rank 5, but got rank " + a2.rank), g(5 === r2.rank, () => "Error in conv3dDerInput: filter must be rank 5, but got rank " + r2.rank), g(u2 === r2.shape[3], () => "Error in conv3dDerInput: depth of input (" + u2 + ") must match input depth for filter " + r2.shape[3] + "."), g(c2 === r2.shape[4], () => "Error in conv3dDerInput: depth of output (" + c2 + ") must match output depth for filter " + r2.shape[4] + ".");
  var l2 = Je(o2, r2.shape, e2, 1, i2), h2 = St.runKernelFunc((t3) => t3.conv3dDerInput(a2, r2, l2), { dy5D: a2 });
  return s2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
}
var sc = er({ conv1d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === i2 && (i2 = "NWC"), void 0 === o2 && (o2 = 1);
  var s2 = qn(t2, "x", "conv1d"), u2 = qn(n2, "filter", "conv1d"), c2 = s2, l2 = false;
  2 === s2.rank && (l2 = true, c2 = s2.as3D(1, s2.shape[0], s2.shape[1])), g(3 === c2.rank, () => "Error in conv1d: input must be rank 3, but got rank " + c2.rank + "."), g(3 === u2.rank, () => "Error in conv1d: filter must be rank 3, but got rank " + u2.rank + "."), null != a2 && g(R(e2), () => "Error in conv1d: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + e2 + "."), g(c2.shape[2] === u2.shape[1], () => "Error in conv1d: depth of input (" + c2.shape[2] + ") must match input depth for filter " + u2.shape[1] + "."), g(ii(r2, o2), () => "Error in conv1D: Either stride or dilation must be 1. Got stride " + r2 + " and dilation '" + o2 + "'"), g("NWC" === i2, () => "Error in conv1d: got dataFormat of " + i2 + " but only NWC is currently supported.");
  var h2 = u2.as4D(1, u2.shape[0], u2.shape[1], u2.shape[2]), f2 = c2.as4D(c2.shape[0], 1, c2.shape[1], c2.shape[2]), d2 = uc(f2, h2, [1, r2], e2, "NHWC", [1, o2], a2);
  return l2 ? d2.as2D(d2.shape[2], d2.shape[3]) : d2.as3D(d2.shape[0], d2.shape[2], d2.shape[3]);
} });
var uc = er({ conv2d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === i2 && (i2 = "NHWC"), void 0 === o2 && (o2 = [1, 1]);
  var s2 = qn(t2, "x", "conv2d"), u2 = qn(n2, "filter", "conv2d"), c2 = s2, l2 = false;
  3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), g(4 === c2.rank, () => "Error in conv2d: input must be rank 4, but got rank " + c2.rank + "."), g(4 === u2.rank, () => "Error in conv2d: filter must be rank 4, but got rank " + u2.rank + "."), null != a2 && g(R(e2), () => "Error in conv2d: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + e2 + ".");
  var h2 = "NHWC" === i2 ? c2.shape[3] : c2.shape[1];
  g(h2 === u2.shape[2], () => "Error in conv2d: depth of input (" + h2 + ") must match input depth for filter " + u2.shape[2] + "."), g(ii(r2, o2), () => "Error in conv2D: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + o2 + "'");
  var f2 = oi(i2), d2 = Ye(c2.shape, u2.shape, r2, o2, e2, a2, false, f2), v2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.conv2d(c2, u2, d2);
    return n3([u2, c2]), r3;
  }, { x: c2, filter: u2 }, (t3, n3) => {
    var a3 = n3[0], s3 = n3[1];
    return g(ei(o2), () => "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + o2 + "'"), { x() {
      return hc(s3.shape, t3, a3, r2, e2, i2);
    }, filter() {
      return lc(s3, t3, a3.shape, r2, e2, i2);
    } };
  }, "Conv2D", d2, [u2, c2]);
  return l2 ? v2.as3D(v2.shape[1], v2.shape[2], v2.shape[3]) : v2;
} });
var cc = er({ conv3d_(t2, n2, r2, e2, i2, o2) {
  void 0 === i2 && (i2 = "NDHWC"), void 0 === o2 && (o2 = [1, 1, 1]);
  var a2, s2 = qn(t2, "x", "conv3d"), u2 = qn(n2, "filter", "conv3d"), c2 = s2, l2 = false;
  4 === s2.rank && (l2 = true, c2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), g(5 === c2.rank, () => "Error in conv3d: input must be rank 5, but got rank " + c2.rank + "."), g(5 === u2.rank, () => "Error in conv3d: filter must be rank 5, but got rank " + u2.rank + "."), g(c2.shape[4] === u2.shape[3], () => "Error in conv3d: depth of input (" + c2.shape[4] + ") must match input depth for filter " + u2.shape[3] + "."), g((a2 = o2, oc(r2) || oc(a2)), () => "Error in conv3D: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + o2 + "'"), g("NDHWC" === i2, () => "Error in conv3d: got dataFormat of " + i2 + " but only NDHWC is currently supported.");
  var h2 = Je(c2.shape, u2.shape, r2, o2, e2), f2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.conv3d(c2, u2, h2);
    return n3([c2, u2]), r3;
  }, { x: c2, $filter: u2 }, (t3, n3) => {
    g(oc(o2), () => "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + o2 + "'");
    var i3 = n3[0], a3 = n3[1];
    return { x() {
      return ac(i3.shape, t3, a3, r2, e2);
    }, $filter() {
      return ((t4, n4, r3, e3, i4) => {
        var o3 = t4;
        4 === t4.rank && (o3 = t4.as5D(1, t4.shape[0], t4.shape[1], t4.shape[2], t4.shape[3]));
        var a4 = n4;
        4 === a4.rank && (a4 = n4.as5D(1, n4.shape[0], n4.shape[1], n4.shape[2], n4.shape[3])), g(5 === o3.rank, () => "Error in conv3dDerFilter: input must be rank 5, but got shape " + o3.shape + "."), g(5 === a4.rank, () => "Error in conv3dDerFilter: dy must be rank 5, but got shape " + a4.shape + "."), g(5 === r3.length, () => "Error in conv3dDerFilter: filterShape must be length 5, but got " + r3 + "."), g(o3.shape[4] === r3[3], () => "Error in conv3dDerFilter: depth of input " + o3.shape[4] + ") must match input depth in filter (" + r3[3] + "."), g(a4.shape[4] === r3[4], () => "Error in conv3dDerFilter: depth of dy (" + a4.shape[4] + ") must match output depth for filter (" + r3[4] + ").");
        var s3 = Je(o3.shape, r3, e3, 1, i4);
        return St.runKernelFunc((t5) => t5.conv3dDerFilter(o3, a4, s3), { x5D: o3, dy5D: a4 });
      })(i3, t3, a3.shape, r2, e2);
    } };
  });
  return l2 ? f2.as4D(f2.shape[1], f2.shape[2], f2.shape[3], f2.shape[4]) : f2;
} });
var lc = er({ conv2dDerFilter_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = "NHWC");
  var s2 = t2;
  3 === t2.rank && (s2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
  var u2 = n2;
  3 === u2.rank && (u2 = n2.as4D(1, n2.shape[0], n2.shape[1], n2.shape[2])), g(4 === s2.rank, () => "Error in conv2dDerFilter: input must be rank 4, but got shape " + s2.shape + "."), g(4 === u2.rank, () => "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u2.shape + "."), g(4 === r2.length, () => "Error in conv2dDerFilter: filterShape must be length 4, but got " + r2 + ".");
  var c2 = "NHWC" === o2 ? s2.shape[3] : s2.shape[1], l2 = "NHWC" === o2 ? u2.shape[3] : u2.shape[1];
  g(c2 === r2[2], () => "Error in conv2dDerFilter: depth of input " + c2 + ") must match input depth in filter (" + r2[2] + "."), g(l2 === r2[3], () => "Error in conv2dDerFilter: depth of dy (" + l2 + ") must match output depth for filter (" + r2[3] + ")."), null != a2 && g(R(i2), () => "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + i2 + ".");
  var h2 = oi(o2), f2 = Ye(s2.shape, r2, e2, 1, i2, a2, false, h2);
  return St.runKernelFunc((t3) => t3.conv2dDerFilter(s2, u2, f2), { x4D: s2, dy4D: u2 });
} });
var hc = er({ conv2dDerInput_: ic });
var fc = er({ depthwiseConv2d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = [1, 1]);
  var s2 = qn(t2, "x", "depthwiseConv2d"), u2 = qn(n2, "filter", "depthwiseConv2d"), c2 = s2, l2 = false;
  3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), g(4 === c2.rank, () => "Error in depthwiseConv2d: input must be rank 4, but got rank " + c2.rank + "."), g(4 === u2.rank, () => "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u2.rank + "."), g(c2.shape[3] === u2.shape[2], () => "Error in depthwiseConv2d: number of input channels (" + c2.shape[3] + ") must match the inChannels dimension in filter " + u2.shape[2] + "."), null == o2 && (o2 = [1, 1]), g(ii(r2, o2), () => "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + o2 + "'"), null != a2 && g(R(e2), () => "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + e2 + ".");
  var h2 = Ye(c2.shape, u2.shape, r2, o2, e2, a2, true), f2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.depthwiseConv2D(c2, u2, h2);
    return n3([c2, u2]), r3;
  }, { x: c2, filter: u2 }, (t3, n3) => {
    g(ei(o2), () => "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + o2 + "'");
    var r3 = n3[0], e3 = n3[1];
    return { x() {
      return dc(r3.shape, t3, e3, h2);
    }, filter() {
      return vc(r3, t3, e3.shape, h2);
    } };
  }, "DepthwiseConv2dNative", h2, [c2, u2]);
  return l2 ? f2.as3D(f2.shape[1], f2.shape[2], f2.shape[3]) : f2;
} });
var dc = er({ depthwiseConv2dDerInput_(t2, n2, r2, e2) {
  var i2 = n2, o2 = false;
  3 === n2.rank && (o2 = true, i2 = n2.as4D(1, n2.shape[0], n2.shape[1], n2.shape[2]));
  var a2 = St.runKernelFunc((t3) => t3.depthwiseConv2DDerInput(i2, r2, e2), { dy4D: i2 });
  return o2 ? a2.as3D(a2.shape[1], a2.shape[2], a2.shape[3]) : a2;
} });
var vc = er({ depthwiseConv2dDerFilter_(t2, n2, r2, e2) {
  var i2 = t2;
  3 === t2.rank && (i2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
  var o2 = n2;
  return 3 === o2.rank && (o2 = n2.as4D(1, n2.shape[0], n2.shape[1], n2.shape[2])), St.runKernelFunc((t3) => t3.depthwiseConv2DDerFilter(i2, o2, e2), { x4D: i2, dy4D: o2 });
} });
var pc = er({ separableConv2d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = [1, 1]), void 0 === a2 && (a2 = "NHWC");
  var s2 = qn(t2, "x", "separableConv2d"), u2 = qn(n2, "depthwiseFilter", "separableConv2d"), c2 = qn(r2, "pointwiseFilter", "separableConv2d"), l2 = s2, h2 = false;
  if (3 === s2.rank && (h2 = true, l2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), "NCHW" === a2) throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
  g(4 === l2.rank, () => "Error in separableConv2d: input must be rank 4, but got rank " + l2.rank + "."), g(4 === u2.rank, () => "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u2.rank + "."), g(4 === c2.rank, () => "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u2.rank + "."), g(1 === c2.shape[0], () => "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c2.shape[0] + "."), g(1 === c2.shape[1], () => "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c2.shape[1] + ".");
  var f2 = u2.shape[2], d2 = u2.shape[3];
  g(c2.shape[2] === f2 * d2, () => "Error in separableConv2d: the third dimension of pointwise filter must be " + f2 * d2 + ", but got " + c2.shape[2] + ".");
  var v2 = fc(l2, u2, e2, i2, a2, o2), p2 = uc(v2, c2, 1, "valid", a2);
  return h2 ? p2.as3D(p2.shape[1], p2.shape[2], p2.shape[3]) : p2;
} });
var mc = er({ conv2dTranspose_(t2, n2, r2, e2, i2, o2) {
  return ic(r2, qn(t2, "x", "conv2dTranspose"), qn(n2, "filter", "conv2dTranspose"), e2, i2, "NHWC", o2);
} });
var xc = er({ conv3dTranspose_(t2, n2, r2, e2, i2) {
  return ac(r2, qn(t2, "x", "conv3dTranspose"), qn(n2, "filter", "conv3dTranspose"), e2, i2);
} });
var bc = er({ matMul_(t2, n2, r2, e2) {
  var i2;
  void 0 === r2 && (r2 = false), void 0 === e2 && (e2 = false);
  var o2 = qn(t2, "a", "matMul"), a2 = qn(n2, "b", "matMul");
  i2 = Rt(o2, a2), o2 = i2[0], a2 = i2[1];
  var s2 = r2 ? o2.shape[o2.rank - 2] : o2.shape[o2.rank - 1], u2 = e2 ? a2.shape[a2.rank - 1] : a2.shape[a2.rank - 2], c2 = r2 ? o2.shape[o2.rank - 1] : o2.shape[o2.rank - 2], l2 = e2 ? a2.shape[a2.rank - 2] : a2.shape[a2.rank - 1], h2 = o2.shape.slice(0, -2), f2 = a2.shape.slice(0, -2), d2 = _(h2), v2 = _(f2);
  g(o2.rank >= 2 && a2.rank >= 2 && o2.rank === a2.rank, () => "Error in matMul: inputs must have the same rank of at least 2, got ranks " + o2.rank + " and " + a2.rank + "."), g(E(h2, f2), () => "Error in matMul: outer dimensions (" + h2 + ") and (" + f2 + ") of Tensors with shapes " + o2.shape + " and " + a2.shape + " must match."), g(s2 === u2, () => "Error in matMul: inner shapes (" + s2 + ") and (" + u2 + ") of Tensors with shapes " + o2.shape + " and " + a2.shape + " and transposeA=" + r2 + " and transposeB=" + e2 + " must match.");
  var p2 = o2.shape.slice(0, -2).concat([c2, l2]), m2 = r2 ? o2.as3D(d2, s2, c2) : o2.as3D(d2, c2, s2), x2 = e2 ? a2.as3D(v2, l2, u2) : a2.as3D(v2, u2, l2);
  return St.runKernelFunc((t3, n3) => {
    var i3 = t3.batchMatMul(m2, x2, r2, e2);
    return n3([m2, x2]), i3;
  }, { a: m2, b: x2 }, (t3, n3) => {
    var i3 = n3[0], o3 = n3[1];
    return r2 || e2 ? !r2 && e2 ? { a() {
      return t3.matMul(o3, false, false);
    }, b() {
      return t3.matMul(i3, true, false);
    } } : r2 && !e2 ? { a() {
      return o3.matMul(t3, false, true);
    }, b() {
      return i3.matMul(t3, false, false);
    } } : { a() {
      return o3.matMul(t3, true, true);
    }, b() {
      return t3.matMul(i3, true, true);
    } } : { a() {
      return t3.matMul(o3, false, true);
    }, b() {
      return i3.matMul(t3, true, false);
    } };
  }, "BatchMatMul", { transposeA: r2, transposeB: e2 }).reshape(p2);
} });
var gc = er({ dot_(t2, n2) {
  var r2 = qn(t2, "t1", "dot"), e2 = qn(n2, "t2", "dot");
  g(!(1 !== r2.rank && 2 !== r2.rank || 1 !== e2.rank && 2 !== e2.rank), () => "Error in dot: inputs must all be rank 1 or 2, but got ranks " + r2.rank + " and " + e2.rank + ".");
  var i2 = 1 === r2.rank ? r2.size : r2.shape[1], o2 = 1 === e2.rank ? e2.size : e2.shape[0];
  return g(i2 === o2, () => "Error in dot: inner dimensions of inputs must match, but got " + i2 + " and " + o2 + "."), 1 === r2.rank && 1 === e2.rank ? r2.as2D(1, -1).matMul(e2.as2D(-1, 1)).asScalar() : 1 === r2.rank && 2 === e2.rank ? r2.as2D(1, -1).matMul(e2.as2D(e2.shape[0], e2.shape[1])).as1D() : 2 === r2.rank && 1 === e2.rank ? r2.matMul(e2.as2D(-1, 1)).as1D() : r2.matMul(e2.as2D(e2.shape[0], e2.shape[1]));
} });
var wc = er({ outerProduct_(t2, n2) {
  var r2 = qn(t2, "v1", "outerProduct"), e2 = qn(n2, "v2", "outerProduct");
  return g(1 === r2.rank && 1 === e2.rank, () => "Error in outerProduct: inputs must be rank 1, but got ranks " + r2.rank + " and " + e2.rank + "."), r2.as2D(-1, 1).matMul(e2.as2D(1, -1));
} });
var yc = er({ reverse_(t2, n2) {
  var r2 = qn(t2, "x", "reverse");
  if (0 === r2.rank) return r2.clone();
  var e2 = T(n2, r2.shape);
  return St.runKernelFunc((t3) => t3.reverse(r2, e2), { $x: r2 }, (t3) => ({ $x() {
    return t3.reverse(e2);
  } })).reshapeAs(r2);
} });
var Cc = er({ reverse1d_(t2) {
  var n2 = qn(t2, "x", "reverse");
  return g(1 === n2.rank, () => "Error in reverse1D: x must be rank 1 but got rank " + n2.rank + "."), yc(n2, 0);
} });
var _c = er({ reverse2d_(t2, n2) {
  var r2 = qn(t2, "x", "reverse");
  return g(2 === r2.rank, () => "Error in reverse2D: x must be rank 2 but got rank " + r2.rank + "."), yc(r2, n2);
} });
var Ec = er({ reverse3d_(t2, n2) {
  var r2 = qn(t2, "x", "reverse");
  return g(3 === r2.rank, () => "Error in reverse3D: x must be rank 3 but got rank " + r2.rank + "."), yc(r2, n2);
} });
var Rc = er({ reverse4d_(t2, n2) {
  var r2 = qn(t2, "x", "reverse");
  return g(4 === r2.rank, () => "Error in reverse4D: x must be rank 4 but got rank " + r2.rank + "."), yc(r2, n2);
} });
function Ac(t2, n2, r2, e2, i2, o2) {
  var a2 = qn(t2, "x", "maxPool"), s2 = a2, u2 = false;
  3 === a2.rank && (u2 = true, s2 = a2.as4D(1, a2.shape[0], a2.shape[1], a2.shape[2])), g(4 === s2.rank, () => "Error in maxPool: input must be rank 4 but got rank " + s2.rank + "."), g(ii(r2, e2), () => "Error in maxPool: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + e2 + "'"), null != o2 && g(R(i2), () => "Error in maxPool: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + i2 + ".");
  var c2 = $e(s2.shape, n2, r2, e2, i2, o2);
  if (1 === c2.filterWidth && 1 === c2.filterHeight && E(c2.inShape, c2.outShape)) return a2.clone();
  var l2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.maxPool(s2, c2);
    return n3([s2, r3]), r3;
  }, { x: s2 }, (t3, o3) => {
    var a3 = o3[0], s3 = o3[1];
    return { x() {
      return ((t4, n3, r3, e3, i3, o4, a4) => {
        var s4 = qn(t4, "dy", "maxPoolBackprop"), u3 = qn(n3, "input", "maxPoolBackprop"), c3 = qn(r3, "output", "maxPoolBackprop");
        g(u3.rank === s4.rank, () => "Rank of input (" + u3.rank + ") does not match rank of dy (" + s4.rank + ")"), g(ii(i3, o4), () => "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + i3 + " and dilations '" + o4 + "'"), g(4 === s4.rank, () => "Error in maxPoolBackprop: dy must be rank 4 but got rank " + s4.rank + "."), g(4 === u3.rank, () => "Error in maxPoolBackprop: input must be rank 4 but got rank " + u3.rank + ".");
        var l3 = $e(u3.shape, e3, i3, o4, a4, void 0);
        return St.runKernelFunc((t5) => t5.maxPoolBackprop(s4, u3, c3, l3), { $dy: s4, $input: u3 });
      })(t3, a3, s3, n2, r2, e2, i2);
    } };
  }, "MaxPool", c2, [s2]);
  return u2 ? l2.as3D(l2.shape[1], l2.shape[2], l2.shape[3]) : l2;
}
function Nc(t2, n2, r2, e2, i2, o2) {
  var a2 = qn(t2, "x", "avgPool", "float32");
  g(ii(r2, e2), () => "Error in avgPool: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + e2 + "'");
  var s2 = a2, u2 = false;
  3 === a2.rank && (u2 = true, s2 = a2.as4D(1, a2.shape[0], a2.shape[1], a2.shape[2])), g(4 === s2.rank, () => "Error in avgPool: x must be rank 4 but got rank " + s2.rank + "."), null != o2 && g(R(i2), () => "Error in avgPool: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + i2 + ".");
  var c2 = $e(s2.shape, n2, r2, e2, i2, o2);
  if (1 === c2.filterWidth && 1 === c2.filterHeight && E(c2.inShape, c2.outShape)) return a2.clone();
  var l2 = St.runKernelFunc((t3) => t3.avgPool(s2, c2), { x: s2 }, (t3) => ({ x() {
    return ((t4, n3, r3, e3, i3, o3) => {
      var a3 = qn(t4, "dy", "avgPoolBackprop"), s3 = qn(n3, "input", "avgPoolBackprop");
      g(s3.rank === a3.rank, () => "Rank of input (" + s3.rank + ") does not match rank of dy (" + a3.rank + ")"), g(ii(e3, i3), () => "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + e3 + " and dilations '" + i3 + "'");
      var u3 = s3, c3 = a3, l3 = false;
      3 === s3.rank && (l3 = true, u3 = s3.as4D(1, s3.shape[0], s3.shape[1], s3.shape[2]), c3 = a3.as4D(1, a3.shape[0], a3.shape[1], a3.shape[2])), g(4 === c3.rank, () => "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c3.rank + "."), g(4 === u3.rank, () => "Error in avgPoolBackprop: input must be rank 4 but got rank " + u3.rank + ".");
      var h2 = $e(u3.shape, r3, e3, i3, o3), f2 = St.runKernelFunc((t5) => t5.avgPoolBackprop(c3, u3, h2), { dy4D: c3, input4D: u3 });
      return l3 ? f2.as3D(f2.shape[1], f2.shape[2], f2.shape[3]) : f2;
    })(t3, s2, n2, r2, e2, i2);
  } }), "AvgPool", c2);
  return l2 = l2.cast(a2.dtype), u2 ? l2.as3D(l2.shape[1], l2.shape[2], l2.shape[3]) : l2;
}
var Oc = er({ maxPool_(t2, n2, r2, e2, i2) {
  return Ac(t2, n2, r2, 1, e2, i2);
} });
var Mc = er({ avgPool_(t2, n2, r2, e2, i2) {
  return Nc(t2, n2, r2, 1, e2, i2);
} });
var Ic = er({ pool_(t2, n2, r2, e2, i2, o2) {
  null == i2 && (i2 = [1, 1]), null == o2 && (o2 = 1), 0 === e2 && (e2 = "valid");
  var a2 = qn(t2, "x", "maxPool"), s2 = a2, u2 = false;
  3 === a2.rank && (u2 = true, s2 = a2.as4D(1, a2.shape[0], a2.shape[1], a2.shape[2])), g(ii(o2, i2), () => "Error in pool: Either strides or dilations must be 1. Got strides " + o2 + " and dilations '" + i2 + "'");
  var c2, l2, h2, f2, d2, v2 = $e(s2.shape, n2, o2, i2, e2), p2 = [v2.dilationHeight, v2.dilationWidth];
  c2 = "same" === e2 ? (l2 = p2, h2 = [v2.filterHeight, v2.filterWidth].map((t3, n3) => t3 + (t3 - 1) * (l2[n3] - 1)).map((t3) => t3 - 1), f2 = h2.map((t3) => Math.floor(t3 / 2)), d2 = h2.map((t3, n3) => t3 - f2[n3]), h2.map((t3, n3) => [f2[n3], d2[n3]])) : [[0, 0], [0, 0]];
  var m2 = 1 === p2[0] && 1 === p2[1], x2 = ((t3, n3, r3) => {
    var e3 = r3.map((t4) => t4[0]), i3 = r3.map((t4) => t4[1]), o3 = t3.concat(e3, i3), a3 = n3.map((t4, n4) => (t4 - o3[n4] % t4) % t4), s3 = i3.map((t4, n4) => t4 + a3[n4]);
    return [n3.map((t4, n4) => [e3[n4], s3[n4]]), n3.map((t4, n4) => [0, a3[n4]])];
  })([v2.inHeight, v2.inWidth], p2, c2), b2 = x2[1], w2 = m2 ? e2 : "valid", y2 = m2 ? s2 : le(s2, p2, x2[0]), C2 = ("avg" === r2 ? () => Nc(y2, n2, o2, 1, w2) : () => Ac(y2, n2, o2, 1, w2))(), _2 = m2 ? C2 : jr(C2, p2, b2);
  return u2 ? _2.as3D(_2.shape[1], _2.shape[2], _2.shape[3]) : _2;
} });
var Tc = er({ maxPool3d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = "NDHWC");
  var s2 = qn(t2, "x", "maxPool3d"), u2 = s2, c2 = false;
  4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == a2 && (a2 = [1, 1, 1]), g(5 === u2.rank, () => "Error in maxPool3d: x must be rank 5 but got rank " + u2.rank + "."), g("NDHWC" === o2, () => "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + o2), g(ii(r2, a2), () => "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + a2 + "'"), null != i2 && g(R(e2), () => "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + e2 + ".");
  var l2 = Ke(u2.shape, n2, r2, a2, e2, i2, o2), h2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.maxPool3d(u2, l2);
    return n3([u2, r3]), r3;
  }, { x: u2 }, (t3, o3) => {
    var s3 = o3[0], u3 = o3[1];
    return { x() {
      return ((t4, n3, r3, e3, i3, o4, a3, s4) => {
        var u4 = qn(t4, "dy", "maxPool3dBackprop"), c3 = qn(n3, "input", "maxPool3dBackprop"), l3 = qn(r3, "output", "maxPool3dBackprop"), h3 = u4, f2 = c3, d2 = l3, v2 = false;
        4 === c3.rank && (v2 = true, h3 = u4.as5D(1, u4.shape[0], u4.shape[1], u4.shape[2], u4.shape[3]), f2 = c3.as5D(1, c3.shape[0], c3.shape[1], c3.shape[2], c3.shape[3]), d2 = l3.as5D(1, l3.shape[0], l3.shape[1], l3.shape[2], l3.shape[3])), g(5 === h3.rank, () => "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + h3.rank + "."), g(5 === f2.rank, () => "Error in maxPool3dBackprop: input must be rank 5 but got rank " + f2.rank + "."), g(5 === d2.rank, () => "Error in maxPool3dBackprop: output must be rank 5 but got rank " + d2.rank + "."), null == o4 && (o4 = [1, 1, 1]), g(ii(i3, o4), () => "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + i3 + " and dilations '" + o4 + "'"), null != s4 && g(R(a3), () => "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + s4 + " but got pad " + a3 + ".");
        var p2 = Ke(f2.shape, e3, i3, o4, a3, s4), m2 = St.runKernelFunc((t5) => t5.maxPool3dBackprop(h3, f2, d2, p2), { dy5D: h3, input5D: f2 });
        return v2 ? m2.as4D(m2.shape[1], m2.shape[2], m2.shape[3], m2.shape[4]) : m2;
      })(t3, s3, u3, n2, r2, a2, e2, i2);
    } };
  });
  return c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
} });
var Sc = er({ avgPool3d_(t2, n2, r2, e2, i2, o2, a2) {
  void 0 === o2 && (o2 = "NDHWC");
  var s2 = qn(t2, "x", "avgPool3d", "float32"), u2 = s2, c2 = false;
  4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == a2 && (a2 = [1, 1, 1]), g(5 === u2.rank, () => "Error in avgPool3d: x must be rank 5 but got rank " + u2.rank + "."), g("NDHWC" === o2, () => "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + o2), g(ii(r2, a2), () => "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + a2 + "'"), null != i2 && g(R(e2), () => "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + e2 + ".");
  var l2 = Ke(u2.shape, n2, r2, a2, e2, i2, o2), h2 = St.runKernelFunc((t3) => t3.avgPool3d(u2, l2), { x: u2 }, (t3) => ({ x() {
    return ((t4, n3, r3, e3, i3, o3, a3) => {
      var s3 = qn(t4, "dy", "avgPool3dBackprop"), u3 = qn(n3, "input", "avgPool3dBackprop"), c3 = s3, l3 = u3, h3 = false;
      4 === u3.rank && (h3 = true, c3 = s3.as5D(1, s3.shape[0], s3.shape[1], s3.shape[2], s3.shape[3]), l3 = u3.as5D(1, u3.shape[0], u3.shape[1], u3.shape[2], u3.shape[3])), g(5 === c3.rank, () => "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + c3.rank + "."), g(5 === l3.rank, () => "Error in avgPool3dBackprop: input must be rank 5 but got rank " + l3.rank + "."), null == i3 && (i3 = [1, 1, 1]), g(ii(e3, i3), () => "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + e3 + " and dilations '" + i3 + "'"), null != a3 && g(R(o3), () => "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + a3 + " but got pad " + o3 + ".");
      var f2 = Ke(l3.shape, r3, e3, i3, o3, a3), d2 = St.runKernelFunc((t5) => t5.avgPool3dBackprop(c3, l3, f2), { dy5D: c3, input5D: l3 });
      return h3 ? d2.as4D(d2.shape[1], d2.shape[2], d2.shape[3], d2.shape[4]) : d2;
    })(t3, u2, n2, r2, a2, e2, i2);
  } }));
  return h2 = h2.cast(u2.dtype), c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
} });
var Dc = er({ slice_(t2, n2, r2) {
  var e2, i2, o2 = qn(t2, "x", "slice");
  if (0 === o2.rank) throw Error("Slicing scalar is not possible");
  (e2 = "number" == typeof n2 ? [n2].concat(Array(o2.rank - 1).fill(0)) : o2.rank > n2.length ? n2.concat(Array(o2.rank - n2.length).fill(0)) : n2.slice()).forEach((t3) => {
    g(-1 !== t3, () => "slice() does not support negative begin indexing.");
  }), i2 = (i2 = null == r2 ? Array(o2.rank).fill(-1) : "number" == typeof r2 ? [r2].concat(Array(o2.rank - 1).fill(-1)) : o2.rank > r2.length ? r2.concat(Array(o2.rank - r2.length).fill(-1)) : r2).map((t3, n3) => 0 > t3 ? (g(-1 === t3, () => "Negative size values should be exactly -1 but got " + t3 + " for the slice() size at index " + n3 + "."), o2.shape[n3] - e2[n3]) : t3), Me(o2, e2, i2);
  var a2 = o2.shape;
  return St.runKernelFunc((t3) => t3.slice(o2, e2, i2), { x: o2 }, (t3) => {
    for (var n3 = [], r3 = 0; t3.rank > r3; r3++) n3.push([e2[r3], a2[r3] - e2[r3] - i2[r3]]);
    return { x() {
      return t3.pad(n3);
    } };
  }, "Slice", { begin: e2, size: i2 });
} });
var kc = er({ slice1d_(t2, n2, r2) {
  var e2 = qn(t2, "x", "slice1d");
  return g(1 === e2.rank, () => "slice1d expects a rank-1 tensor, but got a rank-" + e2.rank + " tensor"), Dc(e2, [n2], [r2]);
} });
var Pc = er({ slice2d_(t2, n2, r2) {
  var e2 = qn(t2, "x", "slice2d");
  return g(2 === e2.rank, () => "slice2d expects a rank-2 tensor, but got a rank-" + e2.rank + " tensor"), Dc(e2, n2, r2);
} });
var Fc = er({ slice3d_(t2, n2, r2) {
  var e2 = qn(t2, "x", "slice3d");
  return g(3 === e2.rank, () => "slice3d expects a rank-3 tensor, but got a rank-" + e2.rank + " tensor"), Dc(e2, n2, r2);
} });
var Lc = er({ slice4d_(t2, n2, r2) {
  var e2 = qn(t2, "x", "slice4d");
  return g(4 === e2.rank, () => "slice4d expects a rank-4 tensor, but got a rank-" + e2.rank + " tensor"), Dc(e2, n2, r2);
} });
function Bc(t2, n2, r2, e2, i2) {
  return r2.rank > n2.rank && (n2 = n2.reshape(Yn(n2.shape, e2))), r2.rank > t2.rank && (t2 = t2.reshape(Yn(t2.shape, e2))), { x() {
    var e3 = t2.mul(r2.equal(n2).cast(t2.dtype));
    return null == i2 ? e3 : e3.transpose(i2);
  } };
}
var Vc = er({ all_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "all", "bool"), i2 = T(n2, e2.shape), o2 = i2, a2 = Zn(o2, e2.rank);
  null != a2 && (e2 = e2.transpose(a2), o2 = tr(o2.length, e2.rank));
  var s2 = St.runKernelFunc((t3) => t3.all(e2, o2), { $x: e2 });
  if (r2) {
    var u2 = Yn(s2.shape, i2);
    return s2.reshape(u2);
  }
  return s2;
} });
var Wc = er({ any_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "any", "bool"), i2 = T(n2, e2.shape), o2 = i2, a2 = Zn(o2, e2.rank);
  null != a2 && (e2 = e2.transpose(a2), o2 = tr(o2.length, e2.rank));
  var s2 = St.runKernelFunc((t3) => t3.any(e2, o2), { $x: e2 });
  if (r2) {
    var u2 = Yn(s2.shape, i2);
    return s2.reshape(u2);
  }
  return s2;
} });
var zc = er({ argMax_(t2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = qn(t2, "x", "argMax");
  null == n2 && (n2 = 0);
  var e2 = T(n2, r2.shape), i2 = Zn(e2, r2.rank);
  return null != i2 && (r2 = r2.transpose(i2), e2 = tr(e2.length, r2.rank)), St.runKernelFunc((t3, n3) => {
    var i3 = t3.argMax(r2, e2[0]);
    return n3([r2]), i3;
  }, { x: r2 }, (t3, n3) => {
    var r3 = n3[0];
    return { x() {
      return _r(r3);
    } };
  }, "ArgMax", { axis: e2[0] }, [r2]);
} });
var Gc = er({ argMin_(t2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = qn(t2, "x", "argMin");
  null == n2 && (n2 = 0);
  var e2 = T(n2, r2.shape), i2 = Zn(e2, r2.rank);
  return null != i2 && (r2 = r2.transpose(i2), e2 = tr(e2.length, r2.rank)), St.runKernelFunc((t3, n3) => {
    var i3 = t3.argMin(r2, e2[0]);
    return n3([r2]), i3;
  }, { $x: r2 }, (t3, n3) => {
    var r3 = n3[0];
    return { $x() {
      return _r(r3);
    } };
  });
} });
var Uc = er({ logSumExp_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "logSumExp"), i2 = T(n2, e2.shape), o2 = e2.max(i2, true), a2 = e2.sub(o2).exp().sum(i2).log(), s2 = o2.reshape(a2.shape).add(a2);
  if (r2) {
    var u2 = Yn(s2.shape, i2);
    return s2.reshape(u2);
  }
  return s2;
} });
var jc = er({ max_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "max"), i2 = e2, o2 = T(n2, e2.shape), a2 = o2, s2 = Zn(a2, e2.rank);
  null != s2 && (e2 = e2.transpose(s2), a2 = tr(a2.length, e2.rank));
  var u2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.max(e2, a2);
    return n3([i2, r3]), r3;
  }, { x: e2 }, (t3, n3) => Bc(t3, n3[1], n3[0], o2, s2), "Max", { axes: a2 }, [e2], [true]);
  if (r2) {
    var c2 = Yn(u2.shape, o2);
    u2 = u2.reshape(c2);
  }
  return u2;
} });
var qc = er({ mean_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "mean"), i2 = T(n2, e2.shape), o2 = _(Kn(e2.shape, i2)[1]);
  return Be((t3) => {
    var e3 = cr(o2);
    return { value: (e3.dtype === t3.dtype ? t3 : t3.cast(e3.dtype)).div(e3).sum(n2, r2), gradFunc(n3) {
      var r3 = t3.shape.slice();
      return i2.forEach((t4) => {
        r3[t4] = 1;
      }), n3.reshape(r3).mul(xr(t3.shape, "float32")).div(o2);
    } };
  })(e2);
} });
var Hc = er({ min_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "min"), i2 = e2, o2 = T(n2, e2.shape), a2 = o2, s2 = Zn(a2, e2.rank);
  null != s2 && (e2 = e2.transpose(s2), a2 = tr(a2.length, e2.rank));
  var u2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.min(e2, a2);
    return n3([i2, r3]), r3;
  }, { x: e2 }, (t3, n3) => Bc(t3, n3[1], n3[0], o2, s2), "Min", { axes: a2 }, [e2], [true]);
  if (r2) {
    var c2 = Yn(u2.shape, o2);
    u2 = u2.reshape(c2);
  }
  return u2;
} });
var Xc = er({ moments_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = T(n2, (t2 = qn(t2, "x", "moments")).shape), i2 = t2.mean(e2, r2), o2 = i2.shape;
  r2 || (o2 = Yn(i2.shape, e2));
  var a2 = t2.toFloat().sub(i2.reshape(o2)).square();
  return { mean: i2, variance: a2.mean(e2, r2) };
} });
var $c = er({ sum_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "sum");
  "bool" === e2.dtype && (e2 = e2.toInt());
  var i2 = T(n2, e2.shape);
  return Be((t3) => {
    var n3 = Zn(i2, t3.rank), e3 = i2, o2 = t3;
    null != n3 && (o2 = t3.transpose(n3), e3 = tr(e3.length, t3.rank));
    var a2 = (n4) => {
      var r3 = t3.shape.slice();
      return i2.forEach((t4) => {
        r3[t4] = 1;
      }), n4.reshape(r3).mul(xr(t3.shape, "float32"));
    }, s2 = St.runKernelFunc((t4) => t4.sum(o2, e3), { x: o2 }, (t4) => ({ x() {
      return a2(t4);
    } }), "Sum", { axes: e3 });
    if (r2) {
      var u2 = Yn(s2.shape, i2);
      s2 = s2.reshape(u2);
    }
    return { value: s2, gradFunc: a2 };
  })(e2);
} });
var Kc = er({ prod_(t2, n2, r2) {
  void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "x", "prod");
  "bool" === e2.dtype && (e2 = e2.toInt());
  var i2 = T(n2, e2.shape), o2 = Zn(i2, e2.rank), a2 = i2, s2 = e2;
  null != o2 && (s2 = e2.transpose(o2), a2 = tr(a2.length, e2.rank));
  var u2 = St.runKernelFunc((t3) => t3.prod(s2, a2), { permutedX: s2 });
  if (r2) {
    var c2 = Yn(u2.shape, i2);
    u2 = u2.reshape(c2);
  }
  return u2;
} });
var Yc = er({ elu_(t2) {
  var n2 = qn(t2, "x", "elu");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.elu(n2);
    return r2([e2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      return St.runKernelFunc((n4) => n4.eluDer(t3, r2), { dy: t3, y: r2 });
    } };
  });
} });
var Jc = er({ leakyRelu_(t2, n2) {
  void 0 === n2 && (n2 = 0.2);
  var r2 = qn(t2, "x", "leakyRelu");
  return Ou(cr(n2).mul(r2), r2);
} });
var Zc = er({ prelu_(t2, n2) {
  var r2 = qn(t2, "x", "prelu"), e2 = qn(n2, "alpha", "prelu");
  return St.runKernelFunc((t3, n3) => {
    var i2 = t3.prelu(r2, e2);
    return n3([r2, e2]), i2;
  }, { x: r2, alpha: e2 }, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1], i2 = r3.greater(0);
    return { x() {
      return bu(i2, t3, t3.mul(e3));
    }, alpha() {
      var n4 = bu(i2, _r(t3), t3.mul(r3)), o2 = He(e3.shape, t3.shape);
      return o2.length > 0 && (n4 = n4.sum(o2)), n4.reshape(e3.shape);
    } };
  }, "Prelu");
} });
var Qc = er({ relu_(t2) {
  var n2 = qn(t2, "x", "relu");
  return "bool" === n2.dtype ? n2.toInt() : St.runKernelFunc((t3, r2) => {
    var e2 = t3.relu(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { x() {
      return t3.mulStrict(r2.step().toFloat());
    } };
  }, "Relu");
} });
var tl = er({ relu6_(t2) {
  var n2 = qn(t2, "x", "relu6");
  return "bool" === n2.dtype ? n2.toInt() : St.runKernelFunc((t3, r2) => {
    var e2 = t3.relu6(n2);
    return r2([n2]), e2;
  }, { x: n2 }, (t3, n3) => {
    var r2 = n3[0], e2 = r2.lessEqual(6).mul(r2.step());
    return { x() {
      return t3.mulStrict(e2.toFloat());
    } };
  }, "Relu6");
} });
var nl = er({ selu_(t2) {
  var n2 = qn(t2, "x", "selu");
  return St.runKernelFunc((t3, r2) => {
    var e2 = t3.selu(n2);
    return r2([n2]), e2;
  }, { $x: n2 }, (t3, n3) => {
    var r2 = n3[0];
    return { $x() {
      var n4 = r2.greater(cr(0)), e2 = cr(Wa), i2 = cr(za), o2 = t3.mul(i2), a2 = t3.mul(e2).mul(r2.toFloat().exp());
      return bu(n4, o2, a2);
    } };
  });
} });
var rl = er({ transpose_(t2, n2) {
  var r2 = qn(t2, "x", "transpose");
  return null == n2 && (n2 = r2.shape.map((t3, n3) => n3).reverse()), g(r2.rank === n2.length, () => "Error in transpose: rank of input " + r2.rank + " must match length of perm " + n2 + "."), n2.forEach((t3) => {
    g(t3 >= 0 && r2.rank > t3, () => "All entries in 'perm' must be between 0 and " + (r2.rank - 1) + " but got " + n2);
  }), r2.rank > 1 ? St.runKernelFunc((t3) => t3.transpose(r2, n2), { x: r2 }, (t3) => {
    var r3 = Qn(n2);
    return { x() {
      return t3.transpose(r3);
    } };
  }, "Transpose", { perm: n2 }) : r2.clone();
} });
var el = er({ localResponseNormalization_(t2, n2, r2, e2, i2) {
  void 0 === n2 && (n2 = 5), void 0 === r2 && (r2 = 1), void 0 === e2 && (e2 = 1), void 0 === i2 && (i2 = 0.5);
  var o2 = qn(t2, "x", "localResponseNormalization");
  g(4 === o2.rank || 3 === o2.rank, () => "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + o2.rank + "."), g(R(n2), () => "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + n2 + ".");
  var a2 = o2, s2 = false;
  3 === o2.rank && (s2 = true, a2 = o2.as4D(1, o2.shape[0], o2.shape[1], o2.shape[2]));
  var u2 = St.runKernelFunc((t3, o3) => {
    var s3 = t3.localResponseNormalization4D(a2, n2, r2, e2, i2);
    return o3([a2, s3]), s3;
  }, { x4D: a2 }, (t3, o3) => {
    var a3 = o3[0], s3 = o3[1];
    return { x4D() {
      return St.runKernelFunc((o4) => o4.LRNGrad(t3, a3, s3, n2, r2, e2, i2), {});
    } };
  });
  return s2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var il = er({ norm_(t2, n2, r2, e2) {
  void 0 === n2 && (n2 = "euclidean"), void 0 === r2 && (r2 = null), void 0 === e2 && (e2 = false);
  var i2 = (function t3(n3, r3, e3) {
    if (void 0 === e3 && (e3 = null), 0 === n3.rank) return n3.abs();
    if (1 !== n3.rank && null === e3) return t3(n3.reshape([-1]), r3, e3);
    if (1 === n3.rank || "number" == typeof e3 || Array.isArray(e3) && 1 === e3.length) {
      if (1 === r3) return n3.abs().sum(e3);
      if (r3 === 1 / 0) return n3.abs().max(e3);
      if (r3 === -1 / 0) return n3.abs().min(e3);
      if ("euclidean" === r3 || 2 === r3) return n3.abs().pow(cr(2, "int32")).sum(e3).sqrt();
      throw Error("Error in norm: invalid ord value: " + r3);
    }
    if (Array.isArray(e3) && 2 === e3.length) {
      if (1 === r3) return n3.abs().sum(e3[0]).max(e3[1] - 1);
      if (r3 === 1 / 0) return n3.abs().sum(e3[1]).max(e3[0]);
      if (r3 === -1 / 0) return n3.abs().sum(e3[1]).min(e3[0]);
      if ("fro" === r3 || "euclidean" === r3) return n3.square().sum(e3).sqrt();
      throw Error("Error in norm: invalid ord value: " + r3);
    }
    throw Error("Error in norm: invalid axis: " + e3);
  })(t2 = qn(t2, "x", "norm"), n2, r2), o2 = i2.shape;
  if (e2) {
    var a2 = T(r2, t2.shape);
    o2 = Yn(i2.shape, a2);
  }
  return i2.reshape(o2);
} });
var ol = er({ basicLSTMCell_(t2, n2, r2, e2, i2, o2) {
  var a2 = qn(t2, "forgetBias", "basicLSTMCell"), s2 = qn(n2, "lstmKernel", "basicLSTMCell"), u2 = qn(r2, "lstmBias", "basicLSTMCell"), c2 = qn(e2, "data", "basicLSTMCell"), l2 = qn(i2, "c", "basicLSTMCell"), h2 = qn(o2, "h", "basicLSTMCell"), f2 = c2.concat(h2, 1).matMul(s2).add(u2), d2 = f2.shape[1] / 4, v2 = [f2.shape[0], d2], p2 = f2.slice([0, 0], v2), m2 = f2.slice([0, d2], v2), x2 = f2.slice([0, 2 * d2], v2), b2 = f2.slice([0, 3 * d2], v2), g2 = p2.sigmoid().mulStrict(m2.tanh()).addStrict(l2.mulStrict(a2.add(x2).sigmoid())), w2 = g2.tanh().mulStrict(b2.sigmoid());
  return [g2, w2];
} });
var al = er({ multiRNNCell_(t2, n2, r2, e2) {
  for (var i2 = qn(n2, "data", "multiRNNCell"), o2 = Hn(r2, "c", "multiRNNCell"), a2 = Hn(e2, "h", "multiRNNCell"), s2 = i2, u2 = [], c2 = 0; t2.length > c2; c2++) {
    var l2 = t2[c2](s2, o2[c2], a2[c2]);
    u2.push(l2[0]), u2.push(l2[1]), s2 = l2[1];
  }
  var h2 = [], f2 = [];
  for (c2 = 0; u2.length > c2; c2 += 2) h2.push(u2[c2]), f2.push(u2[c2 + 1]);
  return [h2, f2];
} });
var sl = er({ movingAverage_(t2, n2, r2, e2, i2) {
  void 0 === i2 && (i2 = true);
  var o2 = qn(t2, "v", "movingAverage"), a2 = qn(n2, "x", "movingAverage"), s2 = qn(r2, "decay", "movingAverage");
  At(o2, a2), g(E(o2.shape, a2.shape), () => "Shape mismatch in v and x");
  var u2 = cr(1), c2 = u2.sub(s2), l2 = a2.sub(o2).mul(c2);
  if (i2) {
    g(null != e2, () => "When using zeroDebias: true, step is required.");
    var h2 = qn(e2, "step", "movingAverage");
    l2 = l2.div(u2.sub(Fu(s2, h2)));
  }
  return o2.add(l2);
} });
var ul = er({ stridedSlice_(t2, n2, r2, e2, i2, o2, a2, s2, u2) {
  if (void 0 === i2 && (i2 = 0), void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === s2 && (s2 = 0), void 0 === u2 && (u2 = 0), null == e2 && (e2 = Array(n2.length)), 0 !== a2) throw Error("ellipsis mask is not yet supported");
  var c2 = qn(t2, "x", "stridedSlice"), l2 = Ie(s2), h2 = c2.shape.slice();
  l2.forEach((t3) => {
    n2[t3] = 0, r2[t3] = 1, h2.splice(t3, 0, 1);
  }), c2 = c2.reshape(h2);
  for (var f2 = 0; c2.rank > f2; f2++) n2[f2] = Se(i2, n2, e2, c2.shape, f2), r2[f2] = De(o2, r2, e2, c2.shape, f2), e2[f2] = e2[f2] || 1;
  var d2 = Ie(u2);
  d2.forEach((t3) => {
    r2[t3] = n2[t3] + 1, e2[t3] = 1;
  });
  var v2 = Te(n2, r2, e2), p2 = v2.filter((t3, n3) => -1 === d2.indexOf(n3));
  return e2.every((t3) => 1 === t3) ? Dc(c2, n2, v2).reshape(p2) : St.runKernelFunc((t3) => t3.stridedSlice(c2, n2, r2, e2), { $x: c2 }).reshape(p2);
} });
var cl = er({ topk_(t2, n2, r2) {
  void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = true);
  var e2 = qn(t2, "x", "topk");
  if (0 === e2.rank) throw Error("topk() expects the input to be of rank 1 or higher");
  var i2 = e2.shape[e2.shape.length - 1];
  if (n2 > i2) throw Error("'k' passed to topk() must be <= the last dimension (" + i2 + ") but got " + n2);
  var o2 = St.runKernelFunc((t3) => t3.topk(e2, n2, r2), { $x: e2 });
  return { values: o2[0], indices: o2[1] };
} });
var ll = er({ scatterND_(t2, n2, r2) {
  var e2 = qn(t2, "indices", "scatterND", "int32"), i2 = qn(n2, "updates", "scatterND");
  return Ae(i2, e2, r2), St.runKernelFunc((t3) => t3.scatterND(e2, i2, r2), { indices: e2, updates: i2 }, null, "ScatterNd", { shape: r2 });
} });
var hl = er({ fft_(t2) {
  g("complex64" === t2.dtype, () => "The dtype for tf.spectral.fft() must be complex64 but got " + t2.dtype + ".");
  var n2 = t2.shape[t2.shape.length - 1], r2 = t2.as2D(t2.size / n2, n2);
  return St.runKernelFunc((t3) => t3.fft(r2), { input: t2 }).reshape(t2.shape);
} });
var fl = er({ ifft_(t2) {
  g("complex64" === t2.dtype, () => "The dtype for tf.spectral.ifft() must be complex64 but got " + t2.dtype + ".");
  var n2 = t2.shape[t2.shape.length - 1], r2 = t2.as2D(t2.size / n2, n2);
  return St.runKernelFunc((t3) => t3.ifft(r2), { input: t2 }).reshape(t2.shape);
} });
var dl = er({ rfft_(t2, n2) {
  g("float32" === t2.dtype, () => "The dtype for rfft() must be real value but got " + t2.dtype);
  var r2, e2 = t2.shape[t2.shape.length - 1], i2 = t2.size / e2;
  if (null != n2 && e2 > n2) {
    var o2 = t2.shape.map((t3) => 0), a2 = t2.shape.map((t3) => t3);
    a2[t2.shape.length - 1] = n2, r2 = t2.slice(o2, a2), e2 = n2;
  } else if (null != n2 && n2 > e2) {
    var s2 = t2.shape.map((t3) => t3);
    s2[t2.shape.length - 1] = n2 - e2, r2 = t2.concat(br(s2), t2.shape.length - 1), e2 = n2;
  } else r2 = t2;
  var u2 = r2.zerosLike(), c2 = ir(r2, u2).as2D(i2, e2), l2 = hl(c2), h2 = Math.floor(e2 / 2) + 1, f2 = or(l2), d2 = ar(l2), v2 = f2.split([h2, e2 - h2], f2.shape.length - 1), p2 = d2.split([h2, e2 - h2], d2.shape.length - 1), m2 = r2.shape.slice();
  return m2[r2.shape.length - 1] = h2, ir(v2[0], p2[0]).reshape(m2);
} });
var vl = er({ irfft_(t2) {
  var n2 = t2.shape[t2.shape.length - 1], r2 = t2.size / n2;
  if (2 >= n2) {
    var e2 = t2.as2D(r2, n2), i2 = fl(e2);
    return or(i2);
  }
  var o2 = [r2, 2 * (n2 - 1)], a2 = or(t2).as2D(r2, n2), s2 = ar(t2).as2D(r2, n2), u2 = a2.slice([0, 1], [r2, n2 - 2]).reverse(1), c2 = s2.slice([0, 1], [r2, n2 - 2]).reverse(1).mul(cr(-1)), l2 = a2.concat(u2, 1), h2 = s2.concat(c2, 1);
  return e2 = ir(l2, h2).as2D(o2[0], o2[1]), i2 = fl(e2), or(i2);
} });
var pl = Object.freeze({ fft: hl, ifft: fl, rfft: dl, irfft: vl });
var ml = er({ sparseToDense_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = 0);
  var i2 = qn(t2, "sparseIndices", "sparseToDense", "int32"), o2 = qn(n2, "sparseValues", "sparseToDense"), a2 = qn(e2, "defaultValue", "sparseToDense", o2.dtype);
  return ((t3, n3, r3, e3) => {
    if ("int32" !== t3.dtype) throw Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t3.dtype + ".");
    if (t3.rank > 2) throw Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t3.shape + ".");
    var i3 = t3.rank > 0 ? t3.shape[0] : 1, o3 = t3.rank > 1 ? t3.shape[1] : 1;
    if (r3.length !== o3) throw Error("outputShape has incorrect number of elements:, " + r3.length + ", should be: " + o3 + ".");
    if (0 !== n3.rank && (1 !== n3.rank || n3.size !== i3)) throw Error("sparseValues has incorrect shape " + n3.shape + ", should be [] or [" + i3 + "]");
    if (n3.dtype !== e3.dtype) throw Error("sparseValues.dtype must match defaultValues.dtype");
  })(i2, o2, r2, a2), St.runKernelFunc((t3) => t3.sparseToDense(i2, o2, r2, a2), { $sparseIndices: i2, $sparseValues: o2, $defaultValue: a2 });
} });
var xl = er({ gatherND_(t2, n2) {
  var r2 = qn(n2, "indices", "gatherND", "int32"), e2 = qn(t2, "x", "gatherND");
  return St.runKernelFunc((t3) => t3.gatherND(e2, r2), { x: e2, indices: r2 }, null, "GatherNd");
} });
var bl = er({ diag_(t2) {
  var n2 = qn(t2, "x", "diag").flatten(), r2 = t2.shape.concat(t2.shape);
  return St.runKernelFunc((t3) => t3.diag(n2), { $x: n2 }).reshape(r2);
} });
var gl = er({ dropout_(t2, n2, r2, e2) {
  var i2 = qn(t2, "x", "dropout");
  if (g("float32" === i2.dtype, () => "x has to be a floating point tensor since it's going to be scaled, but got a " + i2.dtype + " tensor instead."), g(n2 >= 0 && 1 > n2, () => "rate must be a float in the range [0, 1), but got " + n2 + "."), 0 === n2) return t2 instanceof vt ? i2.clone() : i2;
  var o2 = ((t3, n3) => {
    if (null == n3) return t3.shape.slice();
    if (E(t3.shape, n3)) return n3;
    if (t3.shape.length === n3.length) {
      for (var r3 = [], e3 = 0; t3.shape.length > e3; e3++) r3.push(null == n3[e3] && null != t3.shape[e3] ? t3.shape[e3] : n3[e3]);
      return r3;
    }
    return n3;
  })(i2, r2), a2 = 1 - n2, s2 = ue(o2, 0, 1, "float32", e2).add(a2).floor().div(a2);
  return i2.mul(s2);
} });
function wl(t2, n2, r2) {
  for (var e2 = 1 - t2 % 2, i2 = new Float32Array(t2), o2 = 0; t2 > o2; ++o2) i2[o2] = n2 - r2 * Math.cos(2 * Math.PI * o2 / (t2 + e2 - 1));
  return lr(i2, "float32");
}
var yl;
var Cl = er({ hannWindow_(t2) {
  return wl(t2, 0.5, 0.5);
} });
var _l = er({ hammingWindow_(t2) {
  return wl(t2, 0.54, 0.46);
} });
var El = er({ frame_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = 0);
  for (var o2 = 0, a2 = []; t2.size >= o2 + n2; ) a2.push(Dc(t2, o2, n2)), o2 += r2;
  if (e2) for (; t2.size > o2; ) {
    var s2 = o2 + n2 - t2.size, u2 = Er([Dc(t2, o2, n2 - s2), gr([s2], i2)]);
    a2.push(u2), o2 += r2;
  }
  return 0 === a2.length ? hr([], [0, n2]) : Er(a2).as2D(a2.length, n2);
} });
var Rl = er({ stft_(t2, n2, r2, e2, i2) {
  void 0 === i2 && (i2 = Cl), null == e2 && (e2 = Math.floor(Math.pow(2, Math.ceil(Math.log(n2) / Math.log(2)))));
  for (var o2 = El(t2, n2, r2), a2 = ku(o2, i2(n2)), s2 = [], u2 = 0; o2.shape[0] > u2; u2++) s2.push(dl(a2.slice([u2, 0], [1, n2]), e2));
  return Er(s2);
} });
var Al = Object.freeze({ hannWindow: Cl, hammingWindow: _l, frame: El, stft: Rl });
var Nl = function(t2, n2, i2) {
  return void 0 === i2 && (i2 = 1), r(this, 0, void 0, function() {
    var r2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return r2 = qn(t2, "predictions", "inTopK"), o2 = qn(n2, "targets", "inTopK"), g(r2.rank > 1, () => "inTopK() expects the predictions to be of rank 2 or higher, but got " + r2.rank), g(r2.rank - 1 === o2.rank, () => "predictions rank should be 1 larger than targets rank, but got predictions rank " + r2.rank + " and targets rank " + o2.rank), w(r2.shape.slice(0, r2.shape.length - 1), o2.shape, "predictions's shape should be align with the targets' shape, except the last dimension."), a2 = r2.shape[r2.shape.length - 1], g(i2 > 0 && a2 >= i2, () => "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + a2 + "), but got " + i2), [4, r2.data()];
        case 1:
          return s2 = e2.sent(), [4, o2.data()];
        case 2:
          for (u2 = e2.sent(), h2 = (c2 = [s2.length / a2, a2])[1], f2 = D("bool", l2 = c2[0]), d2 = 0; l2 > d2; d2++) {
            for (p2 = s2.subarray(v2 = d2 * h2, v2 + h2), m2 = [], x2 = 0; p2.length > x2; x2++) m2.push({ value: p2[x2], index: x2 });
            for (m2.sort((t3, n3) => n3.value - t3.value), f2[d2] = 0, x2 = 0; i2 > x2; x2++) if (m2[x2].index === u2[d2]) {
              f2[d2] = 1;
              break;
            }
          }
          return t2 !== r2 && r2.dispose(), n2 !== o2 && o2.dispose(), [2, sr(f2, o2.shape, "bool")];
      }
    });
  });
};
((t2) => {
  t2[t2.NONE = 0] = "NONE", t2[t2.MEAN = 1] = "MEAN", t2[t2.SUM = 2] = "SUM", t2[t2.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(yl || (yl = {}));
var Ol = er({ absoluteDifference_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var i2 = qn(t2, "labels", "absoluteDifference"), o2 = qn(n2, "predictions", "absoluteDifference"), a2 = null;
  null != r2 && (a2 = qn(r2, "weights", "absoluteDifference")), w(i2.shape, o2.shape, "Error in absoluteDifference: ");
  var s2 = i2.sub(o2).abs();
  return Ml(s2, a2, e2);
} });
var Ml = er({ computeWeightedLoss_(t2, n2, r2) {
  void 0 === r2 && (r2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var e2 = qn(t2, "losses", "computeWeightedLoss"), i2 = null;
  null != n2 && (i2 = qn(n2, "weights", "computeWeightedLoss"));
  var o2 = null == i2 ? e2 : e2.mul(i2);
  if (r2 === yl.NONE) return o2;
  if (r2 === yl.SUM) return o2.sum();
  if (r2 === yl.MEAN) {
    if (null == i2) return o2.mean();
    var a2 = e2.size / i2.size, s2 = o2.sum().div(i2.sum());
    return a2 > 1 ? s2.div(cr(a2)) : s2;
  }
  if (r2 === yl.SUM_BY_NONZERO_WEIGHTS) {
    if (null == i2) return o2.sum().div(cr(e2.size));
    var u2 = i2.mul(xr(e2.shape)).notEqual(cr(0)).sum().toFloat();
    return o2.sum().div(u2);
  }
  throw Error("Unknown reduction: " + r2);
} });
var Il = er({ cosineDistance_(t2, n2, r2, e2, i2) {
  void 0 === i2 && (i2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var o2 = qn(t2, "labels", "cosineDistance"), a2 = qn(n2, "predictions", "cosineDistance"), s2 = null;
  null != e2 && (s2 = qn(e2, "weights", "cosineDistance")), w(o2.shape, a2.shape, "Error in cosineDistance: ");
  var u2 = cr(1).sub(o2.mul(a2).sum(r2, true));
  return Ml(u2, s2, i2);
} });
var Tl = er({ hingeLoss_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var i2 = qn(t2, "labels", "hingeLoss"), o2 = qn(n2, "predictions", "hingeLoss"), a2 = null;
  null != r2 && (a2 = qn(r2, "weights", "hingeLoss")), w(i2.shape, o2.shape, "Error in hingeLoss: ");
  var s2 = cr(1);
  i2 = cr(2).mul(i2).sub(s2);
  var u2 = s2.sub(i2.mul(o2)).relu();
  return Ml(u2, a2, e2);
} });
var Sl = er({ huberLoss_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = 1), void 0 === i2 && (i2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var o2 = qn(t2, "labels", "huberLoss"), a2 = qn(n2, "predictions", "huberLoss"), s2 = null;
  null != r2 && (s2 = qn(r2, "weights", "huberLoss")), w(o2.shape, a2.shape, "Error in huberLoss: ");
  var u2 = cr(e2), c2 = a2.sub(o2).abs(), l2 = Iu(c2, u2), h2 = c2.sub(l2), f2 = cr(0.5).mul(l2.square()).add(u2.mul(h2));
  return Ml(f2, s2, i2);
} });
var Dl = er({ logLoss_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = 1e-7), void 0 === i2 && (i2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var o2 = qn(t2, "labels", "logLoss"), a2 = qn(n2, "predictions", "logLoss"), s2 = null;
  null != r2 && (s2 = qn(r2, "weights", "logLoss")), w(o2.shape, a2.shape, "Error in logLoss: ");
  var u2 = cr(1), c2 = cr(e2), l2 = o2.mul(a2.add(c2).log()).neg().sub(u2.sub(o2).mul(u2.sub(a2).add(c2).log()));
  return Ml(l2, s2, i2);
} });
var kl = er({ meanSquaredError_(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var i2 = qn(t2, "labels", "meanSquaredError"), o2 = qn(n2, "predictions", "meanSquaredError"), a2 = null;
  null != r2 && (a2 = qn(r2, "weights", "meanSquaredError")), w(i2.shape, o2.shape, "Error in meanSquaredError: ");
  var s2 = i2.squaredDifference(o2);
  return Ml(s2, a2, e2);
} });
var Pl = er({ sigmoidCrossEntropy_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = 0), void 0 === i2 && (i2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var o2 = qn(t2, "multiClassLabels", "sigmoidCrossEntropy"), a2 = qn(n2, "logits", "sigmoidCrossEntropy"), s2 = null;
  if (null != r2 && (s2 = qn(r2, "weights", "sigmoidCrossEntropy")), w(o2.shape, a2.shape, "Error in sigmoidCrossEntropy: "), e2 > 0) {
    var u2 = cr(e2), c2 = cr(1), l2 = cr(0.5);
    o2 = o2.mul(c2.sub(u2)).add(l2.mul(u2));
  }
  var h2 = ((t3, n3) => {
    var r3 = qn(t3, "labels", "sigmoidCrossEntropyWithLogits"), e3 = qn(n3, "logits", "sigmoidCrossEntropyWithLogits");
    w(r3.shape, e3.shape, "Error in sigmoidCrossEntropyWithLogits: ");
    var i3 = e3.relu(), o3 = e3.mul(r3), a3 = e3.abs().neg().exp().log1p();
    return i3.sub(o3).add(a3);
  })(o2, a2);
  return Ml(h2, s2, i2);
} });
var Fl = er({ softmaxCrossEntropy_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = 0), void 0 === i2 && (i2 = yl.SUM_BY_NONZERO_WEIGHTS);
  var o2 = qn(t2, "onehotLabels", "softmaxCrossEntropy"), a2 = qn(n2, "logits", "softmaxCrossEntropy"), s2 = null;
  if (null != r2 && (s2 = qn(r2, "weights", "softmaxCrossEntropy")), w(o2.shape, a2.shape, "Error in softmaxCrossEntropy: "), e2 > 0) {
    var u2 = cr(e2), c2 = cr(1), l2 = cr(o2.shape[1]);
    o2 = o2.mul(c2.sub(u2)).add(u2.div(l2));
  }
  var h2 = ((t3, n3, r3) => {
    if (void 0 === r3 && (r3 = -1), -1 === r3 && (r3 = n3.rank - 1), r3 !== n3.rank - 1) throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + n3.rank + " and dim was " + r3);
    return Be((t4, n4, e3) => {
      var i3 = n4.logSumExp([r3], true), o3 = n4.toFloat().sub(i3);
      return e3([t4, o3]), { value: o3.mul(t4).neg().sum([r3]), gradFunc(t5, n5) {
        var e4 = n5[0], i4 = n5[1], o4 = Yn(t5.shape, [r3]);
        return [t5.reshape(o4).mul(e4.toFloat().sub(i4.exp())), t5.reshape(o4).mul(i4.exp().sub(e4.toFloat()))];
      } };
    })(t3, n3);
  })(o2, a2);
  return Ml(h2, s2, i2);
} });
var Ll = Object.freeze({ get Reduction() {
  return yl;
}, absoluteDifference: Ol, computeWeightedLoss: Ml, cosineDistance: Il, hingeLoss: Tl, huberLoss: Sl, logLoss: Dl, meanSquaredError: kl, sigmoidCrossEntropy: Pl, softmaxCrossEntropy: Fl });
function Bl(t2, n2) {
  return void 0 === n2 && (n2 = false), St.tidy(() => {
    if (2 !== t2.shape.length) throw Error("qr2d() requires a 2D Tensor, but got a " + t2.shape.length + "D Tensor.");
    for (var r2 = t2.shape[0], e2 = t2.shape[1], i2 = Jr(r2), o2 = t2.clone(), a2 = hr([[1]], [1, 1]), s2 = a2.clone(), u2 = e2 > r2 ? r2 : e2, c2 = (t3) => {
      var n3, u3 = o2, c3 = s2, l3 = i2;
      n3 = St.tidy(() => {
        var n4 = o2.slice([t3, t3], [r2 - t3, 1]), u4 = n4.norm(), c4 = o2.slice([t3, t3], [1, 1]), l4 = hr([[-1]]).where(c4.greater(0), hr([[1]])), h2 = c4.sub(l4.mul(u4)), f2 = n4.div(h2);
        s2 = 1 === f2.shape[0] ? a2.clone() : a2.concat(f2.slice([1, 0], [f2.shape[0] - 1, f2.shape[1]]), 0);
        var d2 = l4.matMul(h2).div(u4).neg(), v2 = o2.slice([t3, 0], [r2 - t3, e2]), p2 = d2.mul(s2);
        if (0 === t3) o2 = v2.sub(p2.matMul(s2.transpose().matMul(v2)));
        else {
          var m2 = v2.sub(p2.matMul(s2.transpose().matMul(v2)));
          o2 = o2.slice([0, 0], [t3, e2]).concat(m2, 0);
        }
        var x2 = i2.slice([0, t3], [r2, i2.shape[1] - t3]);
        if (0 === t3) i2 = x2.sub(x2.matMul(s2).matMul(p2.transpose()));
        else {
          var b2 = x2.sub(x2.matMul(s2).matMul(p2.transpose()));
          i2 = i2.slice([0, 0], [r2, t3]).concat(b2, 1);
        }
        return [s2, o2, i2];
      }), s2 = n3[0], o2 = n3[1], i2 = n3[2], Wn([u3, c3, l3]);
    }, l2 = 0; u2 > l2; ++l2) c2(l2);
    return !n2 && r2 > e2 && (i2 = i2.slice([0, 0], [r2, e2]), o2 = o2.slice([0, 0], [e2, e2])), [i2, o2];
  });
}
var Vl = er({ bandPart_(t2, n2, r2) {
  if (n2 % 1 != 0) throw Error("bandPart(): numLower must be an integer, got " + n2 + ".");
  if (r2 % 1 != 0) throw Error("bandPart(): numUpper must be an integer, got " + r2 + ".");
  var e2 = qn(t2, "a", "bandPart");
  if (2 > e2.rank) throw Error("bandPart(): Rank must be at least 2, got " + e2.rank + ".");
  var i2 = e2.shape, o2 = e2.shape.slice(-2), a2 = o2[0], s2 = o2[1];
  if (n2 > a2) throw Error("bandPart(): numLower (" + n2 + ") must not be greater than the number of rows (" + a2 + ").");
  if (r2 > s2) throw Error("bandPart(): numUpper (" + r2 + ") must not be greater than the number of columns (" + s2 + ").");
  0 > n2 && (n2 = a2), 0 > r2 && (r2 = s2);
  var u2 = yr(0, a2, 1, "int32").reshape([-1, 1]), c2 = yr(0, s2, 1, "int32"), l2 = Vu(u2, c2), h2 = vu(l2.lessEqual(cr(+n2, "int32")), l2.greaterEqual(cr(-r2, "int32"))), f2 = br([a2, s2], e2.dtype);
  return fe(pe(e2.reshape([-1, a2, s2])).map((t3) => bu(h2, t3, f2))).reshape(i2);
} });
var Wl = er({ gramSchmidt_(t2) {
  var n2;
  if (Array.isArray(t2)) {
    n2 = false, g(null != t2 && t2.length > 0, () => "Gram-Schmidt process: input must not be null, undefined, or empty");
    for (var r2 = t2[0].shape[0], e2 = (n3) => {
      g(t2[n3].shape[0] === r2, () => "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + t2[n3].shape[0] + " vs. " + r2 + ")");
    }, i2 = 1; t2.length > i2; ++i2) e2(i2);
  } else n2 = true, t2 = Mr(t2, t2.shape[0], 0).map((t3) => he(t3, [0]));
  g(t2[0].shape[0] >= t2.length, () => "Gram-Schmidt: Number of vectors (" + t2.length + ") exceeds number of dimensions (" + t2[0].shape[0] + ").");
  var o2 = [], a2 = t2, s2 = (t3) => {
    o2.push(St.tidy(() => {
      var n3 = a2[t3];
      if (t3 > 0) for (var r3 = 0; t3 > r3; ++r3) {
        var e3 = $c(o2[r3].mulStrict(n3)).mul(o2[r3]);
        n3 = n3.sub(e3);
      }
      return n3.div(il(n3, "euclidean"));
    }));
  };
  for (i2 = 0; t2.length > i2; ++i2) s2(i2);
  return n2 ? fe(o2, 0) : o2;
} });
var zl = er({ qr_(t2, n2) {
  if (void 0 === n2 && (n2 = false), 2 > t2.rank) throw Error("qr() requires input tensor to have a rank >= 2, but got rank " + t2.rank);
  if (2 === t2.rank) return Bl(t2, n2);
  var r2 = t2.shape.slice(0, t2.shape.length - 2).reduce((t3, n3) => t3 * n3), e2 = pe(t2.reshape([r2, t2.shape[t2.shape.length - 2], t2.shape[t2.shape.length - 1]]), 0), i2 = [], o2 = [];
  return e2.forEach((t3) => {
    var r3 = Bl(t3, n2), e3 = r3[1];
    i2.push(r3[0]), o2.push(e3);
  }), [fe(i2, 0).reshape(t2.shape), fe(o2, 0).reshape(t2.shape)];
} });
var Gl = Object.freeze({ bandPart: Vl, gramSchmidt: Wl, qr: zl });
function Ul(t2, n2, r2, e2, i2, o2) {
  null == e2 && (e2 = 0.5), null == i2 && (i2 = -Infinity), null == o2 && (o2 = 0);
  var a2 = t2.shape[0];
  return r2 = Math.min(r2, a2), g(e2 >= 0 && 1 >= e2, () => "iouThreshold must be in [0, 1], but was '" + e2 + "'"), g(2 === t2.rank, () => "boxes must be a 2D tensor, but was of rank '" + t2.rank + "'"), g(4 === t2.shape[1], () => "boxes must have 4 columns, but 2nd dimension was " + t2.shape[1]), g(1 === n2.rank, () => "scores must be a 1D tensor"), g(n2.shape[0] === a2, () => "scores has incompatible shape with boxes. Expected " + a2 + ", but was " + n2.shape[0]), g(o2 >= 0 && 1 >= o2, () => "softNmsSigma must be in [0, 1], but was '" + o2 + "'"), { maxOutputSize: r2, iouThreshold: e2, scoreThreshold: i2, softNmsSigma: o2 };
}
var jl = er({ resizeBilinear_(t2, n2, r2) {
  void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "images", "resizeBilinear");
  g(3 === e2.rank || 4 === e2.rank, () => "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + e2.rank + "."), g(2 === n2.length, () => "Error in resizeBilinear: new shape must 2D, but got shape " + n2 + ".");
  var i2 = e2, o2 = false;
  3 === e2.rank && (o2 = true, i2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]));
  var a2 = n2[0], s2 = n2[1], u2 = St.runKernelFunc((t3, n3) => (n3([i2]), t3.resizeBilinear(i2, a2, s2, r2)), { x: i2 }, (t3, n3) => ({ x() {
    return St.runKernelFunc((e3) => e3.resizeBilinearBackprop(t3, n3[0], r2), {});
  } }), "ResizeBilinear", { alignCorners: r2, newHeight: a2, newWidth: s2 });
  return o2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var ql = er({ resizeNearestNeighbor_(t2, n2, r2) {
  void 0 === r2 && (r2 = false);
  var e2 = qn(t2, "images", "resizeNearestNeighbor");
  g(3 === e2.rank || 4 === e2.rank, () => "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + e2.rank + "."), g(2 === n2.length, () => "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + n2 + "."), g("float32" === e2.dtype || "int32" === e2.dtype, () => "`images` must have `int32` or `float32` as dtype");
  var i2 = e2, o2 = false;
  3 === e2.rank && (o2 = true, i2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]));
  var a2 = n2[0], s2 = n2[1], u2 = St.runKernelFunc((t3, n3) => (n3([i2]), t3.resizeNearestNeighbor(i2, a2, s2, r2)), { batchImages: i2 }, (t3, n3) => ({ batchImages() {
    return St.runKernelFunc((e3) => e3.resizeNearestNeighborBackprop(t3, n3[0], r2), {});
  } }));
  return o2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var Hl = er({ nonMaxSuppression_(t2, n2, r2, e2, i2) {
  void 0 === e2 && (e2 = 0.5), void 0 === i2 && (i2 = -Infinity);
  var o2 = qn(t2, "boxes", "nonMaxSuppression"), a2 = qn(n2, "scores", "nonMaxSuppression"), s2 = Ul(o2, a2, r2, e2, i2);
  return St.runKernelFunc((t3) => t3.nonMaxSuppression(o2, a2, r2, e2, i2), { boxes: o2, scores: a2 }, null, "NonMaxSuppressionV3", { maxOutputSize: r2 = s2.maxOutputSize, iouThreshold: e2 = s2.iouThreshold, scoreThreshold: i2 = s2.scoreThreshold });
} });
var Xl = er({ nonMaxSuppressionWithScore_(t2, n2, r2, e2, i2, o2) {
  void 0 === e2 && (e2 = 0.5), void 0 === i2 && (i2 = -Infinity), void 0 === o2 && (o2 = 0);
  var a2 = qn(t2, "boxes", "nonMaxSuppression"), s2 = qn(n2, "scores", "nonMaxSuppression"), u2 = Ul(a2, s2, r2, e2, i2, o2), c2 = { maxOutputSize: r2 = u2.maxOutputSize, iouThreshold: e2 = u2.iouThreshold, scoreThreshold: i2 = u2.scoreThreshold, softNmsSigma: o2 = u2.softNmsSigma }, l2 = St.runKernel("NonMaxSuppressionV5", { boxes: a2, scores: s2 }, c2);
  return { selectedIndices: l2[0], selectedScores: l2[1] };
} });
var $l = er({ cropAndResize_(t2, n2, r2, e2, i2, o2) {
  var a2 = qn(t2, "image", "cropAndResize"), s2 = qn(n2, "boxes", "cropAndResize", "float32"), u2 = qn(r2, "boxInd", "cropAndResize", "int32");
  i2 = i2 || "bilinear", o2 = o2 || 0;
  var c2 = s2.shape[0];
  return g(4 === a2.rank, () => "Error in cropAndResize: image must be rank 4,but got rank " + a2.rank + "."), g(2 === s2.rank && 4 === s2.shape[1], () => "Error in cropAndResize: boxes must be have size [" + c2 + ",4] but had shape " + s2.shape + "."), g(1 === u2.rank && u2.shape[0] === c2, () => "Error in cropAndResize: boxInd must be have size [" + c2 + "] but had shape " + s2.shape + "."), g(2 === e2.length, () => "Error in cropAndResize: cropSize must be of length 2, but got length " + e2.length + "."), g(e2[0] >= 1 && e2[1] >= 1, () => "cropSize must be atleast [1,1], but was " + e2), g("bilinear" === i2 || "nearest" === i2, () => "method must be bilinear or nearest, but was " + i2), St.runKernelFunc((t3, n3) => t3.cropAndResize(a2, s2, u2, e2, i2, o2), { images: a2, boxes: s2, boxInd: u2 }, null, "CropAndResize", { method: i2, extrapolationValue: o2, cropSize: e2 });
} });
var Kl = Object.freeze({ resizeBilinear: jl, resizeNearestNeighbor: ql, nonMaxSuppression: Hl, nonMaxSuppressionAsync(t2, n2, i2, o2, a2) {
  return void 0 === o2 && (o2 = 0.5), void 0 === a2 && (a2 = -Infinity), r(this, 0, void 0, function() {
    var r2, s2, u2, c2, l2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return r2 = qn(t2, "boxes", "nonMaxSuppressionAsync"), s2 = qn(n2, "scores", "nonMaxSuppressionAsync"), u2 = Ul(r2, s2, i2, o2, a2), i2 = u2.maxOutputSize, o2 = u2.iouThreshold, a2 = u2.scoreThreshold, [4, Promise.all([r2.data(), s2.data()])];
        case 1:
          return c2 = e2.sent(), l2 = mi(c2[0], c2[1], i2, o2, a2), r2 !== t2 && r2.dispose(), s2 !== n2 && s2.dispose(), [2, l2];
      }
    });
  });
}, nonMaxSuppressionWithScore: Xl, nonMaxSuppressionWithScoreAsync(t2, n2, i2, o2, a2, s2) {
  return void 0 === o2 && (o2 = 0.5), void 0 === a2 && (a2 = -Infinity), void 0 === s2 && (s2 = 0), r(this, 0, void 0, function() {
    var r2, u2, c2, l2, h2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return r2 = qn(t2, "boxes", "nonMaxSuppressionAsync"), u2 = qn(n2, "scores", "nonMaxSuppressionAsync"), c2 = Ul(r2, u2, i2, o2, a2, s2), i2 = c2.maxOutputSize, o2 = c2.iouThreshold, a2 = c2.scoreThreshold, s2 = c2.softNmsSigma, [4, Promise.all([r2.data(), u2.data()])];
        case 1:
          return l2 = e2.sent(), h2 = xi(l2[0], l2[1], i2, o2, a2, s2), r2 !== t2 && r2.dispose(), u2 !== n2 && u2.dispose(), [2, h2];
      }
    });
  });
}, cropAndResize: $l });
var Yl = (t2, n2) => !(t2 > 0) || "linear" === n2;
var Jl = (t2, n2, r2) => {
  if (null == r2 || "linear" === r2) return t2;
  if ("relu" === r2) return t2.mul(n2.step());
  throw Error("Gradient for activation " + r2 + " has not been implemented yet.");
};
var Zl = (t2, n2) => {
  var r2 = n2, e2 = He(t2.shape, n2.shape);
  return e2.length > 0 && (r2 = r2.sum(e2)), r2.reshape(t2.shape);
};
var Ql = (t2, n2, r2) => {
  if ("linear" === n2) return t2;
  if ("relu" === n2) return Qc(t2);
  if ("elu" === n2) return Yc(t2);
  if ("relu6" === n2) return tl(t2);
  if ("prelu" === n2) return Zc(t2, r2);
  throw Error("Unknown fused activation " + n2 + ".");
};
var th = er({ fusedMatMul_(t2) {
  var n2, r2 = t2.a, e2 = t2.b, i2 = t2.transposeA, o2 = void 0 !== i2 && i2, a2 = t2.transposeB, s2 = void 0 !== a2 && a2, u2 = t2.bias, c2 = t2.activation, l2 = void 0 === c2 ? "linear" : c2, h2 = t2.preluActivationWeights;
  if (false === Yl(St.state.gradientDepth, l2)) {
    var f2 = bc(r2, e2, o2, s2);
    return null != u2 && (f2 = wu(f2, u2)), Ql(f2, l2, h2);
  }
  var d2 = qn(r2, "a", "fused matMul"), v2 = qn(e2, "b", "fused matMul");
  n2 = Rt(d2, v2), d2 = n2[0], v2 = n2[1];
  var p2 = o2 ? d2.shape[d2.rank - 2] : d2.shape[d2.rank - 1], m2 = s2 ? v2.shape[v2.rank - 1] : v2.shape[v2.rank - 2], x2 = o2 ? d2.shape[d2.rank - 1] : d2.shape[d2.rank - 2], b2 = s2 ? v2.shape[v2.rank - 2] : v2.shape[v2.rank - 1], w2 = d2.shape.slice(0, -2), y2 = v2.shape.slice(0, -2), C2 = _(w2), R2 = _(y2);
  g(d2.rank >= 2 && v2.rank >= 2 && d2.rank === v2.rank, () => "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + d2.rank + " and " + v2.rank + "."), g(E(w2, y2), () => "Error in fused matMul: outer dimensions (" + w2 + ") and (" + y2 + ") of Tensors with shapes " + d2.shape + " and " + v2.shape + " must match."), g(p2 === m2, () => "Error in fused matMul: inner shapes (" + p2 + ") and (" + m2 + ") of Tensors with shapes " + d2.shape + " and " + v2.shape + " and transposeA=" + o2 + " and transposeB=" + s2 + " must match.");
  var A2, N2, O2 = d2.shape.slice(0, -2).concat([x2, b2]), M2 = o2 ? d2.as3D(C2, p2, x2) : d2.as3D(C2, x2, p2), I2 = s2 ? v2.as3D(R2, b2, m2) : v2.as3D(R2, m2, b2);
  null != u2 && Xe(O2, (A2 = Rt(A2 = qn(u2, "bias", "fused matMul"), d2)[0]).shape), null != h2 && (N2 = qn(h2, "prelu weights", "fused matMul"));
  var T2 = { a: M2, b: I2 };
  return null != u2 && (T2.bias = A2), null != h2 && (T2.preluActivationWeights = N2), St.runKernelFunc((t3, n3) => {
    var r3 = t3.fusedBatchMatMul({ a: M2, b: I2, transposeA: o2, transposeB: s2, bias: A2, activation: l2, preluActivationWeights: N2 });
    return n3([M2, I2, r3]), r3;
  }, T2, (t3, n3) => {
    var r3 = n3[0], e3 = n3[1], i3 = Jl(t3, n3[2], l2), a3 = {};
    return null != u2 && (a3 = { bias() {
      return Zl(A2, i3);
    } }), Object.assign(o2 || s2 ? !o2 && s2 ? { a() {
      return i3.matMul(e3, false, false);
    }, b() {
      return i3.matMul(r3, true, false);
    } } : o2 && !s2 ? { a() {
      return e3.matMul(i3, false, true);
    }, b() {
      return r3.matMul(i3, false, false);
    } } : { a() {
      return e3.matMul(i3, true, true);
    }, b() {
      return i3.matMul(r3, true, true);
    } } : { a() {
      return i3.matMul(e3, false, true);
    }, b() {
      return r3.matMul(i3, true, false);
    } }, a3);
  }, "_FusedMatMul", { transposeA: o2, transposeB: s2, activation: l2 }, [M2, I2], [true]).reshape(O2);
} });
var nh = er({ fusedConv2d_(t2) {
  var n2 = t2.x, r2 = t2.filter, e2 = t2.strides, i2 = t2.pad, o2 = t2.dataFormat, a2 = void 0 === o2 ? "NHWC" : o2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
  if (false === Yl(St.state.gradientDepth, f2 = f2 || "linear")) {
    var v2 = uc(n2, r2, e2, i2, a2, u2, c2);
    return null != l2 && (v2 = wu(v2, l2)), Ql(v2, f2, d2);
  }
  var p2 = qn(n2, "x", "conv2d"), m2 = qn(r2, "filter", "conv2d"), x2 = p2, b2 = false;
  3 === p2.rank && (b2 = true, x2 = p2.as4D(1, p2.shape[0], p2.shape[1], p2.shape[2])), g(4 === x2.rank, () => "Error in fused conv2d: input must be rank 4, but got rank " + x2.rank + "."), g(4 === m2.rank, () => "Error in fused conv2d: filter must be rank 4, but got rank " + m2.rank + "."), null != c2 && g(R(i2), () => "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + c2 + " but got pad " + i2 + "."), g(x2.shape[3] === m2.shape[2], () => "Error in conv2d: depth of input (" + x2.shape[3] + ") must match input depth for filter " + m2.shape[2] + "."), g(ii(e2, u2), () => "Error in conv2D: Either strides or dilations must be 1. Got strides " + e2 + " and dilations '" + u2 + "'"), g("NHWC" === a2, () => "Error in conv2d: got dataFormat of " + a2 + " but only NHWC is currently supported.");
  var w2, y2, C2 = Ye(x2.shape, m2.shape, e2, u2, i2, c2);
  null != l2 && (w2 = Rt(w2 = qn(l2, "bias", "fused conv2d"), p2)[0], Xe(C2.outShape, w2.shape)), null != d2 && (y2 = qn(d2, "prelu weights", "fused conv2d"));
  var _2 = { x: x2, filter: m2 };
  null != l2 && (_2.bias = w2), null != d2 && (_2.preluActivationWeights = y2);
  var E2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.fusedConv2d({ input: x2, filter: m2, convInfo: C2, bias: w2, activation: f2, preluActivationWeights: y2 });
    return n3([m2, x2, r3]), r3;
  }, _2, (t3, n3) => {
    var r3 = n3[0], o3 = n3[1], a3 = Jl(t3, n3[2], f2);
    g(ei(u2), () => "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u2 + "'");
    var s3 = {};
    return null != l2 && (s3 = { bias() {
      return Zl(w2, a3);
    } }), Object.assign({ x() {
      return hc(o3.shape, a3, r3, e2, i2);
    }, filter() {
      return lc(o3, a3, r3.shape, e2, i2);
    } }, s3);
  }, "FusedConv2D", { convInfo: C2, activation: f2 }, [m2, x2], [true]);
  return b2 ? E2.as3D(E2.shape[1], E2.shape[2], E2.shape[3]) : E2;
} });
var rh = er({ fusedDepthwiseConv2d_(t2) {
  var n2 = t2.x, r2 = t2.filter, e2 = t2.strides, i2 = t2.pad, o2 = t2.dataFormat, a2 = void 0 === o2 ? "NHWC" : o2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
  if (false === Yl(St.state.gradientDepth, f2)) {
    var v2 = fc(n2, r2, e2, i2, a2, u2, c2);
    return null != l2 && (v2 = wu(v2, l2)), Ql(v2, f2, d2);
  }
  var p2 = qn(n2, "x", "depthwiseConv2d"), m2 = qn(r2, "filter", "depthwiseConv2d"), x2 = p2, b2 = false;
  3 === p2.rank && (b2 = true, x2 = p2.as4D(1, p2.shape[0], p2.shape[1], p2.shape[2])), g(4 === x2.rank, () => "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + x2.rank + "."), g(4 === m2.rank, () => "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + m2.rank + "."), g(x2.shape[3] === m2.shape[2], () => "Error in fused depthwiseConv2d: number of input channels (" + x2.shape[3] + ") must match the inChannels dimension in filter " + m2.shape[2] + "."), null == u2 && (u2 = [1, 1]), g(ii(e2, u2), () => "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + e2 + " and dilations '" + u2 + "'"), null != c2 && g(R(i2), () => "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c2 + " but got pad " + i2 + ".");
  var w2, y2, C2 = Ye(x2.shape, m2.shape, e2, u2, i2, c2, true);
  null != l2 && (w2 = Rt(w2 = qn(l2, "bias", "fused conv2d"), p2)[0], Xe(C2.outShape, w2.shape)), null != d2 && (y2 = qn(d2, "prelu weights", "fused depthwiseConv2d"));
  var _2 = { x: x2, filter: m2 };
  null != l2 && (_2.bias = w2), null != d2 && (_2.preluActivationWeights = y2);
  var E2 = St.runKernelFunc((t3, n3) => {
    var r3 = t3.fusedDepthwiseConv2D({ input: x2, filter: m2, convInfo: C2, bias: w2, activation: f2, preluActivationWeights: y2 });
    return n3([m2, x2, r3]), r3;
  }, _2, (t3, n3) => {
    g(ei(u2), () => "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + u2 + "'");
    var r3 = n3[0], e3 = n3[1], i3 = Jl(t3, n3[2], f2), o3 = {};
    return null != l2 && (o3 = { bias() {
      return Zl(w2, i3);
    } }), Object.assign({ x() {
      return dc(e3.shape, i3, r3, C2);
    }, filter() {
      return vc(e3, i3, r3.shape, C2);
    } }, o3);
  }, "FusedDepthwiseConv2D", { convInfo: C2, activation: f2 }, [m2, x2], [true]);
  return b2 ? E2.as3D(E2.shape[1], E2.shape[2], E2.shape[3]) : E2;
} });
var eh = Object.freeze({ matMul: th, conv2d: nh, depthwiseConv2d: rh });
var ih = Object.freeze({ image: Kl, linalg: Gl, losses: Ll, spectral: pl, fused: eh, signal: Al, square: xs, squaredDifference: gs, conv1d: sc, conv2d: uc, conv3d: cc, depthwiseConv2d: fc, separableConv2d: pc, conv2dTranspose: mc, conv3dTranspose: xc, op: er, batchNormalization2d: au, batchNormalization3d: su, batchNormalization4d: uu, batchNormalization: cu, batchNorm: lu, batchNorm2d: hu, batchNorm3d: fu, batchNorm4d: du, booleanMaskAsync: ec, complex: ir, real: or, imag: ar, concat: Er, concat1d: Rr, concat2d: Ar, concat3d: Nr, concat4d: Or, split: Mr, matMul: bc, dot: gc, outerProduct: wc, reverse: yc, reverse1d: Cc, reverse2d: _c, reverse3d: Ec, reverse4d: Rc, maxPool: Oc, avgPool: Mc, pool: Ic, maxPool3d: Tc, avgPool3d: Sc, slice: Dc, slice1d: kc, slice2d: Pc, slice3d: Fc, slice4d: Lc, abs: ws, acos: ys, acosh: Cs, asin: _s, asinh: Es, atan: Rs, atanh: As, ceil: Ns, clipByValue: Os, cos: Ms, cosh: Is, erf: Ts, exp: Ss, expm1: Ds, floor: ks, log: Ps, log1p: Fs, logSigmoid: Ls, neg: Bs, reciprocal: Vs, round: Ws, rsqrt: zs, sigmoid: Gs, sign: Us, isNaN: js, isInf: qs, isFinite: Hs, sin: Xs, sinh: $s, softplus: Ks, sqrt: Ys, step: Js, tan: Zs, tanh: Qs, all: Vc, any: Wc, argMax: zc, argMin: Gc, logSumExp: Uc, max: jc, mean: qc, min: Hc, moments: Xc, sum: $c, prod: Kc, equal: zu, equalStrict: Gu, greater: Uu, greaterEqual: ju, greaterEqualStrict: qu, greaterStrict: Hu, less: Xu, lessEqual: $u, lessEqualStrict: Ku, lessStrict: Yu, notEqual: Ju, notEqualStrict: Zu, add: wu, addN: yu, addStrict: Cu, atan2: _u, div: Eu, divNoNan: Ru, divStrict: Au, floorDiv: Nu, maximum: Ou, maximumStrict: Mu, minimum: Iu, minimumStrict: Tu, mod: Su, modStrict: Du, mul: ku, mulStrict: Pu, pow: Fu, powStrict: Lu, squaredDifferenceStrict: Bu, sub: Vu, subStrict: Wu, elu: Yc, leakyRelu: Jc, prelu: Zc, relu: Qc, relu6: tl, selu: nl, logicalAnd: vu, logicalNot: pu, logicalOr: mu, logicalXor: xu, where: bu, whereAsync: gu, buffer: Gr, print: Ur, batchToSpaceND: jr, broadcastTo: qr, cast: Hr, clone: Xr, cumsum: $r, depthToSpace: Kr, expandDims: Yr, eye: Jr, multinomial: Zr, oneHot: Qr, pad: te, pad1d: ne, pad2d: re, pad3d: ee, pad4d: ie, rand: oe, randomNormal: ae, randomGamma: se, randomUniform: ue, reshape: ce, spaceToBatchND: le, squeeze: he, stack: fe, tile: de, truncatedNormal: ve, unstack: pe, setdiff1dAsync: me, fill: gr, linspace: wr, ones: xr, range: yr, scalar: cr, tensor: sr, tensor1d: lr, tensor2d: hr, tensor3d: fr, tensor4d: dr, tensor5d: vr, tensor6d: pr, variable: mr, zeros: br, onesLike: Cr, zerosLike: _r, transpose: rl, softmax: We, logSoftmax: ze, localResponseNormalization: el, norm: il, gather: nc, unsortedSegmentSum: rc, basicLSTMCell: ol, multiRNNCell: al, movingAverage: sl, stridedSlice: ul, topk: cl, scatterND: ll, fft: hl, ifft: fl, rfft: dl, irfft: vl, sparseToDense: ml, gatherND: xl, diag: bl, dropout: gl, hannWindow: Cl, hammingWindow: _l, frame: El, stft: Rl, inTopKAsync: Nl });
function oh(t2, n2) {
  Array.isArray(t2) || (t2 = [t2]), t2.forEach((t3) => {
    null != t3 && g("complex64" !== t3.dtype, () => n2 + " does not support complex64 tensors.");
  });
}
function ah(t2, n2, r2, e2) {
  if ("linear" === r2) return t2.linear(n2);
  if ("relu" === r2) return t2.relu(n2);
  if ("elu" === r2) return t2.elu(n2);
  if ("relu6" === r2) return t2.relu6(n2);
  if ("prelu" === r2) return t2.prelu(n2, e2);
  throw Error("Activation " + r2 + " has not been implemented for the CPU backend.");
}
var sh = (function(t2) {
  function i2() {
    var n2 = t2.call(this) || this;
    return n2.blockSize = 48, n2.firstUse = true, n2.data = new Ge(n2, St), n2;
  }
  return n(i2, t2), i2.prototype.write = function(t3, n2, r2) {
    this.firstUse && (this.firstUse = false, o().get("IS_NODE") && Gn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));
    var e2 = {};
    return this.data.set(e2, { values: t3, dtype: r2 }), e2;
  }, i2.prototype.move = function(t3, n2, r2, e2) {
    this.data.set(t3, { values: n2, dtype: e2 });
  }, i2.prototype.numDataIds = function() {
    return this.data.numDataIds();
  }, i2.prototype.read = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        return [2, this.readSync(t3)];
      });
    });
  }, i2.prototype.readSync = function(t3) {
    var n2 = this.data.get(t3), r2 = n2.complexTensors;
    return "complex64" === n2.dtype ? li(this.readSync(r2.real.dataId), this.readSync(r2.imag.dataId)) : this.data.get(t3).values;
  }, i2.prototype.bufferSync = function(t3) {
    var n2 = this.readSync(t3.dataId), r2 = n2;
    if ("string" === t3.dtype) try {
      r2 = n2.map((t4) => nt(t4));
    } catch (e2) {
      throw Error("Failed to decode encoded string bytes into utf-8");
    }
    return Gr(t3.shape, t3.dtype, r2);
  }, i2.prototype.makeOutput = function(t3, n2, r2) {
    var e2 = this.write(t3, n2, r2);
    return St.makeTensorFromDataId(e2, n2, r2, this);
  }, i2.prototype.disposeData = function(t3) {
    if (this.data.has(t3)) {
      var n2 = this.data.get(t3).complexTensors;
      null != n2 && (n2.real.dispose(), n2.imag.dispose()), this.data.delete(t3);
    }
  }, i2.prototype.time = function(t3) {
    return r(this, 0, void 0, function() {
      var n2;
      return e(this, (r2) => (n2 = Z(), t3(), [2, { kernelMs: Z() - n2 }]));
    });
  }, i2.prototype.memory = () => ({ unreliable: true, reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."] }), i2.prototype.complex = function(t3, n2) {
    var r2 = this.makeOutput(null, t3.shape, "complex64");
    return this.data.get(r2.dataId).complexTensors = { real: St.keep(t3.clone()), imag: St.keep(n2.clone()) }, r2;
  }, i2.prototype.real = function(t3) {
    return this.data.get(t3.dataId).complexTensors.real.clone();
  }, i2.prototype.imag = function(t3) {
    return this.data.get(t3.dataId).complexTensors.imag.clone();
  }, i2.prototype.slice = function(t3, n2, r2) {
    if (oh(t3, "slice"), ke(t3.shape, n2, r2)) {
      var e2 = Pe(n2, t3.strides), i3 = _(r2);
      return sr(this.readSync(t3.dataId).subarray(e2, e2 + i3), r2, t3.dtype);
    }
    for (var o2 = Gr(r2, t3.dtype), a2 = this.bufferSync(t3), s2 = 0; o2.size > s2; ++s2) {
      var u2 = o2.indexToLoc(s2).map((t4, r3) => t4 + n2[r3]);
      o2.values[s2] = a2.get.apply(a2, u2);
    }
    return o2.toTensor();
  }, i2.prototype.stridedSlice = function(t3, n2, r2, e2) {
    oh(t3, "stridedSlice");
    var i3 = Te(n2, r2, e2);
    if (i3.some((t4) => 0 === t4)) return sr([], i3);
    for (var o2 = Gr(i3, t3.dtype), a2 = this.bufferSync(t3), s2 = 0; o2.size > s2; s2++) {
      for (var u2 = o2.indexToLoc(s2), c2 = Array(u2.length), l2 = 0; c2.length > l2; l2++) c2[l2] = u2[l2] * e2[l2] + n2[l2];
      o2.set.apply(o2, [a2.get.apply(a2, c2)].concat(u2));
    }
    return o2.toTensor();
  }, i2.prototype.diag = function(t3) {
    for (var n2 = this.readSync(t3.dataId), r2 = Gr([t3.size, t3.size], t3.dtype), e2 = r2.values, i3 = 0; n2.length > i3; i3++) e2[i3 * t3.size + i3] = n2[i3];
    return r2.toTensor();
  }, i2.prototype.unstack = function(t3, n2) {
    for (var r2 = t3.shape[n2], e2 = Array(t3.rank - 1), i3 = 0, o2 = 0; t3.rank > o2; o2++) o2 !== n2 && (e2[i3++] = t3.shape[o2]);
    var a2 = Array(t3.rank).fill(0), s2 = t3.shape.slice();
    s2[n2] = 1;
    var u2 = Array(r2);
    for (o2 = 0; u2.length > o2; o2++) a2[n2] = o2, u2[o2] = this.slice(t3, a2, s2).reshape(e2);
    return u2;
  }, i2.prototype.reverse = function(t3, n2) {
    oh(t3, "reverse");
    for (var r2 = Gr(t3.shape, t3.dtype), e2 = this.bufferSync(t3), i3 = (i4) => {
      var o3 = r2.indexToLoc(i4), a2 = o3.slice();
      n2.forEach((n3) => a2[n3] = t3.shape[n3] - 1 - a2[n3]), r2.set.apply(r2, [e2.get.apply(e2, a2)].concat(o3));
    }, o2 = 0; r2.size > o2; o2++) i3(o2);
    return r2.toTensor();
  }, i2.prototype.concat = function(t3, n2) {
    var r2 = this;
    if ("complex64" === t3[0].dtype) {
      var e2 = t3.map((t4) => or(t4)), i3 = t3.map((t4) => ar(t4));
      return ir(this.concat(e2, n2), this.concat(i3, n2));
    }
    var o2 = t3.map((t4) => {
      var r3 = _(t4.shape.slice(n2));
      return t4.as2D(-1, r3);
    }), a2 = rr(o2.map((t4) => t4.shape), 1), s2 = Gr(a2, t3[0].dtype).values;
    if (1 === o2[0].shape[0]) {
      var u2 = 0;
      o2.forEach((t4) => {
        s2.set(r2.readSync(t4.dataId), u2), u2 += t4.size;
      });
    } else {
      var c2 = 0;
      o2.forEach((t4) => {
        for (var n3 = r2.readSync(t4.dataId), e3 = 0, i4 = 0; t4.shape[0] > i4; ++i4) for (var o3 = i4 * a2[1] + c2, u3 = 0; t4.shape[1] > u3; ++u3) s2[o3 + u3] = n3[e3++];
        c2 += t4.shape[1];
      });
    }
    var l2 = rr(t3.map((t4) => t4.shape), n2);
    return sr(s2, l2, t3[0].dtype);
  }, i2.prototype.neg = function(t3) {
    return oh(t3, "neg"), this.multiply(cr(-1), t3);
  }, i2.prototype.add = function(t3, n2) {
    return "complex64" === t3.dtype || "complex64" === n2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), n2.cast("complex64"), (t4, n3, r2, e2) => ({ real: t4 + r2, imag: n3 + e2 })) : this.broadcastedBinaryOp(t3, n2, _t(t3.dtype, n2.dtype), (t4, n3) => t4 + n3);
  }, i2.prototype.addN = function(t3) {
    var n2 = this;
    oh(t3, "addN");
    for (var r2 = t3.map((t4) => n2.readSync(t4.dataId)), e2 = Gr(t3[0].shape, t3[0].dtype), i3 = e2.values, o2 = 0; t3.length > o2; o2++) for (var a2 = r2[o2], s2 = 0; i3.length > s2; s2++) i3[s2] += a2[s2];
    return e2.toTensor();
  }, i2.prototype.softmax = function(t3, n2) {
    var r2 = T([n2], t3.shape), e2 = this.max(t3, r2), i3 = Yn(e2.shape, r2), o2 = this.subtract(t3, e2.reshape(i3)), a2 = this.exp(o2), s2 = this.sum(a2, r2).reshape(i3);
    return this.realDivide(a2, s2);
  }, i2.prototype.subtract = function(t3, n2) {
    return "complex64" === t3.dtype || "complex64" === n2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), n2.cast("complex64"), (t4, n3, r2, e2) => ({ real: t4 - r2, imag: n3 - e2 })) : this.broadcastedBinaryOp(t3, n2, _t(t3.dtype, n2.dtype), (t4, n3) => t4 - n3);
  }, i2.prototype.pow = function(t3, n2) {
    return oh([t3, n2], "pow"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => Math.pow(t4, n3));
  }, i2.prototype.batchMatMul = function(t3, n2, r2, e2) {
    oh([t3, n2], "matMul");
    for (var i3 = r2 ? t3.shape[1] : t3.shape[2], o2 = r2 ? t3.shape[2] : t3.shape[1], a2 = e2 ? n2.shape[1] : n2.shape[2], s2 = t3.shape[0], u2 = this.readSync(t3.dataId), c2 = this.readSync(n2.dataId), l2 = r2 ? [t3.strides[0], 1, t3.strides[1]] : [t3.strides[0], t3.strides[1], 1], h2 = l2[0], f2 = l2[1], d2 = l2[2], v2 = e2 ? [1, n2.strides[1], n2.strides[0]] : [n2.strides[1], 1, n2.strides[0]], p2 = v2[0], m2 = v2[1], x2 = v2[2], b2 = o2 * a2, g2 = Gr([s2, o2, a2], t3.dtype), w2 = g2.values, y2 = this.blockSize, C2 = 0; s2 > C2; C2++) for (var _2 = 0; o2 > _2; _2 += y2) for (var E2 = 0; a2 > E2; E2 += y2) for (var R2 = 0; i3 > R2; R2 += y2) for (var A2 = Math.min(_2 + y2, o2), N2 = Math.min(E2 + y2, a2), O2 = Math.min(R2 + y2, i3), M2 = _2; A2 > M2; M2++) for (var I2 = E2; N2 > I2; I2++) {
      for (var T2 = 0, S2 = R2; O2 > S2; S2++) T2 += u2[C2 * h2 + M2 * f2 + S2 * d2] * c2[S2 * p2 + I2 * m2 + C2 * x2];
      w2[C2 * b2 + (M2 * a2 + I2)] += T2;
    }
    return g2.toTensor();
  }, i2.prototype.fusedBatchMatMul = function(t3) {
    var n2 = t3.bias, r2 = t3.activation, e2 = t3.preluActivationWeights, i3 = this.batchMatMul(t3.a, t3.b, t3.transposeA, t3.transposeB);
    return n2 && (i3 = this.add(i3, n2)), r2 && (i3 = ah(this, i3, r2, e2)), i3;
  }, i2.prototype.multiply = function(t3, n2) {
    return "complex64" === t3.dtype || "complex64" === n2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), n2.cast("complex64"), (t4, n3, r2, e2) => ({ real: t4 * r2 - n3 * e2, imag: t4 * e2 + n3 * r2 })) : this.broadcastedBinaryOp(t3, n2, _t(t3.dtype, n2.dtype), (t4, n3) => t4 * n3);
  }, i2.prototype.realDivide = function(t3, n2) {
    return oh([t3, n2], "realDivide"), this.broadcastedBinaryOp(t3, n2, "float32", (t4, n3) => t4 / n3);
  }, i2.prototype.floorDiv = function(t3, n2) {
    return oh([t3, n2], "floorDiv"), this.broadcastedBinaryOp(t3, n2, "int32", (t4, n3) => Math.floor(t4 / n3));
  }, i2.prototype.sum = function(t3, n2) {
    oh(t3, "sum"), Jn("sum", n2, t3.rank);
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], _t(t3.dtype, "int32")), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = 0, h2 = 0; o2 > h2; ++h2) l2 += s2[c2 + h2];
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.prod = function(t3, n2) {
    oh(t3, "sum");
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], _t(t3.dtype, "int32")), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = 1, h2 = 0; o2 > h2; ++h2) l2 *= s2[c2 + h2];
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.unsortedSegmentSum = (t3, n2, r2) => {
    oh(t3, "unsortedSegmentSum");
    for (var e2 = [], i3 = t3.rank - n2.rank, o2 = 0; i3 > o2; ++o2) n2 = n2.expandDims(o2 + 1);
    for (o2 = 0; r2 > o2; ++o2) {
      var a2 = cr(o2, "int32"), s2 = zu(a2, n2).asType("float32").mul(t3).sum(0);
      e2.push(s2);
    }
    return fe(e2);
  }, i2.prototype.argMin = function(t3, n2) {
    oh(t3, "argMin");
    var r2 = [n2];
    Jn("argMin", r2, t3.rank);
    for (var e2 = Kn(t3.shape, r2), i3 = e2[1], o2 = br(e2[0], "int32"), a2 = _(i3), s2 = this.readSync(o2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; s2.length > c2; ++c2) {
      for (var l2 = c2 * a2, h2 = u2[l2], f2 = 0, d2 = 0; a2 > d2; ++d2) {
        var v2 = u2[l2 + d2];
        h2 > v2 && (h2 = v2, f2 = d2);
      }
      s2[c2] = f2;
    }
    return o2;
  }, i2.prototype.argMax = function(t3, n2) {
    oh(t3, "argMax");
    var r2 = [n2];
    Jn("argMax", r2, t3.rank);
    for (var e2 = Kn(t3.shape, r2), i3 = e2[1], o2 = br(e2[0], "int32"), a2 = _(i3), s2 = this.readSync(o2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; s2.length > c2; ++c2) {
      for (var l2 = c2 * a2, h2 = u2[l2], f2 = 0, d2 = 0; a2 > d2; ++d2) {
        var v2 = u2[l2 + d2];
        v2 > h2 && (h2 = v2, f2 = d2);
      }
      s2[c2] = f2;
    }
    return o2;
  }, i2.prototype.cumsum = function(t3, n2, r2, e2) {
    if (oh(t3, "cumsum"), n2 !== t3.rank - 1) throw Error("backend.cumsum in CPU expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + n2);
    for (var i3 = _t(t3.dtype, "int32"), o2 = br(t3.shape, i3), a2 = this.readSync(o2.dataId), s2 = this.readSync(t3.dataId), u2 = t3.shape[t3.rank - 1], c2 = e2 ? (t4, n3) => t4 + u2 - n3 - 1 : (t4, n3) => t4 + n3, l2 = 0; s2.length > l2; l2 += u2) for (var h2 = 0; u2 > h2; h2++) {
      var f2 = c2(l2, h2);
      if (0 === h2) a2[f2] = r2 ? 0 : s2[f2];
      else {
        var d2 = c2(l2, h2 - 1);
        a2[f2] = r2 ? s2[d2] + a2[d2] : s2[f2] + a2[d2];
      }
    }
    return o2;
  }, i2.prototype.equal = function(t3, n2) {
    return oh([t3, n2], "equal"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 === n3 ? 1 : 0);
  }, i2.prototype.notEqual = function(t3, n2) {
    return oh([t3, n2], "notEqual"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 !== n3 ? 1 : 0);
  }, i2.prototype.less = function(t3, n2) {
    return oh([t3, n2], "less"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => n3 > t4 ? 1 : 0);
  }, i2.prototype.lessEqual = function(t3, n2) {
    return oh([t3, n2], "lessEqual"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 > n3 ? 0 : 1);
  }, i2.prototype.greater = function(t3, n2) {
    return oh([t3, n2], "greater"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 > n3 ? 1 : 0);
  }, i2.prototype.greaterEqual = function(t3, n2) {
    return oh([t3, n2], "greaterEqual"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => n3 > t4 ? 0 : 1);
  }, i2.prototype.logicalNot = function(t3) {
    oh(t3, "logicalNot");
    for (var n2 = this.readSync(t3.dataId), r2 = new Uint8Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = n2[e2] ? 0 : 1;
    return this.makeOutput(r2, t3.shape, "bool");
  }, i2.prototype.logicalAnd = function(t3, n2) {
    return oh([t3, n2], "logicalAnd"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 && n3);
  }, i2.prototype.logicalOr = function(t3, n2) {
    return oh([t3, n2], "logicalOr"), this.broadcastedBinaryOp(t3, n2, "bool", (t4, n3) => t4 || n3);
  }, i2.prototype.select = function(t3, n2, r2) {
    oh([t3, n2, r2], "select");
    for (var e2 = this.readSync(t3.dataId), i3 = this.readSync(n2.dataId), o2 = this.readSync(r2.dataId), a2 = br(n2.shape, _t(n2.dtype, r2.dtype)), s2 = this.readSync(a2.dataId), u2 = 0, c2 = 0 === t3.rank || t3.rank > 1 || 1 === n2.rank ? 1 : _(n2.shape.slice(1)), l2 = 0; e2.length > l2; l2++) for (var h2 = 0; c2 > h2; h2++) s2[u2++] = 1 === e2[l2] ? i3[l2] : o2[l2];
    return a2;
  }, i2.prototype.where = function(t3) {
    oh([t3], "where");
    var n2 = this.readSync(t3.dataId);
    return Ri(t3.shape, n2);
  }, i2.prototype.topk = function(t3, n2, r2) {
    return oh(t3, "topk"), Ei(this.readSync(t3.dataId), t3.shape, t3.dtype, n2);
  }, i2.prototype.min = function(t3, n2) {
    oh(t3, "min"), Jn("min", n2, t3.rank);
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], t3.dtype), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = s2[c2], h2 = 0; o2 > h2; ++h2) {
        var f2 = s2[c2 + h2];
        l2 > f2 && (l2 = f2);
      }
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.minimum = function(t3, n2) {
    return oh([t3, n2], "minimum"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => Math.min(t4, n3));
  }, i2.prototype.mod = function(t3, n2) {
    return oh([t3, n2], "mod"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => {
      var r2 = t4 % n3;
      return 0 > t4 && 0 > n3 || t4 >= 0 && n3 >= 0 ? r2 : (r2 + n3) % n3;
    });
  }, i2.prototype.max = function(t3, n2) {
    oh(t3, "max"), Jn("max", n2, t3.rank);
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], t3.dtype), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = s2[c2], h2 = 0; o2 > h2; ++h2) {
        var f2 = s2[c2 + h2];
        f2 > l2 && (l2 = f2);
      }
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.maximum = function(t3, n2) {
    return oh([t3, n2], "maximum"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => Math.max(t4, n3));
  }, i2.prototype.all = function(t3, n2) {
    oh(t3, "all"), Jn("all", n2, t3.rank);
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], t3.dtype), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = s2[c2], h2 = 0; o2 > h2; ++h2) l2 = l2 && s2[c2 + h2];
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.any = function(t3, n2) {
    oh(t3, "any"), Jn("any", n2, t3.rank);
    for (var r2 = Kn(t3.shape, n2), e2 = r2[1], i3 = br(r2[0], t3.dtype), o2 = _(e2), a2 = this.readSync(i3.dataId), s2 = this.readSync(t3.dataId), u2 = 0; a2.length > u2; ++u2) {
      for (var c2 = u2 * o2, l2 = s2[c2], h2 = 0; o2 > h2; ++h2) l2 = l2 || s2[c2 + h2];
      a2[u2] = l2;
    }
    return i3;
  }, i2.prototype.squaredDifference = function(t3, n2) {
    return oh([t3, n2], "squaredDifference"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => {
      var r2 = t4 - n3;
      return r2 * r2;
    });
  }, i2.prototype.ceil = function(t3) {
    oh(t3, "ceil");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.ceil(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.floor = function(t3) {
    oh(t3, "floor");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.floor(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.sign = function(t3) {
    oh(t3, "x");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = 0 > n2[e2] ? -1 : n2[e2] > 0 ? 1 : 0;
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.isNaN = function(t3) {
    oh(t3, "x");
    for (var n2 = this.readSync(t3.dataId), r2 = new Uint8Array(n2.length), e2 = 0; n2.length > e2; ++e2) Number.isNaN(n2[e2]) && (r2[e2] = 1);
    return this.makeOutput(r2, t3.shape, "bool");
  }, i2.prototype.isInf = function(t3) {
    oh(t3, "x");
    for (var n2 = this.readSync(t3.dataId), r2 = new Uint8Array(n2.length), e2 = 0; n2.length > e2; ++e2) Math.abs(n2[e2]) === 1 / 0 && (r2[e2] = 1);
    return this.makeOutput(r2, t3.shape, "bool");
  }, i2.prototype.isFinite = function(t3) {
    oh(t3, "x");
    for (var n2 = this.readSync(t3.dataId), r2 = new Uint8Array(n2.length), e2 = 0; n2.length > e2; ++e2) Number.isFinite(n2[e2]) && (r2[e2] = 1);
    return this.makeOutput(r2, t3.shape, "bool");
  }, i2.prototype.round = function(t3) {
    oh(t3, "round");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) {
      var i3 = Math.floor(n2[e2]);
      r2[e2] = 0.5 > n2[e2] - i3 ? Math.floor(n2[e2]) : n2[e2] - i3 > 0.5 ? Math.ceil(n2[e2]) : i3 % 2 == 0 ? i3 : i3 + 1;
    }
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.exp = function(t3) {
    oh(t3, "exp");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.exp(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.expm1 = function(t3) {
    oh(t3, "expm1");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.expm1(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.log = function(t3) {
    oh(t3, "log");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.log(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.log1p = function(t3) {
    oh(t3, "log1p");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.log1p(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.sqrt = function(t3) {
    oh(t3, "sqrt");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = Math.sqrt(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.rsqrt = function(t3) {
    oh(t3, "rsqrt");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = 1 / Math.sqrt(n2[e2]);
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.reciprocal = function(t3) {
    oh(t3, "reciprocal");
    for (var n2 = this.readSync(t3.dataId), r2 = new Float32Array(n2.length), e2 = 0; n2.length > e2; ++e2) r2[e2] = 1 / n2[e2];
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.linear = (t3) => t3, i2.prototype.relu = function(t3) {
    oh(t3, "relu");
    for (var n2 = br(t3.shape, t3.dtype), r2 = this.readSync(n2.dataId), e2 = this.readSync(t3.dataId), i3 = 0; e2.length > i3; ++i3) r2[i3] = Math.max(0, e2[i3]);
    return n2;
  }, i2.prototype.relu6 = function(t3) {
    oh(t3, "relu");
    for (var n2 = br(t3.shape, t3.dtype), r2 = this.readSync(n2.dataId), e2 = this.readSync(t3.dataId), i3 = 0; e2.length > i3; ++i3) r2[i3] = Math.min(Math.max(0, e2[i3]), 6);
    return n2;
  }, i2.prototype.prelu = function(t3, n2) {
    return oh([t3, n2], "prelu"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => 0 > t4 ? n3 * t4 : t4);
  }, i2.prototype.elu = function(t3) {
    oh(t3, "elu");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) {
      var i3 = r2[e2];
      n2[e2] = 0 > i3 ? Math.exp(i3) - 1 : i3;
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.eluDer = function(t3, n2) {
    oh([t3, n2], "eluDer");
    for (var r2 = new Float32Array(n2.size), e2 = this.readSync(n2.dataId), i3 = this.readSync(t3.dataId), o2 = 0; e2.length > o2; ++o2) {
      var a2 = e2[o2];
      r2[o2] = 1 > a2 ? i3[o2] * (a2 + 1) : i3[o2];
    }
    return this.makeOutput(r2, n2.shape, "float32");
  }, i2.prototype.selu = function(t3) {
    oh(t3, "selu");
    for (var n2 = Wa, r2 = za, e2 = new Float32Array(t3.size), i3 = this.readSync(t3.dataId), o2 = 0; i3.length > o2; ++o2) {
      var a2 = i3[o2];
      e2[o2] = 0 > a2 ? n2 * (Math.exp(a2) - 1) : r2 * a2;
    }
    return this.makeOutput(e2, t3.shape, "float32");
  }, i2.prototype.clip = function(t3, n2, r2) {
    oh(t3, "clip");
    for (var e2 = new Float32Array(t3.size), i3 = this.readSync(t3.dataId), o2 = 0; i3.length > o2; ++o2) {
      var a2 = i3[o2];
      e2[o2] = a2 > r2 ? r2 : n2 > a2 ? n2 : a2;
    }
    return this.makeOutput(e2, t3.shape, "float32");
  }, i2.prototype.abs = function(t3) {
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.abs(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.complexAbs = function(t3) {
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; t3.size > e2; ++e2) n2[e2] = Math.hypot(r2[2 * e2], r2[2 * e2 + 1]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.int = function(t3) {
    oh(t3, "int");
    for (var n2 = new Int32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = r2[e2];
    return this.makeOutput(n2, t3.shape, "int32");
  }, i2.prototype.sigmoid = function(t3) {
    oh(t3, "sigmoid");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = 1 / (1 + Math.exp(-r2[e2]));
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.softplus = function(t3) {
    oh(t3, "softplus");
    for (var n2 = -13.942385152878742, r2 = new Float32Array(t3.size), e2 = this.readSync(t3.dataId), i3 = 0; e2.length > i3; ++i3) {
      var o2 = e2[i3] > -n2, a2 = n2 > e2[i3], s2 = Math.exp(e2[i3]);
      r2[i3] = a2 ? s2 : o2 ? e2[i3] : Math.log(1 + s2);
    }
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.sin = function(t3) {
    oh(t3, "sin");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.sin(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.cos = function(t3) {
    oh(t3, "cos");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.cos(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.tan = function(t3) {
    oh(t3, "tan");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.tan(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.asin = function(t3) {
    oh(t3, "asin");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.asin(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.acos = function(t3) {
    oh(t3, "acos");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.acos(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.atan = function(t3) {
    oh(t3, "atan");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.atan(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.atan2 = function(t3, n2) {
    return oh([t3, n2], "atan2"), this.broadcastedBinaryOp(t3, n2, t3.dtype, (t4, n3) => Math.atan2(t4, n3));
  }, i2.prototype.sinh = function(t3) {
    oh(t3, "sinh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.sinh(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.cosh = function(t3) {
    oh(t3, "cosh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.cosh(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.tanh = function(t3) {
    oh(t3, "tanh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = A(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.asinh = function(t3) {
    oh(t3, "asinh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.asinh(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.acosh = function(t3) {
    oh(t3, "acosh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.acosh(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.atanh = function(t3) {
    oh(t3, "atanh");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) n2[e2] = Math.atanh(r2[e2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.erf = function(t3) {
    oh(t3, "erf");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), e2 = 0; r2.length > e2; ++e2) {
      var i3 = Math.sign(r2[e2]), o2 = Math.abs(r2[e2]), a2 = 1 / (1 + 0.3275911 * o2);
      n2[e2] = i3 * (1 - ((((1.061405429 * a2 - 1.453152027) * a2 + 1.421413741) * a2 - 0.284496736) * a2 + 0.254829592) * a2 * Math.exp(-o2 * o2));
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, i2.prototype.step = function(t3, n2) {
    void 0 === n2 && (n2 = 0), oh(t3, "step");
    for (var r2 = new Float32Array(t3.size), e2 = this.readSync(t3.dataId), i3 = 0; e2.length > i3; ++i3) {
      var o2 = e2[i3];
      r2[i3] = isNaN(o2) ? NaN : o2 > 0 ? 1 : n2;
    }
    return this.makeOutput(r2, t3.shape, "float32");
  }, i2.prototype.fusedConv2d = function(t3) {
    var n2 = t3.bias, r2 = t3.activation, e2 = t3.preluActivationWeights, i3 = this.conv2d(t3.input, t3.filter, t3.convInfo);
    return n2 && (i3 = this.add(i3, n2)), r2 && (i3 = ah(this, i3, r2, e2)), i3;
  }, i2.prototype.conv2d = function(t3, n2, r2) {
    oh([t3, n2], "conv2d");
    for (var e2 = r2.filterHeight, i3 = r2.filterWidth, o2 = r2.dilationHeight, a2 = r2.dilationWidth, s2 = r2.padInfo.left, u2 = r2.padInfo.top, c2 = "channelsLast" === r2.dataFormat, l2 = Gr(r2.outShape, t3.dtype), h2 = t3.strides[0], f2 = c2 ? t3.strides[1] : t3.strides[2], d2 = c2 ? t3.strides[2] : 1, v2 = c2 ? 1 : t3.strides[1], p2 = l2.strides[0], m2 = c2 ? l2.strides[1] : l2.strides[2], x2 = c2 ? l2.strides[2] : 1, b2 = c2 ? 1 : l2.strides[1], g2 = this.readSync(t3.dataId), w2 = this.readSync(n2.dataId), y2 = l2.values, C2 = 0; r2.batchSize > C2; ++C2) for (var _2 = C2 * h2, E2 = C2 * p2, R2 = 0; r2.outHeight > R2; ++R2) for (var A2 = E2 + R2 * m2, N2 = R2 * r2.strideHeight - u2, O2 = 0; e2 > O2; O2++) {
      var M2 = N2 + O2 * o2;
      if (M2 >= 0 && r2.inHeight > M2) for (var I2 = O2 * n2.strides[0], T2 = _2 + M2 * f2, S2 = 0; r2.outWidth > S2; ++S2) for (var D2 = A2 + S2 * x2, k2 = S2 * r2.strideWidth - s2, P2 = 0; i3 > P2; P2++) {
        var F2 = k2 + P2 * a2;
        if (F2 >= 0 && r2.inWidth > F2) for (var L2 = T2 + F2 * d2, B2 = I2 + P2 * n2.strides[1], V2 = 0; r2.inChannels > V2; ++V2) {
          for (var W2 = g2[L2 + V2 * v2], z2 = 0; r2.outChannels > z2; ++z2) y2[D2 + z2 * b2] += W2 * w2[B2 + z2];
          B2 += r2.outChannels;
        }
      }
    }
    return l2.toTensor();
  }, i2.prototype.conv3d = function(t3, n2, r2) {
    for (var e2 = r2.filterDepth, i3 = r2.filterHeight, o2 = r2.filterWidth, a2 = r2.dilationDepth, s2 = r2.dilationHeight, u2 = r2.dilationWidth, c2 = r2.padInfo.front, l2 = r2.padInfo.left, h2 = r2.padInfo.top, f2 = Gr(r2.outShape, t3.dtype), d2 = this.readSync(t3.dataId), v2 = this.readSync(n2.dataId), p2 = f2.values, m2 = 0; r2.batchSize > m2; ++m2) for (var x2 = m2 * t3.strides[0], b2 = m2 * f2.strides[0], g2 = 0; r2.outDepth > g2; ++g2) for (var w2 = b2 + g2 * f2.strides[1], y2 = g2 * r2.strideDepth - c2, C2 = 0; e2 > C2; C2++) {
      var _2 = y2 + C2 * a2;
      if (_2 >= 0 && r2.inDepth > _2) for (var E2 = C2 * n2.strides[0], R2 = x2 + _2 * t3.strides[1], A2 = 0; r2.outHeight > A2; ++A2) for (var N2 = w2 + A2 * f2.strides[2], O2 = A2 * r2.strideHeight - h2, M2 = 0; i3 > M2; M2++) {
        var I2 = O2 + M2 * s2;
        if (I2 >= 0 && r2.inHeight > I2) for (var T2 = E2 + M2 * n2.strides[1], S2 = R2 + I2 * t3.strides[2], D2 = 0; r2.outWidth > D2; ++D2) for (var k2 = N2 + D2 * r2.outChannels, P2 = D2 * r2.strideWidth - l2, F2 = 0; o2 > F2; F2++) {
          var L2 = P2 + F2 * u2;
          if (L2 >= 0 && r2.inWidth > L2) for (var B2 = S2 + L2 * r2.inChannels, V2 = T2 + F2 * n2.strides[2], W2 = 0; r2.inChannels > W2; ++W2) {
            for (var z2 = d2[B2 + W2], G2 = 0; r2.outChannels > G2; ++G2) p2[k2 + G2] += z2 * v2[V2 + G2];
            V2 += r2.outChannels;
          }
        }
      }
    }
    return f2.toTensor();
  }, i2.prototype.conv2dDerInput = function(t3, n2, r2) {
    oh([t3, n2], "conv2dDerInput");
    for (var e2 = Gr(r2.inShape, "float32"), i3 = e2.values, o2 = this.readSync(t3.dataId), a2 = this.readSync(n2.dataId), s2 = n2.strides, u2 = s2[0], c2 = s2[1], l2 = s2[2], h2 = r2.batchSize, f2 = r2.filterHeight, d2 = r2.filterWidth, v2 = r2.inChannels, p2 = r2.inHeight, m2 = r2.inWidth, x2 = r2.outChannels, b2 = r2.outHeight, g2 = r2.outWidth, w2 = r2.strideHeight, y2 = r2.strideWidth, C2 = f2 - 1 - r2.padInfo.top, _2 = d2 - 1 - r2.padInfo.left, E2 = "channelsLast" === r2.dataFormat, R2 = e2.strides[0], A2 = E2 ? e2.strides[1] : e2.strides[2], N2 = E2 ? e2.strides[2] : 1, O2 = E2 ? 1 : e2.strides[1], M2 = t3.strides[0], I2 = E2 ? t3.strides[1] : t3.strides[2], T2 = E2 ? t3.strides[2] : 1, S2 = E2 ? 1 : t3.strides[1], D2 = 0; h2 > D2; ++D2) for (var k2 = 0; v2 > k2; ++k2) for (var P2 = 0; p2 > P2; ++P2) for (var F2 = P2 - C2, L2 = Math.max(0, Math.ceil(F2 / w2)), B2 = Math.min(b2, (f2 + F2) / w2), V2 = 0; m2 > V2; ++V2) {
      for (var W2 = V2 - _2, z2 = Math.max(0, Math.ceil(W2 / y2)), G2 = Math.min(g2, (d2 + W2) / y2), U2 = 0, j2 = L2; B2 > j2; ++j2) for (var q2 = j2 * w2 - F2, H2 = z2; G2 > H2; ++H2) for (var X2 = M2 * D2 + I2 * j2 + T2 * H2, $2 = u2 * (f2 - 1 - q2) + c2 * (d2 - 1 - (H2 * y2 - W2)) + l2 * k2, K2 = 0; x2 > K2; ++K2) U2 += o2[X2 + S2 * K2] * a2[$2 + K2];
      i3[R2 * D2 + A2 * P2 + N2 * V2 + O2 * k2] = U2;
    }
    return e2.toTensor();
  }, i2.prototype.conv3dDerInput = function(t3, n2, r2) {
    for (var e2 = Gr(r2.inShape, "float32"), i3 = e2.values, o2 = e2.strides, a2 = o2[0], s2 = o2[1], u2 = o2[2], c2 = o2[3], l2 = this.readSync(t3.dataId), h2 = t3.strides, f2 = h2[0], d2 = h2[1], v2 = h2[2], p2 = h2[3], m2 = this.readSync(n2.dataId), x2 = n2.strides, b2 = x2[0], g2 = x2[1], w2 = x2[2], y2 = x2[3], C2 = r2.batchSize, _2 = r2.filterDepth, E2 = r2.filterHeight, R2 = r2.filterWidth, A2 = r2.inChannels, N2 = r2.inDepth, O2 = r2.inHeight, M2 = r2.inWidth, I2 = r2.outChannels, T2 = r2.outDepth, S2 = r2.outHeight, D2 = r2.outWidth, k2 = r2.strideDepth, P2 = r2.strideHeight, F2 = r2.strideWidth, L2 = _2 - 1 - r2.padInfo.front, B2 = E2 - 1 - r2.padInfo.top, V2 = R2 - 1 - r2.padInfo.left, W2 = 0; C2 > W2; ++W2) for (var z2 = 0; A2 > z2; ++z2) for (var G2 = 0; N2 > G2; ++G2) for (var U2 = G2 - L2, j2 = Math.max(0, Math.ceil(U2 / k2)), q2 = Math.min(T2, (_2 + U2) / k2), H2 = 0; O2 > H2; ++H2) for (var X2 = H2 - B2, $2 = Math.max(0, Math.ceil(X2 / P2)), K2 = Math.min(S2, (E2 + X2) / P2), Y2 = 0; M2 > Y2; ++Y2) {
      for (var J2 = Y2 - V2, Z2 = Math.max(0, Math.ceil(J2 / F2)), Q2 = Math.min(D2, (R2 + J2) / F2), tt2 = 0, nt2 = j2; q2 > nt2; ++nt2) for (var rt2 = nt2 * k2 - U2, et2 = $2; K2 > et2; ++et2) for (var it2 = et2 * P2 - X2, ot2 = Z2; Q2 > ot2; ++ot2) for (var at2 = f2 * W2 + d2 * nt2 + v2 * et2 + p2 * ot2, st2 = b2 * (_2 - 1 - rt2) + g2 * (E2 - 1 - it2) + w2 * (R2 - 1 - (ot2 * F2 - J2)) + y2 * z2, ut2 = 0; I2 > ut2; ++ut2) tt2 += l2[at2 + ut2] * m2[st2 + ut2];
      i3[a2 * W2 + s2 * G2 + u2 * H2 + c2 * Y2 + z2] = tt2;
    }
    return e2.toTensor();
  }, i2.prototype.conv2dDerFilter = function(t3, n2, r2) {
    oh([t3, n2], "conv2dDerFilter");
    for (var e2 = r2.strideHeight, i3 = r2.strideWidth, o2 = r2.filterHeight, a2 = r2.filterWidth, s2 = "channelsLast" === r2.dataFormat, u2 = Gr(r2.filterShape, "float32"), c2 = r2.padInfo.left, l2 = r2.padInfo.top, h2 = this.bufferSync(t3), f2 = this.bufferSync(n2), d2 = 0; o2 > d2; ++d2) for (var v2 = Math.max(0, Math.ceil((l2 - d2) / e2)), p2 = Math.min(r2.outHeight, (r2.inHeight + l2 - d2) / e2), m2 = 0; a2 > m2; ++m2) for (var x2 = Math.max(0, Math.ceil((c2 - m2) / i3)), b2 = Math.min(r2.outWidth, (r2.inWidth + c2 - m2) / i3), g2 = 0; r2.inChannels > g2; ++g2) for (var w2 = 0; r2.outChannels > w2; ++w2) {
      for (var y2 = 0, C2 = 0; r2.batchSize > C2; ++C2) for (var _2 = v2; p2 > _2; ++_2) for (var E2 = d2 + _2 * e2 - l2, R2 = x2; b2 > R2; ++R2) {
        var A2 = m2 + R2 * i3 - c2;
        y2 += s2 ? h2.get(C2, E2, A2, g2) * f2.get(C2, _2, R2, w2) : h2.get(C2, g2, E2, A2) * f2.get(C2, w2, _2, R2);
      }
      u2.set(y2, d2, m2, g2, w2);
    }
    return u2.toTensor();
  }, i2.prototype.conv3dDerFilter = function(t3, n2, r2) {
    for (var e2 = r2.strideDepth, i3 = r2.strideHeight, o2 = r2.strideWidth, a2 = r2.filterDepth, s2 = r2.filterHeight, u2 = r2.filterWidth, c2 = Gr(r2.filterShape, "float32"), l2 = c2.values, h2 = c2.strides, f2 = h2[0], d2 = h2[1], v2 = h2[2], p2 = h2[3], m2 = this.readSync(n2.dataId), x2 = n2.strides, b2 = x2[0], g2 = x2[1], w2 = x2[2], y2 = x2[3], C2 = this.readSync(t3.dataId), _2 = t3.strides, E2 = _2[0], R2 = _2[1], A2 = _2[2], N2 = _2[3], O2 = r2.padInfo.front, M2 = r2.padInfo.left, I2 = r2.padInfo.top, T2 = 0; a2 > T2; ++T2) for (var S2 = Math.max(0, Math.ceil((O2 - T2) / e2)), D2 = Math.min(r2.outDepth, (r2.inDepth + O2 - T2) / e2), k2 = T2 * f2, P2 = 0; s2 > P2; ++P2) for (var F2 = Math.max(0, Math.ceil((I2 - P2) / i3)), L2 = Math.min(r2.outHeight, (r2.inHeight + I2 - P2) / i3), B2 = P2 * d2 + k2, V2 = 0; u2 > V2; ++V2) for (var W2 = Math.max(0, Math.ceil((M2 - V2) / o2)), z2 = Math.min(r2.outWidth, (r2.inWidth + M2 - V2) / o2), G2 = V2 * v2 + B2, U2 = 0; r2.inChannels > U2; ++U2) for (var j2 = U2 * p2 + G2, q2 = 0; r2.outChannels > q2; ++q2) {
      for (var H2 = 0, X2 = 0; r2.batchSize > X2; ++X2) for (var $2 = X2 * E2, K2 = X2 * b2, Y2 = S2; D2 > Y2; ++Y2) for (var J2 = (T2 + Y2 * e2 - O2) * R2 + $2, Z2 = Y2 * g2 + K2, Q2 = F2; L2 > Q2; ++Q2) for (var tt2 = (P2 + Q2 * i3 - I2) * A2 + J2, nt2 = Q2 * w2 + Z2, rt2 = W2; z2 > rt2; ++rt2) H2 += C2[(V2 + rt2 * o2 - M2) * N2 + tt2 + U2] * m2[rt2 * y2 + nt2 + q2];
      l2[j2 + q2] = H2;
    }
    return c2.toTensor();
  }, i2.prototype.fusedDepthwiseConv2D = function(t3) {
    var n2 = t3.bias, r2 = t3.activation, e2 = t3.preluActivationWeights, i3 = this.depthwiseConv2D(t3.input, t3.filter, t3.convInfo);
    return n2 && (i3 = this.add(i3, n2)), r2 && (i3 = ah(this, i3, r2, e2)), i3;
  }, i2.prototype.depthwiseConv2D = function(t3, n2, r2) {
    oh([t3, n2], "depthwiseConv2D");
    for (var e2 = r2.filterHeight, i3 = r2.filterWidth, o2 = r2.dilationHeight, a2 = r2.dilationWidth, s2 = r2.padInfo.left, u2 = r2.padInfo.top, c2 = r2.outChannels / r2.inChannels, l2 = Gr(r2.outShape, t3.dtype), h2 = this.readSync(t3.dataId), f2 = this.readSync(n2.dataId), d2 = l2.values, v2 = 0; r2.batchSize > v2; ++v2) for (var p2 = v2 * t3.strides[0], m2 = v2 * l2.strides[0], x2 = 0; r2.outHeight > x2; ++x2) for (var b2 = m2 + x2 * l2.strides[1], g2 = x2 * r2.strideHeight - s2, w2 = 0; e2 > w2; ++w2) {
      var y2 = g2 + w2 * o2;
      if (y2 >= 0 && r2.inHeight > y2) for (var C2 = w2 * n2.strides[0], _2 = p2 + y2 * t3.strides[1], E2 = 0; r2.outWidth > E2; ++E2) for (var R2 = b2 + E2 * l2.strides[2], A2 = E2 * r2.strideWidth - u2, N2 = 0; i3 > N2; ++N2) {
        var O2 = A2 + N2 * a2;
        if (O2 >= 0 && r2.inWidth > O2) for (var M2 = _2 + O2 * r2.inChannels, I2 = R2, T2 = C2 + N2 * n2.strides[1], S2 = 0; r2.inChannels > S2; ++S2) {
          for (var D2 = h2[M2 + S2], k2 = 0; c2 > k2; ++k2) d2[I2 + k2] += D2 * f2[T2 + k2];
          I2 += c2, T2 += c2;
        }
      }
    }
    return l2.toTensor();
  }, i2.prototype.depthwiseConv2DDerInput = function(t3, n2, r2) {
    oh([t3, n2], "depthwiseConv2DDerInput");
    for (var e2 = Gr(r2.inShape, "float32"), i3 = e2.values, o2 = e2.strides, a2 = o2[0], s2 = o2[1], u2 = o2[2], c2 = this.readSync(t3.dataId), l2 = t3.strides, h2 = l2[0], f2 = l2[1], d2 = l2[2], v2 = this.readSync(n2.dataId), p2 = n2.strides, m2 = p2[0], x2 = p2[1], b2 = p2[2], g2 = r2.batchSize, w2 = r2.filterHeight, y2 = r2.filterWidth, C2 = r2.inChannels, _2 = r2.inHeight, E2 = r2.inWidth, R2 = r2.outHeight, A2 = r2.outWidth, N2 = r2.strideHeight, O2 = r2.strideWidth, M2 = w2 - 1 - r2.padInfo.top, I2 = y2 - 1 - r2.padInfo.left, T2 = r2.outChannels / C2, S2 = 0; g2 > S2; ++S2) for (var D2 = 0; C2 > D2; ++D2) for (var k2 = 0; _2 > k2; ++k2) for (var P2 = k2 - M2, F2 = Math.max(0, Math.ceil(P2 / N2)), L2 = Math.min(R2, (w2 + P2) / N2), B2 = 0; E2 > B2; ++B2) {
      for (var V2 = B2 - I2, W2 = Math.max(0, Math.ceil(V2 / O2)), z2 = Math.min(A2, (y2 + V2) / O2), G2 = 0, U2 = F2; L2 > U2; ++U2) for (var j2 = U2 * N2 - P2, q2 = W2; z2 > q2; ++q2) for (var H2 = h2 * S2 + f2 * U2 + d2 * q2, X2 = m2 * (w2 - 1 - j2) + x2 * (y2 - 1 - (q2 * O2 - V2)) + b2 * D2, $2 = 0; T2 > $2; ++$2) G2 += c2[H2 + (D2 * T2 + $2)] * v2[X2 + $2];
      i3[a2 * S2 + s2 * k2 + u2 * B2 + D2] = G2;
    }
    return e2.toTensor();
  }, i2.prototype.depthwiseConv2DDerFilter = function(t3, n2, r2) {
    oh([t3, n2], "depthwiseConv2DDerFilter");
    for (var e2 = r2.strideHeight, i3 = r2.strideWidth, o2 = r2.filterHeight, a2 = r2.filterWidth, s2 = Gr(r2.filterShape, "float32"), u2 = r2.padInfo.left, c2 = r2.padInfo.top, l2 = r2.outChannels / r2.inChannels, h2 = this.bufferSync(t3), f2 = this.bufferSync(n2), d2 = 0; o2 > d2; ++d2) for (var v2 = Math.max(0, Math.ceil((c2 - d2) / e2)), p2 = Math.min(r2.outHeight, (r2.inHeight + c2 - d2) / e2), m2 = 0; a2 > m2; ++m2) for (var x2 = Math.max(0, Math.ceil((u2 - m2) / i3)), b2 = Math.min(r2.outWidth, (r2.inWidth + u2 - m2) / i3), g2 = 0; r2.outChannels > g2; ++g2) {
      for (var w2 = Math.trunc(g2 / l2), y2 = g2 % l2, C2 = 0, _2 = 0; r2.batchSize > _2; ++_2) for (var E2 = v2; p2 > E2; ++E2) for (var R2 = d2 + E2 * e2 - c2, A2 = x2; b2 > A2; ++A2) C2 += h2.get(_2, R2, m2 + A2 * i3 - u2, w2) * f2.get(_2, E2, A2, g2);
      s2.set(C2, d2, m2, w2, y2);
    }
    return s2.toTensor();
  }, i2.prototype.tile = function(t3, n2) {
    return oh(t3, "tile"), _i(this.bufferSync(t3), n2);
  }, i2.prototype.pad = function(t3, n2, r2) {
    oh(t3, "pad");
    var e2 = n2.map((n3, r3) => n3[0] + t3.shape[r3] + n3[1]), i3 = n2.map((t4) => t4[0]), o2 = this.bufferSync(t3), a2 = Gr(e2, t3.dtype);
    0 !== r2 && a2.values.fill(r2);
    for (var s2 = 0; t3.size > s2; s2++) {
      var u2 = o2.indexToLoc(s2), c2 = u2.map((t4, n3) => t4 + i3[n3]);
      a2.set.apply(a2, [o2.get.apply(o2, u2)].concat(c2));
    }
    return a2.toTensor();
  }, i2.prototype.transpose = function(t3, n2) {
    oh(t3, "transpose");
    for (var r2 = Array(t3.rank), e2 = 0; r2.length > e2; e2++) r2[e2] = t3.shape[n2[e2]];
    var i3 = this.readSync(t3.dataId), o2 = Gr(r2, t3.dtype), a2 = this.bufferSync(t3);
    for (e2 = 0; t3.size > e2; ++e2) {
      for (var s2 = a2.indexToLoc(e2), u2 = Array(s2.length), c2 = 0; u2.length > c2; c2++) u2[c2] = s2[n2[c2]];
      var l2 = o2.locToIndex(u2);
      o2.values[l2] = i3[e2];
    }
    return o2.toTensor();
  }, i2.prototype.gather = function(t3, n2, r2) {
    oh([t3, n2], "gather");
    var e2 = t3.shape.slice(), i3 = this.readSync(n2.dataId);
    e2[r2] = i3.length;
    for (var o2 = Gr(e2, t3.dtype), a2 = this.bufferSync(t3), s2 = 0; o2.size > s2; ++s2) {
      var u2 = o2.indexToLoc(s2), c2 = u2.slice();
      c2[r2] = i3[u2[r2]];
      var l2 = a2.locToIndex(c2);
      o2.values[s2] = a2.values[l2];
    }
    return o2.toTensor();
  }, i2.prototype.batchToSpaceND = (t3, n2, r2) => {
    oh([t3], "batchToSpaceND");
    var e2 = n2.reduce((t4, n3) => t4 * n3), i3 = xe(t3.shape, n2, e2), o2 = be(i3.length, n2.length), a2 = ge(t3.shape, n2, e2), s2 = we(r2, n2.length), u2 = ye(a2, r2, n2.length);
    return t3.reshape(i3).transpose(o2).reshape(a2).slice(s2, u2);
  }, i2.prototype.spaceToBatchND = (t3, n2, r2) => {
    oh([t3], "spaceToBatchND");
    var e2 = n2.reduce((t4, n3) => t4 * n3), i3 = [[0, 0]];
    i3.push.apply(i3, r2);
    for (var o2 = 1 + n2.length; t3.shape.length > o2; ++o2) i3.push([0, 0]);
    var a2 = t3.pad(i3), s2 = xe(a2.shape, n2, e2, false), u2 = be(s2.length, n2.length, false), c2 = ge(a2.shape, n2, e2, false);
    return a2.reshape(s2).transpose(u2).reshape(c2);
  }, i2.prototype.pool = function(t3, n2, r2) {
    oh(t3, "pool");
    for (var e2 = n2.strideHeight, i3 = n2.strideWidth, o2 = n2.dilationHeight, a2 = n2.dilationWidth, s2 = n2.effectiveFilterHeight, u2 = n2.effectiveFilterWidth, c2 = n2.padInfo.top, l2 = n2.padInfo.left, h2 = "max" === r2 ? -Infinity : Infinity, f2 = this.readSync(t3.dataId), d2 = Gr(n2.outShape, t3.dtype), v2 = d2.values, p2 = n2.outShape[1] * n2.outShape[2] * n2.outShape[3], m2 = n2.outShape[2] * n2.outShape[3], x2 = n2.outShape[3], b2 = 0; n2.batchSize > b2; ++b2) for (var g2 = b2 * p2, w2 = b2 * t3.strides[0], y2 = 0; n2.inChannels > y2; ++y2) for (var C2 = 0; n2.outHeight > C2; ++C2) for (var _2 = C2 * e2 - c2, E2 = Math.max(0, _2), R2 = Math.min(n2.inHeight, s2 + _2), A2 = g2 + C2 * m2, N2 = 0; n2.outWidth > N2; ++N2) {
      for (var O2 = N2 * i3 - l2, M2 = Math.max(0, O2), I2 = Math.min(n2.inWidth, u2 + O2), T2 = h2, S2 = 0, D2 = 0, k2 = E2; R2 > k2; k2 += o2) {
        for (var P2 = w2 + k2 * t3.strides[1], F2 = M2; I2 > F2; F2 += a2) {
          var L2 = f2[P2 + F2 * t3.strides[2] + y2];
          "max" === r2 && L2 > T2 ? T2 = L2 : "avg" === r2 && (S2 += L2, D2++);
        }
        if (isNaN(T2)) break;
      }
      v2[A2 + N2 * x2 + y2] = "avg" === r2 ? S2 / D2 : T2;
    }
    return d2.toTensor();
  }, i2.prototype.maxPool = function(t3, n2) {
    return this.pool(t3, n2, "max");
  }, i2.prototype.maxPoolPositions = function(t3, n2) {
    for (var r2 = Gr(n2.outShape, "int32"), e2 = n2.strideHeight, i3 = n2.strideWidth, o2 = n2.dilationHeight, a2 = n2.dilationWidth, s2 = n2.effectiveFilterHeight, u2 = n2.effectiveFilterWidth, c2 = n2.padInfo.top, l2 = n2.padInfo.left, h2 = this.bufferSync(t3), f2 = 0; n2.batchSize > f2; ++f2) for (var d2 = 0; n2.inChannels > d2; ++d2) for (var v2 = 0; n2.outHeight > v2; ++v2) {
      for (var p2 = v2 * e2 - c2, m2 = p2; 0 > m2; ) m2 += o2;
      for (var x2 = Math.min(n2.inHeight, s2 + p2), b2 = 0; n2.outWidth > b2; ++b2) {
        for (var g2 = b2 * i3 - l2, w2 = g2; 0 > w2; ) w2 += a2;
        for (var y2 = Math.min(n2.inWidth, u2 + g2), C2 = -Infinity, _2 = -1, E2 = m2; x2 > E2; E2 += o2) for (var R2 = E2 - p2, A2 = w2; y2 > A2; A2 += a2) {
          var N2 = A2 - g2, O2 = h2.get(f2, E2, A2, d2);
          O2 > C2 && (C2 = O2, _2 = R2 * u2 + N2);
        }
        r2.set(_2, f2, v2, b2, d2);
      }
    }
    return r2.toTensor();
  }, i2.prototype.maxPoolBackprop = function(t3, n2, r2, e2) {
    oh([n2, r2], "maxPoolBackprop");
    for (var i3 = this.maxPoolPositions(n2, e2), o2 = e2.strideHeight, a2 = e2.strideWidth, s2 = e2.dilationHeight, u2 = e2.dilationWidth, c2 = e2.effectiveFilterHeight, l2 = e2.effectiveFilterWidth, h2 = l2 - 1 - e2.padInfo.left, f2 = c2 - 1 - e2.padInfo.top, d2 = Gr(n2.shape, "float32"), v2 = this.bufferSync(i3), p2 = this.bufferSync(t3), m2 = 0; e2.batchSize > m2; ++m2) for (var x2 = 0; e2.inChannels > x2; ++x2) for (var b2 = 0; e2.inHeight > b2; ++b2) for (var g2 = 0; e2.inWidth > g2; ++g2) {
      for (var w2 = b2 - f2, y2 = g2 - h2, C2 = 0, _2 = 0; c2 > _2; _2 += s2) {
        var E2 = (w2 + _2) / o2;
        if (E2 >= 0 && e2.outHeight > E2 && Math.floor(E2) === E2) for (var R2 = 0; l2 > R2; R2 += u2) {
          var A2 = (y2 + R2) / a2;
          if (A2 >= 0 && e2.outWidth > A2 && Math.floor(A2) === A2) {
            var N2 = c2 * l2 - 1 - v2.get(m2, E2, A2, x2) === _2 * l2 + R2 ? 1 : 0;
            0 !== N2 && (C2 += p2.get(m2, E2, A2, x2) * N2);
          }
        }
      }
      d2.set(C2, m2, b2, g2, x2);
    }
    return d2.toTensor();
  }, i2.prototype.avgPoolBackprop = function(t3, n2, r2) {
    oh([t3, n2], "avgPoolBackprop");
    for (var e2 = r2.strideHeight, i3 = r2.strideWidth, o2 = r2.filterHeight, a2 = r2.filterWidth, s2 = r2.dilationHeight, u2 = r2.dilationWidth, c2 = r2.effectiveFilterHeight, l2 = r2.effectiveFilterWidth, h2 = l2 - 1 - r2.padInfo.left, f2 = c2 - 1 - r2.padInfo.top, d2 = Gr(n2.shape, "float32"), v2 = 1 / (o2 * a2), p2 = this.bufferSync(t3), m2 = 0; r2.batchSize > m2; ++m2) for (var x2 = 0; r2.inChannels > x2; ++x2) for (var b2 = 0; r2.inHeight > b2; ++b2) for (var g2 = 0; r2.inWidth > g2; ++g2) {
      for (var w2 = b2 - f2, y2 = g2 - h2, C2 = 0, _2 = 0; c2 > _2; _2 += s2) {
        var E2 = (w2 + _2) / e2;
        if (E2 >= 0 && r2.outHeight > E2 && Math.floor(E2) === E2) for (var R2 = 0; l2 > R2; R2 += u2) {
          var A2 = (y2 + R2) / i3;
          A2 >= 0 && r2.outWidth > A2 && Math.floor(A2) === A2 && (C2 += p2.get(m2, E2, A2, x2));
        }
      }
      d2.set(C2 * v2, m2, b2, g2, x2);
    }
    return d2.toTensor();
  }, i2.prototype.pool3d = function(t3, n2, r2) {
    oh(t3, "pool3d");
    for (var e2 = n2.strideDepth, i3 = n2.strideHeight, o2 = n2.strideWidth, a2 = n2.dilationDepth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.effectiveFilterDepth, l2 = n2.effectiveFilterHeight, h2 = n2.effectiveFilterWidth, f2 = n2.padInfo.front, d2 = n2.padInfo.top, v2 = n2.padInfo.left, p2 = "max" === r2 ? -Infinity : Infinity, m2 = this.readSync(t3.dataId), x2 = Gr(n2.outShape, t3.dtype), b2 = x2.values, g2 = n2.outShape[1] * n2.outShape[2] * n2.outShape[3] * n2.outShape[4], w2 = n2.outShape[2] * n2.outShape[3] * n2.outShape[4], y2 = n2.outShape[3] * n2.outShape[4], C2 = n2.outShape[4], _2 = 0; n2.batchSize > _2; ++_2) for (var E2 = _2 * g2, R2 = _2 * t3.strides[0], A2 = 0; n2.inChannels > A2; ++A2) for (var N2 = 0; n2.outDepth > N2; ++N2) {
      for (var O2 = N2 * e2 - f2, M2 = O2; 0 > M2; ) M2 += a2;
      for (var I2 = Math.min(n2.inDepth, c2 + O2), T2 = E2 + N2 * w2, S2 = 0; n2.outHeight > S2; ++S2) {
        for (var D2 = S2 * i3 - d2, k2 = D2; 0 > k2; ) k2 += s2;
        for (var P2 = Math.min(n2.inHeight, l2 + D2), F2 = T2 + S2 * y2, L2 = 0; n2.outWidth > L2; ++L2) {
          for (var B2 = L2 * o2 - v2, V2 = B2; 0 > V2; ) V2 += u2;
          for (var W2 = Math.min(n2.inWidth, h2 + B2), z2 = F2 + L2 * C2, G2 = p2, U2 = 0, j2 = 0, q2 = M2; I2 > q2; q2 += a2) {
            for (var H2 = R2 + q2 * t3.strides[1], X2 = k2; P2 > X2; X2 += s2) {
              for (var $2 = H2 + X2 * t3.strides[2], K2 = V2; W2 > K2; K2 += u2) {
                var Y2 = m2[$2 + K2 * t3.strides[3] + A2];
                if ("max" === r2 && Y2 > G2 ? G2 = Y2 : "avg" === r2 && (U2 += Y2, j2++), isNaN(G2)) break;
              }
              if (isNaN(G2)) break;
            }
            if (isNaN(G2)) break;
          }
          b2[z2 + A2] = "avg" === r2 ? U2 / j2 : G2;
        }
      }
    }
    return x2.toTensor();
  }, i2.prototype.avgPool3d = function(t3, n2) {
    return oh(t3, "avgPool3d"), this.pool3d(t3, n2, "avg").toFloat();
  }, i2.prototype.avgPool3dBackprop = function(t3, n2, r2) {
    oh([t3, n2], "avgPool3dBackprop");
    for (var e2 = r2.strideDepth, i3 = r2.strideHeight, o2 = r2.strideWidth, a2 = r2.filterDepth, s2 = r2.filterHeight, u2 = r2.filterWidth, c2 = r2.dilationDepth, l2 = r2.dilationHeight, h2 = r2.dilationWidth, f2 = r2.effectiveFilterDepth, d2 = r2.effectiveFilterHeight, v2 = r2.effectiveFilterWidth, p2 = f2 - 1 - r2.padInfo.front, m2 = v2 - 1 - r2.padInfo.left, x2 = d2 - 1 - r2.padInfo.top, b2 = Gr(n2.shape, "float32"), g2 = 1 / (a2 * s2 * u2), w2 = this.bufferSync(t3), y2 = 0; r2.batchSize > y2; ++y2) for (var C2 = 0; r2.inChannels > C2; ++C2) for (var _2 = 0; r2.inDepth > _2; ++_2) for (var E2 = 0; r2.inHeight > E2; ++E2) for (var R2 = 0; r2.inWidth > R2; ++R2) {
      for (var A2 = _2 - p2, N2 = E2 - x2, O2 = R2 - m2, M2 = 0, I2 = 0; f2 > I2; I2 += c2) {
        var T2 = (A2 + I2) / e2;
        if (T2 >= 0 && r2.outDepth > T2 && Math.floor(T2) === T2) for (var S2 = 0; d2 > S2; S2 += l2) {
          var D2 = (N2 + S2) / i3;
          if (D2 >= 0 && r2.outHeight > D2 && Math.floor(D2) === D2) for (var k2 = 0; v2 > k2; k2 += h2) {
            var P2 = (O2 + k2) / o2;
            P2 >= 0 && r2.outWidth > P2 && Math.floor(P2) === P2 && (M2 += w2.get(y2, T2, D2, P2, C2));
          }
        }
      }
      b2.set(M2 * g2, y2, _2, E2, R2, C2);
    }
    return b2.toTensor();
  }, i2.prototype.maxPool3d = function(t3, n2) {
    return oh(t3, "maxPool3d"), this.pool3d(t3, n2, "max").toFloat();
  }, i2.prototype.maxPool3dPositions = function(t3, n2) {
    for (var r2 = Gr(n2.outShape, "int32"), e2 = n2.strideDepth, i3 = n2.strideHeight, o2 = n2.strideWidth, a2 = n2.dilationDepth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.effectiveFilterDepth, l2 = n2.effectiveFilterHeight, h2 = n2.effectiveFilterWidth, f2 = n2.padInfo.front, d2 = n2.padInfo.top, v2 = n2.padInfo.left, p2 = this.bufferSync(t3), m2 = 0; n2.batchSize > m2; ++m2) for (var x2 = 0; n2.inChannels > x2; ++x2) for (var b2 = 0; n2.outDepth > b2; ++b2) {
      for (var g2 = b2 * e2 - f2, w2 = g2; 0 > w2; ) w2 += a2;
      for (var y2 = Math.min(n2.inDepth, c2 + g2), C2 = 0; n2.outHeight > C2; ++C2) {
        for (var _2 = C2 * i3 - d2, E2 = _2; 0 > E2; ) E2 += s2;
        for (var R2 = Math.min(n2.inHeight, l2 + _2), A2 = 0; n2.outWidth > A2; ++A2) {
          for (var N2 = A2 * o2 - v2, O2 = N2; 0 > O2; ) O2 += u2;
          for (var M2 = Math.min(n2.inWidth, h2 + N2), I2 = -Infinity, T2 = -1, S2 = w2; y2 > S2; S2 += a2) for (var D2 = S2 - g2, k2 = E2; R2 > k2; k2 += s2) for (var P2 = k2 - _2, F2 = O2; M2 > F2; F2 += u2) {
            var L2 = F2 - N2, B2 = p2.get(m2, S2, k2, F2, x2);
            B2 >= I2 && (I2 = B2, T2 = D2 * l2 * h2 + P2 * l2 + L2);
          }
          r2.set(T2, m2, b2, C2, A2, x2);
        }
      }
    }
    return r2.toTensor();
  }, i2.prototype.maxPool3dBackprop = function(t3, n2, r2, e2) {
    oh([n2, r2], "maxPool3dBackprop");
    for (var i3 = this.maxPool3dPositions(n2, e2), o2 = e2.strideDepth, a2 = e2.strideHeight, s2 = e2.strideWidth, u2 = e2.dilationDepth, c2 = e2.dilationHeight, l2 = e2.dilationWidth, h2 = e2.effectiveFilterDepth, f2 = e2.effectiveFilterHeight, d2 = e2.effectiveFilterWidth, v2 = h2 - 1 - e2.padInfo.front, p2 = d2 - 1 - e2.padInfo.left, m2 = f2 - 1 - e2.padInfo.top, x2 = Gr(n2.shape, "float32"), b2 = this.bufferSync(i3), g2 = this.bufferSync(t3), w2 = 0; e2.batchSize > w2; ++w2) for (var y2 = 0; e2.inChannels > y2; ++y2) for (var C2 = 0; e2.inDepth > C2; ++C2) for (var _2 = 0; e2.inHeight > _2; ++_2) for (var E2 = 0; e2.inWidth > E2; ++E2) {
      for (var R2 = C2 - v2, A2 = _2 - m2, N2 = E2 - p2, O2 = 0, M2 = 0; h2 > M2; M2 += u2) {
        var I2 = (R2 + M2) / o2;
        if (I2 >= 0 && e2.outDepth > I2 && Math.floor(I2) === I2) for (var T2 = 0; f2 > T2; T2 += c2) {
          var S2 = (A2 + T2) / a2;
          if (S2 >= 0 && e2.outHeight > S2 && Math.floor(S2) === S2) for (var D2 = 0; d2 > D2; D2 += l2) {
            var k2 = (N2 + D2) / s2;
            if (k2 >= 0 && e2.outWidth > k2 && Math.floor(k2) === k2) {
              var P2 = h2 * f2 * d2 - 1 - b2.get(w2, I2, S2, k2, y2) === M2 * f2 * d2 + T2 * d2 + D2 ? 1 : 0;
              0 !== P2 && (O2 += g2.get(w2, I2, S2, k2, y2) * P2);
            }
          }
        }
      }
      x2.set(O2, w2, C2, _2, E2, y2);
    }
    return x2.toTensor();
  }, i2.prototype.cast = function(t3, n2) {
    return ai(t3, n2, this);
  }, i2.prototype.reshape = (t3, n2) => si(t3, n2), i2.prototype.avgPool = function(t3, n2) {
    return oh(t3, "avgPool"), this.pool(t3, n2, "avg").toFloat();
  }, i2.prototype.resizeBilinear = function(t3, n2, r2, e2) {
    oh(t3, "resizeBilinear");
    for (var i3 = t3.shape, o2 = i3[0], a2 = i3[1], s2 = i3[2], u2 = i3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(_([o2, n2, r2, u2])), h2 = [e2 && n2 > 1 ? a2 - 1 : a2, e2 && r2 > 1 ? s2 - 1 : s2], f2 = [e2 && n2 > 1 ? n2 - 1 : n2, e2 && r2 > 1 ? r2 - 1 : r2], d2 = 0, v2 = h2[0] / f2[0], p2 = h2[1] / f2[1], m2 = 0; o2 > m2; m2++) for (var x2 = 0; n2 > x2; x2++) for (var b2 = v2 * x2, g2 = Math.floor(b2), w2 = b2 - g2, y2 = m2 * t3.strides[0] + g2 * t3.strides[1], C2 = m2 * t3.strides[0] + Math.min(a2 - 1, Math.ceil(b2)) * t3.strides[1], E2 = 0; r2 > E2; E2++) for (var R2 = p2 * E2, A2 = Math.floor(R2), N2 = R2 - A2, O2 = Math.min(s2 - 1, Math.ceil(R2)), M2 = y2 + A2 * t3.strides[2], I2 = C2 + A2 * t3.strides[2], T2 = y2 + O2 * t3.strides[2], S2 = C2 + O2 * t3.strides[2], D2 = 0; u2 > D2; D2++) {
      var k2 = c2[M2 + D2], P2 = c2[I2 + D2], F2 = k2 + (c2[T2 + D2] - k2) * N2;
      l2[d2++] = F2 + (P2 + (c2[S2 + D2] - P2) * N2 - F2) * w2;
    }
    return sr(l2, [o2, n2, r2, u2]);
  }, i2.prototype.resizeBilinearBackprop = function(t3, n2, r2) {
    oh([t3, n2], "resizeBilinearBackprop");
    for (var e2 = n2.shape, i3 = e2[0], o2 = e2[1], a2 = e2[2], s2 = e2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(i3 * o2 * a2 * s2), f2 = [r2 && c2 > 1 ? o2 - 1 : o2, r2 && l2 > 1 ? a2 - 1 : a2], d2 = [r2 && c2 > 1 ? c2 - 1 : c2, r2 && l2 > 1 ? l2 - 1 : l2], v2 = f2[0] / d2[0], p2 = f2[1] / d2[1], m2 = this.readSync(t3.dataId), x2 = 0, b2 = 0; i3 > b2; b2++) for (var g2 = b2 * n2.strides[0], w2 = 0; c2 > w2; w2++) for (var y2 = w2 * v2, C2 = Math.floor(y2), _2 = g2 + C2 * n2.strides[1], E2 = g2 + Math.min(Math.ceil(y2), o2 - 1) * n2.strides[1], R2 = y2 - C2, A2 = 1 - R2, N2 = 0; l2 > N2; N2++) for (var O2 = N2 * p2, M2 = Math.floor(O2), I2 = Math.min(Math.ceil(O2), a2 - 1), T2 = O2 - M2, S2 = 1 - T2, D2 = _2 + M2 * n2.strides[2], k2 = _2 + I2 * n2.strides[2], P2 = E2 + M2 * n2.strides[2], F2 = E2 + I2 * n2.strides[2], L2 = A2 * S2, B2 = A2 * T2, V2 = R2 * S2, W2 = R2 * T2, z2 = 0; s2 > z2; z2++) {
      var G2 = m2[x2++];
      h2[D2 + z2] += G2 * L2, h2[k2 + z2] += G2 * B2, h2[P2 + z2] += G2 * V2, h2[F2 + z2] += G2 * W2;
    }
    return dr(h2, [i3, a2, o2, s2], n2.dtype);
  }, i2.prototype.resizeNearestNeighbor = function(t3, n2, r2, e2) {
    oh(t3, "resizeNearestNeighbor");
    for (var i3 = t3.shape, o2 = i3[0], a2 = i3[1], s2 = i3[2], u2 = i3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(o2 * n2 * r2 * u2), h2 = [e2 && n2 > 1 ? a2 - 1 : a2, e2 && r2 > 1 ? s2 - 1 : s2], f2 = [e2 && n2 > 1 ? n2 - 1 : n2, e2 && r2 > 1 ? r2 - 1 : r2], d2 = h2[0] / f2[0], v2 = h2[1] / f2[1], p2 = 0, m2 = 0; o2 > m2; m2++) for (var x2 = m2 * t3.strides[0], b2 = 0; n2 > b2; b2++) for (var g2 = d2 * b2, w2 = x2 + Math.min(a2 - 1, e2 ? Math.round(g2) : Math.floor(g2)) * t3.strides[1], y2 = 0; r2 > y2; y2++) for (var C2 = v2 * y2, _2 = w2 + Math.min(s2 - 1, e2 ? Math.round(C2) : Math.floor(C2)) * t3.strides[2], E2 = 0; u2 > E2; E2++) l2[p2++] = c2[_2 + E2];
    return sr(l2, [o2, n2, r2, u2], t3.dtype);
  }, i2.prototype.resizeNearestNeighborBackprop = function(t3, n2, r2) {
    oh([t3, n2], "resizeNearestNeighborBackprop");
    for (var e2 = n2.shape, i3 = e2[0], o2 = e2[1], a2 = e2[2], s2 = e2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(i3 * o2 * a2 * s2), f2 = this.readSync(t3.dataId), d2 = [r2 && c2 > 1 ? o2 - 1 : o2, r2 && l2 > 1 ? a2 - 1 : a2], v2 = [r2 && c2 > 1 ? c2 - 1 : c2, r2 && l2 > 1 ? l2 - 1 : l2], p2 = d2[0] / v2[0], m2 = d2[1] / v2[1], x2 = 1 / p2, b2 = 1 / m2, g2 = 2 * Math.ceil(x2) + 2, w2 = 2 * Math.ceil(b2) + 2, y2 = 0; i3 > y2; y2++) for (var C2 = y2 * n2.strides[0], _2 = 0; o2 > _2; _2++) for (var E2 = C2 + _2 * n2.strides[1], R2 = Math.floor(Math.floor(_2 * x2) - g2 / 2), A2 = 0; a2 > A2; A2++) for (var N2 = E2 + A2 * n2.strides[2], O2 = Math.floor(Math.floor(A2 * b2) - w2 / 2), M2 = 0; s2 > M2; M2++) {
      for (var I2 = 0, T2 = 0; g2 > T2; T2++) {
        var S2 = T2 + R2;
        if (S2 >= 0 && c2 > S2) {
          var D2 = C2 + S2 * t3.strides[1], k2 = S2 * p2;
          if (_2 === Math.min(o2 - 1, r2 ? Math.round(k2) : Math.floor(k2))) for (var P2 = 0; w2 > P2; P2++) {
            var F2 = P2 + O2;
            if (F2 >= 0 && l2 > F2) {
              var L2 = D2 + F2 * t3.strides[2], B2 = F2 * m2;
              A2 === Math.min(a2 - 1, r2 ? Math.round(B2) : Math.floor(B2)) && (I2 += f2[L2 + M2]);
            }
          }
        }
      }
      h2[N2 + M2] = I2;
    }
    return dr(h2, n2.shape, n2.dtype);
  }, i2.prototype.batchNormalization = function(t3, n2, r2, e2, i3, o2) {
    oh([t3, n2, r2, i3, o2], "batchNorm");
    for (var a2 = this.readSync(t3.dataId), s2 = this.readSync(n2.dataId), u2 = this.readSync(r2.dataId), c2 = i3 ? this.readSync(i3.dataId) : new Float32Array([1]), l2 = o2 ? this.readSync(o2.dataId) : new Float32Array([0]), h2 = new Float32Array(a2.length), f2 = l2.length, d2 = c2.length, v2 = u2.length, p2 = s2.length, m2 = 0, x2 = 0, b2 = 0, g2 = 0, w2 = 0; a2.length > w2; ++w2) h2[w2] = l2[m2++] + (a2[w2] - s2[x2++]) * c2[b2++] / Math.sqrt(u2[g2++] + e2), m2 >= f2 && (m2 = 0), x2 >= p2 && (x2 = 0), b2 >= d2 && (b2 = 0), g2 >= v2 && (g2 = 0);
    return dr(h2, t3.shape);
  }, i2.prototype.localResponseNormalization4D = function(t3, n2, r2, e2, i3) {
    oh(t3, "localResponseNormalization4D");
    var o2 = t3.shape[3], a2 = o2 - 1, s2 = this.readSync(t3.dataId), u2 = t3.size, c2 = new Float32Array(u2);
    function l2(t4) {
      for (var r3 = t4 % o2, e3 = t4 - r3 + Math.max(0, r3 - n2), i4 = t4 - r3 + Math.min(r3 + n2, a2), u3 = 0; i4 >= e3; e3++) {
        var c3 = s2[e3];
        u3 += c3 * c3;
      }
      return u3;
    }
    for (var h2 = 0; u2 > h2; h2++) {
      var f2 = l2(h2);
      c2[h2] = s2[h2] * Math.pow(r2 + e2 * f2, -i3);
    }
    return dr(c2, t3.shape);
  }, i2.prototype.LRNGrad = function(t3, n2, r2, e2, i3, o2, a2) {
    oh(t3, "LRNGrad");
    for (var s2 = t3.shape[3], u2 = this.readSync(t3.dataId), c2 = this.readSync(n2.dataId), l2 = this.readSync(r2.dataId), h2 = new Float32Array(t3.size), f2 = t3.size, d2 = 0; f2 > d2; d2++) {
      for (var v2 = d2 % s2, p2 = d2 - v2 + Math.max(0, v2 - e2), m2 = d2 - v2 + Math.min(s2, v2 + e2 + 1), x2 = 0, b2 = p2; m2 > b2; b2++) x2 += Math.pow(c2[b2], 2);
      for (x2 = o2 * x2 + i3, b2 = p2; m2 > b2; b2++) {
        var g2 = -2 * o2 * a2 * c2[b2] * l2[d2] / x2;
        d2 === b2 && (g2 += Math.pow(x2, -a2)), h2[b2] += g2 *= u2[d2];
      }
    }
    return dr(h2, t3.shape);
  }, i2.prototype.multinomial = function(t3, n2, r2, e2) {
    oh(t3, "multinomial");
    for (var i3 = n2 ? t3 : We(t3), o2 = i3.shape[0], a2 = i3.shape[1], s2 = br([o2, r2], "int32"), u2 = this.readSync(s2.dataId), c2 = this.readSync(i3.dataId), l2 = 0; o2 > l2; ++l2) {
      var h2 = l2 * a2, f2 = new Float32Array(a2 - 1);
      f2[0] = c2[h2];
      for (var d2 = 1; f2.length > d2; ++d2) f2[d2] = f2[d2 - 1] + c2[h2 + d2];
      for (var v2 = Br("" + e2), p2 = l2 * r2, m2 = 0; r2 > m2; ++m2) {
        var x2 = v2();
        u2[p2 + m2] = f2.length;
        for (var b2 = 0; f2.length > b2; b2++) if (f2[b2] > x2) {
          u2[p2 + m2] = b2;
          break;
        }
      }
    }
    return s2;
  }, i2.prototype.oneHot = function(t3, n2, r2, e2) {
    oh(t3, "oneHot");
    var i3 = new Float32Array(t3.size * n2);
    i3.fill(e2);
    for (var o2 = this.readSync(t3.dataId), a2 = 0; t3.size > a2; ++a2) o2[a2] >= 0 && n2 > o2[a2] && (i3[a2 * n2 + o2[a2]] = r2);
    return hr(i3, [t3.size, n2], "int32");
  }, i2.prototype.nonMaxSuppression = function(t3, n2, r2, e2, i3) {
    return oh(t3, "nonMaxSuppression"), mi(this.readSync(t3.dataId), this.readSync(n2.dataId), r2, e2, i3);
  }, i2.prototype.fft = function(t3) {
    return this.fftBatch(t3, false);
  }, i2.prototype.ifft = function(t3) {
    return this.fftBatch(t3, true);
  }, i2.prototype.fftBatch = function(t3, n2) {
    for (var r2 = t3.shape[0], e2 = t3.shape[1], i3 = Gr(t3.shape, "float32"), o2 = Gr(t3.shape, "float32"), a2 = or(t3).as2D(r2, e2), s2 = ar(t3).as2D(r2, e2), u2 = 0; r2 > u2; u2++) for (var c2 = a2.slice([u2, 0], [1, e2]), l2 = s2.slice([u2, 0], [1, e2]), h2 = ir(c2, l2), f2 = this.readSync(this.fftImpl(h2, n2).dataId), d2 = 0; e2 > d2; d2++) {
      var v2 = hi(f2, d2);
      i3.values[u2 * e2 + d2] = v2.real, o2.values[u2 * e2 + d2] = v2.imag;
    }
    return ir(i3.toTensor(), o2.toTensor()).as2D(r2, e2);
  }, i2.prototype.fftImpl = function(t3, n2) {
    var r2 = t3.as1D(), e2 = r2.size;
    if (this.isExponentOf2(e2)) {
      var i3 = this.fftRadix2(r2, e2, n2).as2D(t3.shape[0], t3.shape[1]);
      return n2 && (i3 = ir(or(i3).div(cr(e2)), ar(i3).div(cr(e2)))), i3;
    }
    var o2 = this.readSync(t3.dataId), a2 = ((t4) => {
      for (var n3 = new Float32Array(t4.length / 2), r3 = new Float32Array(t4.length / 2), e3 = 0; t4.length > e3; e3 += 2) n3[e3 / 2] = t4[e3], r3[e3 / 2] = t4[e3 + 1];
      return { real: n3, imag: r3 };
    })(this.fourierTransformByMatmul(o2, e2, n2));
    return ir(a2.real, a2.imag).as2D(t3.shape[0], t3.shape[1]);
  }, i2.prototype.isExponentOf2 = (t3) => !(t3 & t3 - 1), i2.prototype.fftRadix2 = function(t3, n2, r2) {
    if (1 === n2) return t3;
    var e2 = this.readSync(t3.dataId), i3 = n2 / 2, o2 = ((t4) => {
      for (var n3 = Math.ceil(t4.length / 4), r3 = new Float32Array(n3), e3 = new Float32Array(n3), i4 = 0; t4.length > i4; i4 += 4) r3[Math.floor(i4 / 4)] = t4[i4], e3[Math.floor(i4 / 4)] = t4[i4 + 1];
      return { real: r3, imag: e3 };
    })(e2), a2 = ir(o2.real, o2.imag).as1D(), s2 = ((t4) => {
      for (var n3 = Math.floor(t4.length / 4), r3 = new Float32Array(n3), e3 = new Float32Array(n3), i4 = 2; t4.length > i4; i4 += 4) r3[Math.floor(i4 / 4)] = t4[i4], e3[Math.floor(i4 / 4)] = t4[i4 + 1];
      return { real: r3, imag: e3 };
    })(e2), u2 = ir(s2.real, s2.imag).as1D();
    a2 = this.fftRadix2(a2, i3, r2), u2 = this.fftRadix2(u2, i3, r2);
    var c2 = ((t4, n3) => {
      for (var r3 = new Float32Array(t4 / 2), e3 = new Float32Array(t4 / 2), i4 = 0; Math.ceil(t4 / 2) > i4; i4++) {
        var o3 = (n3 ? 2 : -2) * Math.PI * (i4 / t4);
        r3[i4] = Math.cos(o3), e3[i4] = Math.sin(o3);
      }
      return { real: r3, imag: e3 };
    })(n2, r2), l2 = ir(c2.real, c2.imag).mul(u2), h2 = a2.add(l2), f2 = a2.sub(l2), d2 = or(h2).concat(or(f2)), v2 = ar(h2).concat(ar(f2));
    return ir(d2, v2).as1D();
  }, i2.prototype.fourierTransformByMatmul = (t3, n2, r2) => {
    for (var e2 = new Float32Array(2 * n2), i3 = 0; n2 > i3; i3++) {
      for (var o2 = 0, a2 = 0, s2 = 0; n2 > s2; s2++) {
        var u2 = di(i3 * s2, n2, r2), c2 = hi(t3, s2);
        o2 += c2.real * u2.real - c2.imag * u2.imag, a2 += c2.real * u2.imag + c2.imag * u2.real;
      }
      r2 && (o2 /= n2, a2 /= n2), fi(e2, o2, a2, i3);
    }
    return e2;
  }, i2.prototype.depthToSpace = function(t3, n2, r2) {
    g("NHWC" === r2, () => "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + r2), g(n2 > 1, () => "blockSize should be > 1 for depthToSpace, but was: " + n2);
    for (var e2 = t3.shape[0], i3 = t3.shape[1], o2 = t3.shape[2], a2 = t3.shape[3], s2 = i3 * n2, u2 = o2 * n2, c2 = a2 / (n2 * n2), l2 = this.readSync(t3.dataId), h2 = new Float32Array(e2 * s2 * u2 * c2), f2 = 0, d2 = 0; e2 > d2; ++d2) for (var v2 = 0; s2 > v2; ++v2) for (var p2 = Math.floor(v2 / n2), m2 = v2 % n2, x2 = 0; u2 > x2; ++x2) for (var b2 = Math.floor(x2 / n2), w2 = (m2 * n2 + x2 % n2) * c2, y2 = 0; c2 > y2; ++y2) h2[f2++] = l2[y2 + w2 + a2 * (b2 + o2 * (p2 + i3 * d2))];
    return dr(h2, [e2, s2, u2, c2]);
  }, i2.prototype.broadcastedBinaryOp = function(t3, n2, r2, e2) {
    var i3 = Xe(t3.shape, n2.shape), o2 = Gr(i3, r2), a2 = this.readSync(t3.dataId), s2 = this.readSync(n2.dataId), u2 = qe(t3.shape, i3), c2 = qe(n2.shape, i3), l2 = o2.values;
    if (u2.length + c2.length === 0) for (var h2 = 0; l2.length > h2; ++h2) l2[h2] = e2(a2[h2 % a2.length], s2[h2 % s2.length]);
    else {
      var f2 = this.bufferSync(t3), d2 = this.bufferSync(n2), v2 = (r3) => {
        var i4 = o2.indexToLoc(r3), h3 = i4.slice(-t3.rank);
        u2.forEach((t4) => h3[t4] = 0);
        var v3 = f2.locToIndex(h3), p2 = i4.slice(-n2.rank);
        c2.forEach((t4) => p2[t4] = 0);
        var m2 = d2.locToIndex(p2);
        l2[r3] = e2(a2[v3], s2[m2]);
      };
      for (h2 = 0; l2.length > h2; ++h2) v2(h2);
    }
    return o2.toTensor();
  }, i2.prototype.broadcastedBinaryComplexOp = function(t3, n2, r2) {
    var e2 = Xe(t3.shape, n2.shape), i3 = Gr(e2, "float32"), o2 = Gr(e2, "float32"), a2 = this.readSync(t3.dataId), s2 = this.readSync(n2.dataId), u2 = qe(t3.shape, e2), c2 = qe(n2.shape, e2), l2 = i3.values, h2 = o2.values;
    if (u2.length + c2.length === 0) for (var f2 = 0; l2.length > f2; f2++) {
      var d2 = f2 % a2.length, v2 = f2 % s2.length, p2 = r2(a2[2 * d2], a2[2 * d2 + 1], s2[2 * v2], s2[2 * v2 + 1]);
      l2[f2] = p2.real, h2[f2] = p2.imag;
    }
    else {
      var m2 = this.bufferSync(this.data.get(t3.dataId).complexTensors.real), x2 = this.bufferSync(this.data.get(n2.dataId).complexTensors.real), b2 = (e3) => {
        var o3 = i3.indexToLoc(e3), f3 = o3.slice(-t3.rank);
        u2.forEach((t4) => f3[t4] = 0);
        var d3 = m2.locToIndex(f3), v3 = o3.slice(-n2.rank);
        c2.forEach((t4) => v3[t4] = 0);
        var p3 = x2.locToIndex(v3), b3 = r2(a2[2 * d3], a2[2 * d3 + 1], s2[2 * p3], s2[2 * p3 + 1]);
        l2[e3] = b3.real, h2[e3] = b3.imag;
      };
      for (f2 = 0; l2.length > f2; f2++) b2(f2);
    }
    return this.complex(i3.toTensor(), o2.toTensor());
  }, i2.prototype.split = (t3, n2, r2) => Ci(t3, n2, r2), i2.prototype.dispose = () => {
  }, i2.prototype.floatPrecision = () => 32, i2.prototype.epsilon = () => 1e-7, i2.prototype.cropAndResize = function(t3, n2, r2, e2, i3, o2) {
    for (var a2 = t3.shape, s2 = a2[0], u2 = a2[1], c2 = a2[2], l2 = a2[3], h2 = n2.shape[0], f2 = e2[0], d2 = e2[1], v2 = Gr([h2, f2, d2, l2], "float32"), p2 = this.readSync(n2.dataId), m2 = this.readSync(r2.dataId), x2 = this.readSync(t3.dataId), b2 = t3.strides, g2 = v2.strides, w2 = 0; h2 > w2; w2++) {
      var y2 = 4 * w2, C2 = p2[y2], _2 = p2[y2 + 1], E2 = p2[y2 + 2], R2 = p2[y2 + 3], A2 = m2[w2];
      if (s2 > A2) for (var N2 = f2 > 1 ? (E2 - C2) * (u2 - 1) / (f2 - 1) : 0, O2 = d2 > 1 ? (R2 - _2) * (c2 - 1) / (d2 - 1) : 0, M2 = 0; f2 > M2; M2++) {
        var I2 = f2 > 1 ? C2 * (u2 - 1) + M2 * N2 : 0.5 * (C2 + E2) * (u2 - 1);
        if (0 > I2 || I2 > u2 - 1) for (var T2 = 0; d2 > T2; T2++) for (var S2 = 0; l2 > S2; S2++) {
          var D2 = S2 + T2 * g2[2] + M2 * g2[1] + w2 * g2[0];
          v2.values[D2] = o2;
        }
        else if ("bilinear" === i3) {
          var k2 = Math.floor(I2), P2 = Math.ceil(I2), F2 = I2 - k2;
          for (T2 = 0; d2 > T2; T2++) if (0 > (q2 = d2 > 1 ? _2 * (c2 - 1) + T2 * O2 : 0.5 * (_2 + R2) * (c2 - 1)) || q2 > c2 - 1) for (S2 = 0; l2 > S2; S2++) v2.values[D2 = S2 + T2 * g2[2] + M2 * g2[1] + w2 * g2[0]] = o2;
          else {
            var L2 = Math.floor(q2), B2 = Math.ceil(q2), V2 = q2 - L2;
            for (S2 = 0; l2 > S2; S2++) {
              var W2 = x2[D2 = S2 + L2 * b2[2] + k2 * b2[1] + A2 * b2[0]], z2 = x2[D2 = S2 + B2 * b2[2] + k2 * b2[1] + A2 * b2[0]], G2 = x2[D2 = S2 + L2 * b2[2] + P2 * b2[1] + A2 * b2[0]], U2 = W2 + (z2 - W2) * V2, j2 = G2 + (x2[D2 = S2 + B2 * b2[2] + P2 * b2[1] + A2 * b2[0]] - G2) * V2;
              v2.values[D2 = S2 + T2 * g2[2] + M2 * g2[1] + w2 * g2[0]] = U2 + (j2 - U2) * F2;
            }
          }
        } else for (T2 = 0; d2 > T2; ++T2) {
          var q2;
          if (0 > (q2 = d2 > 1 ? _2 * (c2 - 1) + T2 * O2 : 0.5 * (_2 + R2) * (c2 - 1)) || q2 > c2 - 1) for (S2 = 0; l2 > S2; S2++) v2.values[D2 = S2 + T2 * g2[2] + M2 * g2[1] + w2 * g2[0]] = o2;
          else {
            var H2 = Math.round(q2), X2 = Math.round(I2);
            for (S2 = 0; l2 > S2; S2++) v2.values[S2 + T2 * g2[2] + M2 * g2[1] + w2 * g2[0]] = x2[S2 + H2 * b2[2] + X2 * b2[1] + A2 * b2[0]];
          }
        }
      }
    }
    return v2.toTensor();
  }, i2.prototype.sparseToDense = function(t3, n2, r2, e2) {
    var i3 = Ne(0, t3, r2);
    return this.scatter(t3, n2, r2, i3.outputSize, i3.sliceSize, i3.numUpdates, i3.sliceRank, i3.strides, e2, false);
  }, i2.prototype.gatherND = function(t3, n2) {
    var r2 = n2.shape, e2 = r2[r2.length - 1], i3 = Ce(t3, n2), o2 = i3[0], a2 = i3[1], s2 = i3[2], u2 = i3[3];
    if (0 === a2) return sr([], o2, t3.dtype);
    for (var c2 = new lt([a2, s2], t3.dtype), l2 = this.readSync(n2.dataId), h2 = this.readSync(t3.dataId), f2 = 0; a2 > f2; f2++) {
      for (var d2 = [], v2 = 0, p2 = 0; e2 > p2; p2++) {
        var m2 = l2[f2 * e2 + p2];
        v2 += m2 * u2[p2], d2.push(m2);
      }
      if (0 > v2 || v2 >= t3.size / s2) throw Error("Invalid indices: " + d2 + " does not index into " + t3.shape);
      for (var x2 = 0; s2 > x2; x2++) c2.values[f2 * s2 + x2] = h2[v2 * s2 + x2];
    }
    return c2.toTensor().reshape(o2);
  }, i2.prototype.scatterND = function(t3, n2, r2) {
    var e2 = Ne(0, t3, r2), i3 = e2.sliceRank, o2 = e2.numUpdates, a2 = e2.sliceSize, s2 = e2.strides, u2 = e2.outputSize, c2 = cr(0);
    return this.scatter(t3, n2, r2, u2, a2, o2, i3, s2, c2, true);
  }, i2.prototype.fill = function(t3, n2, r2) {
    var e2 = k(r2 = r2 || j(n2), _(t3));
    return e2.fill(n2), St.makeTensor(e2, t3, r2, this);
  }, i2.prototype.onesLike = function(t3) {
    if ("string" === t3.dtype) throw Error("onesLike is not supported for string tensors");
    return this.fill(t3.shape, 1, t3.dtype);
  }, i2.prototype.zerosLike = function(t3) {
    var n2 = k(t3.dtype, _(t3.shape));
    return this.makeOutput(n2, t3.shape, t3.dtype);
  }, i2.prototype.linspace = (t3, n2, r2) => ui(t3, n2, r2), i2.prototype.scatter = function(t3, n2, r2, e2, i3, o2, a2, s2, u2, c2) {
    var l2 = [e2 / i3, i3], h2 = this.readSync(t3.dataId), f2 = this.readSync(n2.dataId);
    if (0 === e2) return sr([], r2, n2.dtype);
    var d2 = new lt(l2, n2.dtype);
    d2.values.fill(this.readSync(u2.dataId)[0]);
    for (var v2 = 0; o2 > v2; v2++) {
      for (var p2 = [], m2 = 0, x2 = 0; a2 > x2; x2++) {
        var b2 = h2[v2 * a2 + x2];
        p2.push(b2), m2 += b2 * s2[x2];
      }
      if (0 > m2 || m2 >= e2 / i3) throw Error("Invalid indices: " + p2 + " does not index into " + r2);
      for (var g2 = 0; i3 > g2; g2++) c2 ? d2.values[m2 * i3 + g2] += f2[v2 * i3 + g2] : d2.values[m2 * i3 + g2] = 0 === n2.rank ? f2[0] : f2[v2 * i3 + g2];
    }
    return d2.toTensor().reshape(r2);
  }, i2;
})(Ue);
St.registerBackend("cpu", () => new sh(), 1);
for (uh = 0, ch = [{ kernelName: "NonMaxSuppressionV5", backendName: "cpu", kernelFunc(t2) {
  var n2 = t2.inputs, r2 = t2.attrs, e2 = n2.boxes, i2 = n2.scores, o2 = r2.maxOutputSize, a2 = r2.iouThreshold, s2 = r2.scoreThreshold, u2 = r2.softNmsSigma, c2 = t2.backend;
  oh(e2, "NonMaxSuppressionWithScore");
  var l2 = xi(c2.data.get(e2.dataId).values, c2.data.get(i2.dataId).values, o2, a2, s2, u2);
  return [l2.selectedIndices, l2.selectedScores];
} }, { kernelName: "Square", backendName: "cpu", kernelFunc(t2) {
  var n2 = t2.inputs.x, r2 = t2.backend;
  oh(n2, "square");
  for (var e2 = r2.data.get(n2.dataId).values, i2 = new Float32Array(e2.length), o2 = 0; e2.length > o2; ++o2) {
    var a2 = e2[o2];
    i2[o2] = a2 * a2;
  }
  return { dataId: r2.write(i2, n2.shape, n2.dtype), shape: n2.shape, dtype: n2.dtype };
} }, { kernelName: bs, backendName: "cpu", kernelFunc(t2) {
  var n2 = t2.inputs, r2 = n2.a, e2 = n2.b, i2 = t2.backend;
  oh([r2, e2], bs);
  var o2 = i2.data.get(r2.dataId).values, a2 = i2.data.get(e2.dataId).values, s2 = ((t3, n3, r3, e3, i3, o3) => {
    var a3 = Xe(t3, n3), s3 = a3.length, u3 = X(a3), c2 = D(i3, _(a3)), l2 = t3.length, h2 = n3.length, f2 = X(t3), d2 = X(n3), v2 = qe(t3, a3), p2 = qe(n3, a3);
    if (v2.length + p2.length === 0) for (var m2 = 0; c2.length > m2; ++m2) c2[m2] = o3(r3[m2 % r3.length], e3[m2 % e3.length]);
    else {
      var x2 = (t4) => {
        var n4 = et(t4, s3, u3), i4 = n4.slice(-l2);
        v2.forEach((t5) => i4[t5] = 0);
        var a4 = rt(i4, l2, f2), m3 = n4.slice(-h2);
        p2.forEach((t5) => m3[t5] = 0);
        var x3 = rt(m3, h2, d2);
        c2[t4] = o3(r3[a4], e3[x3]);
      };
      for (m2 = 0; c2.length > m2; ++m2) x2(m2);
    }
    return [c2, a3];
  })(r2.shape, e2.shape, o2, a2, r2.dtype, (t3, n3) => {
    var r3 = t3 - n3;
    return r3 * r3;
  }), u2 = s2[1];
  return { dataId: i2.write(s2[0], u2, r2.dtype), shape: u2, dtype: r2.dtype };
} }]; ch.length > uh; uh++) f(ch[uh]);
var uh;
var ch;
for (hh = function(t2) {
  this.variableNames = ["A"];
  var n2 = Ti(), r2 = t2[0], e2 = t2[1];
  this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + e2 + ".0, " + r2 + ".0);\n\n        vec4 values = " + n2.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";
}, fh = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
  var n2 = Ti(), r2 = t2[0], e2 = t2[1];
  this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(" + e2 + ".0, " + r2 + ".0);\n            vec4 values = " + n2.texture2D + "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        " + n2.output + " = result;\n      }\n    ";
}, dh = 0, vh = [{ kernelName: "FromPixels", backendName: "webgl", kernelFunc(t2) {
  var n2 = t2.backend, r2 = t2.inputs.pixels, e2 = "undefined" != typeof HTMLVideoElement && r2 instanceof HTMLVideoElement, i2 = "undefined" != typeof HTMLImageElement && r2 instanceof HTMLImageElement, a2 = e2 ? [r2.videoWidth, r2.videoHeight] : [r2.width, r2.height], s2 = a2[0], u2 = a2[1], c2 = [u2, s2], l2 = [u2, s2, t2.attrs.numChannels];
  (i2 || e2) && (null == lh && (lh = document.createElement("canvas").getContext("2d")), lh.canvas.width = s2, lh.canvas.height = u2, lh.drawImage(r2, 0, 0, s2, u2), r2 = lh.canvas);
  var h2 = n2.makeTensorInfo(c2, "int32");
  n2.texData.get(h2.dataId).usage = Ft.PIXELS, n2.gpgpu.uploadPixelDataToTexture(n2.getTexture(h2.dataId), r2);
  var f2 = o().getBool("WEBGL_PACK") ? new fh(l2) : new hh(l2), d2 = n2.runWebGLProgram(f2, [h2], "int32");
  return n2.disposeData(h2.dataId), d2;
} }, { kernelName: "NonMaxSuppressionV5", backendName: "webgl", kernelFunc(t2) {
  var n2 = t2.inputs, r2 = t2.backend, e2 = t2.attrs;
  Gn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  var i2 = n2.scores, o2 = e2.maxOutputSize, a2 = e2.iouThreshold, s2 = e2.scoreThreshold, u2 = e2.softNmsSigma, c2 = r2, l2 = xi(c2.readSync(n2.boxes.dataId), c2.readSync(i2.dataId), o2, a2, s2, u2);
  return [l2.selectedIndices, l2.selectedScores];
} }, { kernelName: "Square", backendName: "webgl", kernelFunc(t2) {
  var n2 = t2.inputs.x, r2 = t2.backend, e2 = new Ga(n2.shape, "return x * x;");
  return r2.runWebGLProgram(e2, [n2], n2.dtype);
} }, { kernelName: bs, backendName: "webgl", kernelFunc(t2) {
  var n2 = t2.inputs, r2 = n2.a, e2 = n2.b, i2 = t2.backend, a2 = o().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new oo("return (a - b) * (a - b);", r2.shape, e2.shape) : new eo("return (a - b) * (a - b);", r2.shape, e2.shape);
  return i2.compileAndRun(a2, [r2, e2]);
} }]; vh.length > dh; dh++) f(vh[dh]);
var lh;
var hh;
var fh;
var dh;
var vh;
for (ph = 0, mh = [{ kernelName: "Square", gradFunc(t2, n2) {
  var r2 = n2[0];
  return { x() {
    return t2.mul(r2.toFloat().mul(2));
  } };
} }, { kernelName: bs, gradFunc(t2, n2) {
  var r2 = n2[0], e2 = n2[1], i2 = cr(2);
  return { a() {
    return ku(t2, ku(i2, Vu(r2, e2)));
  }, b() {
    return ku(t2, ku(i2, Vu(e2, r2)));
  } };
} }]; mh.length > ph; ph++) d(mh[ph]);
var ph;
var mh;
var xh = (function() {
  function t2() {
  }
  return t2.prototype.fetch = (t3, n2) => fetch(t3, n2), t2.prototype.now = () => performance.now(), t2.prototype.encode = function(t3, n2) {
    if ("utf-8" !== n2 && "utf8" !== n2) throw Error("Browser's encoder only supports utf-8, but got " + n2);
    return null == this.textEncoder && (this.textEncoder = new TextEncoder()), this.textEncoder.encode(t3);
  }, t2.prototype.decode = (t3, n2) => new TextDecoder(n2).decode(t3), t2;
})();
o().get("IS_BROWSER") && o().setPlatform("browser", new xh());
var bh;
var gh = (function() {
  function t2() {
    this.util = require_util(), this.textEncoder = new this.util.TextEncoder();
  }
  return t2.prototype.fetch = (t3, n2) => null != o().global.fetch ? o().global.fetch(t3, n2) : (null == bh && (bh = globalThis.fetch.bind(globalThis)), bh(t3, n2)), t2.prototype.now = () => {
    var t3 = process.hrtime();
    return 1e3 * t3[0] + t3[1] / 1e6;
  }, t2.prototype.encode = function(t3, n2) {
    if ("utf-8" !== n2 && "utf8" !== n2) throw Error("Node built-in encoder only supports utf-8, but got " + n2);
    return this.textEncoder.encode(t3);
  }, t2.prototype.decode = function(t3, n2) {
    return 0 === t3.length ? "" : new this.util.TextDecoder(n2).decode(t3);
  }, t2;
})();
o().get("IS_NODE") && o().setPlatform("node", new gh());
var wh = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 };
function yh(t2, n2) {
  for (var r2 = {}, e2 = 0, i2 = ((n3) => {
    var i3 = n3.name, o3 = n3.dtype, a3 = n3.shape, s2 = _(a3), u2 = void 0;
    if ("quantization" in n3) {
      var c2 = n3.quantization;
      if ("uint8" !== c2.dtype && "uint16" !== c2.dtype) throw Error("Weight " + n3.name + " has unknown quantization dtype " + c2.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
      var l2 = wh[c2.dtype], h2 = t2.slice(e2, e2 + s2 * l2), f2 = "uint8" === c2.dtype ? new Uint8Array(h2) : new Uint16Array(h2);
      if ("float32" === o3) u2 = Float32Array.from(f2, (t3) => t3 * c2.scale + c2.min);
      else {
        if ("int32" !== o3) throw Error("Unsupported dtype in weight '" + i3 + "': " + o3);
        u2 = Int32Array.from(f2, (t3) => Math.round(t3 * c2.scale + c2.min));
      }
      e2 += s2 * l2;
    } else if ("string" === o3) {
      var d2 = _(n3.shape);
      u2 = [];
      for (var v2 = 0; d2 > v2; v2++) {
        var p2 = new Uint32Array(t2.slice(e2, e2 + 4))[0];
        e2 += 4;
        var m2 = new Uint8Array(t2.slice(e2, e2 + p2));
        u2.push(m2), e2 += p2;
      }
    } else {
      var x2 = wh[o3];
      if (h2 = t2.slice(e2, e2 + s2 * x2), "float32" === o3) u2 = new Float32Array(h2);
      else if ("int32" === o3) u2 = new Int32Array(h2);
      else {
        if ("bool" !== o3) throw Error("Unsupported dtype in weight '" + i3 + "': " + o3);
        u2 = new Uint8Array(h2);
      }
      e2 += s2 * x2;
    }
    r2[i3] = sr(u2, a3, o3);
  }), o2 = 0, a2 = n2; a2.length > o2; o2++) i2(a2[o2]);
  return r2;
}
function Ch(t2) {
  if (null === t2) throw Error("Invalid input value: " + JSON.stringify(t2));
  var n2 = 0, r2 = [];
  t2.forEach((t3) => {
    if (n2 += t3.byteLength, r2.push(t3.byteLength === t3.buffer.byteLength ? t3 : new t3.constructor(t3)), !(t3 instanceof Float32Array || t3 instanceof Int32Array || t3 instanceof Uint8Array)) throw Error("Unsupported TypedArray subtype: " + t3.constructor.name);
  });
  var e2 = new Uint8Array(n2), i2 = 0;
  return r2.forEach((t3) => {
    e2.set(new Uint8Array(t3.buffer), i2), i2 += t3.byteLength;
  }), e2.buffer;
}
var _h = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
function Eh(t2) {
  return _h ? Buffer.byteLength(t2) : new Blob([t2]).size;
}
function Rh(t2) {
  var n2 = 0;
  t2.forEach((t3) => {
    n2 += t3.byteLength;
  });
  var r2 = new Uint8Array(n2), e2 = 0;
  return t2.forEach((t3) => {
    r2.set(new Uint8Array(t3), e2), e2 += t3.byteLength;
  }), r2.buffer;
}
function Ah(t2) {
  for (t2 = t2.trim(); t2.endsWith("/"); ) t2 = t2.slice(0, t2.length - 1);
  var n2 = t2.split("/");
  return n2[n2.length - 1];
}
function Nh(t2) {
  if (t2.modelTopology instanceof ArrayBuffer) throw Error("Expected JSON model topology, received ArrayBuffer.");
  return { dateSaved: /* @__PURE__ */ new Date(), modelTopologyType: "JSON", modelTopologyBytes: null == t2.modelTopology ? 0 : Eh(JSON.stringify(t2.modelTopology)), weightSpecsBytes: null == t2.weightSpecs ? 0 : Eh(JSON.stringify(t2.weightSpecs)), weightDataBytes: null == t2.weightData ? 0 : t2.weightData.byteLength };
}
var Oh = (function() {
  function t2() {
    this.saveRouters = [], this.loadRouters = [];
  }
  return t2.getInstance = () => (null == t2.instance && (t2.instance = new t2()), t2.instance), t2.registerSaveRouter = (n2) => {
    t2.getInstance().saveRouters.push(n2);
  }, t2.registerLoadRouter = (n2) => {
    t2.getInstance().loadRouters.push(n2);
  }, t2.getSaveHandlers = (n2) => t2.getHandlers(n2, "save"), t2.getLoadHandlers = (n2, r2) => t2.getHandlers(n2, "load", r2), t2.getHandlers = (n2, r2, e2) => {
    var i2 = [];
    return ("load" === r2 ? t2.getInstance().loadRouters : t2.getInstance().saveRouters).forEach((t3) => {
      var r3 = t3(n2, e2);
      null !== r3 && i2.push(r3);
    }), i2;
  }, t2;
})();
var Mh = "://";
var Ih = (function() {
  function t2() {
    this.managers = {};
  }
  return t2.getInstance = () => (null == t2.instance && (t2.instance = new t2()), t2.instance), t2.registerManager = (n2, r2) => {
    g(null != n2, () => "scheme must not be undefined or null."), n2.endsWith(Mh) && (n2 = n2.slice(0, n2.indexOf(Mh))), g(n2.length > 0, () => "scheme must not be an empty string.");
    var e2 = t2.getInstance();
    g(null == e2.managers[n2], () => "A model store manager is already registered for scheme '" + n2 + "'."), e2.managers[n2] = r2;
  }, t2.getManager = function(t3) {
    var n2 = this.getInstance().managers[t3];
    if (null == n2) throw Error("Cannot find model manager for scheme '" + t3 + "'");
    return n2;
  }, t2.getSchemes = function() {
    return Object.keys(this.getInstance().managers);
  }, t2;
})();
function Th(t2) {
  if (-1 === t2.indexOf(Mh)) throw Error("The url string provided does not contain a scheme. Supported schemes are: " + Ih.getSchemes().join(","));
  return { scheme: t2.split(Mh)[0], path: t2.split(Mh)[1] };
}
function Sh(t2, n2, i2) {
  return void 0 === i2 && (i2 = false), r(this, 0, void 0, function() {
    var r2, o2, a2, s2, u2, c2, l2, h2, f2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return g(t2 !== n2, () => "Old path and new path are the same: '" + t2 + "'"), g((r2 = Oh.getLoadHandlers(t2)).length > 0, () => "Copying failed because no load handler is found for source URL " + t2 + "."), g(2 > r2.length, () => "Copying failed because more than one (" + r2.length + ") load handlers for source URL " + t2 + "."), o2 = r2[0], g((a2 = Oh.getSaveHandlers(n2)).length > 0, () => "Copying failed because no save handler is found for destination URL " + n2 + "."), g(2 > a2.length, () => "Copying failed because more than one (" + r2.length + ") save handlers for destination URL " + n2 + "."), s2 = a2[0], u2 = Th(t2).scheme, c2 = Th(t2).path, l2 = u2 === Th(t2).scheme, [4, o2.load()];
        case 1:
          return h2 = e2.sent(), i2 && l2 ? [4, Ih.getManager(u2).removeModel(c2)] : [3, 3];
        case 2:
          e2.sent(), e2.label = 3;
        case 3:
          return [4, s2.save(h2)];
        case 4:
          return f2 = e2.sent(), !i2 || l2 ? [3, 6] : [4, Ih.getManager(u2).removeModel(c2)];
        case 5:
          e2.sent(), e2.label = 6;
        case 6:
          return [2, f2.modelArtifactsInfo];
      }
    });
  });
}
var Dh = "models_store";
var kh = "model_info_store";
function Ph() {
  if (!o().getBool("IS_BROWSER")) throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
  var t2 = window || self, n2 = t2.indexedDB || t2.mozIndexedDB || t2.webkitIndexedDB || t2.msIndexedDB || t2.shimIndexedDB;
  if (null == n2) throw Error("The current browser does not appear to support IndexedDB.");
  return n2;
}
function Fh(t2) {
  var n2 = t2.result;
  n2.createObjectStore(Dh, { keyPath: "modelPath" }), n2.createObjectStore(kh, { keyPath: "modelPath" });
}
var Lh = (function() {
  function t2(t3) {
    if (this.indexedDB = Ph(), null == t3 || !t3) throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");
    this.modelPath = t3;
  }
  return t2.prototype.save = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        if (t3.modelTopology instanceof ArrayBuffer) throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        return [2, this.databaseAction(this.modelPath, t3)];
      });
    });
  }, t2.prototype.load = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        return [2, this.databaseAction(this.modelPath)];
      });
    });
  }, t2.prototype.databaseAction = function(t3, n2) {
    var r2 = this;
    return new Promise((t4, e2) => {
      var i2 = r2.indexedDB.open("tensorflowjs", 1);
      i2.onupgradeneeded = () => Fh(i2), i2.onsuccess = () => {
        var o2 = i2.result;
        if (null == n2) {
          var a2 = o2.transaction(Dh, "readonly"), s2 = a2.objectStore(Dh).get(r2.modelPath);
          s2.onsuccess = () => {
            if (null == s2.result) return o2.close(), e2(Error("Cannot find model with path '" + r2.modelPath + "' in IndexedDB."));
            t4(s2.result.modelArtifacts);
          }, s2.onerror = (t5) => (o2.close(), e2(s2.error)), a2.oncomplete = () => o2.close();
        } else {
          var u2, c2 = Nh(n2), l2 = o2.transaction(kh, "readwrite"), h2 = l2.objectStore(kh), f2 = h2.put({ modelPath: r2.modelPath, modelArtifactsInfo: c2 });
          f2.onsuccess = () => {
            var i3 = (u2 = o2.transaction(Dh, "readwrite")).objectStore(Dh).put({ modelPath: r2.modelPath, modelArtifacts: n2, modelArtifactsInfo: c2 });
            i3.onsuccess = () => t4({ modelArtifactsInfo: c2 }), i3.onerror = (t5) => {
              var n3 = (h2 = l2.objectStore(kh)).delete(r2.modelPath);
              n3.onsuccess = () => (o2.close(), e2(i3.error)), n3.onerror = (t6) => (o2.close(), e2(i3.error));
            };
          }, f2.onerror = (t5) => (o2.close(), e2(f2.error)), l2.oncomplete = () => {
            null == u2 ? o2.close() : u2.oncomplete = () => o2.close();
          };
        }
      }, i2.onerror = (t5) => e2(i2.error);
    });
  }, t2.URL_SCHEME = "indexeddb://", t2;
})();
var Bh = (t2) => {
  return o().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Lh.URL_SCHEME) ? (n2 = t2.slice(Lh.URL_SCHEME.length), new Lh(n2)) : null;
  var n2;
};
Oh.registerSaveRouter(Bh), Oh.registerLoadRouter(Bh);
var Vh = (function() {
  function t2() {
    this.indexedDB = Ph();
  }
  return t2.prototype.listModels = function() {
    return r(this, 0, void 0, function() {
      var t3 = this;
      return e(this, (n2) => [2, new Promise((n3, r2) => {
        var e2 = t3.indexedDB.open("tensorflowjs", 1);
        e2.onupgradeneeded = () => Fh(e2), e2.onsuccess = () => {
          var t4 = e2.result, i2 = t4.transaction(kh, "readonly"), o2 = i2.objectStore(kh).getAll();
          o2.onsuccess = () => {
            for (var t5 = {}, r3 = 0, e3 = o2.result; e3.length > r3; r3++) {
              var i3 = e3[r3];
              t5[i3.modelPath] = i3.modelArtifactsInfo;
            }
            n3(t5);
          }, o2.onerror = (n4) => (t4.close(), r2(o2.error)), i2.oncomplete = () => t4.close();
        }, e2.onerror = (t4) => r2(e2.error);
      })]);
    });
  }, t2.prototype.removeModel = function(t3) {
    return r(this, 0, void 0, function() {
      var n2 = this;
      return e(this, (r2) => {
        var e2;
        return t3 = (e2 = t3).startsWith(Lh.URL_SCHEME) ? e2.slice(Lh.URL_SCHEME.length) : e2, [2, new Promise((r3, e3) => {
          var i2 = n2.indexedDB.open("tensorflowjs", 1);
          i2.onupgradeneeded = () => Fh(i2), i2.onsuccess = () => {
            var n3, o2 = i2.result, a2 = o2.transaction(kh, "readwrite"), s2 = a2.objectStore(kh), u2 = s2.get(t3);
            u2.onsuccess = () => {
              if (null == u2.result) return o2.close(), e3(Error("Cannot find model with path '" + t3 + "' in IndexedDB."));
              var i3 = s2.delete(t3), a3 = () => {
                var i4 = (n3 = o2.transaction(Dh, "readwrite")).objectStore(Dh).delete(t3);
                i4.onsuccess = () => r3(u2.result.modelArtifactsInfo), i4.onerror = (t4) => e3(u2.error);
              };
              i3.onsuccess = a3, i3.onerror = (t4) => (a3(), o2.close(), e3(u2.error));
            }, u2.onerror = (t4) => (o2.close(), e3(u2.error)), a2.oncomplete = () => {
              null == n3 ? o2.close() : n3.oncomplete = () => o2.close();
            };
          }, i2.onerror = (t4) => e3(i2.error);
        })];
      });
    });
  }, t2;
})();
if (o().getBool("IS_BROWSER")) try {
  Ih.registerManager(Lh.URL_SCHEME, new Vh());
} catch (wt2) {
}
var Wh = "/";
var zh = "tensorflowjs_models";
var Gh = "info";
var Uh = "model_topology";
var jh = "weight_specs";
var qh = "weight_data";
var Hh = "model_metadata";
function Xh(t2) {
  return { info: [zh, t2, Gh].join(Wh), topology: [zh, t2, Uh].join(Wh), weightSpecs: [zh, t2, jh].join(Wh), weightData: [zh, t2, qh].join(Wh), modelMetadata: [zh, t2, Hh].join(Wh) };
}
function $h(t2) {
  var n2 = t2.split(Wh);
  if (3 > n2.length) throw Error("Invalid key format: " + t2);
  return n2.slice(1, n2.length - 1).join(Wh);
}
var Kh = (function() {
  function t2(t3) {
    if (!o().getBool("IS_BROWSER") || "undefined" == typeof window || void 0 === window.localStorage) throw Error("The current environment does not support local storage.");
    if (this.LS = window.localStorage, null == t3 || !t3) throw Error("For local storage, modelPath must not be null, undefined or empty.");
    this.modelPath = t3, this.keys = Xh(this.modelPath);
  }
  return t2.prototype.save = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i2;
      return e(this, function(e2) {
        if (t3.modelTopology instanceof ArrayBuffer) throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        n2 = JSON.stringify(t3.modelTopology), r2 = JSON.stringify(t3.weightSpecs), i2 = Nh(t3);
        try {
          return this.LS.setItem(this.keys.info, JSON.stringify(i2)), this.LS.setItem(this.keys.topology, n2), this.LS.setItem(this.keys.weightSpecs, r2), this.LS.setItem(this.keys.weightData, ((t4) => {
            if (_h) return Buffer.from(t4).toString("base64");
            for (var n3 = new Uint8Array(t4), r3 = "", e3 = 0, i3 = n3.length; i3 > e3; e3++) r3 += String.fromCharCode(n3[e3]);
            return btoa(r3);
          })(t3.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({ format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata })), [2, { modelArtifactsInfo: i2 }];
        } catch (o2) {
          throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + i2.modelTopologyBytes + ", weightSpecsBytes=" + i2.weightSpecsBytes + ", weightDataBytes=" + i2.weightDataBytes + ".");
        }
        return [2];
      });
    });
  }, t2.prototype.load = function() {
    return r(this, 0, void 0, function() {
      var t3, n2, r2, i2, o2, a2, s2;
      return e(this, function(e2) {
        if (null == (t3 = JSON.parse(this.LS.getItem(this.keys.info)))) throw Error("In local storage, there is no model with name '" + this.modelPath + "'");
        if ("JSON" !== t3.modelTopologyType) throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
        if (n2 = {}, null == (r2 = JSON.parse(this.LS.getItem(this.keys.topology)))) throw Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
        if (n2.modelTopology = r2, null == (i2 = JSON.parse(this.LS.getItem(this.keys.weightSpecs)))) throw Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
        if (n2.weightSpecs = i2, null != (o2 = this.LS.getItem(this.keys.modelMetadata)) && (a2 = JSON.parse(o2), n2.format = a2.format, n2.generatedBy = a2.generatedBy, n2.convertedBy = a2.convertedBy, n2.userDefinedMetadata = a2.userDefinedMetadata), null == (s2 = this.LS.getItem(this.keys.weightData))) throw Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
        return n2.weightData = ((t4) => {
          if (_h) {
            var n3 = Buffer.from(t4, "base64");
            return n3.buffer.slice(n3.byteOffset, n3.byteOffset + n3.byteLength);
          }
          for (var r3 = atob(t4), e3 = new Uint8Array(r3.length), i3 = 0; r3.length > i3; ++i3) e3.set([r3.charCodeAt(i3)], i3);
          return e3.buffer;
        })(s2), [2, n2];
      });
    });
  }, t2.URL_SCHEME = "localstorage://", t2;
})();
var Yh = (t2) => {
  return o().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Kh.URL_SCHEME) ? (n2 = t2.slice(Kh.URL_SCHEME.length), new Kh(n2)) : null;
  var n2;
};
Oh.registerSaveRouter(Yh), Oh.registerLoadRouter(Yh);
var Jh = (function() {
  function t2() {
    g(o().getBool("IS_BROWSER"), () => "Current environment is not a web browser"), g("undefined" == typeof window || void 0 !== window.localStorage, () => "Current browser does not appear to support localStorage"), this.LS = window.localStorage;
  }
  return t2.prototype.listModels = function() {
    return r(this, 0, void 0, function() {
      var t3, n2, r2, i2, o2, a2;
      return e(this, function(e2) {
        for (t3 = {}, n2 = zh + Wh, r2 = Wh + Gh, i2 = 0; this.LS.length > i2; ++i2) (o2 = this.LS.key(i2)).startsWith(n2) && o2.endsWith(r2) && (a2 = $h(o2), t3[a2] = JSON.parse(this.LS.getItem(o2)));
        return [2, t3];
      });
    });
  }, t2.prototype.removeModel = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2;
      return e(this, function(e2) {
        var i2;
        if (t3 = (i2 = t3).startsWith(Kh.URL_SCHEME) ? i2.slice(Kh.URL_SCHEME.length) : i2, n2 = Xh(t3), null == this.LS.getItem(n2.info)) throw Error("Cannot find model at path '" + t3 + "'");
        return r2 = JSON.parse(this.LS.getItem(n2.info)), this.LS.removeItem(n2.info), this.LS.removeItem(n2.topology), this.LS.removeItem(n2.weightSpecs), this.LS.removeItem(n2.weightData), [2, r2];
      });
    });
  }, t2;
})();
if (o().getBool("IS_BROWSER")) try {
  Ih.registerManager(Kh.URL_SCHEME, new Jh());
} catch (wt2) {
}
function Zh(t2) {
  return new Promise((t3) => setTimeout(t3)).then(t2);
}
var Qh = (function() {
  function t2(n2) {
    if (!o().getBool("IS_BROWSER")) throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    n2.startsWith(t2.URL_SCHEME) && (n2 = n2.slice(t2.URL_SCHEME.length)), null != n2 && 0 !== n2.length || (n2 = "model"), this.modelTopologyFileName = n2 + ".json", this.weightDataFileName = n2 + ".weights.bin";
  }
  return t2.prototype.save = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i2, o2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            if ("undefined" == typeof document) throw Error("Browser downloads are not supported in this environment since `document` is not present");
            if (n2 = window.URL.createObjectURL(new Blob([t3.weightData], { type: "application/octet-stream" })), !(t3.modelTopology instanceof ArrayBuffer)) return [3, 1];
            throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
          case 1:
            return r2 = window.URL.createObjectURL(new Blob([JSON.stringify({ modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, weightsManifest: [{ paths: ["./" + this.weightDataFileName], weights: t3.weightSpecs }] })], { type: "application/json" })), (i2 = this.jsonAnchor ?? document.createElement("a")).download = this.modelTopologyFileName, i2.href = r2, [4, Zh(() => i2.dispatchEvent(new MouseEvent("click")))];
          case 2:
            return e2.sent(), null == t3.weightData ? [3, 4] : ((o2 = this.weightDataAnchor ?? document.createElement("a")).download = this.weightDataFileName, o2.href = n2, [4, Zh(() => o2.dispatchEvent(new MouseEvent("click")))]);
          case 3:
            e2.sent(), e2.label = 4;
          case 4:
            return [2, { modelArtifactsInfo: Nh(t3) }];
        }
      });
    });
  }, t2.URL_SCHEME = "downloads://", t2;
})();
var tf = (function() {
  function t2(t3) {
    if (null == t3 || 1 > t3.length) throw Error("When calling browserFiles, at least 1 file is required, but received " + t3);
    this.files = t3;
  }
  return t2.prototype.load = function() {
    return r(this, 0, void 0, function() {
      var t3, n2, r2 = this;
      return e(this, function(e2) {
        return t3 = this.files[0], n2 = this.files.slice(1), [2, new Promise((e3, i2) => {
          var o2 = new FileReader();
          o2.onload = (o3) => {
            var a2 = JSON.parse(o3.target.result), s2 = a2.modelTopology;
            if (null != s2) {
              0 === n2.length && e3({ modelTopology: s2 });
              var u2 = a2.weightsManifest;
              if (null != u2) {
                var c2;
                try {
                  c2 = r2.checkManifestAndWeightFiles(u2, n2);
                } catch (d2) {
                  return void i2(d2);
                }
                var l2 = [], h2 = [], f2 = [];
                u2.forEach((t4) => {
                  t4.paths.forEach((t5) => {
                    h2.push(t5), f2.push(null);
                  }), l2.push.apply(l2, t4.weights);
                }), u2.forEach((t4) => {
                  t4.paths.forEach((t5) => {
                    var n3 = new FileReader();
                    n3.onload = (n4) => {
                      var r3 = n4.target.result, i3 = h2.indexOf(t5);
                      f2[i3] = r3, -1 === f2.indexOf(null) && e3({ modelTopology: s2, weightSpecs: l2, weightData: Rh(f2), format: a2.format, generatedBy: a2.generatedBy, convertedBy: a2.convertedBy, userDefinedMetadata: a2.userDefinedMetadata });
                    }, n3.onerror = (n4) => i2("Failed to weights data from file of path '" + t5 + "'."), n3.readAsArrayBuffer(c2[t5]);
                  });
                });
              } else i2(Error("weightManifest field is missing from file " + t3.name));
            } else i2(Error("modelTopology field is missing from file " + t3.name));
          }, o2.onerror = (n3) => i2("Failed to read model topology and weights manifest JSON from file '" + t3.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only."), o2.readAsText(t3);
        })];
      });
    });
  }, t2.prototype.checkManifestAndWeightFiles = (t3, n2) => {
    for (var r2 = [], e2 = n2.map((t4) => Ah(t4.name)), i2 = {}, o2 = 0, a2 = t3; a2.length > o2; o2++) a2[o2].paths.forEach((t4) => {
      var o3 = Ah(t4);
      if (-1 !== r2.indexOf(o3)) throw Error("Duplicate file basename found in weights manifest: '" + o3 + "'");
      if (r2.push(o3), -1 === e2.indexOf(o3)) throw Error("Weight file with basename '" + o3 + "' is not provided.");
      i2[t4] = n2[e2.indexOf(o3)];
    });
    if (r2.length !== n2.length) throw Error("Mismatch in the number of files in weights manifest (" + r2.length + ") and the number of weight files provided (" + n2.length + ").");
    return i2;
  }, t2;
})();
function nf(t2, n2, r2, e2) {
  var i2;
  g(null != (i2 = t2) && Array.isArray(i2) && i2.length > 0, () => "promises must be a none empty array"), ((t3, n3) => {
    g(t3 >= 0 && 1 >= t3, () => "Progress fraction must be in range [0, 1], but got startFraction " + t3), g(n3 >= 0 && 1 >= n3, () => "Progress fraction must be in range [0, 1], but got endFraction " + n3), g(n3 >= t3, () => "startFraction must be no more than endFraction, but got startFraction " + t3 + " and endFraction " + n3);
  })(r2 = r2 ?? 0, e2 = e2 ?? 1);
  var o2 = 0;
  return Promise.all(t2.map((i3) => (i3.then((i4) => {
    var a2 = r2 + ++o2 / t2.length * (e2 - r2);
    return n2(a2), i4;
  }), i3)));
}
function rf(t2, n2) {
  return r(this, 0, void 0, function() {
    var r2, i2, a2, s2, u2, c2, l2, h2, f2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          return null == n2 && (n2 = {}), r2 = n2.fetchFunc ?? o().platform.fetch, i2 = t2.map((t3) => r2(t3, n2.requestInit, { isBinary: true })), a2 = 0, s2 = 0.5, null != n2.onProgress ? [3, 2] : [4, Promise.all(i2)];
        case 1:
          return u2 = e2.sent(), [3, 4];
        case 2:
          return [4, nf(i2, n2.onProgress, a2, s2)];
        case 3:
          u2 = e2.sent(), e2.label = 4;
        case 4:
          return c2 = u2.map((t3) => t3.arrayBuffer()), l2 = 0.5, h2 = 1, null != n2.onProgress ? [3, 6] : [4, Promise.all(c2)];
        case 5:
          return f2 = e2.sent(), [3, 8];
        case 6:
          return [4, nf(c2, n2.onProgress, l2, h2)];
        case 7:
          f2 = e2.sent(), e2.label = 8;
        case 8:
          return [2, f2];
      }
    });
  });
}
function ef(t2) {
  var n2 = this;
  return function(i2, o2, a2) {
    return void 0 === o2 && (o2 = ""), r(n2, 0, void 0, function() {
      var n3, r2, s2, u2, c2, l2, h2, f2, d2, v2;
      return e(this, (e2) => {
        switch (e2.label) {
          case 0:
            if (n3 = i2.map(() => false), r2 = {}, s2 = null != a2 ? a2.map(() => false) : [], u2 = [], i2.forEach((t3, e3) => {
              var i3 = 0;
              t3.weights.forEach((t4) => {
                var o3 = wh["quantization" in t4 ? t4.quantization.dtype : t4.dtype] * _(t4.shape), c3 = () => {
                  n3[e3] = true, null == r2[e3] && (r2[e3] = []), r2[e3].push({ manifestEntry: t4, groupOffset: i3, sizeBytes: o3 });
                };
                null != a2 ? a2.forEach((n4, r3) => {
                  n4 === t4.name && (c3(), s2[r3] = true);
                }) : c3(), u2.push(t4.name), i3 += o3;
              });
            }), !s2.every((t3) => t3)) throw c2 = a2.filter((t3, n4) => !s2[n4]), Error("Could not find weights in manifest with names: " + c2.join(", ") + ". \nManifest JSON has weights with names: " + u2.join(", ") + ".");
            return l2 = n3.reduce((t3, n4, r3) => (n4 && t3.push(r3), t3), []), h2 = [], l2.forEach((t3) => {
              i2[t3].paths.forEach((t4) => {
                var n4 = o2 + (o2.endsWith("/") ? "" : "/") + t4;
                h2.push(n4);
              });
            }), [4, t2(h2)];
          case 1:
            return f2 = e2.sent(), d2 = {}, v2 = 0, l2.forEach((t3) => {
              for (var n4 = i2[t3].paths.length, e3 = 0, o3 = 0; n4 > o3; o3++) e3 += f2[v2 + o3].byteLength;
              for (var a3 = new ArrayBuffer(e3), s3 = new Uint8Array(a3), u3 = 0, c3 = 0; n4 > c3; c3++) {
                var l3 = new Uint8Array(f2[v2 + c3]);
                s3.set(l3, u3), u3 += l3.byteLength;
              }
              r2[t3].forEach((t4) => {
                var n5 = yh(a3.slice(t4.groupOffset, t4.groupOffset + t4.sizeBytes), [t4.manifestEntry]);
                for (var r3 in n5) d2[r3] = n5[r3];
              }), v2 += n4;
            }), [2, d2];
        }
      });
    });
  };
}
Oh.registerSaveRouter((t2) => {
  return o().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Qh.URL_SCHEME) ? (void 0 === (n2 = t2.slice(Qh.URL_SCHEME.length)) && (n2 = "model"), new Qh(n2)) : null;
  var n2;
});
var of = (function() {
  function t2(t3, n2) {
    if (this.DEFAULT_METHOD = "POST", null == n2 && (n2 = {}), this.weightPathPrefix = n2.weightPathPrefix, this.onProgress = n2.onProgress, null != n2.fetchFunc ? (g("function" == typeof n2.fetchFunc, () => "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"), this.fetch = n2.fetchFunc) : this.fetch = o().platform.fetch, g(null != t3 && t3.length > 0, () => "URL path for http must not be null, undefined or empty."), Array.isArray(t3) && g(2 === t3.length, () => "URL paths for http must have a length of 2, (actual length is " + t3.length + ")."), this.path = t3, null != n2.requestInit && null != n2.requestInit.body) throw Error("requestInit is expected to have no pre-existing body, but has one.");
    this.requestInit = n2.requestInit || {};
  }
  return t2.prototype.save = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (t3.modelTopology instanceof ArrayBuffer) throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
            return (n2 = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit)).body = new FormData(), n2.body.append("model.json", new Blob([JSON.stringify({ modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata, weightsManifest: [{ paths: ["./model.weights.bin"], weights: t3.weightSpecs }] })], { type: "application/json" }), "model.json"), null != t3.weightData && n2.body.append("model.weights.bin", new Blob([t3.weightData], { type: "application/octet-stream" }), "model.weights.bin"), [4, this.fetch(this.path, n2)];
          case 1:
            if ((r2 = e2.sent()).ok) return [2, { modelArtifactsInfo: Nh(t3), responses: [r2] }];
            throw Error("BrowserHTTPRequest.save() failed due to HTTP response status " + r2.status + ".");
        }
      });
    });
  }, t2.prototype.load = function() {
    return r(this, 0, void 0, function() {
      var t3, n2, r2, i2, o2, a2, s2, u2, c2, l2, h2, f2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.fetch(this.path, this.requestInit)];
          case 1:
            if (!(t3 = e2.sent()).ok) throw Error("Request to " + this.path + " failed with status code " + t3.status + ". Please verify this URL points to the model JSON of the model to load.");
            e2.label = 2;
          case 2:
            return e2.trys.push([2, 4, , 5]), [4, t3.json()];
          case 3:
            return n2 = e2.sent(), [3, 5];
          case 4:
            throw e2.sent(), r2 = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? r2 += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : r2 += " Please make sure the server is serving valid JSON for this request.", Error(r2);
          case 5:
            if (o2 = n2.weightsManifest, a2 = n2.generatedBy, s2 = n2.convertedBy, u2 = n2.format, c2 = n2.userDefinedMetadata, null == (i2 = n2.modelTopology) && null == o2) throw Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
            return null == o2 ? [3, 7] : [4, this.loadWeights(o2)];
          case 6:
            f2 = e2.sent(), l2 = f2[0], h2 = f2[1], e2.label = 7;
          case 7:
            return [2, { modelTopology: i2, weightSpecs: l2, weightData: h2, userDefinedMetadata: c2, generatedBy: a2, convertedBy: s2, format: u2 }];
        }
      });
    });
  }, t2.prototype.loadWeights = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2, i2, o2, a2, s2, u2, c2, l2;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            for (f2 = (h2 = Array.isArray(this.path) ? this.path[1] : this.path).lastIndexOf("/"), d2 = h2.lastIndexOf("?"), n2 = [h2.substring(0, f2) + "/", d2 > f2 ? h2.substring(d2) : ""], r2 = n2[0], i2 = n2[1], o2 = this.weightPathPrefix || r2, a2 = [], s2 = 0, u2 = t3; u2.length > s2; s2++) a2.push.apply(a2, u2[s2].weights);
            return c2 = [], t3.forEach((t4) => {
              t4.paths.forEach((t5) => {
                c2.push(o2 + t5 + i2);
              });
            }), [4, rf(c2, { requestInit: this.requestInit, fetchFunc: this.fetch, onProgress: this.onProgress })];
          case 1:
            return l2 = e2.sent(), [2, [a2, Rh(l2)]];
        }
        var h2, f2, d2;
      });
    });
  }, t2.URL_SCHEME_REGEX = /^https?:\/\//, t2;
})();
function af(t2) {
  return null != t2.match(of.URL_SCHEME_REGEX);
}
var sf = (t2, n2) => "undefined" == typeof fetch ? null : (Array.isArray(t2) ? t2.every((t3) => af(t3)) : af(t2)) ? uf(t2, { onProgress: n2 }) : null;
function uf(t2, n2) {
  return new of(t2, n2);
}
Oh.registerSaveRouter(sf), Oh.registerLoadRouter(sf);
var cf;
var lf = (function() {
  function t2(t3) {
    this.modelArtifacts = t3;
  }
  return t2.prototype.load = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        return [2, this.modelArtifacts];
      });
    });
  }, t2;
})();
var hf = (function() {
  function t2(t3) {
    this.saveHandler = t3;
  }
  return t2.prototype.save = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        return [2, this.saveHandler(t3)];
      });
    });
  }, t2;
})();
var ff = Object.freeze({ browserFiles(t2) {
  return new tf(t2);
}, browserHTTPRequest(t2, n2) {
  return uf(t2, n2);
}, concatenateArrayBuffers: Rh, decodeWeights: yh, encodeWeights(t2, n2) {
  return r(this, 0, void 0, function() {
    var i2, o2, a2, s2, u2, c2 = this;
    return e(this, function(l2) {
      switch (l2.label) {
        case 0:
          for (i2 = [], o2 = [], a2 = Array.isArray(t2) ? t2.map((t3) => t3.name) : Object.keys(t2), s2 = function(s3) {
            var u3 = a2[s3], l3 = Array.isArray(t2) ? t2[s3].tensor : t2[u3];
            if ("float32" !== l3.dtype && "int32" !== l3.dtype && "bool" !== l3.dtype && "string" !== l3.dtype) throw Error("Unsupported dtype in weight '" + u3 + "': " + l3.dtype);
            var h2 = { name: u3, shape: l3.shape, dtype: l3.dtype };
            if ("string" === l3.dtype) {
              var f2 = new Promise(function(t3) {
                return r(c2, 0, void 0, function() {
                  var n3, r2, i3, o3, a3, s4, u4;
                  return e(this, (e2) => {
                    switch (e2.label) {
                      case 0:
                        return [4, l3.bytes()];
                      case 1:
                        for (n3 = e2.sent(), r2 = n3.reduce((t4, n4) => t4 + n4.length, 0) + 4 * n3.length, i3 = new Uint8Array(r2), o3 = 0, a3 = 0; n3.length > a3; a3++) s4 = n3[a3], u4 = new Uint8Array(new Uint32Array([s4.length]).buffer), i3.set(u4, o3), i3.set(s4, o3 += 4), o3 += s4.length;
                        return t3(i3), [2];
                    }
                  });
                });
              });
              o2.push(f2);
            } else o2.push(l3.data());
            null != n2 && (h2.group = n2), i2.push(h2);
          }, u2 = 0; a2.length > u2; ++u2) s2(u2);
          return [4, Promise.all(o2)];
        case 1:
          return [2, { data: Ch(l2.sent()), specs: i2 }];
      }
    });
  });
}, fromMemory(t2, n2, r2, e2) {
  return 1 === arguments.length ? null != t2.modelTopology || null != t2.weightSpecs ? new lf(t2) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new lf({ modelTopology: t2 })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new lf({ modelTopology: t2, weightSpecs: n2, weightData: r2, trainingConfig: e2 }));
}, getLoadHandlers(t2, n2) {
  return Oh.getLoadHandlers(t2, n2);
}, getModelArtifactsInfoForJSON: Nh, getSaveHandlers(t2) {
  return Oh.getSaveHandlers(t2);
}, http: uf, isHTTPScheme: af, loadWeights(t2, n2, i2, o2) {
  return void 0 === n2 && (n2 = ""), r(this, 0, void 0, function() {
    return e(this, (r2) => [2, ef((t3) => rf(t3, { requestInit: o2 }))(t2, n2, i2)]);
  });
}, registerLoadRouter(t2) {
  return Oh.registerLoadRouter(t2);
}, registerSaveRouter(t2) {
  return Oh.registerSaveRouter(t2);
}, weightsLoaderFactory: ef, withSaveHandler(t2) {
  return new hf(t2);
}, copyModel(t2, n2) {
  return r(this, 0, void 0, function() {
    return e(this, (r2) => [2, Sh(t2, n2, false)]);
  });
}, listModels() {
  return r(this, 0, void 0, function() {
    var t2, n2, r2, i2, o2, a2, s2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          t2 = Ih.getSchemes(), n2 = {}, r2 = 0, i2 = t2, e2.label = 1;
        case 1:
          return i2.length > r2 ? [4, Ih.getManager(o2 = i2[r2]).listModels()] : [3, 4];
        case 2:
          for (s2 in a2 = e2.sent()) n2[o2 + Mh + s2] = a2[s2];
          e2.label = 3;
        case 3:
          return r2++, [3, 1];
        case 4:
          return [2, n2];
      }
    });
  });
}, moveModel(t2, n2) {
  return r(this, 0, void 0, function() {
    return e(this, (r2) => [2, Sh(t2, n2, true)]);
  });
}, removeModel(t2) {
  return r(this, 0, void 0, function() {
    var n2;
    return e(this, (r2) => (n2 = Th(t2), [2, Ih.getManager(n2.scheme).removeModel(n2.path)]));
  });
} });
var df = er({ confusionMatrix_(t2, n2, r2) {
  var e2 = qn(t2, "labels", "confusionMatrix"), i2 = qn(n2, "predictions", "confusionMatrix");
  g(null == r2 || r2 > 0 && Number.isInteger(r2), () => "If provided, numClasses must be a positive integer, but got " + r2), g(1 === e2.rank, () => "Expected the rank of labels to be 1, but got " + e2.rank), g(1 === i2.rank, () => "Expected the rank of predictions to be 1, but got " + i2.rank), g(e2.shape[0] === i2.shape[0], () => "Mismatch in the number of examples: " + e2.shape[0] + " vs. " + i2.shape[0] + ". Labels and predictions should have the same number of elements."), g(r2 > 0 && Number.isInteger(r2), () => "numClasses is required to be a positive integer, but got " + r2);
  var o2 = Qr(e2.asType("int32"), r2), a2 = Qr(i2.asType("int32"), r2);
  return o2.transpose().matMul(a2).asType("int32");
} });
var vf = Object.freeze({ confusionMatrix: df });
var pf = er({ fromPixels_(t2, n2) {
  if (void 0 === n2 && (n2 = 3), n2 > 4) throw Error("Cannot construct Tensor with more than 4 channels from pixels.");
  if (null == t2) throw Error("pixels passed to tf.browser.fromPixels() can not be null");
  var r2 = false, e2 = false, i2 = false, o2 = false, a2 = false;
  if (t2.data instanceof Uint8Array) r2 = true;
  else if ("undefined" != typeof ImageData && t2 instanceof ImageData) e2 = true;
  else if ("undefined" != typeof HTMLVideoElement && t2 instanceof HTMLVideoElement) i2 = true;
  else if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement) o2 = true;
  else {
    if (null == t2.getContext) throw Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + t2.constructor.name);
    a2 = true;
  }
  if (i2 && i2 && 2 > t2.readyState) throw Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
  if (null != c("FromPixels", St.backendName)) return St.runKernel("FromPixels", { pixels: t2 }, { numChannels: n2 });
  var s2, u2, l2 = i2 ? [t2.videoWidth, t2.videoHeight] : [t2.width, t2.height], h2 = l2[0], f2 = l2[1];
  if (a2 ? s2 = t2.getContext("2d").getImageData(0, 0, h2, f2).data : e2 || r2 ? s2 = t2.data : (o2 || i2) && (null == cf && (cf = document.createElement("canvas").getContext("2d")), cf.canvas.width = h2, cf.canvas.height = f2, cf.drawImage(t2, 0, 0, h2, f2), s2 = cf.getImageData(0, 0, h2, f2).data), 4 === n2) u2 = new Int32Array(s2);
  else {
    var d2 = h2 * f2;
    u2 = new Int32Array(d2 * n2);
    for (var v2 = 0; d2 > v2; v2++) for (var p2 = 0; n2 > p2; ++p2) u2[v2 * n2 + p2] = s2[4 * v2 + p2];
  }
  return fr(u2, [f2, h2, n2], "int32");
} });
var mf = Object.freeze({ toPixels(t2, n2) {
  return r(this, 0, void 0, function() {
    var r2, i2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2, w2, y2, C2, _2;
    return e(this, (e2) => {
      switch (e2.label) {
        case 0:
          if (r2 = qn(t2, "img", "toPixels"), t2 instanceof vt || (r2 = r2.toInt()), 2 !== r2.rank && 3 !== r2.rank) throw Error("toPixels only supports rank 2 or 3 tensors, got rank " + r2.rank + ".");
          if (i2 = r2.shape.slice(0, 2), o2 = i2[0], a2 = i2[1], (s2 = 2 === r2.rank ? 1 : r2.shape[2]) > 4 || 2 === s2) throw Error("toPixels only supports depth of size 1, 3 or 4 but got " + s2);
          return [4, r2.data()];
        case 1:
          return u2 = e2.sent(), c2 = r2.min(), l2 = r2.max(), [4, Promise.all([c2.data(), l2.data()])];
        case 2:
          if (h2 = e2.sent(), f2 = h2[0][0], d2 = h2[1][0], c2.dispose(), l2.dispose(), "float32" === r2.dtype) {
            if (0 > f2 || d2 > 1) throw Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + f2 + " - " + d2 + "].");
          } else {
            if ("int32" !== r2.dtype) throw Error("Unsupported type for toPixels: " + r2.dtype + ". Please use float32 or int32 tensors.");
            if (0 > f2 || d2 > 255) throw Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + f2 + " - " + d2 + "].");
          }
          for (v2 = "float32" === r2.dtype ? 255 : 1, p2 = new Uint8ClampedArray(a2 * o2 * 4), m2 = 0; o2 * a2 > m2; ++m2) x2 = void 0, b2 = void 0, g2 = void 0, w2 = void 0, 1 === s2 ? (x2 = u2[m2] * v2, b2 = u2[m2] * v2, g2 = u2[m2] * v2, w2 = 255) : 3 === s2 ? (x2 = u2[3 * m2] * v2, b2 = u2[3 * m2 + 1] * v2, g2 = u2[3 * m2 + 2] * v2, w2 = 255) : 4 === s2 && (x2 = u2[4 * m2] * v2, b2 = u2[4 * m2 + 1] * v2, g2 = u2[4 * m2 + 2] * v2, w2 = u2[4 * m2 + 3] * v2), p2[0 + (y2 = 4 * m2)] = Math.round(x2), p2[y2 + 1] = Math.round(b2), p2[y2 + 2] = Math.round(g2), p2[y2 + 3] = Math.round(w2);
          return null != n2 && (n2.width = a2, n2.height = o2, C2 = n2.getContext("2d"), _2 = new ImageData(p2, a2, o2), C2.putImageData(_2, 0, 0)), r2 !== t2 && r2.dispose(), [2, p2];
      }
    });
  });
}, fromPixels: pf });
var xf = (function() {
  function t2() {
  }
  return t2.prototype.getClassName = function() {
    return this.constructor.className;
  }, t2.fromConfig = (t3, n2) => new t3(n2), t2;
})();
var bf = (function() {
  function t2() {
    this.classNameMap = {};
  }
  return t2.getMap = () => (null == t2.instance && (t2.instance = new t2()), t2.instance), t2.register = (n2) => {
    t2.getMap().classNameMap[n2.className] = [n2, n2.fromConfig];
  }, t2;
})();
function gf(t2) {
  g(null != t2.className, () => "Class being registered does not have the static className property defined."), g("string" == typeof t2.className, () => "className is required to be a string, but got type " + typeof t2.className), g(t2.className.length > 0, () => "Class being registered has an empty-string as its className, which is disallowed."), bf.register(t2);
}
var wf = Object.freeze({ Serializable: xf, SerializationMap: bf, registerClass: gf });
function yf() {
  return 32 === St.backend.floatPrecision() ? 1e-3 : 0.1;
}
function Cf(t2, n2, r2) {
  var e2 = true;
  if ((B(t2) || B(n2)) && (e2 = false), B(t2) && B(n2) && (e2 = true), e2) {
    var i2 = t2.constructor.name, o2 = n2.constructor.name;
    if (i2 !== o2) throw Error("Arrays are of different type. Actual: " + i2 + ". Expected: " + o2);
  }
  if (Array.isArray(t2) && Array.isArray(n2)) {
    var a2 = Un(t2), s2 = Un(n2);
    if (!E(a2, s2)) throw Error("Arrays have different shapes. Actual: [" + a2 + "]. Expected: [" + s2 + "]");
  }
  var u2 = B(t2) ? t2 : C(t2), c2 = B(n2) ? n2 : C(n2);
  if (u2.length !== c2.length) throw Error("Arrays have different lengths actual: " + u2.length + " vs expected: " + c2.length + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
  for (var l2 = 0; c2.length > l2; ++l2) {
    var h2 = u2[l2], f2 = c2[l2];
    if (!r2(h2, f2)) throw Error("Arrays differ: actual[" + l2 + "] = " + h2 + ", expected[" + l2 + "] = " + f2 + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
  }
}
function _f(t2, n2, r2) {
  return !isFinite(t2) && !isFinite(n2) || !(isNaN(t2) || isNaN(n2) || Math.abs(t2 - n2) > r2);
}
var Ef = Object.freeze({ TEST_EPSILON_FLOAT16: 0.1, expectArraysClose(t2, n2, r2) {
  return null == r2 && (r2 = yf()), Cf(t2, n2, (t3, n3) => _f(t3, n3, r2));
}, testEpsilon: yf, expectPromiseToFail(t2, n2) {
  t2().then(() => n2.fail(), () => n2());
}, expectArraysEqual(t2, n2) {
  var r2 = "string" == typeof n2 || "number" == typeof n2 || "boolean" == typeof n2 ? [n2] : n2;
  return z(t2) || z(t2[0]) || z(n2) || z(n2[0]) ? Cf(t2, r2, (t3, n3) => t3 == n3) : Cf(t2, n2, (t3, n3) => _f(t3, n3, 0));
}, expectNumbersClose(t2, n2, r2) {
  if (null == r2 && (r2 = yf()), !_f(t2, n2, r2)) throw Error("Numbers differ: actual === " + t2 + ", expected === " + n2);
}, expectValuesInRange(t2, n2, r2) {
  for (var e2 = 0; t2.length > e2; e2++) if (n2 > t2[e2] || t2[e2] > r2) throw Error("Value out of range:" + t2[e2] + " low: " + n2 + ", high: " + r2);
}, expectArrayBuffersEqual(t2, n2) {
  expect(new Float32Array(t2)).toEqual(new Float32Array(n2));
} });
var Rf = Object.freeze({ gpgpu_util: na, webgl_util: Fn, forceHalfFloat() {
  o().set("WEBGL_FORCE_F16_TEXTURES", true);
}, MathBackendWebGL: ms, setWebGLContext: Wt, GPGPUContext: ra });
var Af = (function(t2) {
  function i2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return n(i2, t2), i2.prototype.minimize = function(t3, n2, r2) {
    void 0 === n2 && (n2 = false);
    var e2 = this.computeGradients(t3, r2), i3 = e2.value, o2 = e2.grads;
    if (null != r2) {
      var a2 = r2.map((t4) => ({ name: t4.name, tensor: o2[t4.name] }));
      this.applyGradients(a2);
    } else this.applyGradients(o2);
    return Wn(o2), n2 ? i3 : (i3.dispose(), null);
  }, Object.defineProperty(i2.prototype, "iterations", { get() {
    return null == this.iterations_ && (this.iterations_ = 0), this.iterations_;
  }, enumerable: true, configurable: true }), i2.prototype.incrementIterations = function() {
    this.iterations_ = this.iterations + 1;
  }, i2.prototype.computeGradients = (t3, n2) => Le(t3, n2), i2.prototype.dispose = function() {
    null != this.iterations_ && Wn(this.iterations_);
  }, i2.prototype.saveIterations = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        return null == this.iterations_ && (this.iterations_ = 0), [2, { name: "iter", tensor: cr(this.iterations_, "int32") }];
      });
    });
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      return e(this, (t3) => {
        throw Error("getWeights() is not implemented for this optimizer yet.");
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(t4) {
        throw Error("setWeights() is not implemented for this optimizer class " + this.getClassName());
      });
    });
  }, i2.prototype.extractIterations = function(t3) {
    return r(this, 0, void 0, function() {
      var n2;
      return e(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = this, [4, t3[0].tensor.data()];
          case 1:
            return n2.iterations_ = r2.sent()[0], [2, t3.slice(1)];
        }
      });
    });
  }, i2;
})(xf);
Object.defineProperty(Af, Symbol.hasInstance, { value(t2) {
  return null != t2.minimize && null != t2.computeGradients && null != t2.applyGradients;
} });
var Nf = (function(t2) {
  function i2(n2, r2, e2) {
    void 0 === e2 && (e2 = null);
    var i3 = t2.call(this) || this;
    return i3.learningRate = n2, i3.rho = r2, i3.epsilon = e2, i3.accumulatedGrads = [], i3.accumulatedUpdates = [], null == e2 && (i3.epsilon = St.backend.epsilon()), i3;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this;
    (Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3)).forEach((r2, e2) => {
      var i3 = St.registeredVariables[r2];
      null == n2.accumulatedGrads[e2] && (n2.accumulatedGrads[e2] = { originalName: r2 + "/accum_grad", variable: Vn(() => _r(i3).variable(false)) }), null == n2.accumulatedUpdates[e2] && (n2.accumulatedUpdates[e2] = { originalName: r2 + "/accum_var", variable: Vn(() => _r(i3).variable(false)) });
      var o2 = Array.isArray(t3) ? t3[e2].tensor : t3[r2];
      if (null != o2) {
        var a2 = n2.accumulatedGrads[e2].variable, s2 = n2.accumulatedUpdates[e2].variable;
        Vn(() => {
          var t4 = a2.mul(n2.rho).add(o2.square().mul(1 - n2.rho)), r3 = s2.add(n2.epsilon).sqrt().div(a2.add(n2.epsilon).sqrt()).mul(o2), e3 = s2.mul(n2.rho).add(r3.square().mul(1 - n2.rho));
          a2.assign(t4), s2.assign(e3);
          var u2 = r3.mul(-n2.learningRate).add(i3);
          i3.assign(u2);
        });
      }
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    null != this.accumulatedUpdates && (Wn(this.accumulatedGrads.map((t3) => t3.variable)), Wn(this.accumulatedUpdates.map((t3) => t3.variable)));
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return t3 = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
          case 1:
            return [2, [n2.sent()].concat(t3.map((t4) => ({ name: t4.originalName, tensor: t4.variable })))];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      var n2;
      return e(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = r2.sent(), this.accumulatedGrads = t3.slice(0, n2 = t3.length / 2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), this.accumulatedUpdates = t3.slice(n2, 2 * n2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.rho, n2.epsilon), i2.className = "Adadelta", i2;
})(Af);
gf(Nf);
var Of = (function(t2) {
  function i2(n2, r2) {
    void 0 === r2 && (r2 = 0.1);
    var e2 = t2.call(this) || this;
    return e2.learningRate = n2, e2.initialAccumulatorValue = r2, e2.accumulatedGrads = [], e2;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this;
    (Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3)).forEach((r2, e2) => {
      var i3 = St.registeredVariables[r2];
      null == n2.accumulatedGrads[e2] && (n2.accumulatedGrads[e2] = { originalName: r2 + "/accumulator", variable: Vn(() => gr(i3.shape, n2.initialAccumulatorValue).variable(false)) });
      var o2 = Array.isArray(t3) ? t3[e2].tensor : t3[r2];
      if (null != o2) {
        var a2 = n2.accumulatedGrads[e2].variable;
        Vn(() => {
          var t4 = a2.add(o2.square());
          a2.assign(t4);
          var r3 = o2.div(t4.add(St.backend.epsilon()).sqrt()).mul(-n2.learningRate).add(i3);
          i3.assign(r3);
        });
      }
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    null != this.accumulatedGrads && Wn(this.accumulatedGrads.map((t3) => t3.variable));
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()].concat(this.accumulatedGrads.map((t4) => ({ name: t4.originalName, tensor: t4.variable })))];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = n2.sent(), this.accumulatedGrads = t3.map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.initialAccumulatorValue), i2.className = "Adagrad", i2;
})(Af);
gf(Of);
var Mf = (function(t2) {
  function i2(n2, r2, e2, i3) {
    void 0 === i3 && (i3 = null);
    var o2 = t2.call(this) || this;
    return o2.learningRate = n2, o2.beta1 = r2, o2.beta2 = e2, o2.epsilon = i3, o2.accumulatedFirstMoment = [], o2.accumulatedSecondMoment = [], Vn(() => {
      o2.accBeta1 = cr(r2).variable(), o2.accBeta2 = cr(e2).variable();
    }), null == i3 && (o2.epsilon = St.backend.epsilon()), o2;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this, r2 = Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3);
    Vn(() => {
      var e2 = Vu(1, n2.accBeta1), i3 = Vu(1, n2.accBeta2);
      r2.forEach((r3, o2) => {
        var a2 = St.registeredVariables[r3];
        null == n2.accumulatedFirstMoment[o2] && (n2.accumulatedFirstMoment[o2] = { originalName: r3 + "/m", variable: Vn(() => _r(a2).variable(false)) }), null == n2.accumulatedSecondMoment[o2] && (n2.accumulatedSecondMoment[o2] = { originalName: r3 + "/v", variable: Vn(() => _r(a2).variable(false)) });
        var s2 = Array.isArray(t3) ? t3[o2].tensor : t3[r3];
        if (null != s2) {
          var u2 = n2.accumulatedFirstMoment[o2].variable, c2 = n2.accumulatedSecondMoment[o2].variable, l2 = u2.mul(n2.beta1).add(s2.mul(1 - n2.beta1)), h2 = c2.mul(n2.beta2).add(s2.square().mul(1 - n2.beta2)), f2 = l2.div(e2), d2 = h2.div(i3);
          u2.assign(l2), c2.assign(h2);
          var v2 = f2.div(d2.sqrt().add(n2.epsilon)).mul(-n2.learningRate).add(a2);
          a2.assign(v2);
        }
      }), n2.accBeta1.assign(n2.accBeta1.mul(n2.beta1)), n2.accBeta2.assign(n2.accBeta2.mul(n2.beta2));
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    this.accBeta1.dispose(), this.accBeta2.dispose(), null != this.accumulatedFirstMoment && Wn(this.accumulatedFirstMoment.map((t3) => t3.variable)), null != this.accumulatedSecondMoment && Wn(this.accumulatedSecondMoment.map((t3) => t3.variable));
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return t3 = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
          case 1:
            return [2, [n2.sent()].concat(t3.map((t4) => ({ name: t4.originalName, tensor: t4.variable })))];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      var n2, r2 = this;
      return e(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = e2.sent(), Vn(() => {
              r2.accBeta1.assign(Fu(r2.beta1, r2.iterations_ + 1)), r2.accBeta2.assign(Fu(r2.beta2, r2.iterations_ + 1));
            }), this.accumulatedFirstMoment = t3.slice(0, n2 = t3.length / 2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), this.accumulatedSecondMoment = t3.slice(n2, 2 * n2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.beta1, n2.beta2, n2.epsilon), i2.className = "Adam", i2;
})(Af);
gf(Mf);
var If = (function(t2) {
  function i2(n2, r2, e2, i3, o2) {
    void 0 === i3 && (i3 = null), void 0 === o2 && (o2 = 0);
    var a2 = t2.call(this) || this;
    return a2.learningRate = n2, a2.beta1 = r2, a2.beta2 = e2, a2.epsilon = i3, a2.decay = o2, a2.accumulatedFirstMoment = [], a2.accumulatedWeightedInfNorm = [], Vn(() => {
      a2.iteration = cr(0).variable(), a2.accBeta1 = cr(r2).variable();
    }), null == i3 && (a2.epsilon = St.backend.epsilon()), a2;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this, r2 = Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3);
    Vn(() => {
      var e2 = Vu(1, n2.accBeta1), i3 = Eu(-n2.learningRate, n2.iteration.mul(n2.decay).add(1));
      r2.forEach((r3, o2) => {
        var a2 = St.registeredVariables[r3];
        null == n2.accumulatedFirstMoment[o2] && (n2.accumulatedFirstMoment[o2] = { originalName: r3 + "/m", variable: _r(a2).variable(false) }), null == n2.accumulatedWeightedInfNorm[o2] && (n2.accumulatedWeightedInfNorm[o2] = { originalName: r3 + "/v", variable: _r(a2).variable(false) });
        var s2 = Array.isArray(t3) ? t3[o2].tensor : t3[r3];
        if (null != s2) {
          var u2 = n2.accumulatedFirstMoment[o2].variable, c2 = n2.accumulatedWeightedInfNorm[o2].variable, l2 = u2.mul(n2.beta1).add(s2.mul(1 - n2.beta1)), h2 = c2.mul(n2.beta2), f2 = s2.abs(), d2 = h2.maximum(f2);
          u2.assign(l2), c2.assign(d2);
          var v2 = i3.div(e2).mul(l2.div(d2.add(n2.epsilon))).add(a2);
          a2.assign(v2);
        }
      }), n2.iteration.assign(n2.iteration.add(1)), n2.accBeta1.assign(n2.accBeta1.mul(n2.beta1));
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    this.accBeta1.dispose(), this.iteration.dispose(), null != this.accumulatedFirstMoment && Wn(this.accumulatedFirstMoment.map((t3) => t3.variable)), null != this.accumulatedWeightedInfNorm && Wn(this.accumulatedWeightedInfNorm.map((t3) => t3.variable));
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      return e(this, (t3) => {
        throw Error("getWeights() is not implemented for Adamax yet.");
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, (t4) => {
        throw Error("setWeights() is not implemented for Adamax yet.");
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon, decay: this.decay };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.beta1, n2.beta2, n2.epsilon, n2.decay), i2.className = "Adamax", i2;
})(Af);
gf(If);
var Tf = (function(t2) {
  function i2(n2) {
    var r2 = t2.call(this) || this;
    return r2.learningRate = n2, r2.setLearningRate(n2), r2;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this;
    (Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3)).forEach((r2, e2) => {
      var i3 = Array.isArray(t3) ? t3[e2].tensor : t3[r2];
      if (null != i3) {
        var o2 = St.registeredVariables[r2];
        Vn(() => {
          var t4 = n2.c.mul(i3).add(o2);
          o2.assign(t4);
        });
      }
    }), this.incrementIterations();
  }, i2.prototype.setLearningRate = function(t3) {
    this.learningRate = t3, null != this.c && this.c.dispose(), this.c = zn(cr(-t3));
  }, i2.prototype.dispose = function() {
    this.c.dispose();
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()]];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            if (0 !== (t3 = n2.sent()).length) throw Error("SGD optimizer does not have settable weights.");
            return [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate), i2.className = "SGD", i2;
})(Af);
gf(Tf);
var Sf = (function(t2) {
  function i2(n2, r2, e2) {
    void 0 === e2 && (e2 = false);
    var i3 = t2.call(this, n2) || this;
    return i3.learningRate = n2, i3.momentum = r2, i3.useNesterov = e2, i3.accumulations = [], i3.m = cr(i3.momentum), i3;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this;
    (Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3)).forEach((r2, e2) => {
      var i3 = St.registeredVariables[r2];
      null == n2.accumulations[e2] && (n2.accumulations[e2] = { originalName: r2 + "/momentum", variable: Vn(() => _r(i3).variable(false)) });
      var o2 = n2.accumulations[e2].variable, a2 = Array.isArray(t3) ? t3[e2].tensor : t3[r2];
      null != a2 && Vn(() => {
        var t4, r3 = n2.m.mul(o2).add(a2);
        t4 = n2.useNesterov ? n2.c.mul(a2.add(r3.mul(n2.m))).add(i3) : n2.c.mul(r3).add(i3), o2.assign(r3), i3.assign(t4);
      });
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    this.m.dispose(), null != this.accumulations && Wn(this.accumulations.map((t3) => t3.variable));
  }, i2.prototype.setMomentum = function(t3) {
    this.momentum = t3;
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      return e(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()].concat(this.accumulations.map((t4) => ({ name: t4.originalName, tensor: t4.variable })))];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = n2.sent(), this.accumulations = t3.map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.momentum, n2.useNesterov), i2.className = "Momentum", i2;
})(Tf);
gf(Sf);
var Df = (function(t2) {
  function i2(n2, r2, e2, i3, o2) {
    void 0 === r2 && (r2 = 0.9), void 0 === e2 && (e2 = 0), void 0 === i3 && (i3 = null), void 0 === o2 && (o2 = false);
    var a2 = t2.call(this) || this;
    if (a2.learningRate = n2, a2.decay = r2, a2.momentum = e2, a2.epsilon = i3, a2.accumulatedMeanSquares = [], a2.accumulatedMoments = [], a2.accumulatedMeanGrads = [], a2.centered = o2, null == i3 && (a2.epsilon = St.backend.epsilon()), null == n2) throw Error("learningRate for RMSPropOptimizer must be defined.");
    return a2;
  }
  return n(i2, t2), i2.prototype.applyGradients = function(t3) {
    var n2 = this;
    (Array.isArray(t3) ? t3.map((t4) => t4.name) : Object.keys(t3)).forEach((r2, e2) => {
      var i3 = St.registeredVariables[r2];
      null == n2.accumulatedMeanSquares[e2] && (n2.accumulatedMeanSquares[e2] = { originalName: r2 + "/rms", variable: Vn(() => _r(i3).variable(false)) }), null == n2.accumulatedMoments[e2] && (n2.accumulatedMoments[e2] = { originalName: r2 + "/momentum", variable: Vn(() => _r(i3).variable(false)) }), null == n2.accumulatedMeanGrads[e2] && n2.centered && (n2.accumulatedMeanGrads[e2] = { originalName: r2 + "/mg", variable: Vn(() => _r(i3).variable(false)) });
      var o2 = Array.isArray(t3) ? t3[e2].tensor : t3[r2];
      if (null != o2) {
        var a2 = n2.accumulatedMeanSquares[e2].variable, s2 = n2.accumulatedMoments[e2].variable;
        Vn(() => {
          var t4 = a2.mul(n2.decay).add(o2.square().mul(1 - n2.decay));
          if (n2.centered) {
            var r3 = n2.accumulatedMeanGrads[e2].variable, u2 = r3.mul(n2.decay).add(o2.mul(1 - n2.decay)), c2 = s2.mul(n2.momentum).add(o2.mul(n2.learningRate).div(t4.sub(u2.square().add(n2.epsilon)).sqrt()));
            a2.assign(t4), r3.assign(u2), s2.assign(c2);
            var l2 = i3.sub(c2);
            i3.assign(l2);
          } else {
            var h2 = a2.mul(n2.decay).add(o2.square().mul(1 - n2.decay));
            c2 = s2.mul(n2.momentum).add(o2.mul(n2.learningRate).div(h2.add(n2.epsilon).sqrt())), a2.assign(h2), s2.assign(c2), l2 = i3.sub(c2), i3.assign(l2);
          }
        });
      }
    }), this.incrementIterations();
  }, i2.prototype.dispose = function() {
    null != this.accumulatedMeanSquares && Wn(this.accumulatedMeanSquares.map((t3) => t3.variable)), null != this.accumulatedMeanGrads && this.centered && Wn(this.accumulatedMeanGrads.map((t3) => t3.variable)), null != this.accumulatedMoments && Wn(this.accumulatedMoments.map((t3) => t3.variable));
  }, i2.prototype.getWeights = function() {
    return r(this, 0, void 0, function() {
      var t3;
      return e(this, function(n2) {
        switch (n2.label) {
          case 0:
            return t3 = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && t3.push.apply(t3, this.accumulatedMeanGrads), [4, this.saveIterations()];
          case 1:
            return [2, [n2.sent()].concat(t3.map((t4) => ({ name: t4.originalName, tensor: t4.variable })))];
        }
      });
    });
  }, i2.prototype.setWeights = function(t3) {
    return r(this, 0, void 0, function() {
      var n2;
      return e(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = r2.sent(), this.accumulatedMeanSquares = t3.slice(0, n2 = this.centered ? t3.length / 3 : t3.length / 2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), this.accumulatedMoments = t3.slice(n2, 2 * n2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) })), this.centered && (this.accumulatedMeanGrads = t3.slice(2 * n2, 3 * n2).map((t4) => ({ originalName: t4.name, variable: t4.tensor.variable(false) }))), [2];
        }
      });
    });
  }, i2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, decay: this.decay, momentum: this.momentum, epsilon: this.epsilon, centered: this.centered };
  }, i2.fromConfig = (t3, n2) => new t3(n2.learningRate, n2.decay, n2.momentum, n2.epsilon, n2.centered), i2.className = "RMSProp", i2;
})(Af);
gf(Df);
var kf = (() => {
  function t2() {
  }
  return t2.sgd = (t3) => new Tf(t3), t2.momentum = (t3, n2, r2) => (void 0 === r2 && (r2 = false), new Sf(t3, n2, r2)), t2.rmsprop = (t3, n2, r2, e2, i2) => (void 0 === n2 && (n2 = 0.9), void 0 === r2 && (r2 = 0), void 0 === e2 && (e2 = null), void 0 === i2 && (i2 = false), new Df(t3, n2, r2, e2, i2)), t2.adam = (t3, n2, r2, e2) => (void 0 === t3 && (t3 = 1e-3), void 0 === n2 && (n2 = 0.9), void 0 === r2 && (r2 = 0.999), void 0 === e2 && (e2 = null), new Mf(t3, n2, r2, e2)), t2.adadelta = (t3, n2, r2) => (void 0 === t3 && (t3 = 1e-3), void 0 === n2 && (n2 = 0.95), void 0 === r2 && (r2 = null), new Nf(t3, n2, r2)), t2.adamax = (t3, n2, r2, e2, i2) => (void 0 === t3 && (t3 = 2e-3), void 0 === n2 && (n2 = 0.9), void 0 === r2 && (r2 = 0.999), void 0 === e2 && (e2 = null), void 0 === i2 && (i2 = 0), new If(t3, n2, r2, e2, i2)), t2.adagrad = (t3, n2) => (void 0 === n2 && (n2 = 0.1), new Of(t3, n2)), t2;
})();
var Pf = { sgd: kf.sgd, momentum: kf.momentum, adadelta: kf.adadelta, adagrad: kf.adagrad, rmsprop: kf.rmsprop, adamax: kf.adamax, adam: kf.adam };
var Ff = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : (t2) => t2();
vt.prototype.squaredDifference = function(t2) {
  return gs(this, t2);
}, ft = ih;
var Lf = Object.freeze(Object.defineProperty({ __proto__: null, AdadeltaOptimizer: Nf, AdagradOptimizer: Of, AdamOptimizer: Mf, AdamaxOptimizer: If, DataStorage: Ge, get ENV() {
  return a;
}, Environment: i, KernelBackend: Ue, MomentumOptimizer: Sf, Optimizer: Af, RMSPropOptimizer: Df, get Rank() {
  return pt;
}, get Reduction() {
  return yl;
}, SGDOptimizer: Tf, Tensor: vt, TensorBuffer: lt, Variable: yt, abs: ws, acos: ys, acosh: Cs, add: wu, addN: yu, addStrict: Cu, all: Vc, any: Wc, argMax: zc, argMin: Gc, asin: _s, asinh: Es, atan: Rs, atan2: _u, atanh: As, avgPool: Mc, avgPool3d: Sc, backend() {
  return St.backend;
}, backend_util: ci, basicLSTMCell: ol, batchNorm: lu, batchNorm2d: hu, batchNorm3d: fu, batchNorm4d: du, batchNormalization: cu, batchNormalization2d: au, batchNormalization3d: su, batchNormalization4d: uu, batchToSpaceND: jr, booleanMaskAsync: ec, broadcastTo: qr, browser: mf, buffer: Gr, cast: Hr, ceil: Ns, clipByValue: Os, clone: Xr, complex: ir, concat: Er, concat1d: Rr, concat2d: Ar, concat3d: Nr, concat4d: Or, conv1d: sc, conv2d: uc, conv2dTranspose: mc, conv3d: cc, conv3dTranspose: xc, cos: Ms, cosh: Is, cumsum: $r, customGrad: Be, deprecationWarn: Bn, depthToSpace: Kr, depthwiseConv2d: fc, diag: bl, disableDeprecationWarnings() {
  o().set("DEPRECATION_WARNINGS_ENABLED", false), console.warn("TensorFlow.js deprecation warnings have been disabled.");
}, dispose: Wn, disposeVariables() {
  St.disposeVariables();
}, div: Eu, divNoNan: Ru, divStrict: Au, dot: gc, dropout: gl, elu: Yc, enableDebugMode() {
  o().set("DEBUG", true);
}, enableProdMode() {
  o().set("PROD", true);
}, engine() {
  return St;
}, env: o, equal: zu, equalStrict: Gu, erf: Ts, exp: Ss, expandDims: Yr, expm1: Ds, eye: Jr, fft: hl, fill: gr, findBackend(t2) {
  return St.findBackend(t2);
}, findBackendFactory(t2) {
  return St.findBackendFactory(t2);
}, floor: ks, floorDiv: Nu, frame: El, fused: eh, gather: nc, gatherND: xl, gather_util: _e, getBackend() {
  return St.backendName;
}, getGradient: l, getKernel: c, getKernelsForBackend: h, grad(t2) {
  return g(q(t2), () => "The f passed in grad(f) must be a function"), (n2, r2) => {
    var e2 = qn(n2, "x", "tf.grad", null), i2 = null != r2 ? qn(r2, "dy", "tf.grad") : null;
    return St.tidy(() => {
      var n3 = St.gradients(() => t2(e2), [e2], i2), r3 = n3.grads;
      return null != i2 && w(n3.value.shape, i2.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"), Ve(r3), r3[0];
    });
  };
}, grads(t2) {
  return g(q(t2), () => "The f passed in grads(f) must be a function"), (n2, r2) => {
    g(Array.isArray(n2), () => "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");
    var e2 = Hn(n2, "args", "tf.grads", null), i2 = null != r2 ? qn(r2, "dy", "tf.grads") : null;
    return St.tidy(() => {
      var n3 = St.gradients(() => t2.apply(void 0, e2), e2, i2), r3 = n3.grads;
      return null != i2 && w(n3.value.shape, i2.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), Ve(r3), r3;
    });
  };
}, greater: Uu, greaterEqual: ju, greaterEqualStrict: qu, greaterStrict: Hu, hammingWindow: _l, hannWindow: Cl, ifft: fl, imag: ar, image: Kl, inTopKAsync: Nl, io: ff, irfft: vl, isFinite: Hs, isInf: qs, isNaN: js, keep: zn, leakyRelu: Jc, less: Xu, lessEqual: $u, lessEqualStrict: Ku, lessStrict: Yu, linalg: Gl, linspace: wr, localResponseNormalization: el, log: Ps, log1p: Fs, logSigmoid: Ls, logSoftmax: ze, logSumExp: Uc, logicalAnd: vu, logicalNot: pu, logicalOr: mu, logicalXor: xu, losses: Ll, matMul: bc, math: vf, max: jc, maxPool: Oc, maxPool3d: Tc, maximum: Ou, maximumStrict: Mu, mean: qc, memory() {
  return St.memory();
}, min: Hc, minimum: Iu, minimumStrict: Tu, mod: Su, modStrict: Du, moments: Xc, movingAverage: sl, mul: ku, mulStrict: Pu, multiRNNCell: al, multinomial: Zr, neg: Bs, nextFrame() {
  return new Promise((t2) => Ff(() => t2()));
}, norm: il, notEqual: Ju, notEqualStrict: Zu, oneHot: Qr, ones: xr, onesLike: Cr, op: er, outerProduct: wc, pad: te, pad1d: ne, pad2d: re, pad3d: ee, pad4d: ie, pool: Ic, pow: Fu, powStrict: Lu, prelu: Zc, print: Ur, prod: Kc, profile(t2) {
  return St.profile(t2);
}, rand: oe, randomGamma: se, randomNormal: ae, randomUniform: ue, range: yr, ready() {
  return St.ready();
}, real: or, reciprocal: Vs, registerBackend(t2, n2, r2) {
  return void 0 === r2 && (r2 = 1), St.registerBackend(t2, n2, r2);
}, registerGradient: d, registerKernel: f, relu: Qc, relu6: tl, removeBackend(t2) {
  St.removeBackend(t2);
}, reshape: ce, reverse: yc, reverse1d: Cc, reverse2d: _c, reverse3d: Ec, reverse4d: Rc, rfft: dl, round: Ws, rsqrt: zs, scalar: cr, scatterND: ll, scatter_util: Oe, selu: nl, separableConv2d: pc, serialization: wf, setBackend(t2) {
  return St.setBackend(t2);
}, setPlatform(t2, n2) {
  o().setPlatform(t2, n2);
}, setdiff1dAsync: me, sigmoid: Gs, sign: Us, signal: Al, sin: Xs, sinh: $s, slice: Dc, slice1d: kc, slice2d: Pc, slice3d: Fc, slice4d: Lc, slice_util: Fe, softmax: We, softplus: Ks, spaceToBatchND: le, sparseToDense: ml, spectral: pl, split: Mr, sqrt: Ys, square: xs, squaredDifference: gs, squaredDifferenceStrict: Bu, squeeze: he, stack: fe, step: Js, stft: Rl, stridedSlice: ul, sub: Vu, subStrict: Wu, sum: $c, sumOutType: Et, tan: Zs, tanh: Qs, tensor: sr, tensor1d: lr, tensor2d: hr, tensor3d: fr, tensor4d: dr, tensor5d: vr, tensor6d: pr, tensor_util: Mt, test_util: Ef, tidy: Vn, tile: de, time(t2) {
  return St.time(t2);
}, topk: cl, train: Pf, transpose: rl, truncatedNormal: ve, unregisterGradient(t2) {
  if (!u.has(t2)) throw Error("The gradient '" + t2 + "' for backend is not registered");
  u.delete(t2);
}, unregisterKernel(t2, n2) {
  var r2 = v(t2, n2);
  if (!s.has(r2)) throw Error("The kernel '" + t2 + "' for backend '" + n2 + "' is not registered");
  s.delete(r2);
}, unsortedSegmentSum: rc, unstack: pe, util: it, valueAndGrad(t2) {
  return g(q(t2), () => "The f passed in valueAndGrad(f) must be a function"), (n2, r2) => {
    g(n2 instanceof vt, () => "The x passed in valueAndGrad(f)(x) must be a tensor"), g(null == r2 || r2 instanceof vt, () => "The dy passed in valueAndGrad(f)(x, dy) must be a tensor");
    var e2 = St.gradients(() => t2(n2), [n2], r2), i2 = e2.grads, o2 = e2.value;
    return Ve(i2), { grad: i2[0], value: o2 };
  };
}, valueAndGrads(t2) {
  return g(q(t2), () => "The f passed in valueAndGrads(f) must be a function"), (n2, r2) => {
    g(Array.isArray(n2) && n2.every((t3) => t3 instanceof vt), () => "The args passed in valueAndGrads(f)(args) must be array of tensors"), g(null == r2 || r2 instanceof vt, () => "The dy passed in valueAndGrads(f)(args, dy) must be a tensor");
    var e2 = St.gradients(() => t2.apply(void 0, n2), n2, r2);
    return null != r2 && w(e2.value.shape, r2.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), Ve(e2.grads), e2;
  };
}, variable: mr, variableGrads: Le, version_core: "1.7.0", webgl: Rf, where: bu, whereAsync: gu, zeros: br, zerosLike: _r }, Symbol.toStringTag, { value: "Module" }));
function Bf(t2, n2, r2) {
  if (void 0 === r2 && (r2 = false), t2.beginPath(), n2.slice(1).forEach((r3, e3) => {
    var i3 = r3.x, o2 = r3.y, a2 = n2[e3];
    t2.moveTo(a2.x, a2.y), t2.lineTo(i3, o2);
  }), r2) {
    var e2 = n2[n2.length - 1], i2 = n2[0];
    if (!e2 || !i2) return;
    t2.moveTo(e2.x, e2.y), t2.lineTo(i2.x, i2.y);
  }
  t2.stroke();
}
var Vf = (t2, n2) => (Vf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && ((t3, n3) => {
  t3.__proto__ = n3;
}) || ((t3, n3) => {
  for (var r2 in n3) n3.hasOwnProperty(r2) && (t3[r2] = n3[r2]);
}))(t2, n2);
function Wf(t2, n2) {
  function r2() {
    this.constructor = t2;
  }
  Vf(t2, n2), t2.prototype = null === n2 ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
}
var zf = function() {
  return zf = Object.assign || function(t2) {
    for (var n2, r2 = 1, e2 = arguments.length; e2 > r2; r2++) for (var i2 in n2 = arguments[r2]) ({}).hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
    return t2;
  }, zf.apply(this, arguments);
};
function Gf(t2, n2, r2, e2) {
  return new (r2 || (r2 = Promise))((n3, i2) => {
    function o2(t3) {
      try {
        s2(e2.next(t3));
      } catch (n4) {
        i2(n4);
      }
    }
    function a2(t3) {
      try {
        s2(e2.throw(t3));
      } catch (n4) {
        i2(n4);
      }
    }
    function s2(t3) {
      var e3;
      t3.done ? n3(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2((t4) => {
        t4(e3);
      })).then(o2, a2);
    }
    s2((e2 = e2.call(t2)).next());
  });
}
function Uf(t2, n2) {
  var r2, e2, i2, o2, a2 = { label: 0, sent() {
    if (1 & i2[0]) throw i2[1];
    return i2[1];
  }, trys: [], ops: [] };
  return o2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
    return this;
  }), o2;
  function s2(o3) {
    return (s3) => ((o4) => {
      if (r2) throw new TypeError("Generator is already executing.");
      for (; a2; ) try {
        if (r2 = 1, e2 && (i2 = 2 & o4[0] ? e2.return : o4[0] ? e2.throw || ((i2 = e2.return) && i2.call(e2), 0) : e2.next) && !(i2 = i2.call(e2, o4[1])).done) return i2;
        switch (e2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
          case 0:
          case 1:
            i2 = o4;
            break;
          case 4:
            return a2.label++, { value: o4[1], done: false };
          case 5:
            a2.label++, e2 = o4[1], o4 = [0];
            continue;
          case 7:
            o4 = a2.ops.pop(), a2.trys.pop();
            continue;
          default:
            if (!((i2 = (i2 = a2.trys).length > 0 && i2[i2.length - 1]) || 6 !== o4[0] && 2 !== o4[0])) {
              a2 = 0;
              continue;
            }
            if (3 === o4[0] && (!i2 || o4[1] > i2[0] && i2[3] > o4[1])) {
              a2.label = o4[1];
              break;
            }
            if (6 === o4[0] && i2[1] > a2.label) {
              a2.label = i2[1], i2 = o4;
              break;
            }
            if (i2 && i2[2] > a2.label) {
              a2.label = i2[2], a2.ops.push(o4);
              break;
            }
            i2[2] && a2.ops.pop(), a2.trys.pop();
            continue;
        }
        o4 = n2.call(t2, a2);
      } catch (s4) {
        o4 = [6, s4], e2 = 0;
      } finally {
        r2 = i2 = 0;
      }
      if (5 & o4[0]) throw o4[1];
      return { value: o4[0] ? o4[1] : void 0, done: true };
    })([o3, s3]);
  }
}
function jf() {
  for (var t2 = 0, n2 = 0, r2 = arguments.length; r2 > n2; n2++) t2 += arguments[n2].length;
  var e2 = Array(t2), i2 = 0;
  for (n2 = 0; r2 > n2; n2++) for (var o2 = arguments[n2], a2 = 0, s2 = o2.length; s2 > a2; a2++, i2++) e2[i2] = o2[a2];
  return e2;
}
var qf = (function() {
  function t2(t3, n2) {
    if (!ed(t3) || !ed(n2)) throw Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({ width: t3, height: n2 }));
    this.o = t3, this.u = n2;
  }
  return Object.defineProperty(t2.prototype, "width", { get() {
    return this.o;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "height", { get() {
    return this.u;
  }, enumerable: true, configurable: true }), t2.prototype.reverse = function() {
    return new t2(1 / this.width, 1 / this.height);
  }, t2;
})();
function Hf(t2, n2) {
  return t2 instanceof vt && t2.shape.length === n2;
}
function Xf(t2) {
  return Hf(t2, 2);
}
function $f(t2) {
  return Hf(t2, 3);
}
function Kf(t2) {
  return Hf(t2, 4);
}
function Yf(t2) {
  return t2 % 1 != 0;
}
function Jf(t2) {
  return t2 % 2 == 0;
}
function Zf(t2, n2) {
  void 0 === n2 && (n2 = 2);
  var r2 = Math.pow(10, n2);
  return Math.floor(t2 * r2) / r2;
}
function Qf(t2) {
  return t2 && t2.width && t2.height;
}
function td(t2, n2) {
  var r2 = t2.width, e2 = t2.height, i2 = n2 / Math.max(e2, r2);
  return new qf(Math.round(r2 * i2), Math.round(e2 * i2));
}
function nd(t2) {
  return t2.reduce((t3, n2) => t3.add(n2), new ad(0, 0)).div(new ad(t2.length, t2.length));
}
function rd(t2, n2, r2) {
  return Array(t2).fill(0).map((t3, e2) => n2 + e2 * r2);
}
function ed(t2) {
  return !!t2 && Infinity !== t2 && -Infinity !== t2 && !isNaN(t2) || 0 === t2;
}
function id(t2) {
  return ed(t2) && t2 >= 0 && 1 >= t2;
}
var od = Object.freeze(Object.defineProperty({ __proto__: null, computeReshapedDimensions: td, getCenterPoint: nd, isDimensions: Qf, isEven: Jf, isFloat: Yf, isTensor: Hf, isTensor1D(t2) {
  return Hf(t2, 1);
}, isTensor2D: Xf, isTensor3D: $f, isTensor4D: Kf, isValidNumber: ed, isValidProbablitiy: id, range: rd, round: Zf }, Symbol.toStringTag, { value: "Module" }));
var ad = (function() {
  function t2(t3, n2) {
    this.l = t3, this.p = n2;
  }
  return Object.defineProperty(t2.prototype, "x", { get() {
    return this.l;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "y", { get() {
    return this.p;
  }, enumerable: true, configurable: true }), t2.prototype.add = function(n2) {
    return new t2(this.x + n2.x, this.y + n2.y);
  }, t2.prototype.sub = function(n2) {
    return new t2(this.x - n2.x, this.y - n2.y);
  }, t2.prototype.mul = function(n2) {
    return new t2(this.x * n2.x, this.y * n2.y);
  }, t2.prototype.div = function(n2) {
    return new t2(this.x / n2.x, this.y / n2.y);
  }, t2.prototype.abs = function() {
    return new t2(Math.abs(this.x), Math.abs(this.y));
  }, t2.prototype.magnitude = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }, t2.prototype.floor = function() {
    return new t2(Math.floor(this.x), Math.floor(this.y));
  }, t2;
})();
var sd = (function() {
  function t2(n2, r2) {
    void 0 === r2 && (r2 = true);
    var e2 = n2 || {}, i2 = [e2.left, e2.top, e2.right, e2.bottom].every(ed), o2 = [e2.x, e2.y, e2.width, e2.height].every(ed);
    if (!o2 && !i2) throw Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(e2));
    var a2 = o2 ? [e2.x, e2.y, e2.width, e2.height] : [e2.left, e2.top, e2.right - e2.left, e2.bottom - e2.top], s2 = a2[0], u2 = a2[1], c2 = a2[2], l2 = a2[3];
    t2.assertIsValidBox({ x: s2, y: u2, width: c2, height: l2 }, "Box.constructor", r2), this.l = s2, this.p = u2, this.o = c2, this.u = l2;
  }
  return t2.isRect = (t3) => !!t3 && [t3.x, t3.y, t3.width, t3.height].every(ed), t2.assertIsValidBox = (n2, r2, e2) => {
    if (void 0 === e2 && (e2 = false), !t2.isRect(n2)) throw Error(r2 + " - invalid box: " + JSON.stringify(n2) + ", expected object with properties x, y, width, height");
    if (!e2 && (0 > n2.width || 0 > n2.height)) throw Error(r2 + " - width (" + n2.width + ") and height (" + n2.height + ") must be positive numbers");
  }, Object.defineProperty(t2.prototype, "x", { get() {
    return this.l;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "y", { get() {
    return this.p;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "width", { get() {
    return this.o;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "height", { get() {
    return this.u;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "left", { get() {
    return this.x;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "top", { get() {
    return this.y;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "right", { get() {
    return this.x + this.width;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "bottom", { get() {
    return this.y + this.height;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "area", { get() {
    return this.width * this.height;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "topLeft", { get() {
    return new ad(this.left, this.top);
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "topRight", { get() {
    return new ad(this.right, this.top);
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "bottomLeft", { get() {
    return new ad(this.left, this.bottom);
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "bottomRight", { get() {
    return new ad(this.right, this.bottom);
  }, enumerable: true, configurable: true }), t2.prototype.round = function() {
    var n2 = [this.x, this.y, this.width, this.height].map((t3) => Math.round(t3));
    return new t2({ x: n2[0], y: n2[1], width: n2[2], height: n2[3] });
  }, t2.prototype.floor = function() {
    var n2 = [this.x, this.y, this.width, this.height].map((t3) => Math.floor(t3));
    return new t2({ x: n2[0], y: n2[1], width: n2[2], height: n2[3] });
  }, t2.prototype.toSquare = function() {
    var n2 = this, r2 = n2.x, e2 = n2.y, i2 = n2.width, o2 = n2.height, a2 = Math.abs(i2 - o2);
    return o2 > i2 && (r2 -= a2 / 2, i2 += a2), i2 > o2 && (e2 -= a2 / 2, o2 += a2), new t2({ x: r2, y: e2, width: i2, height: o2 });
  }, t2.prototype.rescale = function(n2) {
    var r2 = Qf(n2) ? n2.width : n2, e2 = Qf(n2) ? n2.height : n2;
    return new t2({ x: this.x * r2, y: this.y * e2, width: this.width * r2, height: this.height * e2 });
  }, t2.prototype.pad = function(n2, r2) {
    var e2 = [this.x - n2 / 2, this.y - r2 / 2, this.width + n2, this.height + r2];
    return new t2({ x: e2[0], y: e2[1], width: e2[2], height: e2[3] });
  }, t2.prototype.clipAtImageBorders = function(n2, r2) {
    var e2 = this, i2 = e2.y, o2 = e2.right, a2 = e2.bottom, s2 = Math.max(e2.x, 0), u2 = Math.max(i2, 0), c2 = a2 - u2;
    return new t2({ x: s2, y: u2, width: Math.min(o2 - s2, n2 - s2), height: Math.min(c2, r2 - u2) }).floor();
  }, t2.prototype.shift = function(n2, r2) {
    return new t2({ x: this.x + n2, y: this.y + r2, width: this.width, height: this.height });
  }, t2.prototype.padAtBorders = function(t3, n2) {
    var r2 = this.width + 1, e2 = this.height + 1, i2 = r2, o2 = e2, a2 = this.left, s2 = this.top, u2 = this.right, c2 = this.bottom;
    return u2 > n2 && (i2 = -u2 + n2 + r2, u2 = n2), c2 > t3 && (o2 = -c2 + t3 + e2, c2 = t3), 1 > a2 && (o2 = 2 - a2, a2 = 1), 1 > s2 && (o2 = 2 - s2, s2 = 1), { dy: 1, edy: o2, dx: 1, edx: i2, y: s2, ey: c2, x: a2, ex: u2, w: r2, h: e2 };
  }, t2.prototype.calibrate = function(n2) {
    return new t2({ left: this.left + n2.left * this.width, top: this.top + n2.top * this.height, right: this.right + n2.right * this.width, bottom: this.bottom + n2.bottom * this.height }).toSquare().round();
  }, t2;
})();
var ud = (function(t2) {
  function n2(n3, r2, e2, i2, o2) {
    return void 0 === o2 && (o2 = false), t2.call(this, { left: n3, top: r2, right: e2, bottom: i2 }, o2) || this;
  }
  return Wf(n2, t2), n2;
})(sd);
var cd = (function() {
  function t2(t3, n2, r2, e2, i2) {
    this.C = new qf(i2.width, i2.height), this._ = t3, this.R = n2, this.A = r2, this.N = new sd(e2).rescale(this.C);
  }
  return Object.defineProperty(t2.prototype, "score", { get() {
    return this._;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "classScore", { get() {
    return this.R;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "className", { get() {
    return this.A;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "box", { get() {
    return this.N;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "imageDims", { get() {
    return this.C;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "imageWidth", { get() {
    return this.imageDims.width;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "imageHeight", { get() {
    return this.imageDims.height;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "relativeBox", { get() {
    return new sd(this.N).rescale(this.imageDims.reverse());
  }, enumerable: true, configurable: true }), t2.prototype.forSize = function(n2, r2) {
    return new t2(this.score, this.classScore, this.className, this.relativeBox, { width: n2, height: r2 });
  }, t2;
})();
var ld = (function(t2) {
  function n2(n3, r2, e2) {
    return t2.call(this, n3, n3, "", r2, e2) || this;
  }
  return Wf(n2, t2), n2.prototype.forSize = function(r2, e2) {
    var i2 = t2.prototype.forSize.call(this, r2, e2);
    return new n2(i2.score, i2.relativeBox, i2.imageDims);
  }, n2;
})(cd);
function hd(t2, n2, r2) {
  void 0 === r2 && (r2 = true);
  var e2 = Math.max(0, Math.min(t2.right, n2.right) - Math.max(t2.left, n2.left)) * Math.max(0, Math.min(t2.bottom, n2.bottom) - Math.max(t2.top, n2.top));
  return r2 ? e2 / (t2.area + n2.area - e2) : e2 / Math.min(t2.area, n2.area);
}
function fd(t2) {
  var n2 = t2.map((t3) => t3.x), r2 = t2.map((t3) => t3.y), e2 = n2.reduce((t3, n3) => t3 > n3 ? n3 : t3, Infinity), i2 = r2.reduce((t3, n3) => t3 > n3 ? n3 : t3, Infinity), o2 = n2.reduce((t3, n3) => n3 > t3 ? n3 : t3, 0), a2 = r2.reduce((t3, n3) => n3 > t3 ? n3 : t3, 0);
  return new ud(e2, i2, o2, a2);
}
function dd(t2, n2, r2, e2) {
  void 0 === e2 && (e2 = true);
  for (var i2 = n2.map((t3, n3) => ({ score: t3, boxIndex: n3 })).sort((t3, n3) => t3.score - n3.score).map((t3) => t3.boxIndex), o2 = [], a2 = () => {
    var n3 = i2.pop();
    o2.push(n3);
    for (var a3 = i2, s2 = [], u2 = 0; a3.length > u2; u2++) s2.push(hd(t2[n3], t2[a3[u2]], e2));
    i2 = i2.filter((t3, n4) => r2 >= s2[n4]);
  }; i2.length > 0; ) a2();
  return o2;
}
function vd(t2, n2) {
  return Vn(() => {
    var r2 = n2[0], e2 = n2[1], i2 = n2[2], o2 = gr(jf(t2.shape.slice(0, 3), [1]), r2), a2 = gr(jf(t2.shape.slice(0, 3), [1]), e2), s2 = gr(jf(t2.shape.slice(0, 3), [1]), i2), u2 = Er([o2, a2, s2], 3);
    return Vu(t2, u2);
  });
}
function pd(t2, n2) {
  return void 0 === n2 && (n2 = false), Vn(() => {
    var r2 = t2.shape.slice(1), e2 = r2[0], i2 = r2[1];
    if (e2 === i2) return t2;
    var o2 = Math.abs(e2 - i2), a2 = e2 > i2 ? 2 : 1, s2 = (n3) => {
      var r3 = t2.shape.slice();
      return r3[a2] = n3, gr(r3, 0);
    }, u2 = s2(Math.round(o2 * (n2 ? 0.5 : 1))), c2 = o2 - u2.shape[a2], l2 = [n2 && c2 ? s2(c2) : null, t2, u2].filter((t3) => !!t3).map((t3) => t3.toFloat());
    return Er(l2, a2);
  });
}
function md(t2) {
  for (var n2 = t2.slice(), r2 = n2.length - 1; r2 > 0; r2--) {
    var e2 = Math.floor(Math.random() * (r2 + 1)), i2 = n2[r2];
    n2[r2] = n2[e2], n2[e2] = i2;
  }
  return n2;
}
function xd(t2) {
  return 1 / (1 + Math.exp(-t2));
}
function bd(t2) {
  return Math.log(t2 / (1 - t2));
}
var gd;
var wd = (function(t2) {
  function n2(n3, r2, e2, i2, o2) {
    return void 0 === o2 && (o2 = false), t2.call(this, { x: n3, y: r2, width: e2, height: i2 }, o2) || this;
  }
  return Wf(n2, t2), n2;
})(sd);
var yd = (function() {
  function t2(t3, n2, r2) {
    void 0 === r2 && (r2 = new ad(0, 0));
    var e2 = n2.width, i2 = n2.height;
    this.O = new qf(e2, i2), this.M = r2, this.I = t3.map((t4) => t4.mul(new ad(e2, i2)).add(r2));
  }
  return Object.defineProperty(t2.prototype, "shift", { get() {
    return new ad(this.M.x, this.M.y);
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "imageWidth", { get() {
    return this.O.width;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "imageHeight", { get() {
    return this.O.height;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "positions", { get() {
    return this.I;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "relativePositions", { get() {
    var t3 = this;
    return this.I.map((n2) => n2.sub(t3.M).div(new ad(t3.imageWidth, t3.imageHeight)));
  }, enumerable: true, configurable: true }), t2.prototype.forSize = function(t3, n2) {
    return new this.constructor(this.relativePositions, { width: t3, height: n2 });
  }, t2.prototype.shiftBy = function(t3, n2) {
    return new this.constructor(this.relativePositions, this.O, new ad(t3, n2));
  }, t2.prototype.shiftByPoint = function(t3) {
    return this.shiftBy(t3.x, t3.y);
  }, t2.prototype.align = function(t3, n2) {
    if (void 0 === n2 && (n2 = {}), t3) {
      var r2 = t3 instanceof ld ? t3.box.floor() : new sd(t3);
      return this.shiftBy(r2.x, r2.y).align(null, n2);
    }
    var e2 = Object.assign({}, { useDlibAlignment: false, minBoxPadding: 0.2 }, n2), i2 = e2.minBoxPadding;
    return e2.useDlibAlignment ? this.alignDlib() : this.alignMinBbox(i2);
  }, t2.prototype.alignDlib = function() {
    var t3 = this.getRefPointsForAlignment(), n2 = t3[1], r2 = t3[2], e2 = (t4) => r2.sub(t4).magnitude(), i2 = (e2(t3[0]) + e2(n2)) / 2, o2 = Math.floor(i2 / 0.45), a2 = nd(t3), s2 = Math.floor(Math.max(0, a2.x - 0.5 * o2)), u2 = Math.floor(Math.max(0, a2.y - 0.43 * o2));
    return new wd(s2, u2, Math.min(o2, this.imageWidth + s2), Math.min(o2, this.imageHeight + u2));
  }, t2.prototype.alignMinBbox = function(t3) {
    var n2 = fd(this.positions);
    return n2.pad(n2.width * t3, n2.height * t3);
  }, t2.prototype.getRefPointsForAlignment = () => {
    throw Error("getRefPointsForAlignment not implemented by base class");
  }, t2;
})();
var Cd = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.getRefPointsForAlignment = function() {
    var t3 = this.positions;
    return [t3[0], t3[1], nd([t3[3], t3[4]])];
  }, n2;
})(yd);
var _d = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.getJawOutline = function() {
    return this.positions.slice(0, 17);
  }, n2.prototype.getLeftEyeBrow = function() {
    return this.positions.slice(17, 22);
  }, n2.prototype.getRightEyeBrow = function() {
    return this.positions.slice(22, 27);
  }, n2.prototype.getNose = function() {
    return this.positions.slice(27, 36);
  }, n2.prototype.getLeftEye = function() {
    return this.positions.slice(36, 42);
  }, n2.prototype.getRightEye = function() {
    return this.positions.slice(42, 48);
  }, n2.prototype.getMouth = function() {
    return this.positions.slice(48, 68);
  }, n2.prototype.getRefPointsForAlignment = function() {
    return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(nd);
  }, n2;
})(yd);
var Ed = (function() {
  function t2(t3, n2) {
    this.T = t3, this.D = n2;
  }
  return Object.defineProperty(t2.prototype, "label", { get() {
    return this.T;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "distance", { get() {
    return this.D;
  }, enumerable: true, configurable: true }), t2.prototype.toString = function(t3) {
    return void 0 === t3 && (t3 = true), this.label + (t3 ? " (" + Zf(this.distance) + ")" : "");
  }, t2;
})();
var Rd = (function(t2) {
  function n2(n3, r2) {
    var e2 = t2.call(this, n3) || this;
    return e2.T = r2, e2;
  }
  return Wf(n2, t2), n2.assertIsValidLabeledBox = (t3, n3) => {
    if (sd.assertIsValidBox(t3, n3), !ed(t3.label)) throw Error(n3 + " - expected property label (" + t3.label + ") to be a number");
  }, Object.defineProperty(n2.prototype, "label", { get() {
    return this.T;
  }, enumerable: true, configurable: true }), n2;
})(sd);
var Ad = (function() {
  function t2(t3, n2) {
    if ("string" != typeof t3) throw Error("LabeledFaceDescriptors - constructor expected label to be a string");
    if (!Array.isArray(n2) || n2.some((t4) => !(t4 instanceof Float32Array))) throw Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
    this.T = t3, this.k = n2;
  }
  return Object.defineProperty(t2.prototype, "label", { get() {
    return this.T;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "descriptors", { get() {
    return this.k;
  }, enumerable: true, configurable: true }), t2.prototype.toJSON = function() {
    return { label: this.label, descriptors: this.descriptors.map((t3) => Array.from(t3)) };
  }, t2.fromJSON = (n2) => {
    var r2 = n2.descriptors.map((t3) => new Float32Array(t3));
    return new t2(n2.label, r2);
  }, t2;
})();
var Nd = (function(t2) {
  function n2(n3, r2, e2, i2) {
    var o2 = t2.call(this, n3, r2) || this;
    return o2._ = e2, o2.R = i2, o2;
  }
  return Wf(n2, t2), n2.assertIsValidPredictedBox = (t3, n3) => {
    if (Rd.assertIsValidLabeledBox(t3, n3), !id(t3.score) || !id(t3.classScore)) throw Error(n3 + " - expected properties score (" + t3.score + ") and (" + t3.classScore + ") to be a number between [0, 1]");
  }, Object.defineProperty(n2.prototype, "score", { get() {
    return this._;
  }, enumerable: true, configurable: true }), Object.defineProperty(n2.prototype, "classScore", { get() {
    return this.R;
  }, enumerable: true, configurable: true }), n2;
})(Rd);
function Od(t2) {
  return t2.detection instanceof ld;
}
function Md(t2, n2) {
  return Object.assign({}, t2, { detection: n2 });
}
function Id() {
  var t2 = window.fetch || (() => {
    throw Error("fetch - missing fetch implementation for browser environment");
  });
  return { Canvas: HTMLCanvasElement, CanvasRenderingContext2D, Image: HTMLImageElement, ImageData, Video: HTMLVideoElement, createCanvasElement() {
    return document.createElement("canvas");
  }, createImageElement() {
    return document.createElement("img");
  }, fetch: t2, readFile() {
    throw Error("readFile - filesystem not available for browser environment");
  } };
}
function Td(t2) {
  var n2 = "";
  if (!t2) try {
    t2 = require_fs();
  } catch (r2) {
    n2 = "" + r2;
  }
  return { readFile: t2 ? (n3) => new Promise((r2, e2) => {
    t2.readFile(n3, (t3, n4) => t3 ? e2(t3) : r2(n4));
  }) : () => {
    throw Error("readFile - failed to require fs in nodejs environment with error: " + n2);
  } };
}
function Sd() {
  var t2 = global.Canvas || global.HTMLCanvasElement, n2 = global.Image || global.HTMLImageElement, r2 = global.fetch || (() => {
    throw Error("fetch - missing fetch implementation for nodejs environment");
  }), e2 = Td();
  return zf({ Canvas: t2 || /* @__PURE__ */ (() => () => {
  })(), CanvasRenderingContext2D: global.CanvasRenderingContext2D || /* @__PURE__ */ (() => () => {
  })(), Image: n2 || /* @__PURE__ */ (() => () => {
  })(), ImageData: global.ImageData || /* @__PURE__ */ (() => () => {
  })(), Video: global.HTMLVideoElement || /* @__PURE__ */ (() => () => {
  })(), createCanvasElement() {
    if (t2) return new t2();
    throw Error("createCanvasElement - missing Canvas implementation for nodejs environment");
  }, createImageElement() {
    if (n2) return new n2();
    throw Error("createImageElement - missing Image implementation for nodejs environment");
  }, fetch: r2 }, e2);
}
function Dd() {
  return "object" == typeof window && "undefined" != typeof document && "undefined" != typeof HTMLImageElement && "undefined" != typeof HTMLCanvasElement && "undefined" != typeof HTMLVideoElement && "undefined" != typeof ImageData && "undefined" != typeof CanvasRenderingContext2D;
}
function kd() {
  return "object" == typeof global && "function" == typeof __require && "undefined" != typeof module && "undefined" != typeof process && !!process.version;
}
function Pd(t2) {
  gd = t2;
}
function Fd() {
  Dd() && Pd(Id()), kd() && Pd(Sd());
}
var Ld;
var Bd;
var Vd = { getEnv() {
  if (!gd) throw Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
  return gd;
}, setEnv: Pd, initialize: Fd, createBrowserEnv: Id, createFileSystem: Td, createNodejsEnv: Sd, monkeyPatch(t2) {
  if (gd || Fd(), !gd) throw Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
  var n2 = t2.Canvas, r2 = void 0 === n2 ? gd.Canvas : n2, e2 = t2.Image, i2 = void 0 === e2 ? gd.Image : e2;
  gd.Canvas = r2, gd.Image = i2, gd.createCanvasElement = t2.createCanvasElement || (() => new r2()), gd.createImageElement = t2.createImageElement || (() => new i2()), gd.ImageData = t2.ImageData || gd.ImageData, gd.Video = t2.Video || gd.Video, gd.fetch = t2.fetch || gd.fetch, gd.readFile = t2.readFile || gd.readFile;
}, isBrowser: Dd, isNodejs: kd };
function Wd(t2) {
  return Vd.isNodejs() || "string" != typeof t2 ? t2 : document.getElementById(t2);
}
function zd(t2) {
  var n2 = Vd.getEnv(), r2 = n2.Canvas;
  if (t2 instanceof n2.CanvasRenderingContext2D) return t2;
  var e2 = Wd(t2);
  if (!(e2 instanceof r2)) throw Error("resolveContext2d - expected canvas to be of instance of Canvas");
  var i2 = e2.getContext("2d");
  if (!i2) throw Error("resolveContext2d - canvas 2d context is null");
  return i2;
}
Fd(), (Bd = Ld || (Ld = {})).TOP_LEFT = "TOP_LEFT", Bd.TOP_RIGHT = "TOP_RIGHT", Bd.BOTTOM_LEFT = "BOTTOM_LEFT", Bd.BOTTOM_RIGHT = "BOTTOM_RIGHT";
var Gd = /* @__PURE__ */ (function() {
  return function(t2) {
    void 0 === t2 && (t2 = {});
    var n2 = t2.backgroundColor, r2 = t2.fontColor, e2 = t2.fontSize, i2 = t2.fontStyle, o2 = t2.padding;
    this.anchorPosition = t2.anchorPosition || Ld.TOP_LEFT, this.backgroundColor = n2 || "rgba(0, 0, 0, 0.5)", this.fontColor = r2 || "rgba(255, 255, 255, 1)", this.fontSize = e2 || 14, this.fontStyle = i2 || "Georgia", this.padding = o2 || 4;
  };
})();
var Ud = (function() {
  function t2(n2, r2, e2) {
    void 0 === e2 && (e2 = {}), this.text = "string" == typeof n2 ? [n2] : n2 instanceof t2 ? n2.text : n2, this.anchor = r2, this.options = new Gd(e2);
  }
  return t2.prototype.measureWidth = function(t3) {
    var n2 = this.options.padding;
    return this.text.map((n3) => t3.measureText(n3).width).reduce((t4, n3) => n3 > t4 ? n3 : t4, 0) + 2 * n2;
  }, t2.prototype.measureHeight = function() {
    var t3 = this.options;
    return this.text.length * t3.fontSize + 2 * t3.padding;
  }, t2.prototype.getUpperLeft = function(t3, n2) {
    var r2 = this.options.anchorPosition, e2 = r2 === Ld.BOTTOM_RIGHT || r2 === Ld.TOP_RIGHT, i2 = r2 === Ld.BOTTOM_LEFT || r2 === Ld.BOTTOM_RIGHT, o2 = this.measureWidth(t3), a2 = this.measureHeight(), s2 = e2 ? this.anchor.x - o2 : this.anchor.x, u2 = i2 ? this.anchor.y - a2 : this.anchor.y;
    if (n2) {
      var c2 = n2.height;
      return { x: Math.max(Math.min(s2, n2.width - o2), 0), y: Math.max(Math.min(u2, c2 - a2), 0) };
    }
    return { x: s2, y: u2 };
  }, t2.prototype.draw = function(t3) {
    var n2 = Wd(t3), r2 = zd(n2), e2 = this.options, i2 = e2.backgroundColor, o2 = e2.fontColor, a2 = e2.fontSize, s2 = e2.padding;
    r2.font = a2 + "px " + e2.fontStyle;
    var u2 = this.measureWidth(r2), c2 = this.measureHeight();
    r2.fillStyle = i2;
    var l2 = this.getUpperLeft(r2, n2);
    r2.fillRect(l2.x, l2.y, u2, c2), r2.fillStyle = o2, this.text.forEach((t4, n3) => {
      r2.fillText(t4, s2 + l2.x, s2 + l2.y + (n3 + 1) * a2);
    });
  }, t2;
})();
var jd = /* @__PURE__ */ (function() {
  return function(t2) {
    void 0 === t2 && (t2 = {});
    var n2 = t2.lineWidth, r2 = t2.label, e2 = t2.drawLabelOptions;
    this.boxColor = t2.boxColor || "rgba(0, 0, 255, 1)", this.lineWidth = n2 || 2, this.label = r2, this.drawLabelOptions = new Gd(Object.assign({}, { anchorPosition: Ld.BOTTOM_LEFT, backgroundColor: this.boxColor }, e2));
  };
})();
var qd = (function() {
  function t2(t3, n2) {
    void 0 === n2 && (n2 = {}), this.box = new sd(t3), this.options = new jd(n2);
  }
  return t2.prototype.draw = function(t3) {
    var n2 = zd(t3), r2 = this.options, e2 = r2.lineWidth, i2 = this.box, o2 = i2.x, a2 = i2.y, s2 = i2.width, u2 = i2.height;
    n2.strokeStyle = r2.boxColor, n2.lineWidth = e2, n2.strokeRect(o2, a2, s2, u2);
    var c2 = this.options.label;
    c2 && new Ud([c2], { x: o2 - e2 / 2, y: a2 }, this.options.drawLabelOptions).draw(t3);
  }, t2;
})();
function Hd(t2) {
  var n2 = Vd.getEnv();
  return t2 instanceof n2.Image && t2.complete || t2 instanceof n2.Video && t2.readyState >= 3;
}
function Xd(t2) {
  return new Promise((n2, r2) => {
    if (t2 instanceof Vd.getEnv().Canvas || Hd(t2)) return n2();
    function e2(t3) {
      t3.currentTarget && (t3.currentTarget.removeEventListener("load", e2), t3.currentTarget.removeEventListener("error", i2), n2(t3));
    }
    function i2(t3) {
      t3.currentTarget && (t3.currentTarget.removeEventListener("load", e2), t3.currentTarget.removeEventListener("error", i2), r2(t3));
    }
    t2.addEventListener("load", e2), t2.addEventListener("error", i2);
  });
}
function $d(t2) {
  return new Promise((n2, r2) => {
    if (!(t2 instanceof Blob)) return r2("bufferToImage - expected buf to be of type: Blob");
    var e2 = new FileReader();
    e2.onload = () => {
      if ("string" != typeof e2.result) return r2("bufferToImage - expected reader.result to be a string, in onload");
      var t3 = Vd.getEnv().createImageElement();
      t3.onload = () => n2(t3), t3.onerror = r2, t3.src = e2.result;
    }, e2.onerror = r2, e2.readAsDataURL(t2);
  });
}
function Kd(t2) {
  var n2 = Vd.getEnv(), r2 = n2.Video;
  return t2 instanceof n2.Image ? new qf(t2.naturalWidth, t2.naturalHeight) : t2 instanceof r2 ? new qf(t2.videoWidth, t2.videoHeight) : new qf(t2.width, t2.height);
}
function Yd(t2) {
  var n2 = t2.width, r2 = t2.height, e2 = (0, Vd.getEnv().createCanvasElement)();
  return e2.width = n2, e2.height = r2, e2;
}
function Jd(t2, n2) {
  var r2 = Vd.getEnv().ImageData;
  if (!(t2 instanceof r2 || Hd(t2))) throw Error("createCanvasFromMedia - media has not finished loading yet");
  var e2 = n2 || Kd(t2), i2 = e2.width, o2 = e2.height, a2 = Yd({ width: i2, height: o2 });
  return t2 instanceof r2 ? zd(a2).putImageData(t2, 0, 0) : zd(a2).drawImage(t2, 0, 0, i2, o2), a2;
}
function Zd(t2, n2) {
  return Gf(this, 0, void 0, function() {
    var r2, e2, i2, o2, a2, s2;
    return Uf(this, (u2) => {
      switch (u2.label) {
        case 0:
          return r2 = n2 || Vd.getEnv().createCanvasElement(), e2 = t2.shape.slice(Kf(t2) ? 1 : 0), i2 = e2[0], o2 = e2[1], a2 = e2[2], s2 = Vn(() => t2.as3D(i2, o2, a2).toInt()), [4, mf.toPixels(s2, r2)];
        case 1:
          return u2.sent(), s2.dispose(), [2, r2];
      }
    });
  });
}
function Qd(t2) {
  var n2 = Vd.getEnv();
  return t2 instanceof n2.Image || t2 instanceof n2.Canvas || t2 instanceof n2.Video;
}
function tv(t2, n2, r2) {
  void 0 === r2 && (r2 = false);
  var e2 = Vd.getEnv(), i2 = e2.Canvas;
  if (!(t2 instanceof e2.Image || t2 instanceof i2)) throw Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
  var o2 = Kd(t2), a2 = n2 / Math.max(o2.height, o2.width), s2 = a2 * o2.width, u2 = a2 * o2.height, c2 = Yd({ width: n2, height: n2 }), l2 = t2 instanceof i2 ? t2 : Jd(t2), h2 = Math.abs(s2 - u2) / 2, f2 = r2 && u2 > s2 ? h2 : 0, d2 = r2 && s2 > u2 ? h2 : 0;
  return zd(c2).drawImage(l2, f2, d2, s2, u2), c2;
}
var nv = (function() {
  function t2(t3, n2) {
    var r2 = this;
    if (void 0 === n2 && (n2 = false), this.P = [], this.F = [], this.L = false, this.B = [], !Array.isArray(t3)) throw Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + t3);
    this.L = n2, this.V = t3.length, t3.forEach((t4, n3) => {
      if ($f(t4)) return r2.P[n3] = t4, void (r2.B[n3] = t4.shape);
      if (Kf(t4)) {
        var e2 = t4.shape[0];
        if (1 !== e2) throw Error("NetInput - tf.Tensor4D with batchSize " + e2 + " passed, but not supported in input array");
        return r2.P[n3] = t4, void (r2.B[n3] = t4.shape.slice(1));
      }
      var i2 = t4 instanceof Vd.getEnv().Canvas ? t4 : Jd(t4);
      r2.F[n3] = i2, r2.B[n3] = [i2.height, i2.width, 3];
    });
  }
  return Object.defineProperty(t2.prototype, "imageTensors", { get() {
    return this.P;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "canvases", { get() {
    return this.F;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "isBatchInput", { get() {
    return this.batchSize > 1 || this.L;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "batchSize", { get() {
    return this.V;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "inputDimensions", { get() {
    return this.B;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "inputSize", { get() {
    return this.W;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "reshapedInputDimensions", { get() {
    var t3 = this;
    return rd(this.batchSize, 0, 1).map((n2, r2) => t3.getReshapedInputDimensions(r2));
  }, enumerable: true, configurable: true }), t2.prototype.getInput = function(t3) {
    return this.canvases[t3] || this.imageTensors[t3];
  }, t2.prototype.getInputDimensions = function(t3) {
    return this.B[t3];
  }, t2.prototype.getInputHeight = function(t3) {
    return this.B[t3][0];
  }, t2.prototype.getInputWidth = function(t3) {
    return this.B[t3][1];
  }, t2.prototype.getReshapedInputDimensions = function(t3) {
    if ("number" != typeof this.inputSize) throw Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
    return td({ width: this.getInputWidth(t3), height: this.getInputHeight(t3) }, this.inputSize);
  }, t2.prototype.toBatchTensor = function(t3, n2) {
    var r2 = this;
    return void 0 === n2 && (n2 = true), this.W = t3, Vn(() => {
      var e2 = rd(r2.batchSize, 0, 1).map((e3) => {
        var i3 = r2.getInput(e3);
        if (i3 instanceof vt) {
          var o2 = Kf(i3) ? i3 : i3.expandDims();
          return (o2 = pd(o2, n2)).shape[1] === t3 && o2.shape[2] === t3 || (o2 = Kl.resizeBilinear(o2, [t3, t3])), o2.as3D(t3, t3, 3);
        }
        if (i3 instanceof Vd.getEnv().Canvas) return mf.fromPixels(tv(i3, t3, n2));
        throw Error("toBatchTensor - at batchIdx " + e3 + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + i3);
      }), i2 = fe(e2.map((t4) => t4.toFloat())).as4D(r2.batchSize, t3, t3, 3);
      return i2;
    });
  }, t2;
})();
function rv(t2) {
  return Gf(this, 0, void 0, function() {
    var n2, r2, e2;
    return Uf(this, (i2) => {
      switch (i2.label) {
        case 0:
          if (t2 instanceof nv) return [2, t2];
          if (!(n2 = Array.isArray(t2) ? t2 : [t2]).length) throw Error("toNetInput - empty array passed as input");
          return r2 = (n3) => Array.isArray(t2) ? " at input index " + n3 + ":" : "", (e2 = n2.map(Wd)).forEach((t3, e3) => {
            if (!Qd(t3) && !$f(t3) && !Kf(t3)) {
              if ("string" == typeof n2[e3]) throw Error("toNetInput -" + r2(e3) + " string passed, but could not resolve HTMLElement for element id " + n2[e3]);
              throw Error("toNetInput -" + r2(e3) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
            }
            if (Kf(t3)) {
              var i3 = t3.shape[0];
              if (1 !== i3) throw Error("toNetInput -" + r2(e3) + " tf.Tensor4D with batchSize " + i3 + " passed, but not supported in input array");
            }
          }), [4, Promise.all(e2.map((t3) => Qd(t3) && Xd(t3)))];
        case 1:
          return i2.sent(), [2, new nv(e2, Array.isArray(t2))];
      }
    });
  });
}
function ev(t2, n2) {
  return Gf(this, 0, void 0, function() {
    var r2, e2, i2, o2, a2, s2;
    return Uf(this, (u2) => {
      switch (u2.label) {
        case 0:
          return r2 = Vd.getEnv().Canvas, e2 = t2, t2 instanceof r2 ? [3, 5] : [4, rv(t2)];
        case 1:
          if ((i2 = u2.sent()).batchSize > 1) throw Error("extractFaces - batchSize > 1 not supported");
          return (o2 = i2.getInput(0)) instanceof r2 ? (a2 = o2, [3, 4]) : [3, 2];
        case 2:
          return [4, Zd(o2)];
        case 3:
          a2 = u2.sent(), u2.label = 4;
        case 4:
          e2 = a2, u2.label = 5;
        case 5:
          return s2 = zd(e2), [2, n2.map((t3) => t3 instanceof ld ? t3.forSize(e2.width, e2.height).box.floor() : t3).map((t3) => t3.clipAtImageBorders(e2.width, e2.height)).map((t3) => {
            var n3 = t3.x, r3 = t3.y, e3 = t3.width, i3 = t3.height, o3 = Yd({ width: e3, height: i3 });
            return zd(o3).putImageData(s2.getImageData(n3, r3, e3, i3), 0, 0), o3;
          })];
      }
    });
  });
}
function iv(t2, n2) {
  return Gf(this, 0, void 0, function() {
    return Uf(this, (r2) => {
      if (!$f(t2) && !Kf(t2)) throw Error("extractFaceTensors - expected image tensor to be 3D or 4D");
      if (Kf(t2) && t2.shape[0] > 1) throw Error("extractFaceTensors - batchSize > 1 not supported");
      return [2, Vn(() => {
        var r3 = t2.shape.slice(Kf(t2) ? 1 : 0), e2 = r3[0], i2 = r3[1], o2 = r3[2];
        return n2.map((t3) => t3 instanceof ld ? t3.forSize(i2, e2).box : t3).map((t3) => t3.clipAtImageBorders(i2, e2)).map((n3) => {
          var r4 = n3.x, a2 = n3.y, s2 = n3.width, u2 = n3.height;
          return Fc(t2.as3D(e2, i2, o2), [a2, r4, 0], [u2, s2, o2]);
        });
      })];
    });
  });
}
function ov(t2, n2) {
  return Gf(this, 0, void 0, function() {
    var r2;
    return Uf(this, (e2) => {
      switch (e2.label) {
        case 0:
          return [4, (0, Vd.getEnv().fetch)(t2, n2)];
        case 1:
          if ((r2 = e2.sent()).status >= 400) throw Error("failed to fetch: (" + r2.status + ") " + r2.statusText + ", from url: " + r2.url);
          return [2, r2];
      }
    });
  });
}
function av(t2) {
  return Gf(this, 0, void 0, function() {
    var n2, r2;
    return Uf(this, (e2) => {
      switch (e2.label) {
        case 0:
          return [4, ov(t2)];
        case 1:
          return [4, (n2 = e2.sent()).blob()];
        case 2:
          if (!(r2 = e2.sent()).type.startsWith("image/")) throw Error("fetchImage - expected blob type to be of type image/*, instead have: " + r2.type + ", for url: " + n2.url);
          return [2, $d(r2)];
      }
    });
  });
}
function sv(t2) {
  return Gf(this, 0, void 0, function() {
    return Uf(this, (n2) => {
      switch (n2.label) {
        case 0:
          return [4, ov(t2)];
        case 1:
          return [2, n2.sent().json()];
      }
    });
  });
}
function uv(t2) {
  return Gf(this, 0, void 0, function() {
    var n2;
    return Uf(this, (r2) => {
      switch (r2.label) {
        case 0:
          return n2 = Float32Array.bind, [4, ov(t2)];
        case 1:
          return [4, r2.sent().arrayBuffer()];
        case 2:
          return [2, new (n2.call(Float32Array, void 0, r2.sent()))()];
      }
    });
  });
}
function cv(t2, n2) {
  var r2 = n2 + "-weights_manifest.json";
  if (!t2) return { modelBaseUri: "", manifestUri: r2 };
  if ("/" === t2) return { modelBaseUri: "/", manifestUri: "/" + r2 };
  var e2 = t2.startsWith("http://") ? "http://" : t2.startsWith("https://") ? "https://" : "", i2 = (t2 = t2.replace(e2, "")).split("/").filter((t3) => t3), o2 = t2.endsWith(".json") ? i2[i2.length - 1] : r2, a2 = e2 + (t2.endsWith(".json") ? i2.slice(0, i2.length - 1) : i2).join("/");
  return { modelBaseUri: a2 = t2.startsWith("/") ? "/" + a2 : a2, manifestUri: "/" === a2 ? "/" + o2 : a2 + "/" + o2 };
}
function lv(t2, n2) {
  return Gf(this, 0, void 0, function() {
    var r2, e2, i2;
    return Uf(this, (o2) => {
      switch (o2.label) {
        case 0:
          return r2 = cv(t2, n2), e2 = r2.modelBaseUri, [4, sv(r2.manifestUri)];
        case 1:
          return i2 = o2.sent(), [2, ff.loadWeights(i2, e2)];
      }
    });
  });
}
function hv(t2, n2, r2) {
  void 0 === r2 && (r2 = false);
  var e2 = r2 ? Kd(n2) : n2, i2 = e2.width, o2 = e2.height;
  return t2.width = i2, t2.height = o2, { width: i2, height: o2 };
}
var fv = (function() {
  function t2(t3) {
    this.G = t3, this.U = void 0, this.q = [];
  }
  return Object.defineProperty(t2.prototype, "params", { get() {
    return this.U;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "paramMappings", { get() {
    return this.q;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "isLoaded", { get() {
    return !!this.params;
  }, enumerable: true, configurable: true }), t2.prototype.getParamFromPath = function(t3) {
    var n2 = this.traversePropertyPath(t3);
    return n2.obj[n2.objProp];
  }, t2.prototype.reassignParamFromPath = function(t3, n2) {
    var r2 = this.traversePropertyPath(t3), e2 = r2.obj, i2 = r2.objProp;
    e2[i2].dispose(), e2[i2] = n2;
  }, t2.prototype.getParamList = function() {
    var t3 = this;
    return this.q.map((n2) => {
      var r2 = n2.paramPath;
      return { path: r2, tensor: t3.getParamFromPath(r2) };
    });
  }, t2.prototype.getTrainableParams = function() {
    return this.getParamList().filter((t3) => t3.tensor instanceof yt);
  }, t2.prototype.getFrozenParams = function() {
    return this.getParamList().filter((t3) => !(t3.tensor instanceof yt));
  }, t2.prototype.variable = function() {
    var t3 = this;
    this.getFrozenParams().forEach((n2) => {
      t3.reassignParamFromPath(n2.path, n2.tensor.variable());
    });
  }, t2.prototype.freeze = function() {
    var t3 = this;
    this.getTrainableParams().forEach((n2) => {
      var r2 = n2.path, e2 = n2.tensor, i2 = sr(e2.dataSync());
      e2.dispose(), t3.reassignParamFromPath(r2, i2);
    });
  }, t2.prototype.dispose = function(t3) {
    void 0 === t3 && (t3 = true), this.getParamList().forEach((n2) => {
      if (t3 && n2.tensor.isDisposed) throw Error("param tensor has already been disposed for path " + n2.path);
      n2.tensor.dispose();
    }), this.U = void 0;
  }, t2.prototype.serializeParams = function() {
    return new Float32Array(this.getParamList().map((t3) => Array.from(t3.tensor.dataSync())).reduce((t3, n2) => t3.concat(n2)));
  }, t2.prototype.load = function(t3) {
    return Gf(this, 0, void 0, function() {
      return Uf(this, function(n2) {
        switch (n2.label) {
          case 0:
            return t3 instanceof Float32Array ? (this.extractWeights(t3), [2]) : [4, this.loadFromUri(t3)];
          case 1:
            return n2.sent(), [2];
        }
      });
    });
  }, t2.prototype.loadFromUri = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n2;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (t3 && "string" != typeof t3) throw Error(this.G + ".loadFromUri - expected model uri");
            return [4, lv(t3, this.getDefaultModelName())];
          case 1:
            return n2 = r2.sent(), this.loadFromWeightMap(n2), [2];
        }
      });
    });
  }, t2.prototype.loadFromDisk = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n2, r2, e2, i2, o2, a2, s2, u2, c2;
      return Uf(this, function(l2) {
        switch (l2.label) {
          case 0:
            if (t3 && "string" != typeof t3) throw Error(this.G + ".loadFromDisk - expected model file path");
            return n2 = Vd.getEnv().readFile, r2 = cv(t3, this.getDefaultModelName()), e2 = r2.manifestUri, i2 = r2.modelBaseUri, o2 = ff.weightsLoaderFactory((t4) => Promise.all(t4.map((t5) => n2(t5).then((t6) => t6.buffer)))), u2 = (s2 = JSON).parse, [4, n2(e2)];
          case 1:
            return a2 = u2.call(s2, "" + l2.sent()), [4, o2(a2, i2)];
          case 2:
            return c2 = l2.sent(), this.loadFromWeightMap(c2), [2];
        }
      });
    });
  }, t2.prototype.loadFromWeightMap = function(t3) {
    var n2 = this.extractParamsFromWeigthMap(t3), r2 = n2.params;
    this.q = n2.paramMappings, this.U = r2;
  }, t2.prototype.extractWeights = function(t3) {
    var n2 = this.extractParams(t3), r2 = n2.params;
    this.q = n2.paramMappings, this.U = r2;
  }, t2.prototype.traversePropertyPath = function(t3) {
    if (!this.params) throw Error("traversePropertyPath - model has no loaded params");
    var n2 = t3.split("/").reduce((n3, r3) => {
      if (!n3.nextObj.hasOwnProperty(r3)) throw Error("traversePropertyPath - object does not have property " + r3 + ", for path " + t3);
      return { obj: n3.nextObj, objProp: r3, nextObj: n3.nextObj[r3] };
    }, { nextObj: this.params }), r2 = n2.obj, e2 = n2.objProp;
    if (!(r2 && e2 && r2[e2] instanceof vt)) throw Error("traversePropertyPath - parameter is not a tensor, for path " + t3);
    return { obj: r2, objProp: e2 };
  }, t2;
})();
function dv(t2, n2, r2) {
  return Vn(() => {
    var e2 = pc(t2, n2.depthwise_filter, n2.pointwise_filter, r2, "same");
    return wu(e2, n2.bias);
  });
}
function vv(t2, n2, r2) {
  return void 0 === r2 && (r2 = false), Vn(() => {
    var e2 = Qc(r2 ? wu(uc(t2, n2.conv0.filters, [2, 2], "same"), n2.conv0.bias) : dv(t2, n2.conv0, [2, 2])), i2 = dv(e2, n2.conv1, [1, 1]), o2 = dv(Qc(wu(e2, i2)), n2.conv2, [1, 1]);
    return Qc(wu(e2, wu(i2, o2)));
  });
}
function pv(t2, n2, r2, e2) {
  return void 0 === r2 && (r2 = false), void 0 === e2 && (e2 = true), Vn(() => {
    var i2 = Qc(r2 ? wu(uc(t2, n2.conv0.filters, e2 ? [2, 2] : [1, 1], "same"), n2.conv0.bias) : dv(t2, n2.conv0, e2 ? [2, 2] : [1, 1])), o2 = dv(i2, n2.conv1, [1, 1]), a2 = dv(Qc(wu(i2, o2)), n2.conv2, [1, 1]), s2 = dv(Qc(wu(i2, wu(o2, a2))), n2.conv3, [1, 1]);
    return Qc(wu(i2, wu(o2, wu(a2, s2))));
  });
}
function mv(t2, n2, r2, e2) {
  return void 0 === r2 && (r2 = "same"), void 0 === e2 && (e2 = false), Vn(() => {
    var i2 = wu(uc(t2, n2.filters, [1, 1], r2), n2.bias);
    return e2 ? Qc(i2) : i2;
  });
}
function xv(t2, n2) {
  Object.keys(t2).forEach((r2) => {
    n2.some((t3) => t3.originalPath === r2) || t2[r2].dispose();
  });
}
function bv(t2, n2) {
  return (r2, e2, i2, o2) => {
    var a2 = dr(t2(r2 * e2 * i2 * i2), [i2, i2, r2, e2]), s2 = lr(t2(e2));
    return n2.push({ paramPath: o2 + "/filters" }, { paramPath: o2 + "/bias" }), { filters: a2, bias: s2 };
  };
}
function gv(t2, n2) {
  return (r2, e2, i2) => {
    var o2 = hr(t2(r2 * e2), [r2, e2]), a2 = lr(t2(e2));
    return n2.push({ paramPath: i2 + "/weights" }, { paramPath: i2 + "/bias" }), { weights: o2, bias: a2 };
  };
}
var wv = /* @__PURE__ */ (function() {
  return function(t2, n2, r2) {
    this.depthwise_filter = t2, this.pointwise_filter = n2, this.bias = r2;
  };
})();
function yv(t2, n2) {
  return (r2, e2, i2) => {
    var o2 = dr(t2(9 * r2), [3, 3, r2, 1]), a2 = dr(t2(r2 * e2), [1, 1, r2, e2]), s2 = lr(t2(e2));
    return n2.push({ paramPath: i2 + "/depthwise_filter" }, { paramPath: i2 + "/pointwise_filter" }, { paramPath: i2 + "/bias" }), new wv(o2, a2, s2);
  };
}
function Cv(t2) {
  return (n2) => {
    var r2 = t2(n2 + "/depthwise_filter", 4), e2 = t2(n2 + "/pointwise_filter", 4), i2 = t2(n2 + "/bias", 1);
    return new wv(r2, e2, i2);
  };
}
function _v(t2, n2) {
  return (r2, e2, i2) => {
    var o2 = t2[r2];
    if (!Hf(o2, e2)) throw Error("expected weightMap[" + r2 + "] to be a Tensor" + e2 + "D, instead have " + o2);
    return n2.push({ originalPath: r2, paramPath: i2 || r2 }), o2;
  };
}
function Ev(t2) {
  var n2 = t2;
  return { extractWeights(t3) {
    var r2 = n2.slice(0, t3);
    return n2 = n2.slice(t3), r2;
  }, getRemainingWeights() {
    return n2;
  } };
}
function Rv(t2, n2) {
  var r2 = bv(t2, n2), e2 = yv(t2, n2);
  function i2(t3, n3, i3, o2) {
    return void 0 === o2 && (o2 = false), { conv0: o2 ? r2(t3, n3, 3, i3 + "/conv0") : e2(t3, n3, i3 + "/conv0"), conv1: e2(n3, n3, i3 + "/conv1"), conv2: e2(n3, n3, i3 + "/conv2") };
  }
  return { extractDenseBlock3Params: i2, extractDenseBlock4Params(t3, n3, r3, o2) {
    void 0 === o2 && (o2 = false);
    var a2 = i2(t3, n3, r3, o2);
    return { conv0: a2.conv0, conv1: a2.conv1, conv2: a2.conv2, conv3: e2(n3, n3, r3 + "/conv3") };
  } };
}
function Av(t2) {
  return (n2) => ({ filters: t2(n2 + "/filters", 4), bias: t2(n2 + "/bias", 1) });
}
function Nv(t2, n2) {
  var r2 = _v(t2, n2), e2 = Av(r2), i2 = Cv(r2);
  return { extractDenseBlock3Params(t3, n3) {
    return void 0 === n3 && (n3 = false), { conv0: n3 ? e2(t3 + "/conv0") : i2(t3 + "/conv0"), conv1: i2(t3 + "/conv1"), conv2: i2(t3 + "/conv2") };
  }, extractDenseBlock4Params(t3, n3) {
    return void 0 === n3 && (n3 = false), { conv0: n3 ? e2(t3 + "/conv0") : i2(t3 + "/conv0"), conv1: i2(t3 + "/conv1"), conv2: i2(t3 + "/conv2"), conv3: i2(t3 + "/conv3") };
  } };
}
var Ov = (function(t2) {
  function n2() {
    return t2.call(this, "FaceFeatureExtractor") || this;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this.params;
    if (!n3) throw Error("FaceFeatureExtractor - load model before inference");
    return Vn(() => {
      var r2 = pv(vd(t3.toBatchTensor(112, true), [122.782, 117.001, 104.298]).div(cr(255)), n3.dense0, true);
      return r2 = pv(r2, n3.dense1), r2 = pv(r2, n3.dense2), r2 = pv(r2, n3.dense3), Mc(r2, [7, 7], [2, 2], "valid");
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "face_feature_extractor_model", n2.prototype.extractParamsFromWeigthMap = (t3) => ((t4) => {
    var n3 = [], r2 = Nv(t4, n3).extractDenseBlock4Params, e2 = { dense0: r2("dense0", true), dense1: r2("dense1"), dense2: r2("dense2"), dense3: r2("dense3") };
    return xv(t4, n3), { params: e2, paramMappings: n3 };
  })(t3), n2.prototype.extractParams = (t3) => ((t4) => {
    var n3 = [], r2 = Ev(t4), e2 = r2.getRemainingWeights, i2 = Rv(r2.extractWeights, n3).extractDenseBlock4Params, o2 = i2(3, 32, "dense0", true), a2 = i2(32, 64, "dense1"), s2 = i2(64, 128, "dense2"), u2 = i2(128, 256, "dense3");
    if (0 !== e2().length) throw Error("weights remaing after extract: " + e2().length);
    return { paramMappings: n3, params: { dense0: o2, dense1: a2, dense2: s2, dense3: u2 } };
  })(t3), n2;
})(fv);
function Mv(t2, n2) {
  return Vn(() => wu(bc(t2, n2.weights), n2.bias));
}
function Iv(t2) {
  var n2 = {}, r2 = {};
  return Object.keys(t2).forEach((e2) => {
    (e2.startsWith("fc") ? r2 : n2)[e2] = t2[e2];
  }), { featureExtractorMap: n2, classifierMap: r2 };
}
var Tv = (function(t2) {
  function n2(n3, r2) {
    var e2 = t2.call(this, n3) || this;
    return e2.H = r2, e2;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "faceFeatureExtractor", { get() {
    return this.H;
  }, enumerable: true, configurable: true }), n2.prototype.runNet = function(t3) {
    var n3 = this, r2 = this.params;
    if (!r2) throw Error(this.G + " - load model before inference");
    return Vn(() => {
      var e2 = t3 instanceof nv ? n3.faceFeatureExtractor.forwardInput(t3) : t3;
      return Mv(e2.as2D(e2.shape[0], -1), r2.fc);
    });
  }, n2.prototype.dispose = function(n3) {
    void 0 === n3 && (n3 = true), this.faceFeatureExtractor.dispose(n3), t2.prototype.dispose.call(this, n3);
  }, n2.prototype.loadClassifierParams = function(t3) {
    var n3 = this.extractClassifierParams(t3), r2 = n3.paramMappings;
    this.U = n3.params, this.q = r2;
  }, n2.prototype.extractClassifierParams = function(t3) {
    return ((t4, n3, r2) => {
      var e2 = [], i2 = Ev(t4), o2 = i2.getRemainingWeights, a2 = gv(i2.extractWeights, e2)(n3, r2, "fc");
      if (0 !== o2().length) throw Error("weights remaing after extract: " + o2().length);
      return { paramMappings: e2, params: { fc: a2 } };
    })(t3, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
  }, n2.prototype.extractParamsFromWeigthMap = function(t3) {
    var n3 = Iv(t3), r2 = n3.classifierMap;
    return this.faceFeatureExtractor.loadFromWeightMap(n3.featureExtractorMap), ((t4) => {
      var n4 = [], r3 = _v(t4, n4), e2 = { fc: { weights: r3("fc/weights", 2), bias: r3("fc/bias", 1) } };
      return xv(t4, n4), { params: e2, paramMappings: n4 };
    })(r2);
  }, n2.prototype.extractParams = function(t3) {
    var n3 = this.getClassifierChannelsIn(), r2 = this.getClassifierChannelsOut(), e2 = r2 * n3 + r2, i2 = t3.slice(0, t3.length - e2), o2 = t3.slice(t3.length - e2);
    return this.faceFeatureExtractor.extractWeights(i2), this.extractClassifierParams(o2);
  }, n2;
})(fv);
var Sv = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];
var Dv = (function() {
  function t2(t3) {
    var n2 = this;
    if (7 !== t3.length) throw Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + t3.length);
    Sv.forEach((r2, e2) => {
      n2[r2] = t3[e2];
    });
  }
  return t2.prototype.asSortedArray = function() {
    var t3 = this;
    return Sv.map((n2) => ({ expression: n2, probability: t3[n2] })).sort((t4, n2) => n2.probability - t4.probability);
  }, t2;
})();
var kv = (function(t2) {
  function n2(n3) {
    return void 0 === n3 && (n3 = new Ov()), t2.call(this, "FaceExpressionNet", n3) || this;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this;
    return Vn(() => We(n3.runNet(t3)));
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.predictExpressions = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3, r2, e2, i2, o2 = this;
      return Uf(this, function(a2) {
        switch (a2.label) {
          case 0:
            return [4, rv(t3)];
          case 1:
            return n3 = a2.sent(), [4, this.forwardInput(n3)];
          case 2:
            return r2 = a2.sent(), [4, Promise.all(pe(r2).map(function(t4) {
              return Gf(o2, 0, void 0, function() {
                var n4;
                return Uf(this, (r3) => {
                  switch (r3.label) {
                    case 0:
                      return [4, t4.data()];
                    case 1:
                      return n4 = r3.sent(), t4.dispose(), [2, n4];
                  }
                });
              });
            }))];
          case 3:
            return e2 = a2.sent(), r2.dispose(), i2 = e2.map((t4) => new Dv(t4)), [2, n3.isBatchInput ? i2 : i2[0]];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "face_expression_model", n2.prototype.getClassifierChannelsIn = () => 256, n2.prototype.getClassifierChannelsOut = () => 7, n2;
})(Tv);
function Pv(t2) {
  return t2.expressions instanceof Dv;
}
function Fv(t2, n2) {
  return Object.assign({}, t2, { expressions: n2 });
}
function Lv(t2) {
  return Od(t2) && t2.landmarks instanceof yd && t2.unshiftedLandmarks instanceof yd && t2.alignedRect instanceof ld;
}
function Bv(t2, n2) {
  var r2 = t2.detection.box, e2 = n2.shiftBy(r2.x, r2.y), i2 = e2.align(), o2 = t2.detection.imageDims, a2 = new ld(t2.detection.score, i2.rescale(o2.reverse()), o2);
  return Object.assign({}, t2, { landmarks: e2, unshiftedLandmarks: n2, alignedRect: a2 });
}
var Vv = /* @__PURE__ */ (function() {
  return function(t2) {
    void 0 === t2 && (t2 = {});
    var n2 = t2.drawLines, r2 = t2.drawPoints, e2 = void 0 === r2 || r2, i2 = t2.lineWidth, o2 = t2.lineColor, a2 = t2.pointSize, s2 = t2.pointColor;
    this.drawLines = void 0 === n2 || n2, this.drawPoints = e2, this.lineWidth = i2 || 1, this.pointSize = a2 || 2, this.lineColor = o2 || "rgba(0, 255, 255, 1)", this.pointColor = s2 || "rgba(255, 0, 255, 1)";
  };
})();
var Wv = (function() {
  function t2(t3, n2) {
    void 0 === n2 && (n2 = {}), this.faceLandmarks = t3, this.options = new Vv(n2);
  }
  return t2.prototype.draw = function(t3) {
    var n2 = zd(t3), r2 = this.options, e2 = r2.drawPoints, i2 = r2.lineWidth, o2 = r2.pointSize, a2 = r2.pointColor;
    r2.drawLines && this.faceLandmarks instanceof _d && (n2.strokeStyle = r2.lineColor, n2.lineWidth = i2, Bf(n2, this.faceLandmarks.getJawOutline()), Bf(n2, this.faceLandmarks.getLeftEyeBrow()), Bf(n2, this.faceLandmarks.getRightEyeBrow()), Bf(n2, this.faceLandmarks.getNose()), Bf(n2, this.faceLandmarks.getLeftEye(), true), Bf(n2, this.faceLandmarks.getRightEye(), true), Bf(n2, this.faceLandmarks.getMouth(), true)), e2 && (n2.strokeStyle = a2, n2.fillStyle = a2, this.faceLandmarks.positions.forEach((t4) => {
      n2.beginPath(), n2.arc(t4.x, t4.y, o2, 0, 2 * Math.PI), n2.fill();
    }));
  }, t2;
})();
var zv = Object.freeze(Object.defineProperty({ __proto__: null, get AnchorPosition() {
  return Ld;
}, DrawBox: qd, DrawBoxOptions: jd, DrawFaceLandmarks: Wv, DrawFaceLandmarksOptions: Vv, DrawTextField: Ud, DrawTextFieldOptions: Gd, drawContour: Bf, drawDetections(t2, n2) {
  (Array.isArray(n2) ? n2 : [n2]).forEach((n3) => {
    var r2 = n3 instanceof ld ? n3.score : Od(n3) ? n3.detection.score : void 0, e2 = n3 instanceof ld ? n3.box : Od(n3) ? n3.detection.box : new sd(n3), i2 = r2 ? "" + Zf(r2) : void 0;
    new qd(e2, { label: i2 }).draw(t2);
  });
}, drawFaceExpressions(t2, n2, r2, e2) {
  void 0 === r2 && (r2 = 0.1), (Array.isArray(n2) ? n2 : [n2]).forEach((n3) => {
    var i2 = n3 instanceof Dv ? n3 : Pv(n3) ? n3.expressions : void 0;
    if (!i2) throw Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");
    var o2 = i2.asSortedArray().filter((t3) => t3.probability > r2), a2 = Od(n3) ? n3.detection.box.bottomLeft : e2 || new ad(0, 0);
    new Ud(o2.map((t3) => t3.expression + " (" + Zf(t3.probability) + ")"), a2).draw(t2);
  });
}, drawFaceLandmarks(t2, n2) {
  (Array.isArray(n2) ? n2 : [n2]).forEach((n3) => {
    var r2 = n3 instanceof yd ? n3 : Lv(n3) ? n3.landmarks : void 0;
    if (!r2) throw Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");
    new Wv(r2).draw(t2);
  });
} }, Symbol.toStringTag, { value: "Module" }));
function Gv(t2, n2, r2) {
  return wu(uc(t2, n2.filters, r2, "same"), n2.bias);
}
function Uv(t2, n2, r2) {
  void 0 === r2 && (r2 = true);
  var e2 = r2 ? Qc(t2) : t2;
  return e2 = dv(e2, n2.separable_conv0, [1, 1]), e2 = dv(Qc(e2), n2.separable_conv1, [1, 1]), e2 = Oc(e2, [3, 3], [2, 2], "same"), wu(e2, Gv(t2, n2.expansion_conv, [2, 2]));
}
var jv;
var qv;
var Hv = (function(t2) {
  function n2(n3) {
    var r2 = t2.call(this, "TinyXception") || this;
    return r2.$ = n3, r2;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this, r2 = this.params;
    if (!r2) throw Error("TinyXception - load model before inference");
    return Vn(() => {
      var e2 = vd(t3.toBatchTensor(112, true), [122.782, 117.001, 104.298]).div(cr(256)), i2 = Qc(Gv(e2, r2.entry_flow.conv_in, [2, 2]));
      return i2 = Uv(i2, r2.entry_flow.reduction_block_0, false), i2 = Uv(i2, r2.entry_flow.reduction_block_1), rd(n3.$, 0, 1).forEach((t4) => {
        i2 = ((t5, n4) => {
          var r3 = dv(Qc(t5), n4.separable_conv0, [1, 1]);
          return r3 = dv(Qc(r3), n4.separable_conv1, [1, 1]), r3 = dv(Qc(r3), n4.separable_conv2, [1, 1]), wu(r3, t5);
        })(i2, r2.middle_flow["main_block_" + t4]);
      }), i2 = Uv(i2, r2.exit_flow.reduction_block), i2 = Qc(dv(i2, r2.exit_flow.separable_conv, [1, 1]));
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "tiny_xception_model", n2.prototype.extractParamsFromWeigthMap = function(t3) {
    return ((t4, n3) => {
      var r2 = [], e2 = ((t5, n4) => {
        var r3 = _v(t5, n4), e3 = Av(r3), i3 = Cv(r3);
        return { extractConvParams: e3, extractSeparableConvParams: i3, extractReductionBlockParams(t6) {
          return { separable_conv0: i3(t6 + "/separable_conv0"), separable_conv1: i3(t6 + "/separable_conv1"), expansion_conv: e3(t6 + "/expansion_conv") };
        }, extractMainBlockParams(t6) {
          return { separable_conv0: i3(t6 + "/separable_conv0"), separable_conv1: i3(t6 + "/separable_conv1"), separable_conv2: i3(t6 + "/separable_conv2") };
        } };
      })(t4, r2), i2 = e2.extractSeparableConvParams, o2 = e2.extractReductionBlockParams, a2 = e2.extractMainBlockParams, s2 = { conv_in: (0, e2.extractConvParams)("entry_flow/conv_in"), reduction_block_0: o2("entry_flow/reduction_block_0"), reduction_block_1: o2("entry_flow/reduction_block_1") }, u2 = {};
      rd(n3, 0, 1).forEach((t5) => {
        u2["main_block_" + t5] = a2("middle_flow/main_block_" + t5);
      });
      var c2 = { reduction_block: o2("exit_flow/reduction_block"), separable_conv: i2("exit_flow/separable_conv") };
      return xv(t4, r2), { params: { entry_flow: s2, middle_flow: u2, exit_flow: c2 }, paramMappings: r2 };
    })(t3, this.$);
  }, n2.prototype.extractParams = function(t3) {
    return ((t4, n3) => {
      var r2 = [], e2 = Ev(t4), i2 = e2.getRemainingWeights, o2 = ((t5, n4) => {
        var r3 = bv(t5, n4), e3 = yv(t5, n4);
        return { extractConvParams: r3, extractSeparableConvParams: e3, extractReductionBlockParams(t6, n5, i3) {
          return { separable_conv0: e3(t6, n5, i3 + "/separable_conv0"), separable_conv1: e3(n5, n5, i3 + "/separable_conv1"), expansion_conv: r3(t6, n5, 1, i3 + "/expansion_conv") };
        }, extractMainBlockParams(t6, n5) {
          return { separable_conv0: e3(t6, t6, n5 + "/separable_conv0"), separable_conv1: e3(t6, t6, n5 + "/separable_conv1"), separable_conv2: e3(t6, t6, n5 + "/separable_conv2") };
        } };
      })(e2.extractWeights, r2), a2 = o2.extractSeparableConvParams, s2 = o2.extractReductionBlockParams, u2 = o2.extractMainBlockParams, c2 = { conv_in: (0, o2.extractConvParams)(3, 32, 3, "entry_flow/conv_in"), reduction_block_0: s2(32, 64, "entry_flow/reduction_block_0"), reduction_block_1: s2(64, 128, "entry_flow/reduction_block_1") }, l2 = {};
      rd(n3, 0, 1).forEach((t5) => {
        l2["main_block_" + t5] = u2(128, "middle_flow/main_block_" + t5);
      });
      var h2 = { reduction_block: s2(128, 256, "exit_flow/reduction_block"), separable_conv: a2(256, 512, "exit_flow/separable_conv") };
      if (0 !== i2().length) throw Error("weights remaing after extract: " + i2().length);
      return { paramMappings: r2, params: { entry_flow: c2, middle_flow: l2, exit_flow: h2 } };
    })(t3, this.$);
  }, n2;
})(fv);
(qv = jv || (jv = {})).FEMALE = "female", qv.MALE = "male";
var Xv = (function(t2) {
  function n2(n3) {
    void 0 === n3 && (n3 = new Hv(2));
    var r2 = t2.call(this, "AgeGenderNet") || this;
    return r2.H = n3, r2;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "faceFeatureExtractor", { get() {
    return this.H;
  }, enumerable: true, configurable: true }), n2.prototype.runNet = function(t3) {
    var n3 = this, r2 = this.params;
    if (!r2) throw Error(this.G + " - load model before inference");
    return Vn(() => {
      var e2 = t3 instanceof nv ? n3.faceFeatureExtractor.forwardInput(t3) : t3, i2 = Mc(e2, [7, 7], [2, 2], "valid").as2D(e2.shape[0], -1);
      return { age: Mv(i2, r2.fc.age).as1D(), gender: Mv(i2, r2.fc.gender) };
    });
  }, n2.prototype.forwardInput = function(t3) {
    var n3 = this;
    return Vn(() => {
      var r2 = n3.runNet(t3);
      return { age: r2.age, gender: We(r2.gender) };
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.predictAgeAndGender = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3, r2, e2, i2, o2, a2, s2 = this;
      return Uf(this, function(u2) {
        switch (u2.label) {
          case 0:
            return [4, rv(t3)];
          case 1:
            return n3 = u2.sent(), [4, this.forwardInput(n3)];
          case 2:
            return r2 = u2.sent(), e2 = pe(r2.age), i2 = pe(r2.gender), o2 = e2.map((t4, n4) => ({ ageTensor: t4, genderTensor: i2[n4] })), [4, Promise.all(o2.map(function(t4) {
              var n4 = t4.ageTensor, r3 = t4.genderTensor;
              return Gf(s2, 0, void 0, function() {
                var t5, e3, i3, o3, a3;
                return Uf(this, (s3) => {
                  switch (s3.label) {
                    case 0:
                      return [4, n4.data()];
                    case 1:
                      return t5 = s3.sent()[0], [4, r3.data()];
                    case 2:
                      return e3 = s3.sent()[0], o3 = (i3 = e3 > 0.5) ? jv.MALE : jv.FEMALE, a3 = i3 ? e3 : 1 - e3, n4.dispose(), r3.dispose(), [2, { age: t5, gender: o3, genderProbability: a3 }];
                  }
                });
              });
            }))];
          case 3:
            return a2 = u2.sent(), r2.age.dispose(), r2.gender.dispose(), [2, n3.isBatchInput ? a2 : a2[0]];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "age_gender_model", n2.prototype.dispose = function(n3) {
    void 0 === n3 && (n3 = true), this.faceFeatureExtractor.dispose(n3), t2.prototype.dispose.call(this, n3);
  }, n2.prototype.loadClassifierParams = function(t3) {
    var n3 = this.extractClassifierParams(t3), r2 = n3.paramMappings;
    this.U = n3.params, this.q = r2;
  }, n2.prototype.extractClassifierParams = (t3) => ((t4) => {
    var n3 = [], r2 = Ev(t4), e2 = r2.getRemainingWeights, i2 = gv(r2.extractWeights, n3), o2 = i2(512, 1, "fc/age"), a2 = i2(512, 2, "fc/gender");
    if (0 !== e2().length) throw Error("weights remaing after extract: " + e2().length);
    return { paramMappings: n3, params: { fc: { age: o2, gender: a2 } } };
  })(t3), n2.prototype.extractParamsFromWeigthMap = function(t3) {
    var n3 = Iv(t3), r2 = n3.classifierMap;
    return this.faceFeatureExtractor.loadFromWeightMap(n3.featureExtractorMap), ((t4) => {
      var n4 = [], r3 = _v(t4, n4);
      function e2(t5) {
        return { weights: r3(t5 + "/weights", 2), bias: r3(t5 + "/bias", 1) };
      }
      var i2 = { fc: { age: e2("fc/age"), gender: e2("fc/gender") } };
      return xv(t4, n4), { params: i2, paramMappings: n4 };
    })(r2);
  }, n2.prototype.extractParams = function(t3) {
    var n3 = t3.slice(0, t3.length - 1539), r2 = t3.slice(t3.length - 1539);
    return this.faceFeatureExtractor.extractWeights(n3), this.extractClassifierParams(r2);
  }, n2;
})(fv);
var $v = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.postProcess = (t3, n3, r2) => {
    var e2 = r2.map((t4) => {
      var r3 = t4.width, e3 = t4.height, i3 = n3 / Math.max(e3, r3);
      return { width: r3 * i3, height: e3 * i3 };
    }), i2 = e2.length;
    return Vn(() => {
      var r3 = (t4, n4) => fe([gr([68], t4), gr([68], n4)], 1).as2D(1, 136).as1D(), o2 = (t4, n4) => {
        var r4 = e2[t4], i3 = r4.width, o3 = r4.height;
        return n4(i3, o3) ? Math.abs(i3 - o3) / 2 : 0;
      };
      return t3.mul(gr([i2, 136], n3)).sub(fe(Array.from(Array(i2), (t4, n4) => r3(((t5) => o2(t5, (t6, n5) => n5 > t6))(n4), ((t5) => o2(t5, (t6, n5) => t6 > n5))(n4))))).div(fe(Array.from(Array(i2), (t4, n4) => r3(e2[n4].width, e2[n4].height))));
    });
  }, n2.prototype.forwardInput = function(t3) {
    var n3 = this;
    return Vn(() => {
      var r2 = n3.runNet(t3);
      return n3.postProcess(r2, t3.inputSize, t3.inputDimensions.map((t4) => ({ height: t4[0], width: t4[1] })));
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.detectLandmarks = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3, r2, e2, i2 = this;
      return Uf(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, rv(t3)];
          case 1:
            return n3 = o2.sent(), r2 = Vn(() => pe(i2.forwardInput(n3))), [4, Promise.all(r2.map(function(t4, r3) {
              return Gf(i2, 0, void 0, function() {
                var e3, i3, o3, a2, s2;
                return Uf(this, (u2) => {
                  switch (u2.label) {
                    case 0:
                      return o3 = (i3 = Array).from, [4, t4.data()];
                    case 1:
                      return e3 = o3.call(i3, u2.sent()), a2 = e3.filter((t5, n4) => Jf(n4)), s2 = e3.filter((t5, n4) => !Jf(n4)), [2, new _d(Array(68).fill(0).map((t5, n4) => new ad(a2[n4], s2[n4])), { height: n3.getInputHeight(r3), width: n3.getInputWidth(r3) })];
                  }
                });
              });
            }))];
          case 2:
            return e2 = o2.sent(), r2.forEach((t4) => t4.dispose()), [2, n3.isBatchInput ? e2 : e2[0]];
        }
      });
    });
  }, n2.prototype.getClassifierChannelsOut = () => 136, n2;
})(Tv);
var Kv = (function(t2) {
  function n2(n3) {
    return void 0 === n3 && (n3 = new Ov()), t2.call(this, "FaceLandmark68Net", n3) || this;
  }
  return Wf(n2, t2), n2.prototype.getDefaultModelName = () => "face_landmark_68_model", n2.prototype.getClassifierChannelsIn = () => 256, n2;
})($v);
var Yv = (function(t2) {
  function n2() {
    return t2.call(this, "TinyFaceFeatureExtractor") || this;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this.params;
    if (!n3) throw Error("TinyFaceFeatureExtractor - load model before inference");
    return Vn(() => {
      var r2 = vv(vd(t3.toBatchTensor(112, true), [122.782, 117.001, 104.298]).div(cr(255)), n3.dense0, true);
      return r2 = vv(r2, n3.dense1), r2 = vv(r2, n3.dense2), Mc(r2, [14, 14], [2, 2], "valid");
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "face_feature_extractor_tiny_model", n2.prototype.extractParamsFromWeigthMap = (t3) => ((t4) => {
    var n3 = [], r2 = Nv(t4, n3).extractDenseBlock3Params, e2 = { dense0: r2("dense0", true), dense1: r2("dense1"), dense2: r2("dense2") };
    return xv(t4, n3), { params: e2, paramMappings: n3 };
  })(t3), n2.prototype.extractParams = (t3) => ((t4) => {
    var n3 = [], r2 = Ev(t4), e2 = r2.getRemainingWeights, i2 = Rv(r2.extractWeights, n3).extractDenseBlock3Params, o2 = i2(3, 32, "dense0", true), a2 = i2(32, 64, "dense1"), s2 = i2(64, 128, "dense2");
    if (0 !== e2().length) throw Error("weights remaing after extract: " + e2().length);
    return { paramMappings: n3, params: { dense0: o2, dense1: a2, dense2: s2 } };
  })(t3), n2;
})(fv);
var Jv = (function(t2) {
  function n2(n3) {
    return void 0 === n3 && (n3 = new Yv()), t2.call(this, "FaceLandmark68TinyNet", n3) || this;
  }
  return Wf(n2, t2), n2.prototype.getDefaultModelName = () => "face_landmark_68_tiny_model", n2.prototype.getClassifierChannelsIn = () => 128, n2;
})($v);
var Zv = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2;
})(Kv);
function Qv(t2, n2, r2, e2, i2) {
  void 0 === i2 && (i2 = "same");
  var o2 = n2.conv, a2 = o2.bias, s2 = uc(t2, o2.filters, r2, i2);
  return s2 = ((t3, n3) => wu(ku(t3, n3.weights), n3.biases))(s2 = wu(s2, a2), n2.scale), e2 ? Qc(s2) : s2;
}
function tp(t2, n2) {
  return Qv(t2, n2, [1, 1], false);
}
function np(t2, n2) {
  return Qv(t2, n2, [2, 2], true, "valid");
}
function rp(t2, n2) {
  var r2 = ((t3, n3) => Qv(t3, n3, [1, 1], true))(t2, n2.conv1);
  return r2 = tp(r2, n2.conv2), r2 = wu(r2, t2), Qc(r2);
}
function ep(t2, n2) {
  var r2 = np(t2, n2.conv1);
  r2 = tp(r2, n2.conv2);
  var e2 = Mc(t2, 2, 2, "valid"), i2 = br(e2.shape), o2 = e2.shape[3] !== r2.shape[3];
  if (e2.shape[1] !== r2.shape[1] || e2.shape[2] !== r2.shape[2]) {
    var a2 = jf(r2.shape);
    a2[1] = 1;
    var s2 = br(a2), u2 = jf((r2 = Er([r2, s2], 1)).shape);
    u2[2] = 1;
    var c2 = br(u2);
    r2 = Er([r2, c2], 2);
  }
  return e2 = o2 ? Er([e2, i2], 3) : e2, r2 = wu(e2, r2), Qc(r2);
}
var ip = (function(t2) {
  function n2() {
    return t2.call(this, "FaceRecognitionNet") || this;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this.params;
    if (!n3) throw Error("FaceRecognitionNet - load model before inference");
    return Vn(() => {
      var r2 = np(vd(t3.toBatchTensor(150, true).toFloat(), [122.782, 117.001, 104.298]).div(cr(256)), n3.conv32_down);
      r2 = rp(r2 = Oc(r2, 3, 2, "valid"), n3.conv32_1), r2 = rp(r2, n3.conv32_2), r2 = rp(r2, n3.conv32_3), r2 = rp(r2 = ep(r2, n3.conv64_down), n3.conv64_1), r2 = rp(r2, n3.conv64_2), r2 = rp(r2, n3.conv64_3), r2 = rp(r2 = ep(r2, n3.conv128_down), n3.conv128_1), r2 = rp(r2, n3.conv128_2), r2 = rp(r2 = ep(r2, n3.conv256_down), n3.conv256_1);
      var e2 = (r2 = ep(r2 = rp(r2, n3.conv256_2), n3.conv256_down_out)).mean([1, 2]);
      return bc(e2, n3.fc);
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.computeFaceDescriptor = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3, r2, e2, i2 = this;
      return Uf(this, (o2) => {
        switch (o2.label) {
          case 0:
            return [4, rv(t3)];
          case 1:
            return n3 = o2.sent(), r2 = Vn(() => pe(i2.forwardInput(n3))), [4, Promise.all(r2.map((t4) => t4.data()))];
          case 2:
            return e2 = o2.sent(), r2.forEach((t4) => t4.dispose()), [2, n3.isBatchInput ? e2 : e2[0]];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "face_recognition_model", n2.prototype.extractParamsFromWeigthMap = (t3) => ((t4) => {
    var n3 = [], r2 = ((t5, n4) => {
      var r3 = _v(t5, n4);
      function e3(t6) {
        var n5 = r3(t6 + "/conv/filters", 4), e4 = r3(t6 + "/conv/bias", 1), i3 = ((t7) => ({ weights: r3(t7 + "/scale/weights", 1), biases: r3(t7 + "/scale/biases", 1) }))(t6);
        return { conv: { filters: n5, bias: e4 }, scale: i3 };
      }
      return { extractConvLayerParams: e3, extractResidualLayerParams: (t6) => ({ conv1: e3(t6 + "/conv1"), conv2: e3(t6 + "/conv2") }) };
    })(t4, n3), e2 = r2.extractResidualLayerParams, i2 = (0, r2.extractConvLayerParams)("conv32_down"), o2 = e2("conv32_1"), a2 = e2("conv32_2"), s2 = e2("conv32_3"), u2 = e2("conv64_down"), c2 = e2("conv64_1"), l2 = e2("conv64_2"), h2 = e2("conv64_3"), f2 = e2("conv128_down"), d2 = e2("conv128_1"), v2 = e2("conv128_2"), p2 = e2("conv256_down"), m2 = e2("conv256_1"), x2 = e2("conv256_2"), b2 = e2("conv256_down_out"), g2 = t4.fc;
    if (n3.push({ originalPath: "fc", paramPath: "fc" }), !Xf(g2)) throw Error("expected weightMap[fc] to be a Tensor2D, instead have " + g2);
    var w2 = { conv32_down: i2, conv32_1: o2, conv32_2: a2, conv32_3: s2, conv64_down: u2, conv64_1: c2, conv64_2: l2, conv64_3: h2, conv128_down: f2, conv128_1: d2, conv128_2: v2, conv256_down: p2, conv256_1: m2, conv256_2: x2, conv256_down_out: b2, fc: g2 };
    return xv(t4, n3), { params: w2, paramMappings: n3 };
  })(t3), n2.prototype.extractParams = (t3) => ((t4) => {
    var n3 = Ev(t4), r2 = n3.extractWeights, e2 = n3.getRemainingWeights, i2 = [], o2 = /* @__PURE__ */ (function(t5, n4) {
      function r3(r4, e3, i3, o3) {
        var a3 = ((r5, e4, i4, o4) => {
          var a4 = ((n5, r6, e5) => {
            var i5 = t5(n5), o5 = i5.length / (r6 * e5 * e5);
            if (Yf(o5)) throw Error("depth has to be an integer: " + o5 + ", weights.length: " + i5.length + ", numFilters: " + r6 + ", filterSize: " + e5);
            return Vn(() => rl(dr(i5, [r6, o5, e5, e5]), [2, 3, 1, 0]));
          })(r5, e4, i4), s4 = lr(t5(e4));
          return n4.push({ paramPath: o4 + "/filters" }, { paramPath: o4 + "/bias" }), { filters: a4, bias: s4 };
        })(r4, e3, i3, o3 + "/conv"), s3 = ((r5, e4) => {
          var i4 = lr(t5(r5)), o4 = lr(t5(r5));
          return n4.push({ paramPath: e4 + "/weights" }, { paramPath: e4 + "/biases" }), { weights: i4, biases: o4 };
        })(e3, o3 + "/scale");
        return { conv: a3, scale: s3 };
      }
      return { extractConvLayerParams: r3, extractResidualLayerParams: (t6, n5, e3, i3, o3) => (void 0 === o3 && (o3 = false), { conv1: r3((o3 ? 0.5 : 1) * t6, n5, e3, i3 + "/conv1"), conv2: r3(t6, n5, e3, i3 + "/conv2") }) };
    })(r2, i2), a2 = o2.extractResidualLayerParams, s2 = (0, o2.extractConvLayerParams)(4704, 32, 7, "conv32_down"), u2 = a2(9216, 32, 3, "conv32_1"), c2 = a2(9216, 32, 3, "conv32_2"), l2 = a2(9216, 32, 3, "conv32_3"), h2 = a2(36864, 64, 3, "conv64_down", true), f2 = a2(36864, 64, 3, "conv64_1"), d2 = a2(36864, 64, 3, "conv64_2"), v2 = a2(36864, 64, 3, "conv64_3"), p2 = a2(147456, 128, 3, "conv128_down", true), m2 = a2(147456, 128, 3, "conv128_1"), x2 = a2(147456, 128, 3, "conv128_2"), b2 = a2(589824, 256, 3, "conv256_down", true), g2 = a2(589824, 256, 3, "conv256_1"), w2 = a2(589824, 256, 3, "conv256_2"), y2 = a2(589824, 256, 3, "conv256_down_out"), C2 = Vn(() => rl(hr(r2(32768), [128, 256]), [1, 0]));
    if (i2.push({ paramPath: "fc" }), 0 !== e2().length) throw Error("weights remaing after extract: " + e2().length);
    return { params: { conv32_down: s2, conv32_1: u2, conv32_2: c2, conv32_3: l2, conv64_down: h2, conv64_1: f2, conv64_2: d2, conv64_3: v2, conv128_down: p2, conv128_1: m2, conv128_2: x2, conv256_down: b2, conv256_1: g2, conv256_2: w2, conv256_down_out: y2, fc: C2 }, paramMappings: i2 };
  })(t3), n2;
})(fv);
function op(t2) {
  var n2 = new ip();
  return n2.extractWeights(t2), n2;
}
function ap(t2, n2) {
  return Object.assign({}, t2, { descriptor: n2 });
}
function sp(t2) {
  return "number" == typeof t2.age;
}
function up(t2, n2) {
  return Object.assign({}, t2, { age: n2 });
}
function cp(t2) {
  return (t2.gender === jv.MALE || t2.gender === jv.FEMALE) && id(t2.genderProbability);
}
function lp(t2, n2, r2) {
  return Object.assign({}, t2, { gender: n2, genderProbability: r2 });
}
var hp = (function() {
  function t2(t3) {
    var n2 = void 0 === t3 ? {} : t3, r2 = n2.minFaceSize, e2 = n2.scaleFactor, i2 = n2.maxNumScales, o2 = n2.scoreThresholds, a2 = n2.scaleSteps;
    if (this.G = "MtcnnOptions", this.K = r2 || 20, this.Y = e2 || 0.709, this.J = i2 || 10, this.Z = o2 || [0.6, 0.7, 0.7], this.tt = a2, "number" != typeof this.K || 0 > this.K) throw Error(this.G + " - expected minFaceSize to be a number > 0");
    if ("number" != typeof this.Y || 0 >= this.Y || this.Y >= 1) throw Error(this.G + " - expected scaleFactor to be a number between 0 and 1");
    if ("number" != typeof this.J || 0 > this.J) throw Error(this.G + " - expected maxNumScales to be a number > 0");
    if (!Array.isArray(this.Z) || 3 !== this.Z.length || this.Z.some((t4) => "number" != typeof t4)) throw Error(this.G + " - expected scoreThresholds to be an array of numbers of length 3");
    if (this.tt && (!Array.isArray(this.tt) || this.tt.some((t4) => "number" != typeof t4))) throw Error(this.G + " - expected scaleSteps to be an array of numbers");
  }
  return Object.defineProperty(t2.prototype, "minFaceSize", { get() {
    return this.K;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "scaleFactor", { get() {
    return this.Y;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "maxNumScales", { get() {
    return this.J;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "scoreThresholds", { get() {
    return this.Z;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "scaleSteps", { get() {
    return this.tt;
  }, enumerable: true, configurable: true }), t2;
})();
function fp(t2, n2, r2) {
  return Vn(() => {
    var e2 = uc(t2, n2.filters, r2, "same");
    return e2 = wu(e2, n2.batch_norm_offset), Os(e2, 0, 6);
  });
}
function dp(t2, n2, r2) {
  var e2 = t2.arraySync(), i2 = Math.min(e2[n2][0], e2[n2][2]), o2 = Math.min(e2[n2][1], e2[n2][3]), a2 = Math.max(e2[n2][0], e2[n2][2]), s2 = Math.max(e2[n2][1], e2[n2][3]), u2 = Math.min(e2[r2][0], e2[r2][2]), c2 = Math.min(e2[r2][1], e2[r2][3]), l2 = Math.max(e2[r2][0], e2[r2][2]), h2 = Math.max(e2[r2][1], e2[r2][3]), f2 = (a2 - i2) * (s2 - o2), d2 = (l2 - u2) * (h2 - c2);
  if (0 >= f2 || 0 >= d2) return 0;
  var v2 = Math.max(i2, u2), p2 = Math.max(o2, c2), m2 = Math.min(a2, l2), x2 = Math.min(s2, h2), b2 = Math.max(m2 - v2, 0) * Math.max(x2 - p2, 0);
  return b2 / (f2 + d2 - b2);
}
function vp(t2, n2) {
  return Vn(() => {
    var r2 = t2.shape[0];
    return { boxPredictionEncoding: ce(mv(t2, n2.box_encoding_predictor), [r2, -1, 1, 4]), classPrediction: ce(mv(t2, n2.class_predictor), [r2, -1, 3]) };
  });
}
var pp = (function() {
  function t2(t3) {
    var n2 = void 0 === t3 ? {} : t3, r2 = n2.minConfidence, e2 = n2.maxResults;
    if (this.G = "SsdMobilenetv1Options", this.nt = r2 || 0.5, this.rt = e2 || 100, "number" != typeof this.nt || 0 >= this.nt || this.nt >= 1) throw Error(this.G + " - expected minConfidence to be a number between 0 and 1");
    if ("number" != typeof this.rt) throw Error(this.G + " - expected maxResults to be a number");
  }
  return Object.defineProperty(t2.prototype, "minConfidence", { get() {
    return this.nt;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "maxResults", { get() {
    return this.rt;
  }, enumerable: true, configurable: true }), t2;
})();
var mp = (function(t2) {
  function n2() {
    return t2.call(this, "SsdMobilenetv1") || this;
  }
  return Wf(n2, t2), n2.prototype.forwardInput = function(t3) {
    var n3 = this.params;
    if (!n3) throw Error("SsdMobilenetv1 - load model before inference");
    return Vn(() => {
      var r2 = t3.toBatchTensor(512, false).toFloat(), e2 = ((t4, n4) => Vn(() => {
        var r3 = null, e3 = fp(t4, n4.conv_0, [2, 2]);
        if ([n4.conv_1, n4.conv_2, n4.conv_3, n4.conv_4, n4.conv_5, n4.conv_6, n4.conv_7, n4.conv_8, n4.conv_9, n4.conv_10, n4.conv_11, n4.conv_12, n4.conv_13].forEach((t5, n5) => {
          var i3 = n5 + 1, o2 = ((t6) => [2, 4, 6, 12].some((n6) => n6 === t6) ? [2, 2] : [1, 1])(i3);
          e3 = ((t6, n6, r4) => Vn(() => {
            var e4 = fc(t6, n6.filters, r4, "same");
            return e4 = lu(e4, n6.batch_norm_mean, n6.batch_norm_variance, n6.batch_norm_offset, n6.batch_norm_scale, 0.0010000000474974513), Os(e4, 0, 6);
          }))(e3, t5.depthwise_conv, o2), e3 = fp(e3, t5.pointwise_conv, [1, 1]), 11 === i3 && (r3 = e3);
        }), null === r3) throw Error("mobileNetV1 - output of conv layer 11 is null");
        return { out: e3, conv11: r3 };
      }))(Vu(ku(r2, cr(0.007843137718737125)), cr(1)), n3.mobilenetv1), i2 = ((t4, n4, r3) => Vn(() => {
        var e3 = fp(t4, r3.conv_0, [1, 1]), i3 = fp(e3, r3.conv_1, [2, 2]), o2 = fp(i3, r3.conv_2, [1, 1]), a2 = fp(o2, r3.conv_3, [2, 2]), s2 = fp(a2, r3.conv_4, [1, 1]), u2 = fp(s2, r3.conv_5, [2, 2]), c2 = fp(u2, r3.conv_6, [1, 1]), l2 = fp(c2, r3.conv_7, [2, 2]), h2 = vp(n4, r3.box_predictor_0), f2 = vp(t4, r3.box_predictor_1), d2 = vp(i3, r3.box_predictor_2), v2 = vp(a2, r3.box_predictor_3), p2 = vp(u2, r3.box_predictor_4), m2 = vp(l2, r3.box_predictor_5);
        return { boxPredictions: Er([h2.boxPredictionEncoding, f2.boxPredictionEncoding, d2.boxPredictionEncoding, v2.boxPredictionEncoding, p2.boxPredictionEncoding, m2.boxPredictionEncoding], 1), classPredictions: Er([h2.classPrediction, f2.classPrediction, d2.classPrediction, v2.classPrediction, p2.classPrediction, m2.classPrediction], 1) };
      }))(e2.out, e2.conv11, n3.prediction_layer);
      return ((t4, n4, r3) => Vn(() => {
        var e3 = t4.shape[0], i3 = ((t5, n5) => {
          var r4 = ((t6) => {
            var n6 = pe(rl(t6, [1, 0])), r5 = [Vu(n6[2], n6[0]), Vu(n6[3], n6[1])];
            return { sizes: r5, centers: [wu(n6[0], Eu(r5[0], cr(2))), wu(n6[1], Eu(r5[1], cr(2)))] };
          })(t5), e4 = r4.sizes, i4 = r4.centers, o3 = pe(rl(n5, [1, 0])), a3 = Eu(ku(Ss(Eu(o3[2], cr(5))), e4[0]), cr(2)), s2 = wu(ku(Eu(o3[0], cr(10)), e4[0]), i4[0]), u2 = Eu(ku(Ss(Eu(o3[3], cr(5))), e4[1]), cr(2)), c2 = wu(ku(Eu(o3[1], cr(10)), e4[1]), i4[1]);
          return rl(fe([Vu(s2, a3), Vu(c2, u2), wu(s2, a3), wu(c2, u2)]), [1, 0]);
        })(ce(de(r3.extra_dim, [e3, 1, 1]), [-1, 4]), ce(t4, [-1, 4]));
        i3 = ce(i3, [e3, i3.shape[0] / e3, 4]);
        var o2 = Gs(Dc(n4, [0, 0, 1], [-1, -1, -1])), a2 = Dc(o2, [0, 0, 0], [-1, -1, 1]);
        return a2 = ce(a2, [e3, a2.shape[1]]), { boxes: pe(i3), scores: pe(a2) };
      }))(i2.boxPredictions, i2.classPredictions, n3.output_layer);
    });
  }, n2.prototype.forward = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n3 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, n3.call(this, r2.sent())];
        }
      });
    });
  }, n2.prototype.locateFaces = function(t3, n3) {
    return void 0 === n3 && (n3 = {}), Gf(this, 0, void 0, function() {
      var r2, e2, i2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2, w2, y2;
      return Uf(this, function(C2) {
        switch (C2.label) {
          case 0:
            return r2 = new pp(n3), e2 = r2.maxResults, i2 = r2.minConfidence, [4, rv(t3)];
          case 1:
            for (o2 = C2.sent(), a2 = this.forwardInput(o2), c2 = (s2 = a2.boxes)[0], l2 = (u2 = a2.scores)[0], h2 = 1; s2.length > h2; h2++) s2[h2].dispose(), u2[h2].dispose();
            return v2 = (d2 = Array).from, [4, l2.data()];
          case 2:
            return f2 = v2.call(d2, C2.sent()), p2 = ((t4, n4, r3, e3, i3) => {
              var o3 = Math.min(r3, t4.shape[0]), a3 = n4.map((t5, n5) => ({ score: t5, boxIndex: n5 })).filter((t5) => t5.score > i3).sort((t5, n5) => n5.score - t5.score), s3 = (t5) => t5 > 0.5 ? 0 : 1, u3 = [];
              return a3.forEach((n5) => {
                if (o3 > u3.length) {
                  for (var r4 = n5.score, e4 = u3.length - 1; e4 >= 0; --e4) {
                    var a4 = dp(t4, n5.boxIndex, u3[e4]);
                    if (0 !== a4 && (n5.score *= s3(a4), i3 >= n5.score)) break;
                  }
                  r4 === n5.score && u3.push(n5.boxIndex);
                }
              }), u3;
            })(c2, f2, e2, 0, i2), m2 = o2.getReshapedInputDimensions(0), b2 = (x2 = o2.inputSize) / m2.width, g2 = x2 / m2.height, w2 = c2.arraySync(), y2 = p2.map((t4) => {
              var n4 = [Math.max(0, w2[t4][0]), Math.min(1, w2[t4][2])].map((t5) => t5 * g2), r3 = n4[0], e3 = n4[1], i3 = [Math.max(0, w2[t4][1]), Math.min(1, w2[t4][3])].map((t5) => t5 * b2), a3 = i3[0];
              return new ld(f2[t4], new wd(a3, r3, i3[1] - a3, e3 - r3), { height: o2.getInputHeight(0), width: o2.getInputWidth(0) });
            }), c2.dispose(), l2.dispose(), [2, y2];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "ssd_mobilenetv1_model", n2.prototype.extractParamsFromWeigthMap = (t3) => ((t4) => {
    var n3 = [], r2 = ((t5, n4) => {
      var r3 = _v(t5, n4);
      function e3(t6, n5, e4) {
        return { filters: r3(t6 + "/Conv2d_" + n5 + "_pointwise/weights", 4, e4 + "/filters"), batch_norm_offset: r3(t6 + "/Conv2d_" + n5 + "_pointwise/convolution_bn_offset", 1, e4 + "/batch_norm_offset") };
      }
      function i3(t6) {
        var n5 = "mobilenetv1/conv_" + t6, i4 = "MobilenetV1/Conv2d_" + t6 + "_depthwise", o4 = n5 + "/depthwise_conv", a4 = n5 + "/pointwise_conv";
        return { depthwise_conv: { filters: r3(i4 + "/depthwise_weights", 4, o4 + "/filters"), batch_norm_scale: r3(i4 + "/BatchNorm/gamma", 1, o4 + "/batch_norm_scale"), batch_norm_offset: r3(i4 + "/BatchNorm/beta", 1, o4 + "/batch_norm_offset"), batch_norm_mean: r3(i4 + "/BatchNorm/moving_mean", 1, o4 + "/batch_norm_mean"), batch_norm_variance: r3(i4 + "/BatchNorm/moving_variance", 1, o4 + "/batch_norm_variance") }, pointwise_conv: e3("MobilenetV1", t6, a4) };
      }
      function o3(t6, n5) {
        return { filters: r3(t6 + "/weights", 4, n5 + "/filters"), bias: r3(t6 + "/biases", 1, n5 + "/bias") };
      }
      function a3(t6) {
        return { box_encoding_predictor: o3("Prediction/BoxPredictor_" + t6 + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + t6 + "/box_encoding_predictor"), class_predictor: o3("Prediction/BoxPredictor_" + t6 + "/ClassPredictor", "prediction_layer/box_predictor_" + t6 + "/class_predictor") };
      }
      return { extractMobilenetV1Params() {
        return { conv_0: e3("MobilenetV1", 0, "mobilenetv1/conv_0"), conv_1: i3(1), conv_2: i3(2), conv_3: i3(3), conv_4: i3(4), conv_5: i3(5), conv_6: i3(6), conv_7: i3(7), conv_8: i3(8), conv_9: i3(9), conv_10: i3(10), conv_11: i3(11), conv_12: i3(12), conv_13: i3(13) };
      }, extractPredictionLayerParams() {
        return { conv_0: e3("Prediction", 0, "prediction_layer/conv_0"), conv_1: e3("Prediction", 1, "prediction_layer/conv_1"), conv_2: e3("Prediction", 2, "prediction_layer/conv_2"), conv_3: e3("Prediction", 3, "prediction_layer/conv_3"), conv_4: e3("Prediction", 4, "prediction_layer/conv_4"), conv_5: e3("Prediction", 5, "prediction_layer/conv_5"), conv_6: e3("Prediction", 6, "prediction_layer/conv_6"), conv_7: e3("Prediction", 7, "prediction_layer/conv_7"), box_predictor_0: a3(0), box_predictor_1: a3(1), box_predictor_2: a3(2), box_predictor_3: a3(3), box_predictor_4: a3(4), box_predictor_5: a3(5) };
      } };
    })(t4, n3), e2 = r2.extractMobilenetV1Params, i2 = r2.extractPredictionLayerParams, o2 = t4["Output/extra_dim"];
    if (n3.push({ originalPath: "Output/extra_dim", paramPath: "output_layer/extra_dim" }), !$f(o2)) throw Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + o2);
    var a2 = { mobilenetv1: e2(), prediction_layer: i2(), output_layer: { extra_dim: o2 } };
    return xv(t4, n3), { params: a2, paramMappings: n3 };
  })(t3), n2.prototype.extractParams = (t3) => ((t4) => {
    var n3 = [], r2 = Ev(t4), e2 = r2.extractWeights, i2 = r2.getRemainingWeights, o2 = /* @__PURE__ */ ((t5, n4) => {
      function r3(r4, e4, i4, o3, a3) {
        var s3 = dr(t5(r4 * e4 * i4 * i4), [i4, i4, r4, e4]), u3 = lr(t5(e4));
        return n4.push({ paramPath: o3 + "/filters" }, { paramPath: o3 + "/" + (a3 ? "batch_norm_offset" : "bias") }), { filters: s3, bias: u3 };
      }
      function e3(t6, n5, e4, i4) {
        var o3 = r3(t6, n5, e4, i4, true);
        return { filters: o3.filters, batch_norm_offset: o3.bias };
      }
      function i3(r4, i4, o3) {
        var a3 = ((r5, e4) => {
          var i5 = dr(t5(9 * r5), [3, 3, r5, 1]), o4 = lr(t5(r5)), a4 = lr(t5(r5)), s3 = lr(t5(r5)), u3 = lr(t5(r5));
          return n4.push({ paramPath: e4 + "/filters" }, { paramPath: e4 + "/batch_norm_scale" }, { paramPath: e4 + "/batch_norm_offset" }, { paramPath: e4 + "/batch_norm_mean" }, { paramPath: e4 + "/batch_norm_variance" }), { filters: i5, batch_norm_scale: o4, batch_norm_offset: a4, batch_norm_mean: s3, batch_norm_variance: u3 };
        })(r4, o3 + "/depthwise_conv");
        return { depthwise_conv: a3, pointwise_conv: e3(r4, i4, 1, o3 + "/pointwise_conv") };
      }
      return { extractMobilenetV1Params: () => ({ conv_0: e3(3, 32, 3, "mobilenetv1/conv_0"), conv_1: i3(32, 64, "mobilenetv1/conv_1"), conv_2: i3(64, 128, "mobilenetv1/conv_2"), conv_3: i3(128, 128, "mobilenetv1/conv_3"), conv_4: i3(128, 256, "mobilenetv1/conv_4"), conv_5: i3(256, 256, "mobilenetv1/conv_5"), conv_6: i3(256, 512, "mobilenetv1/conv_6"), conv_7: i3(512, 512, "mobilenetv1/conv_7"), conv_8: i3(512, 512, "mobilenetv1/conv_8"), conv_9: i3(512, 512, "mobilenetv1/conv_9"), conv_10: i3(512, 512, "mobilenetv1/conv_10"), conv_11: i3(512, 512, "mobilenetv1/conv_11"), conv_12: i3(512, 1024, "mobilenetv1/conv_12"), conv_13: i3(1024, 1024, "mobilenetv1/conv_13") }), extractPredictionLayerParams: () => ({ conv_0: e3(1024, 256, 1, "prediction_layer/conv_0"), conv_1: e3(256, 512, 3, "prediction_layer/conv_1"), conv_2: e3(512, 128, 1, "prediction_layer/conv_2"), conv_3: e3(128, 256, 3, "prediction_layer/conv_3"), conv_4: e3(256, 128, 1, "prediction_layer/conv_4"), conv_5: e3(128, 256, 3, "prediction_layer/conv_5"), conv_6: e3(256, 64, 1, "prediction_layer/conv_6"), conv_7: e3(64, 128, 3, "prediction_layer/conv_7"), box_predictor_0: { box_encoding_predictor: r3(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor"), class_predictor: r3(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor") }, box_predictor_1: { box_encoding_predictor: r3(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor"), class_predictor: r3(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor") }, box_predictor_2: { box_encoding_predictor: r3(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor"), class_predictor: r3(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor") }, box_predictor_3: { box_encoding_predictor: r3(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor"), class_predictor: r3(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor") }, box_predictor_4: { box_encoding_predictor: r3(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor"), class_predictor: r3(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor") }, box_predictor_5: { box_encoding_predictor: r3(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor"), class_predictor: r3(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor") } }) };
    })(e2, n3), a2 = o2.extractPredictionLayerParams, s2 = (0, o2.extractMobilenetV1Params)(), u2 = a2(), c2 = { extra_dim: fr(e2(20472), [1, 5118, 4]) };
    if (n3.push({ paramPath: "output_layer/extra_dim" }), 0 !== i2().length) throw Error("weights remaing after extract: " + i2().length);
    return { params: { mobilenetv1: s2, prediction_layer: u2, output_layer: c2 }, paramMappings: n3 };
  })(t3), n2;
})(fv);
function xp(t2) {
  var n2 = new mp();
  return n2.extractWeights(t2), n2;
}
function bp(t2) {
  return xp(t2);
}
var gp;
var wp;
var yp = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2;
})(mp);
var Cp = [new ad(0.738768, 0.874946), new ad(2.42204, 2.65704), new ad(4.30971, 7.04493), new ad(10.246, 4.59428), new ad(12.6868, 11.8741)];
var _p = [new ad(1.603231, 2.094468), new ad(6.041143, 7.080126), new ad(2.882459, 3.518061), new ad(4.266906, 5.178857), new ad(9.041765, 10.66308)];
var Ep = [117.001, 114.697, 97.404];
var Rp = (t2) => "number" == typeof t2;
function Ap(t2) {
  if (!t2) throw Error("invalid config: " + t2);
  if ("boolean" != typeof t2.withSeparableConvs) throw Error("config.withSeparableConvs has to be a boolean, have: " + t2.withSeparableConvs);
  if (!Rp(t2.iouThreshold) || 0 > t2.iouThreshold || t2.iouThreshold > 1) throw Error("config.iouThreshold has to be a number between [0, 1], have: " + t2.iouThreshold);
  if (!Array.isArray(t2.classes) || !t2.classes.length || !t2.classes.every((t3) => "string" == typeof t3)) throw Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(t2.classes));
  if (!Array.isArray(t2.anchors) || !t2.anchors.length || !t2.anchors.map((t3) => t3 || {}).every((t3) => Rp(t3.x) && Rp(t3.y))) throw Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(t2.anchors));
  if (t2.meanRgb && (!Array.isArray(t2.meanRgb) || 3 !== t2.meanRgb.length || !t2.meanRgb.every(Rp))) throw Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(t2.meanRgb));
}
function Np(t2) {
  return Vn(() => {
    var n2 = ku(t2, cr(0.10000000149011612));
    return wu(Qc(Vu(t2, n2)), n2);
  });
}
function Op(t2, n2) {
  return Vn(() => {
    var r2 = te(t2, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    return r2 = uc(r2, n2.conv.filters, [1, 1], "valid"), r2 = Vu(r2, n2.bn.sub), r2 = ku(r2, n2.bn.truediv), Np(r2 = wu(r2, n2.conv.bias));
  });
}
function Mp(t2, n2) {
  return Vn(() => {
    var r2 = te(t2, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    return r2 = pc(r2, n2.depthwise_filter, n2.pointwise_filter, [1, 1], "valid"), Np(r2 = wu(r2, n2.bias));
  });
}
(wp = gp || (gp = {}))[wp.XS = 224] = "XS", wp[wp.SM = 320] = "SM", wp[wp.MD = 416] = "MD", wp[wp.LG = 608] = "LG";
var Ip = (function() {
  function t2(t3) {
    var n2 = void 0 === t3 ? {} : t3, r2 = n2.inputSize, e2 = n2.scoreThreshold;
    if (this.G = "TinyYolov2Options", this.W = r2 || 416, this.et = e2 || 0.5, "number" != typeof this.W || this.W % 32 != 0) throw Error(this.G + " - expected inputSize to be a number divisible by 32");
    if ("number" != typeof this.et || 0 >= this.et || this.et >= 1) throw Error(this.G + " - expected scoreThreshold to be a number between 0 and 1");
  }
  return Object.defineProperty(t2.prototype, "inputSize", { get() {
    return this.W;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "scoreThreshold", { get() {
    return this.et;
  }, enumerable: true, configurable: true }), t2;
})();
var Tp = (function(t2) {
  function n2(n3) {
    var r2 = t2.call(this, "TinyYolov2") || this;
    return Ap(n3), r2.it = n3, r2;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "config", { get() {
    return this.it;
  }, enumerable: true, configurable: true }), Object.defineProperty(n2.prototype, "withClassScores", { get() {
    return this.config.withClassScores || this.config.classes.length > 1;
  }, enumerable: true, configurable: true }), Object.defineProperty(n2.prototype, "boxEncodingSize", { get() {
    return 5 + (this.withClassScores ? this.config.classes.length : 0);
  }, enumerable: true, configurable: true }), n2.prototype.runTinyYolov2 = (t3, n3) => {
    var r2 = Op(t3, n3.conv0);
    return r2 = Op(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv1), r2 = Op(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv2), r2 = Op(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv3), r2 = Op(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv4), r2 = Op(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv5), r2 = Op(r2 = Oc(r2, [2, 2], [1, 1], "same"), n3.conv6), mv(r2 = Op(r2, n3.conv7), n3.conv8, "valid", false);
  }, n2.prototype.runMobilenet = function(t3, n3) {
    var r2 = this.config.isFirstLayerConv2d ? Np(mv(t3, n3.conv0, "valid", false)) : Mp(t3, n3.conv0);
    return r2 = Mp(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv1), r2 = Mp(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv2), r2 = Mp(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv3), r2 = Mp(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv4), r2 = Mp(r2 = Oc(r2, [2, 2], [2, 2], "same"), n3.conv5), r2 = Oc(r2, [2, 2], [1, 1], "same"), r2 = n3.conv6 ? Mp(r2, n3.conv6) : r2, mv(r2 = n3.conv7 ? Mp(r2, n3.conv7) : r2, n3.conv8, "valid", false);
  }, n2.prototype.forwardInput = function(t3, n3) {
    var r2 = this, e2 = this.params;
    if (!e2) throw Error("TinyYolov2 - load model before inference");
    return Vn(() => {
      var i2 = t3.toBatchTensor(n3, false).toFloat();
      return i2 = (i2 = r2.config.meanRgb ? vd(i2, r2.config.meanRgb) : i2).div(cr(256)), r2.config.withSeparableConvs ? r2.runMobilenet(i2, e2) : r2.runTinyYolov2(i2, e2);
    });
  }, n2.prototype.forward = function(t3, n3) {
    return Gf(this, 0, void 0, function() {
      var r2;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return r2 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [4, r2.call(this, e2.sent(), n3)];
          case 2:
            return [2, e2.sent()];
        }
      });
    });
  }, n2.prototype.detect = function(t3, n3) {
    return void 0 === n3 && (n3 = {}), Gf(this, 0, void 0, function() {
      var r2, e2, i2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2 = this;
      return Uf(this, function(p2) {
        switch (p2.label) {
          case 0:
            return r2 = new Ip(n3), e2 = r2.inputSize, i2 = r2.scoreThreshold, [4, rv(t3)];
          case 1:
            return o2 = p2.sent(), [4, this.forwardInput(o2, e2)];
          case 2:
            return a2 = p2.sent(), s2 = Vn(() => pe(a2)[0].expandDims()), u2 = { width: o2.getInputWidth(0), height: o2.getInputHeight(0) }, [4, this.extractBoxes(s2, o2.getReshapedInputDimensions(0), i2)];
          case 3:
            return c2 = p2.sent(), a2.dispose(), s2.dispose(), l2 = c2.map((t4) => t4.box), h2 = c2.map((t4) => t4.score), f2 = c2.map((t4) => t4.classScore), d2 = c2.map((t4) => v2.config.classes[t4.label]), [2, dd(l2.map((t4) => t4.rescale(e2)), h2, this.config.iouThreshold, true).map((t4) => new cd(h2[t4], f2[t4], d2[t4], l2[t4], u2))];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "", n2.prototype.extractParamsFromWeigthMap = function(t3) {
    return ((t4, n3) => {
      var r2, e2 = [], i2 = ((t5, n4) => {
        var r3 = _v(t5, n4);
        function e3(t6) {
          return { filters: r3(t6 + "/filters", 4), bias: r3(t6 + "/bias", 1) };
        }
        var i3 = Cv(r3);
        return { extractConvParams: e3, extractConvWithBatchNormParams(t6) {
          var n5 = e3(t6 + "/conv"), i4 = ((t7) => ({ sub: r3(t7 + "/sub", 1), truediv: r3(t7 + "/truediv", 1) }))(t6 + "/bn");
          return { conv: n5, bn: i4 };
        }, extractSeparableConvParams: i3 };
      })(t4, e2), o2 = i2.extractConvParams, a2 = i2.extractConvWithBatchNormParams, s2 = i2.extractSeparableConvParams;
      if (n3.withSeparableConvs) {
        var u2 = n3.filterSizes && n3.filterSizes.length || 9;
        r2 = { conv0: n3.isFirstLayerConv2d ? o2("conv0") : s2("conv0"), conv1: s2("conv1"), conv2: s2("conv2"), conv3: s2("conv3"), conv4: s2("conv4"), conv5: s2("conv5"), conv6: u2 > 7 ? s2("conv6") : void 0, conv7: u2 > 8 ? s2("conv7") : void 0, conv8: o2("conv8") };
      } else r2 = { conv0: a2("conv0"), conv1: a2("conv1"), conv2: a2("conv2"), conv3: a2("conv3"), conv4: a2("conv4"), conv5: a2("conv5"), conv6: a2("conv6"), conv7: a2("conv7"), conv8: o2("conv8") };
      return xv(t4, e2), { params: r2, paramMappings: e2 };
    })(t3, this.config);
  }, n2.prototype.extractParams = function(t3) {
    var r2 = this.config.filterSizes || n2.DEFAULT_FILTER_SIZES, e2 = r2 ? r2.length : void 0;
    if (7 !== e2 && 8 !== e2 && 9 !== e2) throw Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + e2 + " filterSizes in config");
    return ((t4, n3, r3, e3) => {
      var i2, o2 = Ev(t4), a2 = o2.getRemainingWeights, s2 = [], u2 = ((t5, n4) => {
        var r4 = bv(t5, n4), e4 = yv(t5, n4);
        return { extractConvParams: r4, extractConvWithBatchNormParams(e5, i3, o3) {
          var a3 = r4(e5, i3, 3, o3 + "/conv"), s3 = ((r5, e6) => {
            var i4 = lr(t5(r5)), o4 = lr(t5(r5));
            return n4.push({ paramPath: e6 + "/sub" }, { paramPath: e6 + "/truediv" }), { sub: i4, truediv: o4 };
          })(i3, o3 + "/bn");
          return { conv: a3, bn: s3 };
        }, extractSeparableConvParams: e4 };
      })(o2.extractWeights, s2), c2 = u2.extractConvParams, l2 = u2.extractConvWithBatchNormParams, h2 = u2.extractSeparableConvParams;
      if (n3.withSeparableConvs) {
        var f2 = e3[0], d2 = e3[1], v2 = e3[2], p2 = e3[3], m2 = e3[4], x2 = e3[5], b2 = e3[6], g2 = e3[7], w2 = e3[8];
        i2 = { conv0: n3.isFirstLayerConv2d ? c2(f2, d2, 3, "conv0") : h2(f2, d2, "conv0"), conv1: h2(d2, v2, "conv1"), conv2: h2(v2, p2, "conv2"), conv3: h2(p2, m2, "conv3"), conv4: h2(m2, x2, "conv4"), conv5: h2(x2, b2, "conv5"), conv6: g2 ? h2(b2, g2, "conv6") : void 0, conv7: w2 ? h2(g2, w2, "conv7") : void 0, conv8: c2(w2 || g2 || b2, 5 * r3, 1, "conv8") };
      } else v2 = e3[2], p2 = e3[3], m2 = e3[4], x2 = e3[5], b2 = e3[6], g2 = e3[7], w2 = e3[8], i2 = { conv0: l2(f2 = e3[0], d2 = e3[1], "conv0"), conv1: l2(d2, v2, "conv1"), conv2: l2(v2, p2, "conv2"), conv3: l2(p2, m2, "conv3"), conv4: l2(m2, x2, "conv4"), conv5: l2(x2, b2, "conv5"), conv6: l2(b2, g2, "conv6"), conv7: l2(g2, w2, "conv7"), conv8: c2(w2, 5 * r3, 1, "conv8") };
      if (0 !== a2().length) throw Error("weights remaing after extract: " + a2().length);
      return { params: i2, paramMappings: s2 };
    })(t3, this.config, this.boxEncodingSize, r2);
  }, n2.prototype.extractBoxes = function(t3, n3, r2) {
    return Gf(this, 0, void 0, function() {
      var e2, i2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2, w2, y2, C2, _2, E2, R2, A2, N2, O2, M2, I2, T2, S2 = this;
      return Uf(this, function(D2) {
        switch (D2.label) {
          case 0:
            return a2 = (o2 = Math.max(e2 = n3.width, i2 = n3.height)) / e2, s2 = o2 / i2, u2 = t3.shape[1], c2 = this.config.anchors.length, l2 = Vn(() => {
              var n4 = t3.reshape([u2, u2, c2, S2.boxEncodingSize]);
              return [n4.slice([0, 0, 0, 0], [u2, u2, c2, 4]), n4.slice([0, 0, 0, 4], [u2, u2, c2, 1]), S2.withClassScores ? We(n4.slice([0, 0, 0, 5], [u2, u2, c2, S2.config.classes.length]), 3) : cr(0)];
            }), h2 = l2[0], d2 = l2[2], v2 = [], [4, (f2 = l2[1]).array()];
          case 1:
            return p2 = D2.sent(), [4, h2.array()];
          case 2:
            m2 = D2.sent(), x2 = 0, D2.label = 3;
          case 3:
            if (x2 >= u2) return [3, 12];
            b2 = 0, D2.label = 4;
          case 4:
            if (b2 >= u2) return [3, 11];
            g2 = 0, D2.label = 5;
          case 5:
            return c2 > g2 ? (w2 = xd(p2[x2][b2][g2][0]), r2 && r2 >= w2 ? [3, 9] : (y2 = (b2 + xd(m2[x2][b2][g2][0])) / u2 * a2, C2 = (x2 + xd(m2[x2][b2][g2][1])) / u2 * s2, R2 = y2 - (_2 = Math.exp(m2[x2][b2][g2][2]) * this.config.anchors[g2].x / u2 * a2) / 2, A2 = C2 - (E2 = Math.exp(m2[x2][b2][g2][3]) * this.config.anchors[g2].y / u2 * s2) / 2, N2 = { row: x2, col: b2, anchor: g2 }, this.withClassScores ? [4, this.extractPredictedClass(d2, N2)] : [3, 7])) : [3, 10];
          case 6:
            return T2 = D2.sent(), [3, 8];
          case 7:
            T2 = { classScore: 1, label: 0 }, D2.label = 8;
          case 8:
            M2 = (O2 = T2).classScore, I2 = O2.label, v2.push(zf({ box: new ud(R2, A2, R2 + _2, A2 + E2), score: w2, classScore: w2 * M2, label: I2 }, N2)), D2.label = 9;
          case 9:
            return g2++, [3, 5];
          case 10:
            return b2++, [3, 4];
          case 11:
            return x2++, [3, 3];
          case 12:
            return h2.dispose(), f2.dispose(), d2.dispose(), [2, v2];
        }
      });
    });
  }, n2.prototype.extractPredictedClass = function(t3, n3) {
    return Gf(this, 0, void 0, function() {
      var r2, e2, i2, o2;
      return Uf(this, function(a2) {
        switch (a2.label) {
          case 0:
            return r2 = n3.row, e2 = n3.col, i2 = n3.anchor, [4, t3.array()];
          case 1:
            return o2 = a2.sent(), [2, Array(this.config.classes.length).fill(0).map((t4, n4) => o2[r2][e2][i2][n4]).map((t4, n4) => ({ classScore: t4, label: n4 })).reduce((t4, n4) => t4.classScore > n4.classScore ? t4 : n4)];
        }
      });
    });
  }, n2.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024], n2;
})(fv);
var Sp = (function(t2) {
  function n2(n3) {
    void 0 === n3 && (n3 = true);
    var r2 = Object.assign({}, { withSeparableConvs: n3, iouThreshold: 0.4, classes: ["face"] }, n3 ? { anchors: _p, meanRgb: Ep } : { anchors: Cp, withClassScores: true });
    return t2.call(this, r2) || this;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "withSeparableConvs", { get() {
    return this.config.withSeparableConvs;
  }, enumerable: true, configurable: true }), Object.defineProperty(n2.prototype, "anchors", { get() {
    return this.config.anchors;
  }, enumerable: true, configurable: true }), n2.prototype.locateFaces = function(t3, n3) {
    return Gf(this, 0, void 0, function() {
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.detect(t3, n3)];
          case 1:
            return [2, r2.sent().map((t4) => new ld(t4.score, t4.relativeBox, { width: t4.imageWidth, height: t4.imageHeight }))];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = function() {
    return this.withSeparableConvs ? "tiny_yolov2_separable_conv_model" : "tiny_yolov2_model";
  }, n2.prototype.extractParamsFromWeigthMap = function(n3) {
    return t2.prototype.extractParamsFromWeigthMap.call(this, n3);
  }, n2;
})(Tp);
function Dp(t2, n2) {
  void 0 === n2 && (n2 = true);
  var r2 = new Sp(n2);
  return r2.extractWeights(t2), r2;
}
var kp = (function(t2) {
  function n2() {
    var n3 = null !== t2 && t2.apply(this, arguments) || this;
    return n3.G = "TinyFaceDetectorOptions", n3;
  }
  return Wf(n2, t2), n2;
})(Ip);
var Pp = (function() {
  function t2() {
  }
  return t2.prototype.then = function(t3) {
    return Gf(this, 0, void 0, function() {
      var n2;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = t3, [4, this.run()];
          case 1:
            return [2, n2.call(void 0, r2.sent())];
        }
      });
    });
  }, t2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      return Uf(this, (t3) => {
        throw Error("ComposableTask - run is not implemented");
      });
    });
  }, t2;
})();
function Fp(t2, n2, r2, e2, i2) {
  return void 0 === i2 && (i2 = (t3) => t3.alignedRect), Gf(this, 0, void 0, function() {
    var o2, a2, s2, u2, c2;
    return Uf(this, (l2) => {
      switch (l2.label) {
        case 0:
          return o2 = t2.map((t3) => Lv(t3) ? i2(t3) : t3.detection), (s2 = e2) ? [3, 5] : n2 instanceof vt ? [4, iv(n2, o2)] : [3, 2];
        case 1:
          return u2 = l2.sent(), [3, 4];
        case 2:
          return [4, ev(n2, o2)];
        case 3:
          u2 = l2.sent(), l2.label = 4;
        case 4:
          s2 = u2, l2.label = 5;
        case 5:
          return [4, r2(a2 = s2)];
        case 6:
          return c2 = l2.sent(), a2.forEach((t3) => t3 instanceof vt && t3.dispose()), [2, c2];
      }
    });
  });
}
function Lp(t2, n2, r2, e2, i2) {
  return Gf(this, 0, void 0, function() {
    var o2 = this;
    return Uf(this, function(a2) {
      return [2, Fp([t2], n2, function(t3) {
        return Gf(o2, 0, void 0, function() {
          return Uf(this, (n3) => [2, r2(t3[0])]);
        });
      }, e2, i2)];
    });
  });
}
function Bp(t2, n2) {
  var r2 = n2[1];
  return { height: Math.floor(n2[0] * t2), width: Math.floor(r2 * t2) };
}
var Vp = (function(t2) {
  function n2(n3, r2, e2, i2) {
    return t2.call(this, { left: n3, top: r2, right: e2, bottom: i2 }, true) || this;
  }
  return Wf(n2, t2), n2;
})(sd);
function Wp(t2) {
  return Vn(() => ku(Vu(t2, cr(127.5)), cr(78125e-7)));
}
function zp(t2, n2) {
  return Vn(() => wu(Qc(t2), ku(n2, Bs(Qc(Bs(t2))))));
}
function Gp(t2, n2, r2) {
  return void 0 === r2 && (r2 = false), Vn(() => {
    var e2 = mv(t2, n2.conv1, "valid");
    return e2 = zp(e2, n2.prelu1_alpha), e2 = zp(e2 = mv(e2 = Oc(e2, r2 ? [2, 2] : [3, 3], [2, 2], "same"), n2.conv2, "valid"), n2.prelu2_alpha), zp(e2 = mv(e2 = r2 ? e2 : Oc(e2, [3, 3], [2, 2], "valid"), n2.conv3, "valid"), n2.prelu3_alpha);
  });
}
function Up(t2, n2, r2, e2, i2) {
  i2.stage1 = [];
  var o2 = n2.map((n3) => Vn(() => {
    var r3 = { scale: n3 }, i3 = ((t3, n4) => Vn(() => {
      var r4 = Bp(n4, t3.shape.slice(1)), e3 = Wp(Kl.resizeBilinear(t3, [r4.height, r4.width]));
      return rl(e3, [0, 2, 1, 3]);
    }))(t2, n3), o3 = Date.now(), a3 = ((t3, n4) => Vn(() => {
      var r4 = Gp(t3, n4, true), e3 = mv(r4, n4.conv4_1, "valid"), i4 = Yr(jc(e3, 3), 3);
      return { prob: We(Vu(e3, i4), 3), regions: mv(r4, n4.conv4_2, "valid") };
    }))(i3, e2), s3 = a3.prob, u3 = a3.regions;
    return r3.pnet = Date.now() - o3, { scoresTensor: pe(pe(s3, 3)[1])[0], regionsTensor: pe(u3)[0], scale: n3, statsForScale: r3 };
  })), a2 = o2.map((t3) => {
    var n3 = t3.scoresTensor, e3 = t3.regionsTensor, o3 = t3.statsForScale, a3 = ((t4, n4, r3, e4) => {
      for (var i3 = [], o4 = t4.arraySync(), a4 = 0; t4.shape[0] > a4; a4++) for (var s4 = 0; t4.shape[1] > s4; s4++) e4 > o4[a4][s4] || i3.push(new ad(s4, a4));
      return i3.map((t5) => {
        var e5 = new ud(Math.round((2 * t5.y + 1) / r3), Math.round((2 * t5.x + 1) / r3), Math.round((2 * t5.y + 12) / r3), Math.round((2 * t5.x + 12) / r3)), i4 = o4[t5.y][t5.x], a5 = n4.arraySync();
        return { cell: e5, score: i4, region: new Vp(a5[t5.y][t5.x][0], a5[t5.y][t5.x][1], a5[t5.y][t5.x][2], a5[t5.y][t5.x][3]) };
      });
    })(n3, e3, t3.scale, r2);
    if (n3.dispose(), e3.dispose(), !a3.length) return i2.stage1.push(o3), [];
    var s3 = Date.now(), u3 = dd(a3.map((t4) => t4.cell), a3.map((t4) => t4.score), 0.5);
    return o3.nms = Date.now() - s3, o3.numBoxes = u3.length, i2.stage1.push(o3), u3.map((t4) => a3[t4]);
  }), s2 = a2.reduce((t3, n3) => t3.concat(n3), []), u2 = [], c2 = [];
  if (s2.length > 0) {
    var l2 = Date.now(), h2 = dd(s2.map((t3) => t3.cell), s2.map((t3) => t3.score), 0.7);
    i2.stage1_nms = Date.now() - l2, c2 = h2.map((t3) => s2[t3].score), u2 = h2.map((t3) => s2[t3]).map((t3) => {
      var n3 = t3.cell, r3 = t3.region;
      return new ud(n3.left + r3.left * n3.width, n3.top + r3.top * n3.height, n3.right + r3.right * n3.width, n3.bottom + r3.bottom * n3.height).toSquare().round();
    });
  }
  return { boxes: u2, scores: c2 };
}
function jp(t2, n2, r2) {
  var e2 = r2.width, i2 = r2.height;
  return Gf(this, 0, void 0, function() {
    var r3, o2, a2, s2 = this;
    return Uf(this, function(u2) {
      switch (u2.label) {
        case 0:
          return r3 = zd(t2), [4, Promise.all(n2.map(function(n3) {
            return Gf(s2, 0, void 0, function() {
              var e3, i3, o3, a3;
              return Uf(this, (s3) => (e3 = n3.padAtBorders(t2.height, t2.width), a3 = r3.getImageData(i3 = e3.x - 1, o3 = e3.y - 1, e3.ex - i3, e3.ey - o3), [2, Vd.isNodejs() ? Jd(a3) : createImageBitmap(a3)]));
            });
          }))];
        case 1:
          return o2 = u2.sent(), a2 = [], o2.forEach((t3) => {
            var n3 = zd(Yd({ width: e2, height: i2 }));
            n3.drawImage(t3, 0, 0, e2, i2);
            for (var r4 = n3.getImageData(0, 0, e2, i2).data, o3 = [], s3 = 0; r4.length > s3; s3 += 4) o3.push(r4[s3 + 2]), o3.push(r4[s3 + 1]), o3.push(r4[s3]);
            a2.push(o3);
          }), [2, a2.map((t3) => Vn(() => Wp(rl(dr(t3, [1, e2, i2, 3]), [0, 2, 1, 3]).toFloat())))];
      }
    });
  });
}
function qp(t2, n2, r2, e2, i2) {
  return Gf(this, 0, void 0, function() {
    var o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2;
    return Uf(this, (g2) => {
      switch (g2.label) {
        case 0:
          return o2 = Date.now(), [4, jp(t2, n2, { width: 24, height: 24 })];
        case 1:
          return a2 = g2.sent(), i2.stage2_extractImagePatches = Date.now() - o2, o2 = Date.now(), s2 = a2.map((t3) => {
            var n3 = ((t4, n4) => Vn(() => {
              var r3 = Gp(t4, n4), e3 = zp(Mv(ce(r3, [r3.shape[0], n4.fc1.weights.shape[0]]), n4.fc1), n4.prelu4_alpha), i3 = Mv(e3, n4.fc2_1), o3 = Yr(jc(i3, 1), 1), a3 = We(Vu(i3, o3), 1), s3 = Mv(e3, n4.fc2_2);
              return { scores: pe(a3, 1)[1], regions: s3 };
            }))(t3, e2);
            return t3.dispose(), n3;
          }), i2.stage2_rnet = Date.now() - o2, u2 = s2.length > 1 ? Er(s2.map((t3) => t3.scores)) : s2[0].scores, h2 = (l2 = Array).from, [4, u2.data()];
        case 2:
          return c2 = h2.call(l2, g2.sent()), u2.dispose(), f2 = c2.map((t3, n3) => ({ score: t3, idx: n3 })).filter((t3) => t3.score > r2).map((t3) => t3.idx), d2 = f2.map((t3) => n2[t3]), v2 = f2.map((t3) => c2[t3]), p2 = [], m2 = [], d2.length > 0 && (o2 = Date.now(), x2 = dd(d2, v2, 0.7), i2.stage2_nms = Date.now() - o2, b2 = x2.map((t3) => {
            var n3 = s2[f2[t3]].regions.arraySync();
            return new Vp(n3[0][0], n3[0][1], n3[0][2], n3[0][3]);
          }), m2 = x2.map((t3) => v2[t3]), p2 = x2.map((t3, n3) => d2[t3].calibrate(b2[n3]))), s2.forEach((t3) => {
            t3.regions.dispose(), t3.scores.dispose();
          }), [2, { boxes: p2, scores: m2 }];
      }
    });
  });
}
function Hp(t2, n2, r2, e2, i2) {
  return Gf(this, 0, void 0, function() {
    var o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2;
    return Uf(this, (w2) => {
      switch (w2.label) {
        case 0:
          return o2 = Date.now(), [4, jp(t2, n2, { width: 48, height: 48 })];
        case 1:
          return a2 = w2.sent(), i2.stage3_extractImagePatches = Date.now() - o2, o2 = Date.now(), s2 = a2.map((t3) => {
            var n3 = ((t4, n4) => Vn(() => {
              var r3 = Gp(t4, n4);
              r3 = zp(r3 = mv(r3 = Oc(r3, [2, 2], [2, 2], "same"), n4.conv4, "valid"), n4.prelu4_alpha);
              var e3 = zp(Mv(ce(r3, [r3.shape[0], n4.fc1.weights.shape[0]]), n4.fc1), n4.prelu5_alpha), i3 = Mv(e3, n4.fc2_1), o3 = Yr(jc(i3, 1), 1), a3 = We(Vu(i3, o3), 1), s3 = Mv(e3, n4.fc2_2), u3 = Mv(e3, n4.fc2_3);
              return { scores: pe(a3, 1)[1], regions: s3, points: u3 };
            }))(t3, e2);
            return t3.dispose(), n3;
          }), i2.stage3_onet = Date.now() - o2, u2 = s2.length > 1 ? Er(s2.map((t3) => t3.scores)) : s2[0].scores, h2 = (l2 = Array).from, [4, u2.data()];
        case 2:
          return c2 = h2.call(l2, w2.sent()), u2.dispose(), f2 = c2.map((t3, n3) => ({ score: t3, idx: n3 })).filter((t3) => t3.score > r2).map((t3) => t3.idx), d2 = f2.map((t3) => {
            var n3 = s2[t3].regions.arraySync();
            return new Vp(n3[0][0], n3[0][1], n3[0][2], n3[0][3]);
          }), v2 = f2.map((t3, r3) => n2[t3].calibrate(d2[r3])), p2 = f2.map((t3) => c2[t3]), m2 = [], x2 = [], b2 = [], v2.length > 0 && (o2 = Date.now(), g2 = dd(v2, p2, 0.7, false), i2.stage3_nms = Date.now() - o2, m2 = g2.map((t3) => v2[t3]), x2 = g2.map((t3) => p2[t3]), b2 = g2.map((t3, n3) => [, , , , ,].fill(0).map((r3, e3) => {
            var i3 = s2[t3].points.arraySync();
            return new ad(i3[0][e3] * (m2[n3].width + 1) + m2[n3].left, i3[0][e3 + 5] * (m2[n3].height + 1) + m2[n3].top);
          }))), s2.forEach((t3) => {
            t3.regions.dispose(), t3.scores.dispose(), t3.points.dispose();
          }), [2, { boxes: m2, scores: x2, points: b2 }];
      }
    });
  });
}
var Xp = (function(t2) {
  function n2() {
    return t2.call(this, "Mtcnn") || this;
  }
  return Wf(n2, t2), n2.prototype.load = function(n3) {
    return Gf(this, 0, void 0, function() {
      return Uf(this, function(r2) {
        return console.warn("mtcnn is deprecated and will be removed soon"), [2, t2.prototype.load.call(this, n3)];
      });
    });
  }, n2.prototype.loadFromDisk = function(n3) {
    return Gf(this, 0, void 0, function() {
      return Uf(this, function(r2) {
        return console.warn("mtcnn is deprecated and will be removed soon"), [2, t2.prototype.loadFromDisk.call(this, n3)];
      });
    });
  }, n2.prototype.forwardInput = function(t3, n3) {
    return void 0 === n3 && (n3 = {}), Gf(this, 0, void 0, function() {
      var r2, e2, i2, o2, a2, s2, u2, c2, l2, h2, f2, d2, v2, p2, m2, x2, b2, g2, w2, y2;
      return Uf(this, function(C2) {
        switch (C2.label) {
          case 0:
            if (!(r2 = this.params)) throw Error("Mtcnn - load model before inference");
            if (!(e2 = t3.canvases[0])) throw Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
            return i2 = {}, o2 = Date.now(), a2 = Vn(() => {
              return t4 = Yr(mf.fromPixels(e2)).toFloat(), Vn(() => fe(pe(t4, 3).reverse(), 3));
              var t4;
            }), s2 = (t4) => (a2.dispose(), i2.total = Date.now() - o2, t4), u2 = a2.shape.slice(1), c2 = u2[0], l2 = u2[1], h2 = new hp(n3), f2 = h2.minFaceSize, d2 = h2.scaleFactor, v2 = h2.maxNumScales, p2 = h2.scoreThresholds, m2 = (h2.scaleSteps || ((t4, n4, r3) => {
              for (var e3 = 12 / t4, i3 = [], o3 = Math.min(r3[0], r3[1]) * e3, a3 = 0; o3 >= 12; ) i3.push(e3 * Math.pow(n4, a3)), o3 *= n4, a3 += 1;
              return i3;
            })(f2, d2, [c2, l2])).filter((t4) => {
              var n4 = Bp(t4, [c2, l2]);
              return Math.min(n4.width, n4.height) > 12;
            }).slice(0, v2), i2.scales = m2, i2.pyramid = m2.map((t4) => Bp(t4, [c2, l2])), x2 = Date.now(), [4, Up(a2, m2, p2[0], r2.pnet, i2)];
          case 1:
            return b2 = C2.sent(), i2.total_stage1 = Date.now() - x2, b2.boxes.length ? (i2.stage2_numInputBoxes = b2.boxes.length, x2 = Date.now(), [4, qp(e2, b2.boxes, p2[1], r2.rnet, i2)]) : [2, s2({ results: [], stats: i2 })];
          case 2:
            return g2 = C2.sent(), i2.total_stage2 = Date.now() - x2, g2.boxes.length ? (i2.stage3_numInputBoxes = g2.boxes.length, x2 = Date.now(), [4, Hp(e2, g2.boxes, p2[2], r2.onet, i2)]) : [2, s2({ results: [], stats: i2 })];
          case 3:
            return w2 = C2.sent(), i2.total_stage3 = Date.now() - x2, y2 = w2.boxes.map((t4, n4) => Bv(Md({}, new ld(w2.scores[n4], new wd(t4.left / l2, t4.top / c2, t4.width / l2, t4.height / c2), { height: c2, width: l2 })), new Cd(w2.points[n4].map((n5) => n5.sub(new ad(t4.left, t4.top)).div(new ad(t4.width, t4.height))), { width: t4.width, height: t4.height }))), [2, s2({ results: y2, stats: i2 })];
        }
      });
    });
  }, n2.prototype.forward = function(t3, n3) {
    return void 0 === n3 && (n3 = {}), Gf(this, 0, void 0, function() {
      var r2;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return r2 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [4, r2.call(this, e2.sent(), n3)];
          case 2:
            return [2, e2.sent().results];
        }
      });
    });
  }, n2.prototype.forwardWithStats = function(t3, n3) {
    return void 0 === n3 && (n3 = {}), Gf(this, 0, void 0, function() {
      var r2;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return r2 = this.forwardInput, [4, rv(t3)];
          case 1:
            return [2, r2.call(this, e2.sent(), n3)];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "mtcnn_model", n2.prototype.extractParamsFromWeigthMap = (t3) => ((t4) => {
    var n3 = [], r2 = ((t5, n4) => {
      var r3 = _v(t5, n4);
      function e3(t6) {
        return { filters: r3(t6 + "/weights", 4, t6 + "/filters"), bias: r3(t6 + "/bias", 1) };
      }
      function i3(t6) {
        return { weights: r3(t6 + "/weights", 2), bias: r3(t6 + "/bias", 1) };
      }
      function o3(t6) {
        return r3(t6, 1);
      }
      function a3(t6) {
        return { conv1: e3(t6 + "/conv1"), prelu1_alpha: o3(t6 + "/prelu1_alpha"), conv2: e3(t6 + "/conv2"), prelu2_alpha: o3(t6 + "/prelu2_alpha"), conv3: e3(t6 + "/conv3"), prelu3_alpha: o3(t6 + "/prelu3_alpha") };
      }
      return { extractPNetParams() {
        var t6 = a3("pnet"), n5 = e3("pnet/conv4_1"), r4 = e3("pnet/conv4_2");
        return zf(zf({}, t6), { conv4_1: n5, conv4_2: r4 });
      }, extractRNetParams() {
        var t6 = a3("rnet"), n5 = i3("rnet/fc1"), r4 = o3("rnet/prelu4_alpha"), e4 = i3("rnet/fc2_1"), s3 = i3("rnet/fc2_2");
        return zf(zf({}, t6), { fc1: n5, prelu4_alpha: r4, fc2_1: e4, fc2_2: s3 });
      }, extractONetParams() {
        var t6 = a3("onet"), n5 = e3("onet/conv4"), r4 = o3("onet/prelu4_alpha"), s3 = i3("onet/fc1"), u2 = o3("onet/prelu5_alpha"), c2 = i3("onet/fc2_1"), l2 = i3("onet/fc2_2"), h2 = i3("onet/fc2_3");
        return zf(zf({}, t6), { conv4: n5, prelu4_alpha: r4, fc1: s3, prelu5_alpha: u2, fc2_1: c2, fc2_2: l2, fc2_3: h2 });
      } };
    })(t4, n3), e2 = r2.extractRNetParams, i2 = r2.extractONetParams, o2 = (0, r2.extractPNetParams)(), a2 = e2(), s2 = i2();
    return xv(t4, n3), { params: { pnet: o2, rnet: a2, onet: s2 }, paramMappings: n3 };
  })(t3), n2.prototype.extractParams = (t3) => ((t4) => {
    var n3 = Ev(t4), r2 = n3.getRemainingWeights, e2 = [], i2 = ((t5, n4) => {
      var r3 = bv(t5, n4), e3 = gv(t5, n4);
      function i3(r4, e4) {
        var i4 = lr(t5(r4));
        return n4.push({ paramPath: e4 }), i4;
      }
      function o3(t6, n5, e4) {
        return void 0 === e4 && (e4 = false), { conv1: r3(t6[0], t6[1], 3, n5 + "/conv1"), prelu1_alpha: i3(t6[1], n5 + "/prelu1_alpha"), conv2: r3(t6[1], t6[2], 3, n5 + "/conv2"), prelu2_alpha: i3(t6[2], n5 + "/prelu2_alpha"), conv3: r3(t6[2], t6[3], e4 ? 2 : 3, n5 + "/conv3"), prelu3_alpha: i3(t6[3], n5 + "/prelu3_alpha") };
      }
      return { extractPNetParams() {
        var t6 = o3([3, 10, 16, 32], "pnet"), n5 = r3(32, 2, 1, "pnet/conv4_1"), e4 = r3(32, 4, 1, "pnet/conv4_2");
        return zf(zf({}, t6), { conv4_1: n5, conv4_2: e4 });
      }, extractRNetParams() {
        var t6 = o3([3, 28, 48, 64], "rnet", true), n5 = e3(576, 128, "rnet/fc1"), r4 = i3(128, "rnet/prelu4_alpha"), a3 = e3(128, 2, "rnet/fc2_1"), s3 = e3(128, 4, "rnet/fc2_2");
        return zf(zf({}, t6), { fc1: n5, prelu4_alpha: r4, fc2_1: a3, fc2_2: s3 });
      }, extractONetParams() {
        var t6 = o3([3, 32, 64, 64], "onet"), n5 = r3(64, 128, 2, "onet/conv4"), a3 = i3(128, "onet/prelu4_alpha"), s3 = e3(1152, 256, "onet/fc1"), u3 = i3(256, "onet/prelu5_alpha"), c3 = e3(256, 2, "onet/fc2_1"), l2 = e3(256, 4, "onet/fc2_2"), h2 = e3(256, 10, "onet/fc2_3");
        return zf(zf({}, t6), { conv4: n5, prelu4_alpha: a3, fc1: s3, prelu5_alpha: u3, fc2_1: c3, fc2_2: l2, fc2_3: h2 });
      } };
    })(n3.extractWeights, e2), o2 = i2.extractRNetParams, a2 = i2.extractONetParams, s2 = (0, i2.extractPNetParams)(), u2 = o2(), c2 = a2();
    if (0 !== r2().length) throw Error("weights remaing after extract: " + r2().length);
    return { params: { pnet: s2, rnet: u2, onet: c2 }, paramMappings: e2 };
  })(t3), n2;
})(fv);
var $p = [new ad(1.603231, 2.094468), new ad(6.041143, 7.080126), new ad(2.882459, 3.518061), new ad(4.266906, 5.178857), new ad(9.041765, 10.66308)];
var Kp = [117.001, 114.697, 97.404];
var Yp = (function(t2) {
  function n2() {
    return t2.call(this, { withSeparableConvs: true, iouThreshold: 0.4, classes: ["face"], anchors: $p, meanRgb: Kp, isFirstLayerConv2d: true, filterSizes: [3, 16, 32, 64, 128, 256, 512] }) || this;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "anchors", { get() {
    return this.config.anchors;
  }, enumerable: true, configurable: true }), n2.prototype.locateFaces = function(t3, n3) {
    return Gf(this, 0, void 0, function() {
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.detect(t3, n3)];
          case 1:
            return [2, r2.sent().map((t4) => new ld(t4.score, t4.relativeBox, { width: t4.imageWidth, height: t4.imageHeight }))];
        }
      });
    });
  }, n2.prototype.getDefaultModelName = () => "tiny_face_detector_model", n2.prototype.extractParamsFromWeigthMap = function(n3) {
    return t2.prototype.extractParamsFromWeigthMap.call(this, n3);
  }, n2;
})(Tp);
var Jp = { ssdMobilenetv1: new mp(), tinyFaceDetector: new Yp(), tinyYolov2: new Sp(), mtcnn: new Xp(), faceLandmark68Net: new Kv(), faceLandmark68TinyNet: new Jv(), faceRecognitionNet: new ip(), faceExpressionNet: new kv(), ageGenderNet: new Xv() };
var Zp = (t2, n2) => Jp.ssdMobilenetv1.locateFaces(t2, n2);
var Qp = (t2, n2) => Jp.tinyFaceDetector.locateFaces(t2, n2);
var tm = (t2, n2) => Jp.tinyYolov2.locateFaces(t2, n2);
var nm = (t2, n2) => Jp.mtcnn.forward(t2, n2);
var rm = (t2) => Jp.faceLandmark68Net.detectLandmarks(t2);
var em = (t2) => Jp.faceLandmark68TinyNet.detectLandmarks(t2);
var im = (t2) => Jp.faceRecognitionNet.computeFaceDescriptor(t2);
var om = (t2) => Jp.faceExpressionNet.predictExpressions(t2);
var am = (t2) => Jp.ageGenderNet.predictAgeAndGender(t2);
var sm = (t2) => Jp.ssdMobilenetv1.load(t2);
var um = (t2) => Jp.tinyFaceDetector.load(t2);
var cm = (t2) => Jp.mtcnn.load(t2);
var lm = (t2) => Jp.tinyYolov2.load(t2);
var hm = (t2) => Jp.faceLandmark68Net.load(t2);
var fm = (t2) => Jp.faceLandmark68TinyNet.load(t2);
var dm = (t2) => Jp.faceRecognitionNet.load(t2);
var vm = (t2) => Jp.faceExpressionNet.load(t2);
var pm = (t2) => Jp.ageGenderNet.load(t2);
var mm = sm;
var xm = Zp;
var bm = rm;
var gm = (function(t2) {
  function n2(n3, r2, e2) {
    var i2 = t2.call(this) || this;
    return i2.parentTask = n3, i2.input = r2, i2.extractedFaces = e2, i2;
  }
  return Wf(n2, t2), n2;
})(Pp);
var wm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2 = this;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return [4, Fp(t3 = e2.sent(), this.input, function(t4) {
              return Gf(r2, 0, void 0, function() {
                return Uf(this, (n4) => {
                  switch (n4.label) {
                    case 0:
                      return [4, Promise.all(t4.map((t5) => Jp.faceExpressionNet.predictExpressions(t5)))];
                    case 1:
                      return [2, n4.sent()];
                  }
                });
              });
            }, this.extractedFaces)];
          case 2:
            return n3 = e2.sent(), [2, t3.map((t4, r3) => Fv(t4, n3[r3]))];
        }
      });
    });
  }, n2.prototype.withAgeAndGender = function() {
    return new Rm(this, this.input);
  }, n2;
})(gm);
var ym = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return (t3 = r2.sent()) ? [4, Lp(t3, this.input, (t4) => Jp.faceExpressionNet.predictExpressions(t4), this.extractedFaces)] : [2];
          case 2:
            return n3 = r2.sent(), [2, Fv(t3, n3)];
        }
      });
    });
  }, n2.prototype.withAgeAndGender = function() {
    return new Am(this, this.input);
  }, n2;
})(gm);
var Cm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.withAgeAndGender = function() {
    return new Nm(this, this.input);
  }, n2.prototype.withFaceDescriptors = function() {
    return new Im(this, this.input);
  }, n2;
})(wm);
var _m = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.withAgeAndGender = function() {
    return new Om(this, this.input);
  }, n2.prototype.withFaceDescriptor = function() {
    return new Tm(this, this.input);
  }, n2;
})(ym);
var Em = (function(t2) {
  function n2(n3, r2, e2) {
    var i2 = t2.call(this) || this;
    return i2.parentTask = n3, i2.input = r2, i2.extractedFaces = e2, i2;
  }
  return Wf(n2, t2), n2;
})(Pp);
var Rm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2 = this;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return [4, Fp(t3 = e2.sent(), this.input, function(t4) {
              return Gf(r2, 0, void 0, function() {
                return Uf(this, (n4) => {
                  switch (n4.label) {
                    case 0:
                      return [4, Promise.all(t4.map((t5) => Jp.ageGenderNet.predictAgeAndGender(t5)))];
                    case 1:
                      return [2, n4.sent()];
                  }
                });
              });
            }, this.extractedFaces)];
          case 2:
            return n3 = e2.sent(), [2, t3.map((t4, r3) => {
              var e3 = n3[r3], i2 = e3.age;
              return up(lp(t4, e3.gender, e3.genderProbability), i2);
            })];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new wm(this, this.input);
  }, n2;
})(Em);
var Am = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2;
      return Uf(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return (t3 = e2.sent()) ? [4, Lp(t3, this.input, (t4) => Jp.ageGenderNet.predictAgeAndGender(t4), this.extractedFaces)] : [2];
          case 2:
            return n3 = e2.sent(), r2 = n3.age, [2, up(lp(t3, n3.gender, n3.genderProbability), r2)];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new ym(this, this.input);
  }, n2;
})(Em);
var Nm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.withFaceExpressions = function() {
    return new Cm(this, this.input);
  }, n2.prototype.withFaceDescriptors = function() {
    return new Im(this, this.input);
  }, n2;
})(Rm);
var Om = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.withFaceExpressions = function() {
    return new _m(this, this.input);
  }, n2.prototype.withFaceDescriptor = function() {
    return new Tm(this, this.input);
  }, n2;
})(Am);
var Mm = (function(t2) {
  function n2(n3, r2) {
    var e2 = t2.call(this) || this;
    return e2.parentTask = n3, e2.input = r2, e2;
  }
  return Wf(n2, t2), n2;
})(Pp);
var Im = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3;
      return Uf(this, function(n3) {
        switch (n3.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return [4, Fp(t3 = n3.sent(), this.input, (t4) => Promise.all(t4.map((t5) => Jp.faceRecognitionNet.computeFaceDescriptor(t5))), null, (t4) => t4.landmarks.align(null, { useDlibAlignment: true }))];
          case 2:
            return [2, n3.sent().map((n4, r2) => ap(t3[r2], n4))];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new Cm(this, this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Nm(this, this.input);
  }, n2;
})(Mm);
var Tm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return (t3 = r2.sent()) ? [4, Lp(t3, this.input, (t4) => Jp.faceRecognitionNet.computeFaceDescriptor(t4), null, (t4) => t4.landmarks.align(null, { useDlibAlignment: true }))] : [2];
          case 2:
            return n3 = r2.sent(), [2, ap(t3, n3)];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new _m(this, this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Om(this, this.input);
  }, n2;
})(Mm);
var Sm = (function(t2) {
  function n2(n3, r2, e2) {
    var i2 = t2.call(this) || this;
    return i2.parentTask = n3, i2.input = r2, i2.useTinyLandmarkNet = e2, i2;
  }
  return Wf(n2, t2), Object.defineProperty(n2.prototype, "landmarkNet", { get() {
    return this.useTinyLandmarkNet ? Jp.faceLandmark68TinyNet : Jp.faceLandmark68Net;
  }, enumerable: true, configurable: true }), n2;
})(Pp);
var Dm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2, e2, i2, o2 = this;
      return Uf(this, function(a2) {
        switch (a2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return t3 = a2.sent(), n3 = t3.map((t4) => t4.detection), this.input instanceof vt ? [4, iv(this.input, n3)] : [3, 3];
          case 2:
            return e2 = a2.sent(), [3, 5];
          case 3:
            return [4, ev(this.input, n3)];
          case 4:
            e2 = a2.sent(), a2.label = 5;
          case 5:
            return r2 = e2, [4, Promise.all(r2.map((t4) => o2.landmarkNet.detectLandmarks(t4)))];
          case 6:
            return i2 = a2.sent(), r2.forEach((t4) => t4 instanceof vt && t4.dispose()), [2, t3.map((t4, n4) => Bv(t4, i2[n4]))];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new Cm(this, this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Nm(this, this.input);
  }, n2.prototype.withFaceDescriptors = function() {
    return new Im(this, this.input);
  }, n2;
})(Sm);
var km = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2, e2, i2;
      return Uf(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, this.parentTask];
          case 1:
            return (t3 = o2.sent()) ? (n3 = t3.detection, this.input instanceof vt ? [4, iv(this.input, [n3])] : [3, 3]) : [2];
          case 2:
            return e2 = o2.sent(), [3, 5];
          case 3:
            return [4, ev(this.input, [n3])];
          case 4:
            e2 = o2.sent(), o2.label = 5;
          case 5:
            return [4, this.landmarkNet.detectLandmarks((r2 = e2)[0])];
          case 6:
            return i2 = o2.sent(), r2.forEach((t4) => t4 instanceof vt && t4.dispose()), [2, Bv(t3, i2)];
        }
      });
    });
  }, n2.prototype.withFaceExpressions = function() {
    return new _m(this, this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Om(this, this.input);
  }, n2.prototype.withFaceDescriptor = function() {
    return new Tm(this, this.input);
  }, n2;
})(Sm);
var Pm = (function(t2) {
  function n2(n3, r2) {
    void 0 === r2 && (r2 = new pp());
    var e2 = t2.call(this) || this;
    return e2.input = n3, e2.options = r2, e2;
  }
  return Wf(n2, t2), n2;
})(Pp);
var Fm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3, r2, e2;
      return Uf(this, function(i2) {
        switch (i2.label) {
          case 0:
            return n3 = (t3 = this).input, (r2 = t3.options) instanceof hp ? [4, Jp.mtcnn.forward(n3, r2)] : [3, 2];
          case 1:
            return [2, i2.sent().map((t4) => t4.detection)];
          case 2:
            if (!(e2 = r2 instanceof kp ? (t4) => Jp.tinyFaceDetector.locateFaces(t4, r2) : r2 instanceof pp ? (t4) => Jp.ssdMobilenetv1.locateFaces(t4, r2) : r2 instanceof Ip ? (t4) => Jp.tinyYolov2.locateFaces(t4, r2) : null)) throw Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");
            return [2, e2(n3)];
        }
      });
    });
  }, n2.prototype.runAndExtendWithFaceDetections = function() {
    var t3 = this;
    return new Promise(function(n3) {
      return Gf(t3, 0, void 0, function() {
        var t4;
        return Uf(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, this.run()];
            case 1:
              return t4 = r2.sent(), [2, n3(t4.map((t5) => Md({}, t5)))];
          }
        });
      });
    });
  }, n2.prototype.withFaceLandmarks = function(t3) {
    return void 0 === t3 && (t3 = false), new Dm(this.runAndExtendWithFaceDetections(), this.input, t3);
  }, n2.prototype.withFaceExpressions = function() {
    return new wm(this.runAndExtendWithFaceDetections(), this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Rm(this.runAndExtendWithFaceDetections(), this.input);
  }, n2;
})(Pm);
var Lm = (function(t2) {
  function n2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wf(n2, t2), n2.prototype.run = function() {
    return Gf(this, 0, void 0, function() {
      var t3, n3;
      return Uf(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, new Fm(this.input, this.options)];
          case 1:
            return t3 = r2.sent(), n3 = t3[0], t3.forEach((t4) => {
              t4.score > n3.score && (n3 = t4);
            }), [2, n3];
        }
      });
    });
  }, n2.prototype.runAndExtendWithFaceDetection = function() {
    var t3 = this;
    return new Promise(function(n3) {
      return Gf(t3, 0, void 0, function() {
        var t4;
        return Uf(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, this.run()];
            case 1:
              return t4 = r2.sent(), [2, n3(t4 ? Md({}, t4) : void 0)];
          }
        });
      });
    });
  }, n2.prototype.withFaceLandmarks = function(t3) {
    return void 0 === t3 && (t3 = false), new km(this.runAndExtendWithFaceDetection(), this.input, t3);
  }, n2.prototype.withFaceExpressions = function() {
    return new ym(this.runAndExtendWithFaceDetection(), this.input);
  }, n2.prototype.withAgeAndGender = function() {
    return new Am(this.runAndExtendWithFaceDetection(), this.input);
  }, n2;
})(Pm);
function Bm(t2, n2) {
  return void 0 === n2 && (n2 = new pp()), new Lm(t2, n2);
}
function Vm(t2, n2) {
  return void 0 === n2 && (n2 = new pp()), new Fm(t2, n2);
}
function Wm(t2, n2) {
  return Gf(this, 0, void 0, function() {
    return Uf(this, (r2) => {
      switch (r2.label) {
        case 0:
          return console.warn("allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead"), [4, Vm(t2, new pp(n2 ? { minConfidence: n2 } : {})).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, r2.sent()];
      }
    });
  });
}
function zm(t2, n2) {
  return void 0 === n2 && (n2 = {}), Gf(this, 0, void 0, function() {
    return Uf(this, (r2) => {
      switch (r2.label) {
        case 0:
          return console.warn("allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead"), [4, Vm(t2, new Ip(n2)).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, r2.sent()];
      }
    });
  });
}
function Gm(t2, n2) {
  return void 0 === n2 && (n2 = {}), Gf(this, 0, void 0, function() {
    return Uf(this, (r2) => {
      switch (r2.label) {
        case 0:
          return console.warn("allFacesMtcnn is deprecated and will be removed soon, use the high level api instead"), [4, Vm(t2, new hp(n2)).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, r2.sent()];
      }
    });
  });
}
var Um = Wm;
function jm(t2, n2) {
  if (t2.length !== n2.length) throw Error("euclideanDistance: arr1.length !== arr2.length");
  var r2 = Array.from(t2), e2 = Array.from(n2);
  return Math.sqrt(r2.map((t3, n3) => t3 - e2[n3]).reduce((t3, n3) => t3 + Math.pow(n3, 2), 0));
}
var qm = (function() {
  function t2(t3, n2) {
    void 0 === n2 && (n2 = 0.6), this.ot = n2;
    var r2 = Array.isArray(t3) ? t3 : [t3];
    if (!r2.length) throw Error("FaceRecognizer.constructor - expected atleast one input");
    var e2 = 1, i2 = () => "person " + e2++;
    this.st = r2.map((t4) => {
      if (t4 instanceof Ad) return t4;
      if (t4 instanceof Float32Array) return new Ad(i2(), [t4]);
      if (t4.descriptor && t4.descriptor instanceof Float32Array) return new Ad(i2(), [t4.descriptor]);
      throw Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
    });
  }
  return Object.defineProperty(t2.prototype, "labeledDescriptors", { get() {
    return this.st;
  }, enumerable: true, configurable: true }), Object.defineProperty(t2.prototype, "distanceThreshold", { get() {
    return this.ot;
  }, enumerable: true, configurable: true }), t2.prototype.computeMeanDistance = (t3, n2) => n2.map((n3) => jm(n3, t3)).reduce((t4, n3) => t4 + n3, 0) / (n2.length || 1), t2.prototype.matchDescriptor = function(t3) {
    var n2 = this;
    return this.labeledDescriptors.map((r2) => new Ed(r2.label, n2.computeMeanDistance(t3, r2.descriptors))).reduce((t4, n3) => n3.distance > t4.distance ? t4 : n3);
  }, t2.prototype.findBestMatch = function(t3) {
    var n2 = this.matchDescriptor(t3);
    return this.distanceThreshold > n2.distance ? n2 : new Ed("unknown", n2.distance);
  }, t2.prototype.toJSON = function() {
    return { distanceThreshold: this.distanceThreshold, labeledDescriptors: this.labeledDescriptors.map((t3) => t3.toJSON()) };
  }, t2.fromJSON = (n2) => new t2(n2.labeledDescriptors.map((t3) => Ad.fromJSON(t3)), n2.distanceThreshold), t2;
})();
function Hm(t2) {
  var n2 = new Xp();
  return n2.extractWeights(t2), n2;
}
function Xm(t2) {
  var n2 = new Yp();
  return n2.extractWeights(t2), n2;
}
function $m(t2, n2) {
  var r2 = new qf(n2.width, n2.height), e2 = r2.width, i2 = r2.height;
  if (0 >= e2 || 0 >= i2) throw Error("resizeResults - invalid dimensions: " + JSON.stringify({ width: e2, height: i2 }));
  if (Array.isArray(t2)) return t2.map((t3) => $m(t3, { width: e2, height: i2 }));
  if (Lv(t2)) {
    var o2 = t2.detection.forSize(e2, i2), a2 = t2.unshiftedLandmarks.forSize(o2.box.width, o2.box.height);
    return Bv(Md(t2, o2), a2);
  }
  return Od(t2) ? Md(t2, t2.detection.forSize(e2, i2)) : t2 instanceof yd || t2 instanceof ld ? t2.forSize(e2, i2) : t2;
}
export {
  Xv as AgeGenderNet,
  ud as BoundingBox,
  sd as Box,
  Pp as ComposableTask,
  Im as ComputeAllFaceDescriptorsTask,
  Mm as ComputeFaceDescriptorsTaskBase,
  Tm as ComputeSingleFaceDescriptorTask,
  Dm as DetectAllFaceLandmarksTask,
  Fm as DetectAllFacesTask,
  Sm as DetectFaceLandmarksTaskBase,
  Pm as DetectFacesTaskBase,
  km as DetectSingleFaceLandmarksTask,
  Lm as DetectSingleFaceTask,
  qf as Dimensions,
  Sv as FACE_EXPRESSION_LABELS,
  ld as FaceDetection,
  yp as FaceDetectionNet,
  kv as FaceExpressionNet,
  Dv as FaceExpressions,
  Kv as FaceLandmark68Net,
  Jv as FaceLandmark68TinyNet,
  Zv as FaceLandmarkNet,
  yd as FaceLandmarks,
  Cd as FaceLandmarks5,
  _d as FaceLandmarks68,
  Ed as FaceMatch,
  qm as FaceMatcher,
  ip as FaceRecognitionNet,
  jv as Gender,
  Rd as LabeledBox,
  Ad as LabeledFaceDescriptors,
  Xp as Mtcnn,
  hp as MtcnnOptions,
  nv as NetInput,
  fv as NeuralNetwork,
  cd as ObjectDetection,
  ad as Point,
  Nd as PredictedBox,
  wd as Rect,
  mp as SsdMobilenetv1,
  pp as SsdMobilenetv1Options,
  Yp as TinyFaceDetector,
  kp as TinyFaceDetectorOptions,
  Sp as TinyYolov2,
  Ip as TinyYolov2Options,
  gp as TinyYolov2SizeType,
  Um as allFaces,
  Gm as allFacesMtcnn,
  Wm as allFacesSsdMobilenetv1,
  zm as allFacesTinyYolov2,
  Xd as awaitMediaLoaded,
  $d as bufferToImage,
  im as computeFaceDescriptor,
  Yd as createCanvas,
  Jd as createCanvasFromMedia,
  bp as createFaceDetectionNet,
  op as createFaceRecognitionNet,
  Hm as createMtcnn,
  xp as createSsdMobilenetv1,
  Xm as createTinyFaceDetector,
  Dp as createTinyYolov2,
  Vm as detectAllFaces,
  rm as detectFaceLandmarks,
  em as detectFaceLandmarksTiny,
  bm as detectLandmarks,
  Bm as detectSingleFace,
  zv as draw,
  Vd as env,
  jm as euclideanDistance,
  up as extendWithAge,
  ap as extendWithFaceDescriptor,
  Md as extendWithFaceDetection,
  Fv as extendWithFaceExpressions,
  Bv as extendWithFaceLandmarks,
  lp as extendWithGender,
  iv as extractFaceTensors,
  ev as extractFaces,
  av as fetchImage,
  sv as fetchJson,
  uv as fetchNetWeights,
  ov as fetchOrThrow,
  zd as getContext2dOrThrow,
  Kd as getMediaDimensions,
  Zd as imageTensorToCanvas,
  tv as imageToSquare,
  bd as inverseSigmoid,
  hd as iou,
  Qd as isMediaElement,
  Hd as isMediaLoaded,
  sp as isWithAge,
  Od as isWithFaceDetection,
  Pv as isWithFaceExpressions,
  Lv as isWithFaceLandmarks,
  cp as isWithGender,
  pm as loadAgeGenderModel,
  mm as loadFaceDetectionModel,
  vm as loadFaceExpressionModel,
  hm as loadFaceLandmarkModel,
  fm as loadFaceLandmarkTinyModel,
  dm as loadFaceRecognitionModel,
  cm as loadMtcnnModel,
  sm as loadSsdMobilenetv1Model,
  um as loadTinyFaceDetectorModel,
  lm as loadTinyYolov2Model,
  lv as loadWeightMap,
  xm as locateFaces,
  hv as matchDimensions,
  fd as minBbox,
  nm as mtcnn,
  Jp as nets,
  dd as nonMaxSuppression,
  vd as normalize,
  pd as padToSquare,
  am as predictAgeAndGender,
  om as recognizeFaceExpressions,
  $m as resizeResults,
  Wd as resolveInput,
  md as shuffleArray,
  xd as sigmoid,
  Zp as ssdMobilenetv1,
  Lf as tf,
  Qp as tinyFaceDetector,
  tm as tinyYolov2,
  rv as toNetInput,
  od as utils,
  Ap as validateConfig
};
//# sourceMappingURL=index-BtzUc0cx-U3JSB2KN.js.map
