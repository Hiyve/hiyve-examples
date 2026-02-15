# Interview Platform - Hiyve SDK Example

An AI-powered interview assessment platform with live meeting intelligence, real-time transcription, post-interview analysis, and semantic search. Built with `@hiyve/react`, `@hiyve/react-intelligence`, `@hiyve/react-capture`, and `@hiyve/react-collaboration`.

## Quick Start

### Option A: Root Setup Script

```bash
cd hiyve-examples
./setup.sh
cd interview-example
pnpm run dev
```

### Option B: Manual Setup

```bash
cd interview-example
pnpm install
cd server && pnpm install && cd ..
cp server/.env.example server/.env
# Edit server/.env with your Hiyve API credentials
pnpm run dev
```

Open http://localhost:5173

## Features

### During the Interview (Owner)

- **Live Transcription** - Real-time speech-to-text via ControlBar intelligence settings
- **AI Assistant** - Ask questions about the live conversation in the sidebar
- **Mood & Sentiment** - Real-time participant mood analysis overlays on video tiles
- **Recording** - Start/stop recording with visual indicator in the header
- **File Management** - Access documents and past interview files in the sidebar Files tab
- **Engagement Tracking** - Per-participant engagement overlays on video tiles

### During the Interview (Guest)

- **Video & Audio** - Full WebRTC video conferencing with screen share
- **Controls** - Camera, mic, screen share, hand raise, settings
- **No Sidebar** - Guests see only the video grid and controls

### After the Interview

- **Meeting Summary** - Auto-generated summary with key points, action items, and decisions via `MeetingSummary`
- **Interview Scorecard** - Dimension scores for technical competency, communication, problem solving, culture fit, and enthusiasm via `ScorecardPanel`
- **Hiring Recommendation** - AI-generated recommendation from Strong Yes to Strong No
- **Strengths & Concerns** - Categorized lists of candidate strengths and areas of concern
- **AI Follow-Up** - Ask questions about the interview using the AI assistant with full transcription context

### Anytime

- **Semantic Search** - Search across past interview transcripts using natural language via `SearchPanel`
- **Device Preview** - Test camera and microphone before joining

## Packages Used

| Package | Description |
|---------|-------------|
| `@hiyve/react` | Core provider, hooks (`useConnection`, `useRoom`, `useRecording`, `useTranscription`, `useParticipants`) |
| `@hiyve/react-ui` | UI components (`VideoGrid`, `ControlBar`, `Sidebar`, `DevicePreview`, `WaitForHostScreen`) |
| `@hiyve/react-intelligence` | AI components and hooks (`CloudProvider`, `MoodAnalysisProvider`, `IntelligenceHub`, `MeetingSummary`, `ScorecardPanel`, `SearchPanel`, `useAnalysis`, `useLiveContext`, `useMoodCloudSync`) |
| `@hiyve/react-capture` | Recording and transcription components (`RecordingIndicator`, `TranscriptViewer`) |
| `@hiyve/react-collaboration` | File management (`FileCacheProvider`, `FileManager`) |
| `@hiyve/cloud` | Cloud AI client (`CloudClient`) |
| `@hiyve/rtc-client` | WebRTC signaling client (used internally by @hiyve/react) |
| `@hiyve/utilities` | Shared utilities (`LiveClock`, `TooltipIconButton`) |

## Project Structure

```
interview-example/
├── src/
│   ├── main.tsx              # Providers: Theme + Hiyve + Cloud + CloudClient + FileCache + Mood
│   ├── App.tsx               # Mode router (landing/call/postMeeting/search)
│   ├── cloudClient.tsx       # CloudClient context provider + useCloudClient hook
│   ├── vite-env.d.ts         # Vite type declarations
│   └── components/
│       ├── LandingPage.tsx      # 2-card mode selection: Interview, Search
│       ├── JoinForm.tsx         # Room name + user name + Create/Join + DevicePreview
│       ├── VideoRoom.tsx        # VideoGrid + ControlBar + intelligence + owner-only sidebar
│       ├── InterviewSidebar.tsx # AI tab (IntelligenceHub) + Files tab (FileManager)
│       ├── PostMeetingView.tsx  # MeetingSummary + ScorecardPanel + recommendation + AI assistant
│       └── SearchView.tsx       # SearchPanel wrapper with interview-themed labels
├── server/
│   ├── server.js             # Express: room token + cloud token endpoints
│   ├── package.json
│   └── .env.example
├── scripts/
│   └── toggle-packages.js    # Dev/prod package switching
├── index.html
├── vite.config.ts            # Dev alias resolution for linked SDK packages
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── .npmrc
```

## Architecture

### Provider Stack

```
ThemeProvider (MUI dark theme, primary: #7c4dff)
  └── HiyveProvider (WebRTC signaling + room management)
      └── CloudProvider (Cloud API authentication)
          └── CloudClientProvider (raw CloudClient instance)
              └── FileCacheProvider (file caching for FileManager)
                  └── MoodAnalysisProvider (real-time facial sentiment)
                      └── App
```

### Dual Token Architecture

This example uses two tokens generated server-side:

1. **Room Token** - Authenticates with the Hiyve signaling server for WebRTC
2. **Cloud Token** - Authenticates with Hiyve Cloud API for AI features (analysis, search, live context)

Both are generated via the Express backend to keep API credentials secure.

### Application Flow

```
LandingPage
  ├── "Start an Interview" → JoinForm → VideoRoom (with live intelligence) → PostMeetingView
  └── "Search Past Interviews" → SearchView
```

### Intelligence Flow

1. Owner creates room and starts recording/transcription via ControlBar intelligence menu
2. Transcriptions stream in real-time to the sidebar's AI tab (IntelligenceHub + TranscriptViewer)
3. Mood analysis runs on video frames and syncs to cloud via `useMoodCloudSync`
4. Owner can query the AI assistant during the interview using `askWithResponseId`
5. On leaving, transcriptions are collected and sent to `analyzeInterview` for assessment
6. PostMeetingView shows MeetingSummary + ScorecardPanel + hiring recommendation + AI follow-up

### Owner vs Guest Experience

| Feature | Owner | Guest |
|---------|-------|-------|
| Video & audio | Yes | Yes |
| ControlBar (camera, mic, share) | Yes | Yes |
| Recording menu & intelligence settings | Yes | No |
| AI Sidebar (IntelligenceHub + Files) | Yes | No |
| Post-meeting analysis | Yes (on leave) | No |

### InterviewAssessment Response

```typescript
{
  overallScore: number;      // 0-100
  hiringRecommendation: 'strong_yes' | 'yes' | 'maybe' | 'no' | 'strong_no';
  dimensions: {
    technicalCompetency: DimensionScore;
    communicationSkills: DimensionScore;
    problemSolving: DimensionScore;
    cultureFit: DimensionScore;
    enthusiasm: DimensionScore;
  };
  strengths: string[];
  concerns: string[];
  summary: string;
}
```

## Hooks Reference

| Hook | Package | Purpose |
|------|---------|---------|
| `useConnection` | `@hiyve/react` | `createRoom`, `joinRoom`, `leaveRoom`, `isConnecting` |
| `useRoom` | `@hiyve/react` | `room`, `isOwner`, `isInRoom` |
| `useWaitForHost` | `@hiyve/react` | `isWaiting` (guest waiting room) |
| `useRecording` | `@hiyve/react` | `isRecording`, `recordingDuration`, `responseId` |
| `useTranscription` | `@hiyve/react` | `transcriptions`, `isTranscribing`, `enrichTranscription` |
| `useParticipants` | `@hiyve/react` | `localUserId` |
| `useAnalysis` | `@hiyve/react-intelligence` | `analyzeInterview`, `result`, `loading` |
| `useLiveContext` | `@hiyve/react-intelligence` | `askWithResponseId` (AI queries with transcription context) |
| `useIntelligenceReadiness` | `@hiyve/react-intelligence` | UI readiness state for intelligence features |
| `useMoodAnalysisSafe` | `@hiyve/react-intelligence` | `moodStates`, `enabled`, `ready` |
| `useMoodCloudSync` | `@hiyve/react-intelligence` | Auto-sync mood data to cloud AI context |
| `useCloudClient` | Local context | Access to raw `CloudClient` instance |

## Development

```bash
pnpm run dev             # Start dev server (client + backend)
pnpm run build           # Build for production
pnpm run packages:dev    # Use local linked packages
pnpm run packages:prod   # Use registry packages
pnpm run packages:status # Show current mode
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to generate cloud token" | Check `APIKEY` in `server/.env` |
| "Failed to generate room token" | Check both `APIKEY` and `CLIENT_SECRET` in `server/.env` |
| No transcription appearing | Start recording/transcription via the ControlBar intelligence menu |
| AI assistant says "No context" | Intelligence mode must be active (recording + transcription running) |
| Vite context duplication errors | Run `rm -rf node_modules/.vite` and restart |
| Search returns no results | You need recordings with transcriptions in your Hiyve account |
| Sidebar not visible | Only the room owner sees the sidebar; guests see video only |
