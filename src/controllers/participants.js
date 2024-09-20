import {
  createParticipant,
  getAllParticipants,
} from '../services/participants.js';

export const createParticipantController = async (req, res) => {
  const data = await createParticipant(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a participant!`,
    data: data,
  });
};

export const getParticipantController = async (req, res) => {
  const { eventId } = req.params;
  const data = await getAllParticipants(eventId);
  res.json({ status: 200, message: 'Successfully found !', data });
};
