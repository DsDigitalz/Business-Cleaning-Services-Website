import React from "react";

export default function About() {
  return (
    <section className="bg-[#FFFFF0]">
      <div
        className="max-w-[1440px] mx-auto px-5 py-10  md:flex md:justify-between md:items-center md:gap-20 md:px-20 lg:gap-10 lg:px-40 scroll-smooth"
        id="about"
      >
        <div>
          <img src="/a-img.png" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-10 gap-2 md:items-start md:text-left md:w-[80%] lg:w-[90%] xl:w-[50%] ">
          <h1 className="text-4xl font-bold  lg:text-[36px] xl:w-[80%]">
            Welcome To Our Pro-cleaning Company!
          </h1>
          <p className="text-zinc-500 my-3 md:w-[90%] lg:w-full">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!"
          </p>
          <div className="grid grid-cols-1 gap-3 items-center lg:grid-cols xl:grid-cols-2 ">
            <div className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3">
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Vetted professionals</p>
            </div>
            <div className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3">
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Affordable Prices</p>
            </div>
            <div className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3">
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Next day availability</p>
            </div>
            <div className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3">
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Best Quality</p>
            </div>
            <div className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3">
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Standard cleaning tasks</p>
            </div>
            <div
              className="bg-[#F9F6EE] rounded p-4 flex items-center gap-3 scroll-smooth"
              id="about"
            >
              <div>
                <img src="/mark.png" alt="" />
              </div>
              <p>Affordable Prices</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:flex-row lg:gap-3">
            <button className="transition-all duration-300 cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]">
              Book Now
            </button>
            <button className="cursor-pointer  rounded border border-zinc-400 py-3 px-5 font-semibold hover:bg-[#f3f4f3] active:bg-[#e4e4e4] transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
