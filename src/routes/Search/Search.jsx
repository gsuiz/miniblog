import PostDetails from '../../components/PostDetails'
import useFetchDocument from '../../hooks/useFetchDocument'
import useQuery from '../../hooks/useQuery'
import { Link } from 'react-router'

function Search() {
  const query = useQuery()
  const search = query.get('q')
  const { documents: posts } = useFetchDocument('posts', search)

  return (
    <>
      <h2>Search</h2>
      <div>
        {posts && !posts.length && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </>
  )
}

export default Search
