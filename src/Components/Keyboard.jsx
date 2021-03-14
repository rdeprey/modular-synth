import React from 'react'
import * as Tone from 'tone'
import { Key } from './Key'
import { useSynthesizerContext } from '../Audio/Synthesizer'
import './Keyboard.module.css'

const octaves = [
  {
    note: 'C4',
    keyboardKey: 'a',
    isFlatOrSharp: false
  },
  {
    note: 'C#4',
    keyboardKey: 'w',
    isFlatOrSharp: true
  },
  {
    note: 'D4',
    keyboardKey: 's',
    isFlatOrSharp: false
  },
  {
    note: 'D#4',
    keyboardKey: 'e',
    isFlatOrSharp: true
  },
  {
    note: 'E4',
    keyboardKey: 'd',
    isFlatOrSharp: false
  },
  {
    note: 'F4',
    keyboardKey: 'f',
    isFlatOrSharp: false
  },
  {
    note: 'F#4',
    keyboardKey: 'r',
    isFlatOrSharp: true
  },
  {
    note: 'G4',
    keyboardKey: 'g',
    isFlatOrSharp: false
  },
  {
    note: 'G#4',
    keyboardKey: 't',
    isFlatOrSharp: true
  },
  {
    note: 'A4',
    keyboardKey: 'h',
    isFlatOrSharp: false
  },
  {
    note: 'A#4',
    keyboardKey: 'y',
    isFlatOrSharp: true
  },
  {
    note: 'B4',
    keyboardKey: 'j',
    isFlatOrSharp: false
  }
]

const getKeyData = (keyPressed) => {
  return octaves.find((octave) => octave.keyboardKey === keyPressed)
}

export const Keyboard = () => {
  const { synth, setSynth } = useSynthesizerContext()

  const playNote = async (event) => {
    const keyData = getKeyData(event.key)

    if (keyData) {
      // Have to wait for audio to be ready before starting anything
      await Tone.start()

      // Creates a basic synthesizer with a single oscillator
      const localSynth = synth || new Tone.Synth().toDestination()

      // Set the tone to sine
      // TODO: Move this into WaveformPanel when further along
      localSynth.oscillator.type = 'sawtooth'

      // fires off a note continously until trigger is released
      localSynth.triggerAttack(keyData.note)

      if (!synth) {
        setSynth(localSynth)
      }
    }
  }

  const stopPlayingNote = () => {
    if (synth) {
      // Release the note
      synth.triggerRelease()
    }
  }

  return (
    <section
      aria-labelledby='keyboard-headline'
      onKeyDown={playNote}
      onKeyUp={stopPlayingNote}
      tabIndex={0}>
      <h2 id='keyboard-headline' className='visually-hidden'>
        Keyboard
      </h2>
      {octaves.map((octave) => {
        return <Key key={octave.note} {...octave} />
      })}
    </section>
  )
}
