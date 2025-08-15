import React from "react";
import { motion } from "framer-motion";

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3, // Stagger children for a sequential effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BestServiceInfo() {
  return (
    <motion.section
      className="border-b border-zinc-300 mb-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className="bg-white max-w-[1440px] mx-auto flex flex-col items-center pt-5 px-10 text-[#111D15] mt-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-20 md:py-10 lg:px-40"
        id="services"
      >
        <motion.div
          className="text-3xl font-bold w-[95%] text-center py-3 sm:w-[60%] md:flex md:items-center md:text-left md:mt-0 lg:text-4xl bg-[#FAF9F6] md:p-5 md:w-[50%] lg:w-[70%] lg:text-[36px] xl:w-[60%]"
          variants={itemVariants}
        >
          We Always Provide The Best Service
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 shadow-2xl items-center border pl-5 border-y-zinc-200 border-x-zinc-300 mt-4 bg-white p-3 md:items-start md:w-[50%] md:p-5 md:mt-0"
          variants={itemVariants}
        >
          <h1 className="font-semibold text-xl">Services</h1>
          <p className="text-center w-[90%] md:text-left">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
