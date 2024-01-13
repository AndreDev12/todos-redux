import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo, showTodos } from '../features/todo/todoSlice';

export const Form = () => {
  const dispatch = useAppDispatch();
  const todoName = useAppSelector((state) => state.todo.todo.todoName);

  return (
    <form
      className="flex justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(showTodos());
        dispatch(addTodo(''));
      }}
    >
      <input
        className="outline-none"
        value={todoName}
        onChange={(e) => dispatch(addTodo(e.target.value))}
      />
      <button
        className="text-white border-[1px] px-2 text-sm font-medium border-[#3b89b9] rounded-sm"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};
