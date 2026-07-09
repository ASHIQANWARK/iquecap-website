// App.js

import React, { useEffect, useState } from 'react'
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

// Import global components
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

// Scroll to top on route change
const ScrollToTopOnRouteChange = () => {
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
  const [showBlogPost, setShowBlogPost] = useState(false)
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0)
  
  // Initialize cursor
  useCursor(true)

  // Navigation function with region mapping
  const navigateTo = (page, index) => {
    console.log('Navigating to:', page)
    let path = '/'
    
    switch(page) {
      case 'home':
        path = '/'
        setShowBlogPost(false)
        break
      case 'about':
        path = '/about'
        setShowBlogPost(false)
        break
      case 'academy':
        path = '/academy'
        setShowBlogPost(false)
        break
      case 'blog':
        path = '/insights'
        setShowBlogPost(false)
        break
      case 'blogpost':
        path = '/insights'
        setSelectedBlogIndex(index || 0)
        setShowBlogPost(true)
        break
      case 'contact':
        path = '/contact'
        setShowBlogPost(false)
        break
      case 'regions':
        path = '/regions'
        setShowBlogPost(false)
        break
      case 'privacy':
        path = '/privacy'
        setShowBlogPost(false)
        break
      case 'disclaimer':
        path = '/disclaimer'
        setShowBlogPost(false)
        break
      // Region mappings - now using region1, region2, etc.
      case 'kerala':
        path = '/region1'
        setShowBlogPost(false)
        break
      case 'karnataka':
        path = '/region2'
        setShowBlogPost(false)
        break
      case 'maharashtra':
        path = '/region3'
        setShowBlogPost(false)
        break
      case 'tamilnadu':
        path = '/region4'
        setShowBlogPost(false)
        break
      case 'punjab':
        path = '/region5'
        setShowBlogPost(false)
        break
      case 'delhi':
        path = '/region6'
        setShowBlogPost(false)
        break
      case 'mp':
        path = '/region7'
        setShowBlogPost(false)
        break
      case 'ap':
        path = '/region8'
        setShowBlogPost(false)
        break
      case 'odisha':
        path = '/region9'
        setShowBlogPost(false)
        break
      default:
        path = '/'
        setShowBlogPost(false)
    }
    
    navigate(path)
  }

  // Handle blog post click from BlogPage
  const handleBlogPostClick = (index) => {
    setSelectedBlogIndex(index)
    setShowBlogPost(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle back to blog list
  const handleBackToBlogs = () => {
    setShowBlogPost(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} currentPage={location.pathname} />
      <main className="main-content">
        <ScrollToTopOnRouteChange />
        
        {/* Global Components - Available on every page */}
        <WhatsAppButton />
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
          
          {/* Blog Routes - Insights */}
          <Route path="/insights" element={
            showBlogPost ? (
              <BlogPost 
                index={selectedBlogIndex} 
                navigateTo={navigateTo} 
                onBack={handleBackToBlogs}
              />
            ) : (
              <BlogPage 
                navigateTo={navigateTo} 
                onPostClick={handleBlogPostClick}
                showBlogPost={showBlogPost}
              />
            )
          } />
          
          {/* Region Routes - Using region1, region2, etc. */}
          <Route path="/region1" element={<RegionPage regionId="kerala" navigateTo={navigateTo} />} />
          <Route path="/region2" element={<RegionPage regionId="karnataka" navigateTo={navigateTo} />} />
          <Route path="/region3" element={<RegionPage regionId="maharashtra" navigateTo={navigateTo} />} />
          <Route path="/region4" element={<RegionPage regionId="tamilnadu" navigateTo={navigateTo} />} />
          <Route path="/region5" element={<RegionPage regionId="punjab" navigateTo={navigateTo} />} />
          <Route path="/region6" element={<RegionPage regionId="delhi" navigateTo={navigateTo} />} />
          <Route path="/region7" element={<RegionPage regionId="mp" navigateTo={navigateTo} />} />
          <Route path="/region8" element={<RegionPage regionId="ap" navigateTo={navigateTo} />} />
          <Route path="/region9" element={<RegionPage regionId="odisha" navigateTo={navigateTo} />} />
          
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
              <h1 style={{ fontSize: '4rem', color: '#C9A84C', marginBottom: '20px' }}>404</h1>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>Page not found</p>
              <button 
                onClick={() => navigateTo('home')}
                style={{
                  marginTop: '30px',
                  padding: '12px 30px',
                  background: '#C9A84C',
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