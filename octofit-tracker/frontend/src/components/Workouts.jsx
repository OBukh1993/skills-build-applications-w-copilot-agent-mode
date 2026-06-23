import { useEffect, useState } from 'react'
import { fetchJson, API_BASE } from '../utils/api'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('workouts')
      .then((res) => setWorkouts(res.data || []))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section>
      <h2>Workouts</h2>
      <p>API: <code>{API_BASE}/workouts</code></p>
      {error && <div className="error">Error: {error}</div>}
      <ul>
        {workouts.map((w) => (
          <li key={w._id}>{w.name} — {w.duration} min — {w.difficulty}</li>
        ))}
      </ul>
    </section>
  )
}
