import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    { name: 'Rajesh Varma', role: 'Angel Investor · Karnataka', quote: 'iQue CAP connected me with a SaaS startup in Bangalore that I would never have found on my own. The quality of the match was exceptional — they understood exactly what I was looking for.' },
    { name: 'Priya Menon', role: 'Entrepreneur · Kerala', quote: 'As a first-time investor, I was nervous about entering the startup space. iQue CAP guided me every step of the way and introduced me to founders who were genuinely ready for capital.' },
    { name: 'Anil Sharma', role: 'HNI Investor · Maharashtra', quote: "The platform's understanding of regional markets is what sets it apart. They knew the Maharashtra ecosystem deeply — the intros they facilitated were warm, relevant, and high-quality." },
    { name: 'Suresh Kumar', role: 'Serial Investor · Tamil Nadu', quote: 'I have been investing in Indian startups for over a decade. iQue CAP has the best deal flow I have seen from a regional platform. The curation is serious and the founders are prepared.' },
    { name: 'Gurpreet Singh', role: 'Business Owner · Punjab', quote: 'iQue CAP opened doors I didn\'t even know existed. Within three months of joining their network, I had met five high-potential startups in Punjab that matched my investment thesis perfectly.' },
    { name: 'Neha Dixit', role: 'Portfolio Investor · Delhi NCR', quote: 'The team at iQue CAP understands that investment is a relationship, not a transaction. They took time to understand my portfolio before making any introductions. That professionalism is rare.' }
  ]

  return (
    <section className="testimonials-section">
      <div className="section-label">What Investors Say</div>
      <h2 className="section-title">Voices from the <em>Network</em></h2>

      <div className="testimonials-track-wrap">
        <div className="testimonials-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="tcard">
              <div className="tcard-stars">★★★★★</div>
              <div className="tcard-quote">{t.quote}</div>
              <div className="tcard-author">
                <div className="tcard-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="tcard-info">
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials