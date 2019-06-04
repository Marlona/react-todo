import React, { useState } from 'react';
import './App.css';

const Todo =({ todo }) => <div className="todo">{todo.text}</div>;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

 

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function App() {
  const [todos, setTodos] = useState([
    { 
      text: "Learn about React",
      isCompleted: false
    },
    { 
      text: "Go watch Avengers again",
      isCompleted: false
    },
    { 
      text: "Build Todo list app in React",
      isCompleted: false
    }
  ]);

  function Todo({ todo, index, completeTodo }){
    return (
      <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
      >

      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
    );
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

return (
  
  <div className="app">
  <div className="todo-list">
    <div>
      <h2 className="todo-list-title"> Todo List </h2>
      <hr />
      {todos.map((todo, index) => (
      <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
</div>
 );
}
export default App;



