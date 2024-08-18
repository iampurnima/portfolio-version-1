import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import About from './components/About';
import Skill from './components/Skills';
import Blog from './components/Blog';
import Services from './components/Services'
import ContactPage from './components/Contact';





function App() {
  return (
    <Router>
      <div className='headerContainer'>
        <nav>
          <div className='menu-toggle' id='mobile-menu'>
          <span className='bar'></span> 
          </div>
          <ul>
            <li>
              <ScrollLink 
                to="aboutClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="servicesClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="skillsClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                Skills
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink 
                to="projectsClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                Projects
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink 
                to="contactClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="blogClass" 
                smooth={true} 
                duration={500}
                offset={-70} // Adjust based on header height
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <Element name="aboutClass" className="aboutClass">
          <About />
        </Element>
        <Element name="servicesClass" className="headerClass">
          <Services/>          
        </Element>
        <Element name="contactClass" className="contactClass">
          <ContactPage/>          
        </Element>
        <Element name="skillsClass" className="skillsClass">
          <Skill/>          
        </Element>
        <Element name="blogClass" className="blogClass">
          <Blog/>      
        </Element>
      </div>
    </Router>
  );
}

export default App;
