// src/pages/Feed.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const navigate = useNavigate();
  const [posts] = useState([
    { id: 1, author: "Godemar", content: "Welcome to your creative empire!" },
    { id: 2, author: "EmpireBot", content: "Let’s build brilliance together 🌟" },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-opacity-50 backdrop-blur-sm"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-yellow-500">
          Godemar’s Feed
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => alert("Feature coming soon!")}
            className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition"
          >
            <PlusCircle size={18} /> New Post
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </motion.header>

      {/* User Intro */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-12"
      >
        <img
          src="/logo192.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-lg mb-4"
        />
        <h2 className="text-2xl font-semibold text-yellow-400">Welcome Back, Creator!</h2>
        <p className="text-gray-400 mt-2 text-sm">
          Explore the latest posts and community updates.
        </p>
      </motion.section>

      {/* Feed Posts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="max-w-2xl mx-auto mt-10 px-4 space-y-6"
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-500 transition"
          >
            <h3 className="text-yellow-500 font-semibold">{post.author}</h3>
            <p className="text-gray-300 mt-2">{post.content}</p>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-16 pb-6 text-sm">
        © {new Date().getFullYear()} Godemar’s Empire — Connected in Vision & Purpose.
      </footer>
    </div>
  );
}
