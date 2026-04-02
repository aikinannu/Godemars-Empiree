import React from "react";
import { motion } from "framer-motion";

function Careers() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6">
        Careers at Godemar’s Empire
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center leading-relaxed">
        Join the Empire and be part of a dynamic team shaping the future of 
        design, real estate, trade, and marketing. We value visionaries, innovators, 
        and those who dare to dream beyond boundaries.
      </p>
      <a
        href="mailto:careers@godemars-empire.com"
        className="mt-8 px-6 py-2 bg-accent text-white rounded shadow hover:bg-primary transition"
      >
        Apply Now
      </a>
    </motion.div>
  );
}

export default Careers;
