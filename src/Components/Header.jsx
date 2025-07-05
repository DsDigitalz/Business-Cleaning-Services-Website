import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-3">
      {/* Logo */}
      <div className="flex gap-2 items-center ">
        <div>
          <img src="./brush.png" alt="" className="w-[20px]" />
        </div>
        <div className="flex flex-col leading-5">
          <h1 className="text-[19px] font-bold text-[#36B864] ">
            Pro<span className="text-black">Cleaning</span>
          </h1>
          <p className="text-[10px]">Cleaning Service Company</p>
        </div>
      </div>
      {/* Hamburger */}
      <nav className="flex flex-col gap-1">
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
        <div className="px-3.5 py-0.5 rounded bg-[#36B864] "></div>
      </nav>
      {/* Nav Info */}
    </header>
  );
}
