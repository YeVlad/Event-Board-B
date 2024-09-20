import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import dotenv from 'dotenv';
import { corsConfigs } from './config/corsConfigs.js';
import { getContactController } from './controllers/events.js';
import {
  createParticipantController,
  getParticipantController,
} from './controllers/participants.js';

import { ctrlWrapper } from './utils/ctrlWrapper.js';

dotenv.config();
const PORT = Number(process.env.PORT);

const app = express();

app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
  }),
);

export function setupServer() {
  app.use(cors(corsConfigs));

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/events', ctrlWrapper(getContactController));

  app.get('/participant/:eventId', ctrlWrapper(getParticipantController));

  app.put('/participant', ctrlWrapper(createParticipantController));

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
