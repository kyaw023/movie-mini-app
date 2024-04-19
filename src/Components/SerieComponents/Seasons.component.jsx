import React from "react";
import { Badge } from "../ui/badge";

const SeasonsComponent = ({ seasons }) => {
  return (
    <div>
      {seasons?.map((season) => {
        return (
          <div
            key={season?.id}
            className=" bg-slate-100 rounded-xl shadow-md overflow-hidden mb-4 md:h-48"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0">
                <img
                  className=" h-40 w-full object-cover md:h-48 md:w-40"
                  src={"https://image.tmdb.org/t/p/w500" + season?.poster_path}
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  <h1>{season?.name}</h1>
                </div>
                <div className=" flex items-center space-x-2 mt-4">
                  <Badge>{season?.vote_average}</Badge>
                  <span className=" text-secondary-100">
                    {"Number of episodes " + `${season?.episode_count}`}
                  </span>
                </div>
                <div className=" mt-4">
                  <span className=" text-secondary-100 font-semibold">
                    {season?.season_number > 1 ? (
                      <div>
                        {"Season Number---" + `${season?.season_number}`}
                      </div>
                    ) : (
                      <div>{"Season Number---" + "Current Season"}</div>
                    )}
                  </span>
                </div>
                <p className="mt-2 text-slate-500 truncate">
                  {season?.overview}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeasonsComponent;
