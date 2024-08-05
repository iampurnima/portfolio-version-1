import React from 'react';
import '../css/Skill.css'; // Import your CSS file for styling

const Skill = () => {
  // Sample skills data
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Frameworks', items: ['Django', 'React','Flask'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VSCode'] },
  ];

  return (
    <div className="skill-section">
      <h2>Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3>{skillCategory.category}</h3>
          <ul>
            {skillCategory.items.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skill;
