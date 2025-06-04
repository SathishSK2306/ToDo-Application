import { useSelector } from "react-redux"
import { removeTodoItem } from "../redux/slices/todoListSlice";
import { useDispatch } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.todoList?.map((todo) => (
        <div key={todo.id}>
          <span>{todo.todo}</span>
          <span>{todo.completed ? "✔️" : "❌"}</span>
          <button onClick={() => dispatch(removeTodoItem({id:todo.id}))}>Delete</button> 
        </div>
      ))}
    </div>
  )
}
export default TodoList