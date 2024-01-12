import { useState } from 'react';

type TodoItemProps = {
  todo: string;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <li
      className={isActive ? 'text-white' : 'text-white line-through'}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {todo}
    </li>
  );
};
