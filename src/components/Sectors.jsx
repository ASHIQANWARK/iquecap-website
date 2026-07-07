import React from 'react'
import './Sectors.css'

const Sectors = () => {
  const sectors = [
    { icon: '⚡', name: 'SaaS & Technology', tag: 'Software · Platforms · Tools' },
    { icon: '🎓', name: 'EdTech & Schools', tag: 'Learning · Ed Infrastructure' },
    { icon: '💳', name: 'FinTech', tag: 'Payments · Lending · WealthTech' },
    { icon: '🏥', name: 'HealthTech', tag: 'Digital Health · MedTech' },
    { icon: '🛍', name: 'eCommerce & D2C', tag: 'Consumer · Retail · Brands' },
    { icon: '🌿', name: 'CleanTech', tag: 'Sustainability · Green Energy' },
    { icon: '🚚', name: 'Logistics & Supply Chain', tag: 'Delivery · Last Mile · B2B' },
    { icon: '🏙', name: 'Real Estate Tech', tag: 'PropTech · Smart Spaces' },
    { icon: '📱', name: 'Media & Content', tag: 'Creator Economy · Digital Media' },
    { icon: '🤖', name: 'AI & Deep Tech', tag: 'ML · Automation · Analytics' },
    { icon: '🏭', name: 'Manufacturing Tech', tag: 'Industry 4.0 · IoT · B2B SaaS' },
    { icon: '🌐', name: 'Enterprise Solutions', tag: 'B2B · Infra · Workflow' }
  ]

  return (
    <section className="sectors">
      <div className="section-label">Investment Sectors</div>
      <h2 className="section-title">Where We <em>Invest.</em></h2>
      <div className="sectors-grid">
        {sectors.map((s, i) => (
          <div key={i} className="sector-item">
            <span className="sector-icon">{s.icon}</span>
            <div className="sector-name">{s.name}</div>
            <div className="sector-tag">{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sectors