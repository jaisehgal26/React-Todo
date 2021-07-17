import React, { useState } from "react";

let id = 4;
function Form(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      id: `t${++id}`,
      task: enteredTask,
    };
    props.onSaveTaskData(task);
    setEnteredTask("");
  };
  return (
    <div>
      <div className="row">
        <h1 className="col-12 text-center">Todo</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <label htmlFor="new-todo-input" className="col">
            <h2 className="text-center">What need's to be done?</h2>
          </label>
        </div>
        <div className="row">
          <div className="col">
            <input
              value={enteredTask}
              className="form-control"
              type="text"
              id="new-todo-input"
              autoComplete="off"
              onChange={taskHandler}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-dark form-control mt-2" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
