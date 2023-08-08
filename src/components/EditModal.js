import { useDispatch } from "react-redux"
import { editTodo } from "../Redux/todoSlice"
import { useState } from "react";

const EditModal = ({ isActive, id, text, closeModal }) => {
  const [editedText, setEditedText] = useState(text);
  const dispatch = useDispatch();
  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(editTodo({
      id:id,
      updatedTodo: editedText
    }));
    closeModal();
  }

  const handleChange = (e) => {
    const { value } = e.target
    setEditedText(value)
  }

  return (
    <div id='EditModal' className={isActive ? 'active' : ''}>
      <div>
        <button onClick={closeModal}>X</button>
        <p>Edit Message</p>
      </div>
      <p>{text}</p>

      <form onSubmit={handleSubmission}>
        <input type="text" value={editedText} onChange={handleChange} />
        <button type="submit"> Edit</button>
      </form>
    </div>
  )
}

export default EditModal
