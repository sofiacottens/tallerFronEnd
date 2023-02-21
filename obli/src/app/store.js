import { configureStore } from '@reduxjs/toolkit';
//import todosSlice from './slices/todosSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todosSlice: todosSlice,
  },
});