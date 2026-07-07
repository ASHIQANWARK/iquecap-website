// components/ContactSection.js

import React, { useState } from 'react'
import './ContactSection.css'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhUuxQyo_RPMhh8ZcZ7d485NEzEHK-b6qR52V4hPvv_q3_gqPQ2j2XXhKfiN7GWPRv/exec';

const ContactSection = ({ navigateTo, page = 'Home', compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '', show: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    
    // Get form data
    const formData = new FormData(form)
    const rawData = {}
    for (let [key, value] of formData.entries()) {
      rawData[key] = value
    }
    
    // Validate form data
    if (!rawData.fullName || rawData.fullName.length < 2) {
      alert('Please enter your full name')
      return
    }
    if (!rawData.phone || rawData.phone.length < 10) {
      alert('Please enter a valid phone number')
      return
    }
    if (!rawData.email || !rawData.email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }
    if (!rawData.state || rawData.state.length < 2) {
      alert('Please enter your state/region')
      return
    }
    if (!rawData.investmentRange || rawData.investmentRange.length < 2) {
      alert('Please enter your investment amount')
      return
    }
    if (!rawData.message || rawData.message.length < 10) {
      alert('Please enter a message (minimum 10 characters)')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '', show: false })

    try {
      // Prepare data for submission
      const submissionData = {
        ...rawData,
        page: page,
        region: rawData.state,
        formType: 'General'
      }
      
      // Send to Google Sheets
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      setSubmitStatus({
        success: true,
        message: 'Thank you! We\'ll be in touch soon.',
        show: true
      })

      // Money burst effect
      moneyBurst(form)
      form.reset()

    } catch (error) {
      console.error('❌ Form submission error:', error)
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        show: true
      })
    } finally {
      setIsSubmitting(false)
      
      // Auto-hide status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }))
      }, 5000)
    }
  }

  // Money burst effect
  const moneyBurst = (form) => {
    const symbols = ['💰', '💸', '🤑', '💵', '💴', '💶', '✦', '◆', '▲']
    const colors = ['#00E676', '#00B894', '#C9A84C', '#FFD700', '#00C466', '#ffffff']
    const btn = form.querySelector('.form-submit')
    if (!btn) return
    
    const rect = btn.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div')
      const sym = symbols[Math.floor(Math.random() * symbols.length)]
      const col = colors[Math.floor(Math.random() * colors.length)]
      const size = 14 + Math.random() * 26
      const angle = Math.random() * 360
      const dist = 80 + Math.random() * 240
      const dx = Math.cos(angle * Math.PI / 180) * dist
      const dy = Math.sin(angle * Math.PI / 180) * dist - (60 + Math.random() * 140)
      const dur = 800 + Math.random() * 700
      const delay = Math.random() * 180
      const rot = (Math.random() - 0.5) * 720

      el.textContent = sym
      el.style.cssText = `
        position: fixed;
        left: ${cx}px; top: ${cy}px;
        font-size: ${size}px;
        color: ${col};
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 0 5px ${col});
        user-select: none;
        will-change: transform, opacity;
      `
      document.body.appendChild(el)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = `transform ${dur}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity ${dur*0.35}ms ease ${delay + dur*0.65}ms`
          el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rot}deg)`
          el.style.opacity = '0'
        })
      })
      setTimeout(() => { if (el.parentNode) el.remove() }, dur + delay + 120)
    }

    // Green radial flash
    const flash = document.createElement('div')
    flash.style.cssText = `
      position: fixed; inset: 0; z-index: 99998; pointer-events: none;
      background: radial-gradient(ellipse 70% 50% at 50% 65%, rgba(0,230,118,0.15) 0%, transparent 70%);
      opacity: 1; transition: opacity 0.7s ease;
    `
    document.body.appendChild(flash)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { flash.style.opacity = '0' })
    })
    setTimeout(() => { if (flash.parentNode) flash.remove() }, 800)
  }

  return (
    <section className={`contact-section ${compact ? 'compact' : ''}`} id="homeContact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="section-label">Get In Touch</div>
          <h2>Ready to Open<br /><em>Your Doors?</em></h2>
          <p>Whether you're exploring your first startup investment or expanding an existing portfolio, iQue CAP has the network, the insight, and the reach to take you further.</p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">✉</div>
              <span>support@iquecap.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <span>Presence Across India</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Your full name" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+91 XXXXX XXXXX" 
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                required 
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="city" 
                placeholder="Your city" 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Investment Amount (₹) *</label>
              <input 
                type="text" 
                name="investmentRange" 
                placeholder="e.g., ₹1,00,000" 
                required 
              />
              <small style={{ color: '#888', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                Minimum ₹1 Lakh
              </small>
            </div>
            <div className="form-group">
              <label>State/Region *</label>
              <input 
                type="text" 
                name="state" 
                placeholder="e.g., Kerala, Karnataka, Madhya Pradesh, Delhi" 
                required 
              />
              <small style={{ color: '#888', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                All states across India
              </small>
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea 
              name="message" 
              rows={compact ? 3 : 4} 
              placeholder="Tell us about your investment goals..."
              required 
            />
          </div>

          {submitStatus.show && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}

          <button 
            type="submit" 
            className="form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Begin My Journey →'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection