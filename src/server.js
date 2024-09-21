import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import dotenv from 'dotenv';
import { corsConfigs } from './config/corsConfigs.js';
import { addNewEvents, getSomeEventsController } from './controllers/events.js';
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

const corsOptions = {
  origin:
    'https://event-board-o57x38tsw-vladyslavs-projects-3f31ee9c.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  optionsSuccessStatus: 200,
};

export function setupServer() {
  app.use(cors(corsConfigs));

  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://event-board-ten.vercel.app',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/events/:somePage', ctrlWrapper(getSomeEventsController));

  app.get('/participant/:eventId', ctrlWrapper(getParticipantController));

  app.put('/participant', ctrlWrapper(createParticipantController));

  app.post('/events', ctrlWrapper(addNewEvents));

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
