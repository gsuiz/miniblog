import { useReducer, useState } from 'react'
import { useInsertDocument } from './useInsertDocument'
import { useAuthValue } from '../context/AuthContext'
import { useNavigate } from 'react-router'

function useCreatePost() {
  const navigate = useNavigate()

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
  const [formError, setFormError] = useState(null)
  const { insertDocument, response } = useInsertDocument('posts')
  const { user } = useAuthValue()

  const handleChange = (e) =>
    dispatch({ type: `update_${e.target.name}`, payload: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(null)

    try {
      new URL(postForm.imageUrl)
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setFormError('A imagem precisa ser uma URL.')
    }

    const tagsArray = postForm.tags
      .split(',')
      .map((item) => item.trim().toLowerCase())

    if (formError) return

    insertDocument({
      ...postForm,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    navigate("/")
  }

  return { postForm, handleChange, handleSubmit, response, formError }
}

export default useCreatePost
