import { addTask, showTodos } from '../features/todo/todoSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const Form = () => {
  const dispatch = useAppDispatch();
  const task = useAppSelector((state) => state.todo.task);

  return (
    <form
      className="flex justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(showTodos());
        dispatch(addTask(''));
      }}
    >
      <input
        className="outline-none"
        value={task}
        onChange={(e) => dispatch(addTask(e.target.value))}
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
