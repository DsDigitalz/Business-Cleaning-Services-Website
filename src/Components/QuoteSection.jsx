import React from "react";
import { delay, motion } from "framer-motion";
export default function QuoteSection() {
  const buttonVariants = {
    hover: {
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
      textshadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255)",
      transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <section className="bg-[#FFFFF0]">
      <div className="max-w-[1440px] mx-auto px-5 py-10  md:flex md:flex-row-reverse md:items-center  md:px-20 lg:px-40">
        <div>
          <img src="/qimg.png" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 gap-2 md:items-start md:text-left ">
          <p className="">Affordable cleaning solutions</p>
          <h1 className="text-4xl font-bold lg:w-[70%] lg:text-[36px] xl:w-[80%]">
            High-Quality and Friendly Services at Fair Prices
          </h1>
          <p className="text-zinc-500 my-3 md:w-[90%] lg:w-[80%]">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
          <motion.button
            variants={buttonVariants}
            className="transition-all duration-300 cursor-pointer bg-[#2a8f4c] rounded text-white py-3 px-5 font-semibold active:bg-[#21723c]"
          >
            Get a quote
          </motion.button>
        </div>
      </div>
    </section>
  );
}
