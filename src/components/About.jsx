import React from 'react'
import '../css/About.css';

function About() {
  return (
    <div className='aboutContainer'>
      <div>
        <img className='myPhoto' src='/images/shot.png'/>
        <div className='heroSection'>
      <h2 >Purnima Sharma</h2>
      <h2 >Full-Stack web devloper</h2>
      
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
      <div ><img className='fullstack' src='/images/fullstack-image.png'/></div>
      You can view and download my resume below
      </p>
      <div className='resume-section'>
        <a
         href="/resume/resume_purnima.pdf" 
         target="_blank" 
         rel="noopener noreferrer">View Resume</a>
        <a
         href="/resume/resume_purnima.pdf" 
          download="resume_purnima.pdf">Download Resume</a>

      </div>
    </div>
    
    </div>
    
    
  );
}

export default About;