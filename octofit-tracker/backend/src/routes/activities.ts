import { Router, Request, Response } from 'express';
import Activity from '../models/Activity';

const router = Router();

// GET /api/activities - List all activities
router.get('/', async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('userId');
  res.json({
    message: 'Get all activities',
    count: activities.length,
    data: activities
  });
});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

// GET /api/activities/:id - Get activity by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
      const activity = await Activity.findById(id).populate('userId');
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
  res.json({
    message: `Get activity with ID: ${id}`,
    data: activity
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// POST /api/activities - Create a new activity
router.post('/', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.create(req.body);
  res.status(201).json({
    message: 'Activity created',
    data: req.body
    data: activity
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
});

// PUT /api/activities/:id - Update activity
router.put('/:id', async (req: Request, res: Response) => {
  try {
      const activity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Activity with ID ${id} updated`,
    data: activity
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', async (req: Request, res: Response) => {
  try {
      const activity = await Activity.findByIdAndDelete(id);
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Activity with ID ${id} deleted`
    data: activity
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

export default router;
