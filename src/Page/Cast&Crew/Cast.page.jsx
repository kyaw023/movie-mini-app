import React from "react";
import { useLocation } from "react-router-dom";
import CastCardComponent from "../../Components/Cast&CrewComponent/CastCrewCard.component";
import { NavbarComponent } from "../../Components";

const CastPage = () => {
  const { state } = useLocation();

  const cast = state?.cast;
  const crew = state?.crew;
  return (
    <div>
      <div className=" md:mt-20 mt-10 px-2 md:px-0 ">
        {/* original */}
        <div></div>

        {/* cast and crew */}
        <div className="grid md:grid-cols-4 grid-cols-1">
          {/* cast */}
          <div className=" col-span-3">
            <h1 className=" text-xl font-semibold text-slate-100">
              SeriesCast {cast?.length}
            </h1>
            <div className=" space-y-8 mt-4">
              {cast?.map((c) => {
                return (
                  <div key={c?.id} className=" flex space-x-4">
                    <CastCardComponent c={c} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* crew */}
          <div>
            <h1 className=" text-xl font-semibold text-slate-100">
              Crew {crew?.length}
            </h1>
            <div className="space-y-8 mt-4">
              {crew?.map((cw, index) => {
                console.log(cw);
                return (
                  <div key={cw?.id} className=" flex space-x-4">
                    <CastCardComponent c={cw} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastPage;
