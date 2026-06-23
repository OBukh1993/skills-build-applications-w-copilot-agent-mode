import { Link, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Users from './components/Users'
import Teams from './components/Teams'
import Activities from './components/Activities'
import Workouts from './components/Workouts'
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>OctoFit Tracker</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<section>
            <h2>Welcome to OctoFit Tracker</h2>
            <p>Use the navigation to explore API-backed pages.</p>
          </section>} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>OctoFit Tracker — Presentation Tier (React + Vite)</p>
      </footer>
    </div>
  )
}

export default App
