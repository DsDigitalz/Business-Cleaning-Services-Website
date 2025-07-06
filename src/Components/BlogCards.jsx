import React from "react";

export default function BlogCards() {
  return (
    <section
      className="grid grid-cols-1 px-5 gap-10 w-full rounded-t-4xl md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-40 xl:grid-cols-3 2xl:grid-cols-3 max-w-[1440px] mx-auto mt-10 mb-20 scroll-smooth"
      id="blog"
    >
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
           hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/blog1.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <p className="uppercase">JOHN HELTON JAN 6, 2025</p>
          <h1 className="font-semibold text-[20px]">
            Eco-Friendly Cleaning: How We Keep Your Home Green
          </h1>
          <p>
            Learn about our commitment to eco-friendly practices. We share the
            eco-conscious products...
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%]">
            Read More
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
           hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/blog1.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <p className="uppercase">JOHN HELTON JAN 6, 2025</p>
          <h1 className="font-semibold text-[20px]">
            How to Maintain a Clean Home Between Professional Visits
          </h1>
          <p>
            Get practical advice on maintaining cleanliness between our
            scheduled visits. These easy-to-follow tips...
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%]">
            Read More
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
           hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/blog1.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <p className="uppercase">JOHN HELTON JAN 6, 2025</p>
          <h1 className="font-semibold text-[20px]">
           The Benefits of Regular Professional Cleaning
          </h1>
          <p>
           Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%]">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
