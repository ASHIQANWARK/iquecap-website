import React from 'react'
import './RegionsPage.css'

const RegionsPage = ({ navigateTo }) => {
  const regions = [
    { id: 'kerala', icon: '🌴', name: 'Kerala', tagline: '"Where tradition meets tomorrow\'s capital"' },
    { id: 'karnataka', icon: '🏙', name: 'Karnataka', tagline: '"India\'s startup capital, backing its boldest"' },
    { id: 'maharashtra', icon: '🌊', name: 'Maharashtra', tagline: '"Ambition runs deep in the financial heartland"' },
    { id: 'tamilnadu', icon: '🏛', name: 'Tamil Nadu', tagline: '"Engineering excellence, investment intelligence"' },
    { id: 'punjab', icon: '🌾', name: 'Punjab', tagline: '"Punjab doesn\'t just hustle — it builds empires"' },
    { id: 'delhi', icon: '🏛', name: 'Delhi NCR', tagline: '"Where power meets the future of capital"' },
    { id: 'mp', icon: '🌿', name: 'Madhya Pradesh', tagline: '"India\'s heartland is awakening to opportunity"' },
    { id: 'ap', icon: '🌅', name: 'Andhra Pradesh', tagline: '"From sunrise state to sunrise investments"' },
    { id: 'odisha', icon: '🏝', name: 'Odisha', tagline: '"India\'s best-kept investment secret is out"' }
  ]

  return (
    <>
      <div className="regions-hero">
        <div className="regions-hero-content">
          <div className="section-label">Our Presence</div>
          <h1 className="regions-hero-title">Nine States.<br /><em>One Direction.</em></h1>
          <p className="regions-hero-sub">iQue CAP operates at ground level across India's most dynamic investment markets.</p>
        </div>
      </div>
      <div className="regions-grid-container">
        <div className="regions-grid">
          {regions.map((r) => (
            <div key={r.id} className="region-card" onClick={() => navigateTo(r.id)}>
              <span className="region-icon">{r.icon}</span>
              <div className="region-name">{r.name}</div>
              <div className="region-tagline">{r.tagline}</div>
              <div className="region-link">Open →</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RegionsPage