// The only place that knows the backend address. Set VITE_API_URL in .env
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Images are saved in the CMS as "/uploads/photo.jpg", so we add the backend address in front
export const assetUrl = (path) => (!path ? '' : path.startsWith('http') ? path : `${API_URL}${path}`)

export async function api(path, options) {
  let res
  try {
    res = await fetch(`${API_URL}${path}`, options)
  } catch {
    throw new Error('Cannot reach the server. Please try again later.')
  }
  let data = null
  try { data = await res.json() } catch { /* empty body */ }
  if (!res.ok) throw new Error(data?.detail || 'Something went wrong.')
  return data
}
