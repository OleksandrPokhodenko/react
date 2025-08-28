import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import PostsList from "./postsPage/components/PostsList";
import Loader from "@/components/Loader";
import { infinityDeletePost, infinityFetchPosts } from "@/redux/slices/infinityPosts/infinityPostsThunks";

function InfinityScroll() {
    const {
        postsPerPage,
        currentPage,
        dataPosts,
        status,
        loadingMore
    } = useSelector((state) => state.infinityPosts);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(infinityDeletePost(id))
    }

    const [isFetching, setIsFetching] = useState(false)

    const handleLoadMore = useCallback(() => {
        const scrollTop = window.scrollY
        const windowHeight = window.innerHeight
        const fullHeight = document.documentElement.scrollHeight
        if (isFetching || loadingMore || status === "loading") return
        if (fullHeight <= windowHeight + scrollTop + 10) {
            setIsFetching(true)
            dispatch(infinityFetchPosts({ pageNumber: currentPage + 1, itemsPerPage: postsPerPage, condition: true })).finally(() => {
                setIsFetching(false)
            })
        }
    }, [currentPage, postsPerPage, isFetching])

    useEffect(() => {
        if (dataPosts.length === 0) {
            dispatch(infinityFetchPosts({ pageNumber: 1, itemsPerPage: postsPerPage }))
        }
    }, [dataPosts.length])

    useEffect(() => {
        window.addEventListener('scroll', handleLoadMore)
        return () => window.removeEventListener('scroll', handleLoadMore)
    }, [handleLoadMore])

    return (
        <section className="infinity-scroll-page">
            <div className="infinity-scroll-page__container">
                {status === 'loading' && <Loader />}
                <PostsList postsList={dataPosts} onDelete={handleDelete} />
                {loadingMore && <Loader />}
            </div>
        </section>
    );
}

export default InfinityScroll;