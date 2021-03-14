import React from 'react'
import { SynthesizerProvider } from '../Audio/Synthesizer'
import { WaveformPanel } from './WaveformPanel'
import { ADSRPanel } from './ADSRPanel'
import { EnvelopeGraph } from './EnvelopeGraph'
import { Keyboard } from './Keyboard'
import styles from './Frame.module.css'

export const Frame = ({ ...rest }) => {
  return (
    <div className={styles.frame} {...rest}>
      <SynthesizerProvider>
        <div className={styles['envelope-controls']}>
          <WaveformPanel />
          <ADSRPanel />
          <EnvelopeGraph />
        </div>
        <div className='keyboard'>
          <Keyboard />
        </div>
        <div className={styles['note-controls']}>Note</div>
      </SynthesizerProvider>
    </div>
  )
}
