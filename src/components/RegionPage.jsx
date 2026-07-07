// components/RegionPage.js

import React, { useEffect, useState } from 'react'
import './RegionPage.css'
import { R, REGIONAL_CONTACTS } from '../data/regionData'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhUuxQyo_RPMhh8ZcZ7d485NEzEHK-b6qR52V4hPvv_q3_gqPQ2j2XXhKfiN7GWPRv/exec';

const RegionPage = ({ regionId, navigateTo }) => {
  const data = R[regionId]
  const contact = REGIONAL_CONTACTS[regionId] || { phone: '08062987217' }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '', show: false })

  // Get region-specific placeholder text
  const getRegionPlaceholder = (regionName) => {
    const regionMap = {
      'Kerala': 'e.g., Kochi, Trivandrum, Kozhikode',
      'Karnataka': 'e.g., Bangalore, Mysore, Hubli',
      'Maharashtra': 'e.g., Mumbai, Pune, Nagpur',
      'Tamil Nadu': 'e.g., Chennai, Coimbatore, Madurai',
      'Punjab': 'e.g., Chandigarh, Amritsar, Ludhiana',
      'Delhi NCR': 'e.g., Delhi, Gurugram, Noida',
      'Madhya Pradesh': 'e.g., Bhopal, Indore, Jabalpur',
      'Andhra Pradesh': 'e.g., Visakhapatnam, Vijayawada, Tirupati',
      'Odisha': 'e.g., Bhubaneswar, Cuttack, Rourkela',
      'Rajasthan': 'e.g., Jaipur, Jodhpur, Udaipur',
      'Gujarat': 'e.g., Ahmedabad, Surat, Vadodara',
      'West Bengal': 'e.g., Kolkata, Siliguri, Durgapur',
      'Telangana': 'e.g., Hyderabad, Warangal, Nizamabad',
      'Uttar Pradesh': 'e.g., Lucknow, Kanpur, Varanasi',
      'Bihar': 'e.g., Patna, Gaya, Muzaffarpur'
    }
    return regionMap[regionName] || 'e.g., Your city in the region'
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [regionId])

  if (!data) {
    return <div style={{ padding: '120px 60px', textAlign: 'center', color: 'var(--white)' }}>Region not found</div>
  }

  // Form submission handler
  const handleRegionFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

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
    if (!rawData.city || rawData.city.length < 2) {
      alert('Please enter your city')
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
        page: 'Region Page',
        region: data.name,
        formType: 'Regional'
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
    <div className="region-page">
      {/* HERO */}
      <section className="region-hero">
        <div className="region-hero-bg"></div>
        <div className="region-hero-pattern"></div>
        <div className="region-hero-content">
          <div className="region-badge">
            {data.icon} iQue CAP · {data.name}
          </div>
          <h1 className="region-hero-title" dangerouslySetInnerHTML={{ __html: data.heroHeadline }} />
          <p className="region-tagline-big">"{data.tagline}"</p>
          <p className="region-hero-sub">{data.sub}</p>
          <div className="region-hero-actions">
            <a href={`tel:+${contact.phone}`} className="region-phone-btn">📞 Call Now</a>
            <button className="region-ghost-btn" onClick={() => document.getElementById('region-form').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch →
            </button>
          </div>
        </div>
      </section>

      {/* WHY THIS REGION */}
      <section className="region-why">
        <div className="region-why-grid">
          <div>
            <div className="section-label">Why {data.name}</div>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: data.whyTitle }} />
            <div className="gold-divider"></div>
            <p className="region-why-text">{data.whyBody}</p>
          </div>
          <div className="region-highlights">
            {data.highlights.map((h, i) => (
              <div key={i} className="region-highlight">
                <span className="region-highlight-icon">{h.icon}</span>
                <div>
                  <div className="region-highlight-title">{h.title}</div>
                  <div className="region-highlight-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="region-sectors">
        <div className="region-sectors-inner">
          <div className="section-label">Active Sectors</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', marginBottom: '32px' }}>
            Where We <em>Invest</em> in {data.name}
          </h2>
          <div className="region-sector-tags">
            {data.sectors.map((s, i) => (
              <div key={i} className="sector-pill">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD GEN FORM - Sends to Google Sheets */}
      <section className="region-form-section" id="region-form">
        <div className="region-form-grid">
          <div>
            <div className="section-label">{data.name} · iQue CAP</div>
            <h2 className="region-form-title" dangerouslySetInnerHTML={{ __html: data.ctaH }} />
            <div className="gold-divider"></div>
            <p className="region-form-text">{data.ctaS}</p>
            <a href={`tel:+${contact.phone}`} className="region-phone-block">
              <span className="region-phone-icon">📞</span>
              <div>
                <div className="region-phone-label">Call Us · {data.name}</div>
                <div className="region-phone-number">{contact.phone}</div>
              </div>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleRegionFormSubmit} noValidate>
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
                <label>City *</label>
                <input 
                  type="text" 
                  name="city" 
                  placeholder={getRegionPlaceholder(data.name)} 
                  required 
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
                <label>State/Region</label>
                <input 
                  type="text" 
                  name="state" 
                  value={data.name}
                  readOnly
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    cursor: 'not-allowed',
                    opacity: 0.7
                  }}
                />
                <small style={{ color: '#888', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  Region is automatically set to {data.name}
                </small>
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder={`Tell us about your investment goals in ${data.name}...`}
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
              {isSubmitting ? 'Sending...' : `Begin in ${data.name} →`}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default RegionPage