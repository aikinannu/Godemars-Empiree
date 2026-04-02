import React from "react";

export default function DivisionPage({ division, onBack }) {
  if (!division) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl font-bold mb-4">{division.label}</h2>
      <p className="mb-6 text-gray-700">{division.tagline}</p>
      <button
        onClick={onBack}
        className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        Back
      </button>
    </div>
  );
}
