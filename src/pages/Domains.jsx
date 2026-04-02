import React from "react";
import { motion } from "framer-motion";

function Domains() {
  const domains = [
    {
      title: "Graphic & Fashion Design",
      desc: "Bold visuals and garments that speak culture and identity.",
    },
    {
      title: "Real Estate & Architecture",
      desc: "Structures that inspire. Spaces that last.",
    },
    {
      title: "Trade & Commerce",
      desc: "Connecting markets and opportunities globally.",
    },
    {
      title: "Marketing & Commercials",
      desc: "Turning messages into unforgettable movements.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-primary dark:text-accent mb-12">
        Our Core Domains
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-accent mb-2">
              {domain.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{domain.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Domains;
