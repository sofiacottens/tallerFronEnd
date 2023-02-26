import { createSlice } from '@reduxjs/toolkit';

const initialState = { medios:
  [
    {nombre: 'Efectivo', 
    tipo: 'gasto'}, 
    { nombre: 'Débito', 
    tipo: 'gasto'}, 
    { nombre: 'Crédito', 
    tipo: 'gasto'}, 
    { nombre: 'Efectivo', 
    tipo: 'ingreso'}, 
    { nombre: 'Banco', 
    tipo: 'ingreso'}, 

  ],
  filteredmedios: [],

};

const mediosSlice = createSlice({
  name: 'medios',
  initialState,
  reducers: {
    setMedios: (state, action) => {
      const { payload } = action;
      state.medios = payload;
    },
    setFilteredMedios: (state, action) => {
      const { payload } = action;
      state.filteredmedios = payload;
    },
    
  },
});

export const {
  setMedios,
  setFilteredMedios,
  
} = mediosSlice.actions;
export default mediosSlice.reducer;
