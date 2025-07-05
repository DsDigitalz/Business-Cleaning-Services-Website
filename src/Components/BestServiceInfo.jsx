import React from "react";

export default function BestServiceInfo() {
  return (
    <section className="bg-amber-50">
      <div className="max-w-[1440px] mx-auto flex flex-col border-b border-zinc-300 mb-10 items-center pt-5 px-10 text-[#111D15] mt-10 bg-amber-50 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10 lg:px-40">
        <div className=" text-3xl font-bold w-[70%] text-center p-2 sm:w-[60%] md:flex md:items-center md:w-[70%] md:text-left md:mt-0 lg:text-[44px]">
          We Always Provide The Best Service
        </div>

        <div className="flex flex-col shadow-2xl items-center border pl-5 border-y-zinc-200 border-x-zinc-300 mt-4 bg-white p-3  md:items-start md:w-[50%] md:p-5 md:mt-0">
          <h1 className="font-semibold text-xl">Services</h1>
          <p className="text-center w-[90%] md:text-left">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>
    </section>
  );
}
