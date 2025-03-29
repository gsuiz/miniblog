import style from './EditPost.module.css'
import useEditPost from '../../hooks/useEditPost'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'
import { RiCloseLargeFill as CloseIcon } from 'react-icons/ri'
import { useDarkBackgroundContext } from '../../context/DarkBackgroundContext'

function EditPost() {
  const { darkBackground, changeBackground } = useDarkBackgroundContext()

  const handleClick = () => changeBackground()

  const { postForm, handleChange, handleSubmit, response, formError } =
    useEditPost()

  return (
    <div
      className={`${style.editPost} ${
        darkBackground ? style['editPost--darkened'] : ''
      }`}
    >
      <div className={style['editPost__background']}></div>
      <CloseIcon
        className={style['editPost__close-icon']}
        onClick={handleClick}
      ></CloseIcon>
      <h1>Editar post</h1>
      <p>Altere os dados do post como desejar.</p>
      <form onSubmit={handleSubmit}>
        <LabeledInput
          label="Título:"
          type="text"
          placeholder="Pense num bom título..."
          name="title"
          handle={handleChange}
          value={postForm.title}
        ></LabeledInput>
        <LabeledInput
          label="URL da imagem:"
          type="text"
          placeholder="Insira uma imagem que representa seu post"
          name="imageUrl"
          handle={handleChange}
          value={postForm.imageUrl}
        ></LabeledInput>
        <p className={style['editPost__preview']}>
          <span>Preview:</span>
          <img
            src={postForm.imageUrl || null}
            className={style['editPost__image-preview']}
            onClick={darkBackground ? null : handleClick}
          />
        </p>
        <LabeledInput
          label="Conteúdo:"
          type="textarea"
          placeholder="Insira o contéudo do post"
          name="content"
          handle={handleChange}
          value={postForm.content}
        ></LabeledInput>
        <LabeledInput
          label="Tags:"
          type="text"
          placeholder="Insira as tags separadas por vírgula"
          name="tags"
          handle={handleChange}
          value={postForm.tags}
        ></LabeledInput>
        {!response.loading && <GreenButton text="Editar " />}
        {response.loading && (
          <GreenButton text="Aguarde..." active={!response.loading} />
        )}
        {response.error && <div className="error">{response.error}</div>}
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  )
}

export default EditPost
