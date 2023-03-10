import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task/Task";
import PropTypes from "prop-types";

const Tasks = ({ work, handleTrush }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {work?.map((item, index) => (
        <Droppable key={index} droppableId={index.toString()}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Task
                Title={item.name}
                TitleColor={item.color}
                items={item.items}
                handleTrush={handleTrush}
                del={item?.delete}
              />
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

Tasks.propTypes = {
  work: PropTypes.array,
  handleTrush: PropTypes.func,
};

export default Tasks;
