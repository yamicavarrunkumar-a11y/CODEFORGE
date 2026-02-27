import React from "react";
export default function DashboardCards({ report }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div className="card">Functions: {report.total_functions}</div>
      <div className="card">Dependencies: {report.total_dependencies}</div>
      <div className="card">Risks: {report.total_risks}</div>
      <div className="card">Refactors: {report.total_refactors}</div>
    </div>
  );
}