import React from "react";

export default function Hero() {
  return (
    <section className=" max-w-[2560px] mx-auto relative md:flex md:justify-center scroll-smooth" id="home">
      <div className="w-full">
        <img src="/banner.png" alt="" className="w-full" />
      </div>
      <div className=" absolute md:absolute md:top-10 md:left-20 md:flex md:flex-col md:gap-1 lg:top-20 lg:left-41 lg:gap-5 lg:w-[70%] xl:top-33 2xl:top-50 2xl:w-[60%] 2xl:left-99 ">
        <div className="flex flex-col gap-2">
          <p className=" md:text-[16px] xl:text-[20px]">
            Quality cleaning at a fair price
          </p>
          <h1 className=" font-bold md:text-3xl lg:text-4xl md:w-[60%] xl:text-[55px] xl:w-[60%] ">
            Specialized, efficient, and thorough cleaning services
          </h1>
        </div>
        <p className="md:text-[14px] md:w-[50%] xl:text-[18px]">
          We provide Performing cleaning tasks using the least amount of time,
          energy, and money.
        </p>
        <div className="md:flex md:gap-3">
          <button className="cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]">
            Get Start Now
          </button>
          <button className="cursor-pointer border rounded py-3 px-5 font-semibold hover:bg-[#2a8f4c] transition-all duration-300 hover:text-white active:bg-[#21723c]">
            View all Services
          </button>
          
        </div>
      </div>
    </section>
  );
}
