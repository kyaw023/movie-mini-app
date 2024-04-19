import React from "react";
import { Link } from "react-router-dom";

const CastCardComponent = ({ c }) => {
  return (
    <div className=" flex space-x-4">
      <img
        className=" w-24 h-24 object-cover rounded-md"
        src={
          "https://image.tmdb.org/t/p/w500" + c?.profile_path
            ? "https://image.tmdb.org/t/p/w500" + c?.profile_path
            : "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/fd35c-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
        }
        alt=""
      />
      <div>
        <Link to={`/people_detail/${c.id}`}>
          <h1 className=" text-lg font-semibold text-slate-300">{c?.name}</h1>
        </Link>
        <span className=" text-secondary-50">
          {c?.character || c?.department}
        </span>
      </div>
    </div>
  );
};

export default CastCardComponent;
