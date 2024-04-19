import React from "react";

const CastCardComponent = ({ title, data }) => {
  return (
    <div>
      <h1 className=" text-2xl font-semibold text-slate-50 mb-5">{title}</h1>
      <div className=" grid md:grid-cols-4 grid-cols-2 gap-4 shadow-2xl ">
        {data?.slice(0, 15)?.map((c) => {
          return (
            <div className=" h-24 flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
              <img
                className=" h-24 w-20 object-cover rounded-tl-lg rounded-bl-lg"
                src={"https://image.tmdb.org/t/p/w500" + c?.profile_path}
                alt=""
              />
              <div className=" py-3">
                <h1 className=" text-slate-100">{c?.name}</h1>
                <span className=" text-slate-500 text-sm">
                  {c?.character || c?.department}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastCardComponent;
