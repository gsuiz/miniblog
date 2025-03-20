import { useReducer, useState } from 'react'

function useLogin() {
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

  const [errors, setErrors] = useState(null)
  const [loginCredentials, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) =>
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    const login = false
    if (!login) {
      setErrors(
        'Falha no login: Usuário não encontrado ou credenciais incorretas.'
      )
    }
  }

  return { loginCredentials, handleChange, handleSubmit, errors }
}

export default useLogin
