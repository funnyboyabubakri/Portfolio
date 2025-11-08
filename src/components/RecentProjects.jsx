import React, { useState, useEffect } from 'react';
import "./../styles/RecentProjects.css"; 

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

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

  return (
    <div id='projects' className="recent-projects">
      <h2>Recent Projects</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="projects-carousel">
          <div className="carousel-track">
            {projects.length === 0 ? (
              <p>No projects available.</p>
            ) : (
              projects.concat(projects).map((project, index) => (
                <div key={`${project._id}-${index}`} className="project-card">
                  <img src={project.profilePicture} alt={project.projectTitle} />
                  <div className="project-info">
                    <h3>{project.projectTitle}</h3>
                    <p>{project.projectDescription}</p>
                    <button onClick={() => project.profileLink && window.open(project.profileLink, '_blank')} className="view-project-btn">
                      View Project
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
