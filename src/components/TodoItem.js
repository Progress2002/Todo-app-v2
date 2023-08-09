import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../Redux/todoSlice";
import { useState } from "react";
import EditModal from "./EditModal";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoItem = (props) => {
  const { text, id, isCompleted } = props;
  const [isModalActive, setIsModalActive] = useState(false);
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(toggleComplete({ id })); // Pass the id as payload
  };

  const toggleEdithModal = () => setIsModalActive((prvState) => !prvState);

  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <div className="details">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompleted}
          id="checkbox"
        />
        <p
          className="todo-item"
          style={isCompleted ? { textDecoration: "line-through" } : {}}>
          {text}
        </p>
      </div>
      <div className="actions">
        <button
          className="edit"
          disabled={isCompleted}
          style={{ color: isCompleted && "gray", opacity: isCompleted && 0.3 }}
          type="button"
          onClick={toggleEdithModal}>
          <BiSolidEditAlt />
        </button>
        <button className="delete" onClick={handleDelete}>
          <FaRegTrashCan />
        </button>
      </div>

      <EditModal
        isActive={isModalActive}
        id={id}
        text={text}
        closeModal={toggleEdithModal}
      />
    </li>
  );
};

export default TodoItem;
