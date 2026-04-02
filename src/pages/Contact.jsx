import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl mb-6">
        We’d love to hear from you. Reach out for collaborations, partnerships, 
        or to join the legacy in motion.
      </p>
      <p className="text-gray-800 dark:text-gray-400">📧 aikinannu@gmail.com</p>
      <p className="text-gray-800 dark:text-gray-400">📞 +233 55 752 9621</p>
    </motion.div>
  );
}

export default Contact;
