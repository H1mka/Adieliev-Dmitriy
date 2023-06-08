import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ideasList: [],
    completed: [],
    value: 0,
};

export const ideasSlice = createSlice({
    name: 'idea-list',
    initialState,
    reducers: {
        newIdea: (state, action) => {
            state.ideasList.push(action.payload);
        },
        setIdeas: (state, action) => {
            state.ideasList = action.payload;
        },
        // completeIdea: (state) => {},
        // increment: (state) => {
        //     state.value += 1;
        // },
    },
});

export const { newIdea, setIdeas, increment } = ideasSlice.actions;

export const selectIdeas = (state) => state.list.ideasList;

export default ideasSlice.reducer;
