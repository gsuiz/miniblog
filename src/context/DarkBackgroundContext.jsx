import { useState, createContext, useContext } from 'react'

export const DarkBackgroundContext = createContext()

export function useDarkBackgroundContext() {
  const context = useContext(DarkBackgroundContext)

  if (!context) {
    return new Error('ERROR IN CONTEXT').message
  }

  return context
}

export function DarkBackgroundProvider({ children }) {
  const [darkBackground, setDarkBackground] = useState(false)
  const changeBackground = () => setDarkBackground((prev) => !prev)

  return (
    <DarkBackgroundContext.Provider
      value={{ darkBackground, changeBackground }}
    >
      {children}
    </DarkBackgroundContext.Provider>
  )
}
