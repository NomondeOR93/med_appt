import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sign_Up() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'Patient',
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Task Requirement: onFocus event handler
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  // Task Requirement: onBlur event handler
  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Task 5 Requirement: Invoke the registration API
    try {
      const response = await fetch('https://stayhealthy-api.example.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('Network error. Please check your connection.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>Sign Up</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Role</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px' }}
          >
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '0.75rem', border: focusedField === 'name' ? '2px solid #4a7cf7' : '1px solid #e0e4ec', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            onFocus={() => handleFocus('phone')}
            onBlur={handleBlur}
            placeholder="Enter your phone number"
            style={{ width: '100%', padding: '0.75rem', border: focusedField === 'phone' ? '2px solid #4a7cf7' : '1px solid #e0e4ec', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '0.75rem', border: focusedField === 'email' ? '2px solid #4a7cf7' : '1px solid #e0e4ec', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
            placeholder="Create a password"
            style={{ width: '100%', padding: '0.75rem', border: focusedField === 'password' ? '2px solid #4a7cf7' : '1px solid #e0e4ec', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sign_Up;
