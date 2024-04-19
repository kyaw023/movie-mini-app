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
      <NavbarComponent isLoading={isLoading} />
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

          <div className=" grid md:grid-cols-4 grid-cols-1 gap-10">
            {/* sidebar */}
            <div className=" col-span-1 mt-4">
              {/* sort */}
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className=" border border-secondary-50 p-2  rounded shadow-xl"
                >
                  <AccordionItem value="item-1" className=" border-none">
                    <AccordionTrigger className=" text-slate-100">
                      Sort
                    </AccordionTrigger>
                    <AccordionContent className="">
                      <div>
                        <p className=" text-slate-200">Sort Result By</p>
                        <div className=" mt-4">
                          <SelectDropDownComponent />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* filter */}
              <div className=" mt-4">
                <Accordion
                  type="single"
                  collapsible
                  className=" border border-secondary-50 p-2  rounded shadow-xl"
                >
                  <AccordionItem value="item-1" className=" border-none">
                    <AccordionTrigger className=" text-slate-100">
                      Filter
                    </AccordionTrigger>
                    <AccordionContent className="">
                      <div>
                        {/* show me */}
                        <div className=" mt-6">
                          <p className=" text-slate-200">Show me</p>
                          <div className=" mt-4 space-y-4">
                            <CheckBoxComponent
                              id={"everything"}
                              labelName={"EveryThing"}
                            />
                            <CheckBoxComponent
                              id={"movieIhaven'tseen"}
                              labelName={"Movie I haven't seen"}
                            />
                            <CheckBoxComponent
                              id={"movieIhaveseen"}
                              labelName={"Movie I have seen"}
                            />
                          </div>
                        </div>

                        {/* released dated */}
                        <div className=" mt-6">
                          <p className=" text-slate-200">Released Date</p>
                          <div className=" mt-4 space-y-4">
                            <CheckBoxComponent
                              id={"allReleases"}
                              labelName={"Search all releases?"}
                            />
                            <CheckBoxComponent
                              id={"allCountries"}
                              labelName={"Search all countrues?"}
                            />
                            <CheckBoxComponent
                              id={"theatrical"}
                              labelName={"Theatrical (limited)"}
                            />
                            <CheckBoxComponent
                              id={"theatrical"}
                              labelName={"Theatrical"}
                            />
                            <CheckBoxComponent
                              id={"premiere"}
                              labelName={"Premiere"}
                            />
                            <CheckBoxComponent
                              id={"digital"}
                              labelName={"Digital"}
                            />
                            <CheckBoxComponent
                              id={"physical"}
                              labelName={"Physical"}
                            />
                            <CheckBoxComponent id={"tv"} labelName={"TV"} />
                          </div>
                        </div>

                        {/* calendar */}
                        <div className=" mt-6">
                          <div className=" flex items-center justify-between">
                            <h1 className=" text-slate-200">From</h1>
                            <div>
                              <DatePickerComponent />
                            </div>
                          </div>
                          <div className=" flex items-center justify-between mt-4">
                            <h1 className=" text-slate-200">to</h1>
                            <div>
                              <DatePickerComponent />
                            </div>
                          </div>
                        </div>

                        {/* generes */}
                        {/* <div className=" mt-4">
                      <h1 className=" text-lg text-slate-300">Genres</h1>
                      <div className=" mt-4 flex flex-wrap gap-2">
                        {genres?.map((genre) => {
                          return (
                            <Badge
                              variant={"outline"}
                              className={" text-slate-200"}
                              key={genre?.id}
                            >
                              {genre?.name}
                            </Badge>
                          );
                        })}
                      </div>
                    </div> */}

                        {/* languages */}

                        {/* <div className=" mt-4">
                      <LanguagesComponent />
                    </div> */}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* main content */}
            <div className=" col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default SeriesPage;
