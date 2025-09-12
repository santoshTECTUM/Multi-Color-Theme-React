import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      console.log(`Setting theme to ${action.payload}`);
      state.name = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;