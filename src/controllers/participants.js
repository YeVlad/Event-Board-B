import { createParticipant } from '../services/participants.js';

export const createParticipantController = async (req, res) => {
  const data = await createParticipant(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a participant!`,
    data: data,
  });
};
