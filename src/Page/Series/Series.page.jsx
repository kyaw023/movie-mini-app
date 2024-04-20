import { Link, Outlet } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";
import {
  DatePickerComponent,
  LoadingComponent,
  NavbarComponent,
  SelectDropDownComponent,
} from "../../Components";
import CheckBoxComponent from "../../Components/MovieComponent/CheckBox.component";
import { Badge } from "../../Components/ui/badge";
import {
  useGetGenresQuery,
  useGetLanguagesQuery,
} from "../../store/endpoints/Movie.endpoint";
import LanguagesComponent from "../../Components/MovieComponent/Languages.component";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../Components/ui/tabs";
import { useGetAiringTodaySeriesQuery } from "../../store/endpoints/Series.endpoint";

const SeriesPage = () => {
  const { isLoading } = useGetAiringTodaySeriesQuery();
  return (
    <div>
      <LoadingComponent isLoading={isLoading}>
        <div className=" px-2 md:px-0">
          <div className=" my-5">
            <Tabs defaultValue="popular">
              <TabsList>
                <Link to={"/series"}>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                </Link>
                <Link to={"/series/airing"}>
                  <TabsTrigger value="airing">Airing Today</TabsTrigger>
                </Link>
                <Link to={"/series/toprated"}>
                  <TabsTrigger value="rated">Top Rated</TabsTrigger>
                </Link>
                <Link to={"/series/onTV"}>
                  <TabsTrigger value="onTV">On TV</TabsTrigger>
                </Link>
              </TabsList>
              <TabsContent
                value="today"
                className="animate__animated animate__fadeIn"
              ></TabsContent>
              <TabsContent
                value="thisweek"
                className="animate__animated animate__fadeIn"
              ></TabsContent>
            </Tabs>
          </div>
          {/* main content */}
          <div className=" col-span-3">
            <Outlet />
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default SeriesPage;
