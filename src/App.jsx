// App.js

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import useCursor from './hooks/useCursor'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import QuoteSection from './components/QuoteSection'
import Sectors from './components/Sectors'
import Regional from './components/Regional'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import BlogPost from './components/BlogPost'
import ContactPage from './components/ContactPage'
import RegionsPage from './components/RegionsPage'
import PrivacyPage from './components/PrivacyPage'
import DisclaimerPage from './components/DisclaimerPage'
import RegionPage from './components/RegionPage'
import CapAcademy from './components/CapAcademy'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  
  return null
}

// Main App Content with Router
function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Initialize cursor
  useCursor(true)

  // Navigation function
  const navigateTo = (page, index) => {
    console.log('Navigating to:', page)
    let path = '/'
    
    switch(page) {
      case 'home':
        path = '/'
        break
      case 'about':
        path = '/about'
        break
      case 'academy':
        path = '/academy'
        break
      case 'blog':
        path = '/insights'
        break
      case 'blogpost':
        path = `/insights/${index}`
        break
      case 'contact':
        path = '/contact'
        break
      case 'regions':
        path = '/regions'
        break
      case 'privacy':
        path = '/privacy'
        break
      case 'disclaimer':
        path = '/disclaimer'
        break
      case 'kerala':
        path = '/kerala'
        break
      case 'karnataka':
        path = '/karnataka'
        break
      case 'maharashtra':
        path = '/maharashtra'
        break
      case 'tamilnadu':
        path = '/tamilnadu'
        break
      case 'punjab':
        path = '/punjab'
        break
      case 'delhi':
        path = '/delhi-ncr'
        break
      case 'mp':
        path = '/madhyapradesh'
        break
      case 'ap':
        path = '/andhrapradesh'
        break
      case 'odisha':
        path = '/odisha'
        break
      default:
        path = '/'
    }
    
    navigate(path)
  }

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} currentPage={location.pathname} />
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero navigateTo={navigateTo} />
              <Ticker />
              <WhatWeDo navigateTo={navigateTo} />
              <HowItWorks />
              <QuoteSection />
              <Sectors />
              <Regional navigateTo={navigateTo} />
              <Testimonials />
              <ContactSection navigateTo={navigateTo} />
            </>
          } />
          
          {/* Static Pages */}
          <Route path="/about" element={<AboutPage navigateTo={navigateTo} />} />
          <Route path="/academy" element={<CapAcademy navigateTo={navigateTo} />} />
          <Route path="/contact" element={<ContactPage navigateTo={navigateTo} />} />
          <Route path="/regions" element={<RegionsPage navigateTo={navigateTo} />} />
          <Route path="/privacy" element={<PrivacyPage navigateTo={navigateTo} />} />
          <Route path="/disclaimer" element={<DisclaimerPage navigateTo={navigateTo} />} />
          
          {/* Blog Routes */}
          <Route path="/insights" element={<BlogPage navigateTo={navigateTo} />} />
          <Route path="/insights/:id" element={<BlogPost navigateTo={navigateTo} />} />
          
          {/* Region Routes */}
          <Route path="/kerala" element={<RegionPage regionId="kerala" navigateTo={navigateTo} />} />
          <Route path="/karnataka" element={<RegionPage regionId="karnataka" navigateTo={navigateTo} />} />
          <Route path="/maharashtra" element={<RegionPage regionId="maharashtra" navigateTo={navigateTo} />} />
          <Route path="/tamilnadu" element={<RegionPage regionId="tamilnadu" navigateTo={navigateTo} />} />
          <Route path="/punjab" element={<RegionPage regionId="punjab" navigateTo={navigateTo} />} />
          <Route path="/delhi-ncr" element={<RegionPage regionId="delhi" navigateTo={navigateTo} />} />
          <Route path="/madhyapradesh" element={<RegionPage regionId="mp" navigateTo={navigateTo} />} />
          <Route path="/andhrapradesh" element={<RegionPage regionId="ap" navigateTo={navigateTo} />} />
          <Route path="/odisha" element={<RegionPage regionId="odisha" navigateTo={navigateTo} />} />
          
          {/* 404 - Catch all */}
          <Route path="*" element={
            <div style={{ 
              padding: '120px 60px', 
              textAlign: 'center', 
              minHeight: '60vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h1 style={{ fontSize: '4rem', color: 'var(--gold)', marginBottom: '20px' }}>404</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--white-dim)' }}>Page not found</p>
              <button 
                onClick={() => navigateTo('home')}
                style={{
                  marginTop: '30px',
                  padding: '12px 30px',
                  background: 'var(--gold)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#000',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Go Home
              </button>
            </div>
          } />
        </Routes>
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App