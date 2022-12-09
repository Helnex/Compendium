import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
// import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async function () {
    const { data } = await axios.get('/api/posts')
    return data
})
export const fetchPost = createAsyncThunk('posts/fetchPost', async function (id) {
    const { data } = await axios.get(`/api/posts/${id}`)
    return data
})

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'resolved'
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        },

        [fetchPost.pending]: (state) => {
            state.posts.status = 'loading'
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'resolved'
        },
        [fetchPost.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        },
    },
})

export const postsReducer = postsSlice.reducer