import React, { createContext, useContext, useState } from 'react'

// Context for managing synthesizer settings
const SynthesizerContext = createContext(null)

export const useSynthesizerContext = () => {
  const context = useContext(SynthesizerContext)

  if (context === undefined) {
    throw new Error(
      'You have to wrap the component in a SynthesizerProvider to use the useSynthesizerContext hook.'
    )
  }

  return context
}

export const SynthesizerProvider = ({ children }) => {
  const [synth, setSynth] = useState(null)

  const contextValue = { synth, setSynth }

  return (
    <SynthesizerContext.Provider value={contextValue}>
      {children}
    </SynthesizerContext.Provider>
  )
}
