import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "src/assets/logo.png";
export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 3.5 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-center overflow-hidden">
      <AnimatePresence>
        {/* --- Logo Animation --- */}
        <motion.img
          key="logo"
          src={logo}
          alt="Godemar’s Empire Logo"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="w-44 sm:w-56 md:w-64 drop-shadow-[0_0_30px_#FFD700]"
        />

        {/* --- Slogan Fade-In --- */}
        <motion.p
          key="slogan"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-yellow-400 text-lg sm:text-xl font-medium mt-6 tracking-wide"
        >
          Coordinating Brilliance, Building Legacy
        </motion.p>

        {/* --- Loading Indicator --- */}
        <motion.div
          key="spinner"
          className="mt-10 border-4 border-gray-700 border-t-yellow-500 rounded-full w-12 h-12 animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        />
      </AnimatePresence>

      {/* --- Footer Note --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-6 text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Godemar’s Empire
      </motion.p>
    </div>
  );
}
