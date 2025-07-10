import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-600  text-xl roboto-condensed font-bold border-b-2 border-red-600"
      : "text-black  text-xl roboto-condensed font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:transition-colors hover:duration-200";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl roboto-condensed1 font-extrabold text-[#191818] tracking-tight">PLAYMATCH</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/sports" className={navLinkClass}>Sports</NavLink>
            <NavLink to="/about" className={navLinkClass}>Explore</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={`${navLinkClass}`}>Home</NavLink>
          <NavLink to="/about" className={`${navLinkClass}`}>About</NavLink>
          <NavLink to="/services" className={`${navLinkClass}`}>Services</NavLink>
          <NavLink to="/contact" className={`${navLinkClass}`}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
