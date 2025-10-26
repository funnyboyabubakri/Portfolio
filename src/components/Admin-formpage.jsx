import React, { useState } from 'react';
import '../styles/Admin-formpage.css';

const AdminFormpage = () => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = new FormData();
    data.append('projectTitle', formData.projectTitle);
    data.append('projectDescription', formData.projectDescription);
    data.append('projectLink', formData.projectLink);
    data.append('file', formData.image);

    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API_BASE}/upload-project`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Project uploaded successfully!');
        setFormData({
          projectTitle: '',
          projectDescription: '',
          projectLink: '',
          image: null,
        });
      } else {
        setMessage(result.message || 'Upload failed');
      }
    } catch (error) {
      setMessage('Error uploading project');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="projectTitle">Project Title</label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectLink">Project Link</label>
          <input
            type="url"
            id="projectLink"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Project Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Project'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AdminFormpage;
