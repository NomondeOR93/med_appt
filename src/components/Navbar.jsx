import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      background: '#fff', 
      borderBottom: '1px solid #e0e4ec',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a1a2e' }}>
        StayHealthy <span style={{ color: '#4a7cf7' }}>+</span>
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Home</Link>
        <Link to="/appointments" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Appointments</Link>

	<Link to="/book-quick" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Quick Book</Link>
	<Link to="/reviews" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Reviews</Link>
        <Link to="/profile" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Profile</Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Sign Up</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#555', fontWeight: '500' }}>Login</Link>
        
        <button 
          onClick={handleLogout}
          style={{ 
            padding: '0.5rem 1.5rem', 
            background: '#d94040', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '20px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
