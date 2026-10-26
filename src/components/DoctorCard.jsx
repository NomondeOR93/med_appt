import { useState, useEffect } from 'react';

function DoctorCard({ doctor }) {
  const [isBooked, setIsBooked] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    if (savedAppointments.some(apt => apt.id === doctor.id)) {
      setIsBooked(true);
    }
  }, [doctor.id]);

  const handleBook = () => {
    // 1. Update React State
    setIsBooked(true);
    setIsCancelled(false);
    
    // 2. REQUIRED: Save to localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    savedAppointments.push({ id: doctor.id, name: doctor.name });
    localStorage.setItem('appointments', JSON.stringify(savedAppointments));
    
    alert(`Appointment booked with ${doctor.name}!`);
  };

  const handleCancel = () => {
    if (window.confirm(`Cancel appointment with ${doctor.name}?`)) {
      // 1. Update React State
      setIsBooked(false);
      setIsCancelled(true);
      
      // 2. REQUIRED: Remove from localStorage
      let savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      savedAppointments = savedAppointments.filter(apt => apt.id !== doctor.id);
      localStorage.setItem('appointments', JSON.stringify(savedAppointments));
      
      alert('Appointment cancelled.');
    }
  };

  return (
    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <div style={{ width: '80px', height: '80px', background: '#e0f0ff', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👨‍⚕️</div>
      <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{doctor.name}</h3>
      <p style={{ color: '#4a7cf7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>{doctor.specialty}</p>
      <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '1rem' }}>{doctor.experience} experience</p>
      
      {!isBooked && !isCancelled && (
        <button onClick={handleBook} style={{ width: '100%', padding: '0.75rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Book Appointment</button>
      )}
      {isBooked && !isCancelled && (
        <button onClick={handleCancel} style={{ width: '100%', padding: '0.75rem', background: '#d94040', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Cancel Appointment</button>
      )}
      {isCancelled && <p style={{ color: '#d94040', fontWeight: '600', fontSize: '0.9rem' }}>❌ Appointment Cancelled</p>}
    </div>
  );
}

export default DoctorCard;
