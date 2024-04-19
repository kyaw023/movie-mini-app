import React from "react";
import { Link } from "react-router-dom";

const SeriesCardComponent = ({ series }) => {
  return (
    <div>
      <Link to={`/serie_detail/${series.id}`} key={series.id}>
        <div className=" cursor-pointer">
          <img
            className=" h-[200px] object-cover"
            src={
              "https://image.tmdb.org/t/p/w500" + series?.backdrop_path ||
              series?.poster_path
            }
            alt=""
          />
          <div className=" mt-2">
            <h1 className=" text-slate-50">{series?.title || series?.name}</h1>
            <span className=" text-secondary-50">
              {series?.release_date || series?.first_air_date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SeriesCardComponent;
