import { Fragment, useEffect } from 'react'
import { useGetPostsInfiniteQuery } from '@/api/postsApi'
import { useScrollToBottom } from '@/hooks/useScrollToBottom'

const PostsInfinitePage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isSuccess,
  } = useGetPostsInfiniteQuery()

  const isBottom = useScrollToBottom()

  useEffect(() => {
    if (
      isBottom &&
      hasNextPage &&
      !isLoading &&
      !isFetchingNextPage &&
      isSuccess
    ) {
      fetchNextPage()
    }
  }, [
    isBottom,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    fetchNextPage,
  ])

  if (isLoading) return <p>Завантаження...</p>
  if (!isSuccess) return <p>Помилка завантаження.</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>Нескінченне завантаження постів</h2>
      {data.pages.map((page, i) => (
        <Fragment key={i}>
          {page.items.map((post) => (
            <div
              key={post.id}
              style={{ border: '1px solid #fff', borderRadius: '10px', padding: '20px' }}
            >
              <h4>{post.title}</h4>
              <p>
                Лайки: {post.likesNumber} - Дизлайки: {post.dislikesNumber}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
      {isFetchingNextPage && <p>Завантаження наступної сторінки...</p>}
      {!hasNextPage && <p>Більше постів немає.</p>}
    </div>
  )
}

export default PostsInfinitePage
