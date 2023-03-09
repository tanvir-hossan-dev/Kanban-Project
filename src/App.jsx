import { useState } from "react";
import shortid from "shortid";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [work, setWork] = useState(initialState);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      setError("");

      work[0]?.items.unshift({ id: shortid.generate(), title: task });

      setWork(work);

      setTask("");
    } else {
      return setError("Write task");
    }
  };
  return (
    <>
      <div className="lg:px-[100px] px-4 text-center lg:mt-[100px] my-[20px]">
        {/* Header  */}
        <div>
          <h2 className="font-bold text-[32px]">Drag & Drop</h2>
          <h1 className="font-bold text-[40px]">Lean Kanban Board</h1>
        </div>
        {/* Inpur form */}
        <form className="my-8 flex  justify-center" onSubmit={hanldeSubmit}>
          <div className="">
            <input
              type="text"
              placeholder="Create New Task"
              className="input input-bordered w-full max-w-sm"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <p className="text-red-500">{error}</p>
          </div>
          <button type="submit" className="btn ml-4 sm:mt-4 md:mt-4 lg:mt-0">
            Submit
          </button>
        </form>
        {/* Tasks section  */}
        <Tasks work={work} />
      </div>
    </>
  );
}

let initialState = [
  {
    name: "To Do",
    color: "bg-gray-300",
    items: [
      {
        title: "ReactJS",
        id: 1,
      },
      {
        title: "NodeJS",
        id: 2,
      },
      {
        title: "ExpressJS",
        id: 3,
      },
    ],
  },
  {
    name: "Doing",
    color: "bg-sky-300",
    items: [
      {
        title: "NodeJS",
        id: 2,
      },
      {
        title: "ExpressJS",
        id: 3,
      },
    ],
  },
  ,
  {
    name: "Done",
    color: "bg-emerald-300",
    items: [
      {
        title: "ExpressJS",
        id: 3,
      },
    ],
  },
  {
    name: "Trash",
    delete: "Delete",
    color: "bg-red-300",
    items: [
      {
        title: "ExpressJS",
        id: 3,
      },
    ],
  },
];

export default App;
