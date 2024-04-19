import React from "react";

const PersonalInfoComponent = ({ detail }) => {
  return (
    <div className=" mt-10">
      <h1 className=" text-2xl font-semibol text-slate-100 mb-5">
        Personal Info
      </h1>
      <div className=" space-y-5">
        <div>
          <ul className=" font-semibold text-lg text-slate-200">Known For</ul>
          <ul className=" text-secondary-50">
            <li>{detail?.known_for_department}</li>
          </ul>
        </div>
        <div>
          <ul className=" font-semibold text-lg text-slate-200">Gender</ul>
          <ul className=" text-secondary-50">
            <li>{detail?.gender === 1 ? "Female" : "Male"}</li>
          </ul>
        </div>
        <div>
          <ul className=" font-semibold text-lg text-slate-200">Birthday</ul>
          <ul className=" text-secondary-50">
            <li>{detail?.birthday}</li>
          </ul>
        </div>
        <div>
          <ul className=" font-semibold text-lg text-slate-200">
            Place of Birth
          </ul>
          <ul className=" text-secondary-50">
            <li>{detail?.place_of_birth}</li>
          </ul>
        </div>
        <div>
          <ul className=" font-semibold text-lg text-slate-200">
            Also Known Us
          </ul>
          <ul className=" text-secondary-50">
            {detail?.also_known_as?.map((d) => {
              return <li className=" mb-2">{d}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;
