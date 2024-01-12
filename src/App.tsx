import { TodoList, TodoState, Form } from './components';

function App() {
  return (
    <div className="flex h-screen bg-[#242526] flex-row w-full gap-2">
      <div className="m-auto w-80 border-[#3b89b9] border-[2px] rounded p-4">
        <Form />
        <TodoList />
        <TodoState />
      </div>
    </div>
  );
}

export default App;
