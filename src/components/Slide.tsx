import { SlideProps } from "@/interface/interface";
import Image from "next/image";
import React from "react";

export default function Slide({ content, image, description }: SlideProps) {
  return (
    <div className="w-full h-[256px] pb-2 rounded-lg bg-lightgray flex flex-col items-center justify-between overflow-hidden p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center md:hidden">
        <div className="w-full h-[70%] relative">
          <Image 
            src={image} 
            alt="logo" 
            width={80} 
            height={80} 
            className="object-cover w-[60px] h-[60px] md:w-[80px] md:h-[80px]" 
          />
        </div>
        <div className="w-full h-[30%] flex items-center justify-center text-center">
          <h4 className="text-h4 ">{content}</h4>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-end w-full h-full">
        <div className="w-full h-[70%] relative">
          <Image 
            src={image} 
            alt="logo" 
            width={80} 
            height={80} 
            className="object-cover" 
          />
        </div>
        <div className="w-full h-[30%] flex items-center justify-center text-center">
          <h3 className="text-2xl font-bold pb-4">{content}</h3>
        </div>
      </div>

      {description && (
        <div className="w-full text-center mt-4 md:hidden">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
}