import React, { useState } from "react";
import Showtodo from "./Showtodo";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("add a new item");
  const [list, setList] = useState([]);

  const onChangehandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newList = todo;
    setList([...list, newList]);
    setTodo("");
  };

  const deleteitem = (a) => {
    const finaldata = list.filter((currEl, index) => {
      return index !== a;
    });
    setList(finaldata);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row heading text-white">
            <div className="col  p-2">
              <h2 className="text-center">Todo App </h2>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={todo}
                  onChange={onChangehandler}
                />
              </div>
              <button type="submit" className="btn addbtn mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>

          {list.map((value, index) => {
            return <Showtodo id={index} todo={value} onSelect={deleteitem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
