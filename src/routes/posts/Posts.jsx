import { useParams } from 'react-router'
import useFetchDocument from '../../hooks/useFetchDocument'
import BlackButton from '../../components/BlackButton'
import { Link } from 'react-router'
import style from './Posts.module.css'

function Posts() {
  const { id } = useParams()
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
          <Link to="/">
            <BlackButton text="Voltar"></BlackButton>
          </Link>
        </>
      )}
    </div>
  )
}

export default Posts
