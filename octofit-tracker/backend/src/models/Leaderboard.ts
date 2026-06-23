import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ILeaderboard extends Document {
  userId: Types.ObjectId;
  teamId?: Types.ObjectId;
  score: number;
  rank: number;
  totalActivities: number;
  totalDuration: number;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    rank: {
      type: Number,
      required: true,
    },
    totalActivities: {
      type: Number,
      default: 0,
    },
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
