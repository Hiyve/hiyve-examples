import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/core/node_modules/@hiyve/rtc-client/dist/VideoSentimentAnalyser-CmJej03D.js
var t = class extends EventTarget {
  constructor(t2 = {}) {
    super(), this.options = __spreadValues({ detectionInterval: 100, modelUrl: "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights", fallbackModelUrls: ["https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights", "https://unpkg.com/face-api.js@0.22.2/weights", "./models"], minConfidence: 0.5, smoothing: true, smoothingFactor: 0.7, debug: false, maxTrackedFaces: 50, faceCleanupInterval: 5e3, historyCleanupThreshold: 100, adaptiveFrameRate: true, minDetectionInterval: 50, maxDetectionInterval: 500, performanceTarget: 16, noFaceSlowdown: 3e3, progressiveLoading: true, enableModelCaching: true, modelCacheVersion: 1, noFaceGracePeriod: 2e3, emitOffFrameEvents: true, engagementWeights: { faceDetection: 0.2, eyeOpenness: 0.25, headPose: 0.35, emotionalExpression: 0.15, faceSize: 0.05 }, engagementSensitivity: { headPoseThreshold: 0.7, eyeClosedThreshold: 0.15, emotionBoost: 2, faceConfidenceMin: 0.7 } }, t2), this.initialized = false, this.isAnalyzing = false, this.video = null, this.faceapi = null, this.t = false, this.i = null, this.o = null, this.h = null, this.trackedFaces = /* @__PURE__ */ new Map(), this.l = 0, this.previousEmotions = /* @__PURE__ */ new Map(), this.previousEngagement = /* @__PURE__ */ new Map(), this.m = this.options.detectionInterval, this.u = 0, this.p = [], this.v = Date.now(), this.M = true, this.D = this.options.noFaceGracePeriod || 2e3, this.I = null, this.F = { avgProcessingTime: 0, detectionCount: 0, faceCount: 0 }, this.$ = this.checkBrowserCompatibility();
  }
  checkBrowserCompatibility() {
    const t2 = { compatible: true, missing: [], deviceCapability: this.detectDeviceCapability() };
    try {
      Function("", 'return import("data:text/javascript,")');
    } catch (i) {
      t2.compatible = false, t2.missing.push("Dynamic imports");
    }
    const e2 = document.createElement("canvas");
    return e2.getContext("webgl") || e2.getContext("experimental-webgl") || (t2.compatible = false, t2.missing.push("WebGL")), window.fetch || (t2.compatible = false, t2.missing.push("Fetch API")), window.Promise || (t2.compatible = false, t2.missing.push("Promises")), window.Map || (t2.compatible = false, t2.missing.push("Map")), t2.compatible && this.autoTuneSettings(t2.deviceCapability), t2;
  }
  detectDeviceCapability() {
    const t2 = { cpuCores: navigator.hardwareConcurrency || 2, memory: navigator.deviceMemory || 4, connectionType: this.getConnectionType(), isMobile: this.isMobileDevice(), performanceLevel: "medium" };
    let e2 = 0;
    return e2 += Math.min(4, t2.cpuCores), e2 += Math.min(4, Math.floor(t2.memory / 2)), "slow" === t2.connectionType ? e2 -= 2 : "medium" === t2.connectionType && (e2 -= 1), t2.isMobile && (e2 -= 1), t2.performanceLevel = 6 > e2 ? 4 > e2 ? "low" : "medium" : "high", this.options.debug && console.log("Device capability detected:", t2), t2;
  }
  getConnectionType() {
    if (navigator.connection && navigator.connection.effectiveType) {
      const t2 = navigator.connection.effectiveType;
      return "4g" === t2 || "5g" === t2 ? "fast" : "3g" === t2 ? "medium" : "slow";
    }
    return "unknown";
  }
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  autoTuneSettings(t2) {
    const e2 = { high: { detectionInterval: 50, minDetectionInterval: 33, maxDetectionInterval: 200, performanceTarget: 12 }, medium: { detectionInterval: 100, minDetectionInterval: 50, maxDetectionInterval: 300, performanceTarget: 16 }, low: { detectionInterval: 200, minDetectionInterval: 100, maxDetectionInterval: 500, performanceTarget: 25, progressiveLoading: true } }[t2.performanceLevel];
    e2 && (Object.keys(e2).forEach((t3) => {
      (void 0 === this.options[t3] || "detectionInterval" === t3 && 100 === this.options[t3] || "minDetectionInterval" === t3 && 50 === this.options[t3] || "maxDetectionInterval" === t3 && 500 === this.options[t3] || "performanceTarget" === t3 && 16 === this.options[t3]) && (this.options[t3] = e2[t3], this.m = this.options.detectionInterval);
    }), this.options.debug && console.log(`Auto-tuned for ${t2.performanceLevel} performance:`, e2));
  }
  loadFaceApiLibrary() {
    return __async(this, null, function* () {
      if (this.faceapi) return this.faceapi;
      try {
        this.dispatch("loading", { status: "Loading face-api.js library..." });
        const t2 = yield import("./index-BtzUc0cx-GQ5PC3N4.js");
        return this.faceapi = t2.default || t2, this.faceapi;
      } catch (t2) {
        throw Error("Failed to load face-api.js: " + t2.message);
      }
    });
  }
  initialize() {
    return __async(this, null, function* () {
      if (!this.initialized) {
        if (!this.$.compatible) {
          const t2 = "Browser not compatible. Missing: " + this.$.missing.join(", ");
          throw this.dispatch("error", { error: t2, code: "BROWSER_INCOMPATIBLE" }), Error(t2);
        }
        try {
          yield this.validateEnvironment(), yield this.loadFaceApiLibrary(), this.dispatch("loading", { status: "Loading face detection models..." }), yield this.loadModelsWithFallback(), yield this.validateModelsLoaded(), this.initialized = true, this.startPeriodicCleanup(), this.dispatch("ready", { status: "Models loaded successfully" });
        } catch (t2) {
          throw this.dispatch("error", { error: t2.message, code: t2.code || "INITIALIZATION_FAILED", details: t2.details }), t2;
        }
      }
    });
  }
  validateEnvironment() {
    return __async(this, null, function* () {
      const t2 = [], e2 = [], i = { userAgent: navigator.userAgent, vendor: navigator.vendor || "unknown", platform: navigator.platform || "unknown", cookieEnabled: navigator.cookieEnabled, onLine: navigator.onLine };
      try {
        const s = document.createElement("canvas"), o = s.getContext("webgl") || s.getContext("experimental-webgl");
        if (o) {
          const i2 = o.getParameter(o.MAX_TEXTURE_SIZE);
          2048 > i2 && t2.push(`WebGL texture size insufficient: ${i2} (need 2048+)`), ["OES_texture_float", "WEBGL_lose_context"].forEach((t3) => {
            o.getExtension(t3) || e2.push(`WebGL extension ${t3} missing - may impact performance`);
          });
        } else t2.push("WebGL context creation failed - required for face detection models"), i.userAgent.includes("Safari") && !i.userAgent.includes("Chrome") ? t2.push("Safari: Check Develop menu > Experimental Features > WebGL enabled") : i.userAgent.includes("Firefox") ? t2.push("Firefox: Check about:config webgl.disabled setting") : i.userAgent.includes("Edge") && t2.push("Edge: Check edge://flags/ for WebGL settings");
      } catch (s) {
        t2.push("WebGL test failed: " + s.message);
      }
      try {
        const e3 = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
        if (e3) {
          e3.fillStyle = "red", e3.fillRect(0, 0, 10, 10);
          const i2 = e3.getImageData(0, 0, 10, 10);
          i2 && 0 !== i2.data.length || t2.push("Canvas 2D pixel manipulation failed");
        } else t2.push("Canvas 2D context creation failed");
      } catch (s) {
        t2.push("Canvas 2D test failed: " + s.message);
      }
      if ([{ name: "Promises", test() {
        return "undefined" != typeof Promise;
      } }, { name: "Map", test() {
        return "undefined" != typeof Map;
      } }, { name: "Set", test() {
        return "undefined" != typeof Set;
      } }, { name: "ArrayBuffer", test() {
        return "undefined" != typeof ArrayBuffer;
      } }, { name: "Float32Array", test() {
        return "undefined" != typeof Float32Array;
      } }].forEach(({ name: e3, test: i2 }) => {
        i2() || t2.push("Missing required feature: " + e3);
      }), i.userAgent.includes("Chrome/")) {
        const e3 = parseInt(i.userAgent.match(/Chrome\/(\d+)/)?.[1] || "0");
        70 > e3 && t2.push(`Chrome version too old: ${e3} (need 70+)`);
      } else if (i.userAgent.includes("Firefox/")) {
        const e3 = parseInt(i.userAgent.match(/Firefox\/(\d+)/)?.[1] || "0");
        65 > e3 && t2.push(`Firefox version too old: ${e3} (need 65+)`);
      } else if (i.userAgent.includes("Safari/") && !i.userAgent.includes("Chrome")) {
        const e3 = i.userAgent.match(/Version\/(\d+)/), s = parseInt(e3?.[1] || "0");
        12 > s && t2.push(`Safari version too old: ${s} (need 12+)`);
      }
      navigator.mediaDevices && navigator.mediaDevices.getUserMedia || e2.push("getUserMedia not available - camera access may be limited"), i.userAgent.includes("Firefox") && !window.OffscreenCanvas && e2.push("Firefox without OffscreenCanvas - expect reduced performance");
      try {
        if ("storage" in navigator && "estimate" in navigator.storage) {
          const t3 = yield navigator.storage.estimate();
          t3.quota && 1e7 > t3.quota && e2.push("Private/Incognito mode may limit functionality");
        }
      } catch (s) {
      }
      if (e2.length > 0 && this.options.debug && console.warn("Environment warnings:", e2), t2.length > 0) {
        const s = Error("Browser incompatible: " + t2.join("; "));
        throw s.code = "BROWSER_INCOMPATIBLE", s.details = { errors: t2, warnings: e2, browserInfo: i, recommendation: "Use Chrome 70+, Firefox 65+, or Safari 12+ with WebGL enabled" }, s;
      }
      this.options.debug && console.log("Environment validation passed", { browserInfo: i, warnings: e2 });
    });
  }
  validateModelsLoaded() {
    return __async(this, null, function* () {
      if (!this.faceapi) throw Error("Face-api.js library not loaded");
      const t2 = [{ name: "tinyFaceDetector", net: this.faceapi.nets?.tinyFaceDetector }, { name: "faceLandmark68Net", net: this.faceapi.nets?.faceLandmark68Net }, { name: "faceExpressionNet", net: this.faceapi.nets?.faceExpressionNet }], e2 = [];
      for (const { name: s, net: o } of t2) o && o.isLoaded || e2.push(s);
      if (e2.length > 0) {
        const t3 = Error("Required models not loaded: " + e2.join(", "));
        throw t3.code = "MODELS_NOT_LOADED", t3.details = { missingNets: e2 }, t3;
      }
      try {
        const t3 = document.createElement("canvas");
        t3.width = 100, t3.height = 100;
        const e3 = t3.getContext("2d", { willReadFrequently: true });
        e3.fillStyle = "white", e3.fillRect(0, 0, 100, 100), yield this.faceapi.detectAllFaces(t3, new this.faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions(), this.options.debug && console.log("Model validation successful");
      } catch (i) {
        const t3 = Error("Model inference test failed: " + i.message);
        throw t3.code = "MODEL_INFERENCE_FAILED", t3.details = { originalError: i.message }, t3;
      }
    });
  }
  validateVideoElement(t2) {
    if (!t2) {
      const t3 = Error("Video element is null or undefined");
      throw t3.code = "INVALID_VIDEO_ELEMENT", t3;
    }
    if (!(t2 instanceof HTMLVideoElement)) {
      const t3 = Error("Element is not a valid HTMLVideoElement");
      throw t3.code = "INVALID_VIDEO_ELEMENT", t3;
    }
    if (t2.readyState < HTMLVideoElement.HAVE_METADATA) {
      const e3 = Error("Video metadata not loaded. Video must be ready before analysis.");
      throw e3.code = "VIDEO_NOT_READY", e3.details = { readyState: t2.readyState, expectedMinimum: HTMLVideoElement.HAVE_METADATA }, e3;
    }
    const e2 = t2.videoWidth || t2.width, i = t2.videoHeight || t2.height;
    if (!e2 || !i || 10 > e2 || 10 > i) {
      const t3 = Error("Video dimensions too small for face detection");
      throw t3.code = "INVALID_VIDEO_DIMENSIONS", t3.details = { width: e2, height: i, minimumSize: 10 }, t3;
    }
    if (t2.ended) {
      const t3 = Error("Video has ended and cannot be analyzed");
      throw t3.code = "VIDEO_ENDED", t3;
    }
    if (!document.contains(t2)) {
      const t3 = Error("Video element must be attached to DOM for analysis");
      throw t3.code = "VIDEO_NOT_IN_DOM", t3;
    }
    try {
      const s = document.createElement("canvas");
      s.width = Math.min(e2, 100), s.height = Math.min(i, 100);
      const o = s.getContext("2d", { willReadFrequently: true });
      if (!o) {
        const t3 = Error("Cannot create 2D context for video processing");
        throw t3.code = "CANVAS_CONTEXT_FAILED", t3;
      }
      if (o.drawImage(t2, 0, 0, s.width, s.height), !o.getImageData(0, 0, s.width, s.height).data.some((t3) => 0 !== t3)) {
        const t3 = Error("Video element produces no drawable content");
        throw t3.code = "NO_VIDEO_CONTENT", t3;
      }
    } catch (s) {
      if (s.code) throw s;
      const t3 = Error("Video element cannot be processed: " + s.message);
      throw t3.code = "VIDEO_PROCESSING_FAILED", t3.details = { originalError: s.message }, t3;
    }
    this.options.debug && console.log("Video element validation successful:", { dimensions: { width: e2, height: i }, readyState: t2.readyState, paused: t2.paused, ended: t2.ended });
  }
  loadModelsWithFallback() {
    return __async(this, null, function* () {
      if (this.options.enableModelCaching) try {
        if (yield this.areModelsCached()) return void (yield this.loadModelsFromCache());
      } catch (s) {
        this.options.debug && console.warn("Cache loading failed, falling back to network:", s);
      }
      const t2 = [this.options.modelUrl, ...this.options.fallbackModelUrls];
      let e2 = null, i = null;
      for (let o = 0; t2.length > o; o++) {
        const n = t2[o];
        try {
          this.options.debug && console.log("Attempting to load models from: " + n), this.dispatch("loading", { status: `Loading models from ${n}${o > 0 ? " (fallback)" : ""}...`, progress: 0, total: 3, current: 0, cached: false }), this.options.progressiveLoading ? yield this.loadModelsProgressively(n) : yield Promise.all([this.faceapi.nets.tinyFaceDetector.loadFromUri(n), this.faceapi.nets.faceLandmark68Net.loadFromUri(n), this.faceapi.nets.faceExpressionNet.loadFromUri(n)]), i = n, this.options.debug && console.log("Successfully loaded models from: " + n);
          break;
        } catch (s) {
          e2 = s, this.options.debug && console.warn(`Failed to load from ${n}:`, s.message);
          continue;
        }
      }
      if (!i) throw Error("Failed to load models from all sources. Last error: " + (e2?.message || "Unknown error"));
      if (this.options.enableModelCaching) try {
        yield this.cacheModels(i);
      } catch (s) {
        this.options.debug && console.warn("Failed to cache models:", s);
      }
    });
  }
  loadModelsProgressively(t2) {
    return __async(this, null, function* () {
      const e2 = [{ name: "Face Detector", loader: () => this.faceapi.nets.tinyFaceDetector.loadFromUri(t2) }, { name: "Face Landmarks", loader: () => this.faceapi.nets.faceLandmark68Net.loadFromUri(t2) }, { name: "Expression Recognition", loader: () => this.faceapi.nets.faceExpressionNet.loadFromUri(t2) }];
      for (let s = 0; e2.length > s; s++) {
        const t3 = e2[s];
        this.dispatch("loading", { status: `Loading ${t3.name}...`, progress: s, total: e2.length, current: s + 1, modelName: t3.name });
        try {
          yield t3.loader(), this.dispatch("loading", { status: t3.name + " loaded successfully", progress: s + 1, total: e2.length, current: s + 1, modelName: t3.name }), e2.length - 1 > s && (yield new Promise((t4) => setTimeout(t4, 50)));
        } catch (i) {
          throw Error(`Failed to load ${t3.name}: ${i.message}`);
        }
      }
    });
  }
  areModelsCached() {
    return __async(this, null, function* () {
      if (!this.options.enableModelCaching || !window.indexedDB) return false;
      try {
        const t2 = yield this.openModelCache(), e2 = t2.transaction(["models"], "readonly").objectStore("models"), i = ["tinyFaceDetector", "faceLandmark68Net", "faceExpressionNet"], s = yield Promise.all(i.map((t3) => this.getFromStore(e2, `${t3}_v${this.options.modelCacheVersion}`)));
        return t2.close(), s.every((t3) => null !== t3);
      } catch (t2) {
        return this.options.debug && console.warn("Model cache check failed:", t2), false;
      }
    });
  }
  loadModelsFromCache() {
    return __async(this, null, function* () {
      if (!this.options.enableModelCaching || !window.indexedDB) throw Error("Model caching not supported");
      try {
        const t2 = yield this.openModelCache(), e2 = t2.transaction(["models"], "readonly").objectStore("models");
        this.dispatch("loading", { status: "Loading models from cache...", cached: true });
        const i = [{ name: "tinyFaceDetector", loader: this.faceapi.nets.tinyFaceDetector }, { name: "faceLandmark68Net", loader: this.faceapi.nets.faceLandmark68Net }, { name: "faceExpressionNet", loader: this.faceapi.nets.faceExpressionNet }];
        for (const s of i) {
          const t3 = `${s.name}_v${this.options.modelCacheVersion}`, i2 = yield this.getFromStore(e2, t3);
          if (!i2) throw Error(`Cached model ${s.name} not found`);
          yield s.loader.loadFromWeightMap(i2.weights);
        }
        t2.close(), this.options.debug && console.log("Models loaded from cache successfully");
      } catch (t2) {
        throw this.options.debug && console.warn("Failed to load models from cache:", t2), t2;
      }
    });
  }
  cacheModels(t2) {
    return __async(this, null, function* () {
      if (this.options.enableModelCaching && window.indexedDB) try {
        const e2 = yield this.openModelCache(), i = e2.transaction(["models"], "readwrite").objectStore("models"), s = [{ name: "tinyFaceDetector", net: this.faceapi.nets.tinyFaceDetector }, { name: "faceLandmark68Net", net: this.faceapi.nets.faceLandmark68Net }, { name: "faceExpressionNet", net: this.faceapi.nets.faceExpressionNet }];
        for (const o of s) {
          const e3 = `${o.name}_v${this.options.modelCacheVersion}`, s2 = { name: o.name, weights: o.net.params || {}, url: t2, timestamp: Date.now(), version: this.options.modelCacheVersion };
          yield this.putInStore(i, e3, s2);
        }
        e2.close(), this.options.debug && console.log("Models cached successfully");
      } catch (e2) {
        this.options.debug && console.warn("Failed to cache models:", e2);
      }
    });
  }
  openModelCache() {
    return __async(this, null, function* () {
      return new Promise((t2, e2) => {
        const i = indexedDB.open("FaceAPIModelCache", this.options.modelCacheVersion);
        i.onerror = () => e2(i.error), i.onsuccess = () => t2(i.result), i.onupgradeneeded = (t3) => {
          const e3 = t3.target.result;
          e3.objectStoreNames.contains("models") || e3.createObjectStore("models");
        };
      });
    });
  }
  getFromStore(t2, e2) {
    return __async(this, null, function* () {
      return new Promise((i, s) => {
        const o = t2.get(e2);
        o.onerror = () => s(o.error), o.onsuccess = () => i(o.result || null);
      });
    });
  }
  putInStore(t2, e2, i) {
    return __async(this, null, function* () {
      return new Promise((s, o) => {
        const n = t2.put(i, e2);
        n.onerror = () => o(n.error), n.onsuccess = () => s(n.result);
      });
    });
  }
  startPeriodicCleanup() {
    this.h && clearInterval(this.h), this.h = setInterval(() => {
      this.performMemoryCleanup();
    }, this.options.faceCleanupInterval);
  }
  performMemoryCleanup() {
    const t2 = Date.now();
    let e2 = 0;
    for (const [i, s] of this.trackedFaces.entries()) t2 - s.lastSeen > 3e3 && (this.trackedFaces.delete(i), e2++);
    if (this.trackedFaces.size > this.options.maxTrackedFaces) {
      const t3 = Array.from(this.trackedFaces.entries()).sort(([, t4], [, e3]) => e3.lastSeen - t4.lastSeen);
      this.trackedFaces.clear();
      for (let e3 = 0; Math.min(t3.length, this.options.maxTrackedFaces) > e3; e3++) {
        const [i, s] = t3[e3];
        this.trackedFaces.set(i, s);
      }
      e2 += t3.length - this.options.maxTrackedFaces;
    }
    this.cleanupHistoryMaps(), this.options.debug && e2 > 0 && console.log(`Cleaned up ${e2} old face tracking entries`);
  }
  cleanupHistoryMaps() {
    const t2 = new Set(Array.from(this.trackedFaces.keys()).map((t3) => `${this.videoId}_${t3}`));
    for (const e2 of this.previousEmotions.keys()) t2.has(e2) || (this.previousEmotions.delete(e2), this.previousEngagement.delete(e2));
    if (this.previousEmotions.size > this.options.historyCleanupThreshold) {
      const t3 = Array.from(this.previousEmotions.keys()), e2 = t3.slice(0, t3.length - this.options.historyCleanupThreshold);
      for (const i of e2) this.previousEmotions.delete(i), this.previousEngagement.delete(i);
    }
  }
  cleanupParticipant(t2) {
    for (const e2 of this.trackedFaces.keys()) ((e2 + "").startsWith(t2 + "_") || e2 === t2) && this.trackedFaces.delete(e2);
    for (const e2 of this.previousEmotions.keys()) e2.startsWith(t2 + "_") && this.previousEmotions.delete(e2);
    for (const e2 of this.previousEngagement.keys()) e2.startsWith(t2 + "_") && this.previousEngagement.delete(e2);
    this.options.debug && console.log("Cleaned up sentiment data for participant: " + t2);
  }
  analyzeVideo(t2, e2) {
    return __async(this, null, function* () {
      if (!this.initialized) throw Error("VideoSentimentAnalyzer must be initialized before use");
      try {
        this.validateVideoElement(t2);
      } catch (i) {
        throw this.dispatch("error", { error: i.message, code: i.code, details: i.details, videoId: e2 }), i;
      }
      this.video = t2, this.videoId = e2, this.o = setTimeout(() => {
        this.video && 2 > this.video.readyState && (this.dispatch("error", { error: "Video not ready after 10 s" }), this.stopAnalysis());
      }, 1e4), this.video.addEventListener("loadeddata", () => clearTimeout(this.o), { once: true }), this.isAnalyzing = true, this.startDetection();
    });
  }
  startDetection() {
    const t2 = () => __async(this, null, function* () {
      if (this.isAnalyzing) {
        if (!this.t) {
          const t3 = performance.now();
          this.t = true;
          try {
            if (yield this.detectEmotions(), this.options.adaptiveFrameRate) {
              const e2 = performance.now() - t3;
              this.updateAdaptiveFrameRate(e2);
            }
          } finally {
            this.t = false;
          }
        }
        this.i = setTimeout(t2, this.m);
      }
    });
    t2();
  }
  updateAdaptiveFrameRate(t2) {
    this.p.push(t2), this.p.length > 10 && this.p.shift();
    const e2 = this.p.reduce((t3, e3) => t3 + e3, 0) / this.p.length;
    this.F.avgProcessingTime = e2, this.F.detectionCount++;
    const i = Date.now() - this.v;
    let s = this.options.detectionInterval;
    e2 > this.options.performanceTarget && (s *= Math.min(3, e2 / this.options.performanceTarget)), i > this.options.noFaceSlowdown && (s = Math.max(s, this.options.maxDetectionInterval)), s = Math.max(this.options.minDetectionInterval, Math.min(this.options.maxDetectionInterval, s)), this.m = 0.7 * this.m + 0.3 * s, this.options.debug && this.F.detectionCount % 20 == 0 && console.log(`Performance: ${e2.toFixed(1)}ms processing, ${this.m.toFixed(0)}ms interval`);
  }
  iou(t2, e2) {
    const i = Math.max(t2.x, e2.x), s = Math.max(t2.y, e2.y), o = Math.min(t2.x + t2.width, e2.x + e2.width), n = Math.min(t2.y + t2.height, e2.y + e2.height), a = Math.max(0, o - i) * Math.max(0, n - s), r = t2.width * t2.height + e2.width * e2.height - a;
    return r ? a / r : 0;
  }
  matchFace(t2) {
    let e2 = null, i = 0;
    for (const [o, n] of this.trackedFaces.entries()) {
      const s2 = this.iou(t2, n.box);
      s2 > i && (i = s2, e2 = o);
    }
    if (i > 0.35) return this.trackedFaces.get(e2).box = t2, this.trackedFaces.get(e2).lastSeen = Date.now(), e2;
    const s = ++this.l;
    return this.trackedFaces.set(s, { box: t2, lastSeen: Date.now() }), s;
  }
  detectEmotions() {
    return __async(this, null, function* () {
      if (!this.video || !this.faceapi) return void (this.options.debug && console.warn("detectEmotions: Missing video or faceapi", { video: !!this.video, faceapi: !!this.faceapi }));
      if (2 > this.video.readyState) return void (this.options.debug && console.warn("detectEmotions: Video not ready", { readyState: this.video.readyState, videoWidth: this.video.videoWidth, videoHeight: this.video.videoHeight, src: this.video.src || "No src", srcObject: !!this.video.srcObject }));
      const t2 = Date.now();
      for (const [i, s] of this.trackedFaces.entries()) t2 - s.lastSeen > 3e3 && this.trackedFaces.delete(i);
      try {
        const e2 = yield this.faceapi.detectAllFaces(this.video, new this.faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: this.options.minConfidence })).withFaceLandmarks().withFaceExpressions();
        if (0 === e2.length) return this.options.debug && console.warn("No faces detected", { videoWidth: this.video.videoWidth, videoHeight: this.video.videoHeight, readyState: this.video.readyState, minConfidence: this.options.minConfidence }), void this.handleNoFaceDetected(t2);
        this.M || (this.M = true, this.I = null, this.dispatch("faceReturned", { videoId: this.videoId, timestamp: t2 }));
        const i = e2.map((t3) => {
          const e3 = this.matchFace(t3.detection.box), i2 = t3.expressions, s2 = this.getDominantEmotion(i2), o = t3.detection.box, n = this.options.smoothing ? this.smoothEmotion(e3, s2, i2) : s2, a = this.calculateEngagement(t3, i2, e3);
          return { id: e3, emotions: i2, dominantEmotion: n, confidence: i2[n.emotion], boundingBox: o, engagement: a };
        });
        for (const t3 of this.previousEmotions.keys()) {
          const [, e3] = t3.split("_");
          this.trackedFaces.has(+e3) || (this.previousEmotions.delete(t3), this.previousEngagement.delete(t3));
        }
        i.length > 0 && (this.v = t2, this.F.faceCount = i.length);
        const s = this.generateSummary(i);
        this.dispatch("emotions", __spreadValues({ videoId: this.videoId, timestamp: t2, participants: i, summary: s }, this.options.debug && { performance: { processingTime: this.F.avgProcessingTime, currentInterval: this.m, faceCount: this.F.faceCount } }));
      } catch (e2) {
        this.options.debug && console.error("Detection error:", e2), this.dispatch("error", { error: e2.message });
      }
    });
  }
  createOffFrameParticipant(t2, e2) {
    const i = { emotion: "neutral", confidence: 0.8 };
    return { id: this.videoId || "off-frame-participant", emotions: { neutral: 0.8, happy: 0.05, sad: 0.05, angry: 0.05, fearful: 0.025, disgusted: 0.025, surprised: 0.025 }, dominantEmotion: i, confidence: i.confidence, boundingBox: null, engagement: e2 ? 0.1 : 0, offFrame: true, gracePeriod: e2, timestamp: t2 };
  }
  handleNoFaceDetected(t2) {
    if (!this.options.emitOffFrameEvents) return void (this.options.debug && console.log("Off-frame events disabled, skipping handleNoFaceDetected"));
    if (this.options.debug && console.log("handleNoFaceDetected called", { videoId: this.videoId, lastFacePresent: this.M, noFaceStartTime: this.I, now: t2 }), this.M) return this.M = false, this.I = t2, this.dispatch("faceLeft", { videoId: this.videoId, timestamp: t2 }), void (this.options.debug && console.log("Face left frame - emitted faceLeft event", { videoId: this.videoId, gracePeriod: this.D }));
    const e2 = t2 - this.I;
    this.options.debug && console.log("No face duration check", { noFaceDuration: e2, gracePeriod: this.D, inGracePeriod: this.D > e2 });
    const i = [this.createOffFrameParticipant(t2, this.D > e2)];
    if (this.D > e2) {
      const e3 = this.generateSummary(i), s = __spreadValues({ videoId: this.videoId, timestamp: t2, participants: i, summary: e3 }, this.options.debug && { performance: { processingTime: this.F.avgProcessingTime, currentInterval: this.m, faceCount: 0 } });
      this.options.debug && console.log("Emitting grace period emotions event:", s), this.dispatch("emotions", s);
    } else {
      const s = this.generateSummary(i), o = __spreadValues({ videoId: this.videoId, timestamp: t2, participants: i, summary: s }, this.options.debug && { performance: { processingTime: this.F.avgProcessingTime, currentInterval: this.m, faceCount: 0 } });
      if (this.options.debug && console.log("Emitting off-frame disengaged emotions event:", o), this.dispatch("emotions", o), this.D > e2 - this.m) {
        const i2 = { videoId: this.videoId, timestamp: t2, duration: e2 };
        this.options.debug && console.log("Emitting userOffFrame event:", i2), this.dispatch("userOffFrame", i2);
      }
    }
  }
  calculateEngagement(t2, e2, i) {
    const s = this.options.engagementWeights;
    let o = 0;
    const n = {};
    try {
      const r = Math.min(t2.detection.score / 0.9, 1);
      o += r * s.faceDetection, n.faceDetection = { score: r, weighted: r * s.faceDetection };
      let c = 0.5;
      if (t2.landmarks) try {
        c = this.calculateEyeOpenness(t2.landmarks), o += c * s.eyeOpenness;
      } catch (a) {
        this.options.debug && console.warn("Eye openness calculation failed:", a), o += 0.5 * s.eyeOpenness, c = 0.5;
      }
      else o += 0.5 * s.eyeOpenness;
      n.eyeOpenness = { score: c, weighted: c * s.eyeOpenness };
      let h = 0.5;
      if (t2.landmarks) try {
        h = this.calculateHeadPose(t2.landmarks), o += h * s.headPose;
      } catch (a) {
        this.options.debug && console.warn("Head pose calculation failed:", a), o += 0.5 * s.headPose, h = 0.5;
      }
      else o += 0.5 * s.headPose;
      n.headPose = { score: h, weighted: h * s.headPose };
      const l = this.calculateEmotionalEngagement(e2);
      o += l * s.emotionalExpression, n.emotional = { score: l, weighted: l * s.emotionalExpression };
      const d = this.calculateFaceSize(t2.detection.box);
      o += d * s.faceSize, n.faceSize = { score: d, weighted: d * s.faceSize }, this.options.debug && (console.log(`Engagement calculation for participant ${i}:`), console.log(`  Face Detection: ${n.faceDetection.score.toFixed(2)} (weighted: ${n.faceDetection.weighted.toFixed(3)})`), console.log(`  Eye Openness: ${n.eyeOpenness.score.toFixed(2)} (weighted: ${n.eyeOpenness.weighted.toFixed(3)})`), console.log(`  Head Pose: ${n.headPose.score.toFixed(2)} (weighted: ${n.headPose.weighted.toFixed(3)})`), console.log(`  Emotional: ${n.emotional.score.toFixed(2)} (weighted: ${n.emotional.weighted.toFixed(3)})`), console.log(`  Face Size: ${n.faceSize.score.toFixed(2)} (weighted: ${n.faceSize.weighted.toFixed(3)})`), console.log("  Total raw score: " + o.toFixed(3)));
      const m = this.smoothEngagement(i, o);
      return this.options.debug && console.log("  Final smoothed engagement: " + m.toFixed(3)), Math.max(0, Math.min(1, m));
    } catch (a) {
      return this.options.debug && console.error("Engagement calculation failed:", a), 0.5;
    }
  }
  calculateEyeOpenness(t2) {
    try {
      const e2 = t2.getLeftEye(), i = t2.getRightEye(), s = (this.calculateEyeAspectRatio(e2) + this.calculateEyeAspectRatio(i)) / 2, o = this.options.engagementSensitivity?.eyeClosedThreshold || 0.15;
      let n = 0;
      return n = o > s ? 0 : Math.min(Math.pow((s - 0.1) / 0.25, 1.5), 1), this.options.debug && console.log(`    Eye openness: avgEAR=${s.toFixed(3)}, threshold=${o}, score=${n.toFixed(3)}`), n;
    } catch (e2) {
      return 0.5;
    }
  }
  calculateEyeAspectRatio(t2) {
    if (!t2 || 6 > t2.length) return 0.5;
    const e2 = t2[1], i = t2[5], s = t2[2], o = t2[4], n = t2[0], a = t2[3];
    return (Math.hypot(e2.x - i.x, e2.y - i.y) + Math.hypot(s.x - o.x, s.y - o.y)) / (2 * Math.hypot(n.x - a.x, n.y - a.y));
  }
  calculateHeadPose(t2) {
    try {
      const e2 = t2.getLeftEye?.() || [], i = t2.getRightEye?.() || [], s = t2.getNose?.() || [];
      if (!e2.length || !i.length || !s.length) return 0.5;
      const o = [...e2, ...i].reduce((t3, e3) => ({ x: t3.x + e3.x, y: t3.y + e3.y }), { x: 0, y: 0 }), n = e2.length + i.length, a = { x: o.x / n, y: o.y / n }, r = s[s.length - 1], c = e2[0], h = i[i.length - 1], l = Math.hypot(h.x - c.x, h.y - c.y);
      if (0 === l) return 0.5;
      const d = Math.abs(r.x - a.x) / l, m = Math.abs(r.y - a.y) / l, f = 0.8 * d + 0.2 * m, u = Math.max(0, 1 - 2 * f);
      return this.options.debug && (console.log(`    Head pose raw: noseTip(${r.x.toFixed(1)}, ${r.y.toFixed(1)}), eyeCenter(${a.x.toFixed(1)}, ${a.y.toFixed(1)}), faceWidth=${l.toFixed(1)}`), console.log(`    Head pose: horizDev=${d.toFixed(3)}, vertDev=${m.toFixed(3)}, combined=${f.toFixed(3)}, score=${u.toFixed(3)}`)), u;
    } catch (e2) {
      return this.options?.debug && console.warn("Head‑pose calc error:", e2), 0.5;
    }
  }
  calculateEmotionalEngagement(t2) {
    const e2 = ["happy", "surprised", "angry"], i = ["neutral"], s = ["sad", "fearful", "disgusted"], o = this.options.engagementSensitivity?.emotionBoost || 1;
    let n = 0;
    for (const [a, r] of Object.entries(t2)) e2.includes(a) ? n += 1.2 * r * o : i.includes(a) ? n += 0.4 * r : s.includes(a) && (n += 0.05 * r);
    return Math.min(n, 1);
  }
  calculateFaceSize(t2) {
    if (!this.video) return 0.5;
    const e2 = this.video.videoWidth * this.video.videoHeight;
    if (0 === e2) return 0.5;
    const i = t2.width * t2.height / e2;
    return 0.05 > i ? i / 0.05 : i > 0.3 ? Math.max(0.3, 1 - (i - 0.3) / 0.2) : 1;
  }
  smoothEngagement(t2, e2) {
    const i = `${this.videoId}_${t2}`, s = this.previousEngagement.get(i);
    if (!s) return this.previousEngagement.set(i, e2), e2;
    const o = 0.4 * s + 0.6 * e2;
    return this.previousEngagement.set(i, o), o;
  }
  getDominantEmotion(t2) {
    let e2 = "neutral", i = 0;
    if (this.options.debug) {
      const e3 = Object.entries(t2).sort(([, t3], [, e4]) => e4 - t3).map(([t3, e4]) => `${t3}: ${Math.round(100 * e4)}%`).join(", ");
      console.log(`${this.videoId} - All emotions: ${e3}`);
    }
    for (const [s, o] of Object.entries(t2)) o > i && (i = o, e2 = s);
    return { emotion: e2, score: i };
  }
  smoothEmotion(t2, e2, i) {
    const s = `${this.videoId}_${t2}`, o = this.previousEmotions.get(s);
    if (!o) return this.previousEmotions.set(s, e2), e2;
    const n = e2.score, a = i[o.emotion] || 0;
    if (e2.emotion !== o.emotion) {
      if (n > a + 0.05) return this.previousEmotions.set(s, e2), e2;
      const t3 = { emotion: o.emotion, score: a };
      return this.previousEmotions.set(s, t3), t3;
    }
    {
      const t3 = 0.3, i2 = { emotion: e2.emotion, score: o.score * t3 + n * (1 - t3) };
      return this.previousEmotions.set(s, i2), i2;
    }
  }
  generateSummary(t2) {
    if (0 === t2.length) return "No participants detected";
    const e2 = t2.map((t3) => t3.dominantEmotion.emotion).reduce((t3, e3) => (t3[e3] = (t3[e3] || 0) + 1, t3), {}), i = Object.entries(e2).sort(([, t3], [, e3]) => e3 - t3)[0][0], s = t2.reduce((t3, e3) => t3 + e3.engagement, 0) / t2.length;
    return `${t2.length} participant(s), mood: ${i}, engagement: ${s > 0.7 ? "high" : s > 0.4 ? "medium" : "low"}`;
  }
  getPerformanceStats() {
    return __spreadProps(__spreadValues({}, this.F), { currentInterval: this.m, deviceCapability: this.$.deviceCapability, isAdaptive: this.options.adaptiveFrameRate });
  }
  setDebugMode(t2) {
    this.options.debug = t2;
  }
  getDiagnostics() {
    const t2 = { initialized: this.initialized, isAnalyzing: this.isAnalyzing, hasVideo: !!this.video, hasFaceApi: !!this.faceapi, video: null, device: { capability: this.$?.deviceCapability || "unknown", compatibility: this.$ || { compatible: false, missing: [] } }, tracking: { trackedFaces: this.trackedFaces.size, detectionCount: this.F?.detectionCount || 0, lastDetectionTime: this.u || 0, currentInterval: this.m } };
    return this.video && (t2.video = { readyState: this.video.readyState, readyStateText: ["HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA"][this.video.readyState], width: this.video.videoWidth, height: this.video.videoHeight, hasSrc: !!this.video.src, hasSrcObject: !!this.video.srcObject, paused: this.video.paused, muted: this.video.muted, volume: this.video.volume }), t2;
  }
  dispatch(t2, e2) {
    this.dispatchEvent(new CustomEvent(t2, { detail: e2 }));
  }
  destroy() {
    this.stopAnalysis(), this.h && (clearInterval(this.h), this.h = null), this.previousEmotions.clear(), this.previousEngagement.clear(), this.trackedFaces?.clear?.(), this.initialized = false;
  }
  stopAnalysis() {
    this.isAnalyzing = false, this.i && (clearTimeout(this.i), this.i = null), this.o && (clearTimeout(this.o), this.o = null), this.video = null, this.videoId = null;
  }
  canDetectFaces(t2 = null) {
    return __async(this, null, function* () {
      const e2 = { possible: true, reasons: [], environment: null, models: null, video: null };
      try {
        e2.environment = this.checkBrowserCompatibility(), e2.environment.compatible || (e2.possible = false, e2.reasons.push("Browser incompatible: " + e2.environment.missing.join(", ")));
      } catch (i) {
        e2.possible = false, e2.environment = { compatible: false, error: i.message }, e2.reasons.push("Environment check failed: " + i.message);
      }
      if (this.initialized) try {
        yield this.validateModelsLoaded(), e2.models = { loaded: true };
      } catch (i) {
        e2.possible = false, e2.models = { loaded: false, error: i.message, code: i.code }, e2.reasons.push("Models not ready: " + i.message);
      }
      else e2.possible = false, e2.models = { loaded: false, error: "Analyzer not initialized" }, e2.reasons.push("Analyzer must be initialized first");
      if (t2) try {
        this.validateVideoElement(t2), e2.video = { valid: true };
      } catch (i) {
        e2.possible = false, e2.video = { valid: false, error: i.message, code: i.code }, e2.reasons.push("Video element issue: " + i.message);
      }
      return this.options.debug && console.log("Face detection capability check:", e2), e2;
    });
  }
};
var e = class extends EventTarget {
  constructor(t2 = {}) {
    super(), this.options = t2, this.analyzers = /* @__PURE__ */ new Map(), this.initialized = false;
  }
  initialize() {
    return __async(this, null, function* () {
      this.initialized || (this.masterAnalyzer = new t(this.options), yield this.masterAnalyzer.initialize(), this.initialized = true);
    });
  }
  addVideo(e2, i) {
    return __async(this, null, function* () {
      if (!this.initialized) throw Error("Manager must be initialized first");
      const s = new t(this.options);
      s.faceapi = this.masterAnalyzer.faceapi, s.initialized = true, s.addEventListener("emotions", (t2) => {
        this.dispatchEvent(new CustomEvent("emotions", { detail: t2.detail }));
      }), s.addEventListener("error", (t2) => {
        this.dispatchEvent(new CustomEvent("error", { detail: t2.detail }));
      }), this.analyzers.set(e2, s), yield s.analyzeVideo(i, e2);
    });
  }
  removeVideo(t2) {
    const e2 = this.analyzers.get(t2);
    e2 && (e2.cleanupParticipant(t2), e2.destroy(), this.analyzers.delete(t2));
  }
  setDebugMode(t2) {
    this.options.debug = t2, this.masterAnalyzer && this.masterAnalyzer.setDebugMode(t2);
    for (const e2 of this.analyzers.values()) e2.setDebugMode(t2);
  }
  getDiagnostics() {
    const t2 = { initialized: this.initialized, analyzerCount: this.analyzers.size, analyzers: {} };
    for (const [e2, i] of this.analyzers.entries()) t2.analyzers[e2] = i.getDiagnostics();
    return t2;
  }
  getPerformanceStats() {
    const t2 = { totalAnalyzers: this.analyzers.size, individual: {}, aggregate: { totalDetections: 0, avgProcessingTime: 0, totalFaces: 0 } };
    let e2 = 0, i = 0;
    for (const [s, o] of this.analyzers.entries()) {
      const n = o.getPerformanceStats();
      t2.individual[s] = n, t2.aggregate.totalDetections += n.detectionCount, t2.aggregate.totalFaces += n.faceCount, n.avgProcessingTime > 0 && (e2 += n.avgProcessingTime, i++);
    }
    return i > 0 && (t2.aggregate.avgProcessingTime = e2 / i), t2;
  }
  destroy() {
    for (const t2 of this.analyzers.values()) t2.destroy();
    this.analyzers.clear(), this.masterAnalyzer && this.masterAnalyzer.destroy(), this.initialized = false;
  }
};
export {
  e as MultiVideoSentimentManager,
  t as VideoSentimentAnalyzer
};
//# sourceMappingURL=VideoSentimentAnalyser-CmJej03D-GXO5BCDW.js.map
