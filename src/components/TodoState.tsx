import { showTodoByState } from '../features/todo/todoSlice';
import { useAppDispatch } from '../app/hooks';

const todoState = [
  { state: 'All' },
  { state: 'Active' },
  { state: 'Completed' },
];

export const TodoState = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex mt-3 align-middle">
      <span className="text-white">Show:</span>
      {todoState.map((item, index) => {
        return (
          <div key={index} className="group ml-1 text-white">
            <a
              className="text-[#3b89b9] underline group-hover:text-white group-hover:no-underline"
              onClick={() => {
                if (item.state === 'Active') {
                  dispatch(showTodoByState(true));
                } else if (item.state === 'Completed') {
                  dispatch(showTodoByState(false));
                } else {
                  dispatch(showTodoByState());
                }
              }}
            >
              {item.state}
            </a>
            {index + 1 < todoState.length && <span>{', '}</span>}
          </div>
        );
      })}
    </div>
  );
};
