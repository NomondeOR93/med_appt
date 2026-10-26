import { useState } from 'react';
import DoctorCard from './DoctorCard'; // Import the new component

const MOCK_DOCTORS = [
  { id: 1, name: 'Dr. Jiao Yang', specialty: 'Dentist', experience: '9 years' },
  { id: 2, name: 'Dr. Denis Raj', specialty: 'Dentist', experience: '24 years' },
  { id: 3, name: 'Dr. Lyn Christie', specialty: 'Dentist', experience: '11 years' },
  { id: 4, name: 'Dr. Sarah Mitchell', specialty: 'Cardiologist', experience: '15 years' },
  { id: 5, name: 'Dr. Amit Patel', specialty: 'Neurologist', experience: '18 years' },
  { id: 6, name: 'Dr. Emma Johansson', specialty: 'Dermatologist', experience: '7 years' },
  { id: 7, name: 'Dr. Kwame Asante', specialty: 'Orthopedic', experience: '20 years' },
  { id: 8, name: 'Dr. Priya Sharma', specialty: 'Pediatrician', experience: '12 years' },
];

function FindDoctorSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = MOCK_DOCTORS.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1a1a2e' }}>
        Find a Doctor
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Search by name or specialty to book an appointment.
      </p>

      <div style={{ display: 'flex', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
        <input
          type="text"
          placeholder="Search doctors by specialty or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, padding: '1rem', border: 'none', fontSize: '1rem', outline: 'none' }}
        />
        <button style={{ padding: '0 2rem', background: '#4a7cf7', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
          🔍
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default FindDoctorSearch;
