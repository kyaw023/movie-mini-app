import React from "react";
import { Link } from "react-router-dom";

const PeopleCardComponent = ({ people }) => {
  return (
    <div>
      <Link to={`/people_detail/${people?.id}`}>
        <div className=" shadow-2xl h-[450px]">
          <img
            className=" h-[300px] object-cover w-full"
            src={"https://image.tmdb.org/t/p/w500" + people.profile_path}
            alt=""
          />

          
          <div className="px-3 py-3 mt-3">
            <h1 className=" text-xl font-semibold text-slate-100">
              {people?.name}
            </h1>
            <div className=" flex flex-wrap gap-1 mt-3">
              {people.known_for?.map((name) => {
                return (
                  <div className="mb-3">
                    <p className=" truncate text-xs text-gray-500">
                      {name.name ? name.name : name.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PeopleCardComponent;
