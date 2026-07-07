import React from 'react'
import './AboutPage.css'

const AboutPage = ({ navigateTo }) => {
  const values = [
    { number: '01', title: 'Precision Over Volume', desc: 'Every connection made through iQue CAP is deliberate and aligned — because quality of match defines quality of outcome.' },
    { number: '02', title: 'India First, Always', desc: 'We understand the regional nuances, cultural contexts, and market realities that make Indian startup investing unique — and uniquely powerful.' },
    { number: '03', title: 'Long-Term Thinking', desc: 'We build ecosystems designed for the long view — where investors and founders grow together through every stage of the journey.' },
    { number: '04', title: 'Transparency as Standard', desc: 'Trust is the foundation of every transaction. We hold ourselves and every stakeholder to the highest standards of clarity and accountability.' },
    { number: '05', title: 'Access for All', desc: "The best investment opportunities shouldn't be locked behind exclusive clubs. iQue CAP democratises access — bringing more investors into the room." },
    { number: '06', title: 'Relentless Growth', desc: 'Every quarter, every region, every sector — we push further and work harder to surface the opportunities others miss.' }
  ]

  return (
    <>
      <div className="about-hero">
        <div>
          <div className="section-label">Our Story</div>
          <h1>Built for <em>India's</em><br />Investment Era</h1>
        </div>
      </div>
      <div className="about-body">
        <div>
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">The <em>Ecosystem</em><br />Behind the Match</h2>
          <div className="gold-divider"></div>
          <p>iQue CAP was built from a simple but powerful belief — that India's greatest investments are still waiting to happen. Not because the capital isn't there. Not because the startups don't exist. But because the right connections haven't been made yet.</p>
          <p>We exist to make those connections. Precisely. Purposefully. At scale.</p>
        </div>
        <div>
          <p>Across nine Indian states — from the tech corridors of Karnataka to the commercial ambition of Maharashtra, from the cultural depth of Kerala to the raw energy of Punjab, and now into Odisha's rising ecosystem — iQue CAP has built a network that reaches every corner of India's startup story.</p>
          <p><strong>Our platform is built for investors who think beyond borders.</strong> For those who understand that the next breakthrough company isn't necessarily in a tier-1 city. For those ready to back bold ideas wherever they emerge.</p>
          <p>At iQue CAP, we don't just facilitate introductions. We build investment relationships that last — grounded in insight, driven by alignment, and guided by the shared ambition to build something that matters.</p>
        </div>
      </div>
      <div className="values-section">
        <div className="section-label">What Drives Us</div>
        <h2 className="section-title">Our <em>Principles</em></h2>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.number} className="value-card">
              <div className="value-number">{v.number}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutPage