const Board = ({ tasks, task, index, setTasks }) => {
  const handleDelete = () => {
    let removeIndex = tasks.indexOf(task);
    tasks.splice(removeIndex, 1);
    setTasks((item) => item.filter((todo, i) => i !== removeIndex));
  };

  return (
    <div className="tasks">
      <p>
        <b>{task}</b>
      </p>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Board;
