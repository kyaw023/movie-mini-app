import React, { useState } from "react";
import { useGetAiringTodaySeriesQuery } from "../../store/endpoints/Series.endpoint";
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

const AiringTodaySeriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: airingTodaySeries,
    isFetching,
    isLoading,
  } = useGetAiringTodaySeriesQuery(currentPage);
  return (
    <LoadingComponent isLoading={isLoading}>
      <div>
        <h1 className="text-slate-400">AiringToday</h1>
        <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
          {airingTodaySeries?.results?.map((serie) => {
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
                {currentPage < airingTodaySeries?.total_pages && (
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

export default AiringTodaySeriesPage;
