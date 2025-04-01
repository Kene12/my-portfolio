"use client";
import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("th");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "th" ? "en" : "th"));
  };
  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold text-gray-600">
        🚀 Panithan<span className="text-purple-500">.dev</span>
      </div>
        <ul className="flex space-x-8 text-gray-600 font-semibold">
          <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link href="#about" className="hover:text-purple-600 ml-5">About</Link></li>
          <li><Link href="/portfolio" className="hover:text-purple-600 ml-5">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-purple-600 ml-5">Contact</Link></li>
          <li>
            <button
              onClick={toggleLanguage}
              className="text-sm px-3 py-1 border rounded-full hover:bg-purple-100 transition"
            >
              {language === "th" ? "🇹🇭 ไทย" : "🇬🇧 EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
