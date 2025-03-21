import { createContext, useState, useEffect, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from '../hooks/useAuth'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuth()
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuthValue = () => {
  return useContext(AuthContext)
}
