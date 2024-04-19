import React from "react";
import { useGetActionQuery } from "../../store/endpoints/People.endpoint";
import CustomDropDownComponet from "../CustomDropDown.component";
import { Link } from "react-router-dom";

const ActionComponent = ({ id }) => {
  const { data } = useGetActionQuery(id);

  return (
    <div className="mt-40">
      <div className=" flex items-center justify-between">
        <h1 className=" text-xl font-semibold text-slate-200">Action</h1>
        <div className=" flex items-center space-x-3">
          <CustomDropDownComponet title={"All"} />
          <CustomDropDownComponet title={"Departments"} />
        </div>
      </div>
      <div className=" border-secondary-100 border p-4 shadow-xl mt-5">
        {data?.cast?.map((c) => {
          console.log("Movie", c.id);
          return (
            <div key={c.id} className="">
              <Link to={`/movie_detail/${c.id}`}>
                <div className="flex items-center gap-2 mb-3 border-b-2 border-secondary-100 py-2">
                  <span className=" text-secondary-50">
                    {(
                      c?.release_date?.split("-")[0]
                        ? c?.release_date?.split("-")[0]
                        : c?.first_air_date?.split("-")[0]
                    )
                      ? c?.release_date?.split("-")[0]
                        ? c?.release_date?.split("-")[0]
                        : c?.first_air_date?.split("-")[0]
                      : "-------"}
                  </span>
                  <h1 className=" text-slate-400">
                    {c?.title ? c.title : c.name}
                  </h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionComponent;
