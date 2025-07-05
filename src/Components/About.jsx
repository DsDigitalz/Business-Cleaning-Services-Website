import React from "react";

export default function About() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 py-10 bg-[#FFFFF0]">
      <div>
        <img src="/a-img.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10 gap-2 md:items-start md:text-left ">
        <h1 className="text-4xl font-bold lg:w-[70%] lg:text-[36px] xl:w-[80%]">
          Welcome To Our Pro-cleaning Company!
        </h1>
        <p className="text-zinc-500 my-3 ">
         We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!"
        </p>
        di
        <button className="cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]">
          Get a quote
        </button>
      </div>
    </section>
  );
}
