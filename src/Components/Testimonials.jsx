import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Testimonials() {
  return (
    <section className="bg-[#FFFFF0]">
      <div className="max-w-[1440px] mx-auto px-5 py-10 bg-[#FFFFF0] md:flex md:flex-row-reverse md:items-center  md:px-20 lg:px-40">
        <div className="flex flex-col gap-5 shadow items-center justify-center bg-white p-10 border-[#2a8f4c] border-t-10 border-r-10 rounded-4xl xl:flex-row xl:justify-between lg:flex-1">
          <div className="lg:flex-1">
            <img src="/staff.png" alt="" />
          </div>
          <div className="text-zinc-300  bg-[#2a8f4c] p-2 text-5xl rounded xl:hidden">
            <RiDoubleQuotesR />
          </div>
          <div className="flex flex-col gap-2 items-center xl:items-start lg:flex-1">
            <h1 className="font font-semibold text-2xl lg:text-xl">
              Robert Fox
            </h1>
            <p>Business Woman</p>
            <div>
              <img src="/stars.png" alt="" />
            </div>
            <p className="text-center xl:text-left">
              Excellent service! The team was punctual, thorough, and left my
              home sparkling clean. Highly recommend for anyone needing a
              reliable and detailed cleaning service
            </p>
          </div>
          <div className="hidden text-zinc-300  bg-[#2a8f4c] p-2 text-5xl rounded xl:block">
            <RiDoubleQuotesR />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 gap-2 md:items-start md:text-left lg:flex-1">
          <h1 className="text-4xl font-bold lg:w-[70%] lg:text-[36px] xl:w-[80%]">
            Feedback About Their Experience With Us
          </h1>
          <p className="text-zinc-500 my-3 md:w-[90%] lg:w-[80%]">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>
          <div className="flex gap-3 items-center">
            <button className="cursor-pointer hover:bg-[#2a8f4c] border rounded-lg border-[#2a8f4c] hover:text-white py-2 px-5 font-semibold active:bg-[#21723c]  active:text-white transition-all duration-300">
              <IoIosArrowRoundBack className="text-[#2a8f4c] hover:text-white text-3xl  active:text-white" />
            </button>

            <button className="cursor-pointer hover:bg-[#2a8f4c] border border-[#2a8f4c] rounded-lg   py-2 px-5 font-semibold active:bg-[#21723c] transition-all duration-300 hover:text-white ">
              <IoIosArrowRoundForward className="text-[#2a8f4c] text-3xl  hover:text-white  active:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
