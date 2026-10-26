import { useState } from 'react';

function AppointmentFormIC() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Initial Capture Submitted:', formData);
    alert('Appointment request initiated for ' + formData.name);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>
        Quick Appointment Request
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Please provide your basic details to begin.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
        >
          Request Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentFormIC;
