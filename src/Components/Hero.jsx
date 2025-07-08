import React from "react";

export default function Hero() {
  return (
    <section
      className="relative mx-auto md:flex md:justify-center scroll-smooth"
      id="home"
    >
      <div className="md:hidden">
        <img src="/hero.png" alt="" />
      </div>
      <div className=" hidden md:block w-full">
        <img src="/banner.png" alt="" className="w-full" />
      </div>
      <div className=" flex flex-col gap-7 absolute left-5 top-40 w-[90%] sm:absolute  md:absolute md:top-10 md:left-20 md:flex md:flex-col md:gap-1 lg:top-20 lg:left-41 lg:gap-5 lg:w-[70%] xl:top-20 2xl:top-50 2xl:w-[60%] 2xl:left-99 ">
        <div className="flex flex-col gap-2">
          <p className="text-white  md:text-[16px] md:text-black xl:text-[20px]">
            Quality cleaning at a fair price
          </p>
          <h1 className="text-white text-3xl font-bold md:text-black md:text-3xl lg:text-4xl md:w-[60%] xl:text-[55px] xl:w-[60%] ">
            Specialized, efficient, and thorough cleaning services
          </h1>
        </div>
        <p className="text-white md:text-[14px] md:w-[50%] md:text-black xl:text-[18px]">
          We provide Performing cleaning tasks using the least amount of time,
          energy, and money.
        </p>
        <div className="flex gap-1 md:flex md:gap-3">
          <button className="text-[14px] lg:text-[16px] cursor-pointer bg-[#2a8f4c] hover:scale-102 transition-all duration-500 rounded text-white py-3 px-5 font-semibold active:bg-[#2c5439]">
            Get Start Now
          </button>
          <button className="text-[14px] lg:text-[16px] text-white cursor-pointer border hover:scale-102 border-zinc-500 md:border-zinc-600 md:text-black rounded py-3 px-5 font-semibold hover:bg-zinc-100 transition-all duration-300 hover:border-none active:bg-[#dcdddc] active:text-black">
            View all Services
          </button>
        </div>
      </div>
    </section>
  );
}
