import { Participants } from '../db/models/participants.js';

export const createParticipant = async (payload) => {
  const participant = await Participants.findOneAndUpdate(
    {
      eventId: payload.eventId,
    },
    {
      $push: {
        participants: {
          full_name: payload.full_name,
          email: payload.email,
          dateOfBirth: payload.dateOfBirth,
          how_found: payload.how_found,
        },
      },
    },
    { upsert: true, new: true },
  );
  return participant;
};

export async function getAllParticipants(eventId) {
  return await Participants.find(eventId);
}
