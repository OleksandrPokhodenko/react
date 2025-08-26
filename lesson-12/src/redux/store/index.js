import postsReducer from "@/redux/slices/posts/postsSlise"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export default store