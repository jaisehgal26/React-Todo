import React from "react";
function Filter(props) {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary form-control col-3 overflow-hidden filter"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}

export default Filter;
