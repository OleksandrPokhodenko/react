import postsReducer from "@/redux/slices/posts/postsSlice"
import { configureStore } from "@reduxjs/toolkit"
import infinityPostsReducer from '@/redux/slices/infinityPosts/infinityPostsSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        infinityPosts: infinityPostsReducer
    }
})

export default store