import React from "react";

import MovieCardComponent from "../MovieCard.component";
import FetchingComponent from "../FetchingComponent/Fetching.component";

const TrendingCardComponent = ({ trending, isLoading, isFetching }) => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-8 gap-6">
        {trending?.results?.map((movie) => {
          return (
            <FetchingComponent isFetching={isFetching}>
              <MovieCardComponent
                key={movie?.id}
                movie={movie}
                isLoading={isLoading}
              />
            </FetchingComponent>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCardComponent;
