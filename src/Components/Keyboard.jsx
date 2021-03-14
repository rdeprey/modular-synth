import React from 'react'
import { Key } from './Key'
import './Keyboard.module.css'

const octaves = [
  {
    note: 'C',
    keyboardKey: 'a',
    isFlatOrSharp: false
  },
  {
    note: 'C#/Db',
    keyboardKey: 'w',
    isFlatOrSharp: true
  },
  {
    note: 'D',
    keyboardKey: 's',
    isFlatOrSharp: false
  },
  {
    note: 'D#/Eb',
    keyboardKey: 'e',
    isFlatOrSharp: true
  },
  {
    note: 'E',
    keyboardKey: 'd',
    isFlatOrSharp: false
  },
  {
    note: 'F',
    keyboardKey: 'f',
    isFlatOrSharp: false
  },
  {
    note: 'F#/Gb',
    keyboardKey: 'r',
    isFlatOrSharp: true
  },
  {
    note: 'G',
    keyboardKey: 'g',
    isFlatOrSharp: false
  },
  {
    note: 'G#/Ab',
    keyboardKey: 't',
    isFlatOrSharp: true
  },
  {
    note: 'A',
    keyboardKey: 'h',
    isFlatOrSharp: false
  },
  {
    note: 'A#/Bb',
    keyboardKey: 'y',
    isFlatOrSharp: true
  },
  {
    note: 'B',
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
