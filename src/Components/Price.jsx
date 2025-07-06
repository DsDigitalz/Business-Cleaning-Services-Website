import React from "react";

export default function Price() {
  return (
    <section className="bg-[#2a8f4c]">
      <div className="max-w-[1440px] mx-auto bg-[#2a8f4c] px-5 py-10 my-10 md:px-20 lg:px-40">
        <div className="text-white flex flex-col items-center gap-4">
          <p>Our Pricing</p>
          <h1 className="text-4xl font-bold text-center">
            Choose From Our Lowest Plans and Prices
          </h1>
          <div className="bg-zinc-100 rounded-full py-2 px-3 flex gap-3 mt-5">
            <div className="bg-[#2a8f4c] py-2 px-4 rounded-full font-medium">
              Monthly
            </div>
            <div className="bg-white py-2 px-4 rounded-full text-black font-medium">
              Yearly
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <div className="bg-white p-7 my-10 rounded-2xl flex flex-col items-center gap-4 hover:scale-104 hover:transition-all duration-500">
            <h1 className="font-medium text-[20px]">BASIC PACKAGE</h1>
            <button className="px-5 py-4 bg-[#2a8f4c] rounded-lg text-white font-semibold text-2xl">
              <span className="text-[12px] font-light">$</span>59.00/
              <span className="text-[12px] font-light">Monthly</span>
            </button>
            <div>
              <div className="bg-zinc-700 p-1 rounded-full"></div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Dusting of all surfaces
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Sweeping and mopping floors
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Vacuuming carpets and rugs
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Cleaning of kitchen surfaces
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Cleaning of bathroom surfaces
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Emptying trash bins
                  </p>
                </div>
                <button className="mt-5 p-3 border border-zinc-500 *:cursor-pointer hover:bg-[#2a8f4c] rounded hover:text-white transition-all duration-300 py-3 px-5 font-semibold active:bg-[#21723c]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 my-10 rounded-2xl flex flex-col items-center gap-4 hover:scale-104 hover:transition-all duration-500">
            <h1 className="font-medium text-[20px] uppercase">
              Enterprise Package
            </h1>
            <button className="px-5 py-4 bg-[#2a8f4c] rounded-lg text-white font-semibold text-2xl">
              <span className="text-[12px] font-light">$</span>69.00/
              <span className="text-[12px] font-light">Monthly</span>
            </button>
            <div>
              <div className="bg-zinc-700 p-1 rounded-full"></div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    All services in the Basic Plan
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">Detailed dusting</p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Wiping down of kitchen appt
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Cleaning inside the microwave
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Changing bed linens
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Spot cleaning walls and doors
                  </p>
                </div>
                <button className="mt-5 p-3 border border-zinc-500 *:cursor-pointer hover:bg-[#2a8f4c] rounded hover:text-white transition-all duration-300 py-3 px-5 font-semibold active:bg-[#21723c]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-7 my-10 rounded-2xl flex flex-col items-center gap-4 hover:scale-104 hover:transition-all duration-500">
            <h1 className="font-medium text-[20px] uppercase">
              Premium Package
            </h1>
            <button className="px-5 py-4 bg-[#2a8f4c] rounded-lg text-white font-semibold text-2xl">
              <span className="text-[12px] font-light">$</span>99.00/
              <span className="text-[12px] font-light">Monthly</span>
            </button>
            <div>
              <div className="bg-zinc-700 p-1 rounded-full"></div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    All services in the Clean Plan
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Deep cleaning of kitchen appt
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Baseboards, door frames, & vents
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Organization of closets pantries
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Carpet, upholstery spot cleaning
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-zinc-500 rounded-full w-2 h-2"></div>
                  <p className="text-zinc-500 rounded-full">
                    Detailed bathroom cleaning
                  </p>
                </div>
                <button className="mt-5 p-3 border border-zinc-500 *:cursor-pointer hover:bg-[#2a8f4c] rounded hover:text-white transition-all duration-300 py-3 px-5 font-semibold active:bg-[#21723c]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
