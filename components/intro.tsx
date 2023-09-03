"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/my-pic.jpg"
            height="192"
            width="192"
            alt=""
            quality="95"
            priority={true}
            className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
