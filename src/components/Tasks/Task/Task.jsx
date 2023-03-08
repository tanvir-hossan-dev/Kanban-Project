import React from "react";
import PropTypes from "prop-types";

const Task = ({ Title, TitleColor, Delete }) => {
  return (
    <div className="border-2 border-solid border-gray-400 rounded-sm">
      <h3 className={`py-4 ${TitleColor}  text-black font-bold`}>{Title}</h3>
      <ul className="mx-2">
        <li className="py-4 bg-gray-100 text-black font-medium my-2 rounded-sm">hello</li>
        <li className="py-4 bg-gray-100 text-black font-medium my-2 rounded-sm">hello</li>
      </ul>
      {Delete && <button className="btn w-[96%]  btn-error mb-2">{Delete}</button>}
    </div>
  );
};

Task.PropTypes = {
  Title: PropTypes.object,
  TitleColor: PropTypes.string,
  Delete: PropTypes.string,
};

export default Task;
