import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useGetKnowForQuery } from "../../store/endpoints/People.endpoint";

const KnowForSliderComponent = ({ id }) => {
  const { data } = useGetKnowForQuery(id);
  return (
    <div className=" bg-secondary-100 h-[200px] py-4 rounded-xl shadow-lg">
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          mousewheel={true}
          scrollbar={{
            width: 12,
          }}
          height={"1"}
          modules={[Scrollbar, FreeMode, Mousewheel]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 8,
            },
          }}
          className="mySwiper h-[300px] text-center bg-gradient-to-r from-slate-960 to-slate-700 px-3 backdrop-blur-3xl backdrop-brightness-100 bg-blend-hue"
        >
          <div className="">
            {data?.cast?.map((person) => {
              console.log(person);
              return (
                <SwiperSlide key={person.id} className="">
                  <Link to={`/movie_detail/${person.id}`}>
                    <div className=" mb-4">
                      <div className=" relative">
                        <img
                          className=" rounded-lg shadow-lg h-[260px] object-cover object-top backdrop-brightness-100"
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                              person?.poster_path || person?.backdrop_path
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
        </Swiper>
      </div>
    </div>
  );
};

export default KnowForSliderComponent;
