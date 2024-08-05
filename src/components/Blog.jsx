import React from 'react';
import '../css/Blog.css'; // Import your CSS file for styling

const Blog = () => {
  // Sample data for quotes and projects
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
  ];

  const projects = [
    {
      title: 'Little Lemon Restaurant',
      description: 'The Little Lemon Restaurant app is a full-stack project. I plan to add more features in the future.',
      link: 'https://github.com/iampurnima/Final-Capstone-Project.git',
    },
    {
      title: 'Kids GO Market Place',
      description: 'The Kidsgo market place is a complete frontend project.I have planned to add backend and more feature in the future.',
      link: 'http://localhost:3001/',
    },
    {
        title: 'Portfolio',
        description: 'My portfolio showcases a range of projects that highlight my skills in both frontend and backend development.',
        link: 'http://localhost:3001/',
    },
  ];

  return (
    <div className="blog-page">
        <h1 className='blogmy'>My Blogs</h1>
      <section className="quotes-section">
        <h2 className='quote'>Motivational Quotes</h2>
        <div className="quotes-list">
          {quotes.map((quote, index) => (
            <blockquote key={index} className="quote">
              <p>"{quote}"</p>
            </blockquote>
          ))}
        </div>
      </section>

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

      <section className="media-section">
        <h2>Nature Photography</h2>
        <div className="media-gallery">
          <img src="/images/Screen.png" alt="Nature Photo 1" className='vaktapur' />
          <img src="path/to/photo2.jpg" alt="Nature Photo 2" />
          <video controls>
            <source src="https://www.instagram.com/reel/C4rXz3kPNX4/?igsh=M2NzeXkxZGcweDQz" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Blog;
