import React, { useState } from "react";
import {
  FetchingComponent,
  LoadingComponent,
  SeriesCardComponent,
} from "../../Components";
import { useGetDiscoverTvQuery } from "../../store/endpoints/Discover.endpoint";
import { useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../Components/ui/pagination";

const DiscoverTvPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortName = useSelector((state) => state.filter.filterName);

  const languageName = useSelector((state) => state.filter.filterLanguage);

  const genreID = useSelector((state) => state.filter.filterGenres);

  const {
    data: discoverTv,
    isLoading,
    isFetching,
  } = useGetDiscoverTvQuery({
    pageName: currentPage,
    languageName: languageName,
    sortName: sortName,
    genreID: genreID,
  });

  console.log(genreID);
  return (
    <LoadingComponent isLoading={isLoading}>
      {discoverTv?.results?.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          <p className=" md:text-lg text-sm text-slate-200">
            You can watch Tv show by filtering
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-slate-400">Discover Tv</h1>
          <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
            {discoverTv?.results?.map((serie) => {
              return (
                <FetchingComponent key={serie?.id} isFetching={isFetching}>
                  <SeriesCardComponent series={serie} />
                </FetchingComponent>
              );
            })}
          </div>

          <div className=" mt-10">
            {discoverTv?.results.length === 0 ? (
              <div className=" flex items-center justify-center h-screen">
                <p className=" text-slate-200">There is now content </p>
              </div>
            ) : (
              <div>
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
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      )}
    </LoadingComponent>
  );
};

export default DiscoverTvPage;
