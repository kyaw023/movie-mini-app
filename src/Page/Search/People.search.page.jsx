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
      {data?.results.length === 0 ? (
        <div>
          <p className="  md:text-lg text-sm text-slate-200">There is no person you search</p>
        </div>
      ) : (
        data?.results?.map((p) => {
          console.log(p);
          return (
            <Link key={p.id} to={`/people_detail/${p.id}`}>
              <div className=" h-24 flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
                <img
                  className=" h-24 w-20 object-cover rounded-tl-lg rounded-bl-lg"
                  src={
                    p && p?.profile_path
                      ? "https://image.tmdb.org/t/p/w500" + p?.profile_path
                      : "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
                  }
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
        })
      )}
    </div>
  );
};

export default PeopleSearchPage;
