import React from "react";
import {
  useGetFavoriteQuery,
  useGetRatingQuery,
  useGetWatchListQuery,
} from "../../../store/endpoints/General.endpoint";
import { Heart, List, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import { LoadingComponent } from "../../../Components";

const WatchListTvPage = () => {
  const { data: favorite } = useGetFavoriteQuery("tv");
  const { data: watchLists, isLoading } = useGetWatchListQuery("tv");
  const { data: RatingLists } = useGetRatingQuery("tv");

  const getCommonMovies = (favorite, tv) => {
    return favorite?.filter((fav) => {
      return tv?.some((tv) => fav?.id === tv?.id);
    });
  };

  const getCommonTv = (rating, watch) => {
    return rating?.filter((r) => {
      return watch?.find((w) => {
        return r?.id === w?.id;
      });
    });
  };

  return (
    <LoadingComponent isLoading={isLoading}>
      <div className=" px-2 md:px-0">
        {watchLists?.results?.map((movie) => {
          return (
            <div
              key={movie?.id}
              className=" bg-secondary-100 rounded-xl shadow-md overflow-hidden mb-4 md:h-56 h-[460px]"
            >
              <div className="md:flex relative">
                <div className="md:shrink-0">
                  <img
                    className=" h-40 w-full object-cover md:h-56 md:w-40"
                    src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                  />
                </div>
                <div className="p-4">
                  <Link to={`/movie_detail/${movie?.id}`}>
                    <div className="uppercase tracking-wide md:text-lg font-semibold text-slate-100 truncate">
                      {movie?.name}
                    </div>
                  </Link>
                  <p className=" text-xs text-secondary-50">
                    {movie?.first_air_date}
                  </p>

                  <p className="mt-2 text-slate-500 text-xs md:text-sm">
                    {movie?.overview}
                  </p>

                  {/* icons */}

                  <div className=" mt-4 grid grid-cols-2 md:grid-cols-4 items-center gap-8 md:bottom-6 -bottom-28">
                  <div>
                    {(() => {
                      const commonItem = getCommonMovies(
                        RatingLists?.results,
                        watchLists?.results
                      )?.find((item) => item.id === movie?.id);

                      if (commonItem) {
                        return (
                          <div className="flex items-center gap-2">
                            <div className=" flex items-center justify-center w-10 h-10 text-white border border-secondary-50 p-3 rounded-full">
                              <p>{commonItem?.rating * 10}</p>
                            </div>
                            <span className="text-secondary-50">
                              Your rating
                            </span>
                          </div>
                        );
                      } else {
                        return (
                          <div className="flex items-center gap-2">
                            <Star className="w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                            <span className="text-secondary-50">Rate it!</span>
                          </div>
                        );
                      }
                    })()}
                  </div>
                  <div>
                    {getCommonTv(favorite?.results, watchLists?.results)?.find(
                      (item) => item.id === movie?.id
                    ) ? (
                      <div className="flex items-center gap-2">
                        <Heart className="w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                        <span className="text-secondary-50">Favourite</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Heart className="w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                        <span className="text-secondary-50">Favourite</span>
                      </div>
                    )}
                  </div>
                    <div className=" flex items-center gap-2">
                      <List className=" w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                      <span className=" text-secondary-50">Add to lists</span>
                    </div>
                    <div className=" flex items-center gap-2">
                      <X className=" w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                      <span className=" text-secondary-50">Remove it</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  
    </LoadingComponent>
  );
};

export default WatchListTvPage;
