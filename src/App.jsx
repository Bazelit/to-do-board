import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <main>
      <div>
        <h1>To-Do Board</h1>
        <Input taskList={tasks} setTasks={setTasks} />
      </div>
      <div className="tasks-grid">
        {tasks.map((task, index) => (
          <Board
            setTasks={setTasks}
            index={index}
            key={index}
            tasks={tasks}
            task={task}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
