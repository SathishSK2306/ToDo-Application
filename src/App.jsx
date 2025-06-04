import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div>
      <h1>Todo application</h1>
      <TodoForm/>
      <hr />
      <h2>Todo List</h2>
      <TodoList/>
    </div>
  )
}
export default App