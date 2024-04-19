import React from "react";
import { NavbarComponent } from "../../../Components";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../Components/ui/tabs";
import { Link, Outlet, useParams } from "react-router-dom";

const WatchListsPage = () => {
  const { username } = useParams();
  return (
    <div>
      {/* watchlist */}
      <div className=" mt-10 flex flex-col gap-4 w-full px-2 md:px-0">
        {/* title */}
        <h1 className=" text-xl font-semibold text-slate-100">My WatchLists</h1>

        {/* tab movie and tv */}

        <div>
          <Tabs defaultValue="movie" className="">
            <TabsList>
              <Link to={`/u/${username}/watchlist`}>
                <TabsTrigger value="movie">Movies</TabsTrigger>
              </Link>
              <Link to={`/u/${username}/watchlist/tv`}>
                <TabsTrigger value="tv">TV</TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className=" mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default WatchListsPage;
