import React from "react";
import { useGetTrendingSeriesQuery } from "../../store/endpoints/Series.endpoint";
import TopBilledCastComponent from "../MovieComponent/TopBilledCast.component";

const PopularComponent = () => {
  const { data: popularSeries } = useGetTrendingSeriesQuery();

  return (
    <div className=" px-2 md:px-0">
      <h1 className=" text-2xl text-slate-300 my-10">Trending Series</h1>
      <TopBilledCastComponent data={popularSeries} />
    </div>
  );
};

export default PopularComponent;
