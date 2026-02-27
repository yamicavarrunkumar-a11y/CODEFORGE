import React, { useState } from "react";

export default function UploadPanel({ setData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    console.log("📤 Starting upload...");

    const formData = new FormData();
    formData.append("file", file);
// Inside handleUpload in UploadPanel.jsx
const controller = new AbortController();

// Change to 120000 (2 minutes) to give Ollama enough time to "think"
const timeoutId = setTimeout(() => controller.abort(), 120000); 

try {
  console.log("📤 Backend is processing rules + AI... please wait.");
  const res = await fetch("http://127.0.0.1:8000/analyze/", {
    method: "POST",
    body: formData,
    signal: controller.signal,
  });
  
  const result = await res.json();
  console.log("✅ SUCCESS! Rewritten code and AI summary arrived:", result);
  setData(result); 
} catch (err) {
  if (err.name === 'AbortError') {
    alert("Still too slow! Try disabling the LLM in config.py just to see your code first.");
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Upload Python File</h3>
      <input 
        type="file" 
        accept=".py" 
        onChange={handleUpload} 
        disabled={loading} 
      />
      {loading && <p style={{ color: "#3b82f6", marginTop: "10px" }}>⏳ AI is narrating your results... please wait.</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>❌ {error}</p>}
    </div>
  );
}