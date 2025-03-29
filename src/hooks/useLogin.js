import { useReducer, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './useAuth'

function useLogin() {
  const { error: authError, loading, login } = useAuth()
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    setErrors(authError)
  }, [authError])

  const initialValue = {
    email: '',
    password: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update_email':
        return { ...state, email: action.payload }
      case 'update_password':
        setErrors(null)
        return { ...state, password: action.payload }
      default:
        return state
    }
  }

  const [loginCredentials, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) => {
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })
    setErrors(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(null)

    const res = await login(loginCredentials)
    if (res === 'success') navigate('/')
  }

  return { loginCredentials, handleChange, handleSubmit, errors, loading }
}

export default useLogin
