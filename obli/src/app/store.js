import { configureStore } from '@reduxjs/toolkit';
import movimientosSlice from './slices/movimientosSlice';
import rubrosSlice from './slices/rubrosSlice';
import userSlice from './slices/userSlice';
import mediosSlice from './slices/mediosSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    movimientosSlice: movimientosSlice,
    rubrosSlice: rubrosSlice,
    mediosSlice: mediosSlice,
  },
});