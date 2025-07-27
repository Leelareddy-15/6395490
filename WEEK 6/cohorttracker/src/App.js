import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails 
        name="Gen AI Bootcamp" 
        status="ongoing" 
        startDate="2025-07-01" 
        endDate="2025-08-01" 
      />
      <CohortDetails 
        name="Cloud Native Program" 
        status="completed" 
        startDate="2025-04-01" 
        endDate="2025-06-01" 
      />
    </div>
  );
}

export default App;
