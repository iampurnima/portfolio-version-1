
import React from "react";
import '../css/Service.css';

function Services() {
    return(
        <div className="services">
            <h2>Services I offer</h2>
        
            <p>Explore the various services I provide to help you build and enhance your digital presence.</p>
            
            <div className="serviceCard">
                <h3>Web development</h3>
                <p>Building responsive and interactive web applications using HTML, CSS, and JavaScript, with a focus on user experience.</p>
            </div>
            <div className="serviceCard">
                <h3>Full Stack Development</h3>
                <p>Handling both frontend and backend development tasks, ensuring seamless integration and performance.</p>
            </div>

  

        </div>
    );
    
}

export default Services;