import React, { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor={props.id}>New name for {props.task}</label>
          <input
            id={props.id}
            className="form-control"
            type="text"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="row d-flex justify-content-around mt-3">
          <button
            type="button"
            className="btn btn-danger form-control col-4"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary form-control col-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
  const viewTemplate = (
    <div className="container">
      <div className="row d-flex justify-content-start mb-2 mt-2">
        <input
          className="form-control col-2"
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          autoComplete="off"
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="col align-middle vert" htmlFor={props.id}>
          {props.task}
        </label>
      </div>
      <div className="row d-flex justify-content-around mt-3">
        <button
          className="btn btn-outline-dark form-control col-4"
          type="button"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger form-control col-4 "
          type="button"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <li className="mb-3 mt-3">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}

export default Todo;
