import { createSlice } from "@reduxjs/toolkit";

const initialState = {searchTerm: ''}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setSearchTerm: (state,action) =>{
            state.searchTerm = action.payload;

        },
        clearSearchTerm: (state) =>{
            state.searchTerm = '';

        }
    }
});


export const {setSearchTerm, clearSearchTerm} = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm

export default searchSlice.reducer;