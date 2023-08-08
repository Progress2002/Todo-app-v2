import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../Redux/todoSlice";
import { useState } from "react";
import EditModal from "./EditModal";

const TodoItem = (props) => {
  const { text, id, isCompleted } = props;
  const [isModalActive, setIsModalActive] = useState(false)
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(toggleComplete({ id })); // Pass the id as payload
  };

  const toggleEdithModal = () => setIsModalActive((prvState) => !prvState)

  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li style={{border: '2px solid blue', width: '30%'}}>
      <input type="checkbox" checked={isCompleted} onChange={handleCompleted} />
      <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>{text}</p>
      <button type="button" onClick={toggleEdithModal}>Edit</button>
      <button onClick={handleDelete}>delete</button>
      <EditModal isActive={isModalActive} id={id} text={text} closeModal={toggleEdithModal}/>
    </li>
  );
};

export default TodoItem;
