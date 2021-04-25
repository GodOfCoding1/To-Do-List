import { useState } from "react";

const SubTask = ({ subTask, removeSubTask }) => {
  let [TaskText, setTaskText] = useState(subTask.text);
  let [editing, setEdit] = useState(false);

  const remove = () => {
    console.log("removed subtask", subTask.id);
    removeSubTask(subTask.id);
  };

  const hideSubTodo = () => {
    setEdit(true);
  };

  const editTask = () => {
    setTaskText(TaskText);
    setEdit(false);
  };

  return (
    <div
      className="sub-tasks-box"
      style={{ width: "100%", margin: 0, marginTop: "4px" }}
    >
      <div
        className="sub-tasks"
        style={{
          display: editing ? "none" : "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
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
            className="ml-6 rounded-lg shadow-md text-white bg-red-400 hover:bg-red-700"
          >
            <span className="material-icons-outlined"> close </span>
          </button>
          <button
            onClick={hideSubTodo}
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
    </div>
  );
};
export default SubTask;
