import Loader from "@/components/Loader";
import { fetchPosts } from "@/redux/slices/posts/postsThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
    const { posts, loading, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchPosts())
    // }, [dispatch])

    return (
        <section className="posts-page">
            <h1 className="posts-page__title">Список постів</h1>
            <button disabled={loading} onClick={() => dispatch(fetchPosts())} className="posts-page__button">Завантажити пости</button>
            {loading ? <Loader /> :
                error ? <h2 className="posts-page__subtitle">Помилка завантаження</h2> :
                    <ul className="posts-page__list">
                        {posts.map(post => (
                            <li key={post.id} className="posts-page__item">
                                {post.title}
                            </li>
                        ))}
                    </ul>
            }

        </section>
    );
}

export default Posts;