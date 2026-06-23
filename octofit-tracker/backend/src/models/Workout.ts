import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  description?: string;
  duration: number;
  exercises: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetMuscles: string[];
  createdBy?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    exercises: [
      {
        type: String,
      },
    ],
    difficulty: {
      type: String,
      required: true,
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    targetMuscles: [
      {
        type: String,
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model<IWorkout>('Workout', workoutSchema);
