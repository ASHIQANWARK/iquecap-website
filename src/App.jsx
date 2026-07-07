// App.js

import React, { useState } from 'react'
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

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [blogIndex, setBlogIndex] = useState(0)

  // Initialize cursor with proper error handling
  useCursor(true)

  const navigateTo = (page, index) => {
    console.log('Navigating to:', page)
    setCurrentPage(page)
    if (index !== undefined) setBlogIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
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
        )
      case 'about':
        return <AboutPage navigateTo={navigateTo} />
      case 'academy':
        return <CapAcademy navigateTo={navigateTo} />
      case 'blog':
        return <BlogPage navigateTo={navigateTo} />
      case 'blogpost':
        return <BlogPost index={blogIndex} navigateTo={navigateTo} />
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />
      case 'regions':
        return <RegionsPage navigateTo={navigateTo} />
      case 'privacy':
        return <PrivacyPage navigateTo={navigateTo} />
      case 'disclaimer':
        return <DisclaimerPage navigateTo={navigateTo} />
      case 'kerala':
      case 'karnataka':
      case 'maharashtra':
      case 'tamilnadu':
      case 'punjab':
      case 'delhi':
      case 'mp':
      case 'ap':
      case 'odisha':
        return <RegionPage regionId={currentPage} navigateTo={navigateTo} />
      default:
        return <Hero navigateTo={navigateTo} />
    }
  }

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App