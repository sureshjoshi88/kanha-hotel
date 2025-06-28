import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { memo } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active link style
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'hover:text-blue-600';

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="w-full bg-white shadow-md relative">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 md:px-10 py-2">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-10 md:h-16 md:w-16 rounded" />
        </NavLink>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-800">
            <FaBars />
          </button>
        </div>

        {/* Contact Section (desktop only) */}
        <div className="hidden md:block w-4/5 text-right bg-blue-600 text-white rounded-tl-[60px] px-3 py-2">
          <span className="text-sm me-4">Toll Free: 80058-11030</span>
          <button
            className="ml-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-md text-sm font-medium"
            type="button"
          >
            Quick Enquiry
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-wrap justify-start gap-6 px-10 py-3 font-semibold text-lg bg-white">
        <NavLink to="/" className={navClass}>Home</NavLink>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-blue-600 flex items-center gap-1"
          >
            Rooms & Suites
            <svg className="w-3 h-3 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute top-6 left-0 bg-white shadow-lg rounded-md w-48 z-10">
              <li><NavLink to="/deluxroom" className={navClass}>Deluxe Rooms</NavLink></li>
              <li><NavLink to="/deluxroom" className={navClass}>Deluxe Suites</NavLink></li>
              <li><NavLink to="/modern" className={navClass}>Modern Luxury Rooms</NavLink></li>
              <li><NavLink to="/bestcozy" className={navClass}>Best Cozy Comfort Rooms</NavLink></li>
            </ul>
          )}
        </div>

        <NavLink to="/dining" className={navClass}>Dining</NavLink>
        <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
        <NavLink to="/menu" className={navClass}>Menu</NavLink>
        <NavLink to="/blog" className={navClass}>Blog</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <img src={logo} alt="Logo" className="w-10 rounded" />
          <button onClick={toggleMobileMenu} className="text-xl text-gray-700">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-base font-semibold">
          <NavLink to="/" className={navClass} onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/deluxroom" className={navClass} onClick={toggleMobileMenu}>Deluxe Rooms</NavLink>
          <NavLink to="/modern" className={navClass} onClick={toggleMobileMenu}>Modern Rooms</NavLink>
          <NavLink to="/dining" className={navClass} onClick={toggleMobileMenu}>Dining</NavLink>
          <NavLink to="/gallery" className={navClass} onClick={toggleMobileMenu}>Gallery</NavLink>
          <NavLink to="/menu" className={navClass} onClick={toggleMobileMenu}>Menu</NavLink>
          <NavLink to="/blog" className={navClass} onClick={toggleMobileMenu}>Blog</NavLink>
          <NavLink to="/about" className={navClass} onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="/contact" className={navClass} onClick={toggleMobileMenu}>Contact</NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
};

export default memo(Navbar);
