import React from "react";

export default function Landing({ onEnter }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-gray-900 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Godemar’s Empire</h1>
      <p className="text-lg mb-8">A multi-dimensional enterprise of creativity and innovation.</p>
      <button
        onClick={onEnter}
        className="px-6 py-3 bg-accent rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Enter
      </button>
    </div>
  );
}
