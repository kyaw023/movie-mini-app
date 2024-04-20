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

  const {
    data: discoverTv,
    isLoading,
    isFetching,
  } = useGetDiscoverTvQuery({
    pageName: currentPage,
    languageName: languageName,
    sortName: sortName,
  });
  return (
    <LoadingComponent isLoading={isLoading}>
      <div>
        <FetchingComponent isFetching={isFetching}>
          <h1 className="text-slate-400">Popular Series</h1>
          <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
            {discoverTv?.results?.map((serie) => {
              return <SeriesCardComponent key={serie?.id} series={serie} />;
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
    </LoadingComponent>
  );
};

export default DiscoverTvPage;
