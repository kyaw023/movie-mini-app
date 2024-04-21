import React from "react";
import { Link } from "react-router-dom";

const CastCardComponent = ({ c }) => {
  return (
    <div className=" flex space-x-4">
      <img
        className=" w-24 h-24 object-cover rounded-md"
        src={
          c?.profile_path
            ? "https://image.tmdb.org/t/p/w500" + c?.profile_path
            : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
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
