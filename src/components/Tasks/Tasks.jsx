import React, { useState } from "react";
import Task from "./Task/Task";

const Tasks = ({ work }) => {
  console.log(work);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {work?.map((item, index) => (
        <Task key={index} Title={item.name} TitleColor={item.color} items={item.items} del={item?.delete} />
      ))}
      {/* <Task Title="Doing" TitleColor="bg-sky-300" />
      <Task Title="Done" TitleColor="bg-emerald-300" />
      <Task Title="Trash" TitleColor="bg-red-500" Delete="Delete" /> */}
    </div>
  );
};

export default Tasks;
