import productsReducer from "@/redux/slices/productsSlice"
import postsReducer from "@/redux/slices/posts/postsSlise"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        products: productsReducer,
        posts: postsReducer
    }
})

export default store