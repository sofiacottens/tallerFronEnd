import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rubros: [],
  filteredRubros: [],
};

const rubrosSlice = createSlice({
  name: 'rubros',
  initialState,
  reducers: {
    setRubros: (state, action) => {
      const { payload } = action;
      state.rubros = payload;
    },
    setFilteredRubros: (state, action) => {
      const { payload } = action;
      state.filteredrubros = payload;
    },
    addTodo: (state, action) => {
      const { payload } = action;
      state.rubros = [...state.rubros, payload];
      state.filteredrubros = [...state.filteredrubros, payload];
    },
    deleteTodoById: (state, action) => {
      const { payload } = action;
      const newTodoList = state.rubros.filter((todo) => todo.id !== payload);
      state.rubros = newTodoList;
      state.filteredrubros = newTodoList;
    },
    completeTodoById: (state, action) => {
      const { payload } = action;
      const newTodoList = state.rubros.map((todo) => {
        if (todo.id === payload) {
          todo.completed = true;
        }
        return todo;
      });
      state.rubros = newTodoList;
      state.filteredrubros = newTodoList;
    },
  },
});

export const {
  setRubros,
  setFilteredRubros,
  addTodo,
  deleteTodoById,
  completeTodoById,
} = rubrosSlice.actions;
export default rubrosSlice.reducer;
