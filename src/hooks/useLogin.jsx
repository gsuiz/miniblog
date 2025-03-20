import { useReducer } from 'react'

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
        return { ...state, password: action.payload }
      default:
        return state
    }
  }

  const [loginCredentials, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) =>
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(loginCredentials)
  }

  return { loginCredentials, handleChange, handleSubmit }
}

export default useLogin
