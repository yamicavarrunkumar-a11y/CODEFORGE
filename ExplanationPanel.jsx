import React from "react";
export default function ExplanationPanel({ explanation }) {
  return (
    <div className="card">
      <h3>AI Explanation</h3>
      <p>{explanation}</p>
    </div>
  );
}