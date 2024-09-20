import { Schema, model } from 'mongoose';

const partSchema = new Schema(
  {
    eventId: String,
    participants: [
      {
        full_name: String,
        email: String,
        dateOfBirth: String,
        how_found: {
          type: String,
          enum: ['Social media', 'Friends', 'Found myself'],
        },
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export const Participants = model('participants', partSchema);
