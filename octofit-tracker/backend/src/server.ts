import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

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

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'OctoFit Tracker API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`MongoDB connected to: ${MONGODB_URI}`);
});

export default app;
