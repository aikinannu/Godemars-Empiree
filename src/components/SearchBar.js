// src/components/SearchBar.js
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

export { default } from "./SearchBar.jsx";
