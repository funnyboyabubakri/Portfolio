import React, { useState } from 'react';
import "./../styles/Mailer.css"; 

const Mailer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setResponseMessage(result.message || 'Failed to send message');
      }
    } catch (error) {
      setResponseMessage('Error sending message');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='mailer' className="mailer-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="mailer-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {responseMessage && (
        <p className={`response-message ${responseMessage.includes('successfully') ? 'success' : 'error'}`}>
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default Mailer;
