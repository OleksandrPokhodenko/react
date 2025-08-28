import { createSlice } from "@reduxjs/toolkit"
import { infinityDeletePost, infinityFetchPosts } from "./infinityPostsThunks"

const initialState = {
    postsPerPage: 5,
    totalPages: 1,
    currentPage: 1,
    dataPosts: [],
    status: 'idle',
    error: null,
    loadingMore: false
}

const infinityPostsSlice = createSlice({
    name: 'infinityPosts',
    initialState,
    reducers: {
        setInfinityCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(infinityFetchPosts.pending, (state, action) => {
                if (action.meta.arg.condition) {
                    state.loadingMore = true
                }
                else {
                    state.status = 'loading'
                    state.error = null
                }
            })
            .addCase(infinityFetchPosts.fulfilled, (state, action) => {
                if (action.meta.arg.condition) {
                    state.dataPosts = [...state.dataPosts, ...action.payload.items]
                    state.loadingMore = false
                }
                else {
                    state.dataPosts = action.payload.items
                    state.status = 'success'
                    state.loadingMore = false
                }
                state.totalPages = action.payload.pagination.totalPages
                state.currentPage = action.payload.pagination.currentPage
                state.postsPerPage = action.payload.pagination.pageSize
            })
            .addCase(infinityFetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.loadingMore = false
            })
            .addCase(infinityDeletePost.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(infinityDeletePost.fulfilled, (state, action) => {
                state.status = 'success'
                state.dataPosts = state.dataPosts.filter(post => post.id !== action.payload.id)
            })
            .addCase(infinityDeletePost.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { setInfinityCurrentPage } = infinityPostsSlice.actions

export default infinityPostsSlice.reducer