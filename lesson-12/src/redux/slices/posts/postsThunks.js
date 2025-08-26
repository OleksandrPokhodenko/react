import apiClient from "@/api/apiClient";
import initialPosts from "@/data/postsData";
import { createAsyncThunk } from "@reduxjs/toolkit";

const postsAPI = apiClient("posts", 500, initialPosts)

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
        try {
            return await postsAPI.getPaginated(pageNumber, itemsPerPage)
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)