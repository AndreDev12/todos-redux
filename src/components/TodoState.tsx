const todoState = [
  { state: 'All' },
  { state: 'Active' },
  { state: 'Completed' },
];

export const TodoState = () => {
  return (
    <div className="flex mt-3 align-middle">
      <span className="text-white">Show:</span>
      {todoState.map((value, index) => {
        return (
          <div key={index} className="ml-1 text-white">
            <a className="font-medium hover:text-[#3b89b9] hover:underline">
              {value.state}
            </a>
            {index + 1 < todoState.length && <span>{', '}</span>}
          </div>
        );
      })}
    </div>
  );
};
