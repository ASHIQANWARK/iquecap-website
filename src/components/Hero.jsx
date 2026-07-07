import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = ({ navigateTo }) => {
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [wordFade, setWordFade] = useState(false)

  const words = ['Startup.', 'Investment.', 'Moment.']

  useEffect(() => {
    const timer1 = setTimeout(() => setDoorsOpen(true), 400)
    const timer2 = setTimeout(() => setContentVisible(true), 1800)
    const timer3 = setTimeout(() => setScrollHintVisible(true), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordFade(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setWordFade(false)
      }, 500)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const handleNavigation = (page, e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    console.log('Navigating to:', page)
    if (navigateTo) {
      navigateTo(page)
    }
  }

  return (
    <section className="hero" id="heroSection">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className={`door-wrap ${doorsOpen ? 'doors-open' : ''}`}>
        <div className="door-l">
          <div className="door-inner-l"></div>
          <div className="door-handle"></div>
        </div>
        <div className="door-r">
          <div className="door-inner-r"></div>
          <div className="door-handle"></div>
        </div>
      </div>

      <div className={`door-light-burst ${doorsOpen ? 'doors-open' : ''}`}></div>

      <div className={`hero-content ${contentVisible ? 'visible' : ''}`}>
        <div className="hero-eyebrow">India's Investment Ecosystem</div>
        <h1 className="hero-headline">
          The Right<br />
          <em className={wordFade ? 'fade-out' : 'fade-in'}>{words[wordIndex]}</em>
        </h1>
        <p className="hero-sub">iQue CAP connects visionary investors with India's most promising startups — across sectors, across states, with precision.</p>
        <div className="hero-actions">
          <button 
            className="btn-primary" 
            onClick={(e) => handleNavigation('contact', e)}
            type="button"
          >
            Start Your Journey
          </button>
          <button 
            className="btn-ghost" 
            onClick={(e) => handleNavigation('about', e)}
            type="button"
          >
            Discover More
          </button>
        </div>
      </div>

      <div className={`scroll-hint ${scrollHintVisible ? 'visible' : ''}`}>
        <div className="scroll-line"></div>
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  )
}

export default Hero