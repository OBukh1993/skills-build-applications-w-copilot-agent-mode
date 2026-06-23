// Helper to build API base URL using Vite environment variable
const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;

export const API_BASE = CODESPACE
  ? `https://${CODESPACE}-8000.app.github.dev/api`
  : `http://localhost:8000/api`;

// Normalizes responses that may be arrays or paginated objects
export async function fetchJson(path, opts = {}) {
  const res = await fetch(`${API_BASE}/${path.replace(/^\//, '')}`, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  // Support structures: { data: [...] } or [...] or { items: [...], meta: {} }
  if (Array.isArray(json)) return { data: json };
  if (json.data && Array.isArray(json.data)) return json;
  if (json.items && Array.isArray(json.items)) return { data: json.items, meta: json.meta };
  // Fallback: wrap single object
  return { data: Array.isArray(json) ? json : [json], raw: json };
}

export default API_BASE;
