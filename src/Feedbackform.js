import React, { useState } from 'react';
import './Feedbackform.css';

const Feedbackform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: null,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the corresponding error when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prevData) => ({
      ...prevData,
      rating,
    }));
    // Clear the rating error when the user selects a rating
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      rating: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.feedback.trim()) {
      errors.feedback = 'Feedback is required';
    }
    if (formData.rating === null) {
      errors.rating = 'Rating is required';
    }

    // If there are validation errors, set them in state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Perform actions with the feedback data, such as sending to a server
    console.log('Form Data:', formData);

    // Optionally, reset the form state
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: null,
    });
    setFormErrors({
      name: '',
      email: '',
      feedback: '',
      rating: '',
    });
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.name}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.feedback}</span>
        </div>

        <div className="form-group">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((rating) => (
            <label key={rating}>
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={formData.rating === rating}
                onChange={() => handleRatingChange(rating)}
              />
              {rating}
            </label>
          ))}
          <span className="error">{formErrors.rating}</span>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedbackform;
