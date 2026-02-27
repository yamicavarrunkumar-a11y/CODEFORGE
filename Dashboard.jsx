import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UploadPanel from "../components/UploadPanel";
import DashboardCards from "../components/DashboardCards";
import ComplexityChart from "../components/ComplexityChart";
import RiskPanel from "../components/RiskPanel";
import RefactorPanel from "../components/RefactorPanel";
import DependencyPanel from "../components/DependencyPanel";
import ExplanationPanel from "../components/ExplanationPanel";

export default function Dashboard() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1> CodeAgent Dashboard</h1>

        <UploadPanel setData={setData} />

        {data && (
          <>
            <DashboardCards report={data.report} />
            <ComplexityChart data={data.complexity} />
            <DependencyPanel deps={data.dependencies} />
            <RiskPanel risks={data.risks} />
            <RefactorPanel refactors={data.refactors} />
            <ExplanationPanel explanation={data.explanation} />
          </>
        )}
      </div>
    </div>
  );
}
