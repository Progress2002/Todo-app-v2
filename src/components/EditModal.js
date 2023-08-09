import { useDispatch } from "react-redux"
import { editTodo } from "../Redux/todoSlice"
import { useState } from "react";
import '../styles/EditModal.css'
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";


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
      <div className="edit-container">
        <div className="edit-header">
          <button onClick={closeModal}><AiOutlineClose /> </button>
          <h2>Edit Message</h2>
        </div>
        <p className="original-text">
          <span>{text}</span>
        </p>

        <form onSubmit={handleSubmission}>
          <input type="text" value={editedText} onChange={handleChange} />
          <button type="submit"><BsCheck2 /> </button>
        </form>
      </div>
    </div>
  )
}

export default EditModal
