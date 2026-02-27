import React from "react";
export default function RiskPanel({ risks = [] }) {
  return (
    <div className="card">
      <h3>Risks</h3>
      <ul>
        {risks.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}