import { Event } from '../db/models/events.js';

export const addEvents = async (payload) => {
  const event = await Event.create(payload);
  return event;
};

export async function getAllEventsSomePage(somePage) {
  return await Event.find()
    .limit(5)
    .skip((somePage - 1) * 5);
}
