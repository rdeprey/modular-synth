import React from "react";
import styles from "./SettingsGrid.module.css";
import WaveformPanel from "./WaveformPanel/WaveformPanel";

export default function SettingsGrid() {
    return <section aria-labelledby="synth-settings">
        <h2 id="synth-settings" className={styles.visuallyHidden}>Synth Settings</h2>
        <div className={styles.settingsGrid}>
            <WaveformPanel />
        </div>
        </section>
}