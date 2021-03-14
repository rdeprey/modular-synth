import React from 'react'
import { Key } from './Key'
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

const playNoteKeyboard = (event) => {
  if (getKeyData(event.key)) {
    console.log('play note')

    // TODO: Add code to generate the right note
  }
}

export const Keyboard = () => {
  return (
    <section
      aria-labelledby='keyboard-headline'
      onKeyDown={playNoteKeyboard}
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
