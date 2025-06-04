import { useDispatch } from "react-redux";
import { addTodoItem } from "../redux/slices/todoListSlice";
import { useState } from "react";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch(
      addTodoItem({
        id: Date.now(),
        todo: inputValue,
        completed: false,
        eatingDone: true,
      })
    );
    setInputValue("");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 font-ovo">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 items-center justify-center bg-white shadow-md p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleChange}
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition duration-200 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
