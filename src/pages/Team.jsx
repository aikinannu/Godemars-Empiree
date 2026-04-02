import React from "react";
import { motion } from "framer-motion";

function Team() {
  const members = [
    { name: "Godemar", role: "Founder & Visionary" },
    { name: "Jane Doe", role: "Creative Director" },
    { name: "John Smith", role: "Head of Architecture" },
    { name: "Amina Lee", role: "Marketing Strategist" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-primary dark:text-accent mb-12">
        Meet Our Team
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-20 w-20 mx-auto bg-gray-300 dark:bg-gray-600 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-primary dark:text-accent">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Team;
