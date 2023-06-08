import { configureStore } from '@reduxjs/toolkit';
import ideasReducer from './listSlice.js';

const store = configureStore({
    reducer: {
        list: ideasReducer,
    },
});

export default store;
