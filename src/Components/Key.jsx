import React, { useRef, useEffect, useState } from 'react'
import styles from './Key.module.css'

export const Key = ({ note, keyboardKey, isFlatOrSharp }) => {
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

  const playNote = (event) => {}

  return (
    <button
      aria-labelledby='key-label'
      onClick={playNote}
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
