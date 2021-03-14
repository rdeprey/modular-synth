import React, { useRef, useEffect, useState } from 'react'
import * as Tone from 'tone'
import { useSynthesizerContext } from '../Audio/Synthesizer'
import styles from './Key.module.css'

export const Key = ({ note, keyboardKey, isFlatOrSharp }) => {
  const { synth, setSynth } = useSynthesizerContext()

  const [keyPosition, setKeyPosition] = useState(0)
  const keyRef = useRef(null)

  const keyClassName = isFlatOrSharp ? 'flatOrSharp' : 'major'
  const keyColor = isFlatOrSharp ? `var(--black-color)` : `var(--white-color)`

  useEffect(() => {
    if (keyRef.current && keyRef.current.className.includes('flatOrSharp')) {
      // Base the position of the flat or sharp key on the position of the previous key
      const previousKey = keyRef.current.previousSibling
      const previousKeyRectangle = previousKey.getBoundingClientRect()

      const currentKey = keyRef.current.getBoundingClientRect()
      setKeyPosition(previousKeyRectangle.right - currentKey.width / 2)
    }
  }, [setKeyPosition])

  const playNote = async (note) => {
    // Have to wait for audio to be ready before starting anything
    await Tone.start()

    // Creates a basic synthesizer with a single oscillator
    const localSynth = synth || new Tone.Synth().toDestination()

    // Set the waveform (aka, oscillator)
    // TODO: Move this into WaveformPanel when further along
    localSynth.oscillator.type = 'sawtooth'

    // fires off a note continously until trigger is released
    localSynth.triggerAttack(note)

    if (!synth) {
      setSynth(localSynth)
    }
  }

  const stopPlayingNote = () => {
    if (synth) {
      // Release the note
      synth.triggerRelease()
    }
  }

  return (
    <button
      aria-labelledby='key-label'
      onMouseDown={() => playNote(note)}
      onMouseUp={stopPlayingNote}
      style={{ backgroundColor: keyColor, left: keyPosition }}
      className={styles[keyClassName]}
      ref={keyRef}>
      <span id='key-label' className='visually-hidden'>
        {note} Key
      </span>

      {keyboardKey}
    </button>
  )
}
