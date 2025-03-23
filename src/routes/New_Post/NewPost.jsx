import style from './NewPost.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'
import useCreatePost from '../../hooks/useCreatePost'

function NewPost() {
  const { postForm, handleChange, handleSubmit } = useCreatePost() 

  return (
    <div className={style.createPost}>
      <h1>Criar post</h1>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
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
        <GreenButton text="Criar post"></GreenButton>
      </form>
    </div>
  )
}

export default NewPost
