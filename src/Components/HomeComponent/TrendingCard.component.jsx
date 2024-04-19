import React from "react";

import MovieCardComponent from "../MovieCard.component";

const TrendingCardComponent = ({ trending, isLoading }) => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-8 gap-6">
        {trending?.results?.map((movie) => {
          return (
            <MovieCardComponent
              key={movie?.id}
              movie={movie}
              isLoading={isLoading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCardComponent;
