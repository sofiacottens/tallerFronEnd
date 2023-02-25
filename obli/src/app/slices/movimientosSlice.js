import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movimientos: [],
  filteredMovimientos: [],
};

const movimientosSlice = createSlice({
  name: 'movimientos',
  initialState,
  reducers: {
    setMovimientos: (state, action) => {
      const { payload } = action;
      state.movimientos = payload;
    },
    setFilteredMovimientoss: (state, action) => {
      const { payload } = action;
      state.filteredMovimientos = payload;
    },
    addMovimiento: (state, action) => {
      const { payload } = action;
      state.movimientos = [...state.movimientos, payload];
      state.filteredMovimientos = [...state.filteredMovimientos, payload];
    },
    deleteMovimientoById: (state, action) => {
      const { payload } = action;
      const newMovsList = state.movimientos.filter((movimiento) => movimiento.id !== payload);
      state.movimientos = newMovsList;
      state.filteredMovimientos = newMovsList;
    },
  },
});

export const {
  setMovimientos,
  setFilteredMovimientoss,
  addMovimiento,
  deleteMovimientoById,
} = movimientosSlice.actions;
export default movimientosSlice.reducer;
