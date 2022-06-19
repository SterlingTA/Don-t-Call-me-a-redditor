import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const data = await fetch('https://www.reddit.com/subreddits.json');
        const json = await data.json();
        return json;
    }
)

const initialState = {subreddits: [],isLoading : true, hasError: false,}
export const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(loadSubreddits.pending, (state) =>{
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadSubreddits.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        })
        .addCase(loadSubreddits.rejected, (state) =>{
            state.isLoading = false;
            state.hasError = true;
            state.subreddits = [];
        })
    }
});


export const selectSubs = state => state.subreddits.subreddits;

export const isLoadingSubs = state => state.subreddits.isLoading;

export default subredditSlice.reducer;