import React from 'react'
import '../css/About.css';
import myPhoto from "../assets/images/shot.png";
import logo from "../assets/images/fullstack-image.png";
import resume from "../assets/resume/resume.pdf";

function About() {
  return (
    <div className='aboutContainer'>
      <div>
        <img className='myPhoto' src={myPhoto}/>
        <div className='heroSection'>
      <h2 className='name'>Purnima Sharma</h2>
      <h2 className='profession' >Full-Stack web devloper</h2>
      
      </div>

        </div>
    
    <div className='about-page'>
      <h3>About me</h3>
      <p> Hello! I’m Purnima Sharma, a software engineer with a background in biology 
        and a recent full-stack development certification. I’m passionate about
         creating innovative web applications and solving complex problems through code. </p>
         <p>I’d love to connect! Feel free to explore my portfolio and reach out if you 
         have any questions or collaboration ideas.</p>
      <p>
      <div ><img className='fullstack' src={logo}/></div>
      You can view and download my resume below
      </p>
      <div className='resume-section'>
        <a
         href={resume} 
         target="_blank" 
         rel="noopener noreferrer">View Resume</a>
        <a
         href={resume} 
          download={resume}>Download Resume</a>

      </div>
    </div>
    
    </div>
    
    
  );
}

export default About;