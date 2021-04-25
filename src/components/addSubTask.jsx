import { useState } from "react";

const AddSubTask = ({ addNewSubTask }) => {
  let [text, setText] = useState("");

  const callAddTask = () => {
    if (text === "") {
      alert("cannot be blank");
      return;
    }
    addNewSubTask(text);
    setText("");
  };
  return (
    <div className="add-task self-center sm:items-center">
      <input
        className="px-4  m-4 shadow-md rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Add Sub-Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={callAddTask}
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
  );
};

export default AddSubTask;
