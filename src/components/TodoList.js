import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const inputValueChanged = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="login-main-container">
      <h2>Your Todos</h2>
      <input type="text" value={newTodo} onChange={inputValueChanged} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.length === 0 ? (
        <p>No todos added</p>
      ) : (
        <ul style={{ marginBottom: "10px" }}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
