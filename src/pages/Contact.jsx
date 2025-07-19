import React, { useState } from 'react'
import { memo } from 'react';
import formimg from "../images/from1.png"
import { useTheme } from '../themeContext/UseTheme';


const Contact = () => {
  const {theme,setTheme} = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking submitted!");
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: 'standard',
    });
  };

  return (
    <div className=" grid md:grid-cols-2 gap-5 px-4">
       <div className='w-full mt-2'>
        <img  src={formimg} alt="" />
      </div>
      <div className={`w-full mt-2 ${theme==='light'?"bg-white":'bg-black text-white'}`}>
      <form onSubmit={handleSubmit} className="p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Hotel Booking Form</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="number"
            name="guests"
            min="1"
            placeholder="No. of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Suite</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 cursor-pointer font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </form>
        </div>
       
    </div>
  );
}

export default memo(Contact)
