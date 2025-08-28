import PaginationBlock from "./components/PaginationBlock";
import PostForm from "./components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { useEffect, useState } from "react";
import { createPost, deletePost, fetchPosts } from "@/redux/slices/posts/postsThunks";
import Loader from "@/components/Loader";
import { setCurrentPage } from "@/redux/slices/posts/postsSlice";

function PostsPage() {
    const {
        postsPerPage,
        currentPage,
        dataPosts,
        status,
        error
    } = useSelector((state) => state.posts);

    const [id, setId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts({ pageNumber: currentPage, itemsPerPage: postsPerPage }));
    }, [dispatch, currentPage, postsPerPage, id]);

    const handleDelete = (id) => {
        dispatch(deletePost(id))
        setId(id)
        if (dataPosts.length === 1 && currentPage > 1) dispatch(setCurrentPage(currentPage - 1))
    }

    const handleSubmit = (title, body, author, setAuthor, setBody, setTitle) => {
        const id = Date.now();
        setId(id)
        const likes = Math.floor(Math.random() * 500);
        const dislikes = Math.floor(Math.random() * 500);
        dispatch(createPost({ id, title, body, authorId: author, likesNumber: likes, dislikesNumber: dislikes }))
        setAuthor('');
        setBody('');
        setTitle('');
    }

    return (
        <section className="posts-page">
            <div className="posts-page__container">
                <div className="post-page__box">
                    <PostForm onSubmit={handleSubmit} />
                    {status === 'loading' && <Loader />}
                    {status === 'failed' && <h2>Помилка: {error}</h2>}
                    <PostsList postsList={dataPosts} onDelete={handleDelete} />
                    {status === 'success' && dataPosts.length === 0 && <h2>Список постів порожній</h2>}
                    <PaginationBlock />
                </div>
            </div>
        </section>
    );
}

export default PostsPage;