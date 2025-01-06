import React, { useState } from "react";
import  "../styles/contact.css";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Submission failed.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div>
    <Navbar />    
    <div className="contact-page">
    <div className="contact-container">
      <div className="form-section">
      <h1>Get in touch</h1>
      <p>
      Paragraph text comes here. Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum dolor sit amet,
      consectetur elit.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
        <input className="name"
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <input className="contact"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <textarea className="contact"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        </div>
        <button type="submit" className="contact_button">Send Message</button>
        </div>
      </form>
      <p>{status}</p>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactForm;
