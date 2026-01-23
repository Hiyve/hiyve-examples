# Token Room Example

A minimal example demonstrating token-based room joining with shareable invite links.

## Features

- **Room Creation**: Owner creates a room and joins automatically
- **Invite Links**: Owner generates shareable invite links with join tokens
- **Token-Based Joining**: Guests join using invite links (no room name needed)
- **Simple Video Room**: Basic video grid with audio/video controls

## Quick Start

1. **Install dependencies**

   ```bash
   npm run setup
   ```

2. **Configure API credentials**

   Copy the example environment file and add your credentials:

   ```bash
   cp server/.env.example server/.env
   ```

   Edit `server/.env` with your MuzieRTC API credentials:

   ```
   APIKEY=your-api-key
   CLIENT_SECRET=your-client-secret
   ```

3. **Start the application**

   ```bash
   npm run dev
   ```

   This starts both the frontend (port 5173) and backend (port 3001).

4. **Open in browser**

   Visit `http://localhost:5173`

## User Flows

### Owner Flow

1. Open the app at `/`
2. Enter your name and room name
3. Click "Create Room"
4. Once in the room, click the share icon to get an invite link
5. Copy and share the link with guests

### Guest Flow

1. Receive an invite link from the owner
2. Open the link in your browser
3. Enter your display name
4. Click "Join Room"
5. You're in the video call!

## Invite Link Format

```
https://example.com/join?joinToken={token}&region={region}
```

- `joinToken`: 32-character hex string identifying the invite
- `region`: Server region (e.g., us-west-2)

The room name is NOT in the URL - it's retrieved server-side when validating the token.

## Token Options

When generating invite links, owners can configure:

- **Type**:
  - `group` - Anyone with the link can join (multiple uses)
  - `individual` - Only one person can use this link

- **Expiration**:
  - 1 hour
  - 1 day
  - 1 week

## Project Structure

```
token-room-example/
├── src/
│   ├── main.tsx              # App entry with ClientProvider
│   ├── App.tsx               # Routing based on URL and state
│   └── components/
│       ├── CreateRoom.tsx    # Owner: create room form
│       ├── JoinRoom.tsx      # Guest: join via token
│       ├── VideoRoom.tsx     # Simple video room
│       └── InviteLinkDisplay.tsx  # Generate/share invite link
├── server/
│   ├── server.js             # Room token generation API
│   └── .env.example          # Environment template
├── package.json
├── vite.config.ts
└── README.md
```

## Dependencies

### Frontend
- `@hiyve/client-provider` - State management
- `@hiyve/video-grid` - Video layout
- `@hiyve/control-bar` - Media controls
- React 18, MUI 5

### Backend
- Express.js
- dotenv

## API Endpoints

### POST /api/generate-room-token

Generates a room token for MuzieClient authentication.

**Response:**
```json
{
  "roomToken": "jwt-token-here",
  "region": "us-west-2"
}
```

### GET /api/health

Health check endpoint.

## Comparison with Full Example

| Feature | Token Room Example | Full Example |
|---------|-------------------|--------------|
| Room Creation | Yes | Yes |
| Invite Links | Yes (token-based) | No |
| Video Grid | Yes | Yes |
| Control Bar | Basic | Full |
| Sidebar | No | Yes |
| Chat | No | Yes |
| Recording | No | Yes |
| Transcription | No | Yes |
| Waiting Room | No | Yes |
| File Sharing | No | Yes |

This example is intentionally minimal to demonstrate the token-based joining flow.

## Troubleshooting

### "Invalid or expired invite link"

- The token may have expired - ask for a new link
- The token may be for a different region - check the region parameter
- Individual tokens can only be used once

### "Failed to generate room token"

- Check that `APIKEY` and `CLIENT_SECRET` are set in `server/.env`
- Verify the credentials are correct

### Video/audio not working

- Check browser permissions for camera and microphone
- Try a different browser (Chrome recommended)
