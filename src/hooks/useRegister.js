import { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './useAuth'

function useRegister() {
  const { createUser, error: authError, loading } = useAuth()
  const navigate = useNavigate()

  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmation_password: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update_name':
        return { ...state, name: action.payload }
      case 'update_email':
        return { ...state, email: action.payload }
      case 'update_password':
        return { ...state, password: action.payload }
      case 'update_confirmation_password':
        return { ...state, confirmation_password: action.payload }
      default:
        return state
    }
  }

  useEffect(() => {
    setErrors(authError)
  }, [authError])

  const [errors, setErrors] = useState(null)
  const [registrationData, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) =>
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (registrationData.password !== registrationData.confirmation_password) {
      setErrors('As senhas não coincidem. Por favor, tente novamente.')
    } else {
      const res = await createUser(registrationData)

      if(res === "success") navigate("/")
    }
  }
  return { registrationData, handleChange, handleSubmit, errors, loading }
}

export default useRegister
