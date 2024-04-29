import React, { useState } from "react";
import { useGetOnTVSeriesQuery } from "../../store/endpoints/Series.endpoint";
import {
  FetchingComponent,
  LoadingComponent,
  SeriesCardComponent,
} from "../../Components";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../Components/ui/pagination";

const OnTVSeriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: onTVSeries,
    isLoading,
    isFetching,
  } = useGetOnTVSeriesQuery(currentPage);
  return (
    <LoadingComponent isLoading={isLoading}>
      <div>
        <FetchingComponent isFetching={isFetching}>
          <h1 className="text-slate-400">On Tv Series</h1>
          <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
            {onTVSeries?.results?.map((serie) => {
              return (
                <FetchingComponent
                  key={serie?.id}
                  isFetching={isFetching}
                  type={"moviecard"}
                >
                  <SeriesCardComponent series={serie} />
                </FetchingComponent>
              );
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
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  />
                )}
              </PaginationItem>
              <PaginationItem className=" bg-white">
                <PaginationLink href="#">{currentPage}</PaginationLink>
              </PaginationItem>

              <PaginationItem className="bg-white">
              {currentPage < onTVSeries?.total_pages && (
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                      />
                    )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </LoadingComponent>
  );
};

export default OnTVSeriesPage;
