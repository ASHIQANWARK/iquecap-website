import React from 'react'
import './Ticker.css'

const Ticker = () => {
  const regions = ['Kerala', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Punjab', 'Delhi NCR', 'Madhya Pradesh', 'Andhra Pradesh', 'Odisha']

  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {[...regions, ...regions].map((region, i) => (
          <React.Fragment key={i}>
            <span className="t-name">{region}</span>
            <span className="t-dot"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Ticker