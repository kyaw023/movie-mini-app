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
      {data?.results.length === 0 ? (
        <p className=" text-sm md:text-lg text-slate-200">
          There is no movie you search
        </p>
      ) : (
        <div className=" space-y-5">
          {data?.results?.map((mv) => {
            return (
              <div key={mv?.id}>
                <SearchCardComponent data={mv} type={"movie_detail"} />
              </div>
            );
          })}
        </div>
      )}
    </LoadingComponent>
  );
};

export default MoviesSearchPage;
