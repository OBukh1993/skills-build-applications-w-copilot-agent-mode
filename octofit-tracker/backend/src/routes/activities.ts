import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/activities - List all activities
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all activities',
    data: []
  });
});

// GET /api/activities/:id - Get activity by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Get activity with ID: ${id}`,
    activityId: id
  });
});

// POST /api/activities - Create a new activity
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Activity created',
    data: req.body
  });
});

// PUT /api/activities/:id - Update activity
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Activity with ID ${id} updated`,
    activityId: id,
    data: req.body
  });
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Activity with ID ${id} deleted`
  });
});

export default router;
