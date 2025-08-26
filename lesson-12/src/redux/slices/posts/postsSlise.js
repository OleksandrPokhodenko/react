import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./postsThunks"

const initialState = {
    postsPerPage: 5,
    totalPages: 1,
    currentPage: 1,
    dataPosts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'counter',
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
                state.status = 'success'
                state.dataPosts = action.payload.items
                state.totalPages = action.payload.pagination.totalPages
                state.currentPage = action.payload.pagination.currentPage
                state.postsPerPage = action.payload.pagination.pageSize
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { setCurrentPage } = postsSlice.actions

export default postsSlice.reducer