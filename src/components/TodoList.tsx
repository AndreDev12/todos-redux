import { useAppSelector } from '../app/hooks';
import { TodoItem } from './';

export const TodoList = () => {
  const showTodos = useAppSelector((state) => state.todo.showTodos);

  return (
    <div className="mt-3 px-7">
      <ul className="list-disc">
        {showTodos.map((todo, index) => {
          const { id, todoName, isActive } = todo;
          return (
            <TodoItem
              key={index}
              todoName={todoName}
              id={id}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </div>
  );
};
