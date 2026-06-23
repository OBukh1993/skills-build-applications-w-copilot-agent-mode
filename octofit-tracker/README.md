# OctoFit Tracker

A modern multi-tier application for tracking fitness activities and workouts.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
└── backend/           # Node.js + Express + TypeScript + MongoDB API
```

## Technology Stack

### Frontend
- **React 19** - Latest React version with ES modules
- **Vite** - Lightning-fast frontend build tool and dev server
- **Port**: 5173

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework for Node.js
- **TypeScript** - Type-safe JavaScript
- **Mongoose** - MongoDB object modeling
- **Port**: 8000

### Database
- **MongoDB** - NoSQL database
- **Port**: 27017 (default local connection)

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB (running locally on port 27017 or via Docker)

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:8000`

#### Available Backend Commands
- `npm run dev` - Run development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run production build

#### Backend Environment Variables
Create a `.env` file in the backend directory:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
```

### Running MongoDB Locally

If you have Docker installed, you can run MongoDB in a container:

```bash
docker run -d -p 27017:27017 --name octofit-mongodb mongo:latest
```

Or install MongoDB locally and ensure it's running on port 27017.

## API Endpoints

- `GET /` - API health check and version info
- `GET /health` - Server health status

## Development Workflow

1. **Terminal 1**: Start MongoDB (if not already running)
2. **Terminal 2**: Start the backend server
   ```bash
   cd octofit-tracker/backend
   npm run dev
   ```
3. **Terminal 3**: Start the frontend dev server
   ```bash
   cd octofit-tracker/frontend
   npm run dev
   ```

## Building for Production

### Frontend
```bash
cd octofit-tracker/frontend
npm run build
```

Output will be in `dist/` directory

### Backend
```bash
cd octofit-tracker/backend
npm run build
npm run start
```

## Project Status

🚀 Initialized with:
- ✅ Frontend: React 19 + Vite scaffold
- ✅ Backend: Express + TypeScript base setup
- ✅ Database: Mongoose MongoDB integration configured
- ✅ Development environment ready

## Next Steps

- [ ] Create user authentication system
- [ ] Design database schemas
- [ ] Build API endpoints
- [ ] Implement frontend components
- [ ] Add unit and integration tests
- [ ] Deploy to production

