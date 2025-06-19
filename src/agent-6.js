```javascript
// About Page Component

import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page header */}
      <h1>About Us</h1>
      
      {/* Company description */}
      <section className="company-description">
        <h2>Our Company</h2>
        <p>
          We are a leading technology company focused on innovation and 
          creating products that improve people's lives.
        </p>
      </section>
      
      {/* Mission statement */}
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          To empower individuals and businesses through cutting-edge 
          technology solutions.
        </p>
      </section>
      
      {/* Team section */}
      <section className="team">
        <h2>Our Team</h2>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Mike Johnson - Head of Product</li>
        </ul>
      </section>
      
      {/* Contact information */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: info@ourcompany.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
      </section>
    </div>
  );
};

export default AboutPage;
```