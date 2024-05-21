import { useState } from "react";

const Input = ({ taskList, setTasks }) => {
  const [value, setValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    value
      ? setTasks([...taskList, value])
      : alert("The field must not be empty");
    setValue("");
  };

  return (
    <>
      <form>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Add a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
    </>
  );
};

export default Input;
