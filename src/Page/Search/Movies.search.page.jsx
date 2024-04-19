import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useGetMovieSearchQuery,
  useGetMultiSearchQuery,
} from "../../store/endpoints/Search.endpoint";
import {
  LoadingComponent,
  SearchCardComponent,
  SeriesCardComponent,
} from "../../Components";

const MoviesSearchPage = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetMovieSearchQuery(name);

  return (
    <LoadingComponent isLoading={isLoading}>
      <div className=" space-y-5">
        {data?.results?.map((mv) => {
          return (
            <div key={mv?.id}>
              {/* <Link to={`/movie_detail/${mv?.id}`}>
                <div className=" md:h-[240px] flex flex-col md:flex-row space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
                  <img
                    className=" md:h-full h-60 md:w-40 object-cover rounded-tl-lg rounded-bl-lg"
                    src={"https://image.tmdb.org/t/p/w500" + mv?.poster_path}
                    alt=""
                  />
                  <div className=" py-5">
                    <h1 className=" text-slate-100">{mv?.title}</h1>
                    <span className=" text-slate-500 text-sm">
                      {mv?.release_date}
                    </span>
                    <p className=" text-secondary-50 text-xs md:text-sm">{mv?.overview}</p>
                  </div>
                </div>
              </Link> */}
              <SearchCardComponent data={mv} type={"movie_detail"} />
            </div>
          );
        })}
      </div>
    </LoadingComponent>
  );
};

export default MoviesSearchPage;
