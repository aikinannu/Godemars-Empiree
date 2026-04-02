// src/components/pages/Notfound.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-accent text-white rounded shadow hover:bg-primary transition">
          Back Home
        </button>
      </Link>
    </motion.div>
  );
}
