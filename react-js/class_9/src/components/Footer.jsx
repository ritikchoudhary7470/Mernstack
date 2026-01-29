import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="dairy-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>🥛 DairyFresh</h2>
          <p>
            Fresh milk & dairy products delivered to your doorstep every
            morning.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Subscription</li>
            <li>My Orders</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@dairyfresh.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 DairyFresh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
