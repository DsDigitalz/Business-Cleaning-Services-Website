import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 lg:px-10 py-3">
      {/* Logo */}
      <div className="flex gap-2 items-center pt-2 ">
        <div>
          <img
            src="./brush.png"
            alt=""
            className="w-[20px] lg:w-[30px] xl:w-[40px]"
          />
        </div>
        <div className="flex flex-col leading-5">
          <h1 className="text-[19px] font-bold text-[#36B864] lg:text-2xl xl:text-3xl">
            Pro<span className="text-black">Cleaning</span>
          </h1>
          <p className="text-[10px] lg:text-[12px] xl:text-[15px]">
            Cleaning Service Company
          </p>
        </div>
      </div>
      {/* Hamburger */}
      <button className="flex flex-col gap-1 lg:hidden">
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
      </button>
      {/* Nav Info */}
      {/* <ul className="flex gap-10 font-medium md:">
        <li className="cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b  active:text-[#21723c]">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b  active:text-[#21723c]">
          <a href="#services">Services</a>
        </li>
        <li className="cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b  active:text-[#21723c]">
          <a href="#about">About Us</a>
        </li>
        <li className="cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b  active:text-[#21723c]">
          <a href="#blog">Blog</a>
        </li>
        <li className="cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b  active:text-[#21723c]">
          <a href="#contact">Contact</a>
        </li>
      </ul> */}
      {/* <button className="cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]">
        Get a quote
      </button> */}
    </header>
  );
}
