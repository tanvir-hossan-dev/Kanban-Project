import React from "react";
import Task from "./Task/Task";

const Tasks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Task Title="To Do" TitleColor="bg-gray-300" />
      <Task Title="Doing" TitleColor="bg-sky-300" />
      <Task Title="Done" TitleColor="bg-emerald-300" />
      <Task Title="Trash" TitleColor="bg-red-500" Delete="Delete" />
    </div>
  );
};

export default Tasks;
