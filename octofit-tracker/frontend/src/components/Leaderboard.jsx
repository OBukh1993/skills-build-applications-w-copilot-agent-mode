import { useEffect, useState } from 'react'
import { fetchJson, API_BASE } from '../utils/api'

export default function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('leaderboard')
      .then((res) => setEntries(res.data || []))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section>
      <h2>Leaderboard</h2>
      <p>API: <code>{API_BASE}/leaderboard</code></p>
      {error && <div className="error">Error: {error}</div>}
      <ol>
        {entries.map((e) => (
          <li key={e._id}>{e.userId?.name ?? e.userId} — score: {e.score}</li>
        ))}
      </ol>
    </section>
  )
}
