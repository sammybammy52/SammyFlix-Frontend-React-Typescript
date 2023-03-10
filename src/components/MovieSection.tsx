import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { movieDetails } from "../types/movie";

// Import Swiper styles
import "swiper/css";
import MovieCard from "./miniComponents/MovieCard";

type Props = {
  title: string;
  movies: movieDetails[];
};

const MovieSection = ({ title, movies }: Props) => {
  const [swiper, setSwiper] = React.useState();

  const nexto = () => {
    // @ts-ignore
    swiper.slideNext();
  };

  const prev = () => {
    // @ts-ignore
    swiper.slidePrev();
  };

  return (
    <div className="movie-section pt-20 relative">
      <div className="flex ml-10 gap-3 hover:gap-6 hover:scale-105 hover:pl-4 transition-all">
        <h3 className="text-purple-700 text-2xl max-[414px]:text-xl mt-3">{title}</h3>
        <ArrowLongRightIcon className="h-[56px] w-[56px] max-[414px]:h-[36px] max-[414px]:w-[36px] max-[414px]:mt-2 text-purple-700" />
      </div>

      <ChevronRightIcon
        className="h-[56px] w-[56px] rounded-[40px] p-[10px] bg-white text-black opacity-50 hover:scale-110 hover:opacity-100 transition-all absolute right-0 z-10 bottom-[180px] max-[556px]:hidden"
        onClick={nexto}
      />
      <ChevronLeftIcon
        className="h-[56px] w-[56px] rounded-[40px]  p-[10px] bg-white text-black opacity-50 hover:scale-110 hover:opacity-100 transition-all absolute left-0 z-10  bottom-[180px] max-[556px]:hidden"
        onClick={prev}
      />
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView:2,
            spaceBetween:0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(s) => {
          //console.log("initialize swiper", s);
          // @ts-ignore
          setSwiper(s);
        }}
      >
        {movies.map((movie: movieDetails) => (
          <SwiperSlide>
            <MovieCard key={movie._id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSection;
