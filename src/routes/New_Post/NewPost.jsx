import style from './NewPost.module.css'
import LabeledInput from '../../components/LabeledInput'
import GreenButton from '../../components/GreenButton'

function NewPost() {
  const handleChange = ''

  return (
    <div className={style.createPost}>
      <h1>Criar post</h1>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
      <form>
        <LabeledInput
          label="Título:"
          type="text"
          placeholder="Pense num bom título..."
          name="title"
          handle={handleChange}
        ></LabeledInput>
        <LabeledInput
          label="URL da imagem:"
          type="text"
          placeholder="Insira uma imagem que representa seu post"
          name="imageUrl"
          handle={handleChange}
        ></LabeledInput>
        <LabeledInput
          label="Conteúdo:"
          type="textarea"
          placeholder="Insira o contéudo do post"
          name="content"
          handle={handleChange}
        ></LabeledInput>
        <LabeledInput
          label="Tags:"
          type="text"
          placeholder="Insira as tags separadas por vírgula"
          name="tags"
          handle={handleChange}
        ></LabeledInput>
        <GreenButton text="Criar post"></GreenButton>
      </form>
    </div>
  )
}

export default NewPost
