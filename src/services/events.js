import { Event } from '../db/models/events.js';

// export async function getAllEvents() {
//   return await Event.find().limit(5);
// }

export async function getAllEventsSomePage(somePage) {
  return await Event.find()
    .limit(5)
    .skip((somePage - 1) * 5);
}
