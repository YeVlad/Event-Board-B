import { getAllEvents } from '../services/events.js';

export const getContactController = async (req, res) => {
  const data = await getAllEvents();
  res.json({ status: 200, message: 'Successfully found events!', data });
};
