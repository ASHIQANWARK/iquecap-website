import React from 'react'
import './DisclaimerPage.css'

const DisclaimerPage = ({ navigateTo }) => {
  return (
    <>
      <div className="disclaimer-hero">
        <div>
          <div className="section-label">Legal</div>
          <h1 className="disclaimer-hero-title">Platform <em>Disclosure</em></h1>
        </div>
      </div>
      <div className="disclaimer-content">
        <p className="disclaimer-intro">A Note Before You Explore — iQue CAP is where serious capital meets serious opportunity. Here's how we operate.</p>

        <h2>Who We Are</h2>
        <p>iQue CAP is where serious capital meets serious opportunity. We curate, we connect, we facilitate — across India's most dynamic startup and investor ecosystem. That's what we do, and we do it well. Want to know more about us? We're always reachable directly at <a href="mailto:support@iquecap.com">support@iquecap.com</a></p>

        <h2>What We Share</h2>
        <p>All information on this platform is shared to enable informed discovery. Startup journeys carry market dynamics, and every opportunity here reflects the vision of the founders and operators behind it. We bring the right room together — what happens next is built on real conversations and real intent.</p>

        <h2>How We Operate</h2>
        <p>iQue CAP functions as a structured discovery and networking platform. For anything beyond discovery — legal, financial, or regulatory guidance — we always recommend the right experts for the right decisions.</p>

        <h2>One Last Thing</h2>
        <p>Every connection made on iQue CAP is the beginning of something real. The conversations, the deals, the partnerships — they belong to the people in the room. We just make sure it's the right room.</p>
      </div>
    </>
  )
}

export default DisclaimerPage