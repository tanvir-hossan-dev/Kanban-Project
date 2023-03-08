import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [task, setTask] = useState("");
  return (
    <>
      <div className="lg:px-[100px] px-4 text-center lg:mt-[100px] my-[20px]">
        {/* Header  */}
        <div>
          <h2 className="font-bold text-[32px]">Drag & Drop</h2>
          <h1 className="font-bold text-[40px]">Lean Kanban Board</h1>
        </div>
        {/* Inpur form */}
        <form className="my-8">
          <input
            type="text"
            placeholder="Create New Task"
            className="input input-bordered w-full max-w-sm"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn ml-4 mt-4">
            Submit
          </button>
        </form>
        {/* Tasks section  */}
        <Tasks />
      </div>
    </>
  );
}

export default App;
