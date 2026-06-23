import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

// Codespaces Environment Detection
const CODESPACE_NAME = process.env.CODESPACE_NAME;
const API_URL = CODESPACE_NAME 
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'OctoFit Tracker API',
    version: '1.0.0',
    status: 'running',
    environment: CODESPACE_NAME ? 'codespaces' : 'local',
    apiUrl: API_URL
  });
});

// Health Check
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    apiUrl: API_URL
  });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on ${API_URL}`);
  console.log(`MongoDB connected to: ${MONGODB_URI}`);
  console.log(`Environment: ${CODESPACE_NAME ? 'GitHub Codespaces' : 'Local'}`);
});

export default app;
