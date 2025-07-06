import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
export default function Contact() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-[1440px] mx-auto px-5  py-5 md:px-20 lg:px-40 lg:flex lg:items-center lg:justify-between lg:gap-20 scroll-smooth" id="contact">
        <div className=" flex flex-col gap-5 lg:flex-1">
          <h1 className="text-4xl font-semibold mb-2">Find us</h1>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
            <div className=" text-xl text-white bg-[#2a8f4c] rounded-full  p-3">
              <FaPhoneAlt />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold">Call Us</h1>
              <p className="text-zinc-500">+(08) 255 201 888</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
            <div className=" text-xl text-white bg-[#2a8f4c] rounded-full  p-3">
              <MdEmail />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold">Email Now</h1>
              <p className="text-zinc-500">Hello@procleaning.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
            <div className=" text-xl text-white bg-[#2a8f4c] rounded-full  p-3">
              <IoLocationSharp />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold">Address</h1>
              <p className="text-zinc-500">7510, Brand Tower, New York, USA</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-3 mt-10 lg:flex-1">
          <p>Contact Info</p>
          <h1 className="text-4xl font-semibold mb-2">Keep In Touch</h1>
          <p className="text-zinc-500">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner
          </p>
          <label htmlFor="">
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Name"
              className="p-3 w-full outline-[#2a8f4c] shadow border border-zinc-300  "
            />
          </label>
          <label htmlFor="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-3 w-full outline-[#2a8f4c] shadow border border-zinc-300  "
            />
          </label>
          <label htmlFor="">
            <textarea
              name="message"
              id="message"
              placeholder="Message "
              className="p-3 w-full outline-[#2a8f4c] shadow border border-zinc-300"
            ></textarea>
          </label>
          <button className="transition-all duration-300 cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c] w-[50%] md:w-[40%] lg:w-[60%] xl:w-[40%] 2xl:w-[40%]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
