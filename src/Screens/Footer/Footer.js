import React from 'react'
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import logo from '../../images/logo.png'
const Footer = () => {
  return (
  

  
   <footer>
    <div className='container-footer'>

   
    <div className='footer'>

   <div className="footer-section1">
      <h3>Vendor Online</h3>
        <p>Welcome to Vendor Online, your go-to destination for a curated selection of local treasures. Launched in 2024, we are passionate about showcasing the unique craftsmanship and flavors of your community. </p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-section qr-code-section">
        <h3>Scan QR Code</h3>
        <QRCode value="https://www.yourwebsite.com" size={120} />
      </div>
     
      </div>
      </div>
      <div className="footer-section rights-section">
        <p className="rights-text">© 2024 All Rights Reserved</p>
      </div>
    </footer>
   
   
  )
}

export default Footer