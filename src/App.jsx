import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1 className="text-2xl text-center pt-7">Todo application</h1>
      <TodoForm />
      <hr />
      <h2 className="text-2xl text-center pt-7">Todo List</h2>
      <TodoList />
    </div>
  );
};
export default App;
