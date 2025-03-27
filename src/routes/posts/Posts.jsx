import { useParams } from 'react-router'
import useFetchDocument from '../../hooks/useFetchDocument'
import BlackButton from '../../components/BlackButton'
import { useNavigate } from 'react-router'
import style from './Posts.module.css'

function Posts() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { document: post } = useFetchDocument('posts', id)

  return (
    <div className={style['post-content']}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} className={style['post-content__img']} alt="Imagem do post" />
          <p className={style['post-content__text']}>{post.content}</p>
          <h3>Este post fala sobre:</h3>
          <ul className={style['post-content__tags']}>
              {post.tags.map(item => <li><span>#</span>{item}</li>)}
          </ul>
          <BlackButton text="Voltar" handle={() => navigate(-1)}></BlackButton>
        </>
      )}
    </div>
  )
}

export default Posts
