import React from "react";
import { Link } from "react-router-dom";
import FetchingComponent from "./FetchingComponent/Fetching.component";
import LoadingComponent from "./Loading/Loading.component";

const MovieCardComponent = ({ movie, isLoading, isFetching }) => {
  return (
    <div className="">
      <LoadingComponent isLoading={isLoading}>
        <FetchingComponent isFetching={isFetching}>
          <Link to={`/movie_detail/${movie.id}`} key={movie.id}>
            <div className=" cursor-pointer">
              <img
                className="h-[200px] object-cover bg-white"
                src={
                  movie && (movie.backdrop_path || movie.poster_path)
                    ? "https://image.tmdb.org/t/p/w500" +
                      (movie.backdrop_path || movie.poster_path)
                    : "https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
                }
                alt=""
              />
              <div className=" mt-2">
                <h1 className=" text-slate-50">
                  {movie?.title || movie?.name}
                </h1>
                <span className=" text-secondary-50">
                  {movie?.release_date || movie?.first_air_date}
                </span>
              </div>
            </div>
          </Link>
        </FetchingComponent>
      </LoadingComponent>
    </div>
  );
};

export default MovieCardComponent;
