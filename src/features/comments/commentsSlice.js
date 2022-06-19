import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {comments:{}, visible: {}, isLoadingComments: {}, hasError: {}}

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (url,id) => {
        const data = await fetch('https://www.reddit.com/'+url+'.json');
        const json = await data.json();
        return {id:json[0], data: json[1]};
    }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        createVisibility(state,action){
            state.visible[action.payload] = false;
            state.isLoadingComments[action.payload] = true;
            state.hasError[action.payload] = false;


        },
        setVisibilty(state, action){
            state.visible[action.payload] = !state.visible[action.payload]
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loadComments.pending, (state,id) => {
    
            // state.isLoadingComments[id] = true;
            // state.hasError[id] = false;
        })
        .addCase(loadComments.fulfilled, (state, action) =>{
            console.log('fulfilled')
            console.log(action)
            const {id, data} = action.payload;

            state.comments[id.data.children[0].data.id] = data.data.children;
            state.isLoadingComments[id.data.children[0].data.id] = false;
            state.hasError[id.data.children[0].data.id] = false;

        })
        .addCase(loadComments.rejected, (state, action) => {
            console.log('rejected')
            console.log(action)
            state.isLoadingComments = false;
            state.hasError = true;
        })
    }
});



export const selectComments = state => {
    return state.comments.comments};

export const isLoadingComments = state => state.comments.isLoadingComments;

export const cVisible = state => state.comments.visible;

export const {createVisibility, setVisibilty} = commentsSlice.actions; 

export default commentsSlice.reducer