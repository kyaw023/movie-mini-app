import React, { useState } from "react";
import { useGetNowPlayingMovieQuery } from "../../store/endpoints/Movie.endpoint";
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

const NowplayingMoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: nowPlayingMovie,
    isLoading,
    isFetching,
  } = useGetNowPlayingMovieQuery(currentPage);

  console.log(nowPlayingMovie?.total_pages);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <div>
            <h1 className="text-slate-400">NowPlaying Movies</h1>
            <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
              {nowPlayingMovie?.results?.map((movie) => {
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

          <div>
            <div className=" mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem className=" bg-white">
                    {currentPage === 1 ? (
                      <p></p>
                    ) : (
                      <PaginationPrevious
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                      />
                    )}
                  </PaginationItem>
                  <PaginationItem className=" bg-white">
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                  </PaginationItem>

                  <PaginationItem className="bg-white">
                    {currentPage < nowPlayingMovie?.total_pages && (
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                      />
                    )}
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NowplayingMoviePage;
