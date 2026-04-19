import axios from "axios";

const BASE_URL = "https://sentiment-analysis-mlwn.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

// Analyze sentiment
export async function analyzeSentiment(text) {
  const response = await api.post("/api/analyze", { text });
  return response.data.data;
}

// Get history
export async function getHistory() {
  const response = await api.get("/api/history");
  return response.data.data;
}

// Clear history
export async function clearHistory() {
  await api.delete("/api/history");
}

export { BASE_URL };