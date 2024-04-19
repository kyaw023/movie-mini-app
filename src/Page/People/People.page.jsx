import React from "react";
import { useGetPopularPeopleQuery } from "../../store/endpoints/People.endpoint";
import {
  LoadingComponent,
  NavbarComponent,
  PeopleCardComponent,
} from "../../Components";

const PeoplePage = () => {
  const { data: popularPeople, isLoading } = useGetPopularPeopleQuery();
  return (
    <div>
      <NavbarComponent isLoading={isLoading} />
      <LoadingComponent isLoading={isLoading}>
        <div className="px-2 md:px-0">
          <div className=" my-6">
            <h1 className=" text-2xl font-semibold text-slate-300">
              Popular People
            </h1>
          </div>
          <div className=" grid md:grid-cols-5 grid-cols-2 gap-4">
            {popularPeople?.results?.map((people) => {
              return (
                <div key={people?.id}>
                  <PeopleCardComponent people={people} />
                </div>
              );
            })}
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default PeoplePage;
