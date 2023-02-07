import React from 'react'
import { useSwiper } from 'swiper/react';
import { ChevronRightIcon } from "@heroicons/react/24/solid";
type Props = {}

const SlideNextButton = (props: Props) => {
    const swiper = useSwiper();
  return (
    <ChevronRightIcon className="h-[56px] w-[56px] rounded-[40px] p-[10px] bg-white text-black opacity-50 hover:scale-110 hover:opacity-100 transition-all absolute right-0 z-10 top-[180px]" onClick={() => swiper.slideNext()}/>
  )
}

export default SlideNextButton