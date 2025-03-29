import style from './Dashboard.module.css'
import { Link } from 'react-router'
import { useAuthValue } from '../../context/AuthContext'
import useFetchDocuments from '../../hooks/useFetchDocuments'
import GreenButton from '../../components/GreenButton'
import BlackButton from '../../components/BlackButton'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

function Dashboard() {
  const { user } = useAuthValue()
  const uid = user.uid
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)
  const { deleteDocument } = useDeleteDocument('posts')

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={style.dashboard}>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={style.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create">
            <GreenButton text="Criar primeiro post"></GreenButton>
          </Link>
        </div>
      ) : (
        <div className={style.dashboard__posts}>
          <div className={style.dashboard__line}>
            <h3>Título</h3> <span></span> <h3>Ações</h3>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={style['dashboard__single-post']}>
                <p>{post.title}</p>
                <div className={style['single-post__options']}>
                  <Link to={`/posts/${post.id}`}>
                    <BlackButton text="Ver"></BlackButton>
                  </Link>
                  <Link to={`/posts/edit/${post.id}`}>
                    <BlackButton text="Editar"></BlackButton>
                  </Link>
                  <BlackButton
                    text="Excluir"
                    handle={() => deleteDocument(post.id)}
                  ></BlackButton>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
