import { postsAPI } from "@/services/postsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await postsAPI.fetchPostsAll()
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)