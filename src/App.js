import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  };

  const deleteComletedTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isComplited !== true));
  };

  const resetTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.text === null));
  };

  const completedTodosCounter = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          todos={todos}
          deleteCompletedTodos={deleteComletedTodosHandler}
          resetTodos={resetTodosHandler}
          completedTodosExist={!!completedTodosCounter}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCounter > 0 && (
        <h3>{`You have completed ${completedTodosCounter} ${
          completedTodosCounter === 1 ? "todo!" : "todos!"
        }`}</h3>
      )}
    </div>
  );
}

export default App;
