import React from "react";
export default function DependencyPanel({ deps }) {
  return (
    <div className="card">
      <h3>Dependencies</h3>
      <ul>
        {deps.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}