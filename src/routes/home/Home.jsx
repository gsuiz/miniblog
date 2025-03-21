import InputField from '../../components/InputField'
import styles from './Home.module.css'

function Home() {
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
      <div className={styles.home__posts}></div>
    </div>
  )
}

export default Home
