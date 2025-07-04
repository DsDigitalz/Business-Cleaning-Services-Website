import React from "react";

export default function BestServiceInfo() {
  return (
    <section className="flex flex-col items-center text-[#111D15] mt-10 bg-amber-50 md:flex-row md:items-center md:gap-20 md:px-10">
      <div className=" text-3xl font-bold w-[70%] text-center p-2 sm:w-[60%] md:flex md:items-center md:w-[70%] md:text-left md:mt-0">
        We Always Provide The Best Service
      </div>

      <div className="flex flex-col items-center mt-4 bg-white p-3 w-full md:items-start md:w-[80%]">
        <h1 className="font-semibold text-xl">Services</h1>
        <p className="text-center w-[90%] md:text-left">
          While we can customize your cleaning plan to suit your needs, most
          clients schedule regular cleaning services:
        </p>
      </div>
    </section>
  );
}
