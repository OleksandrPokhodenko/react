import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "@/redux/slices/productsSlice"
import postsReducer from "@/redux/slices/posts/postsSlise"

const store = configureStore({
    reducer: {
        products: productsReducer,
        posts: postsReducer
    }
})

export default store