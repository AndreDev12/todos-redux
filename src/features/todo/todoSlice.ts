import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type InitialStateProps = {
  todo: Todo;
  todos: Array<Todo>;
};

export type Todo = {
  id: string;
  todoName: string;
};

const initialState: InitialStateProps = {
  todo: {
    id: '',
    todoName: '',
  },
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo = {
        id: uuidv4(),
        todoName: action.payload,
      };
    },
    showTodos: (state) => {
      state.todos = [...state.todos, state.todo];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id !== action.payload) return todo;
      });
    },
  },
});

export const { addTodo, showTodos, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
