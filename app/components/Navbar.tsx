"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-600">
          🚀 Panithan<span className="text-purple-500">.dev</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-semibold">
          <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link href="/#about" className="hover:text-purple-600">About</Link></li>
          <li><Link href="/#portfolio" className="hover:text-purple-600">Portfolio</Link></li>
          <li><Link href="/#contact" className="hover:text-purple-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 text-gray-700 font-semibold space-y-2">
          <Link href="/" className="block hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#about" className="block hover:text-purple-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#portfolio" className="block hover:text-purple-600" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/#contact" className="block hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
