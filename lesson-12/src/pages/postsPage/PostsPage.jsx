import PaginationBlock from "./components/PaginationBlock";
import PostsForm from "./components/PostsForm";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { useEffect } from "react";
import { fetchPosts } from "@/redux/slices/posts/postsThunks";
import Loader from "@/components/Loader";

function PostsPage() {
    const {
        postsPerPage,
        totalPages,
        currentPage,
        dataPosts,
        status,
        error
    } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts({ pageNumber: currentPage, itemsPerPage: postsPerPage }));
    }, [dispatch, currentPage, postsPerPage]);

    return (
        <section className="posts-page">
            <div className="posts-page__container">
                <div className="post-page__box">
                    <PostsForm />
                    {status === 'loading' && <Loader />}
                    {status === 'failed' && <h2>Error: {error}</h2>}
                    <PostsList postsList={dataPosts} />
                    {dataPosts.length === 0 && <h2>Список постів порожній</h2>}
                    <PaginationBlock />
                </div>
            </div>
        </section>
    );
}

export default PostsPage;