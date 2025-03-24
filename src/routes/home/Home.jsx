import InputField from '../../components/InputField'
import styles from './Home.module.css'
import { Link } from 'react-router'
import GreenButton from '../../components/GreenButton'

function Home() {
  const posts = []

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
        {posts && !posts.length ? (
          <div className={styles.home__noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create">
              <GreenButton text="Criar primeiro post" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Home
