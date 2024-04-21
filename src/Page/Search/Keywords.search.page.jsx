import React from "react";
import { useParams } from "react-router-dom";
import { useGetKeywordsQuery } from "../../store/endpoints/Movie.endpoint";
import { useGetSearchKeywordQuery } from "../../store/endpoints/Search.endpoint";

const KeywordsSearchPage = () => {
  const { name } = useParams();

  const { data } = useGetSearchKeywordQuery(name);

  console.log(data);

  return (
    <div>
      {data?.results?.length === 0 ? (
        <div className=" text-slate-200">There is no keyword you search</div>
      ) : (
        <div className=" space-y-4">
          {data?.results?.map((r) => {
            return <p className=" text-sm text-secondary-50">{r?.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default KeywordsSearchPage;
