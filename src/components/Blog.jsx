import React from 'react';
import '../css/Blog.css'; // Import your CSS file for styling

const Blog = () => {
  // Sample data for quotes and projects
  const projects = [
    {
      title: 'Little Lemon Restaurant',
      description: 'The Little Lemon Restaurant app is a full-stack project. I plan to add more features in the future.',
      link: 'https://github.com/iampurnima/projectAPI.git',
    },
    {
      title: 'Capstone APIs Project',
      description: 'A comprehensive full-stack project showcasing advanced features and functionality.',
      link: 'https://github.com/iampurnima/Final-Capstone-Project.git',
    },
    {
      title: 'Kids GO Market Place',
      description: 'A complete frontend project with future plans for backend integration and additional features.',
      link: 'http://localhost:3001/',
    },
    {
      title: 'Portfolio',
      description: 'A showcase of my skills and projects in frontend and backend development.',
      link: 'http://localhost:3001/',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className='blog-header'>Projects</h1>

      <section className="projects-section">
        <h2>Web Development Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
