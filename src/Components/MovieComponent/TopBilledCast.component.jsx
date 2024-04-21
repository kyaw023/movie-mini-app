import React, { useState } from "react";
import { useGetTopBilledCastQuery } from "../../store/endpoints/Movie.endpoint";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopBilledCastComponent = ({ data }) => {
  const nav = useNavigate();

  const navHandler = () => {
    nav("/cast", { state: data });
  };

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          mousewheel={true}
          scrollbar={{
            width: 20,
          }}
          modules={[Scrollbar, FreeMode, Mousewheel]}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 8,
            },
          }}
          className="mySwiper text-center  h-[340px] bg-gradient-to-r from-slate-960 to-slate-700 px-3 backdrop-blur-3xl backdrop-brightness-100 bg-blend-hue"
        >
          <div>
            {data?.cast ? (
              <div>
                {data?.cast?.slice(0, 9)?.map((person) => {
                  return (
                    <SwiperSlide key={person.id} className="">
                      <Link to={`/people_detail/${person?.id}`}>
                        <div className=" mb-4">
                          <div className=" relative">
                            <img
                              className=" rounded-lg shadow-lg h-[260px] object-cover object-top backdrop-brightness-100"
                              src={
                                person?.profile_path || person?.backdrop_path
                                  ? "https://image.tmdb.org/t/p/w500" +
                                      person?.profile_path ||
                                    person?.backdrop_path
                                  : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                              }
                              alt=""
                            />
                          </div>
                          <div className=" mt-5">
                            <h2 className=" text-sm font-bold text-slate-400">
                              {person?.title ? person?.title : person?.name}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </div>
            ) : (
              <div>
                {data?.results?.slice(0, 14)?.map((person) => {
                  return (
                    <SwiperSlide key={person.id} className="">
                      <Link to={`/serie_detail/${person.id}`}>
                        <div className=" mb-4">
                          <div className=" relative">
                            <img
                              className=" rounded-lg shadow-lg h-[260px] object-cover object-top backdrop-brightness-100"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                person?.backdrop_path
                              }
                              alt=""
                            />
                          </div>
                          <div className=" mt-5"></div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </div>
            )}
          </div>
          {data?.cast?.length > 9 && (
            <SwiperSlide className=" flex items-center justify-center space-x-2">
              <button
                onClick={navHandler}
                className=" text-slate-200 text-lg text-center"
              >
                see more
              </button>
              <div className="">
                <MoveRight
                  color=" white"
                  className=" border border-slate-400 w-6 h-6 px-1 py-1 rounded-full active:scale-110 duration-200 "
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TopBilledCastComponent;
