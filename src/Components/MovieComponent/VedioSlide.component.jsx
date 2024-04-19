import React from "react";
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

const VedioSlideComponent = ({ vedios }) => {
  return (
    <div className="w-full">
      <div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={300}
            freeMode={true}
            mousewheel={true}
            scrollbar={{
              width: 20,
            }}
            modules={[Scrollbar, FreeMode, Mousewheel]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween : 10
              },

              768: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper text-center bg-gradient-to-r from-slate-960 to-slate-700 px-3 backdrop-blur-3xl backdrop-brightness-100 bg-blend-hue"
          >
            {vedios?.results?.map((vedio) => {
              return (
                <SwiperSlide key={vedio.id} className="">
                  <div className=" mb-8">
                    <iframe
                      height="200"
                      src={`https://www.youtube.com/embed/${vedio.key}`}
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              );
            })}
            {vedios?.results?.length > 9 && (
              <SwiperSlide className=" h-full flex items-center justify-center">
                <Link className=" text-slate-200 text-lg text-center">
                  See More
                </Link>
                <div className=" px-2 py-2">
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
    </div>
  );
};

export default VedioSlideComponent;
