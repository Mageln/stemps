import { PaginationProps } from "@/interface/interface";
import React from "react";



export default function Pagination({
  slides,
  currentSlide,
  goToSlide,
}: PaginationProps) {
  return (
    <div className="absolute bottom-4 left-[-49px]  transform -translate-x-1/2 flex space-x-2 md:hidden">
      {slides.map((slide, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`transition-all duration-300 ease-in-out ${
            currentSlide === index ? "w-[40px]" : "w-3"
          } h-2 rounded-full relative bg-gray`}
        >
          {currentSlide === index && (
            <div className="absolute left-0 top-0 w-[20px] h-2 bg-black rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}