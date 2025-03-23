import { initializeApp } from 'firebase/app'
import { db, app } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth(app)

  function checkIfIsCancelled() {
    if (cancelled) {
      return
    }
  }

  async function createUser(data) {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName,
      })

      return "success"
    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'Email já cadastrado'
      } else if (error.message.includes('invalid-email')) {
        systemErrorMessage = 'Email inválido'
      }

      setError(systemErrorMessage)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    checkIfIsCancelled()

    signOut(auth)
    
  } 

  const login = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)
      return "success"
    } catch (error) {
      let systemErrorMessage

      if (error.code.includes('invalid-credentia')) {
        systemErrorMessage = 'Email ou senha incorretos.'
      } else if (error.code.includes('too-many-requests')) {
        systemErrorMessage =
          'Muitas tentativas falhas. Tente novamente mais tarde.'
      } else {
        systemErrorMessage = 'Ocorreu um erro inesperado. Tente novamente.'
      }

      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { auth, createUser, error, loading, logout, login }
}
