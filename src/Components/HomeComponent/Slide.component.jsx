import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const SlideComponent = () => {
  const slideImg = [
    "https://dunenewsnet.com/wp-content/uploads/2024/02/Dune-Part-Two-Movie-Soundtrack-Review-feature-816x459.jpg",
    "https://cdn.theplaylist.net/wp-content/uploads/2016/04/01125615/kingdome-of-the-planet-of-the-apes.jpg",
    "https://images.bauerhosting.com/empire/2023/11/fall-guy-header.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
    "https://thecosmiccircus.com/wp-content/uploads/2024/02/Untitled-design-2024-02-12T225901.438-800x445.jpg",
    "https://cdn.dribbble.com/userupload/7564157/file/original-af7ee6d6c0e5affb53d369bc567dc187.jpg?resize=752xs",
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className=" max-w-[640px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slideImg.map((img, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  className=" w-full h-[320px] object-cover rounded"
                  src={img}
                  alt=""
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default SlideComponent;
