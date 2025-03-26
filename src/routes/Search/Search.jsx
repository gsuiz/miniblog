import PostDetails from '../../components/PostDetails'
import useFetchDocuments from '../../hooks/useFetchDocuments'
import useQuery from '../../hooks/useQuery'
import BlackButton from '../../components/BlackButton'
import style from './Search.module.css'
import { Link } from 'react-router'

function Search() {
  const query = useQuery()
  const search = query.get('q')
  const { documents: posts } = useFetchDocuments('posts', search)

  return (
    <div className={style.search}>
      <h1 className={style.search__title}>
        Search:{' '}
        <span>
          <i>{search}</i>
        </span>
      </h1>
      {posts && !posts.length && (
        <p>Não foram encontrados posts a partir da sua busca...</p>
      )}
      <Link to="/">
        <BlackButton text="Voltar"></BlackButton>
      </Link>
      <div className={style.search__posts}>
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Search
