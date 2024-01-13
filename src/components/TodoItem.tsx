import { useState } from 'react';

import { removeTodo } from '../features/todo/todoSlice';
import type { Todo } from '../features/todo/todoSlice';
import { useAppDispatch } from '../app/hooks';

export const TodoItem = ({ todoName, id }: Todo) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between">
      <li
        className={isActive ? 'text-white' : 'text-white line-through'}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {todoName}
      </li>
      <span
        className="text-[#3b89b9] font-bold cursor-pointer"
        onClick={() => dispatch(removeTodo(id))}
      >
        x
      </span>
    </div>
  );
};
