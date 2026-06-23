import { useEffect, useState } from 'react'
import { fetchJson, API_BASE } from '../utils/api'

export default function Users() {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('users')
      .then((res) => {
        setUsers(res.data || [])
        setCount(res.count ?? res.data.length ?? 0)
      })
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section>
      <h2>Users</h2>
      <p>API: <code>{API_BASE}/users</code></p>
      {error && <div className="error">Error: {error}</div>}
      <div>Count: {count}</div>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </section>
  )
}
