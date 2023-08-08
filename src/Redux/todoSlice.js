import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('myTodo')) ?? [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('myTodo', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('myTodo', JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].todo = updatedTodo;
        localStorage.setItem('myTodo', JSON.stringify(state));
      }
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
        localStorage.setItem('myTodo', JSON.stringify(state));
      }
    }
  },
});

export const allTodo = (state) => state.todo;

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
