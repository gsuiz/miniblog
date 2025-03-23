import { useReducer } from 'react'

function useCreatePost() {
  const initialValue = {
    title: '',
    imageUrl: '',
    content: '',
    tags: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update_title':
        return { ...state, title: action.payload }
      case 'update_imageUrl':
        return { ...state, imageUrl: action.payload }
      case 'update_content':
        return { ...state, content: action.payload }
      case 'update_tags':
        return { ...state, tags: action.payload }
      default:
        return state
    }
  }

  const [postForm, dispatch] = useReducer(reducer, initialValue)

  const handleChange = (e) => dispatch({ type:`update_${e.target.name}`, payload:e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(postForm)
  }

  return { postForm, handleChange, handleSubmit }
}

export default useCreatePost
