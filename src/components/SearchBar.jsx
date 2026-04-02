// src/components/SearchBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Domains", path: "/domains" },
  { name: "Purpose", path: "/purpose" },
  { name: "Team", path: "/team" },
  { name: "Vision", path: "/vision" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = pages.filter((page) =>
        page.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const handleKeyDown = (e, path) => {
    if (e.key === "Enter") {
      navigate(path);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-start justify-center p-4 md:p-8">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-xl shadow-lg p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
          aria-label="Close search"
        >
          <X size={24} />
        </button>

        {/* Search Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
          aria-label="Search pages"
        />

        {/* Search Results */}
        {results.length > 0 && (
          <ul className="mt-4 max-h-64 overflow-y-auto">
            {results.map((page) => (
              <li key={page.path}>
                <Link
                  to={page.path}
                  onClick={onClose}
                  onKeyDown={(e) => handleKeyDown(e, page.path)}
                  className="block px-4 py-2 rounded hover:bg-yellow-100 dark:hover:bg-gray-700"
                  tabIndex={0}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
