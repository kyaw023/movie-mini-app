import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetMultiSearchQuery,
  useGetSearchPeopleQuery,
} from "../../store/endpoints/Search.endpoint";

const PeopleSearchPage = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetSearchPeopleQuery(name);

  return (
    
    <div className=" flex flex-col space-y-5">
      {data?.results?.map((p) => {
        return (
          <Link key={p.id} to={`/people_detail/${p.id}`}>
            <div className=" h-24 flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
              <img
                className=" h-24 w-20 object-cover rounded-tl-lg rounded-bl-lg"
                src={"https://image.tmdb.org/t/p/w500" + p?.profile_path}
                alt=""
              />
              <div className=" py-3">
                <h1 className=" text-slate-100">{p?.name}</h1>
                <span className=" text-slate-500 text-sm">
                  {p?.character || p?.department}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PeopleSearchPage;
