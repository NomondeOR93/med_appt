import { useState } from 'react';

function GiveReviews() {
  const [reviewData, setReviewData] = useState({
    rating: 5,
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would POST to an API
    console.log('Review Submitted:', reviewData);
    setIsSubmitted(true); // Triggers the disabling behaviour
  };

  const handleReset = () => {
    setReviewData({ rating: 5, comments: '' });
    setIsSubmitted(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>
        Consultation Feedback
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Rating (1-5)</label>
          <select 
            name="rating" 
            value={reviewData.rating} 
            onChange={handleChange}
            disabled={isSubmitted} // Post-submission disabling
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', background: isSubmitted ? '#f5f5f5' : '#fff' }}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Your Review</label>
          <textarea 
            name="comments" 
            value={reviewData.comments} 
            onChange={handleChange}
            disabled={isSubmitted} // Post-submission disabling
            rows="4"
            placeholder="Share your experience with the doctor..."
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e4ec', borderRadius: '8px', outline: 'none', resize: 'vertical', background: isSubmitted ? '#f5f5f5' : '#fff' }}
          />
        </div>

        {!isSubmitted ? (
          <button 
            type="submit" 
            style={{ width: '100%', padding: '1rem', background: '#4a7cf7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
          >
            Submit Review
          </button>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#2d8a4e', fontWeight: '600', marginBottom: '1rem' }}>✅ Review submitted successfully!</p>
            <button 
              type="button" 
              onClick={handleReset}
              style={{ padding: '0.75rem 1.5rem', background: '#f0f2f8', color: '#1a1a2e', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
            >
              Write Another Review
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default GiveReviews;
