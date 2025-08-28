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

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (id, { rejectWithValue }) => {
        try {
            return await postsAPI.delete(id)
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (postData, { rejectWithValue }) => {
        try {
            return await postsAPI.create(postData)
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
