import { Router, Request, Response } from 'express';
import Workout from '../models/Workout';

const router = Router();

// GET /api/workouts - List all workouts
router.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().populate('createdBy');
  res.json({
    message: 'Get all workouts',
    count: workouts.length,
    data: workouts
  });
});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

// GET /api/workouts/:id - Get workout by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
      const workout = await Workout.findById(id).populate('createdBy');
      if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
      }
  res.json({
    message: `Get workout with ID: ${id}`,
    data: workout
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// POST /api/workouts - Create a new workout
router.post('/', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.create(req.body);
  res.status(201).json({
    message: 'Workout created',
    data: req.body
    data: workout
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
});

// PUT /api/workouts/:id - Update workout
router.put('/:id', async (req: Request, res: Response) => {
  try {
      const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true });
      if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Workout with ID ${id} updated`,
    data: workout
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// DELETE /api/workouts/:id - Delete workout
router.delete('/:id', async (req: Request, res: Response) => {
  try {
      const workout = await Workout.findByIdAndDelete(id);
      if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Workout with ID ${id} deleted`
    data: workout
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// GET /api/workouts/suggestions/:userId - Get personalized workout suggestions
router.get('/suggestions/:userId', async (req: Request, res: Response) => {
  try {
  const { userId } = req.params;
    const workouts = await Workout.find().limit(3);
  res.json({
    message: `Get workout suggestions for user: ${userId}`,
    userId,
    suggestions: workouts
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

export default router;
