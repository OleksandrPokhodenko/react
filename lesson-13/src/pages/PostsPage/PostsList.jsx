import React, { useState } from 'react'
import {
  useGetPostsPQuery,
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
} from '../../api/postsApi'
import { useNavigate } from 'react-router'
import Loader from '@/components/Loader'

const PostsList = ({ onSelect }) => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, isFetching } = useGetPostsPQuery({
    page,
    limit: 5,
  })

  const [deletePost] = useDeletePostMutation()
  const [likePost] = useLikePostMutation()
  const [dislikePost] = useDislikePostMutation()

  const navigate = useNavigate()

  if (isLoading) return <Loader />
  if (isError) return <p>Помилка завантаження постів</p>

  const { items, totalPages, remaining } = data

  return (
    <div className='posts'>
      <ul
        className='posts__list'>
        {items.map((post) => (
          <li
            className='posts__item'
            key={post.id}
          >
            <p className='posts__title'>{post.title}</p>
            <div className='posts__actions'>
              <div className='posts__likes'>
                <button onClick={() => likePost(post.id)}>👍 {post.likesNumber}</button>
                <button onClick={() => dislikePost(post.id)}>👎 {post.dislikesNumber}</button>
              </div>
              <div className="posts__buttons">
                <button onClick={() => onSelect(post.id)}>Деталі</button>
                <button onClick={() => navigate(`/posts/edit/${post.id}`)}>
                  Редагувати
                </button>{' '}
                <button
                  onClick={() => {
                    if (window.confirm('Видалити пост?')) deletePost(post.id)
                  }}
                >
                  Видалити
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isFetching && <p>Оновлення...</p>}
      <div style={{ marginTop: '20px' }}>
        <div className="posts__paginated">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Попередня
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                fontWeight: page === i + 1 ? 'bold' : 'normal',
                color: page === i + 1 ? 'red' : '',
              }}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => (remaining > 0 ? p + 1 : p))}
            disabled={remaining === 0}
          >
            Наступна
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostsList
