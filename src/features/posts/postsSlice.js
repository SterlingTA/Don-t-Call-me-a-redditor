import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [], isLoadingPosts: true, hasError: false, url: 'r/popular.json' }

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (url) => {
        const data = await fetch('https://www.reddit.com/'+url);
        const json = await data.json();
        return json
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        changeUrl(state,action){
            state.url = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadPosts.pending, (state) => {
            state.isLoadingPosts = true;
            state.hasError = false;
        })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.hasError = false;
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state) => {
                state.isLoadingPosts = false;
                state.hasError = true;
                state.posts = [];
            })
    }
});


export const selectPosts = (state) => state.posts.posts;

export const isLoadingPosts = (state) => state.posts.isLoadingPosts;

export const selectUrl = state => state.posts.url

export const {changeUrl} = postsSlice.actions;


export default postsSlice.reducer;