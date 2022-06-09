import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Form.js";
import Form from "./components/Form.js";
import Todolist from "./components/Todolist.js";

function App() {
  //states
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //*run once the app starts up
  useEffect(() => {
    getLocalTodos();
  }, []);


  //*use effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //above error should go when u place filter handler funtion in above useEffect
  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //load from local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  };

  return (
    <div className="App">
      {/* <h1> Hello react </h1>  */}
      <header>
        <h1> To Do List</h1>
      </header>
      <Form
        input={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        // filteredTodos={filteredTodos}
      />
      <Todolist
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        // setInputText={setInputText}
        todos={todos}
      />
    </div>
  );
}

export default App;
