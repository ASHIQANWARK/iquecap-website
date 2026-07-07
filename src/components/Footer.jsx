import React from 'react'
import './Footer.css'
import logo from '../assets/iCAPL1.png' // Import logo from src/assets/logo1

const Footer = ({ navigateTo }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" onClick={() => navigateTo('home')}>
            <img 
              className="nav-logo-img" 
              src={logo} 
              alt="iQue CAP"
            />
          </div>
          <p>Connecting India's boldest investors with its most promising startups. Across sectors. Across states. At scale.</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <a onClick={() => navigateTo('home')}>Home</a>
          <a onClick={() => navigateTo('about')}>About</a>
          <a onClick={() => navigateTo('blog')}>Insights</a>
          <a onClick={() => navigateTo('contact')}>Contact</a>
        </div>
        <div className="footer-col">
          <h4>Regions</h4>
          <a onClick={() => navigateTo('kerala')}>Kerala</a>
          <a onClick={() => navigateTo('karnataka')}>Karnataka</a>
          <a onClick={() => navigateTo('maharashtra')}>Maharashtra</a>
          <a onClick={() => navigateTo('tamilnadu')}>Tamil Nadu</a>
          <a onClick={() => navigateTo('punjab')}>Punjab</a>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <a onClick={() => navigateTo('delhi')}>Delhi NCR</a>
          <a onClick={() => navigateTo('mp')}>Madhya Pradesh</a>
          <a onClick={() => navigateTo('ap')}>Andhra Pradesh</a>
          <a onClick={() => navigateTo('odisha')}>Odisha</a>
          <a onClick={() => navigateTo('regions')}>All Regions</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 iQue CAP. All rights reserved.</span>
        <span>
          <a onClick={() => navigateTo('privacy')}>Privacy Policy</a> · <a onClick={() => navigateTo('disclaimer')}>Disclaimer</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer