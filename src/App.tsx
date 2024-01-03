const todoState = [
  { state: 'All' },
  { state: 'Active' },
  { state: 'Completed' },
];

function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto w-80 border-violet-900 border-2">
        <div className="flex">
          <input className="border-[1px] border-black" />
          <button>Add Todo</button>
        </div>
        <div className="flex">
          <p>Show:</p>
          {todoState.map((value, index) => {
            return (
              <div key={index}>
                <a>{value.state}</a>
                {index + 1 < todoState.length && <span>{','}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
