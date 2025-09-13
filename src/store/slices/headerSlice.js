import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeader(state, action) {
        console.log(`Setting header to ${action.payload}`);

            state.name = action.payload;
        }
    }
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;