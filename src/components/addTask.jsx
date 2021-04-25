import { useState } from "react";

const AddTask = ({ addNewTask }) => {
  let [text, setText] = useState("");

  const callAddTask = () => {
    if (text === "") {
      alert("cannot be blank");
      return;
    }
    addNewTask(text);
    setText("");
  };
  return (
    <div className="add-task self-center sm:items-center ">
      <input
        className="px-4 py-2 m-4 shadow-md rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={callAddTask}
        style={{ verticalAlign: "baseline", height: "50px" }}
        className="py-3 px-4 rounded-xl shadow-md text-white bg-green-500 hover:bg-green-700"
      >
        <span
          style={{ verticalAlign: "middle" }}
          className="material-icons-outlined"
        >
          done
        </span>
      </button>
    </div>
  );
};

export default AddTask;
