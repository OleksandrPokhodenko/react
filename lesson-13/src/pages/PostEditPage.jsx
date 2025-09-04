import { useAddPostMutation, useEditPostMutation, useGetPostByIdQuery } from "@/api/postsApi"
import Loader from "@/components/Loader"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const PostEditPage = () => {
  const { id } = useParams()
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  const [addPost, { isLoading: addPostIsLoading, isError: addPostIsError, error: addPostError }] = useAddPostMutation()
  const [editPost, { isLoading: editPostIsLoading, isError: editPostIsError, error: editPostError }] = useEditPostMutation()
  const { data: post, isLoading: postByIdIsLoading } = useGetPostByIdQuery(id)

  useEffect(() => {
    if (post) {
      setPostBody(post.body)
      setPostTitle(post.title)
    }
  }, [post])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addPost({ title: postTitle, body: postBody })
    setPostTitle('')
    setPostBody('')
    navigate('/posts')
    alert('Пост додано')
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const isConfirmed = confirm('Зберегти зміни?')
    if (isConfirmed) {
      await editPost({
        id,
        newPost: { title: postTitle, body: postBody }
      })
      setPostTitle('')
      setPostBody('')
      navigate('/posts')
    }
  }

  const content = (
    <div className="post-edit-page">
      <h1>{id ? 'Редагувати пост' : 'Додати пост'}</h1>
      <form onSubmit={id ? handleEdit : handleSubmit} className="post-edit-page__form">
        <label className="post-edit-page__label">
          Заголовок поста
          <input
            className="post-edit-page__input"
            required
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Введіть заголовок поста"
          />
        </label>
        <label className="post-edit-page__label">
          Текст поста
          <textarea
            className="post-edit-page__textarea"
            required
            type="text"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            placeholder="Введіть текст поста"
          />
        </label>
        <button disabled={editPostIsLoading || addPostIsLoading} type="submit">{id ? 'Редагувати пост' : 'Додати пост'}</button>
        {addPostIsError && (<p>{addPostError?.data?.message || 'Помилка додавання поста'}</p>)}
        {editPostIsError && (<p>{editPostError?.data?.message || 'Помилка редагування поста'}</p>)}
      </form>
    </div>
  )
  if (postByIdIsLoading) return <Loader />
  if (!post && id) return <h2>Пост не знайдено</h2>
  return (
    <>
      {content}
    </>
  )
}

export default PostEditPage
