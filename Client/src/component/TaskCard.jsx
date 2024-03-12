/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col text-white max-w-[250px] rounded-lg p-8 bg-slate-700 ">
        <h1>Name:- {task.title}</h1>
        <h3>Description:- {task.description}</h3>
        <div className="flex gap-4">
          <p>Priority :- {task.priority}</p>
          <p>Category :- {task.category}</p>
        </div>
        <div className="flex justify-between mt-3">
          <Link to={`/update-task/${task._id}`}>
            <button className="bg-green-400 p-2 rounded-md">Update</button>
          </Link>

          <button
            onClick={() => handleDelete(task._id)}
            className="bg-red-500 p-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
