import { getAllEventsSomePage } from '../services/events.js';

export const getSomeEventsController = async (req, res) => {
  const { somePage } = req.params;

  const data = await getAllEventsSomePage(somePage);
  res.json({ status: 200, message: 'Successfully found events!', data });
};
