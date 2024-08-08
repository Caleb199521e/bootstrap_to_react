import React from 'react'
import './about.css';
function About() {
  return (
    <div><div className="about-page">
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to Decorzone, where the art of interior design meets the heart of personalized living spaces. We are more than just a decor store; we are your partners in transforming houses into homes and spaces into expressions of individuality.
        </p>
      </div>
      <div className="about-journey">
        <h2>Our Journey</h2>
        <p>
          Established in 2018 in response to the décor needs of residents and professionals in the western part of Accra and beyond. We partner with top world-class brands to provide the widest selection of luxurious yet affordable decorative pieces. Decorzone has been on a mission to redefine the way people perceive and experience interior decor. Our store was born out of a passion for creating spaces that resonate with personality and style.
        </p>
      </div>
    </section>
    <section className="mission-vision-section">
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          Through our highly motivated staff and a wide range of unique products, we seek to be your go-to decor company in enhancing your space and providing solutions to your decor needs.
        </p>
      </div>
      <div className="vision">
        <h2>Our Vision</h2>
        <ul>
          <li>To build a strong, highly motivated, and healthy working team</li>
          <li>Consistent brand experience across online and offline</li>
          <li>To build a team of interior decorators to be in charge of home makeovers</li>
          <li>To penetrate the various markets in Sub-Saharan Africa by 2030</li>
          <li>To become a household name in Ghana in the next 5 years</li>
        </ul>
      </div>
    </section>
    <section className="features-section">
      <div className="feature">
        <i className="fas fa-shopping-bag"></i>
        <h3>Shop Online</h3>
        <p>
          View and manage your carefully curated selection of premium home decors. Your cart awaits, filled with the potential to transform your living spaces.
        </p>
      </div>
      <div className="feature">
        <i className="fas fa-dollar-sign"></i>
        <h3>Smart Spending</h3>
        <p>
          Enjoy competitive prices without compromising on quality.
        </p>
      </div>
      <div className="feature">
        <i className="fas fa-truck"></i>
        <h3>Quick Delivery</h3>
        <p>
          Count on us to bring your chosen décor items to your doorstep promptly.
        </p>
      </div>
      <div className="feature">
        <i className="fas fa-shield-alt"></i>
        <h3>Secure Transactions</h3>
        <p>
          Your transactions are safeguarded, ensuring a seamless and trustworthy shopping experience.
        </p>
      </div>
    </section>
  </div>
  </div>
  )
}

export default About