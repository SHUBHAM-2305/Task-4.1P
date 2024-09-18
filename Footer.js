import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
        <input type="email" placeholder="Enter your email" className="input" />
        <button className="btn">Subscribe</button>
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </footer>
  );
};

export default Footer;
