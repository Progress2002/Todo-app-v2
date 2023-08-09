import TodoList from "./components/TodoList";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
  return (
    <div id="main-container">
      <div>
        <h1 className="title">To-Do List</h1>
      </div>
      <FormInput />
      <TodoList />
    </div>
  );
}

export default App;
