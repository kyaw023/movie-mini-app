import React from "react";
import { Link } from "react-router-dom";

const SearchCardComponent = ({ data: mv, type }) => {
  return (
    <div className=" space-y-5">
      <div key={mv?.id}>
        <Link to={`/${type}/${mv?.id}`}>
          <div className=" md:h-[240px] flex flex-col md:flex-row space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
            <img
              className="  md:h-full h-60 md:w-40 object-cover rounded-tl-lg rounded-bl-lg"
              src={"https://image.tmdb.org/t/p/w500" + mv?.poster_path}
              alt=""
            />
            <div className=" py-5">
              <h1 className=" text-slate-100">{mv?.title || mv?.name}</h1>
              <span className=" text-slate-500 text-sm">
                {mv?.release_date || mv?.first_air_date}
              </span>
              <p className=" text-secondary-50 text-xs md:text-sm">
                {mv?.overview}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchCardComponent;
