import React from 'react';
import TriangleWaveform from './TriangleWaveform';
import SquareWaveform from './SquareWaveform';
import SineWaveform from './SineWaveform';
import SawtoothWaveform from './SawtoothWaveform';
import { Button } from '../../Button';
import styles from './WaveformPanel.module.css';


const WaveformPanel = () => {
    return <section aria-labelledby="waveform-panel">
        <h2 id="waveform-panel">Waveforms</h2>
        <div className={styles.waveformGrid}>
            <Button><TriangleWaveform /></Button>
            <Button><SquareWaveform /></Button>
            <Button><SineWaveform /></Button>
            <Button><SawtoothWaveform /></Button>
        </div>
    </section>
}

export default WaveformPanel;