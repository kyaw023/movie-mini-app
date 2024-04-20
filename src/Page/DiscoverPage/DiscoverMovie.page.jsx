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

  console.log(sortName);
  const {
    data: discoverMovies,
    isLoading,
    isFetching,
  } = useGetDiscoverMovieQuery({
    pageName: currentPage,
    languageName: languageName,
    sortName: sortName,
  });

  console.log(discoverMovies);
  return (
    <div className=" ">
      <LoadingComponent isLoading={isLoading}>
        <div>
          <FetchingComponent isFetching={isFetching}>
            <div>
              <h1 className="text-slate-400">Popular Movie</h1>
              <div className=" grid  md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
                {discoverMovies?.results?.map((movie) => {
                  return <MovieCardComponent key={movie?.id} movie={movie} />;
                })}
              </div>
            </div>
          </FetchingComponent>
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

export default DiscoverMoviePage;
