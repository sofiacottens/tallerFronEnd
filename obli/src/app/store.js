import { configureStore } from '@reduxjs/toolkit';
import movimientosSlice from './slices/movimientosSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    movimientosSlice: movimientosSlice,
  },
});