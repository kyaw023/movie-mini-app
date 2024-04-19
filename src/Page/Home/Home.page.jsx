import React from "react";
import {
  HeroComponent,
  NavbarComponent,
  PopularComponent,
  TrailerComponent,
  TrendingComponent,
} from "../../Components";
//import { useGetTrendingQuery } from "../../store/endpoints/Movie.endpoint";

const HomePage = () => {
  // const { data: trendingWeek, isLoading: weekIsLoading } =
  //   useGetTrendingQuery("week");
  // const { data: trendingDay, isLoading: dayIsLoading } =
  //   useGetTrendingQuery("day");
  return (
    <div>
      <HeroComponent />
      <TrendingComponent />
      <TrailerComponent />
      <PopularComponent />
    </div>
  );
};

export default HomePage;
