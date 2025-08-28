import { createSlice } from "@reduxjs/toolkit"
import { createPost, deletePost, fetchPosts } from "./postsThunks"

const initialState = {
    postsPerPage: 5,
    totalPages: 1,
    currentPage: 1,
    dataPosts: [],
    status: 'idle',
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.dataPosts = action.payload.items
                state.status = 'success'
                state.totalPages = action.payload.pagination.totalPages
                state.currentPage = action.payload.pagination.currentPage
                state.postsPerPage = action.payload.pagination.pageSize
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(deletePost.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'success'
                state.dataPosts = state.dataPosts.filter(post => post.id !== action.payload.id)
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(createPost.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'success'
                state.dataPosts.push(action.payload)
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { setCurrentPage } = postsSlice.actions

export default postsSlice.reducer