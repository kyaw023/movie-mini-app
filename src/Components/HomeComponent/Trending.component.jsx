import React from "react";
import {
  useGetPopularMovieQuery,
  useGetTrendingQuery,
} from "../../store/endpoints/Movie.endpoint";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TrendingCardComponent from "./TrendingCard.component";
import LoadingComponent from "../Loading/Loading.component";

const TrendingComponent = () => {
  const { data: trendingWeek, isLoading: weekIsLoading } =
    useGetTrendingQuery("week");
  const { data: trendingDay, isLoading: dayIsLoading } =
    useGetTrendingQuery("day");

  return (
    <LoadingComponent isLoading={weekIsLoading || dayIsLoading}>
      <div className=" px-2 md:px-0">
        <h1 className=" text-2xl text-slate-200 mb-5 mt-10">Trending</h1>
        <Tabs defaultValue="today">
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="thisweek">This Week</TabsTrigger>
          </TabsList>
          <TabsContent
            value="today"
            className="animate__animated animate__fadeIn"
          >
            <TrendingCardComponent
              trending={trendingDay}
              isLoading={dayIsLoading}
            />
          </TabsContent>
          <TabsContent
            value="thisweek"
            className="animate__animated animate__fadeIn"
          >
            <TrendingCardComponent
              trending={trendingWeek}
              isLoading={weekIsLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </LoadingComponent>
  );
};

export default TrendingComponent;
