// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Epsilon Program</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#join">Join Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>Welcome to the Epsilon Program</h2>
        <p>Where Truth is an illusion and the illusion is Truth</p>
        <button>Learn More</button>
      </section>
      <section id="about" className="content-section">
        <h3>About the Epsilon Program</h3>
        <p>The Epsilon Program seeks to enlighten and open the minds of its followers. Join us on this journey.</p>
      </section>
      <section id="philosophy" className="content-section">
        <h3>Our Philosophy</h3>
        <p>Understanding the paradigms of truth and illusion is key to achieving spiritual awareness.</p>
      </section>
      <section id="join" className="content-section">
        <h3>Join the Epsilon Program</h3>
        <p>Become a part of our community and discover the path to enlightenment.</p>
        <button>Join Now</button>
      </section>
      <section id="contact" className="content-section">
        <h3>Contact Us</h3>
        <p>For more information, reach out to us through our contact page.</p>
        <button>Contact</button>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Epsilon Program. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
