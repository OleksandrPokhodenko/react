import apiClient from "@/api/apiClient";
import initialPosts from "@/data/postsData";
import { createAsyncThunk } from "@reduxjs/toolkit";

const infinityPostsAPI = apiClient("infinityPosts", 500, initialPosts)

export const infinityFetchPosts = createAsyncThunk(
    'infinityPosts/fetchPosts',
    async ({ pageNumber, itemsPerPage, condition = false }, { rejectWithValue }) => {
        try {
            const res = await infinityPostsAPI.getPaginated(pageNumber, itemsPerPage)
            return { ...res, condition }
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const infinityDeletePost = createAsyncThunk(
    'infinityPosts/deletePost',
    async (id, { rejectWithValue }) => {
        try {
            return await infinityPostsAPI.delete(id)
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)