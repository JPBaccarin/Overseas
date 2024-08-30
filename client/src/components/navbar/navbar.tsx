"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="sm:  flex justify-between items-center">
        <Link
          href="/"
          className="text-background text-xl font-bold hover:scale-110 duration-300 ease-in-out "
        >
          Overseas
        </Link>
        <div className="hidden sm:flex space-x-4">
          <Link href="/" className="text-background hover:text-muted">
            Country Details
          </Link>

          <Link href="/comparison" className="text-background hover:text-muted">
            Compare Countries
          </Link>
        </div>
        <div className="sm:hidden">
          <button className="text-background focus:outline-none border rounded-sm" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <Link href="/" className="block text-background p-2 hover:text-muted">
            Country Details
          </Link>

          <Link href="/comparison" className="block text-background p-2 hover:text-muted">
            Compare Countries
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
