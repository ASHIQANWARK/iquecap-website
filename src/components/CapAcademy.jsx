// src/components/CapAcademy.jsx
import React from 'react'
import './CapAcademy.css'

const CapAcademy = ({ navigateTo }) => {
  const features = [
    { icon: '✅', title: 'Vetted Startup Deals', desc: 'Access to carefully selected investment opportunities' },
    { icon: '📋', title: 'Structured Process', desc: 'Clear, step-by-step investment methodology' },
    { icon: '👨‍🏫', title: 'Expert Support', desc: 'Guidance from trained Cap Advisors' },
    { icon: '📊', title: 'Transparent Updates', desc: 'Regular reports and progress tracking' },
    { icon: '🏢', title: 'Backed by IqueCap', desc: 'Industry expertise and support' },
    { icon: '💻', title: 'Fully Online Learning', desc: 'Flexible, accessible from anywhere' },
    { icon: '👥', title: 'Thriving Community', desc: 'Network with peers and experts' }
  ]

  const benefits = [
    { icon: '🏠', title: 'Work From Home', desc: 'Be your own boss and set your own schedule' },
    { icon: '📜', title: 'Get Certified', desc: 'Earn a professional certification from a reputable platform' },
    { icon: '🔑', title: 'Exclusive Opportunities', desc: 'Access investment deals not available to the general public' },
    { icon: '🤝', title: 'Help Others Grow', desc: 'Guide investors toward wealth-building opportunities' },
    { icon: '💰', title: 'Unlimited Earnings', desc: 'No cap on your income potential' },
    { icon: '🚀', title: 'Be a Pioneer', desc: 'Participate in India\'s startup growth story from the ground up' }
  ]

  const steps = [
    { number: '01', title: 'Register and Pay ₹10,000', desc: 'Secure your spot in the program with a simple registration' },
    { number: '02', title: '25 Days Online Training', desc: 'Complete our comprehensive training program at your own pace' },
    { number: '03', title: 'Assignments & Final Quiz', desc: 'Demonstrate your knowledge through practical assignments' },
    { number: '04', title: 'Get Certified', desc: 'Receive your official CAP Advisor certification' },
    { number: '05', title: 'Start Earning', desc: 'Begin earning incentives on every successful deal' }
  ]

  const stats = [
    { number: '$140+ Billion', label: 'invested in Indian Startups (till 2025)' },
    { number: '110+', label: 'Unicorns created in India' },
    { number: '5 million+', label: 'retail investors exploring alternative assets' },
    { number: '50% YoY', label: 'investor growth in Tier 2/3 cities' }
  ]

  const successStories = [
    { 
      name: 'Suhara T', 
      location: 'Kerala', 
      quote: '"This program gave me financial freedom and purpose."',
      role: 'Certified CAP Advisor'
    },
    { 
      name: 'Mary Jemshy', 
      location: 'Kerala', 
      quote: '"Cap Academy helped me gain confidence and income at the same time."',
      role: 'Certified CAP Advisor'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="academy-hero">
        <div className="academy-hero-content">
          <div className="academy-hero-badge">Empowering India's Next Generation</div>
          <h1 className="academy-hero-title">CAP Academy</h1>
          <h2 className="academy-hero-subtitle">Learn. Earn. Grow.</h2>
          <p className="academy-hero-sub">
            Empowering India's Next Generation of Investment Advisors. Become a certified CAP Advisor 
            and connect investors to India's top startups.
          </p>
          <div className="academy-hero-actions">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_7KkLeJU6-BsuE-0qgZeFOLUZ3x21Dm_uIv-gActy4mhnUA/viewform?usp=sharing&ouid=102317791087597349157" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply Now →
            </a>
            <button className="btn-ghost" onClick={() => navigateTo('contact')}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="academy-about">
        <div className="academy-about-content">
          <div className="academy-about-left">
            <div className="section-label">About CAP Academy</div>
            <h2 className="section-title">Empowering Individuals <em>Across India</em></h2>
            <p className="academy-about-text">
              CAP Academy is an initiative by IqueCap to create India's largest network of trained and 
              certified Cap Advisors. Our mission is to empower individuals—especially from Tier 2 and 
              Tier 3 cities—with essential skills and knowledge in finance, startups, and investments.
            </p>
            <div className="academy-about-vision">
              <span className="academy-about-vision-icon">🎯</span>
              <div>
                <h4>Our Vision</h4>
                <p>An initiative by IqueCap to create India's largest network of trained and certified Cap Advisors</p>
              </div>
            </div>
          </div>
          <div className="academy-about-right">
            <div className="academy-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="academy-stat-card">
                  <div className="academy-stat-number">{stat.number}</div>
                  <div className="academy-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="academy-opportunity">
        <div className="academy-opportunity-content">
          <div className="section-label">Investment Opportunity</div>
          <h2 className="section-title">The Power of Investing <em>in Startups</em></h2>
          <p className="academy-opportunity-text">
            From Using Startups to Growing With Them: We use startups every day — to shop, travel, learn, 
            and pay. Few people realize they can participate in the early journey of game-changing companies 
            and grow with them as investors.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="academy-features">
        <div className="academy-section-header">
          <div className="section-label">The IqueCap Advantage</div>
          <h2 className="section-title">Everything You Need to <em>Succeed</em></h2>
          <p className="academy-section-sub">With IqueCap, you get everything you need to succeed as a CAP Advisor</p>
        </div>

        <div className="academy-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="academy-feature-card">
              <span className="academy-feature-icon">{feature.icon}</span>
              <h3 className="academy-feature-title">{feature.title}</h3>
              <p className="academy-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="academy-benefits">
        <div className="academy-section-header">
          <div className="section-label">Why Become a Cap Advisor?</div>
          <h2 className="section-title">Discover the <em>Benefits</em></h2>
          <p className="academy-section-sub">Join India's premier investment advisor program</p>
        </div>

        <div className="academy-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="academy-benefit-card">
              <span className="academy-benefit-icon">{benefit.icon}</span>
              <h3 className="academy-benefit-title">{benefit.title}</h3>
              <p className="academy-benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="academy-highlights">
        <div className="academy-highlights-content">
          <div className="academy-section-header">
            <div className="section-label">Program Highlights</div>
            <h2 className="section-title">What You'll <em>Learn</em></h2>
          </div>
          <ul className="academy-highlights-list">
            <li>25-day intensive online training</li>
            <li>Live and recorded sessions for flexibility</li>
            <li>Learn basics of investment, startups, and pitch evaluation</li>
            <li>Guidance on lead generation and investor handling</li>
            <li>Real-time support and feedback from mentors</li>
            <li>Interactive quizzes, case studies, and practice decks</li>
          </ul>
        </div>
      </section>

      {/* Training Flow */}
      <section className="academy-flow">
        <div className="academy-section-header">
          <div className="section-label">Training & Certification Flow</div>
          <h2 className="section-title">Simple Steps to <em>Become Certified</em></h2>
          <p className="academy-section-sub">Become a certified CAP Advisor</p>
        </div>

        <div className="academy-flow-grid">
          {steps.map((step, index) => (
            <div key={index} className="academy-flow-card">
              <div className="academy-flow-number">{step.number}</div>
              <h3 className="academy-flow-title">{step.title}</h3>
              <p className="academy-flow-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Earnings Section */}
      <section className="academy-earnings">
        <div className="academy-earnings-content">
          <div className="academy-section-header">
            <div className="section-label">Earnings & Incentives</div>
            <h2 className="section-title">Unlock Exciting <em>Rewards</em></h2>
            <p className="academy-section-sub">As you grow with CAP Academy</p>
          </div>

          <div className="academy-earnings-grid">
            <div className="academy-earning-card">
              <span className="academy-earning-icon">💰</span>
              <h4>How You Earn</h4>
              <ul>
                <li>Incentive on every successful investment closure</li>
                <li>Daily payout Incentive</li>
                <li>Extra incentives for top performers</li>
                <li>Monthly recognition & rewards</li>
                <li>Long-term partnership opportunities with IqueCap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="academy-stories">
        <div className="academy-section-header">
          <div className="section-label">Success Stories</div>
          <h2 className="section-title">Real Stories from <em>Our Advisors</em></h2>
          <p className="academy-section-sub">Top-performing CAP Advisors across India!</p>
        </div>

        <div className="academy-stories-grid">
          {successStories.map((story, index) => (
            <div key={index} className="academy-story-card">
              <div className="academy-story-quote">{story.quote}</div>
              <div className="academy-story-author">
                <div className="academy-story-avatar">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="academy-story-name">{story.name}</div>
                  <div className="academy-story-location">{story.location}</div>
                  <div className="academy-story-role">{story.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="academy-stories-cta">
          <p className="academy-stories-cta-text">You can be the next success story.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="academy-cta">
        <div className="academy-cta-content">
          <div className="section-label">Get in Touch</div>
          <h2>Reach out to us for <em>any queries</em></h2>
          <p>We're here to help!</p>
          <div className="academy-cta-buttons">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_7KkLeJU6-BsuE-0qgZeFOLUZ3x21Dm_uIv-gActy4mhnUA/viewform?usp=sharing&ouid=102317791087597349157" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply Now →
            </a>
            <button className="btn-ghost" onClick={() => navigateTo('contact')}>
              Contact Us
            </button>
          </div>
          <div className="academy-cta-note">
            <p>📋 Contact Form: Fill out our Google Form to get in touch with us</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CapAcademy