import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filteredTodos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const { payload } = action;
      state.todos = payload;
    },
    setFilteredTodos: (state, action) => {
      const { payload } = action;
      state.filteredTodos = payload;
    },
    addTodo: (state, action) => {
      const { payload } = action;
      state.todos = [...state.todos, payload];
      state.filteredTodos = [...state.filteredTodos, payload];
    },
    deleteTodoById: (state, action) => {
      const { payload } = action;
      const newTodoList = state.todos.filter((todo) => todo.id !== payload);
      state.todos = newTodoList;
      state.filteredTodos = newTodoList;
    },
    completeTodoById: (state, action) => {
      const { payload } = action;
      const newTodoList = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.completed = true;
        }
        return todo;
      });
      state.todos = newTodoList;
      state.filteredTodos = newTodoList;
    },
  },
});

export const {
  setTodos,
  setFilteredTodos,
  addTodo,
  deleteTodoById,
  completeTodoById,
} = todosSlice.actions;
export default todosSlice.reducer;
