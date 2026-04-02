import React from "react";
import { motion } from "framer-motion";

export default function Hub({ divisions, onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">Explore Divisions</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {divisions.map((division) => (
          <motion.div
            key={division.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(division)}
            className={`p-6 rounded-2xl shadow-md cursor-pointer text-white text-center ${division.color}`}
          >
            {division.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
