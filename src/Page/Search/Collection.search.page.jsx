import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSearchCollectionQuery } from "../../store/endpoints/Search.endpoint";
import { LoadingComponent } from "../../Components";

const CollectionSearchPage = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetSearchCollectionQuery(name);
  return (
    <LoadingComponent isLoading={isLoading}>
      <div className=" space-y-5">
        {data?.results?.map((mv) => {
          return (
            <div key={mv?.id}>
              <Link to={`/movie_detail/${mv?.id}`}>
                <div className=" h-[240px] flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
                  <img
                    className=" h-full w-40 object-cover rounded-tl-lg rounded-bl-lg"
                    src={
                      "https://image.tmdb.org/t/p/w500" + mv?.poster_path ||
                      mv?.backdrop_path
                    }
                    alt=""
                  />
                  <div className=" py-5">
                    <h1 className=" text-slate-100">{mv?.name}</h1>
                    <span className=" text-slate-500 text-sm">
                      {mv?.release_date}
                    </span>
                    <p className=" text-secondary-50">{mv?.overview}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </LoadingComponent>
  );
};

export default CollectionSearchPage;
