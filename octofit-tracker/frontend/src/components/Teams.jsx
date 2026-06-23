import { useEffect, useState } from 'react'
import { fetchJson, API_BASE } from '../utils/api'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('teams')
      .then((res) => setTeams(res.data || []))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section>
      <h2>Teams</h2>
      <p>API: <code>{API_BASE}/teams</code></p>
      {error && <div className="error">Error: {error}</div>}
      <ul>
        {teams.map((t) => (
          <li key={t._id}>{t.name} — members: {t.members?.length ?? 0}</li>
        ))}
      </ul>
    </section>
  )
}
