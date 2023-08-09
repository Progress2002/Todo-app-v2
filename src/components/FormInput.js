import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../Redux/todoSlice";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/FormInput.css";

const FormInput = () => {
  const [todoText, setTodoText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoText(value);
  };

  useEffect(() => {
    todoText ? setDisabled(false) : setDisabled(true);
  }, [todoText]);

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        todo: todoText,
        completed: false,
      })
    );

    setTodoText("");
    setDisabled(true);
  };

  return (
    <form onSubmit={handleSubmission} id="addTodo-container">
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter Todo"
        autoFocus={true}
      />
      <button
        type="submit"
        disabled={disabled}
        className={!disabled ? "active" : ""}>
        ADD
      </button>
    </form>
  );
};

export default FormInput;
