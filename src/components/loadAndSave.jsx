const LoadAndSave = ({ saveTasks, loadTasks }) => {
  return (
    <footer
      className="bg-white shadow-md border bor"
      style={{ width: "100%", position: "fixed", bottom: "0px" }}
    >
      <button
        onClick={loadTasks}
        style={{ float: "right" }}
        className="border py-2 px-3 mr-9 mb-3 mt-3 rounded-xl shadow-md bg-blue-700 text-2xl font-bold text-white"
      >
        Load
      </button>
      <button
        onClick={saveTasks}
        style={{ float: "right" }}
        className="border py-2 px-3 mr-9 mb-3 mt-3 rounded-xl shadow-md bg-green-600 text-2xl font-bold text-white"
      >
        Save
      </button>
    </footer>
  );
};

export default LoadAndSave;
