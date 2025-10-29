import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Admin-formpage.css';

const AdminFormpage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    // Hardcoded credentials
    const correctEmail = 'adebayoabubakriolakayode12345@gmail.com';
    const correctName = 'Abubakri';
    const correctPassword = '#1Abubakri2$';

    if (
      formData.email.trim().toLowerCase() === correctEmail.toLowerCase() &&
      formData.name.trim() === correctName &&
      formData.password === correctPassword
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-form">
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AdminFormpage;
