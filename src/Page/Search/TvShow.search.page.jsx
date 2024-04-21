import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetTVSearchQuery } from "../../store/endpoints/Search.endpoint";
import { LoadingComponent, SearchCardComponent } from "../../Components";

const TvShowSearchPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetTVSearchQuery(name);

  return (
    <LoadingComponent isLoading={isLoading}>
      {data?.results.length === 0 ? (
        <div>
          <p className=" text-sm md:text-lg text-slate-200">
            There is no Tv show you search
          </p>
        </div>
      ) : (
        <div className=" space-y-5">
          {data?.results?.map((tv) => {
            return (
              <div key={tv?.id}>
                <SearchCardComponent data={tv} type={"serie_detail"} />
              </div>
            );
          })}
        </div>
      )}
    </LoadingComponent>
  );
};

export default TvShowSearchPage;
