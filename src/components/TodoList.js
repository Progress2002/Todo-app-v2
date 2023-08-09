import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { allTodo } from "../Redux/todoSlice";
import { useState, useEffect } from "react";
import { clearCompleted } from "../Redux/todoSlice";
import Options from "./Options";
import "../styles/TodoList.css";

const TodoList = () => {
  const myTodo = useSelector(allTodo);
  const [todoItems, setTodoItems] = useState(myTodo);
  const completed = myTodo.filter((todo) => todo.completed === true);
  const active = myTodo.filter((todo) => todo.completed === false);
  const handleCompleted = () => setTodoItems(completed);
  const handleActive = () => setTodoItems(active);
  const handleAllTodo = () => setTodoItems(myTodo);

  const dispatch = useDispatch();

  const handleClearCompleted = () => dispatch(clearCompleted());

  useEffect(() => {
    setTodoItems(myTodo);
  }, [myTodo]);
  return (
    <div className="todo-container">
      <ul>
        {todoItems.map((item) => (
          <TodoItem
            id={item.id}
            key={item.id}
            isCompleted={item.completed}
            text={item.todo}
          />
        ))}
      </ul>
      <div className="footer-1">
        <p>
          {active.length > 1
            ? `${active.length} items left`
            : `${active.length} item left`}
        </p>
        <button type="button" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
      <Options
        all={handleAllTodo}
        active={handleActive}
        completed={handleCompleted}
        myTodo={myTodo}
        todoItems={todoItems}
      />
    </div>
  );
};

export default TodoList;
