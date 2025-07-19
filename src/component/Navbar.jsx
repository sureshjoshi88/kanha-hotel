import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { memo } from 'react';
import { useTheme } from '../themeContext/UseTheme';
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useForm } from 'react-hook-form'
import { TiDelete } from "react-icons/ti";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const Navbar = () => {

    const bookingSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number is too long")
      .regex(/^[0-9]+$/, "Phone number must contain only digits"),    checkin: z.string().min(1, "Check-in date is required"),
    checkout: z.string().min(1, "Check-out date is required"),
    guests: z
      .number({ invalid_type_error: "Please enter number of guests" })
      .min(1, "At least 1 guest required"),
    roomType: z.enum(["Standard", "Deluxe", "Suite"], {
      required_error: "Please select a room type",
    }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({resolver:zodResolver(bookingSchema), defaultValues: {
      guests: 1,
    },})

  const onSubmit = (data) => {
    console.log("Booking Data:", data)
    alert("Booking Successful!")
    reset() // Clear the form
  }


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form,setFrom]  = useState(false)
  const { theme, setTheme } = useTheme()

const togleForm = ()=> setFrom(!form)

  const hanldeTheme = () => {
    if (theme === 'light') {
      document.body.style.backgroundColor = "#1A1A2E"
      document.body.style.color = "white"
      setTheme('dark')
    } else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setTheme('light')

    }
  }

  // Active link style
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'hover:text-blue-600';

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    
    <div className='w-full shadow-md relative'>
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 md:px-10 py-2">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-10 md:h-16 md:w-16 rounded-full" />
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
            onClick={togleForm}
          >
            Quick Enquiry
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-wrap justify-start gap-6 px-10 py-3 font-semibold text-lg ">
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
            <ul className="absolute top-6 left-0 bg-white shadow-lg rounded-md w-60 z-10 p-2">
              <li><NavLink to="/deluxroom" className={navClass}>Deluxe Rooms</NavLink></li>
              {/* <li><NavLink to="/deluxroom" className={navClass}>Deluxe Suites</NavLink></li> */}
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
          <div>
          {theme==="light"?  <button onClick={hanldeTheme} className='font-medium text-2xl cursor-pointer'><FaMoon/></button>
            :<button onClick={hanldeTheme} className='font-medium text-2xl cursor-pointer'><IoSunny/></button>}
          </div>

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
           <div>
          {theme==="light"?  <button onClick={hanldeTheme} className='font-medium text-2xl cursor-pointer'><FaMoon/></button>
            :<button onClick={hanldeTheme} className='font-medium text-2xl cursor-pointer'><IoSunny/></button>}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      
     { form&& <div className="left-1/2 -translate-x-1/2 top-15 overflow-y-scroll md:h-140 mb-4   absolute w-100  bg-white p-6  shadow-md rounded-xl side-line">
     <div className='text-end p-0'>
     <button  onClick={togleForm} className='rounded-full text-3xl cursor-pointer hover:bg-red-500 hover:text-white'><TiDelete />
</button>
     </div>
      <h2 className="text-2xl font-semibold mb-2 text-center">Hotel Booking Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      {/* Name */}
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border rounded-md p-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-md p-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

        <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full border rounded-md p-2"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Check-in Date */}
      <div>
        <label className="block mb-1 font-medium">Check-in Date</label>
        <input
          type="date"
          {...register("checkin")}
          className="w-full border rounded-md p-2"
        />
        {errors.checkin && (
          <p className="text-red-500 text-sm">{errors.checkin.message}</p>
        )}
      </div>

      {/* Check-out Date */}
      <div>
        <label className="block mb-1 font-medium">Check-out Date</label>
        <input
          type="date"
          {...register("checkout")}
          className="w-full border rounded-md p-2"
        />
        {errors.checkout && (
          <p className="text-red-500 text-sm">{errors.checkout.message}</p>
        )}
      </div>

      {/* Guests */}
      <div>
        <label className="block mb-1 font-medium">Number of Guests</label>
        <input
          type="number"
          min="1"
          {...register("guests", { valueAsNumber: true })}
          className="w-full border rounded-md p-2"
        />
        {errors.guests && (
          <p className="text-red-500 text-sm">{errors.guests.message}</p>
        )}
      </div>

      {/* Room Type */}
      <div>
        <label className="block mb-1 font-medium">Room Type</label>
        <select
          {...register("roomType")}
          className="w-full border rounded-md p-2"
        >
          <option value="">-- Select --</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
        {errors.roomType && (
          <p className="text-red-500 text-sm">{errors.roomType.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </form>
    </div>}
    </div>
  );
};

export default memo(Navbar);