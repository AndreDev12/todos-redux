import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type InitialStateProps = {
  todo: Todo;
  todos: Array<Todo>;
  showTodos: Array<Todo>;
};

export type Todo = {
  id: string;
  todoName: string;
  isActive: boolean;
};

const initialState: InitialStateProps = {
  todo: {
    id: '',
    todoName: '',
    isActive: true,
  },
  todos: [],
  showTodos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo = {
        ...state.todo,
        id: uuidv4(),
        todoName: action.payload,
      };
    },
    showTodos: (state) => {
      state.todos = [...state.todos, state.todo];
      state.showTodos = state.todos;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id !== action.payload) return todo;
      });
      state.showTodos = state.todos;
    },
    changeTodoState: (state, action: PayloadAction<string>) => {
      for (const todo of state.todos) {
        if (todo.id === action.payload) {
          todo.isActive = !todo.isActive;
        }
      }
      state.showTodos = state.todos;
    },
    showTodoByState: (state, action: PayloadAction<boolean | undefined>) => {
      state.showTodos = state.todos.filter((todo) => {
        if (todo.isActive === action.payload || action.payload === undefined)
          return todo;
      });
    },
  },
});

export const {
  addTodo,
  showTodos,
  removeTodo,
  changeTodoState,
  showTodoByState,
} = todoSlice.actions;
export default todoSlice.reducer;
