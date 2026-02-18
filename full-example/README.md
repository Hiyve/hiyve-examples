# Full Example

A complete video conferencing application demonstrating all `@hiyve/*` packages.

## Features

- Create/join video rooms
- Real-time video/audio with WebRTC
- Mute/unmute audio and video
- Screen sharing
- Recording with auto-compose
- Live streaming to external platforms (YouTube, Twitch, etc.)
- Live transcription (captions)
- Mood/sentiment analysis with visual indicators
- Engagement tracking (attentive, distracted, looking away)
- Real-time chat
- Participant list with hand raising
- Hand raise notifications and queue
- Waiting room
- File management with custom viewers
- Q&A panel (questions, upvoting, answers, auto-save)
- Live polls with voting and real-time results
- Rich text notes with auto-save and PDF export
- Device selection & preview
- Audio gain control
- Collaborative whiteboard
- Customizable overlay order for video tiles
- Live clock display in header
- Responsive layout with container breakpoints
- **AI Intelligence** (cloud-powered)
  - Bot-managed transcript context via OpenAI Responses API
  - Client-side mood analysis pushed to shared context
  - Mood/sentiment indicators displayed alongside live captions
  - Conversation history persists across sidebar tab switches (sessionStorage)
  - Ad-hoc AI queries against accumulated meeting context
  - Meeting summary generation
  - Action items extraction

## Quick Start

You can either run the root setup script (recommended) or set up manually:

### Option A: Root Setup Script (Recommended)

From the `hiyve-examples` root directory:

```bash
./setup.sh full-example
```

This handles authentication, dependencies, and environment setup automatically.

### Option B: Manual Setup

#### 1. Authenticate with Hiyve

The `@hiyve/*` packages require authentication. If you haven't already:

```bash
npx hiyve-cli login
```

Enter your Hiyve API key when prompted. Get one at [console.hiyve.dev](https://console.hiyve.dev).

#### 2. Install Dependencies

```bash
pnpm run setup
```

This installs both frontend and server dependencies.

#### 3. Configure Server Credentials

```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your Hiyve credentials:

```env
APIKEY=your-hiyve-api-key
CLIENT_SECRET=your-hiyve-secret
SERVER_REGION=us-west-2
```

Get credentials at [console.hiyve.dev](https://console.hiyve.dev).

#### 4. Start the App

```bash
pnpm run dev
```

This starts both the frontend (port 5173) and backend (port 3001).

Open http://localhost:5173

## Packages Used

| Package | Purpose |
|---------|---------|
| `@hiyve/react` | Core WebRTC provider and hooks (`useConnection`, `useRoom`, `useParticipants`, `useLocalMedia`, `useDevices`, `useRecording`, `useStreaming`, `useTranscription`, `useChat`, `useWaitingRoom`, `useAudioProcessing`, `useHandRaise`, `useWaitForHost`, `useLayout`) |
| `@hiyve/react-ui` | `VideoGrid`, `ControlBar`, `Sidebar`, `ParticipantList`, `GainControl`, `DevicePreview`, `WaitForHostScreen`, `WaitingRoomSetup`, `WaitingRoomAdmittance`, `WaitingRoomGuest` |
| `@hiyve/react-capture` | `RecordingIndicator`, `StreamingIndicator`, `StreamingUrlDisplay`, `StreamingSettingsForm`, `TranscriptViewer` |
| `@hiyve/react-collaboration` | `FileCacheProvider`, `FileManager`, `ChatPanel`, `QASession`, `QASessionViewer`, `useQASessionState`, `PollsSession`, `PollsSessionViewer`, `usePollListener` |
| `@hiyve/react-intelligence` | `CloudProvider`, `MoodAnalysisProvider`, `IntelligenceHub` |
| `@hiyve/react-whiteboard` | `WhiteboardSession` |
| `@hiyve/react-notes` | `NotesSession` |
| `@hiyve/rtc-client` | Underlying WebRTC client library (peer dependency) |
| `@hiyve/utilities` | `LiveClock`, `TooltipIconButton`, `useContainerBreakpoint` |

## Architecture

```
main.tsx
└── HiyveProvider              # Manages WebRTC client state (@hiyve/react)
    └── CloudProvider          # AI cloud features (@hiyve/react-intelligence)
        └── FileCacheProvider  # File system caching (@hiyve/react-collaboration)
            └── MoodAnalysisProvider    # Sentiment detection (@hiyve/react-intelligence)
                └── App.tsx             # Main application shell

src/
├── App.tsx                     # Routes between views based on state
├── main.tsx                    # Provider setup
└── components/
    ├── JoinForm.tsx            # Room name, user name, create/join
    ├── ConnectingScreen.tsx    # Loading state while connecting
    ├── WaitingScreen.tsx       # Waiting room for guests
    ├── WaitForHostScreen       # From @hiyve/react-ui - shown when host hasn't started
    ├── VideoRoom.tsx           # Main in-room view
    │   ├── VideoGrid               # Video tiles
    │   ├── ControlBar              # Media controls
    │   └── Sidebar                 # Tabbed panel
    └── Sidebar.tsx             # Participants, chat, settings, files, Q&A, AI, captions
```

### Component Responsibilities

| Component | Hooks Used | Purpose |
|-----------|------------|---------|
| `JoinForm` | `useConnection` | Room creation/join form |
| `VideoRoom` | `useRoom`, `useConnection`, `useRecording`, `useStreaming`, `useChat`, `useWaitingRoom` | Main room layout |
| `Sidebar` | `useRoom`, `useParticipants`, `useChat`, `useAudioProcessing`, `useRecording`, `useTranscription`, `useStreaming` | Tabbed sidebar |
| `WaitingScreen` | `useWaitingRoom`, `useRoom`, `useConnection` | Waiting room UI |
| `WaitForHostScreen` | `useWaitForHost`, `useConnection` | Wait for host UI (from @hiyve/react-ui) |
| `ConnectingScreen` | (none - presentational) | Loading state |

**Note:** ParticipantList has built-in owner controls for muting and removing participants. These controls automatically appear when the current user is the room owner.

## Hooks Reference

```tsx
// Connection & Room
const { isConnecting, error, createRoom, joinRoom, leaveRoom } = useConnection();
const { room, isOwner, isInRoom } = useRoom();

// Participants
const { participants, localUserId, participantCount } = useParticipants();

// Media Controls
const { isAudioMuted, isVideoMuted, toggleAudio, toggleVideo } = useLocalMedia();
const { setVideoDevice, setAudioInputDevice, setAudioOutputDevice } = useDevices();

// Features
const { isRecording, recordingDuration, startRecording, stopRecording } = useRecording();
const { isStreaming, streamingDuration, startStreaming, stopStreaming } = useStreaming();
const { isTranscribing, transcriptions, enrichTranscription } = useTranscription();
const { messages, unreadCount, sendMessage, clearUnread } = useChat();
const { waitingUsers, admitUser, rejectUser } = useWaitingRoom();
const { isWaiting, roomName, timeout, elapsedTime } = useWaitForHost();
const { raisedHandCount, lowerAllHands } = useHandRaise();

// Audio Processing
const { feedbackDetected, setGain } = useAudioProcessing();

// File Management (from @hiyve/react-collaboration)
import { useFileCache } from '@hiyve/react-collaboration';
const { isReady, getFileTree, uploadFile } = useFileCache();

// Q&A (from @hiyve/react-collaboration)
import { useQASessionState } from '@hiyve/react-collaboration';
const { hasNewQuestion, hasActiveQASession, clearNewQuestionBadge } = useQASessionState({ isOwner, localUserId, activeTabId });
```

## Component Customization

All components support customization via props:

```tsx
// Custom labels (for i18n)
<GainControl
  labels={{
    mute: 'Silenciar',
    unmute: 'Activar sonido',
    formatValue: (v) => `${v}%`,
  }}
/>

// Custom colors (theming)
<RecordingIndicator
  colors={{
    indicator: '#ff0000',
    background: 'rgba(255,0,0,0.1)',
    text: '#ff0000',
  }}
/>

// Custom styles
<RecordingIndicator
  styles={{
    fontSize: '0.875rem',
    fontWeight: 700,
    animationDuration: '1.2s',
  }}
/>

// MUI sx prop
<VideoGrid sx={{ flex: 1, background: '#1a1a1a' }} />

// Custom overlay order (controls render order of elements at same position)
import { VideoGrid, type VideoTileOverlayElement, type LocalVideoTileOverlayElement } from '@hiyve/react-ui';

const tileOverlayOrder: VideoTileOverlayElement[] = ['engagement', 'mood', 'name', 'status', 'controls'];
const localTileOverlayOrder: LocalVideoTileOverlayElement[] = ['indicator', 'timer', 'engagement', 'mood', 'name', 'status', 'controls'];

<VideoGrid
  tileOverlayOrder={tileOverlayOrder}
  localTileOverlayOrder={localTileOverlayOrder}
/>

// Custom file viewers (for specialized file types)
import { FileManager, type CustomViewerMap } from '@hiyve/react-collaboration';
import { QASessionViewer, type QASessionFile } from '@hiyve/react-collaboration';

const customViewers: CustomViewerMap = {
  'qa-session': (data, file, onClose) => (
    <QASessionViewer sessionData={data as QASessionFile} onClose={onClose} />
  ),
};

<FileManager customViewers={customViewers} />

// Utilities - LiveClock, TooltipIconButton, responsive breakpoints
import { LiveClock, TooltipIconButton, useContainerBreakpoint } from '@hiyve/utilities';

// LiveClock - auto-updating time display
<LiveClock variant="body2" sx={{ ml: 2, opacity: 0.7 }} />

// TooltipIconButton - combines Tooltip and IconButton
<TooltipIconButton tooltip="Copy room name" onClick={handleCopy} color="primary">
  <CopyIcon />
</TooltipIconButton>

// useContainerBreakpoint - responsive container queries
const { isBelowBreakpoint: isCompact, containerRef } = useContainerBreakpoint(800);

<Box ref={containerRef}>
  {!isCompact && <LiveClock />}  {/* Hide clock on small screens */}
</Box>
```

## Q&A Feature

The Q&A panel allows participants to ask questions during a meeting:

- **Posting questions**: Any participant can post questions
- **Upvoting**: Participants can upvote questions to prioritize them
- **Answering**: Room owner/moderator can answer questions
- **Pinning**: Owner can pin important questions to the top
- **Sorting**: Sort by newest, most votes, or unanswered
- **Auto-save**: Q&A sessions are automatically saved to room files
- **Session viewer**: View saved Q&A sessions in the file manager

```tsx
import { QASession, useQASessionState } from '@hiyve/react-collaboration';

// Track Q&A session state and badge notifications
const { hasNewQuestion, hasActiveQASession, clearNewQuestionBadge } = useQASessionState({
  isOwner,
  localUserId,
  activeTabId,
});

<QASession isSessionActive={hasActiveQASession} sx={{ height: '100%' }} />
```

## Intelligence Mode

The ControlBar includes an "Intelligence Mode" that enables:
- Recording with auto-compose
- Live transcription
- Mood/sentiment analysis with indicators in captions
- AI assistant chat with session persistence
- Post-meeting AI summary

```tsx
<ControlBar
  showRecordingMenu
  intelligenceConfig={{
    transcription: true,
    moodAnalysis: true,
    postMeetingSummary: true,
  }}
  onIntelligenceConfigChange={setConfig}
/>
```

### AI Panel Behavior

The AI panel shows contextual status messages as intelligence mode progresses:

1. **Starting** — "Starting Intelligence Mode..."
2. **Initializing** — "Initializing AI Context"
3. **Waiting** — "Waiting for Transcriptions..."
4. **Ready** — AI Assistant and Captions views become available
5. **Stopped** — Returns to "Intelligence Mode Required"

When intelligence mode is stopped, the panel resets to the inactive state regardless of any previously accumulated transcripts.

### Mood in Captions

When mood analysis is active, the captions view shows colored sentiment dots next to each speaker group, indicating positive, negative, or neutral mood.

## Server API

The backend server provides:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/generate-room-token` | POST | Generate Hiyve room token |
| `/api/generate-cloud-token` | POST | Generate Hiyve cloud token for AI features |
| `/api/health` | GET | Health check |

## Development

### Basic Commands

```bash
# Start both frontend and backend
pnpm run dev

# Frontend only (port 5173)
pnpm run dev:client

# Server only (port 3001)
pnpm run dev:server

# Build for production
pnpm run build
```

### Toggle Between Local and Registry Packages

For development with local `hiyve-sdk`:

```bash
# From the hiyve-examples root directory:

# Switch to local packages (builds hiyve-sdk first)
./toggle-packages.sh dev

# Switch to S3 packages
./toggle-packages.sh prod

# Check current mode
./toggle-packages.sh status
```

Or use pnpm scripts within full-example:

```bash
# Check current mode
pnpm run packages:status

# Switch to dev mode (local packages)
pnpm run packages:dev

# Switch to prod mode (S3 packages)
pnpm run packages:prod
```

**Important:** Always run `./toggle-packages.sh prod` before committing to the examples repo.

## Troubleshooting

### "Server not configured" error
Create `server/.env` with valid Hiyve API credentials.

### "Cannot connect to server" error
Ensure the server is running on port 3001. Run `pnpm run dev` to start both frontend and backend.

### Camera/microphone not working
Grant camera and microphone permissions in your browser settings.

### Transcriptions not appearing
Transcriptions are only sent to the room owner. Make sure you created the room (not joined as guest).

### "prop-types" or module errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

### Integrity checksum errors during pnpm install
Clear pnpm store and lockfile:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm store prune
pnpm install
```

## Learn More

See the JSDoc comments in source files:
- `src/main.tsx` - Provider setup documentation
- `src/App.tsx` - Overview and component usage
- `src/components/JoinForm.tsx` - Room creation/join with `useConnection`
- `src/components/VideoRoom.tsx` - Main room view with customization examples
- `src/components/Sidebar.tsx` - Tabbed sidebar with multiple hooks
- `src/components/WaitingScreen.tsx` - Waiting room with `useWaitingRoom`

## API Documentation

Full component API documentation:
https://sdk.hiyve.dev
