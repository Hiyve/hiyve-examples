import {
  __async,
  __spreadValues
} from "./chunk-GEHV7EKW.js";

// node_modules/@hiyve/core/node_modules/@hiyve/rtc-client/dist/MediaPipeSentimentAnalyser-77F-mLkm.js
var t = class extends EventTarget {
  constructor(t2 = {}) {
    super(), this.options = __spreadValues({ detectionInterval: 100, minConfidence: 0.5, smoothing: true, smoothingFactor: 0.7, debug: false, numFaces: 1, runningMode: "VIDEO", delegate: "GPU", emotionModelUrl: "https://storage.googleapis.com/mediapipe-models/emotion/emotion_landmarks/float16/1/emotion_landmarks.tflite", emotionStrategy: "landmarks", enableModelCaching: true, adaptiveFrameRate: true, minDetectionInterval: 50, maxDetectionInterval: 500, performanceTarget: 10, noFaceGracePeriod: 2e3, emitOffFrameEvents: true, engagementWeights: { faceDetection: 0.2, eyeOpenness: 0.25, headPose: 0.35, emotionalExpression: 0.15, faceSize: 0.05 } }, t2), this.initialized = false, this.isAnalyzing = false, this.video = null, this.videoId = null, this.faceLandmarker = null, this.emotionModel = null, this.t = this.options.detectionInterval, this.i = 0, this.o = false, this.h = null, this.previousEmotions = /* @__PURE__ */ new Map(), this.previousEngagement = /* @__PURE__ */ new Map(), this.l = true, this.m = null, this.emotionLabels = ["angry", "disgusted", "fearful", "happy", "sad", "surprised", "neutral"];
  }
  initialize() {
    return __async(this, null, function* () {
      if (!this.initialized) try {
        this.dispatch("loading", { status: "Initializing MediaPipe..." }), yield this.validateEnvironment();
        const { FaceLandmarker: t2, FilesetResolver: e2 } = yield import("./vision_bundle-BpqemS7v-XOXG4546.js"), i = yield e2.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
        this.dispatch("loading", { status: "Loading face detection model..." }), this.faceLandmarker = yield t2.createFromOptions(i, { baseOptions: { modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task", delegate: this.options.delegate }, numFaces: this.options.numFaces, runningMode: this.options.runningMode, minDetectionConfidence: this.options.minConfidence, minTrackingConfidence: this.options.minConfidence }), yield this.loadEmotionModel(), this.initialized = true, this.dispatch("ready", { status: "MediaPipe sentiment analyzer ready" });
      } catch (t2) {
        const e2 = Error("MediaPipe initialization failed: " + t2.message);
        throw e2.code = "MEDIAPIPE_INIT_FAILED", e2.details = t2, this.dispatch("error", { error: e2 }), e2;
      }
    });
  }
  loadEmotionModel() {
    return __async(this, null, function* () {
      switch (this.dispatch("loading", { status: "Loading emotion detection model..." }), this.options.emotionStrategy) {
        case "landmarks":
          yield this.loadLandmarksEmotionModel();
          break;
        case "hybrid":
          yield this.loadHybridEmotionModel();
          break;
        case "faceapi":
          yield this.loadFaceApiEmotionModel();
          break;
        default:
          throw Error("Unknown emotion strategy: " + this.options.emotionStrategy);
      }
    });
  }
  loadLandmarksEmotionModel() {
    return __async(this, null, function* () {
      this.emotionModel = { predict: (t2) => this.predictEmotionsFromLandmarks(t2) };
    });
  }
  predictEmotionsFromLandmarks(t2) {
    const e2 = this.extractEmotionFeatures(t2), i = { angry: 0, disgusted: 0, fearful: 0, happy: 0, sad: 0, surprised: 0, neutral: 0.8 };
    e2.mouthSmile > 0.3 ? (i.happy = Math.min(1, 2 * e2.mouthSmile), i.neutral *= 0.3) : e2.mouthFrown > 0.2 && (i.sad = Math.min(1, 2.5 * e2.mouthFrown), i.neutral *= 0.5), e2.eyeOpenness > 0.7 && (i.surprised = Math.min(1, e2.eyeOpenness), i.neutral *= 0.5), e2.browFurrow > 0.3 && (i.angry = Math.min(1, 2 * e2.browFurrow), i.neutral *= 0.4);
    const s = Object.values(i).reduce((t3, e3) => t3 + e3, 0);
    return Object.keys(i).forEach((t3) => {
      i[t3] = i[t3] / s;
    }), i;
  }
  extractEmotionFeatures(t2) {
    const e2 = t2[61], i = t2[291], s = (e2.y + i.y) / 2, a = Math.abs(i.x - e2.x), n = (e2.y + i.y) / 2 - s;
    return { mouthSmile: Math.max(0, -n / a), mouthFrown: Math.max(0, n / a), eyeOpenness: (Math.abs(t2[159].y - t2[145].y) + Math.abs(t2[386].y - t2[374].y)) / 2 / a, browFurrow: 1 - Math.abs(t2[55].x - t2[285].x) / a, mouthWidth: a };
  }
  analyzeVideo(t2, e2) {
    return __async(this, null, function* () {
      if (!this.initialized) throw Error("MediaPipeVideoSentimentAnalyzer must be initialized before use");
      try {
        this.validateVideoElement(t2);
      } catch (i) {
        throw this.dispatch("error", { error: i.message, code: i.code, details: i.details, videoId: e2 }), i;
      }
      this.video = t2, this.videoId = e2, this.isAnalyzing = true, this.startDetection();
    });
  }
  startDetection() {
    const t2 = () => __async(this, null, function* () {
      if (this.isAnalyzing) {
        if (!this.o) {
          const t3 = performance.now();
          this.o = true;
          try {
            if (yield this.detectEmotions(), this.options.adaptiveFrameRate) {
              const e2 = performance.now() - t3;
              this.updateAdaptiveFrameRate(e2);
            }
          } finally {
            this.o = false;
          }
        }
        this.h = setTimeout(t2, this.t);
      }
    });
    t2();
  }
  detectEmotions() {
    return __async(this, null, function* () {
      if (!this.video || !this.isAnalyzing) return;
      const t2 = Date.now();
      try {
        const e2 = yield this.faceLandmarker.detectForVideo(this.video, t2);
        if (!e2.faceLandmarks || 0 === e2.faceLandmarks.length) return void this.handleNoFaceDetected(t2);
        const i = yield this.processFaceResults(e2, t2), s = this.generateSummary(i);
        this.dispatch("emotions", __spreadValues({ videoId: this.videoId, timestamp: t2, participants: i, summary: s }, this.options.debug && { performance: { processingTime: Date.now() - t2, currentInterval: this.t, faceCount: i.length } }));
      } catch (e2) {
        this.options.debug && console.error("MediaPipe detection error:", e2), this.dispatch("error", { error: e2.message, videoId: this.videoId });
      }
    });
  }
  processFaceResults(t2, e2) {
    return __async(this, null, function* () {
      const i = [];
      for (let s = 0; t2.faceLandmarks.length > s; s++) {
        const e3 = t2.faceLandmarks[s], a = t2.faceBlendshapes?.[s], n = yield this.getEmotions(e3, a), o = this.calculateEngagement(e3, n, a, s), r = this.getDominantEmotion(n);
        i.push({ id: s, emotions: n, dominantEmotion: r, confidence: n[r.emotion], boundingBox: this.landmarksToBoundingBox(e3), engagement: o, landmarks: this.options.debug ? e3 : void 0, blendshapes: this.options.debug ? a : void 0 });
      }
      return i;
    });
  }
  getEmotions(t2, e2) {
    return __async(this, null, function* () {
      switch (this.options.emotionStrategy) {
        case "landmarks":
        default:
          return this.emotionModel.predict(t2);
        case "blendshapes":
          return this.emotionsFromBlendshapes(e2);
      }
    });
  }
  emotionsFromBlendshapes(t2) {
    if (!t2) return { angry: 0, disgusted: 0, fearful: 0, happy: 0, sad: 0, surprised: 0, neutral: 1 };
    const e2 = { neutral: 0.5 };
    e2.happy = (t2.categories.find((t3) => "mouthSmileLeft" === t3.categoryName)?.score || 0 + t2.categories.find((t3) => "mouthSmileRight" === t3.categoryName)?.score || 0) / 2, e2.sad = (t2.categories.find((t3) => "mouthFrownLeft" === t3.categoryName)?.score || 0 + t2.categories.find((t3) => "mouthFrownRight" === t3.categoryName)?.score || 0) / 2, e2.angry = t2.categories.find((t3) => "browDownLeft" === t3.categoryName)?.score || 0, e2.surprised = (t2.categories.find((t3) => "eyeWideLeft" === t3.categoryName)?.score || 0 + t2.categories.find((t3) => "eyeWideRight" === t3.categoryName)?.score || 0) / 2, e2.fearful = 0, e2.disgusted = 0;
    const i = Object.values(e2).reduce((t3, e3) => t3 + e3, 0);
    return Object.keys(e2).forEach((t3) => {
      e2[t3] = e2[t3] / i;
    }), e2;
  }
  calculateEngagement(t2, e2, i, s = 0) {
    const a = { faceDetection: 1, eyeOpenness: this.calculateEyeOpenness(t2, i), headPose: this.calculateHeadPoseEngagement(t2), emotionalExpression: this.calculateEmotionalIntensity(e2), faceSize: this.calculateFaceProximity(t2) };
    let n = 0;
    if (Object.entries(this.options.engagementWeights).forEach(([t3, e3]) => {
      n += a[t3] * e3;
    }), this.options.smoothing) {
      const t3 = `${this.videoId}_${s}`, e3 = this.previousEngagement.get(t3) || n;
      n = e3 * this.options.smoothingFactor + n * (1 - this.options.smoothingFactor), this.previousEngagement.set(t3, n);
    }
    return Math.max(0, Math.min(1, n));
  }
  calculateEyeOpenness(t2, e2) {
    if (e2) return 1 - ((e2.categories.find((t3) => "eyeBlinkLeft" === t3.categoryName)?.score || 0) + (e2.categories.find((t3) => "eyeBlinkRight" === t3.categoryName)?.score || 0)) / 2;
    const i = (e3) => {
      const i2 = e3.map((e4) => t2[e4]);
      return (Math.hypot(i2[1].x - i2[5].x, i2[1].y - i2[5].y) + Math.hypot(i2[2].x - i2[4].x, i2[2].y - i2[4].y)) / (2 * Math.hypot(i2[0].x - i2[3].x, i2[0].y - i2[3].y));
    }, s = (i([33, 160, 158, 133, 153, 144]) + i([362, 385, 387, 263, 373, 380])) / 2;
    return s > 0.15 ? Math.min(1, 5 * (s - 0.15)) : 0;
  }
  calculateHeadPoseEngagement(t2) {
    const e2 = t2[1], i = t2[468], s = t2[473], a = (i.y + s.y) / 2;
    return 1 - Math.min(1, (Math.abs(e2.x - (i.x + s.x) / 2) + Math.abs(e2.y - a)) / 0.1);
  }
  calculateEmotionalIntensity(t2) {
    const e2 = Object.entries(t2).filter(([t3]) => "neutral" !== t3).reduce((t3, [, e3]) => t3 + e3, 0);
    return Math.min(1, 1.5 * e2);
  }
  calculateFaceProximity(t2) {
    const e2 = Math.min(...t2.map((t3) => t3.x)), i = Math.max(...t2.map((t3) => t3.x)), s = Math.min(...t2.map((t3) => t3.y)), a = Math.max(...t2.map((t3) => t3.y));
    return Math.min(1, (i - e2) * (a - s) * 4);
  }
  landmarksToBoundingBox(t2) {
    const e2 = t2.map((t3) => t3.x), i = t2.map((t3) => t3.y);
    return { x: Math.min(...e2), y: Math.min(...i), width: Math.max(...e2) - Math.min(...e2), height: Math.max(...i) - Math.min(...i) };
  }
  handleNoFaceDetected(t2) {
    if (!this.options.emitOffFrameEvents) return;
    const e2 = [this.createOffFrameParticipant(t2, this.m && this.options.noFaceGracePeriod > t2 - this.m)], i = this.generateSummary(e2);
    this.dispatch("emotions", { videoId: this.videoId, timestamp: t2, participants: e2, summary: i }), this.l && (this.l = false, this.m = t2, this.dispatch("faceLeft", { videoId: this.videoId, timestamp: t2 }));
  }
  createOffFrameParticipant(t2, e2) {
    return { id: this.videoId || "off-frame", emotions: { neutral: 0.8, happy: 0.05, sad: 0.05, angry: 0.05, fearful: 0.025, disgusted: 0.025, surprised: 0.025 }, dominantEmotion: { emotion: "neutral", confidence: 0.8 }, confidence: 0.8, boundingBox: null, engagement: e2 ? 0.1 : 0, offFrame: true, gracePeriod: e2, timestamp: t2 };
  }
  updateAdaptiveFrameRate(t2) {
    const e2 = this.options.performanceTarget;
    let i = this.t;
    t2 > 1.5 * e2 ? i = Math.min(this.options.maxDetectionInterval, 1.2 * this.t) : 0.5 * e2 > t2 && (i = Math.max(this.options.minDetectionInterval, 0.8 * this.t)), this.t = 0.7 * this.t + 0.3 * i;
  }
  getDominantEmotion(t2) {
    let e2 = "neutral", i = 0;
    return Object.entries(t2).forEach(([t3, s]) => {
      s > i && (i = s, e2 = t3);
    }), { emotion: e2, confidence: i };
  }
  generateSummary(t2) {
    if (0 === t2.length) return "No participants detected";
    const e2 = t2.map((t3) => t3.dominantEmotion.emotion).reduce((t3, e3) => (t3[e3] = (t3[e3] || 0) + 1, t3), {}), i = Object.entries(e2).sort(([, t3], [, e3]) => e3 - t3)[0][0], s = t2.reduce((t3, e3) => t3 + e3.engagement, 0) / t2.length;
    return `${t2.length} participant(s), mood: ${i}, engagement: ${s > 0.7 ? "high" : s > 0.4 ? "medium" : "low"}`;
  }
  validateEnvironment() {
    return __async(this, null, function* () {
      if (!window.WebAssembly) throw Error("WebAssembly not supported - required for MediaPipe");
      !window.OffscreenCanvas && this.options.debug && console.warn("OffscreenCanvas not available - performance may be limited");
    });
  }
  validateVideoElement(t2) {
    if (!(t2 && t2 instanceof HTMLVideoElement)) {
      const t3 = Error("Invalid video element");
      throw t3.code = "INVALID_VIDEO_ELEMENT", t3;
    }
    if (t2.readyState < HTMLVideoElement.HAVE_METADATA) {
      const t3 = Error("Video not ready");
      throw t3.code = "VIDEO_NOT_READY", t3;
    }
  }
  stopAnalysis() {
    this.isAnalyzing = false, this.h && (clearTimeout(this.h), this.h = null), this.video = null, this.videoId = null;
  }
  setDebugMode(t2) {
    this.options.debug = t2;
  }
  dispatch(t2, e2) {
    this.dispatchEvent(new CustomEvent(t2, { detail: e2 }));
  }
  destroy() {
    this.stopAnalysis(), this.faceLandmarker && (this.faceLandmarker.close(), this.faceLandmarker = null), this.emotionModel = null, this.previousEmotions.clear(), this.previousEngagement.clear();
  }
};
var e = class extends EventTarget {
  constructor(t2 = {}) {
    super(), this.options = t2, this.analyzers = /* @__PURE__ */ new Map(), this.initialized = false, this.sharedFaceLandmarker = null, this.sharedEmotionModel = null;
  }
  initialize() {
    return __async(this, null, function* () {
      if (this.initialized) return;
      const e2 = new t(this.options);
      yield e2.initialize(), this.sharedFaceLandmarker = e2.faceLandmarker, this.sharedEmotionModel = e2.emotionModel, this.initialized = true;
    });
  }
  addVideo(e2, i) {
    return __async(this, null, function* () {
      if (!this.initialized) throw Error("Manager must be initialized before adding videos");
      this.removeVideo(e2);
      const s = new t(this.options);
      s.faceLandmarker = this.sharedFaceLandmarker, s.emotionModel = this.sharedEmotionModel, s.initialized = true, s.addEventListener("emotions", (t2) => {
        this.dispatchEvent(new CustomEvent("emotions", { detail: t2.detail }));
      }), s.addEventListener("error", (t2) => {
        this.dispatchEvent(new CustomEvent("error", { detail: t2.detail }));
      }), s.addEventListener("faceLeft", (t2) => {
        this.dispatchEvent(new CustomEvent("faceLeft", { detail: t2.detail }));
      }), this.analyzers.set(e2, s), yield s.analyzeVideo(i, e2);
    });
  }
  removeVideo(t2) {
    const e2 = this.analyzers.get(t2);
    e2 && (e2.destroy(), this.analyzers.delete(t2));
  }
  setDebugMode(t2) {
    this.options.debug = t2, this.analyzers.forEach((e2) => e2.setDebugMode(t2));
  }
  destroy() {
    this.analyzers.forEach((t2) => t2.destroy()), this.analyzers.clear(), this.sharedFaceLandmarker && (this.sharedFaceLandmarker.close(), this.sharedFaceLandmarker = null), this.sharedEmotionModel = null, this.initialized = false;
  }
};
export {
  e as MediaPipeMultiVideoSentimentManager,
  t as MediaPipeVideoSentimentAnalyzer
};
//# sourceMappingURL=MediaPipeSentimentAnalyser-77F-mLkm-6HZUYABI.js.map
