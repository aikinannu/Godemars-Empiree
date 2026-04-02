import React from "react";
import { motion } from "framer-motion";

function Vision() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-yellow-300 dark:from_gray-900 dark:to-black px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6">
        Our Vision
      </h2>
      <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl text-center leading-relaxed">
        To be the epicenter of innovation and timeless creativity, Godemar’s Empire 
        envisions a world where artistry, enterprise, and architecture form the foundation 
        of a lasting legacy that inspires generations.
      </p>
    </motion.div>
  );
}

export default Vision;
