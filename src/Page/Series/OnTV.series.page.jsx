import React from "react";
import { useGetOnTVSeriesQuery } from "../../store/endpoints/Series.endpoint";
import {SeriesCardComponent } from "../../Components";

const OnTVSeriesPage = () => {
  const { data: onTVSeries } = useGetOnTVSeriesQuery();
  return (
    <div>
      <h1 className="text-slate-400">On Tv Series</h1>
      <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
        {onTVSeries?.results?.map((serie) => {
          return <SeriesCardComponent key={serie?.id} series={serie} />;
        })}
      </div>
    </div>
  );
};

export default OnTVSeriesPage;
