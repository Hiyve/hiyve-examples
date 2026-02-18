/**
 * AI Video Room Example - Server
 *
 * Uses @hiyve/admin middleware for standard Hiyve server endpoints:
 * - POST /api/generate-room-token - Room token for Hiyve Client
 * - POST /api/generate-cloud-token - Cloud token for AI features
 * - POST /api/generate-note - AI note generation
 * - GET  /api/health - Health check
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { mountHiyveRoutes, loadHiyveConfig } from '@hiyve/admin';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }));
app.use(express.json());

const apiRouter = express.Router();
mountHiyveRoutes(apiRouter, loadHiyveConfig());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}`);
  console.log(`\nEndpoints:`);
  console.log(`  POST /api/generate-room-token`);
  console.log(`  POST /api/generate-cloud-token`);
  console.log(`  POST /api/generate-note`);
  console.log(`  GET  /api/health\n`);
});
