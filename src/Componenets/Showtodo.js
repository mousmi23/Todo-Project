import React from "react";

function Showtodo(props) {
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col">
          <h2>{props.todo}</h2>
        </div>
        <div className="col">
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showtodo;
