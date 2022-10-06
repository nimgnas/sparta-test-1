import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  let nextId = useRef(0);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onClick = () => {
    const todo = {
      id: nextId.current++,
      body: input,
    };
    setTodos([...todos, todo]);
  };

  return (
    <div className="layout">
      <div className="header">
        <div className="todo-form">
          <input onChange={onChange} value={input} />
          <button onClick={onClick}>추가하기</button>
        </div>
        <h1>Todo List</h1>
      </div>

      <div className="todo-container">
        {todos.map((todo) => (
          <div className="todo-box" key={todo.id}>
            {todo.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
