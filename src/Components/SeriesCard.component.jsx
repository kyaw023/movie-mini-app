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
              series && (series?.backdrop_path || series?.poster_path)
                ? "https://image.tmdb.org/t/p/w500" +
                  (series?.backdrop_path || series?.poster_path)
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oruMfmenl0Gf8qmyupis5g9F-YyXyh9K4xunOWJJtg&s"
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
