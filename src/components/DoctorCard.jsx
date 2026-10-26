import { useState } from 'react';

function DoctorCard({ doctor }) {
  // Local state to manage the appointment lifecycle for this specific card
  const [isBooked, setIsBooked] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const handleBook = () => {
    setIsBooked(true);
    setIsCancelled(false);
    alert(`Appointment successfully booked with ${doctor.name}!`);
  };

  // Task 19 Requirement: Cancel appointment logic
  const handleCancel = () => {
    if (window.confirm(`Are you sure you want to cancel your appointment with ${doctor.name}?`)) {
      // In a real app, this would trigger an API DELETE request
      setIsBooked(false);
      setIsCancelled(true);
      alert('Appointment cancelled successfully. We hope to see you next time.');
    }
  };

  return (
    <div style={{ 
      background: '#fff', 
      padding: '1.5rem', 
      borderRadius: '12px', 
      textAlign: 'center', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s',
    }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        background: '#e0f0ff', 
        borderRadius: '50%', 
        margin: '0 auto 1rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '2rem' 
      }}>
        👨‍⚕️
      </div>
      
      <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem', color: '#1a1a2e' }}>
        {doctor.name}
      </h3>
      <p style={{ color: '#4a7cf7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>
        {doctor.specialty}
      </p>
      <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '1rem' }}>
        {doctor.experience} experience
      </p>
      
      {/* Conditional Rendering based on appointment state */}
      {!isBooked && !isCancelled && (
        <button 
          onClick={handleBook}
          style={{ width: '100%', padding: '0.75rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
        >
          Book Appointment
        </button>
      )}

      {isBooked && !isCancelled && (
        <button 
          onClick={handleCancel}
          style={{ width: '100%', padding: '0.75rem', background: '#d94040', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
        >
          Cancel Appointment
        </button>
      )}

      {isCancelled && (
        <p style={{ color: '#d94040', fontWeight: '600', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          ❌ Appointment Cancelled
        </p>
      )}
    </div>
  );
}

export default DoctorCard;
