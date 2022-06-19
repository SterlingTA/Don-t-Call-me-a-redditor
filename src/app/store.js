import { configureStore } from "@reduxjs/toolkit";


import  searchSliceReducer  from "../features/search/searchSlice";
import postsSliceReducer from "../features/posts/postsSlice";
import subredditSliceReducer from "../features/subreddit/subredditSlice";
import commentsSliceReducer from "../features/comments/commentsSlice";

export default configureStore({
    reducer: {search: searchSliceReducer, posts: postsSliceReducer, subreddits: subredditSliceReducer, comments: commentsSliceReducer},
})