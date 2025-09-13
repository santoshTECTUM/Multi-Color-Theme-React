import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import headerReducer from './slices/headerSlice';

export default configureStore({
  reducer:
   { 
    theme: themeReducer,
    header: headerReducer 
  }
});