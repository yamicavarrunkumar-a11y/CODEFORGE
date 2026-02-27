import React from 'react';

export default function ComplexityChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155', marginTop: '24px' }}>
      <h3 style={{ color: 'white', fontWeight: 'bold', marginBottom: '24px', fontSize: '18px' }}>
        📊 Final Complexity Report
      </h3>
      
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              {/* 1. NAME COLUMN */}
              <td style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '14px', width: '30%', verticalAlign: 'middle' }}>
                {entry.name || `function_${index + 1}`}
              </td>
              
              {/* 2. BAR COLUMN - FORCED VISIBILITY */}
              <td style={{ width: '60%', verticalAlign: 'middle' }}>
                <div style={{ width: '100%', backgroundColor: '#0f172a', height: '16px', borderRadius: '8px', border: '1px solid #475569', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${Math.min((entry.complexity / 10) * 100, 100)}%`, 
                    backgroundColor: entry.complexity > 10 ? '#ef4444' : '#3b82f6',
                    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5)'
                  }}></div>
                </div>
              </td>
              
              {/* 3. SCORE COLUMN */}
              <td style={{ color: 'white', fontWeight: 'bold', textAlign: 'right', width: '10%', verticalAlign: 'middle' }}>
                {entry.complexity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px', fontSize: '12px', color: '#94a3b8' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#3b82f6', borderRadius: '2px', marginRight: '8px' }}></div> Normal</div>
        <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '2px', marginRight: '8px' }}></div> High Complexity</div>
      </div>
    </div>
  );
}