import React from "react";
import { useGetAiringTodaySeriesQuery } from "../../store/endpoints/Series.endpoint";
import { SeriesCardComponent } from "../../Components";

const AiringTodaySeriesPage = () => {
  const { data: airingTodaySeries } = useGetAiringTodaySeriesQuery();
  return (
    <div>
      <h1 className="text-slate-400">AiringToday</h1>
      <div className=" grid md:grid-cols-6 grid-cols-2 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
        {airingTodaySeries?.results?.map((serie) => {
          return <SeriesCardComponent key={serie?.id} series={serie} />;
        })}
      </div>
    </div>
  );
};

export default AiringTodaySeriesPage;
