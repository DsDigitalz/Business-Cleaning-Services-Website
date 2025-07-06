import React from "react";

export default function BlogInfo() {
  return (
    <section className="border-b border-zinc-300 mb-10 scroll-smooth" id="blog">
      <div className="bg-white max-w-[1440px] mx-auto flex flex-col  items-center pt-5 px-10 text-[#111D15] mt-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-20 md:py-10 lg:px-40">
        <div className=" text-3xl font-bold  px-3 text-center  py-3 sm:w-[60%] md:flex md:items-center md:text-left md:mt-0 lg:text-[36px] bg-[#FAF9F6] md:p-5 md:w-[70%] lg:w-[70%]">
          Stay Updated with Our Tips & Service News!
        </div>

        <div className="flex flex-col gap-2 shadow-2xl items-center border pl-5 border-y-zinc-200 border-x-zinc-300 mt-4 bg-white p-3  md:items-start md:w-[50%] md:p-5 md:mt-0">
          <h1 className="font-semibold text-xl">Our Blog</h1>
          <p className="text-center  md:text-left">
            Stay informed with our latest cleaning tips, service updates, expert
            advice on maintaining an immaculate home
          </p>
        </div>
      </div>
    </section>
  );
}
