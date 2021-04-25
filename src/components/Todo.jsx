import { useState } from "react";
import AddSubTask from "./addSubTask";
import SubTask from "./subTasks";

let totalsubtasks = 0;

const Todo = ({ task, removeTodo, updateTask }) => {
  let [TaskText, setTaskText] = useState(task.text);
  let [subTasks, setSubTasks] = useState([]);
  let [editing, setEdit] = useState(false);

  const setsubtask = (subTask_info) => {
    totalsubtasks++;
    const newSubTask = { id: totalsubtasks, text: subTask_info };
    setSubTasks([...subTasks, newSubTask]);
  };

  const remove = () => {
    console.log("removed ", task.id);
    removeTodo(task.id);
  };

  const removeSubTask = (id) => {
    setSubTasks(subTasks.filter((task) => task.id !== id));
  };

  const hideTodo = () => {
    setEdit(true);
  };

  const editTask = () => {
    setTaskText(TaskText);
    setEdit(false);
    updateTask(task.id, TaskText);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="main-todo-box mt-4 border py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <div
        style={{
          justifyContent: "space-between",
          verticalAlign: "middle",
          display: editing ? "none" : "flex",
          flexDirection: "row",
          width: "100%",
        }}
        className="main-todo-name text-lg text-black font-semibold"
      >
        <p>{TaskText}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={remove}
            style={{
              float: "right",
              verticalAlign: "middle",
              height: "24px",
              marginBottom: "4px",
            }}
            className="ml-6 rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
          >
            <span className="material-icons-outlined"> close </span>
          </button>
          <button
            onClick={hideTodo}
            style={{
              float: "right",
              verticalAlign: "middle",
              height: "24px",
              marginBottom: "4px",
            }}
            className="ml-2 rounded-lg shadow-md text-white bg-gray-500 hover:bg-gray-700"
          >
            <span className="material-icons-outlined"> edit </span>
          </button>
        </div>
      </div>

      <div
        style={{ display: editing ? "block" : "none" }}
        className="add-task self-center sm:items-center"
      >
        <input
          className="px-4  m-4 shadow-md rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Edit"
          value={TaskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button
          onClick={editTask}
          style={{ verticalAlign: "baseline", height: "24px" }}
          className="ml-2 rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        >
          <span
            style={{ verticalAlign: "middle" }}
            className="material-icons-outlined"
          >
            done
          </span>
        </button>
      </div>
      {subTasks.map((subtask) => (
        <SubTask
          key={subtask.id}
          subTask={subtask}
          removeSubTask={removeSubTask}
        ></SubTask>
      ))}
      <AddSubTask addNewSubTask={setsubtask}></AddSubTask>
    </div>
  );
};

export default Todo;
