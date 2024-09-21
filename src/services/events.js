import { Event } from '../db/models/events.js';

export const addEvents = async (payload) => {
  const event = await Event.create(payload);
  return event;
};

export async function getAllEventsSomePage(somePage, sortBy = 'title') {
  const dataQuery = Event.find();

  const final_data = await dataQuery
    .limit(5)
    .skip((somePage - 1) * 5)
    .sort({ [sortBy]: 'asc' });

  return final_data;
}
