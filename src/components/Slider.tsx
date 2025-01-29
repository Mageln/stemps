"use client";

import Slide from "./Slide";
import "swiper/css";
import Pagination from "./Pagination";
import { SLIDER_MENU } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState} from "react";
import { Swiper as SwiperType } from 'swiper/types';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);


  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };



  return (
    <div className="w-full pt-6 relative">
      <Swiper
       
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={handleSlideChange}
      >
        {SLIDER_MENU.map((slide, index) => (
          <SwiperSlide className="pb-20" key={index}>
            <Slide content={slide.text} image={slide.logo} description={slide?.description} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2 z-10">
        <Pagination
          slides={SLIDER_MENU}
          currentSlide={currentSlide}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
}