import { useAppSelector } from '../app/hooks';
import { TodoItem } from './';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div className="mt-3 pl-7">
      <ul className="list-disc">
        {todos.map((todo, index) => {
          return <TodoItem key={index} todo={todo} />;
        })}
      </ul>
    </div>
  );
};
