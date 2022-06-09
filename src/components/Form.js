import React from "react";

const Form = ({ input, setInputText, todos, setTodos, setStatus,filteredTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="incomplete">incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
