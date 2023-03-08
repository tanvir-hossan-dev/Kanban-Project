import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  return (
    <>
      <div className="lg:px-[100px] text-center lg:mt-[100px]">
        {/* Header  */}
        <div>
          <h2 className="font-bold text-[32px]">Drag & Drop</h2>
          <h1 className="font-bold text-[40px]">Lean Kanban Board</h1>
        </div>
        {/* Inpur form */}
        <form className="mt-8">
          <input
            type="text"
            placeholder="Create New Task"
            className="input input-bordered w-full max-w-sm"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn ml-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
