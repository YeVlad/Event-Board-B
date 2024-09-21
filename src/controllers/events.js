import { addEvents, getAllEventsSomePage } from '../services/events.js';

import { parseSortParams } from '../utils/parseSortParams.js';

export const addNewEvents = async (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    const data = await addEvents(req.body[i]);
    res.status(201).json({
      status: 201,
      message: `Successfully created a participant!`,
      data: data,
    });
  }
};

export const getSomeEventsController = async (req, res) => {
  const { somePage } = req.params;
  const { sortBy } = parseSortParams(req.body);

  const data = await getAllEventsSomePage(somePage, sortBy);
  res.json({ status: 200, message: 'Successfully found events!', data });
};
