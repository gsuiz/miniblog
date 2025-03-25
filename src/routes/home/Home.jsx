import InputField from '../../components/InputField'
import styles from './Home.module.css'
import { Link } from 'react-router'
import GreenButton from '../../components/GreenButton'
import useFetchDocument from '../../hooks/useFetchDocument'
import PostDetails from '../../components/PostDetails'

function Home() {
  const { documents: posts, loading } = useFetchDocument('posts')


  console.log(posts)
  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form>
        <InputField
          type="text"
          placeholder="Ou busque por tags..."
          name="tag"
        />
        <button className={styles.searchBtn}>Pesquisar</button>
      </form>
      <div className={styles.home__posts}>
        {loading && <p>Carregando...</p>}
        {posts && !posts.length && (
          <div className={styles.home__noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create">
              <GreenButton text="Criar primeiro post" />
            </Link>
          </div>
        )}
        {posts && posts.map(post => <PostDetails key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

export default Home
