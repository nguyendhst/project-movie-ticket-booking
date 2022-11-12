import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import TicketBooking from './pages/TicketBooking';
import ManageShift from './pages/ManageShift';
import CustomerCare from './pages/Customer_Care/CustomerCare';
import NewFeedbacks from './pages/Customer_Care/NewFeedback';

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<TicketBooking />} />
          <Route path="/manage-shift" element={<ManageShift />} />
          <Route path="/customer-care" element={<CustomerCare />}>
              <Route path='customer-care/new-feedback' element={<NewFeedbacks />} />
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
