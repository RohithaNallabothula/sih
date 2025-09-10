const API_BASE = import.meta.env.VITE_API_URL;

export async function fetchSamples() {
  const res = await fetch(`${API_BASE}/api/samples`);
  return res.json();
}

export async function postSample(sample) {
  const res = await fetch(`${API_BASE}/api/samples`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sample)
  });
  return res.json();
}
