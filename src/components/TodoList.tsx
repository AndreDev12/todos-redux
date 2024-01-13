import { useAppSelector } from '../app/hooks';
import { TodoItem } from './';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div className="mt-3 px-7">
      <ul className="list-disc">
        {todos.map((todo, index) => {
          return <TodoItem key={index} todoName={todo.todoName} id={todo.id} />;
        })}
      </ul>
    </div>
  );
};
