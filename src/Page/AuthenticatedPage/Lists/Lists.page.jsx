import React from "react";
import { LoadingComponent, NavbarComponent } from "../../../Components";
import { useGetCreateListsQuery } from "../../../store/endpoints/General.endpoint";
import { Button } from "../../../Components/ui/button";

const ListsPage = () => {
  const { data, isLoading } = useGetCreateListsQuery();

  return (
    <div>
      <NavbarComponent isLoading={isLoading} />
      <LoadingComponent isLoading={isLoading}>
        <div className=" mt-10">
          <div className=" flex items-center justify-between">
            <h1 className=" text-2xl font-semibold text-slate-100">My Lists</h1>
            <Button>Create Lists</Button>
          </div>
          <div className=" mt-10">
            {data?.results?.length === 0 ? (
              <p className=" text-secondary-50 text-sm">There is no lists</p>
            ) : (
              <div>
                {data?.results?.map((list) => {
                  return <div key={list?.id}></div>;
                })}
              </div>
            )}
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default ListsPage;
