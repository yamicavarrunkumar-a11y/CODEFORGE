import React from "react";

export default function RefactorPanel({ refactors }) {
  return (
    <div className="card shadow-lg p-6 bg-slate-800 rounded-xl mt-4 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-6">🛠️ Rule-Based Refactored Code</h3>
      <div className="space-y-4">
        {refactors && refactors.length > 0 ? (
          refactors.map((item, index) => (
            <div key={index} className="p-4 bg-slate-900 rounded-lg border-l-4 border-blue-500">
               {/* Display the Rule description */}
               <p className="text-blue-200 font-semibold mb-2">
                 {typeof item === 'object' ? item.issue : "Optimization Suggestion"}
               </p>
               
               {/* Display the Actual Refactored Code block */}
               <div className="bg-black rounded p-3 border border-slate-800">
                 <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                   <code>
                     {typeof item === 'object' ? item.rewritten_code : item}
                   </code>
                 </pre>
               </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500 italic text-center py-4">Waiting for rule-based analysis...</p>
        )}
      </div>
    </div>
  );
}