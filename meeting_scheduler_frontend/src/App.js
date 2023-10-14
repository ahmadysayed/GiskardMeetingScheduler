import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AvailableSlots from './components/AvailableSlots';
import CreateReservation from './screens/CreateReservation';
import ReservationDelete from './screens/ReservationDelete';
import AvailabilityDelete from './screens/AvailabilityDelete';
import AvailabilityCreate from './screens/AvailabilityCreate';
import AvailableSlots from './screens/AvailableSlots';
// import Login from './components/Login';
import LoginScreen from './screens/LoginScreen';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
      <Header />  
        <Routes>
          <Route path="/" element={<AvailableSlots />} />
          <Route path="/create-reservation" element={<CreateReservation />} />
          <Route path="/reservation-delete" element={<ReservationDelete />} />
          <Route path="/availability-delete" element={<AvailabilityDelete />} />
          <Route path="/availability-create" element={<AvailabilityCreate />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
