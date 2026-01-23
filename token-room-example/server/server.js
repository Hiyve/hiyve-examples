/**
 * Token Room Example - Server
 *
 * This server provides room token generation for MuzieClient.
 * Join tokens are created client-side via the MuzieClient API.
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const APIKEY = process.env.APIKEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SERVER_REGION = process.env.SERVER_REGION || 'us-west-2';
const SERVER_REGION_URL = process.env.SERVER_REGION_URL || '.rtc.muziemedia.com';
const SIGNALING_SERVER = `${SERVER_REGION}${SERVER_REGION_URL}`;

if (!APIKEY || !CLIENT_SECRET) {
  console.warn('Warning: APIKEY and CLIENT_SECRET are not set.');
  console.warn('   Set them in server/.env file:');
  console.warn('   APIKEY=your-api-key');
  console.warn('   CLIENT_SECRET=your-client-secret');
}

/**
 * Generate a room token
 *
 * The room token is a JWT containing the apiKey/secret that allows
 * the client to authenticate with the signaling server.
 */
app.post('/api/generate-room-token', async (req, res) => {
  if (!APIKEY || !CLIENT_SECRET) {
    return res.status(500).json({
      error: 'Server not configured',
      message: 'APIKEY and CLIENT_SECRET must be set in environment variables'
    });
  }

  try {
    const response = await fetch(`https://${SIGNALING_SERVER}/room-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: APIKEY,
        secret: CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Room token generation failed:', response.status, errorText);
      return res.status(response.status).json({
        error: 'Failed to generate room token',
        details: errorText
      });
    }

    const data = await response.json();
    // Include region so client can build proper join links
    res.json({ ...data, region: SERVER_REGION });
  } catch (error) {
    console.error('Error generating room token:', error);
    res.status(500).json({
      error: 'Error generating room token',
      message: error.message
    });
  }
});

/**
 * Validate a join token and get room information
 *
 * This endpoint allows guests to validate their invite link
 * before entering their name. Returns the room name if valid.
 */
app.post('/api/validate-join-token', async (req, res) => {
  if (!APIKEY || !CLIENT_SECRET) {
    return res.status(500).json({
      error: 'Server not configured',
      message: 'APIKEY and CLIENT_SECRET must be set in environment variables'
    });
  }

  const { joinToken, region, userId } = req.body;

  if (!joinToken || !region || !userId) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'joinToken, region, and userId are required'
    });
  }

  try {
    // First get a room token
    const tokenResponse = await fetch(`https://${region}${SERVER_REGION_URL}/room-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: APIKEY,
        secret: CLIENT_SECRET,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Room token generation failed:', tokenResponse.status, errorText);
      return res.status(tokenResponse.status).json({
        error: 'Failed to authenticate with server',
        details: errorText
      });
    }

    const { roomToken } = await tokenResponse.json();

    // Now validate the join token
    const validateResponse = await fetch(`https://${region}${SERVER_REGION_URL}/roomname-from-jointoken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        joinToken,
        joinUserId: userId,
        roomToken,
      }),
    });

    if (!validateResponse.ok) {
      const errorData = await validateResponse.json().catch(() => ({}));
      console.error('Token validation failed:', validateResponse.status, errorData);
      return res.status(400).json({
        error: 'Invalid or expired invite link',
        message: errorData.error || 'The invite link is no longer valid'
      });
    }

    const data = await validateResponse.json();
    res.json({
      valid: true,
      roomName: data.roomName,
      isActive: data.isActive,
    });
  } catch (error) {
    console.error('Error validating join token:', error);
    res.status(500).json({
      error: 'Error validating invite link',
      message: error.message
    });
  }
});

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    configured: !!(APIKEY && CLIENT_SECRET),
    region: SERVER_REGION,
    signalingServer: SIGNALING_SERVER
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n Token Room Example server running on http://localhost:${PORT}`);
  console.log(`\n Available endpoints:`);
  console.log(`   POST /api/generate-room-token - Generate room token for MuzieClient`);
  console.log(`   GET  /api/health - Health check\n`);

  if (!APIKEY || !CLIENT_SECRET) {
    console.log(`   Server running but not fully configured.`);
    console.log(`   Create a .env file in the server folder with:`);
    console.log(`   APIKEY=your-api-key`);
    console.log(`   CLIENT_SECRET=your-client-secret\n`);
  }
});
