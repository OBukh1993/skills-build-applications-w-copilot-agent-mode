import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IActivity extends Document {
  userId: Types.ObjectId;
  type: string;
  duration: number;
  distance?: number;
  calories?: number;
  intensity: 'low' | 'medium' | 'high';
  date: Date;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['running', 'cycling', 'swimming', 'walking', 'gym', 'yoga', 'other'],
    },
    duration: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
    },
    calories: {
      type: Number,
    },
    intensity: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'],
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IActivity>('Activity', activitySchema);
