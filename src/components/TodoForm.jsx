import { useDispatch } from "react-redux";
import { addTodoItem } from "../redux/slices/todoListSlice";
import { useState } from "react";
const TodoForm = () => {
    let [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        dispatch(addTodoItem({ id: Date.now(), todo: inputValue, completed: false,eatingDone:true }));
        setInputValue("");
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input type="text" placeholder="Add a new todo" value={inputValue} onChange={handleChange}   />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
export default TodoForm