import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import dotenv from 'dotenv';
import { getAllEvents } from './services/events.js';
import { corsConfigs } from './config/corsConfigs.js';

dotenv.config();
const PORT = Number(process.env.PORT);

const app = express();

export function setupServer() {
  app.use(cors(corsConfigs));

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/events', async (req, res) => {
    const data = await getAllEvents();
    res.json({ status: 200, message: 'Successfully found events!', data });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
