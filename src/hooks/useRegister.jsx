import { useReducer } from 'react'

function useRegister() {
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

  const [registrationData, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) =>
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(registrationData)
  }
  return { registrationData, handleChange, handleSubmit }
}

export default useRegister
