import React from "react";
import { motion } from "framer-motion";

function Purpose() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6">
        Our Purpose
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl text-center leading-relaxed">
        Godemar’s Empire exists to coordinate greatness across industries. 
        Our purpose is to unify diverse strengths into one empire of creativity, commerce, 
        and innovation, ensuring that every project we touch carries the mark of excellence.
      </p>
    </motion.div>
  );
}

export default Purpose;
