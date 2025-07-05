import React from "react";

export default function QuoteSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 py-10 bg-[#FFFFF0] md:flex md:flex-row-reverse md:items-center  md:px-20 lg:px-40">
      <div>
        <img src="/qimg.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10 gap-2 md:items-start md:text-left ">
        <p className="">Affordable cleaning solutions</p>
        <h1 className="text-4xl font-bold lg:w-[70%] lg:text-[36px] xl:w-[80%]">
          High-Quality and Friendly Services at Fair Prices
        </h1>
        <p className="text-zinc-500 my-3">
          We provide comprehensive cleaning services tailored to your needs.
          From residential cleaning services
        </p>
        <button className="cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]">
          Get a quote
        </button>
      </div>
    </section>
  );
}
