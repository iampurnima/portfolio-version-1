import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-container">
      <h2>Explore My Work</h2>
      <div className="menu-items">
        <div className="menu-item">
          <h3>About</h3>
          <p>Learn more about who I am.</p>
        </div>
        <div className="menu-item">
          <h3>Skills</h3>
          <p>Check out the skills I have mastered.</p>
        </div>
        <div className="menu-item">
          <h3>Projects</h3>
          <p>Discover my completed and ongoing projects.</p>
        </div>
        <div className="menu-item">
          <h3>Contact</h3>
          <p>Get in touch with me.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
