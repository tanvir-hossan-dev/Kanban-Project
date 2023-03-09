import React from "react";
import PropTypes from "prop-types";

const Task = ({ Title, TitleColor, items, del }) => {
  return (
    <div>
      <div className="border-2 border-solid border-gray-400 rounded-sm ">
        <h3 className={`py-4 ${TitleColor}  text-black font-bold`}>{Title}</h3>
        <ul className="mx-2">
          {items?.map((item) => (
            <li key={item.id} className="py-4 bg-gray-100 text-black font-medium my-2 rounded-sm">
              {item.title}
            </li>
          ))}
        </ul>
        {del && <button className="btn w-[96%] btn-error my-2">{del}</button>}
      </div>
    </div>
  );
};

Task.propTypes = {
  Title: PropTypes.string.isRequired,
  TitleColor: PropTypes.string.isRequired,
  Delete: PropTypes.string,
};

export default Task;
