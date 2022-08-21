import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggle(state, action) {
        const toggler = state.todos.find(todo => todo.id === action.payload.id )
        toggler.completed = !toggler.completed
    },
    todoDelete(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
  },
});


export const { addTodo, onEnter, toggle, todoDelete } = todoSlice.actions;

export default todoSlice.reducer;