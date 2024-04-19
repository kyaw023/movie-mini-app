import React, { useState } from "react";
import { useGetTopRatedMovieQuery } from "../../store/endpoints/Movie.endpoint";
import {
  FetchingComponent,
  LoadingComponent,
  MovieCardComponent,
} from "../../Components";
import "animate.css";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../Components/ui/pagination";

const TopratedMoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: topRatedMovie,
    isLoading,
    isFetching,
  } = useGetTopRatedMovieQuery(currentPage);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <FetchingComponent isFetching={isFetching}>
            <h1 className="text-slate-400">TopRated Movies</h1>
            <div className=" grid  md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
              {topRatedMovie?.results?.map((movie) => {
                return <MovieCardComponent key={movie?.id} movie={movie} />;
              })}
            </div>
          </FetchingComponent>
          <div className=" mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem className=" bg-white">
                  {currentPage === 1 ? (
                    <p></p>
                  ) : (
                    <PaginationPrevious
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    />
                  )}
                </PaginationItem>
                <PaginationItem className=" bg-white">
                  <PaginationLink href="#">{currentPage}</PaginationLink>
                </PaginationItem>

                <PaginationItem className="bg-white">
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopratedMoviePage;
