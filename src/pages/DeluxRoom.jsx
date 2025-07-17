import React from 'react';
import { hotelRooms } from '../data/HotelData';
import { memo } from 'react';

const DeluxRoom = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Deluxe Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotelRooms.map((item, index) => (
          <div key={item.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-blue-600 font-bold text-lg">₹{item.pricePerNight}/night</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DeluxRoom);
