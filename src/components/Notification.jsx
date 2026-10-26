function Notification({ message, type = 'info' }) {
  // Defensive coding: If no message is passed, render nothing
  if (!message) return null;

  const styles = {
    info: { background: '#e8f0fe', color: '#4a7cf7', border: '1px solid #c6d8f5' },
    success: { background: '#e6f9ee', color: '#2d8a4e', border: '1px solid #b8e6c8' },
    error: { background: '#fde8e8', color: '#d94040', border: '1px solid #f5c6c6' },
  };

  return (
    <div style={{ 
      ...styles[type], 
      padding: '1rem', 
      borderRadius: '8px', 
      margin: '1rem 2rem', 
      fontWeight: '600',
      textAlign: 'center'
    }}>
      {message}
    </div>
  );
}

export default Notification;
