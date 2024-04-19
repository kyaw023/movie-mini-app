import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetKnowForQuery,
  useGetPeopleDetailQuery,
} from "../../store/endpoints/People.endpoint";
import KnowForSliderComponent from "../../Components/People/KnowForSlider.component";
import TopBilledCastComponent from "../../Components/MovieComponent/TopBilledCast.component";
import {
  ActionComponent,
  LoadingComponent,
  NavbarComponent,
  PersonalInfoComponent,
} from "../../Components";

const PeopleDetailPage = () => {
  const { id } = useParams();

  const { data: peopleDetail, isLoading } = useGetPeopleDetailQuery(id);

  return (
    <div>
      <LoadingComponent isLoading={isLoading}>
        <div className="px-2 md:px-0">
          <div className=" mt-10">
            <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
              {/* personal info */}
              <div>
                <img
                  className=" md:h-[400px] h-[240px] col-span-1 object-cover"
                  src={
                    "https://image.tmdb.org/t/p/w500" +
                    peopleDetail?.profile_path
                  }
                  alt=""
                />
                <div>
                  <PersonalInfoComponent detail={peopleDetail} />
                </div>
              </div>
              {/* detail side */}
              <div className="space-y-4 col-span-4">
                <h1 className=" text-2xl font-semibold text-slate-100">
                  {peopleDetail?.name}
                </h1>
                <div className=" space-y-4">
                  <h1 className=" text-xl font-semibold text-slate-100">
                    Biography
                  </h1>
                  <p className=" text-slate-600">{peopleDetail?.biography}</p>
                </div>
                <div className="mt-10 mb-40">
                  <KnowForSliderComponent id={id} />
                </div>
                <div className="">
                  <ActionComponent id={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default PeopleDetailPage;
