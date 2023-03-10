import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import shortid from "shortid";
import Tasks from "./components/Tasks/Tasks";

let initialState = [
  {
    name: "To Do",
    color: "bg-gray-300",
    id: 1,
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
    id: 2,
    items: [
      {
        title: "NextJS",
        id: 4,
      },
      {
        title: "MongoDB",
        id: 5,
      },
    ],
  },
  {
    name: "Done",
    color: "bg-emerald-300",
    id: 3,
    items: [
      {
        title: "PHP",
        id: 6,
      },
    ],
  },
  {
    name: "Trash",
    delete: "Delete",
    color: "bg-red-300",
    id: 4,
    items: [
      {
        title: "Redux",
        id: 7,
      },
    ],
  },
];

function App() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [work, setWork] = useState(initialState);
  const [ready, setReady] = useState(false);

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

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = work;
    var dragItem = newBoardData[re.source.droppableId].items[re.source.index];
    newBoardData[re.source.droppableId].items.splice(re.source.index, 1);
    newBoardData[re.destination.droppableId].items.splice(re.destination.index, 0, dragItem);
    setWork(newBoardData);
  };

  const handleTrush = () => {
    work?.map((item) => {
      if (item.name === "Trash") {
        setReady(true);
        return (item.items = []);
      }
    });
    setWork(work);
  };

  useEffect(() => {
    setReady(false);
  }, [ready]);

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
        <DragDropContext onDragEnd={onDragEnd}>
          <Tasks work={work} handleTrush={handleTrush} />
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
