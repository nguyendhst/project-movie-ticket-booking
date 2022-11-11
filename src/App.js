import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import TicketBooking from './pages/TicketBooking';

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<TicketBooking />} />
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
