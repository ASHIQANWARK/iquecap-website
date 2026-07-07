import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    { number: '01', icon: '◎', title: 'Define Your Investment Vision', desc: 'Tell us your sector preferences and investment appetite. Every great investment journey begins with a moment of clarity.' },
    { number: '02', icon: '⟡', title: 'Connect With Curated Startups', desc: 'Our platform surfaces startups matched precisely to your criteria — vetted, verified, and ready to grow with the right backing behind them.' },
    { number: '03', icon: '◈', title: 'Invest. Build. Lead.', desc: 'Move from discovery to decision with confidence. iQue CAP supports every step of your investment relationship — from first meeting to first milestone.' }
  ]

  return (
    <section className="how-it-works">
      <div className="section-label">The Process</div>
      <h2 className="section-title">Three Steps.<br /><em>One Direction.</em></h2>
      <div className="steps-grid">
        {steps.map((step, i) => (
          <div key={i} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <span className="step-number">{step.number}</span>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks