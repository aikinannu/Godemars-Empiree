import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-yellow-400 hover:text-white transition duration-300"
        >
          Godemar’s Empire
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {!user ? (
            <>
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link to="/purpose" className="hover:text-yellow-400 transition">Purpose</Link>
              <Link to="/careers" className="hover:text-yellow-400 transition">Careers</Link>
              <Link
                to="/login"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
              <Link to="/profile" className="hover:text-yellow-400 transition">Profile</Link>
              <Link to="/careers" className="hover:text-yellow-400 transition">
                Careers & Job Offers
              </Link>
              <Link to="/vision" className="hover:text-yellow-400 transition">Vision</Link>
              <Link to="/team" className="hover:text-yellow-400 transition">Team</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
              <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-yellow-400 text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-3">
          {!user ? (
            <>
              <Link to="/" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Home</Link>
              <Link to="/about" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">About</Link>
              <Link to="/purpose" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Purpose</Link>
              <Link to="/careers" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Careers</Link>
              <Link to="/login" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Login</Link>
              <Link to="/signup" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Dashboard</Link>
              <Link to="/profile" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Profile</Link>
              <Link to="/careers" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">
                Careers & Job Offers
              </Link>
              <Link to="/vision" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Vision</Link>
              <Link to="/team" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Team</Link>
              <Link to="/contact" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">Contact</Link>
              <Link to="/about" onClick={toggleMobileMenu} className="block hover:text-yellow-400 transition">About</Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="w-full bg-yellow-400 text-black py-2 rounded-full hover:bg-yellow-500 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;