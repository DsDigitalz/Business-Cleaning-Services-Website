import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#111D15] w-full pt-15 pb-5 mt-10 lg:pt-30 scroll scroll-smooth" id="footer">
      <div className="max-w-[1440px] flex flex-col gap-12 mx-auto px-5 md:px-20 lg:px-40 lg:flex-row lg:items-center lg:justify-between  text-white">
        {/* First container */}
        <div className="flex flex-col gap-7 lg:flex-1/4">
          <div className="flex gap-2 items-center pt-2  ">
            <div>
              <img
                src="./brush.png"
                alt=""
                className="w-[25px] lg:w-[30px] xl:w-[40px]"
              />
            </div>
            <div className="flex flex-col leading-5">
              <h1 className="text-[24px] font-bold text-[#36B864] lg:text-2xl xl:text-3xl">
                Pro<span className="text-white">Cleaning</span>
              </h1>
              <p className="text-white text-[12px] lg:text-[12px] xl:text-[15px] mt-1">
                Cleaning Service Company
              </p>
            </div>
          </div>
          <p className="w-[85%]">
            Stay updated with our latest cleaning tips, service updates, and
            helpful articles on maintaining a spotless home.
          </p>
        </div>
        {/* Second container */}
        <div className="flex flex-col gap-4 lg:flex-1/8">
          <h1 className="text-[18px] font-semibold mb-2">Company</h1>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Team</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-1/8">
          <h1 className="text-[18px] font-semibold mb-2">Know More</h1>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Team</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-1/8">
          <h1 className="text-[18px] font-semibold mb-2">Newsletter</h1>
          <label htmlFor="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="border border-zinc-500 rounded p-3 w-full lg:text-[12px] xl:text-[14px]"
            />
          </label>
          <button className="cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c] w-[30%] lg:w-[70%] xl:w-[50%]">
            Send
          </button>
        </div>
      </div>
      <div className="border-t-1 border-zinc-400 mt-15 flex justify-center pt-5 text-zinc-400 lg:mt-20">
        <p>2024 “Procleaning” All Rights Received</p>
      </div>
    </section>
  );
}
