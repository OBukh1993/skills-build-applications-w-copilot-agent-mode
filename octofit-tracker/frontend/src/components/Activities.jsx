import { useEffect, useState } from 'react'
import { fetchJson, API_BASE } from '../utils/api'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('activities')
      .then((res) => setActivities(res.data || []))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section>
      <h2>Activities</h2>
      <p>API: <code>{API_BASE}/activities</code></p>
      {error && <div className="error">Error: {error}</div>}
      <ul>
        {activities.map((a) => (
          <li key={a._id}>{a.type} — {a.duration} min — {a.intensity}</li>
        ))}
      </ul>
    </section>
  )
}
