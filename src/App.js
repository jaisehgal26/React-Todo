import React, { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Todo from "./components/Todo";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTask] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const taskDataHandler = (enteredTaskData) => {
    setTask((prevTasks) => {
      return [enteredTaskData, ...prevTasks];
    });
  };

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, task: newName };
      }
      return task;
    });
    setTask(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTask(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTask(updatedTasks);
  }
  const filterList = FILTER_NAMES.map((name) => (
    <Filter
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="container app">
      <Form onSaveTaskData={taskDataHandler}></Form>
      <div className="container">
        <div className="container">
          <div className="row mt-2 ">{filterList}</div>
        </div>
      </div>

      <h2 className="mt-2">{tasks.length} tasks remaining</h2>
      <ul className="list-unstyled">
        {tasks.filter(FILTER_MAP[filter]).map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
