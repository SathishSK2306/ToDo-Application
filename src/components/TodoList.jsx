import { useSelector, useDispatch } from "react-redux";
import { removeTodoItem } from "../redux/slices/todoListSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-4 overflow-x-auto font-ovo">
      <table className="min-w-full table-auto  border border-amber-600 shadow-lg rounded-md">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Todo</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.todoList?.map((todo, index) => (
            <tr
              key={todo.id}
              className="border-b border-amber-600 hover:bg-amber-50"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{todo.todo}</td>
              <td className="px-4 py-2">
                {todo.completed ? (
                  <span className="text-green-600 font-semibold">✔️ Done</span>
                ) : (
                  <span className="text-red-500 font-semibold">❌ Pending</span>
                )}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => dispatch(removeTodoItem({ id: todo.id }))}
                  className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition duration-200 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {todos.todoList?.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No todos available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
