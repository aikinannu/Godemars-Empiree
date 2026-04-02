import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-4">
        About Godemar’s Empire
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center leading-relaxed">
        We are a multidimensional powerhouse uniting <span className="font-semibold">graphic design, fashion design, 
        real estate, architecture, trade, marketing and commercials </span> 
        into one grand tapestry. Godemar’s Empire is not just a brand—it is a legacy in motion, 
        shaping the future of creativity and commerce.
      </p>
      <Link to="/domains">
        <button className="mt-8 px-6 py-2 bg-accent text-white rounded shadow hover:bg-primary transition">
          Explore Our Domains
        </button>
      </Link>
    </motion.div>
  );
}

export default About;
