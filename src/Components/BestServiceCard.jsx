import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { easeIn, easeOut, motion } from "framer-motion";

export default function BestServiceCard() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
       //For sequential children\
      .
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 px-5 gap-10 w-full rounded-t-4xl md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-40 xl:grid-cols-3 2xl:grid-cols-3 max-w-[1440px] mx-auto mt-10 mb-20 scroll-smooth"
      id="services"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
        hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/card1.png" alt="" className="2xl:w-full" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">Office Cleaning</h1>
          <p>
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%]">
            Book Now
            <FiArrowUpRight />
          </button>
        </div>
      </motion.div>
      <motion.div
      variants={itemVariants}
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
        hover:scale-103 hover:transition-all-opacity duration-500"
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/card2.png" alt="" className="2xl:w-full" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">Spring Cleaning</h1>
          <p>
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%] ">
            Book Now
            <FiArrowUpRight />
          </button>
        </div>
      </motion.div>
      <motion.div
      variants={itemVariants}
        className="flex flex-col gap-4 border border-zinc-200 rounded-4xl hover:shadow-2xl hover:shadow-[#2a8f4c45]
        hover:scale-103 hover:transition-all-opacity duration-500 "
      >
        <div className="rounded-4xl p-5 hover:w-full hover:p-0 hover:transition-all-opacity duration-500 hover:shadow-2xl">
          <img src="/card3.png" alt="" className="2xl:w-full" />
        </div>
        <div className="flex flex-col gap-4 px-5 pb-5">
          <h1 className="font-semibold text-[24px]">House Cleaning</h1>
          <p>
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
          <button className="cursor-pointer bg-white border w-[50%] border-zinc-400 rounded px-3 py-2 font-semibold flex items-center gap-3 mb-5 hover:bg-[#2a8f4c] hover:transition-colors duration-300 hover:text-white active:bg-[#21723c] a active:text-white md:w-[60%] lg:w-[90%] xl:w-[45%] 2xl:w-[50%]">
            Book Now
            <FiArrowUpRight />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
