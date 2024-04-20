import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LoadingComponent } from "../../Components";
import { Tabs, TabsList, TabsTrigger } from "../../Components/ui/tabs";
import { useGetGenresQuery } from "../../store/endpoints/Movie.endpoint";

const MoviesPage = () => {
  const { data, isLoading } = useGetGenresQuery("movie");
  // const genres = data?.genres;
  return (
    <div>
      <LoadingComponent isLoading={isLoading}>
        <div className=" my-5 px-2 md:px-0">
          <Tabs defaultValue="popular">
            <TabsList>
              <Link to={"/movies"}>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </Link>
              <Link to={"/movies/nowplaying"}>
                <TabsTrigger value="playing">Now Playing</TabsTrigger>
              </Link>
              <Link to={"/movies/toprated"}>
                <TabsTrigger value="rated">Top Rated</TabsTrigger>
              </Link>
              <Link to={"/movies/upcoming"}>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>
        <div className=" px-2 md:px-0">
          <Outlet />
        </div>
      </LoadingComponent>
    </div>
  );
};

export default MoviesPage;
