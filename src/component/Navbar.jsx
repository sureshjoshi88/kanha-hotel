import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dynamic class for active/inactive NavLink
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'hover:text-blue-600';

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2">
        {/* Logo */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-10 md:h-16 md:w-16 rounded"
            />
          </NavLink>
        </div>

        {/* Top Contact Section */}
        <div className="w-full md:w-4/5 text-right bg-blue-600 text-white rounded-tl-[60px] px-3 py-2 mt-2 md:mt-0">
          <span className="text-sm me-4">Toll Free: 80058-11030</span>
          <button
            className="ml-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-md text-sm font-medium"
            type="button"
          >
            Quick Enquiry
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 px-4 py-3 font-semibold  text-lg bg-white">
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
    </div>
  );
};

export default Navbar;
