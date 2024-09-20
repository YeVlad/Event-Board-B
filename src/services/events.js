import { Event } from '../db/models/events.js';

export async function getAllEvents() {
  return await Event.find();
}
