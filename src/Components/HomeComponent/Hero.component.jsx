import React from "react";
import { Button } from "../ui/button";
import SlideComponent from "./Slide.component";
import { useGetTrendingQuery } from "../../store/endpoints/Movie.endpoint";
import { Skeleton } from "../ui/skeleton";

const HeroComponent = () => {
  const { data: trendingWeek, isLoading: weekIsLoading } =
    useGetTrendingQuery("week");
  const { data: trendingDay, isLoading: dayIsLoading } =
    useGetTrendingQuery("day");

  return (
    <div>
      {weekIsLoading || dayIsLoading ? (
        <div className=" md:mt-20 mt-10 flex items-center gap-10 px-2 md:px-0">
          <div className=" space-y-6 w-full">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-[250px]" />
            <div className=" space-x-4 flex items-center">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
          <Skeleton className="rounded-xl hidden md:block w-full h-[320px]" />
        </div>
      ) : (
        <div className=" md:mt-20 mt-10 flex items-center gap-10 px-2 md:px-0">
          <div className=" space-y-6 w-full">
            <h1 className=" text-white md:text-5xl  text-3xl font-semibold md:max-w-[600px] w-full md:leading-[64px] leading-10">
              Your ultimate destination for top-quantity TV shows, Movies and
              more...
            </h1>
            <p className=" text-secondary-50">
              A library of movies and TV shows you can watch anywhere
            </p>
            <div className=" space-x-4">
              <Button className=" bg-primary text-slate-100">Subscribe</Button>
              <Button
                variant="outline"
                className=" bg-black text-slate-100 border-primary"
              >
                Free Trial
              </Button>
            </div>
          </div>
          <div className=" w-full hidden md:block">
            <SlideComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroComponent;
