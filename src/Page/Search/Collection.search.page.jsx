import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSearchCollectionQuery } from "../../store/endpoints/Search.endpoint";
import { LoadingComponent } from "../../Components";

const CollectionSearchPage = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetSearchCollectionQuery(name);
  return (
    <LoadingComponent isLoading={isLoading}>
      {data?.results.length === 0 ? (
        <p className=" text-sm md:text-lg text-slate-200">
          There is no movie you search
        </p>
      ) : (
        <div className=" space-y-5">
          {data?.results?.map((mv) => {
            return (
              <div key={mv?.id}>
                <Link to={`/movie_detail/${mv?.id}`}>
                  <div className=" h-[240px] flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
                    <img
                      className=" h-full w-40 object-cover rounded-tl-lg rounded-bl-lg bg-white"
                      src={
                        mv && (mv.backdrop_path || mv.poster_path)
                          ? "https://image.tmdb.org/t/p/w500" +
                            (mv.backdrop_path || mv.poster_path)
                          : "https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
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
      )}
    </LoadingComponent>
  );
};

export default CollectionSearchPage;
