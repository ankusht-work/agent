
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header>
        <h1>Our Website</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2>Welcome to Our Website</h2>
          <p>Discover amazing things with us!</p>
          <button>Get Started</button>
        </section>

        {/* About Section */}
        <section id="about">
          <h2>About Us</h2>
          <p>We are a company dedicated to providing innovative solutions.</p>
        </section>

        {/* Features Section */}
        <section id="features">
          <h2>Our Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
