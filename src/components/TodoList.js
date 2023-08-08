import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { allTodo } from "../Redux/todoSlice"

const TodoList = () => {
  const myTodo = useSelector(allTodo)
  return (
    <ul>
      {
        myTodo.map((todo) => (
          <TodoItem id={todo.id} key={todo.id} isCompleted={todo.completed} text={todo.todo}/>
        ))
      }
    </ul>
  )
}

export default TodoList
