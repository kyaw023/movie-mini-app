import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TrendingCardComponent from "./TrendingCard.component";
import LoadingComponent from "../Loading/Loading.component";

import { useGetTrendingQuery } from "../../store/endpoints/Movie.endpoint";

const TrendingComponent = () => {
  const {
    data: trendingWeek,
    isLoading: weekIsLoading,
    isFetching: weekIsFetching,
  } = useGetTrendingQuery("week");
  const {
    data: trendingDay,
    isLoading: dayIsLoading,
    isFetching: dayIsFetching,
  } = useGetTrendingQuery("day");

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
              isFetching={dayIsFetching}
            />
          </TabsContent>
          <TabsContent
            value="thisweek"
            className="animate__animated animate__fadeIn"
          >
            <TrendingCardComponent
              trending={trendingWeek}
              isLoading={weekIsLoading}
              isFetching={weekIsFetching}
            />
          </TabsContent>
        </Tabs>
      </div>
    </LoadingComponent>
  );
};

export default TrendingComponent;
