import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Home from './components/Home';
import Sign_Up from './components/Sign_Up';
import Login from './components/Login';
import FindDoctorSearch from './components/FindDoctorSearch';
import AppointmentFormIC from './components/AppointmentFormIC'; 
import AppointmentForm from './components/AppointmentForm';     
import GiveReviews from './components/GiveReviews'; // Import new
import ProfileCard from './components/ProfileCard'; // Import new

function App() {
  const globalNotification = { message: "Welcome to StayHealthy! Please sign up to book.", type: "info" };

  return (
    <Router>
      <div style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh', background: '#f8f9ff' }}>
        <Navbar />
        <Notification message={globalNotification.message} type={globalNotification.type} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/appointments" element={<FindDoctorSearch />} />
          <Route path="/book-quick" element={<AppointmentFormIC />} />
          <Route path="/book-full" element={<AppointmentForm />} />
          <Route path="/reviews" element={<GiveReviews />} />   {/* Updated */}
          <Route path="/profile" element={<ProfileCard />} />   {/* Updated */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
