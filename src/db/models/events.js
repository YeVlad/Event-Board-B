import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    event_date: { type: String, required: true },
    organizer: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const Event = model('events', eventSchema);
