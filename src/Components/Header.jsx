import React, { useState } from "react";

export default function Header() {
  // Create a Hook using useState to manage the state of the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the hamburger menu state
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="relative flex flex-col lg:flex-row lg:justify-between px-5 lg:px-10 py-3 ">
      {/* Logo */}
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <div>
            <img
              src="./brush.png"
              alt=""
              className="w-[20px] lg:w-[30px] xl:w-[40px]"
            />
          </div>
          <div className="flex flex-col leading-5">
            <h1 className="text-[18px] md:text-xl font-bold text-[#36B864] lg:text-2xl xl:text-3xl">
              Pro<span className="text-black">Cleaning</span>
            </h1>
            <p className="text-[9px] md:text-[10px] lg:text-[12px] xl:text-[15px]">
              Cleaning Service Company
            </p>
          </div>
        </div>
        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="relative flex flex-col gap-1 lg:hidden overflow-hidden"
        >
          <div
            className={`px-3.5 py-0.5 rounded bg-[#36B864] transition-all ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`px-3.5 py-0.5 rounded bg-[#36B864] transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }  `}
          ></div>
          <div
            className={`px-3.5 py-0.5 rounded bg-[#36B864] transition-all ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>
      {/* Nav Info */}
      <nav
        className={`lg:flex lg:justify-between lg:items-center overflow-hidden`}
      >
        <div
          className={`lg:static lg:translate-x-0 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } absolute top-12 left-0 w-full z-20 bg-white lg:block overflow-hidden`}
        >
          <ul className="py-10 lg:py-0 flex flex-col gap-3 lg:flex-row items-center lg:gap-10 font-medium lg:visible lg:static">
            <li className="text-center rounded bg-[#c0fad45b] active:bg-[#90fdb65b]  w-full lg:w-fit p-3 lg:p-0 cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b active:text-[#21723c] lg:bg-white ">
              <a href="#home">Home</a>
             
            </li>
            <li className="text-center bg-[#c0fad45b] cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b active:text-[#21723c] p-3 lg:p-0 w-full lg:w-fit rounded lg:bg-white active:bg-[#90fdb65b]">
              <a href="#services">Services</a>
            </li>
            <li className="text-center bg-[#c0fad45b] cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b active:text-[#21723c] p-3 w-full lg:p-0 lg:w-fit rounded lg:bg-white active:bg-[#90fdb65b]">
              <a href="#about">About Us</a>
            </li>
            <li className="text-center bg-[#c0fad45b] cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b active:text-[#21723c] p-3 w-full lg:w-fit lg:p-0 rounded lg:bg-white active:bg-[#90fdb65b]">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-center bg-[#c0fad45b] cursor-pointer hover:scale-103 transition-all duration-300 hover:text-[#36B864] hover:pb-1 hover:border-b active:text-[#21723c] p-3 w-full lg:w-fit lg:p-0 rounded lg:bg-white active:bg-[#90fdb65b]">
              <a href="#contact">Contact</a>
            </li>
            <button className="transition-all duration-300 cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c] w-full lg:w-34 lg:block">
              Get a quote
            </button>
          </ul>
        </div>
      </nav>
      {/* 🔍 Key Changes: Before After translate-x-full -translate-x-full right-0
      left-0 This will make the menu slide in from the left side on mobile
      screens. Let me know if you'd also like to add fade-in, backdrop blur, or
      close on outside click functionality. 2/2 Ask ChatGPT */}
    </header>
  );
}
