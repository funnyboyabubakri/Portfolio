import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./../styles/Adminpage.css";

const Adminpage = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    image: null,
  });
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin-form');
    } else {
      fetchProjects();
    }
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/get-recent-projects`);
      const result = await response.json();
      if (response.ok) {
        setProjects(result.projects);
      } else {
        setError(result.message || 'Failed to fetch projects');
      }
    } catch (err) {
      setError('Error fetching projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
    setUploadLoading(true);
    setUploadMessage('');

    const data = new FormData();
    data.append('projectTitle', formData.projectTitle);
    data.append('projectDescription', formData.projectDescription);
    data.append('projectLink', formData.projectLink);
    data.append('image', formData.image);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/upload-project`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setUploadMessage('Project uploaded successfully!');
        setFormData({
          projectTitle: '',
          projectDescription: '',
          projectLink: '',
          image: null,
        });
        fetchProjects(); 
      } else {
        setUploadMessage(result.message || 'Upload failed');
      }
    } catch (error) {
      setUploadMessage('Error uploading project');
      console.error(error);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/delete-project/${projectId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchProjects(); 
      } else {
        const result = await response.json();
        alert(result.message || 'Delete failed');
      }
    } catch (error) {
      alert('Error deleting project');
      console.error(error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="upload-section">
        <h2>Upload New Project</h2>
        <form onSubmit={handleSubmit} className="upload-form">
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
          <button type="submit" disabled={uploadLoading}>
            {uploadLoading ? 'Uploading...' : 'Upload Project'}
          </button>
        </form>
        {uploadMessage && (
          <p className={`upload-message ${uploadMessage.includes('successfully') ? 'success' : 'error'}`}>
            {uploadMessage}
          </p>
        )}
      </div>
      <div className="projects-section">
        <h2>Recent Projects</h2>
        {loading ? (
          <p>Loading projects</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="projects-list">
            {projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              projects.map((project) => (
                <div key={project._id} className="project-item">
                  <img src={project.profilePicture} alt={project.projectTitle} />
                  <div className="project-details">
                    <h3>{project.projectTitle}</h3>
                    <p>{project.projectDescription}</p>
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <button className="delete" onClick={() => handleDelete(project._id)} >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminpage;
