import React from 'react'
import './WhatWeDo.css'
import logoIcon from '../assets/iQue1.png'

const WhatWeDo = ({ navigateTo }) => {
  const nodes = [
    { id: 'kerala', label: 'Kerala', left: 128, top: 13 },
    { id: 'karnataka', label: 'Karna\ntaka', left: 202, top: 40 },
    { id: 'maharashtra', label: 'Maha\nrashtra', left: 241, top: 108 },
    { id: 'tamilnadu', label: 'Tamil\nNadu', left: 228, top: 186 },
    { id: 'punjab', label: 'Punjab', left: 167, top: 236 },
    { id: 'delhi', label: 'Delhi\nNCR', left: 89, top: 236 },
    { id: 'mp', label: 'Madhya\nPradesh', left: 28, top: 186 },
    { id: 'ap', label: 'Andhra\nPradesh', left: 15, top: 108 },
    { id: 'odisha', label: 'Odisha', left: 54, top: 40 }
  ]

  return (
    <section className="what-we-do">
      <div className="what-we-do-text">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Where <em>Vision</em><br />Meets Capital</h2>
        <div className="gold-divider"></div>
        <p>iQue CAP is more than a platform — it is a living ecosystem where ambitious investors discover the startups that will define India's next chapter.</p>
        <p>We curate, connect, and catalyse. Every match on iQue CAP is built on deep alignment — sector fit, stage fit, and the belief that the right investment at the right time changes everything.</p>
        <p>Operating across nine Indian states, our reach is national. Our focus is precision. Our promise is that every investor who walks through our doors leaves with clarity, confidence, and opportunity.</p>
      </div>
      <div className="what-we-do-visual">
        <div className="orb">
          <div className="orb-ring-outer"></div>
          <div className="orb-ring-inner"></div>
          <div className="orb-p"></div>
          <div className="orb-p"></div>
          <div className="orb-p"></div>
          <div className="orb-center">
  <img src={logoIcon} alt="iQue CAP Logo" className="orb-logo" />
</div>
          {nodes.map((node, idx) => (
            <div
              key={idx}
              className={`orb-node orb-n${idx}`}
              onClick={() => navigateTo(node.id)}
            >
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo