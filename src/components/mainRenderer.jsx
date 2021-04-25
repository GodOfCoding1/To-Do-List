import Todo from "./Todo";
import AddTask from "./addTask";
import React, { useState } from "react";
import LoadAndSave from "./loadAndSave";

var totalTasks = 0;
function downloadObjectAsJson(exportObj, exportName) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

const MainApp = () => {
  var [tasks, setTasks] = useState([]);

  const setTask = (mainTask_info) => {
    totalTasks++;

    const newTask = { id: totalTasks, text: mainTask_info };

    setTasks([...tasks, newTask]);
  };

  let removeMainTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTasks = () => {
    downloadObjectAsJson(tasks, "tasks");
  };

  const loadTasks = () => {
    alert("Cant load tasks right now");
  };

  const getChangeInTasks = (id, text) => {
    updateTask(id, text);
  };

  const updateTask = (id, text) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { id: id, text: text } : task))
    );
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddTask addNewTask={setTask} />
      </div>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          removeTodo={removeMainTask}
          updateTask={getChangeInTasks}
        ></Todo>
      ))}
      <div style={{ width: "100%" }} className="py-20"></div>

      <LoadAndSave saveTasks={saveTasks} loadTasks={loadTasks}></LoadAndSave>
    </React.Fragment>
  );
};

export default MainApp;
