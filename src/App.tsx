import { TodoList, TodoState, Form, AppWrapper } from './components';

function App() {
  return (
    <AppWrapper>
      <Form />
      <TodoList />
      <TodoState />
    </AppWrapper>
  );
}

export default App;
