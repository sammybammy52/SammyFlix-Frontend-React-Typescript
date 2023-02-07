import React from 'react'
import { useSwiper } from 'swiper/react';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
type Props = {}

const SlidePrevButton = (props: Props) => {
    const swiper = useSwiper();
  return (
    <ChevronLeftIcon className="h-[56px] w-[56px] rounded-[40px]  p-[10px] bg-white text-black opacity-50 hover:scale-110 hover:opacity-100 transition-all absolute left-0 z-10  top-[180px]" onClick={() => swiper.slidePrev()}/>
  )
}

export default SlidePrevButton