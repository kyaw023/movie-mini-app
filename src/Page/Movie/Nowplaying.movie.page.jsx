import React from "react";
import { useGetNowPlayingMovieQuery } from "../../store/endpoints/Movie.endpoint";
import { LoadingComponent, MovieCardComponent } from "../../Components";
import "animate.css";

const NowplayingMoviePage = () => {
  const { data: nowPlayingMovie, isLoading } = useGetNowPlayingMovieQuery();
  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <h1 className="text-slate-400">NowPlaying Movies</h1>
          <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
            {nowPlayingMovie?.results?.map((movie) => {
              return <MovieCardComponent key={movie?.id} movie={movie} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NowplayingMoviePage;
