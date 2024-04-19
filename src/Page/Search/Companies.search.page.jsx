import React from "react";
import { useParams } from "react-router-dom";
import { useGetSearchCompanyQuery } from "../../store/endpoints/Search.endpoint";

const CompaniesPage = () => {
  const { name } = useParams();

  const { data } = useGetSearchCompanyQuery(name);
  console.log(data);
  return (
    <div>
      {data?.results?.map((com) => {
        return (
          <div className=" border-b border-secondary-100  text-slate-100 py-3">
            <h1>{com?.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CompaniesPage;
