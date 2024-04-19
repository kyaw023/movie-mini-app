import React, { useState } from "react";
import { useGetPopularMovieQuery } from "../../store/endpoints/Movie.endpoint";
import { LoadingComponent, MovieCardComponent } from "../../Components";
import "animate.css";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../Components/ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPagePlus,
  setCurrentPagePrev,
} from "../../store/slice/pagination/PaginationSlice";
const PopularMoviePage = () => {
  const currentPage = useSelector((state) => state.pagination?.currentPage);

  const dispatch = useDispatch();

  // const paginationHandler = (type) => {
  //   if (type === "minus") {
  //     if (currentPage > 1) {
  //       dispatch(setCurrentPage(currentPage - 1));
  //     }
  //   } else {
  //     dispatch(setCurrentPage(currentPage + 1));
  //   }
  // };

  const {
    data: popularMovies,
    isLoading,
    isFetching,
  } = useGetPopularMovieQuery(currentPage);

  console.log(isFetching);

  return (
    <div className=" ">
      <LoadingComponent isLoading={isLoading}>
        <div>
          {isFetching ? (
            <div className=" flex items-center justify-center h-screen">
              <p className=" text-sky-50">Data is Fecting Please wait</p>
            </div>
          ) : (
            <div>
              <h1 className="text-slate-400">Popular Movie</h1>
              <div className=" grid  md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
                {popularMovies?.results?.map((movie) => {
                  return <MovieCardComponent key={movie?.id} movie={movie} />;
                })}
              </div>
            </div>
          )}
        </div>
        <div className=" mt-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem className=" bg-white">
                <PaginationPrevious
                  onClick={() => dispatch(setCurrentPagePrev(1))}
                />
              </PaginationItem>
              <PaginationItem className=" bg-white">
                <PaginationLink href="#">{currentPage}</PaginationLink>
              </PaginationItem>

              <PaginationItem className="bg-white">
                <PaginationNext
                  onClick={() => dispatch(setCurrentPagePlus(1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default PopularMoviePage;
