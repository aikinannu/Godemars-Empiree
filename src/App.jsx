// Single canonical App.jsx (one App, one default export)
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AuthProvider } from "./context/AuthContext.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Purpose from "./pages/Purpose";
import Team from "./pages/Team";
import Vision from "./pages/Vision";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed.jsx";

import {
  Home as HomeIcon,
  Info,
  Briefcase,
  Eye,
  Users,
  Mail,
  LogOut,
  LayoutDashboard,
  Menu,
} from "lucide-react";

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageVariants}><About /></motion.div>} />
        <Route path="/domains" element={<motion.div variants={pageVariants}><Domains /></motion.div>} />
        <Route path="/purpose" element={<motion.div variants={pageVariants}><Purpose /></motion.div>} />
        <Route path="/team" element={<motion.div variants={pageVariants}><Team /></motion.div>} />
        <Route path="/vision" element={<motion.div variants={pageVariants}><Vision /></motion.div>} />
        <Route path="/careers" element={<motion.div variants={pageVariants}><Careers /></motion.div>} />
        <Route path="/contact" element={<motion.div variants={pageVariants}><Contact /></motion.div>} />
        <Route path="/login" element={<motion.div variants={pageVariants}><Login /></motion.div>} />
        <Route path="/signup" element={<motion.div variants={pageVariants}><Signup /></motion.div>} />
        <Route path="/feed" element={<motion.div variants={pageVariants}><Feed /></motion.div>} />
        <Route path="*" element={<motion.div variants={pageVariants}><NotFound /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !showSearch) {
        e.preventDefault();
        setShowSearch(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === "Escape") setShowSearch(false);
    };

    const checkEnvironment = () => {
      const isMobile = window.innerWidth <= 768;
      const isDesktopApp = navigator.userAgent.includes("Electron");
      const isMobileApp = navigator.userAgent.includes("ReactNative");
      if (isMobileApp || isDesktopApp) setShowFooter(false);
      else if (isMobile) setShowFooter(false);
      else setShowFooter(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", checkEnvironment);
    checkEnvironment();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkEnvironment);
    };
  }, [showSearch]);

  return (
    <AuthProvider>
      <Router>
        <Navbar onSearchClick={() => setShowSearch(true)} />
        {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}

        <div className="pt-16 pb-40 bg-black dark:bg-gray-900">
          <AnimatedRoutes />
        </div>

        {showFooter && <Footer />}
      </Router>
    </AuthProvider>
  );
}

export default App;
