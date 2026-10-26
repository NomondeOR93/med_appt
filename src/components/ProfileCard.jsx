import { useState } from 'react';

function ProfileCard() {
  const [userData, setUserData] = useState({
    name: 'Nomonde Setesh',
    email: 'nomonde@visadicor.com',
    phone: '+27 12 345 6789',
    role: 'Patient'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData(editData);
    setIsEditing(false); // Revert to view mode
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditData(userData); // Revert changes
    setIsEditing(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>
        User Profile
      </h2>

      {!isEditing ? (
        // VIEW MODE
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '100px', height: '100px', background: '#e8f0fe', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
              👤
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{userData.name}</h3>
            <p style={{ color: '#4a7cf7', fontWeight: '600' }}>{userData.role}</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Email</p>
            <p style={{ fontWeight: '500' }}>{userData.email}</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Phone</p>
            <p style={{ fontWeight: '500' }}>{userData.phone}</p>
          </div>

          <button 
            onClick={() => setIsEditing(true)}
            style={{ width: '100%', padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        // EDIT MODE
        <form onSubmit={handleSave}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
            <input 
              type="text" 
              name="name" 
              value={editData.name} 
              onChange={handleEditChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              name="email" 
              value={editData.email} 
              onChange={handleEditChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone</label>
            <input 
              type="tel" 
              name="phone" 
              value={editData.phone} 
              onChange={handleEditChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="button" 
              onClick={handleCancel}
              style={{ flex: 1, padding: '1rem', background: '#f0f2f8', color: '#1a1a2e', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={{ flex: 1, padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ProfileCard;
