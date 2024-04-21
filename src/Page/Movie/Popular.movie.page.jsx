import React, { useState } from "react";
import { useGetPopularMovieQuery } from "../../store/endpoints/Movie.endpoint";
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

// import { useDispatch, useSelector } from "react-redux";
// import {
//   setCurrentPagePlus,
//   setCurrentPagePrev,
// } from "../../store/slice/pagination/PaginationSlice";
const PopularMoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: popularMovies,
    isLoading,
    isFetching,
  } = useGetPopularMovieQuery(currentPage);

  return (
    <div className=" ">
      <LoadingComponent isLoading={isLoading}>
        <div>
          <div>
            <h1 className="text-slate-400">Popular Movie</h1>
            <div className=" grid  md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
              {popularMovies?.results?.map((movie) => {
                return (
                  <FetchingComponent
                    isFetching={isFetching}
                    type={"moviecard"}
                    key={movie?.id}
                  >
                    <MovieCardComponent movie={movie} />
                  </FetchingComponent>
                );
              })}
            </div>
          </div>
        </div>
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
      </LoadingComponent>
    </div>
  );
};

export default PopularMoviePage;
