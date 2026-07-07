import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/iCAPL1.png'

const Navbar = ({ navigateTo, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Cap Academy', page: 'academy' },  // Added Cap Academy
    { label: 'Insights', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ]

  const regionLinks = [
    { label: 'Kerala', id: 'kerala' },
    { label: 'Karnataka', id: 'karnataka' },
    { label: 'Maharashtra', id: 'maharashtra' },
    { label: 'Tamil Nadu', id: 'tamilnadu' },
    { label: 'Punjab', id: 'punjab' },
    { label: 'Delhi NCR', id: 'delhi' },
    { label: 'Madhya Pradesh', id: 'mp' },
    { label: 'Andhra Pradesh', id: 'ap' },
    { label: 'Odisha', id: 'odisha' }
  ]

  const handleNavClick = (page) => {
    if (navigateTo) {
      navigateTo(page)
    }
    if (isMobile) setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => handleNavClick('home')}>
        <img 
          className="nav-logo-img" 
          src={logo} 
          alt="iQue CAP" 
        />
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.page}>
            <a onClick={() => handleNavClick(link.page)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-dropdown">
          <a onClick={() => handleNavClick('regions')}>
            Regions ▾
          </a>
          <div className="dropdown-menu">
            {regionLinks.map((region) => (
              <a 
                key={region.id} 
                onClick={() => handleNavClick(region.id)}
              >
                {region.label}
              </a>
            ))}
          </div>
        </li>
      </ul>

      <button className="nav-cta" onClick={() => handleNavClick('contact')}>
        Begin Journey
      </button>
      <button className="nav-hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}

export default Navbar