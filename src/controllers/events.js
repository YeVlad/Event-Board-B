import { getAllEvents, getAllEventsSomePage } from '../services/events.js';

export const getEventsController = async (req, res) => {
  const data = await getAllEvents();
  res.json({ status: 200, message: 'Successfully found events!', data });
};

export const getSomeEventsController = async (req, res) => {
  const { somePage } = req.params;

  const data = await getAllEventsSomePage(somePage);
  res.json({ status: 200, message: 'Successfully found events!', data });
};
