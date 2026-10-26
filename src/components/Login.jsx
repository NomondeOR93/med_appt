import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
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
    
    // Task 6 Requirement: Invoke the login authentication API
    try {
      const response = await fetch('https://stayhealthy-api.example.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Store token for future requests
        localStorage.setItem('authToken', data.token);
        alert('Login successful!');
        navigate('/appointments');
      } else {
        alert(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('Network error. Please check your connection.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>Login</h2>
      
      <form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            style={{ width: '100%', padding: '0.75rem', border: focusedField === 'password' ? '2px solid #4a7cf7' : '1px solid #e0e4ec', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', marginBottom: '0.5rem' }}
        >
          Login
        </button>
        
        <button 
          type="button"
          onClick={() => setFormData({ email: '', password: '' })}
          style={{ width: '100%', padding: '1rem', background: '#d94040', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Login;
