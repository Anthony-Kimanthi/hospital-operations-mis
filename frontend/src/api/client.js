const API_URL = "http://localhost:8000"

export async function getPatients() {
  const res = await fetch(`${API_URL}/patients`)
  return res.json()
}
