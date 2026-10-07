// The address of your teammate's Flask backend.
// Ask your teammate to confirm this address and the route name.
const API_URL = 'http://127.0.0.1:5000/analyse'

export async function analyseMessage(message) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: message }),
  })

  if (!response.ok) {
    throw new Error('Backend error: ' + response.status)
  }

  const data = await response.json()

  // We expect the backend to reply like this:
  // { "risk_level": "High", "reasons": ["reason 1", "reason 2"] }
  return {
    riskLevel: data.risk_level,
    reasons: data.reasons,
  }
}