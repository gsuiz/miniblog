import { useEffect, useReducer, useState } from 'react'
import { useAuthValue } from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router'
import useFetchDocument from './useFetchDocument'
import useUpdateDocument from './useUpdateDocument'

function useEditPost() {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)
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
  const [imageClicked, setImageClicked] = useState(false)
  const { updateDocument, response } = useUpdateDocument('posts')
  const { user } = useAuthValue()

  useEffect(() => {
    if (post) {
      dispatch({ type: 'update_title', payload: post.title })
      dispatch({ type: 'update_imageUrl', payload: post.imageUrl })
      dispatch({ type: 'update_content', payload: post.content })

      const tagsString = post.tags.join(', ')
      dispatch({ type: 'update_tags', payload: tagsString })
    }
  }, [post])

  const handleClick = () => setImageClicked((prev) => !prev)

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

    const data = {
      ...postForm,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data)

    navigate('/dashboard')
  }

  return {
    postForm,
    handleChange,
    handleSubmit,
    response,
    formError,
    imageClicked,
    handleClick,
  }
}

export default useEditPost
