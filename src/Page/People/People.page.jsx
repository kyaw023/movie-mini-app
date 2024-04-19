import React from "react";
import { useGetPopularPeopleQuery } from "../../store/endpoints/People.endpoint";
import {
  LoadingComponent,
  NavbarComponent,
  PeopleCardComponent,
} from "../../Components";
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

const PeoplePage = () => {
  const currentPage = useSelector((state) => state.pagination?.currentPage);

  const dispatch = useDispatch();
  const {
    data: popularPeople,
    isLoading,
    isFetching,
  } = useGetPopularPeopleQuery(currentPage);

  console.log(popularPeople);
  return (
    <div>
      <NavbarComponent isLoading={isLoading} />
      <LoadingComponent isLoading={isLoading}>
        {isFetching ? (
          <div className=" flex items-center justify-center h-screen">
            <p className=" text-slate-200">Data is Fetching Please wait...</p>
          </div>
        ) : (
          <div className="px-2 md:px-0">
            <div className=" my-6">
              <h1 className=" text-2xl font-semibold text-slate-300">
                Popular People
              </h1>
            </div>
            <div className=" grid md:grid-cols-5 grid-cols-2 gap-4">
              {popularPeople?.results?.map((people) => {
                return (
                  <div key={people?.id}>
                    <PeopleCardComponent people={people} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
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

export default PeoplePage;
