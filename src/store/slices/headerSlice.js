import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', id: null };

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeader(state, action) {
            const { id, name } = action.payload;
            console.log(`Setting header id: ${id}, name: ${name}`);

            state.name = name;
            state.id = id;
        }
    }
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;