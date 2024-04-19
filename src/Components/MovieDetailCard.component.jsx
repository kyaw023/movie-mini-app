import React, { useEffect, useState } from "react";

import HoverCardComponent from "./HoverCard.component";
import { Badge } from "./ui/badge";

import { Bookmark, Heart, List, Youtube } from "lucide-react";
import ProgressComponent from "./Progress/Progress.component";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  useAddToFavoriteMutation,
  useAddToWatchListMutation,
  useGetFavoriteQuery,
  useGetWatchListQuery,
} from "../store/endpoints/General.endpoint";

import { toast } from "sonner";

const CardComponent = ({ data, media_type }) => {
  const { data: watchlistData } = useGetWatchListQuery("movies");
  const { data: favoriteListsData } = useGetFavoriteQuery("movies");
  const [addToWatchListFun] = useAddToWatchListMutation();
  const [addToFavoriteFun] = useAddToFavoriteMutation();

  // alert when click icon
  const isExistedHandler = (isExisted, type) => {
    if (isExisted) {
      toast.success(`${data?.original_title || data?.name} already in ${type}`);
    } else {
      toast.success(`${data?.original_title || data?.name} added to ${type}`);
    }
  };

  // finding movie and tv in watchlist
  const isExistedWatchLists = watchlistData?.results?.find(
    (list) => list?.id === data?.id
  );

  // finding movie and tv in favoritelist
  const isExistedFavorite = favoriteListsData?.results?.find(
    (list) => list?.id === data?.id
  );

  // post data to watchlist and favorite list function
  const addHandler = async (data, type) => {
    if (localStorage.getItem("sessionID")) {
      if (type === "watchlist") {
        const watchlist = {
          media_type: media_type,
          media_id: data?.id,
          sessionID: localStorage.getItem("sessionID"),
        };

        await addToWatchListFun(watchlist);
        isExistedHandler(isExistedWatchLists, "watchlists");
      } else {
        const favoriteList = {
          media_type: media_type,
          media_id: data?.id,
          sessionID: localStorage.getItem("sessionID"),
        };

        await addToFavoriteFun(favoriteList);
        isExistedHandler(isExistedFavorite, "favorite");
      }
    } else {
      toast.warning(`please login first`);
    }
  };

  return (
    <div>
      <div
        className={`mt-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border border-secondary-100 rounded-3xl md:px-10 px-4 md:py-10 py-4 md:h-[540px]`}
      >
        <div className=" flex items-center justify-between">
          <div>
            <h1 className=" md:text-3xl text-xl font-semibold text-slate-50">
              {data?.original_title || data?.name}
            </h1>
            <div className=" flex items-center gap-2 mt-2">
              {data?.genres?.map((genre) => {
                return (
                  <div key={genre?.id}>
                    <Badge
                      variant="outline"
                      className={" text-secondary-50 text-[10px] md:text-sm"}
                    >
                      {genre?.name}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" ">
            <p className=" text-primary">
              {data?.vote_average} /{" "}
              <span className=" text-secondary-50">{data?.vote_count}</span>
            </p>
          </div>
        </div>

        {/* detail Image and over */}
        <div className=" mt-6 flex flex-col md:flex-row gap-6">
          {/* detail image */}
          <img
            className=" h-[280px] w-[200px] object-cover"
            src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
            alt=""
          />
          <div>
            {/* movie overview */}
            <h1 className=" text-xl font-semibold text-slate-100">
              About The Movie
            </h1>
            <p className=" text-secondary-50 max-w-xl md:text-sm text-xs mt-2">
              {data?.overview}
            </p>

            {/* add icons list & heart & bookmark*/}
            <div className=" mt-6 flex space-x-8">
              <div>
                <HoverCard>
                  <HoverCardTrigger className=" ">
                    <div className=" flex items-center gap-2">
                      <List className=" w-10 h-10 text-white border border-secondary-50 p-3 rounded-full" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[200px] h-[4px] flex items-center justify-center text-xs">
                    Add to list
                  </HoverCardContent>
                </HoverCard>
              </div>

              {/* add to favourite */}
              <div>
                <HoverCard>
                  <HoverCardTrigger className=" ">
                    <div
                      className=" flex items-center gap-2"
                      onClick={() => addHandler(data, "favorite")}
                    >
                      <Heart
                        fill={`${
                          !!isExistedFavorite &&
                          localStorage.getItem("sessionID") &&
                          "red"
                        }`}
                        className=" w-10 h-10 text-white border border-secondary-50 p-3 rounded-full"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[200px] h-[4px] flex items-center justify-center text-xs">
                    Marks as favourite
                  </HoverCardContent>
                </HoverCard>
              </div>

              {/* add to watchlist */}
              <div>
                <HoverCard>
                  <HoverCardTrigger className=" ">
                    <div
                      className=" flex items-center gap-2 "
                      onClick={() => addHandler(data, "watchlist")}
                    >
                      <Bookmark
                        fill={`${
                          !!isExistedWatchLists &&
                          localStorage.getItem("sessionID") &&
                          "red"
                        }`}
                        className=" w-10 h-10 text-white border border-secondary-50 p-3 rounded-full"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[180px] h-[2px] flex items-center justify-center text-xs">
                    Add to your watchlist
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            {/* use score */}
            <ProgressComponent movie={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
