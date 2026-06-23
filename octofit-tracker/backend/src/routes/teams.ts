import { Router, Request, Response } from 'express';
import Team from '../models/Team';

const router = Router();

// GET /api/teams - List all teams
router.get('/', async (req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate('members').populate('createdBy');
  res.json({
    message: 'Get all teams',
    count: teams.length,
    data: teams
  });
});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

// GET /api/teams/:id - Get team by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
      const team = await Team.findById(id).populate('members').populate('createdBy');
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
  res.json({
    message: `Get team with ID: ${id}`,
    data: team
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// POST /api/teams - Create a new team
router.post('/', async (req: Request, res: Response) => {
  try {
    const team = await Team.create(req.body);
  res.status(201).json({
    message: 'Team created',
    data: req.body
    data: team
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
});

// PUT /api/teams/:id - Update team
router.put('/:id', async (req: Request, res: Response) => {
  try {
      const team = await Team.findByIdAndUpdate(id, req.body, { new: true });
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Team with ID ${id} updated`,
    data: team
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// DELETE /api/teams/:id - Delete team
router.delete('/:id', async (req: Request, res: Response) => {
  try {
      const team = await Team.findByIdAndDelete(id);
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
  const { id } = req.params;
  res.json({
    message: `Team with ID ${id} deleted`
    data: team
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

export default router;
