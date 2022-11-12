import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import TicketBooking from './pages/TicketBooking';
import ManageShift from './pages/ManageShift';

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<TicketBooking />} />
          <Route path="/manage-shift" element={<ManageShift />} />
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
