import React, { useState } from 'react';
import '../css/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    setFormStatus('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to discuss a project, feel free to reach out using the contact form below or directly via email.</p>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:purnimasharma0924@gmail.com">purnimasharma0924@gmail.com</a></p>
        <p>Phone: +977 9864421904</p>
        <p>Address: Kathmandu, Nepal</p>
      </div>
    </div>
  );
};

export default ContactPage;
