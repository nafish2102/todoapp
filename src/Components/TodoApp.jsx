import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") {
      alert("⚠️ Please enter a task!");
      return;
    }
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask("");
    alert("✅ Task added successfully!");
  };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        addTodo();
        }
    };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h1>To-Do List</h1>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress} 
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-text">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <div className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
