import { Router, Request, Response } from 'express';
import Leaderboard from '../models/Leaderboard';

const router = Router();

// GET /api/leaderboard - Get leaderboard rankings
router.get('/', async (req: Request, res: Response) => {
  try {
    const rankings = await Leaderboard.find().sort({ rank: 1 }).populate('userId').populate('teamId');
  res.json({
    message: 'Get leaderboard rankings',
    count: rankings.length,
    data: rankings,
    timestamp: new Date().toISOString()
  });
});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

// GET /api/leaderboard/users - Get user leaderboard
router.get('/users', async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find({ teamId: null }).sort({ rank: 1 }).populate('userId');
  res.json({
    message: 'Get user leaderboard',
    leaderboard: 'users',
    count: leaderboard.length,
    data: leaderboard
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// GET /api/leaderboard/teams - Get team leaderboard
router.get('/teams', async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find({ teamId: { $exists: true } }).sort({ rank: 1 }).populate('teamId');
  res.json({
    message: 'Get team leaderboard',
    leaderboard: 'teams',
    count: leaderboard.length,
    data: leaderboard
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// GET /api/leaderboard/:userId - Get user ranking
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
  const { userId } = req.params;
      const ranking = await Leaderboard.findOne({ userId }).populate('userId').populate('teamId');
      if (!ranking) {
        return res.status(404).json({ message: 'User ranking not found' });
      }
  res.json({
    message: `Get ranking for user: ${userId}`,
    data: ranking
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

export default router;
