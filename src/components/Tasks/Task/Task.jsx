import React from "react";
import PropTypes from "prop-types";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Task = ({ Title, TitleColor, items, del, handleTrush }) => {
  return (
    <div>
      <div className="border-2 border-solid border-gray-400 rounded-sm ">
        <h3 className={`py-4 ${TitleColor}  text-black font-bold`}>{Title}</h3>
        <ul className="mx-2">
          {items?.length > 0 ? (
            items?.map((item, index) => {
              return (
                <Draggable key={item.id} index={index} draggableId={item.id.toString()}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="py-4 bg-gray-100 text-black font-medium my-2 rounded-sm"
                    >
                      {item.title}
                    </li>
                  )}
                </Draggable>
              );
            })
          ) : (
            <li className="py-4  text-black font-medium my-2 rounded-sm"></li>
          )}
        </ul>
        {del && (
          <button className="btn w-[96%] btn-error my-2" onClick={handleTrush}>
            {del}
          </button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  Title: PropTypes.string.isRequired,
  TitleColor: PropTypes.string.isRequired,
  del: PropTypes.string,
  items: PropTypes.array,
  handleTrush: PropTypes.func,
};

export default Task;
