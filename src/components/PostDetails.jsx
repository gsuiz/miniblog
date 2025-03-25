import style from './PostDetails.module.css'
import { Link } from 'react-router'

function PostDetails({ post }) {
  return (
    <div className={style['home__single-posts']}>
      <img
        className={style['single-posts__image']}
        src={post.imageUrl}
        alt={post.title}
      />
      <div className={style['single-posts__description']}>
        <h2>{post.title}</h2>
        <i>
            <p>{post.createdBy}</p>
        </i>
        <ul className={style['single-posts__tags']}>
          {post.tags.map((tag) => (
            <li key={tag}>
              <span>#</span>
              {tag}
            </li>
          ))}
        </ul>
        <Link to={`/posts/${post.id}`}>
          <button className={style['single-posts__button']}>Ler</button>
        </Link>
      </div>
    </div>
  )
}

export default PostDetails
