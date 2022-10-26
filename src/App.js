import React from 'react';
import './App.css';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
