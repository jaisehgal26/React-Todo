import React, { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
let id = 4;
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTask] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `t${++id}`, task: name, completed: false };
    setTask([newTask, ...tasks]);
  }

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
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        task={task.task}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  return (
    <div className="container app">
      <Form onSaveTaskData={addTask}></Form>
      <div className="container">
        <div className="container">
          <div className="row mt-2 d-flex justify-content-around">
            {filterList}
          </div>
        </div>
      </div>

      <h2 className="mt-2">
        {taskList.length} {tasksNoun} remaining
      </h2>
      <ul className="list-unstyled">{taskList}</ul>
    </div>
  );
}

export default App;
