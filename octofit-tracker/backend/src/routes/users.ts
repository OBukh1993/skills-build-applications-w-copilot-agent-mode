import { Router, Request, Response } from 'express';
import User from '../models/User';

const router = Router();

// GET /api/users - List all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
  res.json({
    message: 'Get all users',
    count: users.length,
    data: users
  });
});
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

// GET /api/users/:id - Get user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  res.json({
    message: `Get user with ID: ${id}`,
    data: user
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// POST /api/users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
  res.status(201).json({
    message: 'User created',
    data: req.body
    data: user
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
});

// PUT /api/users/:id - Update user
router.put('/:id', async (req: Request, res: Response) => {
  try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  const { id } = req.params;
  res.json({
    message: `User with ID ${id} updated`,
    data: user
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', async (req: Request, res: Response) => {
  try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  const { id } = req.params;
  res.json({
    message: `User with ID ${id} deleted`
    data: user
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
});

export default router;
