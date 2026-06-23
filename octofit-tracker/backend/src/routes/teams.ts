import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/teams - List all teams
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all teams',
    data: []
  });
});

// GET /api/teams/:id - Get team by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Get team with ID: ${id}`,
    teamId: id
  });
});

// POST /api/teams - Create a new team
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Team created',
    data: req.body
  });
});

// PUT /api/teams/:id - Update team
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Team with ID ${id} updated`,
    teamId: id,
    data: req.body
  });
});

// DELETE /api/teams/:id - Delete team
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Team with ID ${id} deleted`
  });
});

export default router;
