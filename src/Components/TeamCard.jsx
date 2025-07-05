import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
export default function TeamCard() {
  return (
    <section className="grid grid-cols-1 px-5 gap-10 w-full rounded-t-4xl md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-40 xl:grid-cols-3 2xl:grid-cols-3 max-w-[1440px] mx-auto mt-10 mb-20">
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
                hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/team1.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">Erick Reynolds</h1>
          <div>
            <img src="/stars.png" alt="" />
          </div>
          <p>
            She is an expert cleaning staff member who provides thorough
            cleaning with precision,
          </p>
          <div className="flex gap-7 text-lg mb-5 ">
            <a href="">
              <FaFacebook className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <BsTwitterX className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <ImLinkedin className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <FaInstagram className="cursor-pointer active:text-[#21723c]" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
                hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/team2.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">Erick Reynolds</h1>
          <div>
            <img src="/stars.png" alt="" />
          </div>
          <p>
            She is an expert cleaning staff member who provides thorough
            cleaning with precision,
          </p>
          <div className="flex gap-7 text-lg mb-5 ">
            <a href="">
              <FaFacebook className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <BsTwitterX className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <ImLinkedin className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <FaInstagram className="cursor-pointer active:text-[#21723c]" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
                hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/team3.png" alt="" className="2xl:w-full rounded-4xl" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">Erick Reynolds</h1>
          <div>
            <img src="/stars.png" alt="" />
          </div>
          <p>
            She is an expert cleaning staff member who provides thorough
            cleaning with precision,
          </p>
          <div className="flex gap-7 text-lg mb-5 ">
            <a href="">
              <FaFacebook className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <BsTwitterX className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <ImLinkedin className="cursor-pointer active:text-[#21723c]" />
            </a>
            <a href="">
              <FaInstagram className="cursor-pointer active:text-[#21723c]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
