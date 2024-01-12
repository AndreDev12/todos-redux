import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  task: string;
  todos: Array<string>;
};

const initialState: InitialStateProps = {
  task: '',
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    showTodos: (state) => {
      state.todos = [...state.todos, state.task];
    },
  },
});

export const { addTask, showTodos } = todoSlice.actions;
export default todoSlice.reducer;
