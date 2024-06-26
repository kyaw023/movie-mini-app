import React, { useState } from "react";
import { useGetDiscoverMovieQuery } from "../../store/endpoints/Discover.endpoint";
import { useSelector } from "react-redux";
import {
  FetchingComponent,
  LoadingComponent,
  MovieCardComponent,
} from "../../Components";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../Components/ui/pagination";

const DiscoverMoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortName = useSelector((state) => state.filter.filterName);

  const languageName = useSelector((state) => state.filter.filterLanguage);

  const genreID = useSelector((state) => state.filter.filterGenres);

  const {
    data: discoverMovies,
    isLoading,
    isFetching,
  } = useGetDiscoverMovieQuery({
    pageName: currentPage,
    languageName: languageName,
    sortName: sortName,
    genreID: genreID || 28,
  });

  console.log(genreID);

  return (
    <div className=" ">
      <LoadingComponent isLoading={isLoading}>
        {discoverMovies?.results.length === 0 ? (
          <div className=" flex items-center justify-center h-screen">
            <p className=" md:text-lg text-sm text-slate-200">
              You can watch Movies by filtering
            </p>
          </div>
        ) : (
          <div>
            <div>
              <div>
                <h1 className="text-slate-400">Popular Movie</h1>
                <div className=" grid  md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
                  {discoverMovies?.results?.map((movie) => {
                    return (
                      <FetchingComponent
                        key={movie?.id}
                        isFetching={isFetching}
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
                        className={`${
                          isFetching &&
                          "pointer-events-none bg-gray-300 text-gray-600"
                        }`}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                      />
                    )}
                  </PaginationItem>
                  <PaginationItem className=" bg-white">
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                  </PaginationItem>

                  <PaginationItem className="bg-white">
                    <PaginationNext
                      className={`${
                        isFetching &&
                        "pointer-events-none bg-gray-300 text-gray-600"
                      }`}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        )}
      </LoadingComponent>
    </div>
  );
};

export default DiscoverMoviePage;
