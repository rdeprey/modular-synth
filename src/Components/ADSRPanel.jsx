import React from 'react'
import './ADSRPanel.module.css'

export const ADSRPanel = () => {
  return (
    <section aria-labelledby='adsr-headline'>
      <h2 id='adsr-headline' className='visually-hidden'>
        ADSR
      </h2>
      <div>
        <label htmlFor='attack-range'>Attack</label>
      </div>
      <div>
        <label htmlFor='decay-range'>Decay</label>
      </div>
      <div>
        <label htmlFor='sustain-range'>Sustain</label>
      </div>
      <div>
        <label htmlFor='release-range'>Release</label>
      </div>
    </section>
  )
}
