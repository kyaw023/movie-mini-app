import React from "react";
import { Link } from "react-router-dom";


const MovieCardComponent = ({ movie }) => {
  return (
    <div className="">
      <Link to={`/movie_detail/${movie.id}`} key={movie.id}>
        <div className=" cursor-pointer">
          <img
            className=" h-[200px] object-cover"
            src={
              "https://image.tmdb.org/t/p/w500" + movie?.backdrop_path ||
              movie?.poster_path
            }
            alt=""
          />
          <div className=" mt-2">
            <h1 className=" text-slate-50">{movie?.title || movie?.name}</h1>
            <span className=" text-secondary-50">
              {movie?.release_date || movie?.first_air_date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardComponent;
