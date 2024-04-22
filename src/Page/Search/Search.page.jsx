import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useGetMultiSearchQuery } from "../../store/endpoints/Search.endpoint";
import { LoadingComponent } from "../../Components";

const SearchPage = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetMultiSearchQuery(name);

  // console.log(data);
  // const navigator = useNavigate();

  // const navigatorHandler = (nameQuery) => {
  //   navigator(`${nameQuery}`, { state: name });
  // };

  return (
    <LoadingComponent isLoading={isLoading}>
      <div>
        <div className=" mt-14 px-2 md:px-0">
          <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
            <div className=" border h-[440px] border-secondary-100 rounded-xl">
              <div>
                <ul className=" bg-blue-600 p-4 rounded-tl-2xl rounded-tr-2xl">
                  <li className="text-xl font-semibold text-slate-100">
                    Search Results
                  </li>
                </ul>
                <ul className=" text-secondary-50 p-10 space-y-6">
                  <li>
                    <NavLink to={`/search/tv/${name}`}>Tv shows</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/movie/${name}`}>Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/collection/${name}`}>
                      Collection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/person/${name}`}>People</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/companies/${name}`}>
                      Companies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/${"keywords"}/${name}`}>
                      Keywords
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/search/networks/${name}`}>Networks</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </LoadingComponent>
  );
};

export default SearchPage;
