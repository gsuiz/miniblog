import InputField from '../../components/InputField'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router'
import GreenButton from '../../components/GreenButton'
import BlackButton from '../../components/BlackButton'
import useFetchDocument from '../../hooks/useFetchDocument'
import PostDetails from '../../components/PostDetails'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocument('posts')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Ou busque por tags..."
          name="tag"
          handle={(e) => setQuery(e.target.value)}
          value={query}
        />
        <BlackButton text="Pesquisar"></BlackButton>        
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
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home
